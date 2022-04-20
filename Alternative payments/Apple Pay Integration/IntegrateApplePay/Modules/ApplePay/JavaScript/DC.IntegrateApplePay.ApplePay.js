
define(
	'DC.IntegrateApplePay.ApplePay', [
	'DC.IntegrateApplePay.ApplePay.View',
	'underscore',
	'jQuery'
], function (ApplePayView, _, jQuery) {
	'use strict';

	return  {
		mountToApp: function mountToApp (container){
			var checkout = container.getComponent('Checkout');

			checkout.addChildView('PaymentMethods.Collection', function () {
				return new ApplePayView({ container: container });
			});

			checkout.on("afterShowContent", function () {

				var applepay = _.find(SC.ENVIRONMENT.siteSettings.paymentmethods, (paymentmethod) => {
					return paymentmethod.name.toLowerCase().indexOf("apple") !== -1;
				});

				var appleDataId = "external_checkout_" + applepay.key;

				if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) === false && appleDataId) {
					jQuery('a[data-id="' + appleDataId + '"]').closest('[class^=backbone-collection-view-cell-span]').hide();
				}

				document.addEventListener('click', function (e) {

					if (e.target && (e.target.className.indexOf("order-wizard-paymentmethod-selector-module-button") !== -1 || e.target.className.indexOf("order-wizard-paymentmethod-external-module") !== -1)) {

						var selectedPaymentMethod = jQuery("input[name='paymentmethod-external-option']:checked").data("id");

						if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) === false && appleDataId) {
							jQuery('a[data-id="' + appleDataId + '"]').closest('[class^=backbone-collection-view-cell-span]').hide();
						}

						if (appleDataId === selectedPaymentMethod) {
							jQuery('.order-wizard-paymentmethod-others-module-description').hide();
						} else {
							jQuery('.order-wizard-paymentmethod-others-module-description').show();
						}
					}
				});
			});
		}
	};
});
