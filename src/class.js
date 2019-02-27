/**
 * @memberof Rx
 * @classdesc
 * Abstraction layer for implementing object-oriented paradigm for RxLua.
 * Rx.Class provides both classes and interfaces as one, and can inherit from
 * more than one parent.
 * 
 * @example
 * local Disposable = require "RxLua.disposable"
 * 
 * local MyDisposable = Rx.Class("MyDisposable", Disposable){
 *     new = function (self)
 *         self._active = true
 *     end,
 * 
 *     dispose = function (self)
 *         self._active = false
 *     end,
 * 
 *     isDisposed = function (self)
 *         return self._active
 *     end
 * }
 * 
 * local disposable = MyDisposable()
 * print(disposable:isDisposed())
 * disposable:dispose()
 * print(disposable:isDisposed())
 * 
 * @constructor
 * @param {string} name name of the class
 * @param {...Rx.Class=} parents Parent classes to inherit the traits from.
 */
function Class(name, parents){
}

/**
 * @name Rx.Class.instanceof
 * @static
 * @function
 * @description
 * Checks if an object is an instance of a class or of a parent class.
 * 
 * All Rx.Class instances inherits this method as both static and non-static
 * methods
 * 
 * @param {*} object - an object instanciated from Rx.Class instances
 * @param {Rx.Class} class - Rx.Class instance
 * @returns {boolean}
 * @example
 * local d = Rx.Disposable()
 * 
 * print(Rx.Disposable.instanceof(d, Rx.Disposable))
 *//**
 * @name Rx.Class#instanceof
 * @function
 * @description
 * Checks if an object is an instance of a class or of a parent class.
 * @param {Rx.Class} class - Rx.Class instance
 * @returns {boolean}
 * @example
 * local d = Rx.Disposable()
 * 
 * print(d:instanceof(Rx.Disposable))
 */
function test(){

}