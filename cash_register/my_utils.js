// THIS IS YOUR CUSTOM JAVASCRIPT UTILITY LIBRARY
// This file is already included in you project!
// Make use of your utility functions, and create some new ones!

(function(){

    this.myUtils = {}

    myUtils = {}

    myUtils.myEach = function myEach(arr, callback){
        var len = arr.length;
        for(var i=0; i<len; i++){
            callback(arr[i], i, arr);
        }
    };

    myUtils.myMap = function myMap(arr, callback) {
        var arr1 = [ ];
        for (var i = 0; i < arr.length; i++) {
            arr1[i] = callback(arr[i], i, arr);
    }
        return arr1;
    };

    // your total is the value you want to initiate with
     myUtils.myReduce = function myReduce(arr, cb, val){
        var len = arr.length;
          val = val || 0;
          for(var i=0; i<len; i++){
             val = cb(val, arr[i], i, arr)
          }
          return val;
      }

    
    // myUtils.buildElement
    
    // myUtils.toDollarAmount;
    // myUtils.toCurrencyString;
    
}.call(this))
