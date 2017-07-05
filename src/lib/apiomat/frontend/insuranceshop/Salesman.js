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
    goog.provide('Apiomat.Salesman');
    goog.require('Apiomat.User');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.Salesman = function(_username, _password) {
    this.init();
    if(typeof _username !== 'undefined')
    {
        this.setUserName(_username);
    }
    
    if(typeof _password !== 'undefined')
    {
        this.setPassword(_password);
    }
    /* referenced object methods */

};
/* static methods */

/**
 * Callback required by getSalesmans function.
 * callback name getSalesmansCallback
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
 * @param {getSalesmansCallback} callback
 */
Apiomat.Salesman.getSalesmans = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Salesman, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getSalesmansAndRefHref function.
 * callback name getSalesmansAndRefHrefCallback
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
 * @param {getSalesmansAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.Salesman.getSalesmansAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Salesman, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getSalesmansCount function.
 * callback name getSalesmansCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getSalesmansCountCallback} callback which is called when request finished
 */
Apiomat.Salesman.getSalesmansCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.Salesman, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getSalesmans() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.Salesman.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.Salesman, query, callback);
};

/**
 * Deletes the classes that have been fetched with getSalesmansWithReferencedHref (or its async version) before
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
Apiomat.Salesman.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.Salesman, query, callback);
};


/* inheritance */
Apiomat.Salesman.prototype = new Apiomat.User();
Apiomat.Salesman.prototype.constructor = Apiomat.Salesman;


Apiomat.Salesman.prototype.init=function () {
        Apiomat.User.prototype.init.call(this);
    this.data["dynamicAttributes"] = {};
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.Salesman.prototype.getSimpleName = function() {
    return "Salesman";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.Salesman.prototype.getModuleName = function() {
    return "InsuranceShop";
};

/* easy getter and setter */


/**
 * get Commision
 * @return Commision
 */
Apiomat.Salesman.prototype.getCommision = function() 
{
            return this.data.commision !== null ? this.data.commision : undefined;
    
};

/**
 * set Commision
 * @param Commision
 */
Apiomat.Salesman.prototype.setCommision = function(_commision) {
    this.data.commision = _commision;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
