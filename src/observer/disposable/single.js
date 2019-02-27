
/**
 * @memberof Rx
 * @classdesc
 * An abstract {@link Rx.SingleObserver} that allows asynchronous cancellation by implementing Disposable.
 *
 * <p>Like all other consumers, <code>DisposableSingleObserver</code> can be subscribed only once.
 * Any subsequent attempt to subscribe it to a new source will yield a ProtocolViolation with messages:
 * <ul>
 *  <li><code>"It is not allowed to subscribe with a(n) <class name> multiple times."</code></li>
 *  <li><code>"Disposable already set!</code>.</li>
 * </ul> 
 *
 * <p>Implementation of [onStart()]{@link Rx.DisposableSingleObserver#onStart}, [onSuccess(Object)]{@link Rx.DisposableSingleObserver#onSuccess}
 * and [onError(Throwable)]{@link Rx.DisposableSingleObserver#onSuccess}
 * are not allowed to throw any unchecked exceptions.
 * 
 * @implements Rx.Disposable
 * @implements Rx.SingleObserver
 * @hideconstructor
 */
class DisposableSingleObserver{
    /**
     * Called once the single upstream Disposable is set via onSubscribe.
     * 
     * @protected
     */
    onStart() {}
    /**
     * @inheritdoc
     */
    onSuccess(){}
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