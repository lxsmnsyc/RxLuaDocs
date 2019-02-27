
/**
 * @memberof Rx
 * @classdesc
 * Represents a basic {@link Rx.Single} source base interface,
 * consumable via an {@link Rx.SingleObserver}.
 * <p>
 * This class also serves the base type for custom operators wrapped into
 * Single via {@link Rx.Single.create}.
 * 
 * @interface
 */
class SingleSource{
    /**
     * Subscribes the given SingleObserver to this SingleSource instance.
     * @param {!Rx.SingleObserver} observer the SingleObserver, not nil
     */
    subscribe(observer){}
}