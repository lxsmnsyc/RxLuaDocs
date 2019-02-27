
/**
 * @memberof Rx
 * @classdesc
 * A functional interface (callback) that accepts two values (of possibly different types).
 * @example
 * local BiConsumer = require "RxLua.functions.biconsumer"
 * 
 * local equals = BiConsumer(function (a, b)
 *     local result = a == b
 * end)
 * @interface
 */
class BiConsumer{
    /**
     * Performs an operation on the given values.
     * 
     * @param {*} a
     * @param {*} b
     * @throws Exception on error
     */
    accept(){}
}