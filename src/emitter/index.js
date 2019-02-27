
/**
 * @memberof Rx
 * @classdesc
 * Base interface for emitting signals in a push-fashion in various generator-like source
 * operators (create, generate).
 * <p>
 * Note that the {@link Rx.Emitter#onNext}, {@link Rx.Emitter#onError} and
 * {@link Rx.Emitter#onComplete} methods provided to the function via the {@link Rx.Emitter} instance should be called synchronously,
 * never concurrently. Calling them from multiple threads is not supported and leads to an
 * undefined behavior.
 * 
 * @interface
 */
class Emitter{

    /**
     * Signal a normal value.
     * @param {!*} value the value to signal, not nil
     */
    onNext(value){}

    /**
     * Signal an exception.
     * @param {!*} t the exception, not nil
     */
    onError(t){}

    /**
     * Signal a completion.
     */
    onComplete(){}
}