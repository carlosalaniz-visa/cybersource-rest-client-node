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
    define(['ApiClient', 'model/Ptsv2paymentsMerchantInformationMerchantDescriptor'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsMerchantInformationMerchantDescriptor'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsidrefundsMerchantInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsMerchantInformationMerchantDescriptor);
  }
}(this, function(ApiClient, Ptsv2paymentsMerchantInformationMerchantDescriptor) {
  'use strict';




  /**
   * The Ptsv2paymentsidrefundsMerchantInformation model module.
   * @module model/Ptsv2paymentsidrefundsMerchantInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidrefundsMerchantInformation</code>.
   * @alias module:model/Ptsv2paymentsidrefundsMerchantInformation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Ptsv2paymentsidrefundsMerchantInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidrefundsMerchantInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidrefundsMerchantInformation} The populated <code>Ptsv2paymentsidrefundsMerchantInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('merchantDescriptor')) {
        obj['merchantDescriptor'] = Ptsv2paymentsMerchantInformationMerchantDescriptor.constructFromObject(data['merchantDescriptor']);
      }
      if (data.hasOwnProperty('categoryCode')) {
        obj['categoryCode'] = ApiClient.convertToType(data['categoryCode'], 'Number');
      }
      if (data.hasOwnProperty('vatRegistrationNumber')) {
        obj['vatRegistrationNumber'] = ApiClient.convertToType(data['vatRegistrationNumber'], 'String');
      }
      if (data.hasOwnProperty('cardAcceptorReferenceNumber')) {
        obj['cardAcceptorReferenceNumber'] = ApiClient.convertToType(data['cardAcceptorReferenceNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsMerchantInformationMerchantDescriptor} merchantDescriptor
   */
  exports.prototype['merchantDescriptor'] = undefined;
  /**
   * Four-digit number that the payment card industry uses to classify merchants into market segments. Visa assigned one or more of these values to your business when you started accepting Visa cards.  If you do not include this field in your request, CyberSource uses the value in your CyberSource account.  For processor-specific information, see the merchant_category_code field in [Credit Card Services Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html) 
   * @member {Number} categoryCode
   */
  exports.prototype['categoryCode'] = undefined;
  /**
   * Your government-assigned tax identification number.  For CtV processors, the maximum length is 20.  For other processor-specific information, see the merchant_vat_registration_number field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} vatRegistrationNumber
   */
  exports.prototype['vatRegistrationNumber'] = undefined;
  /**
   * Reference number that facilitates card acceptor/corporation communication and record keeping.  For processor-specific information, see the card_acceptor_ref_number field in [Level II and Level III Processing Using the SCMP API.](http://apps.cybersource.com/library/documentation/dev_guides/Level_2_3_SCMP_API/html) 
   * @member {String} cardAcceptorReferenceNumber
   */
  exports.prototype['cardAcceptorReferenceNumber'] = undefined;



  return exports;
}));


