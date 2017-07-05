/*
 * Copyright (c) 2011 - 2017, Apinauten GmbH
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 *
 *  * Redistributions of source code must retain the above copyright notice, this 
 *    list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice, 
 *    this list of conditions and the following disclaimer in the documentation 
 *    and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND 
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED 
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. 
 * IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, 
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, 
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF 
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE 
 * OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * THIS FILE IS GENERATED AUTOMATICALLY. DON'T MODIFY IT.
 */
 
/* define namespace */

if(typeof goog !== 'undefined')
{
    goog.provide('Apiomat.Insurance');
    goog.require('Apiomat.AbstractClientDataModel');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.Insurance = function() {
    this.init();
    /* referenced object methods */

};
/* static methods */

/**
 * Callback required by getInsurances function.
 * callback name getInsurancesCallback
 * @param {function} onOk Function is called when everything is ok. (containing a list of object as {array})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns a list of objects of this class from server.
 * The size of the resultset is limited to an installation specific value ('maxResults') and defaults to 1000. 
 * Use limit and offset to return all results if the expected size is larger.
 *
 * If query is given then returned list will be filtered by the given query
 *
 * @param {string} query (optional) a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getInsurancesCallback} callback
 */
Apiomat.Insurance.getInsurances = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Insurance, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getInsurancesAndRefHref function.
 * callback name getInsurancesAndRefHrefCallback
 * @param {function} onOk Function is called when everything is ok. (containing a list of object as {array})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns a list of objects of this class from server.
 * The size of the resultset is limited to an installation specific value ('maxResults') and defaults to 1000. 
 * Use limit and offset to return all results if the expected size is larger.
 * If query is given then returned list will be filtered by the given query
 *
 * @param {string} query (optional) a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {boolean} withReferencedHrefs set to true to get also all HREFs of referenced class instances
 * @param {getInsurancesAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.Insurance.getInsurancesAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Insurance, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getInsurancesCount function.
 * callback name getInsurancesCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getInsurancesCountCallback} callback which is called when request finished
 */
Apiomat.Insurance.getInsurancesCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.Insurance, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getInsurances() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.Insurance.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.Insurance, query, callback);
};

/**
 * Deletes the classes that have been fetched with getInsurancesWithReferencedHref (or its async version) before
 *
 * Note:
 * - The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * - Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 * - Lastly, if objects of this class were fetched in the context of loading a reference collection,
 *   those objects won't be deleted as well (use the respective delete..FromStorage method for that).
 *
 * @param {string} query 
 * @param {deleteAllFromStorageWithReferencedHrefsCallback} callback to be called after request is done
 */
Apiomat.Insurance.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.Insurance, query, callback);
};


/* inheritance */
Apiomat.Insurance.prototype = new Apiomat.AbstractClientDataModel();
Apiomat.Insurance.prototype.constructor = Apiomat.Insurance;


Apiomat.Insurance.prototype.init=function () {
        this.data = new Object();
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.Insurance.prototype.getSimpleName = function() {
    return "Insurance";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.Insurance.prototype.getModuleName = function() {
    return "InsuranceShop";
};

/* easy getter and setter */


/**
 * get Coverage
 * @return Coverage
 */
Apiomat.Insurance.prototype.getCoverage = function() 
{
            return this.data.coverage;
    
};

/**
 * set Coverage
 * @param Coverage
 */
Apiomat.Insurance.prototype.setCoverage = function(_coverage) {
    this.data.coverage = _coverage;
};


/**
 * get Name
 * @return Name
 */
Apiomat.Insurance.prototype.getName = function() 
{
            return this.data.name !== null ? this.data.name : undefined;
    
};

/**
 * set Name
 * @param Name
 */
Apiomat.Insurance.prototype.setName = function(_name) {
    this.data.name = _name;
};


/**
 * get Price
 * @return Price
 */
Apiomat.Insurance.prototype.getPrice = function() 
{
            return this.data.price !== null ? this.data.price : undefined;
    
};

/**
 * set Price
 * @param Price
 */
Apiomat.Insurance.prototype.setPrice = function(_price) {
    this.data.price = _price;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
