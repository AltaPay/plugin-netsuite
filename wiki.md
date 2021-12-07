# AltaPay NetSuite Plugin

Through the partnership of AltaPay and NetSuite, we have made it much easier for you as merchant/developer to receive secure payments in your web shop. AltaPay is fully integrated with NetSuite platform via a bundle. 

All you have to do is to install the bundle, which will only take a few minutes to complete. 

# Installing NetSuite

Installing this bundle will enable your web site to handle card transactions through AltaPay’s gateway.

Be aware that due to NetSuite limitations, if NetSuite is used as a front end, customers do not get informed if the transaction declines/fails. Only the merchant will be notified.

There are up to three steps involved in installing NetSuite:

- Step 1. (required) - Install the bundle
- Step 2. (required) - Get access to the Testgateway 
- Step 3. (optional) – if you need fraud protection. You must have an agreement with an external fraud partner, such as SCI ReD or MaxMind to use this feature.

**Install the Bundle**

**Prerequisites**

The bundle ‘Payment Gateways’ (ID 47196) needs to be installed on the merchant NetSuite account.

![search_and_install_module](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/Installation/search_and_install_module.jpg)

1. Select the account, where you want to install AltaPay
2. Go to: Customization > SuiteBundler > Search & Install bundles
3. In the keywords field enter ‘AltaPay’
4. Select ‘AltaPay’ (Bundle ID: 92258) 
5. Click Install.
6. Follow the instructions. Note that this is a managed bundle and updates for the bundle are pushed from AltaPay.

**Note**<br>The procedure for MO/TO is the same as the above. 

**Enable the bundle**<br>
You have now installed the bundle, but before continuing the configuration you need to be sure that the bundle is enabled.

1. Go to: Customization > Plug-ins > Manage Plug-ins.

![manage_plugins](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/Installation/manage_plugins.jpg)

2. Check if the AltaPay bundle is enabled. If not, check the checkbox.

# Configuring the NetSuite Plugin

You can configure the NetSuite plugin to meet your (merchant’s) needs. This includes adding payment methods and configuring payments.

**Prerequisites**

AltaPay provides the following, and they will be required to configure the plugin.

- AltaPay credentials
	- Username
	- Password

- AltaPay gateway information

	- Terminal
	- Gateway
	
**Adding a payment method**

The standard configuration connects the bundle with the test gateway. Follow the below steps to connect the bundle with AltaPay’s production gateway.

1. Go to Customization > Plug-ins > Plug-in implementations.
2. Click on ‘config.js’ in the AltaPay bundle.
3. Click ‘Edit’ and replace 'testgateway.altapaysecure.com' with the gateway information for your production environment (provided by AltaPay). Do not include ’https’.
4. Press Save.

![configuring_edit](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/Configuration/configuration_edit.jpg)
![configuring_save](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/Configuration/	)

**Credit/debit cards**

In this step you add card as payment method in the web shop. You must complete the steps for each currency.

1. Go to setup > Accounting > Payment Processing Profiles > ‘Add AltaPay Plugin Profile’.

![altapay_plugin_profile](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/Configuration/altapay_plugin_profile.jpg)

2. Complete the details, using the notes below for guidance.


<table>
<tbody>
  <tr>
    <td><strong>WEB SITE</strong></td>
    <td>Select which web sites the bundle should cover.</td>
  </tr>
  <tr>
    <td><strong>NAME</strong></td>
    <td>This is for internal use and will not be shown to customers. We recommend that you use ‘Payment Method - Currency’ (e.g. Credit Card - EUR).</td>
  </tr>
  <tr>
    <td><strong>Subsidiary</strong></td>
    <td>Select from the drop-down list.</td>
  </tr>
  <tr>
    <td><strong>CHARGE CURRENCIES</strong></td>
    <td>This must correspond with the currency of the terminal. You can only select one currency.</td>
  </tr>
  <tr>
    <td><strong>Settlement Bank account</strong></td>
    <td>This is related to accounting and will not affect the settlement agreement with the acquirer.</td>
  </tr>
  <tr>
    <td><strong>Authentication Credentials</strong></td>
    <td>Enter the username and password. You will only be able to see asterisks, since they are password fields.</td>
  </tr>
  <tr>
    <td><strong>AltaPay configuration</strong></td>
    <td>Add terminal.</td>
  </tr>
  <tr>
    <td><strong>Alternative payment</strong></td>
    <td>Leave the checkbox unchecked.</td>
  </tr>
  <tr>
    <td><strong>Gateway Request Types</strong></td>
    <td>Add the types that are needed for the terminal.</td>
  </tr>
