/**
 * @memberof Rx
 * @classdesc
 * An abstract {@link Rx.CompletableObserver} that allows asynchronous cancellation by implementing {@link Disposable}.
 *
 * <p>All pre-implemented final methods are thread-safe.
 *
 * <p>Like all other consumers, <code>DisposableCompletableObserver</code> can be subscribed only once.
 * Any subsequent attempt to subscribe it to a new source will yield a ProtocolViolation with messages:
 * <ul>
 *  <li><code>"It is not allowed to subscribe with a(n) <class name> multiple times."</code></li>
 *  <li><code>"Disposable already set!</code>.</li>
 * </ul> 
 *
 * <p>Implementation of [onStart()]{@link Rx.DisposableCompletableObserver#onStart}, [onError(Throwable)]{@link Rx.DisposableCompletableObserver#onError} and
 * [onComplete()]{@link Rx.DisposableCompletableObserver#onComplete} are not allowed to throw any unchecked exceptions.
 * 
 * @implements Rx.Disposable
 * @implements Rx.CompletableObserver
 * @hideconstructor
 */
class DisposableCompletableObserver{
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