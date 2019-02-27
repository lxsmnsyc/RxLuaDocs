/**
 * @memberof Rx
 * @classdesc
 * Provides a mechanism for receiving push-based notification of a single value or an error.
 * <p>
 * When a {@link Rx.SingleObserver} is subscribed to a {@link Rx.SingleSource} through the [subscribe(SingleObserver)]{@link Rx.SingleSource#subscribe} method,
 * the <code>SingleSource</code> calls [onSubscribe(Disposable)]{@link Rx.SingleObserver#onSubscribe}  with a {@link Rx.Disposable} that allows
 * disposing the sequence at any time. A well-behaved
 * <code>SingleSource</code> will call a <code>SingleObserver</code>'s [onSuccess(Object)]{@link Rx.SingleObserver#onSuccess} method exactly once or the <code>SingleObserver</code>'s
 * [onError(Throwable)]{@link Rx.SingleObserver#onError} method exactly once as they are considered mutually exclusive <strong>terminal signals</strong>.
 * <p>
 * Calling the <code>SingleObserver</code>'s method must happen in a serialized fashion, that is, they must not
 * be invoked concurrently by multiple threads in an overlapping fashion and the invocation pattern must
 * adhere to the following protocol:
 * <pre><code>    onSubscribe (onSuccess | onError)?</code></pre>
 * <p>
 * Subscribing a <code>SingleObserver</code> to multiple <code>SingleSource</code>s is not recommended. If such reuse
 * happens, it is the duty of the <code>SingleObserver</code> implementation to be ready to receive multiple calls to
 * its methods and ensure proper concurrent behavior of its business logic.
 * <p>
 * Calling [onSubscribe(Disposable)]{@link Rx.SingleObserver#onSubscribe}, [onSuccess(Object)]{@link Rx.SingleObserver#onSuccess} or [onError(Throwable)]{@link Rx.SingleObserver#onError} with a
 * <code>nil</code> argument is forbidden.
 * <p>
 * The implementations of the <code>onXXX</code> methods should avoid throwing runtime exceptions other than the following cases:
 * <ul>
 * <li>If the argument is <code>nil</code>, the methods can throw an error.
 * Note though that RxLua prevents <code>nil</code>s to enter into the flow and thus there is generally no
 * need to check for nils in flows assembled from standard sources and intermediate operators.
 * </li>
 * </ul>
 * @see <a href="http://reactivex.io/documentation/observable.html">ReactiveX documentation: Observable</a>
 * 
 * @interface
 */
class SingleObserver{

    /**
     * Provides the SingleObserver with the means of cancelling (disposing) the
     * connection (channel) with the Single in both
     * synchronous (from within <code>onSubscribe(Disposable)</code> itself) and asynchronous manner.
     * @param {Rx.Disposable} d the Disposable instance whose {@link Rx.Disposable#dispose} can
     * be called anytime to cancel the connection
     */
    onSubscribe(d){}

    /**
     * Notifies the SingleObserver with a single item and that the {@link Rx.Single} has finished sending
     * push-based notifications.
     * <p>
     * The {@link Rx.Single} will not call this method if it calls [onError(Throwable)]{@link Rx.SingleObserver#onError}.
     *
     * @param {*} t the item emitted by the Single
     */
    onSuccess(t){}

    /**
     * Notifies the SingleObserver that the {@link Rx.Single} has experienced an error condition.
     * <p>
     * If the {@link Rx.Single} calls this method, it will not thereafter call [onSuccess]{@link Rx.SingleObserver#onSuccess}.
     *
     * @param {*} e the exception encountered by the Single
     */
    onError(e){}
}