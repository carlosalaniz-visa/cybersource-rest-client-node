/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Ptsv2paymentsBuyerInformationPersonalIdentification'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsBuyerInformationPersonalIdentification'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsBuyerInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsBuyerInformationPersonalIdentification);
  }
}(this, function(ApiClient, Ptsv2paymentsBuyerInformationPersonalIdentification) {
  'use strict';




  /**
   * The Ptsv2paymentsBuyerInformation model module.
   * @module model/Ptsv2paymentsBuyerInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsBuyerInformation</code>.
   * @alias module:model/Ptsv2paymentsBuyerInformation
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Ptsv2paymentsBuyerInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsBuyerInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsBuyerInformation} The populated <code>Ptsv2paymentsBuyerInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('merchantCustomerId')) {
        obj['merchantCustomerId'] = ApiClient.convertToType(data['merchantCustomerId'], 'String');
      }
      if (data.hasOwnProperty('dateOfBirth')) {
        obj['dateOfBirth'] = ApiClient.convertToType(data['dateOfBirth'], 'String');
      }
      if (data.hasOwnProperty('vatRegistrationNumber')) {
        obj['vatRegistrationNumber'] = ApiClient.convertToType(data['vatRegistrationNumber'], 'String');
      }
      if (data.hasOwnProperty('personalIdentification')) {
        obj['personalIdentification'] = ApiClient.convertToType(data['personalIdentification'], [Ptsv2paymentsBuyerInformationPersonalIdentification]);
      }
      if (data.hasOwnProperty('hashedPassword')) {
        obj['hashedPassword'] = ApiClient.convertToType(data['hashedPassword'], 'String');
      }
    }
    return obj;
  }

  /**
   * Your identifier for the customer.  For processor-specific information, see the customer_account_id field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} merchantCustomerId
   */
  exports.prototype['merchantCustomerId'] = undefined;
  /**
   * Recipient’s date of birth. **Format**: `YYYYMMDD`.  This field is a pass-through, which means that CyberSource ensures that the value is eight numeric characters but otherwise does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor. 
   * @member {String} dateOfBirth
   */
  exports.prototype['dateOfBirth'] = undefined;
  /**
   * Customer’s government-assigned tax identification number.  For processor-specific information, see the purchaser_vat_registration_number field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} vatRegistrationNumber
   */
  exports.prototype['vatRegistrationNumber'] = undefined;
  /**
   * @member {Array.<module:model/Ptsv2paymentsBuyerInformationPersonalIdentification>} personalIdentification
   */
  exports.prototype['personalIdentification'] = undefined;
  /**
   * TODO 
   * @member {String} hashedPassword
   */
  exports.prototype['hashedPassword'] = undefined;



  return exports;
}));


