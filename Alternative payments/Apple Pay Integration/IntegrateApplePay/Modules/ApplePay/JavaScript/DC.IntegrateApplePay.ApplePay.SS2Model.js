// Model.js
// -----------------------
// @module Case
define("DC.IntegrateApplePay.ApplePay.SS2Model", ["Backbone", "Utils"], function(
    Backbone,
    Utils
) {
    "use strict";

    // @class Case.Fields.Model @extends Backbone.Model
    return Backbone.Model.extend({
        //@property {String} urlRoot
        urlRoot: Utils.getAbsoluteUrl(
            getExtensionAssetsPath(
                "Modules/ApplePay/SuiteScript2/ApplePay.Service.ss"
            ),
            true
        )
});
});
