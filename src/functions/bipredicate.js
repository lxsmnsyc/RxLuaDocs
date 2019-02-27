
/**
 * @memberof Rx
 * @classdesc
 * A functional interface (callback) that returns a value for the given input values.
 * @example
 * local BiPredicate = require "RxLua.functions.bipredicate"
 * 
 * local equals = BiPredicate(function (a, b)
 *     return a == b
 * end)
 * @interface
 */
class BiPredicate{
    /**
     *  Test the given input values and return a value.
     * @param {*} a
     * @param {*} b
     * @returns {*}
     */
    test(a){}
}