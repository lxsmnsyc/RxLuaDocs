
/**
 * @memberof Rx
 * @classdesc
 * An abstract {@link Rx.MaybeObserver} that allows asynchronous cancellation by implementing Disposable.
 *
 * <p>Note that [onSuccess(Object)]{@link Rx.DisposableMaybeObserver#onSuccess}, [onError(Throwable)]{@link Rx.DisposableMaybeObserver#onSuccess} and [onComplete()]{@link Rx.DisposableMaybeObserver#onComplete} are
 * exclusive to each other, unlike a regular {@link Rx.Observer}, and
 * <code>onComplete()</code> is never called after an <code>onSuccess()</code>.
 *
 * <p>Like all other consumers, <code>DisposableMaybeObserver</code> can be subscribed only once.
 * Any subsequent attempt to subscribe it to a new source will yield a ProtocolViolation with messages:
 * <ul>
 *  <li><code>"It is not allowed to subscribe with a(n) <class name> multiple times."</code></li>
 *  <li><code>"Disposable already set!</code>.</li>
 * </ul> 
 *
 * <p>Implementation of [onStart()]{@link Rx.DisposableMaybeObserver#onStart}, [onSuccess(Object)]{@link Rx.DisposableMaybeObserver#onSuccess},  [onError(Throwable)]{@link Rx.DisposableMaybeObserver#onSuccess} and
 * [onComplete()]{@link Rx.DisposableMaybeObserver#onComplete} are not allowed to throw any unchecked exceptions.
 *
 * @implements Rx.Disposable
 * @implements Rx.MaybeObserver
 * @hideconstructor
 */
class DisposableMaybeObserver{
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