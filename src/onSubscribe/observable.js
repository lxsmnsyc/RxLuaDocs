
/**
 * @memberof Rx
 * @classdesc
 * A functional interface that has a <code>subscribe()</code> method that receives
 * an instance of an {@link Rx.ObservableEmitter} instance that allows pushing
 * events in a cancellation-safe manner.
 *
 * @interface
 */
class ObservableOnSubscribe{

    /**
     * Called for each Observer that subscribes.
     * @param {Rx.ObservableEmitter} emitter the safe emitter instance, never nil
     */
    subscribe(emitter){}
}