</tbody>
</table>


3. Press Save.
4. Go to Setup > Accounting > Accounting lists > New > Select ‘Payment Method’.

![select_payment_method](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/Configuration/select_payment_method.jpg)

5. Complete the details, using the screenshot and notes below for guidance.

![complete_payment_method_details](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/Configuration/complete_payment_method_details.png)

<table>
<tbody>
  <tr>
    <td><strong>PAYMENT METHOD</strong></td>
    <td>Name the payment method. This will be shown in the web shop.</td>
  </tr>
  <tr>
    <td><strong>CREDIT CARD</strong></td>
    <td>Select this checkbox.</td>
  </tr>
  <tr>
    <td><strong>SUPPORTING MERCHANT ACCOUNTS</strong></td>
    <td>Select the Payment processing profile you want to match to the payment method. (NAME in the Payment Processing Profile screen).
	</td>
  </tr>
  <tr>
    <td><strong>Flag</strong></td>
    <td>web/standard.</td>
  </tr>
  <tr>
    <td><strong>URL</strong></td>
    <td>Place the icon in the File Cabinet and link to the icon or link to an icon on the internet
.</td>
  </tr>
</tbody>
</table>

6. Press Save.

Next, you need to configure the payments. **This is mandatory if CVC needs to be enabled for card payments. This is highly recommended and may be required by the acquirer.**

1. Go to Setup > Accounting > Accounting preferences > Click the tab ‘Items/Transactions’ .

![preferences_item_transactions](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/Configuration/preferences_item_transactions.jpg)

2. Check ‘USE CARD SECURITY CODE FOR CREDIT CARD TRANSACTIONS’ under the ‘Payment Processing’ section
3. Press Save.

Now, enable the payments on the website.

1. Go to: Setup > Site Builder or Suite Commerce Advanced > Set Up Website
2. Click edit on the website for which you want to enable payments.
3. Click the ‘Shopping’ tab and check ‘REQUIRE AUTHORIZATION FOR CREDIT CARD TRANSACTIONS’.

![click_require_authorization](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/Configuration/click_require_authorization.jpg)

Press ‘Save’.

If the merchant has Suite Commerce Advanced version previous to Denali, you must enable support by completing these additional steps.

1. Download the zip file from the GitHub repository
2. Find the ‘Utils.js’ in the ‘SCA’ subfolder.
3. Replace ‘AltaPay CC’,line no: 176, with the name of the payment method created earlier. The name is case sensitive.
4. Go to: Documents > Files > File Cabinet
5. Go to: Web Site Hosting Files > Live Hosting Files > SSP Applications > NetSuite Inc. -Checkout 2.05.0 > Custom Checkout > js > src > core

![custom_checkout](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/Configuration/custom_checkout.jpg)

6. Click on ‘Add files’ and select the ‘Util.js’ that you modified.
7. Replace the ‘img/altapay.jpg’ with an image that represents the payment method. The image can be uploaded from here: Documents > Files > File Cabinet and navigate to Web Site Hosting Files > Live Hosting Files > SSP Applications > NetSuite Inc. - Checkout 2.05.0 > Custom Checkout -> img
8. Go to: Documents > Files > File Cabinet > Web Site Hosting Files > Live Hosting Files > SSP Applications > NetSuite Inc. - Checkout 2.05.0 > Custom Checkout > js > src > app > modules >
9. Click on New Folder > name it Altapay
10. Select SuiteCommerce Site Templates before saving the new folder in the TYPE dropdown

