var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();
var sinon = require('sinon');
const Dictionary = require('../src/components/dictionary');


var dictionaryTest = new Map();

beforeEach(function() {
    sinon.stub(console, 'log');
});

afterEach(function() {
    sinon.restore();
});

describe('addToDictionary()', function() {

    it('Should Add New Key Value Pair to the Dictionary', function(){
        Dictionary.addToDictionary(dictionaryTest, 'foo', 'bar');
        expect( console.log.calledOnce ).to.be.true;
        expect( console.log.calledWith('Added') ).to.be.true;
    });

    it('Should Not Add Duplicate Member to a Key to the Dictionary', function(){
        Dictionary.addToDictionary(dictionaryTest, 'foo', 'bar');
        expect( console.log.calledOnce ).to.be.true;
        expect( console.log.calledWith('ERROR, member already exists for the key.')).to.be.true;
    });

});

describe('removeFromDictionary()', function() {

    it('Should Remove Key Value Pair from the Dictionary', function(){
        Dictionary.removeFromDictionary(dictionaryTest, 'foo', 'bar');
        expect( console.log.calledWith('Removed') ).to.be.true;
    });

    it('Should Check if member is present for specified key while attempting to remove from the Dictionary', function(){
        Dictionary.addToDictionary(dictionaryTest, 'foo', 'pow');
        Dictionary.addToDictionary(dictionaryTest, 'foo', 'one');
        Dictionary.removeFromDictionary(dictionaryTest, 'foo', 'test');
        expect( console.log.calledOnce ).to.be.false;
        expect( console.log.calledWith('ERROR, member does not exist.')).to.be.true;
    });

    it('Should Check if key is present while attempting to remove from the Dictionary', function(){
        Dictionary.addToDictionary(dictionaryTest, 'foo', 'test');
        Dictionary.removeFromDictionary(dictionaryTest, 'too', 'test');
        expect( console.log.calledOnce ).to.be.false;
        expect( console.log.calledWith('ERROR, key does not exist.')).to.be.true;
    });

});

describe('keyExists()', function() {

    it('Should check if a key is present in the dictionary.', function(){
        Dictionary.keyExists(dictionaryTest, 'foo');
        expect( console.log.calledWith('true')).to.be.true;
    });

    it('Should check when a key is not present in the dictionary.', function(){
        Dictionary.keyExists(dictionaryTest, 'alias');
        expect( console.log.calledWith('false')).to.be.true;
    });

});


describe('memberExists()', function() {

    it('Should check when a member is not present for a key in the dictionary.', function(){
        Dictionary.keyExists(dictionaryTest, 'foo', 'one');
        expect( console.log.calledWith('true')).to.be.true;
    });

    it('Should check when a member is not present for a key in the dictionary.', function(){
        Dictionary.keyExists(dictionaryTest, 'alias', 'node');
        expect( console.log.calledWith('false')).to.be.true;
    });

});

describe('removeAll()', function() {

    it('Should Remove All Members foe a key from the dictionary.', function(){
        Dictionary.removeAll(dictionaryTest, 'foo');
        expect( console.log.calledWith('Removed')).to.be.true;
    });

    it('Should Check if key is present to delete all its members from the dictionary', function(){
        Dictionary.removeAll(dictionaryTest, 'foo');
        expect( console.log.calledWith('ERROR, key does not exist.')).to.be.true;
    });

});

describe('clearMethod()', function() {

    it('Should clear everything from the dictionary.', function(){
        Dictionary.clearMethod(dictionaryTest);
        expect( console.log.calledWith('Cleared')).to.be.true;
        expect( dictionaryTest ).to.have.lengthOf(0); 
    });

});



describe('allMembers()', function() {
    it('Should list all members from the dictionary.', function(){
        Dictionary.addToDictionary(dictionaryTest, 'foo', 'test');
        Dictionary.addToDictionary(dictionaryTest, 'foo', 'bar');
        Dictionary.addToDictionary(dictionaryTest, 'pow', 'test');
        Dictionary.addToDictionary(dictionaryTest, 'test', 'three');
        
        var arrSize = Dictionary.allMembers(dictionaryTest);
        expect( arrSize ).to.be.equals(4); 
    });

    it('Should test if there are no members to return in the dictionary.', function(){
        dictionaryTest.clear();
        var arrSize = Dictionary.allMembers(dictionaryTest);
        expect( arrSize ).to.be.equals(0); 
        expect( console.log.calledWith('empty set')).to.be.true;
        
    });
});

describe('allMembers()', function() {
    it('Should list all items from the dictionary.', function(){
        Dictionary.addToDictionary(dictionaryTest, 'foo', 'test');
        Dictionary.addToDictionary(dictionaryTest, 'foo', 'bar');
        Dictionary.addToDictionary(dictionaryTest, 'pow', 'test');
        Dictionary.addToDictionary(dictionaryTest, 'test', 'three');
        
        var arrSize = Dictionary.allItems(dictionaryTest);
        expect( arrSize ).to.be.equals(4); 
    });

    it('Should test if there are no items(key value pairs) to return from the dictionary.', function(){
        dictionaryTest.clear();
        var arrSize = Dictionary.allItems(dictionaryTest);
        expect( arrSize ).to.be.equals(0); 
        expect( console.log.calledWith('empty set')).to.be.true;
        
    });
});

describe('displayKeys()', function() {
    
    it('Should Test the number of distinct keys in the dictionary.', function(){
        Dictionary.addToDictionary(dictionaryTest, 'foo', 'test');
        Dictionary.addToDictionary(dictionaryTest, 'foo', 'bar');
        Dictionary.addToDictionary(dictionaryTest, 'pow', 'test');
        Dictionary.addToDictionary(dictionaryTest, 'test', 'three');
        
        var arrSize = Dictionary.displayKeys(dictionaryTest);
        expect( arrSize ).to.be.equals(3); 
    });

    it('Should return empty set when no keys are present in the dictionary.', function(){
        dictionaryTest.clear();
        var arrSize = Dictionary.displayKeys(dictionaryTest);
        expect( arrSize ).to.be.equals(0); 
        expect( console.log.calledWith('empty set')).to.be.true;
    });

});

describe('displayMembers()', function() {
    
    it('Should Test the number of distinct members for specified key in the dictionary.', function(){
        Dictionary.addToDictionary(dictionaryTest, 'foo', 'test');
        Dictionary.addToDictionary(dictionaryTest, 'foo', 'bar');
        Dictionary.addToDictionary(dictionaryTest, 'pow', 'test');
        Dictionary.addToDictionary(dictionaryTest, 'test', 'three');
        
        var arrSize = Dictionary.displayMembers(dictionaryTest, 'foo');
        expect( arrSize ).to.be.equals(2); 
    });

    it('Should Test if key is present in the dictionary to display its members.', function(){

        var arrSize = Dictionary.displayMembers(dictionaryTest, 'bob');
        expect( arrSize ).to.be.equals(0); 
        expect( console.log.calledWith('ERROR, key does not exist.')).to.be.true;
    });

    it('Should return empty set when no keys are present in the dictionary', function(){
        dictionaryTest.clear();
        var arrSize = Dictionary.displayMembers(dictionaryTest, 'foo');
        expect( arrSize ).to.be.equals(0); 
        expect( console.log.calledWith('ERROR, key does not exist.')).to.be.true;
    });

});
