/*
 * Tangram
 * Copyright 2009 Baidu Inc. All rights reserved.
 */

///import baidu.ajax.request;
///import baidu.async.Deferred;

/**
 * 支持异步的ajax.get封装.
 * @param {String} url 请求地址.
 * @return {baidu.async.Deferred} Deferred对象,支持链式调用.
 */
baidu.async.get = function(url){
    var deferred = new baidu.async.Deferred();
    baidu.ajax.request(url, {
        onsuccess: function(xhr, responseText) {
            deferred.resolve({xhr: xhr, responseText: responseText}); 
        },
        onfailure: function() {
            deferred.reject({xhr: xhr});
        }
    });
    return deferred;
};