define([
    'jquery',
    'uiComponent',
    'Magento_Checkout/js/model/quote',
    'Magento_Checkout/js/model/step-navigator'
], function ($, Component, quote, stepNavigator) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'GhostUnicorns_AddBillingAddressInformationToCheckout/billing-information'
        },

        /**
         * @return {Boolean}
         */
        isVisible: function () {
            return !quote.isVirtual() && stepNavigator.isProcessed('shipping');
        },
    });
});
