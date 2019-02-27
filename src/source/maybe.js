
/**
 * @memberof Rx
 * @classdesc
 * Represents a basic {@link Rx.Maybe} source base interface,
 * consumable via an {@link Rx.MaybeObserver}.
 * <p>
 * This class also serves the base type for custom operators wrapped into
 * Maybe via {@link Rx.Maybe.create}.
 *
 * @interface
 */
class MaybeSource{

    /**
     * Subscribes the given MaybeObserver to this MaybeSource instance.
     * @param {Rx.MaybeObserver} observer the MaybeObserver, not nil
     */
    subscribe(observer){}
}
