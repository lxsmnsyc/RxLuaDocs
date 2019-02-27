
/**
 * @memberof Rx
 * @classdesc
 * The <code>Maybe</code> class represents a deferred computation and emission of a single value, no value at all or an exception.
 * <p>
 * The <code>Maybe</code> class implements the {@link Rx.MaybeSource} base interface and the default consumer
 * type it interacts with is the {@link Rx.MaybeObserver} via the [subscribe(MaybeObserver)]{@link Rx.Maybe#subscribe} method.
 * <p>
 * The <code>Maybe</code> operates with the following sequential protocol:
 * <pre><code>
 *     onSubscribe (onSuccess | onError | onComplete)?
 * </code></pre>
 * <p>
 * Note that <code>onSuccess</code>, <code>onError</code> and <code>onComplete</code> are mutually exclusive events; unlike <code>Observable</code>,
 * <code>onSuccess</code> is never followed by <code>onError</code> or <code>onComplete</code>.
 * <p>
 * Like {@link Rx.Observable}, a running <code>Maybe</code> can be stopped through the {@link Rx.Disposable} instance
 * provided to consumers through {@link MaybeObserver#onSubscribe}.
 * <p>
 * Like an <code>Observable</code>, a <code>Maybe</code> is lazy, can be either "hot" or "cold", synchronous or
 * asynchronous. <code>Maybe</code> instances returned by the methods of this class are <em>cold</em>
 * and there is a standard <em>hot</em> implementation in the form of a subject:
 * {@link io.reactivex.subjects.MaybeSubject MaybeSubject}.
 * <p>
 * The documentation for this class makes use of marble diagrams. The following legend explains these diagrams:
 * <p>
 * <img width="640" height="370" src="https://raw.github.com/wiki/ReactiveX/RxJava/images/rx-operators/maybe.png" alt="">
 * <p>
 * See {@link Flowable} or {@link Rx.Observable} for the
 * implementation of the Reactive Pattern for a stream or vector of values.
 * <p>
 * Note that by design, subscriptions via [subscribe(MaybeObserver)]{@link Rx.Maybe#subscribe} can't be disposed
 * from the outside (hence the
 * <code>void</code> return of the [subscribe(MaybeObserver)]{@link Rx.Maybe#subscribe} method) and it is the
 * responsibility of the implementor of the <code>MaybeObserver</code> to allow this to happen.
 * <p>
 * RxLua supports such usage with the standard {@link Rx.DisposableMaybeObserver} instance.
 * 
 * @implements Rx.MaybeSource
 * @hideconstructor
 */
 class Maybe{
    /**
     * Implement this method in subclasses to handle the incoming {@link Rx.MaybeObserver}s.
     * <p>There is no need to call any of the plugin hooks on the current <code>Maybe</code> instance or
     * the <code>MaybeObserver</code>; all hooks and basic safeguards have been
     * applied by [subscribe(MaybeObserver)]{@link Rx.Maybe#subscribe} before this method gets called.
     * @param {Rx.MaybeObserver} observer the MaybeObserver to handle, not nil
     * 
     * @protected
     * @abstract
     */
    subscribeActual(observer){}
 }