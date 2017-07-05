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
    goog.provide('Apiomat.Contract');
    goog.require('Apiomat.AbstractClientDataModel');
}
if(typeof exports === 'undefined')
{
    var Apiomat = Apiomat || {};
}
(function(Apiomat)
{
Apiomat.Contract = function() {
    this.init();
    /* referenced object methods */
    
    var client = undefined;
    
    /**
     * Getter for local linked variable
     * @return {string} attributeName 
     */
    this.getClient = function() 
    {
           return this.client !== null? this.client : undefined;
     
    };
	
    /**
     * Callback required by loadClient function.
     * callback name loadClientCallback
	      * @param {function} onOk Function is called when everything is ok. (containing referenced object as {object})
	      * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) and
     * add result from server to member variable of this class.
	 * @param {loadClientCallback} callback
	 */
    this.loadClient = function(callback, usePersistentStorage) 
    {
        var refUrl = this.data.clientHref;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }    
        var loadFromServerCB={
            onOk : function(obj, meta) {
                				this.parent.client = obj;
                                Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                if (error.statusCode==204) {
                    this.parent.client = null;
                }
				Apiomat.Datastore.negativeCallback(callback,error);
            }
        };
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB, undefined,false, undefined, Apiomat.Client, false, usePersistentStorage);
    };
	
    /**
     * Callback required by loadClientAndRefHref function.
     * callback name loadClientAndRefHrefCallback
          * @param {function} onOk Function is called when everything is ok. (containing referenced objects with refHref as {object})
     	 * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) with refHref and
     * add result from server to member variable of this class.
	 * @param {loadClientAndRefHrefCallback} callback
     */
    this.loadClientAndRefHref = function(callback, usePersistentStorage)
    {
        var refUrl = this.data.clientHref;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }
        
        var loadFromServerCB={
            onOk : function(obj) {
                					this.parent.client = obj;
                				Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(callback,error);
            }
        }
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB , undefined,true, undefined, Apiomat.Client, false, usePersistentStorage);
    };
    
    /**
     * Callback required by postClient function.
     * callback name postClientCallback
     * @param {function} onOk Function is called when everything is ok. (containing refHref as {string})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Adds a given reference to this object
	 * @param _refData reference
	 * @param {postClientCallback} _callback
     */
    this.postClient = function(_refData, _callback, usePersistentStorage) 
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
                                     this.parent.client = _refData;
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
            Apiomat.Datastore.getInstance( ).sendOffline( "POST", this.getHref(), _refData, "client", callback );
        }
        else
        {
            Apiomat.Datastore.getInstance().postOnServer(_refData, callback, this.data.clientHref, usePersistentStorage);
        }
    };
	
    /**
     * Callback required by removeClient function.
     * callback name removeClientCallback
     * @param {function} onOk Function is called when everything is ok.
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /**
     * remove a given reference to this object
	 * @param _refData reference
	 * @param {removeClientCallback} _callback
     */
    this.removeClient = function(_refData, _callback, usePersistentStorage) 
    {
        var id = _refData.getHref().substring(_refData.getHref().lastIndexOf("/") + 1);
        var deleteHref = this.data.clientHref + "/" + id;
        var callback = {
            onOk : function(obj) {
                             this.parent.client = undefined
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
    
        
    var insurance = undefined;
    
    /**
     * Getter for local linked variable
     * @return {string} attributeName 
     */
    this.getInsurance = function() 
    {
           return this.insurance !== null? this.insurance : undefined;
     
    };
	
    /**
     * Callback required by loadInsurance function.
     * callback name loadInsuranceCallback
	      * @param {function} onOk Function is called when everything is ok. (containing referenced object as {object})
	      * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) and
     * add result from server to member variable of this class.
	 * @param {loadInsuranceCallback} callback
	 */
    this.loadInsurance = function(callback, usePersistentStorage) 
    {
        var refUrl = this.data.insuranceHref;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }    
        var loadFromServerCB={
            onOk : function(obj, meta) {
                				this.parent.insurance = obj;
                                Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                if (error.statusCode==204) {
                    this.parent.insurance = null;
                }
				Apiomat.Datastore.negativeCallback(callback,error);
            }
        };
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB, undefined,false, undefined, Apiomat.Insurance, false, usePersistentStorage);
    };
	
    /**
     * Callback required by loadInsuranceAndRefHref function.
     * callback name loadInsuranceAndRefHrefCallback
          * @param {function} onOk Function is called when everything is ok. (containing referenced objects with refHref as {object})
     	 * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) with refHref and
     * add result from server to member variable of this class.
	 * @param {loadInsuranceAndRefHrefCallback} callback
     */
    this.loadInsuranceAndRefHref = function(callback, usePersistentStorage)
    {
        var refUrl = this.data.insuranceHref;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }
        
        var loadFromServerCB={
            onOk : function(obj) {
                					this.parent.insurance = obj;
                				Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(callback,error);
            }
        }
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB , undefined,true, undefined, Apiomat.Insurance, false, usePersistentStorage);
    };
    
    /**
     * Callback required by postInsurance function.
     * callback name postInsuranceCallback
     * @param {function} onOk Function is called when everything is ok. (containing refHref as {string})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Adds a given reference to this object
	 * @param _refData reference
	 * @param {postInsuranceCallback} _callback
     */
    this.postInsurance = function(_refData, _callback, usePersistentStorage) 
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
                                     this.parent.insurance = _refData;
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
            Apiomat.Datastore.getInstance( ).sendOffline( "POST", this.getHref(), _refData, "insurance", callback );
        }
        else
        {
            Apiomat.Datastore.getInstance().postOnServer(_refData, callback, this.data.insuranceHref, usePersistentStorage);
        }
    };
	
    /**
     * Callback required by removeInsurance function.
     * callback name removeInsuranceCallback
     * @param {function} onOk Function is called when everything is ok.
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /**
     * remove a given reference to this object
	 * @param _refData reference
	 * @param {removeInsuranceCallback} _callback
     */
    this.removeInsurance = function(_refData, _callback, usePersistentStorage) 
    {
        var id = _refData.getHref().substring(_refData.getHref().lastIndexOf("/") + 1);
        var deleteHref = this.data.insuranceHref + "/" + id;
        var callback = {
            onOk : function(obj) {
                             this.parent.insurance = undefined
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
    
        
    var salesman = undefined;
    
    /**
     * Getter for local linked variable
     * @return {string} attributeName 
     */
    this.getSalesman = function() 
    {
           return this.salesman !== null? this.salesman : undefined;
     
    };
	
    /**
     * Callback required by loadSalesman function.
     * callback name loadSalesmanCallback
	      * @param {function} onOk Function is called when everything is ok. (containing referenced object as {object})
	      * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) and
     * add result from server to member variable of this class.
	 * @param {loadSalesmanCallback} callback
	 */
    this.loadSalesman = function(callback, usePersistentStorage) 
    {
        var refUrl = this.data.salesmanHref;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }    
        var loadFromServerCB={
            onOk : function(obj, meta) {
                				this.parent.salesman = obj;
                                Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                if (error.statusCode==204) {
                    this.parent.salesman = null;
                }
				Apiomat.Datastore.negativeCallback(callback,error);
            }
        };
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB, undefined,false, undefined, Apiomat.Salesman, false, usePersistentStorage);
    };
	
    /**
     * Callback required by loadSalesmanAndRefHref function.
     * callback name loadSalesmanAndRefHrefCallback
          * @param {function} onOk Function is called when everything is ok. (containing referenced objects with refHref as {object})
     	 * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /** 
     * Load referenced object(s) with refHref and
     * add result from server to member variable of this class.
	 * @param {loadSalesmanAndRefHrefCallback} callback
     */
    this.loadSalesmanAndRefHref = function(callback, usePersistentStorage)
    {
        var refUrl = this.data.salesmanHref;
        if (typeof refUrl == "undefined")
        {
            throw new Apiomat.ApiomatRequestError(Apiomat.Status.ATTACHED_HREF_MISSING,200);
        }
        
        var loadFromServerCB={
            onOk : function(obj) {
                					this.parent.salesman = obj;
                				Apiomat.Datastore.positiveCallback(callback,obj);
            },
            onError : function(error) {
                Apiomat.Datastore.negativeCallback(callback,error);
            }
        }
        loadFromServerCB.parent=this;
        Apiomat.Datastore.getInstance().loadFromServer(refUrl,loadFromServerCB , undefined,true, undefined, Apiomat.Salesman, false, usePersistentStorage);
    };
    
    /**
     * Callback required by postSalesman function.
     * callback name postSalesmanCallback
     * @param {function} onOk Function is called when everything is ok. (containing refHref as {string})
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
	
    /**
     * Adds a given reference to this object
	 * @param _refData reference
	 * @param {postSalesmanCallback} _callback
     */
    this.postSalesman = function(_refData, _callback, usePersistentStorage) 
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
                                     this.parent.salesman = _refData;
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
            Apiomat.Datastore.getInstance( ).sendOffline( "POST", this.getHref(), _refData, "salesman", callback );
        }
        else
        {
            Apiomat.Datastore.getInstance().postOnServer(_refData, callback, this.data.salesmanHref, usePersistentStorage);
        }
    };
	
    /**
     * Callback required by removeSalesman function.
     * callback name removeSalesmanCallback
     * @param {function} onOk Function is called when everything is ok.
     * @param {function} onError Function is called when an error occurs. (containing the error object) 
     */
    
    /**
     * remove a given reference to this object
	 * @param _refData reference
	 * @param {removeSalesmanCallback} _callback
     */
    this.removeSalesman = function(_refData, _callback, usePersistentStorage) 
    {
        var id = _refData.getHref().substring(_refData.getHref().lastIndexOf("/") + 1);
        var deleteHref = this.data.salesmanHref + "/" + id;
        var callback = {
            onOk : function(obj) {
                             this.parent.salesman = undefined
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
 * Callback required by getContracts function.
 * callback name getContractsCallback
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
 * @param {getContractsCallback} callback
 */
Apiomat.Contract.getContracts = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Contract, query, callback, false, usePersistentStorage);
};

/**
 * Callback required by getContractsAndRefHref function.
 * callback name getContractsAndRefHrefCallback
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
 * @param {getContractsAndRefHrefCallback} callback which is called when request finished
 */
Apiomat.Contract.getContractsAndRefHref = function(query, callback,withReferencedHrefs, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadListFromServerWithClass(Apiomat.Contract, query, callback, withReferencedHrefs, usePersistentStorage);
};

/**
 * Callback required by getContractsCount function.
 * callback name getContractsCountCallback
 * @param {function} onOk Function is called when everything is ok. (containing count as {number})
 * @param {function} onError Function is called when an error occurs. (containing the error object) 
 */

/**
 * Returns count of objects of this class filtered by the given query from server
 * 
 * @param query a query filtering the results in SQL style (@see <a href="http://doc.apiomat.com">documentation</a>)
 * @param {getContractsCountCallback} callback which is called when request finished
 */
Apiomat.Contract.getContractsCount = function(query, callback, usePersistentStorage) {
    Apiomat.Datastore.getInstance().loadCountFromServer(Apiomat.Contract, undefined, query, callback, usePersistentStorage);
};

/**
 * Deletes the classes that have been fetched with getContracts() (or its async version) before
 *
 * Note: The SDK doesn't contain a query parser, so you need to pass the same query as in the fetch request.
 * Also, if you fetched objects from a class with different queries, the object doesn't get deleted
 *
 * @param {string} query 
 * @param {deleteAllFromStorageCallback} callback to be called after request is done
 */
Apiomat.Contract.deleteAllFromStorage = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(false, Apiomat.Contract, query, callback);
};

