/**
 * @return {Object}
 */
var createInfiniteObject = function() {
    return new Proxy({},{get(a,prop){
        return () => prop;
    }})    
};

/**
 * const obj = createInfiniteObject();
 * obj['abc123'](); // "abc123"
 */