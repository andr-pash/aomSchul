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
    goog.provide('Apiomat.Client');
    goog.require('Apiomat.User');
    }
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.Client = function(_username, _password) {
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
    
    var insuredBy = undefined;
    
    /**
     * Getter for local linked variable
     * @return {string} attributeName 
     */
    this.getInsuredBy = function() 
    {
           return this.insuredBy !== null? this.insuredBy : undefined;
     
    };
	
    /**
     * Callback required by loadInsuredBy function.
     * callback name loadInsuredByCallback
	      * @param {function} onOk Function is called when everything is ok. (containing referenced object as {object})
	      * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) and
     * add result from server to member variable of this class.
	 * @param {loadInsuredByCallback} callback
	 */
    this.loadInsuredBy = function(callback, usePersistentStorage) 
    {
        var refUrl = this.data.insuredByHref;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }    
        var loadFromServerCB={
            onOk : function(obj, meta) {
                				this.parent.insuredBy = obj;
                                Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                if (error.statusCode==204) {
                    this.parent.insuredBy = null;
                }
				Apiomat.Datastore.negativeCallback(callback,error);
            }
        };
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB, undefined,false, undefined, Apiomat.Contract, false, usePersistentStorage);
    };
	
    /**
     * Callback required by loadInsuredByAndRefHref function.
     * callback name loadInsuredByAndRefHrefCallback
          * @param {function} onOk Function is called when everything is ok. (containing referenced objects with refHref as {object})
     	 * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) with refHref and
     * add result from server to member variable of this class.
	 * @param {loadInsuredByAndRefHrefCallback} callback
     */
    this.loadInsuredByAndRefHref = function(callback, usePersistentStorage)
    {
        var refUrl = this.data.insuredByHref;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }
        
        var loadFromServerCB={
            onOk : function(obj) {
                					this.parent.insuredBy = obj;
                				Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(callback,error);
            }
        }
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB , undefined,true, undefined, Apiomat.Contract, false, usePersistentStorage);
    };
    
    /**
     * Callback required by postInsuredBy function.
     * callback name postInsuredByCallback
     * @param {function} onOk Function is called when everything is ok. (containing refHref as {string})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Adds a given reference to this object
	 * @param _refData reference
	 * @param {postInsuredByCallback} _callback
     */
    this.postInsuredBy = function(_refData, _callback, usePersistentStorage) 
    {
        if(_refData == false || typeof _refData.getHref() === 'undefined') {
            var error = new Apiomat.ApiomatRequestError(Apiomat.Status.SAVE_REFERENECE_BEFORE_REFERENCING);
            if (_callback) {
                    Apiomat.Datastore.negativeCallback(_callback,error);
            } else if(console && console.log) {
                    console.log("Error occured: " + error);
            }
            return;
        }
        
        var callback = {
            onOk : function(refHref) {
                if (refHref) {
                                     this.parent.insuredBy = _refData;
                                }
                Apiomat.Datastore.positiveCallback(_callback,refHref);
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(_callback,error);
            }
        };
        callback.parent=this;
        if(Apiomat.Datastore.getInstance().shouldSendOffline("POST"))
        {
            Apiomat.Datastore.getInstance( ).sendOffline( "POST", this.getHref(), _refData, "insuredBy", callback );
        }
        else
        {
            Apiomat.Datastore.getInstance().postOnServer(_refData, callback, this.data.insuredByHref, usePersistentStorage);
        }
    };
	
    /**
     * Callback required by removeInsuredBy function.
     * callback name removeInsuredByCallback
     * @param {function} onOk Function is called when everything is ok.
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /**
     * remove a given reference to this object
	 * @param _refData reference
	 * @param {removeInsuredByCallback} _callback
     */
    this.removeInsuredBy = function(_refData, _callback, usePersistentStorage) 
    {
        var id = _refData.getHref().substring(_refData.getHref().lastIndexOf("/") + 1);
        var deleteHref = this.data.insuredByHref + "/" + id;
        var callback = {
            onOk : function(obj) {
                             this.parent.insuredBy = undefined
            ;                 
                Apiomat.Datastore.positiveCallback(_callback);
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(_callback,error);
            }
        };
        callback.parent=this;
        Apiomat.Datastore.getInstance().deleteOnServer(deleteHref, callback, usePersistentStorage);
    };
    
    
};
/* static methods */

/**
 * Callback required by getClients function.
 * callback name getClientsCallback
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
 * @param {getClientsCallback} callback
 */
Apiomat.Client.getClients = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Client, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getClientsAndRefHref function.
 * callback name getClientsAndRefHrefCallback
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
 * @param {getClientsAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.Client.getClientsAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Client, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getClientsCount function.
 * callback name getClientsCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getClientsCountCallback} callback which is called when request finished
 */
Apiomat.Client.getClientsCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.Client, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getClients() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.Client.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.Client, query, callback);
};

/**
 * Deletes the classes that have been fetched with getClientsWithReferencedHref (or its async version) before
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
Apiomat.Client.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.Client, query, callback);
};


/* inheritance */
Apiomat.Client.prototype = new Apiomat.User();
Apiomat.Client.prototype.constructor = Apiomat.Client;


Apiomat.Client.prototype.init=function () {
        Apiomat.User.prototype.init.call(this);
    this.data["dynamicAttributes"] = {};
    this.insuredBy = undefined;
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.Client.prototype.getSimpleName = function() {
    return "Client";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.Client.prototype.getModuleName = function() {
    return "InsuranceShop";
};

/* easy getter and setter */


/**
 * get InsuredBy
 * @return InsuredBy
 */
Apiomat.Client.prototype.getInsuredBy = function() 
{
            return this.data.insuredBy !== null ? this.data.insuredBy : undefined;
    
};

/**
 * set InsuredBy
 * @param InsuredBy
 */
Apiomat.Client.prototype.setInsuredBy = function(_insuredBy) {
    this.data.insuredBy = _insuredBy;
};


/**
 * get Preferences
 * @return Preferences
 */
Apiomat.Client.prototype.getPreferences = function() 
{
            return this.data.preferences;
    
};

/**
 * set Preferences
 * @param Preferences
 */
Apiomat.Client.prototype.setPreferences = function(_preferences) {
    this.data.preferences = _preferences;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
