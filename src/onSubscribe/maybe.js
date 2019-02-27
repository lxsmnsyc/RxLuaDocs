/**
 * @memberof Rx
 * @classdesc
 * A functional interface that has a {@code subscribe()} method that receives
 * an instance of a {@link Rx.MaybeEmitter} instance that allows pushing
 * an event in a cancellation-safe manner.
 * @interface
 */
class  MaybeOnSubscribe{
    /**
     * Called for each MaybeObserver that subscribes.
     * @param {Rx.MaybeEmitter} emitter the safe emitter instance, never nil
     */
    subscribe(emitter){}
}