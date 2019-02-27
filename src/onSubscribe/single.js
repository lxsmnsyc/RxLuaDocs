
/**
 * @memberof Rx
 * @classdesc
 * A functional interface that has a <code>subscribe()</code> method that receives
 * an instance of a {@link Rx.SingleEmitter} instance that allows pushing
 * an event in a cancellation-safe manner.
 * 
 * @interface
 */
class SingleOnSubscribe{
    /**
     * Called for each SingleObserver that subscribes.
     * @param {!Rx.SingleEmitter} emitter the safe emitter instance, never nil
     * @throws Exception on error
     */
    subscribe(emitter){}
}