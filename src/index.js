/**
 * @license MIT
 * @copyright 2019 Alexis Munsayac
 * @author Alexis Munsayac <alexis.munsayac@gmail.com>
 * @namespace Rx
 * @example
 * local Rx = require "RxLua"
 * 
 * Rx.Observable.create(function (e)
 *     e:onNext("Hello")
 *     e:onNext("World")
 *     e:onComplete()
 * end)
 * :subscribe(
 *     print, 
 *     function (t)
 *         print("an error occured!", t)
 *     end, 
 *     function ()
 *         print("Completed!")
 *     end 
 * )
 */
/**
 * Functions are the main mechanism for abstraction of statements and expressions in Lua.
 * @external function
 * @see {@link https://www.lua.org/pil/5.html}
 */
/**
 * The boolean type has two values, false and true, which represent the traditional boolean values.
 * @external boolean
 * @see {@link https://www.lua.org/pil/2.2.html}
 */
/**
 * Strings have the usual meaning: a sequence of characters.
 * @external string 
 * @see {@link https://www.lua.org/pil/2.4.html}
 */
/**
 * The table type implements associative arrays.
 * @external table
 * @see {@link https://www.lua.org/pil/2.5.html}
 */
/**
 * The number type represents real (double-precision floating-point) numbers.
 * @external number
 * @see {@link https://www.lua.org/pil/2.3.html}
 */