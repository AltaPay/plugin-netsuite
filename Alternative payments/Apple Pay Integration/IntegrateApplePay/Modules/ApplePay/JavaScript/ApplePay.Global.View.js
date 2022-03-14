define('DC.IntegrateApplePay.ApplePay.Global.View', ['underscore', 'jQuery'], function (
	_, jQuery
) {
	'use strict';

	return Backbone.View.extend({
		initialize: function (options) {
			const applepay = _.find(SC.ENVIRONMENT.siteSettings.paymentmethods, (paymentmethod) => {
				return paymentmethod.name.toLowerCase().indexOf("applepay") !== -1;
			})
			console.log(applepay);
			if(applepay){
				let dataId = "external_checkout_"+applepay.key;

				jQuery('body').on('change input[name="paymentmethod-external-option"]', function(){
					if(jQuery(this).data('id') === dataId){
						console.log("applePay selected");
					}
					console.log("dataId", dataId);
				});

			}
		}

		,events: {
			"change input.order-wizard-paymentmethod-external-module-radio": "countrySelected"
		},
	
		countrySelected: function(){
			alert("You can procceed!!!");
		}

		,bindings: {}

		,childViews: {}

		,render: function(){
		}

		,getContext: function getContext() {
			return {};
		}
	});
});