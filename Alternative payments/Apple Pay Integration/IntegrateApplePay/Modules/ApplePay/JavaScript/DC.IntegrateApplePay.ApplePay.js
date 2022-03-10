
define(
	'DC.IntegrateApplePay.ApplePay'
,   [
		'DC.IntegrateApplePay.ApplePay.View'
	,	'DC.IntegrateApplePay.ApplePay.Global.View'
	,	'underscore'
	,	'jQuery'
	]
,   function (
		ApplePayView
	,	ApplePayGlobalView
	,	_
	,	jQuery
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container){
			var checkout = container.getComponent('Checkout');
			var layout = container.getComponent('Layout');

			layout.on("afterShowContent", function(){
				layout.addChildView('Header.Logo', function(){
					return new ApplePayGlobalView({container: container});
				})
			})

			checkout.addChildView('PaymentMethods.Collection', function(){
				return new ApplePayView({container: container});
			})
		}
	};
});