/**
 * Deletes the classes that have been fetched with getContractsWithReferencedHref (or its async version) before
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
Apiomat.Contract.deleteAllFromStorageWithReferencedHrefs = function(query, callback) {
    Apiomat.Datastore.getInstance().deleteCollectionFromStorage(true, Apiomat.Contract, query, callback);
};


/* inheritance */
Apiomat.Contract.prototype = new Apiomat.AbstractClientDataModel();
Apiomat.Contract.prototype.constructor = Apiomat.Contract;


Apiomat.Contract.prototype.init=function () {
        this.data = new Object();
    this.client = undefined;
    this.insurance = undefined;
    this.salesman = undefined;
}
/**
 * get simple name
 * @return {string} className
 */
Apiomat.Contract.prototype.getSimpleName = function() {
    return "Contract";
};
/**
 * get module name
 * @return {string} moduleName
 */
Apiomat.Contract.prototype.getModuleName = function() {
    return "InsuranceShop";
};

/* easy getter and setter */


/**
 * get Client
 * @return Client
 */
Apiomat.Contract.prototype.getClient = function() 
{
            return this.data.client !== null ? this.data.client : undefined;
    
};

/**
 * set Client
 * @param Client
 */
Apiomat.Contract.prototype.setClient = function(_client) {
    this.data.client = _client;
};

