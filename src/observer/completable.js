/**
 * @memberof Rx
 * @classdesc
 * Provides a mechanism for receiving push-based notification of a valueless completion or an error.
 * <p>
 * When a <code>CompletableObserver</code> is subscribed to a {@link Rx.CompletableSource} through the [subscribe(CompletableObserver)]{@link Rx.CompletableSource#subscribe} method,
 * the <code>CompletableSource</code> calls [onSubscribe(Disposable)]{@link Rx.CompletableObserver#onSubscribe}  with a {@link Rx.Disposable} that allows
 * disposing the sequence at any time. A well-behaved
 * <code>CompletableSource</code> will call a <code>CompletableObserver</code>'s [onError(Throwable)]{@link Rx.CompletableObserver#onError}
 * or [onComplete()]{@link Rx.CompletableObserver#onComplete} method exactly once as they are considered mutually exclusive <strong>terminal signals</strong>.
 * <p>
 * Calling the <code>CompletableObserver</code>'s method must happen in a serialized fashion, that is, they must not
 * be invoked concurrently by multiple threads in an overlapping fashion and the invocation pattern must
 * adhere to the following protocol:
 * <pre><code>    onSubscribe (onError | onComplete)?</code></pre>
 * <p>
 * Subscribing a <code>CompletableObserver</code> to multiple <code>CompletableSource</code>s is not recommended. If such reuse
 * happens, it is the duty of the <code>CompletableObserver</code> implementation to be ready to receive multiple calls to
 * its methods and ensure proper concurrent behavior of its business logic.
 * <p>
 * Calling [onSubscribe(Disposable)]{@link Rx.CompletableObserver#onSubscribe} or [onError(Throwable)]{@link Rx.CompletableObserver#onError} with a
 * <code>nil</code> argument is forbidden.
 * <p>
 * The implementations of the <code>onXXX</code> methods should avoid throwing runtime exceptions other than the following cases:
 * <ul>
 * <li>If the argument is <code>nil</code>, the methods can throw an error.
 * Note though that RxLua prevents <code>nil</code>s to enter into the flow and thus there is generally no
 * need to check for nulls in flows assembled from standard sources and intermediate operators.
 * </li>
 * </ul>
 * @see <a href="http://reactivex.io/documentation/observable.html">ReactiveX documentation: Observable</a>
 * @interface
 */
class CompletableObserver {

    /**
     * Provides the CompletableObserver with the means of cancelling (disposing) the
     * connection (channel) with the Completable in both
     * synchronous (from within <code>onSubscribe(Disposable)</code> itself) and asynchronous manner.
     * @param {Rx.Disposable} d the Disposable instance whose {@link Rx.Disposable#dispose} can
     * be called anytime to cancel the connection
     */
    onSubscribe(d){}

    /**
     * Notifies the CompletableObserver that the {@link Rx.Completable} has finished sending
     * push-based notifications.
     * <p>
     * The {@link Rx.Completable} will not call this method if it calls [onError(Throwable)]{@link Rx.CompletableObserver#onError}.
     */
    onComplete(){}

    /**
     * Notifies the CompletableObserver that the {@link Rx.Completable} has experienced an error condition.
     * <p>
     * If the {@link Rx.Completable} calls this method, it will not thereafter call [onSuccess]{@link Rx.CompletableObserver#onSuccess}.
     * @param {*} e the exception encountered by the Completable
     */
    onError(e){}
}
