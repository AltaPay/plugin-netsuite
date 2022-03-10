// @module DC.IntegrateApplePay.ApplePay
define('DC.IntegrateApplePay.ApplePay.View', [
	'dc_integrateapplepay_applepay.tpl',
	'DC.IntegrateApplePay.ApplePay.Model',
	'Backbone',
	'LiveOrder.Model',
	'jQuery'
], function (
	dc_integrateapplepay_applepay_tpl, ApplePayModel, Backbone, LiveOrderModel, jQuery
) {
	'use strict';

	// @class DC.IntegrateApplePay.ApplePay.View @extends Backbone.View
	return Backbone.View.extend({

		template: dc_integrateapplepay_applepay_tpl,
		initialize: function (options) {
			this.container = options.container;
			var checkout = this.container.getComponent("Checkout");
			this.liveOrderModel = LiveOrderModel.getInstance();

			var _this = this;
			checkout.getCurrentStep().then(function (step) {
				_this.stepInfo = step;
			});
			$.ajax({
				url: "https://applepay.cdn-apple.com/jsapi/v1/apple-pay-sdk.js",
				dataType: "script",
				success: function () {
					console.log("loaded");
				}
			});
		},
		events: {
			'click #altapay-apple-pay-btn': 'applePayClicked'
		},
		applePayClicked: function () {
			const self = this;
			const supportedNetworks = this.container.getConfig().ApplePay.supportedNetworks.split(",").map((val) => val.trim()) || [];
			const request = {
				"countryCode": this.container.getConfig().ApplePay.countryCode.toUpperCase() || "US",
				"currencyCode": this.container.getConfig().ApplePay.currencyCode.toUpperCase() || "USD",
				"supportedNetworks": supportedNetworks,
				"total": {
					"label": this.container.getConfig().ApplePay.amountLabel || "AltaPay Apple Charge",
					"type": "final",
					"amount": this.liveOrderModel.get('summary').total
				}
			};

			if(this.container.getConfig().ApplePay.supports3DS){				
				request['merchantCapabilities'] = ["supports3DS"];
			}

			const session = new ApplePaySession(3, request);

			session.onvalidatemerchant = async event => {

				var settings = {
					"validationUrl": event.validationURL
				};

				var applePayModel = new ApplePayModel();
				applePayModel.fetch({
					async: false,
					data: settings
				}).done((response) => {
					if (response && response.response !== undefined) {
						let parseJson = self.parseXmlToJson(response.response);

						let altaPaySession = parseJson.APIResponse.Body.ApplePaySession.replace("<![CDATA[", "").replace("]]>", "");

						if (parseJson && parseJson.APIResponse && parseJson.APIResponse.Body.Result.toLowerCase() === 'success') {
							session.completeMerchantValidation(JSON.parse(altaPaySession));
						} else {
							console.log("response", "couldn't validate session");
						}
					}
				}).fail((err) => {
					console.log("error:", err);
				});
			};

			session.onpaymentmethodselected = event => {
				// Define ApplePayPaymentMethodUpdate based on the selected payment method.
				// No updates or errors are needed, pass an empty object.

				let total = {
					"label": this.container.getConfig().ApplePay.amountLabel || "AltaPay Apple Charge",
					"type": "final",
					"amount": this.liveOrderModel.get('summary').total
				}

				const update = { "newTotal": total };
				session.completePaymentMethodSelection(update);
			};

			session.onshippingmethodselected = event => {
				// Define ApplePayShippingMethodUpdate based on the selected shipping method.
				// No updates or errors are needed, pass an empty object. 
				const update = {};
				session.completeShippingMethodSelection(update);
			};

			session.onshippingcontactselected = event => {
				// Define ApplePayShippingContactUpdate based on the selected shipping contact.
				const update = {};
				session.completeShippingContactSelection(update);
			};

			session.onpaymentauthorized = event => {
				// Define ApplePayPaymentAuthorizationResult

				const result = {
					"status": ApplePaySession.STATUS_SUCCESS
				};

				session.completePayment(result);

				var cart = this.container.getComponent('Cart');

				var data = {
					fieldId: "custbody_applepay_payment_token",
					type: "string",
					value: JSON.stringify(event.payment.token)
				}

				cart.setTransactionBodyField(data).then(function () {
					cart.submit().then(function (response) {
						if (response.confirmation.statuscode === "success") {
							window.location.hash = "confirmation?force=true&last_order_id=" + response.confirmation.internalid;
						} else {
							console.log('Apple Pay payment failed.');
							alert("Apple Pay payment failed.");
						}
					});
				}).fail(function (error) {
					alert("Apple Pay payment failed.");
				});
			};

			session.oncancel = event => {
				alert("Apple Pay payment has been canceled.");
			};

			session.begin();
		},
		bindings: {},
		childViews: {},
		parseXmlToJson: function (xml) {
			const json = {};
			for (const res of xml.matchAll(/(?:<(\w*)(?:\s[^>]*)*>)((?:(?!<\1).)*)(?:<\/\1>)|<(\w*)(?:\s*)*\/>/gm)) {
				const key = res[1] || res[3];
				const value = res[2] && this.parseXmlToJson(res[2]);
				json[key] = ((value && Object.keys(value).length) ? value : res[2]) || null;

			}
			return json;
		}

		//@method getContext @return DC.IntegrateApplePay.ApplePay.View.Context
		,
		getContext: function getContext() {
			var _this = this;
			_this.isReviewPage = false;

			var interval = setInterval(() => {
				if (_this.stepInfo !== undefined) {
					_this.render();
					clearInterval(interval);
				}
			}, 500);
			if (this.stepInfo !== undefined) {
				_this.isReviewPage = (_this.stepInfo.step_group_name.toLowerCase() === "review") ? true : false;
				let paymentMethodName = jQuery("[data-view='PaymentMethods.Collection']").find(".global-views-format-payment-method").html().trim();
				_this.applepay = (paymentMethodName.toLowerCase().indexOf('applepay') !== -1) ? true : false;
				// console.log(paymentMethodName, _this.applepay, this.liveOrderModel.get('paymentmethods'));
				clearInterval(interval);
			}

			if (_this.applepay && _this.isReviewPage) {
				jQuery("[data-action='submit-step']").hide();
				jQuery(".order-wizard-step-message ").hide();
			} else {
				jQuery("[data-action='submit-step']").show();
				jQuery(".order-wizard-step-message ").show();
			}

			return {
				displayApplePay: _this.isReviewPage && _this.applepay,
				amount: this.liveOrderModel.get('summary').total
			};
		}
	});
});