![suite_commerce](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/Configuration/suite_commerce.jpg)

11. Go to: Documents > Files > File Cabinet > Web Site Hosting Files > Live Hosting Files > SSP Applications > NetSuite Inc. - Checkout 2.05.0 > Custom Checkout > js > src > app > modules > Altapay
12. Click ‘Add files’ and select the ‘configuration.js’, that you modified
13. Go to: Documents > Files > File Cabinet > Web Site Hosting Files > Live Hosting Files > SSP Applications > NetSuite Inc. - Checkout 2.05.0 > Custom Checkout > js >
14. Click ‘DELETE FILES’ and remove the following files: ‘Application-xxxxx.js’ and ‘current.js’
15. Click ‘Edit’ for the ‘combiner.config’ Click on the ‘edit’ link

A popup opens > add the following string ’src/app/modules/Altapay/*.js’, as seen below

Input-files:      utils/BootUtilities.js utils/json2.js libs/require.js             libs/underscore.js

libs/jquery.js libs/backbone.js                 libs/backbone.validation.js libs/bootstrap.js

src/core/Documentation.js                    src/core/Utils.js src/core/ApplicationSkeleton.js

src/app/modules/BackToTop/*.js src/core/extras/*.js        src/app/Application.js

src/app/Configuration.js               src/app/ItemsKeyMapping.js src/app/modules/Account/*.js

src/app/modules/Address/*.js src/app/modules/AjaxRequestsKiller/*.js

src/app/modules/Cart/*.js src/app/modules/Content/*.js

src/app/modules/CMSadapter/*.js src/app/modules/CreditCard/*.js

src/app/modules/ErrorManagement/*.js src/app/modules/GoogleAnalytics/*.js

src/app/modules/GoogleUniversalAnalytics/*.js

src/app/modules/GoogleAdWords/*.js src/app/modules/Facets/*.js

src/app/modules/ItemDetails/*.js

src/app/modules/ItemOptionsHelper/*.js src/app/modules/LoginRegister/*.js

src/app/modules/Merchandising/*.js

src/app/modules/MultiCurrencySupport/*.js

src/app/modules/MultiHostSupport/*.js src/app/modules/NavigationHelper/*.js

src/app/modules/Order/*.js src/app/modules/OrderWizard/*.js src/app/modules/Profile/*.js

src/app/modules/SiteSearch/*.js src/app/modules/Session/*.js

src/app/modules/UrlHelper/*.js src/app/modules/User/*.js

src/app/modules/Altapay/*.js                      src/app/modules/Wizard/*.js

src/app/modules/CheckoutSkipLogin/*.js src/app/modules/BrontoIntegration/*.js Starter.js

Combined-file: Application.js

Keep-files: 1

Method: Minify

Referring-files: ../*.ssp

Version: 2

16. Save the file and make sure that the ’Application-xxxx.js’ and ’current.js’ files have been regenerated.

**Alternative payment methods**

If you support alternative payment methods (e.g. wallet, ePayment etc.), you can add the alternative web shop’s payment methods by follow the instructions below

>**Notes.**

>Alternative payment as gift cards and some invoice providers (Klarna and Arvato) are not supported. Alternative payments is only available for web shops using SiteBuilder and NOT Suite Commerce Advanced. Support for Suite Commerce Advanced web shops is available from NetSuite version 16.1. For each currency and payment method you need to go through steps described above.

>1. Go to setup > Accounting > Payment Processing Profiles > ‘Add AltaPay Plugin Profile’.
>2. Complete the details, using the screenshot and notes below for guidance.

>![altapay_plugin_profile_2](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/Configuration/altapay_plugin_profile_2.jpg)

<table>
<tbody>
  <tr>
    <td><strong>Web Site</strong></td>
    <td>Select which web sites the bundle should cover</td>
  </tr>
  <tr>
    <td><strong>Name</strong></td>
    <td>Add ‘Name’. This is for internal use and will not be shown to customers. We recommend to name it ‘Payment Method - Currency’ (e.g. Invoice – EUR)</td>
  </tr>
  <tr>
    <td><strong>Subsidiary</strong></td>
    <td>Select from the drop down list</td>
  </tr>
  <tr>
    <td><strong>Settlement Currency</strong></td>
    <td>Select from the drop down list</td>
  </tr>
  <tr>
    <td><strong>CHARGE CURRENCIES</strong></td>
    <td>This must correspond with the currency of the terminal. You can only select one currency</td>
  </tr>
  <tr>
    <td><strong>Settlement Bank account</strong></td>
    <td>This is related to accounting and will not affect the settlement agreement with the acquirer</td>
  </tr>
  <tr>
    <td><strong>Authentication Credentials</strong></td>
    <td>> Add username and password. You will only be able to see asterisks, since they are password fields</td>
  </tr>
  <tr>
    <td><strong>AltaPay configuration</strong></td>
    <td>Add terminal.</td>
  </tr>
  <tr>
    <td><strong>Alternative payments</strong></td>
    <td>Check this checkbox</td>
  </tr>
  <tr>
    <td><strong>Website</strong></td>
    <td>Type the index of the website, that the payment processing profile is related to. Default is 1</td>
  </tr>
  <tr>
    <td><strong>AVS Accept</strong></td>
    <td>Enter the AVS cases that should be accepted.

In order to control AVS cases, the checkbox “Enable AVS” must be clicked in the payment processing profile. Note that AVS must also be supported by the acquirer and is only supported by issuers in the US, Canada and UK.

Use uppercases and separate them by comma (e.g. A,B,D).

If an AVS result does not appear in Accept or Hold, the AVS result will be rejected and the order cancelled. If an AVS result is in both textboxes, the hold case has first priority.</td>
  </tr>
  <tr>
    <td><strong>AVS Hold</strong></td>
    <td>Enter the AVS cases that should be put on hold.

Use uppercases and separate them by comma (e.g. A,B,D).

If an AVS result does not appear in Accept or Hold, the AVS result will be rejected and the order cancelled. If an AVS result is in both textboxes, the hold case has first priority.</td>
  </tr>
</tbody>
</table>

3. Press Save.
4. Go to Setup > Accounting > Accounting lists > New
5. Select ‘Payment Method’.

![new_payment_methods](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/Configuration/new_payment_methods.jpg)

Complete the details, using the screenshot and the notes below for guidance.

<table>
<tbody>
  <tr>
    <td><strong>PAYMENT METHOD</strong></td>
    <td>Name the payment method. This will be shown in the web shop</td>
  </tr>
  <tr>
    <td><strong>EXTERNAL CHECKOUT</strong></td>
    <td>Check this checkbox</td>
  </tr>
  <tr>
    <td><strong>SUPPORTING MERCHANT ACCOUNTS</strong></td>
    <td>Select the Payment processing profile you defined earlier that you want to match the payment method with</td>
  </tr>
  <tr>
    <td><strong>COUNTRIES</strong></td>
    <td>Check ‘DISPLAY IN WEB SITE’</td>
  </tr>
  <tr>
</tbody>
</table>

6. Select the tab ‘Payment Visuals’
7. Add flag, and URL with a picture that represents the payment method.
8. Press Save.

Enable alternative payment in NetSuite

1. Go to Setup > Side Builder/SCA > Setup web site.
2. Select the web site to enable alternative payments
3. Go to the shopping tab
4. In the Payments Page, enable 'ALLOW NON-CREDIT CARD PAYMENT METHODS DURING CHECKOUT'.
5. Press Save.

Add payment form

1. Download the zip file from the GitHub repository
2. Find the ‘ns_form.html’ in the ‘Alternative payments’ subfolder
3. Go to: Documents > Files > File Cabinet > Web Hosting Files > Live Hosting > site
4. Click on ‘Add file’ and select the ‘ns_form.html’

# Address Verification System (AVS)

**Prerequisites**

AVS must also be supported by the acquirer and is only supported by issuers in the US, Canada and UK.

1. Display the Payment Processing Profile.
2. Complete the AVS details, using the screenshot and notes below for guidance.

![auth_credentials](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/AVS/auth_credentials.jpg)

<table>
<tbody>
  <tr>
    <td><strong>Enable AVS</strong></td>
    <td>Check the checkbox</td>
  </tr>
  <tr>
    <td><strong>AVS ACCEPT</strong></td>
    <td>Enter the AVS cases that should be accepted, using uppercase, and separating them by commas (e.g. A,B,D)
If an AVS result is not in either box (Accept or Hold), the AVS result will be rejected and the order cancelled. If an AVS result is in both textboxes, the hold case has first priority.</td>
  </tr>
  <tr>
    <td><strong>AVS HOLD</strong></td>
    <td>Enter the AVS cases that need to be put on hold, using uppercase, and separating them by commas (e.g. A,B,D)
If an AVS result is not in either box (Accept or Hold), the AVS result will be rejected and the order cancelled. If an AVS result is in both textboxes, the hold case has first priority.</td>
  </tr>
</tbody>
</table>

Here is a list of AVS cases that can occur. As a merchant you will need to decide which cases should be accepted or put on hold. Otherwise the order will be rejected. 

<table>
<tbody>
  <tr>
    <td><strong>AVS</strong></td>
    <td>Description</td>
  </tr>
  <tr>
    <td><strong>A</strong></td>
    <td>Address matches, but zip code does not</td>
  </tr>
  <tr>
    <td><strong>B</strong></td>
    <td>Street address matches, post code not verified due to incompatible formats</td>
  </tr>
  <tr>
    <td><strong>C</strong></td>
    <td>Street address and postal code not verified for international transaction due to incompatible formats</td>
  </tr>
  <tr>
    <td><strong>D</strong></td>
    <td>Street address and postal codes match for international transaction</td>
  </tr>
  <tr>
    <td><strong>E</strong></td>
    <td>AVS not supported for this industry</td>
  </tr>
  <tr>
    <td><strong>F</strong></td>
    <td>Full Match - Address and Zip/Postal Code match (UK Only)</td>
  </tr>
  <tr>
    <td><strong>G</strong></td>
    <td>Address information is unavailable; international transaction; non-AVS participant</td>
  </tr>
  <tr>
    <td><strong>I</strong></td>
    <td>Address information not verified for international transaction</td>
  </tr>
  <tr>
    <td><strong>M</strong></td>
    <td>Street address and postal codes match for international transaction</td>
  </tr>
  <tr>
    <td><strong>N</strong></td>
    <td>No Match on Address (Street) or Zip</td>
  </tr>
  <tr>
    <td><strong>P</strong></td>
    <td>Postal codes match for international transaction. Street address not verified due to incompatible formats</td>
  </tr>
  <tr>
    <td><strong>Q</strong></td>
    <td>Unknown response from issuer/banknet switch</td>
  </tr>
  <tr>
    <td><strong>R</strong></td>
    <td>Retry. System unable to process</td>
  </tr>
  <tr>
    <td><strong>S</strong></td>
    <td>AVS not supported for this industry</td>
  </tr>
  <tr>
    <td><strong>U</strong></td>
    <td>Address information is unavailable</td>
  </tr>
  <tr>
    <td><strong>W</strong></td>
    <td>Nine-digit zip code matches, but address does not</td>
  </tr>
  <tr>
    <td><strong>X</strong></td>
    <td>Exact. Nine-digit zip code and address match</td>
  </tr>
  <tr>
    <td><strong>Y</strong></td>
    <td>Yes. Five-digit zip code and address match</td>
  </tr>
  <tr>
    <td><strong>Z</strong></td>
    <td>Five-digit zip code matches, but address does not</td>
  </tr>
</tbody>
</table>

# Reconciliation

Go to: Customization > Scripting > Scripts

There is several Scripts within NetSuite, so not all of these are related to the reconciliation process. Go to the script that has the name “Recon.js” and click either view or edit. Then there is a tab called “Execution log” and here you can find the log entries related to the funding’s files and funding files alone. 

These log entries are needed when you have any problems with the reconciliation and need to contact AltaPay support.

**Setting up reconciliation in NetSuite**

To ensure that reconciliation entries related to orders are populated on the correct accounts, you must have a custom record for each active AltaPay Payment processing profile in NetSuite

AltaPay reconciliation > Reconciliation Setup > Setup Accounts.

![reconciliation](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/Reconciliation/reconciliation.jpg)

<table>
<tbody>
  <tr>
    <td><strong>Subsidiary</strong></td>
    <td>Select the same subsidiary “Account for Payment and refunds” is related to</td>
  </tr>
  <tr>
    <td><strong>Terminal Name</strong></td>
    <td>The terminal name must match the terminal on which orders need to be reconciled</td>
  </tr>
  <tr>
    <td><strong>ACCOUNT FOR PAYMENT AND REFUNDS</strong></td>
    <td>select the account where entries are related to the order (payment, refund)</td>
  </tr>
  <tr>
    <td><strong>Other Asset Id</strong></td>
    <td>Select the account where entries are related to the flow of the transactions (refund/payment rejected, chargebacks (representment, pre arbitration)) that isn’t capture/refunds</td>
  </tr>
  <tr>
    <td><strong>Transaction Type – Sales Orders</strong></td>
    <td>Select the relevant record types that are related to Sales order</td>
  </tr>
  <tr>
    <td><strong>Transaction Type – Refund</strong></td>
    <td>Select the relevant record types that are related to refund
</td>
  </tr>
</tbody>
</table>

There are also reconciliation entries that are not related to an order and need to be populated on a different account. Here you would need to add these record types and decide which account they should be populated on. This can be done here:

AltaPay reconciliation > Reconciliation Setup > Setup record type.

Then add these (these are case sensitive):

- rolling
- fee
- adjustment
- roundoff
- not_found

Payment method:

Go to: Setup -> Accounting -> Accounting lists 

Here the AltaPay payment methods should have the setting: “GROUP WITH UNDEPOSITED FUNDS”.

![group_undeposited_funds](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/Reconciliation/group_undeposited_funds.jpg)

**Uploading Funding Files**

Download the funding files from the gateway. These can be found here: Finances > Funding files. Download the files that you want to reconcile.

Log in into NetSuite and then go to: AltaPay reconciliation > Import data > Upload files.

Click on the “Select file” and select a funding file that has been downloaded from AltaPay.

When the funding file is successfully uploaded, there will be a message “Funding files successfully handled” and there will be an option to upload another funding file. If the funding data couldn’t be populated within NetSuite, log entries will be shown, leading up to the error. For further details, see the log files.

# FAQ

**Where can I find the log files?**
> In the case where you experience an issue with the AltaPay bundle we would like you to provide us with the steps leading to the issue and a log file. You can access the log file by following three simple steps.
>1. Go to: Customization > Plug-ins > Plug-in implementations

>![log_files](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/FAQ/log_files.jpg)

>2. Click ‘Edit’ or ’View ’ beside ‘AltaPay’ 
>3. Click on the tab ‘Execution Log’

**How can I retrieve logs for AltaPay troubleshooting?**
 
1. First, add filtering criteria to the logs view by clicking “Customize View”

>![customize_vew](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/FAQ/customize_vew.jpg)

2. In the new window navigate to the “Criteria” tab

>![criteria](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/FAQ/criteria.jpg)

3. Set the days from when to extract needed logs. There is already included filter for the date filter with default value set to “today”. To change this, click on the “Set Description” button next to the “Date” filter

>![date_filter](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/FAQ/date_filter.png)

4. A new window is displayed where date filters can be set. Date filters can be set with relative settings based on today’s date or absolute. 

>![date_filter_set](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/FAQ/date_filter_set.png)

<b>Example</b>

To retrieve all the logs from yesterday and today’s date perform following steps:
- In the “Date” select list set value “within”
- In the “From” field select yesterday’s date
>![custom_date](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/FAQ/custom_date.png)
- In the “To” field select today’s date 

5. Click "Set" to apply the changes.
6. Now set the filter for the script. In that way, only logs related to “AltaPay” bundle will be shown. To do that select “Script” value from the list.

>![script](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/FAQ/script.jpg)

7. A new window will appear where actual value for the script should be configured. In the text area, key in AltaPay.

>![value_for_script](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/FAQ/value_for_script.png)

8. Now click "Preview" to preview the extract.

>![preview](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/FAQ/preview.jpg)

9. All logs which meet given criteria will be shown on the results page. To export logs, select “Export -PDF” or “Export - Microsoft Excel”

>![export](https://github.com/AltaPay/plugin-netsuite/blob/Documentation/Docs/FAQ/export.jpg)

**How can I remove the gateway field in the payment processing profile?**
> If there is a gateway field in the payment processing profile, this can be ignored. However, you can remove the field:
>- Go to Customization > Lists, Records & Fields > Record types
>- Then click on ‘Altapay_Configuration’ and then ‘Gateway’
>- Check the check box ‘INACTIVE’ and click ‘Save’.

**How does fraud detection work?**

>If fraud detection is enabled on the terminal, the AltaPay NetSuite app will follow the fraud detection recommendations. The following four recommendations are available:
- ‘Deny’

>The transaction is denied and the order is cancelled as well. You can see the reason here:

>1. Find the order in question
>2. Go to the ‘Payment’ tab
>3. ‘Payment events’ > click ‘View’ and a new window appear
>4. ‘Payment Status’ > ‘DETAILS’ > here you can see the message for why the order was denied.

>>If you utilize a bespoke version of ReD, the reason for the deny recommendation can be located in the ReD CSI interface.

>>Good practice will be to release the payment in our backend. Debit cards do not contain reservations.

- **‘Challenge’**. The transaction is on hold and the merchant will need to decide whether they want to handle the order.
If nothing is done the order will be hold in NetSuite. You can see the reason here:

>1. Find the order in question
>2. Go to the ‘Payment’ tab
>3. ‘Payment events’ > click ‘View’ and a new window appear
>4. ‘Payment Status’ > ‘DETAILS’ > here you can see the message for why the order is on hold.

>>If you utilize a bespoke version of ReD, the reason for the deny recommendation can be located in the ReD CSI interface.

>>If the merchant doesn’t want to fulfilthe order, they have to cancel it. It will be good practice to release the orders in our backend, so there are no reservations on debit cards. If the merchant will handle this order, they will have to ‘Override the payment hold’ and fulfil the order.

>>The merchant can find the ‘Challenge’ orders here:

>>1. Go to Transactions > Sales > Manage Payment Hold
>>2. Dropdown menu ’HOLD REASON’ > select ‘External Fraud Review’ > a list of orders on hold is shown and from here you can accept or decline the order. 
- ‘Accept’ . This order will be accepted without any notice.
- ‘Unknown’. This can be due to technical problems at either AltaPay or the fraud company. The order will be handled as accepted

**How do I access log files for the reconciliation process?**

> Go to: Customization > Scripting > Scripts
There is are several scripts within NetSuite, so not all of these are related to the reconciliation process. Go to the script, that has the name “Recon.js” and click either view or edit. Then there is a tab called “Execution log” and here you can find the log entries related to the funding’s files and funding files alone. 

>These log entries are needed when you have any problems with the reconciliation and need to contact AltaPay support.

**Payment method is not visible in NetSuite Website**

> Check that Payment Visuals is set in the Payment Method, as explained in Adding a payment method.
