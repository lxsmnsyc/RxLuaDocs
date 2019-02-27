/**
 * @memberof Rx
 * @classdesc
 * Represents a basic, non-backpressured {@link Rx.Observable} source base interface,
 * consumable via an {@link Rx.Observer}.
 *
 * @interface
 */
class ObservableSource{

    /**
     * Subscribes the given Observer to this ObservableSource instance.
     * @param {Rx.Observer} observer the Observer, not nil
     */
    subscribe(observer){}
}