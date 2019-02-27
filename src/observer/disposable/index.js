
/**
 * @memberof Rx
 * @classdesc
 * An abstract {@link Rx.Observer} that allows asynchronous cancellation by implementing Disposable.
 *
 * <p>All pre-implemented final methods are thread-safe.
 *
 * <p>Use the public [dispose()]{@link Rx.DisposableObserver#dispose} method to dispose the sequence from within an
 * <code>onNext</code> implementation.
 *
 * <p>Like all other consumers, <code>DisposableObserver</code> can be subscribed only once.
 * Any subsequent attempt to subscribe it to a new source will yield a ProtocolViolation with messages:
 * <ul>
 *  <li><code>"It is not allowed to subscribe with a(n) <class name> multiple times."</code></li>
 *  <li><code>"Disposable already set!</code>.</li>
 * </ul> 
 *
 * <p>Implementation of [onStart()]{@link Rx.DisposableObserver#onStart}, [onNext(Object)]{@link Rx.DisposableObserver#onNext}, 
 * [onError(Throwable)]{@link Rx.DisposableObserver#onError} and [onComplete()]{@link Rx.DisposableObserver#onComplete} 
 * are not allowed to throw any unchecked exceptions.
 * 
 * @implements Rx.Disposable
 * @implements Rx.Observer
 * @hideconstructor
 */
class DisposableObserver{
    /**
     * Called once the single upstream Disposable is set via onSubscribe.
     * 
     * @protected
     */
    onStart() {}
    /**
     * @inheritdoc
     */
    onComplete(){}
    /**
     * @inheritdoc
     */
    onNext(){}
    /**
     * @inheritdoc
     */
    onError(){}
    /**
     * @inheritdoc
     */
    dispose(){}
    /**
     * @inheritdoc
     */
    isDisposed(){}
}