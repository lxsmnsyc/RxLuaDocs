
/**
 * @memberof Rx
 * @classdesc
 * Abstraction over an {@link Rx.SingleObserver} that allows associating
 * a resource with it.
 * <p>
 * Calling [onSuccess(Object)]{@link Rx.SingleEmitter#onSuccess} multiple times has no effect.
 * Calling [onError(Throwable)]{@link Rx.SingleEmitter#onError} multiple times or after <code>onSuccess</code> will route the
 * exception into the global error handler via HostError.
 * <p>
 * The emitter allows the registration of a single resource, in the form of a {@link Rx.Disposable} via 
 * [setDisposable(Disposable)]{@link Rx.SingleEmitter#setDisposable}. The emitter implementations will dispose/cancel this instance 
 * when the downstream cancels the flow or after the event generator logic calls [onSuccess(Object)]{@link Rx.SingleEmitter#onSuccess}
 * or [onError(Throwable)]{@link Rx.SingleEmitter#onError} succeeds.
 * <p>
 * Only one <code>Disposable</code> object can be associated with the emitter at
 * a time. Calling <code>setDisposable</code> method will dispose any previous object. If there
 * is a need for handling multiple resources, one can create a {@link Rx.CompositeDisposable}
 * and associate that with the emitter instead.
 *
 * @interface
 */
class SingleEmitter{
    /**
     * Signal a success value.
     * @param {!*} t the value, not nil
     */
    onSuccess(t){}

    /**
     * Signal an exception.
     * @param {!*} t the exception, not nil
     */
    onError(t){}

    /**
     * Sets a Disposable on this emitter; any previous Disposable
     * will be disposed/cancelled.
     * @param {!Rx.Disposable} d the disposable, nil is allowed
     */
    setDisposable(d){}

    /**
     * Returns true if the downstream disposed the sequence or the
     * emitter was terminated via [onSuccess(Object)]{@link Rx.SingleEmitter#onSuccess} or [onError(Throwable)]{@link Rx.SingleEmitter#onError}
     * @return {boolean} true if the downstream disposed the sequence or the emitter was terminated
     */
    isDisposed(){}
}