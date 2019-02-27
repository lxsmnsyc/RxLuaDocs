
/**
 * @memberof Rx
 * @classdesc
 * Provides a mechanism for receiving push-based notifications.
 * <p>
 * When an <code>Observer</code> is subscribed to an {@link Rx.ObservableSource} through the {@link Rx.ObservableSource#subscribe} method,
 * the <code>ObservableSource</code> calls [onSubscribe(Disposable)]{@link Rx.Observer#onSubscribe} with a {@link Rx.Disposable} that allows
 * disposing the sequence at any time, then the
 * <code>ObservableSource</code> may call the Observer's [onNext]{@link Rx.Observer#onNext} method any number of times
 * to provide notifications. A well-behaved
 * <code>ObservableSource</code> will call an <code>Observer</code>'s [onComplete]{@link Rx.Observer#onComplete} method exactly once or the <code>Observer</code>'s
 * [onError]{@link Rx.Observer#onError} method exactly once.
 * <p>
 * Calling the <code>Observer</code>'s method must happen in a serialized fashion, that is, they must not
 * be invoked concurrently by multiple threads in an overlapping fashion and the invocation pattern must
 * adhere to the following protocol:
 * <pre><code>    onSubscribe onNext* (onError | onComplete)?</code></pre>
 * <p>
 * Subscribing an <code>Observer</code> to multiple <code>ObservableSource</code>s is not recommended. If such reuse
 * happens, it is the duty of the <code>Observer</code> implementation to be ready to receive multiple calls to
 * its methods and ensure proper concurrent behavior of its business logic.
 * <p>
 * Calling [onSubscribe(Disposable)]{@link Rx.Observer#onSubscribe}, [onNext(Object)]{@link Rx.Observer#onNext} or [onError(Throwable)]{@link Rx.Observer#onError} with a
 * <code>nil</code>  argument is forbidden.
 * <p>
 * The implementations of the <code>onXXX</code> methods should avoid throwing runtime exceptions other than the following cases
 * (see <a href="https://github.com/reactive-streams/reactive-streams-jvm#2.13">Rule 2.13</a> of the Reactive Streams specification):
 * <ul>
 * <li>If the argument is <code>nil</code>, the methods can throw a error.
 * Note though that RxLua prevents <code>nil</code>s to enter into the flow and thus there is generally no
 * need to check for nils in flows assembled from standard sources and intermediate operators.
 * </li>
 * </ul>
 * From the <code>Observable</code>'s perspective, an <code>Observer</code> is the end consumer thus it is the <code>Observer</code>'s
 * responsibility to handle the error case and signal it "further down". This means unreliable code in the <code>onXXX</code>
 * methods should be wrapped into `pcall` or `xpcall` {@see {@link https://www.lua.org/pil/8.4.html}}, specifically in [onError(Throwable)]{@link Rx.Observer#onError} or [onComplete]{@link Rx.Observer#onComplete}, and handled there
 * (for example, by logging it or presenting the user with an error dialog). However, if the error would be thrown from
 * {@link #onNext(Object)}, <a href="https://github.com/reactive-streams/reactive-streams-jvm#2.13">Rule 2.13</a> mandates
 * the implementation calls {@link Disposable#dispose} and signals the exception in a way that is adequate to the target context,
 * for example, by calling [onError(Throwable)]{@link Rx.Observer#onError} on the same <code>Observer</code> instance.
 * @see <a href="http://reactivex.io/documentation/observable.html">ReactiveX documentation: Observable</a>
 * 
 * @interface
 */
class Observer{

    /**
     * Provides the Observer with the means of cancelling (disposing) the
     * connection (channel) with the Observable in both
     * synchronous (from within [onNext(Object)]{@link Rx.Observer#onNext}) and asynchronous manner.
     * @param {Rx.Disposable} d the Disposable instance whose {@link Disposable#dispose} can
     * be called anytime to cancel the connection
     */
    onSubscribe(d){}

    /**
     * Provides the Observer with a new item to observe.
     * <p>
     * The {@link Rx.Observable} may call this method 0 or more times.
     * <p>
     * The <code>Observable}</code> will not call this method again after it calls either [onComplete]{@link Rx.Observer#onComplete} or
     * [onError]{@link Rx.Observer#onError}.
     *
     * @param {*} t the item emitted by the Observable
     */
    onNext(t){}

    /**
     * Notifies the Observer that the {@link Rx.Observable} has experienced an error condition.
     * <p>
     * If the {@link Rx.Observable} calls this method, it will not thereafter call [onNext]{@link Rx.Observer#onNext} or
     * [onComplete]{@link Rx.Observer#onComplete}.
     *
     * @param {*} e the exception encountered by the Observable
     */
    onError(e){}

    /**
     * Notifies the Observer that the {@link Rx.Observable} has finished sending push-based notifications.
     * <p>
     * The {@link Rx.Observable} will not call this method if it calls [onError]{@link Rx.Observer#onError}.
     */
    onComplete(){}
}