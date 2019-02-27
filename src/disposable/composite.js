/**
 * @memberof Rx
 * @classdesc
 * A disposable container that can hold onto multiple other disposables and
 * offers O(1) add and removal complexity.
 * 
 * @implements Rx.Disposable
 * 
 * @example
 * local A = Disposable()
 * local B = Disposable()
 * local composite = CompositeDisposable(A, B)
 */
class CompositeDisposable{
    /**
     * Creates a CompositeDisposables with the given array of initial elements.
     * @param {...Rx.Disposable=} resources the array of Disposables to start with
     */
    constructor(){}

    /**
     * Adds a disposable(s) to this container or disposes it if the
     * container has been disposed.
     * @param {...Rx.Disposable} d the disposable to add, not nil
     * @return {boolean} true if successful, false if this container has been disposed
     */
    add(d){}
    /**
     * Removes and disposes the given disposable if it is part of this
     * container.
     * @param {!Rx.Disposable} d the disposable to remove and dispose, not nil
     * @return {boolean} true if the operation was successful
     */
    remove(d) {}

    /**
     * Removes (but does not dispose) the given disposable if it is part of this
     * container.
     * @param {!Rx.Disposable} d the disposable to remove, not nil
     * @return {boolean} true if the operation was successful
     */
    delete(d) {}

    /**
     * Atomically clears the container, then disposes all the previously contained Disposables.
     */
    clear() {}
}