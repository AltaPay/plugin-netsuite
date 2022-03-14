
function service(request, response)
{
	'use strict';
	try 
	{
		require('DC.IntegrateApplePay.ApplePay.ServiceController').handle(request, response);
	} 
	catch(ex)
	{
		console.log('DC.IntegrateApplePay.ApplePay.ServiceController ', ex);
		var controller = require('ServiceController');
		controller.response = response;
		controller.request = request;
		controller.sendError(ex);
	}
}