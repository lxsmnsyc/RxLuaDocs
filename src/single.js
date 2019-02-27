/**
 * @memberof Rx
 * @classdesc
 * The </code>Single</code> class implements the Reactive Pattern for a single value response.
 * <p>
 * </code>Single</code> behaves similarly to {@link Rx.Observable} except that it can only emit either a single successful
 * value or an error (there is no "onComplete" notification as there is for an {@link Rx.Observable}).
 * <p>
 * The </code>Single</code> class implements the {@link Rx.SingleSource} base interface and the default consumer
 * type it interacts with is the {@link Rx.SingleObserver} via the [subscribe(SingleObserver)]{@link Rx.Single#subscribe} method.
 * <p>
 * The </code>Single</code> operates with the following sequential protocol:
 * <pre>
 *     <code>onSubscribe (onSuccess | onError)?</code>
 * </pre>
 * <p>
 * Note that </code>onSuccess</code> and </code>onError</code> are mutually exclusive events; unlike </code>Observable</code>,
 * </code>onSuccess</code> is never followed by </code>onError</code>.
 * <p>
 * Like </code>Observable</code>, a running </code>Single</code> can be stopped through the {@link Rx.Disposable} instance
 * provided to consumers through {@link Rx.SingleObserver#onSubscribe}.
 * <p>
 * Like an </code>Observable</code>, a </code>Single</code> is lazy, can be either "hot" or "cold", synchronous or
 * asynchronous. </code>Single</code> instances returned by the methods of this class are <em>cold</em>
 * and there is a standard <em>hot</em> implementation in the form of a subject:
 * {@link io.reactivex.subjects.SingleSubject SingleSubject}.
 * <p>
 * The documentation for this class makes use of marble diagrams. The following legend explains these diagrams:
 * <p>
 * <img width="640" height="301" src="https://raw.github.com/wiki/ReactiveX/RxJava/images/rx-operators/Single.legend.png" alt="">
 * <p>
 * See {@link Flowable} or {@link Rx.Observable} for the
 * implementation of the Reactive Pattern for a stream or vector of values.
 * <p>
 * For more information see the <a href="http://reactivex.io/documentation/single.html">ReactiveX
 * documentation</a>.
 * <p>
 * Note that by design, subscriptions via [subscribe(SingleObserver)]{@link Rx.Single#subscribe} can't be disposed
 * from the outside (hence the
 * </code>void</code> return of the [subscribe(SingleObserver)]{@link Rx.Single#subscribe} method) and it is the
 * responsibility of the implementor of the </code>SingleObserver</code> to allow this to happen.
 * <p>
 * RxLua supports such usage with the standard {@link Rx.DisposableSingleObserver} instance.
 * @example
 * local Single = require "RxLua.single"
 * @implements Rx.SingleSource
 * @hideconstructor
 */
