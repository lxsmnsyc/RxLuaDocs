
/**
 * @memberof Rx
 * @classdesc
 * Abstraction over an {@link Rx.MaybeObserver} that allows associating
 * a resource with it.
 * <p>
 * All methods are safe to call from multiple threads, but note that there is no guarantee
 * whose terminal event will win and get delivered to the downstream.
 * <p>
 * Calling [onSuccess(Object)]{@link Rx.MaybeEmitter#onSuccess} or [onComplete]{@link Rx.MaybeEmitter#onComplete} multiple times has no effect.
 * Calling [onError(Throwable)]{@link Rx.MaybeEmitter#onError} multiple times or after the other two will route the
 * exception into the global error handler via HostError
 * <p>
 * The emitter allows the registration of a single resource, in the form of a {@link Rx.Disposable} via 
 * [setDisposable(Disposable)]{@link Rx.MaybeEmitter#setDisposable}. The emitter implementations will dispose/cancel this instance 
 * when the downstream cancels the flow or after the event generator logic calls [onComplete]{@link Rx.MaybeEmitter#onComplete}
 * or [onError(Throwable)]{@link Rx.MaybeEmitter#onError} succeeds.
 * <p>
 * Only one <code>Disposable</code> object can be associated with the emitter at
 * a time. Calling <code>setDisposable</code> method will dispose any previous object. If there
 * is a need for handling multiple resources, one can create a {@link Rx.CompositeDisposable}
 * and associate that with the emitter instead.
 *
 * @interface
 */
class MaybeEmitter{

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
     * Signal the completion.
     */
    onComplete(){}

    
    /**
     * Sets a Disposable on this emitter; any previous Disposable
     * will be disposed/cancelled.
     * @param {!Rx.Disposable} d the disposable, nil is allowed
     */
    setDisposable(d){}

    /**
     * Returns true if the downstream disposed the sequence or the
     * emitter was terminated via [onSuccess(Object)]{@link Rx.MaybeEmitter#onSuccess}, [onComplete]{@link Rx.MaybeEmitter#onComplete} 
     * or [onError(Throwable)]{@link Rx.MaybeEmitter#onError}
     * @return {boolean} true if the downstream disposed the sequence or the emitter was terminated
     */
    isDisposed(){}
}
