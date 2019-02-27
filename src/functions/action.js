
/**
 * @memberof Rx
 * @classdesc
 * A functional interface similar to Runnable but allows throwing a checked exception.
 * @example
 * local Action = require "RxLua.functions.action"
 * 
 * local action = Action(function ()
 *     print("Hello World")
 * end)
 * @interface
 */
class Action{
    /**
     * Runs the action and optionally throws a checked exception.
     * @throws Exception if the implementation wishes to throw a checked exception
     */
    run(){}
}