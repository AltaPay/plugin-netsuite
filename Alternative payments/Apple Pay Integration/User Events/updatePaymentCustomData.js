/**
 *@NApiVersion 2.x
 *@NScriptType UserEventScript
 */
define(['N/log'],
    function (log) {
        function beforeSubmit(context) {
            var operation = context.type;
            if (operation === context.UserEventType.CREATE) {
                var new_record = context.newRecord;
                new_record.setValue('paymentcustomdata',new_record.getValue('custbody_applepay_payment_token'));
            }
        }

        return {
            beforeSubmit: beforeSubmit
        }
    }
);