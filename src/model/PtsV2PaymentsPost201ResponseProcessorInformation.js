/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponseProcessorInformationAchVerification', 'model/PtsV2PaymentsPost201ResponseProcessorInformationAvs', 'model/PtsV2PaymentsPost201ResponseProcessorInformationCardVerification', 'model/PtsV2PaymentsPost201ResponseProcessorInformationConsumerAuthenticationResponse', 'model/PtsV2PaymentsPost201ResponseProcessorInformationCustomer', 'model/PtsV2PaymentsPost201ResponseProcessorInformationElectronicVerificationResults', 'model/PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice', 'model/PtsV2PaymentsPost201ResponseProcessorInformationRouting'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponseProcessorInformationAchVerification'), require('./PtsV2PaymentsPost201ResponseProcessorInformationAvs'), require('./PtsV2PaymentsPost201ResponseProcessorInformationCardVerification'), require('./PtsV2PaymentsPost201ResponseProcessorInformationConsumerAuthenticationResponse'), require('./PtsV2PaymentsPost201ResponseProcessorInformationCustomer'), require('./PtsV2PaymentsPost201ResponseProcessorInformationElectronicVerificationResults'), require('./PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice'), require('./PtsV2PaymentsPost201ResponseProcessorInformationRouting'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2PaymentsPost201ResponseProcessorInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationAchVerification, root.CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationAvs, root.CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationCardVerification, root.CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationConsumerAuthenticationResponse, root.CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationCustomer, root.CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationElectronicVerificationResults, root.CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice, root.CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationRouting);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponseProcessorInformationAchVerification, PtsV2PaymentsPost201ResponseProcessorInformationAvs, PtsV2PaymentsPost201ResponseProcessorInformationCardVerification, PtsV2PaymentsPost201ResponseProcessorInformationConsumerAuthenticationResponse, PtsV2PaymentsPost201ResponseProcessorInformationCustomer, PtsV2PaymentsPost201ResponseProcessorInformationElectronicVerificationResults, PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice, PtsV2PaymentsPost201ResponseProcessorInformationRouting) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponseProcessorInformation model module.
   * @module model/PtsV2PaymentsPost201ResponseProcessorInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponseProcessorInformation</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponseProcessorInformation
   * @class
   */
  var exports = function() {
    var _this = this;





























  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponseProcessorInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponseProcessorInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponseProcessorInformation} The populated <code>PtsV2PaymentsPost201ResponseProcessorInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authIndicator')) {
        obj['authIndicator'] = ApiClient.convertToType(data['authIndicator'], 'String');
      }
      if (data.hasOwnProperty('approvalCode')) {
        obj['approvalCode'] = ApiClient.convertToType(data['approvalCode'], 'String');
      }
      if (data.hasOwnProperty('transactionId')) {
        obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
      }
      if (data.hasOwnProperty('networkTransactionId')) {
        obj['networkTransactionId'] = ApiClient.convertToType(data['networkTransactionId'], 'String');
      }
      if (data.hasOwnProperty('providerTransactionId')) {
        obj['providerTransactionId'] = ApiClient.convertToType(data['providerTransactionId'], 'String');
      }
      if (data.hasOwnProperty('responseCode')) {
        obj['responseCode'] = ApiClient.convertToType(data['responseCode'], 'String');
      }
      if (data.hasOwnProperty('responseCodeSource')) {
        obj['responseCodeSource'] = ApiClient.convertToType(data['responseCodeSource'], 'String');
      }
      if (data.hasOwnProperty('responseDetails')) {
        obj['responseDetails'] = ApiClient.convertToType(data['responseDetails'], 'String');
      }
      if (data.hasOwnProperty('responseCategoryCode')) {
        obj['responseCategoryCode'] = ApiClient.convertToType(data['responseCategoryCode'], 'String');
      }
      if (data.hasOwnProperty('forwardedAcquirerCode')) {
        obj['forwardedAcquirerCode'] = ApiClient.convertToType(data['forwardedAcquirerCode'], 'String');
      }
      if (data.hasOwnProperty('avs')) {
        obj['avs'] = PtsV2PaymentsPost201ResponseProcessorInformationAvs.constructFromObject(data['avs']);
      }
      if (data.hasOwnProperty('cardVerification')) {
        obj['cardVerification'] = PtsV2PaymentsPost201ResponseProcessorInformationCardVerification.constructFromObject(data['cardVerification']);
      }
      if (data.hasOwnProperty('merchantAdvice')) {
        obj['merchantAdvice'] = PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice.constructFromObject(data['merchantAdvice']);
      }
      if (data.hasOwnProperty('electronicVerificationResults')) {
        obj['electronicVerificationResults'] = PtsV2PaymentsPost201ResponseProcessorInformationElectronicVerificationResults.constructFromObject(data['electronicVerificationResults']);
      }
      if (data.hasOwnProperty('achVerification')) {
        obj['achVerification'] = PtsV2PaymentsPost201ResponseProcessorInformationAchVerification.constructFromObject(data['achVerification']);
      }
      if (data.hasOwnProperty('customer')) {
        obj['customer'] = PtsV2PaymentsPost201ResponseProcessorInformationCustomer.constructFromObject(data['customer']);
      }
      if (data.hasOwnProperty('consumerAuthenticationResponse')) {
        obj['consumerAuthenticationResponse'] = PtsV2PaymentsPost201ResponseProcessorInformationConsumerAuthenticationResponse.constructFromObject(data['consumerAuthenticationResponse']);
      }
      if (data.hasOwnProperty('systemTraceAuditNumber')) {
        obj['systemTraceAuditNumber'] = ApiClient.convertToType(data['systemTraceAuditNumber'], 'String');
      }
      if (data.hasOwnProperty('paymentAccountReferenceNumber')) {
        obj['paymentAccountReferenceNumber'] = ApiClient.convertToType(data['paymentAccountReferenceNumber'], 'String');
      }
      if (data.hasOwnProperty('transactionIntegrityCode')) {
        obj['transactionIntegrityCode'] = ApiClient.convertToType(data['transactionIntegrityCode'], 'String');
      }
      if (data.hasOwnProperty('amexVerbalAuthReferenceNumber')) {
        obj['amexVerbalAuthReferenceNumber'] = ApiClient.convertToType(data['amexVerbalAuthReferenceNumber'], 'String');
      }
      if (data.hasOwnProperty('salesSlipNumber')) {
        obj['salesSlipNumber'] = ApiClient.convertToType(data['salesSlipNumber'], 'Number');
      }
      if (data.hasOwnProperty('masterCardServiceCode')) {
        obj['masterCardServiceCode'] = ApiClient.convertToType(data['masterCardServiceCode'], 'String');
      }
      if (data.hasOwnProperty('masterCardServiceReplyCode')) {
        obj['masterCardServiceReplyCode'] = ApiClient.convertToType(data['masterCardServiceReplyCode'], 'String');
      }
      if (data.hasOwnProperty('masterCardAuthenticationType')) {
        obj['masterCardAuthenticationType'] = ApiClient.convertToType(data['masterCardAuthenticationType'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('routing')) {
        obj['routing'] = PtsV2PaymentsPost201ResponseProcessorInformationRouting.constructFromObject(data['routing']);
      }
      if (data.hasOwnProperty('merchantNumber')) {
        obj['merchantNumber'] = ApiClient.convertToType(data['merchantNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * Flag that specifies the purpose of the authorization.  Possible values:  - **0**: Preauthorization  - **1**: Final authorization  For processor-specific information, see the auth_indicator field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} authIndicator
   */
  exports.prototype['authIndicator'] = undefined;
  /**
   * Authorization code. Returned only when the processor returns this value. 
   * @member {String} approvalCode
   */
  exports.prototype['approvalCode'] = undefined;
  /**
   * Network transaction identifier (TID). You can use this value to identify a specific transaction when you are discussing the transaction with your processor. Not all processors provide this value.  #### Cielo For Cielo, this value is the non-sequential unit (NSU) and is supported for all transactions. The value is generated by Cielo or the issuing bank.  #### Comercio Latino For Comercio Latino, this value is the proof of sale or non-sequential unit (NSU) number generated by the acquirers Cielo and Rede, or the issuing bank.  #### CyberSource through VisaNet and GPN For details about this value for CyberSource through VisaNet and GPN, see \"Network Transaction Identifiers\" in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm) 
   * @member {String} transactionId
   */
  exports.prototype['transactionId'] = undefined;
  /**
   * The description for this field is not available.
   * @member {String} networkTransactionId
   */
  exports.prototype['networkTransactionId'] = undefined;
  /**
   * The description for this field is not available.
   * @member {String} providerTransactionId
   */
  exports.prototype['providerTransactionId'] = undefined;
  /**
   * For most processors, this is the error message sent directly from the bank. Returned only when the processor returns this value.  **Important** Do not use this field to evaluate the result of the authorization.  #### AIBMS If this value is `08`, you can accept the transaction if the customer provides you with identification.  #### Atos This value is the response code sent from Atos and it might also include the response code from the bank. Format: `aa,bb` with the two values separated by a comma and where: - `aa` is the two-digit error message from Atos. - `bb` is the optional two-digit error message from the bank.  #### Comercio Latino This value is the status code and the error or response code received from the processor separated by a colon. Format: [status code]:E[error code] or [status code]:R[response code] Example `2:R06`  #### JCN Gateway Processor-defined detail error code. The associated response category code is in the `responseCategoryCode` field. 
   * @member {String} responseCode
   */
  exports.prototype['responseCode'] = undefined;
  /**
   * Used by Visa only and contains the response source/reason code that identifies the source of the response decision. 
   * @member {String} responseCodeSource
   */
  exports.prototype['responseCodeSource'] = undefined;
  /**
   * This field might contain information about a decline. This field is supported only for **CyberSource through VisaNet**. 
   * @member {String} responseDetails
   */
  exports.prototype['responseDetails'] = undefined;
  /**
   * Processor-defined response category code. The associated detail error code is in the `responseCode` field of the service you requested.  This field is supported only for:   - Japanese issuers  - Domestic transactions in Japan  - Comercio Latino—processor transaction ID required for troubleshooting  **Maximum length for processors**:   - Comercio Latino: 32  - All other processors: 3 
   * @member {String} responseCategoryCode
   */
  exports.prototype['responseCategoryCode'] = undefined;
  /**
   * Name of the Japanese acquirer that processed the transaction. Returned only for JCN Gateway. Please contact the CyberSource Japan Support Group for more information. 
   * @member {String} forwardedAcquirerCode
   */
  exports.prototype['forwardedAcquirerCode'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseProcessorInformationAvs} avs
   */
  exports.prototype['avs'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseProcessorInformationCardVerification} cardVerification
   */
  exports.prototype['cardVerification'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice} merchantAdvice
   */
  exports.prototype['merchantAdvice'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseProcessorInformationElectronicVerificationResults} electronicVerificationResults
   */
  exports.prototype['electronicVerificationResults'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseProcessorInformationAchVerification} achVerification
   */
  exports.prototype['achVerification'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseProcessorInformationCustomer} customer
   */
  exports.prototype['customer'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseProcessorInformationConsumerAuthenticationResponse} consumerAuthenticationResponse
   */
  exports.prototype['consumerAuthenticationResponse'] = undefined;
  /**
   * This field is returned only for **American Express Direct** and **CyberSource through VisaNet**.  #### American Express Direct  System trace audit number (STAN). This value identifies the transaction and is useful when investigating a chargeback dispute.  #### CyberSource through VisaNet  System trace number that must be printed on the customer’s receipt.  For details, see `receipt_number` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm) 
   * @member {String} systemTraceAuditNumber
   */
  exports.prototype['systemTraceAuditNumber'] = undefined;
  /**
   * Visa-generated reference number that identifies a card-present transaction for which you provided one of the following:   - Visa primary account number (PAN)  - Visa-generated token for a PAN  This reference number serves as a link to the cardholder account and to all transactions for that account. 
   * @member {String} paymentAccountReferenceNumber
   */
  exports.prototype['paymentAccountReferenceNumber'] = undefined;
  /**
   * Transaction integrity classification provided by Mastercard. This value specifies Mastercard’s evaluation of the transaction’s safety and security. This field is returned only for **CyberSource through VisaNet**.  For card-present transactions, possible values:   - `A1`: EMV or token in a secure, trusted environment  - `B1`: EMV or chip equivalent  - `C1`: Magnetic stripe  - `E1`: Key entered  - `U0`: Unclassified  For card-not-present transactions, possible values:   - `A2`: Digital transactions  - `B2`: Authenticated checkout  - `C2`: Transaction validation  - `D2`: Enhanced data  - `E2`: Generic messaging  - `U0`: Unclassified  For information about these values, contact Mastercard or your acquirer.  #### CyberSource through VisaNet  The value for this field corresponds to the following data in the TC 33 capture file,<sup>1</sup>: - Record: CP01 TCR6 - Position: 136-137 - Field: Mastercard Transaction Integrity Classification  <sup>1</sup> The TC 33 Capture file contains information about the purchases and refunds that a merchant submits to CyberSource. CyberSource through VisaNet creates the TC 33 Capture file at the end of the day and sends it to the merchant’s acquirer, who uses this information to facilitate end-of-day clearing processing with payment networks. 
   * @member {String} transactionIntegrityCode
   */
  exports.prototype['transactionIntegrityCode'] = undefined;
  /**
   * Referral response number for a verbal authorization with FDMS Nashville when using an American Express card. Give this number to American Express when you call them for the verbal authorization. 
   * @member {String} amexVerbalAuthReferenceNumber
   */
  exports.prototype['amexVerbalAuthReferenceNumber'] = undefined;
  /**
   * Transaction identifier that CyberSource generates. You have the option of printing the sales slip number on the receipt.  This field is supported only for **JCN Gateway**. 
   * @member {Number} salesSlipNumber
   */
  exports.prototype['salesSlipNumber'] = undefined;
  /**
   * Mastercard service that was used for the transaction. Mastercard provides this value to CyberSource.  Possible value:  - 53: Mastercard card-on-file token service  #### CyberSource through VisaNet The value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCR6 - Position: 133-134 - Field: Mastercard Merchant on-behalf service. **Note** This field is returned only for CyberSource through VisaNet. 
   * @member {String} masterCardServiceCode
   */
  exports.prototype['masterCardServiceCode'] = undefined;
  /**
   * Result of the Mastercard card-on-file token service. Mastercard provides this value to CyberSource.  Possible values:   - `C`: Service completed successfully.  - `F`: One of the following:    - Incorrect Mastercard POS entry mode. The Mastercard POS entry mode should be 81 for an authorization or      authorization reversal.    - Incorrect Mastercard POS entry mode. The Mastercard POS entry mode should be 01 for a tokenized request.    - Token requestor ID is missing or formatted incorrectly.  - `I`: One of the following:    - Invalid token requestor ID.    - Suspended or deactivated token.    - Invalid token (not in mapping table).  - `T`: Invalid combination of token requestor ID and token.  - `U`: Expired token.  - `W`: Primary account number (PAN) listed in electronic warning bulletin.  **Note** This field is returned only for **CyberSource through VisaNet**. 
   * @member {String} masterCardServiceReplyCode
   */
  exports.prototype['masterCardServiceReplyCode'] = undefined;
  /**
   * Type of authentication for which the transaction qualifies as determined by the Mastercard authentication service, which confirms the identity of the cardholder. Mastercard provides this value to CyberSource.  Possible values:   - `1`: Transaction qualifies for Mastercard authentication type 1.  - `2`: Transaction qualifies for Mastercard authentication type 2.  #### CyberSource through VisaNet The value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCR6 - Position: 132 - Field: Mastercard Member Defined service. **Note** This field is returned only for CyberSource through VisaNet. 
   * @member {String} masterCardAuthenticationType
   */
  exports.prototype['masterCardAuthenticationType'] = undefined;
  /**
   * Name of the Processor. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseProcessorInformationRouting} routing
   */
  exports.prototype['routing'] = undefined;
  /**
   * Identifier that was assigned to you by your acquirer.  This value must be printed on the receipt.  This field is supported only on **American Express Direct**, **FDC Nashville Global**, and **SIX**. 
   * @member {String} merchantNumber
   */
  exports.prototype['merchantNumber'] = undefined;



  return exports;
}));