Apiomat.Contract.prototype.getExpiryBy = function() 
{
    var retDate = this.data.expiryBy;
    return (typeof retDate != 'undefined')? new Date(retDate) : undefined;
};
    Apiomat.Contract.prototype.setExpiryBy = function(_expiryBy) 
{
	if(_expiryBy != null && _expiryBy != undefined){
		this.data.expiryBy = _expiryBy.getTime();
	}
	else{
		this.data.expiryBy = null;
	}
};
    

/**
 * get Insurance
 * @return Insurance
 */
Apiomat.Contract.prototype.getInsurance = function() 
{
            return this.data.insurance !== null ? this.data.insurance : undefined;
    
};

/**
 * set Insurance
 * @param Insurance
 */
Apiomat.Contract.prototype.setInsurance = function(_insurance) {
    this.data.insurance = _insurance;
};


/**
 * get Salesman
 * @return Salesman
 */
Apiomat.Contract.prototype.getSalesman = function() 
{
            return this.data.salesman !== null ? this.data.salesman : undefined;
    
};

/**
 * set Salesman
 * @param Salesman
 */
Apiomat.Contract.prototype.setSalesman = function(_salesman) {
    this.data.salesman = _salesman;
};


})(typeof exports === 'undefined' ? Apiomat
        : exports);
