/**
 * @memberof Rx
 * @classdesc
 * A functional interface that has a <code>subscribe()</code> method that receives
 * an instance of a {@link Rx.CompletableEmitter} instance that allows pushing
 * an event in a cancellation-safe manner.
 *
 * @interface
 */
class CompletableOnSubscribe {

    /**
     * Called for each CompletableObserver that subscribes.
     * @param {Rx.CompletableEmitter} emitter the safe emitter instance, never nil
     */
    subscribe(emitter){}
}