/**
 * @memberof Rx
 * @classdesc
 * Represents a basic {@link Rx.Completable} source base interface,
 * consumable via an {@link Rx.CompletableObserver}.
 * <p>
 * This class also serves the base type for custom operators wrapped into
 * Maybe via {@link Rx.Completable.create}.
 * @interface
 */
class CompletableSource {

    /**
     * Subscribes the given CompletableObserver to this CompletableSource instance.
     * @param {Rx.CompletableObserver} co the CompletableObserver, not nil
     */
     subscribe(co){}
}