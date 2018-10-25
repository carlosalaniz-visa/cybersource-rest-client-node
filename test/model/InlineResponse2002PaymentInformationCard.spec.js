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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.InlineResponse2002PaymentInformationCard();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse2002PaymentInformationCard', function() {
    it('should create an instance of InlineResponse2002PaymentInformationCard', function() {
      // uncomment below and update the code to test InlineResponse2002PaymentInformationCard
      //var instane = new CyberSource.InlineResponse2002PaymentInformationCard();
      //expect(instance).to.be.a(CyberSource.InlineResponse2002PaymentInformationCard);
    });

    it('should have the property suffix (base name: "suffix")', function() {
      // uncomment below and update the code to test the property suffix
      //var instane = new CyberSource.InlineResponse2002PaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property expirationMonth (base name: "expirationMonth")', function() {
      // uncomment below and update the code to test the property expirationMonth
      //var instane = new CyberSource.InlineResponse2002PaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property expirationYear (base name: "expirationYear")', function() {
      // uncomment below and update the code to test the property expirationYear
      //var instane = new CyberSource.InlineResponse2002PaymentInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CyberSource.InlineResponse2002PaymentInformationCard();
      //expect(instance).to.be();
    });

  });

}));