
/**
 * @memberof Rx
 * @classdesc
 * A functional interface (callback) that accepts a single value.
 * @example
 * local Consumer = require "RxLua.functions.consumer"
 * 
 * local c = Consumer(function (a)
 *     someFunction(a)
 * end)
 * @interface
 */
class Consumer{
    /**
     * Performs an operation on the given value.
     * 
     * @param {*} a
     * @throws Exception on error
     */
    accept(){}
}