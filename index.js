let myfunctions = require('./source/myfunctions')

if (typeof exports !== 'undefined'){
    if (typeof module !== 'undefined' && module.exports){
        exports = module.exports =  myfunctions;      
    }
    exports.myfunctions = myfunctions;
   
} else{
    root.myfunctions = myfunctions;  
}