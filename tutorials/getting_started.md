# Installation
* To install RxLua, you can get the whole library from the [Github Repo](https://github.com/lxsmnsyc/rxlua).
* Download the repo and extract its contents. Make sure that the files are inside the "RxLua" folder. (or whatever folder you want to name it.)
  
# Usage
Use the require function along with the name of your folder (in our case, "RxLua").
```lua
local Rx = require "RxLua"
```
RxLua returns a table which includes all of the RxLua classes and interfaces. (see [Rx Namespace]{@link Rx})

## Specific require
You can require specific parts of RxLua by referring to the directory structure.

For example, if we want to use the Single class, we can use:
```lua
local Single = require "Rx.single"
```