
/**
 * @memberof Rx
 * @classdesc
 * Abstraction over an {@link Rx.Observer} that allows associating
 * a resource with it.
 * <p>
 * The [onNext(Object)]{@link Rx.ObservableEmitter#onNext}, [onError(Throwable)]{@link Rx.ObservableEmitter#onError}
 * and [onComplete()]{@link Rx.ObservableEmitter#onComplete} methods should be called in a sequential manner, just like the
 * {@link Rx.Observer}'s methods should be.
 * <p>
 * The emitter allows the registration of a single resource, in the form of a {@link Rx.Disposable}
 * via [setDisposable(Disposable)]{@link Rx.ObservableEmitter#setDisposable}
 * respectively. The emitter implementations will dispose/cancel this instance when the
 * downstream cancels the flow or after the event generator logic calls [onError(Throwable)]{@link Rx.ObservableEmitter#onError} or
 * [onComplete()]{@link Rx.ObservableEmitter#onComplete} succeeds.
 * <p>
 * Only one <code>Disposable</code> object can be associated with the emitter at
 * a time. Calling <code>setDisposable</code> method will dispose any previous object. If there
 * is a need for handling multiple resources, one can create a {@link Rx.CompositeDisposable}
 * and associate that with the emitter instead.
 *
 * @implements Rx.Emitter
 * @interface
 */
class ObservableEmitter{

    /**
     * Sets a Disposable on this emitter; any previous {@link Rx.Disposable}
     * will be disposed/cancelled.
     * @param {Disposable} d the disposable, nil is allowed
     */
    setDisposable(d){}

    /**
     * Returns true if the downstream disposed the sequence or the
     * emitter was terminated via [onError(Throwable)]{@link Rx.ObservableEmitter#onError} or [onComplete()]{@link Rx.ObservableEmitter#onComplete}
     * @return {boolean} true if the downstream disposed the sequence or the emitter was terminated
     */
    isDisposed(){}

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
    onNext(){}
}
