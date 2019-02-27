
/**
 * @memberof Rx
 * @classdesc
 * Provides a mechanism for receiving push-based notification of a single value, an error or completion without any value.
 * <p>
 * When a <code>MaybeObserver</code> is subscribed to a {@link Rx.MaybeSource} through the [subscribe(MaybeObserver)]{@link Rx.MaybeSource#subscribe} method,
 * the <code>MaybeSource</code> calls [onSubscribe(Disposable)]{@link Rx.MaybeObserver#onSubscribe}  with a {@link Rx.Disposable} that allows
 * disposing the sequence at any time. A well-behaved
 * <code>MaybeSource</code> will call a <code>MaybeObserver</code>'s [onSuccess(Object)]{@link Rx.MaybeObserver#onSuccess}, [onError(Throwable)]{@link Rx.MaybeObserver#onError}
 * or [onComplete()]{@link Rx.MaybeObserver#onComplete} method exactly once as they are considered mutually exclusive <strong>terminal signals</strong>.
 * <p>
 * Calling the <code>MaybeObserver</code>'s method must happen in a serialized fashion, that is, they must not
 * be invoked concurrently by multiple threads in an overlapping fashion and the invocation pattern must
 * adhere to the following protocol:
 * <pre><code>    onSubscribe (onSuccess | onError | onComplete)?</code></pre>
 * <p>
 * Note that unlike with the <code>Observable</code> protocol, {@link Rx.MaybeObserver#onComplete} is not called after the success item has been
 * signalled via [onSuccess(Object)]{@link Rx.MaybeObserver#onSuccess}.
 * <p>
 * Subscribing a <code>MaybeObserver</code> to multiple <code>MaybeSource</code>s is not recommended. If such reuse
 * happens, it is the duty of the <code>MaybeObserver</code> implementation to be ready to receive multiple calls to
 * its methods and ensure proper concurrent behavior of its business logic.
 * <p>
 * Calling [onSubscribe(Disposable)]{@link Rx.MaybeObserver#onSubscribe}, [onSuccess(Object)]{@link Rx.MaybeObserver#onSuccess} or [onError(Throwable)]{@link Rx.MaybeObserver#onError} with a
 * <code>nil</code> argument is forbidden.
 * <p>
 * The implementations of the <code>onXXX</code> methods should avoid throwing runtime exceptions other than the following cases:
 * <ul>
 * <li>If the argument is <code>nil</code>, the methods can throw an error.
 * Note though that RxJava prevents <code>nil</code>s to enter into the flow and thus there is generally no
 * need to check for nulls in flows assembled from standard sources and intermediate operators.
 * </li>
 * </ul>
 * @see <a href="http://reactivex.io/documentation/observable.html">ReactiveX documentation: Observable</a>
 * @interface
 */
class MaybeObserver{

    /**
     * Provides the MaybeObserver with the means of cancelling (disposing) the
     * connection (channel) with the Maybe in both
     * synchronous (from within <code>onSubscribe(Disposable)} itself) and asynchronous manner.
     * @param {Rx.Disposable} d the Disposable instance whose {@link Disposable#dispose} can
     * be called anytime to cancel the connection
     */
    onSubscribe(d){}

    /**
     * Notifies the MaybeObserver with one item and that the {@link Rx.Maybe} has finished sending
     * push-based notifications.
     * <p>
     * The {@link Rx.Maybe} will not call this method if it calls {@link MaybeObserver#onError}.
     *
     * @param {*} t the item emitted by the Maybe
     */
    onSuccess(t){}

    /**
     * Notifies the MaybeObserver that the {@link Rx.Maybe} has experienced an error condition.
     * <p>
     * If the {@link Rx.Maybe} calls this method, it will not thereafter call {@link MaybeObserver#onSuccess}.
     *
     * @param {*} e the exception encountered by the Maybe
     */
    onError(e){}

    /**
     * Called once the deferred computation completes normally.
     */
    onComplete(){}
}
