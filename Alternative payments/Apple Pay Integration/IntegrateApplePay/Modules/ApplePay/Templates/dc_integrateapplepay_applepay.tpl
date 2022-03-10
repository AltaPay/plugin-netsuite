<div class="altapay-applepay-payment-method">
    {{#if showTitle}}
    <h3 class="alta-pay-applepay-payment-method">Apple Pay</h3>
    {{/if}}
    <style>
        apple-pay-button {
            --apple-pay-button-width: 200px;
            --apple-pay-button-height: 50px;
            --apple-pay-button-border-radius: 3px;
            --apple-pay-button-padding: 0px 0px;
            --apple-pay-button-box-sizing: border-box;
        }
    </style>
    {{#if displayApplePay}}
    <div id="altapay-apple-pay-btn">
        <apple-pay-button buttonstyle="black" type="pay" locale="en"></apple-pay-button>
        <span></span>
    </div>
    {{/if}}
    <p class="order-wizard-paymentmethod-creditcard-module-learn-more"> <i
            class="order-wizard-paymentmethod-creditcard-module-learn-more-icon"></i>
        {{ translate 'Learn more about <a class="order-wizard-paymentmethod-creditcard-module-learn-more-link"
            data-action="show-safe-secure-info"> safe and secure </a> shopping' }}
    </p>
</div>