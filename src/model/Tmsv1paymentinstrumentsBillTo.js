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
    root.CyberSource.Tmsv1paymentinstrumentsBillTo = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Tmsv1paymentinstrumentsBillTo model module.
   * @module model/Tmsv1paymentinstrumentsBillTo
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Tmsv1paymentinstrumentsBillTo</code>.
   * @alias module:model/Tmsv1paymentinstrumentsBillTo
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>Tmsv1paymentinstrumentsBillTo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tmsv1paymentinstrumentsBillTo} obj Optional instance to populate.
   * @return {module:model/Tmsv1paymentinstrumentsBillTo} The populated <code>Tmsv1paymentinstrumentsBillTo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }
      if (data.hasOwnProperty('locality')) {
        obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
      }
      if (data.hasOwnProperty('administrativeArea')) {
        obj['administrativeArea'] = ApiClient.convertToType(data['administrativeArea'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * Bill to First Name.
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Bill to Last Name.
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Bill to Company.
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * Bill to Address Line 1.
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * Bill to Address Line 2.
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;
  /**
   * Bill to City.
   * @member {String} locality
   */
  exports.prototype['locality'] = undefined;
  /**
   * Bill to State.
   * @member {String} administrativeArea
   */
  exports.prototype['administrativeArea'] = undefined;
  /**
   * Bill to Postal Code.
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * Bill to Country. Accepts input in the ISO 3166-1 standard, stores as ISO 3166-1-Alpha-2
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Valid Bill to Email.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Bill to Phone Number.
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;



  return exports;
}));


