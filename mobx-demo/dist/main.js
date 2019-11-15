/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mobx/lib/mobx.module.js":
/*!**********************************************!*\
  !*** ./node_modules/mobx/lib/mobx.module.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** MobX - (c) Michel Weststrate 2015 - 2019 - MIT Licensed */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return _extendStatics(d, b);
};

function __extends(d, b) {
    _extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return _assign.apply(this, arguments);
};

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator],
        i = 0;
    if (m) return m.call(o);
    return {
        next: function next() {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
        }
    } catch (error) {
        e = { error: error };
    } finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
            if (e) throw e.error;
        }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
    }return ar;
}

var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message) {
    invariant(false, message);
    throw "X"; // unreachable
}
function invariant(check, message) {
    if (!check) throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg, thing) {
    if (false) {}
    if (thing) {
        return deprecated("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1) return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked) return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function noop() {};
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1) res.push(item);
    });
    return res;
}
function isObject(value) {
    return value !== null && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object";
}
function isPlainObject(value) {
    if (value === null || (typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object") return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || descriptor.configurable !== false && descriptor.writable !== false;
}
function assertPropertyConfigurable(object, prop) {
    if ( true && !isPropertyConfigurable(object, prop)) fail("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
function isES6Map(thing) {
    return thing instanceof Map;
}
function isES6Set(thing) {
    return thing instanceof Set;
}
/**
 * Returns the following: own keys, prototype keys & own symbol keys, if they are enumerable.
 */
function getPlainObjectKeys(object) {
    var enumerables = new Set();
    for (var key in object) {
        enumerables.add(key);
    } // *all* enumerables
    Object.getOwnPropertySymbols(object).forEach(function (k) {
        if (Object.getOwnPropertyDescriptor(object, k).enumerable) enumerables.add(k);
    }); // *own* symbols
    // Note: this implementation is missing enumerable, inherited, symbolic property names! That would however pretty expensive to add,
    // as there is no efficient iterator that returns *all* properties
    return Array.from(enumerables);
}
function stringifyKey(key) {
    if (key && key.toString) return key.toString();else return new String(key).toString();
}
function getMapLikeKeys(map) {
    if (isPlainObject(map)) return Object.keys(map);
    if (Array.isArray(map)) return map.map(function (_a) {
        var _b = __read(_a, 1),
            key = _b[0];
        return key;
    });
    if (isES6Map(map) || isObservableMap(map)) return Array.from(map.keys());
    return fail("Cannot get keys from '" + map + "'");
}
function toPrimitive(value) {
    return value === null ? null : (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" ? "" + value : value;
}

var $mobx = Symbol("mobx administration");
var Atom = /** @class */function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name) {
        if (name === void 0) {
            name = "Atom@" + getNextId();
        }
        this.name = name;
        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.isBeingObserved = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    Atom.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) {
                return listener();
            });
        }
    };
    Atom.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) {
                return listener();
            });
        }
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    Atom.prototype.reportObserved = function () {
        return reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    Atom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    Atom.prototype.toString = function () {
        return this.name;
    };
    return Atom;
}();
var isAtom = createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) {
        onBecomeObservedHandler = noop;
    }
    if (onBecomeUnobservedHandler === void 0) {
        onBecomeUnobservedHandler = noop;
    }
    var atom = new Atom(name);
    // default `noop` listener will not initialize the hook Set
    if (onBecomeObservedHandler !== noop) {
        onBecomeObserved(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop) {
        onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    }
    return atom;
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function shallowComparer(a, b) {
    return deepEqual(a, b, 1);
}
function defaultComparer(a, b) {
    return Object.is(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer,
    shallow: shallowComparer
};

var mobxDidRunLazyInitializersSymbol = Symbol("mobx did run lazy initializers");
var mobxPendingDecorators = Symbol("mobx pending decorators");
var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return cache[prop] || (cache[prop] = {
        configurable: true,
        enumerable: enumerable,
        get: function get() {
            initializeInstance(this);
            return this[prop];
        },
        set: function set(value) {
            initializeInstance(this);
            this[prop] = value;
        }
    });
}
function initializeInstance(target) {
    var e_1, _a;
    if (target[mobxDidRunLazyInitializersSymbol] === true) return;
    var decorators = target[mobxPendingDecorators];
    if (decorators) {
        addHiddenProp(target, mobxDidRunLazyInitializersSymbol, true);
        // Build property key array from both strings and symbols
        var keys = __spread(Object.getOwnPropertySymbols(decorators), Object.keys(decorators));
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                var d = decorators[key];
                d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
            }
        } catch (e_1_1) {
            e_1 = { error: e_1_1 };
        } finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            } finally {
                if (e_1) throw e_1.error;
            }
        }
    }
}
function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if ( true && !quacksLikeADecorator(arguments)) fail("This function is a decorator, but it wasn't invoked like a decorator");
            if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators)) {
                var inheritedDecorators = target[mobxPendingDecorators];
                addHiddenProp(target, mobxPendingDecorators, _assign({}, inheritedDecorators));
            }
            target[mobxPendingDecorators][prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY;
            return decorator.apply(null, arguments);
        } else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator(args) {
    return (args.length === 2 || args.length === 3) && (typeof args[1] === "string" || _typeof(args[1]) === "symbol") || args.length === 4 && args[3] === true;
}

function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v)) return v;
    // something that can be converted and mutated?
    if (Array.isArray(v)) return observable.array(v, { name: name });
    if (isPlainObject(v)) return observable.object(v, undefined, { name: name });
    if (isES6Map(v)) return observable.map(v, { name: name });
    if (isES6Set(v)) return observable.set(v, { name: name });
    return v;
}
function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null) return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v)) return v;
    if (Array.isArray(v)) return observable.array(v, { name: name, deep: false });
    if (isPlainObject(v)) return observable.object(v, undefined, { name: name, deep: false });
    if (isES6Map(v)) return observable.map(v, { name: name, deep: false });
    if (isES6Set(v)) return observable.set(v, { name: name, deep: false });
    return fail( true && "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer(v, oldValue, name) {
    if ( true && isObservable(v)) throw "observable.struct should not be used with observable values";
    if (deepEqual(v, oldValue)) return oldValue;
    return v;
}

function createDecoratorForEnhancer(enhancer) {
    invariant(enhancer);
    var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        if (true) {
            invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + stringifyKey(propertyName) + "\"), use @computed instead.");
        }
        var initialValue = descriptor ? descriptor.initializer ? descriptor.initializer.call(target) : descriptor.value : undefined;
        asObservableObject(target).addObservableProp(propertyName, initialValue, enhancer);
    });
    var res =
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && process.env && "development" !== "production" ? function observableDecorator() {
        // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
        // and simply return the created prop decorator
        if (arguments.length < 2) return fail("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
        return decorator.apply(null, arguments);
    } : decorator;
    res.enhancer = enhancer;
    return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function assertValidOption(key) {
    if (!/^(deep|name|equals|defaultDecorator|proxy)$/.test(key)) fail("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions(thing) {
    if (thing === null || thing === undefined) return defaultCreateObservableOptions;
    if (typeof thing === "string") return { name: thing, deep: true, proxy: true };
    if (true) {
        if ((typeof thing === "undefined" ? "undefined" : _typeof(thing)) !== "object") return fail("expected options object");
        Object.keys(thing).forEach(assertValidOption);
    }
    return thing;
}
var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
function getEnhancerFromOptions(options) {
    return options.defaultDecorator ? options.defaultDecorator.enhancer : options.deep === false ? referenceEnhancer : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string" || _typeof(arguments[1]) === "symbol") {
        return deepDecorator.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable(v)) return v;
    // something that can be converted and mutated?
    var res = isPlainObject(v) ? observable.object(v, arg2, arg3) : Array.isArray(v) ? observable.array(v, arg2) : isES6Map(v) ? observable.map(v, arg2) : isES6Set(v) ? observable.set(v, arg2) : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v) return res;
    // otherwise, just box it
    fail( true && "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}
var observableFactories = {
    box: function box(value, options) {
        if (arguments.length > 2) incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions(options);
        return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    array: function array(initialValues, options) {
        if (arguments.length > 2) incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions(options);
        return createObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function map(initialValues, options) {
        if (arguments.length > 2) incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions(options);
        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    set: function set(initialValues, options) {
        if (arguments.length > 2) incorrectlyUsedAsDecorator("set");
        var o = asCreateObservableOptions(options);
        return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function object(props, decorators, options) {
        if (typeof arguments[1] === "string") incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions(options);
        if (o.proxy === false) {
            return extendObservable({}, props, decorators, o);
        } else {
            var defaultDecorator = getDefaultDecoratorFromObjectOptions(o);
            var base = extendObservable({}, undefined, undefined, o);
            var proxy = createDynamicObservableObject(base);
            extendObservableObjectWithProperties(proxy, props, decorators, defaultDecorator);
            return proxy;
        }
    },
    ref: refDecorator,
    shallow: shallowDecorator,
    deep: deepDecorator,
    struct: refStructDecorator
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) {
    return observable[name] = observableFactories[name];
});
function incorrectlyUsedAsDecorator(methodName) {
    fail(
    // process.env.NODE_ENV !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    var get = descriptor.get,
        set = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    // Forcing instance now, fixes hot reloadig issues on React Native:
    var options = decoratorArgs[0] || {};
    asObservableObject(instance).addComputedProp(instance, propertyName, _assign({ get: get,
        set: set, context: instance }, options));
});
var computedStructDecorator = computedDecorator({ equals: comparer.structural });
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        // @computed
        return computedDecorator.apply(null, arguments);
    }
    if (arg1 !== null && (typeof arg1 === "undefined" ? "undefined" : _typeof(arg1)) === "object" && arguments.length === 1) {
        // @computed({ options })
        return computedDecorator.apply(null, arguments);
    }
    // computed(expr, options?)
    if (true) {
        invariant(typeof arg1 === "function", "First argument to `computed` should be an expression.");
        invariant(arguments.length < 3, "Computed takes one or two arguments if used as function");
    }
    var opts = (typeof arg2 === "undefined" ? "undefined" : _typeof(arg2)) === "object" ? arg2 : {};
    opts.get = arg1;
    opts.set = typeof arg2 === "function" ? arg2 : opts.set;
    opts.name = opts.name || arg1.name || ""; /* for generated name */
    return new ComputedValue(opts);
};
computed.struct = computedStructDecorator;

var IDerivationState;
(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (exports.IDerivationState = IDerivationState = {}));
var TraceMode;
(function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = /** @class */function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}();
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE:
            {
                var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
                var obs = derivation.observing,
                    l = obs.length;
                for (var i = 0; i < l; i++) {
                    var obj = obs[i];
                    if (isComputedValue(obj)) {
                        if (globalState.disableErrorBoundaries) {
                            obj.get();
                        } else {
                            try {
                                obj.get();
                            } catch (e) {
                                // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                                untrackedEnd(prevUntracked);
                                return true;
                            }
                        }
                        // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                        // and `derivation` is an observer of `obj`
                        // invariantShouldCompute(derivation)
                        if (derivation.dependenciesState === IDerivationState.STALE) {
                            untrackedEnd(prevUntracked);
                            return true;
                        }
                    }
                }
                changeDependenciesStateTo0(derivation);
                untrackedEnd(prevUntracked);
                return false;
            }
    }
}
// function invariantShouldCompute(derivation: IDerivation) {
//     const newDepState = (derivation as any).dependenciesState
//     if (
//         process.env.NODE_ENV === "production" &&
//         (newDepState === IDerivationState.POSSIBLY_STALE ||
//             newDepState === IDerivationState.NOT_TRACKING)
//     )
//         fail("Illegal dependency state")
// }
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers = atom.observers.size > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers) fail( true && "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict")) fail( true && (globalState.enforceActions ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") + atom.name);
}
function checkIfStateReadsAreAllowed(observable) {
    if ( true && !globalState.allowStateReads && globalState.observableRequiresReaction) {
        console.warn("[mobx] Observable " + observable.name + " being read outside a reactive context");
    }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    if (globalState.disableErrorBoundaries === true) {
        result = f.call(context);
    } else {
        try {
            result = f.call(context);
        } catch (e) {
            result = new CaughtException(e);
        }
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    warnAboutDerivationWithoutDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
    if (false) {}
    if (derivation.observing.length !== 0) return;
    if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
        console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
    }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = derivation.observing = derivation.newObserving;
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0,
        l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i) observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--) {
        removeObserver(obs[i], derivation);
    }derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    try {
        return action();
    } finally {
        untrackedEnd(prev);
    }
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
}
function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE) return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--) {
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
    }
}

// we don't use globalState for these in order to avoid possible issues with multiple
// mobx versions
var currentActionId = 0;
var nextActionId = 1;
function createAction(actionName, fn, ref) {
    if (true) {
        invariant(typeof fn === "function", "`action` can only be invoked on functions");
        if (typeof actionName !== "string" || !actionName) fail("actions should have valid names, got: '" + actionName + "'");
    }
    var res = function res() {
        return executeAction(actionName, fn, ref || this, arguments);
    };
    res.isMobxAction = true;
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = _startAction(actionName, scope, args);
    try {
        return fn.apply(scope, args);
    } catch (err) {
        runInfo.error = err;
        throw err;
    } finally {
        _endAction(runInfo);
    }
}
function _startAction(actionName, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy && "development" !== "production") {
        startTime = Date.now();
        var l = args && args.length || 0;
        var flattendArgs = new Array(l);
        if (l > 0) for (var i = 0; i < l; i++) {
            flattendArgs[i] = args[i];
        }spyReportStart({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    var prevAllowStateReads = allowStateReadsStart(true);
    var runInfo = {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        prevAllowStateReads: prevAllowStateReads,
        notifySpy: notifySpy,
        startTime: startTime,
        actionId: nextActionId++,
        parentActionId: currentActionId
    };
    currentActionId = runInfo.actionId;
    return runInfo;
}
function _endAction(runInfo) {
    if (currentActionId !== runInfo.actionId) {
        fail("invalid action stack. did you forget to finish an action?");
    }
    currentActionId = runInfo.parentActionId;
    if (runInfo.error !== undefined) {
        globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    allowStateReadsEnd(runInfo.prevAllowStateReads);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy && "development" !== "production") {
        spyReportEnd({ time: Date.now() - runInfo.startTime });
    }
    globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func) {
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    } finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}
function allowStateChangesInsideComputed(func) {
    var prev = globalState.computationDepth;
    globalState.computationDepth = 0;
    var res;
    try {
        res = func();
    } finally {
        globalState.computationDepth = prev;
    }
    return res;
}

var ObservableValue = /** @class */function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy, equals) {
        if (name === void 0) {
            name = "ObservableValue@" + getNextId();
        }
        if (notifySpy === void 0) {
            notifySpy = true;
        }
        if (equals === void 0) {
            equals = comparer.default;
        }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.name = name;
        _this.equals = equals;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled() && "development" !== "production") {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy && "development" !== "production") {
                spyReportStart({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy && "development" !== "production") spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change) return globalState.UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately) listener({
            object: this,
            type: "update",
            newValue: this.value,
            oldValue: undefined
        });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ObservableValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ObservableValue;
}(Atom);
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = /** @class */function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode.NONE;
        if ( true && !options.get) throw "[mobx] missing option for computed: get";
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId();
        if (options.set) this.setter = createAction(this.name + "-setter", options.set);
        this.equals = options.equals || (options.compareStructural || options.struct ? comparer.structural : comparer.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) {
                return listener();
            });
        }
    };
    ComputedValue.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) {
                return listener();
            });
        }
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        if (this.isComputing) fail("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState.inBatch === 0 && this.observers.size === 0 && !this.keepAlive) {
            if (shouldCompute(this)) {
                this.warnAboutUntrackedRead();
                startBatch(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch();
            }
        } else {
            reportObserved(this);
            if (shouldCompute(this)) if (this.trackAndCompute()) propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result)) throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res)) throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            } finally {
                this.isRunningSetter = false;
            }
        } else invariant(false,  true && "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled() && "development" !== "production") {
            spyReport({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended =
        /* see #1208 */this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended || isCaughtException(oldValue) || isCaughtException(newValue) || !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        } else {
            if (globalState.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            } else {
                try {
                    res = this.derivation.call(this.scope);
                } catch (e) {
                    res = new CaughtException(e);
                }
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue.prototype.suspend = function () {
        if (!this.keepAlive) {
            clearObserving(this);
            this.value = undefined; // don't hold on to computed value!
        }
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.warnAboutUntrackedRead = function () {
        if (false) {}
        if (this.requiresReaction === true) {
            fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode.NONE) {
            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ComputedValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ComputedValue;
}();
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

/**
 * These values will persist if global state is reset
 */
var persistentKeys = ["mobxGuid", "spyListeners", "enforceActions", "computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "allowStateReads", "disableErrorBoundaries", "runId", "UNCHANGED"];
var MobXGlobals = /** @class */function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * globally unique token to signal unchanged
         */
        this.UNCHANGED = {};
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * Is it allowed to read observables at this point?
         * Used to hold the state needed for `observableRequiresReaction`
         */
        this.allowStateReads = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /**
         * (Experimental)
         * Warn if you try to create to derivation / reactive context without accessing any observable.
         */
        this.reactionRequiresObservable = false;
        /**
         * (Experimental)
         * Warn if observables are accessed outside a reactive context
         */
        this.observableRequiresReaction = false;
        /**
         * Allows overwriting of computed properties, useful in tests but not prod as it can cause
         * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
         */
        this.computedConfigurable = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
        /*
         * If true, we are already handling an exception in an action. Any errors in reactions should be suppressed, as
         * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
         */
        this.suppressReactionErrors = false;
    }
    return MobXGlobals;
}();
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    return mockGlobal;
}
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = function () {
    var global = getGlobal();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals) canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version) canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals();
    } else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED) global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
        return global.__mobxGlobals;
    } else {
        global.__mobxInstanceCount = 1;
        return global.__mobxGlobals = new MobXGlobals();
    }
}();
function isolateGlobalState() {
    if (globalState.pendingReactions.length || globalState.inBatch || globalState.isRunningReactions) fail("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal().__mobxInstanceCount === 0) getGlobal().__mobxGlobals = undefined;
        globalState = new MobXGlobals();
    }
}
function getGlobalState() {
    return globalState;
}
/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals) {
        if (persistentKeys.indexOf(key) === -1) globalState[key] = defaultGlobals[key];
    }globalState.allowStateChanges = !globalState.enforceActions;
}

function hasObservers(observable) {
    return observable.observers && observable.observers.size > 0;
}
function getObservers(observable) {
    return observable.observers;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable.observers.add(node);
    if (observable.lowestObserverState > node.dependenciesState) observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable.observers.delete(node);
    if (observable.observers.size === 0) {
        // deleting last observer
        queueForUnobservation(observable);
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.size === 0) {
                if (observable.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable.isBeingObserved = false;
                    observable.onBecomeUnobserved();
                }
                if (observable instanceof ComputedValue) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observabe of another, etc..
                    observable.suspend();
                }
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    checkIfStateReadsAreAllowed(observable);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
            if (!observable.isBeingObserved) {
                observable.isBeingObserved = true;
                observable.onBecomeObserved();
            }
        }
        return true;
    } else if (observable.observers.size === 0 && globalState.inBatch > 0) {
        queueForUnobservation(observable);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === IDerivationState.STALE) return;
    observable.lowestObserverState = IDerivationState.STALE;
    // Ideally we use for..of here, but the downcompiled version is really slow...
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    });
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === IDerivationState.STALE) return;
    observable.lowestObserverState = IDerivationState.STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE) d.dependenciesState = IDerivationState.STALE;else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        ) observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    });
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE) return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
    });
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
    if (derivation.isTracing === TraceMode.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies) tree.dependencies.forEach(function (child) {
        return printDepTree(child, lines, depth + 1);
    });
}

var Reaction = /** @class */function () {
    function Reaction(name, onInvalidate, errorHandler, requiresObservable) {
        if (name === void 0) {
            name = "Reaction@" + getNextId();
        }
        if (requiresObservable === void 0) {
            requiresObservable = false;
        }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.requiresObservable = requiresObservable;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode.NONE;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending && isSpyEnabled() && "development" !== "production") {
                        // onInvalidate didn't trigger track right away..
                        spyReport({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                } catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        if (this.isDisposed) {
            return;
            // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
        }
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify && "development" !== "production") {
            startTime = Date.now();
            spyReportStart({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result)) this.reportExceptionInDerivation(result.cause);
        if (notify && "development" !== "production") {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState.disableErrorBoundaries) throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        if (globalState.suppressReactionErrors) {
            console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
        } else {
            console.error(message, error);
            /** If debugging brought you here, please, read the above message :-). Tnx! */
        }
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) {
            return f(error, _this);
        });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r[$mobx] = this;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) {
            enterBreakPoint = false;
        }
        trace(this, enterBreakPoint);
    };
    return Reaction;
}();
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0) globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function reactionScheduler(f) {
    return f();
};
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions) return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." + (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++) {
            remainingReactions[i].runReaction();
        }
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function reactionScheduler(f) {
        return fn(function () {
            return baseScheduler(f);
        });
    };
}

function isSpyEnabled() {
    return  true && !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (false) {} // dead code elimination can do the rest
    if (!globalState.spyListeners.length) return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](event);
    }
}
function spyReportStart(event) {
    if (false) {}
    var change = _assign(_assign({}, event), { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (false) {}
    if (change) spyReport(_assign(_assign({}, change), { spyReportEnd: true }));else spyReport(END_EVENT);
}
function spy(listener) {
    if (false) {} else {
        globalState.spyListeners.push(listener);
        return once(function () {
            globalState.spyListeners = globalState.spyListeners.filter(function (l) {
                return l !== listener;
            });
        });
    }
}

function dontReassignFields() {
    fail( true && "@action fields are not reassignable");
}
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor) {
            if ( true && descriptor.get !== undefined) {
                return fail("@action cannot be used with getters");
            }
            // babel / typescript
            // @action method() { }
            if (descriptor.value) {
                // typescript
                return {
                    value: createAction(name, descriptor.value),
                    enumerable: false,
                    configurable: true,
                    writable: true // for typescript, this must be writable, otherwise it cannot inherit :/ (see inheritable actions test)
                };
            }
            // babel only: @action method = () => {}
            var initializer_1 = descriptor.initializer;
            return {
                enumerable: false,
                configurable: true,
                writable: true,
                initializer: function initializer() {
                    // N.B: we can't immediately invoke initializer; this would be wrong
                    return createAction(name, initializer_1.call(this));
                }
            };
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function actionFieldDecorator(name) {
    // Simple property that writes on first invocation to the current instance
    return function (target, prop, descriptor) {
        Object.defineProperty(target, prop, {
            configurable: true,
            enumerable: false,
            get: function get() {
                return undefined;
            },
            set: function set(value) {
                addHiddenProp(this, prop, action(name, value));
            }
        });
    };
}
function boundActionDecorator(target, propertyName, descriptor, applyToInstance) {
    if (applyToInstance === true) {
        defineBoundAction(target, propertyName, descriptor.value);
        return null;
    }
    if (descriptor) {
        // if (descriptor.value)
        // Typescript / Babel: @action.bound method() { }
        // also: babel @action.bound method = () => {}
        return {
            configurable: true,
            enumerable: false,
            get: function get() {
                defineBoundAction(this, propertyName, descriptor.value || descriptor.initializer.call(this));
                return this[propertyName];
            },
            set: dontReassignFields
        };
    }
    // field decorator Typescript @action.bound method = () => {}
    return {
        enumerable: false,
        configurable: true,
        set: function set(v) {
            defineBoundAction(this, propertyName, v);
        },
        get: function get() {
            return undefined;
        }
    };
}

var action = function action(arg1, arg2, arg3, arg4) {
    // action(fn() {})
    if (arguments.length === 1 && typeof arg1 === "function") return createAction(arg1.name || "<unnamed action>", arg1);
    // action("name", fn() {})
    if (arguments.length === 2 && typeof arg2 === "function") return createAction(arg1, arg2);
    // @action("name") fn() {}
    if (arguments.length === 1 && typeof arg1 === "string") return namedActionDecorator(arg1);
    // @action fn() {}
    if (arg4 === true) {
        // apply to instance immediately
        addHiddenProp(arg1, arg2, createAction(arg1.name || arg2, arg3.value, this));
    } else {
        return namedActionDecorator(arg2).apply(null, arguments);
    }
};
action.bound = boundActionDecorator;
function runInAction(arg1, arg2) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    if (true) {
        invariant(typeof fn === "function" && fn.length === 0, "`runInAction` expects a function without arguments");
        if (typeof actionName !== "string" || !actionName) fail("actions should have valid names, got: '" + actionName + "'");
    }
    return executeAction(actionName, fn, this, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    addHiddenProp(target, propertyName, createAction(propertyName, fn.bind(target)));
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun(view, opts) {
    if (opts === void 0) {
        opts = EMPTY_OBJECT;
    }
    if (true) {
        invariant(typeof view === "function", "Autorun expects a function as first argument");
        invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
    }
    var name = opts && opts.name || view.name || "Autorun@" + getNextId();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;
    if (runSync) {
        // normal autorun
        reaction = new Reaction(name, function () {
            this.track(reactionRunner);
        }, opts.onError, opts.requiresObservable);
    } else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction = new Reaction(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction.isDisposed) reaction.track(reactionRunner);
                });
            }
        }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
var run = function run(f) {
    return f();
};
function createSchedulerFromOptions(opts) {
    return opts.scheduler ? opts.scheduler : opts.delay ? function (f) {
        return setTimeout(f, opts.delay);
    } : run;
}
function reaction(expression, effect, opts) {
    if (opts === void 0) {
        opts = EMPTY_OBJECT;
    }
    if (true) {
        invariant(typeof expression === "function", "First argument to reaction should be a function");
        invariant((typeof opts === "undefined" ? "undefined" : _typeof(opts)) === "object", "Third argument of reactions should be an object");
    }
    var name = opts.name || "Reaction@" + getNextId();
    var effectAction = action(name, opts.onError ? wrapErrorHandler(opts.onError, effect) : effect);
    var runSync = !opts.scheduler && !opts.delay;
    var scheduler = createSchedulerFromOptions(opts);
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.compareStructural ? comparer.structural : opts.equals || comparer.default;
    var r = new Reaction(name, function () {
        if (firstTime || runSync) {
            reactionRunner();
        } else if (!isScheduled) {
            isScheduled = true;
            scheduler(reactionRunner);
        }
    }, opts.onError, opts.requiresObservable);
    function reactionRunner() {
        isScheduled = false; // Q: move into reaction runner?
        if (r.isDisposed) return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately) effectAction(value, r);
        if (!firstTime && changed === true) effectAction(value, r);
        if (firstTime) firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}
function wrapErrorHandler(errorHandler, baseFn) {
    return function () {
        try {
            return baseFn.apply(this, arguments);
        } catch (e) {
            errorHandler.call(this, e);
        }
    };
}

function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = typeof arg3 === "function" ? arg3 : arg2;
    var listenersKey = hook + "Listeners";
    if (atom[listenersKey]) {
        atom[listenersKey].add(cb);
    } else {
        atom[listenersKey] = new Set([cb]);
    }
    var orig = atom[hook];
    if (typeof orig !== "function") return fail( true && "Not an atom that can be (un)observed");
    return function () {
        var hookListeners = atom[listenersKey];
        if (hookListeners) {
            hookListeners.delete(cb);
            if (hookListeners.size === 0) {
                delete atom[listenersKey];
            }
        }
    };
}

function configure(options) {
    var enforceActions = options.enforceActions,
        computedRequiresReaction = options.computedRequiresReaction,
        computedConfigurable = options.computedConfigurable,
        disableErrorBoundaries = options.disableErrorBoundaries,
        reactionScheduler = options.reactionScheduler,
        reactionRequiresObservable = options.reactionRequiresObservable,
        observableRequiresReaction = options.observableRequiresReaction;
    if (options.isolateGlobalState === true) {
        isolateGlobalState();
    }
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict") deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState.enforceActions = ea;
        globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (reactionRequiresObservable !== undefined) {
        globalState.reactionRequiresObservable = !!reactionRequiresObservable;
    }
    if (observableRequiresReaction !== undefined) {
        globalState.observableRequiresReaction = !!observableRequiresReaction;
        globalState.allowStateReads = !globalState.observableRequiresReaction;
    }
    if (computedConfigurable !== undefined) {
        globalState.computedConfigurable = !!computedConfigurable;
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true) console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
        globalState.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (reactionScheduler) {
        setReactionScheduler(reactionScheduler);
    }
}

function decorate(thing, decorators) {
     true && invariant(isPlainObject(decorators), "Decorators should be a key value map");
    var target = typeof thing === "function" ? thing.prototype : thing;
    var _loop_1 = function _loop_1(prop) {
        var propertyDecorators = decorators[prop];
        if (!Array.isArray(propertyDecorators)) {
            propertyDecorators = [propertyDecorators];
        }
         true && invariant(propertyDecorators.every(function (decorator) {
            return typeof decorator === "function";
        }), "Decorate: expected a decorator function or array of decorator functions for '" + prop + "'");
        var descriptor = Object.getOwnPropertyDescriptor(target, prop);
        var newDescriptor = propertyDecorators.reduce(function (accDescriptor, decorator) {
            return decorator(target, prop, accDescriptor);
        }, descriptor);
        if (newDescriptor) Object.defineProperty(target, prop, newDescriptor);
    };
    for (var prop in decorators) {
        _loop_1(prop);
    }
    return thing;
}

function extendObservable(target, properties, decorators, options) {
    if (true) {
        invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
        invariant((typeof target === "undefined" ? "undefined" : _typeof(target)) === "object", "'extendObservable' expects an object as first argument");
        invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
    }
    options = asCreateObservableOptions(options);
    var defaultDecorator = getDefaultDecoratorFromObjectOptions(options);
    initializeInstance(target); // Fixes #1740
    asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    if (properties) extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator);
    return target;
}
function getDefaultDecoratorFromObjectOptions(options) {
    return options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
}
function extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator) {
    var e_1, _a, e_2, _b;
    if (true) {
        invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
        if (decorators) {
            var keys = getPlainObjectKeys(decorators);
            try {
                for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var key = keys_1_1.value;
                    if (!(key in properties)) fail("Trying to declare a decorator for unspecified property '" + stringifyKey(key) + "'");
                }
            } catch (e_1_1) {
                e_1 = { error: e_1_1 };
            } finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                } finally {
                    if (e_1) throw e_1.error;
                }
            }
        }
    }
    startBatch();
    try {
        var keys = getPlainObjectKeys(properties);
        try {
            for (var keys_2 = __values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                var key = keys_2_1.value;
                var descriptor = Object.getOwnPropertyDescriptor(properties, key);
                if (true) {
                    if (!isPlainObject(properties)) fail("'extendObservabe' only accepts plain objects as second argument");
                    if (Object.getOwnPropertyDescriptor(target, key)) fail("'extendObservable' can only be used to introduce new properties. Use 'set' or 'decorate' instead. The property '" + stringifyKey(key) + "' already exists on '" + target + "'");
                    if (isComputed(descriptor.value)) fail("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
                }
                var decorator = decorators && key in decorators ? decorators[key] : descriptor.get ? computedDecorator : defaultDecorator;
                if ( true && typeof decorator !== "function") fail("Not a valid decorator for '" + stringifyKey(key) + "', got: " + decorator);
                var resultDescriptor = decorator(target, key, descriptor, true);
                if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
                ) Object.defineProperty(target, key, resultDescriptor);
            }
        } catch (e_2_1) {
            e_2 = { error: e_2_1 };
        } finally {
            try {
                if (keys_2_1 && !keys_2_1.done && (_b = keys_2.return)) _b.call(keys_2);
            } finally {
                if (e_2) throw e_2.error;
            }
        }
    } finally {
        endBatch();
    }
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0) result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node)) result.observers = Array.from(getObservers(node)).map(nodeToObserverTree);
    return result;
}

var generatorId = 0;
var FlowCancellationError = /** @class */function (_super) {
    __extends(FlowCancellationError, _super);
    function FlowCancellationError() {
        return _super.call(this, "FLOW_CANCELLED") || this;
    }
    return FlowCancellationError;
}(Error);
function isFlowCancellationError(error) {
    return error instanceof FlowCancellationError;
}
function flow(generator) {
    if (arguments.length !== 1) fail( true && "Flow expects 1 argument and cannot be used as decorator");
    var name = generator.name || "<unnamed flow>";
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    return function () {
        var ctx = this;
        var args = arguments;
        var runId = ++generatorId;
        var gen = action(name + " - runid: " + runId + " - init", generator).apply(ctx, args);
        var rejector;
        var pendingPromise = undefined;
        var promise = new Promise(function (resolve, reject) {
            var stepId = 0;
            rejector = reject;
            function onFulfilled(res) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.next).call(gen, res);
                } catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function onRejected(err) {
                pendingPromise = undefined;
                var ret;
                try {
                    ret = action(name + " - runid: " + runId + " - yield " + stepId++, gen.throw).call(gen, err);
                } catch (e) {
                    return reject(e);
                }
                next(ret);
            }
            function next(ret) {
                if (ret && typeof ret.then === "function") {
                    // an async iterator
                    ret.then(next, reject);
                    return;
                }
                if (ret.done) return resolve(ret.value);
                pendingPromise = Promise.resolve(ret.value);
                return pendingPromise.then(onFulfilled, onRejected);
            }
            onFulfilled(undefined); // kick off the process
        });
        promise.cancel = action(name + " - runid: " + runId + " - cancel", function () {
            try {
                if (pendingPromise) cancelPromise(pendingPromise);
                // Finally block can return (or yield) stuff..
                var res = gen.return(undefined);
                // eat anything that promise would do, it's cancelled!
                var yieldedPromise = Promise.resolve(res.value);
                yieldedPromise.then(noop, noop);
                cancelPromise(yieldedPromise); // maybe it can be cancelled :)
                // reject our original promise
                rejector(new FlowCancellationError());
            } catch (e) {
                rejector(e); // there could be a throwing finally block
            }
        });
        return promise;
    };
}
function cancelPromise(promise) {
    if (typeof promise.cancel === "function") promise.cancel();
}

function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
        target = getAdministration(thing);
    } else if (isObservableObject(thing)) {
        if (typeof propOrHandler !== "string") return fail( true && "InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration(thing, propOrHandler);
    } else {
        return fail( true && "Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined) return fail( true && "An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function") return interceptProperty(thing, propOrHandler, handler);else return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}

function _isComputed(value, property) {
    if (value === null || value === undefined) return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false) return false;
        if (!value[$mobx].values.has(property)) return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}
function isComputed(value) {
    if (arguments.length > 1) return fail( true && "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isComputed(value);
}
function isComputedProp(value, propName) {
    if (typeof propName !== "string") return fail( true && "isComputed expected a property name as second argument");
    return _isComputed(value, propName);
}

function _isObservable(value, property) {
    if (value === null || value === undefined) return false;
    if (property !== undefined) {
        if ( true && (isObservableMap(value) || isObservableArray(value))) return fail("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        if (isObservableObject(value)) {
            return value[$mobx].values.has(property);
        }
        return false;
    }
    // For first check, see #701
    return isObservableObject(value) || !!value[$mobx] || isAtom(value) || isReaction(value) || isComputedValue(value);
}
function isObservable(value) {
    if (arguments.length !== 1) fail( true && "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
}
function isObservableProp(value, propName) {
    if (typeof propName !== "string") return fail( true && "expected a property name as second argument");
    return _isObservable(value, propName);
}

function keys(obj) {
    if (isObservableObject(obj)) {
        return obj[$mobx].getKeys();
    }
    if (isObservableMap(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.keys());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (_, index) {
            return index;
        });
    }
    return fail( true && "'keys()' can only be used on observable objects, arrays, sets and maps");
}
function values(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) {
            return obj[key];
        });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) {
            return obj.get(key);
        });
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.values());
    }
    if (isObservableArray(obj)) {
        return obj.slice();
    }
    return fail( true && "'values()' can only be used on observable objects, arrays, sets and maps");
}
function entries(obj) {
    if (isObservableObject(obj)) {
        return keys(obj).map(function (key) {
            return [key, obj[key]];
        });
    }
    if (isObservableMap(obj)) {
        return keys(obj).map(function (key) {
            return [key, obj.get(key)];
        });
    }
    if (isObservableSet(obj)) {
        return Array.from(obj.entries());
    }
    if (isObservableArray(obj)) {
        return obj.map(function (key, index) {
            return [index, key];
        });
    }
    return fail( true && "'entries()' can only be used on observable objects, arrays and maps");
}
function _set(obj, key, value) {
    if (arguments.length === 2 && !isObservableSet(obj)) {
        startBatch();
        var values_1 = key;
        try {
            for (var key_1 in values_1) {
                _set(obj, key_1, values_1[key_1]);
            }
        } finally {
            endBatch();
        }
        return;
    }
    if (isObservableObject(obj)) {
        var adm = obj[$mobx];
        var existingObservable = adm.values.get(key);
        if (existingObservable) {
            adm.write(key, value);
        } else {
            adm.addObservableProp(key, value, adm.defaultEnhancer);
        }
    } else if (isObservableMap(obj)) {
        obj.set(key, value);
    } else if (isObservableSet(obj)) {
        obj.add(key);
    } else if (isObservableArray(obj)) {
        if (typeof key !== "number") key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        startBatch();
        if (key >= obj.length) obj.length = key + 1;
        obj[key] = value;
        endBatch();
    } else {
        return fail( true && "'set()' can only be used on observable objects, arrays and maps");
    }
}
function remove(obj, key) {
    if (isObservableObject(obj)) {
        obj[$mobx].remove(key);
    } else if (isObservableMap(obj)) {
        obj.delete(key);
    } else if (isObservableSet(obj)) {
        obj.delete(key);
    } else if (isObservableArray(obj)) {
        if (typeof key !== "number") key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        obj.splice(key, 1);
    } else {
        return fail( true && "'remove()' can only be used on observable objects, arrays and maps");
    }
}
function has(obj, key) {
    if (isObservableObject(obj)) {
        // return keys(obj).indexOf(key) >= 0
        var adm = getAdministration(obj);
        return adm.has(key);
    } else if (isObservableMap(obj)) {
        return obj.has(key);
    } else if (isObservableSet(obj)) {
        return obj.has(key);
    } else if (isObservableArray(obj)) {
        return key >= 0 && key < obj.length;
    } else {
        return fail( true && "'has()' can only be used on observable objects, arrays and maps");
    }
}
function get(obj, key) {
    if (!has(obj, key)) return undefined;
    if (isObservableObject(obj)) {
        return obj[key];
    } else if (isObservableMap(obj)) {
        return obj.get(key);
    } else if (isObservableArray(obj)) {
        return obj[key];
    } else {
        return fail( true && "'get()' can only be used on observable objects, arrays and maps");
    }
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function") return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);else return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

var defaultOptions = {
    detectCycles: true,
    exportMapsAsObjects: true,
    recurseEverything: false
};
function cache(map, key, value, options) {
    if (options.detectCycles) map.set(key, value);
    return value;
}
function toJSHelper(source, options, __alreadySeen) {
    if (!options.recurseEverything && !isObservable(source)) return source;
    if ((typeof source === "undefined" ? "undefined" : _typeof(source)) !== "object") return source;
    // Directly return null if source is null
    if (source === null) return null;
    // Directly return the Date object itself if contained in the observable
    if (source instanceof Date) return source;
    if (isObservableValue(source)) return toJSHelper(source.get(), options, __alreadySeen);
    // make sure we track the keys of the object
    if (isObservable(source)) keys(source);
    var detectCycles = options.detectCycles === true;
    if (detectCycles && source !== null && __alreadySeen.has(source)) {
        return __alreadySeen.get(source);
    }
    if (isObservableArray(source) || Array.isArray(source)) {
        var res_1 = cache(__alreadySeen, source, [], options);
        var toAdd = source.map(function (value) {
            return toJSHelper(value, options, __alreadySeen);
        });
        res_1.length = toAdd.length;
        for (var i = 0, l = toAdd.length; i < l; i++) {
            res_1[i] = toAdd[i];
        }return res_1;
    }
    if (isObservableSet(source) || Object.getPrototypeOf(source) === Set.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_2 = cache(__alreadySeen, source, new Set(), options);
            source.forEach(function (value) {
                res_2.add(toJSHelper(value, options, __alreadySeen));
            });
            return res_2;
        } else {
            var res_3 = cache(__alreadySeen, source, [], options);
            source.forEach(function (value) {
                res_3.push(toJSHelper(value, options, __alreadySeen));
            });
            return res_3;
        }
    }
    if (isObservableMap(source) || Object.getPrototypeOf(source) === Map.prototype) {
        if (options.exportMapsAsObjects === false) {
            var res_4 = cache(__alreadySeen, source, new Map(), options);
            source.forEach(function (value, key) {
                res_4.set(key, toJSHelper(value, options, __alreadySeen));
            });
            return res_4;
        } else {
            var res_5 = cache(__alreadySeen, source, {}, options);
            source.forEach(function (value, key) {
                res_5[key] = toJSHelper(value, options, __alreadySeen);
            });
            return res_5;
        }
    }
    // Fallback to the situation that source is an ObservableObject or a plain object
    var res = cache(__alreadySeen, source, {}, options);
    getPlainObjectKeys(source).forEach(function (key) {
        res[key] = toJSHelper(source[key], options, __alreadySeen);
    });
    return res;
}
function toJS(source, options) {
    // backward compatibility
    if (typeof options === "boolean") options = { detectCycles: options };
    if (!options) options = defaultOptions;
    options.detectCycles = options.detectCycles === undefined ? options.recurseEverything === true : options.detectCycles === true;
    var __alreadySeen;
    if (options.detectCycles) __alreadySeen = new Map();
    return toJSHelper(source, options, __alreadySeen);
}

function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean") enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail( true && "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState.trackingDerivation;
        case 1:
            return getAtom(args[0]);
        case 2:
            return getAtom(args[0], args[1]);
    }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) {
        thisArg = undefined;
    }
    startBatch();
    try {
        return action.apply(thisArg);
    } finally {
        endBatch();
    }
}

function when(predicate, arg1, arg2) {
    if (arguments.length === 1 || arg1 && (typeof arg1 === "undefined" ? "undefined" : _typeof(arg1)) === "object") return whenPromise(predicate, arg1);
    return _when(predicate, arg1, arg2 || {});
}
function _when(predicate, effect, opts) {
    var timeoutHandle;
    if (typeof opts.timeout === "number") {
        timeoutHandle = setTimeout(function () {
            if (!disposer[$mobx].isDisposed) {
                disposer();
                var error = new Error("WHEN_TIMEOUT");
                if (opts.onError) opts.onError(error);else throw error;
            }
        }, opts.timeout);
    }
    opts.name = opts.name || "When@" + getNextId();
    var effectAction = createAction(opts.name + "-effect", effect);
    var disposer = autorun(function (r) {
        if (predicate()) {
            r.dispose();
            if (timeoutHandle) clearTimeout(timeoutHandle);
            effectAction();
        }
    }, opts);
    return disposer;
}
function whenPromise(predicate, opts) {
    if ( true && opts && opts.onError) return fail("the options 'onError' and 'promise' cannot be combined");
    var cancel;
    var res = new Promise(function (resolve, reject) {
        var disposer = _when(predicate, resolve, _assign(_assign({}, opts), { onError: reject }));
        cancel = function cancel() {
            disposer();
            reject("WHEN_CANCELLED");
        };
    });
    res.cancel = cancel;
    return res;
}

function getAdm(target) {
    return target[$mobx];
}
function isPropertyKey(val) {
    return typeof val === "string" || typeof val === "number" || (typeof val === "undefined" ? "undefined" : _typeof(val)) === "symbol";
}
// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var objectProxyTraps = {
    has: function has(target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol) return true;
        var adm = getAdm(target);
        // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
        // TODO: check performance stats!
        // if (adm.values.get(name as string)) return true
        if (isPropertyKey(name)) return adm.has(name);
        return name in target;
    },
    get: function get(target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol) return target[name];
        var adm = getAdm(target);
        var observable = adm.values.get(name);
        if (observable instanceof Atom) {
            var result = observable.get();
            if (result === undefined) {
                // This fixes #1796, because deleting a prop that has an
                // undefined value won't retrigger a observer (no visible effect),
                // the autorun wouldn't subscribe to future key changes (see also next comment)
                adm.has(name);
            }
            return result;
        }
        // make sure we start listening to future keys
        // note that we only do this here for optimization
        if (isPropertyKey(name)) adm.has(name);
        return target[name];
    },
    set: function set(target, name, value) {
        if (!isPropertyKey(name)) return false;
        _set(target, name, value);
        return true;
    },
    deleteProperty: function deleteProperty(target, name) {
        if (!isPropertyKey(name)) return false;
        var adm = getAdm(target);
        adm.remove(name);
        return true;
    },
    ownKeys: function ownKeys(target) {
        var adm = getAdm(target);
        adm.keysAtom.reportObserved();
        return Reflect.ownKeys(target);
    },
    preventExtensions: function preventExtensions(target) {
        fail("Dynamic observable objects cannot be frozen");
        return false;
    }
};
function createDynamicObservableObject(base) {
    var proxy = new Proxy(base, objectProxyTraps);
    base[$mobx].proxy = proxy;
    return proxy;
}

function hasInterceptors(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1) interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        // Interceptor can modify the array, copy it to avoid concurrent modification, see #1950
        var interceptors = __spread(interceptable.interceptors || []);
        for (var i = 0, l = interceptors.length; i < l; i++) {
            change = interceptors[i](change);
            invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
            if (!change) break;
        }
        return change;
    } finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1) listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners) return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var arrayTraps = {
    get: function get(target, name) {
        if (name === $mobx) return target[$mobx];
        if (name === "length") return target[$mobx].getArrayLength();
        if (typeof name === "number") {
            return arrayExtensions.get.call(target, name);
        }
        if (typeof name === "string" && !isNaN(name)) {
            return arrayExtensions.get.call(target, parseInt(name));
        }
        if (arrayExtensions.hasOwnProperty(name)) {
            return arrayExtensions[name];
        }
        return target[name];
    },
    set: function set(target, name, value) {
        if (name === "length") {
            target[$mobx].setArrayLength(value);
        }
        if (typeof name === "number") {
            arrayExtensions.set.call(target, name, value);
        }
        if ((typeof name === "undefined" ? "undefined" : _typeof(name)) === "symbol" || isNaN(name)) {
            target[name] = value;
        } else {
            // numeric string
            arrayExtensions.set.call(target, parseInt(name), value);
        }
        return true;
    },
    preventExtensions: function preventExtensions(target) {
        fail("Observable arrays cannot be frozen");
        return false;
    }
};
function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) {
        name = "ObservableArray@" + getNextId();
    }
    if (owned === void 0) {
        owned = false;
    }
    var adm = new ObservableArrayAdministration(name, enhancer, owned);
    addHiddenFinalProp(adm.values, $mobx, adm);
    var proxy = new Proxy(adm.values, arrayTraps);
    adm.proxy = proxy;
    if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart(true);
        adm.spliceWithArray(0, 0, initialValues);
        allowStateChangesEnd(prev);
    }
    return proxy;
}
var ObservableArrayAdministration = /** @class */function () {
    function ObservableArrayAdministration(name, enhancer, owned) {
        this.owned = owned;
        this.values = [];
        this.proxy = undefined;
        this.lastKnownLength = 0;
        this.atom = new Atom(name || "ObservableArray@" + getNextId());
        this.enhancer = function (newV, oldV) {
            return enhancer(newV, oldV, name + "[..]");
        };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined && values.length > 0) return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) {
            fireImmediately = false;
        }
        if (fireImmediately) {
            listener({
                object: this.proxy,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0) throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength) return;else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++) {
                newItems[i] = undefined;
            } // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        } else this.spliceWithArray(newLength, currentLength - newLength);
    };
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength) throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
        this.lastKnownLength += delta;
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined) index = 0;else if (index > length) index = length;else if (index < 0) index = Math.max(0, length + index);
        if (arguments.length === 1) deleteCount = length - index;else if (deleteCount === undefined || deleteCount === null) deleteCount = 0;else deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined) newItems = EMPTY_ARRAY;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change) return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function (v) {
            return _this.enhancer(v, undefined);
        });
        if (true) {
            var lengthDelta = newItems.length - deleteCount;
            this.updateArrayLength(length, lengthDelta); // checks if internal array wasn't modified
        }
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0) this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        } else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values.slice(0, index).concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            object: this.proxy,
            type: "update",
            index: index,
            newValue: newValue,
            oldValue: oldValue
        } : null;
        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
        if (notifySpy && "development" !== "production") spyReportStart(_assign(_assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify) notifyListeners(this, change);
        if (notifySpy && "development" !== "production") spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            object: this.proxy,
            type: "splice",
            index: index,
            removed: removed,
            added: added,
            removedCount: removed.length,
            addedCount: added.length
        } : null;
        if (notifySpy && "development" !== "production") spyReportStart(_assign(_assign({}, change), { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify) notifyListeners(this, change);
        if (notifySpy && "development" !== "production") spyReportEnd();
    };
    return ObservableArrayAdministration;
}();
var arrayExtensions = {
    intercept: function intercept(handler) {
        return this[$mobx].intercept(handler);
    },
    observe: function observe(listener, fireImmediately) {
        if (fireImmediately === void 0) {
            fireImmediately = false;
        }
        var adm = this[$mobx];
        return adm.observe(listener, fireImmediately);
    },
    clear: function clear() {
        return this.splice(0);
    },
    replace: function replace(newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(0, adm.values.length, newItems);
    },
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    toJS: function toJS() {
        return this.slice();
    },
    toJSON: function toJSON() {
        // Used by JSON.stringify
        return this.toJS();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function splice(index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        var adm = this[$mobx];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return adm.spliceWithArray(index);
            case 2:
                return adm.spliceWithArray(index, deleteCount);
        }
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    spliceWithArray: function spliceWithArray(index, deleteCount, newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    push: function push() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    },
    pop: function pop() {
        return this.splice(Math.max(this[$mobx].values.length - 1, 0), 1)[0];
    },
    shift: function shift() {
        return this.splice(0, 1)[0];
    },
    unshift: function unshift() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    },
    reverse: function reverse() {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        if (true) {
            console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
        }
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    },
    sort: function sort(compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        if (true) {
            console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
        }
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    },
    remove: function remove(value) {
        var adm = this[$mobx];
        var idx = adm.dehanceValues(adm.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    },
    get: function get(index) {
        var adm = this[$mobx];
        if (adm) {
            if (index < adm.values.length) {
                adm.atom.reportObserved();
                return adm.dehanceValue(adm.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    },
    set: function set(index, newValue) {
        var adm = this[$mobx];
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: adm.proxy,
                    index: index,
                    newValue: newValue
                });
                if (!change) return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        } else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        } else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    }
};
["concat", "every", "filter", "forEach", "indexOf", "join", "lastIndexOf", "map", "reduce", "reduceRight", "slice", "some", "toString", "toLocaleString"].forEach(function (funcName) {
    arrayExtensions[funcName] = function () {
        var adm = this[$mobx];
        adm.atom.reportObserved();
        var res = adm.dehanceValues(adm.values);
        return res[funcName].apply(res, arguments);
    };
});
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _a;
var ObservableMapMarker = {};
// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
var ObservableMap = /** @class */function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) {
            enhancer = deepEnhancer;
        }
        if (name === void 0) {
            name = "ObservableMap@" + getNextId();
        }
        this.enhancer = enhancer;
        this.name = name;
        this[_a] = ObservableMapMarker;
        this._keysAtom = createAtom(this.name + ".keys()");
        this[Symbol.toStringTag] = "Map";
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap.prototype.has = function (key) {
        var _this = this;
        if (!globalState.trackingDerivation) return this._has(key);
        var entry = this._hasMap.get(key);
        if (!entry) {
            // todo: replace with atom (breaking change)
            var newEntry = entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);
            this._hasMap.set(key, newEntry);
            onBecomeUnobserved(newEntry, function () {
                return _this._hasMap.delete(key);
            });
        }
        return entry.get();
    };
    ObservableMap.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change) return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        } else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change) return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy ? {
                type: "delete",
                object: this,
                oldValue: this._data.get(key).value,
                name: key
            } : null;
            if (notifySpy && "development" !== "production") spyReportStart(_assign(_assign({}, change), { name: this.name, key: key }));
            transaction(function () {
                _this._keysAtom.reportChanged();
                _this._updateHasMapEntry(key, false);
                var observable = _this._data.get(key);
                observable.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify) notifyListeners(this, change);
            if (notifySpy && "development" !== "production") spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
    };
    ObservableMap.prototype._updateValue = function (key, newValue) {
        var observable = this._data.get(key);
        newValue = observable.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy ? {
                type: "update",
                object: this,
                oldValue: observable.value,
                name: key,
                newValue: newValue
            } : null;
            if (notifySpy && "development" !== "production") spyReportStart(_assign(_assign({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify) notifyListeners(this, change);
            if (notifySpy && "development" !== "production") spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        transaction(function () {
            var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
            _this._data.set(key, observable);
            newValue = observable.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            type: "add",
            object: this,
            name: key,
            newValue: newValue
        } : null;
        if (notifySpy && "development" !== "production") spyReportStart(_assign(_assign({}, change), { name: this.name, key: key }));
        if (notify) notifyListeners(this, change);
        if (notifySpy && "development" !== "production") spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        if (this.has(key)) return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        this._keysAtom.reportObserved();
        return this._data.keys();
    };
    ObservableMap.prototype.values = function () {
        var self = this;
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        return makeIterable({
            next: function next() {
                return nextIndex < keys.length ? { value: self.get(keys[nextIndex++]), done: false } : { done: true };
            }
        });
    };
    ObservableMap.prototype.entries = function () {
        var self = this;
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        return makeIterable({
            next: function next() {
                if (nextIndex < keys.length) {
                    var key = keys[nextIndex++];
                    return {
                        value: [key, self.get(key)],
                        done: false
                    };
                }
                return { done: true };
            }
        });
    };
    ObservableMap.prototype[(_a = $mobx, Symbol.iterator)] = function () {
        return this.entries();
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var e_1, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2),
                    key = _e[0],
                    value = _e[1];
                callback.call(thisArg, value, key, this);
            }
        } catch (e_1_1) {
            e_1 = { error: e_1_1 };
        } finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            } finally {
                if (e_1) throw e_1.error;
            }
        }
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (isPlainObject(other)) getPlainObjectKeys(other).forEach(function (key) {
                return _this.set(key, other[key]);
            });else if (Array.isArray(other)) other.forEach(function (_b) {
                var _c = __read(_b, 2),
                    key = _c[0],
                    value = _c[1];
                return _this.set(key, value);
            });else if (isES6Map(other)) {
                if (other.constructor !== Map) fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
                other.forEach(function (value, key) {
                    return _this.set(key, value);
                });
            } else if (other !== null && other !== undefined) fail("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_2, _b;
                try {
                    for (var _c = __values(_this.keys()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var key = _d.value;
                        _this.delete(key);
                    }
                } catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                } finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    } finally {
                        if (e_2) throw e_2.error;
                    }
                }
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        transaction(function () {
            // grab all the keys that are present in the new map but not present in the current map
            // and delete them from the map, then merge the new map
            // this will cause reactions only on changed values
            var newKeys = getMapLikeKeys(values);
            var oldKeys = Array.from(_this.keys());
            var missingKeys = oldKeys.filter(function (k) {
                return newKeys.indexOf(k) === -1;
            });
            missingKeys.forEach(function (k) {
                return _this.delete(k);
            });
            _this.merge(values);
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function get() {
            this._keysAtom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap.prototype.toPOJO = function () {
        var e_3, _b;
        var res = {};
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = __read(_d.value, 2),
                    key = _e[0],
                    value = _e[1];
                // We lie about symbol key types due to https://github.com/Microsoft/TypeScript/issues/1863
                res[(typeof key === "undefined" ? "undefined" : _typeof(key)) === "symbol" ? key : stringifyKey(key)] = value;
            }
        } catch (e_3_1) {
            e_3 = { error: e_3_1 };
        } finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            } finally {
                if (e_3) throw e_3.error;
            }
        }
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        return new Map(this);
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return this.name + "[{ " + Array.from(this.keys()).map(function (key) {
            return stringifyKey(key) + ": " + ("" + _this.get(key));
        }).join(", ") + " }]";
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
         true && invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}();
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var _a$1;
var ObservableSetMarker = {};
var ObservableSet = /** @class */function () {
    function ObservableSet(initialData, enhancer, name) {
        if (enhancer === void 0) {
            enhancer = deepEnhancer;
        }
        if (name === void 0) {
            name = "ObservableSet@" + getNextId();
        }
        this.name = name;
        this[_a$1] = ObservableSetMarker;
        this._data = new Set();
        this._atom = createAtom(this.name);
        this[Symbol.toStringTag] = "Set";
        if (typeof Set !== "function") {
            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        }
        this.enhancer = function (newV, oldV) {
            return enhancer(newV, oldV, name);
        };
        if (initialData) {
            this.replace(initialData);
        }
    }
    ObservableSet.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableSet.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_1, _b;
                try {
                    for (var _c = __values(_this._data.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var value = _d.value;
                        _this.delete(value);
                    }
                } catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                } finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    } finally {
                        if (e_1) throw e_1.error;
                    }
                }
            });
        });
    };
    ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
        var e_2, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var value = _d.value;
                callbackFn.call(thisArg, value, value, this);
            }
        } catch (e_2_1) {
            e_2 = { error: e_2_1 };
        } finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            } finally {
                if (e_2) throw e_2.error;
            }
        }
    };
    Object.defineProperty(ObservableSet.prototype, "size", {
        get: function get() {
            this._atom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    ObservableSet.prototype.add = function (value) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._atom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "add",
                object: this,
                newValue: value
            });
            if (!change) return this;
            // TODO: ideally, value = change.value would be done here, so that values can be
            // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            transaction(function () {
                _this._data.add(_this.enhancer(value, undefined));
                _this._atom.reportChanged();
            });
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy ? {
                type: "add",
                object: this,
                newValue: value
            } : null;
            if (notifySpy && "development" !== "production") spyReportStart(change);
            if (notify) notifyListeners(this, change);
            if (notifySpy && "development" !== "production") spyReportEnd();
        }
        return this;
    };
    ObservableSet.prototype.delete = function (value) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                oldValue: value
            });
            if (!change) return false;
        }
        if (this.has(value)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy ? {
                type: "delete",
                object: this,
                oldValue: value
            } : null;
            if (notifySpy && "development" !== "production") spyReportStart(_assign(_assign({}, change), { name: this.name }));
            transaction(function () {
                _this._atom.reportChanged();
                _this._data.delete(value);
            });
            if (notify) notifyListeners(this, change);
            if (notifySpy && "development" !== "production") spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableSet.prototype.has = function (value) {
        this._atom.reportObserved();
        return this._data.has(this.dehanceValue(value));
    };
    ObservableSet.prototype.entries = function () {
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        var values = Array.from(this.values());
        return makeIterable({
            next: function next() {
                var index = nextIndex;
                nextIndex += 1;
                return index < values.length ? { value: [keys[index], values[index]], done: false } : { done: true };
            }
        });
    };
    ObservableSet.prototype.keys = function () {
        return this.values();
    };
    ObservableSet.prototype.values = function () {
        this._atom.reportObserved();
        var self = this;
        var nextIndex = 0;
        var observableValues = Array.from(this._data.values());
        return makeIterable({
            next: function next() {
                return nextIndex < observableValues.length ? { value: self.dehanceValue(observableValues[nextIndex++]), done: false } : { done: true };
            }
        });
    };
    ObservableSet.prototype.replace = function (other) {
        var _this = this;
        if (isObservableSet(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (Array.isArray(other)) {
                _this.clear();
                other.forEach(function (value) {
                    return _this.add(value);
                });
            } else if (isES6Set(other)) {
                _this.clear();
                other.forEach(function (value) {
                    return _this.add(value);
                });
            } else if (other !== null && other !== undefined) {
                fail("Cannot initialize set from " + other);
            }
        });
        return this;
    };
    ObservableSet.prototype.observe = function (listener, fireImmediately) {
        // TODO 'fireImmediately' can be true?
         true && invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
        return registerListener(this, listener);
    };
    ObservableSet.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableSet.prototype.toJS = function () {
        return new Set(this);
    };
    ObservableSet.prototype.toString = function () {
        return this.name + "[ " + Array.from(this).join(", ") + " ]";
    };
    ObservableSet.prototype[(_a$1 = $mobx, Symbol.iterator)] = function () {
        return this.values();
    };
    return ObservableSet;
}();
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);

var ObservableObjectAdministration = /** @class */function () {
    function ObservableObjectAdministration(target, values, name, defaultEnhancer) {
        if (values === void 0) {
            values = new Map();
        }
        this.target = target;
        this.values = values;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.keysAtom = new Atom(name + ".keys");
    }
    ObservableObjectAdministration.prototype.read = function (key) {
        return this.values.get(key).get();
    };
    ObservableObjectAdministration.prototype.write = function (key, newValue) {
        var instance = this.target;
        var observable = this.values.get(key);
        if (observable instanceof ComputedValue) {
            observable.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "update",
                object: this.proxy || instance,
                name: key,
                newValue: newValue
            });
            if (!change) return;
            newValue = change.newValue;
        }
        newValue = observable.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== globalState.UNCHANGED) {
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var change = notify || notifySpy ? {
                type: "update",
                object: this.proxy || instance,
                oldValue: observable.value,
                name: key,
                newValue: newValue
            } : null;
            if (notifySpy && "development" !== "production") spyReportStart(_assign(_assign({}, change), { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify) notifyListeners(this, change);
            if (notifySpy && "development" !== "production") spyReportEnd();
        }
    };
    ObservableObjectAdministration.prototype.has = function (key) {
        var map = this.pendingKeys || (this.pendingKeys = new Map());
        var entry = map.get(key);
        if (entry) return entry.get();else {
            var exists = !!this.values.get(key);
            // Possible optimization: Don't have a separate map for non existing keys,
            // but store them in the values map instead, using a special symbol to denote "not existing"
            entry = new ObservableValue(exists, referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);
            map.set(key, entry);
            return entry.get(); // read to subscribe
        }
    };
    ObservableObjectAdministration.prototype.addObservableProp = function (propName, newValue, enhancer) {
        if (enhancer === void 0) {
            enhancer = this.defaultEnhancer;
        }
        var target = this.target;
        assertPropertyConfigurable(target, propName);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: propName,
                type: "add",
                newValue: newValue
            });
            if (!change) return;
            newValue = change.newValue;
        }
        var observable = new ObservableValue(newValue, enhancer, this.name + "." + stringifyKey(propName), false);
        this.values.set(propName, observable);
        newValue = observable.value; // observableValue might have changed it
        Object.defineProperty(target, propName, generateObservablePropConfig(propName));
        this.notifyPropertyAddition(propName, newValue);
    };
    ObservableObjectAdministration.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
    propName, options) {
        var target = this.target;
        options.name = options.name || this.name + "." + stringifyKey(propName);
        this.values.set(propName, new ComputedValue(options));
        if (propertyOwner === target || isPropertyConfigurable(propertyOwner, propName)) Object.defineProperty(propertyOwner, propName, generateComputedPropConfig(propName));
    };
    ObservableObjectAdministration.prototype.remove = function (key) {
        if (!this.values.has(key)) return;
        var target = this.target;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: key,
                type: "remove"
            });
            if (!change) return;
        }
        try {
            startBatch();
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var oldObservable = this.values.get(key);
            var oldValue = oldObservable && oldObservable.get();
            oldObservable && oldObservable.set(undefined);
            // notify key and keyset listeners
            this.keysAtom.reportChanged();
            this.values.delete(key);
            if (this.pendingKeys) {
                var entry = this.pendingKeys.get(key);
                if (entry) entry.set(false);
            }
            // delete the prop
            delete this.target[key];
            var change = notify || notifySpy ? {
                type: "remove",
                object: this.proxy || target,
                oldValue: oldValue,
                name: key
            } : null;
            if (notifySpy && "development" !== "production") spyReportStart(_assign(_assign({}, change), { name: this.name, key: key }));
            if (notify) notifyListeners(this, change);
            if (notifySpy && "development" !== "production") spyReportEnd();
        } finally {
            endBatch();
        }
    };
    ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
         true && invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableObjectAdministration.prototype.notifyPropertyAddition = function (key, newValue) {
        var notify = hasListeners(this);
        var notifySpy = isSpyEnabled();
        var change = notify || notifySpy ? {
            type: "add",
            object: this.proxy || this.target,
            name: key,
            newValue: newValue
        } : null;
        if (notifySpy && "development" !== "production") spyReportStart(_assign(_assign({}, change), { name: this.name, key: key }));
        if (notify) notifyListeners(this, change);
        if (notifySpy && "development" !== "production") spyReportEnd();
        if (this.pendingKeys) {
            var entry = this.pendingKeys.get(key);
            if (entry) entry.set(true);
        }
        this.keysAtom.reportChanged();
    };
    ObservableObjectAdministration.prototype.getKeys = function () {
        var e_1, _a;
        this.keysAtom.reportObserved();
        // return Reflect.ownKeys(this.values) as any
        var res = [];
        try {
            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2),
                    key = _d[0],
                    value = _d[1];
                if (value instanceof ObservableValue) res.push(key);
            }
        } catch (e_1_1) {
            e_1 = { error: e_1_1 };
        } finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally {
                if (e_1) throw e_1.error;
            }
        }
        return res;
    };
    return ObservableObjectAdministration;
}();
function asObservableObject(target, name, defaultEnhancer) {
    if (name === void 0) {
        name = "";
    }
    if (defaultEnhancer === void 0) {
        defaultEnhancer = deepEnhancer;
    }
    if (Object.prototype.hasOwnProperty.call(target, $mobx)) return target[$mobx];
     true && invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
    if (!isPlainObject(target)) name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name) name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, new Map(), stringifyKey(name), defaultEnhancer);
    addHiddenProp(target, $mobx, adm);
    return adm;
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig(propName) {
    return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
        configurable: true,
        enumerable: true,
        get: function get() {
            return this[$mobx].read(propName);
        },
        set: function set(v) {
            this[$mobx].write(propName, v);
        }
    });
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner[$mobx];
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance(owner);
        return owner[$mobx];
    }
    return adm;
}
function generateComputedPropConfig(propName) {
    return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
        configurable: globalState.computedConfigurable,
        enumerable: false,
        get: function get() {
            return getAdministrationForComputedPropOwner(this).read(propName);
        },
        set: function set(v) {
            getAdministrationForComputedPropOwner(this).write(propName, v);
        }
    });
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        return isObservableObjectAdministration(thing[$mobx]);
    }
    return false;
}

function getAtom(thing, property) {
    if ((typeof thing === "undefined" ? "undefined" : _typeof(thing)) === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            if (property !== undefined) fail( true && "It is not possible to get index atoms from arrays");
            return thing[$mobx].atom;
        }
        if (isObservableSet(thing)) {
            return thing[$mobx];
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined) return anyThing._keysAtom;
            var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable) fail( true && "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        if (property && !thing[$mobx]) thing[property]; // See #1072
        if (isObservableObject(thing)) {
            if (!property) return fail( true && "please specify a property");
            var observable = thing[$mobx].values.get(property);
            if (!observable) fail( true && "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    } else if (typeof thing === "function") {
        if (isReaction(thing[$mobx])) {
            // disposer function
            return thing[$mobx];
        }
    }
    return fail( true && "Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    if (!thing) fail("Expecting some object");
    if (property !== undefined) return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) return thing;
    if (isObservableMap(thing) || isObservableSet(thing)) return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    if (thing[$mobx]) return thing[$mobx];
    fail( true && "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined) named = getAtom(thing, property);else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing)) named = getAdministration(thing);else named = getAtom(thing); // valid for arrays as well
    return named.name;
}

var toString = Object.prototype.toString;
function deepEqual(a, b, depth) {
    if (depth === void 0) {
        depth = -1;
    }
    return eq(a, b, depth);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, depth, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null) return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a) return b !== b;
    // Exhaust primitive checks
    var type = typeof a === "undefined" ? "undefined" : _typeof(a);
    if (type !== "function" && type !== "object" && (typeof b === "undefined" ? "undefined" : _typeof(b)) != "object") return false;
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a) return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b);
    }
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if ((typeof a === "undefined" ? "undefined" : _typeof(a)) != "object" || (typeof b === "undefined" ? "undefined" : _typeof(b)) != "object") return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor,
            bCtor = b.constructor;
        if (aCtor !== bCtor && !(typeof aCtor === "function" && aCtor instanceof aCtor && typeof bCtor === "function" && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) {
            return false;
        }
    }
    if (depth === 0) {
        return false;
    } else if (depth < 0) {
        depth = -1;
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a) return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length) return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], depth - 1, aStack, bStack)) return false;
        }
    } else {
        // Deep compare objects.
        var keys = Object.keys(a);
        var key = void 0;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length) return false;
        while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(has$1(b, key) && eq(a[key], b[key], depth - 1, aStack, bStack))) return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray(a)) return a.slice();
    if (isES6Map(a) || isObservableMap(a)) return Array.from(a.entries());
    if (isES6Set(a) || isObservableSet(a)) return Array.from(a.entries());
    return a;
}
function has$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return iterator;
}
function getSelf() {
    return this;
}

/*
The only reason for this file to exist is pure horror:
Without it rollup can make the bundling fail at any point in time; when it rolls up the files in the wrong order
it will cause undefined errors (for example because super classes or local variables not being hoisted).
With this file that will still happen,
but at least in this file we can magically reorder the imports with trial and error until the build succeeds again.
*/

/**
 * (c) Michel Weststrate 2015 - 2018
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
    throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
}
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    "development";
} catch (e) {
    var g = getGlobal();
    if (typeof process === "undefined") g.process = {};
    g.process.env = {};
}
(function () {
    function testCodeMinification() {}
    if (testCodeMinification.name !== "testCodeMinification" && "development" !== "production" && process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
        // trick so it doesn't get replaced
        var varName = ["process", "env", "NODE_ENV"].join(".");
        console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
})();
if ((typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy,
        extras: {
            getDebugName: getDebugName
        },
        $mobx: $mobx
    });
}

exports.$mobx = $mobx;
exports.FlowCancellationError = FlowCancellationError;
exports.IDerivationState = IDerivationState;
exports.ObservableMap = ObservableMap;
exports.ObservableSet = ObservableSet;
exports.Reaction = Reaction;
exports._allowStateChanges = allowStateChanges;
exports._allowStateChangesInsideComputed = allowStateChangesInsideComputed;
exports._endAction = _endAction;
exports._getAdministration = getAdministration;
exports._getGlobalState = getGlobalState;
exports._interceptReads = interceptReads;
exports._isComputingDerivation = isComputingDerivation;
exports._resetGlobalState = resetGlobalState;
exports._startAction = _startAction;
exports.action = action;
exports.autorun = autorun;
exports.comparer = comparer;
exports.computed = computed;
exports.configure = configure;
exports.createAtom = createAtom;
exports.decorate = decorate;
exports.entries = entries;
exports.extendObservable = extendObservable;
exports.flow = flow;
exports.get = get;
exports.getAtom = getAtom;
exports.getDebugName = getDebugName;
exports.getDependencyTree = getDependencyTree;
exports.getObserverTree = getObserverTree;
exports.has = has;
exports.intercept = intercept;
exports.isAction = isAction;
exports.isArrayLike = isArrayLike;
exports.isBoxedObservable = isObservableValue;
exports.isComputed = isComputed;
exports.isComputedProp = isComputedProp;
exports.isFlowCancellationError = isFlowCancellationError;
exports.isObservable = isObservable;
exports.isObservableArray = isObservableArray;
exports.isObservableMap = isObservableMap;
exports.isObservableObject = isObservableObject;
exports.isObservableProp = isObservableProp;
exports.isObservableSet = isObservableSet;
exports.keys = keys;
exports.observable = observable;
exports.observe = observe;
exports.onBecomeObserved = onBecomeObserved;
exports.onBecomeUnobserved = onBecomeUnobserved;
exports.onReactionError = onReactionError;
exports.reaction = reaction;
exports.remove = remove;
exports.runInAction = runInAction;
exports.set = _set;
exports.spy = spy;
exports.toJS = toJS;
exports.trace = trace;
exports.transaction = transaction;
exports.untracked = untracked;
exports.values = values;
exports.when = when;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

// observable 把普通的数据变成可观察的数据 Object.defineProperty proxy
// autorun 自动运行
var o = (0, _mobx.observable)({ name: 'zfpx' });

(0, _mobx.autorun)(function () {
    console.log(o.name);
});
o.name = 'hello';

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vYngvbGliL21vYngubW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiZXh0ZW5kU3RhdGljcyIsImQiLCJiIiwiT2JqZWN0Iiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJBcnJheSIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fZXh0ZW5kcyIsIl9fIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJfX2Fzc2lnbiIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJjYWxsIiwiYXBwbHkiLCJfX3ZhbHVlcyIsIm8iLCJtIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuZXh0IiwidmFsdWUiLCJkb25lIiwiX19yZWFkIiwiciIsImFyIiwiZSIsInB1c2giLCJlcnJvciIsIl9fc3ByZWFkIiwiY29uY2F0IiwiT0JGVVNDQVRFRF9FUlJPUiIsIkVNUFRZX0FSUkFZIiwiZnJlZXplIiwiRU1QVFlfT0JKRUNUIiwiZ2V0TmV4dElkIiwiZ2xvYmFsU3RhdGUiLCJtb2J4R3VpZCIsImZhaWwiLCJtZXNzYWdlIiwiaW52YXJpYW50IiwiY2hlY2siLCJFcnJvciIsImRlcHJlY2F0ZWRNZXNzYWdlcyIsImRlcHJlY2F0ZWQiLCJtc2ciLCJ0aGluZyIsInByb2Nlc3MiLCJpbmRleE9mIiwiY29uc29sZSIsIm9uY2UiLCJmdW5jIiwiaW52b2tlZCIsIm5vb3AiLCJ1bmlxdWUiLCJsaXN0IiwicmVzIiwiZm9yRWFjaCIsIml0ZW0iLCJpc09iamVjdCIsImlzUGxhaW5PYmplY3QiLCJwcm90byIsImdldFByb3RvdHlwZU9mIiwiYWRkSGlkZGVuUHJvcCIsIm9iamVjdCIsInByb3BOYW1lIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwid3JpdGFibGUiLCJjb25maWd1cmFibGUiLCJhZGRIaWRkZW5GaW5hbFByb3AiLCJpc1Byb3BlcnR5Q29uZmlndXJhYmxlIiwicHJvcCIsImRlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJhc3NlcnRQcm9wZXJ0eUNvbmZpZ3VyYWJsZSIsInRvU3RyaW5nIiwiY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZSIsIm5hbWUiLCJjbGF6eiIsIngiLCJpc0FycmF5TGlrZSIsImlzQXJyYXkiLCJpc09ic2VydmFibGVBcnJheSIsImlzRVM2TWFwIiwiTWFwIiwiaXNFUzZTZXQiLCJTZXQiLCJnZXRQbGFpbk9iamVjdEtleXMiLCJlbnVtZXJhYmxlcyIsImtleSIsImFkZCIsImdldE93blByb3BlcnR5U3ltYm9scyIsImsiLCJmcm9tIiwic3RyaW5naWZ5S2V5IiwiU3RyaW5nIiwiZ2V0TWFwTGlrZUtleXMiLCJtYXAiLCJrZXlzIiwiX2EiLCJfYiIsImlzT2JzZXJ2YWJsZU1hcCIsInRvUHJpbWl0aXZlIiwiJG1vYngiLCJBdG9tIiwiaXNQZW5kaW5nVW5vYnNlcnZhdGlvbiIsImlzQmVpbmdPYnNlcnZlZCIsIm9ic2VydmVycyIsImRpZmZWYWx1ZSIsImxhc3RBY2Nlc3NlZEJ5IiwibG93ZXN0T2JzZXJ2ZXJTdGF0ZSIsIklEZXJpdmF0aW9uU3RhdGUiLCJOT1RfVFJBQ0tJTkciLCJvbkJlY29tZU9ic2VydmVkIiwib25CZWNvbWVPYnNlcnZlZExpc3RlbmVycyIsImxpc3RlbmVyIiwib25CZWNvbWVVbm9ic2VydmVkIiwib25CZWNvbWVVbm9ic2VydmVkTGlzdGVuZXJzIiwicmVwb3J0T2JzZXJ2ZWQiLCJyZXBvcnRDaGFuZ2VkIiwic3RhcnRCYXRjaCIsInByb3BhZ2F0ZUNoYW5nZWQiLCJlbmRCYXRjaCIsImlzQXRvbSIsImNyZWF0ZUF0b20iLCJvbkJlY29tZU9ic2VydmVkSGFuZGxlciIsIm9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIiLCJhdG9tIiwiaWRlbnRpdHlDb21wYXJlciIsImEiLCJzdHJ1Y3R1cmFsQ29tcGFyZXIiLCJkZWVwRXF1YWwiLCJzaGFsbG93Q29tcGFyZXIiLCJkZWZhdWx0Q29tcGFyZXIiLCJpcyIsImNvbXBhcmVyIiwiaWRlbnRpdHkiLCJzdHJ1Y3R1cmFsIiwiZGVmYXVsdCIsInNoYWxsb3ciLCJtb2J4RGlkUnVuTGF6eUluaXRpYWxpemVyc1N5bWJvbCIsIm1vYnhQZW5kaW5nRGVjb3JhdG9ycyIsImVudW1lcmFibGVEZXNjcmlwdG9yQ2FjaGUiLCJub25FbnVtZXJhYmxlRGVzY3JpcHRvckNhY2hlIiwiY3JlYXRlUHJvcGVydHlJbml0aWFsaXplckRlc2NyaXB0b3IiLCJjYWNoZSIsImdldCIsImluaXRpYWxpemVJbnN0YW5jZSIsInNldCIsInRhcmdldCIsImVfMSIsImRlY29yYXRvcnMiLCJrZXlzXzEiLCJrZXlzXzFfMSIsInByb3BlcnR5Q3JlYXRvciIsImRlY29yYXRvclRhcmdldCIsImRlY29yYXRvckFyZ3VtZW50cyIsImVfMV8xIiwicmV0dXJuIiwiY3JlYXRlUHJvcERlY29yYXRvciIsInByb3BlcnR5SW5pdGlhbGx5RW51bWVyYWJsZSIsImRlY29yYXRvckZhY3RvcnkiLCJkZWNvcmF0b3IiLCJkZWNvcmF0ZSIsImFwcGx5SW1tZWRpYXRlbHkiLCJxdWFja3NMaWtlQURlY29yYXRvciIsImluaGVyaXRlZERlY29yYXRvcnMiLCJzbGljZSIsImFyZ3MiLCJkZWVwRW5oYW5jZXIiLCJ2IiwiXyIsImlzT2JzZXJ2YWJsZSIsIm9ic2VydmFibGUiLCJhcnJheSIsInVuZGVmaW5lZCIsInNoYWxsb3dFbmhhbmNlciIsImlzT2JzZXJ2YWJsZU9iamVjdCIsImlzT2JzZXJ2YWJsZVNldCIsImRlZXAiLCJyZWZlcmVuY2VFbmhhbmNlciIsIm5ld1ZhbHVlIiwicmVmU3RydWN0RW5oYW5jZXIiLCJvbGRWYWx1ZSIsImNyZWF0ZURlY29yYXRvckZvckVuaGFuY2VyIiwiZW5oYW5jZXIiLCJwcm9wZXJ0eU5hbWUiLCJfZGVjb3JhdG9yVGFyZ2V0IiwiZGVjb3JhdG9yQXJncyIsImluaXRpYWxWYWx1ZSIsImluaXRpYWxpemVyIiwiYXNPYnNlcnZhYmxlT2JqZWN0IiwiYWRkT2JzZXJ2YWJsZVByb3AiLCJlbnYiLCJvYnNlcnZhYmxlRGVjb3JhdG9yIiwiZGVmYXVsdENyZWF0ZU9ic2VydmFibGVPcHRpb25zIiwiZGVmYXVsdERlY29yYXRvciIsInByb3h5IiwiYXNzZXJ0VmFsaWRPcHRpb24iLCJ0ZXN0IiwiYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyIsImRlZXBEZWNvcmF0b3IiLCJzaGFsbG93RGVjb3JhdG9yIiwicmVmRGVjb3JhdG9yIiwicmVmU3RydWN0RGVjb3JhdG9yIiwiZ2V0RW5oYW5jZXJGcm9tT3B0aW9ucyIsIm9wdGlvbnMiLCJjcmVhdGVPYnNlcnZhYmxlIiwiYXJnMiIsImFyZzMiLCJvYnNlcnZhYmxlRmFjdG9yaWVzIiwiYm94IiwiaW5jb3JyZWN0bHlVc2VkQXNEZWNvcmF0b3IiLCJPYnNlcnZhYmxlVmFsdWUiLCJlcXVhbHMiLCJpbml0aWFsVmFsdWVzIiwiY3JlYXRlT2JzZXJ2YWJsZUFycmF5IiwiT2JzZXJ2YWJsZU1hcCIsIk9ic2VydmFibGVTZXQiLCJwcm9wcyIsImV4dGVuZE9ic2VydmFibGUiLCJnZXREZWZhdWx0RGVjb3JhdG9yRnJvbU9iamVjdE9wdGlvbnMiLCJiYXNlIiwiY3JlYXRlRHluYW1pY09ic2VydmFibGVPYmplY3QiLCJleHRlbmRPYnNlcnZhYmxlT2JqZWN0V2l0aFByb3BlcnRpZXMiLCJyZWYiLCJzdHJ1Y3QiLCJtZXRob2ROYW1lIiwiY29tcHV0ZWREZWNvcmF0b3IiLCJpbnN0YW5jZSIsImFkZENvbXB1dGVkUHJvcCIsImNvbnRleHQiLCJjb21wdXRlZFN0cnVjdERlY29yYXRvciIsImNvbXB1dGVkIiwiYXJnMSIsIm9wdHMiLCJDb21wdXRlZFZhbHVlIiwiVHJhY2VNb2RlIiwiQ2F1Z2h0RXhjZXB0aW9uIiwiY2F1c2UiLCJpc0NhdWdodEV4Y2VwdGlvbiIsInNob3VsZENvbXB1dGUiLCJkZXJpdmF0aW9uIiwiZGVwZW5kZW5jaWVzU3RhdGUiLCJVUF9UT19EQVRFIiwiU1RBTEUiLCJQT1NTSUJMWV9TVEFMRSIsInByZXZVbnRyYWNrZWQiLCJ1bnRyYWNrZWRTdGFydCIsIm9icyIsIm9ic2VydmluZyIsImwiLCJvYmoiLCJpc0NvbXB1dGVkVmFsdWUiLCJkaXNhYmxlRXJyb3JCb3VuZGFyaWVzIiwidW50cmFja2VkRW5kIiwiY2hhbmdlRGVwZW5kZW5jaWVzU3RhdGVUbzAiLCJpc0NvbXB1dGluZ0Rlcml2YXRpb24iLCJ0cmFja2luZ0Rlcml2YXRpb24iLCJjaGVja0lmU3RhdGVNb2RpZmljYXRpb25zQXJlQWxsb3dlZCIsImhhc09ic2VydmVycyIsInNpemUiLCJjb21wdXRhdGlvbkRlcHRoIiwiYWxsb3dTdGF0ZUNoYW5nZXMiLCJlbmZvcmNlQWN0aW9ucyIsImNoZWNrSWZTdGF0ZVJlYWRzQXJlQWxsb3dlZCIsImFsbG93U3RhdGVSZWFkcyIsIm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uIiwid2FybiIsInRyYWNrRGVyaXZlZEZ1bmN0aW9uIiwiZiIsInByZXZBbGxvd1N0YXRlUmVhZHMiLCJhbGxvd1N0YXRlUmVhZHNTdGFydCIsIm5ld09ic2VydmluZyIsInVuYm91bmREZXBzQ291bnQiLCJydW5JZCIsInByZXZUcmFja2luZyIsInJlc3VsdCIsImJpbmREZXBlbmRlbmNpZXMiLCJ3YXJuQWJvdXREZXJpdmF0aW9uV2l0aG91dERlcGVuZGVuY2llcyIsImFsbG93U3RhdGVSZWFkc0VuZCIsInJlYWN0aW9uUmVxdWlyZXNPYnNlcnZhYmxlIiwicmVxdWlyZXNPYnNlcnZhYmxlIiwicHJldk9ic2VydmluZyIsImxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSIsImkwIiwiZGVwIiwicmVtb3ZlT2JzZXJ2ZXIiLCJhZGRPYnNlcnZlciIsIm9uQmVjb21lU3RhbGUiLCJjbGVhck9ic2VydmluZyIsInVudHJhY2tlZCIsImFjdGlvbiIsInByZXYiLCJjdXJyZW50QWN0aW9uSWQiLCJuZXh0QWN0aW9uSWQiLCJjcmVhdGVBY3Rpb24iLCJhY3Rpb25OYW1lIiwiZm4iLCJleGVjdXRlQWN0aW9uIiwiaXNNb2J4QWN0aW9uIiwic2NvcGUiLCJydW5JbmZvIiwiX3N0YXJ0QWN0aW9uIiwiZXJyIiwiX2VuZEFjdGlvbiIsIm5vdGlmeVNweSIsImlzU3B5RW5hYmxlZCIsInN0YXJ0VGltZSIsIkRhdGUiLCJub3ciLCJmbGF0dGVuZEFyZ3MiLCJzcHlSZXBvcnRTdGFydCIsInR5cGUiLCJwcmV2RGVyaXZhdGlvbiIsInByZXZBbGxvd1N0YXRlQ2hhbmdlcyIsImFsbG93U3RhdGVDaGFuZ2VzU3RhcnQiLCJhY3Rpb25JZCIsInBhcmVudEFjdGlvbklkIiwic3VwcHJlc3NSZWFjdGlvbkVycm9ycyIsImFsbG93U3RhdGVDaGFuZ2VzRW5kIiwic3B5UmVwb3J0RW5kIiwidGltZSIsImFsbG93U3RhdGVDaGFuZ2VzSW5zaWRlQ29tcHV0ZWQiLCJfc3VwZXIiLCJfdGhpcyIsImhhc1VucmVwb3J0ZWRDaGFuZ2UiLCJzcHlSZXBvcnQiLCJkZWhhbmNlVmFsdWUiLCJkZWhhbmNlciIsInByZXBhcmVOZXdWYWx1ZSIsIlVOQ0hBTkdFRCIsInNldE5ld1ZhbHVlIiwiaGFzSW50ZXJjZXB0b3JzIiwiY2hhbmdlIiwiaW50ZXJjZXB0Q2hhbmdlIiwiaGFzTGlzdGVuZXJzIiwibm90aWZ5TGlzdGVuZXJzIiwiaW50ZXJjZXB0IiwiaGFuZGxlciIsInJlZ2lzdGVySW50ZXJjZXB0b3IiLCJvYnNlcnZlIiwiZmlyZUltbWVkaWF0ZWx5IiwicmVnaXN0ZXJMaXN0ZW5lciIsInRvSlNPTiIsInZhbHVlT2YiLCJpc09ic2VydmFibGVWYWx1ZSIsIl9fbWFwaWQiLCJpc0NvbXB1dGluZyIsImlzUnVubmluZ1NldHRlciIsImlzVHJhY2luZyIsIk5PTkUiLCJzZXR0ZXIiLCJjb21wYXJlU3RydWN0dXJhbCIsInJlcXVpcmVzUmVhY3Rpb24iLCJrZWVwQWxpdmUiLCJwcm9wYWdhdGVNYXliZUNoYW5nZWQiLCJpbkJhdGNoIiwid2FybkFib3V0VW50cmFja2VkUmVhZCIsImNvbXB1dGVWYWx1ZSIsInRyYWNrQW5kQ29tcHV0ZSIsInByb3BhZ2F0ZUNoYW5nZUNvbmZpcm1lZCIsInBlZWsiLCJ3YXNTdXNwZW5kZWQiLCJjaGFuZ2VkIiwidHJhY2siLCJzdXNwZW5kIiwiZmlyc3RUaW1lIiwicHJldlZhbHVlIiwiYXV0b3J1biIsInByZXZVIiwibG9nIiwiY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uIiwicGVyc2lzdGVudEtleXMiLCJNb2JYR2xvYmFscyIsInZlcnNpb24iLCJwZW5kaW5nVW5vYnNlcnZhdGlvbnMiLCJwZW5kaW5nUmVhY3Rpb25zIiwiaXNSdW5uaW5nUmVhY3Rpb25zIiwic3B5TGlzdGVuZXJzIiwiZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzIiwiY29tcHV0ZWRDb25maWd1cmFibGUiLCJtb2NrR2xvYmFsIiwiZ2V0R2xvYmFsIiwid2luZG93IiwiZ2xvYmFsIiwic2VsZiIsImNhbk1lcmdlR2xvYmFsU3RhdGUiLCJpc29sYXRlQ2FsbGVkIiwiX19tb2J4SW5zdGFuY2VDb3VudCIsIl9fbW9ieEdsb2JhbHMiLCJzZXRUaW1lb3V0IiwiaXNvbGF0ZUdsb2JhbFN0YXRlIiwiZ2V0R2xvYmFsU3RhdGUiLCJyZXNldEdsb2JhbFN0YXRlIiwiZGVmYXVsdEdsb2JhbHMiLCJnZXRPYnNlcnZlcnMiLCJub2RlIiwiZGVsZXRlIiwicXVldWVGb3JVbm9ic2VydmF0aW9uIiwicnVuUmVhY3Rpb25zIiwibG9nVHJhY2VJbmZvIiwiQlJFQUsiLCJsaW5lcyIsInByaW50RGVwVHJlZSIsImdldERlcGVuZGVuY3lUcmVlIiwiRnVuY3Rpb24iLCJyZXBsYWNlIiwiam9pbiIsInRyZWUiLCJkZXB0aCIsImRlcGVuZGVuY2llcyIsImNoaWxkIiwiUmVhY3Rpb24iLCJvbkludmFsaWRhdGUiLCJlcnJvckhhbmRsZXIiLCJpc0Rpc3Bvc2VkIiwiX2lzU2NoZWR1bGVkIiwiX2lzVHJhY2tQZW5kaW5nIiwiX2lzUnVubmluZyIsInNjaGVkdWxlIiwiaXNTY2hlZHVsZWQiLCJydW5SZWFjdGlvbiIsInJlcG9ydEV4Y2VwdGlvbkluRGVyaXZhdGlvbiIsIm5vdGlmeSIsImRpc3Bvc2UiLCJnZXREaXNwb3NlciIsImJpbmQiLCJ0cmFjZSIsImVudGVyQnJlYWtQb2ludCIsIm9uUmVhY3Rpb25FcnJvciIsImlkeCIsInNwbGljZSIsIk1BWF9SRUFDVElPTl9JVEVSQVRJT05TIiwicmVhY3Rpb25TY2hlZHVsZXIiLCJydW5SZWFjdGlvbnNIZWxwZXIiLCJhbGxSZWFjdGlvbnMiLCJpdGVyYXRpb25zIiwicmVtYWluaW5nUmVhY3Rpb25zIiwiaXNSZWFjdGlvbiIsInNldFJlYWN0aW9uU2NoZWR1bGVyIiwiYmFzZVNjaGVkdWxlciIsImV2ZW50IiwibGlzdGVuZXJzIiwiRU5EX0VWRU5UIiwic3B5IiwiZmlsdGVyIiwiZG9udFJlYXNzaWduRmllbGRzIiwibmFtZWRBY3Rpb25EZWNvcmF0b3IiLCJpbml0aWFsaXplcl8xIiwiYWN0aW9uRmllbGREZWNvcmF0b3IiLCJib3VuZEFjdGlvbkRlY29yYXRvciIsImFwcGx5VG9JbnN0YW5jZSIsImRlZmluZUJvdW5kQWN0aW9uIiwiYXJnNCIsImJvdW5kIiwicnVuSW5BY3Rpb24iLCJpc0FjdGlvbiIsInZpZXciLCJydW5TeW5jIiwic2NoZWR1bGVyIiwiZGVsYXkiLCJyZWFjdGlvbiIsInJlYWN0aW9uUnVubmVyIiwib25FcnJvciIsInNjaGVkdWxlcl8xIiwiY3JlYXRlU2NoZWR1bGVyRnJvbU9wdGlvbnMiLCJpc1NjaGVkdWxlZF8xIiwicnVuIiwiZXhwcmVzc2lvbiIsImVmZmVjdCIsImVmZmVjdEFjdGlvbiIsIndyYXBFcnJvckhhbmRsZXIiLCJuZXh0VmFsdWUiLCJiYXNlRm4iLCJpbnRlcmNlcHRIb29rIiwiaG9vayIsImdldEF0b20iLCJjYiIsImxpc3RlbmVyc0tleSIsIm9yaWciLCJob29rTGlzdGVuZXJzIiwiY29uZmlndXJlIiwiZWEiLCJfbG9vcF8xIiwicHJvcGVydHlEZWNvcmF0b3JzIiwiZXZlcnkiLCJuZXdEZXNjcmlwdG9yIiwicmVkdWNlIiwiYWNjRGVzY3JpcHRvciIsInByb3BlcnRpZXMiLCJlXzIiLCJrZXlzXzIiLCJrZXlzXzJfMSIsImlzQ29tcHV0ZWQiLCJyZXN1bHREZXNjcmlwdG9yIiwiZV8yXzEiLCJwcm9wZXJ0eSIsIm5vZGVUb0RlcGVuZGVuY3lUcmVlIiwiZ2V0T2JzZXJ2ZXJUcmVlIiwibm9kZVRvT2JzZXJ2ZXJUcmVlIiwiZ2VuZXJhdG9ySWQiLCJGbG93Q2FuY2VsbGF0aW9uRXJyb3IiLCJpc0Zsb3dDYW5jZWxsYXRpb25FcnJvciIsImZsb3ciLCJnZW5lcmF0b3IiLCJjdHgiLCJnZW4iLCJyZWplY3RvciIsInBlbmRpbmdQcm9taXNlIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3RlcElkIiwib25GdWxmaWxsZWQiLCJyZXQiLCJvblJlamVjdGVkIiwidGhyb3ciLCJ0aGVuIiwiY2FuY2VsIiwiY2FuY2VsUHJvbWlzZSIsInlpZWxkZWRQcm9taXNlIiwiaW50ZXJjZXB0UmVhZHMiLCJwcm9wT3JIYW5kbGVyIiwiZ2V0QWRtaW5pc3RyYXRpb24iLCJpbnRlcmNlcHRQcm9wZXJ0eSIsImludGVyY2VwdEludGVyY2VwdGFibGUiLCJfaXNDb21wdXRlZCIsInZhbHVlcyIsImhhcyIsImlzQ29tcHV0ZWRQcm9wIiwiX2lzT2JzZXJ2YWJsZSIsImlzT2JzZXJ2YWJsZVByb3AiLCJnZXRLZXlzIiwiaW5kZXgiLCJlbnRyaWVzIiwidmFsdWVzXzEiLCJrZXlfMSIsImFkbSIsImV4aXN0aW5nT2JzZXJ2YWJsZSIsIndyaXRlIiwiZGVmYXVsdEVuaGFuY2VyIiwicGFyc2VJbnQiLCJyZW1vdmUiLCJwcm9wT3JDYiIsImNiT3JGaXJlIiwib2JzZXJ2ZU9ic2VydmFibGVQcm9wZXJ0eSIsIm9ic2VydmVPYnNlcnZhYmxlIiwiZGVmYXVsdE9wdGlvbnMiLCJkZXRlY3RDeWNsZXMiLCJleHBvcnRNYXBzQXNPYmplY3RzIiwicmVjdXJzZUV2ZXJ5dGhpbmciLCJ0b0pTSGVscGVyIiwic291cmNlIiwiX19hbHJlYWR5U2VlbiIsInJlc18xIiwidG9BZGQiLCJyZXNfMiIsInJlc18zIiwicmVzXzQiLCJyZXNfNSIsInRvSlMiLCJfaSIsInBvcCIsImdldEF0b21Gcm9tQXJncyIsIkxPRyIsInRyYW5zYWN0aW9uIiwidGhpc0FyZyIsIndoZW4iLCJwcmVkaWNhdGUiLCJ3aGVuUHJvbWlzZSIsIl93aGVuIiwidGltZW91dEhhbmRsZSIsInRpbWVvdXQiLCJkaXNwb3NlciIsImNsZWFyVGltZW91dCIsImdldEFkbSIsImlzUHJvcGVydHlLZXkiLCJ2YWwiLCJvYmplY3RQcm94eVRyYXBzIiwiZGVsZXRlUHJvcGVydHkiLCJvd25LZXlzIiwia2V5c0F0b20iLCJSZWZsZWN0IiwicHJldmVudEV4dGVuc2lvbnMiLCJQcm94eSIsImludGVyY2VwdGFibGUiLCJpbnRlcmNlcHRvcnMiLCJsaXN0ZW5hYmxlIiwiY2hhbmdlTGlzdGVuZXJzIiwiTUFYX1NQTElDRV9TSVpFIiwiYXJyYXlUcmFwcyIsImdldEFycmF5TGVuZ3RoIiwiYXJyYXlFeHRlbnNpb25zIiwiaXNOYU4iLCJzZXRBcnJheUxlbmd0aCIsIm93bmVkIiwiT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24iLCJzcGxpY2VXaXRoQXJyYXkiLCJsYXN0S25vd25MZW5ndGgiLCJuZXdWIiwib2xkViIsImRlaGFuY2VWYWx1ZXMiLCJhZGRlZCIsImFkZGVkQ291bnQiLCJyZW1vdmVkIiwicmVtb3ZlZENvdW50IiwibmV3TGVuZ3RoIiwiY3VycmVudExlbmd0aCIsIm5ld0l0ZW1zIiwidXBkYXRlQXJyYXlMZW5ndGgiLCJvbGRMZW5ndGgiLCJkZWx0YSIsImRlbGV0ZUNvdW50IiwiTWF0aCIsIm1heCIsIm1pbiIsImxlbmd0aERlbHRhIiwic3BsaWNlSXRlbXNJbnRvVmFsdWVzIiwibm90aWZ5QXJyYXlTcGxpY2UiLCJub3RpZnlBcnJheUNoaWxkVXBkYXRlIiwiY2xlYXIiLCJpdGVtcyIsInNoaWZ0IiwidW5zaGlmdCIsInJldmVyc2UiLCJjbG9uZSIsInNvcnQiLCJjb21wYXJlRm4iLCJmdW5jTmFtZSIsImlzT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24iLCJPYnNlcnZhYmxlTWFwTWFya2VyIiwiaW5pdGlhbERhdGEiLCJfa2V5c0F0b20iLCJ0b1N0cmluZ1RhZyIsIl9kYXRhIiwiX2hhc01hcCIsIm1lcmdlIiwiX2hhcyIsImVudHJ5IiwibmV3RW50cnkiLCJoYXNLZXkiLCJfdXBkYXRlVmFsdWUiLCJfYWRkVmFsdWUiLCJfdXBkYXRlSGFzTWFwRW50cnkiLCJuZXh0SW5kZXgiLCJtYWtlSXRlcmFibGUiLCJjYWxsYmFjayIsIl9jIiwiX2QiLCJfZSIsIm90aGVyIiwibmV3S2V5cyIsIm9sZEtleXMiLCJtaXNzaW5nS2V5cyIsInRvUE9KTyIsImVfMyIsImVfM18xIiwiX2EkMSIsIk9ic2VydmFibGVTZXRNYXJrZXIiLCJfYXRvbSIsImNhbGxiYWNrRm4iLCJvYnNlcnZhYmxlVmFsdWVzIiwiT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uIiwicmVhZCIsInBlbmRpbmdLZXlzIiwiZXhpc3RzIiwiZ2VuZXJhdGVPYnNlcnZhYmxlUHJvcENvbmZpZyIsIm5vdGlmeVByb3BlcnR5QWRkaXRpb24iLCJwcm9wZXJ0eU93bmVyIiwiZ2VuZXJhdGVDb21wdXRlZFByb3BDb25maWciLCJvbGRPYnNlcnZhYmxlIiwiaWxsZWdhbEFjY2VzcyIsIm93bmVyIiwiaXNFeHRlbnNpYmxlIiwib2JzZXJ2YWJsZVByb3BlcnR5Q29uZmlncyIsImNvbXB1dGVkUHJvcGVydHlDb25maWdzIiwiZ2V0QWRtaW5pc3RyYXRpb25Gb3JDb21wdXRlZFByb3BPd25lciIsImlzT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uIiwiYW55VGhpbmciLCJnZXREZWJ1Z05hbWUiLCJuYW1lZCIsImVxIiwiYVN0YWNrIiwiYlN0YWNrIiwidW53cmFwIiwiY2xhc3NOYW1lIiwiYXJlQXJyYXlzIiwiYUN0b3IiLCJiQ3RvciIsImhhcyQxIiwiZ2V0U2VsZiIsImciLCJ0ZXN0Q29kZU1pbmlmaWNhdGlvbiIsIklHTk9SRV9NT0JYX01JTklGWV9XQVJOSU5HIiwidmFyTmFtZSIsIl9fTU9CWF9ERVZUT09MU19HTE9CQUxfSE9PS19fIiwiaW5qZWN0TW9ieCIsImV4dHJhcyIsIl9hbGxvd1N0YXRlQ2hhbmdlcyIsIl9hbGxvd1N0YXRlQ2hhbmdlc0luc2lkZUNvbXB1dGVkIiwiX2dldEFkbWluaXN0cmF0aW9uIiwiX2dldEdsb2JhbFN0YXRlIiwiX2ludGVyY2VwdFJlYWRzIiwiX2lzQ29tcHV0aW5nRGVyaXZhdGlvbiIsIl9yZXNldEdsb2JhbFN0YXRlIiwiaXNCb3hlZE9ic2VydmFibGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiZHJhaW5RdWV1ZSIsImxlbiIsIm5leHRUaWNrIiwiSXRlbSIsInRpdGxlIiwiYnJvd3NlciIsImFyZ3YiLCJ2ZXJzaW9ucyIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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LEdBQVYsRUFBZTtBQUMzQixVQUFNLElBQUk3ckIsS0FBSixDQUFVLGdDQUFWLENBQU47QUFDSCxDQUZEO0FBR0FLLFFBQVF5ckIsS0FBUixHQUFnQixZQUFXO0FBQUUsV0FBTyxDQUFQO0FBQVcsQ0FBeEMsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZMQSxJQUFJbEQsQ0FBSjs7QUFFQTtBQUNBQSxJQUFLLFlBQVc7QUFDZixRQUFPLElBQVA7QUFDQSxDQUZHLEVBQUo7O0FBSUEsSUFBSTtBQUNIO0FBQ0FBLEtBQUlBLEtBQUssSUFBSS9SLFFBQUosQ0FBYSxhQUFiLEdBQVQ7QUFDQSxDQUhELENBR0UsT0FBTzdYLENBQVAsRUFBVTtBQUNYO0FBQ0EsS0FBSSxRQUFPdVcsTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQUF0QixFQUFnQ3FULElBQUlyVCxNQUFKO0FBQ2hDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQW9VLE9BQU9DLE9BQVAsR0FBaUJoQixDQUFqQixDOzs7Ozs7Ozs7Ozs7OztBQ25CQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSXRxQixJQUFJLHNCQUFXLEVBQUM4RCxNQUFLLE1BQU4sRUFBWCxDQUFSOztBQUVBLG1CQUFRLFlBQUk7QUFDUjdCLFlBQVFtVSxHQUFSLENBQVlwVyxFQUFFOEQsSUFBZDtBQUNILENBRkQ7QUFHQTlELEVBQUU4RCxJQUFGLEdBQVMsT0FBVCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qKiBNb2JYIC0gKGMpIE1pY2hlbCBXZXN0c3RyYXRlIDIwMTUgLSAyMDE5IC0gTUlUIExpY2Vuc2VkICovXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxuXG52YXIgT0JGVVNDQVRFRF9FUlJPUiA9IFwiQW4gaW52YXJpYW50IGZhaWxlZCwgaG93ZXZlciB0aGUgZXJyb3IgaXMgb2JmdXNjYXRlZCBiZWNhdXNlIHRoaXMgaXMgYW4gcHJvZHVjdGlvbiBidWlsZC5cIjtcbnZhciBFTVBUWV9BUlJBWSA9IFtdO1xuT2JqZWN0LmZyZWV6ZShFTVBUWV9BUlJBWSk7XG52YXIgRU1QVFlfT0JKRUNUID0ge307XG5PYmplY3QuZnJlZXplKEVNUFRZX09CSkVDVCk7XG5mdW5jdGlvbiBnZXROZXh0SWQoKSB7XG4gICAgcmV0dXJuICsrZ2xvYmFsU3RhdGUubW9ieEd1aWQ7XG59XG5mdW5jdGlvbiBmYWlsKG1lc3NhZ2UpIHtcbiAgICBpbnZhcmlhbnQoZmFsc2UsIG1lc3NhZ2UpO1xuICAgIHRocm93IFwiWFwiOyAvLyB1bnJlYWNoYWJsZVxufVxuZnVuY3Rpb24gaW52YXJpYW50KGNoZWNrLCBtZXNzYWdlKSB7XG4gICAgaWYgKCFjaGVjaylcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYnhdIFwiICsgKG1lc3NhZ2UgfHwgT0JGVVNDQVRFRF9FUlJPUikpO1xufVxuLyoqXG4gKiBQcmludHMgYSBkZXByZWNhdGlvbiBtZXNzYWdlLCBidXQgb25seSBvbmUgdGltZS5cbiAqIFJldHVybnMgZmFsc2UgaWYgdGhlIGRlcHJlY2F0ZWQgbWVzc2FnZSB3YXMgYWxyZWFkeSBwcmludGVkIGJlZm9yZVxuICovXG52YXIgZGVwcmVjYXRlZE1lc3NhZ2VzID0gW107XG5mdW5jdGlvbiBkZXByZWNhdGVkKG1zZywgdGhpbmcpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHRoaW5nKSB7XG4gICAgICAgIHJldHVybiBkZXByZWNhdGVkKFwiJ1wiICsgbXNnICsgXCInLCB1c2UgJ1wiICsgdGhpbmcgKyBcIicgaW5zdGVhZC5cIik7XG4gICAgfVxuICAgIGlmIChkZXByZWNhdGVkTWVzc2FnZXMuaW5kZXhPZihtc2cpICE9PSAtMSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGRlcHJlY2F0ZWRNZXNzYWdlcy5wdXNoKG1zZyk7XG4gICAgY29uc29sZS5lcnJvcihcIlttb2J4XSBEZXByZWNhdGVkOiBcIiArIG1zZyk7XG4gICAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIE1ha2VzIHN1cmUgdGhhdCB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gaXMgaW52b2tlZCBhdCBtb3N0IG9uY2UuXG4gKi9cbmZ1bmN0aW9uIG9uY2UoZnVuYykge1xuICAgIHZhciBpbnZva2VkID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGludm9rZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGludm9rZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG52YXIgbm9vcCA9IGZ1bmN0aW9uICgpIHsgfTtcbmZ1bmN0aW9uIHVuaXF1ZShsaXN0KSB7XG4gICAgdmFyIHJlcyA9IFtdO1xuICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAocmVzLmluZGV4T2YoaXRlbSkgPT09IC0xKVxuICAgICAgICAgICAgcmVzLnB1c2goaXRlbSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIjtcbn1cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlICE9PSBcIm9iamVjdFwiKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgICByZXR1cm4gcHJvdG8gPT09IE9iamVjdC5wcm90b3R5cGUgfHwgcHJvdG8gPT09IG51bGw7XG59XG5mdW5jdGlvbiBhZGRIaWRkZW5Qcm9wKG9iamVjdCwgcHJvcE5hbWUsIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcE5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkSGlkZGVuRmluYWxQcm9wKG9iamVjdCwgcHJvcE5hbWUsIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iamVjdCwgcHJvcE5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzUHJvcGVydHlDb25maWd1cmFibGUob2JqZWN0LCBwcm9wKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcCk7XG4gICAgcmV0dXJuICFkZXNjcmlwdG9yIHx8IChkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSAhPT0gZmFsc2UgJiYgZGVzY3JpcHRvci53cml0YWJsZSAhPT0gZmFsc2UpO1xufVxuZnVuY3Rpb24gYXNzZXJ0UHJvcGVydHlDb25maWd1cmFibGUob2JqZWN0LCBwcm9wKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhaXNQcm9wZXJ0eUNvbmZpZ3VyYWJsZShvYmplY3QsIHByb3ApKVxuICAgICAgICBmYWlsKFwiQ2Fubm90IG1ha2UgcHJvcGVydHkgJ1wiICsgcHJvcC50b1N0cmluZygpICsgXCInIG9ic2VydmFibGUsIGl0IGlzIG5vdCBjb25maWd1cmFibGUgYW5kIHdyaXRhYmxlIGluIHRoZSB0YXJnZXQgb2JqZWN0XCIpO1xufVxuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShuYW1lLCBjbGF6eikge1xuICAgIHZhciBwcm9wTmFtZSA9IFwiaXNNb2JYXCIgKyBuYW1lO1xuICAgIGNsYXp6LnByb3RvdHlwZVtwcm9wTmFtZV0gPSB0cnVlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gaXNPYmplY3QoeCkgJiYgeFtwcm9wTmFtZV0gPT09IHRydWU7XG4gICAgfTtcbn1cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIHRoZSBhcmd1bWVudCBpcyBhbiBhcnJheSwgZGlzcmVnYXJkaW5nIG9ic2VydmFiaWxpdHkuXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHgpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh4KSB8fCBpc09ic2VydmFibGVBcnJheSh4KTtcbn1cbmZ1bmN0aW9uIGlzRVM2TWFwKHRoaW5nKSB7XG4gICAgcmV0dXJuIHRoaW5nIGluc3RhbmNlb2YgTWFwO1xufVxuZnVuY3Rpb24gaXNFUzZTZXQodGhpbmcpIHtcbiAgICByZXR1cm4gdGhpbmcgaW5zdGFuY2VvZiBTZXQ7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZvbGxvd2luZzogb3duIGtleXMsIHByb3RvdHlwZSBrZXlzICYgb3duIHN5bWJvbCBrZXlzLCBpZiB0aGV5IGFyZSBlbnVtZXJhYmxlLlxuICovXG5mdW5jdGlvbiBnZXRQbGFpbk9iamVjdEtleXMob2JqZWN0KSB7XG4gICAgdmFyIGVudW1lcmFibGVzID0gbmV3IFNldCgpO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpXG4gICAgICAgIGVudW1lcmFibGVzLmFkZChrZXkpOyAvLyAqYWxsKiBlbnVtZXJhYmxlc1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgaykuZW51bWVyYWJsZSlcbiAgICAgICAgICAgIGVudW1lcmFibGVzLmFkZChrKTtcbiAgICB9KTsgLy8gKm93biogc3ltYm9sc1xuICAgIC8vIE5vdGU6IHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbWlzc2luZyBlbnVtZXJhYmxlLCBpbmhlcml0ZWQsIHN5bWJvbGljIHByb3BlcnR5IG5hbWVzISBUaGF0IHdvdWxkIGhvd2V2ZXIgcHJldHR5IGV4cGVuc2l2ZSB0byBhZGQsXG4gICAgLy8gYXMgdGhlcmUgaXMgbm8gZWZmaWNpZW50IGl0ZXJhdG9yIHRoYXQgcmV0dXJucyAqYWxsKiBwcm9wZXJ0aWVzXG4gICAgcmV0dXJuIEFycmF5LmZyb20oZW51bWVyYWJsZXMpO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5S2V5KGtleSkge1xuICAgIGlmIChrZXkgJiYga2V5LnRvU3RyaW5nKVxuICAgICAgICByZXR1cm4ga2V5LnRvU3RyaW5nKCk7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gbmV3IFN0cmluZyhrZXkpLnRvU3RyaW5nKCk7XG59XG5mdW5jdGlvbiBnZXRNYXBMaWtlS2V5cyhtYXApIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChtYXApKVxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShtYXApKVxuICAgICAgICByZXR1cm4gbWFwLm1hcChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBfYiA9IF9fcmVhZChfYSwgMSksIGtleSA9IF9iWzBdO1xuICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgfSk7XG4gICAgaWYgKGlzRVM2TWFwKG1hcCkgfHwgaXNPYnNlcnZhYmxlTWFwKG1hcCkpXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG1hcC5rZXlzKCkpO1xuICAgIHJldHVybiBmYWlsKFwiQ2Fubm90IGdldCBrZXlzIGZyb20gJ1wiICsgbWFwICsgXCInXCIpO1xufVxuZnVuY3Rpb24gdG9QcmltaXRpdmUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgPyBudWxsIDogdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiID8gXCJcIiArIHZhbHVlIDogdmFsdWU7XG59XG5cbnZhciAkbW9ieCA9IFN5bWJvbChcIm1vYnggYWRtaW5pc3RyYXRpb25cIik7XG52YXIgQXRvbSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYXRvbS4gRm9yIGRlYnVnZ2luZyBwdXJwb3NlcyBpdCBpcyByZWNvbW1lbmRlZCB0byBnaXZlIGl0IGEgbmFtZS5cbiAgICAgKiBUaGUgb25CZWNvbWVPYnNlcnZlZCBhbmQgb25CZWNvbWVVbm9ic2VydmVkIGNhbGxiYWNrcyBjYW4gYmUgdXNlZCBmb3IgcmVzb3VyY2UgbWFuYWdlbWVudC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBBdG9tKG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJBdG9tQFwiICsgZ2V0TmV4dElkKCk7IH1cbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pc1BlbmRpbmdVbm9ic2VydmF0aW9uID0gZmFsc2U7IC8vIGZvciBlZmZlY3RpdmUgdW5vYnNlcnZpbmcuIEJhc2VBdG9tIGhhcyB0cnVlLCBmb3IgZXh0cmEgb3B0aW1pemF0aW9uLCBzbyBpdHMgb25CZWNvbWVVbm9ic2VydmVkIG5ldmVyIGdldHMgY2FsbGVkLCBiZWNhdXNlIGl0J3Mgbm90IG5lZWRlZFxuICAgICAgICB0aGlzLmlzQmVpbmdPYnNlcnZlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9ic2VydmVycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5kaWZmVmFsdWUgPSAwO1xuICAgICAgICB0aGlzLmxhc3RBY2Nlc3NlZEJ5ID0gMDtcbiAgICAgICAgdGhpcy5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc7XG4gICAgfVxuICAgIEF0b20ucHJvdG90eXBlLm9uQmVjb21lT2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9uQmVjb21lT2JzZXJ2ZWRMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHRoaXMub25CZWNvbWVPYnNlcnZlZExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIoKTsgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEF0b20ucHJvdG90eXBlLm9uQmVjb21lVW5vYnNlcnZlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub25CZWNvbWVVbm9ic2VydmVkTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICB0aGlzLm9uQmVjb21lVW5vYnNlcnZlZExpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikgeyByZXR1cm4gbGlzdGVuZXIoKTsgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEludm9rZSB0aGlzIG1ldGhvZCB0byBub3RpZnkgbW9ieCB0aGF0IHlvdXIgYXRvbSBoYXMgYmVlbiB1c2VkIHNvbWVob3cuXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZXJlIGlzIGN1cnJlbnRseSBhIHJlYWN0aXZlIGNvbnRleHQuXG4gICAgICovXG4gICAgQXRvbS5wcm90b3R5cGUucmVwb3J0T2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXBvcnRPYnNlcnZlZCh0aGlzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEludm9rZSB0aGlzIG1ldGhvZCBfYWZ0ZXJfIHRoaXMgbWV0aG9kIGhhcyBjaGFuZ2VkIHRvIHNpZ25hbCBtb2J4IHRoYXQgYWxsIGl0cyBvYnNlcnZlcnMgc2hvdWxkIGludmFsaWRhdGUuXG4gICAgICovXG4gICAgQXRvbS5wcm90b3R5cGUucmVwb3J0Q2hhbmdlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3RhcnRCYXRjaCgpO1xuICAgICAgICBwcm9wYWdhdGVDaGFuZ2VkKHRoaXMpO1xuICAgICAgICBlbmRCYXRjaCgpO1xuICAgIH07XG4gICAgQXRvbS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfTtcbiAgICByZXR1cm4gQXRvbTtcbn0oKSk7XG52YXIgaXNBdG9tID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIkF0b21cIiwgQXRvbSk7XG5mdW5jdGlvbiBjcmVhdGVBdG9tKG5hbWUsIG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyLCBvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyKSB7XG4gICAgaWYgKG9uQmVjb21lT2JzZXJ2ZWRIYW5kbGVyID09PSB2b2lkIDApIHsgb25CZWNvbWVPYnNlcnZlZEhhbmRsZXIgPSBub29wOyB9XG4gICAgaWYgKG9uQmVjb21lVW5vYnNlcnZlZEhhbmRsZXIgPT09IHZvaWQgMCkgeyBvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyID0gbm9vcDsgfVxuICAgIHZhciBhdG9tID0gbmV3IEF0b20obmFtZSk7XG4gICAgLy8gZGVmYXVsdCBgbm9vcGAgbGlzdGVuZXIgd2lsbCBub3QgaW5pdGlhbGl6ZSB0aGUgaG9vayBTZXRcbiAgICBpZiAob25CZWNvbWVPYnNlcnZlZEhhbmRsZXIgIT09IG5vb3ApIHtcbiAgICAgICAgb25CZWNvbWVPYnNlcnZlZChhdG9tLCBvbkJlY29tZU9ic2VydmVkSGFuZGxlcik7XG4gICAgfVxuICAgIGlmIChvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyICE9PSBub29wKSB7XG4gICAgICAgIG9uQmVjb21lVW5vYnNlcnZlZChhdG9tLCBvbkJlY29tZVVub2JzZXJ2ZWRIYW5kbGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0b207XG59XG5cbmZ1bmN0aW9uIGlkZW50aXR5Q29tcGFyZXIoYSwgYikge1xuICAgIHJldHVybiBhID09PSBiO1xufVxuZnVuY3Rpb24gc3RydWN0dXJhbENvbXBhcmVyKGEsIGIpIHtcbiAgICByZXR1cm4gZGVlcEVxdWFsKGEsIGIpO1xufVxuZnVuY3Rpb24gc2hhbGxvd0NvbXBhcmVyKGEsIGIpIHtcbiAgICByZXR1cm4gZGVlcEVxdWFsKGEsIGIsIDEpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENvbXBhcmVyKGEsIGIpIHtcbiAgICByZXR1cm4gT2JqZWN0LmlzKGEsIGIpO1xufVxudmFyIGNvbXBhcmVyID0ge1xuICAgIGlkZW50aXR5OiBpZGVudGl0eUNvbXBhcmVyLFxuICAgIHN0cnVjdHVyYWw6IHN0cnVjdHVyYWxDb21wYXJlcixcbiAgICBkZWZhdWx0OiBkZWZhdWx0Q29tcGFyZXIsXG4gICAgc2hhbGxvdzogc2hhbGxvd0NvbXBhcmVyXG59O1xuXG52YXIgbW9ieERpZFJ1bkxhenlJbml0aWFsaXplcnNTeW1ib2wgPSBTeW1ib2woXCJtb2J4IGRpZCBydW4gbGF6eSBpbml0aWFsaXplcnNcIik7XG52YXIgbW9ieFBlbmRpbmdEZWNvcmF0b3JzID0gU3ltYm9sKFwibW9ieCBwZW5kaW5nIGRlY29yYXRvcnNcIik7XG52YXIgZW51bWVyYWJsZURlc2NyaXB0b3JDYWNoZSA9IHt9O1xudmFyIG5vbkVudW1lcmFibGVEZXNjcmlwdG9yQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGNyZWF0ZVByb3BlcnR5SW5pdGlhbGl6ZXJEZXNjcmlwdG9yKHByb3AsIGVudW1lcmFibGUpIHtcbiAgICB2YXIgY2FjaGUgPSBlbnVtZXJhYmxlID8gZW51bWVyYWJsZURlc2NyaXB0b3JDYWNoZSA6IG5vbkVudW1lcmFibGVEZXNjcmlwdG9yQ2FjaGU7XG4gICAgcmV0dXJuIChjYWNoZVtwcm9wXSB8fFxuICAgICAgICAoY2FjaGVbcHJvcF0gPSB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBlbnVtZXJhYmxlLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZUluc3RhbmNlKHRoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW3Byb3BdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZUluc3RhbmNlKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXNbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xufVxuZnVuY3Rpb24gaW5pdGlhbGl6ZUluc3RhbmNlKHRhcmdldCkge1xuICAgIHZhciBlXzEsIF9hO1xuICAgIGlmICh0YXJnZXRbbW9ieERpZFJ1bkxhenlJbml0aWFsaXplcnNTeW1ib2xdID09PSB0cnVlKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIGRlY29yYXRvcnMgPSB0YXJnZXRbbW9ieFBlbmRpbmdEZWNvcmF0b3JzXTtcbiAgICBpZiAoZGVjb3JhdG9ycykge1xuICAgICAgICBhZGRIaWRkZW5Qcm9wKHRhcmdldCwgbW9ieERpZFJ1bkxhenlJbml0aWFsaXplcnNTeW1ib2wsIHRydWUpO1xuICAgICAgICAvLyBCdWlsZCBwcm9wZXJ0eSBrZXkgYXJyYXkgZnJvbSBib3RoIHN0cmluZ3MgYW5kIHN5bWJvbHNcbiAgICAgICAgdmFyIGtleXMgPSBfX3NwcmVhZChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGRlY29yYXRvcnMpLCBPYmplY3Qua2V5cyhkZWNvcmF0b3JzKSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXlzXzEgPSBfX3ZhbHVlcyhrZXlzKSwga2V5c18xXzEgPSBrZXlzXzEubmV4dCgpOyAha2V5c18xXzEuZG9uZTsga2V5c18xXzEgPSBrZXlzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgIHZhciBkID0gZGVjb3JhdG9yc1trZXldO1xuICAgICAgICAgICAgICAgIGQucHJvcGVydHlDcmVhdG9yKHRhcmdldCwgZC5wcm9wLCBkLmRlc2NyaXB0b3IsIGQuZGVjb3JhdG9yVGFyZ2V0LCBkLmRlY29yYXRvckFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzXzFfMSAmJiAha2V5c18xXzEuZG9uZSAmJiAoX2EgPSBrZXlzXzEucmV0dXJuKSkgX2EuY2FsbChrZXlzXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlUHJvcERlY29yYXRvcihwcm9wZXJ0eUluaXRpYWxseUVudW1lcmFibGUsIHByb3BlcnR5Q3JlYXRvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiBkZWNvcmF0b3JGYWN0b3J5KCkge1xuICAgICAgICB2YXIgZGVjb3JhdG9yQXJndW1lbnRzO1xuICAgICAgICB2YXIgZGVjb3JhdG9yID0gZnVuY3Rpb24gZGVjb3JhdGUodGFyZ2V0LCBwcm9wLCBkZXNjcmlwdG9yLCBhcHBseUltbWVkaWF0ZWx5XG4gICAgICAgIC8vIFRoaXMgaXMgYSBzcGVjaWFsIHBhcmFtZXRlciB0byBzaWduYWwgdGhlIGRpcmVjdCBhcHBsaWNhdGlvbiBvZiBhIGRlY29yYXRvciwgYWxsb3cgZXh0ZW5kT2JzZXJ2YWJsZSB0byBza2lwIHRoZSBlbnRpcmUgdHlwZSBkZWNvcmF0aW9uIHBhcnQsXG4gICAgICAgIC8vIGFzIHRoZSBpbnN0YW5jZSB0byBhcHBseSB0aGUgZGVjb3JhdG9yIHRvIGVxdWFscyB0aGUgdGFyZ2V0XG4gICAgICAgICkge1xuICAgICAgICAgICAgaWYgKGFwcGx5SW1tZWRpYXRlbHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUNyZWF0b3IodGFyZ2V0LCBwcm9wLCBkZXNjcmlwdG9yLCB0YXJnZXQsIGRlY29yYXRvckFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICFxdWFja3NMaWtlQURlY29yYXRvcihhcmd1bWVudHMpKVxuICAgICAgICAgICAgICAgIGZhaWwoXCJUaGlzIGZ1bmN0aW9uIGlzIGEgZGVjb3JhdG9yLCBidXQgaXQgd2Fzbid0IGludm9rZWQgbGlrZSBhIGRlY29yYXRvclwiKTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgbW9ieFBlbmRpbmdEZWNvcmF0b3JzKSkge1xuICAgICAgICAgICAgICAgIHZhciBpbmhlcml0ZWREZWNvcmF0b3JzID0gdGFyZ2V0W21vYnhQZW5kaW5nRGVjb3JhdG9yc107XG4gICAgICAgICAgICAgICAgYWRkSGlkZGVuUHJvcCh0YXJnZXQsIG1vYnhQZW5kaW5nRGVjb3JhdG9ycywgX19hc3NpZ24oe30sIGluaGVyaXRlZERlY29yYXRvcnMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldFttb2J4UGVuZGluZ0RlY29yYXRvcnNdW3Byb3BdID0ge1xuICAgICAgICAgICAgICAgIHByb3A6IHByb3AsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlDcmVhdG9yOiBwcm9wZXJ0eUNyZWF0b3IsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRvcjogZGVzY3JpcHRvcixcbiAgICAgICAgICAgICAgICBkZWNvcmF0b3JUYXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBkZWNvcmF0b3JBcmd1bWVudHM6IGRlY29yYXRvckFyZ3VtZW50c1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVQcm9wZXJ0eUluaXRpYWxpemVyRGVzY3JpcHRvcihwcm9wLCBwcm9wZXJ0eUluaXRpYWxseUVudW1lcmFibGUpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAocXVhY2tzTGlrZUFEZWNvcmF0b3IoYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgLy8gQGRlY29yYXRvclxuICAgICAgICAgICAgZGVjb3JhdG9yQXJndW1lbnRzID0gRU1QVFlfQVJSQVk7XG4gICAgICAgICAgICByZXR1cm4gZGVjb3JhdG9yLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBAZGVjb3JhdG9yKGFyZ3MpXG4gICAgICAgICAgICBkZWNvcmF0b3JBcmd1bWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIGRlY29yYXRvcjtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBxdWFja3NMaWtlQURlY29yYXRvcihhcmdzKSB7XG4gICAgcmV0dXJuICgoKGFyZ3MubGVuZ3RoID09PSAyIHx8IGFyZ3MubGVuZ3RoID09PSAzKSAmJlxuICAgICAgICAodHlwZW9mIGFyZ3NbMV0gPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGFyZ3NbMV0gPT09IFwic3ltYm9sXCIpKSB8fFxuICAgICAgICAoYXJncy5sZW5ndGggPT09IDQgJiYgYXJnc1szXSA9PT0gdHJ1ZSkpO1xufVxuXG5mdW5jdGlvbiBkZWVwRW5oYW5jZXIodiwgXywgbmFtZSkge1xuICAgIC8vIGl0IGlzIGFuIG9ic2VydmFibGUgYWxyZWFkeSwgZG9uZVxuICAgIGlmIChpc09ic2VydmFibGUodikpXG4gICAgICAgIHJldHVybiB2O1xuICAgIC8vIHNvbWV0aGluZyB0aGF0IGNhbiBiZSBjb252ZXJ0ZWQgYW5kIG11dGF0ZWQ/XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodikpXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLmFycmF5KHYsIHsgbmFtZTogbmFtZSB9KTtcbiAgICBpZiAoaXNQbGFpbk9iamVjdCh2KSlcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUub2JqZWN0KHYsIHVuZGVmaW5lZCwgeyBuYW1lOiBuYW1lIH0pO1xuICAgIGlmIChpc0VTNk1hcCh2KSlcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUubWFwKHYsIHsgbmFtZTogbmFtZSB9KTtcbiAgICBpZiAoaXNFUzZTZXQodikpXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLnNldCh2LCB7IG5hbWU6IG5hbWUgfSk7XG4gICAgcmV0dXJuIHY7XG59XG5mdW5jdGlvbiBzaGFsbG93RW5oYW5jZXIodiwgXywgbmFtZSkge1xuICAgIGlmICh2ID09PSB1bmRlZmluZWQgfHwgdiA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh2KSB8fCBpc09ic2VydmFibGVBcnJheSh2KSB8fCBpc09ic2VydmFibGVNYXAodikgfHwgaXNPYnNlcnZhYmxlU2V0KHYpKVxuICAgICAgICByZXR1cm4gdjtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2KSlcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuYXJyYXkodiwgeyBuYW1lOiBuYW1lLCBkZWVwOiBmYWxzZSB9KTtcbiAgICBpZiAoaXNQbGFpbk9iamVjdCh2KSlcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUub2JqZWN0KHYsIHVuZGVmaW5lZCwgeyBuYW1lOiBuYW1lLCBkZWVwOiBmYWxzZSB9KTtcbiAgICBpZiAoaXNFUzZNYXAodikpXG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlLm1hcCh2LCB7IG5hbWU6IG5hbWUsIGRlZXA6IGZhbHNlIH0pO1xuICAgIGlmIChpc0VTNlNldCh2KSlcbiAgICAgICAgcmV0dXJuIG9ic2VydmFibGUuc2V0KHYsIHsgbmFtZTogbmFtZSwgZGVlcDogZmFsc2UgfSk7XG4gICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIFwiVGhlIHNoYWxsb3cgbW9kaWZpZXIgLyBkZWNvcmF0b3IgY2FuIG9ubHkgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIGFycmF5cywgb2JqZWN0cywgbWFwcyBhbmQgc2V0c1wiKTtcbn1cbmZ1bmN0aW9uIHJlZmVyZW5jZUVuaGFuY2VyKG5ld1ZhbHVlKSB7XG4gICAgLy8gbmV2ZXIgdHVybiBpbnRvIGFuIG9ic2VydmFibGVcbiAgICByZXR1cm4gbmV3VmFsdWU7XG59XG5mdW5jdGlvbiByZWZTdHJ1Y3RFbmhhbmNlcih2LCBvbGRWYWx1ZSwgbmFtZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgaXNPYnNlcnZhYmxlKHYpKVxuICAgICAgICB0aHJvdyBcIm9ic2VydmFibGUuc3RydWN0IHNob3VsZCBub3QgYmUgdXNlZCB3aXRoIG9ic2VydmFibGUgdmFsdWVzXCI7XG4gICAgaWYgKGRlZXBFcXVhbCh2LCBvbGRWYWx1ZSkpXG4gICAgICAgIHJldHVybiBvbGRWYWx1ZTtcbiAgICByZXR1cm4gdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIoZW5oYW5jZXIpIHtcbiAgICBpbnZhcmlhbnQoZW5oYW5jZXIpO1xuICAgIHZhciBkZWNvcmF0b3IgPSBjcmVhdGVQcm9wRGVjb3JhdG9yKHRydWUsIGZ1bmN0aW9uICh0YXJnZXQsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvciwgX2RlY29yYXRvclRhcmdldCwgZGVjb3JhdG9yQXJncykge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBpbnZhcmlhbnQoIWRlc2NyaXB0b3IgfHwgIWRlc2NyaXB0b3IuZ2V0LCBcIkBvYnNlcnZhYmxlIGNhbm5vdCBiZSB1c2VkIG9uIGdldHRlciAocHJvcGVydHkgXFxcIlwiICsgc3RyaW5naWZ5S2V5KHByb3BlcnR5TmFtZSkgKyBcIlxcXCIpLCB1c2UgQGNvbXB1dGVkIGluc3RlYWQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbml0aWFsVmFsdWUgPSBkZXNjcmlwdG9yXG4gICAgICAgICAgICA/IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXJcbiAgICAgICAgICAgICAgICA/IGRlc2NyaXB0b3IuaW5pdGlhbGl6ZXIuY2FsbCh0YXJnZXQpXG4gICAgICAgICAgICAgICAgOiBkZXNjcmlwdG9yLnZhbHVlXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICAgICAgYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCkuYWRkT2JzZXJ2YWJsZVByb3AocHJvcGVydHlOYW1lLCBpbml0aWFsVmFsdWUsIGVuaGFuY2VyKTtcbiAgICB9KTtcbiAgICB2YXIgcmVzID0gXG4gICAgLy8gRXh0cmEgcHJvY2VzcyBjaGVja3MsIGFzIHRoaXMgaGFwcGVucyBkdXJpbmcgbW9kdWxlIGluaXRpYWxpemF0aW9uXG4gICAgdHlwZW9mIHByb2Nlc3MgIT09IFwidW5kZWZpbmVkXCIgJiYgcHJvY2Vzcy5lbnYgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiXG4gICAgICAgID8gZnVuY3Rpb24gb2JzZXJ2YWJsZURlY29yYXRvcigpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgd3JhcHBlciBmdW5jdGlvbiBpcyBqdXN0IHRvIGRldGVjdCBpbGxlZ2FsIGRlY29yYXRvciBpbnZvY2F0aW9ucywgZGVwcmVjYXRlIGluIGEgbmV4dCB2ZXJzaW9uXG4gICAgICAgICAgICAvLyBhbmQgc2ltcGx5IHJldHVybiB0aGUgY3JlYXRlZCBwcm9wIGRlY29yYXRvclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKFwiSW5jb3JyZWN0IGRlY29yYXRvciBpbnZvY2F0aW9uLiBAb2JzZXJ2YWJsZSBkZWNvcmF0b3IgZG9lc24ndCBleHBlY3QgYW55IGFyZ3VtZW50c1wiKTtcbiAgICAgICAgICAgIHJldHVybiBkZWNvcmF0b3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICA6IGRlY29yYXRvcjtcbiAgICByZXMuZW5oYW5jZXIgPSBlbmhhbmNlcjtcbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBQcmVkZWZpbmVkIGJhZ3Mgb2YgY3JlYXRlIG9ic2VydmFibGUgb3B0aW9ucywgdG8gYXZvaWQgYWxsb2NhdGluZyB0ZW1wb3JhcmlseSBvcHRpb24gb2JqZWN0c1xuLy8gaW4gdGhlIG1ham9yaXR5IG9mIGNhc2VzXG52YXIgZGVmYXVsdENyZWF0ZU9ic2VydmFibGVPcHRpb25zID0ge1xuICAgIGRlZXA6IHRydWUsXG4gICAgbmFtZTogdW5kZWZpbmVkLFxuICAgIGRlZmF1bHREZWNvcmF0b3I6IHVuZGVmaW5lZCxcbiAgICBwcm94eTogdHJ1ZVxufTtcbk9iamVjdC5mcmVlemUoZGVmYXVsdENyZWF0ZU9ic2VydmFibGVPcHRpb25zKTtcbmZ1bmN0aW9uIGFzc2VydFZhbGlkT3B0aW9uKGtleSkge1xuICAgIGlmICghL14oZGVlcHxuYW1lfGVxdWFsc3xkZWZhdWx0RGVjb3JhdG9yfHByb3h5KSQvLnRlc3Qoa2V5KSlcbiAgICAgICAgZmFpbChcImludmFsaWQgb3B0aW9uIGZvciAoZXh0ZW5kKW9ic2VydmFibGU6IFwiICsga2V5KTtcbn1cbmZ1bmN0aW9uIGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnModGhpbmcpIHtcbiAgICBpZiAodGhpbmcgPT09IG51bGwgfHwgdGhpbmcgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucztcbiAgICBpZiAodHlwZW9mIHRoaW5nID09PSBcInN0cmluZ1wiKVxuICAgICAgICByZXR1cm4geyBuYW1lOiB0aGluZywgZGVlcDogdHJ1ZSwgcHJveHk6IHRydWUgfTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpbmcgIT09IFwib2JqZWN0XCIpXG4gICAgICAgICAgICByZXR1cm4gZmFpbChcImV4cGVjdGVkIG9wdGlvbnMgb2JqZWN0XCIpO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGluZykuZm9yRWFjaChhc3NlcnRWYWxpZE9wdGlvbik7XG4gICAgfVxuICAgIHJldHVybiB0aGluZztcbn1cbnZhciBkZWVwRGVjb3JhdG9yID0gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIoZGVlcEVuaGFuY2VyKTtcbnZhciBzaGFsbG93RGVjb3JhdG9yID0gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIoc2hhbGxvd0VuaGFuY2VyKTtcbnZhciByZWZEZWNvcmF0b3IgPSBjcmVhdGVEZWNvcmF0b3JGb3JFbmhhbmNlcihyZWZlcmVuY2VFbmhhbmNlcik7XG52YXIgcmVmU3RydWN0RGVjb3JhdG9yID0gY3JlYXRlRGVjb3JhdG9yRm9yRW5oYW5jZXIocmVmU3RydWN0RW5oYW5jZXIpO1xuZnVuY3Rpb24gZ2V0RW5oYW5jZXJGcm9tT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuZGVmYXVsdERlY29yYXRvclxuICAgICAgICA/IG9wdGlvbnMuZGVmYXVsdERlY29yYXRvci5lbmhhbmNlclxuICAgICAgICA6IG9wdGlvbnMuZGVlcCA9PT0gZmFsc2VcbiAgICAgICAgICAgID8gcmVmZXJlbmNlRW5oYW5jZXJcbiAgICAgICAgICAgIDogZGVlcEVuaGFuY2VyO1xufVxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3QsIGFycmF5IG9yIGZ1bmN0aW9uIGludG8gYSByZWFjdGl2ZSBzdHJ1Y3R1cmUuXG4gKiBAcGFyYW0gdiB0aGUgdmFsdWUgd2hpY2ggc2hvdWxkIGJlY29tZSBvYnNlcnZhYmxlLlxuICovXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZhYmxlKHYsIGFyZzIsIGFyZzMpIHtcbiAgICAvLyBAb2JzZXJ2YWJsZSBzb21lUHJvcDtcbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1sxXSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgYXJndW1lbnRzWzFdID09PSBcInN5bWJvbFwiKSB7XG4gICAgICAgIHJldHVybiBkZWVwRGVjb3JhdG9yLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuICAgIC8vIGl0IGlzIGFuIG9ic2VydmFibGUgYWxyZWFkeSwgZG9uZVxuICAgIGlmIChpc09ic2VydmFibGUodikpXG4gICAgICAgIHJldHVybiB2O1xuICAgIC8vIHNvbWV0aGluZyB0aGF0IGNhbiBiZSBjb252ZXJ0ZWQgYW5kIG11dGF0ZWQ/XG4gICAgdmFyIHJlcyA9IGlzUGxhaW5PYmplY3QodilcbiAgICAgICAgPyBvYnNlcnZhYmxlLm9iamVjdCh2LCBhcmcyLCBhcmczKVxuICAgICAgICA6IEFycmF5LmlzQXJyYXkodilcbiAgICAgICAgICAgID8gb2JzZXJ2YWJsZS5hcnJheSh2LCBhcmcyKVxuICAgICAgICAgICAgOiBpc0VTNk1hcCh2KVxuICAgICAgICAgICAgICAgID8gb2JzZXJ2YWJsZS5tYXAodiwgYXJnMilcbiAgICAgICAgICAgICAgICA6IGlzRVM2U2V0KHYpXG4gICAgICAgICAgICAgICAgICAgID8gb2JzZXJ2YWJsZS5zZXQodiwgYXJnMilcbiAgICAgICAgICAgICAgICAgICAgOiB2O1xuICAgIC8vIHRoaXMgdmFsdWUgY291bGQgYmUgY29udmVydGVkIHRvIGEgbmV3IG9ic2VydmFibGUgZGF0YSBzdHJ1Y3R1cmUsIHJldHVybiBpdFxuICAgIGlmIChyZXMgIT09IHYpXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgLy8gb3RoZXJ3aXNlLCBqdXN0IGJveCBpdFxuICAgIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIFwiVGhlIHByb3ZpZGVkIHZhbHVlIGNvdWxkIG5vdCBiZSBjb252ZXJ0ZWQgaW50byBhbiBvYnNlcnZhYmxlLiBJZiB5b3Ugd2FudCBqdXN0IGNyZWF0ZSBhbiBvYnNlcnZhYmxlIHJlZmVyZW5jZSB0byB0aGUgb2JqZWN0IHVzZSAnb2JzZXJ2YWJsZS5ib3godmFsdWUpJ1wiKTtcbn1cbnZhciBvYnNlcnZhYmxlRmFjdG9yaWVzID0ge1xuICAgIGJveDogZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwiYm94XCIpO1xuICAgICAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVZhbHVlKHZhbHVlLCBnZXRFbmhhbmNlckZyb21PcHRpb25zKG8pLCBvLm5hbWUsIHRydWUsIG8uZXF1YWxzKTtcbiAgICB9LFxuICAgIGFycmF5OiBmdW5jdGlvbiAoaW5pdGlhbFZhbHVlcywgb3B0aW9ucykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpXG4gICAgICAgICAgICBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihcImFycmF5XCIpO1xuICAgICAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBjcmVhdGVPYnNlcnZhYmxlQXJyYXkoaW5pdGlhbFZhbHVlcywgZ2V0RW5oYW5jZXJGcm9tT3B0aW9ucyhvKSwgby5uYW1lKTtcbiAgICB9LFxuICAgIG1hcDogZnVuY3Rpb24gKGluaXRpYWxWYWx1ZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKVxuICAgICAgICAgICAgaW5jb3JyZWN0bHlVc2VkQXNEZWNvcmF0b3IoXCJtYXBcIik7XG4gICAgICAgIHZhciBvID0gYXNDcmVhdGVPYnNlcnZhYmxlT3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlTWFwKGluaXRpYWxWYWx1ZXMsIGdldEVuaGFuY2VyRnJvbU9wdGlvbnMobyksIG8ubmFtZSk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIChpbml0aWFsVmFsdWVzLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMilcbiAgICAgICAgICAgIGluY29ycmVjdGx5VXNlZEFzRGVjb3JhdG9yKFwic2V0XCIpO1xuICAgICAgICB2YXIgbyA9IGFzQ3JlYXRlT2JzZXJ2YWJsZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZVNldChpbml0aWFsVmFsdWVzLCBnZXRFbmhhbmNlckZyb21PcHRpb25zKG8pLCBvLm5hbWUpO1xuICAgIH0sXG4gICAgb2JqZWN0OiBmdW5jdGlvbiAocHJvcHMsIGRlY29yYXRvcnMsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMV0gPT09IFwic3RyaW5nXCIpXG4gICAgICAgICAgICBpbmNvcnJlY3RseVVzZWRBc0RlY29yYXRvcihcIm9iamVjdFwiKTtcbiAgICAgICAgdmFyIG8gPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBpZiAoby5wcm94eSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBleHRlbmRPYnNlcnZhYmxlKHt9LCBwcm9wcywgZGVjb3JhdG9ycywgbyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdERlY29yYXRvciA9IGdldERlZmF1bHREZWNvcmF0b3JGcm9tT2JqZWN0T3B0aW9ucyhvKTtcbiAgICAgICAgICAgIHZhciBiYXNlID0gZXh0ZW5kT2JzZXJ2YWJsZSh7fSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIG8pO1xuICAgICAgICAgICAgdmFyIHByb3h5ID0gY3JlYXRlRHluYW1pY09ic2VydmFibGVPYmplY3QoYmFzZSk7XG4gICAgICAgICAgICBleHRlbmRPYnNlcnZhYmxlT2JqZWN0V2l0aFByb3BlcnRpZXMocHJveHksIHByb3BzLCBkZWNvcmF0b3JzLCBkZWZhdWx0RGVjb3JhdG9yKTtcbiAgICAgICAgICAgIHJldHVybiBwcm94eTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVmOiByZWZEZWNvcmF0b3IsXG4gICAgc2hhbGxvdzogc2hhbGxvd0RlY29yYXRvcixcbiAgICBkZWVwOiBkZWVwRGVjb3JhdG9yLFxuICAgIHN0cnVjdDogcmVmU3RydWN0RGVjb3JhdG9yXG59O1xudmFyIG9ic2VydmFibGUgPSBjcmVhdGVPYnNlcnZhYmxlO1xuLy8gd2VpcmQgdHJpY2sgdG8ga2VlcCBvdXIgdHlwaW5ncyBuaWNlbHkgd2l0aCBvdXIgZnVuY3MsIGFuZCBzdGlsbCBleHRlbmQgdGhlIG9ic2VydmFibGUgZnVuY3Rpb25cbk9iamVjdC5rZXlzKG9ic2VydmFibGVGYWN0b3JpZXMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIChvYnNlcnZhYmxlW25hbWVdID0gb2JzZXJ2YWJsZUZhY3Rvcmllc1tuYW1lXSk7IH0pO1xuZnVuY3Rpb24gaW5jb3JyZWN0bHlVc2VkQXNEZWNvcmF0b3IobWV0aG9kTmFtZSkge1xuICAgIGZhaWwoXG4gICAgLy8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgXCJFeHBlY3RlZCBvbmUgb3IgdHdvIGFyZ3VtZW50cyB0byBvYnNlcnZhYmxlLlwiICsgbWV0aG9kTmFtZSArIFwiLiBEaWQgeW91IGFjY2lkZW50YWxseSB0cnkgdG8gdXNlIG9ic2VydmFibGUuXCIgKyBtZXRob2ROYW1lICsgXCIgYXMgZGVjb3JhdG9yP1wiKTtcbn1cblxudmFyIGNvbXB1dGVkRGVjb3JhdG9yID0gY3JlYXRlUHJvcERlY29yYXRvcihmYWxzZSwgZnVuY3Rpb24gKGluc3RhbmNlLCBwcm9wZXJ0eU5hbWUsIGRlc2NyaXB0b3IsIGRlY29yYXRvclRhcmdldCwgZGVjb3JhdG9yQXJncykge1xuICAgIHZhciBnZXQgPSBkZXNjcmlwdG9yLmdldCwgc2V0ID0gZGVzY3JpcHRvci5zZXQ7IC8vIGluaXRpYWxWYWx1ZSBpcyB0aGUgZGVzY3JpcHRvciBmb3IgZ2V0IC8gc2V0IHByb3BzXG4gICAgLy8gT3B0aW1pemF0aW9uOiBmYXN0ZXIgb24gZGVjb3JhdG9yIHRhcmdldCBvciBpbnN0YW5jZT8gQXNzdW1pbmcgdGFyZ2V0XG4gICAgLy8gT3B0aW1pemF0aW9uOiBmaW5kIG91dCBpZiBkZWNsYXJpbmcgb24gaW5zdGFuY2UgaXNuJ3QganVzdCBmYXN0ZXIuIChhbHNvIG1ha2VzIHRoZSBwcm9wZXJ0eSBkZXNjcmlwdG9yIHNpbXBsZXIpLiBCdXQsIG1vcmUgbWVtb3J5IHVzYWdlLi5cbiAgICAvLyBGb3JjaW5nIGluc3RhbmNlIG5vdywgZml4ZXMgaG90IHJlbG9hZGlnIGlzc3VlcyBvbiBSZWFjdCBOYXRpdmU6XG4gICAgdmFyIG9wdGlvbnMgPSBkZWNvcmF0b3JBcmdzWzBdIHx8IHt9O1xuICAgIGFzT2JzZXJ2YWJsZU9iamVjdChpbnN0YW5jZSkuYWRkQ29tcHV0ZWRQcm9wKGluc3RhbmNlLCBwcm9wZXJ0eU5hbWUsIF9fYXNzaWduKHsgZ2V0OiBnZXQsXG4gICAgICAgIHNldDogc2V0LCBjb250ZXh0OiBpbnN0YW5jZSB9LCBvcHRpb25zKSk7XG59KTtcbnZhciBjb21wdXRlZFN0cnVjdERlY29yYXRvciA9IGNvbXB1dGVkRGVjb3JhdG9yKHsgZXF1YWxzOiBjb21wYXJlci5zdHJ1Y3R1cmFsIH0pO1xuLyoqXG4gKiBEZWNvcmF0b3IgZm9yIGNsYXNzIHByb3BlcnRpZXM6IEBjb21wdXRlZCBnZXQgdmFsdWUoKSB7IHJldHVybiBleHByOyB9LlxuICogRm9yIGxlZ2FjeSBwdXJwb3NlcyBhbHNvIGludm9rYWJsZSBhcyBFUzUgb2JzZXJ2YWJsZSBjcmVhdGVkOiBgY29tcHV0ZWQoKCkgPT4gZXhwcilgO1xuICovXG52YXIgY29tcHV0ZWQgPSBmdW5jdGlvbiBjb21wdXRlZChhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcyID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIC8vIEBjb21wdXRlZFxuICAgICAgICByZXR1cm4gY29tcHV0ZWREZWNvcmF0b3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgaWYgKGFyZzEgIT09IG51bGwgJiYgdHlwZW9mIGFyZzEgPT09IFwib2JqZWN0XCIgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAvLyBAY29tcHV0ZWQoeyBvcHRpb25zIH0pXG4gICAgICAgIHJldHVybiBjb21wdXRlZERlY29yYXRvci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICAvLyBjb21wdXRlZChleHByLCBvcHRpb25zPylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgYXJnMSA9PT0gXCJmdW5jdGlvblwiLCBcIkZpcnN0IGFyZ3VtZW50IHRvIGBjb21wdXRlZGAgc2hvdWxkIGJlIGFuIGV4cHJlc3Npb24uXCIpO1xuICAgICAgICBpbnZhcmlhbnQoYXJndW1lbnRzLmxlbmd0aCA8IDMsIFwiQ29tcHV0ZWQgdGFrZXMgb25lIG9yIHR3byBhcmd1bWVudHMgaWYgdXNlZCBhcyBmdW5jdGlvblwiKTtcbiAgICB9XG4gICAgdmFyIG9wdHMgPSB0eXBlb2YgYXJnMiA9PT0gXCJvYmplY3RcIiA/IGFyZzIgOiB7fTtcbiAgICBvcHRzLmdldCA9IGFyZzE7XG4gICAgb3B0cy5zZXQgPSB0eXBlb2YgYXJnMiA9PT0gXCJmdW5jdGlvblwiID8gYXJnMiA6IG9wdHMuc2V0O1xuICAgIG9wdHMubmFtZSA9IG9wdHMubmFtZSB8fCBhcmcxLm5hbWUgfHwgXCJcIjsgLyogZm9yIGdlbmVyYXRlZCBuYW1lICovXG4gICAgcmV0dXJuIG5ldyBDb21wdXRlZFZhbHVlKG9wdHMpO1xufTtcbmNvbXB1dGVkLnN0cnVjdCA9IGNvbXB1dGVkU3RydWN0RGVjb3JhdG9yO1xuXG52YXIgSURlcml2YXRpb25TdGF0ZTtcbihmdW5jdGlvbiAoSURlcml2YXRpb25TdGF0ZSkge1xuICAgIC8vIGJlZm9yZSBiZWluZyBydW4gb3IgKG91dHNpZGUgYmF0Y2ggYW5kIG5vdCBiZWluZyBvYnNlcnZlZClcbiAgICAvLyBhdCB0aGlzIHBvaW50IGRlcml2YXRpb24gaXMgbm90IGhvbGRpbmcgYW55IGRhdGEgYWJvdXQgZGVwZW5kZW5jeSB0cmVlXG4gICAgSURlcml2YXRpb25TdGF0ZVtJRGVyaXZhdGlvblN0YXRlW1wiTk9UX1RSQUNLSU5HXCJdID0gLTFdID0gXCJOT1RfVFJBQ0tJTkdcIjtcbiAgICAvLyBubyBzaGFsbG93IGRlcGVuZGVuY3kgY2hhbmdlZCBzaW5jZSBsYXN0IGNvbXB1dGF0aW9uXG4gICAgLy8gd29uJ3QgcmVjYWxjdWxhdGUgZGVyaXZhdGlvblxuICAgIC8vIHRoaXMgaXMgd2hhdCBtYWtlcyBtb2J4IGZhc3RcbiAgICBJRGVyaXZhdGlvblN0YXRlW0lEZXJpdmF0aW9uU3RhdGVbXCJVUF9UT19EQVRFXCJdID0gMF0gPSBcIlVQX1RPX0RBVEVcIjtcbiAgICAvLyBzb21lIGRlZXAgZGVwZW5kZW5jeSBjaGFuZ2VkLCBidXQgZG9uJ3Qga25vdyBpZiBzaGFsbG93IGRlcGVuZGVuY3kgY2hhbmdlZFxuICAgIC8vIHdpbGwgcmVxdWlyZSB0byBjaGVjayBmaXJzdCBpZiBVUF9UT19EQVRFIG9yIFBPU1NJQkxZX1NUQUxFXG4gICAgLy8gY3VycmVudGx5IG9ubHkgQ29tcHV0ZWRWYWx1ZSB3aWxsIHByb3BhZ2F0ZSBQT1NTSUJMWV9TVEFMRVxuICAgIC8vXG4gICAgLy8gaGF2aW5nIHRoaXMgc3RhdGUgaXMgc2Vjb25kIGJpZyBvcHRpbWl6YXRpb246XG4gICAgLy8gZG9uJ3QgaGF2ZSB0byByZWNvbXB1dGUgb24gZXZlcnkgZGVwZW5kZW5jeSBjaGFuZ2UsIGJ1dCBvbmx5IHdoZW4gaXQncyBuZWVkZWRcbiAgICBJRGVyaXZhdGlvblN0YXRlW0lEZXJpdmF0aW9uU3RhdGVbXCJQT1NTSUJMWV9TVEFMRVwiXSA9IDFdID0gXCJQT1NTSUJMWV9TVEFMRVwiO1xuICAgIC8vIEEgc2hhbGxvdyBkZXBlbmRlbmN5IGhhcyBjaGFuZ2VkIHNpbmNlIGxhc3QgY29tcHV0YXRpb24gYW5kIHRoZSBkZXJpdmF0aW9uXG4gICAgLy8gd2lsbCBuZWVkIHRvIHJlY29tcHV0ZSB3aGVuIGl0J3MgbmVlZGVkIG5leHQuXG4gICAgSURlcml2YXRpb25TdGF0ZVtJRGVyaXZhdGlvblN0YXRlW1wiU1RBTEVcIl0gPSAyXSA9IFwiU1RBTEVcIjtcbn0pKElEZXJpdmF0aW9uU3RhdGUgfHwgKElEZXJpdmF0aW9uU3RhdGUgPSB7fSkpO1xudmFyIFRyYWNlTW9kZTtcbihmdW5jdGlvbiAoVHJhY2VNb2RlKSB7XG4gICAgVHJhY2VNb2RlW1RyYWNlTW9kZVtcIk5PTkVcIl0gPSAwXSA9IFwiTk9ORVwiO1xuICAgIFRyYWNlTW9kZVtUcmFjZU1vZGVbXCJMT0dcIl0gPSAxXSA9IFwiTE9HXCI7XG4gICAgVHJhY2VNb2RlW1RyYWNlTW9kZVtcIkJSRUFLXCJdID0gMl0gPSBcIkJSRUFLXCI7XG59KShUcmFjZU1vZGUgfHwgKFRyYWNlTW9kZSA9IHt9KSk7XG52YXIgQ2F1Z2h0RXhjZXB0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhdWdodEV4Y2VwdGlvbihjYXVzZSkge1xuICAgICAgICB0aGlzLmNhdXNlID0gY2F1c2U7XG4gICAgICAgIC8vIEVtcHR5XG4gICAgfVxuICAgIHJldHVybiBDYXVnaHRFeGNlcHRpb247XG59KCkpO1xuZnVuY3Rpb24gaXNDYXVnaHRFeGNlcHRpb24oZSkge1xuICAgIHJldHVybiBlIGluc3RhbmNlb2YgQ2F1Z2h0RXhjZXB0aW9uO1xufVxuLyoqXG4gKiBGaW5kcyBvdXQgd2hldGhlciBhbnkgZGVwZW5kZW5jeSBvZiB0aGUgZGVyaXZhdGlvbiBoYXMgYWN0dWFsbHkgY2hhbmdlZC5cbiAqIElmIGRlcGVuZGVuY2llc1N0YXRlIGlzIDEgdGhlbiBpdCB3aWxsIHJlY2FsY3VsYXRlIGRlcGVuZGVuY2llcyxcbiAqIGlmIGFueSBkZXBlbmRlbmN5IGNoYW5nZWQgaXQgd2lsbCBwcm9wYWdhdGUgaXQgYnkgY2hhbmdpbmcgZGVwZW5kZW5jaWVzU3RhdGUgdG8gMi5cbiAqXG4gKiBCeSBpdGVyYXRpbmcgb3ZlciB0aGUgZGVwZW5kZW5jaWVzIGluIHRoZSBzYW1lIG9yZGVyIHRoYXQgdGhleSB3ZXJlIHJlcG9ydGVkIGFuZFxuICogc3RvcHBpbmcgb24gdGhlIGZpcnN0IGNoYW5nZSwgYWxsIHRoZSByZWNhbGN1bGF0aW9ucyBhcmUgb25seSBjYWxsZWQgZm9yIENvbXB1dGVkVmFsdWVzXG4gKiB0aGF0IHdpbGwgYmUgdHJhY2tlZCBieSBkZXJpdmF0aW9uLiBUaGF0IGlzIGJlY2F1c2Ugd2UgYXNzdW1lIHRoYXQgaWYgdGhlIGZpcnN0IHhcbiAqIGRlcGVuZGVuY2llcyBvZiB0aGUgZGVyaXZhdGlvbiBkb2Vzbid0IGNoYW5nZSB0aGVuIHRoZSBkZXJpdmF0aW9uIHNob3VsZCBydW4gdGhlIHNhbWUgd2F5XG4gKiB1cCB1bnRpbCBhY2Nlc3NpbmcgeC10aCBkZXBlbmRlbmN5LlxuICovXG5mdW5jdGlvbiBzaG91bGRDb21wdXRlKGRlcml2YXRpb24pIHtcbiAgICBzd2l0Y2ggKGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUpIHtcbiAgICAgICAgY2FzZSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEU6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc6XG4gICAgICAgIGNhc2UgSURlcml2YXRpb25TdGF0ZS5TVEFMRTpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlIElEZXJpdmF0aW9uU3RhdGUuUE9TU0lCTFlfU1RBTEU6IHtcbiAgICAgICAgICAgIHZhciBwcmV2VW50cmFja2VkID0gdW50cmFja2VkU3RhcnQoKTsgLy8gbm8gbmVlZCBmb3IgdGhvc2UgY29tcHV0ZWRzIHRvIGJlIHJlcG9ydGVkLCB0aGV5IHdpbGwgYmUgcGlja2VkIHVwIGluIHRyYWNrRGVyaXZlZEZ1bmN0aW9uLlxuICAgICAgICAgICAgdmFyIG9icyA9IGRlcml2YXRpb24ub2JzZXJ2aW5nLCBsID0gb2JzLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iaiA9IG9ic1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb21wdXRlZFZhbHVlKG9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdsb2JhbFN0YXRlLmRpc2FibGVFcnJvckJvdW5kYXJpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5nZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmdldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBhcmUgbm90IGludGVyZXN0ZWQgaW4gdGhlIHZhbHVlICpvciogZXhjZXB0aW9uIGF0IHRoaXMgbW9tZW50LCBidXQgaWYgdGhlcmUgaXMgb25lLCBub3RpZnkgYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW50cmFja2VkRW5kKHByZXZVbnRyYWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIENvbXB1dGVkVmFsdWUgYG9iamAgYWN0dWFsbHkgY2hhbmdlZCBpdCB3aWxsIGJlIGNvbXB1dGVkIGFuZCBwcm9wYWdhdGVkIHRvIGl0cyBvYnNlcnZlcnMuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCBgZGVyaXZhdGlvbmAgaXMgYW4gb2JzZXJ2ZXIgb2YgYG9iamBcbiAgICAgICAgICAgICAgICAgICAgLy8gaW52YXJpYW50U2hvdWxkQ29tcHV0ZShkZXJpdmF0aW9uKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5TVEFMRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW50cmFja2VkRW5kKHByZXZVbnRyYWNrZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGFuZ2VEZXBlbmRlbmNpZXNTdGF0ZVRvMChkZXJpdmF0aW9uKTtcbiAgICAgICAgICAgIHVudHJhY2tlZEVuZChwcmV2VW50cmFja2VkKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIGZ1bmN0aW9uIGludmFyaWFudFNob3VsZENvbXB1dGUoZGVyaXZhdGlvbjogSURlcml2YXRpb24pIHtcbi8vICAgICBjb25zdCBuZXdEZXBTdGF0ZSA9IChkZXJpdmF0aW9uIGFzIGFueSkuZGVwZW5kZW5jaWVzU3RhdGVcbi8vICAgICBpZiAoXG4vLyAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiAmJlxuLy8gICAgICAgICAobmV3RGVwU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuUE9TU0lCTFlfU1RBTEUgfHxcbi8vICAgICAgICAgICAgIG5ld0RlcFN0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLk5PVF9UUkFDS0lORylcbi8vICAgICApXG4vLyAgICAgICAgIGZhaWwoXCJJbGxlZ2FsIGRlcGVuZGVuY3kgc3RhdGVcIilcbi8vIH1cbmZ1bmN0aW9uIGlzQ29tcHV0aW5nRGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uICE9PSBudWxsOyAvLyBmaWx0ZXIgb3V0IGFjdGlvbnMgaW5zaWRlIGNvbXB1dGF0aW9uc1xufVxuZnVuY3Rpb24gY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQoYXRvbSkge1xuICAgIHZhciBoYXNPYnNlcnZlcnMgPSBhdG9tLm9ic2VydmVycy5zaXplID4gMDtcbiAgICAvLyBTaG91bGQgbmV2ZXIgYmUgcG9zc2libGUgdG8gY2hhbmdlIGFuIG9ic2VydmVkIG9ic2VydmFibGUgZnJvbSBpbnNpZGUgY29tcHV0ZWQsIHNlZSAjNzk4XG4gICAgaWYgKGdsb2JhbFN0YXRlLmNvbXB1dGF0aW9uRGVwdGggPiAwICYmIGhhc09ic2VydmVycylcbiAgICAgICAgZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIFwiQ29tcHV0ZWQgdmFsdWVzIGFyZSBub3QgYWxsb3dlZCB0byBjYXVzZSBzaWRlIGVmZmVjdHMgYnkgY2hhbmdpbmcgb2JzZXJ2YWJsZXMgdGhhdCBhcmUgYWxyZWFkeSBiZWluZyBvYnNlcnZlZC4gVHJpZWQgdG8gbW9kaWZ5OiBcIiArIGF0b20ubmFtZSk7XG4gICAgLy8gU2hvdWxkIG5vdCBiZSBwb3NzaWJsZSB0byBjaGFuZ2Ugb2JzZXJ2ZWQgc3RhdGUgb3V0c2lkZSBzdHJpY3QgbW9kZSwgZXhjZXB0IGR1cmluZyBpbml0aWFsaXphdGlvbiwgc2VlICM1NjNcbiAgICBpZiAoIWdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzICYmIChoYXNPYnNlcnZlcnMgfHwgZ2xvYmFsU3RhdGUuZW5mb3JjZUFjdGlvbnMgPT09IFwic3RyaWN0XCIpKVxuICAgICAgICBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgKGdsb2JhbFN0YXRlLmVuZm9yY2VBY3Rpb25zXG4gICAgICAgICAgICAgICAgPyBcIlNpbmNlIHN0cmljdC1tb2RlIGlzIGVuYWJsZWQsIGNoYW5naW5nIG9ic2VydmVkIG9ic2VydmFibGUgdmFsdWVzIG91dHNpZGUgYWN0aW9ucyBpcyBub3QgYWxsb3dlZC4gUGxlYXNlIHdyYXAgdGhlIGNvZGUgaW4gYW4gYGFjdGlvbmAgaWYgdGhpcyBjaGFuZ2UgaXMgaW50ZW5kZWQuIFRyaWVkIHRvIG1vZGlmeTogXCJcbiAgICAgICAgICAgICAgICA6IFwiU2lkZSBlZmZlY3RzIGxpa2UgY2hhbmdpbmcgc3RhdGUgYXJlIG5vdCBhbGxvd2VkIGF0IHRoaXMgcG9pbnQuIEFyZSB5b3UgdHJ5aW5nIHRvIG1vZGlmeSBzdGF0ZSBmcm9tLCBmb3IgZXhhbXBsZSwgdGhlIHJlbmRlciBmdW5jdGlvbiBvZiBhIFJlYWN0IGNvbXBvbmVudD8gVHJpZWQgdG8gbW9kaWZ5OiBcIikgK1xuICAgICAgICAgICAgICAgIGF0b20ubmFtZSk7XG59XG5mdW5jdGlvbiBjaGVja0lmU3RhdGVSZWFkc0FyZUFsbG93ZWQob2JzZXJ2YWJsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgIWdsb2JhbFN0YXRlLmFsbG93U3RhdGVSZWFkcyAmJlxuICAgICAgICBnbG9iYWxTdGF0ZS5vYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gT2JzZXJ2YWJsZSBcIiArIG9ic2VydmFibGUubmFtZSArIFwiIGJlaW5nIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHRcIik7XG4gICAgfVxufVxuLyoqXG4gKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gYGZgIGFuZCB0cmFja3Mgd2hpY2ggb2JzZXJ2YWJsZXMgYXJlIGJlaW5nIGFjY2Vzc2VkLlxuICogVGhlIHRyYWNraW5nIGluZm9ybWF0aW9uIGlzIHN0b3JlZCBvbiB0aGUgYGRlcml2YXRpb25gIG9iamVjdCBhbmQgdGhlIGRlcml2YXRpb24gaXMgcmVnaXN0ZXJlZFxuICogYXMgb2JzZXJ2ZXIgb2YgYW55IG9mIHRoZSBhY2Nlc3NlZCBvYnNlcnZhYmxlcy5cbiAqL1xuZnVuY3Rpb24gdHJhY2tEZXJpdmVkRnVuY3Rpb24oZGVyaXZhdGlvbiwgZiwgY29udGV4dCkge1xuICAgIHZhciBwcmV2QWxsb3dTdGF0ZVJlYWRzID0gYWxsb3dTdGF0ZVJlYWRzU3RhcnQodHJ1ZSk7XG4gICAgLy8gcHJlIGFsbG9jYXRlIGFycmF5IGFsbG9jYXRpb24gKyByb29tIGZvciB2YXJpYXRpb24gaW4gZGVwc1xuICAgIC8vIGFycmF5IHdpbGwgYmUgdHJpbW1lZCBieSBiaW5kRGVwZW5kZW5jaWVzXG4gICAgY2hhbmdlRGVwZW5kZW5jaWVzU3RhdGVUbzAoZGVyaXZhdGlvbik7XG4gICAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmcgPSBuZXcgQXJyYXkoZGVyaXZhdGlvbi5vYnNlcnZpbmcubGVuZ3RoICsgMTAwKTtcbiAgICBkZXJpdmF0aW9uLnVuYm91bmREZXBzQ291bnQgPSAwO1xuICAgIGRlcml2YXRpb24ucnVuSWQgPSArK2dsb2JhbFN0YXRlLnJ1bklkO1xuICAgIHZhciBwcmV2VHJhY2tpbmcgPSBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb247XG4gICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID0gZGVyaXZhdGlvbjtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmIChnbG9iYWxTdGF0ZS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzID09PSB0cnVlKSB7XG4gICAgICAgIHJlc3VsdCA9IGYuY2FsbChjb250ZXh0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBmLmNhbGwoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBDYXVnaHRFeGNlcHRpb24oZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uID0gcHJldlRyYWNraW5nO1xuICAgIGJpbmREZXBlbmRlbmNpZXMoZGVyaXZhdGlvbik7XG4gICAgd2FybkFib3V0RGVyaXZhdGlvbldpdGhvdXREZXBlbmRlbmNpZXMoZGVyaXZhdGlvbik7XG4gICAgYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXZBbGxvd1N0YXRlUmVhZHMpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiB3YXJuQWJvdXREZXJpdmF0aW9uV2l0aG91dERlcGVuZGVuY2llcyhkZXJpdmF0aW9uKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgcmV0dXJuO1xuICAgIGlmIChkZXJpdmF0aW9uLm9ic2VydmluZy5sZW5ndGggIT09IDApXG4gICAgICAgIHJldHVybjtcbiAgICBpZiAoZ2xvYmFsU3RhdGUucmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGUgfHwgZGVyaXZhdGlvbi5yZXF1aXJlc09ic2VydmFibGUpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnhdIERlcml2YXRpb24gXCIgKyBkZXJpdmF0aW9uLm5hbWUgKyBcIiBpcyBjcmVhdGVkL3VwZGF0ZWQgd2l0aG91dCByZWFkaW5nIGFueSBvYnNlcnZhYmxlIHZhbHVlXCIpO1xuICAgIH1cbn1cbi8qKlxuICogZGlmZnMgbmV3T2JzZXJ2aW5nIHdpdGggb2JzZXJ2aW5nLlxuICogdXBkYXRlIG9ic2VydmluZyB0byBiZSBuZXdPYnNlcnZpbmcgd2l0aCB1bmlxdWUgb2JzZXJ2YWJsZXNcbiAqIG5vdGlmeSBvYnNlcnZlcnMgdGhhdCBiZWNvbWUgb2JzZXJ2ZWQvdW5vYnNlcnZlZFxuICovXG5mdW5jdGlvbiBiaW5kRGVwZW5kZW5jaWVzKGRlcml2YXRpb24pIHtcbiAgICAvLyBpbnZhcmlhbnQoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkcsIFwiSU5URVJOQUwgRVJST1IgYmluZERlcGVuZGVuY2llcyBleHBlY3RzIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgIT09IC0xXCIpO1xuICAgIHZhciBwcmV2T2JzZXJ2aW5nID0gZGVyaXZhdGlvbi5vYnNlcnZpbmc7XG4gICAgdmFyIG9ic2VydmluZyA9IChkZXJpdmF0aW9uLm9ic2VydmluZyA9IGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nKTtcbiAgICB2YXIgbG93ZXN0TmV3T2JzZXJ2aW5nRGVyaXZhdGlvblN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xuICAgIC8vIEdvIHRocm91Z2ggYWxsIG5ldyBvYnNlcnZhYmxlcyBhbmQgY2hlY2sgZGlmZlZhbHVlOiAodGhpcyBsaXN0IGNhbiBjb250YWluIGR1cGxpY2F0ZXMpOlxuICAgIC8vICAgMDogZmlyc3Qgb2NjdXJyZW5jZSwgY2hhbmdlIHRvIDEgYW5kIGtlZXAgaXRcbiAgICAvLyAgIDE6IGV4dHJhIG9jY3VycmVuY2UsIGRyb3AgaXRcbiAgICB2YXIgaTAgPSAwLCBsID0gZGVyaXZhdGlvbi51bmJvdW5kRGVwc0NvdW50O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBkZXAgPSBvYnNlcnZpbmdbaV07XG4gICAgICAgIGlmIChkZXAuZGlmZlZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICBkZXAuZGlmZlZhbHVlID0gMTtcbiAgICAgICAgICAgIGlmIChpMCAhPT0gaSlcbiAgICAgICAgICAgICAgICBvYnNlcnZpbmdbaTBdID0gZGVwO1xuICAgICAgICAgICAgaTArKztcbiAgICAgICAgfVxuICAgICAgICAvLyBVcGNhc3QgaXMgJ3NhZmUnIGhlcmUsIGJlY2F1c2UgaWYgZGVwIGlzIElPYnNlcnZhYmxlLCBgZGVwZW5kZW5jaWVzU3RhdGVgIHdpbGwgYmUgdW5kZWZpbmVkLFxuICAgICAgICAvLyBub3QgaGl0dGluZyB0aGUgY29uZGl0aW9uXG4gICAgICAgIGlmIChkZXAuZGVwZW5kZW5jaWVzU3RhdGUgPiBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGUpIHtcbiAgICAgICAgICAgIGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSA9IGRlcC5kZXBlbmRlbmNpZXNTdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvYnNlcnZpbmcubGVuZ3RoID0gaTA7XG4gICAgZGVyaXZhdGlvbi5uZXdPYnNlcnZpbmcgPSBudWxsOyAvLyBuZXdPYnNlcnZpbmcgc2hvdWxkbid0IGJlIG5lZWRlZCBvdXRzaWRlIHRyYWNraW5nIChzdGF0ZW1lbnQgbW92ZWQgZG93biB0byB3b3JrIGFyb3VuZCBGRiBidWcsIHNlZSAjNjE0KVxuICAgIC8vIEdvIHRocm91Z2ggYWxsIG9sZCBvYnNlcnZhYmxlcyBhbmQgY2hlY2sgZGlmZlZhbHVlOiAoaXQgaXMgdW5pcXVlIGFmdGVyIGxhc3QgYmluZERlcGVuZGVuY2llcylcbiAgICAvLyAgIDA6IGl0J3Mgbm90IGluIG5ldyBvYnNlcnZhYmxlcywgdW5vYnNlcnZlIGl0XG4gICAgLy8gICAxOiBpdCBrZWVwcyBiZWluZyBvYnNlcnZlZCwgZG9uJ3Qgd2FudCB0byBub3RpZnkgaXQuIGNoYW5nZSB0byAwXG4gICAgbCA9IHByZXZPYnNlcnZpbmcubGVuZ3RoO1xuICAgIHdoaWxlIChsLS0pIHtcbiAgICAgICAgdmFyIGRlcCA9IHByZXZPYnNlcnZpbmdbbF07XG4gICAgICAgIGlmIChkZXAuZGlmZlZhbHVlID09PSAwKSB7XG4gICAgICAgICAgICByZW1vdmVPYnNlcnZlcihkZXAsIGRlcml2YXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGRlcC5kaWZmVmFsdWUgPSAwO1xuICAgIH1cbiAgICAvLyBHbyB0aHJvdWdoIGFsbCBuZXcgb2JzZXJ2YWJsZXMgYW5kIGNoZWNrIGRpZmZWYWx1ZTogKG5vdyBpdCBzaG91bGQgYmUgdW5pcXVlKVxuICAgIC8vICAgMDogaXQgd2FzIHNldCB0byAwIGluIGxhc3QgbG9vcC4gZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZy5cbiAgICAvLyAgIDE6IGl0IHdhc24ndCBvYnNlcnZlZCwgbGV0J3Mgb2JzZXJ2ZSBpdC4gc2V0IGJhY2sgdG8gMFxuICAgIHdoaWxlIChpMC0tKSB7XG4gICAgICAgIHZhciBkZXAgPSBvYnNlcnZpbmdbaTBdO1xuICAgICAgICBpZiAoZGVwLmRpZmZWYWx1ZSA9PT0gMSkge1xuICAgICAgICAgICAgZGVwLmRpZmZWYWx1ZSA9IDA7XG4gICAgICAgICAgICBhZGRPYnNlcnZlcihkZXAsIGRlcml2YXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFNvbWUgbmV3IG9ic2VydmVkIGRlcml2YXRpb25zIG1heSBiZWNvbWUgc3RhbGUgZHVyaW5nIHRoaXMgZGVyaXZhdGlvbiBjb21wdXRhdGlvblxuICAgIC8vIHNvIHRoZXkgaGF2ZSBoYWQgbm8gY2hhbmNlIHRvIHByb3BhZ2F0ZSBzdGFsZW5lc3MgKCM5MTYpXG4gICAgaWYgKGxvd2VzdE5ld09ic2VydmluZ0Rlcml2YXRpb25TdGF0ZSAhPT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKSB7XG4gICAgICAgIGRlcml2YXRpb24uZGVwZW5kZW5jaWVzU3RhdGUgPSBsb3dlc3ROZXdPYnNlcnZpbmdEZXJpdmF0aW9uU3RhdGU7XG4gICAgICAgIGRlcml2YXRpb24ub25CZWNvbWVTdGFsZSgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsZWFyT2JzZXJ2aW5nKGRlcml2YXRpb24pIHtcbiAgICAvLyBpbnZhcmlhbnQoZ2xvYmFsU3RhdGUuaW5CYXRjaCA+IDAsIFwiSU5URVJOQUwgRVJST1IgY2xlYXJPYnNlcnZpbmcgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IGluc2lkZSBiYXRjaFwiKTtcbiAgICB2YXIgb2JzID0gZGVyaXZhdGlvbi5vYnNlcnZpbmc7XG4gICAgZGVyaXZhdGlvbi5vYnNlcnZpbmcgPSBbXTtcbiAgICB2YXIgaSA9IG9icy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSlcbiAgICAgICAgcmVtb3ZlT2JzZXJ2ZXIob2JzW2ldLCBkZXJpdmF0aW9uKTtcbiAgICBkZXJpdmF0aW9uLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc7XG59XG5mdW5jdGlvbiB1bnRyYWNrZWQoYWN0aW9uKSB7XG4gICAgdmFyIHByZXYgPSB1bnRyYWNrZWRTdGFydCgpO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhY3Rpb24oKTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHVudHJhY2tlZEVuZChwcmV2KTtcbiAgICB9XG59XG5mdW5jdGlvbiB1bnRyYWNrZWRTdGFydCgpIHtcbiAgICB2YXIgcHJldiA9IGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbjtcbiAgICBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gPSBudWxsO1xuICAgIHJldHVybiBwcmV2O1xufVxuZnVuY3Rpb24gdW50cmFja2VkRW5kKHByZXYpIHtcbiAgICBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb24gPSBwcmV2O1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZVJlYWRzU3RhcnQoYWxsb3dTdGF0ZVJlYWRzKSB7XG4gICAgdmFyIHByZXYgPSBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlUmVhZHM7XG4gICAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZVJlYWRzID0gYWxsb3dTdGF0ZVJlYWRzO1xuICAgIHJldHVybiBwcmV2O1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZVJlYWRzRW5kKHByZXYpIHtcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlUmVhZHMgPSBwcmV2O1xufVxuLyoqXG4gKiBuZWVkZWQgdG8ga2VlcCBgbG93ZXN0T2JzZXJ2ZXJTdGF0ZWAgY29ycmVjdC4gd2hlbiBjaGFuZ2luZyBmcm9tICgyIG9yIDEpIHRvIDBcbiAqXG4gKi9cbmZ1bmN0aW9uIGNoYW5nZURlcGVuZGVuY2llc1N0YXRlVG8wKGRlcml2YXRpb24pIHtcbiAgICBpZiAoZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKVxuICAgICAgICByZXR1cm47XG4gICAgZGVyaXZhdGlvbi5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURTtcbiAgICB2YXIgb2JzID0gZGVyaXZhdGlvbi5vYnNlcnZpbmc7XG4gICAgdmFyIGkgPSBvYnMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIG9ic1tpXS5sb3dlc3RPYnNlcnZlclN0YXRlID0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFO1xufVxuXG4vLyB3ZSBkb24ndCB1c2UgZ2xvYmFsU3RhdGUgZm9yIHRoZXNlIGluIG9yZGVyIHRvIGF2b2lkIHBvc3NpYmxlIGlzc3VlcyB3aXRoIG11bHRpcGxlXG4vLyBtb2J4IHZlcnNpb25zXG52YXIgY3VycmVudEFjdGlvbklkID0gMDtcbnZhciBuZXh0QWN0aW9uSWQgPSAxO1xuZnVuY3Rpb24gY3JlYXRlQWN0aW9uKGFjdGlvbk5hbWUsIGZuLCByZWYpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIiwgXCJgYWN0aW9uYCBjYW4gb25seSBiZSBpbnZva2VkIG9uIGZ1bmN0aW9uc1wiKTtcbiAgICAgICAgaWYgKHR5cGVvZiBhY3Rpb25OYW1lICE9PSBcInN0cmluZ1wiIHx8ICFhY3Rpb25OYW1lKVxuICAgICAgICAgICAgZmFpbChcImFjdGlvbnMgc2hvdWxkIGhhdmUgdmFsaWQgbmFtZXMsIGdvdDogJ1wiICsgYWN0aW9uTmFtZSArIFwiJ1wiKTtcbiAgICB9XG4gICAgdmFyIHJlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGV4ZWN1dGVBY3Rpb24oYWN0aW9uTmFtZSwgZm4sIHJlZiB8fCB0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgcmVzLmlzTW9ieEFjdGlvbiA9IHRydWU7XG4gICAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGV4ZWN1dGVBY3Rpb24oYWN0aW9uTmFtZSwgZm4sIHNjb3BlLCBhcmdzKSB7XG4gICAgdmFyIHJ1bkluZm8gPSBfc3RhcnRBY3Rpb24oYWN0aW9uTmFtZSwgc2NvcGUsIGFyZ3MpO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmbi5hcHBseShzY29wZSwgYXJncyk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgcnVuSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgX2VuZEFjdGlvbihydW5JbmZvKTtcbiAgICB9XG59XG5mdW5jdGlvbiBfc3RhcnRBY3Rpb24oYWN0aW9uTmFtZSwgc2NvcGUsIGFyZ3MpIHtcbiAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCkgJiYgISFhY3Rpb25OYW1lO1xuICAgIHZhciBzdGFydFRpbWUgPSAwO1xuICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciBsID0gKGFyZ3MgJiYgYXJncy5sZW5ndGgpIHx8IDA7XG4gICAgICAgIHZhciBmbGF0dGVuZEFyZ3MgPSBuZXcgQXJyYXkobCk7XG4gICAgICAgIGlmIChsID4gMClcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbDsgaSsrKVxuICAgICAgICAgICAgICAgIGZsYXR0ZW5kQXJnc1tpXSA9IGFyZ3NbaV07XG4gICAgICAgIHNweVJlcG9ydFN0YXJ0KHtcbiAgICAgICAgICAgIHR5cGU6IFwiYWN0aW9uXCIsXG4gICAgICAgICAgICBuYW1lOiBhY3Rpb25OYW1lLFxuICAgICAgICAgICAgb2JqZWN0OiBzY29wZSxcbiAgICAgICAgICAgIGFyZ3VtZW50czogZmxhdHRlbmRBcmdzXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgcHJldkRlcml2YXRpb24gPSB1bnRyYWNrZWRTdGFydCgpO1xuICAgIHN0YXJ0QmF0Y2goKTtcbiAgICB2YXIgcHJldkFsbG93U3RhdGVDaGFuZ2VzID0gYWxsb3dTdGF0ZUNoYW5nZXNTdGFydCh0cnVlKTtcbiAgICB2YXIgcHJldkFsbG93U3RhdGVSZWFkcyA9IGFsbG93U3RhdGVSZWFkc1N0YXJ0KHRydWUpO1xuICAgIHZhciBydW5JbmZvID0ge1xuICAgICAgICBwcmV2RGVyaXZhdGlvbjogcHJldkRlcml2YXRpb24sXG4gICAgICAgIHByZXZBbGxvd1N0YXRlQ2hhbmdlczogcHJldkFsbG93U3RhdGVDaGFuZ2VzLFxuICAgICAgICBwcmV2QWxsb3dTdGF0ZVJlYWRzOiBwcmV2QWxsb3dTdGF0ZVJlYWRzLFxuICAgICAgICBub3RpZnlTcHk6IG5vdGlmeVNweSxcbiAgICAgICAgc3RhcnRUaW1lOiBzdGFydFRpbWUsXG4gICAgICAgIGFjdGlvbklkOiBuZXh0QWN0aW9uSWQrKyxcbiAgICAgICAgcGFyZW50QWN0aW9uSWQ6IGN1cnJlbnRBY3Rpb25JZFxuICAgIH07XG4gICAgY3VycmVudEFjdGlvbklkID0gcnVuSW5mby5hY3Rpb25JZDtcbiAgICByZXR1cm4gcnVuSW5mbztcbn1cbmZ1bmN0aW9uIF9lbmRBY3Rpb24ocnVuSW5mbykge1xuICAgIGlmIChjdXJyZW50QWN0aW9uSWQgIT09IHJ1bkluZm8uYWN0aW9uSWQpIHtcbiAgICAgICAgZmFpbChcImludmFsaWQgYWN0aW9uIHN0YWNrLiBkaWQgeW91IGZvcmdldCB0byBmaW5pc2ggYW4gYWN0aW9uP1wiKTtcbiAgICB9XG4gICAgY3VycmVudEFjdGlvbklkID0gcnVuSW5mby5wYXJlbnRBY3Rpb25JZDtcbiAgICBpZiAocnVuSW5mby5lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGdsb2JhbFN0YXRlLnN1cHByZXNzUmVhY3Rpb25FcnJvcnMgPSB0cnVlO1xuICAgIH1cbiAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZChydW5JbmZvLnByZXZBbGxvd1N0YXRlQ2hhbmdlcyk7XG4gICAgYWxsb3dTdGF0ZVJlYWRzRW5kKHJ1bkluZm8ucHJldkFsbG93U3RhdGVSZWFkcyk7XG4gICAgZW5kQmF0Y2goKTtcbiAgICB1bnRyYWNrZWRFbmQocnVuSW5mby5wcmV2RGVyaXZhdGlvbik7XG4gICAgaWYgKHJ1bkluZm8ubm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBzcHlSZXBvcnRFbmQoeyB0aW1lOiBEYXRlLm5vdygpIC0gcnVuSW5mby5zdGFydFRpbWUgfSk7XG4gICAgfVxuICAgIGdsb2JhbFN0YXRlLnN1cHByZXNzUmVhY3Rpb25FcnJvcnMgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzKGFsbG93U3RhdGVDaGFuZ2VzLCBmdW5jKSB7XG4gICAgdmFyIHByZXYgPSBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KGFsbG93U3RhdGVDaGFuZ2VzKTtcbiAgICB2YXIgcmVzO1xuICAgIHRyeSB7XG4gICAgICAgIHJlcyA9IGZ1bmMoKTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHByZXYpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gYWxsb3dTdGF0ZUNoYW5nZXNTdGFydChhbGxvd1N0YXRlQ2hhbmdlcykge1xuICAgIHZhciBwcmV2ID0gZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXM7XG4gICAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgPSBhbGxvd1N0YXRlQ2hhbmdlcztcbiAgICByZXR1cm4gcHJldjtcbn1cbmZ1bmN0aW9uIGFsbG93U3RhdGVDaGFuZ2VzRW5kKHByZXYpIHtcbiAgICBnbG9iYWxTdGF0ZS5hbGxvd1N0YXRlQ2hhbmdlcyA9IHByZXY7XG59XG5mdW5jdGlvbiBhbGxvd1N0YXRlQ2hhbmdlc0luc2lkZUNvbXB1dGVkKGZ1bmMpIHtcbiAgICB2YXIgcHJldiA9IGdsb2JhbFN0YXRlLmNvbXB1dGF0aW9uRGVwdGg7XG4gICAgZ2xvYmFsU3RhdGUuY29tcHV0YXRpb25EZXB0aCA9IDA7XG4gICAgdmFyIHJlcztcbiAgICB0cnkge1xuICAgICAgICByZXMgPSBmdW5jKCk7XG4gICAgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICBnbG9iYWxTdGF0ZS5jb21wdXRhdGlvbkRlcHRoID0gcHJldjtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxudmFyIE9ic2VydmFibGVWYWx1ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT2JzZXJ2YWJsZVZhbHVlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVWYWx1ZSh2YWx1ZSwgZW5oYW5jZXIsIG5hbWUsIG5vdGlmeVNweSwgZXF1YWxzKSB7XG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiT2JzZXJ2YWJsZVZhbHVlQFwiICsgZ2V0TmV4dElkKCk7IH1cbiAgICAgICAgaWYgKG5vdGlmeVNweSA9PT0gdm9pZCAwKSB7IG5vdGlmeVNweSA9IHRydWU7IH1cbiAgICAgICAgaWYgKGVxdWFscyA9PT0gdm9pZCAwKSB7IGVxdWFscyA9IGNvbXBhcmVyLmRlZmF1bHQ7IH1cbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbmFtZSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuZW5oYW5jZXIgPSBlbmhhbmNlcjtcbiAgICAgICAgX3RoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIF90aGlzLmVxdWFscyA9IGVxdWFscztcbiAgICAgICAgX3RoaXMuaGFzVW5yZXBvcnRlZENoYW5nZSA9IGZhbHNlO1xuICAgICAgICBfdGhpcy52YWx1ZSA9IGVuaGFuY2VyKHZhbHVlLCB1bmRlZmluZWQsIG5hbWUpO1xuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIGlzU3B5RW5hYmxlZCgpICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgLy8gb25seSBub3RpZnkgc3B5IGlmIHRoaXMgaXMgYSBzdGFuZC1hbG9uZSBvYnNlcnZhYmxlXG4gICAgICAgICAgICBzcHlSZXBvcnQoeyB0eXBlOiBcImNyZWF0ZVwiLCBuYW1lOiBfdGhpcy5uYW1lLCBuZXdWYWx1ZTogXCJcIiArIF90aGlzLnZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5kZWhhbmNlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVoYW5jZXIgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VyKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnByZXBhcmVOZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gZ2xvYmFsU3RhdGUuVU5DSEFOR0VEKSB7XG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZVZhbHVlLnByb3RvdHlwZS5wcmVwYXJlTmV3VmFsdWUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcyk7XG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2xvYmFsU3RhdGUuVU5DSEFOR0VEO1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXBwbHkgbW9kaWZpZXJcbiAgICAgICAgbmV3VmFsdWUgPSB0aGlzLmVuaGFuY2VyKG5ld1ZhbHVlLCB0aGlzLnZhbHVlLCB0aGlzLm5hbWUpO1xuICAgICAgICByZXR1cm4gdGhpcy5lcXVhbHModGhpcy52YWx1ZSwgbmV3VmFsdWUpID8gZ2xvYmFsU3RhdGUuVU5DSEFOR0VEIDogbmV3VmFsdWU7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnNldE5ld1ZhbHVlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgICAgIGlmIChoYXNMaXN0ZW5lcnModGhpcykpIHtcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgICAgICBpZiAoZmlyZUltbWVkaWF0ZWx5KVxuICAgICAgICAgICAgbGlzdGVuZXIoe1xuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgXCJbXCIgKyB0aGlzLnZhbHVlICsgXCJdXCI7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlVmFsdWUucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0b1ByaW1pdGl2ZSh0aGlzLmdldCgpKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVWYWx1ZS5wcm90b3R5cGVbU3ltYm9sLnRvUHJpbWl0aXZlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGVWYWx1ZTtcbn0oQXRvbSkpO1xudmFyIGlzT2JzZXJ2YWJsZVZhbHVlID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIk9ic2VydmFibGVWYWx1ZVwiLCBPYnNlcnZhYmxlVmFsdWUpO1xuXG4vKipcbiAqIEEgbm9kZSBpbiB0aGUgc3RhdGUgZGVwZW5kZW5jeSByb290IHRoYXQgb2JzZXJ2ZXMgb3RoZXIgbm9kZXMsIGFuZCBjYW4gYmUgb2JzZXJ2ZWQgaXRzZWxmLlxuICpcbiAqIENvbXB1dGVkVmFsdWUgd2lsbCByZW1lbWJlciB0aGUgcmVzdWx0IG9mIHRoZSBjb21wdXRhdGlvbiBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSBiYXRjaCwgb3JcbiAqIHdoaWxlIGJlaW5nIG9ic2VydmVkLlxuICpcbiAqIER1cmluZyB0aGlzIHRpbWUgaXQgd2lsbCByZWNvbXB1dGUgb25seSB3aGVuIG9uZSBvZiBpdHMgZGlyZWN0IGRlcGVuZGVuY2llcyBjaGFuZ2VkLFxuICogYnV0IG9ubHkgd2hlbiBpdCBpcyBiZWluZyBhY2Nlc3NlZCB3aXRoIGBDb21wdXRlZFZhbHVlLmdldCgpYC5cbiAqXG4gKiBJbXBsZW1lbnRhdGlvbiBkZXNjcmlwdGlvbjpcbiAqIDEuIEZpcnN0IHRpbWUgaXQncyBiZWluZyBhY2Nlc3NlZCBpdCB3aWxsIGNvbXB1dGUgYW5kIHJlbWVtYmVyIHJlc3VsdFxuICogICAgZ2l2ZSBiYWNrIHJlbWVtYmVyZWQgcmVzdWx0IHVudGlsIDIuIGhhcHBlbnNcbiAqIDIuIEZpcnN0IHRpbWUgYW55IGRlZXAgZGVwZW5kZW5jeSBjaGFuZ2UsIHByb3BhZ2F0ZSBQT1NTSUJMWV9TVEFMRSB0byBhbGwgb2JzZXJ2ZXJzLCB3YWl0IGZvciAzLlxuICogMy4gV2hlbiBpdCdzIGJlaW5nIGFjY2Vzc2VkLCByZWNvbXB1dGUgaWYgYW55IHNoYWxsb3cgZGVwZW5kZW5jeSBjaGFuZ2VkLlxuICogICAgaWYgcmVzdWx0IGNoYW5nZWQ6IHByb3BhZ2F0ZSBTVEFMRSB0byBhbGwgb2JzZXJ2ZXJzLCB0aGF0IHdlcmUgUE9TU0lCTFlfU1RBTEUgZnJvbSB0aGUgbGFzdCBzdGVwLlxuICogICAgZ28gdG8gc3RlcCAyLiBlaXRoZXIgd2F5XG4gKlxuICogSWYgYXQgYW55IHBvaW50IGl0J3Mgb3V0c2lkZSBiYXRjaCBhbmQgaXQgaXNuJ3Qgb2JzZXJ2ZWQ6IHJlc2V0IGV2ZXJ5dGhpbmcgYW5kIGdvIHRvIDEuXG4gKi9cbnZhciBDb21wdXRlZFZhbHVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjb21wdXRlZCB2YWx1ZSBiYXNlZCBvbiBhIGZ1bmN0aW9uIGV4cHJlc3Npb24uXG4gICAgICpcbiAgICAgKiBUaGUgYG5hbWVgIHByb3BlcnR5IGlzIGZvciBkZWJ1ZyBwdXJwb3NlcyBvbmx5LlxuICAgICAqXG4gICAgICogVGhlIGBlcXVhbHNgIHByb3BlcnR5IHNwZWNpZmllcyB0aGUgY29tcGFyZXIgZnVuY3Rpb24gdG8gdXNlIHRvIGRldGVybWluZSBpZiBhIG5ld2x5IHByb2R1Y2VkXG4gICAgICogdmFsdWUgZGlmZmVycyBmcm9tIHRoZSBwcmV2aW91cyB2YWx1ZS4gVHdvIGNvbXBhcmVycyBhcmUgcHJvdmlkZWQgaW4gdGhlIGxpYnJhcnk7IGBkZWZhdWx0Q29tcGFyZXJgXG4gICAgICogY29tcGFyZXMgYmFzZWQgb24gaWRlbnRpdHkgY29tcGFyaXNvbiAoPT09KSwgYW5kIGBzdHJ1Y3R1YWxDb21wYXJlcmAgZGVlcGx5IGNvbXBhcmVzIHRoZSBzdHJ1Y3R1cmUuXG4gICAgICogU3RydWN0dXJhbCBjb21wYXJpc29uIGNhbiBiZSBjb252ZW5pZW50IGlmIHlvdSBhbHdheXMgcHJvZHVjZSBhIG5ldyBhZ2dyZWdhdGVkIG9iamVjdCBhbmRcbiAgICAgKiBkb24ndCB3YW50IHRvIG5vdGlmeSBvYnNlcnZlcnMgaWYgaXQgaXMgc3RydWN0dXJhbGx5IHRoZSBzYW1lLlxuICAgICAqIFRoaXMgaXMgdXNlZnVsIGZvciB3b3JraW5nIHdpdGggdmVjdG9ycywgbW91c2UgY29vcmRpbmF0ZXMgZXRjLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIENvbXB1dGVkVmFsdWUob3B0aW9ucykge1xuICAgICAgICB0aGlzLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc7XG4gICAgICAgIHRoaXMub2JzZXJ2aW5nID0gW107IC8vIG5vZGVzIHdlIGFyZSBsb29raW5nIGF0LiBPdXIgdmFsdWUgZGVwZW5kcyBvbiB0aGVzZSBub2Rlc1xuICAgICAgICB0aGlzLm5ld09ic2VydmluZyA9IG51bGw7IC8vIGR1cmluZyB0cmFja2luZyBpdCdzIGFuIGFycmF5IHdpdGggbmV3IG9ic2VydmVkIG9ic2VydmVyc1xuICAgICAgICB0aGlzLmlzQmVpbmdPYnNlcnZlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuZGlmZlZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5ydW5JZCA9IDA7XG4gICAgICAgIHRoaXMubGFzdEFjY2Vzc2VkQnkgPSAwO1xuICAgICAgICB0aGlzLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEU7XG4gICAgICAgIHRoaXMudW5ib3VuZERlcHNDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuX19tYXBpZCA9IFwiI1wiICsgZ2V0TmV4dElkKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBuZXcgQ2F1Z2h0RXhjZXB0aW9uKG51bGwpO1xuICAgICAgICB0aGlzLmlzQ29tcHV0aW5nID0gZmFsc2U7IC8vIHRvIGNoZWNrIGZvciBjeWNsZXNcbiAgICAgICAgdGhpcy5pc1J1bm5pbmdTZXR0ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1RyYWNpbmcgPSBUcmFjZU1vZGUuTk9ORTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiAhb3B0aW9ucy5nZXQpXG4gICAgICAgICAgICB0aHJvdyBcIlttb2J4XSBtaXNzaW5nIG9wdGlvbiBmb3IgY29tcHV0ZWQ6IGdldFwiO1xuICAgICAgICB0aGlzLmRlcml2YXRpb24gPSBvcHRpb25zLmdldDtcbiAgICAgICAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IFwiQ29tcHV0ZWRWYWx1ZUBcIiArIGdldE5leHRJZCgpO1xuICAgICAgICBpZiAob3B0aW9ucy5zZXQpXG4gICAgICAgICAgICB0aGlzLnNldHRlciA9IGNyZWF0ZUFjdGlvbih0aGlzLm5hbWUgKyBcIi1zZXR0ZXJcIiwgb3B0aW9ucy5zZXQpO1xuICAgICAgICB0aGlzLmVxdWFscyA9XG4gICAgICAgICAgICBvcHRpb25zLmVxdWFscyB8fFxuICAgICAgICAgICAgICAgIChvcHRpb25zLmNvbXBhcmVTdHJ1Y3R1cmFsIHx8IG9wdGlvbnMuc3RydWN0XG4gICAgICAgICAgICAgICAgICAgID8gY29tcGFyZXIuc3RydWN0dXJhbFxuICAgICAgICAgICAgICAgICAgICA6IGNvbXBhcmVyLmRlZmF1bHQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gb3B0aW9ucy5jb250ZXh0O1xuICAgICAgICB0aGlzLnJlcXVpcmVzUmVhY3Rpb24gPSAhIW9wdGlvbnMucmVxdWlyZXNSZWFjdGlvbjtcbiAgICAgICAgdGhpcy5rZWVwQWxpdmUgPSAhIW9wdGlvbnMua2VlcEFsaXZlO1xuICAgIH1cbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5vbkJlY29tZVN0YWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBwcm9wYWdhdGVNYXliZUNoYW5nZWQodGhpcyk7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5vbkJlY29tZU9ic2VydmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5vbkJlY29tZU9ic2VydmVkTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICB0aGlzLm9uQmVjb21lT2JzZXJ2ZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyKCk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5vbkJlY29tZVVub2JzZXJ2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9uQmVjb21lVW5vYnNlcnZlZExpc3RlbmVycykge1xuICAgICAgICAgICAgdGhpcy5vbkJlY29tZVVub2JzZXJ2ZWRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGxpc3RlbmVyKCk7IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlIG9mIHRoaXMgY29tcHV0ZWQgdmFsdWUuXG4gICAgICogV2lsbCBldmFsdWF0ZSBpdHMgY29tcHV0YXRpb24gZmlyc3QgaWYgbmVlZGVkLlxuICAgICAqL1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDb21wdXRpbmcpXG4gICAgICAgICAgICBmYWlsKFwiQ3ljbGUgZGV0ZWN0ZWQgaW4gY29tcHV0YXRpb24gXCIgKyB0aGlzLm5hbWUgKyBcIjogXCIgKyB0aGlzLmRlcml2YXRpb24pO1xuICAgICAgICBpZiAoZ2xvYmFsU3RhdGUuaW5CYXRjaCA9PT0gMCAmJiB0aGlzLm9ic2VydmVycy5zaXplID09PSAwICYmICF0aGlzLmtlZXBBbGl2ZSkge1xuICAgICAgICAgICAgaWYgKHNob3VsZENvbXB1dGUodGhpcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5BYm91dFVudHJhY2tlZFJlYWQoKTtcbiAgICAgICAgICAgICAgICBzdGFydEJhdGNoKCk7IC8vIFNlZSBwZXJmIHRlc3QgJ2NvbXB1dGVkIG1lbW9pemF0aW9uJ1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmNvbXB1dGVWYWx1ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgZW5kQmF0Y2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcG9ydE9ic2VydmVkKHRoaXMpO1xuICAgICAgICAgICAgaWYgKHNob3VsZENvbXB1dGUodGhpcykpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJhY2tBbmRDb21wdXRlKCkpXG4gICAgICAgICAgICAgICAgICAgIHByb3BhZ2F0ZUNoYW5nZUNvbmZpcm1lZCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy52YWx1ZTtcbiAgICAgICAgaWYgKGlzQ2F1Z2h0RXhjZXB0aW9uKHJlc3VsdCkpXG4gICAgICAgICAgICB0aHJvdyByZXN1bHQuY2F1c2U7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzID0gdGhpcy5jb21wdXRlVmFsdWUoZmFsc2UpO1xuICAgICAgICBpZiAoaXNDYXVnaHRFeGNlcHRpb24ocmVzKSlcbiAgICAgICAgICAgIHRocm93IHJlcy5jYXVzZTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5zZXR0ZXIpIHtcbiAgICAgICAgICAgIGludmFyaWFudCghdGhpcy5pc1J1bm5pbmdTZXR0ZXIsIFwiVGhlIHNldHRlciBvZiBjb21wdXRlZCB2YWx1ZSAnXCIgKyB0aGlzLm5hbWUgKyBcIicgaXMgdHJ5aW5nIHRvIHVwZGF0ZSBpdHNlbGYuIERpZCB5b3UgaW50ZW5kIHRvIHVwZGF0ZSBhbiBfb2JzZXJ2YWJsZV8gdmFsdWUsIGluc3RlYWQgb2YgdGhlIGNvbXB1dGVkIHByb3BlcnR5P1wiKTtcbiAgICAgICAgICAgIHRoaXMuaXNSdW5uaW5nU2V0dGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXR0ZXIuY2FsbCh0aGlzLnNjb3BlLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzUnVubmluZ1NldHRlciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGludmFyaWFudChmYWxzZSwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICAgICAgXCJbQ29tcHV0ZWRWYWx1ZSAnXCIgKyB0aGlzLm5hbWUgKyBcIiddIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBhc3NpZ24gYSBuZXcgdmFsdWUgdG8gYSBjb21wdXRlZCB2YWx1ZS5cIik7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS50cmFja0FuZENvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc1NweUVuYWJsZWQoKSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIHNweVJlcG9ydCh7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnNjb3BlLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiY29tcHV0ZVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdmFyIHdhc1N1c3BlbmRlZCA9IFxuICAgICAgICAvKiBzZWUgIzEyMDggKi8gdGhpcy5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMuY29tcHV0ZVZhbHVlKHRydWUpO1xuICAgICAgICB2YXIgY2hhbmdlZCA9IHdhc1N1c3BlbmRlZCB8fFxuICAgICAgICAgICAgaXNDYXVnaHRFeGNlcHRpb24ob2xkVmFsdWUpIHx8XG4gICAgICAgICAgICBpc0NhdWdodEV4Y2VwdGlvbihuZXdWYWx1ZSkgfHxcbiAgICAgICAgICAgICF0aGlzLmVxdWFscyhvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFuZ2VkO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUuY29tcHV0ZVZhbHVlID0gZnVuY3Rpb24gKHRyYWNrKSB7XG4gICAgICAgIHRoaXMuaXNDb21wdXRpbmcgPSB0cnVlO1xuICAgICAgICBnbG9iYWxTdGF0ZS5jb21wdXRhdGlvbkRlcHRoKys7XG4gICAgICAgIHZhciByZXM7XG4gICAgICAgIGlmICh0cmFjaykge1xuICAgICAgICAgICAgcmVzID0gdHJhY2tEZXJpdmVkRnVuY3Rpb24odGhpcywgdGhpcy5kZXJpdmF0aW9uLCB0aGlzLnNjb3BlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChnbG9iYWxTdGF0ZS5kaXNhYmxlRXJyb3JCb3VuZGFyaWVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gdGhpcy5kZXJpdmF0aW9uLmNhbGwodGhpcy5zY29wZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXMgPSB0aGlzLmRlcml2YXRpb24uY2FsbCh0aGlzLnNjb3BlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gbmV3IENhdWdodEV4Y2VwdGlvbihlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsU3RhdGUuY29tcHV0YXRpb25EZXB0aC0tO1xuICAgICAgICB0aGlzLmlzQ29tcHV0aW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfTtcbiAgICBDb21wdXRlZFZhbHVlLnByb3RvdHlwZS5zdXNwZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMua2VlcEFsaXZlKSB7XG4gICAgICAgICAgICBjbGVhck9ic2VydmluZyh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7IC8vIGRvbid0IGhvbGQgb24gdG8gY29tcHV0ZWQgdmFsdWUhXG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZmlyc3RUaW1lID0gdHJ1ZTtcbiAgICAgICAgdmFyIHByZXZWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIGF1dG9ydW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0gX3RoaXMuZ2V0KCk7XG4gICAgICAgICAgICBpZiAoIWZpcnN0VGltZSB8fCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJldlUgPSB1bnRyYWNrZWRTdGFydCgpO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiBfdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogcHJldlZhbHVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdW50cmFja2VkRW5kKHByZXZVKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICAgICAgICAgICAgcHJldlZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUud2FybkFib3V0VW50cmFja2VkUmVhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMucmVxdWlyZXNSZWFjdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZmFpbChcIlttb2J4XSBDb21wdXRlZCB2YWx1ZSBcIiArIHRoaXMubmFtZSArIFwiIGlzIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHRcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNUcmFjaW5nICE9PSBUcmFjZU1vZGUuTk9ORSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbbW9ieC50cmFjZV0gJ1wiICsgdGhpcy5uYW1lICsgXCInIGlzIGJlaW5nIHJlYWQgb3V0c2lkZSBhIHJlYWN0aXZlIGNvbnRleHQuIERvaW5nIGEgZnVsbCByZWNvbXB1dGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdsb2JhbFN0YXRlLmNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnhdIENvbXB1dGVkIHZhbHVlIFwiICsgdGhpcy5uYW1lICsgXCIgaXMgYmVpbmcgcmVhZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dC4gRG9pbmcgYSBmdWxsIHJlY29tcHV0ZVwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoKTtcbiAgICB9O1xuICAgIENvbXB1dGVkVmFsdWUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgXCJbXCIgKyB0aGlzLmRlcml2YXRpb24udG9TdHJpbmcoKSArIFwiXVwiO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRvUHJpbWl0aXZlKHRoaXMuZ2V0KCkpO1xuICAgIH07XG4gICAgQ29tcHV0ZWRWYWx1ZS5wcm90b3R5cGVbU3ltYm9sLnRvUHJpbWl0aXZlXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVPZigpO1xuICAgIH07XG4gICAgcmV0dXJuIENvbXB1dGVkVmFsdWU7XG59KCkpO1xudmFyIGlzQ29tcHV0ZWRWYWx1ZSA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJDb21wdXRlZFZhbHVlXCIsIENvbXB1dGVkVmFsdWUpO1xuXG4vKipcbiAqIFRoZXNlIHZhbHVlcyB3aWxsIHBlcnNpc3QgaWYgZ2xvYmFsIHN0YXRlIGlzIHJlc2V0XG4gKi9cbnZhciBwZXJzaXN0ZW50S2V5cyA9IFtcbiAgICBcIm1vYnhHdWlkXCIsXG4gICAgXCJzcHlMaXN0ZW5lcnNcIixcbiAgICBcImVuZm9yY2VBY3Rpb25zXCIsXG4gICAgXCJjb21wdXRlZFJlcXVpcmVzUmVhY3Rpb25cIixcbiAgICBcInJlYWN0aW9uUmVxdWlyZXNPYnNlcnZhYmxlXCIsXG4gICAgXCJvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvblwiLFxuICAgIFwiYWxsb3dTdGF0ZVJlYWRzXCIsXG4gICAgXCJkaXNhYmxlRXJyb3JCb3VuZGFyaWVzXCIsXG4gICAgXCJydW5JZFwiLFxuICAgIFwiVU5DSEFOR0VEXCJcbl07XG52YXIgTW9iWEdsb2JhbHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTW9iWEdsb2JhbHMoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNb2JYR2xvYmFscyB2ZXJzaW9uLlxuICAgICAgICAgKiBNb2JYIGNvbXBhdGlibGl0eSB3aXRoIG90aGVyIHZlcnNpb25zIGxvYWRlZCBpbiBtZW1vcnkgYXMgbG9uZyBhcyB0aGlzIHZlcnNpb24gbWF0Y2hlcy5cbiAgICAgICAgICogSXQgaW5kaWNhdGVzIHRoYXQgdGhlIGdsb2JhbCBzdGF0ZSBzdGlsbCBzdG9yZXMgc2ltaWxhciBpbmZvcm1hdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBOLkI6IHRoaXMgdmVyc2lvbiBpcyB1bnJlbGF0ZWQgdG8gdGhlIHBhY2thZ2UgdmVyc2lvbiBvZiBNb2JYLCBhbmQgaXMgb25seSB0aGUgdmVyc2lvbiBvZiB0aGVcbiAgICAgICAgICogaW50ZXJuYWwgc3RhdGUgc3RvcmFnZSBvZiBNb2JYLCBhbmQgY2FuIGJlIHRoZSBzYW1lIGFjcm9zcyBtYW55IGRpZmZlcmVudCBwYWNrYWdlIHZlcnNpb25zXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnZlcnNpb24gPSA1O1xuICAgICAgICAvKipcbiAgICAgICAgICogZ2xvYmFsbHkgdW5pcXVlIHRva2VuIHRvIHNpZ25hbCB1bmNoYW5nZWRcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuVU5DSEFOR0VEID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdXJyZW50bHkgcnVubmluZyBkZXJpdmF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyYWNraW5nRGVyaXZhdGlvbiA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcmUgd2UgcnVubmluZyBhIGNvbXB1dGF0aW9uIGN1cnJlbnRseT8gKG5vdCBhIHJlYWN0aW9uKVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb21wdXRhdGlvbkRlcHRoID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVhY2ggdGltZSBhIGRlcml2YXRpb24gaXMgdHJhY2tlZCwgaXQgaXMgYXNzaWduZWQgYSB1bmlxdWUgcnVuLWlkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJ1bklkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICdndWlkJyBmb3IgZ2VuZXJhbCBwdXJwb3NlLiBXaWxsIGJlIHBlcnNpc3RlZCBhbW9uZ3N0IHJlc2V0cy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW9ieEd1aWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXJlIHdlIGluIGEgYmF0Y2ggYmxvY2s/IChhbmQgaG93IG1hbnkgb2YgdGhlbSlcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW5CYXRjaCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPYnNlcnZhYmxlcyB0aGF0IGRvbid0IGhhdmUgb2JzZXJ2ZXJzIGFueW1vcmUsIGFuZCBhcmUgYWJvdXQgdG8gYmVcbiAgICAgICAgICogc3VzcGVuZGVkLCB1bmxlc3Mgc29tZWJvZHkgZWxzZSBhY2Nlc3NlcyBpdCBpbiB0aGUgc2FtZSBiYXRjaFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7SU9ic2VydmFibGVbXX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucGVuZGluZ1Vub2JzZXJ2YXRpb25zID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaXN0IG9mIHNjaGVkdWxlZCwgbm90IHlldCBleGVjdXRlZCwgcmVhY3Rpb25zLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wZW5kaW5nUmVhY3Rpb25zID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcmUgd2UgY3VycmVudGx5IHByb2Nlc3NpbmcgcmVhY3Rpb25zP1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pc1J1bm5pbmdSZWFjdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIGl0IGFsbG93ZWQgdG8gY2hhbmdlIG9ic2VydmFibGVzIGF0IHRoaXMgcG9pbnQ/XG4gICAgICAgICAqIEluIGdlbmVyYWwsIE1vYlggZG9lc24ndCBhbGxvdyB0aGF0IHdoZW4gcnVubmluZyBjb21wdXRhdGlvbnMgYW5kIFJlYWN0LnJlbmRlci5cbiAgICAgICAgICogVG8gZW5zdXJlIHRoYXQgdGhvc2UgZnVuY3Rpb25zIHN0YXkgcHVyZS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuYWxsb3dTdGF0ZUNoYW5nZXMgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogSXMgaXQgYWxsb3dlZCB0byByZWFkIG9ic2VydmFibGVzIGF0IHRoaXMgcG9pbnQ/XG4gICAgICAgICAqIFVzZWQgdG8gaG9sZCB0aGUgc3RhdGUgbmVlZGVkIGZvciBgb2JzZXJ2YWJsZVJlcXVpcmVzUmVhY3Rpb25gXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFsbG93U3RhdGVSZWFkcyA9IHRydWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBzdHJpY3QgbW9kZSBpcyBlbmFibGVkLCBzdGF0ZSBjaGFuZ2VzIGFyZSBieSBkZWZhdWx0IG5vdCBhbGxvd2VkXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmVuZm9yY2VBY3Rpb25zID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTcHkgY2FsbGJhY2tzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNweUxpc3RlbmVycyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2xvYmFsbHkgYXR0YWNoZWQgZXJyb3IgaGFuZGxlcnMgdGhhdCByZWFjdCBzcGVjaWZpY2FsbHkgdG8gZXJyb3JzIGluIHJlYWN0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdhcm4gaWYgY29tcHV0ZWQgdmFsdWVzIGFyZSBhY2Nlc3NlZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIChFeHBlcmltZW50YWwpXG4gICAgICAgICAqIFdhcm4gaWYgeW91IHRyeSB0byBjcmVhdGUgdG8gZGVyaXZhdGlvbiAvIHJlYWN0aXZlIGNvbnRleHQgd2l0aG91dCBhY2Nlc3NpbmcgYW55IG9ic2VydmFibGUuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlYWN0aW9uUmVxdWlyZXNPYnNlcnZhYmxlID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAoRXhwZXJpbWVudGFsKVxuICAgICAgICAgKiBXYXJuIGlmIG9ic2VydmFibGVzIGFyZSBhY2Nlc3NlZCBvdXRzaWRlIGEgcmVhY3RpdmUgY29udGV4dFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbiA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQWxsb3dzIG92ZXJ3cml0aW5nIG9mIGNvbXB1dGVkIHByb3BlcnRpZXMsIHVzZWZ1bCBpbiB0ZXN0cyBidXQgbm90IHByb2QgYXMgaXQgY2FuIGNhdXNlXG4gICAgICAgICAqIG1lbW9yeSBsZWFrcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb2J4anMvbW9ieC9pc3N1ZXMvMTg2N1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb21wdXRlZENvbmZpZ3VyYWJsZSA9IGZhbHNlO1xuICAgICAgICAvKlxuICAgICAgICAgKiBEb24ndCBjYXRjaCBhbmQgcmV0aHJvdyBleGNlcHRpb25zLiBUaGlzIGlzIHVzZWZ1bCBmb3IgaW5zcGVjdGluZyB0aGUgc3RhdGUgb2ZcbiAgICAgICAgICogdGhlIHN0YWNrIHdoZW4gYW4gZXhjZXB0aW9uIG9jY3VycyB3aGlsZSBkZWJ1Z2dpbmcuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmRpc2FibGVFcnJvckJvdW5kYXJpZXMgPSBmYWxzZTtcbiAgICAgICAgLypcbiAgICAgICAgICogSWYgdHJ1ZSwgd2UgYXJlIGFscmVhZHkgaGFuZGxpbmcgYW4gZXhjZXB0aW9uIGluIGFuIGFjdGlvbi4gQW55IGVycm9ycyBpbiByZWFjdGlvbnMgc2hvdWxkIGJlIHN1cHByZXNzZWQsIGFzXG4gICAgICAgICAqIHRoZXkgYXJlIG5vdCB0aGUgY2F1c2UsIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2lzc3Vlcy8xODM2XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN1cHByZXNzUmVhY3Rpb25FcnJvcnMgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIE1vYlhHbG9iYWxzO1xufSgpKTtcbnZhciBtb2NrR2xvYmFsID0ge307XG5mdW5jdGlvbiBnZXRHbG9iYWwoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcmV0dXJuIGdsb2JhbDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cbiAgICByZXR1cm4gbW9ja0dsb2JhbDtcbn1cbnZhciBjYW5NZXJnZUdsb2JhbFN0YXRlID0gdHJ1ZTtcbnZhciBpc29sYXRlQ2FsbGVkID0gZmFsc2U7XG52YXIgZ2xvYmFsU3RhdGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBnbG9iYWwgPSBnZXRHbG9iYWwoKTtcbiAgICBpZiAoZ2xvYmFsLl9fbW9ieEluc3RhbmNlQ291bnQgPiAwICYmICFnbG9iYWwuX19tb2J4R2xvYmFscylcbiAgICAgICAgY2FuTWVyZ2VHbG9iYWxTdGF0ZSA9IGZhbHNlO1xuICAgIGlmIChnbG9iYWwuX19tb2J4R2xvYmFscyAmJiBnbG9iYWwuX19tb2J4R2xvYmFscy52ZXJzaW9uICE9PSBuZXcgTW9iWEdsb2JhbHMoKS52ZXJzaW9uKVxuICAgICAgICBjYW5NZXJnZUdsb2JhbFN0YXRlID0gZmFsc2U7XG4gICAgaWYgKCFjYW5NZXJnZUdsb2JhbFN0YXRlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFpc29sYXRlQ2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgZmFpbChcIlRoZXJlIGFyZSBtdWx0aXBsZSwgZGlmZmVyZW50IHZlcnNpb25zIG9mIE1vYlggYWN0aXZlLiBNYWtlIHN1cmUgTW9iWCBpcyBsb2FkZWQgb25seSBvbmNlIG9yIHVzZSBgY29uZmlndXJlKHsgaXNvbGF0ZUdsb2JhbFN0YXRlOiB0cnVlIH0pYFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMSk7XG4gICAgICAgIHJldHVybiBuZXcgTW9iWEdsb2JhbHMoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZ2xvYmFsLl9fbW9ieEdsb2JhbHMpIHtcbiAgICAgICAgZ2xvYmFsLl9fbW9ieEluc3RhbmNlQ291bnQgKz0gMTtcbiAgICAgICAgaWYgKCFnbG9iYWwuX19tb2J4R2xvYmFscy5VTkNIQU5HRUQpXG4gICAgICAgICAgICBnbG9iYWwuX19tb2J4R2xvYmFscy5VTkNIQU5HRUQgPSB7fTsgLy8gbWFrZSBtZXJnZSBiYWNrd2FyZCBjb21wYXRpYmxlXG4gICAgICAgIHJldHVybiBnbG9iYWwuX19tb2J4R2xvYmFscztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGdsb2JhbC5fX21vYnhJbnN0YW5jZUNvdW50ID0gMTtcbiAgICAgICAgcmV0dXJuIChnbG9iYWwuX19tb2J4R2xvYmFscyA9IG5ldyBNb2JYR2xvYmFscygpKTtcbiAgICB9XG59KSgpO1xuZnVuY3Rpb24gaXNvbGF0ZUdsb2JhbFN0YXRlKCkge1xuICAgIGlmIChnbG9iYWxTdGF0ZS5wZW5kaW5nUmVhY3Rpb25zLmxlbmd0aCB8fFxuICAgICAgICBnbG9iYWxTdGF0ZS5pbkJhdGNoIHx8XG4gICAgICAgIGdsb2JhbFN0YXRlLmlzUnVubmluZ1JlYWN0aW9ucylcbiAgICAgICAgZmFpbChcImlzb2xhdGVHbG9iYWxTdGF0ZSBzaG91bGQgYmUgY2FsbGVkIGJlZm9yZSBNb2JYIGlzIHJ1bm5pbmcgYW55IHJlYWN0aW9uc1wiKTtcbiAgICBpc29sYXRlQ2FsbGVkID0gdHJ1ZTtcbiAgICBpZiAoY2FuTWVyZ2VHbG9iYWxTdGF0ZSkge1xuICAgICAgICBpZiAoLS1nZXRHbG9iYWwoKS5fX21vYnhJbnN0YW5jZUNvdW50ID09PSAwKVxuICAgICAgICAgICAgZ2V0R2xvYmFsKCkuX19tb2J4R2xvYmFscyA9IHVuZGVmaW5lZDtcbiAgICAgICAgZ2xvYmFsU3RhdGUgPSBuZXcgTW9iWEdsb2JhbHMoKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXRHbG9iYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4gZ2xvYmFsU3RhdGU7XG59XG4vKipcbiAqIEZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHk7IHRoaXMgd2lsbCBicmVhayB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgZXhpc3Rpbmcgb2JzZXJ2YWJsZXMsXG4gKiBidXQgY2FuIGJlIHVzZWQgdG8gZ2V0IGJhY2sgYXQgYSBzdGFibGUgc3RhdGUgYWZ0ZXIgdGhyb3dpbmcgZXJyb3JzXG4gKi9cbmZ1bmN0aW9uIHJlc2V0R2xvYmFsU3RhdGUoKSB7XG4gICAgdmFyIGRlZmF1bHRHbG9iYWxzID0gbmV3IE1vYlhHbG9iYWxzKCk7XG4gICAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRHbG9iYWxzKVxuICAgICAgICBpZiAocGVyc2lzdGVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSlcbiAgICAgICAgICAgIGdsb2JhbFN0YXRlW2tleV0gPSBkZWZhdWx0R2xvYmFsc1trZXldO1xuICAgIGdsb2JhbFN0YXRlLmFsbG93U3RhdGVDaGFuZ2VzID0gIWdsb2JhbFN0YXRlLmVuZm9yY2VBY3Rpb25zO1xufVxuXG5mdW5jdGlvbiBoYXNPYnNlcnZlcnMob2JzZXJ2YWJsZSkge1xuICAgIHJldHVybiBvYnNlcnZhYmxlLm9ic2VydmVycyAmJiBvYnNlcnZhYmxlLm9ic2VydmVycy5zaXplID4gMDtcbn1cbmZ1bmN0aW9uIGdldE9ic2VydmVycyhvYnNlcnZhYmxlKSB7XG4gICAgcmV0dXJuIG9ic2VydmFibGUub2JzZXJ2ZXJzO1xufVxuLy8gZnVuY3Rpb24gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGU6IElPYnNlcnZhYmxlKSB7XG4vLyAgICAgY29uc3QgbGlzdCA9IG9ic2VydmFibGUub2JzZXJ2ZXJzXG4vLyAgICAgY29uc3QgbWFwID0gb2JzZXJ2YWJsZS5vYnNlcnZlcnNJbmRleGVzXG4vLyAgICAgY29uc3QgbCA9IGxpc3QubGVuZ3RoXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbi8vICAgICAgICAgY29uc3QgaWQgPSBsaXN0W2ldLl9fbWFwaWRcbi8vICAgICAgICAgaWYgKGkpIHtcbi8vICAgICAgICAgICAgIGludmFyaWFudChtYXBbaWRdID09PSBpLCBcIklOVEVSTkFMIEVSUk9SIG1hcHMgZGVyaXZhdGlvbi5fX21hcGlkIHRvIGluZGV4IGluIGxpc3RcIikgLy8gZm9yIHBlcmZvcm1hbmNlXG4vLyAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICBpbnZhcmlhbnQoIShpZCBpbiBtYXApLCBcIklOVEVSTkFMIEVSUk9SIG9ic2VydmVyIG9uIGluZGV4IDAgc2hvdWxkbid0IGJlIGhlbGQgaW4gbWFwLlwiKSAvLyBmb3IgcGVyZm9ybWFuY2Vcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICBpbnZhcmlhbnQoXG4vLyAgICAgICAgIGxpc3QubGVuZ3RoID09PSAwIHx8IE9iamVjdC5rZXlzKG1hcCkubGVuZ3RoID09PSBsaXN0Lmxlbmd0aCAtIDEsXG4vLyAgICAgICAgIFwiSU5URVJOQUwgRVJST1IgdGhlcmUgaXMgbm8ganVuayBpbiBtYXBcIlxuLy8gICAgIClcbi8vIH1cbmZ1bmN0aW9uIGFkZE9ic2VydmVyKG9ic2VydmFibGUsIG5vZGUpIHtcbiAgICAvLyBpbnZhcmlhbnQobm9kZS5kZXBlbmRlbmNpZXNTdGF0ZSAhPT0gLTEsIFwiSU5URVJOQUwgRVJST1IsIGNhbiBhZGQgb25seSBkZXBlbmRlbmNpZXNTdGF0ZSAhPT0gLTFcIik7XG4gICAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5pbmRleE9mKG5vZGUpID09PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiBhZGQgYWxyZWFkeSBhZGRlZCBub2RlXCIpO1xuICAgIC8vIGludmFyaWFudE9ic2VydmVycyhvYnNlcnZhYmxlKTtcbiAgICBvYnNlcnZhYmxlLm9ic2VydmVycy5hZGQobm9kZSk7XG4gICAgaWYgKG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA+IG5vZGUuZGVwZW5kZW5jaWVzU3RhdGUpXG4gICAgICAgIG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IG5vZGUuZGVwZW5kZW5jaWVzU3RhdGU7XG4gICAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xuICAgIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSAhPT0gLTEsIFwiSU5URVJOQUwgRVJST1IgZGlkbid0IGFkZCBub2RlXCIpO1xufVxuZnVuY3Rpb24gcmVtb3ZlT2JzZXJ2ZXIob2JzZXJ2YWJsZSwgbm9kZSkge1xuICAgIC8vIGludmFyaWFudChnbG9iYWxTdGF0ZS5pbkJhdGNoID4gMCwgXCJJTlRFUk5BTCBFUlJPUiwgcmVtb3ZlIHNob3VsZCBiZSBjYWxsZWQgb25seSBpbnNpZGUgYmF0Y2hcIik7XG4gICAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5pbmRleE9mKG5vZGUpICE9PSAtMSwgXCJJTlRFUk5BTCBFUlJPUiByZW1vdmUgYWxyZWFkeSByZW1vdmVkIG5vZGVcIik7XG4gICAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xuICAgIG9ic2VydmFibGUub2JzZXJ2ZXJzLmRlbGV0ZShub2RlKTtcbiAgICBpZiAob2JzZXJ2YWJsZS5vYnNlcnZlcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAvLyBkZWxldGluZyBsYXN0IG9ic2VydmVyXG4gICAgICAgIHF1ZXVlRm9yVW5vYnNlcnZhdGlvbihvYnNlcnZhYmxlKTtcbiAgICB9XG4gICAgLy8gaW52YXJpYW50T2JzZXJ2ZXJzKG9ic2VydmFibGUpO1xuICAgIC8vIGludmFyaWFudChvYnNlcnZhYmxlLl9vYnNlcnZlcnMuaW5kZXhPZihub2RlKSA9PT0gLTEsIFwiSU5URVJOQUwgRVJST1IgcmVtb3ZlIGFscmVhZHkgcmVtb3ZlZCBub2RlMlwiKTtcbn1cbmZ1bmN0aW9uIHF1ZXVlRm9yVW5vYnNlcnZhdGlvbihvYnNlcnZhYmxlKSB7XG4gICAgaWYgKG9ic2VydmFibGUuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gaW52YXJpYW50KG9ic2VydmFibGUuX29ic2VydmVycy5sZW5ndGggPT09IDAsIFwiSU5URVJOQUwgRVJST1IsIHNob3VsZCBvbmx5IHF1ZXVlIGZvciB1bm9ic2VydmF0aW9uIHVub2JzZXJ2ZWQgb2JzZXJ2YWJsZXNcIik7XG4gICAgICAgIG9ic2VydmFibGUuaXNQZW5kaW5nVW5vYnNlcnZhdGlvbiA9IHRydWU7XG4gICAgICAgIGdsb2JhbFN0YXRlLnBlbmRpbmdVbm9ic2VydmF0aW9ucy5wdXNoKG9ic2VydmFibGUpO1xuICAgIH1cbn1cbi8qKlxuICogQmF0Y2ggc3RhcnRzIGEgdHJhbnNhY3Rpb24sIGF0IGxlYXN0IGZvciBwdXJwb3NlcyBvZiBtZW1vaXppbmcgQ29tcHV0ZWRWYWx1ZXMgd2hlbiBub3RoaW5nIGVsc2UgZG9lcy5cbiAqIER1cmluZyBhIGJhdGNoIGBvbkJlY29tZVVub2JzZXJ2ZWRgIHdpbGwgYmUgY2FsbGVkIGF0IG1vc3Qgb25jZSBwZXIgb2JzZXJ2YWJsZS5cbiAqIEF2b2lkcyB1bm5lY2Vzc2FyeSByZWNhbGN1bGF0aW9ucy5cbiAqL1xuZnVuY3Rpb24gc3RhcnRCYXRjaCgpIHtcbiAgICBnbG9iYWxTdGF0ZS5pbkJhdGNoKys7XG59XG5mdW5jdGlvbiBlbmRCYXRjaCgpIHtcbiAgICBpZiAoLS1nbG9iYWxTdGF0ZS5pbkJhdGNoID09PSAwKSB7XG4gICAgICAgIHJ1blJlYWN0aW9ucygpO1xuICAgICAgICAvLyB0aGUgYmF0Y2ggaXMgYWN0dWFsbHkgYWJvdXQgdG8gZmluaXNoLCBhbGwgdW5vYnNlcnZpbmcgc2hvdWxkIGhhcHBlbiBoZXJlLlxuICAgICAgICB2YXIgbGlzdCA9IGdsb2JhbFN0YXRlLnBlbmRpbmdVbm9ic2VydmF0aW9ucztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IGxpc3RbaV07XG4gICAgICAgICAgICBvYnNlcnZhYmxlLmlzUGVuZGluZ1Vub2JzZXJ2YXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChvYnNlcnZhYmxlLm9ic2VydmVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9ic2VydmFibGUuaXNCZWluZ09ic2VydmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgb2JzZXJ2YWJsZSBoYWQgcmVhY3RpdmUgb2JzZXJ2ZXJzLCB0cmlnZ2VyIHRoZSBob29rc1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZhYmxlLmlzQmVpbmdPYnNlcnZlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZhYmxlLm9uQmVjb21lVW5vYnNlcnZlZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob2JzZXJ2YWJsZSBpbnN0YW5jZW9mIENvbXB1dGVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29tcHV0ZWQgdmFsdWVzIGFyZSBhdXRvbWF0aWNhbGx5IHRlYXJlZCBkb3duIHdoZW4gdGhlIGxhc3Qgb2JzZXJ2ZXIgbGVhdmVzXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgcHJvY2VzcyBoYXBwZW5zIHJlY3Vyc2l2ZWx5LCB0aGlzIGNvbXB1dGVkIG1pZ2h0IGJlIHRoZSBsYXN0IG9ic2VydmFiZSBvZiBhbm90aGVyLCBldGMuLlxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZhYmxlLnN1c3BlbmQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsU3RhdGUucGVuZGluZ1Vub2JzZXJ2YXRpb25zID0gW107XG4gICAgfVxufVxuZnVuY3Rpb24gcmVwb3J0T2JzZXJ2ZWQob2JzZXJ2YWJsZSkge1xuICAgIGNoZWNrSWZTdGF0ZVJlYWRzQXJlQWxsb3dlZChvYnNlcnZhYmxlKTtcbiAgICB2YXIgZGVyaXZhdGlvbiA9IGdsb2JhbFN0YXRlLnRyYWNraW5nRGVyaXZhdGlvbjtcbiAgICBpZiAoZGVyaXZhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2ltcGxlIG9wdGltaXphdGlvbiwgZ2l2ZSBlYWNoIGRlcml2YXRpb24gcnVuIGFuIHVuaXF1ZSBpZCAocnVuSWQpXG4gICAgICAgICAqIENoZWNrIGlmIGxhc3QgdGltZSB0aGlzIG9ic2VydmFibGUgd2FzIGFjY2Vzc2VkIHRoZSBzYW1lIHJ1bklkIGlzIHVzZWRcbiAgICAgICAgICogaWYgdGhpcyBpcyB0aGUgY2FzZSwgdGhlIHJlbGF0aW9uIGlzIGFscmVhZHkga25vd25cbiAgICAgICAgICovXG4gICAgICAgIGlmIChkZXJpdmF0aW9uLnJ1bklkICE9PSBvYnNlcnZhYmxlLmxhc3RBY2Nlc3NlZEJ5KSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlLmxhc3RBY2Nlc3NlZEJ5ID0gZGVyaXZhdGlvbi5ydW5JZDtcbiAgICAgICAgICAgIC8vIFRyaWVkIHN0b3JpbmcgbmV3T2JzZXJ2aW5nLCBvciBvYnNlcnZpbmcsIG9yIGJvdGggYXMgU2V0LCBidXQgcGVyZm9ybWFuY2UgZGlkbid0IGNvbWUgY2xvc2UuLi5cbiAgICAgICAgICAgIGRlcml2YXRpb24ubmV3T2JzZXJ2aW5nW2Rlcml2YXRpb24udW5ib3VuZERlcHNDb3VudCsrXSA9IG9ic2VydmFibGU7XG4gICAgICAgICAgICBpZiAoIW9ic2VydmFibGUuaXNCZWluZ09ic2VydmVkKSB7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZS5pc0JlaW5nT2JzZXJ2ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG9ic2VydmFibGUub25CZWNvbWVPYnNlcnZlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChvYnNlcnZhYmxlLm9ic2VydmVycy5zaXplID09PSAwICYmIGdsb2JhbFN0YXRlLmluQmF0Y2ggPiAwKSB7XG4gICAgICAgIHF1ZXVlRm9yVW5vYnNlcnZhdGlvbihvYnNlcnZhYmxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuLy8gZnVuY3Rpb24gaW52YXJpYW50TE9TKG9ic2VydmFibGU6IElPYnNlcnZhYmxlLCBtc2c6IHN0cmluZykge1xuLy8gICAgIC8vIGl0J3MgZXhwZW5zaXZlIHNvIGJldHRlciBub3QgcnVuIGl0IGluIHByb2R1Y2l0b24uIGJ1dCB0ZW1wb3JhcmlseSBoZWxwZnVsIGZvciB0ZXN0aW5nXG4vLyAgICAgY29uc3QgbWluID0gZ2V0T2JzZXJ2ZXJzKG9ic2VydmFibGUpLnJlZHVjZSgoYSwgYikgPT4gTWF0aC5taW4oYSwgYi5kZXBlbmRlbmNpZXNTdGF0ZSksIDIpXG4vLyAgICAgaWYgKG1pbiA+PSBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUpIHJldHVybiAvLyA8LSB0aGUgb25seSBhc3N1bXB0aW9uIGFib3V0IGBsb3dlc3RPYnNlcnZlclN0YXRlYFxuLy8gICAgIHRocm93IG5ldyBFcnJvcihcbi8vICAgICAgICAgXCJsb3dlc3RPYnNlcnZlclN0YXRlIGlzIHdyb25nIGZvciBcIiArXG4vLyAgICAgICAgICAgICBtc2cgK1xuLy8gICAgICAgICAgICAgXCIgYmVjYXVzZSBcIiArXG4vLyAgICAgICAgICAgICBtaW4gK1xuLy8gICAgICAgICAgICAgXCIgPCBcIiArXG4vLyAgICAgICAgICAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGVcbi8vICAgICApXG4vLyB9XG4vKipcbiAqIE5PVEU6IGN1cnJlbnQgcHJvcGFnYXRpb24gbWVjaGFuaXNtIHdpbGwgaW4gY2FzZSBvZiBzZWxmIHJlcnVuaW5nIGF1dG9ydW5zIGJlaGF2ZSB1bmV4cGVjdGVkbHlcbiAqIEl0IHdpbGwgcHJvcGFnYXRlIGNoYW5nZXMgdG8gb2JzZXJ2ZXJzIGZyb20gcHJldmlvdXMgcnVuXG4gKiBJdCdzIGhhcmQgb3IgbWF5YmUgaW1wb3NzaWJsZSAod2l0aCByZWFzb25hYmxlIHBlcmYpIHRvIGdldCBpdCByaWdodCB3aXRoIGN1cnJlbnQgYXBwcm9hY2hcbiAqIEhvcGVmdWxseSBzZWxmIHJlcnVuaW5nIGF1dG9ydW5zIGFyZW4ndCBhIGZlYXR1cmUgcGVvcGxlIHNob3VsZCBkZXBlbmQgb25cbiAqIEFsc28gbW9zdCBiYXNpYyB1c2UgY2FzZXMgc2hvdWxkIGJlIG9rXG4gKi9cbi8vIENhbGxlZCBieSBBdG9tIHdoZW4gaXRzIHZhbHVlIGNoYW5nZXNcbmZ1bmN0aW9uIHByb3BhZ2F0ZUNoYW5nZWQob2JzZXJ2YWJsZSkge1xuICAgIC8vIGludmFyaWFudExPUyhvYnNlcnZhYmxlLCBcImNoYW5nZWQgc3RhcnRcIik7XG4gICAgaWYgKG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5TVEFMRSlcbiAgICAgICAgcmV0dXJuO1xuICAgIG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuU1RBTEU7XG4gICAgLy8gSWRlYWxseSB3ZSB1c2UgZm9yLi5vZiBoZXJlLCBidXQgdGhlIGRvd25jb21waWxlZCB2ZXJzaW9uIGlzIHJlYWxseSBzbG93Li4uXG4gICAgb2JzZXJ2YWJsZS5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5VUF9UT19EQVRFKSB7XG4gICAgICAgICAgICBpZiAoZC5pc1RyYWNpbmcgIT09IFRyYWNlTW9kZS5OT05FKSB7XG4gICAgICAgICAgICAgICAgbG9nVHJhY2VJbmZvKGQsIG9ic2VydmFibGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZC5vbkJlY29tZVN0YWxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZC5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuU1RBTEU7XG4gICAgfSk7XG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY2hhbmdlZCBlbmRcIik7XG59XG4vLyBDYWxsZWQgYnkgQ29tcHV0ZWRWYWx1ZSB3aGVuIGl0IHJlY2FsY3VsYXRlIGFuZCBpdHMgdmFsdWUgY2hhbmdlZFxuZnVuY3Rpb24gcHJvcGFnYXRlQ2hhbmdlQ29uZmlybWVkKG9ic2VydmFibGUpIHtcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJjb25maXJtZWQgc3RhcnRcIik7XG4gICAgaWYgKG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5TVEFMRSlcbiAgICAgICAgcmV0dXJuO1xuICAgIG9ic2VydmFibGUubG93ZXN0T2JzZXJ2ZXJTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuU1RBTEU7XG4gICAgb2JzZXJ2YWJsZS5vYnNlcnZlcnMuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICBpZiAoZC5kZXBlbmRlbmNpZXNTdGF0ZSA9PT0gSURlcml2YXRpb25TdGF0ZS5QT1NTSUJMWV9TVEFMRSlcbiAgICAgICAgICAgIGQuZGVwZW5kZW5jaWVzU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlNUQUxFO1xuICAgICAgICBlbHNlIGlmIChkLmRlcGVuZGVuY2llc1N0YXRlID09PSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEUgLy8gdGhpcyBoYXBwZW5zIGR1cmluZyBjb21wdXRpbmcgb2YgYGRgLCBqdXN0IGtlZXAgbG93ZXN0T2JzZXJ2ZXJTdGF0ZSB1cCB0byBkYXRlLlxuICAgICAgICApXG4gICAgICAgICAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEU7XG4gICAgfSk7XG4gICAgLy8gaW52YXJpYW50TE9TKG9ic2VydmFibGUsIFwiY29uZmlybWVkIGVuZFwiKTtcbn1cbi8vIFVzZWQgYnkgY29tcHV0ZWQgd2hlbiBpdHMgZGVwZW5kZW5jeSBjaGFuZ2VkLCBidXQgd2UgZG9uJ3Qgd2FuJ3QgdG8gaW1tZWRpYXRlbHkgcmVjb21wdXRlLlxuZnVuY3Rpb24gcHJvcGFnYXRlTWF5YmVDaGFuZ2VkKG9ic2VydmFibGUpIHtcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJtYXliZSBzdGFydFwiKTtcbiAgICBpZiAob2JzZXJ2YWJsZS5sb3dlc3RPYnNlcnZlclN0YXRlICE9PSBJRGVyaXZhdGlvblN0YXRlLlVQX1RPX0RBVEUpXG4gICAgICAgIHJldHVybjtcbiAgICBvYnNlcnZhYmxlLmxvd2VzdE9ic2VydmVyU3RhdGUgPSBJRGVyaXZhdGlvblN0YXRlLlBPU1NJQkxZX1NUQUxFO1xuICAgIG9ic2VydmFibGUub2JzZXJ2ZXJzLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgaWYgKGQuZGVwZW5kZW5jaWVzU3RhdGUgPT09IElEZXJpdmF0aW9uU3RhdGUuVVBfVE9fREFURSkge1xuICAgICAgICAgICAgZC5kZXBlbmRlbmNpZXNTdGF0ZSA9IElEZXJpdmF0aW9uU3RhdGUuUE9TU0lCTFlfU1RBTEU7XG4gICAgICAgICAgICBpZiAoZC5pc1RyYWNpbmcgIT09IFRyYWNlTW9kZS5OT05FKSB7XG4gICAgICAgICAgICAgICAgbG9nVHJhY2VJbmZvKGQsIG9ic2VydmFibGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZC5vbkJlY29tZVN0YWxlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBpbnZhcmlhbnRMT1Mob2JzZXJ2YWJsZSwgXCJtYXliZSBlbmRcIik7XG59XG5mdW5jdGlvbiBsb2dUcmFjZUluZm8oZGVyaXZhdGlvbiwgb2JzZXJ2YWJsZSkge1xuICAgIGNvbnNvbGUubG9nKFwiW21vYngudHJhY2VdICdcIiArIGRlcml2YXRpb24ubmFtZSArIFwiJyBpcyBpbnZhbGlkYXRlZCBkdWUgdG8gYSBjaGFuZ2UgaW46ICdcIiArIG9ic2VydmFibGUubmFtZSArIFwiJ1wiKTtcbiAgICBpZiAoZGVyaXZhdGlvbi5pc1RyYWNpbmcgPT09IFRyYWNlTW9kZS5CUkVBSykge1xuICAgICAgICB2YXIgbGluZXMgPSBbXTtcbiAgICAgICAgcHJpbnREZXBUcmVlKGdldERlcGVuZGVuY3lUcmVlKGRlcml2YXRpb24pLCBsaW5lcywgMSk7XG4gICAgICAgIC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICBuZXcgRnVuY3Rpb24oXCJkZWJ1Z2dlcjtcXG4vKlxcblRyYWNpbmcgJ1wiICsgZGVyaXZhdGlvbi5uYW1lICsgXCInXFxuXFxuWW91IGFyZSBlbnRlcmluZyB0aGlzIGJyZWFrIHBvaW50IGJlY2F1c2UgZGVyaXZhdGlvbiAnXCIgKyBkZXJpdmF0aW9uLm5hbWUgKyBcIicgaXMgYmVpbmcgdHJhY2VkIGFuZCAnXCIgKyBvYnNlcnZhYmxlLm5hbWUgKyBcIicgaXMgbm93IGZvcmNpbmcgaXQgdG8gdXBkYXRlLlxcbkp1c3QgZm9sbG93IHRoZSBzdGFja3RyYWNlIHlvdSBzaG91bGQgbm93IHNlZSBpbiB0aGUgZGV2dG9vbHMgdG8gc2VlIHByZWNpc2VseSB3aGF0IHBpZWNlIG9mIHlvdXIgY29kZSBpcyBjYXVzaW5nIHRoaXMgdXBkYXRlXFxuVGhlIHN0YWNrZnJhbWUgeW91IGFyZSBsb29raW5nIGZvciBpcyBhdCBsZWFzdCB+Ni04IHN0YWNrLWZyYW1lcyB1cC5cXG5cXG5cIiArIChkZXJpdmF0aW9uIGluc3RhbmNlb2YgQ29tcHV0ZWRWYWx1ZSA/IGRlcml2YXRpb24uZGVyaXZhdGlvbi50b1N0cmluZygpLnJlcGxhY2UoL1sqXVxcLy9nLCBcIi9cIikgOiBcIlwiKSArIFwiXFxuXFxuVGhlIGRlcGVuZGVuY2llcyBmb3IgdGhpcyBkZXJpdmF0aW9uIGFyZTpcXG5cXG5cIiArIGxpbmVzLmpvaW4oXCJcXG5cIikgKyBcIlxcbiovXFxuICAgIFwiKSgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHByaW50RGVwVHJlZSh0cmVlLCBsaW5lcywgZGVwdGgpIHtcbiAgICBpZiAobGluZXMubGVuZ3RoID49IDEwMDApIHtcbiAgICAgICAgbGluZXMucHVzaChcIihhbmQgbWFueSBtb3JlKVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsaW5lcy5wdXNoKFwiXCIgKyBuZXcgQXJyYXkoZGVwdGgpLmpvaW4oXCJcXHRcIikgKyB0cmVlLm5hbWUpOyAvLyBNV0U6IG5vdCB0aGUgZmFzdGVzdCwgYnV0IHRoZSBlYXNpZXN0IHdheSA6KVxuICAgIGlmICh0cmVlLmRlcGVuZGVuY2llcylcbiAgICAgICAgdHJlZS5kZXBlbmRlbmNpZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIHByaW50RGVwVHJlZShjaGlsZCwgbGluZXMsIGRlcHRoICsgMSk7IH0pO1xufVxuXG52YXIgUmVhY3Rpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVhY3Rpb24obmFtZSwgb25JbnZhbGlkYXRlLCBlcnJvckhhbmRsZXIsIHJlcXVpcmVzT2JzZXJ2YWJsZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIlJlYWN0aW9uQFwiICsgZ2V0TmV4dElkKCk7IH1cbiAgICAgICAgaWYgKHJlcXVpcmVzT2JzZXJ2YWJsZSA9PT0gdm9pZCAwKSB7IHJlcXVpcmVzT2JzZXJ2YWJsZSA9IGZhbHNlOyB9XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMub25JbnZhbGlkYXRlID0gb25JbnZhbGlkYXRlO1xuICAgICAgICB0aGlzLmVycm9ySGFuZGxlciA9IGVycm9ySGFuZGxlcjtcbiAgICAgICAgdGhpcy5yZXF1aXJlc09ic2VydmFibGUgPSByZXF1aXJlc09ic2VydmFibGU7XG4gICAgICAgIHRoaXMub2JzZXJ2aW5nID0gW107IC8vIG5vZGVzIHdlIGFyZSBsb29raW5nIGF0LiBPdXIgdmFsdWUgZGVwZW5kcyBvbiB0aGVzZSBub2Rlc1xuICAgICAgICB0aGlzLm5ld09ic2VydmluZyA9IFtdO1xuICAgICAgICB0aGlzLmRlcGVuZGVuY2llc1N0YXRlID0gSURlcml2YXRpb25TdGF0ZS5OT1RfVFJBQ0tJTkc7XG4gICAgICAgIHRoaXMuZGlmZlZhbHVlID0gMDtcbiAgICAgICAgdGhpcy5ydW5JZCA9IDA7XG4gICAgICAgIHRoaXMudW5ib3VuZERlcHNDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuX19tYXBpZCA9IFwiI1wiICsgZ2V0TmV4dElkKCk7XG4gICAgICAgIHRoaXMuaXNEaXNwb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1RyYWNrUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1RyYWNpbmcgPSBUcmFjZU1vZGUuTk9ORTtcbiAgICB9XG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLm9uQmVjb21lU3RhbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKTtcbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5zY2hlZHVsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc1NjaGVkdWxlZCkge1xuICAgICAgICAgICAgdGhpcy5faXNTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZ2xvYmFsU3RhdGUucGVuZGluZ1JlYWN0aW9ucy5wdXNoKHRoaXMpO1xuICAgICAgICAgICAgcnVuUmVhY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5pc1NjaGVkdWxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzU2NoZWR1bGVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogaW50ZXJuYWwsIHVzZSBzY2hlZHVsZSgpIGlmIHlvdSBpbnRlbmQgdG8ga2ljayBvZmYgYSByZWFjdGlvblxuICAgICAqL1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5ydW5SZWFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgIHN0YXJ0QmF0Y2goKTtcbiAgICAgICAgICAgIHRoaXMuX2lzU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29tcHV0ZSh0aGlzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzVHJhY2tQZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSW52YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNUcmFja1BlbmRpbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU3B5RW5hYmxlZCgpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9uSW52YWxpZGF0ZSBkaWRuJ3QgdHJpZ2dlciB0cmFjayByaWdodCBhd2F5Li5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNweVJlcG9ydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2NoZWR1bGVkLXJlYWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0RXhjZXB0aW9uSW5EZXJpdmF0aW9uKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVuZEJhdGNoKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS50cmFjayA9IGZ1bmN0aW9uIChmbikge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oXCJSZWFjdGlvbiBhbHJlYWR5IGRpc3Bvc2VkXCIpIC8vIE5vdGU6IE5vdCBhIHdhcm5pbmcgLyBlcnJvciBpbiBtb2J4IDQgZWl0aGVyXG4gICAgICAgIH1cbiAgICAgICAgc3RhcnRCYXRjaCgpO1xuICAgICAgICB2YXIgbm90aWZ5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgICAgIHZhciBzdGFydFRpbWU7XG4gICAgICAgIGlmIChub3RpZnkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoe1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInJlYWN0aW9uXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzUnVubmluZyA9IHRydWU7XG4gICAgICAgIHZhciByZXN1bHQgPSB0cmFja0Rlcml2ZWRGdW5jdGlvbih0aGlzLCBmbiwgdW5kZWZpbmVkKTtcbiAgICAgICAgdGhpcy5faXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzVHJhY2tQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgIC8vIGRpc3Bvc2VkIGR1cmluZyBsYXN0IHJ1bi4gQ2xlYW4gdXAgZXZlcnl0aGluZyB0aGF0IHdhcyBib3VuZCBhZnRlciB0aGUgZGlzcG9zZSBjYWxsLlxuICAgICAgICAgICAgY2xlYXJPYnNlcnZpbmcodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQ2F1Z2h0RXhjZXB0aW9uKHJlc3VsdCkpXG4gICAgICAgICAgICB0aGlzLnJlcG9ydEV4Y2VwdGlvbkluRGVyaXZhdGlvbihyZXN1bHQuY2F1c2UpO1xuICAgICAgICBpZiAobm90aWZ5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICAgICAgc3B5UmVwb3J0RW5kKHtcbiAgICAgICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpIC0gc3RhcnRUaW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbmRCYXRjaCgpO1xuICAgIH07XG4gICAgUmVhY3Rpb24ucHJvdG90eXBlLnJlcG9ydEV4Y2VwdGlvbkluRGVyaXZhdGlvbiA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5lcnJvckhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyKGVycm9yLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2xvYmFsU3RhdGUuZGlzYWJsZUVycm9yQm91bmRhcmllcylcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB2YXIgbWVzc2FnZSA9IFwiW21vYnhdIEVuY291bnRlcmVkIGFuIHVuY2F1Z2h0IGV4Y2VwdGlvbiB0aGF0IHdhcyB0aHJvd24gYnkgYSByZWFjdGlvbiBvciBvYnNlcnZlciBjb21wb25lbnQsIGluOiAnXCIgKyB0aGlzICsgXCInXCI7XG4gICAgICAgIGlmIChnbG9iYWxTdGF0ZS5zdXBwcmVzc1JlYWN0aW9uRXJyb3JzKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gKGVycm9yIGluIHJlYWN0aW9uICdcIiArIHRoaXMubmFtZSArIFwiJyBzdXBwcmVzc2VkLCBmaXggZXJyb3Igb2YgY2F1c2luZyBhY3Rpb24gYmVsb3cpXCIpOyAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSwgZXJyb3IpO1xuICAgICAgICAgICAgLyoqIElmIGRlYnVnZ2luZyBicm91Z2h0IHlvdSBoZXJlLCBwbGVhc2UsIHJlYWQgdGhlIGFib3ZlIG1lc3NhZ2UgOi0pLiBUbnghICovXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzU3B5RW5hYmxlZCgpKSB7XG4gICAgICAgICAgICBzcHlSZXBvcnQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJcIiArIGVycm9yXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBnbG9iYWxTdGF0ZS5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoZikgeyByZXR1cm4gZihlcnJvciwgX3RoaXMpOyB9KTtcbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNwb3NlZCkge1xuICAgICAgICAgICAgdGhpcy5pc0Rpc3Bvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faXNSdW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgZGlzcG9zZWQgd2hpbGUgcnVubmluZywgY2xlYW4gdXAgbGF0ZXIuIE1heWJlIG5vdCBvcHRpbWFsLCBidXQgcmFyZSBjYXNlXG4gICAgICAgICAgICAgICAgc3RhcnRCYXRjaCgpO1xuICAgICAgICAgICAgICAgIGNsZWFyT2JzZXJ2aW5nKHRoaXMpO1xuICAgICAgICAgICAgICAgIGVuZEJhdGNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS5nZXREaXNwb3NlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLmRpc3Bvc2UuYmluZCh0aGlzKTtcbiAgICAgICAgclskbW9ieF0gPSB0aGlzO1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIFwiUmVhY3Rpb25bXCIgKyB0aGlzLm5hbWUgKyBcIl1cIjtcbiAgICB9O1xuICAgIFJlYWN0aW9uLnByb3RvdHlwZS50cmFjZSA9IGZ1bmN0aW9uIChlbnRlckJyZWFrUG9pbnQpIHtcbiAgICAgICAgaWYgKGVudGVyQnJlYWtQb2ludCA9PT0gdm9pZCAwKSB7IGVudGVyQnJlYWtQb2ludCA9IGZhbHNlOyB9XG4gICAgICAgIHRyYWNlKHRoaXMsIGVudGVyQnJlYWtQb2ludCk7XG4gICAgfTtcbiAgICByZXR1cm4gUmVhY3Rpb247XG59KCkpO1xuZnVuY3Rpb24gb25SZWFjdGlvbkVycm9yKGhhbmRsZXIpIHtcbiAgICBnbG9iYWxTdGF0ZS5nbG9iYWxSZWFjdGlvbkVycm9ySGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaWR4ID0gZ2xvYmFsU3RhdGUuZ2xvYmFsUmVhY3Rpb25FcnJvckhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG4gICAgICAgIGlmIChpZHggPj0gMClcbiAgICAgICAgICAgIGdsb2JhbFN0YXRlLmdsb2JhbFJlYWN0aW9uRXJyb3JIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9O1xufVxuLyoqXG4gKiBNYWdpYyBudW1iZXIgYWxlcnQhXG4gKiBEZWZpbmVzIHdpdGhpbiBob3cgbWFueSB0aW1lcyBhIHJlYWN0aW9uIGlzIGFsbG93ZWQgdG8gcmUtdHJpZ2dlciBpdHNlbGZcbiAqIHVudGlsIGl0IGlzIGFzc3VtZWQgdGhhdCB0aGlzIGlzIGdvbm5hIGJlIGEgbmV2ZXIgZW5kaW5nIGxvb3AuLi5cbiAqL1xudmFyIE1BWF9SRUFDVElPTl9JVEVSQVRJT05TID0gMTAwO1xudmFyIHJlYWN0aW9uU2NoZWR1bGVyID0gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYoKTsgfTtcbmZ1bmN0aW9uIHJ1blJlYWN0aW9ucygpIHtcbiAgICAvLyBUcmFtcG9saW5pbmcsIGlmIHJ1blJlYWN0aW9ucyBhcmUgYWxyZWFkeSBydW5uaW5nLCBuZXcgcmVhY3Rpb25zIHdpbGwgYmUgcGlja2VkIHVwXG4gICAgaWYgKGdsb2JhbFN0YXRlLmluQmF0Y2ggPiAwIHx8IGdsb2JhbFN0YXRlLmlzUnVubmluZ1JlYWN0aW9ucylcbiAgICAgICAgcmV0dXJuO1xuICAgIHJlYWN0aW9uU2NoZWR1bGVyKHJ1blJlYWN0aW9uc0hlbHBlcik7XG59XG5mdW5jdGlvbiBydW5SZWFjdGlvbnNIZWxwZXIoKSB7XG4gICAgZ2xvYmFsU3RhdGUuaXNSdW5uaW5nUmVhY3Rpb25zID0gdHJ1ZTtcbiAgICB2YXIgYWxsUmVhY3Rpb25zID0gZ2xvYmFsU3RhdGUucGVuZGluZ1JlYWN0aW9ucztcbiAgICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gICAgLy8gV2hpbGUgcnVubmluZyByZWFjdGlvbnMsIG5ldyByZWFjdGlvbnMgbWlnaHQgYmUgdHJpZ2dlcmVkLlxuICAgIC8vIEhlbmNlIHdlIHdvcmsgd2l0aCB0d28gdmFyaWFibGVzIGFuZCBjaGVjayB3aGV0aGVyXG4gICAgLy8gd2UgY29udmVyZ2UgdG8gbm8gcmVtYWluaW5nIHJlYWN0aW9ucyBhZnRlciBhIHdoaWxlLlxuICAgIHdoaWxlIChhbGxSZWFjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoKytpdGVyYXRpb25zID09PSBNQVhfUkVBQ1RJT05fSVRFUkFUSU9OUykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlJlYWN0aW9uIGRvZXNuJ3QgY29udmVyZ2UgdG8gYSBzdGFibGUgc3RhdGUgYWZ0ZXIgXCIgKyBNQVhfUkVBQ1RJT05fSVRFUkFUSU9OUyArIFwiIGl0ZXJhdGlvbnMuXCIgK1xuICAgICAgICAgICAgICAgIChcIiBQcm9iYWJseSB0aGVyZSBpcyBhIGN5Y2xlIGluIHRoZSByZWFjdGl2ZSBmdW5jdGlvbjogXCIgKyBhbGxSZWFjdGlvbnNbMF0pKTtcbiAgICAgICAgICAgIGFsbFJlYWN0aW9ucy5zcGxpY2UoMCk7IC8vIGNsZWFyIHJlYWN0aW9uc1xuICAgICAgICB9XG4gICAgICAgIHZhciByZW1haW5pbmdSZWFjdGlvbnMgPSBhbGxSZWFjdGlvbnMuc3BsaWNlKDApO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHJlbWFpbmluZ1JlYWN0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspXG4gICAgICAgICAgICByZW1haW5pbmdSZWFjdGlvbnNbaV0ucnVuUmVhY3Rpb24oKTtcbiAgICB9XG4gICAgZ2xvYmFsU3RhdGUuaXNSdW5uaW5nUmVhY3Rpb25zID0gZmFsc2U7XG59XG52YXIgaXNSZWFjdGlvbiA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJSZWFjdGlvblwiLCBSZWFjdGlvbik7XG5mdW5jdGlvbiBzZXRSZWFjdGlvblNjaGVkdWxlcihmbikge1xuICAgIHZhciBiYXNlU2NoZWR1bGVyID0gcmVhY3Rpb25TY2hlZHVsZXI7XG4gICAgcmVhY3Rpb25TY2hlZHVsZXIgPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZm4oZnVuY3Rpb24gKCkgeyByZXR1cm4gYmFzZVNjaGVkdWxlcihmKTsgfSk7IH07XG59XG5cbmZ1bmN0aW9uIGlzU3B5RW5hYmxlZCgpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmICEhZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzLmxlbmd0aDtcbn1cbmZ1bmN0aW9uIHNweVJlcG9ydChldmVudCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgIHJldHVybjsgLy8gZGVhZCBjb2RlIGVsaW1pbmF0aW9uIGNhbiBkbyB0aGUgcmVzdFxuICAgIGlmICghZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzLmxlbmd0aClcbiAgICAgICAgcmV0dXJuO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnM7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbDsgaSsrKVxuICAgICAgICBsaXN0ZW5lcnNbaV0oZXZlbnQpO1xufVxuZnVuY3Rpb24gc3B5UmVwb3J0U3RhcnQoZXZlbnQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIGNoYW5nZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBldmVudCksIHsgc3B5UmVwb3J0U3RhcnQ6IHRydWUgfSk7XG4gICAgc3B5UmVwb3J0KGNoYW5nZSk7XG59XG52YXIgRU5EX0VWRU5UID0geyBzcHlSZXBvcnRFbmQ6IHRydWUgfTtcbmZ1bmN0aW9uIHNweVJlcG9ydEVuZChjaGFuZ2UpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICByZXR1cm47XG4gICAgaWYgKGNoYW5nZSlcbiAgICAgICAgc3B5UmVwb3J0KF9fYXNzaWduKF9fYXNzaWduKHt9LCBjaGFuZ2UpLCB7IHNweVJlcG9ydEVuZDogdHJ1ZSB9KSk7XG4gICAgZWxzZVxuICAgICAgICBzcHlSZXBvcnQoRU5EX0VWRU5UKTtcbn1cbmZ1bmN0aW9uIHNweShsaXN0ZW5lcikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnguc3B5XSBJcyBhIG5vLW9wIGluIHByb2R1Y3Rpb24gYnVpbGRzXCIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZ2xvYmFsU3RhdGUuc3B5TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMgPSBnbG9iYWxTdGF0ZS5zcHlMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChsKSB7IHJldHVybiBsICE9PSBsaXN0ZW5lcjsgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZG9udFJlYXNzaWduRmllbGRzKCkge1xuICAgIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwiQGFjdGlvbiBmaWVsZHMgYXJlIG5vdCByZWFzc2lnbmFibGVcIik7XG59XG5mdW5jdGlvbiBuYW1lZEFjdGlvbkRlY29yYXRvcihuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHByb3AsIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgaWYgKGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZGVzY3JpcHRvci5nZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKFwiQGFjdGlvbiBjYW5ub3QgYmUgdXNlZCB3aXRoIGdldHRlcnNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBiYWJlbCAvIHR5cGVzY3JpcHRcbiAgICAgICAgICAgIC8vIEBhY3Rpb24gbWV0aG9kKCkgeyB9XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRvci52YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIHR5cGVzY3JpcHRcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY3JlYXRlQWN0aW9uKG5hbWUsIGRlc2NyaXB0b3IudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSAvLyBmb3IgdHlwZXNjcmlwdCwgdGhpcyBtdXN0IGJlIHdyaXRhYmxlLCBvdGhlcndpc2UgaXQgY2Fubm90IGluaGVyaXQgOi8gKHNlZSBpbmhlcml0YWJsZSBhY3Rpb25zIHRlc3QpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGJhYmVsIG9ubHk6IEBhY3Rpb24gbWV0aG9kID0gKCkgPT4ge31cbiAgICAgICAgICAgIHZhciBpbml0aWFsaXplcl8xID0gZGVzY3JpcHRvci5pbml0aWFsaXplcjtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxpemVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE4uQjogd2UgY2FuJ3QgaW1tZWRpYXRlbHkgaW52b2tlIGluaXRpYWxpemVyOyB0aGlzIHdvdWxkIGJlIHdyb25nXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24obmFtZSwgaW5pdGlhbGl6ZXJfMS5jYWxsKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIGJvdW5kIGluc3RhbmNlIG1ldGhvZHNcbiAgICAgICAgcmV0dXJuIGFjdGlvbkZpZWxkRGVjb3JhdG9yKG5hbWUpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFjdGlvbkZpZWxkRGVjb3JhdG9yKG5hbWUpIHtcbiAgICAvLyBTaW1wbGUgcHJvcGVydHkgdGhhdCB3cml0ZXMgb24gZmlyc3QgaW52b2NhdGlvbiB0byB0aGUgY3VycmVudCBpbnN0YW5jZVxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBwcm9wLCBkZXNjcmlwdG9yKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3AsIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFkZEhpZGRlblByb3AodGhpcywgcHJvcCwgYWN0aW9uKG5hbWUsIHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiBib3VuZEFjdGlvbkRlY29yYXRvcih0YXJnZXQsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvciwgYXBwbHlUb0luc3RhbmNlKSB7XG4gICAgaWYgKGFwcGx5VG9JbnN0YW5jZSA9PT0gdHJ1ZSkge1xuICAgICAgICBkZWZpbmVCb3VuZEFjdGlvbih0YXJnZXQsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvci52YWx1ZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoZGVzY3JpcHRvcikge1xuICAgICAgICAvLyBpZiAoZGVzY3JpcHRvci52YWx1ZSlcbiAgICAgICAgLy8gVHlwZXNjcmlwdCAvIEJhYmVsOiBAYWN0aW9uLmJvdW5kIG1ldGhvZCgpIHsgfVxuICAgICAgICAvLyBhbHNvOiBiYWJlbCBAYWN0aW9uLmJvdW5kIG1ldGhvZCA9ICgpID0+IHt9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlZmluZUJvdW5kQWN0aW9uKHRoaXMsIHByb3BlcnR5TmFtZSwgZGVzY3JpcHRvci52YWx1ZSB8fCBkZXNjcmlwdG9yLmluaXRpYWxpemVyLmNhbGwodGhpcykpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBkb250UmVhc3NpZ25GaWVsZHNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gZmllbGQgZGVjb3JhdG9yIFR5cGVzY3JpcHQgQGFjdGlvbi5ib3VuZCBtZXRob2QgPSAoKSA9PiB7fVxuICAgIHJldHVybiB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIGRlZmluZUJvdW5kQWN0aW9uKHRoaXMsIHByb3BlcnR5TmFtZSwgdik7XG4gICAgICAgIH0sXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbnZhciBhY3Rpb24gPSBmdW5jdGlvbiBhY3Rpb24oYXJnMSwgYXJnMiwgYXJnMywgYXJnNCkge1xuICAgIC8vIGFjdGlvbihmbigpIHt9KVxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhcmcxID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBjcmVhdGVBY3Rpb24oYXJnMS5uYW1lIHx8IFwiPHVubmFtZWQgYWN0aW9uPlwiLCBhcmcxKTtcbiAgICAvLyBhY3Rpb24oXCJuYW1lXCIsIGZuKCkge30pXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgdHlwZW9mIGFyZzIgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUFjdGlvbihhcmcxLCBhcmcyKTtcbiAgICAvLyBAYWN0aW9uKFwibmFtZVwiKSBmbigpIHt9XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIGFyZzEgPT09IFwic3RyaW5nXCIpXG4gICAgICAgIHJldHVybiBuYW1lZEFjdGlvbkRlY29yYXRvcihhcmcxKTtcbiAgICAvLyBAYWN0aW9uIGZuKCkge31cbiAgICBpZiAoYXJnNCA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBhcHBseSB0byBpbnN0YW5jZSBpbW1lZGlhdGVseVxuICAgICAgICBhZGRIaWRkZW5Qcm9wKGFyZzEsIGFyZzIsIGNyZWF0ZUFjdGlvbihhcmcxLm5hbWUgfHwgYXJnMiwgYXJnMy52YWx1ZSwgdGhpcykpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5hbWVkQWN0aW9uRGVjb3JhdG9yKGFyZzIpLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxufTtcbmFjdGlvbi5ib3VuZCA9IGJvdW5kQWN0aW9uRGVjb3JhdG9yO1xuZnVuY3Rpb24gcnVuSW5BY3Rpb24oYXJnMSwgYXJnMikge1xuICAgIHZhciBhY3Rpb25OYW1lID0gdHlwZW9mIGFyZzEgPT09IFwic3RyaW5nXCIgPyBhcmcxIDogYXJnMS5uYW1lIHx8IFwiPHVubmFtZWQgYWN0aW9uPlwiO1xuICAgIHZhciBmbiA9IHR5cGVvZiBhcmcxID09PSBcImZ1bmN0aW9uXCIgPyBhcmcxIDogYXJnMjtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIiAmJiBmbi5sZW5ndGggPT09IDAsIFwiYHJ1bkluQWN0aW9uYCBleHBlY3RzIGEgZnVuY3Rpb24gd2l0aG91dCBhcmd1bWVudHNcIik7XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uTmFtZSAhPT0gXCJzdHJpbmdcIiB8fCAhYWN0aW9uTmFtZSlcbiAgICAgICAgICAgIGZhaWwoXCJhY3Rpb25zIHNob3VsZCBoYXZlIHZhbGlkIG5hbWVzLCBnb3Q6ICdcIiArIGFjdGlvbk5hbWUgKyBcIidcIik7XG4gICAgfVxuICAgIHJldHVybiBleGVjdXRlQWN0aW9uKGFjdGlvbk5hbWUsIGZuLCB0aGlzLCB1bmRlZmluZWQpO1xufVxuZnVuY3Rpb24gaXNBY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSBcImZ1bmN0aW9uXCIgJiYgdGhpbmcuaXNNb2J4QWN0aW9uID09PSB0cnVlO1xufVxuZnVuY3Rpb24gZGVmaW5lQm91bmRBY3Rpb24odGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIGZuKSB7XG4gICAgYWRkSGlkZGVuUHJvcCh0YXJnZXQsIHByb3BlcnR5TmFtZSwgY3JlYXRlQWN0aW9uKHByb3BlcnR5TmFtZSwgZm4uYmluZCh0YXJnZXQpKSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5hbWVkIHJlYWN0aXZlIHZpZXcgYW5kIGtlZXBzIGl0IGFsaXZlLCBzbyB0aGF0IHRoZSB2aWV3IGlzIGFsd2F5c1xuICogdXBkYXRlZCBpZiBvbmUgb2YgdGhlIGRlcGVuZGVuY2llcyBjaGFuZ2VzLCBldmVuIHdoZW4gdGhlIHZpZXcgaXMgbm90IGZ1cnRoZXIgdXNlZCBieSBzb21ldGhpbmcgZWxzZS5cbiAqIEBwYXJhbSB2aWV3IFRoZSByZWFjdGl2ZSB2aWV3XG4gKiBAcmV0dXJucyBkaXNwb3NlciBmdW5jdGlvbiwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gc3RvcCB0aGUgdmlldyBmcm9tIGJlaW5nIHVwZGF0ZWQgaW4gdGhlIGZ1dHVyZS5cbiAqL1xuZnVuY3Rpb24gYXV0b3J1bih2aWV3LCBvcHRzKSB7XG4gICAgaWYgKG9wdHMgPT09IHZvaWQgMCkgeyBvcHRzID0gRU1QVFlfT0JKRUNUOyB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHZpZXcgPT09IFwiZnVuY3Rpb25cIiwgXCJBdXRvcnVuIGV4cGVjdHMgYSBmdW5jdGlvbiBhcyBmaXJzdCBhcmd1bWVudFwiKTtcbiAgICAgICAgaW52YXJpYW50KGlzQWN0aW9uKHZpZXcpID09PSBmYWxzZSwgXCJBdXRvcnVuIGRvZXMgbm90IGFjY2VwdCBhY3Rpb25zIHNpbmNlIGFjdGlvbnMgYXJlIHVudHJhY2thYmxlXCIpO1xuICAgIH1cbiAgICB2YXIgbmFtZSA9IChvcHRzICYmIG9wdHMubmFtZSkgfHwgdmlldy5uYW1lIHx8IFwiQXV0b3J1bkBcIiArIGdldE5leHRJZCgpO1xuICAgIHZhciBydW5TeW5jID0gIW9wdHMuc2NoZWR1bGVyICYmICFvcHRzLmRlbGF5O1xuICAgIHZhciByZWFjdGlvbjtcbiAgICBpZiAocnVuU3luYykge1xuICAgICAgICAvLyBub3JtYWwgYXV0b3J1blxuICAgICAgICByZWFjdGlvbiA9IG5ldyBSZWFjdGlvbihuYW1lLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnRyYWNrKHJlYWN0aW9uUnVubmVyKTtcbiAgICAgICAgfSwgb3B0cy5vbkVycm9yLCBvcHRzLnJlcXVpcmVzT2JzZXJ2YWJsZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgc2NoZWR1bGVyXzEgPSBjcmVhdGVTY2hlZHVsZXJGcm9tT3B0aW9ucyhvcHRzKTtcbiAgICAgICAgLy8gZGVib3VuY2VkIGF1dG9ydW5cbiAgICAgICAgdmFyIGlzU2NoZWR1bGVkXzEgPSBmYWxzZTtcbiAgICAgICAgcmVhY3Rpb24gPSBuZXcgUmVhY3Rpb24obmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFpc1NjaGVkdWxlZF8xKSB7XG4gICAgICAgICAgICAgICAgaXNTY2hlZHVsZWRfMSA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2NoZWR1bGVyXzEoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpc1NjaGVkdWxlZF8xID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVhY3Rpb24uaXNEaXNwb3NlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWN0aW9uLnRyYWNrKHJlYWN0aW9uUnVubmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgb3B0cy5vbkVycm9yLCBvcHRzLnJlcXVpcmVzT2JzZXJ2YWJsZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlYWN0aW9uUnVubmVyKCkge1xuICAgICAgICB2aWV3KHJlYWN0aW9uKTtcbiAgICB9XG4gICAgcmVhY3Rpb24uc2NoZWR1bGUoKTtcbiAgICByZXR1cm4gcmVhY3Rpb24uZ2V0RGlzcG9zZXIoKTtcbn1cbnZhciBydW4gPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZigpOyB9O1xuZnVuY3Rpb24gY3JlYXRlU2NoZWR1bGVyRnJvbU9wdGlvbnMob3B0cykge1xuICAgIHJldHVybiBvcHRzLnNjaGVkdWxlclxuICAgICAgICA/IG9wdHMuc2NoZWR1bGVyXG4gICAgICAgIDogb3B0cy5kZWxheVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoZikgeyByZXR1cm4gc2V0VGltZW91dChmLCBvcHRzLmRlbGF5KTsgfVxuICAgICAgICAgICAgOiBydW47XG59XG5mdW5jdGlvbiByZWFjdGlvbihleHByZXNzaW9uLCBlZmZlY3QsIG9wdHMpIHtcbiAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSBFTVBUWV9PQkpFQ1Q7IH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGludmFyaWFudCh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJmdW5jdGlvblwiLCBcIkZpcnN0IGFyZ3VtZW50IHRvIHJlYWN0aW9uIHNob3VsZCBiZSBhIGZ1bmN0aW9uXCIpO1xuICAgICAgICBpbnZhcmlhbnQodHlwZW9mIG9wdHMgPT09IFwib2JqZWN0XCIsIFwiVGhpcmQgYXJndW1lbnQgb2YgcmVhY3Rpb25zIHNob3VsZCBiZSBhbiBvYmplY3RcIik7XG4gICAgfVxuICAgIHZhciBuYW1lID0gb3B0cy5uYW1lIHx8IFwiUmVhY3Rpb25AXCIgKyBnZXROZXh0SWQoKTtcbiAgICB2YXIgZWZmZWN0QWN0aW9uID0gYWN0aW9uKG5hbWUsIG9wdHMub25FcnJvciA/IHdyYXBFcnJvckhhbmRsZXIob3B0cy5vbkVycm9yLCBlZmZlY3QpIDogZWZmZWN0KTtcbiAgICB2YXIgcnVuU3luYyA9ICFvcHRzLnNjaGVkdWxlciAmJiAhb3B0cy5kZWxheTtcbiAgICB2YXIgc2NoZWR1bGVyID0gY3JlYXRlU2NoZWR1bGVyRnJvbU9wdGlvbnMob3B0cyk7XG4gICAgdmFyIGZpcnN0VGltZSA9IHRydWU7XG4gICAgdmFyIGlzU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhciBlcXVhbHMgPSBvcHRzLmNvbXBhcmVTdHJ1Y3R1cmFsXG4gICAgICAgID8gY29tcGFyZXIuc3RydWN0dXJhbFxuICAgICAgICA6IG9wdHMuZXF1YWxzIHx8IGNvbXBhcmVyLmRlZmF1bHQ7XG4gICAgdmFyIHIgPSBuZXcgUmVhY3Rpb24obmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoZmlyc3RUaW1lIHx8IHJ1blN5bmMpIHtcbiAgICAgICAgICAgIHJlYWN0aW9uUnVubmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWlzU2NoZWR1bGVkKSB7XG4gICAgICAgICAgICBpc1NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgICBzY2hlZHVsZXIocmVhY3Rpb25SdW5uZXIpO1xuICAgICAgICB9XG4gICAgfSwgb3B0cy5vbkVycm9yLCBvcHRzLnJlcXVpcmVzT2JzZXJ2YWJsZSk7XG4gICAgZnVuY3Rpb24gcmVhY3Rpb25SdW5uZXIoKSB7XG4gICAgICAgIGlzU2NoZWR1bGVkID0gZmFsc2U7IC8vIFE6IG1vdmUgaW50byByZWFjdGlvbiBydW5uZXI/XG4gICAgICAgIGlmIChyLmlzRGlzcG9zZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHIudHJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG5leHRWYWx1ZSA9IGV4cHJlc3Npb24ocik7XG4gICAgICAgICAgICBjaGFuZ2VkID0gZmlyc3RUaW1lIHx8ICFlcXVhbHModmFsdWUsIG5leHRWYWx1ZSk7XG4gICAgICAgICAgICB2YWx1ZSA9IG5leHRWYWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChmaXJzdFRpbWUgJiYgb3B0cy5maXJlSW1tZWRpYXRlbHkpXG4gICAgICAgICAgICBlZmZlY3RBY3Rpb24odmFsdWUsIHIpO1xuICAgICAgICBpZiAoIWZpcnN0VGltZSAmJiBjaGFuZ2VkID09PSB0cnVlKVxuICAgICAgICAgICAgZWZmZWN0QWN0aW9uKHZhbHVlLCByKTtcbiAgICAgICAgaWYgKGZpcnN0VGltZSlcbiAgICAgICAgICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICAgIH1cbiAgICByLnNjaGVkdWxlKCk7XG4gICAgcmV0dXJuIHIuZ2V0RGlzcG9zZXIoKTtcbn1cbmZ1bmN0aW9uIHdyYXBFcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyLCBiYXNlRm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGJhc2VGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvckhhbmRsZXIuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIG9uQmVjb21lT2JzZXJ2ZWQodGhpbmcsIGFyZzIsIGFyZzMpIHtcbiAgICByZXR1cm4gaW50ZXJjZXB0SG9vayhcIm9uQmVjb21lT2JzZXJ2ZWRcIiwgdGhpbmcsIGFyZzIsIGFyZzMpO1xufVxuZnVuY3Rpb24gb25CZWNvbWVVbm9ic2VydmVkKHRoaW5nLCBhcmcyLCBhcmczKSB7XG4gICAgcmV0dXJuIGludGVyY2VwdEhvb2soXCJvbkJlY29tZVVub2JzZXJ2ZWRcIiwgdGhpbmcsIGFyZzIsIGFyZzMpO1xufVxuZnVuY3Rpb24gaW50ZXJjZXB0SG9vayhob29rLCB0aGluZywgYXJnMiwgYXJnMykge1xuICAgIHZhciBhdG9tID0gdHlwZW9mIGFyZzMgPT09IFwiZnVuY3Rpb25cIiA/IGdldEF0b20odGhpbmcsIGFyZzIpIDogZ2V0QXRvbSh0aGluZyk7XG4gICAgdmFyIGNiID0gdHlwZW9mIGFyZzMgPT09IFwiZnVuY3Rpb25cIiA/IGFyZzMgOiBhcmcyO1xuICAgIHZhciBsaXN0ZW5lcnNLZXkgPSBob29rICsgXCJMaXN0ZW5lcnNcIjtcbiAgICBpZiAoYXRvbVtsaXN0ZW5lcnNLZXldKSB7XG4gICAgICAgIGF0b21bbGlzdGVuZXJzS2V5XS5hZGQoY2IpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXRvbVtsaXN0ZW5lcnNLZXldID0gbmV3IFNldChbY2JdKTtcbiAgICB9XG4gICAgdmFyIG9yaWcgPSBhdG9tW2hvb2tdO1xuICAgIGlmICh0eXBlb2Ygb3JpZyAhPT0gXCJmdW5jdGlvblwiKVxuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgXCJOb3QgYW4gYXRvbSB0aGF0IGNhbiBiZSAodW4pb2JzZXJ2ZWRcIik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGhvb2tMaXN0ZW5lcnMgPSBhdG9tW2xpc3RlbmVyc0tleV07XG4gICAgICAgIGlmIChob29rTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBob29rTGlzdGVuZXJzLmRlbGV0ZShjYik7XG4gICAgICAgICAgICBpZiAoaG9va0xpc3RlbmVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGF0b21bbGlzdGVuZXJzS2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZShvcHRpb25zKSB7XG4gICAgdmFyIGVuZm9yY2VBY3Rpb25zID0gb3B0aW9ucy5lbmZvcmNlQWN0aW9ucywgY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uID0gb3B0aW9ucy5jb21wdXRlZFJlcXVpcmVzUmVhY3Rpb24sIGNvbXB1dGVkQ29uZmlndXJhYmxlID0gb3B0aW9ucy5jb21wdXRlZENvbmZpZ3VyYWJsZSwgZGlzYWJsZUVycm9yQm91bmRhcmllcyA9IG9wdGlvbnMuZGlzYWJsZUVycm9yQm91bmRhcmllcywgcmVhY3Rpb25TY2hlZHVsZXIgPSBvcHRpb25zLnJlYWN0aW9uU2NoZWR1bGVyLCByZWFjdGlvblJlcXVpcmVzT2JzZXJ2YWJsZSA9IG9wdGlvbnMucmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGUsIG9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uID0gb3B0aW9ucy5vYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbjtcbiAgICBpZiAob3B0aW9ucy5pc29sYXRlR2xvYmFsU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgaXNvbGF0ZUdsb2JhbFN0YXRlKCk7XG4gICAgfVxuICAgIGlmIChlbmZvcmNlQWN0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZW5mb3JjZUFjdGlvbnMgPT09IFwiYm9vbGVhblwiIHx8IGVuZm9yY2VBY3Rpb25zID09PSBcInN0cmljdFwiKVxuICAgICAgICAgICAgZGVwcmVjYXRlZChcIkRlcHJlY2F0ZWQgdmFsdWUgZm9yICdlbmZvcmNlQWN0aW9ucycsIHVzZSAnZmFsc2UnID0+ICdcXFwibmV2ZXJcXFwiJywgJ3RydWUnID0+ICdcXFwib2JzZXJ2ZWRcXFwiJywgJ1xcXCJzdHJpY3RcXFwiJyA9PiBcXFwiJ2Fsd2F5cydcXFwiIGluc3RlYWRcIik7XG4gICAgICAgIHZhciBlYSA9IHZvaWQgMDtcbiAgICAgICAgc3dpdGNoIChlbmZvcmNlQWN0aW9ucykge1xuICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgY2FzZSBcIm9ic2VydmVkXCI6XG4gICAgICAgICAgICAgICAgZWEgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICAgIGNhc2UgXCJuZXZlclwiOlxuICAgICAgICAgICAgICAgIGVhID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3RyaWN0XCI6XG4gICAgICAgICAgICBjYXNlIFwiYWx3YXlzXCI6XG4gICAgICAgICAgICAgICAgZWEgPSBcInN0cmljdFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBmYWlsKFwiSW52YWxpZCB2YWx1ZSBmb3IgJ2VuZm9yY2VBY3Rpb25zJzogJ1wiICsgZW5mb3JjZUFjdGlvbnMgKyBcIicsIGV4cGVjdGVkICduZXZlcicsICdhbHdheXMnIG9yICdvYnNlcnZlZCdcIik7XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsU3RhdGUuZW5mb3JjZUFjdGlvbnMgPSBlYTtcbiAgICAgICAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZUNoYW5nZXMgPSBlYSA9PT0gdHJ1ZSB8fCBlYSA9PT0gXCJzdHJpY3RcIiA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGdsb2JhbFN0YXRlLmNvbXB1dGVkUmVxdWlyZXNSZWFjdGlvbiA9ICEhY29tcHV0ZWRSZXF1aXJlc1JlYWN0aW9uO1xuICAgIH1cbiAgICBpZiAocmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBnbG9iYWxTdGF0ZS5yZWFjdGlvblJlcXVpcmVzT2JzZXJ2YWJsZSA9ICEhcmVhY3Rpb25SZXF1aXJlc09ic2VydmFibGU7XG4gICAgfVxuICAgIGlmIChvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGdsb2JhbFN0YXRlLm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uID0gISFvYnNlcnZhYmxlUmVxdWlyZXNSZWFjdGlvbjtcbiAgICAgICAgZ2xvYmFsU3RhdGUuYWxsb3dTdGF0ZVJlYWRzID0gIWdsb2JhbFN0YXRlLm9ic2VydmFibGVSZXF1aXJlc1JlYWN0aW9uO1xuICAgIH1cbiAgICBpZiAoY29tcHV0ZWRDb25maWd1cmFibGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBnbG9iYWxTdGF0ZS5jb21wdXRlZENvbmZpZ3VyYWJsZSA9ICEhY29tcHV0ZWRDb25maWd1cmFibGU7XG4gICAgfVxuICAgIGlmIChkaXNhYmxlRXJyb3JCb3VuZGFyaWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGRpc2FibGVFcnJvckJvdW5kYXJpZXMgPT09IHRydWUpXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJXQVJOSU5HOiBEZWJ1ZyBmZWF0dXJlIG9ubHkuIE1vYlggd2lsbCBOT1QgcmVjb3ZlciBmcm9tIGVycm9ycyB3aGVuIGBkaXNhYmxlRXJyb3JCb3VuZGFyaWVzYCBpcyBlbmFibGVkLlwiKTtcbiAgICAgICAgZ2xvYmFsU3RhdGUuZGlzYWJsZUVycm9yQm91bmRhcmllcyA9ICEhZGlzYWJsZUVycm9yQm91bmRhcmllcztcbiAgICB9XG4gICAgaWYgKHJlYWN0aW9uU2NoZWR1bGVyKSB7XG4gICAgICAgIHNldFJlYWN0aW9uU2NoZWR1bGVyKHJlYWN0aW9uU2NoZWR1bGVyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlY29yYXRlKHRoaW5nLCBkZWNvcmF0b3JzKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIGludmFyaWFudChpc1BsYWluT2JqZWN0KGRlY29yYXRvcnMpLCBcIkRlY29yYXRvcnMgc2hvdWxkIGJlIGEga2V5IHZhbHVlIG1hcFwiKTtcbiAgICB2YXIgdGFyZ2V0ID0gdHlwZW9mIHRoaW5nID09PSBcImZ1bmN0aW9uXCIgPyB0aGluZy5wcm90b3R5cGUgOiB0aGluZztcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eURlY29yYXRvcnMgPSBkZWNvcmF0b3JzW3Byb3BdO1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcGVydHlEZWNvcmF0b3JzKSkge1xuICAgICAgICAgICAgcHJvcGVydHlEZWNvcmF0b3JzID0gW3Byb3BlcnR5RGVjb3JhdG9yc107XG4gICAgICAgIH1cbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICBpbnZhcmlhbnQocHJvcGVydHlEZWNvcmF0b3JzLmV2ZXJ5KGZ1bmN0aW9uIChkZWNvcmF0b3IpIHsgcmV0dXJuIHR5cGVvZiBkZWNvcmF0b3IgPT09IFwiZnVuY3Rpb25cIjsgfSksIFwiRGVjb3JhdGU6IGV4cGVjdGVkIGEgZGVjb3JhdG9yIGZ1bmN0aW9uIG9yIGFycmF5IG9mIGRlY29yYXRvciBmdW5jdGlvbnMgZm9yICdcIiArIHByb3AgKyBcIidcIik7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3ApO1xuICAgICAgICB2YXIgbmV3RGVzY3JpcHRvciA9IHByb3BlcnR5RGVjb3JhdG9ycy5yZWR1Y2UoZnVuY3Rpb24gKGFjY0Rlc2NyaXB0b3IsIGRlY29yYXRvcikgeyByZXR1cm4gZGVjb3JhdG9yKHRhcmdldCwgcHJvcCwgYWNjRGVzY3JpcHRvcik7IH0sIGRlc2NyaXB0b3IpO1xuICAgICAgICBpZiAobmV3RGVzY3JpcHRvcilcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3AsIG5ld0Rlc2NyaXB0b3IpO1xuICAgIH07XG4gICAgZm9yICh2YXIgcHJvcCBpbiBkZWNvcmF0b3JzKSB7XG4gICAgICAgIF9sb29wXzEocHJvcCk7XG4gICAgfVxuICAgIHJldHVybiB0aGluZztcbn1cblxuZnVuY3Rpb24gZXh0ZW5kT2JzZXJ2YWJsZSh0YXJnZXQsIHByb3BlcnRpZXMsIGRlY29yYXRvcnMsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgIGludmFyaWFudChhcmd1bWVudHMubGVuZ3RoID49IDIgJiYgYXJndW1lbnRzLmxlbmd0aCA8PSA0LCBcIidleHRlbmRPYnNlcnZhYmxlJyBleHBlY3RlZCAyLTQgYXJndW1lbnRzXCIpO1xuICAgICAgICBpbnZhcmlhbnQodHlwZW9mIHRhcmdldCA9PT0gXCJvYmplY3RcIiwgXCInZXh0ZW5kT2JzZXJ2YWJsZScgZXhwZWN0cyBhbiBvYmplY3QgYXMgZmlyc3QgYXJndW1lbnRcIik7XG4gICAgICAgIGludmFyaWFudCghaXNPYnNlcnZhYmxlTWFwKHRhcmdldCksIFwiJ2V4dGVuZE9ic2VydmFibGUnIHNob3VsZCBub3QgYmUgdXNlZCBvbiBtYXBzLCB1c2UgbWFwLm1lcmdlIGluc3RlYWRcIik7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBhc0NyZWF0ZU9ic2VydmFibGVPcHRpb25zKG9wdGlvbnMpO1xuICAgIHZhciBkZWZhdWx0RGVjb3JhdG9yID0gZ2V0RGVmYXVsdERlY29yYXRvckZyb21PYmplY3RPcHRpb25zKG9wdGlvbnMpO1xuICAgIGluaXRpYWxpemVJbnN0YW5jZSh0YXJnZXQpOyAvLyBGaXhlcyAjMTc0MFxuICAgIGFzT2JzZXJ2YWJsZU9iamVjdCh0YXJnZXQsIG9wdGlvbnMubmFtZSwgZGVmYXVsdERlY29yYXRvci5lbmhhbmNlcik7IC8vIG1ha2Ugc3VyZSBvYmplY3QgaXMgb2JzZXJ2YWJsZSwgZXZlbiB3aXRob3V0IGluaXRpYWwgcHJvcHNcbiAgICBpZiAocHJvcGVydGllcylcbiAgICAgICAgZXh0ZW5kT2JzZXJ2YWJsZU9iamVjdFdpdGhQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcGVydGllcywgZGVjb3JhdG9ycywgZGVmYXVsdERlY29yYXRvcik7XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIGdldERlZmF1bHREZWNvcmF0b3JGcm9tT2JqZWN0T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuZGVmYXVsdERlY29yYXRvciB8fCAob3B0aW9ucy5kZWVwID09PSBmYWxzZSA/IHJlZkRlY29yYXRvciA6IGRlZXBEZWNvcmF0b3IpO1xufVxuZnVuY3Rpb24gZXh0ZW5kT2JzZXJ2YWJsZU9iamVjdFdpdGhQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcGVydGllcywgZGVjb3JhdG9ycywgZGVmYXVsdERlY29yYXRvcikge1xuICAgIHZhciBlXzEsIF9hLCBlXzIsIF9iO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgaW52YXJpYW50KCFpc09ic2VydmFibGUocHJvcGVydGllcyksIFwiRXh0ZW5kaW5nIGFuIG9iamVjdCB3aXRoIGFub3RoZXIgb2JzZXJ2YWJsZSAob2JqZWN0KSBpcyBub3Qgc3VwcG9ydGVkLiBQbGVhc2UgY29uc3RydWN0IGFuIGV4cGxpY2l0IHByb3BlcnR5bWFwLCB1c2luZyBgdG9KU2AgaWYgbmVlZC4gU2VlIGlzc3VlICM1NDBcIik7XG4gICAgICAgIGlmIChkZWNvcmF0b3JzKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IGdldFBsYWluT2JqZWN0S2V5cyhkZWNvcmF0b3JzKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5c18xID0gX192YWx1ZXMoa2V5cyksIGtleXNfMV8xID0ga2V5c18xLm5leHQoKTsgIWtleXNfMV8xLmRvbmU7IGtleXNfMV8xID0ga2V5c18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0ga2V5c18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGtleSBpbiBwcm9wZXJ0aWVzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwoXCJUcnlpbmcgdG8gZGVjbGFyZSBhIGRlY29yYXRvciBmb3IgdW5zcGVjaWZpZWQgcHJvcGVydHkgJ1wiICsgc3RyaW5naWZ5S2V5KGtleSkgKyBcIidcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlzXzFfMSAmJiAha2V5c18xXzEuZG9uZSAmJiAoX2EgPSBrZXlzXzEucmV0dXJuKSkgX2EuY2FsbChrZXlzXzEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnRCYXRjaCgpO1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBrZXlzID0gZ2V0UGxhaW5PYmplY3RLZXlzKHByb3BlcnRpZXMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5c18yID0gX192YWx1ZXMoa2V5cyksIGtleXNfMl8xID0ga2V5c18yLm5leHQoKTsgIWtleXNfMl8xLmRvbmU7IGtleXNfMl8xID0ga2V5c18yLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzXzJfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvcGVydGllcywga2V5KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNQbGFpbk9iamVjdChwcm9wZXJ0aWVzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwoXCInZXh0ZW5kT2JzZXJ2YWJlJyBvbmx5IGFjY2VwdHMgcGxhaW4gb2JqZWN0cyBhcyBzZWNvbmQgYXJndW1lbnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwoXCInZXh0ZW5kT2JzZXJ2YWJsZScgY2FuIG9ubHkgYmUgdXNlZCB0byBpbnRyb2R1Y2UgbmV3IHByb3BlcnRpZXMuIFVzZSAnc2V0JyBvciAnZGVjb3JhdGUnIGluc3RlYWQuIFRoZSBwcm9wZXJ0eSAnXCIgKyBzdHJpbmdpZnlLZXkoa2V5KSArIFwiJyBhbHJlYWR5IGV4aXN0cyBvbiAnXCIgKyB0YXJnZXQgKyBcIidcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0NvbXB1dGVkKGRlc2NyaXB0b3IudmFsdWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbChcIlBhc3NpbmcgYSAnY29tcHV0ZWQnIGFzIGluaXRpYWwgcHJvcGVydHkgdmFsdWUgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBieSBleHRlbmRPYnNlcnZhYmxlLiBVc2UgYSBnZXR0ZXIgb3IgZGVjb3JhdG9yIGluc3RlYWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkZWNvcmF0b3IgPSBkZWNvcmF0b3JzICYmIGtleSBpbiBkZWNvcmF0b3JzXG4gICAgICAgICAgICAgICAgICAgID8gZGVjb3JhdG9yc1trZXldXG4gICAgICAgICAgICAgICAgICAgIDogZGVzY3JpcHRvci5nZXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY29tcHV0ZWREZWNvcmF0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdERlY29yYXRvcjtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIHR5cGVvZiBkZWNvcmF0b3IgIT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICAgICAgZmFpbChcIk5vdCBhIHZhbGlkIGRlY29yYXRvciBmb3IgJ1wiICsgc3RyaW5naWZ5S2V5KGtleSkgKyBcIicsIGdvdDogXCIgKyBkZWNvcmF0b3IpO1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHREZXNjcmlwdG9yID0gZGVjb3JhdG9yKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0RGVzY3JpcHRvciAvLyBvdGhlcndpc2UsIGFzc3VtZSBhbHJlYWR5IGFwcGxpZWQsIGR1ZSB0byBgYXBwbHlUb0luc3RhbmNlYFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByZXN1bHREZXNjcmlwdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXNfMl8xICYmICFrZXlzXzJfMS5kb25lICYmIChfYiA9IGtleXNfMi5yZXR1cm4pKSBfYi5jYWxsKGtleXNfMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIGVuZEJhdGNoKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXREZXBlbmRlbmN5VHJlZSh0aGluZywgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gbm9kZVRvRGVwZW5kZW5jeVRyZWUoZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKTtcbn1cbmZ1bmN0aW9uIG5vZGVUb0RlcGVuZGVuY3lUcmVlKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiBub2RlLm5hbWVcbiAgICB9O1xuICAgIGlmIChub2RlLm9ic2VydmluZyAmJiBub2RlLm9ic2VydmluZy5sZW5ndGggPiAwKVxuICAgICAgICByZXN1bHQuZGVwZW5kZW5jaWVzID0gdW5pcXVlKG5vZGUub2JzZXJ2aW5nKS5tYXAobm9kZVRvRGVwZW5kZW5jeVRyZWUpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBnZXRPYnNlcnZlclRyZWUodGhpbmcsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIG5vZGVUb09ic2VydmVyVHJlZShnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSkpO1xufVxuZnVuY3Rpb24gbm9kZVRvT2JzZXJ2ZXJUcmVlKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0ge1xuICAgICAgICBuYW1lOiBub2RlLm5hbWVcbiAgICB9O1xuICAgIGlmIChoYXNPYnNlcnZlcnMobm9kZSkpXG4gICAgICAgIHJlc3VsdC5vYnNlcnZlcnMgPSBBcnJheS5mcm9tKGdldE9ic2VydmVycyhub2RlKSkubWFwKG5vZGVUb09ic2VydmVyVHJlZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxudmFyIGdlbmVyYXRvcklkID0gMDtcbnZhciBGbG93Q2FuY2VsbGF0aW9uRXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb3dDYW5jZWxsYXRpb25FcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGbG93Q2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBcIkZMT1dfQ0FOQ0VMTEVEXCIpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBGbG93Q2FuY2VsbGF0aW9uRXJyb3I7XG59KEVycm9yKSk7XG5mdW5jdGlvbiBpc0Zsb3dDYW5jZWxsYXRpb25FcnJvcihlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIEZsb3dDYW5jZWxsYXRpb25FcnJvcjtcbn1cbmZ1bmN0aW9uIGZsb3coZ2VuZXJhdG9yKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDEpXG4gICAgICAgIGZhaWwoISFwcm9jZXNzLmVudi5OT0RFX0VOViAmJiBcIkZsb3cgZXhwZWN0cyAxIGFyZ3VtZW50IGFuZCBjYW5ub3QgYmUgdXNlZCBhcyBkZWNvcmF0b3JcIik7XG4gICAgdmFyIG5hbWUgPSBnZW5lcmF0b3IubmFtZSB8fCBcIjx1bm5hbWVkIGZsb3c+XCI7XG4gICAgLy8gSW1wbGVtZW50YXRpb24gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3RqL2NvL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN0eCA9IHRoaXM7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICB2YXIgcnVuSWQgPSArK2dlbmVyYXRvcklkO1xuICAgICAgICB2YXIgZ2VuID0gYWN0aW9uKG5hbWUgKyBcIiAtIHJ1bmlkOiBcIiArIHJ1bklkICsgXCIgLSBpbml0XCIsIGdlbmVyYXRvcikuYXBwbHkoY3R4LCBhcmdzKTtcbiAgICAgICAgdmFyIHJlamVjdG9yO1xuICAgICAgICB2YXIgcGVuZGluZ1Byb21pc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHN0ZXBJZCA9IDA7XG4gICAgICAgICAgICByZWplY3RvciA9IHJlamVjdDtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uRnVsZmlsbGVkKHJlcykge1xuICAgICAgICAgICAgICAgIHBlbmRpbmdQcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHZhciByZXQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gYWN0aW9uKG5hbWUgKyBcIiAtIHJ1bmlkOiBcIiArIHJ1bklkICsgXCIgLSB5aWVsZCBcIiArIHN0ZXBJZCsrLCBnZW4ubmV4dCkuY2FsbChnZW4sIHJlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHQocmV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uUmVqZWN0ZWQoZXJyKSB7XG4gICAgICAgICAgICAgICAgcGVuZGluZ1Byb21pc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdmFyIHJldDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSBhY3Rpb24obmFtZSArIFwiIC0gcnVuaWQ6IFwiICsgcnVuSWQgKyBcIiAtIHlpZWxkIFwiICsgc3RlcElkKyssIGdlbi50aHJvdykuY2FsbChnZW4sIGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5leHQocmV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIG5leHQocmV0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJldCAmJiB0eXBlb2YgcmV0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBhbiBhc3luYyBpdGVyYXRvclxuICAgICAgICAgICAgICAgICAgICByZXQudGhlbihuZXh0LCByZWplY3QpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXQuZG9uZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUocmV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICBwZW5kaW5nUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShyZXQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwZW5kaW5nUHJvbWlzZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uRnVsZmlsbGVkKHVuZGVmaW5lZCk7IC8vIGtpY2sgb2ZmIHRoZSBwcm9jZXNzXG4gICAgICAgIH0pO1xuICAgICAgICBwcm9taXNlLmNhbmNlbCA9IGFjdGlvbihuYW1lICsgXCIgLSBydW5pZDogXCIgKyBydW5JZCArIFwiIC0gY2FuY2VsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHBlbmRpbmdQcm9taXNlKVxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxQcm9taXNlKHBlbmRpbmdQcm9taXNlKTtcbiAgICAgICAgICAgICAgICAvLyBGaW5hbGx5IGJsb2NrIGNhbiByZXR1cm4gKG9yIHlpZWxkKSBzdHVmZi4uXG4gICAgICAgICAgICAgICAgdmFyIHJlcyA9IGdlbi5yZXR1cm4odW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAvLyBlYXQgYW55dGhpbmcgdGhhdCBwcm9taXNlIHdvdWxkIGRvLCBpdCdzIGNhbmNlbGxlZCFcbiAgICAgICAgICAgICAgICB2YXIgeWllbGRlZFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUocmVzLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB5aWVsZGVkUHJvbWlzZS50aGVuKG5vb3AsIG5vb3ApO1xuICAgICAgICAgICAgICAgIGNhbmNlbFByb21pc2UoeWllbGRlZFByb21pc2UpOyAvLyBtYXliZSBpdCBjYW4gYmUgY2FuY2VsbGVkIDopXG4gICAgICAgICAgICAgICAgLy8gcmVqZWN0IG91ciBvcmlnaW5hbCBwcm9taXNlXG4gICAgICAgICAgICAgICAgcmVqZWN0b3IobmV3IEZsb3dDYW5jZWxsYXRpb25FcnJvcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0b3IoZSk7IC8vIHRoZXJlIGNvdWxkIGJlIGEgdGhyb3dpbmcgZmluYWxseSBibG9ja1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNhbmNlbFByb21pc2UocHJvbWlzZSkge1xuICAgIGlmICh0eXBlb2YgcHJvbWlzZS5jYW5jZWwgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgcHJvbWlzZS5jYW5jZWwoKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJjZXB0UmVhZHModGhpbmcsIHByb3BPckhhbmRsZXIsIGhhbmRsZXIpIHtcbiAgICB2YXIgdGFyZ2V0O1xuICAgIGlmIChpc09ic2VydmFibGVNYXAodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZUFycmF5KHRoaW5nKSB8fCBpc09ic2VydmFibGVWYWx1ZSh0aGluZykpIHtcbiAgICAgICAgdGFyZ2V0ID0gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVPYmplY3QodGhpbmcpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcE9ySGFuZGxlciAhPT0gXCJzdHJpbmdcIilcbiAgICAgICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgICAgIFwiSW50ZXJjZXB0UmVhZHMgY2FuIG9ubHkgYmUgdXNlZCB3aXRoIGEgc3BlY2lmaWMgcHJvcGVydHksIG5vdCB3aXRoIGFuIG9iamVjdCBpbiBnZW5lcmFsXCIpO1xuICAgICAgICB0YXJnZXQgPSBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcE9ySGFuZGxlcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIFwiRXhwZWN0ZWQgb2JzZXJ2YWJsZSBtYXAsIG9iamVjdCBvciBhcnJheSBhcyBmaXJzdCBhcnJheVwiKTtcbiAgICB9XG4gICAgaWYgKHRhcmdldC5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgXCJBbiBpbnRlcmNlcHQgcmVhZGVyIHdhcyBhbHJlYWR5IGVzdGFibGlzaGVkXCIpO1xuICAgIHRhcmdldC5kZWhhbmNlciA9IHR5cGVvZiBwcm9wT3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIgPyBwcm9wT3JIYW5kbGVyIDogaGFuZGxlcjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB0YXJnZXQuZGVoYW5jZXIgPSB1bmRlZmluZWQ7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaW50ZXJjZXB0KHRoaW5nLCBwcm9wT3JIYW5kbGVyLCBoYW5kbGVyKSB7XG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiBpbnRlcmNlcHRQcm9wZXJ0eSh0aGluZywgcHJvcE9ySGFuZGxlciwgaGFuZGxlcik7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gaW50ZXJjZXB0SW50ZXJjZXB0YWJsZSh0aGluZywgcHJvcE9ySGFuZGxlcik7XG59XG5mdW5jdGlvbiBpbnRlcmNlcHRJbnRlcmNlcHRhYmxlKHRoaW5nLCBoYW5kbGVyKSB7XG4gICAgcmV0dXJuIGdldEFkbWluaXN0cmF0aW9uKHRoaW5nKS5pbnRlcmNlcHQoaGFuZGxlcik7XG59XG5mdW5jdGlvbiBpbnRlcmNlcHRQcm9wZXJ0eSh0aGluZywgcHJvcGVydHksIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcsIHByb3BlcnR5KS5pbnRlcmNlcHQoaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIF9pc0NvbXB1dGVkKHZhbHVlLCBwcm9wZXJ0eSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU9iamVjdCh2YWx1ZSkgPT09IGZhbHNlKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoIXZhbHVlWyRtb2J4XS52YWx1ZXMuaGFzKHByb3BlcnR5KSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGF0b20gPSBnZXRBdG9tKHZhbHVlLCBwcm9wZXJ0eSk7XG4gICAgICAgIHJldHVybiBpc0NvbXB1dGVkVmFsdWUoYXRvbSk7XG4gICAgfVxuICAgIHJldHVybiBpc0NvbXB1dGVkVmFsdWUodmFsdWUpO1xufVxuZnVuY3Rpb24gaXNDb21wdXRlZCh2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSlcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICBcImlzQ29tcHV0ZWQgZXhwZWN0cyBvbmx5IDEgYXJndW1lbnQuIFVzZSBpc09ic2VydmFibGVQcm9wIHRvIGluc3BlY3QgdGhlIG9ic2VydmFiaWxpdHkgb2YgYSBwcm9wZXJ0eVwiKTtcbiAgICByZXR1cm4gX2lzQ29tcHV0ZWQodmFsdWUpO1xufVxuZnVuY3Rpb24gaXNDb21wdXRlZFByb3AodmFsdWUsIHByb3BOYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wTmFtZSAhPT0gXCJzdHJpbmdcIilcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICBcImlzQ29tcHV0ZWQgZXhwZWN0ZWQgYSBwcm9wZXJ0eSBuYW1lIGFzIHNlY29uZCBhcmd1bWVudFwiKTtcbiAgICByZXR1cm4gX2lzQ29tcHV0ZWQodmFsdWUsIHByb3BOYW1lKTtcbn1cblxuZnVuY3Rpb24gX2lzT2JzZXJ2YWJsZSh2YWx1ZSwgcHJvcGVydHkpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIChpc09ic2VydmFibGVNYXAodmFsdWUpIHx8IGlzT2JzZXJ2YWJsZUFycmF5KHZhbHVlKSkpXG4gICAgICAgICAgICByZXR1cm4gZmFpbChcImlzT2JzZXJ2YWJsZShvYmplY3QsIHByb3BlcnR5TmFtZSkgaXMgbm90IHN1cHBvcnRlZCBmb3IgYXJyYXlzIGFuZCBtYXBzLiBVc2UgbWFwLmhhcyBvciBhcnJheS5sZW5ndGggaW5zdGVhZC5cIik7XG4gICAgICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWVbJG1vYnhdLnZhbHVlcy5oYXMocHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gRm9yIGZpcnN0IGNoZWNrLCBzZWUgIzcwMVxuICAgIHJldHVybiAoaXNPYnNlcnZhYmxlT2JqZWN0KHZhbHVlKSB8fFxuICAgICAgICAhIXZhbHVlWyRtb2J4XSB8fFxuICAgICAgICBpc0F0b20odmFsdWUpIHx8XG4gICAgICAgIGlzUmVhY3Rpb24odmFsdWUpIHx8XG4gICAgICAgIGlzQ29tcHV0ZWRWYWx1ZSh2YWx1ZSkpO1xufVxuZnVuY3Rpb24gaXNPYnNlcnZhYmxlKHZhbHVlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggIT09IDEpXG4gICAgICAgIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICBcImlzT2JzZXJ2YWJsZSBleHBlY3RzIG9ubHkgMSBhcmd1bWVudC4gVXNlIGlzT2JzZXJ2YWJsZVByb3AgdG8gaW5zcGVjdCB0aGUgb2JzZXJ2YWJpbGl0eSBvZiBhIHByb3BlcnR5XCIpO1xuICAgIHJldHVybiBfaXNPYnNlcnZhYmxlKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZVByb3AodmFsdWUsIHByb3BOYW1lKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wTmFtZSAhPT0gXCJzdHJpbmdcIilcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwiZXhwZWN0ZWQgYSBwcm9wZXJ0eSBuYW1lIGFzIHNlY29uZCBhcmd1bWVudFwiKTtcbiAgICByZXR1cm4gX2lzT2JzZXJ2YWJsZSh2YWx1ZSwgcHJvcE5hbWUpO1xufVxuXG5mdW5jdGlvbiBrZXlzKG9iaikge1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgICAgICByZXR1cm4gb2JqWyRtb2J4XS5nZXRLZXlzKCk7XG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShvYmoua2V5cygpKTtcbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG9iai5rZXlzKCkpO1xuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgICAgICByZXR1cm4gb2JqLm1hcChmdW5jdGlvbiAoXywgaW5kZXgpIHsgcmV0dXJuIGluZGV4OyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIFwiJ2tleXMoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cywgc2V0cyBhbmQgbWFwc1wiKTtcbn1cbmZ1bmN0aW9uIHZhbHVlcyhvYmopIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIGtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gb2JqW2tleV07IH0pO1xuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIGtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gb2JqLmdldChrZXkpOyB9KTtcbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG9iai52YWx1ZXMoKSk7XG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XG4gICAgICAgIHJldHVybiBvYmouc2xpY2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIFwiJ3ZhbHVlcygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzLCBzZXRzIGFuZCBtYXBzXCIpO1xufVxuZnVuY3Rpb24gZW50cmllcyhvYmopIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIGtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gW2tleSwgb2JqW2tleV1dOyB9KTtcbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XG4gICAgICAgIHJldHVybiBrZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIFtrZXksIG9iai5nZXQoa2V5KV07IH0pO1xuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20ob2JqLmVudHJpZXMoKSk7XG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVBcnJheShvYmopKSB7XG4gICAgICAgIHJldHVybiBvYmoubWFwKGZ1bmN0aW9uIChrZXksIGluZGV4KSB7IHJldHVybiBbaW5kZXgsIGtleV07IH0pO1xuICAgIH1cbiAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgXCInZW50cmllcygpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIpO1xufVxuZnVuY3Rpb24gc2V0KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICFpc09ic2VydmFibGVTZXQob2JqKSkge1xuICAgICAgICBzdGFydEJhdGNoKCk7XG4gICAgICAgIHZhciB2YWx1ZXNfMSA9IGtleTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleV8xIGluIHZhbHVlc18xKVxuICAgICAgICAgICAgICAgIHNldChvYmosIGtleV8xLCB2YWx1ZXNfMVtrZXlfMV0pO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgZW5kQmF0Y2goKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgICAgICB2YXIgYWRtID0gb2JqWyRtb2J4XTtcbiAgICAgICAgdmFyIGV4aXN0aW5nT2JzZXJ2YWJsZSA9IGFkbS52YWx1ZXMuZ2V0KGtleSk7XG4gICAgICAgIGlmIChleGlzdGluZ09ic2VydmFibGUpIHtcbiAgICAgICAgICAgIGFkbS53cml0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkbS5hZGRPYnNlcnZhYmxlUHJvcChrZXksIHZhbHVlLCBhZG0uZGVmYXVsdEVuaGFuY2VyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xuICAgICAgICBvYmouc2V0KGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVTZXQob2JqKSkge1xuICAgICAgICBvYmouYWRkKGtleSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgIT09IFwibnVtYmVyXCIpXG4gICAgICAgICAgICBrZXkgPSBwYXJzZUludChrZXksIDEwKTtcbiAgICAgICAgaW52YXJpYW50KGtleSA+PSAwLCBcIk5vdCBhIHZhbGlkIGluZGV4OiAnXCIgKyBrZXkgKyBcIidcIik7XG4gICAgICAgIHN0YXJ0QmF0Y2goKTtcbiAgICAgICAgaWYgKGtleSA+PSBvYmoubGVuZ3RoKVxuICAgICAgICAgICAgb2JqLmxlbmd0aCA9IGtleSArIDE7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICAgIGVuZEJhdGNoKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIFwiJ3NldCgpJyBjYW4gb25seSBiZSB1c2VkIG9uIG9ic2VydmFibGUgb2JqZWN0cywgYXJyYXlzIGFuZCBtYXBzXCIpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlbW92ZShvYmosIGtleSkge1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgICAgICBvYmpbJG1vYnhdLnJlbW92ZShrZXkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVNYXAob2JqKSkge1xuICAgICAgICBvYmouZGVsZXRlKGtleSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZVNldChvYmopKSB7XG4gICAgICAgIG9iai5kZWxldGUoa2V5KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gXCJudW1iZXJcIilcbiAgICAgICAgICAgIGtleSA9IHBhcnNlSW50KGtleSwgMTApO1xuICAgICAgICBpbnZhcmlhbnQoa2V5ID49IDAsIFwiTm90IGEgdmFsaWQgaW5kZXg6ICdcIiArIGtleSArIFwiJ1wiKTtcbiAgICAgICAgb2JqLnNwbGljZShrZXksIDEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICBcIidyZW1vdmUoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiKTtcbiAgICB9XG59XG5mdW5jdGlvbiBoYXMob2JqLCBrZXkpIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KG9iaikpIHtcbiAgICAgICAgLy8gcmV0dXJuIGtleXMob2JqKS5pbmRleE9mKGtleSkgPj0gMFxuICAgICAgICB2YXIgYWRtID0gZ2V0QWRtaW5pc3RyYXRpb24ob2JqKTtcbiAgICAgICAgcmV0dXJuIGFkbS5oYXMoa2V5KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlTWFwKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9iai5oYXMoa2V5KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlU2V0KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9iai5oYXMoa2V5KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYnNlcnZhYmxlQXJyYXkob2JqKSkge1xuICAgICAgICByZXR1cm4ga2V5ID49IDAgJiYga2V5IDwgb2JqLmxlbmd0aDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgXCInaGFzKCknIGNhbiBvbmx5IGJlIHVzZWQgb24gb2JzZXJ2YWJsZSBvYmplY3RzLCBhcnJheXMgYW5kIG1hcHNcIik7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0KG9iaiwga2V5KSB7XG4gICAgaWYgKCFoYXMob2JqLCBrZXkpKVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIGlmIChpc09ic2VydmFibGVPYmplY3Qob2JqKSkge1xuICAgICAgICByZXR1cm4gb2JqW2tleV07XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZU1hcChvYmopKSB7XG4gICAgICAgIHJldHVybiBvYmouZ2V0KGtleSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG9ialtrZXldO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICBcIidnZXQoKScgY2FuIG9ubHkgYmUgdXNlZCBvbiBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgbWFwc1wiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG9ic2VydmUodGhpbmcsIHByb3BPckNiLCBjYk9yRmlyZSwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgaWYgKHR5cGVvZiBjYk9yRmlyZSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICByZXR1cm4gb2JzZXJ2ZU9ic2VydmFibGVQcm9wZXJ0eSh0aGluZywgcHJvcE9yQ2IsIGNiT3JGaXJlLCBmaXJlSW1tZWRpYXRlbHkpO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIG9ic2VydmVPYnNlcnZhYmxlKHRoaW5nLCBwcm9wT3JDYiwgY2JPckZpcmUpO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZU9ic2VydmFibGUodGhpbmcsIGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24odGhpbmcpLm9ic2VydmUobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSk7XG59XG5mdW5jdGlvbiBvYnNlcnZlT2JzZXJ2YWJsZVByb3BlcnR5KHRoaW5nLCBwcm9wZXJ0eSwgbGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgIHJldHVybiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcGVydHkpLm9ic2VydmUobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSk7XG59XG5cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBkZXRlY3RDeWNsZXM6IHRydWUsXG4gICAgZXhwb3J0TWFwc0FzT2JqZWN0czogdHJ1ZSxcbiAgICByZWN1cnNlRXZlcnl0aGluZzogZmFsc2Vcbn07XG5mdW5jdGlvbiBjYWNoZShtYXAsIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5kZXRlY3RDeWNsZXMpXG4gICAgICAgIG1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gdG9KU0hlbHBlcihzb3VyY2UsIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pIHtcbiAgICBpZiAoIW9wdGlvbnMucmVjdXJzZUV2ZXJ5dGhpbmcgJiYgIWlzT2JzZXJ2YWJsZShzb3VyY2UpKVxuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIGlmICh0eXBlb2Ygc291cmNlICE9PSBcIm9iamVjdFwiKVxuICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIC8vIERpcmVjdGx5IHJldHVybiBudWxsIGlmIHNvdXJjZSBpcyBudWxsXG4gICAgaWYgKHNvdXJjZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgLy8gRGlyZWN0bHkgcmV0dXJuIHRoZSBEYXRlIG9iamVjdCBpdHNlbGYgaWYgY29udGFpbmVkIGluIHRoZSBvYnNlcnZhYmxlXG4gICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIERhdGUpXG4gICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZVZhbHVlKHNvdXJjZSkpXG4gICAgICAgIHJldHVybiB0b0pTSGVscGVyKHNvdXJjZS5nZXQoKSwgb3B0aW9ucywgX19hbHJlYWR5U2Vlbik7XG4gICAgLy8gbWFrZSBzdXJlIHdlIHRyYWNrIHRoZSBrZXlzIG9mIHRoZSBvYmplY3RcbiAgICBpZiAoaXNPYnNlcnZhYmxlKHNvdXJjZSkpXG4gICAgICAgIGtleXMoc291cmNlKTtcbiAgICB2YXIgZGV0ZWN0Q3ljbGVzID0gb3B0aW9ucy5kZXRlY3RDeWNsZXMgPT09IHRydWU7XG4gICAgaWYgKGRldGVjdEN5Y2xlcyAmJiBzb3VyY2UgIT09IG51bGwgJiYgX19hbHJlYWR5U2Vlbi5oYXMoc291cmNlKSkge1xuICAgICAgICByZXR1cm4gX19hbHJlYWR5U2Vlbi5nZXQoc291cmNlKTtcbiAgICB9XG4gICAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KHNvdXJjZSkgfHwgQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIHZhciByZXNfMSA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgW10sIG9wdGlvbnMpO1xuICAgICAgICB2YXIgdG9BZGQgPSBzb3VyY2UubWFwKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdG9KU0hlbHBlcih2YWx1ZSwgb3B0aW9ucywgX19hbHJlYWR5U2Vlbik7IH0pO1xuICAgICAgICByZXNfMS5sZW5ndGggPSB0b0FkZC5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdG9BZGQubGVuZ3RoOyBpIDwgbDsgaSsrKVxuICAgICAgICAgICAgcmVzXzFbaV0gPSB0b0FkZFtpXTtcbiAgICAgICAgcmV0dXJuIHJlc18xO1xuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlU2V0KHNvdXJjZSkgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHNvdXJjZSkgPT09IFNldC5wcm90b3R5cGUpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXhwb3J0TWFwc0FzT2JqZWN0cyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciByZXNfMiA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgbmV3IFNldCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJlc18yLmFkZCh0b0pTSGVscGVyKHZhbHVlLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXNfMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciByZXNfMyA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgW10sIG9wdGlvbnMpO1xuICAgICAgICAgICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmVzXzMucHVzaCh0b0pTSGVscGVyKHZhbHVlLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXNfMztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNPYnNlcnZhYmxlTWFwKHNvdXJjZSkgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHNvdXJjZSkgPT09IE1hcC5wcm90b3R5cGUpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuZXhwb3J0TWFwc0FzT2JqZWN0cyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciByZXNfNCA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwgbmV3IE1hcCgpLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgcmVzXzQuc2V0KGtleSwgdG9KU0hlbHBlcih2YWx1ZSwgb3B0aW9ucywgX19hbHJlYWR5U2VlbikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzXzQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcmVzXzUgPSBjYWNoZShfX2FscmVhZHlTZWVuLCBzb3VyY2UsIHt9LCBvcHRpb25zKTtcbiAgICAgICAgICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgcmVzXzVba2V5XSA9IHRvSlNIZWxwZXIodmFsdWUsIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzXzU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRmFsbGJhY2sgdG8gdGhlIHNpdHVhdGlvbiB0aGF0IHNvdXJjZSBpcyBhbiBPYnNlcnZhYmxlT2JqZWN0IG9yIGEgcGxhaW4gb2JqZWN0XG4gICAgdmFyIHJlcyA9IGNhY2hlKF9fYWxyZWFkeVNlZW4sIHNvdXJjZSwge30sIG9wdGlvbnMpO1xuICAgIGdldFBsYWluT2JqZWN0S2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXNba2V5XSA9IHRvSlNIZWxwZXIoc291cmNlW2tleV0sIG9wdGlvbnMsIF9fYWxyZWFkeVNlZW4pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXM7XG59XG5mdW5jdGlvbiB0b0pTKHNvdXJjZSwgb3B0aW9ucykge1xuICAgIC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiYm9vbGVhblwiKVxuICAgICAgICBvcHRpb25zID0geyBkZXRlY3RDeWNsZXM6IG9wdGlvbnMgfTtcbiAgICBpZiAoIW9wdGlvbnMpXG4gICAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICBvcHRpb25zLmRldGVjdEN5Y2xlcyA9XG4gICAgICAgIG9wdGlvbnMuZGV0ZWN0Q3ljbGVzID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gb3B0aW9ucy5yZWN1cnNlRXZlcnl0aGluZyA9PT0gdHJ1ZVxuICAgICAgICAgICAgOiBvcHRpb25zLmRldGVjdEN5Y2xlcyA9PT0gdHJ1ZTtcbiAgICB2YXIgX19hbHJlYWR5U2VlbjtcbiAgICBpZiAob3B0aW9ucy5kZXRlY3RDeWNsZXMpXG4gICAgICAgIF9fYWxyZWFkeVNlZW4gPSBuZXcgTWFwKCk7XG4gICAgcmV0dXJuIHRvSlNIZWxwZXIoc291cmNlLCBvcHRpb25zLCBfX2FscmVhZHlTZWVuKTtcbn1cblxuZnVuY3Rpb24gdHJhY2UoKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHZhciBlbnRlckJyZWFrUG9pbnQgPSBmYWxzZTtcbiAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gXCJib29sZWFuXCIpXG4gICAgICAgIGVudGVyQnJlYWtQb2ludCA9IGFyZ3MucG9wKCk7XG4gICAgdmFyIGRlcml2YXRpb24gPSBnZXRBdG9tRnJvbUFyZ3MoYXJncyk7XG4gICAgaWYgKCFkZXJpdmF0aW9uKSB7XG4gICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgXCIndHJhY2UoYnJlYWs/KScgY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgYSB0cmFja2VkIGNvbXB1dGVkIHZhbHVlIG9yIGEgUmVhY3Rpb24uIENvbnNpZGVyIHBhc3NpbmcgaW4gdGhlIGNvbXB1dGVkIHZhbHVlIG9yIHJlYWN0aW9uIGV4cGxpY2l0bHlcIik7XG4gICAgfVxuICAgIGlmIChkZXJpdmF0aW9uLmlzVHJhY2luZyA9PT0gVHJhY2VNb2RlLk5PTkUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbbW9ieC50cmFjZV0gJ1wiICsgZGVyaXZhdGlvbi5uYW1lICsgXCInIHRyYWNpbmcgZW5hYmxlZFwiKTtcbiAgICB9XG4gICAgZGVyaXZhdGlvbi5pc1RyYWNpbmcgPSBlbnRlckJyZWFrUG9pbnQgPyBUcmFjZU1vZGUuQlJFQUsgOiBUcmFjZU1vZGUuTE9HO1xufVxuZnVuY3Rpb24gZ2V0QXRvbUZyb21BcmdzKGFyZ3MpIHtcbiAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWxTdGF0ZS50cmFja2luZ0Rlcml2YXRpb247XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBnZXRBdG9tKGFyZ3NbMF0pO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gZ2V0QXRvbShhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICB9XG59XG5cbi8qKlxuICogRHVyaW5nIGEgdHJhbnNhY3Rpb24gbm8gdmlld3MgYXJlIHVwZGF0ZWQgdW50aWwgdGhlIGVuZCBvZiB0aGUgdHJhbnNhY3Rpb24uXG4gKiBUaGUgdHJhbnNhY3Rpb24gd2lsbCBiZSBydW4gc3luY2hyb25vdXNseSBub25ldGhlbGVzcy5cbiAqXG4gKiBAcGFyYW0gYWN0aW9uIGEgZnVuY3Rpb24gdGhhdCB1cGRhdGVzIHNvbWUgcmVhY3RpdmUgc3RhdGVcbiAqIEByZXR1cm5zIGFueSB2YWx1ZSB0aGF0IHdhcyByZXR1cm5lZCBieSB0aGUgJ2FjdGlvbicgcGFyYW1ldGVyLlxuICovXG5mdW5jdGlvbiB0cmFuc2FjdGlvbihhY3Rpb24sIHRoaXNBcmcpIHtcbiAgICBpZiAodGhpc0FyZyA9PT0gdm9pZCAwKSB7IHRoaXNBcmcgPSB1bmRlZmluZWQ7IH1cbiAgICBzdGFydEJhdGNoKCk7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5hcHBseSh0aGlzQXJnKTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIGVuZEJhdGNoKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB3aGVuKHByZWRpY2F0ZSwgYXJnMSwgYXJnMikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxIHx8IChhcmcxICYmIHR5cGVvZiBhcmcxID09PSBcIm9iamVjdFwiKSlcbiAgICAgICAgcmV0dXJuIHdoZW5Qcm9taXNlKHByZWRpY2F0ZSwgYXJnMSk7XG4gICAgcmV0dXJuIF93aGVuKHByZWRpY2F0ZSwgYXJnMSwgYXJnMiB8fCB7fSk7XG59XG5mdW5jdGlvbiBfd2hlbihwcmVkaWNhdGUsIGVmZmVjdCwgb3B0cykge1xuICAgIHZhciB0aW1lb3V0SGFuZGxlO1xuICAgIGlmICh0eXBlb2Ygb3B0cy50aW1lb3V0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghZGlzcG9zZXJbJG1vYnhdLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgICAgICBkaXNwb3NlcigpO1xuICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcihcIldIRU5fVElNRU9VVFwiKTtcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5vbkVycm9yKVxuICAgICAgICAgICAgICAgICAgICBvcHRzLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIG9wdHMudGltZW91dCk7XG4gICAgfVxuICAgIG9wdHMubmFtZSA9IG9wdHMubmFtZSB8fCBcIldoZW5AXCIgKyBnZXROZXh0SWQoKTtcbiAgICB2YXIgZWZmZWN0QWN0aW9uID0gY3JlYXRlQWN0aW9uKG9wdHMubmFtZSArIFwiLWVmZmVjdFwiLCBlZmZlY3QpO1xuICAgIHZhciBkaXNwb3NlciA9IGF1dG9ydW4oZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgaWYgKHByZWRpY2F0ZSgpKSB7XG4gICAgICAgICAgICByLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0SGFuZGxlKVxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcbiAgICAgICAgICAgIGVmZmVjdEFjdGlvbigpO1xuICAgICAgICB9XG4gICAgfSwgb3B0cyk7XG4gICAgcmV0dXJuIGRpc3Bvc2VyO1xufVxuZnVuY3Rpb24gd2hlblByb21pc2UocHJlZGljYXRlLCBvcHRzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBvcHRzICYmIG9wdHMub25FcnJvcilcbiAgICAgICAgcmV0dXJuIGZhaWwoXCJ0aGUgb3B0aW9ucyAnb25FcnJvcicgYW5kICdwcm9taXNlJyBjYW5ub3QgYmUgY29tYmluZWRcIik7XG4gICAgdmFyIGNhbmNlbDtcbiAgICB2YXIgcmVzID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgZGlzcG9zZXIgPSBfd2hlbihwcmVkaWNhdGUsIHJlc29sdmUsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRzKSwgeyBvbkVycm9yOiByZWplY3QgfSkpO1xuICAgICAgICBjYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaXNwb3NlcigpO1xuICAgICAgICAgICAgcmVqZWN0KFwiV0hFTl9DQU5DRUxMRURcIik7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmVzLmNhbmNlbCA9IGNhbmNlbDtcbiAgICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBnZXRBZG0odGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRhcmdldFskbW9ieF07XG59XG5mdW5jdGlvbiBpc1Byb3BlcnR5S2V5KHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIgfHwgdHlwZW9mIHZhbCA9PT0gXCJzeW1ib2xcIjtcbn1cbi8vIE9wdGltaXphdGlvbjogd2UgZG9uJ3QgbmVlZCB0aGUgaW50ZXJtZWRpYXRlIG9iamVjdHMgYW5kIGNvdWxkIGhhdmUgYSBjb21wbGV0ZWx5IGN1c3RvbSBhZG1pbmlzdHJhdGlvbiBmb3IgRHluYW1pY09iamVjdHMsXG4vLyBhbmQgc2tpcCBlaXRoZXIgdGhlIGludGVybmFsIHZhbHVlcyBtYXAsIG9yIHRoZSBiYXNlIG9iamVjdCB3aXRoIGl0cyBwcm9wZXJ0eSBkZXNjcmlwdG9ycyFcbnZhciBvYmplY3RQcm94eVRyYXBzID0ge1xuICAgIGhhczogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gJG1vYnggfHwgbmFtZSA9PT0gXCJjb25zdHJ1Y3RvclwiIHx8IG5hbWUgPT09IG1vYnhEaWRSdW5MYXp5SW5pdGlhbGl6ZXJzU3ltYm9sKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIHZhciBhZG0gPSBnZXRBZG0odGFyZ2V0KTtcbiAgICAgICAgLy8gTVdFOiBzaG91bGQgYGluYCBvcGVyYXRvciBiZSByZWFjdGl2ZT8gSWYgbm90LCBiZWxvdyBjb2RlIHBhdGggd2lsbCBiZSBmYXN0ZXIgLyBtb3JlIG1lbW9yeSBlZmZpY2llbnRcbiAgICAgICAgLy8gVE9ETzogY2hlY2sgcGVyZm9ybWFuY2Ugc3RhdHMhXG4gICAgICAgIC8vIGlmIChhZG0udmFsdWVzLmdldChuYW1lIGFzIHN0cmluZykpIHJldHVybiB0cnVlXG4gICAgICAgIGlmIChpc1Byb3BlcnR5S2V5KG5hbWUpKVxuICAgICAgICAgICAgcmV0dXJuIGFkbS5oYXMobmFtZSk7XG4gICAgICAgIHJldHVybiBuYW1lIGluIHRhcmdldDtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwgbmFtZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gJG1vYnggfHwgbmFtZSA9PT0gXCJjb25zdHJ1Y3RvclwiIHx8IG5hbWUgPT09IG1vYnhEaWRSdW5MYXp5SW5pdGlhbGl6ZXJzU3ltYm9sKVxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtuYW1lXTtcbiAgICAgICAgdmFyIGFkbSA9IGdldEFkbSh0YXJnZXQpO1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IGFkbS52YWx1ZXMuZ2V0KG5hbWUpO1xuICAgICAgICBpZiAob2JzZXJ2YWJsZSBpbnN0YW5jZW9mIEF0b20pIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBvYnNlcnZhYmxlLmdldCgpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBmaXhlcyAjMTc5NiwgYmVjYXVzZSBkZWxldGluZyBhIHByb3AgdGhhdCBoYXMgYW5cbiAgICAgICAgICAgICAgICAvLyB1bmRlZmluZWQgdmFsdWUgd29uJ3QgcmV0cmlnZ2VyIGEgb2JzZXJ2ZXIgKG5vIHZpc2libGUgZWZmZWN0KSxcbiAgICAgICAgICAgICAgICAvLyB0aGUgYXV0b3J1biB3b3VsZG4ndCBzdWJzY3JpYmUgdG8gZnV0dXJlIGtleSBjaGFuZ2VzIChzZWUgYWxzbyBuZXh0IGNvbW1lbnQpXG4gICAgICAgICAgICAgICAgYWRtLmhhcyhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIHN0YXJ0IGxpc3RlbmluZyB0byBmdXR1cmUga2V5c1xuICAgICAgICAvLyBub3RlIHRoYXQgd2Ugb25seSBkbyB0aGlzIGhlcmUgZm9yIG9wdGltaXphdGlvblxuICAgICAgICBpZiAoaXNQcm9wZXJ0eUtleShuYW1lKSlcbiAgICAgICAgICAgIGFkbS5oYXMobmFtZSk7XG4gICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGlmICghaXNQcm9wZXJ0eUtleShuYW1lKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgc2V0KHRhcmdldCwgbmFtZSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XG4gICAgICAgIGlmICghaXNQcm9wZXJ0eUtleShuYW1lKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGFkbSA9IGdldEFkbSh0YXJnZXQpO1xuICAgICAgICBhZG0ucmVtb3ZlKG5hbWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIG93bktleXM6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGFkbSA9IGdldEFkbSh0YXJnZXQpO1xuICAgICAgICBhZG0ua2V5c0F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3Qub3duS2V5cyh0YXJnZXQpO1xuICAgIH0sXG4gICAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgZmFpbChcIkR5bmFtaWMgb2JzZXJ2YWJsZSBvYmplY3RzIGNhbm5vdCBiZSBmcm96ZW5cIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuZnVuY3Rpb24gY3JlYXRlRHluYW1pY09ic2VydmFibGVPYmplY3QoYmFzZSkge1xuICAgIHZhciBwcm94eSA9IG5ldyBQcm94eShiYXNlLCBvYmplY3RQcm94eVRyYXBzKTtcbiAgICBiYXNlWyRtb2J4XS5wcm94eSA9IHByb3h5O1xuICAgIHJldHVybiBwcm94eTtcbn1cblxuZnVuY3Rpb24gaGFzSW50ZXJjZXB0b3JzKGludGVyY2VwdGFibGUpIHtcbiAgICByZXR1cm4gaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnMgIT09IHVuZGVmaW5lZCAmJiBpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9ycy5sZW5ndGggPiAwO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJJbnRlcmNlcHRvcihpbnRlcmNlcHRhYmxlLCBoYW5kbGVyKSB7XG4gICAgdmFyIGludGVyY2VwdG9ycyA9IGludGVyY2VwdGFibGUuaW50ZXJjZXB0b3JzIHx8IChpbnRlcmNlcHRhYmxlLmludGVyY2VwdG9ycyA9IFtdKTtcbiAgICBpbnRlcmNlcHRvcnMucHVzaChoYW5kbGVyKTtcbiAgICByZXR1cm4gb25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpZHggPSBpbnRlcmNlcHRvcnMuaW5kZXhPZihoYW5kbGVyKTtcbiAgICAgICAgaWYgKGlkeCAhPT0gLTEpXG4gICAgICAgICAgICBpbnRlcmNlcHRvcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpbnRlcmNlcHRDaGFuZ2UoaW50ZXJjZXB0YWJsZSwgY2hhbmdlKSB7XG4gICAgdmFyIHByZXZVID0gdW50cmFja2VkU3RhcnQoKTtcbiAgICB0cnkge1xuICAgICAgICAvLyBJbnRlcmNlcHRvciBjYW4gbW9kaWZ5IHRoZSBhcnJheSwgY29weSBpdCB0byBhdm9pZCBjb25jdXJyZW50IG1vZGlmaWNhdGlvbiwgc2VlICMxOTUwXG4gICAgICAgIHZhciBpbnRlcmNlcHRvcnMgPSBfX3NwcmVhZCgoaW50ZXJjZXB0YWJsZS5pbnRlcmNlcHRvcnMgfHwgW10pKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBpbnRlcmNlcHRvcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBjaGFuZ2UgPSBpbnRlcmNlcHRvcnNbaV0oY2hhbmdlKTtcbiAgICAgICAgICAgIGludmFyaWFudCghY2hhbmdlIHx8IGNoYW5nZS50eXBlLCBcIkludGVyY2VwdCBoYW5kbGVycyBzaG91bGQgcmV0dXJuIG5vdGhpbmcgb3IgYSBjaGFuZ2Ugb2JqZWN0XCIpO1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYW5nZTtcbiAgICB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHVudHJhY2tlZEVuZChwcmV2VSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYXNMaXN0ZW5lcnMobGlzdGVuYWJsZSkge1xuICAgIHJldHVybiBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycyAhPT0gdW5kZWZpbmVkICYmIGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzLmxlbmd0aCA+IDA7XG59XG5mdW5jdGlvbiByZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmFibGUsIGhhbmRsZXIpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gbGlzdGVuYWJsZS5jaGFuZ2VMaXN0ZW5lcnMgfHwgKGxpc3RlbmFibGUuY2hhbmdlTGlzdGVuZXJzID0gW10pO1xuICAgIGxpc3RlbmVycy5wdXNoKGhhbmRsZXIpO1xuICAgIHJldHVybiBvbmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlkeCA9IGxpc3RlbmVycy5pbmRleE9mKGhhbmRsZXIpO1xuICAgICAgICBpZiAoaWR4ICE9PSAtMSlcbiAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaWR4LCAxKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIG5vdGlmeUxpc3RlbmVycyhsaXN0ZW5hYmxlLCBjaGFuZ2UpIHtcbiAgICB2YXIgcHJldlUgPSB1bnRyYWNrZWRTdGFydCgpO1xuICAgIHZhciBsaXN0ZW5lcnMgPSBsaXN0ZW5hYmxlLmNoYW5nZUxpc3RlbmVycztcbiAgICBpZiAoIWxpc3RlbmVycylcbiAgICAgICAgcmV0dXJuO1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBsaXN0ZW5lcnNbaV0oY2hhbmdlKTtcbiAgICB9XG4gICAgdW50cmFja2VkRW5kKHByZXZVKTtcbn1cblxudmFyIE1BWF9TUExJQ0VfU0laRSA9IDEwMDAwOyAvLyBTZWUgZS5nLiBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngvaXNzdWVzLzg1OVxudmFyIGFycmF5VHJhcHMgPSB7XG4gICAgZ2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAkbW9ieClcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbJG1vYnhdO1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJsZW5ndGhcIilcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbJG1vYnhdLmdldEFycmF5TGVuZ3RoKCk7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5RXh0ZW5zaW9ucy5nZXQuY2FsbCh0YXJnZXQsIG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIiAmJiAhaXNOYU4obmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnJheUV4dGVuc2lvbnMuZ2V0LmNhbGwodGFyZ2V0LCBwYXJzZUludChuYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFycmF5RXh0ZW5zaW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIGFycmF5RXh0ZW5zaW9uc1tuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0W25hbWVdO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJsZW5ndGhcIikge1xuICAgICAgICAgICAgdGFyZ2V0WyRtb2J4XS5zZXRBcnJheUxlbmd0aCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBhcnJheUV4dGVuc2lvbnMuc2V0LmNhbGwodGFyZ2V0LCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiIHx8IGlzTmFOKG5hbWUpKSB7XG4gICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIG51bWVyaWMgc3RyaW5nXG4gICAgICAgICAgICBhcnJheUV4dGVuc2lvbnMuc2V0LmNhbGwodGFyZ2V0LCBwYXJzZUludChuYW1lKSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgZmFpbChcIk9ic2VydmFibGUgYXJyYXlzIGNhbm5vdCBiZSBmcm96ZW5cIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2YWJsZUFycmF5KGluaXRpYWxWYWx1ZXMsIGVuaGFuY2VyLCBuYW1lLCBvd25lZCkge1xuICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiT2JzZXJ2YWJsZUFycmF5QFwiICsgZ2V0TmV4dElkKCk7IH1cbiAgICBpZiAob3duZWQgPT09IHZvaWQgMCkgeyBvd25lZCA9IGZhbHNlOyB9XG4gICAgdmFyIGFkbSA9IG5ldyBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbihuYW1lLCBlbmhhbmNlciwgb3duZWQpO1xuICAgIGFkZEhpZGRlbkZpbmFsUHJvcChhZG0udmFsdWVzLCAkbW9ieCwgYWRtKTtcbiAgICB2YXIgcHJveHkgPSBuZXcgUHJveHkoYWRtLnZhbHVlcywgYXJyYXlUcmFwcyk7XG4gICAgYWRtLnByb3h5ID0gcHJveHk7XG4gICAgaWYgKGluaXRpYWxWYWx1ZXMgJiYgaW5pdGlhbFZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHByZXYgPSBhbGxvd1N0YXRlQ2hhbmdlc1N0YXJ0KHRydWUpO1xuICAgICAgICBhZG0uc3BsaWNlV2l0aEFycmF5KDAsIDAsIGluaXRpYWxWYWx1ZXMpO1xuICAgICAgICBhbGxvd1N0YXRlQ2hhbmdlc0VuZChwcmV2KTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3h5O1xufVxudmFyIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uKG5hbWUsIGVuaGFuY2VyLCBvd25lZCkge1xuICAgICAgICB0aGlzLm93bmVkID0gb3duZWQ7XG4gICAgICAgIHRoaXMudmFsdWVzID0gW107XG4gICAgICAgIHRoaXMucHJveHkgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubGFzdEtub3duTGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5hdG9tID0gbmV3IEF0b20obmFtZSB8fCBcIk9ic2VydmFibGVBcnJheUBcIiArIGdldE5leHRJZCgpKTtcbiAgICAgICAgdGhpcy5lbmhhbmNlciA9IGZ1bmN0aW9uIChuZXdWLCBvbGRWKSB7IHJldHVybiBlbmhhbmNlcihuZXdWLCBvbGRWLCBuYW1lICsgXCJbLi5dXCIpOyB9O1xuICAgIH1cbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuZGVoYW5jZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5kZWhhbmNlVmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkICYmIHZhbHVlcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlcy5tYXAodGhpcy5kZWhhbmNlcik7XG4gICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuaW50ZXJjZXB0ID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVySW50ZXJjZXB0b3IodGhpcywgaGFuZGxlcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIGlmIChmaXJlSW1tZWRpYXRlbHkgPT09IHZvaWQgMCkgeyBmaXJlSW1tZWRpYXRlbHkgPSBmYWxzZTsgfVxuICAgICAgICBpZiAoZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3BsaWNlXCIsXG4gICAgICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgYWRkZWQ6IHRoaXMudmFsdWVzLnNsaWNlKCksXG4gICAgICAgICAgICAgICAgYWRkZWRDb3VudDogdGhpcy52YWx1ZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHJlbW92ZWQ6IFtdLFxuICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudDogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyTGlzdGVuZXIodGhpcywgbGlzdGVuZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmdldEFycmF5TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICB9O1xuICAgIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5zZXRBcnJheUxlbmd0aCA9IGZ1bmN0aW9uIChuZXdMZW5ndGgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBuZXdMZW5ndGggIT09IFwibnVtYmVyXCIgfHwgbmV3TGVuZ3RoIDwgMClcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlttb2J4LmFycmF5XSBPdXQgb2YgcmFuZ2U6IFwiICsgbmV3TGVuZ3RoKTtcbiAgICAgICAgdmFyIGN1cnJlbnRMZW5ndGggPSB0aGlzLnZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGlmIChuZXdMZW5ndGggPT09IGN1cnJlbnRMZW5ndGgpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGVsc2UgaWYgKG5ld0xlbmd0aCA+IGN1cnJlbnRMZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBuZXdJdGVtcyA9IG5ldyBBcnJheShuZXdMZW5ndGggLSBjdXJyZW50TGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3TGVuZ3RoIC0gY3VycmVudExlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIG5ld0l0ZW1zW2ldID0gdW5kZWZpbmVkOyAvLyBObyBBcnJheS5maWxsIGV2ZXJ5d2hlcmUuLi5cbiAgICAgICAgICAgIHRoaXMuc3BsaWNlV2l0aEFycmF5KGN1cnJlbnRMZW5ndGgsIDAsIG5ld0l0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aGlzLnNwbGljZVdpdGhBcnJheShuZXdMZW5ndGgsIGN1cnJlbnRMZW5ndGggLSBuZXdMZW5ndGgpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLnVwZGF0ZUFycmF5TGVuZ3RoID0gZnVuY3Rpb24gKG9sZExlbmd0aCwgZGVsdGEpIHtcbiAgICAgICAgaWYgKG9sZExlbmd0aCAhPT0gdGhpcy5sYXN0S25vd25MZW5ndGgpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieF0gTW9kaWZpY2F0aW9uIGV4Y2VwdGlvbjogdGhlIGludGVybmFsIHN0cnVjdHVyZSBvZiBhbiBvYnNlcnZhYmxlIGFycmF5IHdhcyBjaGFuZ2VkLlwiKTtcbiAgICAgICAgdGhpcy5sYXN0S25vd25MZW5ndGggKz0gZGVsdGE7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuc3BsaWNlV2l0aEFycmF5ID0gZnVuY3Rpb24gKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQodGhpcy5hdG9tKTtcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMudmFsdWVzLmxlbmd0aDtcbiAgICAgICAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIGVsc2UgaWYgKGluZGV4ID4gbGVuZ3RoKVxuICAgICAgICAgICAgaW5kZXggPSBsZW5ndGg7XG4gICAgICAgIGVsc2UgaWYgKGluZGV4IDwgMClcbiAgICAgICAgICAgIGluZGV4ID0gTWF0aC5tYXgoMCwgbGVuZ3RoICsgaW5kZXgpO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gbGVuZ3RoIC0gaW5kZXg7XG4gICAgICAgIGVsc2UgaWYgKGRlbGV0ZUNvdW50ID09PSB1bmRlZmluZWQgfHwgZGVsZXRlQ291bnQgPT09IG51bGwpXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDA7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oZGVsZXRlQ291bnQsIGxlbmd0aCAtIGluZGV4KSk7XG4gICAgICAgIGlmIChuZXdJdGVtcyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgbmV3SXRlbXMgPSBFTVBUWV9BUlJBWTtcbiAgICAgICAgaWYgKGhhc0ludGVyY2VwdG9ycyh0aGlzKSkge1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IGludGVyY2VwdENoYW5nZSh0aGlzLCB7XG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwic3BsaWNlXCIsXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgIHJlbW92ZWRDb3VudDogZGVsZXRlQ291bnQsXG4gICAgICAgICAgICAgICAgYWRkZWQ6IG5ld0l0ZW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybiBFTVBUWV9BUlJBWTtcbiAgICAgICAgICAgIGRlbGV0ZUNvdW50ID0gY2hhbmdlLnJlbW92ZWRDb3VudDtcbiAgICAgICAgICAgIG5ld0l0ZW1zID0gY2hhbmdlLmFkZGVkO1xuICAgICAgICB9XG4gICAgICAgIG5ld0l0ZW1zID0gbmV3SXRlbXMubGVuZ3RoID09PSAwID8gbmV3SXRlbXMgOiBuZXdJdGVtcy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIF90aGlzLmVuaGFuY2VyKHYsIHVuZGVmaW5lZCk7IH0pO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoRGVsdGEgPSBuZXdJdGVtcy5sZW5ndGggLSBkZWxldGVDb3VudDtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXJyYXlMZW5ndGgobGVuZ3RoLCBsZW5ndGhEZWx0YSk7IC8vIGNoZWNrcyBpZiBpbnRlcm5hbCBhcnJheSB3YXNuJ3QgbW9kaWZpZWRcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzID0gdGhpcy5zcGxpY2VJdGVtc0ludG9WYWx1ZXMoaW5kZXgsIGRlbGV0ZUNvdW50LCBuZXdJdGVtcyk7XG4gICAgICAgIGlmIChkZWxldGVDb3VudCAhPT0gMCB8fCBuZXdJdGVtcy5sZW5ndGggIT09IDApXG4gICAgICAgICAgICB0aGlzLm5vdGlmeUFycmF5U3BsaWNlKGluZGV4LCBuZXdJdGVtcywgcmVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlcyhyZXMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLnNwbGljZUl0ZW1zSW50b1ZhbHVlcyA9IGZ1bmN0aW9uIChpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKG5ld0l0ZW1zLmxlbmd0aCA8IE1BWF9TUExJQ0VfU0laRSkge1xuICAgICAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMudmFsdWVzKS5zcGxpY2UuYXBwbHkoX2EsIF9fc3ByZWFkKFtpbmRleCwgZGVsZXRlQ291bnRdLCBuZXdJdGVtcykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlcyA9IHRoaXMudmFsdWVzLnNsaWNlKGluZGV4LCBpbmRleCArIGRlbGV0ZUNvdW50KTtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXNcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgaW5kZXgpXG4gICAgICAgICAgICAgICAgLmNvbmNhdChuZXdJdGVtcywgdGhpcy52YWx1ZXMuc2xpY2UoaW5kZXggKyBkZWxldGVDb3VudCkpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLm5vdGlmeUFycmF5Q2hpbGRVcGRhdGUgPSBmdW5jdGlvbiAoaW5kZXgsIG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB2YXIgbm90aWZ5U3B5ID0gIXRoaXMub3duZWQgJiYgaXNTcHlFbmFibGVkKCk7XG4gICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAvLyBUaGUgcmVhc29uIHdoeSB0aGlzIGlzIG9uIHJpZ2h0IGhhbmQgc2lkZSBoZXJlIChhbmQgbm90IGFib3ZlKSwgaXMgdGhpcyB3YXkgdGhlIHVnbGlmaWVyIHdpbGwgZHJvcCBpdCwgYnV0IGl0IHdvbid0XG4gICAgICAgIC8vIGNhdXNlIGFueSBydW50aW1lIG92ZXJoZWFkIGluIGRldmVsb3BtZW50IG1vZGUgd2l0aG91dCBOT0RFX0VOViBzZXQsIHVubGVzcyBzcHlpbmcgaXMgZW5hYmxlZFxuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9fYXNzaWduKF9fYXNzaWduKHt9LCBjaGFuZ2UpLCB7IG5hbWU6IHRoaXMuYXRvbS5uYW1lIH0pKTtcbiAgICAgICAgdGhpcy5hdG9tLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgaWYgKG5vdGlmeSlcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZUFycmF5QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLm5vdGlmeUFycmF5U3BsaWNlID0gZnVuY3Rpb24gKGluZGV4LCBhZGRlZCwgcmVtb3ZlZCkge1xuICAgICAgICB2YXIgbm90aWZ5U3B5ID0gIXRoaXMub3duZWQgJiYgaXNTcHlFbmFibGVkKCk7XG4gICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJzcGxpY2VcIixcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgcmVtb3ZlZDogcmVtb3ZlZCxcbiAgICAgICAgICAgICAgICBhZGRlZDogYWRkZWQsXG4gICAgICAgICAgICAgICAgcmVtb3ZlZENvdW50OiByZW1vdmVkLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBhZGRlZENvdW50OiBhZGRlZC5sZW5ndGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICBzcHlSZXBvcnRTdGFydChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY2hhbmdlKSwgeyBuYW1lOiB0aGlzLmF0b20ubmFtZSB9KSk7XG4gICAgICAgIHRoaXMuYXRvbS5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgICAgIC8vIGNvbmZvcm06IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L29ic2VydmVcbiAgICAgICAgaWYgKG5vdGlmeSlcbiAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGVBcnJheUFkbWluaXN0cmF0aW9uO1xufSgpKTtcbnZhciBhcnJheUV4dGVuc2lvbnMgPSB7XG4gICAgaW50ZXJjZXB0OiBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gdGhpc1skbW9ieF0uaW50ZXJjZXB0KGhhbmRsZXIpO1xuICAgIH0sXG4gICAgb2JzZXJ2ZTogZnVuY3Rpb24gKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpIHtcbiAgICAgICAgaWYgKGZpcmVJbW1lZGlhdGVseSA9PT0gdm9pZCAwKSB7IGZpcmVJbW1lZGlhdGVseSA9IGZhbHNlOyB9XG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcbiAgICAgICAgcmV0dXJuIGFkbS5vYnNlcnZlKGxpc3RlbmVyLCBmaXJlSW1tZWRpYXRlbHkpO1xuICAgIH0sXG4gICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKDApO1xuICAgIH0sXG4gICAgcmVwbGFjZTogZnVuY3Rpb24gKG5ld0l0ZW1zKSB7XG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcbiAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXkoMCwgYWRtLnZhbHVlcy5sZW5ndGgsIG5ld0l0ZW1zKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIHRoaXMgYXJyYXkgYmFjayB0byBhIChzaGFsbG93KSBqYXZhc2NyaXB0IHN0cnVjdHVyZS5cbiAgICAgKiBGb3IgYSBkZWVwIGNsb25lIHVzZSBtb2J4LnRvSlNcbiAgICAgKi9cbiAgICB0b0pTOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNsaWNlKCk7XG4gICAgfSxcbiAgICB0b0pTT046IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVXNlZCBieSBKU09OLnN0cmluZ2lmeVxuICAgICAgICByZXR1cm4gdGhpcy50b0pTKCk7XG4gICAgfSxcbiAgICAvKlxuICAgICAqIGZ1bmN0aW9ucyB0aGF0IGRvIGFsdGVyIHRoZSBpbnRlcm5hbCBzdHJ1Y3R1cmUgb2YgdGhlIGFycmF5LCAoYmFzZWQgb24gbGliLmVzNi5kLnRzKVxuICAgICAqIHNpbmNlIHRoZXNlIGZ1bmN0aW9ucyBhbHRlciB0aGUgaW5uZXIgc3RydWN0dXJlIG9mIHRoZSBhcnJheSwgdGhlIGhhdmUgc2lkZSBlZmZlY3RzLlxuICAgICAqIEJlY2F1c2UgdGhlIGhhdmUgc2lkZSBlZmZlY3RzLCB0aGV5IHNob3VsZCBub3QgYmUgdXNlZCBpbiBjb21wdXRlZCBmdW5jdGlvbixcbiAgICAgKiBhbmQgZm9yIHRoYXQgcmVhc29uIHRoZSBkbyBub3QgY2FsbCBkZXBlbmRlbmN5U3RhdGUubm90aWZ5T2JzZXJ2ZWRcbiAgICAgKi9cbiAgICBzcGxpY2U6IGZ1bmN0aW9uIChpbmRleCwgZGVsZXRlQ291bnQpIHtcbiAgICAgICAgdmFyIG5ld0l0ZW1zID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMjsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBuZXdJdGVtc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG4gICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gYWRtLnNwbGljZVdpdGhBcnJheShpbmRleCk7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkbS5zcGxpY2VXaXRoQXJyYXkoaW5kZXgsIGRlbGV0ZUNvdW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWRtLnNwbGljZVdpdGhBcnJheShpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKTtcbiAgICB9LFxuICAgIHNwbGljZVdpdGhBcnJheTogZnVuY3Rpb24gKGluZGV4LCBkZWxldGVDb3VudCwgbmV3SXRlbXMpIHtcbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuICAgICAgICByZXR1cm4gYWRtLnNwbGljZVdpdGhBcnJheShpbmRleCwgZGVsZXRlQ291bnQsIG5ld0l0ZW1zKTtcbiAgICB9LFxuICAgIHB1c2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBpdGVtc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcbiAgICAgICAgYWRtLnNwbGljZVdpdGhBcnJheShhZG0udmFsdWVzLmxlbmd0aCwgMCwgaXRlbXMpO1xuICAgICAgICByZXR1cm4gYWRtLnZhbHVlcy5sZW5ndGg7XG4gICAgfSxcbiAgICBwb3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BsaWNlKE1hdGgubWF4KHRoaXNbJG1vYnhdLnZhbHVlcy5sZW5ndGggLSAxLCAwKSwgMSlbMF07XG4gICAgfSxcbiAgICBzaGlmdDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGxpY2UoMCwgMSlbMF07XG4gICAgfSxcbiAgICB1bnNoaWZ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgaXRlbXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG4gICAgICAgIGFkbS5zcGxpY2VXaXRoQXJyYXkoMCwgMCwgaXRlbXMpO1xuICAgICAgICByZXR1cm4gYWRtLnZhbHVlcy5sZW5ndGg7XG4gICAgfSxcbiAgICByZXZlcnNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHJldmVyc2UgYnkgZGVmYXVsdCBtdXRhdGVzIGluIHBsYWNlIGJlZm9yZSByZXR1cm5pbmcgdGhlIHJlc3VsdFxuICAgICAgICAvLyB3aGljaCBtYWtlcyBpdCBib3RoIGEgJ2Rlcml2YXRpb24nIGFuZCBhICdtdXRhdGlvbicuXG4gICAgICAgIC8vIHNvIHdlIGRldmlhdGUgZnJvbSB0aGUgZGVmYXVsdCBhbmQganVzdCBtYWtlIGl0IGFuIGRlcnZpdGF0aW9uXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlttb2J4XSBgb2JzZXJ2YWJsZUFycmF5LnJldmVyc2UoKWAgd2lsbCBub3QgdXBkYXRlIHRoZSBhcnJheSBpbiBwbGFjZS4gVXNlIGBvYnNlcnZhYmxlQXJyYXkuc2xpY2UoKS5yZXZlcnNlKClgIHRvIHN1cHByZXNzIHRoaXMgd2FybmluZyBhbmQgcGVyZm9ybSB0aGUgb3BlcmF0aW9uIG9uIGEgY29weSwgb3IgYG9ic2VydmFibGVBcnJheS5yZXBsYWNlKG9ic2VydmFibGVBcnJheS5zbGljZSgpLnJldmVyc2UoKSlgIHRvIHJldmVyc2UgJiB1cGRhdGUgaW4gcGxhY2VcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNsb25lID0gdGhpcy5zbGljZSgpO1xuICAgICAgICByZXR1cm4gY2xvbmUucmV2ZXJzZS5hcHBseShjbG9uZSwgYXJndW1lbnRzKTtcbiAgICB9LFxuICAgIHNvcnQ6IGZ1bmN0aW9uIChjb21wYXJlRm4pIHtcbiAgICAgICAgLy8gc29ydCBieSBkZWZhdWx0IG11dGF0ZXMgaW4gcGxhY2UgYmVmb3JlIHJldHVybmluZyB0aGUgcmVzdWx0XG4gICAgICAgIC8vIHdoaWNoIGdvZXMgYWdhaW5zdCBhbGwgZ29vZCBwcmFjdGljZXMuIExldCdzIG5vdCBjaGFuZ2UgdGhlIGFycmF5IGluIHBsYWNlIVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0gYG9ic2VydmFibGVBcnJheS5zb3J0KClgIHdpbGwgbm90IHVwZGF0ZSB0aGUgYXJyYXkgaW4gcGxhY2UuIFVzZSBgb2JzZXJ2YWJsZUFycmF5LnNsaWNlKCkuc29ydCgpYCB0byBzdXBwcmVzcyB0aGlzIHdhcm5pbmcgYW5kIHBlcmZvcm0gdGhlIG9wZXJhdGlvbiBvbiBhIGNvcHksIG9yIGBvYnNlcnZhYmxlQXJyYXkucmVwbGFjZShvYnNlcnZhYmxlQXJyYXkuc2xpY2UoKS5zb3J0KCkpYCB0byBzb3J0ICYgdXBkYXRlIGluIHBsYWNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjbG9uZSA9IHRoaXMuc2xpY2UoKTtcbiAgICAgICAgcmV0dXJuIGNsb25lLnNvcnQuYXBwbHkoY2xvbmUsIGFyZ3VtZW50cyk7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgYWRtID0gdGhpc1skbW9ieF07XG4gICAgICAgIHZhciBpZHggPSBhZG0uZGVoYW5jZVZhbHVlcyhhZG0udmFsdWVzKS5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgZ2V0OiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuICAgICAgICBpZiAoYWRtKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCBhZG0udmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGFkbS5hdG9tLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkbS5kZWhhbmNlVmFsdWUoYWRtLnZhbHVlc1tpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiW21vYnguYXJyYXldIEF0dGVtcHQgdG8gcmVhZCBhbiBhcnJheSBpbmRleCAoXCIgKyBpbmRleCArIFwiKSB0aGF0IGlzIG91dCBvZiBib3VuZHMgKFwiICsgYWRtLnZhbHVlcy5sZW5ndGggKyBcIikuIFBsZWFzZSBjaGVjayBsZW5ndGggZmlyc3QuIE91dCBvZiBib3VuZCBpbmRpY2VzIHdpbGwgbm90IGJlIHRyYWNrZWQgYnkgTW9iWFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiAoaW5kZXgsIG5ld1ZhbHVlKSB7XG4gICAgICAgIHZhciBhZG0gPSB0aGlzWyRtb2J4XTtcbiAgICAgICAgdmFyIHZhbHVlcyA9IGFkbS52YWx1ZXM7XG4gICAgICAgIGlmIChpbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBhdCBpbmRleCBpbiByYW5nZVxuICAgICAgICAgICAgY2hlY2tJZlN0YXRlTW9kaWZpY2F0aW9uc0FyZUFsbG93ZWQoYWRtLmF0b20pO1xuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gdmFsdWVzW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnMoYWRtKSkge1xuICAgICAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UoYWRtLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogYWRtLnByb3h5LFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGFkbS5lbmhhbmNlcihuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgdmFyIGNoYW5nZWQgPSBuZXdWYWx1ZSAhPT0gb2xkVmFsdWU7XG4gICAgICAgICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICBhZG0ubm90aWZ5QXJyYXlDaGlsZFVwZGF0ZShpbmRleCwgbmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gdmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gYWRkIGEgbmV3IGl0ZW1cbiAgICAgICAgICAgIGFkbS5zcGxpY2VXaXRoQXJyYXkoaW5kZXgsIDAsIFtuZXdWYWx1ZV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gb3V0IG9mIGJvdW5kc1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYnguYXJyYXldIEluZGV4IG91dCBvZiBib3VuZHMsIFwiICsgaW5kZXggKyBcIiBpcyBsYXJnZXIgdGhhbiBcIiArIHZhbHVlcy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxufTtcbltcbiAgICBcImNvbmNhdFwiLFxuICAgIFwiZXZlcnlcIixcbiAgICBcImZpbHRlclwiLFxuICAgIFwiZm9yRWFjaFwiLFxuICAgIFwiaW5kZXhPZlwiLFxuICAgIFwiam9pblwiLFxuICAgIFwibGFzdEluZGV4T2ZcIixcbiAgICBcIm1hcFwiLFxuICAgIFwicmVkdWNlXCIsXG4gICAgXCJyZWR1Y2VSaWdodFwiLFxuICAgIFwic2xpY2VcIixcbiAgICBcInNvbWVcIixcbiAgICBcInRvU3RyaW5nXCIsXG4gICAgXCJ0b0xvY2FsZVN0cmluZ1wiXG5dLmZvckVhY2goZnVuY3Rpb24gKGZ1bmNOYW1lKSB7XG4gICAgYXJyYXlFeHRlbnNpb25zW2Z1bmNOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFkbSA9IHRoaXNbJG1vYnhdO1xuICAgICAgICBhZG0uYXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgICB2YXIgcmVzID0gYWRtLmRlaGFuY2VWYWx1ZXMoYWRtLnZhbHVlcyk7XG4gICAgICAgIHJldHVybiByZXNbZnVuY05hbWVdLmFwcGx5KHJlcywgYXJndW1lbnRzKTtcbiAgICB9O1xufSk7XG52YXIgaXNPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbiA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvblwiLCBPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbik7XG5mdW5jdGlvbiBpc09ic2VydmFibGVBcnJheSh0aGluZykge1xuICAgIHJldHVybiBpc09iamVjdCh0aGluZykgJiYgaXNPYnNlcnZhYmxlQXJyYXlBZG1pbmlzdHJhdGlvbih0aGluZ1skbW9ieF0pO1xufVxuXG52YXIgX2E7XG52YXIgT2JzZXJ2YWJsZU1hcE1hcmtlciA9IHt9O1xuLy8ganVzdCBleHRlbmQgTWFwPyBTZWUgYWxzbyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9uZXN0aGFydXMvMTNiNGQ3NGYyZWY0YTJmNDM1N2RiZDNmYzIzYzFlNTRcbi8vIEJ1dDogaHR0cHM6Ly9naXRodWIuY29tL21vYnhqcy9tb2J4L2lzc3Vlcy8xNTU2XG52YXIgT2JzZXJ2YWJsZU1hcCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlTWFwKGluaXRpYWxEYXRhLCBlbmhhbmNlciwgbmFtZSkge1xuICAgICAgICBpZiAoZW5oYW5jZXIgPT09IHZvaWQgMCkgeyBlbmhhbmNlciA9IGRlZXBFbmhhbmNlcjsgfVxuICAgICAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7IG5hbWUgPSBcIk9ic2VydmFibGVNYXBAXCIgKyBnZXROZXh0SWQoKTsgfVxuICAgICAgICB0aGlzLmVuaGFuY2VyID0gZW5oYW5jZXI7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXNbX2FdID0gT2JzZXJ2YWJsZU1hcE1hcmtlcjtcbiAgICAgICAgdGhpcy5fa2V5c0F0b20gPSBjcmVhdGVBdG9tKHRoaXMubmFtZSArIFwiLmtleXMoKVwiKTtcbiAgICAgICAgdGhpc1tTeW1ib2wudG9TdHJpbmdUYWddID0gXCJNYXBcIjtcbiAgICAgICAgaWYgKHR5cGVvZiBNYXAgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibW9ieC5tYXAgcmVxdWlyZXMgTWFwIHBvbHlmaWxsIGZvciB0aGUgY3VycmVudCBicm93c2VyLiBDaGVjayBiYWJlbC1wb2x5ZmlsbCBvciBjb3JlLWpzL2VzNi9tYXAuanNcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5faGFzTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLm1lcmdlKGluaXRpYWxEYXRhKTtcbiAgICB9XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuX2hhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuaGFzKGtleSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghZ2xvYmFsU3RhdGUudHJhY2tpbmdEZXJpdmF0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhcyhrZXkpO1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLl9oYXNNYXAuZ2V0KGtleSk7XG4gICAgICAgIGlmICghZW50cnkpIHtcbiAgICAgICAgICAgIC8vIHRvZG86IHJlcGxhY2Ugd2l0aCBhdG9tIChicmVha2luZyBjaGFuZ2UpXG4gICAgICAgICAgICB2YXIgbmV3RW50cnkgPSAoZW50cnkgPSBuZXcgT2JzZXJ2YWJsZVZhbHVlKHRoaXMuX2hhcyhrZXkpLCByZWZlcmVuY2VFbmhhbmNlciwgdGhpcy5uYW1lICsgXCIuXCIgKyBzdHJpbmdpZnlLZXkoa2V5KSArIFwiP1wiLCBmYWxzZSkpO1xuICAgICAgICAgICAgdGhpcy5faGFzTWFwLnNldChrZXksIG5ld0VudHJ5KTtcbiAgICAgICAgICAgIG9uQmVjb21lVW5vYnNlcnZlZChuZXdFbnRyeSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX2hhc01hcC5kZWxldGUoa2V5KTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudHJ5LmdldCgpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGhhc0tleSA9IHRoaXMuX2hhcyhrZXkpO1xuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBoYXNLZXkgPyBcInVwZGF0ZVwiIDogXCJhZGRcIixcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIHZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYWRkVmFsdWUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgIG5hbWU6IGtleVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWNoYW5nZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2hhcyhrZXkpKSB7XG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogdGhpcy5fZGF0YS5nZXQoa2V5KS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9fYXNzaWduKF9fYXNzaWduKHt9LCBjaGFuZ2UpLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9rZXlzQXRvbS5yZXBvcnRDaGFuZ2VkKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuX3VwZGF0ZUhhc01hcEVudHJ5KGtleSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHZhciBvYnNlcnZhYmxlID0gX3RoaXMuX2RhdGEuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgb2JzZXJ2YWJsZS5zZXROZXdWYWx1ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIF90aGlzLl9kYXRhLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5fdXBkYXRlSGFzTWFwRW50cnkgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLl9oYXNNYXAuZ2V0KGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgZW50cnkuc2V0TmV3VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5fdXBkYXRlVmFsdWUgPSBmdW5jdGlvbiAoa2V5LCBuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaXMuX2RhdGEuZ2V0KGtleSk7XG4gICAgICAgIG5ld1ZhbHVlID0gb2JzZXJ2YWJsZS5wcmVwYXJlTmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICBpZiAobmV3VmFsdWUgIT09IGdsb2JhbFN0YXRlLlVOQ0hBTkdFRCkge1xuICAgICAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xuICAgICAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9ic2VydmFibGUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9fYXNzaWduKF9fYXNzaWduKHt9LCBjaGFuZ2UpLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xuICAgICAgICAgICAgb2JzZXJ2YWJsZS5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLl9hZGRWYWx1ZSA9IGZ1bmN0aW9uIChrZXksIG5ld1ZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKHRoaXMuX2tleXNBdG9tKTtcbiAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBuZXcgT2JzZXJ2YWJsZVZhbHVlKG5ld1ZhbHVlLCBfdGhpcy5lbmhhbmNlciwgX3RoaXMubmFtZSArIFwiLlwiICsgc3RyaW5naWZ5S2V5KGtleSksIGZhbHNlKTtcbiAgICAgICAgICAgIF90aGlzLl9kYXRhLnNldChrZXksIG9ic2VydmFibGUpO1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBvYnNlcnZhYmxlLnZhbHVlOyAvLyB2YWx1ZSBtaWdodCBoYXZlIGJlZW4gY2hhbmdlZFxuICAgICAgICAgICAgX3RoaXMuX3VwZGF0ZUhhc01hcEVudHJ5KGtleSwgdHJ1ZSk7XG4gICAgICAgICAgICBfdGhpcy5fa2V5c0F0b20ucmVwb3J0Q2hhbmdlZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xuICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJhZGRcIixcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9fYXNzaWduKF9fYXNzaWduKHt9LCBjaGFuZ2UpLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xuICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICh0aGlzLmhhcyhrZXkpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVoYW5jZVZhbHVlKHRoaXMuX2RhdGEuZ2V0KGtleSkuZ2V0KCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlVmFsdWUodW5kZWZpbmVkKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLmRlaGFuY2VWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5kZWhhbmNlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kZWhhbmNlcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fa2V5c0F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEua2V5cygpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSAwO1xuICAgICAgICB2YXIga2V5cyA9IEFycmF5LmZyb20odGhpcy5rZXlzKCkpO1xuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dEluZGV4IDwga2V5cy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgPyB7IHZhbHVlOiBzZWxmLmdldChrZXlzW25leHRJbmRleCsrXSksIGRvbmU6IGZhbHNlIH1cbiAgICAgICAgICAgICAgICAgICAgOiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSAwO1xuICAgICAgICB2YXIga2V5cyA9IEFycmF5LmZyb20odGhpcy5rZXlzKCkpO1xuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV4dEluZGV4IDwga2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbbmV4dEluZGV4KytdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtrZXksIHNlbGYuZ2V0KGtleSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlWyhfYSA9ICRtb2J4LCBTeW1ib2wuaXRlcmF0b3IpXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllcygpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgICAgICB2YXIgZV8xLCBfYjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9jID0gX192YWx1ZXModGhpcyksIF9kID0gX2MubmV4dCgpOyAhX2QuZG9uZTsgX2QgPSBfYy5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2UgPSBfX3JlYWQoX2QudmFsdWUsIDIpLCBrZXkgPSBfZVswXSwgdmFsdWUgPSBfZVsxXTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbHVlLCBrZXksIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2QgJiYgIV9kLmRvbmUgJiYgKF9iID0gX2MucmV0dXJuKSkgX2IuY2FsbChfYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKiBNZXJnZSBhbm90aGVyIG9iamVjdCBpbnRvIHRoaXMgb2JqZWN0LCByZXR1cm5zIHRoaXMuICovXG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAob3RoZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZU1hcChvdGhlcikpIHtcbiAgICAgICAgICAgIG90aGVyID0gb3RoZXIudG9KUygpO1xuICAgICAgICB9XG4gICAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpc1BsYWluT2JqZWN0KG90aGVyKSlcbiAgICAgICAgICAgICAgICBnZXRQbGFpbk9iamVjdEtleXMob3RoZXIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gX3RoaXMuc2V0KGtleSwgb3RoZXJba2V5XSk7IH0pO1xuICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShvdGhlcikpXG4gICAgICAgICAgICAgICAgb3RoZXIuZm9yRWFjaChmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9jID0gX19yZWFkKF9iLCAyKSwga2V5ID0gX2NbMF0sIHZhbHVlID0gX2NbMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbHNlIGlmIChpc0VTNk1hcChvdGhlcikpIHtcbiAgICAgICAgICAgICAgICBpZiAob3RoZXIuY29uc3RydWN0b3IgIT09IE1hcClcbiAgICAgICAgICAgICAgICAgICAgZmFpbChcIkNhbm5vdCBpbml0aWFsaXplIGZyb20gY2xhc3NlcyB0aGF0IGluaGVyaXQgZnJvbSBNYXA6IFwiICsgb3RoZXIuY29uc3RydWN0b3IubmFtZSk7IC8vIHByZXR0aWVyLWlnbm9yZVxuICAgICAgICAgICAgICAgIG90aGVyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHsgcmV0dXJuIF90aGlzLnNldChrZXksIHZhbHVlKTsgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvdGhlciAhPT0gbnVsbCAmJiBvdGhlciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIGZhaWwoXCJDYW5ub3QgaW5pdGlhbGl6ZSBtYXAgZnJvbSBcIiArIG90aGVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRyYW5zYWN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVudHJhY2tlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVfMiwgX2I7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2MgPSBfX3ZhbHVlcyhfdGhpcy5rZXlzKCkpLCBfZCA9IF9jLm5leHQoKTsgIV9kLmRvbmU7IF9kID0gX2MubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gX2QudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kICYmICFfZC5kb25lICYmIChfYiA9IF9jLnJldHVybikpIF9iLmNhbGwoX2MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBncmFiIGFsbCB0aGUga2V5cyB0aGF0IGFyZSBwcmVzZW50IGluIHRoZSBuZXcgbWFwIGJ1dCBub3QgcHJlc2VudCBpbiB0aGUgY3VycmVudCBtYXBcbiAgICAgICAgICAgIC8vIGFuZCBkZWxldGUgdGhlbSBmcm9tIHRoZSBtYXAsIHRoZW4gbWVyZ2UgdGhlIG5ldyBtYXBcbiAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBjYXVzZSByZWFjdGlvbnMgb25seSBvbiBjaGFuZ2VkIHZhbHVlc1xuICAgICAgICAgICAgdmFyIG5ld0tleXMgPSBnZXRNYXBMaWtlS2V5cyh2YWx1ZXMpO1xuICAgICAgICAgICAgdmFyIG9sZEtleXMgPSBBcnJheS5mcm9tKF90aGlzLmtleXMoKSk7XG4gICAgICAgICAgICB2YXIgbWlzc2luZ0tleXMgPSBvbGRLZXlzLmZpbHRlcihmdW5jdGlvbiAoaykgeyByZXR1cm4gbmV3S2V5cy5pbmRleE9mKGspID09PSAtMTsgfSk7XG4gICAgICAgICAgICBtaXNzaW5nS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IHJldHVybiBfdGhpcy5kZWxldGUoayk7IH0pO1xuICAgICAgICAgICAgX3RoaXMubWVyZ2UodmFsdWVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9ic2VydmFibGVNYXAucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2tleXNBdG9tLnJlcG9ydE9ic2VydmVkKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5zaXplO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcGxhaW4gb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGlzIG1hcC5cbiAgICAgKiBOb3RlIHRoYXQgYWxsIHRoZSBrZXlzIGJlaW5nIHN0cmluZ2lmaWVkLlxuICAgICAqIElmIHRoZXJlIGFyZSBkdXBsaWNhdGluZyBrZXlzIGFmdGVyIGNvbnZlcnRpbmcgdGhlbSB0byBzdHJpbmdzLCBiZWhhdmlvdXIgaXMgdW5kZXRlcm1pbmVkLlxuICAgICAqL1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnRvUE9KTyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVfMywgX2I7XG4gICAgICAgIHZhciByZXMgPSB7fTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9jID0gX192YWx1ZXModGhpcyksIF9kID0gX2MubmV4dCgpOyAhX2QuZG9uZTsgX2QgPSBfYy5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2UgPSBfX3JlYWQoX2QudmFsdWUsIDIpLCBrZXkgPSBfZVswXSwgdmFsdWUgPSBfZVsxXTtcbiAgICAgICAgICAgICAgICAvLyBXZSBsaWUgYWJvdXQgc3ltYm9sIGtleSB0eXBlcyBkdWUgdG8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8xODYzXG4gICAgICAgICAgICAgICAgcmVzW3R5cGVvZiBrZXkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBzdHJpbmdpZnlLZXkoa2V5KV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8zXzEpIHsgZV8zID0geyBlcnJvcjogZV8zXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9kICYmICFfZC5kb25lICYmIChfYiA9IF9jLnJldHVybikpIF9iLmNhbGwoX2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzMpIHRocm93IGVfMy5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc2hhbGxvdyBub24gb2JzZXJ2YWJsZSBvYmplY3QgY2xvbmUgb2YgdGhpcyBtYXAuXG4gICAgICogTm90ZSB0aGF0IHRoZSB2YWx1ZXMgbWlndGggc3RpbGwgYmUgb2JzZXJ2YWJsZS4gRm9yIGEgZGVlcCBjbG9uZSB1c2UgbW9ieC50b0pTLlxuICAgICAqL1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLnRvSlMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgTWFwKHRoaXMpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBVc2VkIGJ5IEpTT04uc3RyaW5naWZ5XG4gICAgICAgIHJldHVybiB0aGlzLnRvUE9KTygpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU1hcC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiAodGhpcy5uYW1lICtcbiAgICAgICAgICAgIFwiW3sgXCIgK1xuICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLmtleXMoKSlcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHN0cmluZ2lmeUtleShrZXkpICsgXCI6IFwiICsgKFwiXCIgKyBfdGhpcy5nZXQoa2V5KSk7IH0pXG4gICAgICAgICAgICAgICAgLmpvaW4oXCIsIFwiKSArXG4gICAgICAgICAgICBcIiB9XVwiKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE9ic2VydmVzIHRoaXMgb2JqZWN0LiBUcmlnZ2VycyBmb3IgdGhlIGV2ZW50cyAnYWRkJywgJ3VwZGF0ZScgYW5kICdkZWxldGUnLlxuICAgICAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L29ic2VydmVcbiAgICAgKiBmb3IgY2FsbGJhY2sgZGV0YWlsc1xuICAgICAqL1xuICAgIE9ic2VydmFibGVNYXAucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAobGlzdGVuZXIsIGZpcmVJbW1lZGlhdGVseSkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgIGludmFyaWFudChmaXJlSW1tZWRpYXRlbHkgIT09IHRydWUsIFwiYG9ic2VydmVgIGRvZXNuJ3Qgc3VwcG9ydCBmaXJlSW1tZWRpYXRlbHk9dHJ1ZSBpbiBjb21iaW5hdGlvbiB3aXRoIG1hcHMuXCIpO1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlTWFwLnByb3RvdHlwZS5pbnRlcmNlcHQgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJJbnRlcmNlcHRvcih0aGlzLCBoYW5kbGVyKTtcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlTWFwO1xufSgpKTtcbi8qICd2YXInIGZpeGVzIHNtYWxsLWJ1aWxkIGlzc3VlICovXG52YXIgaXNPYnNlcnZhYmxlTWFwID0gY3JlYXRlSW5zdGFuY2VvZlByZWRpY2F0ZShcIk9ic2VydmFibGVNYXBcIiwgT2JzZXJ2YWJsZU1hcCk7XG5cbnZhciBfYSQxO1xudmFyIE9ic2VydmFibGVTZXRNYXJrZXIgPSB7fTtcbnZhciBPYnNlcnZhYmxlU2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVTZXQoaW5pdGlhbERhdGEsIGVuaGFuY2VyLCBuYW1lKSB7XG4gICAgICAgIGlmIChlbmhhbmNlciA9PT0gdm9pZCAwKSB7IGVuaGFuY2VyID0gZGVlcEVuaGFuY2VyOyB9XG4gICAgICAgIGlmIChuYW1lID09PSB2b2lkIDApIHsgbmFtZSA9IFwiT2JzZXJ2YWJsZVNldEBcIiArIGdldE5leHRJZCgpOyB9XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXNbX2EkMV0gPSBPYnNlcnZhYmxlU2V0TWFya2VyO1xuICAgICAgICB0aGlzLl9kYXRhID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLl9hdG9tID0gY3JlYXRlQXRvbSh0aGlzLm5hbWUpO1xuICAgICAgICB0aGlzW1N5bWJvbC50b1N0cmluZ1RhZ10gPSBcIlNldFwiO1xuICAgICAgICBpZiAodHlwZW9mIFNldCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtb2J4LnNldCByZXF1aXJlcyBTZXQgcG9seWZpbGwgZm9yIHRoZSBjdXJyZW50IGJyb3dzZXIuIENoZWNrIGJhYmVsLXBvbHlmaWxsIG9yIGNvcmUtanMvZXM2L3NldC5qc1wiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVuaGFuY2VyID0gZnVuY3Rpb24gKG5ld1YsIG9sZFYpIHsgcmV0dXJuIGVuaGFuY2VyKG5ld1YsIG9sZFYsIG5hbWUpOyB9O1xuICAgICAgICBpZiAoaW5pdGlhbERhdGEpIHtcbiAgICAgICAgICAgIHRoaXMucmVwbGFjZShpbml0aWFsRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUuZGVoYW5jZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmRlaGFuY2VyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlaGFuY2VyKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdW50cmFja2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZV8xLCBfYjtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfYyA9IF9fdmFsdWVzKF90aGlzLl9kYXRhLnZhbHVlcygpKSwgX2QgPSBfYy5uZXh0KCk7ICFfZC5kb25lOyBfZCA9IF9jLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gX2QudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZWxldGUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2QgJiYgIV9kLmRvbmUgJiYgKF9iID0gX2MucmV0dXJuKSkgX2IuY2FsbChfYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2tGbiwgdGhpc0FyZykge1xuICAgICAgICB2YXIgZV8yLCBfYjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9jID0gX192YWx1ZXModGhpcyksIF9kID0gX2MubmV4dCgpOyAhX2QuZG9uZTsgX2QgPSBfYy5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBfZC52YWx1ZTtcbiAgICAgICAgICAgICAgICBjYWxsYmFja0ZuLmNhbGwodGhpc0FyZywgdmFsdWUsIHZhbHVlLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9kICYmICFfZC5kb25lICYmIChfYiA9IF9jLnJldHVybikpIF9iLmNhbGwoX2MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fYXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGEuc2l6ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNoZWNrSWZTdGF0ZU1vZGlmaWNhdGlvbnNBcmVBbGxvd2VkKHRoaXMuX2F0b20pO1xuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImFkZFwiLFxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAvLyBUT0RPOiBpZGVhbGx5LCB2YWx1ZSA9IGNoYW5nZS52YWx1ZSB3b3VsZCBiZSBkb25lIGhlcmUsIHNvIHRoYXQgdmFsdWVzIGNhbiBiZVxuICAgICAgICAgICAgLy8gY2hhbmdlZCBieSBpbnRlcmNlcHRvci4gU2FtZSBhcHBsaWVzIGZvciBvdGhlciBTZXQgYW5kIE1hcCBhcGkncy5cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaGFzKHZhbHVlKSkge1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9kYXRhLmFkZChfdGhpcy5lbmhhbmNlcih2YWx1ZSwgdW5kZWZpbmVkKSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2F0b20ucmVwb3J0Q2hhbmdlZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgICAgICAgICAgdmFyIGNoYW5nZSA9IG5vdGlmeSB8fCBub3RpZnlTcHlcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJhZGRcIixcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0U3RhcnQoY2hhbmdlKTtcbiAgICAgICAgICAgIGlmIChub3RpZnkpXG4gICAgICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRFbmQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhciBub3RpZnlTcHkgPSBpc1NweUVuYWJsZWQoKTtcbiAgICAgICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY2hhbmdlKSwgeyBuYW1lOiB0aGlzLm5hbWUgfSkpO1xuICAgICAgICAgICAgdHJhbnNhY3Rpb24oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9hdG9tLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5fZGF0YS5kZWxldGUodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgICAgIG5vdGlmeUxpc3RlbmVycyh0aGlzLCBjaGFuZ2UpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeVNweSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YS5oYXModGhpcy5kZWhhbmNlVmFsdWUodmFsdWUpKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSAwO1xuICAgICAgICB2YXIga2V5cyA9IEFycmF5LmZyb20odGhpcy5rZXlzKCkpO1xuICAgICAgICB2YXIgdmFsdWVzID0gQXJyYXkuZnJvbSh0aGlzLnZhbHVlcygpKTtcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYWJsZSh7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gbmV4dEluZGV4O1xuICAgICAgICAgICAgICAgIG5leHRJbmRleCArPSAxO1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCA8IHZhbHVlcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgPyB7IHZhbHVlOiBba2V5c1tpbmRleF0sIHZhbHVlc1tpbmRleF1dLCBkb25lOiBmYWxzZSB9XG4gICAgICAgICAgICAgICAgICAgIDogeyBkb25lOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzKCk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gMDtcbiAgICAgICAgdmFyIG9ic2VydmFibGVWYWx1ZXMgPSBBcnJheS5mcm9tKHRoaXMuX2RhdGEudmFsdWVzKCkpO1xuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhYmxlKHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dEluZGV4IDwgb2JzZXJ2YWJsZVZhbHVlcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgPyB7IHZhbHVlOiBzZWxmLmRlaGFuY2VWYWx1ZShvYnNlcnZhYmxlVmFsdWVzW25leHRJbmRleCsrXSksIGRvbmU6IGZhbHNlIH1cbiAgICAgICAgICAgICAgICAgICAgOiB7IGRvbmU6IHRydWUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24gKG90aGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChpc09ic2VydmFibGVTZXQob3RoZXIpKSB7XG4gICAgICAgICAgICBvdGhlciA9IG90aGVyLnRvSlMoKTtcbiAgICAgICAgfVxuICAgICAgICB0cmFuc2FjdGlvbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvdGhlcikpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIG90aGVyLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiBfdGhpcy5hZGQodmFsdWUpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzRVM2U2V0KG90aGVyKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgb3RoZXIuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIF90aGlzLmFkZCh2YWx1ZSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3RoZXIgIT09IG51bGwgJiYgb3RoZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGZhaWwoXCJDYW5ub3QgaW5pdGlhbGl6ZSBzZXQgZnJvbSBcIiArIG90aGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChsaXN0ZW5lciwgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIC8vIFRPRE8gJ2ZpcmVJbW1lZGlhdGVseScgY2FuIGJlIHRydWU/XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgaW52YXJpYW50KGZpcmVJbW1lZGlhdGVseSAhPT0gdHJ1ZSwgXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IGZpcmVJbW1lZGlhdGVseT10cnVlIGluIGNvbWJpbmF0aW9uIHdpdGggc2V0cy5cIik7XG4gICAgICAgIHJldHVybiByZWdpc3Rlckxpc3RlbmVyKHRoaXMsIGxpc3RlbmVyKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVTZXQucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yKHRoaXMsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGUudG9KUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZXQodGhpcyk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlU2V0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArIFwiWyBcIiArIEFycmF5LmZyb20odGhpcykuam9pbihcIiwgXCIpICsgXCIgXVwiO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZVNldC5wcm90b3R5cGVbKF9hJDEgPSAkbW9ieCwgU3ltYm9sLml0ZXJhdG9yKV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcygpO1xuICAgIH07XG4gICAgcmV0dXJuIE9ic2VydmFibGVTZXQ7XG59KCkpO1xudmFyIGlzT2JzZXJ2YWJsZVNldCA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlU2V0XCIsIE9ic2VydmFibGVTZXQpO1xuXG52YXIgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbih0YXJnZXQsIHZhbHVlcywgbmFtZSwgZGVmYXVsdEVuaGFuY2VyKSB7XG4gICAgICAgIGlmICh2YWx1ZXMgPT09IHZvaWQgMCkgeyB2YWx1ZXMgPSBuZXcgTWFwKCk7IH1cbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlZmF1bHRFbmhhbmNlciA9IGRlZmF1bHRFbmhhbmNlcjtcbiAgICAgICAgdGhpcy5rZXlzQXRvbSA9IG5ldyBBdG9tKG5hbWUgKyBcIi5rZXlzXCIpO1xuICAgIH1cbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5nZXQoa2V5KS5nZXQoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoa2V5LCBuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLnRhcmdldDtcbiAgICAgICAgdmFyIG9ic2VydmFibGUgPSB0aGlzLnZhbHVlcy5nZXQoa2V5KTtcbiAgICAgICAgaWYgKG9ic2VydmFibGUgaW5zdGFuY2VvZiBDb21wdXRlZFZhbHVlKSB7XG4gICAgICAgICAgICBvYnNlcnZhYmxlLnNldChuZXdWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW50ZXJjZXB0XG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLnByb3h5IHx8IGluc3RhbmNlLFxuICAgICAgICAgICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBjaGFuZ2UubmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgbmV3VmFsdWUgPSBvYnNlcnZhYmxlLnByZXBhcmVOZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIC8vIG5vdGlmeSBzcHkgJiBvYnNlcnZlcnNcbiAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBnbG9iYWxTdGF0ZS5VTkNIQU5HRUQpIHtcbiAgICAgICAgICAgIHZhciBub3RpZnkgPSBoYXNMaXN0ZW5lcnModGhpcyk7XG4gICAgICAgICAgICB2YXIgbm90aWZ5U3B5ID0gaXNTcHlFbmFibGVkKCk7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHkgfHwgaW5zdGFuY2UsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvYnNlcnZhYmxlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgICAgICBzcHlSZXBvcnRTdGFydChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY2hhbmdlKSwgeyBuYW1lOiB0aGlzLm5hbWUsIGtleToga2V5IH0pKTtcbiAgICAgICAgICAgIG9ic2VydmFibGUuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeSlcbiAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIG1hcCA9IHRoaXMucGVuZGluZ0tleXMgfHwgKHRoaXMucGVuZGluZ0tleXMgPSBuZXcgTWFwKCkpO1xuICAgICAgICB2YXIgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgICAgIGlmIChlbnRyeSlcbiAgICAgICAgICAgIHJldHVybiBlbnRyeS5nZXQoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZXhpc3RzID0gISF0aGlzLnZhbHVlcy5nZXQoa2V5KTtcbiAgICAgICAgICAgIC8vIFBvc3NpYmxlIG9wdGltaXphdGlvbjogRG9uJ3QgaGF2ZSBhIHNlcGFyYXRlIG1hcCBmb3Igbm9uIGV4aXN0aW5nIGtleXMsXG4gICAgICAgICAgICAvLyBidXQgc3RvcmUgdGhlbSBpbiB0aGUgdmFsdWVzIG1hcCBpbnN0ZWFkLCB1c2luZyBhIHNwZWNpYWwgc3ltYm9sIHRvIGRlbm90ZSBcIm5vdCBleGlzdGluZ1wiXG4gICAgICAgICAgICBlbnRyeSA9IG5ldyBPYnNlcnZhYmxlVmFsdWUoZXhpc3RzLCByZWZlcmVuY2VFbmhhbmNlciwgdGhpcy5uYW1lICsgXCIuXCIgKyBzdHJpbmdpZnlLZXkoa2V5KSArIFwiP1wiLCBmYWxzZSk7XG4gICAgICAgICAgICBtYXAuc2V0KGtleSwgZW50cnkpO1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmdldCgpOyAvLyByZWFkIHRvIHN1YnNjcmliZVxuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmFkZE9ic2VydmFibGVQcm9wID0gZnVuY3Rpb24gKHByb3BOYW1lLCBuZXdWYWx1ZSwgZW5oYW5jZXIpIHtcbiAgICAgICAgaWYgKGVuaGFuY2VyID09PSB2b2lkIDApIHsgZW5oYW5jZXIgPSB0aGlzLmRlZmF1bHRFbmhhbmNlcjsgfVxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICAgIGFzc2VydFByb3BlcnR5Q29uZmlndXJhYmxlKHRhcmdldCwgcHJvcE5hbWUpO1xuICAgICAgICBpZiAoaGFzSW50ZXJjZXB0b3JzKHRoaXMpKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlID0gaW50ZXJjZXB0Q2hhbmdlKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHkgfHwgdGFyZ2V0LFxuICAgICAgICAgICAgICAgIG5hbWU6IHByb3BOYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYWRkXCIsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghY2hhbmdlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gY2hhbmdlLm5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvYnNlcnZhYmxlID0gbmV3IE9ic2VydmFibGVWYWx1ZShuZXdWYWx1ZSwgZW5oYW5jZXIsIHRoaXMubmFtZSArIFwiLlwiICsgc3RyaW5naWZ5S2V5KHByb3BOYW1lKSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnZhbHVlcy5zZXQocHJvcE5hbWUsIG9ic2VydmFibGUpO1xuICAgICAgICBuZXdWYWx1ZSA9IG9ic2VydmFibGUudmFsdWU7IC8vIG9ic2VydmFibGVWYWx1ZSBtaWdodCBoYXZlIGNoYW5nZWQgaXRcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcE5hbWUsIGdlbmVyYXRlT2JzZXJ2YWJsZVByb3BDb25maWcocHJvcE5hbWUpKTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUFkZGl0aW9uKHByb3BOYW1lLCBuZXdWYWx1ZSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmFkZENvbXB1dGVkUHJvcCA9IGZ1bmN0aW9uIChwcm9wZXJ0eU93bmVyLCAvLyB3aGVyZSBpcyB0aGUgcHJvcGVydHkgZGVjbGFyZWQ/XG4gICAgcHJvcE5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgICBvcHRpb25zLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgdGhpcy5uYW1lICsgXCIuXCIgKyBzdHJpbmdpZnlLZXkocHJvcE5hbWUpO1xuICAgICAgICB0aGlzLnZhbHVlcy5zZXQocHJvcE5hbWUsIG5ldyBDb21wdXRlZFZhbHVlKG9wdGlvbnMpKTtcbiAgICAgICAgaWYgKHByb3BlcnR5T3duZXIgPT09IHRhcmdldCB8fCBpc1Byb3BlcnR5Q29uZmlndXJhYmxlKHByb3BlcnR5T3duZXIsIHByb3BOYW1lKSlcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wZXJ0eU93bmVyLCBwcm9wTmFtZSwgZ2VuZXJhdGVDb21wdXRlZFByb3BDb25maWcocHJvcE5hbWUpKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIXRoaXMudmFsdWVzLmhhcyhrZXkpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy50YXJnZXQ7XG4gICAgICAgIGlmIChoYXNJbnRlcmNlcHRvcnModGhpcykpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBpbnRlcmNlcHRDaGFuZ2UodGhpcywge1xuICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eSB8fCB0YXJnZXQsXG4gICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwicmVtb3ZlXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdGFydEJhdGNoKCk7XG4gICAgICAgICAgICB2YXIgbm90aWZ5ID0gaGFzTGlzdGVuZXJzKHRoaXMpO1xuICAgICAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xuICAgICAgICAgICAgdmFyIG9sZE9ic2VydmFibGUgPSB0aGlzLnZhbHVlcy5nZXQoa2V5KTtcbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IG9sZE9ic2VydmFibGUgJiYgb2xkT2JzZXJ2YWJsZS5nZXQoKTtcbiAgICAgICAgICAgIG9sZE9ic2VydmFibGUgJiYgb2xkT2JzZXJ2YWJsZS5zZXQodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIC8vIG5vdGlmeSBrZXkgYW5kIGtleXNldCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIHRoaXMua2V5c0F0b20ucmVwb3J0Q2hhbmdlZCgpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZXMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICBpZiAodGhpcy5wZW5kaW5nS2V5cykge1xuICAgICAgICAgICAgICAgIHZhciBlbnRyeSA9IHRoaXMucGVuZGluZ0tleXMuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5KVxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5zZXQoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGVsZXRlIHRoZSBwcm9wXG4gICAgICAgICAgICBkZWxldGUgdGhpcy50YXJnZXRba2V5XTtcbiAgICAgICAgICAgIHZhciBjaGFuZ2UgPSBub3RpZnkgfHwgbm90aWZ5U3B5XG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmVtb3ZlXCIsXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdDogdGhpcy5wcm94eSB8fCB0YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZToga2V5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9fYXNzaWduKF9fYXNzaWduKHt9LCBjaGFuZ2UpLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xuICAgICAgICAgICAgaWYgKG5vdGlmeSlcbiAgICAgICAgICAgICAgICBub3RpZnlMaXN0ZW5lcnModGhpcywgY2hhbmdlKTtcbiAgICAgICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgICAgIHNweVJlcG9ydEVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgZW5kQmF0Y2goKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5pbGxlZ2FsQWNjZXNzID0gZnVuY3Rpb24gKG93bmVyLCBwcm9wTmFtZSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhpcyBoYXBwZW5zIGlmIGEgcHJvcGVydHkgaXMgYWNjZXNzZWQgdGhyb3VnaCB0aGUgcHJvdG90eXBlIGNoYWluLCBidXQgdGhlIHByb3BlcnR5IHdhc1xuICAgICAgICAgKiBkZWNsYXJlZCBkaXJlY3RseSBhcyBvd24gcHJvcGVydHkgb24gdGhlIHByb3RvdHlwZS5cbiAgICAgICAgICpcbiAgICAgICAgICogRS5nLjpcbiAgICAgICAgICogY2xhc3MgQSB7XG4gICAgICAgICAqIH1cbiAgICAgICAgICogZXh0ZW5kT2JzZXJ2YWJsZShBLnByb3RvdHlwZSwgeyB4OiAxIH0pXG4gICAgICAgICAqXG4gICAgICAgICAqIGNsYXNzQiBleHRlbnMgQSB7XG4gICAgICAgICAqIH1cbiAgICAgICAgICogY29uc29sZS5sb2cobmV3IEIoKS54KVxuICAgICAgICAgKlxuICAgICAgICAgKiBJdCBpcyB1bmNsZWFyIHdoZXRoZXIgdGhlIHByb3BlcnR5IHNob3VsZCBiZSBjb25zaWRlcmVkICdzdGF0aWMnIG9yIGluaGVyaXRlZC5cbiAgICAgICAgICogRWl0aGVyIHVzZSBgY29uc29sZS5sb2coQS54KWBcbiAgICAgICAgICogb3I6IGRlY29yYXRlKEEsIHsgeDogb2JzZXJ2YWJsZSB9KVxuICAgICAgICAgKlxuICAgICAgICAgKiBXaGVuIHVzaW5nIGRlY29yYXRlLCB0aGUgcHJvcGVydHkgd2lsbCBhbHdheXMgYmUgcmVkZWNsYXJlZCBhcyBvd24gcHJvcGVydHkgb24gdGhlIGFjdHVhbCBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc29sZS53YXJuKFwiUHJvcGVydHkgJ1wiICsgcHJvcE5hbWUgKyBcIicgb2YgJ1wiICsgb3duZXIgKyBcIicgd2FzIGFjY2Vzc2VkIHRocm91Z2ggdGhlIHByb3RvdHlwZSBjaGFpbi4gVXNlICdkZWNvcmF0ZScgaW5zdGVhZCB0byBkZWNsYXJlIHRoZSBwcm9wIG9yIGFjY2VzcyBpdCBzdGF0aWNhbGx5IHRocm91Z2ggaXQncyBvd25lclwiKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE9ic2VydmVzIHRoaXMgb2JqZWN0LiBUcmlnZ2VycyBmb3IgdGhlIGV2ZW50cyAnYWRkJywgJ3VwZGF0ZScgYW5kICdkZWxldGUnLlxuICAgICAqIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L29ic2VydmVcbiAgICAgKiBmb3IgY2FsbGJhY2sgZGV0YWlsc1xuICAgICAqL1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZmlyZUltbWVkaWF0ZWx5KSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgaW52YXJpYW50KGZpcmVJbW1lZGlhdGVseSAhPT0gdHJ1ZSwgXCJgb2JzZXJ2ZWAgZG9lc24ndCBzdXBwb3J0IHRoZSBmaXJlIGltbWVkaWF0ZWx5IHByb3BlcnR5IGZvciBvYnNlcnZhYmxlIG9iamVjdHMuXCIpO1xuICAgICAgICByZXR1cm4gcmVnaXN0ZXJMaXN0ZW5lcih0aGlzLCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24ucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiByZWdpc3RlckludGVyY2VwdG9yKHRoaXMsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uLnByb3RvdHlwZS5ub3RpZnlQcm9wZXJ0eUFkZGl0aW9uID0gZnVuY3Rpb24gKGtleSwgbmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIG5vdGlmeSA9IGhhc0xpc3RlbmVycyh0aGlzKTtcbiAgICAgICAgdmFyIG5vdGlmeVNweSA9IGlzU3B5RW5hYmxlZCgpO1xuICAgICAgICB2YXIgY2hhbmdlID0gbm90aWZ5IHx8IG5vdGlmeVNweVxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJhZGRcIixcbiAgICAgICAgICAgICAgICBvYmplY3Q6IHRoaXMucHJveHkgfHwgdGhpcy50YXJnZXQsXG4gICAgICAgICAgICAgICAgbmFtZToga2V5LFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICBpZiAobm90aWZ5U3B5ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIilcbiAgICAgICAgICAgIHNweVJlcG9ydFN0YXJ0KF9fYXNzaWduKF9fYXNzaWduKHt9LCBjaGFuZ2UpLCB7IG5hbWU6IHRoaXMubmFtZSwga2V5OiBrZXkgfSkpO1xuICAgICAgICBpZiAobm90aWZ5KVxuICAgICAgICAgICAgbm90aWZ5TGlzdGVuZXJzKHRoaXMsIGNoYW5nZSk7XG4gICAgICAgIGlmIChub3RpZnlTcHkgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKVxuICAgICAgICAgICAgc3B5UmVwb3J0RW5kKCk7XG4gICAgICAgIGlmICh0aGlzLnBlbmRpbmdLZXlzKSB7XG4gICAgICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnBlbmRpbmdLZXlzLmdldChrZXkpO1xuICAgICAgICAgICAgaWYgKGVudHJ5KVxuICAgICAgICAgICAgICAgIGVudHJ5LnNldCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtleXNBdG9tLnJlcG9ydENoYW5nZWQoKTtcbiAgICB9O1xuICAgIE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbi5wcm90b3R5cGUuZ2V0S2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIHRoaXMua2V5c0F0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgLy8gcmV0dXJuIFJlZmxlY3Qub3duS2V5cyh0aGlzLnZhbHVlcykgYXMgYW55XG4gICAgICAgIHZhciByZXMgPSBbXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy52YWx1ZXMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9kID0gX19yZWFkKF9jLnZhbHVlLCAyKSwga2V5ID0gX2RbMF0sIHZhbHVlID0gX2RbMV07XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JzZXJ2YWJsZVZhbHVlKVxuICAgICAgICAgICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9O1xuICAgIHJldHVybiBPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb247XG59KCkpO1xuZnVuY3Rpb24gYXNPYnNlcnZhYmxlT2JqZWN0KHRhcmdldCwgbmFtZSwgZGVmYXVsdEVuaGFuY2VyKSB7XG4gICAgaWYgKG5hbWUgPT09IHZvaWQgMCkgeyBuYW1lID0gXCJcIjsgfVxuICAgIGlmIChkZWZhdWx0RW5oYW5jZXIgPT09IHZvaWQgMCkgeyBkZWZhdWx0RW5oYW5jZXIgPSBkZWVwRW5oYW5jZXI7IH1cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgJG1vYngpKVxuICAgICAgICByZXR1cm4gdGFyZ2V0WyRtb2J4XTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgaW52YXJpYW50KE9iamVjdC5pc0V4dGVuc2libGUodGFyZ2V0KSwgXCJDYW5ub3QgbWFrZSB0aGUgZGVzaWduYXRlZCBvYmplY3Qgb2JzZXJ2YWJsZTsgaXQgaXMgbm90IGV4dGVuc2libGVcIik7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KHRhcmdldCkpXG4gICAgICAgIG5hbWUgPSAodGFyZ2V0LmNvbnN0cnVjdG9yLm5hbWUgfHwgXCJPYnNlcnZhYmxlT2JqZWN0XCIpICsgXCJAXCIgKyBnZXROZXh0SWQoKTtcbiAgICBpZiAoIW5hbWUpXG4gICAgICAgIG5hbWUgPSBcIk9ic2VydmFibGVPYmplY3RAXCIgKyBnZXROZXh0SWQoKTtcbiAgICB2YXIgYWRtID0gbmV3IE9ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbih0YXJnZXQsIG5ldyBNYXAoKSwgc3RyaW5naWZ5S2V5KG5hbWUpLCBkZWZhdWx0RW5oYW5jZXIpO1xuICAgIGFkZEhpZGRlblByb3AodGFyZ2V0LCAkbW9ieCwgYWRtKTtcbiAgICByZXR1cm4gYWRtO1xufVxudmFyIG9ic2VydmFibGVQcm9wZXJ0eUNvbmZpZ3MgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xudmFyIGNvbXB1dGVkUHJvcGVydHlDb25maWdzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbmZ1bmN0aW9uIGdlbmVyYXRlT2JzZXJ2YWJsZVByb3BDb25maWcocHJvcE5hbWUpIHtcbiAgICByZXR1cm4gKG9ic2VydmFibGVQcm9wZXJ0eUNvbmZpZ3NbcHJvcE5hbWVdIHx8XG4gICAgICAgIChvYnNlcnZhYmxlUHJvcGVydHlDb25maWdzW3Byb3BOYW1lXSA9IHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1skbW9ieF0ucmVhZChwcm9wTmFtZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHRoaXNbJG1vYnhdLndyaXRlKHByb3BOYW1lLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xufVxuZnVuY3Rpb24gZ2V0QWRtaW5pc3RyYXRpb25Gb3JDb21wdXRlZFByb3BPd25lcihvd25lcikge1xuICAgIHZhciBhZG0gPSBvd25lclskbW9ieF07XG4gICAgaWYgKCFhZG0pIHtcbiAgICAgICAgLy8gYmVjYXVzZSBjb21wdXRlZCBwcm9wcyBhcmUgZGVjbGFyZWQgb24gcHJvdHksXG4gICAgICAgIC8vIHRoZSBjdXJyZW50IGluc3RhbmNlIG1pZ2h0IG5vdCBoYXZlIGJlZW4gaW5pdGlhbGl6ZWQgeWV0XG4gICAgICAgIGluaXRpYWxpemVJbnN0YW5jZShvd25lcik7XG4gICAgICAgIHJldHVybiBvd25lclskbW9ieF07XG4gICAgfVxuICAgIHJldHVybiBhZG07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUNvbXB1dGVkUHJvcENvbmZpZyhwcm9wTmFtZSkge1xuICAgIHJldHVybiAoY29tcHV0ZWRQcm9wZXJ0eUNvbmZpZ3NbcHJvcE5hbWVdIHx8XG4gICAgICAgIChjb21wdXRlZFByb3BlcnR5Q29uZmlnc1twcm9wTmFtZV0gPSB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IGdsb2JhbFN0YXRlLmNvbXB1dGVkQ29uZmlndXJhYmxlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb25Gb3JDb21wdXRlZFByb3BPd25lcih0aGlzKS5yZWFkKHByb3BOYW1lKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgZ2V0QWRtaW5pc3RyYXRpb25Gb3JDb21wdXRlZFByb3BPd25lcih0aGlzKS53cml0ZShwcm9wTmFtZSwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbn1cbnZhciBpc09ic2VydmFibGVPYmplY3RBZG1pbmlzdHJhdGlvbiA9IGNyZWF0ZUluc3RhbmNlb2ZQcmVkaWNhdGUoXCJPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb25cIiwgT2JzZXJ2YWJsZU9iamVjdEFkbWluaXN0cmF0aW9uKTtcbmZ1bmN0aW9uIGlzT2JzZXJ2YWJsZU9iamVjdCh0aGluZykge1xuICAgIGlmIChpc09iamVjdCh0aGluZykpIHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZXJzIHJ1biBsYXppbHkgd2hlbiB0cmFuc3BpbGluZyB0byBiYWJlbCwgc28gbWFrZSBzdXJlIHRoZXkgYXJlIHJ1bi4uLlxuICAgICAgICBpbml0aWFsaXplSW5zdGFuY2UodGhpbmcpO1xuICAgICAgICByZXR1cm4gaXNPYnNlcnZhYmxlT2JqZWN0QWRtaW5pc3RyYXRpb24odGhpbmdbJG1vYnhdKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRBdG9tKHRoaW5nLCBwcm9wZXJ0eSkge1xuICAgIGlmICh0eXBlb2YgdGhpbmcgPT09IFwib2JqZWN0XCIgJiYgdGhpbmcgIT09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzT2JzZXJ2YWJsZUFycmF5KHRoaW5nKSkge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgXCJJdCBpcyBub3QgcG9zc2libGUgdG8gZ2V0IGluZGV4IGF0b21zIGZyb20gYXJyYXlzXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaW5nWyRtb2J4XS5hdG9tO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc09ic2VydmFibGVTZXQodGhpbmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpbmdbJG1vYnhdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc09ic2VydmFibGVNYXAodGhpbmcpKSB7XG4gICAgICAgICAgICB2YXIgYW55VGhpbmcgPSB0aGluZztcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBhbnlUaGluZy5fa2V5c0F0b207XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IGFueVRoaW5nLl9kYXRhLmdldChwcm9wZXJ0eSkgfHwgYW55VGhpbmcuX2hhc01hcC5nZXQocHJvcGVydHkpO1xuICAgICAgICAgICAgaWYgKCFvYnNlcnZhYmxlKVxuICAgICAgICAgICAgICAgIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgICAgICAgICAgICAgIFwidGhlIGVudHJ5ICdcIiArIHByb3BlcnR5ICsgXCInIGRvZXMgbm90IGV4aXN0IGluIHRoZSBvYnNlcnZhYmxlIG1hcCAnXCIgKyBnZXREZWJ1Z05hbWUodGhpbmcpICsgXCInXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG9ic2VydmFibGU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW5pdGlhbGl6ZXJzIHJ1biBsYXppbHkgd2hlbiB0cmFuc3BpbGluZyB0byBiYWJlbCwgc28gbWFrZSBzdXJlIHRoZXkgYXJlIHJ1bi4uLlxuICAgICAgICBpbml0aWFsaXplSW5zdGFuY2UodGhpbmcpO1xuICAgICAgICBpZiAocHJvcGVydHkgJiYgIXRoaW5nWyRtb2J4XSlcbiAgICAgICAgICAgIHRoaW5nW3Byb3BlcnR5XTsgLy8gU2VlICMxMDcyXG4gICAgICAgIGlmIChpc09ic2VydmFibGVPYmplY3QodGhpbmcpKSB7XG4gICAgICAgICAgICBpZiAoIXByb3BlcnR5KVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBcInBsZWFzZSBzcGVjaWZ5IGEgcHJvcGVydHlcIik7XG4gICAgICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IHRoaW5nWyRtb2J4XS52YWx1ZXMuZ2V0KHByb3BlcnR5KTtcbiAgICAgICAgICAgIGlmICghb2JzZXJ2YWJsZSlcbiAgICAgICAgICAgICAgICBmYWlsKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJlxuICAgICAgICAgICAgICAgICAgICBcIm5vIG9ic2VydmFibGUgcHJvcGVydHkgJ1wiICsgcHJvcGVydHkgKyBcIicgZm91bmQgb24gdGhlIG9ic2VydmFibGUgb2JqZWN0ICdcIiArIGdldERlYnVnTmFtZSh0aGluZykgKyBcIidcIik7XG4gICAgICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBdG9tKHRoaW5nKSB8fCBpc0NvbXB1dGVkVmFsdWUodGhpbmcpIHx8IGlzUmVhY3Rpb24odGhpbmcpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpbmc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHRoaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgaWYgKGlzUmVhY3Rpb24odGhpbmdbJG1vYnhdKSkge1xuICAgICAgICAgICAgLy8gZGlzcG9zZXIgZnVuY3Rpb25cbiAgICAgICAgICAgIHJldHVybiB0aGluZ1skbW9ieF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhaWwocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmIFwiQ2Fubm90IG9idGFpbiBhdG9tIGZyb20gXCIgKyB0aGluZyk7XG59XG5mdW5jdGlvbiBnZXRBZG1pbmlzdHJhdGlvbih0aGluZywgcHJvcGVydHkpIHtcbiAgICBpZiAoIXRoaW5nKVxuICAgICAgICBmYWlsKFwiRXhwZWN0aW5nIHNvbWUgb2JqZWN0XCIpO1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gZ2V0QWRtaW5pc3RyYXRpb24oZ2V0QXRvbSh0aGluZywgcHJvcGVydHkpKTtcbiAgICBpZiAoaXNBdG9tKHRoaW5nKSB8fCBpc0NvbXB1dGVkVmFsdWUodGhpbmcpIHx8IGlzUmVhY3Rpb24odGhpbmcpKVxuICAgICAgICByZXR1cm4gdGhpbmc7XG4gICAgaWYgKGlzT2JzZXJ2YWJsZU1hcCh0aGluZykgfHwgaXNPYnNlcnZhYmxlU2V0KHRoaW5nKSlcbiAgICAgICAgcmV0dXJuIHRoaW5nO1xuICAgIC8vIEluaXRpYWxpemVycyBydW4gbGF6aWx5IHdoZW4gdHJhbnNwaWxpbmcgdG8gYmFiZWwsIHNvIG1ha2Ugc3VyZSB0aGV5IGFyZSBydW4uLi5cbiAgICBpbml0aWFsaXplSW5zdGFuY2UodGhpbmcpO1xuICAgIGlmICh0aGluZ1skbW9ieF0pXG4gICAgICAgIHJldHVybiB0aGluZ1skbW9ieF07XG4gICAgZmFpbChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgXCJDYW5ub3Qgb2J0YWluIGFkbWluaXN0cmF0aW9uIGZyb20gXCIgKyB0aGluZyk7XG59XG5mdW5jdGlvbiBnZXREZWJ1Z05hbWUodGhpbmcsIHByb3BlcnR5KSB7XG4gICAgdmFyIG5hbWVkO1xuICAgIGlmIChwcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICBuYW1lZCA9IGdldEF0b20odGhpbmcsIHByb3BlcnR5KTtcbiAgICBlbHNlIGlmIChpc09ic2VydmFibGVPYmplY3QodGhpbmcpIHx8IGlzT2JzZXJ2YWJsZU1hcCh0aGluZykgfHwgaXNPYnNlcnZhYmxlU2V0KHRoaW5nKSlcbiAgICAgICAgbmFtZWQgPSBnZXRBZG1pbmlzdHJhdGlvbih0aGluZyk7XG4gICAgZWxzZVxuICAgICAgICBuYW1lZCA9IGdldEF0b20odGhpbmcpOyAvLyB2YWxpZCBmb3IgYXJyYXlzIGFzIHdlbGxcbiAgICByZXR1cm4gbmFtZWQubmFtZTtcbn1cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbmZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiLCBkZXB0aCkge1xuICAgIGlmIChkZXB0aCA9PT0gdm9pZCAwKSB7IGRlcHRoID0gLTE7IH1cbiAgICByZXR1cm4gZXEoYSwgYiwgZGVwdGgpO1xufVxuLy8gQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2phc2hrZW5hcy91bmRlcnNjb3JlL2Jsb2IvNWMyMzdhN2M2ODJmYjY4ZmQ1Mzc4MjAzZjBiZjIyZGNlMTYyNDg1NC91bmRlcnNjb3JlLmpzI0wxMTg2LUwxMjg5XG4vLyBJbnRlcm5hbCByZWN1cnNpdmUgY29tcGFyaXNvbiBmdW5jdGlvbiBmb3IgYGlzRXF1YWxgLlxuZnVuY3Rpb24gZXEoYSwgYiwgZGVwdGgsIGFTdGFjaywgYlN0YWNrKSB7XG4gICAgLy8gSWRlbnRpY2FsIG9iamVjdHMgYXJlIGVxdWFsLiBgMCA9PT0gLTBgLCBidXQgdGhleSBhcmVuJ3QgaWRlbnRpY2FsLlxuICAgIC8vIFNlZSB0aGUgW0hhcm1vbnkgYGVnYWxgIHByb3Bvc2FsXShodHRwOi8vd2lraS5lY21hc2NyaXB0Lm9yZy9kb2t1LnBocD9pZD1oYXJtb255OmVnYWwpLlxuICAgIGlmIChhID09PSBiKVxuICAgICAgICByZXR1cm4gYSAhPT0gMCB8fCAxIC8gYSA9PT0gMSAvIGI7XG4gICAgLy8gYG51bGxgIG9yIGB1bmRlZmluZWRgIG9ubHkgZXF1YWwgdG8gaXRzZWxmIChzdHJpY3QgY29tcGFyaXNvbikuXG4gICAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLlxuICAgIGlmIChhICE9PSBhKVxuICAgICAgICByZXR1cm4gYiAhPT0gYjtcbiAgICAvLyBFeGhhdXN0IHByaW1pdGl2ZSBjaGVja3NcbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBhO1xuICAgIGlmICh0eXBlICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgYiAhPSBcIm9iamVjdFwiKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gVW53cmFwIGFueSB3cmFwcGVkIG9iamVjdHMuXG4gICAgYSA9IHVud3JhcChhKTtcbiAgICBiID0gdW53cmFwKGIpO1xuICAgIC8vIENvbXBhcmUgYFtbQ2xhc3NdXWAgbmFtZXMuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHRvU3RyaW5nLmNhbGwoYSk7XG4gICAgaWYgKGNsYXNzTmFtZSAhPT0gdG9TdHJpbmcuY2FsbChiKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICAgIC8vIFN0cmluZ3MsIG51bWJlcnMsIHJlZ3VsYXIgZXhwcmVzc2lvbnMsIGRhdGVzLCBhbmQgYm9vbGVhbnMgYXJlIGNvbXBhcmVkIGJ5IHZhbHVlLlxuICAgICAgICBjYXNlIFwiW29iamVjdCBSZWdFeHBdXCI6XG4gICAgICAgIC8vIFJlZ0V4cHMgYXJlIGNvZXJjZWQgdG8gc3RyaW5ncyBmb3IgY29tcGFyaXNvbiAoTm90ZTogJycgKyAvYS9pID09PSAnL2EvaScpXG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IFN0cmluZ11cIjpcbiAgICAgICAgICAgIC8vIFByaW1pdGl2ZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgb2JqZWN0IHdyYXBwZXJzIGFyZSBlcXVpdmFsZW50OyB0aHVzLCBgXCI1XCJgIGlzXG4gICAgICAgICAgICAvLyBlcXVpdmFsZW50IHRvIGBuZXcgU3RyaW5nKFwiNVwiKWAuXG4gICAgICAgICAgICByZXR1cm4gXCJcIiArIGEgPT09IFwiXCIgKyBiO1xuICAgICAgICBjYXNlIFwiW29iamVjdCBOdW1iZXJdXCI6XG4gICAgICAgICAgICAvLyBgTmFOYHMgYXJlIGVxdWl2YWxlbnQsIGJ1dCBub24tcmVmbGV4aXZlLlxuICAgICAgICAgICAgLy8gT2JqZWN0KE5hTikgaXMgZXF1aXZhbGVudCB0byBOYU4uXG4gICAgICAgICAgICBpZiAoK2EgIT09ICthKVxuICAgICAgICAgICAgICAgIHJldHVybiArYiAhPT0gK2I7XG4gICAgICAgICAgICAvLyBBbiBgZWdhbGAgY29tcGFyaXNvbiBpcyBwZXJmb3JtZWQgZm9yIG90aGVyIG51bWVyaWMgdmFsdWVzLlxuICAgICAgICAgICAgcmV0dXJuICthID09PSAwID8gMSAvICthID09PSAxIC8gYiA6ICthID09PSArYjtcbiAgICAgICAgY2FzZSBcIltvYmplY3QgRGF0ZV1cIjpcbiAgICAgICAgY2FzZSBcIltvYmplY3QgQm9vbGVhbl1cIjpcbiAgICAgICAgICAgIC8vIENvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtZXJpYyBwcmltaXRpdmUgdmFsdWVzLiBEYXRlcyBhcmUgY29tcGFyZWQgYnkgdGhlaXJcbiAgICAgICAgICAgIC8vIG1pbGxpc2Vjb25kIHJlcHJlc2VudGF0aW9ucy4gTm90ZSB0aGF0IGludmFsaWQgZGF0ZXMgd2l0aCBtaWxsaXNlY29uZCByZXByZXNlbnRhdGlvbnNcbiAgICAgICAgICAgIC8vIG9mIGBOYU5gIGFyZSBub3QgZXF1aXZhbGVudC5cbiAgICAgICAgICAgIHJldHVybiArYSA9PT0gK2I7XG4gICAgICAgIGNhc2UgXCJbb2JqZWN0IFN5bWJvbF1cIjpcbiAgICAgICAgICAgIHJldHVybiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wudmFsdWVPZi5jYWxsKGEpID09PSBTeW1ib2wudmFsdWVPZi5jYWxsKGIpKTtcbiAgICB9XG4gICAgdmFyIGFyZUFycmF5cyA9IGNsYXNzTmFtZSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xuICAgIGlmICghYXJlQXJyYXlzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYSAhPSBcIm9iamVjdFwiIHx8IHR5cGVvZiBiICE9IFwib2JqZWN0XCIpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIE9iamVjdHMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1aXZhbGVudCwgYnV0IGBPYmplY3RgcyBvciBgQXJyYXlgc1xuICAgICAgICAvLyBmcm9tIGRpZmZlcmVudCBmcmFtZXMgYXJlLlxuICAgICAgICB2YXIgYUN0b3IgPSBhLmNvbnN0cnVjdG9yLCBiQ3RvciA9IGIuY29uc3RydWN0b3I7XG4gICAgICAgIGlmIChhQ3RvciAhPT0gYkN0b3IgJiZcbiAgICAgICAgICAgICEodHlwZW9mIGFDdG9yID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICBhQ3RvciBpbnN0YW5jZW9mIGFDdG9yICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGJDdG9yID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICBiQ3RvciBpbnN0YW5jZW9mIGJDdG9yKSAmJlxuICAgICAgICAgICAgKFwiY29uc3RydWN0b3JcIiBpbiBhICYmIFwiY29uc3RydWN0b3JcIiBpbiBiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRlcHRoIDwgMCkge1xuICAgICAgICBkZXB0aCA9IC0xO1xuICAgIH1cbiAgICAvLyBBc3N1bWUgZXF1YWxpdHkgZm9yIGN5Y2xpYyBzdHJ1Y3R1cmVzLiBUaGUgYWxnb3JpdGhtIGZvciBkZXRlY3RpbmcgY3ljbGljXG4gICAgLy8gc3RydWN0dXJlcyBpcyBhZGFwdGVkIGZyb20gRVMgNS4xIHNlY3Rpb24gMTUuMTIuMywgYWJzdHJhY3Qgb3BlcmF0aW9uIGBKT2AuXG4gICAgLy8gSW5pdGlhbGl6aW5nIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICAgIC8vIEl0J3MgZG9uZSBoZXJlIHNpbmNlIHdlIG9ubHkgbmVlZCB0aGVtIGZvciBvYmplY3RzIGFuZCBhcnJheXMgY29tcGFyaXNvbi5cbiAgICBhU3RhY2sgPSBhU3RhY2sgfHwgW107XG4gICAgYlN0YWNrID0gYlN0YWNrIHx8IFtdO1xuICAgIHZhciBsZW5ndGggPSBhU3RhY2subGVuZ3RoO1xuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICAvLyBMaW5lYXIgc2VhcmNoLiBQZXJmb3JtYW5jZSBpcyBpbnZlcnNlbHkgcHJvcG9ydGlvbmFsIHRvIHRoZSBudW1iZXIgb2ZcbiAgICAgICAgLy8gdW5pcXVlIG5lc3RlZCBzdHJ1Y3R1cmVzLlxuICAgICAgICBpZiAoYVN0YWNrW2xlbmd0aF0gPT09IGEpXG4gICAgICAgICAgICByZXR1cm4gYlN0YWNrW2xlbmd0aF0gPT09IGI7XG4gICAgfVxuICAgIC8vIEFkZCB0aGUgZmlyc3Qgb2JqZWN0IHRvIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucHVzaChhKTtcbiAgICBiU3RhY2sucHVzaChiKTtcbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgYW5kIGFycmF5cy5cbiAgICBpZiAoYXJlQXJyYXlzKSB7XG4gICAgICAgIC8vIENvbXBhcmUgYXJyYXkgbGVuZ3RocyB0byBkZXRlcm1pbmUgaWYgYSBkZWVwIGNvbXBhcmlzb24gaXMgbmVjZXNzYXJ5LlxuICAgICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgICAgaWYgKGxlbmd0aCAhPT0gYi5sZW5ndGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIERlZXAgY29tcGFyZSB0aGUgY29udGVudHMsIGlnbm9yaW5nIG5vbi1udW1lcmljIHByb3BlcnRpZXMuXG4gICAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICAgICAgaWYgKCFlcShhW2xlbmd0aF0sIGJbbGVuZ3RoXSwgZGVwdGggLSAxLCBhU3RhY2ssIGJTdGFjaykpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBEZWVwIGNvbXBhcmUgb2JqZWN0cy5cbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICAgICAgdmFyIGtleSA9IHZvaWQgMDtcbiAgICAgICAgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgICAgIC8vIEVuc3VyZSB0aGF0IGJvdGggb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIG51bWJlciBvZiBwcm9wZXJ0aWVzIGJlZm9yZSBjb21wYXJpbmcgZGVlcCBlcXVhbGl0eS5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGIpLmxlbmd0aCAhPT0gbGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgICAgIC8vIERlZXAgY29tcGFyZSBlYWNoIG1lbWJlclxuICAgICAgICAgICAga2V5ID0ga2V5c1tsZW5ndGhdO1xuICAgICAgICAgICAgaWYgKCEoaGFzJDEoYiwga2V5KSAmJiBlcShhW2tleV0sIGJba2V5XSwgZGVwdGggLSAxLCBhU3RhY2ssIGJTdGFjaykpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IG9iamVjdCBmcm9tIHRoZSBzdGFjayBvZiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICBhU3RhY2sucG9wKCk7XG4gICAgYlN0YWNrLnBvcCgpO1xuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gdW53cmFwKGEpIHtcbiAgICBpZiAoaXNPYnNlcnZhYmxlQXJyYXkoYSkpXG4gICAgICAgIHJldHVybiBhLnNsaWNlKCk7XG4gICAgaWYgKGlzRVM2TWFwKGEpIHx8IGlzT2JzZXJ2YWJsZU1hcChhKSlcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYS5lbnRyaWVzKCkpO1xuICAgIGlmIChpc0VTNlNldChhKSB8fCBpc09ic2VydmFibGVTZXQoYSkpXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGEuZW50cmllcygpKTtcbiAgICByZXR1cm4gYTtcbn1cbmZ1bmN0aW9uIGhhcyQxKGEsIGtleSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSwga2V5KTtcbn1cblxuZnVuY3Rpb24gbWFrZUl0ZXJhYmxlKGl0ZXJhdG9yKSB7XG4gICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGdldFNlbGY7XG4gICAgcmV0dXJuIGl0ZXJhdG9yO1xufVxuZnVuY3Rpb24gZ2V0U2VsZigpIHtcbiAgICByZXR1cm4gdGhpcztcbn1cblxuLypcblRoZSBvbmx5IHJlYXNvbiBmb3IgdGhpcyBmaWxlIHRvIGV4aXN0IGlzIHB1cmUgaG9ycm9yOlxuV2l0aG91dCBpdCByb2xsdXAgY2FuIG1ha2UgdGhlIGJ1bmRsaW5nIGZhaWwgYXQgYW55IHBvaW50IGluIHRpbWU7IHdoZW4gaXQgcm9sbHMgdXAgdGhlIGZpbGVzIGluIHRoZSB3cm9uZyBvcmRlclxuaXQgd2lsbCBjYXVzZSB1bmRlZmluZWQgZXJyb3JzIChmb3IgZXhhbXBsZSBiZWNhdXNlIHN1cGVyIGNsYXNzZXMgb3IgbG9jYWwgdmFyaWFibGVzIG5vdCBiZWluZyBob2lzdGVkKS5cbldpdGggdGhpcyBmaWxlIHRoYXQgd2lsbCBzdGlsbCBoYXBwZW4sXG5idXQgYXQgbGVhc3QgaW4gdGhpcyBmaWxlIHdlIGNhbiBtYWdpY2FsbHkgcmVvcmRlciB0aGUgaW1wb3J0cyB3aXRoIHRyaWFsIGFuZCBlcnJvciB1bnRpbCB0aGUgYnVpbGQgc3VjY2VlZHMgYWdhaW4uXG4qL1xuXG4vKipcbiAqIChjKSBNaWNoZWwgV2VzdHN0cmF0ZSAyMDE1IC0gMjAxOFxuICogTUlUIExpY2Vuc2VkXG4gKlxuICogV2VsY29tZSB0byB0aGUgbW9ieCBzb3VyY2VzISBUbyBnZXQgYW4gZ2xvYmFsIG92ZXJ2aWV3IG9mIGhvdyBNb2JYIGludGVybmFsbHkgd29ya3MsXG4gKiB0aGlzIGlzIGEgZ29vZCBwbGFjZSB0byBzdGFydDpcbiAqIGh0dHBzOi8vbWVkaXVtLmNvbS9AbXdlc3RzdHJhdGUvYmVjb21pbmctZnVsbHktcmVhY3RpdmUtYW4taW4tZGVwdGgtZXhwbGFuYXRpb24tb2YtbW9ic2VydmFibGUtNTU5OTUyNjJhMjU0Iy54dmJoNnFkNzRcbiAqXG4gKiBTb3VyY2UgZm9sZGVyczpcbiAqID09PT09PT09PT09PT09PVxuICpcbiAqIC0gYXBpLyAgICAgTW9zdCBvZiB0aGUgcHVibGljIHN0YXRpYyBtZXRob2RzIGV4cG9zZWQgYnkgdGhlIG1vZHVsZSBjYW4gYmUgZm91bmQgaGVyZS5cbiAqIC0gY29yZS8gICAgSW1wbGVtZW50YXRpb24gb2YgdGhlIE1vYlggYWxnb3JpdGhtOyBhdG9tcywgZGVyaXZhdGlvbnMsIHJlYWN0aW9ucywgZGVwZW5kZW5jeSB0cmVlcywgb3B0aW1pemF0aW9ucy4gQ29vbCBzdHVmZiBjYW4gYmUgZm91bmQgaGVyZS5cbiAqIC0gdHlwZXMvICAgQWxsIHRoZSBtYWdpYyB0aGF0IGlzIG5lZWQgdG8gaGF2ZSBvYnNlcnZhYmxlIG9iamVjdHMsIGFycmF5cyBhbmQgdmFsdWVzIGlzIGluIHRoaXMgZm9sZGVyLiBJbmNsdWRpbmcgdGhlIG1vZGlmaWVycyBsaWtlIGBhc0ZsYXRgLlxuICogLSB1dGlscy8gICBVdGlsaXR5IHN0dWZmLlxuICpcbiAqL1xuaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiW21vYnhdIE1vYlggNSsgcmVxdWlyZXMgUHJveHkgYW5kIFN5bWJvbCBvYmplY3RzLiBJZiB5b3VyIGVudmlyb25tZW50IGRvZXNuJ3Qgc3VwcG9ydCBTeW1ib2wgb3IgUHJveHkgb2JqZWN0cywgcGxlYXNlIGRvd25ncmFkZSB0byBNb2JYIDQuIEZvciBSZWFjdCBOYXRpdmUgQW5kcm9pZCwgY29uc2lkZXIgdXBncmFkaW5nIEpTQ29yZS5cIik7XG59XG50cnkge1xuICAgIC8vIGRlZmluZSBwcm9jZXNzLmVudiBpZiBuZWVkZWRcbiAgICAvLyBpZiB0aGlzIGlzIG5vdCBhIHByb2R1Y3Rpb24gYnVpbGQgaW4gdGhlIGZpcnN0IHBsYWNlXG4gICAgLy8gKGluIHdoaWNoIGNhc2UgdGhlIGV4cHJlc3Npb24gYmVsb3cgd291bGQgYmUgc3Vic3RpdHV0ZWQgd2l0aCAncHJvZHVjdGlvbicpXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG59XG5jYXRjaCAoZSkge1xuICAgIHZhciBnID0gZ2V0R2xvYmFsKCk7XG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICBnLnByb2Nlc3MgPSB7fTtcbiAgICBnLnByb2Nlc3MuZW52ID0ge307XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHRlc3RDb2RlTWluaWZpY2F0aW9uKCkgeyB9XG4gICAgaWYgKHRlc3RDb2RlTWluaWZpY2F0aW9uLm5hbWUgIT09IFwidGVzdENvZGVNaW5pZmljYXRpb25cIiAmJlxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgJiZcbiAgICAgICAgcHJvY2Vzcy5lbnYuSUdOT1JFX01PQlhfTUlOSUZZX1dBUk5JTkcgIT09IFwidHJ1ZVwiKSB7XG4gICAgICAgIC8vIHRyaWNrIHNvIGl0IGRvZXNuJ3QgZ2V0IHJlcGxhY2VkXG4gICAgICAgIHZhciB2YXJOYW1lID0gW1wicHJvY2Vzc1wiLCBcImVudlwiLCBcIk5PREVfRU5WXCJdLmpvaW4oXCIuXCIpO1xuICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieF0geW91IGFyZSBydW5uaW5nIGEgbWluaWZpZWQgYnVpbGQsIGJ1dCAnXCIgKyB2YXJOYW1lICsgXCInIHdhcyBub3Qgc2V0IHRvICdwcm9kdWN0aW9uJyBpbiB5b3VyIGJ1bmRsZXIuIFRoaXMgcmVzdWx0cyBpbiBhbiB1bm5lY2Vzc2FyaWx5IGxhcmdlIGFuZCBzbG93IGJ1bmRsZVwiKTtcbiAgICB9XG59KSgpO1xuaWYgKHR5cGVvZiBfX01PQlhfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9PT0gXCJvYmplY3RcIikge1xuICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZHlrb2cvbW9ieC1kZXZ0b29scy9cbiAgICBfX01PQlhfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5pbmplY3RNb2J4KHtcbiAgICAgICAgc3B5OiBzcHksXG4gICAgICAgIGV4dHJhczoge1xuICAgICAgICAgICAgZ2V0RGVidWdOYW1lOiBnZXREZWJ1Z05hbWVcbiAgICAgICAgfSxcbiAgICAgICAgJG1vYng6ICRtb2J4XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7ICRtb2J4LCBGbG93Q2FuY2VsbGF0aW9uRXJyb3IsIElEZXJpdmF0aW9uU3RhdGUsIE9ic2VydmFibGVNYXAsIE9ic2VydmFibGVTZXQsIFJlYWN0aW9uLCBhbGxvd1N0YXRlQ2hhbmdlcyBhcyBfYWxsb3dTdGF0ZUNoYW5nZXMsIGFsbG93U3RhdGVDaGFuZ2VzSW5zaWRlQ29tcHV0ZWQgYXMgX2FsbG93U3RhdGVDaGFuZ2VzSW5zaWRlQ29tcHV0ZWQsIF9lbmRBY3Rpb24sIGdldEFkbWluaXN0cmF0aW9uIGFzIF9nZXRBZG1pbmlzdHJhdGlvbiwgZ2V0R2xvYmFsU3RhdGUgYXMgX2dldEdsb2JhbFN0YXRlLCBpbnRlcmNlcHRSZWFkcyBhcyBfaW50ZXJjZXB0UmVhZHMsIGlzQ29tcHV0aW5nRGVyaXZhdGlvbiBhcyBfaXNDb21wdXRpbmdEZXJpdmF0aW9uLCByZXNldEdsb2JhbFN0YXRlIGFzIF9yZXNldEdsb2JhbFN0YXRlLCBfc3RhcnRBY3Rpb24sIGFjdGlvbiwgYXV0b3J1biwgY29tcGFyZXIsIGNvbXB1dGVkLCBjb25maWd1cmUsIGNyZWF0ZUF0b20sIGRlY29yYXRlLCBlbnRyaWVzLCBleHRlbmRPYnNlcnZhYmxlLCBmbG93LCBnZXQsIGdldEF0b20sIGdldERlYnVnTmFtZSwgZ2V0RGVwZW5kZW5jeVRyZWUsIGdldE9ic2VydmVyVHJlZSwgaGFzLCBpbnRlcmNlcHQsIGlzQWN0aW9uLCBpc0FycmF5TGlrZSwgaXNPYnNlcnZhYmxlVmFsdWUgYXMgaXNCb3hlZE9ic2VydmFibGUsIGlzQ29tcHV0ZWQsIGlzQ29tcHV0ZWRQcm9wLCBpc0Zsb3dDYW5jZWxsYXRpb25FcnJvciwgaXNPYnNlcnZhYmxlLCBpc09ic2VydmFibGVBcnJheSwgaXNPYnNlcnZhYmxlTWFwLCBpc09ic2VydmFibGVPYmplY3QsIGlzT2JzZXJ2YWJsZVByb3AsIGlzT2JzZXJ2YWJsZVNldCwga2V5cywgb2JzZXJ2YWJsZSwgb2JzZXJ2ZSwgb25CZWNvbWVPYnNlcnZlZCwgb25CZWNvbWVVbm9ic2VydmVkLCBvblJlYWN0aW9uRXJyb3IsIHJlYWN0aW9uLCByZW1vdmUsIHJ1bkluQWN0aW9uLCBzZXQsIHNweSwgdG9KUywgdHJhY2UsIHRyYW5zYWN0aW9uLCB1bnRyYWNrZWQsIHZhbHVlcywgd2hlbiB9O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7b2JzZXJ2YWJsZSxhdXRvcnVufSBmcm9tICdtb2J4J1xuXG4vLyBvYnNlcnZhYmxlIOaKiuaZrumAmueahOaVsOaNruWPmOaIkOWPr+inguWvn+eahOaVsOaNriBPYmplY3QuZGVmaW5lUHJvcGVydHkgcHJveHlcbi8vIGF1dG9ydW4g6Ieq5Yqo6L+Q6KGMXG5sZXQgbyA9IG9ic2VydmFibGUoe25hbWU6J3pmcHgnfSlcblxuYXV0b3J1bigoKT0+e1xuICAgIGNvbnNvbGUubG9nKG8ubmFtZSlcbn0pXG5vLm5hbWUgPSAnaGVsbG8nIl0sInNvdXJjZVJvb3QiOiIifQ==