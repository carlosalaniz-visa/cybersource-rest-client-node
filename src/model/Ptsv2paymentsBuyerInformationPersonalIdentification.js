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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsBuyerInformationPersonalIdentification = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsBuyerInformationPersonalIdentification model module.
   * @module model/Ptsv2paymentsBuyerInformationPersonalIdentification
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsBuyerInformationPersonalIdentification</code>.
   * @alias module:model/Ptsv2paymentsBuyerInformationPersonalIdentification
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Ptsv2paymentsBuyerInformationPersonalIdentification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsBuyerInformationPersonalIdentification} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsBuyerInformationPersonalIdentification} The populated <code>Ptsv2paymentsBuyerInformationPersonalIdentification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('issuedBy')) {
        obj['issuedBy'] = ApiClient.convertToType(data['issuedBy'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsBuyerInformationPersonalIdentification.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Personal Identifier for the customer based on various type. This field is supported only on the processors listed in this description.  For processor-specific information, see the personal_id field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Description of this field is not available.
   * @member {String} issuedBy
   */
  exports.prototype['issuedBy'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "ssn"
     * @const
     */
    "ssn": "ssn",
    /**
     * value: "driverlicense"
     * @const
     */
    "driverlicense": "driverlicense"  };


  return exports;
}));


