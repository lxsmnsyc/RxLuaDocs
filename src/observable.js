
/**
 * @memberof Rx
 * @classdesc
 * The Observable class is the non-backpressured, optionally multi-valued base reactive class that
 * offers factory methods, intermediate operators and the ability to consume synchronous
 * and/or asynchronous reactive dataflows.
 * <p>
 * Many operators in the class accept {@link ObservableSource}(s), the base reactive interface
 * for such non-backpressured flows, which <code>Observable</code> itself implements as well.
 * <p>
 * The documentation for this class makes use of marble diagrams. The following legend explains these diagrams:
 * <p>
 * <img width="640" height="317" src="https://raw.github.com/wiki/ReactiveX/RxJava/images/rx-operators/legend.png" alt="">

 * <p>
 * The <code>Observable</code> follows the protocol
 * <pre><code>
 *      onSubscribe onNext* (onError | onComplete)?
 * </code></pre>
 * where
 * the stream can be disposed through the {@link Rx.Disposable} instance provided to consumers through
 * {@link Rx.Observer#onSubscribe}
 * <p>
 * [subscribe(Observer)]{@link Rx.Observable#subscribe(Observer)} does not allow external disposal
 * of a subscription and the {@link Rx.Observer} instance is expected to expose such capability.
 * <p>
 * RxLua supports such usage with the standard {@link Rx.DisposableObserver} instance.
 * 
 * @implements Rx.ObservableSource
 * @hideconstructor
 */
class Observable{
    /**
     * Operator implementations (both source and intermediate) should implement this method that
     * performs the necessary business logic and handles the incoming {@link Rx.Observer}s.
     * <p>There is no need to call any of the plugin hooks on the current <code>Observable</code> instance or
     * the <code>Observer</code>; all hooks and basic safeguards have been
     * applied by [subscribe(Observer)]{@link Rx.Observable#subscribe(Observer)}  before this method gets called.
     * @param {!Rx.Observer} observer the incoming Observer, never nil
     * 
     * @protected
     * @abstract
     */
    subscribeActual(observer){}
}