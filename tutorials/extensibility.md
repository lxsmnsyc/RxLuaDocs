RxLua classes and interfaces are extensible, similar to the other OOP-based ReactiveX implementations (such as RxJava).

To achieve extensibility, we can use the {@link Rx.Class}.
This way, we can create our own definitions of RxLua classes.

For example, if we want to create our own definition of {@link Rx.Disposable}:
```lua
local Disposable = require "RxLua.disposable"

local MyDisposable = Rx.Class("MyDisposable", Disposable){
    new = function (self)
        self._active = true
    end,

    dispose = function (self)
        self._active = false
    end,

    isDisposed = function (self)
        return self._active
    end
}
```

Then using it:
```
local disposable = MyDisposable()
print(disposable:isDisposed())
disposable:dispose()
print(disposable:isDisposed())
```