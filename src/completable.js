
/**
 * @memberof Rx
 * @classdesc
 * The <code>Completable</code> class represents a deferred computation without any value but
 * only indication for completion or exception.
 * <p>
 * <code>Completable</code> behaves similarly to {@link Rx.Observable} except that it can only emit either
 * a completion or error signal (there is no <code>onNext</code> or <code>onSuccess</code> as with the other
 * reactive types).
 * <p>
 * The <code>Completable</code> class implements the {@link Rx.CompletableSource} base interface and the default consumer
 * type it interacts with is the {@link Rx.CompletableObserver} via the [subscribe(CompletableObserver)]{@link Rx.Completable#subscribe} method.
 * The <code>Completable</code> operates with the following sequential protocol:
 * <pre><code>
 *     onSubscribe (onError | onComplete)?
 * </code></pre>
 * <p>
 * Note that as with the <code>Observable</code> protocol, <code>onError</code> and <code>onComplete</code> are mutually exclusive events.
 * <p>
 * Like {@link Rx.Observable}, a running <code>Completable</code> can be stopped through the {@link Rx.Disposable} instance
 * provided to consumers through {@link Rx.CompletableObserver#onSubscribe}.
 * <p>
 * Like an <code>Observable</code>, a <code>Completable</code> is lazy, can be either "hot" or "cold", synchronous or
 * asynchronous. <code>Completable</code> instances returned by the methods of this class are <em>cold</em>
 * and there is a standard <em>hot</em> implementation in the form of a subject:
 * {@link io.reactivex.subjects.CompletableSubject CompletableSubject}.
 * <p>
 * The documentation for this class makes use of marble diagrams. The following legend explains these diagrams:
 * <p>
 * <img width="640" height="577" src="https://raw.github.com/wiki/ReactiveX/RxJava/images/rx-operators/Completable.png" alt="">
 * <p>
 * See {@link Flowable} or {@link Rx.Observable} for the
 * implementation of the Reactive Pattern for a stream or vector of values.
 * <p>
 * Note that by design, subscriptions via [subscribe(CompletableObserver)]{@link Rx.Completable#subscribe} can't be disposed
 * from the outside (hence the
 * <code>void</code> return of the [subscribe(CompletableObserver)]{@link Rx.Completable#subscribe} method) and it is the
 * responsibility of the implementor of the <code>CompletableObserver</code> to allow this to happen.
 * <p>
 * RxLua supports such usage with the standard {@link Rx.DisposableCompletableObserver} instance.
 *
 * @example
 * local Completable = require "RxLua.completable"
 * @implements Rx.CompletableSource
 * @hideconstructor
 */
class Completable{
    /**
     * Implement this method to handle the incoming {@link Rx.CompletableObserver}s and
     * perform the business logic in your operator.
     * <p>There is no need to call any of the plugin hooks on the current <code>Completable</code> instance or
     * the <code>CompletableObserver</code>; all hooks and basic safeguards have been
     * applied by [subscribe(CompletableObserver)]{@link Rx.Completable#subscribe} before this method gets called.
     * @param observer the CompletableObserver instance, never nil
     * 
     * @protected
     * @abstract
     */
    subscribeActual(observer){}
}