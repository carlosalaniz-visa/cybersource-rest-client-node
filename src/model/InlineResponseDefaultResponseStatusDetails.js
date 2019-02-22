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
    root.CyberSource.InlineResponseDefaultResponseStatusDetails = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InlineResponseDefaultResponseStatusDetails model module.
   * @module model/InlineResponseDefaultResponseStatusDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponseDefaultResponseStatusDetails</code>.
   * @alias module:model/InlineResponseDefaultResponseStatusDetails
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponseDefaultResponseStatusDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponseDefaultResponseStatusDetails} obj Optional instance to populate.
   * @return {module:model/InlineResponseDefaultResponseStatusDetails} The populated <code>InlineResponseDefaultResponseStatusDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * Field name referred to for validation issues.
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * Description or code of any error response.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));