class Single{
    /**
     * Implement this method in subclasses to handle the incoming {@link Rx.SingleObserver}s.
     * <p>There is no need to call any of the plugin hooks on the current <code>Single</code> instance or
     * the <code>SingleObserver</code>; all hooks and basic safeguards have been
     * applied by [subscribe(SingleObserver)]{@link Rx.Single#subscribe} before this method gets called.
     * @param {!Rx.SingleObsever} observer the SingleObserver to handle, not nil
     * @abstract
     * @protected
     */
    subscribeActual(observer){}
    /**
     * Provides an API (via a cold Single) that bridges the reactive world with the callback-style world.
     * 
     * @param {!Rx.SingleOnSubscribe} source 
     * @return {Rx.Single} the emitter that is called when a SingleObserver subscribes to the returned <code>Single</code>
     * 
     * 
     * @example
     * local d = Single.create(function (e)
     *      e:onSuccess("Hello World")
     * end):subscribe(print, print)
     */
    static create(source){}
    /**
     *  Subscribes to a Single but ignore its emission or notification.
     *  @return {Rx.Disposable} a {@link Rx.Disposable} reference can request the {@link Rx.Single} stop work.
     *//** 
     *  Subscribes to a Single and provides a composite callback to handle the item it emits
     *  or any error notification it issues.
     *  @param {!Rx.BiConsumer} onCallback the callback that receives either the success value or the failure error (whichever is not nil)
     *  @return {Rx.Disposable} a {@link Rx.Disposable} reference can request the {@link Rx.Single} stop work.
     *//**
     *  Subscribes to a Single and provides a callback to handle the item it emits.
     *  @param {!Rx.Consumer|function} onSuccess the <code>Consumer</code> you have designed to accept the emission from the Single
     *  @return {Rx.Disposable} a {@link Rx.Disposable} reference can request the {@link Rx.Single} stop work.
     *//**
     *  Subscribes to a Single and provides callbacks to handle the item it emits or any error notification it
     *  issues.
     *  @param {!Rx.Consumer|function} onSuccess the <code>Consumer</code> you have designed to accept the emission from the Single
     *  @param {!Rx.Consumer|function} onError the <code>Consumer</code> you have designed to accept any error notification from the Single
     *  @return {Rx.Disposable} a {@link Rx.Disposable} reference can request the {@link Rx.Single} stop work.
     *//**
     *  @param {!Rx.SingleObserver} observer
     */
    subscribe(){}
    /**
     * Runs multiple SingleSources and signals the events of the first one that signals (disposing
     * the rest).
     * <p>
     * <img width="640" height="515" src="https://raw.github.com/wiki/ReactiveX/RxJava/images/rx-operators/Single.amb.png" alt="">
     * @param {!table} sources the table sequence of sources. A subscription to each source will occur in the same order as in this table.
     * @return {Rx.Single} the new Single instance
     * 
     * @example
     * local A = Single.create(function (emitter)
     *     emitter:onSuccess("Hello")
     * end)
     * local B = Single.create(function (emitter)
     *     emitter:onError("World")
     * end)
     * 
     * Single.amb({A, B}):subscribe(print, print)
     */
    static amb(sources){}
    /**
     * Calls a function for each individual {@link Rx.SingleObserver} to return the actual {@link Rx.SingleSource} to
     * be subscribed to.
     * <p>
     * <img width="640" height="515" src="https://raw.github.com/wiki/ReactiveX/RxJava/images/rx-operators/Single.defer.png" alt="">
     * @param {!function} singleSupplier the function that is called for each individual <code>SingleObserver</code> and
     * returns a SingleSource instance to subscribe to
     * @return {Rx.Single} the new Single instance
     * 
     * @example
     * local deferred = Single.defer(function ()
     *     return Single.create(function (emitter)
     *         emitter:onSuccess("Hello World")
     *     end)
     * end)
     * 
     * deferred:subscribe(
     *     function (x)
     *         print("A single has been born, emitted \""..x.."\"")
     *     end,
     *     print
     * )
     */
    static defer(fn){}
    /**
     * Stores the success value or exception from the current Single and replays it to late SingleObservers.
     * <p>
     * The returned Single subscribes to the current Single when the first SingleObserver subscribes.
     * 
     * @returns {Rx.Single} the new Single instance
     * 
     * @example
     * local A = Single.create(function (e)
     *     e:onSuccess("Hello World")
     * end)
     *  
     * local cached = A:cache()
     * 
     * cached:subscribe(print, print)
     * cached:subscribe(print, print)
     * cached:subscribe(print, print)
     * cached:subscribe(print, print)
     */
    cache(){}
    /**
     * Signals true if the current Single signals a success value that is Object-equals with the value
     * provided.
     * 
     * @param {*} value the value to compare against the success value of this Single
     * @return {Rx.Single} the new Single instance
     * @example
     * Single.create(function (e)
     *     e:onSuccess("Hello World")
     * end)
     * :contains("Hello World")
     * :subscribe(
     *     function (x)
     *         print("Contains result:", x)
     *     end, 
     *     print
     * )
     * @example 
     * Single.create(function (e)
     *     e:onSuccess("Not Hello World")
     * end)
     * :contains("Hello World")
     * :subscribe(
     *     function (x)
     *         print("Contains result:", x)
     *     end, 
     *     print
     * )
     *//**
     * Signals true if the current Single signals a success value that is equal with
     * the value provided by calling a bi-predicate.
     * @param {*} value the value to compare against the success value of this Single
     * @param {!(Rx.BiPredicate|function)} comparer the function that receives the success value of this Single, the value provided
     *                 and should return true if they are considered equal
     * @return {Rx.Single} the new Single instance
     * @example
     * Single.create(function (e)
     *     e:onSuccess(0xDEADBEEF)
     * end)     
     * :contains(2, function (received, base)
     *     return received % base == 0
     * end)
     * :subscribe(
     *     function (x)
     *         print("Found even:", x)
     *     end, 
     *     print
     * )
     * @example
     * Single.create(function (e)
     *     e:onSuccess(0xDEADBEE)
     * end)     
     * :contains(2, function (received, base)
     *     return received % base == 0
     * end)
     * :subscribe(
     *     function (x)
     *         print("Found even:", x)
     *     end, 
     *     print
     * )
     */
    contains(){}
    /**
     * Calls the specified consumer with the success item after this item has been emitted to the downstream.
     * <p>
     * <img width="640" height="460" src="https://raw.github.com/wiki/ReactiveX/RxJava/images/rx-operators/Single.doAfterSuccess.png" alt="">
     * <p>
     * 
     * @param {!(Rx.Consumer|function)} fn the {@link Rx.Consumer} that will be called after emitting an item from upstream to the downstream
     * @returns {Rx.Single} the new Single instance 
     * @example
     * Single.create(function (e)
     *     e:onSuccess("Hello World")
     * end)
     * :doAfterSuccess(function (x)
     *     print("Success: "..x)
     * end)
     * :subscribe(print, print)
     */
    doAfterSuccess(fn){}
    /**
     * Registers an {@link Rx.Action} to be called after this Single invokes either onSuccess or onError.
     * <p>
     * <img width="640" height="460" src="https://raw.github.com/wiki/ReactiveX/RxJava/images/rx-operators/Single.doAfterTerminate.png" alt="">
     * <p>
     * 
     * @param {!(Rx.Action|function)} onAfterTerminate an {@link Rx.Action} to be invoked when the source Single finishes
     * @return {Rx.Single} a Single that emits the same items as the source Single, then invokes the {@link Rx.Action}
     * @example
     * Single.create(function (e)
     *     e:onSuccess("Hello World")
     * end)
     * :doAfterTerminate(function (x)
     *     print("Terminated!")
     * end)
     * :subscribe(print, print)
     * 
     * Single.create(function (e)
     *     e:onError("Oops!")
     * end)
     * :doAfterTerminate(function (x)
     *     print("Terminated!")
     * end)
     * :subscribe(print, print)
     */
    doAfterTerminate(){} 
    /**
     * Calls the specified action after this Single signals onSuccess or onError or gets disposed by
     * the downstream.
     * <p>In case of a race between a terminal event and a dispose call, the provided <code>onFinally</code> action
     * is executed once per subscription.
     * <p>Note that the <code>onFinally</code> action is shared between subscriptions and as such
     * should be thread-safe.
     * <p>
     * <img width="640" height="291" src="https://raw.githubusercontent.com/wiki/ReactiveX/RxJava/images/rx-operators/Single.doFinally.png" alt="">
     * 
     * @param {!(Rx.Action|function)} onFinally the action called when this Single terminates or gets disposed
     * @return {Rx.Single} the new Single instance
     * @example
     * Single.create(function (e)
     *     e:onSuccess("Hello World")
     * end)
     * :doFinally(function (x)
     *     print("Terminated!")
     * end)
     * :subscribe(print, print)
     * 
     * Single.create(function (e)
     *     e:onError("Oops!")
     * end)
     * :doFinally(function (x)
     *     print("Terminated!")
     * end)
     * :subscribe(print, print)
     * 
     * local disposable = Single.create(function (e)
     * end)
     * :doFinally(function (x)
     *     print("Disposed!")
     * end)
     * :subscribe(print, print)     
     * 
     * disposable:dispose()
     */
    doFinally(){}
    /**
     * Calls the shared <code>Action</code> if a SingleObserver subscribed to the current Single
     * disposes the common Disposable it received via onSubscribe.
     * <p>
     * <img width="640" height="332" src="https://raw.githubusercontent.com/wiki/ReactiveX/RxJava/images/rx-operators/Single.doOnDispose.png" alt="">
     * 
     * @param {!(Rx.Action|function)} onDispose the action called when the subscription is disposed
     * @return {Rx.Single} the new Single instance
     * @example
     * local disposable = Single.create(function (e)
     * end)
     * :doOnDispose(function (x)
     *     print("Disposed!")
     * end)
     * :subscribe(print, print) 
     * 
     * disposable:dispose()
     */
    doOnDispose(){}
    /**
     * Calls the shared consumer with the error sent via onError for each
     * SingleObserver that subscribes to the current Single.
     * <p>
     * <img width="640" height="349" src="https://raw.githubusercontent.com/wiki/ReactiveX/RxJava/images/rx-operators/Single.doOnError.2.png" alt="">
     * 
     * @param {!(Rx.Consumer|function)} onError the consumer called with the success value of onError
     * @return {Rx.Single} the new Single instance
     * @example
     * Single.create(function (e)
     *     e:onError("Oh no")
     * end)
     * :doOnError(function (x)
     *     print("Oops!")
     *     print(x)
     * end)
     * :subscribe(print)
     */
    doOnError(){}
    /**
     * Calls the shared consumer with the error sent via onError or the value
     * via onSuccess for each SingleObserver that subscribes to the current Single.
     * @param {!(Rx.BiConsumer|function)} onEvent the consumer called with the success value of onEvent
     * @return {Rx.Single} the new Single instance
     * @example
     * Single.create(function (e)
     *     e:onSuccess("Hello World")
     * end)
     * :doOnEvent(function (x, t)
     *     print("Success! "..x)
     * end)
     * :subscribe(print, print)
     * 
     * Single.create(function (e)
     *     e:onError("Oops!")
     * end)
     * :doOnEvent(function (x, t)
     *     print("Terminated! "..t)
     * end)
     * :subscribe(print, print)
     */
    doOnEvent(){}
    /**
     * Calls the shared consumer with the Disposable sent through the onSubscribe for each
     * SingleObserver that subscribes to the current Single.
     * <p>
     * <img width="640" height="347" src="https://raw.githubusercontent.com/wiki/ReactiveX/RxJava/images/rx-operators/Single.doOnSubscribe.png" alt="">
     * @param {!(Rx.Consumer|function)}onSubscribe the consumer called with the Disposable sent via onSubscribe
     * @return {Single} the new Single instance
     * @example
     * Single.create(function (e)
     *     e:onSuccess("Hello World")
     * end)
     * :doOnSubscribe(function (d)
     *     print("Subscribed!")
     * end)
     * :subscribe(print, print)
     */
    doOnSubscribe(){}
     /**
     * Calls the shared consumer with the success value sent via onSuccess for each
     * SingleObserver that subscribes to the current Single.
     * <p>
     * <img width="640" height="347" src="https://raw.githubusercontent.com/wiki/ReactiveX/RxJava/images/rx-operators/Single.doOnSuccess.2.png" alt="">
     * 
     * @param {!(Rx.Consumer|function)} onSuccess the consumer called with the success value of onSuccess
     * @return {Rx.Single} the new Single instance
     * @example
     * Single.create(function (e)
     *     e:onSuccess("Hello World")
     * end)
     * :doOnSuccess(function (x)
     *     print("Success! "..x)
     * end)
     * :subscribe(print, print)
     */
    doOnSuccess(){}
    /**
     * Returns a Single instance that calls the given onTerminate callback
     * just before this Single completes normally or with an exception.
     * <p>
     * <img width="640" height="305" src="https://raw.github.com/wiki/ReactiveX/RxJava/images/rx-operators/doOnTerminate.png" alt="">
     * @param {!(Rx.Action|function)} onTerminate the action to invoke when the consumer calls onComplete or onError
     * @return {Rx.Single} the new Single instance
     * @example
     * Single.create(function (e)
     *     e:onSuccess("Hello World")
     * end)
     * :doOnTerminate(function (x)     
     *     print("Terminated!")
     * end)
     * :subscribe(print, print)
     * 
     * Single.create(function (e)
     *     e:onError("Oops!")
     * end)
     * :doOnTerminate(function (x)
     *     print("Terminated!")
     * end)
     * :subscribe(print, print)
     */
    doOnTerminate(){}
    /**
     * Compares two SingleSources and emits true if they emit the same value (compared via ==).
     * <p>
     * <img width="640" height="465" src="https://raw.github.com/wiki/ReactiveX/RxJava/images/rx-operators/Single.equals.png" alt="">
     * @param {!Rx.SingleSource} first the first SingleSource instance
     * @param {!Rx.SingleSource} second the second SingleSource instance
     * @return {Rx.Single} the new Single instance
     * @example
     * local A = Single.create(function (e)
     *     e:onSuccess("Hello World")
     * end)
     * local B = Single.create(function (e)
     *     e:onSuccess("Hello World")
     * end)
     * 
     * A:equals(B):subscribe(print, print)
     * 
     * local C = Single.create(function (e)
     *     e:onSuccess("Other Hello")
     * end)
     * 
     * A:equals(C):subscribe(function (x)
     *     print(x and "Passed" or "Failed")
     * end, print)
     */
    equals(){}
    /**
     * Signals an error returned by the callback function for each individual SingleObserver.
     * <p>
     * <img width="640" height="283" src="https://raw.github.com/wiki/ReactiveX/RxJava/images/rx-operators/Single.error.c.png" alt="">
     * @param {function} errorSupplier the function that is called for each individual SingleObserver and returns an error instance to be emitted.
     * @return the new Single instance
     * @example
     * local A = Single.error(function (e)
     *     error("Oopsie!")
     * end)
     * 
     * A:subscribe(print, print)
     */
    static error(){}
    /**
     * Returns a Single that is based on applying a specified function to the item emitted by the source Single,
     * where that function returns a SingleSource.
     * <p>
     * <img width="640" height="300" src="https://raw.github.com/wiki/ReactiveX/RxJava/images/rx-operators/Single.flatMap.png" alt="">
     * 
     * @param {!(Rx.Predicate|function)} mapper a function that, when applied to the item emitted by the source Single, returns a SingleSource
     * @return {Rx.Single} the Single returned from <code>mapper</code> when applied to the item emitted by the source Single
     * @example
     * Single.create(function (e)
     *     e:onSuccess("Hello World")
     * end)
     * :flatMap(function (x)
     *     print("Success: "..x)
     *     return Single.create(function (e)
     *         e:onSuccess("Received: "..x)
     *     end)
     * end)
     * :subscribe(print, print)
     */
    flatMap(){}
    /**
     * Returns a {@link Rx.Completable} that completes based on applying a specified function to the item emitted by the
     * source {@link Rx.Single}, where that function returns a {@link Rx.Completable}.
     * <p>
     * <img width="640" height="267" src="https://raw.github.com/wiki/ReactiveX/RxJava/images/rx-operators/Single.flatMapCompletable.png" alt="">
     * 
     * @param {!(Rx.Predicate|function)} mapper a function that, when applied to the item emitted by the source Single, returns a Completable
     * @return {Rx.Completable} the Completable returned from <code>mapper</code> when applied to the item emitted by the source Single
     * @example
     * Single.create(function (e)
     *     e:onSuccess("Hello World")
     * end)
     * :flatMapCompletable(function (x)
     *     print("Success: "..x)
     *     return Rx.Completable.create(function (e)
     *         e:onComplete()
     *     end)
     * end)
     * :subscribe(function ()
     *     print("completed")
     * end, print)
     */
    flatMapCompletable(){}
}