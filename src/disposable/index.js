
/**
 * @memberof Rx
 * @classdesc
 * Represents a disposable resource.
 * @interface
 */
class Disposable{

    /**
     * Returns true if this resource has been disposed.
     * @returns {Boolean} - true if this resource has been disposed
     */
    isDisposed(){}

    /**
     * Dispose the resource, the operation should be idempotent.
     */
    dispose(){}
}