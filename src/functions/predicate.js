
/**
 * @memberof Rx
 * @classdesc
 * A functional interface (callback) that returns a value for the given input value.
 * @example
 * local Predicate = require "RxLua.functions.predicate"
 * 
 * local rand = Predicate(function (a)
 *     return math.random(a)
 * end)
 * @interface
 */
class Predicate{
    /**
     *  Test the given input value and return a value.
     * @param {*} a
     * @returns {*}
     */
    test(a){}
}