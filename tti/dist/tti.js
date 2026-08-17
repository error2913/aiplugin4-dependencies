// ==UserScript==
// @name         生成图片
// @description  通过文字描述生成图片，TOML 多模型配置，支持同步返回与异步任务轮询。
// @version      2.0.0
// @author       白鱼、错误
// @timestamp    2026-08-12
// @license      MIT
// @homepageURL  https://github.com/error2913/aiplugin4-dependencies/
// @updateUrl    https://raw.githubusercontent.com/error2913/aiplugin4-dependencies/main/tti/dist/tti.js
// ==/UserScript==

"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // node_modules/core-js-pure/internals/global-this.js
  var require_global_this = __commonJS({
    "node_modules/core-js-pure/internals/global-this.js"(exports, module) {
      "use strict";
      var check = function(it) {
        return it && it.Math === Math && it;
      };
      module.exports = // eslint-disable-next-line es/no-global-this -- safe
      check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
      check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
      /* @__PURE__ */ function() {
        return this;
      }() || Function("return this")();
    }
  });

  // node_modules/core-js-pure/internals/fails.js
  var require_fails = __commonJS({
    "node_modules/core-js-pure/internals/fails.js"(exports, module) {
      "use strict";
      module.exports = function(exec) {
        try {
          return !!exec();
        } catch (error) {
          return true;
        }
      };
    }
  });

  // node_modules/core-js-pure/internals/function-bind-native.js
  var require_function_bind_native = __commonJS({
    "node_modules/core-js-pure/internals/function-bind-native.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = !fails(function() {
        var test = function() {
        }.bind();
        return typeof test != "function" || test.hasOwnProperty("prototype");
      });
    }
  });

  // node_modules/core-js-pure/internals/function-apply.js
  var require_function_apply = __commonJS({
    "node_modules/core-js-pure/internals/function-apply.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native();
      var FunctionPrototype = Function.prototype;
      var apply = FunctionPrototype.apply;
      var call = FunctionPrototype.call;
      module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
        return call.apply(apply, arguments);
      });
    }
  });

  // node_modules/core-js-pure/internals/function-uncurry-this.js
  var require_function_uncurry_this = __commonJS({
    "node_modules/core-js-pure/internals/function-uncurry-this.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native();
      var FunctionPrototype = Function.prototype;
      var call = FunctionPrototype.call;
      var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
      module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
        return function() {
          return call.apply(fn, arguments);
        };
      };
    }
  });

  // node_modules/core-js-pure/internals/classof-raw.js
  var require_classof_raw = __commonJS({
    "node_modules/core-js-pure/internals/classof-raw.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var toString = uncurryThis({}.toString);
      var stringSlice = uncurryThis("".slice);
      module.exports = function(it) {
        return stringSlice(toString(it), 8, -1);
      };
    }
  });

  // node_modules/core-js-pure/internals/function-uncurry-this-clause.js
  var require_function_uncurry_this_clause = __commonJS({
    "node_modules/core-js-pure/internals/function-uncurry-this-clause.js"(exports, module) {
      "use strict";
      var classofRaw = require_classof_raw();
      var uncurryThis = require_function_uncurry_this();
      module.exports = function(fn) {
        if (classofRaw(fn) === "Function") return uncurryThis(fn);
      };
    }
  });

  // node_modules/core-js-pure/internals/is-callable.js
  var require_is_callable = __commonJS({
    "node_modules/core-js-pure/internals/is-callable.js"(exports, module) {
      "use strict";
      var documentAll = typeof document == "object" && document.all;
      module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
        return typeof argument == "function" || argument === documentAll;
      } : function(argument) {
        return typeof argument == "function";
      };
    }
  });

  // node_modules/core-js-pure/internals/descriptors.js
  var require_descriptors = __commonJS({
    "node_modules/core-js-pure/internals/descriptors.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = !fails(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] !== 7;
      });
    }
  });

  // node_modules/core-js-pure/internals/function-call.js
  var require_function_call = __commonJS({
    "node_modules/core-js-pure/internals/function-call.js"(exports, module) {
      "use strict";
      var NATIVE_BIND = require_function_bind_native();
      var call = Function.prototype.call;
      module.exports = NATIVE_BIND ? call.bind(call) : function() {
        return call.apply(call, arguments);
      };
    }
  });

  // node_modules/core-js-pure/internals/object-property-is-enumerable.js
  var require_object_property_is_enumerable = __commonJS({
    "node_modules/core-js-pure/internals/object-property-is-enumerable.js"(exports) {
      "use strict";
      var $propertyIsEnumerable = {}.propertyIsEnumerable;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
      exports.f = NASHORN_BUG ? function propertyIsEnumerable(V2) {
        var descriptor = getOwnPropertyDescriptor(this, V2);
        return !!descriptor && descriptor.enumerable;
      } : $propertyIsEnumerable;
    }
  });

  // node_modules/core-js-pure/internals/create-property-descriptor.js
  var require_create_property_descriptor = __commonJS({
    "node_modules/core-js-pure/internals/create-property-descriptor.js"(exports, module) {
      "use strict";
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value
        };
      };
    }
  });

  // node_modules/core-js-pure/internals/indexed-object.js
  var require_indexed_object = __commonJS({
    "node_modules/core-js-pure/internals/indexed-object.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var classof = require_classof_raw();
      var $Object = Object;
      var split = uncurryThis("".split);
      module.exports = fails(function() {
        return !$Object("z").propertyIsEnumerable(0);
      }) ? function(it) {
        return classof(it) === "String" ? split(it, "") : $Object(it);
      } : $Object;
    }
  });

  // node_modules/core-js-pure/internals/is-null-or-undefined.js
  var require_is_null_or_undefined = __commonJS({
    "node_modules/core-js-pure/internals/is-null-or-undefined.js"(exports, module) {
      "use strict";
      module.exports = function(it) {
        return it === null || it === void 0;
      };
    }
  });

  // node_modules/core-js-pure/internals/require-object-coercible.js
  var require_require_object_coercible = __commonJS({
    "node_modules/core-js-pure/internals/require-object-coercible.js"(exports, module) {
      "use strict";
      var isNullOrUndefined = require_is_null_or_undefined();
      var $TypeError = TypeError;
      module.exports = function(it) {
        if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
        return it;
      };
    }
  });

  // node_modules/core-js-pure/internals/to-indexed-object.js
  var require_to_indexed_object = __commonJS({
    "node_modules/core-js-pure/internals/to-indexed-object.js"(exports, module) {
      "use strict";
      var IndexedObject = require_indexed_object();
      var requireObjectCoercible = require_require_object_coercible();
      module.exports = function(it) {
        return IndexedObject(requireObjectCoercible(it));
      };
    }
  });

  // node_modules/core-js-pure/internals/is-object.js
  var require_is_object = __commonJS({
    "node_modules/core-js-pure/internals/is-object.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable();
      module.exports = function(it) {
        return typeof it == "object" ? it !== null : isCallable(it);
      };
    }
  });

  // node_modules/core-js-pure/internals/path.js
  var require_path = __commonJS({
    "node_modules/core-js-pure/internals/path.js"(exports, module) {
      "use strict";
      module.exports = {};
    }
  });

  // node_modules/core-js-pure/internals/get-built-in.js
  var require_get_built_in = __commonJS({
    "node_modules/core-js-pure/internals/get-built-in.js"(exports, module) {
      "use strict";
      var path = require_path();
      var globalThis2 = require_global_this();
      var isCallable = require_is_callable();
      var aFunction = function(variable) {
        return isCallable(variable) ? variable : void 0;
      };
      module.exports = function(namespace, method) {
        return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(globalThis2[namespace]) : path[namespace] && path[namespace][method] || globalThis2[namespace] && globalThis2[namespace][method];
      };
    }
  });

  // node_modules/core-js-pure/internals/object-is-prototype-of.js
  var require_object_is_prototype_of = __commonJS({
    "node_modules/core-js-pure/internals/object-is-prototype-of.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis({}.isPrototypeOf);
    }
  });

  // node_modules/core-js-pure/internals/environment-user-agent.js
  var require_environment_user_agent = __commonJS({
    "node_modules/core-js-pure/internals/environment-user-agent.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var navigator = globalThis2.navigator;
      var userAgent = navigator && navigator.userAgent;
      module.exports = userAgent ? String(userAgent) : "";
    }
  });

  // node_modules/core-js-pure/internals/environment-v8-version.js
  var require_environment_v8_version = __commonJS({
    "node_modules/core-js-pure/internals/environment-v8-version.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var userAgent = require_environment_user_agent();
      var process = globalThis2.process;
      var Deno2 = globalThis2.Deno;
      var versions = process && process.versions || Deno2 && Deno2.version;
      var v8 = versions && versions.v8;
      var match;
      var version;
      if (v8) {
        match = v8.split(".");
        version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
      }
      if (!version && userAgent) {
        match = userAgent.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
          match = userAgent.match(/Chrome\/(\d+)/);
          if (match) version = +match[1];
        }
      }
      module.exports = version;
    }
  });

  // node_modules/core-js-pure/internals/symbol-constructor-detection.js
  var require_symbol_constructor_detection = __commonJS({
    "node_modules/core-js-pure/internals/symbol-constructor-detection.js"(exports, module) {
      "use strict";
      var V8_VERSION = require_environment_v8_version();
      var fails = require_fails();
      var globalThis2 = require_global_this();
      var $String = globalThis2.String;
      module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
        var symbol = Symbol("symbol detection");
        return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
        !Symbol.sham && V8_VERSION && V8_VERSION < 41;
      });
    }
  });

  // node_modules/core-js-pure/internals/use-symbol-as-uid.js
  var require_use_symbol_as_uid = __commonJS({
    "node_modules/core-js-pure/internals/use-symbol-as-uid.js"(exports, module) {
      "use strict";
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }
  });

  // node_modules/core-js-pure/internals/is-symbol.js
  var require_is_symbol = __commonJS({
    "node_modules/core-js-pure/internals/is-symbol.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var isCallable = require_is_callable();
      var isPrototypeOf = require_object_is_prototype_of();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var $Object = Object;
      module.exports = USE_SYMBOL_AS_UID ? function(it) {
        return typeof it == "symbol";
      } : function(it) {
        var $Symbol = getBuiltIn("Symbol");
        return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
      };
    }
  });

  // node_modules/core-js-pure/internals/try-to-string.js
  var require_try_to_string = __commonJS({
    "node_modules/core-js-pure/internals/try-to-string.js"(exports, module) {
      "use strict";
      var $String = String;
      module.exports = function(argument) {
        try {
          return $String(argument);
        } catch (error) {
          return "Object";
        }
      };
    }
  });

  // node_modules/core-js-pure/internals/a-callable.js
  var require_a_callable = __commonJS({
    "node_modules/core-js-pure/internals/a-callable.js"(exports, module) {
      "use strict";
      var isCallable = require_is_callable();
      var tryToString = require_try_to_string();
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isCallable(argument)) return argument;
        throw new $TypeError(tryToString(argument) + " is not a function");
      };
    }
  });

  // node_modules/core-js-pure/internals/get-method.js
  var require_get_method = __commonJS({
    "node_modules/core-js-pure/internals/get-method.js"(exports, module) {
      "use strict";
      var aCallable = require_a_callable();
      var isNullOrUndefined = require_is_null_or_undefined();
      module.exports = function(V2, P2) {
        var func = V2[P2];
        return isNullOrUndefined(func) ? void 0 : aCallable(func);
      };
    }
  });

  // node_modules/core-js-pure/internals/ordinary-to-primitive.js
  var require_ordinary_to_primitive = __commonJS({
    "node_modules/core-js-pure/internals/ordinary-to-primitive.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var $TypeError = TypeError;
      module.exports = function(input, pref) {
        var fn, val;
        if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
        if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
        if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
        throw new $TypeError("Can't convert object to primitive value");
      };
    }
  });

  // node_modules/core-js-pure/internals/is-pure.js
  var require_is_pure = __commonJS({
    "node_modules/core-js-pure/internals/is-pure.js"(exports, module) {
      "use strict";
      module.exports = true;
    }
  });

  // node_modules/core-js-pure/internals/define-global-property.js
  var require_define_global_property = __commonJS({
    "node_modules/core-js-pure/internals/define-global-property.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var defineProperty = Object.defineProperty;
      module.exports = function(key, value) {
        try {
          defineProperty(globalThis2, key, { value, configurable: true, writable: true });
        } catch (error) {
          globalThis2[key] = value;
        }
        return value;
      };
    }
  });

  // node_modules/core-js-pure/internals/shared-store.js
  var require_shared_store = __commonJS({
    "node_modules/core-js-pure/internals/shared-store.js"(exports, module) {
      "use strict";
      var IS_PURE = require_is_pure();
      var globalThis2 = require_global_this();
      var defineGlobalProperty = require_define_global_property();
      var SHARED = "__core-js_shared__";
      var store = module.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
      (store.versions || (store.versions = [])).push({
        version: "3.50.0",
        mode: IS_PURE ? "pure" : "global",
        copyright: "© 2013–2025 Denis Pushkarev (zloirock.ru), 2025–2026 CoreJS Company (core-js.io). All rights reserved.",
        license: "https://github.com/zloirock/core-js/blob/v3.50.0/LICENSE",
        source: "https://github.com/zloirock/core-js"
      });
    }
  });

  // node_modules/core-js-pure/internals/shared.js
  var require_shared = __commonJS({
    "node_modules/core-js-pure/internals/shared.js"(exports, module) {
      "use strict";
      var store = require_shared_store();
      var create = Object.create || Object;
      module.exports = function(key, value) {
        return store[key] || (store[key] = value || create(null));
      };
    }
  });

  // node_modules/core-js-pure/internals/to-object.js
  var require_to_object = __commonJS({
    "node_modules/core-js-pure/internals/to-object.js"(exports, module) {
      "use strict";
      var requireObjectCoercible = require_require_object_coercible();
      var $Object = Object;
      module.exports = function(argument) {
        return $Object(requireObjectCoercible(argument));
      };
    }
  });

  // node_modules/core-js-pure/internals/has-own-property.js
  var require_has_own_property = __commonJS({
    "node_modules/core-js-pure/internals/has-own-property.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var toObject = require_to_object();
      var hasOwnProperty = uncurryThis({}.hasOwnProperty);
      module.exports = Object.hasOwn || function hasOwn(it, key) {
        return hasOwnProperty(toObject(it), key);
      };
    }
  });

  // node_modules/core-js-pure/internals/uid.js
  var require_uid = __commonJS({
    "node_modules/core-js-pure/internals/uid.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var id = 0;
      var postfix = Math.random();
      var toString = uncurryThis(1.1.toString);
      module.exports = function(key) {
        return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
      };
    }
  });

  // node_modules/core-js-pure/internals/well-known-symbol.js
  var require_well_known_symbol = __commonJS({
    "node_modules/core-js-pure/internals/well-known-symbol.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var shared = require_shared();
      var hasOwn = require_has_own_property();
      var uid = require_uid();
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
      var Symbol2 = globalThis2.Symbol;
      var WellKnownSymbolsStore = shared("wks");
      var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
      module.exports = function(name) {
        if (!hasOwn(WellKnownSymbolsStore, name)) {
          WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
        }
        return WellKnownSymbolsStore[name];
      };
    }
  });

  // node_modules/core-js-pure/internals/to-primitive.js
  var require_to_primitive = __commonJS({
    "node_modules/core-js-pure/internals/to-primitive.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var isObject = require_is_object();
      var isSymbol = require_is_symbol();
      var getMethod = require_get_method();
      var ordinaryToPrimitive = require_ordinary_to_primitive();
      var wellKnownSymbol = require_well_known_symbol();
      var $TypeError = TypeError;
      var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
      module.exports = function(input, pref) {
        if (!isObject(input) || isSymbol(input)) return input;
        var exoticToPrim = getMethod(input, TO_PRIMITIVE);
        var result;
        if (exoticToPrim) {
          if (pref === void 0) pref = "default";
          result = call(exoticToPrim, input, pref);
          if (!isObject(result) || isSymbol(result)) return result;
          throw new $TypeError("Can't convert object to primitive value");
        }
        if (pref === void 0) pref = "number";
        return ordinaryToPrimitive(input, pref);
      };
    }
  });

  // node_modules/core-js-pure/internals/to-property-key.js
  var require_to_property_key = __commonJS({
    "node_modules/core-js-pure/internals/to-property-key.js"(exports, module) {
      "use strict";
      var toPrimitive = require_to_primitive();
      var isSymbol = require_is_symbol();
      module.exports = function(argument) {
        var key = toPrimitive(argument, "string");
        return isSymbol(key) ? key : key + "";
      };
    }
  });

  // node_modules/core-js-pure/internals/document-create-element.js
  var require_document_create_element = __commonJS({
    "node_modules/core-js-pure/internals/document-create-element.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var isObject = require_is_object();
      var document2 = globalThis2.document;
      var EXISTS = isObject(document2) && isObject(document2.createElement);
      module.exports = function(it) {
        return EXISTS ? document2.createElement(it) : {};
      };
    }
  });

  // node_modules/core-js-pure/internals/ie8-dom-define.js
  var require_ie8_dom_define = __commonJS({
    "node_modules/core-js-pure/internals/ie8-dom-define.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      var createElement = require_document_create_element();
      module.exports = !DESCRIPTORS && !fails(function() {
        return Object.defineProperty(createElement("div"), "a", {
          get: function() {
            return 7;
          }
        }).a !== 7;
      });
    }
  });

  // node_modules/core-js-pure/internals/object-get-own-property-descriptor.js
  var require_object_get_own_property_descriptor = __commonJS({
    "node_modules/core-js-pure/internals/object-get-own-property-descriptor.js"(exports) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var call = require_function_call();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var createPropertyDescriptor = require_create_property_descriptor();
      var toIndexedObject = require_to_indexed_object();
      var toPropertyKey = require_to_property_key();
      var hasOwn = require_has_own_property();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O2, P2) {
        O2 = toIndexedObject(O2);
        P2 = toPropertyKey(P2);
        if (IE8_DOM_DEFINE) try {
          return $getOwnPropertyDescriptor(O2, P2);
        } catch (error) {
        }
        if (hasOwn(O2, P2)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O2, P2), O2[P2]);
      };
    }
  });

  // node_modules/core-js-pure/internals/is-forced.js
  var require_is_forced = __commonJS({
    "node_modules/core-js-pure/internals/is-forced.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      var isCallable = require_is_callable();
      var replacement = /#|\.prototype\./;
      var isForced = function(feature, detection) {
        var value = data[normalize(feature)];
        return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
      };
      var normalize = isForced.normalize = function(string) {
        return String(string).replace(replacement, ".").toLowerCase();
      };
      var data = isForced.data = {};
      var NATIVE = isForced.NATIVE = "N";
      var POLYFILL = isForced.POLYFILL = "P";
      module.exports = isForced;
    }
  });

  // node_modules/core-js-pure/internals/function-bind-context.js
  var require_function_bind_context = __commonJS({
    "node_modules/core-js-pure/internals/function-bind-context.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this_clause();
      var aCallable = require_a_callable();
      var NATIVE_BIND = require_function_bind_native();
      var bind = uncurryThis(uncurryThis.bind);
      module.exports = function(fn, that) {
        aCallable(fn);
        return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
          return fn.apply(that, arguments);
        };
      };
    }
  });

  // node_modules/core-js-pure/internals/v8-prototype-define-bug.js
  var require_v8_prototype_define_bug = __commonJS({
    "node_modules/core-js-pure/internals/v8-prototype-define-bug.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var fails = require_fails();
      module.exports = DESCRIPTORS && fails(function() {
        return Object.defineProperty(function() {
        }, "prototype", {
          value: 42,
          writable: false
        }).prototype !== 42;
      });
    }
  });

  // node_modules/core-js-pure/internals/an-object.js
  var require_an_object = __commonJS({
    "node_modules/core-js-pure/internals/an-object.js"(exports, module) {
      "use strict";
      var isObject = require_is_object();
      var $String = String;
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isObject(argument)) return argument;
        throw new $TypeError($String(argument) + " is not an object");
      };
    }
  });

  // node_modules/core-js-pure/internals/object-define-property.js
  var require_object_define_property = __commonJS({
    "node_modules/core-js-pure/internals/object-define-property.js"(exports) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var IE8_DOM_DEFINE = require_ie8_dom_define();
      var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
      var anObject = require_an_object();
      var toPropertyKey = require_to_property_key();
      var $TypeError = TypeError;
      var $defineProperty = Object.defineProperty;
      var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var ENUMERABLE = "enumerable";
      var CONFIGURABLE = "configurable";
      var WRITABLE = "writable";
      exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O2, P2, Attributes) {
        anObject(O2);
        P2 = toPropertyKey(P2);
        anObject(Attributes);
        if (typeof O2 === "function" && P2 === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
          var current = $getOwnPropertyDescriptor(O2, P2);
          if (current && current[WRITABLE]) {
            O2[P2] = Attributes.value;
            Attributes = {
              configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
              enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
              writable: false
            };
          }
        }
        return $defineProperty(O2, P2, Attributes);
      } : $defineProperty : function defineProperty(O2, P2, Attributes) {
        anObject(O2);
        P2 = toPropertyKey(P2);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) try {
          return $defineProperty(O2, P2, Attributes);
        } catch (error) {
        }
        if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
        if ("value" in Attributes) O2[P2] = Attributes.value;
        return O2;
      };
    }
  });

  // node_modules/core-js-pure/internals/create-non-enumerable-property.js
  var require_create_non_enumerable_property = __commonJS({
    "node_modules/core-js-pure/internals/create-non-enumerable-property.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module.exports = DESCRIPTORS ? function(object, key, value) {
        return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
      } : function(object, key, value) {
        object[key] = value;
        return object;
      };
    }
  });

  // node_modules/core-js-pure/internals/export.js
  var require_export = __commonJS({
    "node_modules/core-js-pure/internals/export.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var apply = require_function_apply();
      var uncurryThis = require_function_uncurry_this_clause();
      var isCallable = require_is_callable();
      var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
      var isForced = require_is_forced();
      var path = require_path();
      var bind = require_function_bind_context();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var hasOwn = require_has_own_property();
      require_shared_store();
      var wrapConstructor = function(NativeConstructor) {
        var Wrapper = function(a2, b2, c2) {
          if (this instanceof Wrapper) {
            switch (arguments.length) {
              case 0:
                return new NativeConstructor();
              case 1:
                return new NativeConstructor(a2);
              case 2:
                return new NativeConstructor(a2, b2);
            }
            return new NativeConstructor(a2, b2, c2);
          }
          return apply(NativeConstructor, this, arguments);
        };
        Wrapper.prototype = NativeConstructor.prototype;
        return Wrapper;
      };
      module.exports = function(options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var PROTO = options.proto;
        var nativeSource = GLOBAL ? globalThis2 : STATIC ? globalThis2[TARGET] : globalThis2[TARGET] && globalThis2[TARGET].prototype;
        var target = GLOBAL ? path : path[TARGET] || createNonEnumerableProperty(path, TARGET, {})[TARGET];
        var targetPrototype = target.prototype;
        var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
        var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;
        for (key in source) {
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          USE_NATIVE = !FORCED && nativeSource && hasOwn(nativeSource, key);
          targetProperty = target[key];
          if (USE_NATIVE) if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(nativeSource, key);
            nativeProperty = descriptor && descriptor.value;
          } else nativeProperty = nativeSource[key];
          sourceProperty = USE_NATIVE && nativeProperty ? nativeProperty : source[key];
          if (!FORCED && !PROTO && typeof targetProperty == typeof sourceProperty) continue;
          if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, globalThis2);
          else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
          else if (PROTO && isCallable(sourceProperty)) resultProperty = uncurryThis(sourceProperty);
          else resultProperty = sourceProperty;
          if (options.sham || sourceProperty && sourceProperty.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(resultProperty, "sham", true);
          }
          createNonEnumerableProperty(target, key, resultProperty);
          if (PROTO) {
            VIRTUAL_PROTOTYPE = TARGET + "Prototype";
            if (!hasOwn(path, VIRTUAL_PROTOTYPE)) {
              createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
            }
            createNonEnumerableProperty(path[VIRTUAL_PROTOTYPE], key, sourceProperty);
            if (options.real && targetPrototype && (FORCED || !targetPrototype[key])) {
              createNonEnumerableProperty(targetPrototype, key, sourceProperty);
            }
          }
        }
      };
    }
  });

  // node_modules/core-js-pure/modules/es.object.define-property.js
  var require_es_object_define_property = __commonJS({
    "node_modules/core-js-pure/modules/es.object.define-property.js"() {
      "use strict";
      var $2 = require_export();
      var DESCRIPTORS = require_descriptors();
      var defineProperty = require_object_define_property().f;
      $2({ target: "Object", stat: true, forced: Object.defineProperty !== defineProperty, sham: !DESCRIPTORS }, {
        defineProperty
      });
    }
  });

  // node_modules/core-js-pure/es/object/define-property.js
  var require_define_property = __commonJS({
    "node_modules/core-js-pure/es/object/define-property.js"(exports, module) {
      "use strict";
      require_es_object_define_property();
      var path = require_path();
      var Object2 = path.Object;
      var $defineProperty = module.exports = function defineProperty(it, key, desc) {
        return Object2.defineProperty(it, key, desc);
      };
      if (Object2.defineProperty.sham) $defineProperty.sham = true;
    }
  });

  // node_modules/core-js-pure/stable/object/define-property.js
  var require_define_property2 = __commonJS({
    "node_modules/core-js-pure/stable/object/define-property.js"(exports, module) {
      "use strict";
      var parent = require_define_property();
      module.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js
  var require_define_property3 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/object/define-property.js"(exports, module) {
      "use strict";
      module.exports = require_define_property2();
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js
  var require_interopRequireDefault = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/interopRequireDefault.js"(exports, module) {
      "use strict";
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : {
          "default": e
        };
      }
      module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/core-js-pure/internals/is-array.js
  var require_is_array = __commonJS({
    "node_modules/core-js-pure/internals/is-array.js"(exports, module) {
      "use strict";
      var classof = require_classof_raw();
      module.exports = Array.isArray || function isArray(argument) {
        return classof(argument) === "Array";
      };
    }
  });

  // node_modules/core-js-pure/internals/to-string-tag-support.js
  var require_to_string_tag_support = __commonJS({
    "node_modules/core-js-pure/internals/to-string-tag-support.js"(exports, module) {
      "use strict";
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var test = {};
      test[TO_STRING_TAG] = "z";
      module.exports = String(test) === "[object z]";
    }
  });

  // node_modules/core-js-pure/internals/classof.js
  var require_classof = __commonJS({
    "node_modules/core-js-pure/internals/classof.js"(exports, module) {
      "use strict";
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var isCallable = require_is_callable();
      var classofRaw = require_classof_raw();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      var $Object = Object;
      var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ function() {
        return arguments;
      }()) === "Arguments";
      var tryGet = function(it, key) {
        try {
          return it[key];
        } catch (error) {
        }
      };
      module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
        var O2, tag, result;
        return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O2 = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O2) : (result = classofRaw(O2)) === "Object" && isCallable(O2.callee) ? "Arguments" : result;
      };
    }
  });

  // node_modules/core-js-pure/internals/inspect-source.js
  var require_inspect_source = __commonJS({
    "node_modules/core-js-pure/internals/inspect-source.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var isCallable = require_is_callable();
      var store = require_shared_store();
      var functionToString = uncurryThis(Function.toString);
      if (!isCallable(store.inspectSource)) {
        store.inspectSource = function(it) {
          return functionToString(it);
        };
      }
      module.exports = store.inspectSource;
    }
  });

  // node_modules/core-js-pure/internals/is-constructor.js
  var require_is_constructor = __commonJS({
    "node_modules/core-js-pure/internals/is-constructor.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var isCallable = require_is_callable();
      var classof = require_classof();
      var getBuiltIn = require_get_built_in();
      var inspectSource = require_inspect_source();
      var noop = function() {
      };
      var construct = getBuiltIn("Reflect", "construct");
      var constructorRegExp = /^\s*(?:class|function)\b/;
      var exec = uncurryThis(constructorRegExp.exec);
      var INCORRECT_TO_STRING = !constructorRegExp.test(noop);
      var isConstructorModern = function isConstructor(argument) {
        if (!isCallable(argument)) return false;
        try {
          construct(noop, [], argument);
          return true;
        } catch (error) {
          return false;
        }
      };
      var isConstructorLegacy = function isConstructor(argument) {
        if (!isCallable(argument)) return false;
        switch (classof(argument)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return false;
        }
        try {
          return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
        } catch (error) {
          return true;
        }
      };
      isConstructorLegacy.sham = true;
      module.exports = !construct || fails(function() {
        var called;
        return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
          called = true;
        }) || called;
      }) ? isConstructorLegacy : isConstructorModern;
    }
  });

  // node_modules/core-js-pure/internals/math-trunc.js
  var require_math_trunc = __commonJS({
    "node_modules/core-js-pure/internals/math-trunc.js"(exports, module) {
      "use strict";
      var ceil = Math.ceil;
      var floor = Math.floor;
      module.exports = Math.trunc || function trunc(x2) {
        var n = +x2;
        return (n > 0 ? floor : ceil)(n);
      };
    }
  });

  // node_modules/core-js-pure/internals/to-integer-or-infinity.js
  var require_to_integer_or_infinity = __commonJS({
    "node_modules/core-js-pure/internals/to-integer-or-infinity.js"(exports, module) {
      "use strict";
      var trunc = require_math_trunc();
      module.exports = function(argument) {
        var number = +argument;
        return number !== number || number === 0 ? 0 : trunc(number);
      };
    }
  });

  // node_modules/core-js-pure/internals/to-absolute-index.js
  var require_to_absolute_index = __commonJS({
    "node_modules/core-js-pure/internals/to-absolute-index.js"(exports, module) {
      "use strict";
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var max = Math.max;
      var min = Math.min;
      module.exports = function(index, length) {
        var integer = toIntegerOrInfinity(index);
        return integer < 0 ? max(integer + length, 0) : min(integer, length);
      };
    }
  });

  // node_modules/core-js-pure/internals/to-length.js
  var require_to_length = __commonJS({
    "node_modules/core-js-pure/internals/to-length.js"(exports, module) {
      "use strict";
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var min = Math.min;
      module.exports = function(argument) {
        var len = toIntegerOrInfinity(argument);
        return len > 0 ? min(len, 9007199254740991) : 0;
      };
    }
  });

  // node_modules/core-js-pure/internals/length-of-array-like.js
  var require_length_of_array_like = __commonJS({
    "node_modules/core-js-pure/internals/length-of-array-like.js"(exports, module) {
      "use strict";
      var toLength = require_to_length();
      module.exports = function(obj) {
        return toLength(obj.length);
      };
    }
  });

  // node_modules/core-js-pure/internals/create-property.js
  var require_create_property = __commonJS({
    "node_modules/core-js-pure/internals/create-property.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var definePropertyModule = require_object_define_property();
      var createPropertyDescriptor = require_create_property_descriptor();
      module.exports = function(object, key, value) {
        if (DESCRIPTORS) definePropertyModule.f(object, key, createPropertyDescriptor(0, value));
        else object[key] = value;
      };
    }
  });

  // node_modules/core-js-pure/internals/array-set-length.js
  var require_array_set_length = __commonJS({
    "node_modules/core-js-pure/internals/array-set-length.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var isArray = require_is_array();
      var $TypeError = TypeError;
      var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
        if (this !== void 0) return true;
        try {
          Object.defineProperty([], "length", { writable: false }).length = 1;
        } catch (error) {
          return error instanceof TypeError;
        }
      }();
      module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O2, length) {
        if (isArray(O2) && !getOwnPropertyDescriptor(O2, "length").writable) {
          throw new $TypeError("Cannot set read only .length");
        }
        return O2.length = length;
      } : function(O2, length) {
        return O2.length = length;
      };
    }
  });

  // node_modules/core-js-pure/internals/array-method-has-species-support.js
  var require_array_method_has_species_support = __commonJS({
    "node_modules/core-js-pure/internals/array-method-has-species-support.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      var wellKnownSymbol = require_well_known_symbol();
      var V8_VERSION = require_environment_v8_version();
      var SPECIES = wellKnownSymbol("species");
      module.exports = function(METHOD_NAME) {
        return V8_VERSION >= 51 || !fails(function() {
          var array = [];
          var constructor = array.constructor = {};
          constructor[SPECIES] = function() {
            return { foo: 1 };
          };
          return array[METHOD_NAME](Boolean).foo !== 1;
        });
      };
    }
  });

  // node_modules/core-js-pure/internals/array-slice.js
  var require_array_slice = __commonJS({
    "node_modules/core-js-pure/internals/array-slice.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis([].slice);
    }
  });

  // node_modules/core-js-pure/modules/es.array.slice.js
  var require_es_array_slice = __commonJS({
    "node_modules/core-js-pure/modules/es.array.slice.js"() {
      "use strict";
      var $2 = require_export();
      var isArray = require_is_array();
      var isConstructor = require_is_constructor();
      var isObject = require_is_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      var toIndexedObject = require_to_indexed_object();
      var createProperty = require_create_property();
      var setArrayLength = require_array_set_length();
      var wellKnownSymbol = require_well_known_symbol();
      var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
      var nativeSlice = require_array_slice();
      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("slice");
      var SPECIES = wellKnownSymbol("species");
      var $Array = Array;
      var max = Math.max;
      $2({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
        slice: function slice(start, end) {
          var O2 = toIndexedObject(this);
          var length = lengthOfArrayLike(O2);
          var k = toAbsoluteIndex(start, length);
          var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
          var Constructor, result, n;
          if (isArray(O2)) {
            Constructor = O2.constructor;
            if (isConstructor(Constructor) && (Constructor === $Array || isArray(Constructor.prototype))) {
              Constructor = void 0;
            } else if (isObject(Constructor)) {
              Constructor = Constructor[SPECIES];
              if (Constructor === null) Constructor = void 0;
            }
            if (Constructor === $Array || Constructor === void 0) {
              return nativeSlice(O2, k, fin);
            }
          }
          result = new (Constructor === void 0 ? $Array : Constructor)(max(fin - k, 0));
          for (n = 0; k < fin; k++, n++) if (k in O2) createProperty(result, n, O2[k]);
          setArrayLength(result, n);
          return result;
        }
      });
    }
  });

  // node_modules/core-js-pure/internals/get-built-in-prototype-method.js
  var require_get_built_in_prototype_method = __commonJS({
    "node_modules/core-js-pure/internals/get-built-in-prototype-method.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var path = require_path();
      module.exports = function(CONSTRUCTOR, METHOD) {
        var Namespace = path[CONSTRUCTOR + "Prototype"];
        var pureMethod = Namespace && Namespace[METHOD];
        if (pureMethod) return pureMethod;
        var NativeConstructor = globalThis2[CONSTRUCTOR];
        var NativePrototype = NativeConstructor && NativeConstructor.prototype;
        return NativePrototype && NativePrototype[METHOD];
      };
    }
  });

  // node_modules/core-js-pure/es/array/virtual/slice.js
  var require_slice = __commonJS({
    "node_modules/core-js-pure/es/array/virtual/slice.js"(exports, module) {
      "use strict";
      require_es_array_slice();
      var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
      module.exports = getBuiltInPrototypeMethod("Array", "slice");
    }
  });

  // node_modules/core-js-pure/es/instance/slice.js
  var require_slice2 = __commonJS({
    "node_modules/core-js-pure/es/instance/slice.js"(exports, module) {
      "use strict";
      var isPrototypeOf = require_object_is_prototype_of();
      var method = require_slice();
      var ArrayPrototype = Array.prototype;
      module.exports = function(it) {
        var own = it.slice;
        return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.slice ? method : own;
      };
    }
  });

  // node_modules/core-js-pure/stable/instance/slice.js
  var require_slice3 = __commonJS({
    "node_modules/core-js-pure/stable/instance/slice.js"(exports, module) {
      "use strict";
      var parent = require_slice2();
      module.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js
  var require_slice4 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/instance/slice.js"(exports, module) {
      "use strict";
      module.exports = require_slice3();
    }
  });

  // node_modules/core-js-pure/internals/to-string.js
  var require_to_string = __commonJS({
    "node_modules/core-js-pure/internals/to-string.js"(exports, module) {
      "use strict";
      var classof = require_classof();
      var $String = String;
      module.exports = function(argument) {
        if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
        return $String(argument);
      };
    }
  });

  // node_modules/core-js-pure/internals/string-multibyte.js
  var require_string_multibyte = __commonJS({
    "node_modules/core-js-pure/internals/string-multibyte.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var toIntegerOrInfinity = require_to_integer_or_infinity();
      var toString = require_to_string();
      var requireObjectCoercible = require_require_object_coercible();
      var charAt = uncurryThis("".charAt);
      var charCodeAt = uncurryThis("".charCodeAt);
      var stringSlice = uncurryThis("".slice);
      var createMethod = function(CONVERT_TO_STRING) {
        return function($this, pos) {
          var S2 = toString(requireObjectCoercible($this));
          var position = toIntegerOrInfinity(pos);
          var size = S2.length;
          var first2, second;
          if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : void 0;
          first2 = charCodeAt(S2, position);
          return first2 < 55296 || first2 > 56319 || position + 1 === size || (second = charCodeAt(S2, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S2, position) : first2 : CONVERT_TO_STRING ? stringSlice(S2, position, position + 2) : (first2 - 55296 << 10) + (second - 56320) + 65536;
        };
      };
      module.exports = {
        // `String.prototype.codePointAt` method
        // https://tc39.es/ecma262/#sec-string.prototype.codepointat
        codeAt: createMethod(false),
        // `String.prototype.at` method
        // https://github.com/mathiasbynens/String.prototype.at
        charAt: createMethod(true)
      };
    }
  });

  // node_modules/core-js-pure/internals/weak-map-basic-detection.js
  var require_weak_map_basic_detection = __commonJS({
    "node_modules/core-js-pure/internals/weak-map-basic-detection.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var isCallable = require_is_callable();
      var WeakMap = globalThis2.WeakMap;
      module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
    }
  });

  // node_modules/core-js-pure/internals/shared-key.js
  var require_shared_key = __commonJS({
    "node_modules/core-js-pure/internals/shared-key.js"(exports, module) {
      "use strict";
      var shared = require_shared();
      var uid = require_uid();
      var keys = shared("keys");
      module.exports = function(key) {
        return keys[key] || (keys[key] = uid(key));
      };
    }
  });

  // node_modules/core-js-pure/internals/hidden-keys.js
  var require_hidden_keys = __commonJS({
    "node_modules/core-js-pure/internals/hidden-keys.js"(exports, module) {
      "use strict";
      module.exports = {};
    }
  });

  // node_modules/core-js-pure/internals/internal-state.js
  var require_internal_state = __commonJS({
    "node_modules/core-js-pure/internals/internal-state.js"(exports, module) {
      "use strict";
      var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
      var globalThis2 = require_global_this();
      var isObject = require_is_object();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var hasOwn = require_has_own_property();
      var shared = require_shared_store();
      var sharedKey = require_shared_key();
      var hiddenKeys = require_hidden_keys();
      var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
      var TypeError2 = globalThis2.TypeError;
      var WeakMap = globalThis2.WeakMap;
      var set;
      var get;
      var has;
      var enforce = function(it) {
        return has(it) ? get(it) : set(it, {});
      };
      var getterFor = function(TYPE) {
        return function(it) {
          var state;
          if (!isObject(it) || (state = get(it)).type !== TYPE) {
            throw new TypeError2("Incompatible receiver, " + TYPE + " required");
          }
          return state;
        };
      };
      if (NATIVE_WEAK_MAP || shared.state) {
        store = shared.state || (shared.state = new WeakMap());
        store.get = store.get;
        store.has = store.has;
        store.set = store.set;
        set = function(it, metadata) {
          if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          store.set(it, metadata);
          return metadata;
        };
        get = function(it) {
          return store.get(it) || {};
        };
        has = function(it) {
          return store.has(it);
        };
      } else {
        STATE = sharedKey("state");
        hiddenKeys[STATE] = true;
        set = function(it, metadata) {
          if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
          metadata.facade = it;
          createNonEnumerableProperty(it, STATE, metadata);
          return metadata;
        };
        get = function(it) {
          return hasOwn(it, STATE) ? it[STATE] : {};
        };
        has = function(it) {
          return hasOwn(it, STATE);
        };
      }
      var store;
      var STATE;
      module.exports = {
        set,
        get,
        has,
        enforce,
        getterFor
      };
    }
  });

  // node_modules/core-js-pure/internals/function-name.js
  var require_function_name = __commonJS({
    "node_modules/core-js-pure/internals/function-name.js"(exports, module) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var hasOwn = require_has_own_property();
      var FunctionPrototype = Function.prototype;
      var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
      var EXISTS = hasOwn(FunctionPrototype, "name");
      var PROPER = EXISTS && function something() {
      }.name === "something";
      var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
      module.exports = {
        EXISTS,
        PROPER,
        CONFIGURABLE
      };
    }
  });

  // node_modules/core-js-pure/internals/array-includes.js
  var require_array_includes = __commonJS({
    "node_modules/core-js-pure/internals/array-includes.js"(exports, module) {
      "use strict";
      var toIndexedObject = require_to_indexed_object();
      var toAbsoluteIndex = require_to_absolute_index();
      var lengthOfArrayLike = require_length_of_array_like();
      var createMethod = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O2 = toIndexedObject($this);
          var length = lengthOfArrayLike(O2);
          if (length === 0) return !IS_INCLUDES && -1;
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          if (IS_INCLUDES && el !== el) while (length > index) {
            value = O2[index++];
            if (value !== value) return true;
          }
          else for (; length > index; index++) {
            if ((IS_INCLUDES || index in O2) && O2[index] === el) return IS_INCLUDES || index || 0;
          }
          return !IS_INCLUDES && -1;
        };
      };
      module.exports = {
        // `Array.prototype.includes` method
        // https://tc39.es/ecma262/#sec-array.prototype.includes
        includes: createMethod(true),
        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        indexOf: createMethod(false)
      };
    }
  });

  // node_modules/core-js-pure/internals/object-keys-internal.js
  var require_object_keys_internal = __commonJS({
    "node_modules/core-js-pure/internals/object-keys-internal.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var hasOwn = require_has_own_property();
      var toIndexedObject = require_to_indexed_object();
      var indexOf = require_array_includes().indexOf;
      var hiddenKeys = require_hidden_keys();
      var push = uncurryThis([].push);
      module.exports = function(object, names) {
        var O2 = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O2) !hasOwn(hiddenKeys, key) && hasOwn(O2, key) && push(result, key);
        while (names.length > i) if (hasOwn(O2, key = names[i++])) {
          ~indexOf(result, key) || push(result, key);
        }
        return result;
      };
    }
  });

  // node_modules/core-js-pure/internals/enum-bug-keys.js
  var require_enum_bug_keys = __commonJS({
    "node_modules/core-js-pure/internals/enum-bug-keys.js"(exports, module) {
      "use strict";
      module.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    }
  });

  // node_modules/core-js-pure/internals/object-keys.js
  var require_object_keys = __commonJS({
    "node_modules/core-js-pure/internals/object-keys.js"(exports, module) {
      "use strict";
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      module.exports = Object.keys || function keys(O2) {
        return internalObjectKeys(O2, enumBugKeys);
      };
    }
  });

  // node_modules/core-js-pure/internals/object-define-properties.js
  var require_object_define_properties = __commonJS({
    "node_modules/core-js-pure/internals/object-define-properties.js"(exports) {
      "use strict";
      var DESCRIPTORS = require_descriptors();
      var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
      var definePropertyModule = require_object_define_property();
      var anObject = require_an_object();
      var toIndexedObject = require_to_indexed_object();
      var objectKeys = require_object_keys();
      exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O2, Properties) {
        anObject(O2);
        var props = toIndexedObject(Properties);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index) definePropertyModule.f(O2, key = keys[index++], props[key]);
        return O2;
      };
    }
  });

  // node_modules/core-js-pure/internals/html.js
  var require_html = __commonJS({
    "node_modules/core-js-pure/internals/html.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      module.exports = getBuiltIn("document", "documentElement");
    }
  });

  // node_modules/core-js-pure/internals/object-create.js
  var require_object_create = __commonJS({
    "node_modules/core-js-pure/internals/object-create.js"(exports, module) {
      "use strict";
      var anObject = require_an_object();
      var definePropertiesModule = require_object_define_properties();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = require_hidden_keys();
      var html = require_html();
      var documentCreateElement = require_document_create_element();
      var sharedKey = require_shared_key();
      var GT = ">";
      var LT = "<";
      var PROTOTYPE = "prototype";
      var SCRIPT = "script";
      var IE_PROTO = sharedKey("IE_PROTO");
      var EmptyConstructor = function() {
      };
      var scriptTag = function(content) {
        return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
      };
      var NullProtoObjectViaActiveX = function(activeXDocument2) {
        activeXDocument2.write(scriptTag(""));
        activeXDocument2.close();
        var temp = activeXDocument2.parentWindow.Object;
        activeXDocument2 = null;
        return temp;
      };
      var NullProtoObjectViaIFrame = function() {
        var iframe = documentCreateElement("iframe");
        var JS = "java" + SCRIPT + ":";
        var iframeDocument;
        iframe.style.display = "none";
        html.appendChild(iframe);
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag("document.F=Object"));
        iframeDocument.close();
        return iframeDocument.F;
      };
      var activeXDocument;
      var NullProtoObject = function() {
        try {
          activeXDocument = new ActiveXObject("htmlfile");
        } catch (error) {
        }
        NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
        var length = enumBugKeys.length;
        while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        return NullProtoObject();
      };
      hiddenKeys[IE_PROTO] = true;
      module.exports = Object.create || function create(O2, Properties) {
        var result;
        if (O2 !== null) {
          EmptyConstructor[PROTOTYPE] = anObject(O2);
          result = new EmptyConstructor();
          EmptyConstructor[PROTOTYPE] = null;
          result[IE_PROTO] = O2;
        } else result = NullProtoObject();
        return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
      };
    }
  });

  // node_modules/core-js-pure/internals/correct-prototype-getter.js
  var require_correct_prototype_getter = __commonJS({
    "node_modules/core-js-pure/internals/correct-prototype-getter.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = !fails(function() {
        function F2() {
        }
        F2.prototype.constructor = null;
        return Object.getPrototypeOf(new F2()) !== F2.prototype;
      });
    }
  });

  // node_modules/core-js-pure/internals/object-get-prototype-of.js
  var require_object_get_prototype_of = __commonJS({
    "node_modules/core-js-pure/internals/object-get-prototype-of.js"(exports, module) {
      "use strict";
      var hasOwn = require_has_own_property();
      var isCallable = require_is_callable();
      var toObject = require_to_object();
      var sharedKey = require_shared_key();
      var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
      var IE_PROTO = sharedKey("IE_PROTO");
      var $Object = Object;
      var ObjectPrototype = $Object.prototype;
      module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O2) {
        var object = toObject(O2);
        if (hasOwn(object, IE_PROTO)) return object[IE_PROTO];
        var constructor = object.constructor;
        if (isCallable(constructor) && object instanceof constructor) {
          return constructor.prototype;
        }
        return object instanceof $Object ? ObjectPrototype : null;
      };
    }
  });

  // node_modules/core-js-pure/internals/define-built-in.js
  var require_define_built_in = __commonJS({
    "node_modules/core-js-pure/internals/define-built-in.js"(exports, module) {
      "use strict";
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      module.exports = function(target, key, value, options) {
        if (options && options.enumerable) target[key] = value;
        else createNonEnumerableProperty(target, key, value);
        return target;
      };
    }
  });

  // node_modules/core-js-pure/internals/iterators-core.js
  var require_iterators_core = __commonJS({
    "node_modules/core-js-pure/internals/iterators-core.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var create = require_object_create();
      var getPrototypeOf = require_object_get_prototype_of();
      var defineBuiltIn = require_define_built_in();
      var wellKnownSymbol = require_well_known_symbol();
      var IS_PURE = require_is_pure();
      var ITERATOR = wellKnownSymbol("iterator");
      var BUGGY_SAFARI_ITERATORS = false;
      var IteratorPrototype;
      var PrototypeOfArrayIteratorPrototype;
      var arrayIterator;
      if ([].keys) {
        arrayIterator = [].keys();
        if (!("next" in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
        else {
          PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
          if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
        }
      }
      var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function() {
        var test = {};
        return IteratorPrototype[ITERATOR].call(test) !== test;
      });
      if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};
      else if (IS_PURE) IteratorPrototype = create(IteratorPrototype);
      if (!isCallable(IteratorPrototype[ITERATOR])) {
        defineBuiltIn(IteratorPrototype, ITERATOR, function() {
          return this;
        });
      }
      module.exports = {
        IteratorPrototype,
        BUGGY_SAFARI_ITERATORS
      };
    }
  });

  // node_modules/core-js-pure/internals/object-to-string.js
  var require_object_to_string = __commonJS({
    "node_modules/core-js-pure/internals/object-to-string.js"(exports, module) {
      "use strict";
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var classof = require_classof();
      module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
        return "[object " + classof(this) + "]";
      };
    }
  });

  // node_modules/core-js-pure/internals/set-to-string-tag.js
  var require_set_to_string_tag = __commonJS({
    "node_modules/core-js-pure/internals/set-to-string-tag.js"(exports, module) {
      "use strict";
      var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
      var defineProperty = require_object_define_property().f;
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var hasOwn = require_has_own_property();
      var toString = require_object_to_string();
      var wellKnownSymbol = require_well_known_symbol();
      var TO_STRING_TAG = wellKnownSymbol("toStringTag");
      module.exports = function(it, TAG, STATIC, SET_METHOD) {
        var target = STATIC ? it : it && it.prototype;
        if (target) {
          if (!hasOwn(target, TO_STRING_TAG)) {
            defineProperty(target, TO_STRING_TAG, { configurable: true, value: TAG });
          }
          if (SET_METHOD && !TO_STRING_TAG_SUPPORT) {
            createNonEnumerableProperty(target, "toString", toString);
          }
        }
      };
    }
  });

  // node_modules/core-js-pure/internals/iterators.js
  var require_iterators = __commonJS({
    "node_modules/core-js-pure/internals/iterators.js"(exports, module) {
      "use strict";
      module.exports = Object.create ? /* @__PURE__ */ Object.create(null) : {};
    }
  });

  // node_modules/core-js-pure/internals/iterator-create-constructor.js
  var require_iterator_create_constructor = __commonJS({
    "node_modules/core-js-pure/internals/iterator-create-constructor.js"(exports, module) {
      "use strict";
      var IteratorPrototype = require_iterators_core().IteratorPrototype;
      var create = require_object_create();
      var createPropertyDescriptor = require_create_property_descriptor();
      var setToStringTag = require_set_to_string_tag();
      var Iterators = require_iterators();
      var returnThis = function() {
        return this;
      };
      module.exports = function(IteratorConstructor, NAME3, next, ENUMERABLE_NEXT) {
        var TO_STRING_TAG = NAME3 + " Iterator";
        IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
        setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
        Iterators[TO_STRING_TAG] = returnThis;
        return IteratorConstructor;
      };
    }
  });

  // node_modules/core-js-pure/internals/function-uncurry-this-accessor.js
  var require_function_uncurry_this_accessor = __commonJS({
    "node_modules/core-js-pure/internals/function-uncurry-this-accessor.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var aCallable = require_a_callable();
      module.exports = function(object, key, method) {
        try {
          return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
        } catch (error) {
        }
      };
    }
  });

  // node_modules/core-js-pure/internals/is-possible-prototype.js
  var require_is_possible_prototype = __commonJS({
    "node_modules/core-js-pure/internals/is-possible-prototype.js"(exports, module) {
      "use strict";
      var isObject = require_is_object();
      module.exports = function(argument) {
        return isObject(argument) || argument === null;
      };
    }
  });

  // node_modules/core-js-pure/internals/a-possible-prototype.js
  var require_a_possible_prototype = __commonJS({
    "node_modules/core-js-pure/internals/a-possible-prototype.js"(exports, module) {
      "use strict";
      var isPossiblePrototype = require_is_possible_prototype();
      var $String = String;
      var $TypeError = TypeError;
      module.exports = function(argument) {
        if (isPossiblePrototype(argument)) return argument;
        throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
      };
    }
  });

  // node_modules/core-js-pure/internals/object-set-prototype-of.js
  var require_object_set_prototype_of = __commonJS({
    "node_modules/core-js-pure/internals/object-set-prototype-of.js"(exports, module) {
      "use strict";
      var uncurryThisAccessor = require_function_uncurry_this_accessor();
      var isObject = require_is_object();
      var requireObjectCoercible = require_require_object_coercible();
      var aPossiblePrototype = require_a_possible_prototype();
      module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var CORRECT_SETTER = false;
        var test = {};
        var setter;
        try {
          setter = uncurryThisAccessor(Object.prototype, "__proto__", "set");
          setter(test, []);
          CORRECT_SETTER = test instanceof Array;
        } catch (error) {
        }
        return function setPrototypeOf(O2, proto) {
          requireObjectCoercible(O2);
          aPossiblePrototype(proto);
          if (!isObject(O2)) return O2;
          if (CORRECT_SETTER) setter(O2, proto);
          else O2.__proto__ = proto;
          return O2;
        };
      }() : void 0);
    }
  });

  // node_modules/core-js-pure/internals/iterator-define.js
  var require_iterator_define = __commonJS({
    "node_modules/core-js-pure/internals/iterator-define.js"(exports, module) {
      "use strict";
      var $2 = require_export();
      var call = require_function_call();
      var IS_PURE = require_is_pure();
      var FunctionName = require_function_name();
      var isCallable = require_is_callable();
      var createIteratorConstructor = require_iterator_create_constructor();
      var getPrototypeOf = require_object_get_prototype_of();
      var setPrototypeOf = require_object_set_prototype_of();
      var setToStringTag = require_set_to_string_tag();
      var createNonEnumerableProperty = require_create_non_enumerable_property();
      var defineBuiltIn = require_define_built_in();
      var wellKnownSymbol = require_well_known_symbol();
      var Iterators = require_iterators();
      var IteratorsCore = require_iterators_core();
      var PROPER_FUNCTION_NAME = FunctionName.PROPER;
      var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
      var IteratorPrototype = IteratorsCore.IteratorPrototype;
      var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
      var ITERATOR = wellKnownSymbol("iterator");
      var KEYS = "keys";
      var VALUES = "values";
      var ENTRIES = "entries";
      var returnThis = function() {
        return this;
      };
      module.exports = function(Iterable, NAME3, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
        createIteratorConstructor(IteratorConstructor, NAME3, next);
        var getIterationMethod = function(KIND) {
          if (KIND === DEFAULT && defaultIterator) return defaultIterator;
          if (!BUGGY_SAFARI_ITERATORS && KIND && KIND in IterablePrototype) return IterablePrototype[KIND];
          switch (KIND) {
            case KEYS:
              return function keys() {
                return new IteratorConstructor(this, KIND);
              };
            case VALUES:
              return function values() {
                return new IteratorConstructor(this, KIND);
              };
            case ENTRIES:
              return function entries() {
                return new IteratorConstructor(this, KIND);
              };
          }
          return function() {
            return new IteratorConstructor(this);
          };
        };
        var TO_STRING_TAG = NAME3 + " Iterator";
        var INCORRECT_VALUES_NAME = false;
        var IterablePrototype = Iterable.prototype;
        var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
        var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
        var anyNativeIterator = NAME3 === "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
        var CurrentIteratorPrototype, methods, KEY;
        if (anyNativeIterator) {
          CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
          if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
              if (setPrototypeOf) {
                setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
              } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
                defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
              }
            }
            setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
          }
        }
        if (PROPER_FUNCTION_NAME && DEFAULT === VALUES && nativeIterator && nativeIterator.name !== VALUES) {
          if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
            createNonEnumerableProperty(IterablePrototype, "name", VALUES);
          } else {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
              return call(nativeIterator, this);
            };
          }
        }
        if (DEFAULT) {
          methods = {
            values: getIterationMethod(VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
            entries: getIterationMethod(ENTRIES)
          };
          if (FORCED) for (KEY in methods) {
            if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
              defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
            }
          }
          else $2({ target: NAME3, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
        }
        if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
          defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
        }
        Iterators[NAME3] = defaultIterator;
        return methods;
      };
    }
  });

  // node_modules/core-js-pure/internals/create-iter-result-object.js
  var require_create_iter_result_object = __commonJS({
    "node_modules/core-js-pure/internals/create-iter-result-object.js"(exports, module) {
      "use strict";
      module.exports = function(value, done) {
        return { value, done };
      };
    }
  });

  // node_modules/core-js-pure/modules/es.string.iterator.js
  var require_es_string_iterator = __commonJS({
    "node_modules/core-js-pure/modules/es.string.iterator.js"() {
      "use strict";
      var charAt = require_string_multibyte().charAt;
      var toString = require_to_string();
      var InternalStateModule = require_internal_state();
      var defineIterator = require_iterator_define();
      var createIterResultObject = require_create_iter_result_object();
      var STRING_ITERATOR = "String Iterator";
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
      defineIterator(String, "String", function(iterated) {
        setInternalState(this, {
          type: STRING_ITERATOR,
          string: toString(iterated),
          index: 0
        });
      }, function next() {
        var state = getInternalState(this);
        var string = state.string;
        var index = state.index;
        var point;
        if (index >= string.length) return createIterResultObject(void 0, true);
        point = charAt(string, index);
        state.index += point.length;
        return createIterResultObject(point, false);
      });
    }
  });

  // node_modules/core-js-pure/internals/iterator-close.js
  var require_iterator_close = __commonJS({
    "node_modules/core-js-pure/internals/iterator-close.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var anObject = require_an_object();
      var getMethod = require_get_method();
      module.exports = function(iterator, kind, value) {
        var innerResult, innerError;
        anObject(iterator);
        try {
          innerResult = getMethod(iterator, "return");
          if (!innerResult) {
            if (kind === "throw") throw value;
            return value;
          }
          innerResult = call(innerResult, iterator);
        } catch (error) {
          innerError = true;
          innerResult = error;
        }
        if (kind === "throw") throw value;
        if (innerError) throw innerResult;
        anObject(innerResult);
        return value;
      };
    }
  });

  // node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js
  var require_call_with_safe_iteration_closing = __commonJS({
    "node_modules/core-js-pure/internals/call-with-safe-iteration-closing.js"(exports, module) {
      "use strict";
      var anObject = require_an_object();
      var iteratorClose = require_iterator_close();
      module.exports = function(iterator, fn, value, ENTRIES) {
        try {
          return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
      };
    }
  });

  // node_modules/core-js-pure/internals/is-array-iterator-method.js
  var require_is_array_iterator_method = __commonJS({
    "node_modules/core-js-pure/internals/is-array-iterator-method.js"(exports, module) {
      "use strict";
      var wellKnownSymbol = require_well_known_symbol();
      var Iterators = require_iterators();
      var ITERATOR = wellKnownSymbol("iterator");
      var ArrayPrototype = Array.prototype;
      module.exports = function(it) {
        return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
      };
    }
  });

  // node_modules/core-js-pure/internals/get-internal-iterator.js
  var require_get_internal_iterator = __commonJS({
    "node_modules/core-js-pure/internals/get-internal-iterator.js"(exports, module) {
      "use strict";
      var classof = require_classof();
      var hasOwn = require_has_own_property();
      var Iterators = require_iterators();
      module.exports = function(it) {
        var klass = classof(it);
        if (klass === "Arguments") klass = "Array";
        return hasOwn(Iterators, klass) ? Iterators[klass] : void 0;
      };
    }
  });

  // node_modules/core-js-pure/internals/get-iterator-method-internal.js
  var require_get_iterator_method_internal = __commonJS({
    "node_modules/core-js-pure/internals/get-iterator-method-internal.js"(exports, module) {
      "use strict";
      var getMethod = require_get_method();
      var isNullOrUndefined = require_is_null_or_undefined();
      var getInternalIterator = require_get_internal_iterator();
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      module.exports = function(it) {
        if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || getInternalIterator(it);
      };
    }
  });

  // node_modules/core-js-pure/internals/get-iterator-internal.js
  var require_get_iterator_internal = __commonJS({
    "node_modules/core-js-pure/internals/get-iterator-internal.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var isCallable = require_is_callable();
      var anObject = require_an_object();
      var tryToString = require_try_to_string();
      var getIteratorMethod = require_get_iterator_method_internal();
      var $TypeError = TypeError;
      module.exports = function(argument, usingIterator) {
        var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
        if (isCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
        throw new $TypeError(tryToString(argument) + " is not iterable");
      };
    }
  });

  // node_modules/core-js-pure/internals/does-not-exceed-safe-integer.js
  var require_does_not_exceed_safe_integer = __commonJS({
    "node_modules/core-js-pure/internals/does-not-exceed-safe-integer.js"(exports, module) {
      "use strict";
      var $TypeError = TypeError;
      var MAX_SAFE_INTEGER = 9007199254740991;
      module.exports = function(it) {
        if (it > MAX_SAFE_INTEGER) throw new $TypeError("Maximum allowed index exceeded");
        return it;
      };
    }
  });

  // node_modules/core-js-pure/internals/array-from.js
  var require_array_from = __commonJS({
    "node_modules/core-js-pure/internals/array-from.js"(exports, module) {
      "use strict";
      var bind = require_function_bind_context();
      var call = require_function_call();
      var toObject = require_to_object();
      var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
      var isArrayIteratorMethod = require_is_array_iterator_method();
      var isConstructor = require_is_constructor();
      var lengthOfArrayLike = require_length_of_array_like();
      var createProperty = require_create_property();
      var setArrayLength = require_array_set_length();
      var getIterator = require_get_iterator_internal();
      var getIteratorMethod = require_get_iterator_method_internal();
      var iteratorClose = require_iterator_close();
      var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
      var $Array = Array;
      module.exports = function from(arrayLike) {
        var IS_CONSTRUCTOR = isConstructor(this);
        var argumentsLength = arguments.length;
        var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
        var mapping = mapfn !== void 0;
        if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
        var O2 = toObject(arrayLike);
        var iteratorMethod = getIteratorMethod(O2);
        var index = 0;
        var length, result, step, iterator, next, value;
        if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
          result = IS_CONSTRUCTOR ? new this() : [];
          iterator = getIterator(O2, iteratorMethod);
          next = iterator.next;
          for (; !(step = call(next, iterator)).done; index++) {
            try {
              doesNotExceedSafeInteger(index);
            } catch (error) {
              iteratorClose(iterator, "throw", error);
            }
            value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
            try {
              createProperty(result, index, value);
            } catch (error) {
              iteratorClose(iterator, "throw", error);
            }
          }
        } else {
          length = lengthOfArrayLike(O2);
          result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
          for (; length > index; index++) {
            value = mapping ? mapfn(O2[index], index) : O2[index];
            createProperty(result, index, value);
          }
        }
        setArrayLength(result, index);
        return result;
      };
    }
  });

  // node_modules/core-js-pure/internals/check-correctness-of-iteration.js
  var require_check_correctness_of_iteration = __commonJS({
    "node_modules/core-js-pure/internals/check-correctness-of-iteration.js"(exports, module) {
      "use strict";
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      var SAFE_CLOSING = false;
      try {
        called = 0;
        iteratorWithReturn = {
          next: function() {
            return { done: !!called++ };
          },
          "return": function() {
            SAFE_CLOSING = true;
          }
        };
        iteratorWithReturn[ITERATOR] = function() {
          return this;
        };
        Array.from(iteratorWithReturn, function() {
          throw 2;
        });
      } catch (error) {
      }
      var called;
      var iteratorWithReturn;
      module.exports = function(exec, SKIP_CLOSING) {
        try {
          if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
        } catch (error) {
          return false;
        }
        var ITERATION_SUPPORT = false;
        try {
          var object = {};
          object[ITERATOR] = function() {
            return {
              next: function() {
                return { done: ITERATION_SUPPORT = true };
              }
            };
          };
          exec(object);
        } catch (error) {
        }
        return ITERATION_SUPPORT;
      };
    }
  });

  // node_modules/core-js-pure/modules/es.array.from.js
  var require_es_array_from = __commonJS({
    "node_modules/core-js-pure/modules/es.array.from.js"() {
      "use strict";
      var $2 = require_export();
      var from = require_array_from();
      var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
      var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
        Array.from(iterable);
      });
      $2({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
        from
      });
    }
  });

  // node_modules/core-js-pure/es/array/from.js
  var require_from = __commonJS({
    "node_modules/core-js-pure/es/array/from.js"(exports, module) {
      "use strict";
      require_es_string_iterator();
      require_es_array_from();
      var path = require_path();
      module.exports = path.Array.from;
    }
  });

  // node_modules/core-js-pure/stable/array/from.js
  var require_from2 = __commonJS({
    "node_modules/core-js-pure/stable/array/from.js"(exports, module) {
      "use strict";
      var parent = require_from();
      module.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js
  var require_from3 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/array/from.js"(exports, module) {
      "use strict";
      module.exports = require_from2();
    }
  });

  // node_modules/core-js-pure/internals/array-species-constructor.js
  var require_array_species_constructor = __commonJS({
    "node_modules/core-js-pure/internals/array-species-constructor.js"(exports, module) {
      "use strict";
      var isArray = require_is_array();
      var isConstructor = require_is_constructor();
      var isObject = require_is_object();
      var wellKnownSymbol = require_well_known_symbol();
      var SPECIES = wellKnownSymbol("species");
      var $Array = Array;
      module.exports = function(originalArray) {
        var C2;
        if (isArray(originalArray)) {
          C2 = originalArray.constructor;
          if (isConstructor(C2) && (C2 === $Array || isArray(C2.prototype))) C2 = void 0;
          else if (isObject(C2)) {
            C2 = C2[SPECIES];
            if (C2 === null) C2 = void 0;
          }
        }
        return C2 === void 0 ? $Array : C2;
      };
    }
  });

  // node_modules/core-js-pure/internals/array-species-create.js
  var require_array_species_create = __commonJS({
    "node_modules/core-js-pure/internals/array-species-create.js"(exports, module) {
      "use strict";
      var arraySpeciesConstructor = require_array_species_constructor();
      module.exports = function(originalArray, length) {
        return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
      };
    }
  });

  // node_modules/core-js-pure/modules/es.array.concat.js
  var require_es_array_concat = __commonJS({
    "node_modules/core-js-pure/modules/es.array.concat.js"() {
      "use strict";
      var $2 = require_export();
      var fails = require_fails();
      var isArray = require_is_array();
      var isObject = require_is_object();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
      var createProperty = require_create_property();
      var setArrayLength = require_array_set_length();
      var arraySpeciesCreate = require_array_species_create();
      var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
      var wellKnownSymbol = require_well_known_symbol();
      var V8_VERSION = require_environment_v8_version();
      var IS_CONCAT_SPREADABLE = wellKnownSymbol("isConcatSpreadable");
      var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function() {
        var array = [];
        array[IS_CONCAT_SPREADABLE] = false;
        return array.concat()[0] !== array;
      });
      var isConcatSpreadable = function(O2) {
        if (!isObject(O2)) return false;
        var spreadable = O2[IS_CONCAT_SPREADABLE];
        return spreadable !== void 0 ? !!spreadable : isArray(O2);
      };
      var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport("concat");
      $2({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        concat: function concat(arg) {
          var O2 = toObject(this);
          var A = arraySpeciesCreate(O2, 0);
          var n = 0;
          var i, k, length, len, E;
          for (i = -1, length = arguments.length; i < length; i++) {
            E = i === -1 ? O2 : arguments[i];
            if (isConcatSpreadable(E)) {
              len = lengthOfArrayLike(E);
              doesNotExceedSafeInteger(n + len);
              for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
            } else {
              doesNotExceedSafeInteger(n + 1);
              createProperty(A, n++, E);
            }
          }
          setArrayLength(A, n);
          return A;
        }
      });
    }
  });

  // node_modules/core-js-pure/modules/es.object.to-string.js
  var require_es_object_to_string = __commonJS({
    "node_modules/core-js-pure/modules/es.object.to-string.js"() {
      "use strict";
    }
  });

  // node_modules/core-js-pure/internals/object-get-own-property-names.js
  var require_object_get_own_property_names = __commonJS({
    "node_modules/core-js-pure/internals/object-get-own-property-names.js"(exports) {
      "use strict";
      var internalObjectKeys = require_object_keys_internal();
      var enumBugKeys = require_enum_bug_keys();
      var hiddenKeys = enumBugKeys.concat("length", "prototype");
      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O2) {
        return internalObjectKeys(O2, hiddenKeys);
      };
    }
  });

  // node_modules/core-js-pure/internals/object-get-own-property-names-external.js
  var require_object_get_own_property_names_external = __commonJS({
    "node_modules/core-js-pure/internals/object-get-own-property-names-external.js"(exports, module) {
      "use strict";
      var classof = require_classof_raw();
      var toIndexedObject = require_to_indexed_object();
      var $getOwnPropertyNames = require_object_get_own_property_names().f;
      var arraySlice = require_array_slice();
      var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      var getWindowNames = function(it) {
        try {
          return $getOwnPropertyNames(it);
        } catch (error) {
          return arraySlice(windowNames);
        }
      };
      module.exports.f = function getOwnPropertyNames(it) {
        return windowNames && classof(it) === "Window" ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
      };
    }
  });

  // node_modules/core-js-pure/internals/object-get-own-property-symbols.js
  var require_object_get_own_property_symbols = __commonJS({
    "node_modules/core-js-pure/internals/object-get-own-property-symbols.js"(exports) {
      "use strict";
      exports.f = Object.getOwnPropertySymbols;
    }
  });

  // node_modules/core-js-pure/internals/define-built-in-accessor.js
  var require_define_built_in_accessor = __commonJS({
    "node_modules/core-js-pure/internals/define-built-in-accessor.js"(exports, module) {
      "use strict";
      var defineProperty = require_object_define_property();
      module.exports = function(target, name, descriptor) {
        return defineProperty.f(target, name, descriptor);
      };
    }
  });

  // node_modules/core-js-pure/internals/well-known-symbol-wrapped.js
  var require_well_known_symbol_wrapped = __commonJS({
    "node_modules/core-js-pure/internals/well-known-symbol-wrapped.js"(exports) {
      "use strict";
      var wellKnownSymbol = require_well_known_symbol();
      exports.f = wellKnownSymbol;
    }
  });

  // node_modules/core-js-pure/internals/well-known-symbol-define.js
  var require_well_known_symbol_define = __commonJS({
    "node_modules/core-js-pure/internals/well-known-symbol-define.js"(exports, module) {
      "use strict";
      var path = require_path();
      var hasOwn = require_has_own_property();
      var wrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
      var defineProperty = require_object_define_property().f;
      module.exports = function(NAME3) {
        var Symbol2 = path.Symbol || (path.Symbol = {});
        if (!hasOwn(Symbol2, NAME3)) defineProperty(Symbol2, NAME3, {
          value: wrappedWellKnownSymbolModule.f(NAME3)
        });
      };
    }
  });

  // node_modules/core-js-pure/internals/symbol-define-to-primitive.js
  var require_symbol_define_to_primitive = __commonJS({
    "node_modules/core-js-pure/internals/symbol-define-to-primitive.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var getBuiltIn = require_get_built_in();
      var wellKnownSymbol = require_well_known_symbol();
      var defineBuiltIn = require_define_built_in();
      module.exports = function() {
        var Symbol2 = getBuiltIn("Symbol");
        var SymbolPrototype = Symbol2 && Symbol2.prototype;
        var valueOf = SymbolPrototype && SymbolPrototype.valueOf;
        var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
        if (SymbolPrototype && !SymbolPrototype[TO_PRIMITIVE]) {
          defineBuiltIn(SymbolPrototype, TO_PRIMITIVE, function(hint) {
            return call(valueOf, this);
          }, { arity: 1 });
        }
      };
    }
  });

  // node_modules/core-js-pure/internals/array-iteration.js
  var require_array_iteration = __commonJS({
    "node_modules/core-js-pure/internals/array-iteration.js"(exports, module) {
      "use strict";
      var bind = require_function_bind_context();
      var IndexedObject = require_indexed_object();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var arraySpeciesCreate = require_array_species_create();
      var createProperty = require_create_property();
      var createMethod = function(TYPE) {
        var IS_MAP = TYPE === 1;
        var IS_FILTER = TYPE === 2;
        var IS_SOME = TYPE === 3;
        var IS_EVERY = TYPE === 4;
        var IS_FIND_INDEX = TYPE === 6;
        var IS_FILTER_REJECT = TYPE === 7;
        var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
        return function($this, callbackfn, that) {
          var O2 = toObject($this);
          var self2 = IndexedObject(O2);
          var length = lengthOfArrayLike(self2);
          var boundFunction = bind(callbackfn, that);
          var index = 0;
          var resIndex = 0;
          var target = IS_MAP ? arraySpeciesCreate($this, length) : IS_FILTER || IS_FILTER_REJECT ? arraySpeciesCreate($this, 0) : void 0;
          var value, result;
          for (; length > index; index++) if (NO_HOLES || index in self2) {
            value = self2[index];
            result = boundFunction(value, index, O2);
            if (TYPE) {
              if (IS_MAP) createProperty(target, index, result);
              else if (result) switch (TYPE) {
                case 3:
                  return true;
                case 5:
                  return value;
                case 6:
                  return index;
                case 2:
                  createProperty(target, resIndex++, value);
              }
              else switch (TYPE) {
                case 4:
                  return false;
                case 7:
                  createProperty(target, resIndex++, value);
              }
            }
          }
          return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
        };
      };
      module.exports = {
        // `Array.prototype.forEach` method
        // https://tc39.es/ecma262/#sec-array.prototype.foreach
        forEach: createMethod(0),
        // `Array.prototype.map` method
        // https://tc39.es/ecma262/#sec-array.prototype.map
        map: createMethod(1),
        // `Array.prototype.filter` method
        // https://tc39.es/ecma262/#sec-array.prototype.filter
        filter: createMethod(2),
        // `Array.prototype.some` method
        // https://tc39.es/ecma262/#sec-array.prototype.some
        some: createMethod(3),
        // `Array.prototype.every` method
        // https://tc39.es/ecma262/#sec-array.prototype.every
        every: createMethod(4),
        // `Array.prototype.find` method
        // https://tc39.es/ecma262/#sec-array.prototype.find
        find: createMethod(5),
        // `Array.prototype.findIndex` method
        // https://tc39.es/ecma262/#sec-array.prototype.findIndex
        findIndex: createMethod(6),
        // `Array.prototype.filterReject` method
        // https://github.com/tc39/proposal-array-filtering
        filterReject: createMethod(7)
      };
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.constructor.js
  var require_es_symbol_constructor = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.constructor.js"() {
      "use strict";
      var $2 = require_export();
      var globalThis2 = require_global_this();
      var call = require_function_call();
      var uncurryThis = require_function_uncurry_this();
      var IS_PURE = require_is_pure();
      var DESCRIPTORS = require_descriptors();
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      var fails = require_fails();
      var hasOwn = require_has_own_property();
      var isPrototypeOf = require_object_is_prototype_of();
      var anObject = require_an_object();
      var toIndexedObject = require_to_indexed_object();
      var toPropertyKey = require_to_property_key();
      var $toString = require_to_string();
      var createPropertyDescriptor = require_create_property_descriptor();
      var nativeObjectCreate = require_object_create();
      var objectKeys = require_object_keys();
      var getOwnPropertyNamesModule = require_object_get_own_property_names();
      var getOwnPropertyNamesExternal = require_object_get_own_property_names_external();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
      var definePropertyModule = require_object_define_property();
      var definePropertiesModule = require_object_define_properties();
      var propertyIsEnumerableModule = require_object_property_is_enumerable();
      var defineBuiltIn = require_define_built_in();
      var defineBuiltInAccessor = require_define_built_in_accessor();
      var shared = require_shared();
      var sharedKey = require_shared_key();
      var hiddenKeys = require_hidden_keys();
      var uid = require_uid();
      var wellKnownSymbol = require_well_known_symbol();
      var wrappedWellKnownSymbolModule = require_well_known_symbol_wrapped();
      var defineWellKnownSymbol = require_well_known_symbol_define();
      var defineSymbolToPrimitive = require_symbol_define_to_primitive();
      var setToStringTag = require_set_to_string_tag();
      var InternalStateModule = require_internal_state();
      var $forEach = require_array_iteration().forEach;
      var HIDDEN = sharedKey("hidden");
      var SYMBOL = "Symbol";
      var PROTOTYPE = "prototype";
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(SYMBOL);
      var ObjectPrototype = Object[PROTOTYPE];
      var $Symbol = globalThis2.Symbol;
      var SymbolPrototype = $Symbol && $Symbol[PROTOTYPE];
      var RangeError2 = globalThis2.RangeError;
      var TypeError2 = globalThis2.TypeError;
      var QObject = globalThis2.QObject;
      var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      var nativeDefineProperty = definePropertyModule.f;
      var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
      var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
      var push = uncurryThis([].push);
      var AllSymbols = shared("symbols");
      var ObjectPrototypeSymbols = shared("op-symbols");
      var WellKnownSymbolsStore = shared("wks");
      var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
      var fallbackDefineProperty = function(O2, P2, Attributes) {
        var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P2);
        if (ObjectPrototypeDescriptor) delete ObjectPrototype[P2];
        nativeDefineProperty(O2, P2, Attributes);
        if (ObjectPrototypeDescriptor && O2 !== ObjectPrototype) {
          nativeDefineProperty(ObjectPrototype, P2, ObjectPrototypeDescriptor);
        }
        return O2;
      };
      var setSymbolDescriptor = DESCRIPTORS && fails(function() {
        return nativeObjectCreate(nativeDefineProperty({}, "a", {
          get: function() {
            return nativeDefineProperty(this, "a", { value: 7 }).a;
          }
        })).a !== 7;
      }) ? fallbackDefineProperty : nativeDefineProperty;
      var wrap = function(tag, description) {
        var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype);
        setInternalState(symbol, {
          type: SYMBOL,
          tag,
          description
        });
        if (!DESCRIPTORS) symbol.description = description;
        return symbol;
      };
      var $defineProperty = function defineProperty(O2, P2, Attributes) {
        if (O2 === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P2, Attributes);
        anObject(O2);
        var key = toPropertyKey(P2);
        anObject(Attributes);
        if (hasOwn(AllSymbols, key)) {
          if (!("enumerable" in Attributes) ? !hasOwn(O2, key) || hasOwn(O2, HIDDEN) && O2[HIDDEN][key] : !Attributes.enumerable) {
            if (!hasOwn(O2, HIDDEN)) nativeDefineProperty(O2, HIDDEN, createPropertyDescriptor(1, nativeObjectCreate(null)));
            O2[HIDDEN][key] = true;
          } else {
            if (hasOwn(O2, HIDDEN) && O2[HIDDEN][key]) O2[HIDDEN][key] = false;
            Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
          }
          return setSymbolDescriptor(O2, key, Attributes);
        }
        return nativeDefineProperty(O2, key, Attributes);
      };
      var $defineProperties = function defineProperties(O2, Properties) {
        anObject(O2);
        var properties = toIndexedObject(Properties);
        var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
        $forEach(keys, function(key) {
          if (!DESCRIPTORS || call($propertyIsEnumerable, properties, key)) $defineProperty(O2, key, properties[key]);
        });
        return O2;
      };
      var $create = function create(O2, Properties) {
        return Properties === void 0 ? nativeObjectCreate(O2) : $defineProperties(nativeObjectCreate(O2), Properties);
      };
      var $propertyIsEnumerable = function propertyIsEnumerable(V2) {
        var P2 = toPropertyKey(V2);
        var enumerable = call(nativePropertyIsEnumerable, this, P2);
        if (this === ObjectPrototype && hasOwn(AllSymbols, P2) && !hasOwn(ObjectPrototypeSymbols, P2)) return false;
        return enumerable || !hasOwn(this, P2) || !hasOwn(AllSymbols, P2) || hasOwn(this, HIDDEN) && this[HIDDEN][P2] ? enumerable : true;
      };
      var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O2, P2) {
        var it = toIndexedObject(O2);
        var key = toPropertyKey(P2);
        if (it === ObjectPrototype && hasOwn(AllSymbols, key) && !hasOwn(ObjectPrototypeSymbols, key)) return;
        var descriptor = nativeGetOwnPropertyDescriptor(it, key);
        if (descriptor && hasOwn(AllSymbols, key) && !(hasOwn(it, HIDDEN) && it[HIDDEN][key])) {
          descriptor.enumerable = true;
        }
        return descriptor;
      };
      var $getOwnPropertyNames = function getOwnPropertyNames(O2) {
        var names = nativeGetOwnPropertyNames(toIndexedObject(O2));
        var result = [];
        $forEach(names, function(key) {
          if (!hasOwn(AllSymbols, key) && !hasOwn(hiddenKeys, key)) push(result, key);
        });
        return result;
      };
      var $getOwnPropertySymbols = function(O2) {
        var IS_OBJECT_PROTOTYPE = O2 === ObjectPrototype;
        var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O2));
        var result = [];
        $forEach(names, function(key) {
          if (hasOwn(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn(ObjectPrototype, key))) {
            push(result, AllSymbols[key]);
          }
        });
        return result;
      };
      if (!NATIVE_SYMBOL) {
        $Symbol = function Symbol2() {
          if (isPrototypeOf(SymbolPrototype, this)) throw new TypeError2("Symbol is not a constructor");
          var description = !arguments.length || arguments[0] === void 0 ? void 0 : $toString(arguments[0]);
          var tag = uid(description);
          var setter = function(value) {
            var $this = this === void 0 ? globalThis2 : this;
            if ($this === ObjectPrototype) call(setter, ObjectPrototypeSymbols, value);
            if (hasOwn($this, HIDDEN) && hasOwn($this[HIDDEN], tag)) $this[HIDDEN][tag] = false;
            var descriptor = createPropertyDescriptor(1, value);
            try {
              setSymbolDescriptor($this, tag, descriptor);
            } catch (error) {
              if (!(error instanceof RangeError2)) throw error;
              fallbackDefineProperty($this, tag, descriptor);
            }
          };
          if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
          return wrap(tag, description);
        };
        SymbolPrototype = $Symbol[PROTOTYPE];
        defineBuiltIn(SymbolPrototype, "toString", function toString() {
          return getInternalState(this).tag;
        });
        defineBuiltIn($Symbol, "withoutSetter", function(description) {
          return wrap(uid(description), description);
        });
        propertyIsEnumerableModule.f = $propertyIsEnumerable;
        definePropertyModule.f = $defineProperty;
        definePropertiesModule.f = $defineProperties;
        getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
        getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
        getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;
        wrappedWellKnownSymbolModule.f = function(name) {
          return wrap(wellKnownSymbol(name), name);
        };
        if (DESCRIPTORS) {
          defineBuiltInAccessor(SymbolPrototype, "description", {
            configurable: true,
            get: function description() {
              return getInternalState(this).description;
            }
          });
          if (!IS_PURE) {
            defineBuiltIn(ObjectPrototype, "propertyIsEnumerable", $propertyIsEnumerable, { unsafe: true });
          }
        }
      }
      $2({ global: true, constructor: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
        Symbol: $Symbol
      });
      $forEach(objectKeys(WellKnownSymbolsStore), function(name) {
        defineWellKnownSymbol(name);
      });
      $2({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
        useSetter: function() {
          USE_SETTER = true;
        },
        useSimple: function() {
          USE_SETTER = false;
        }
      });
      $2({ target: "Object", stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
        // `Object.create` method
        // https://tc39.es/ecma262/#sec-object.create
        create: $create,
        // `Object.defineProperty` method
        // https://tc39.es/ecma262/#sec-object.defineproperty
        defineProperty: $defineProperty,
        // `Object.defineProperties` method
        // https://tc39.es/ecma262/#sec-object.defineproperties
        defineProperties: $defineProperties,
        // `Object.getOwnPropertyDescriptor` method
        // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor
      });
      $2({ target: "Object", stat: true, forced: !NATIVE_SYMBOL }, {
        // `Object.getOwnPropertyNames` method
        // https://tc39.es/ecma262/#sec-object.getownpropertynames
        getOwnPropertyNames: $getOwnPropertyNames
      });
      defineSymbolToPrimitive();
      setToStringTag($Symbol, SYMBOL);
      hiddenKeys[HIDDEN] = true;
    }
  });

  // node_modules/core-js-pure/internals/symbol-registry-detection.js
  var require_symbol_registry_detection = __commonJS({
    "node_modules/core-js-pure/internals/symbol-registry-detection.js"(exports, module) {
      "use strict";
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      module.exports = NATIVE_SYMBOL && !!Symbol["for"] && !!Symbol.keyFor;
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.for.js
  var require_es_symbol_for = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.for.js"() {
      "use strict";
      var $2 = require_export();
      var getBuiltIn = require_get_built_in();
      var hasOwn = require_has_own_property();
      var toString = require_to_string();
      var shared = require_shared();
      var NATIVE_SYMBOL_REGISTRY = require_symbol_registry_detection();
      var StringToSymbolRegistry = shared("string-to-symbol-registry");
      var SymbolToStringRegistry = shared("symbol-to-string-registry");
      $2({ target: "Symbol", stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
        "for": function(key) {
          var string = toString(key);
          if (hasOwn(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
          var symbol = getBuiltIn("Symbol")(string);
          StringToSymbolRegistry[string] = symbol;
          SymbolToStringRegistry[symbol] = string;
          return symbol;
        }
      });
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.key-for.js
  var require_es_symbol_key_for = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.key-for.js"() {
      "use strict";
      var $2 = require_export();
      var hasOwn = require_has_own_property();
      var isSymbol = require_is_symbol();
      var tryToString = require_try_to_string();
      var shared = require_shared();
      var NATIVE_SYMBOL_REGISTRY = require_symbol_registry_detection();
      var SymbolToStringRegistry = shared("symbol-to-string-registry");
      $2({ target: "Symbol", stat: true, forced: !NATIVE_SYMBOL_REGISTRY }, {
        keyFor: function keyFor(sym) {
          if (!isSymbol(sym)) throw new TypeError(tryToString(sym) + " is not a symbol");
          if (hasOwn(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
        }
      });
    }
  });

  // node_modules/core-js-pure/internals/is-raw-json.js
  var require_is_raw_json = __commonJS({
    "node_modules/core-js-pure/internals/is-raw-json.js"(exports, module) {
      "use strict";
      var isObject = require_is_object();
      var getInternalState = require_internal_state().get;
      module.exports = function isRawJSON(O2) {
        if (!isObject(O2)) return false;
        var state = getInternalState(O2);
        return !!state && state.type === "RawJSON";
      };
    }
  });

  // node_modules/core-js-pure/internals/this-number-value.js
  var require_this_number_value = __commonJS({
    "node_modules/core-js-pure/internals/this-number-value.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      module.exports = uncurryThis(1.1.valueOf);
    }
  });

  // node_modules/core-js-pure/internals/parse-json-string.js
  var require_parse_json_string = __commonJS({
    "node_modules/core-js-pure/internals/parse-json-string.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var hasOwn = require_has_own_property();
      var $SyntaxError = SyntaxError;
      var $parseInt = parseInt;
      var fromCharCode = String.fromCharCode;
      var at2 = uncurryThis("".charAt);
      var slice = uncurryThis("".slice);
      var exec = uncurryThis(/./.exec);
      var codePoints = {
        '\\"': '"',
        "\\\\": "\\",
        "\\/": "/",
        "\\b": "\b",
        "\\f": "\f",
        "\\n": "\n",
        "\\r": "\r",
        "\\t": "	"
      };
      var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
      var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;
      module.exports = function(source, i) {
        var unterminated = true;
        var value = "";
        while (i < source.length) {
          var chr = at2(source, i);
          if (chr === "\\") {
            var twoChars = slice(source, i, i + 2);
            if (hasOwn(codePoints, twoChars)) {
              value += codePoints[twoChars];
              i += 2;
            } else if (twoChars === "\\u") {
              i += 2;
              var fourHexDigits = slice(source, i, i + 4);
              if (!exec(IS_4_HEX_DIGITS, fourHexDigits)) throw new $SyntaxError("Bad Unicode escape at: " + i);
              value += fromCharCode($parseInt(fourHexDigits, 16));
              i += 4;
            } else throw new $SyntaxError('Unknown escape sequence: "' + twoChars + '"');
          } else if (chr === '"') {
            unterminated = false;
            i++;
            break;
          } else {
            if (exec(IS_C0_CONTROL_CODE, chr)) throw new $SyntaxError("Bad control character in string literal at: " + i);
            value += chr;
            i++;
          }
        }
        if (unterminated) throw new $SyntaxError("Unterminated string at: " + i);
        return { value, end: i };
      };
    }
  });

  // node_modules/core-js-pure/internals/native-raw-json.js
  var require_native_raw_json = __commonJS({
    "node_modules/core-js-pure/internals/native-raw-json.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = !fails(function() {
        var unsafeInt = "9007199254740993";
        var raw = JSON.rawJSON(unsafeInt);
        return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt;
      });
    }
  });

  // node_modules/core-js-pure/modules/es.json.stringify.js
  var require_es_json_stringify = __commonJS({
    "node_modules/core-js-pure/modules/es.json.stringify.js"() {
      "use strict";
      var $2 = require_export();
      var getBuiltIn = require_get_built_in();
      var call = require_function_call();
      var uncurryThis = require_function_uncurry_this();
      var fails = require_fails();
      var isArray = require_is_array();
      var isCallable = require_is_callable();
      var isObject = require_is_object();
      var create = require_object_create();
      var isRawJSON = require_is_raw_json();
      var isSymbol = require_is_symbol();
      var classof = require_classof_raw();
      var thisNumberValue = require_this_number_value();
      var includes = require_array_includes().includes;
      var hasOwn = require_has_own_property();
      var toString = require_to_string();
      var parseJSONString = require_parse_json_string();
      var uid = require_uid();
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      var NATIVE_RAW_JSON = require_native_raw_json();
      var $String = String;
      var $TypeError = TypeError;
      var $stringify = getBuiltIn("JSON", "stringify");
      var $BigInt = getBuiltIn("BigInt");
      var stringValueOf = uncurryThis("".valueOf);
      var booleanValueOf = uncurryThis(true.valueOf);
      var bigIntValueOf = $BigInt && uncurryThis($BigInt.prototype.valueOf);
      var exec = uncurryThis(/./.exec);
      var charAt = uncurryThis("".charAt);
      var charCodeAt = uncurryThis("".charCodeAt);
      var replace = uncurryThis("".replace);
      var slice = uncurryThis("".slice);
      var push = uncurryThis([].push);
      var pop = uncurryThis([].pop);
      var numberToString = uncurryThis(1.1.toString);
      var surrogates = /[\uD800-\uDFFF]/g;
      var leadingSurrogates = /^[\uD800-\uDBFF]$/;
      var trailingSurrogates = /^[\uDC00-\uDFFF]$/;
      var digits = /^\d+$/;
      var RAW_MARK = uid();
      var KEY_MARK = uid();
      var END_MARK = uid();
      var RAW_MARK_LENGTH = RAW_MARK.length;
      var KEY_MARK_LENGTH = KEY_MARK.length;
      var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function() {
        var symbol = getBuiltIn("Symbol")("stringify detection");
        return $stringify([symbol]) !== "[null]" || $stringify({ a: symbol }) !== "{}" || $stringify(Object(symbol)) !== "{}";
      });
      var ILL_FORMED_UNICODE = fails(function() {
        return $stringify("\uDF06\uD834") !== '"\\udf06\\ud834"' || $stringify("\uDEAD") !== '"\\udead"';
      });
      var isRawJSONValue = NATIVE_RAW_JSON ? getBuiltIn("JSON", "isRawJSON") : isRawJSON;
      var stringifyWithProperSymbolsConversion = WRONG_SYMBOLS_CONVERSION ? function(it, replacer, space) {
        return $stringify(it, function(key, value) {
          var replaced = call(replacer, this, key, value);
          if (!isSymbol(replaced)) return replaced;
        }, space);
      } : $stringify;
      var fixIllFormedJSON = function(match, offset, string) {
        var prev = charAt(string, offset - 1);
        var next = charAt(string, offset + 1);
        if (exec(leadingSurrogates, match) && !exec(trailingSurrogates, next) || exec(trailingSurrogates, match) && !exec(leadingSurrogates, prev)) {
          return "\\u" + numberToString(charCodeAt(match, 0), 16);
        }
        return match;
      };
      var getPropertyList = function(replacer) {
        if (!isArray(replacer)) return;
        var rawLength = replacer.length;
        var propertyList = [];
        var addedKeys = create(null);
        for (var i = 0; i < rawLength; i++) {
          var element = replacer[i];
          var key;
          if (typeof element == "string") key = element;
          else if (typeof element == "number" || classof(element) === "Number" || classof(element) === "String") key = toString(element);
          else continue;
          if (!hasOwn(addedKeys, key)) {
            addedKeys[key] = true;
            push(propertyList, key);
          }
        }
        return propertyList;
      };
      var hasInternalSlot = function(valueOf, it) {
        try {
          valueOf(it);
          return true;
        } catch (error) {
          return false;
        }
      };
      var isBoxedPrimitive = function(it) {
        var kind = classof(it);
        return kind === "Number" && hasInternalSlot(thisNumberValue, it) || kind === "String" && hasInternalSlot(stringValueOf, it) || kind === "Boolean" && hasInternalSlot(booleanValueOf, it) || !!bigIntValueOf && kind === "BigInt" && hasInternalSlot(bigIntValueOf, it);
      };
      var isSerializedAsObject = function(it) {
        if (!isObject(it) || isCallable(it) || isArray(it)) return false;
        try {
          return !isBoxedPrimitive(it);
        } catch (error) {
          return true;
        }
      };
      var createElementHolder = function(holder, key) {
        return {
          toJSON: function() {
            var element = holder[key];
            if (isObject(element) || typeof element == "bigint") {
              var elementToJSON = element.toJSON;
              if (isCallable(elementToJSON)) element = call(elementToJSON, element, key);
            }
            return element;
          }
        };
      };
      var getKeyPrefix = function(propertyList) {
        for (var i = 0, length = propertyList.length; i < length; i++) {
          if (exec(digits, propertyList[i])) return KEY_MARK;
        }
        return "";
      };
      var createOrderedObject = function(value, propertyList, keyPrefix) {
        var ordered = create(null);
        for (var i = 0, length = propertyList.length; i < length; i++) {
          var key = propertyList[i];
          ordered[keyPrefix + key] = createElementHolder(value, key);
        }
        ordered[END_MARK] = null;
        return ordered;
      };
      if ($stringify) $2({ target: "JSON", stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE || !NATIVE_RAW_JSON }, {
        stringify: function stringify(text, replacer, space) {
          var replacerFunction = isCallable(replacer) ? replacer : void 0;
          var propertyList = replacerFunction ? void 0 : getPropertyList(replacer);
          var keyPrefix = propertyList && getKeyPrefix(propertyList);
          var rawStrings = [];
          var openObjects = [];
          var parentOrdered = [];
          var currentOrdered;
          var marked = false;
          var root = true;
          var json = stringifyWithProperSymbolsConversion(text, function(key, value) {
            key = $String(key);
            if (propertyList) {
              if (key === END_MARK) {
                pop(openObjects);
                currentOrdered = pop(parentOrdered);
                return;
              }
              if (root) root = false;
              else if (this !== currentOrdered && !isArray(this) && !includes(propertyList, key)) return;
            } else if (replacerFunction) value = call(replacerFunction, this, key, value);
            if (isRawJSONValue(value)) {
              if (NATIVE_RAW_JSON) return value;
              marked = true;
              return RAW_MARK + (push(rawStrings, value.rawJSON) - 1);
            }
            if (propertyList && isSerializedAsObject(value)) {
              if (includes(openObjects, value)) throw new $TypeError("Converting circular structure to JSON");
              var ordered = createOrderedObject(value, propertyList, keyPrefix);
              push(openObjects, value);
              push(parentOrdered, currentOrdered);
              currentOrdered = ordered;
              if (keyPrefix) marked = true;
              return ordered;
            }
            return value;
          }, space);
          if (typeof json != "string") return json;
          if (ILL_FORMED_UNICODE) json = replace(json, surrogates, fixIllFormedJSON);
          if (!marked) return json;
          var result = "";
          var length = json.length;
          for (var i = 0; i < length; i++) {
            var chr = charAt(json, i);
            if (chr === '"') {
              var end = parseJSONString(json, ++i).end - 1;
              var string = slice(json, i, end);
              if (slice(string, 0, RAW_MARK_LENGTH) === RAW_MARK) result += rawStrings[slice(string, RAW_MARK_LENGTH)];
              else if (slice(string, 0, KEY_MARK_LENGTH) === KEY_MARK) result += '"' + slice(string, KEY_MARK_LENGTH) + '"';
              else result += '"' + string + '"';
              i = end;
            } else result += chr;
          }
          return result;
        }
      });
    }
  });

  // node_modules/core-js-pure/modules/es.object.get-own-property-symbols.js
  var require_es_object_get_own_property_symbols = __commonJS({
    "node_modules/core-js-pure/modules/es.object.get-own-property-symbols.js"() {
      "use strict";
      var $2 = require_export();
      var NATIVE_SYMBOL = require_symbol_constructor_detection();
      var fails = require_fails();
      var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
      var toObject = require_to_object();
      var FORCED = !NATIVE_SYMBOL || fails(function() {
        getOwnPropertySymbolsModule.f(1);
      });
      $2({ target: "Object", stat: true, forced: FORCED }, {
        getOwnPropertySymbols: function getOwnPropertySymbols(it) {
          var $getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
          return $getOwnPropertySymbols ? $getOwnPropertySymbols(toObject(it)) : [];
        }
      });
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.js
  var require_es_symbol = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.js"() {
      "use strict";
      require_es_symbol_constructor();
      require_es_symbol_for();
      require_es_symbol_key_for();
      require_es_json_stringify();
      require_es_object_get_own_property_symbols();
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.async-dispose.js
  var require_es_symbol_async_dispose = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.async-dispose.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("asyncDispose");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.async-iterator.js
  var require_es_symbol_async_iterator = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.async-iterator.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("asyncIterator");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.description.js
  var require_es_symbol_description = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.description.js"() {
      "use strict";
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.dispose.js
  var require_es_symbol_dispose = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.dispose.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("dispose");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.has-instance.js
  var require_es_symbol_has_instance = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.has-instance.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("hasInstance");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js
  var require_es_symbol_is_concat_spreadable = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.is-concat-spreadable.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("isConcatSpreadable");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.iterator.js
  var require_es_symbol_iterator = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.iterator.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("iterator");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.match.js
  var require_es_symbol_match = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.match.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("match");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.match-all.js
  var require_es_symbol_match_all = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.match-all.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("matchAll");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.replace.js
  var require_es_symbol_replace = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.replace.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("replace");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.search.js
  var require_es_symbol_search = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.search.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("search");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.species.js
  var require_es_symbol_species = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.species.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("species");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.split.js
  var require_es_symbol_split = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.split.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("split");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.to-primitive.js
  var require_es_symbol_to_primitive = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.to-primitive.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      var defineSymbolToPrimitive = require_symbol_define_to_primitive();
      defineWellKnownSymbol("toPrimitive");
      defineSymbolToPrimitive();
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.to-string-tag.js
  var require_es_symbol_to_string_tag = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.to-string-tag.js"() {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var defineWellKnownSymbol = require_well_known_symbol_define();
      var setToStringTag = require_set_to_string_tag();
      defineWellKnownSymbol("toStringTag");
      setToStringTag(getBuiltIn("Symbol"), "Symbol");
    }
  });

  // node_modules/core-js-pure/modules/es.symbol.unscopables.js
  var require_es_symbol_unscopables = __commonJS({
    "node_modules/core-js-pure/modules/es.symbol.unscopables.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("unscopables");
    }
  });

  // node_modules/core-js-pure/modules/es.json.to-string-tag.js
  var require_es_json_to_string_tag = __commonJS({
    "node_modules/core-js-pure/modules/es.json.to-string-tag.js"() {
      "use strict";
      var globalThis2 = require_global_this();
      var setToStringTag = require_set_to_string_tag();
      setToStringTag(globalThis2.JSON, "JSON", true);
    }
  });

  // node_modules/core-js-pure/modules/es.math.to-string-tag.js
  var require_es_math_to_string_tag = __commonJS({
    "node_modules/core-js-pure/modules/es.math.to-string-tag.js"() {
      "use strict";
    }
  });

  // node_modules/core-js-pure/modules/es.reflect.to-string-tag.js
  var require_es_reflect_to_string_tag = __commonJS({
    "node_modules/core-js-pure/modules/es.reflect.to-string-tag.js"() {
      "use strict";
    }
  });

  // node_modules/core-js-pure/es/symbol/index.js
  var require_symbol = __commonJS({
    "node_modules/core-js-pure/es/symbol/index.js"(exports, module) {
      "use strict";
      require_es_array_concat();
      require_es_object_to_string();
      require_es_symbol();
      require_es_symbol_async_dispose();
      require_es_symbol_async_iterator();
      require_es_symbol_description();
      require_es_symbol_dispose();
      require_es_symbol_has_instance();
      require_es_symbol_is_concat_spreadable();
      require_es_symbol_iterator();
      require_es_symbol_match();
      require_es_symbol_match_all();
      require_es_symbol_replace();
      require_es_symbol_search();
      require_es_symbol_species();
      require_es_symbol_split();
      require_es_symbol_to_primitive();
      require_es_symbol_to_string_tag();
      require_es_symbol_unscopables();
      require_es_json_to_string_tag();
      require_es_math_to_string_tag();
      require_es_reflect_to_string_tag();
      var path = require_path();
      module.exports = path.Symbol;
    }
  });

  // node_modules/core-js-pure/internals/add-to-unscopables.js
  var require_add_to_unscopables = __commonJS({
    "node_modules/core-js-pure/internals/add-to-unscopables.js"(exports, module) {
      "use strict";
      module.exports = function() {
      };
    }
  });

  // node_modules/core-js-pure/modules/es.array.iterator.js
  var require_es_array_iterator = __commonJS({
    "node_modules/core-js-pure/modules/es.array.iterator.js"(exports, module) {
      "use strict";
      var toIndexedObject = require_to_indexed_object();
      var addToUnscopables = require_add_to_unscopables();
      var Iterators = require_iterators();
      var InternalStateModule = require_internal_state();
      var defineProperty = require_object_define_property().f;
      var defineIterator = require_iterator_define();
      var createIterResultObject = require_create_iter_result_object();
      var IS_PURE = require_is_pure();
      var DESCRIPTORS = require_descriptors();
      var ARRAY_ITERATOR = "Array Iterator";
      var setInternalState = InternalStateModule.set;
      var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
      module.exports = defineIterator(Array, "Array", function(iterated, kind) {
        setInternalState(this, {
          type: ARRAY_ITERATOR,
          target: toIndexedObject(iterated),
          // target
          index: 0,
          // next index
          kind
          // kind
        });
      }, function() {
        var state = getInternalState(this);
        var target = state.target;
        var index = state.index++;
        if (!target || index >= target.length) {
          state.target = null;
          return createIterResultObject(void 0, true);
        }
        switch (state.kind) {
          case "keys":
            return createIterResultObject(index, false);
          case "values":
            return createIterResultObject(target[index], false);
        }
        return createIterResultObject([index, target[index]], false);
      }, "values");
      var values = Iterators.Arguments = Iterators.Array;
      addToUnscopables("keys");
      addToUnscopables("values");
      addToUnscopables("entries");
      if (!IS_PURE && DESCRIPTORS && values.name !== "values") try {
        defineProperty(values, "name", { value: "values" });
      } catch (error) {
      }
    }
  });

  // node_modules/core-js-pure/internals/dom-iterables.js
  var require_dom_iterables = __commonJS({
    "node_modules/core-js-pure/internals/dom-iterables.js"(exports, module) {
      "use strict";
      module.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      };
    }
  });

  // node_modules/core-js-pure/modules/web.dom-collections.iterator.js
  var require_web_dom_collections_iterator = __commonJS({
    "node_modules/core-js-pure/modules/web.dom-collections.iterator.js"() {
      "use strict";
      require_es_array_iterator();
      var DOMIterables = require_dom_iterables();
      var globalThis2 = require_global_this();
      var setToStringTag = require_set_to_string_tag();
      var Iterators = require_iterators();
      for (COLLECTION_NAME in DOMIterables) {
        setToStringTag(globalThis2[COLLECTION_NAME], COLLECTION_NAME);
        Iterators[COLLECTION_NAME] = Iterators.Array;
      }
      var COLLECTION_NAME;
    }
  });

  // node_modules/core-js-pure/stable/symbol/index.js
  var require_symbol2 = __commonJS({
    "node_modules/core-js-pure/stable/symbol/index.js"(exports, module) {
      "use strict";
      var parent = require_symbol();
      require_web_dom_collections_iterator();
      module.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js
  var require_symbol3 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/symbol.js"(exports, module) {
      "use strict";
      module.exports = require_symbol2();
    }
  });

  // node_modules/core-js-pure/internals/get-iterator-method.js
  var require_get_iterator_method = __commonJS({
    "node_modules/core-js-pure/internals/get-iterator-method.js"(exports, module) {
      "use strict";
      var getInternalIterator = require_get_internal_iterator();
      var wellKnownSymbol = require_well_known_symbol();
      var ITERATOR = wellKnownSymbol("iterator");
      module.exports = function(it) {
        return it[ITERATOR] || it["@@iterator"] || getInternalIterator(it);
      };
    }
  });

  // node_modules/core-js-pure/es/get-iterator-method.js
  var require_get_iterator_method2 = __commonJS({
    "node_modules/core-js-pure/es/get-iterator-method.js"(exports, module) {
      "use strict";
      require_es_array_iterator();
      require_es_string_iterator();
      var getIteratorMethod = require_get_iterator_method();
      module.exports = getIteratorMethod;
    }
  });

  // node_modules/core-js-pure/stable/get-iterator-method.js
  var require_get_iterator_method3 = __commonJS({
    "node_modules/core-js-pure/stable/get-iterator-method.js"(exports, module) {
      "use strict";
      var parent = require_get_iterator_method2();
      require_web_dom_collections_iterator();
      module.exports = parent;
    }
  });

  // node_modules/core-js-pure/actual/get-iterator-method.js
  var require_get_iterator_method4 = __commonJS({
    "node_modules/core-js-pure/actual/get-iterator-method.js"(exports, module) {
      "use strict";
      var parent = require_get_iterator_method3();
      module.exports = parent;
    }
  });

  // node_modules/core-js-pure/full/get-iterator-method.js
  var require_get_iterator_method5 = __commonJS({
    "node_modules/core-js-pure/full/get-iterator-method.js"(exports, module) {
      "use strict";
      var parent = require_get_iterator_method4();
      module.exports = parent;
    }
  });

  // node_modules/core-js-pure/features/get-iterator-method.js
  var require_get_iterator_method6 = __commonJS({
    "node_modules/core-js-pure/features/get-iterator-method.js"(exports, module) {
      "use strict";
      module.exports = require_get_iterator_method5();
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js
  var require_get_iterator_method7 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js/get-iterator-method.js"(exports, module) {
      "use strict";
      module.exports = require_get_iterator_method6();
    }
  });

  // node_modules/core-js-pure/modules/es.array.is-array.js
  var require_es_array_is_array = __commonJS({
    "node_modules/core-js-pure/modules/es.array.is-array.js"() {
      "use strict";
      var $2 = require_export();
      var isArray = require_is_array();
      $2({ target: "Array", stat: true }, {
        isArray
      });
    }
  });

  // node_modules/core-js-pure/es/array/is-array.js
  var require_is_array2 = __commonJS({
    "node_modules/core-js-pure/es/array/is-array.js"(exports, module) {
      "use strict";
      require_es_array_is_array();
      var path = require_path();
      module.exports = path.Array.isArray;
    }
  });

  // node_modules/core-js-pure/stable/array/is-array.js
  var require_is_array3 = __commonJS({
    "node_modules/core-js-pure/stable/array/is-array.js"(exports, module) {
      "use strict";
      var parent = require_is_array2();
      module.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js
  var require_is_array4 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/array/is-array.js"(exports, module) {
      "use strict";
      module.exports = require_is_array3();
    }
  });

  // node_modules/core-js-pure/actual/array/is-array.js
  var require_is_array5 = __commonJS({
    "node_modules/core-js-pure/actual/array/is-array.js"(exports, module) {
      "use strict";
      var parent = require_is_array3();
      module.exports = parent;
    }
  });

  // node_modules/core-js-pure/full/array/is-array.js
  var require_is_array6 = __commonJS({
    "node_modules/core-js-pure/full/array/is-array.js"(exports, module) {
      "use strict";
      var parent = require_is_array5();
      module.exports = parent;
    }
  });

  // node_modules/core-js-pure/features/array/is-array.js
  var require_is_array7 = __commonJS({
    "node_modules/core-js-pure/features/array/is-array.js"(exports, module) {
      "use strict";
      module.exports = require_is_array6();
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js
  var require_arrayWithHoles = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/arrayWithHoles.js"(exports, module) {
      "use strict";
      var _Array$isArray = require_is_array7();
      function _arrayWithHoles(r) {
        if (_Array$isArray(r)) return r;
      }
      module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/core-js-pure/modules/esnext.function.metadata.js
  var require_esnext_function_metadata = __commonJS({
    "node_modules/core-js-pure/modules/esnext.function.metadata.js"() {
      "use strict";
      var wellKnownSymbol = require_well_known_symbol();
      var defineProperty = require_object_define_property().f;
      var METADATA = wellKnownSymbol("metadata");
      var FunctionPrototype = Function.prototype;
      if (FunctionPrototype[METADATA] === void 0) {
        defineProperty(FunctionPrototype, METADATA, {
          value: null
        });
      }
    }
  });

  // node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js
  var require_esnext_symbol_async_dispose = __commonJS({
    "node_modules/core-js-pure/modules/esnext.symbol.async-dispose.js"() {
      "use strict";
      require_es_symbol_async_dispose();
    }
  });

  // node_modules/core-js-pure/modules/esnext.symbol.dispose.js
  var require_esnext_symbol_dispose = __commonJS({
    "node_modules/core-js-pure/modules/esnext.symbol.dispose.js"() {
      "use strict";
      require_es_symbol_dispose();
    }
  });

  // node_modules/core-js-pure/modules/esnext.symbol.metadata.js
  var require_esnext_symbol_metadata = __commonJS({
    "node_modules/core-js-pure/modules/esnext.symbol.metadata.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("metadata");
    }
  });

  // node_modules/core-js-pure/actual/symbol/index.js
  var require_symbol4 = __commonJS({
    "node_modules/core-js-pure/actual/symbol/index.js"(exports, module) {
      "use strict";
      var parent = require_symbol2();
      require_esnext_function_metadata();
      require_esnext_symbol_async_dispose();
      require_esnext_symbol_dispose();
      require_esnext_symbol_metadata();
      module.exports = parent;
    }
  });

  // node_modules/core-js-pure/internals/symbol-is-registered.js
  var require_symbol_is_registered = __commonJS({
    "node_modules/core-js-pure/internals/symbol-is-registered.js"(exports, module) {
      "use strict";
      var getBuiltIn = require_get_built_in();
      var uncurryThis = require_function_uncurry_this();
      var Symbol2 = getBuiltIn("Symbol");
      var keyFor = Symbol2.keyFor;
      var thisSymbolValue = uncurryThis(Symbol2.prototype.valueOf);
      module.exports = Symbol2.isRegisteredSymbol || function isRegisteredSymbol(value) {
        try {
          return keyFor(thisSymbolValue(value)) !== void 0;
        } catch (error) {
          return false;
        }
      };
    }
  });

  // node_modules/core-js-pure/modules/esnext.symbol.is-registered-symbol.js
  var require_esnext_symbol_is_registered_symbol = __commonJS({
    "node_modules/core-js-pure/modules/esnext.symbol.is-registered-symbol.js"() {
      "use strict";
      var $2 = require_export();
      var isRegisteredSymbol = require_symbol_is_registered();
      $2({ target: "Symbol", stat: true }, {
        isRegisteredSymbol
      });
    }
  });

  // node_modules/core-js-pure/internals/symbol-is-well-known.js
  var require_symbol_is_well_known = __commonJS({
    "node_modules/core-js-pure/internals/symbol-is-well-known.js"(exports, module) {
      "use strict";
      var shared = require_shared();
      var getBuiltIn = require_get_built_in();
      var uncurryThis = require_function_uncurry_this();
      var isSymbol = require_is_symbol();
      var wellKnownSymbol = require_well_known_symbol();
      var Symbol2 = getBuiltIn("Symbol");
      var $isWellKnownSymbol = Symbol2.isWellKnownSymbol;
      var getOwnPropertyNames = getBuiltIn("Object", "getOwnPropertyNames");
      var thisSymbolValue = uncurryThis(Symbol2.prototype.valueOf);
      var WellKnownSymbolsStore = shared("wks");
      for (i = 0, symbolKeys = getOwnPropertyNames(Symbol2), symbolKeysLength = symbolKeys.length; i < symbolKeysLength; i++) {
        try {
          symbolKey = symbolKeys[i];
          if (isSymbol(Symbol2[symbolKey])) wellKnownSymbol(symbolKey);
        } catch (error) {
        }
      }
      var symbolKey;
      var i;
      var symbolKeys;
      var symbolKeysLength;
      module.exports = function isWellKnownSymbol(value) {
        if ($isWellKnownSymbol && $isWellKnownSymbol(value)) return true;
        try {
          var symbol = thisSymbolValue(value);
          for (var j2 = 0, keys = getOwnPropertyNames(WellKnownSymbolsStore), keysLength = keys.length; j2 < keysLength; j2++) {
            if (WellKnownSymbolsStore[keys[j2]] == symbol) return true;
          }
        } catch (error) {
        }
        return false;
      };
    }
  });

  // node_modules/core-js-pure/modules/esnext.symbol.is-well-known-symbol.js
  var require_esnext_symbol_is_well_known_symbol = __commonJS({
    "node_modules/core-js-pure/modules/esnext.symbol.is-well-known-symbol.js"() {
      "use strict";
      var $2 = require_export();
      var isWellKnownSymbol = require_symbol_is_well_known();
      $2({ target: "Symbol", stat: true, forced: true }, {
        isWellKnownSymbol
      });
    }
  });

  // node_modules/core-js-pure/modules/esnext.symbol.custom-matcher.js
  var require_esnext_symbol_custom_matcher = __commonJS({
    "node_modules/core-js-pure/modules/esnext.symbol.custom-matcher.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("customMatcher");
    }
  });

  // node_modules/core-js-pure/modules/esnext.symbol.observable.js
  var require_esnext_symbol_observable = __commonJS({
    "node_modules/core-js-pure/modules/esnext.symbol.observable.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("observable");
    }
  });

  // node_modules/core-js-pure/modules/esnext.symbol.is-registered.js
  var require_esnext_symbol_is_registered = __commonJS({
    "node_modules/core-js-pure/modules/esnext.symbol.is-registered.js"() {
      "use strict";
      var $2 = require_export();
      var isRegisteredSymbol = require_symbol_is_registered();
      $2({ target: "Symbol", stat: true, name: "isRegisteredSymbol" }, {
        isRegistered: isRegisteredSymbol
      });
    }
  });

  // node_modules/core-js-pure/modules/esnext.symbol.is-well-known.js
  var require_esnext_symbol_is_well_known = __commonJS({
    "node_modules/core-js-pure/modules/esnext.symbol.is-well-known.js"() {
      "use strict";
      var $2 = require_export();
      var isWellKnownSymbol = require_symbol_is_well_known();
      $2({ target: "Symbol", stat: true, name: "isWellKnownSymbol", forced: true }, {
        isWellKnown: isWellKnownSymbol
      });
    }
  });

  // node_modules/core-js-pure/modules/esnext.symbol.matcher.js
  var require_esnext_symbol_matcher = __commonJS({
    "node_modules/core-js-pure/modules/esnext.symbol.matcher.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("matcher");
    }
  });

  // node_modules/core-js-pure/modules/esnext.symbol.metadata-key.js
  var require_esnext_symbol_metadata_key = __commonJS({
    "node_modules/core-js-pure/modules/esnext.symbol.metadata-key.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("metadataKey");
    }
  });

  // node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js
  var require_esnext_symbol_pattern_match = __commonJS({
    "node_modules/core-js-pure/modules/esnext.symbol.pattern-match.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("patternMatch");
    }
  });

  // node_modules/core-js-pure/modules/esnext.symbol.replace-all.js
  var require_esnext_symbol_replace_all = __commonJS({
    "node_modules/core-js-pure/modules/esnext.symbol.replace-all.js"() {
      "use strict";
      var defineWellKnownSymbol = require_well_known_symbol_define();
      defineWellKnownSymbol("replaceAll");
    }
  });

  // node_modules/core-js-pure/full/symbol/index.js
  var require_symbol5 = __commonJS({
    "node_modules/core-js-pure/full/symbol/index.js"(exports, module) {
      "use strict";
      var parent = require_symbol4();
      require_esnext_symbol_is_registered_symbol();
      require_esnext_symbol_is_well_known_symbol();
      require_esnext_symbol_custom_matcher();
      require_esnext_symbol_observable();
      require_esnext_symbol_is_registered();
      require_esnext_symbol_is_well_known();
      require_esnext_symbol_matcher();
      require_esnext_symbol_metadata_key();
      require_esnext_symbol_pattern_match();
      require_esnext_symbol_replace_all();
      module.exports = parent;
    }
  });

  // node_modules/core-js-pure/features/symbol/index.js
  var require_symbol6 = __commonJS({
    "node_modules/core-js-pure/features/symbol/index.js"(exports, module) {
      "use strict";
      module.exports = require_symbol5();
    }
  });

  // node_modules/core-js-pure/modules/es.array.push.js
  var require_es_array_push = __commonJS({
    "node_modules/core-js-pure/modules/es.array.push.js"() {
      "use strict";
      var $2 = require_export();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var setArrayLength = require_array_set_length();
      var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
      var fails = require_fails();
      var INCORRECT_TO_LENGTH = fails(function() {
        return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
      });
      var properErrorOnNonWritableLength = function() {
        try {
          Object.defineProperty([], "length", { writable: false }).push();
        } catch (error) {
          return error instanceof TypeError;
        }
      };
      var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
      $2({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
        // eslint-disable-next-line no-unused-vars -- required for `.length`
        push: function push(item) {
          var O2 = toObject(this);
          var len = lengthOfArrayLike(O2);
          var argCount = arguments.length;
          doesNotExceedSafeInteger(len + argCount);
          for (var i = 0; i < argCount; i++) {
            O2[len] = arguments[i];
            len++;
          }
          setArrayLength(O2, len);
          return len;
        }
      });
    }
  });

  // node_modules/core-js-pure/es/array/virtual/push.js
  var require_push = __commonJS({
    "node_modules/core-js-pure/es/array/virtual/push.js"(exports, module) {
      "use strict";
      require_es_array_push();
      var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
      module.exports = getBuiltInPrototypeMethod("Array", "push");
    }
  });

  // node_modules/core-js-pure/es/instance/push.js
  var require_push2 = __commonJS({
    "node_modules/core-js-pure/es/instance/push.js"(exports, module) {
      "use strict";
      var isPrototypeOf = require_object_is_prototype_of();
      var method = require_push();
      var ArrayPrototype = Array.prototype;
      module.exports = function(it) {
        var own = it.push;
        return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.push ? method : own;
      };
    }
  });

  // node_modules/core-js-pure/stable/instance/push.js
  var require_push3 = __commonJS({
    "node_modules/core-js-pure/stable/instance/push.js"(exports, module) {
      "use strict";
      var parent = require_push2();
      module.exports = parent;
    }
  });

  // node_modules/core-js-pure/actual/instance/push.js
  var require_push4 = __commonJS({
    "node_modules/core-js-pure/actual/instance/push.js"(exports, module) {
      "use strict";
      var parent = require_push3();
      module.exports = parent;
    }
  });

  // node_modules/core-js-pure/full/instance/push.js
  var require_push5 = __commonJS({
    "node_modules/core-js-pure/full/instance/push.js"(exports, module) {
      "use strict";
      var parent = require_push4();
      module.exports = parent;
    }
  });

  // node_modules/core-js-pure/features/instance/push.js
  var require_push6 = __commonJS({
    "node_modules/core-js-pure/features/instance/push.js"(exports, module) {
      "use strict";
      module.exports = require_push5();
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js
  var require_iterableToArrayLimit = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/iterableToArrayLimit.js"(exports, module) {
      "use strict";
      var _Symbol = require_symbol6();
      var _getIteratorMethod = require_get_iterator_method6();
      var _pushInstanceProperty = require_push6();
      function _iterableToArrayLimit(r, l2) {
        var t = null == r ? null : "undefined" != typeof _Symbol && _getIteratorMethod(r) || r["@@iterator"];
        if (null != t) {
          var e, n, i, u2, a2 = [], f = true, o = false;
          try {
            if (i = (t = t.call(r)).next, 0 === l2) {
              if (Object(t) !== t) return;
              f = false;
            } else for (; !(f = (e = i.call(t)).done) && (_pushInstanceProperty(a2).call(a2, e.value), a2.length !== l2); f = true) ;
          } catch (r2) {
            o = true, n = r2;
          } finally {
            try {
              if (!f && null != t["return"] && (u2 = t["return"](), Object(u2) !== u2)) return;
            } finally {
              if (o) throw n;
            }
          }
          return a2;
        }
      }
      module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/core-js-pure/actual/instance/slice.js
  var require_slice5 = __commonJS({
    "node_modules/core-js-pure/actual/instance/slice.js"(exports, module) {
      "use strict";
      var parent = require_slice3();
      module.exports = parent;
    }
  });

  // node_modules/core-js-pure/full/instance/slice.js
  var require_slice6 = __commonJS({
    "node_modules/core-js-pure/full/instance/slice.js"(exports, module) {
      "use strict";
      var parent = require_slice5();
      module.exports = parent;
    }
  });

  // node_modules/core-js-pure/features/instance/slice.js
  var require_slice7 = __commonJS({
    "node_modules/core-js-pure/features/instance/slice.js"(exports, module) {
      "use strict";
      module.exports = require_slice6();
    }
  });

  // node_modules/core-js-pure/actual/array/from.js
  var require_from4 = __commonJS({
    "node_modules/core-js-pure/actual/array/from.js"(exports, module) {
      "use strict";
      var parent = require_from2();
      module.exports = parent;
    }
  });

  // node_modules/core-js-pure/full/array/from.js
  var require_from5 = __commonJS({
    "node_modules/core-js-pure/full/array/from.js"(exports, module) {
      "use strict";
      var parent = require_from4();
      module.exports = parent;
    }
  });

  // node_modules/core-js-pure/features/array/from.js
  var require_from6 = __commonJS({
    "node_modules/core-js-pure/features/array/from.js"(exports, module) {
      "use strict";
      module.exports = require_from5();
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/arrayLikeToArray.js
  var require_arrayLikeToArray = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/arrayLikeToArray.js"(exports, module) {
      "use strict";
      function _arrayLikeToArray(r, a2) {
        (null == a2 || a2 > r.length) && (a2 = r.length);
        for (var e = 0, n = Array(a2); e < a2; e++) n[e] = r[e];
        return n;
      }
      module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/unsupportedIterableToArray.js
  var require_unsupportedIterableToArray = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/unsupportedIterableToArray.js"(exports, module) {
      "use strict";
      var _sliceInstanceProperty = require_slice7();
      var _Array$from = require_from6();
      var arrayLikeToArray = require_arrayLikeToArray();
      function _unsupportedIterableToArray(r, a2) {
        if (r) {
          var _context;
          if ("string" == typeof r) return arrayLikeToArray(r, a2);
          var t = _sliceInstanceProperty(_context = {}.toString.call(r)).call(_context, 8, -1);
          return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? _Array$from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a2) : void 0;
        }
      }
      module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js
  var require_nonIterableRest = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/nonIterableRest.js"(exports, module) {
      "use strict";
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js
  var require_slicedToArray = __commonJS({
    "node_modules/@babel/runtime-corejs3/helpers/slicedToArray.js"(exports, module) {
      "use strict";
      var arrayWithHoles = require_arrayWithHoles();
      var iterableToArrayLimit = require_iterableToArrayLimit();
      var unsupportedIterableToArray = require_unsupportedIterableToArray();
      var nonIterableRest = require_nonIterableRest();
      function _slicedToArray(r, e) {
        return arrayWithHoles(r) || iterableToArrayLimit(r, e) || unsupportedIterableToArray(r, e) || nonIterableRest();
      }
      module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/core-js-pure/modules/es.object.create.js
  var require_es_object_create = __commonJS({
    "node_modules/core-js-pure/modules/es.object.create.js"() {
      "use strict";
      var $2 = require_export();
      var DESCRIPTORS = require_descriptors();
      var create = require_object_create();
      $2({ target: "Object", stat: true, sham: !DESCRIPTORS }, {
        create
      });
    }
  });

  // node_modules/core-js-pure/es/object/create.js
  var require_create = __commonJS({
    "node_modules/core-js-pure/es/object/create.js"(exports, module) {
      "use strict";
      require_es_object_create();
      var path = require_path();
      var Object2 = path.Object;
      module.exports = function create(P2, D2) {
        return Object2.create(P2, D2);
      };
    }
  });

  // node_modules/core-js-pure/stable/object/create.js
  var require_create2 = __commonJS({
    "node_modules/core-js-pure/stable/object/create.js"(exports, module) {
      "use strict";
      var parent = require_create();
      module.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/object/create.js
  var require_create3 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/object/create.js"(exports, module) {
      "use strict";
      module.exports = require_create2();
    }
  });

  // node_modules/core-js-pure/modules/es.regexp.flags.js
  var require_es_regexp_flags = __commonJS({
    "node_modules/core-js-pure/modules/es.regexp.flags.js"() {
      "use strict";
    }
  });

  // node_modules/core-js-pure/internals/regexp-flags-detection.js
  var require_regexp_flags_detection = __commonJS({
    "node_modules/core-js-pure/internals/regexp-flags-detection.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var fails = require_fails();
      var RegExp2 = globalThis2.RegExp;
      var FLAGS_GETTER_IS_CORRECT = !fails(function() {
        var INDICES_SUPPORT = true;
        try {
          RegExp2(".", "d");
        } catch (error) {
          INDICES_SUPPORT = false;
        }
        var O2 = {};
        var calls = "";
        var expected = INDICES_SUPPORT ? "dgimsy" : "gimsy";
        var addGetter = function(key2, chr) {
          Object.defineProperty(O2, key2, { get: function() {
            calls += chr;
            return true;
          } });
        };
        var pairs = {
          dotAll: "s",
          global: "g",
          ignoreCase: "i",
          multiline: "m",
          sticky: "y"
        };
        if (INDICES_SUPPORT) pairs.hasIndices = "d";
        for (var key in pairs) addGetter(key, pairs[key]);
        var result = Object.getOwnPropertyDescriptor(RegExp2.prototype, "flags").get.call(O2);
        return result !== expected || calls !== expected;
      });
      module.exports = { correct: FLAGS_GETTER_IS_CORRECT };
    }
  });

  // node_modules/core-js-pure/internals/regexp-flags.js
  var require_regexp_flags = __commonJS({
    "node_modules/core-js-pure/internals/regexp-flags.js"(exports, module) {
      "use strict";
      var anObject = require_an_object();
      module.exports = function() {
        var that = anObject(this);
        var result = "";
        if (that.hasIndices) result += "d";
        if (that.global) result += "g";
        if (that.ignoreCase) result += "i";
        if (that.multiline) result += "m";
        if (that.dotAll) result += "s";
        if (that.unicode) result += "u";
        if (that.unicodeSets) result += "v";
        if (that.sticky) result += "y";
        return result;
      };
    }
  });

  // node_modules/core-js-pure/internals/regexp-get-flags.js
  var require_regexp_get_flags = __commonJS({
    "node_modules/core-js-pure/internals/regexp-get-flags.js"(exports, module) {
      "use strict";
      var call = require_function_call();
      var hasOwn = require_has_own_property();
      var isPrototypeOf = require_object_is_prototype_of();
      var regExpFlagsDetection = require_regexp_flags_detection();
      var regExpFlagsGetterImplementation = require_regexp_flags();
      var RegExpPrototype = RegExp.prototype;
      module.exports = regExpFlagsDetection.correct ? function(it) {
        return it.flags;
      } : function(it) {
        return !regExpFlagsDetection.correct && isPrototypeOf(RegExpPrototype, it) && !hasOwn(it, "flags") ? call(regExpFlagsGetterImplementation, it) : it.flags;
      };
    }
  });

  // node_modules/core-js-pure/es/regexp/flags.js
  var require_flags = __commonJS({
    "node_modules/core-js-pure/es/regexp/flags.js"(exports, module) {
      "use strict";
      require_es_regexp_flags();
      var getRegExpFlags = require_regexp_get_flags();
      module.exports = getRegExpFlags;
    }
  });

  // node_modules/core-js-pure/es/instance/flags.js
  var require_flags2 = __commonJS({
    "node_modules/core-js-pure/es/instance/flags.js"(exports, module) {
      "use strict";
      var isPrototypeOf = require_object_is_prototype_of();
      var flags = require_flags();
      var RegExpPrototype = RegExp.prototype;
      module.exports = function(it) {
        return it === RegExpPrototype || isPrototypeOf(RegExpPrototype, it) ? flags(it) : it.flags;
      };
    }
  });

  // node_modules/core-js-pure/stable/instance/flags.js
  var require_flags3 = __commonJS({
    "node_modules/core-js-pure/stable/instance/flags.js"(exports, module) {
      "use strict";
      var parent = require_flags2();
      module.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/instance/flags.js
  var require_flags4 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/instance/flags.js"(exports, module) {
      "use strict";
      module.exports = require_flags3();
    }
  });

  // node_modules/core-js-pure/internals/delete-property-or-throw.js
  var require_delete_property_or_throw = __commonJS({
    "node_modules/core-js-pure/internals/delete-property-or-throw.js"(exports, module) {
      "use strict";
      var tryToString = require_try_to_string();
      var $TypeError = TypeError;
      module.exports = function(O2, P2) {
        if (!delete O2[P2]) throw new $TypeError("Cannot delete property " + tryToString(P2) + " of " + tryToString(O2));
      };
    }
  });

  // node_modules/core-js-pure/internals/array-sort.js
  var require_array_sort = __commonJS({
    "node_modules/core-js-pure/internals/array-sort.js"(exports, module) {
      "use strict";
      var arraySlice = require_array_slice();
      var floor = Math.floor;
      var sort = function(array, comparefn) {
        var length = array.length;
        if (length < 8) {
          var i = 1;
          var element, j2;
          while (i < length) {
            j2 = i;
            element = array[i];
            while (j2 && comparefn(array[j2 - 1], element) > 0) {
              array[j2] = array[--j2];
            }
            if (j2 !== i++) array[j2] = element;
          }
        } else {
          var middle = floor(length / 2);
          var left = sort(arraySlice(array, 0, middle), comparefn);
          var right = sort(arraySlice(array, middle), comparefn);
          var llength = left.length;
          var rlength = right.length;
          var lindex = 0;
          var rindex = 0;
          while (lindex < llength || rindex < rlength) {
            array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
          }
        }
        return array;
      };
      module.exports = sort;
    }
  });

  // node_modules/core-js-pure/internals/array-method-is-strict.js
  var require_array_method_is_strict = __commonJS({
    "node_modules/core-js-pure/internals/array-method-is-strict.js"(exports, module) {
      "use strict";
      var fails = require_fails();
      module.exports = function(METHOD_NAME, argument) {
        var method = [][METHOD_NAME];
        return !!method && fails(function() {
          method.call(null, argument || function() {
            return 1;
          }, 1);
        });
      };
    }
  });

  // node_modules/core-js-pure/internals/environment-ff-version.js
  var require_environment_ff_version = __commonJS({
    "node_modules/core-js-pure/internals/environment-ff-version.js"(exports, module) {
      "use strict";
      var userAgent = require_environment_user_agent();
      var firefox = userAgent.match(/firefox\/(\d+)/i);
      module.exports = !!firefox && +firefox[1];
    }
  });

  // node_modules/core-js-pure/internals/environment-is-ie-or-edge.js
  var require_environment_is_ie_or_edge = __commonJS({
    "node_modules/core-js-pure/internals/environment-is-ie-or-edge.js"(exports, module) {
      "use strict";
      var UA = require_environment_user_agent();
      module.exports = /MSIE|Trident/.test(UA);
    }
  });

  // node_modules/core-js-pure/internals/environment-webkit-version.js
  var require_environment_webkit_version = __commonJS({
    "node_modules/core-js-pure/internals/environment-webkit-version.js"(exports, module) {
      "use strict";
      var userAgent = require_environment_user_agent();
      var webkit = userAgent.match(/AppleWebKit\/(\d+)\./);
      module.exports = !!webkit && +webkit[1];
    }
  });

  // node_modules/core-js-pure/modules/es.array.sort.js
  var require_es_array_sort = __commonJS({
    "node_modules/core-js-pure/modules/es.array.sort.js"() {
      "use strict";
      var $2 = require_export();
      var uncurryThis = require_function_uncurry_this();
      var aCallable = require_a_callable();
      var toObject = require_to_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var deletePropertyOrThrow = require_delete_property_or_throw();
      var toString = require_to_string();
      var fails = require_fails();
      var internalSort = require_array_sort();
      var arrayMethodIsStrict = require_array_method_is_strict();
      var FF = require_environment_ff_version();
      var IE_OR_EDGE = require_environment_is_ie_or_edge();
      var V8 = require_environment_v8_version();
      var WEBKIT = require_environment_webkit_version();
      var test = [];
      var nativeSort = uncurryThis(test.sort);
      var push = uncurryThis(test.push);
      var FAILS_ON_UNDEFINED = fails(function() {
        test.sort(void 0);
      });
      var FAILS_ON_NULL = fails(function() {
        test.sort(null);
      });
      var STRICT_METHOD = arrayMethodIsStrict("sort");
      var STABLE_SORT = !fails(function() {
        if (V8) return V8 < 70;
        if (FF && FF > 3) return;
        if (IE_OR_EDGE) return true;
        if (WEBKIT) return WEBKIT < 603;
        var result = "";
        var code, chr, value, index;
        for (code = 65; code < 76; code++) {
          chr = String.fromCharCode(code);
          switch (code) {
            case 66:
            case 69:
            case 70:
            case 72:
              value = 3;
              break;
            case 68:
            case 71:
              value = 4;
              break;
            default:
              value = 2;
          }
          for (index = 0; index < 47; index++) {
            test.push({ k: chr + index, v: value });
          }
        }
        test.sort(function(a2, b2) {
          return b2.v - a2.v;
        });
        for (index = 0; index < test.length; index++) {
          chr = test[index].k.charAt(0);
          if (result.charAt(result.length - 1) !== chr) result += chr;
        }
        return result !== "DGBEFHACIJK";
      });
      var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT;
      var getSortCompare = function(comparefn) {
        return function(x2, y2) {
          if (y2 === void 0) return -1;
          if (x2 === void 0) return 1;
          if (comparefn !== void 0) return +comparefn(x2, y2) || 0;
          var xString = toString(x2);
          var yString = toString(y2);
          return xString === yString ? 0 : xString > yString ? 1 : -1;
        };
      };
      $2({ target: "Array", proto: true, forced: FORCED }, {
        sort: function sort(comparefn) {
          if (comparefn !== void 0) aCallable(comparefn);
          var array = toObject(this);
          if (STABLE_SORT) return comparefn === void 0 ? nativeSort(array) : nativeSort(array, comparefn);
          var items = [];
          var arrayLength = lengthOfArrayLike(array);
          var itemsLength, index;
          for (index = 0; index < arrayLength; index++) {
            if (index in array) push(items, array[index]);
          }
          internalSort(items, getSortCompare(comparefn));
          itemsLength = lengthOfArrayLike(items);
          index = 0;
          while (index < itemsLength) array[index] = items[index++];
          while (index < arrayLength) deletePropertyOrThrow(array, index++);
          return array;
        }
      });
    }
  });

  // node_modules/core-js-pure/es/array/virtual/sort.js
  var require_sort = __commonJS({
    "node_modules/core-js-pure/es/array/virtual/sort.js"(exports, module) {
      "use strict";
      require_es_array_sort();
      var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
      module.exports = getBuiltInPrototypeMethod("Array", "sort");
    }
  });

  // node_modules/core-js-pure/es/instance/sort.js
  var require_sort2 = __commonJS({
    "node_modules/core-js-pure/es/instance/sort.js"(exports, module) {
      "use strict";
      var isPrototypeOf = require_object_is_prototype_of();
      var method = require_sort();
      var ArrayPrototype = Array.prototype;
      module.exports = function(it) {
        var own = it.sort;
        return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.sort ? method : own;
      };
    }
  });

  // node_modules/core-js-pure/stable/instance/sort.js
  var require_sort3 = __commonJS({
    "node_modules/core-js-pure/stable/instance/sort.js"(exports, module) {
      "use strict";
      var parent = require_sort2();
      module.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js
  var require_sort4 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/instance/sort.js"(exports, module) {
      "use strict";
      module.exports = require_sort3();
    }
  });

  // node_modules/core-js-pure/internals/whitespaces.js
  var require_whitespaces = __commonJS({
    "node_modules/core-js-pure/internals/whitespaces.js"(exports, module) {
      "use strict";
      module.exports = "	\n\v\f\r                　\u2028\u2029\uFEFF";
    }
  });

  // node_modules/core-js-pure/internals/string-trim.js
  var require_string_trim = __commonJS({
    "node_modules/core-js-pure/internals/string-trim.js"(exports, module) {
      "use strict";
      var uncurryThis = require_function_uncurry_this();
      var requireObjectCoercible = require_require_object_coercible();
      var toString = require_to_string();
      var whitespaces = require_whitespaces();
      var replace = uncurryThis("".replace);
      var ltrim = RegExp("^[" + whitespaces + "]+");
      var rtrim = RegExp("(^|[^" + whitespaces + "])[" + whitespaces + "]+$");
      var createMethod = function(TYPE) {
        return function($this) {
          var string = toString(requireObjectCoercible($this));
          if (TYPE & 1) string = replace(string, ltrim, "");
          if (TYPE & 2) string = replace(string, rtrim, "$1");
          return string;
        };
      };
      module.exports = {
        // `String.prototype.{ trimLeft, trimStart }` methods
        // https://tc39.es/ecma262/#sec-string.prototype.trimstart
        start: createMethod(1),
        // `String.prototype.{ trimRight, trimEnd }` methods
        // https://tc39.es/ecma262/#sec-string.prototype.trimend
        end: createMethod(2),
        // `String.prototype.trim` method
        // https://tc39.es/ecma262/#sec-string.prototype.trim
        trim: createMethod(3)
      };
    }
  });

  // node_modules/core-js-pure/internals/number-parse-int.js
  var require_number_parse_int = __commonJS({
    "node_modules/core-js-pure/internals/number-parse-int.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var fails = require_fails();
      var uncurryThis = require_function_uncurry_this();
      var toString = require_to_string();
      var trim = require_string_trim().trim;
      var whitespaces = require_whitespaces();
      var $parseInt = globalThis2.parseInt;
      var Symbol2 = globalThis2.Symbol;
      var ITERATOR = Symbol2 && Symbol2.iterator;
      var hex = /^[+-]?0x/i;
      var exec = uncurryThis(hex.exec);
      var FORCED = $parseInt(whitespaces + "08") !== 8 || $parseInt(whitespaces + "0x16") !== 22 || ITERATOR && !fails(function() {
        $parseInt(Object(ITERATOR));
      });
      module.exports = FORCED ? function parseInt2(string, radix) {
        var S2 = trim(toString(string));
        return $parseInt(S2, radix >>> 0 || (exec(hex, S2) ? 16 : 10));
      } : $parseInt;
    }
  });

  // node_modules/core-js-pure/modules/es.parse-int.js
  var require_es_parse_int = __commonJS({
    "node_modules/core-js-pure/modules/es.parse-int.js"() {
      "use strict";
      var $2 = require_export();
      var $parseInt = require_number_parse_int();
      $2({ global: true, forced: parseInt !== $parseInt }, {
        parseInt: $parseInt
      });
    }
  });

  // node_modules/core-js-pure/es/parse-int.js
  var require_parse_int = __commonJS({
    "node_modules/core-js-pure/es/parse-int.js"(exports, module) {
      "use strict";
      require_es_parse_int();
      var path = require_path();
      module.exports = path.parseInt;
    }
  });

  // node_modules/core-js-pure/stable/parse-int.js
  var require_parse_int2 = __commonJS({
    "node_modules/core-js-pure/stable/parse-int.js"(exports, module) {
      "use strict";
      var parent = require_parse_int();
      module.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js
  var require_parse_int3 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/parse-int.js"(exports, module) {
      "use strict";
      module.exports = require_parse_int2();
    }
  });

  // node_modules/core-js-pure/modules/es.array.index-of.js
  var require_es_array_index_of = __commonJS({
    "node_modules/core-js-pure/modules/es.array.index-of.js"() {
      "use strict";
      var $2 = require_export();
      var uncurryThis = require_function_uncurry_this_clause();
      var $indexOf = require_array_includes().indexOf;
      var arrayMethodIsStrict = require_array_method_is_strict();
      var nativeIndexOf = uncurryThis([].indexOf);
      var NEGATIVE_ZERO = !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
      var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict("indexOf");
      $2({ target: "Array", proto: true, forced: FORCED }, {
        indexOf: function indexOf(searchElement) {
          var fromIndex = arguments.length > 1 ? arguments[1] : void 0;
          return NEGATIVE_ZERO ? nativeIndexOf(this, searchElement, fromIndex) || 0 : $indexOf(this, searchElement, fromIndex);
        }
      });
    }
  });

  // node_modules/core-js-pure/es/array/virtual/index-of.js
  var require_index_of = __commonJS({
    "node_modules/core-js-pure/es/array/virtual/index-of.js"(exports, module) {
      "use strict";
      require_es_array_index_of();
      var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
      module.exports = getBuiltInPrototypeMethod("Array", "indexOf");
    }
  });

  // node_modules/core-js-pure/es/instance/index-of.js
  var require_index_of2 = __commonJS({
    "node_modules/core-js-pure/es/instance/index-of.js"(exports, module) {
      "use strict";
      var isPrototypeOf = require_object_is_prototype_of();
      var method = require_index_of();
      var ArrayPrototype = Array.prototype;
      module.exports = function(it) {
        var own = it.indexOf;
        return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.indexOf ? method : own;
      };
    }
  });

  // node_modules/core-js-pure/stable/instance/index-of.js
  var require_index_of3 = __commonJS({
    "node_modules/core-js-pure/stable/instance/index-of.js"(exports, module) {
      "use strict";
      var parent = require_index_of2();
      module.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js
  var require_index_of4 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/instance/index-of.js"(exports, module) {
      "use strict";
      module.exports = require_index_of3();
    }
  });

  // node_modules/core-js-pure/internals/array-for-each.js
  var require_array_for_each = __commonJS({
    "node_modules/core-js-pure/internals/array-for-each.js"(exports, module) {
      "use strict";
      var $forEach = require_array_iteration().forEach;
      var arrayMethodIsStrict = require_array_method_is_strict();
      var STRICT_METHOD = arrayMethodIsStrict("forEach");
      module.exports = !STRICT_METHOD ? function forEach(callbackfn) {
        return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
      } : [].forEach;
    }
  });

  // node_modules/core-js-pure/modules/es.array.for-each.js
  var require_es_array_for_each = __commonJS({
    "node_modules/core-js-pure/modules/es.array.for-each.js"() {
      "use strict";
      var $2 = require_export();
      var forEach = require_array_for_each();
      $2({ target: "Array", proto: true, forced: [].forEach !== forEach }, {
        forEach
      });
    }
  });

  // node_modules/core-js-pure/es/array/virtual/for-each.js
  var require_for_each = __commonJS({
    "node_modules/core-js-pure/es/array/virtual/for-each.js"(exports, module) {
      "use strict";
      require_es_array_for_each();
      var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
      module.exports = getBuiltInPrototypeMethod("Array", "forEach");
    }
  });

  // node_modules/core-js-pure/stable/array/virtual/for-each.js
  var require_for_each2 = __commonJS({
    "node_modules/core-js-pure/stable/array/virtual/for-each.js"(exports, module) {
      "use strict";
      var parent = require_for_each();
      module.exports = parent;
    }
  });

  // node_modules/core-js-pure/modules/web.dom-collections.for-each.js
  var require_web_dom_collections_for_each = __commonJS({
    "node_modules/core-js-pure/modules/web.dom-collections.for-each.js"() {
      "use strict";
    }
  });

  // node_modules/core-js-pure/stable/instance/for-each.js
  var require_for_each3 = __commonJS({
    "node_modules/core-js-pure/stable/instance/for-each.js"(exports, module) {
      "use strict";
      var classof = require_classof();
      var hasOwn = require_has_own_property();
      var isPrototypeOf = require_object_is_prototype_of();
      var method = require_for_each2();
      require_web_dom_collections_for_each();
      var ArrayPrototype = Array.prototype;
      var DOMIterables = {
        DOMTokenList: true,
        NodeList: true
      };
      module.exports = function(it) {
        var own = it.forEach;
        return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.forEach || hasOwn(DOMIterables, classof(it)) ? method : own;
      };
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js
  var require_for_each4 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/instance/for-each.js"(exports, module) {
      "use strict";
      module.exports = require_for_each3();
    }
  });

  // node_modules/core-js-pure/es/array/virtual/concat.js
  var require_concat = __commonJS({
    "node_modules/core-js-pure/es/array/virtual/concat.js"(exports, module) {
      "use strict";
      require_es_array_concat();
      var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
      module.exports = getBuiltInPrototypeMethod("Array", "concat");
    }
  });

  // node_modules/core-js-pure/es/instance/concat.js
  var require_concat2 = __commonJS({
    "node_modules/core-js-pure/es/instance/concat.js"(exports, module) {
      "use strict";
      var isPrototypeOf = require_object_is_prototype_of();
      var method = require_concat();
      var ArrayPrototype = Array.prototype;
      module.exports = function(it) {
        var own = it.concat;
        return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.concat ? method : own;
      };
    }
  });

  // node_modules/core-js-pure/stable/instance/concat.js
  var require_concat3 = __commonJS({
    "node_modules/core-js-pure/stable/instance/concat.js"(exports, module) {
      "use strict";
      var parent = require_concat2();
      module.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js
  var require_concat4 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/instance/concat.js"(exports, module) {
      "use strict";
      module.exports = require_concat3();
    }
  });

  // node_modules/xregexp/lib/xregexp.js
  var require_xregexp = __commonJS({
    "node_modules/xregexp/lib/xregexp.js"(exports, module) {
      "use strict";
      var _sliceInstanceProperty2 = require_slice4();
      var _Array$from = require_from3();
      var _Symbol = require_symbol3();
      var _getIteratorMethod = require_get_iterator_method7();
      var _Array$isArray = require_is_array4();
      var _Object$defineProperty = require_define_property3();
      var _interopRequireDefault = require_interopRequireDefault();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _slicedToArray2 = _interopRequireDefault(require_slicedToArray());
      var _create = _interopRequireDefault(require_create3());
      var _flags = _interopRequireDefault(require_flags4());
      var _sort = _interopRequireDefault(require_sort4());
      var _slice = _interopRequireDefault(require_slice4());
      var _parseInt2 = _interopRequireDefault(require_parse_int3());
      var _indexOf = _interopRequireDefault(require_index_of4());
      var _forEach = _interopRequireDefault(require_for_each4());
      var _concat = _interopRequireDefault(require_concat4());
      function _createForOfIteratorHelper(r, e) {
        var t = "undefined" != typeof _Symbol && _getIteratorMethod(r) || r["@@iterator"];
        if (!t) {
          if (_Array$isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
            t && (r = t);
            var _n2 = 0, F2 = function F3() {
            };
            return { s: F2, n: function n() {
              return _n2 >= r.length ? { done: true } : { done: false, value: r[_n2++] };
            }, e: function e2(r2) {
              throw r2;
            }, f: F2 };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o, a2 = true, u2 = false;
        return { s: function s2() {
          t = t.call(r);
        }, n: function n() {
          var r2 = t.next();
          return a2 = r2.done, r2;
        }, e: function e2(r2) {
          u2 = true, o = r2;
        }, f: function f() {
          try {
            a2 || null == t["return"] || t["return"]();
          } finally {
            if (u2) throw o;
          }
        } };
      }
      function _unsupportedIterableToArray(r, a2) {
        if (r) {
          var _context9;
          if ("string" == typeof r) return _arrayLikeToArray(r, a2);
          var t = _sliceInstanceProperty2(_context9 = {}.toString.call(r)).call(_context9, 8, -1);
          return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? _Array$from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a2) : void 0;
        }
      }
      function _arrayLikeToArray(r, a2) {
        (null == a2 || a2 > r.length) && (a2 = r.length);
        for (var e = 0, n = Array(a2); e < a2; e++) n[e] = r[e];
        return n;
      }
      var REGEX_DATA = "xregexp";
      var features = {
        astral: false,
        namespacing: true
      };
      var fixed = {};
      var regexCache = (0, _create["default"])(null);
      var patternCache = (0, _create["default"])(null);
      var tokens = [];
      var defaultScope = "default";
      var classScope = "class";
      var nativeTokens = {
        // Any native multicharacter token in default scope, or any single character
        "default": /\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|\(\?(?:[:=!]|<[=!])|[?*+]\?|{\d+(?:,\d*)?}\??|[\s\S]/,
        // Any native multicharacter token in character class scope, or any single character
        "class": /\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u(?:[\dA-Fa-f]{4}|{[\dA-Fa-f]+})|c[A-Za-z]|[\s\S])|[\s\S]/
      };
      var replacementToken = /\$(?:\{([^\}]+)\}|<([^>]+)>|(\d\d?|[\s\S]?))/g;
      var correctExecNpcg = /()??/.exec("")[1] === void 0;
      var hasFlagsProp = (0, _flags["default"])(/x/) !== void 0;
      function hasNativeFlag(flag) {
        var isSupported = true;
        try {
          new RegExp("", flag);
          if (flag === "y") {
            var gy = /* @__PURE__ */ function() {
              return "gy";
            }();
            var incompleteY = ".a".replace(new RegExp("a", gy), ".") === "..";
            if (incompleteY) {
              isSupported = false;
            }
          }
        } catch (exception) {
          isSupported = false;
        }
        return isSupported;
      }
      var hasNativeD = hasNativeFlag("d");
      var hasNativeS = hasNativeFlag("s");
      var hasNativeU = hasNativeFlag("u");
      var hasNativeY = hasNativeFlag("y");
      var registeredFlags = {
        d: hasNativeD,
        g: true,
        i: true,
        m: true,
        s: hasNativeS,
        u: hasNativeU,
        y: hasNativeY
      };
      var nonnativeFlags = hasNativeS ? /[^dgimsuy]+/g : /[^dgimuy]+/g;
      function augment(regex, captureNames, xSource, xFlags, isInternalOnly) {
        var _context;
        regex[REGEX_DATA] = {
          captureNames
        };
        if (isInternalOnly) {
          return regex;
        }
        if (regex.__proto__) {
          regex.__proto__ = XRegExp.prototype;
        } else {
          for (var p2 in XRegExp.prototype) {
            regex[p2] = XRegExp.prototype[p2];
          }
        }
        regex[REGEX_DATA].source = xSource;
        regex[REGEX_DATA].flags = xFlags ? (0, _sort["default"])(_context = xFlags.split("")).call(_context).join("") : xFlags;
        return regex;
      }
      function clipDuplicates(str) {
        return str.replace(/([\s\S])(?=[\s\S]*\1)/g, "");
      }
      function copyRegex(regex, options) {
        var _context2;
        if (!XRegExp.isRegExp(regex)) {
          throw new TypeError("Type RegExp expected");
        }
        var xData = regex[REGEX_DATA] || {};
        var flags = getNativeFlags(regex);
        var flagsToAdd = "";
        var flagsToRemove = "";
        var xregexpSource = null;
        var xregexpFlags = null;
        options = options || {};
        if (options.removeG) {
          flagsToRemove += "g";
        }
        if (options.removeY) {
          flagsToRemove += "y";
        }
        if (flagsToRemove) {
          flags = flags.replace(new RegExp("[".concat(flagsToRemove, "]+"), "g"), "");
        }
        if (options.addG) {
          flagsToAdd += "g";
        }
        if (options.addY) {
          flagsToAdd += "y";
        }
        if (flagsToAdd) {
          flags = clipDuplicates(flags + flagsToAdd);
        }
        if (!options.isInternalOnly) {
          if (xData.source !== void 0) {
            xregexpSource = xData.source;
          }
          if ((0, _flags["default"])(xData) != null) {
            xregexpFlags = flagsToAdd ? clipDuplicates((0, _flags["default"])(xData) + flagsToAdd) : (0, _flags["default"])(xData);
          }
        }
        regex = augment(new RegExp(options.source || regex.source, flags), hasNamedCapture(regex) ? (0, _slice["default"])(_context2 = xData.captureNames).call(_context2, 0) : null, xregexpSource, xregexpFlags, options.isInternalOnly);
        return regex;
      }
      function dec(hex2) {
        return (0, _parseInt2["default"])(hex2, 16);
      }
      function getContextualTokenSeparator(match, scope, flags) {
        var matchEndPos = match.index + match[0].length;
        var precedingChar = match.input[match.index - 1];
        var followingChar = match.input[matchEndPos];
        if (
          // No need to separate tokens if at the beginning or end of a group, before or after a
          // group, or before or after a `|`
          /^[()|]$/.test(precedingChar) || /^[()|]$/.test(followingChar) || // No need to separate tokens if at the beginning or end of the pattern
          match.index === 0 || matchEndPos === match.input.length || // No need to separate tokens if at the beginning of a noncapturing group or lookaround.
          // Looks only at the last 4 chars (at most) for perf when constructing long regexes.
          /\(\?(?:[:=!]|<[=!])$/.test(match.input.substring(match.index - 4, match.index)) || // Avoid separating tokens when the following token is a quantifier
          isQuantifierNext(match.input, matchEndPos, flags)
        ) {
          return "";
        }
        return "(?:)";
      }
      function getNativeFlags(regex) {
        return hasFlagsProp ? (0, _flags["default"])(regex) : (
          // Explicitly using `RegExp.prototype.toString` (rather than e.g. `String` or concatenation
          // with an empty string) allows this to continue working predictably when
          // `XRegExp.proptotype.toString` is overridden
          /\/([a-z]*)$/i.exec(RegExp.prototype.toString.call(regex))[1]
        );
      }
      function hasNamedCapture(regex) {
        return !!(regex[REGEX_DATA] && regex[REGEX_DATA].captureNames);
      }
      function hex(dec2) {
        return (0, _parseInt2["default"])(dec2, 10).toString(16);
      }
      function isQuantifierNext(pattern, pos, flags) {
        var inlineCommentPattern = "\\(\\?#[^)]*\\)";
        var lineCommentPattern = "#[^#\\n]*";
        var quantifierPattern = "[?*+]|{\\d+(?:,\\d*)?}";
        var regex = (0, _indexOf["default"])(flags).call(flags, "x") !== -1 ? (
          // Ignore any leading whitespace, line comments, and inline comments
          /^(?:\s|#[^#\n]*|\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/
        ) : (
          // Ignore any leading inline comments
          /^(?:\(\?#[^)]*\))*(?:[?*+]|{\d+(?:,\d*)?})/
        );
        return regex.test((0, _slice["default"])(pattern).call(pattern, pos));
      }
      function isType(value, type) {
        return Object.prototype.toString.call(value) === "[object ".concat(type, "]");
      }
      function nullThrows(value) {
        if (value == null) {
          throw new TypeError("Cannot convert null or undefined to object");
        }
        return value;
      }
      function pad4(str) {
        while (str.length < 4) {
          str = "0".concat(str);
        }
        return str;
      }
      function prepareFlags(pattern, flags) {
        if (clipDuplicates(flags) !== flags) {
          throw new SyntaxError("Invalid duplicate regex flag ".concat(flags));
        }
        pattern = pattern.replace(/^\(\?([\w$]+)\)/, function($0, $1) {
          if (/[dgy]/.test($1)) {
            throw new SyntaxError("Cannot use flags dgy in mode modifier ".concat($0));
          }
          flags = clipDuplicates(flags + $1);
          return "";
        });
        var _iterator = _createForOfIteratorHelper(flags), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var flag = _step.value;
            if (!registeredFlags[flag]) {
              throw new SyntaxError("Unknown regex flag ".concat(flag));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return {
          pattern,
          flags
        };
      }
      function prepareOptions(value) {
        var options = {};
        if (isType(value, "String")) {
          (0, _forEach["default"])(XRegExp).call(XRegExp, value, /[^\s,]+/, function(match) {
            options[match] = true;
          });
          return options;
        }
        return value;
      }
      function registerFlag(flag) {
        if (!/^[\w$]$/.test(flag)) {
          throw new Error("Flag must be a single character A-Za-z0-9_$");
        }
        registeredFlags[flag] = true;
      }
      function runTokens(pattern, flags, pos, scope, context) {
        var i = tokens.length;
        var leadChar = pattern[pos];
        var result = null;
        var match;
        var t;
        while (i--) {
          t = tokens[i];
          if (t.leadChar && t.leadChar !== leadChar || t.scope !== scope && t.scope !== "all" || t.flag && !((0, _indexOf["default"])(flags).call(flags, t.flag) !== -1)) {
            continue;
          }
          match = XRegExp.exec(pattern, t.regex, pos, "sticky");
          if (match) {
            result = {
              matchLength: match[0].length,
              output: t.handler.call(context, match, scope, flags),
              reparse: t.reparse
            };
            break;
          }
        }
        return result;
      }
      function setAstral(on) {
        features.astral = on;
      }
      function setNamespacing(on) {
        features.namespacing = on;
      }
      function XRegExp(pattern, flags) {
        if (XRegExp.isRegExp(pattern)) {
          if (flags !== void 0) {
            throw new TypeError("Cannot supply flags when copying a RegExp");
          }
          return copyRegex(pattern);
        }
        pattern = pattern === void 0 ? "" : String(pattern);
        flags = flags === void 0 ? "" : String(flags);
        if (XRegExp.isInstalled("astral") && !((0, _indexOf["default"])(flags).call(flags, "A") !== -1)) {
          flags += "A";
        }
        if (!patternCache[pattern]) {
          patternCache[pattern] = {};
        }
        if (!patternCache[pattern][flags]) {
          var context = {
            hasNamedCapture: false,
            captureNames: []
          };
          var scope = defaultScope;
          var output = "";
          var pos = 0;
          var result;
          var applied = prepareFlags(pattern, flags);
          var appliedPattern = applied.pattern;
          var appliedFlags = (0, _flags["default"])(applied);
          while (pos < appliedPattern.length) {
            do {
              result = runTokens(appliedPattern, appliedFlags, pos, scope, context);
              if (result && result.reparse) {
                appliedPattern = (0, _slice["default"])(appliedPattern).call(appliedPattern, 0, pos) + result.output + (0, _slice["default"])(appliedPattern).call(appliedPattern, pos + result.matchLength);
              }
            } while (result && result.reparse);
            if (result) {
              output += result.output;
              pos += result.matchLength || 1;
            } else {
              var _XRegExp$exec = XRegExp.exec(appliedPattern, nativeTokens[scope], pos, "sticky"), _XRegExp$exec2 = (0, _slicedToArray2["default"])(_XRegExp$exec, 1), token = _XRegExp$exec2[0];
              output += token;
              pos += token.length;
              if (token === "[" && scope === defaultScope) {
                scope = classScope;
              } else if (token === "]" && scope === classScope) {
                scope = defaultScope;
              }
            }
          }
          patternCache[pattern][flags] = {
            // Use basic cleanup to collapse repeated empty groups like `(?:)(?:)` to `(?:)`. Empty
            // groups are sometimes inserted during regex transpilation in order to keep tokens
            // separated. However, more than one empty group in a row is never needed.
            pattern: output.replace(/(?:\(\?:\))+/g, "(?:)"),
            // Strip all but native flags
            flags: appliedFlags.replace(nonnativeFlags, ""),
            // `context.captureNames` has an item for each capturing group, even if unnamed
            captures: context.hasNamedCapture ? context.captureNames : null
          };
        }
        var generated = patternCache[pattern][flags];
        return augment(new RegExp(generated.pattern, (0, _flags["default"])(generated)), generated.captures, pattern, flags);
      }
      XRegExp.prototype = /(?:)/;
      XRegExp.version = "5.1.2";
      XRegExp._clipDuplicates = clipDuplicates;
      XRegExp._hasNativeFlag = hasNativeFlag;
      XRegExp._dec = dec;
      XRegExp._hex = hex;
      XRegExp._pad4 = pad4;
      XRegExp.addToken = function(regex, handler, options) {
        options = options || {};
        var _options = options, optionalFlags = _options.optionalFlags;
        if (options.flag) {
          registerFlag(options.flag);
        }
        if (optionalFlags) {
          optionalFlags = optionalFlags.split("");
          var _iterator2 = _createForOfIteratorHelper(optionalFlags), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var flag = _step2.value;
              registerFlag(flag);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        tokens.push({
          regex: copyRegex(regex, {
            addG: true,
            addY: hasNativeY,
            isInternalOnly: true
          }),
          handler,
          scope: options.scope || defaultScope,
          flag: options.flag,
          reparse: options.reparse,
          leadChar: options.leadChar
        });
        XRegExp.cache.flush("patterns");
      };
      XRegExp.cache = function(pattern, flags) {
        if (!regexCache[pattern]) {
          regexCache[pattern] = {};
        }
        return regexCache[pattern][flags] || (regexCache[pattern][flags] = XRegExp(pattern, flags));
      };
      XRegExp.cache.flush = function(cacheName) {
        if (cacheName === "patterns") {
          patternCache = (0, _create["default"])(null);
        } else {
          regexCache = (0, _create["default"])(null);
        }
      };
      XRegExp.escape = function(str) {
        return String(nullThrows(str)).replace(/[\\\[\]{}()*+?.^$|]/g, "\\$&").replace(/[\s#\-,]/g, function(match) {
          return "\\u".concat(pad4(hex(match.charCodeAt(0))));
        });
      };
      XRegExp.exec = function(str, regex, pos, sticky) {
        var cacheKey = "g";
        var addY = false;
        var fakeY = false;
        var match;
        addY = hasNativeY && !!(sticky || regex.sticky && sticky !== false);
        if (addY) {
          cacheKey += "y";
        } else if (sticky) {
          fakeY = true;
          cacheKey += "FakeY";
        }
        regex[REGEX_DATA] = regex[REGEX_DATA] || {};
        var r2 = regex[REGEX_DATA][cacheKey] || (regex[REGEX_DATA][cacheKey] = copyRegex(regex, {
          addG: true,
          addY,
          source: fakeY ? "".concat(regex.source, "|()") : void 0,
          removeY: sticky === false,
          isInternalOnly: true
        }));
        pos = pos || 0;
        r2.lastIndex = pos;
        match = fixed.exec.call(r2, str);
        if (fakeY && match && match.pop() === "") {
          match = null;
        }
        if (regex.global) {
          regex.lastIndex = match ? r2.lastIndex : 0;
        }
        return match;
      };
      XRegExp.forEach = function(str, regex, callback) {
        var pos = 0;
        var i = -1;
        var match;
        while (match = XRegExp.exec(str, regex, pos)) {
          callback(match, ++i, str, regex);
          pos = match.index + (match[0].length || 1);
        }
      };
      XRegExp.globalize = function(regex) {
        return copyRegex(regex, {
          addG: true
        });
      };
      XRegExp.install = function(options) {
        options = prepareOptions(options);
        if (!features.astral && options.astral) {
          setAstral(true);
        }
        if (!features.namespacing && options.namespacing) {
          setNamespacing(true);
        }
      };
      XRegExp.isInstalled = function(feature) {
        return !!features[feature];
      };
      XRegExp.isRegExp = function(value) {
        return Object.prototype.toString.call(value) === "[object RegExp]";
      };
      XRegExp.match = function(str, regex, scope) {
        var global2 = regex.global && scope !== "one" || scope === "all";
        var cacheKey = (global2 ? "g" : "") + (regex.sticky ? "y" : "") || "noGY";
        regex[REGEX_DATA] = regex[REGEX_DATA] || {};
        var r2 = regex[REGEX_DATA][cacheKey] || (regex[REGEX_DATA][cacheKey] = copyRegex(regex, {
          addG: !!global2,
          removeG: scope === "one",
          isInternalOnly: true
        }));
        var result = String(nullThrows(str)).match(r2);
        if (regex.global) {
          regex.lastIndex = scope === "one" && result ? (
            // Can't use `r2.lastIndex` since `r2` is nonglobal in this case
            result.index + result[0].length
          ) : 0;
        }
        return global2 ? result || [] : result && result[0];
      };
      XRegExp.matchChain = function(str, chain) {
        return function recurseChain(values, level) {
          var item = chain[level].regex ? chain[level] : {
            regex: chain[level]
          };
          var matches = [];
          function addMatch(match) {
            if (item.backref) {
              var ERR_UNDEFINED_GROUP = "Backreference to undefined group: ".concat(item.backref);
              var isNamedBackref = isNaN(item.backref);
              if (isNamedBackref && XRegExp.isInstalled("namespacing")) {
                if (!(match.groups && item.backref in match.groups)) {
                  throw new ReferenceError(ERR_UNDEFINED_GROUP);
                }
              } else if (!match.hasOwnProperty(item.backref)) {
                throw new ReferenceError(ERR_UNDEFINED_GROUP);
              }
              var backrefValue = isNamedBackref && XRegExp.isInstalled("namespacing") ? match.groups[item.backref] : match[item.backref];
              matches.push(backrefValue || "");
            } else {
              matches.push(match[0]);
            }
          }
          var _iterator3 = _createForOfIteratorHelper(values), _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
              var value = _step3.value;
              (0, _forEach["default"])(XRegExp).call(XRegExp, value, item.regex, addMatch);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          return level === chain.length - 1 || !matches.length ? matches : recurseChain(matches, level + 1);
        }([str], 0);
      };
      XRegExp.replace = function(str, search, replacement, scope) {
        var isRegex = XRegExp.isRegExp(search);
        var global2 = search.global && scope !== "one" || scope === "all";
        var cacheKey = (global2 ? "g" : "") + (search.sticky ? "y" : "") || "noGY";
        var s2 = search;
        if (isRegex) {
          search[REGEX_DATA] = search[REGEX_DATA] || {};
          s2 = search[REGEX_DATA][cacheKey] || (search[REGEX_DATA][cacheKey] = copyRegex(search, {
            addG: !!global2,
            removeG: scope === "one",
            isInternalOnly: true
          }));
        } else if (global2) {
          s2 = new RegExp(XRegExp.escape(String(search)), "g");
        }
        var result = fixed.replace.call(nullThrows(str), s2, replacement);
        if (isRegex && search.global) {
          search.lastIndex = 0;
        }
        return result;
      };
      XRegExp.replaceEach = function(str, replacements) {
        var _iterator4 = _createForOfIteratorHelper(replacements), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var r = _step4.value;
            str = XRegExp.replace(str, r[0], r[1], r[2]);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        return str;
      };
      XRegExp.split = function(str, separator, limit) {
        return fixed.split.call(nullThrows(str), separator, limit);
      };
      XRegExp.test = function(str, regex, pos, sticky) {
        return !!XRegExp.exec(str, regex, pos, sticky);
      };
      XRegExp.uninstall = function(options) {
        options = prepareOptions(options);
        if (features.astral && options.astral) {
          setAstral(false);
        }
        if (features.namespacing && options.namespacing) {
          setNamespacing(false);
        }
      };
      XRegExp.union = function(patterns, flags, options) {
        options = options || {};
        var conjunction = options.conjunction || "or";
        var numCaptures = 0;
        var numPriorCaptures;
        var captureNames;
        function rewrite(match, paren, backref) {
          var name = captureNames[numCaptures - numPriorCaptures];
          if (paren) {
            ++numCaptures;
            if (name) {
              return "(?<".concat(name, ">");
            }
          } else if (backref) {
            return "\\".concat(+backref + numPriorCaptures);
          }
          return match;
        }
        if (!(isType(patterns, "Array") && patterns.length)) {
          throw new TypeError("Must provide a nonempty array of patterns to merge");
        }
        var parts = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g;
        var output = [];
        var _iterator5 = _createForOfIteratorHelper(patterns), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            var pattern = _step5.value;
            if (XRegExp.isRegExp(pattern)) {
              numPriorCaptures = numCaptures;
              captureNames = pattern[REGEX_DATA] && pattern[REGEX_DATA].captureNames || [];
              output.push(XRegExp(pattern.source).source.replace(parts, rewrite));
            } else {
              output.push(XRegExp.escape(pattern));
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        var separator = conjunction === "none" ? "" : "|";
        return XRegExp(output.join(separator), flags);
      };
      fixed.exec = function(str) {
        var origLastIndex = this.lastIndex;
        var match = RegExp.prototype.exec.apply(this, arguments);
        if (match) {
          if (!correctExecNpcg && match.length > 1 && (0, _indexOf["default"])(match).call(match, "") !== -1) {
            var _context3;
            var r2 = copyRegex(this, {
              removeG: true,
              isInternalOnly: true
            });
            (0, _slice["default"])(_context3 = String(str)).call(_context3, match.index).replace(r2, function() {
              var len = arguments.length;
              for (var i2 = 1; i2 < len - 2; ++i2) {
                if ((i2 < 0 || arguments.length <= i2 ? void 0 : arguments[i2]) === void 0) {
                  match[i2] = void 0;
                }
              }
            });
          }
          if (this[REGEX_DATA] && this[REGEX_DATA].captureNames) {
            var groupsObject = match;
            if (XRegExp.isInstalled("namespacing")) {
              match.groups = (0, _create["default"])(null);
              groupsObject = match.groups;
            }
            for (var i = 1; i < match.length; ++i) {
              var name = this[REGEX_DATA].captureNames[i - 1];
              if (name) {
                groupsObject[name] = match[i];
              }
            }
          } else if (!match.groups && XRegExp.isInstalled("namespacing")) {
            match.groups = void 0;
          }
          if (this.global && !match[0].length && this.lastIndex > match.index) {
            this.lastIndex = match.index;
          }
        }
        if (!this.global) {
          this.lastIndex = origLastIndex;
        }
        return match;
      };
      fixed.test = function(str) {
        return !!fixed.exec.call(this, str);
      };
      fixed.match = function(regex) {
        if (!XRegExp.isRegExp(regex)) {
          regex = new RegExp(regex);
        } else if (regex.global) {
          var result = String.prototype.match.apply(this, arguments);
          regex.lastIndex = 0;
          return result;
        }
        return fixed.exec.call(regex, nullThrows(this));
      };
      fixed.replace = function(search, replacement) {
        var isRegex = XRegExp.isRegExp(search);
        var origLastIndex;
        var captureNames;
        var result;
        if (isRegex) {
          if (search[REGEX_DATA]) {
            captureNames = search[REGEX_DATA].captureNames;
          }
          origLastIndex = search.lastIndex;
        } else {
          search += "";
        }
        if (isType(replacement, "Function")) {
          result = String(this).replace(search, function() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            if (captureNames) {
              var groupsObject;
              if (XRegExp.isInstalled("namespacing")) {
                groupsObject = (0, _create["default"])(null);
                args.push(groupsObject);
              } else {
                args[0] = new String(args[0]);
                groupsObject = args[0];
              }
              for (var i = 0; i < captureNames.length; ++i) {
                if (captureNames[i]) {
                  groupsObject[captureNames[i]] = args[i + 1];
                }
              }
            }
            return replacement.apply(void 0, args);
          });
        } else {
          result = String(nullThrows(this)).replace(search, function() {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return String(replacement).replace(replacementToken, replacer);
            function replacer($0, bracketed, angled, dollarToken) {
              bracketed = bracketed || angled;
              var numNonCaptureArgs = isType(args[args.length - 1], "Object") ? 4 : 3;
              var numCaptures = args.length - numNonCaptureArgs;
              if (bracketed) {
                if (/^\d+$/.test(bracketed)) {
                  var _n = +bracketed;
                  if (_n <= numCaptures) {
                    return args[_n] || "";
                  }
                }
                var n = captureNames ? (0, _indexOf["default"])(captureNames).call(captureNames, bracketed) : -1;
                if (n < 0) {
                  throw new SyntaxError("Backreference to undefined group ".concat($0));
                }
                return args[n + 1] || "";
              }
              if (dollarToken === "" || dollarToken === " ") {
                throw new SyntaxError("Invalid token ".concat($0));
              }
              if (dollarToken === "&" || +dollarToken === 0) {
                return args[0];
              }
              if (dollarToken === "$") {
                return "$";
              }
              if (dollarToken === "`") {
                var _context4;
                return (0, _slice["default"])(_context4 = args[args.length - 1]).call(_context4, 0, args[args.length - 2]);
              }
              if (dollarToken === "'") {
                var _context5;
                return (0, _slice["default"])(_context5 = args[args.length - 1]).call(_context5, args[args.length - 2] + args[0].length);
              }
              dollarToken = +dollarToken;
              if (!isNaN(dollarToken)) {
                if (dollarToken > numCaptures) {
                  throw new SyntaxError("Backreference to undefined group ".concat($0));
                }
                return args[dollarToken] || "";
              }
              throw new SyntaxError("Invalid token ".concat($0));
            }
          });
        }
        if (isRegex) {
          if (search.global) {
            search.lastIndex = 0;
          } else {
            search.lastIndex = origLastIndex;
          }
        }
        return result;
      };
      fixed.split = function(separator, limit) {
        if (!XRegExp.isRegExp(separator)) {
          return String.prototype.split.apply(this, arguments);
        }
        var str = String(this);
        var output = [];
        var origLastIndex = separator.lastIndex;
        var lastLastIndex = 0;
        var lastLength;
        limit = (limit === void 0 ? -1 : limit) >>> 0;
        (0, _forEach["default"])(XRegExp).call(XRegExp, str, separator, function(match) {
          if (match.index + match[0].length > lastLastIndex) {
            output.push((0, _slice["default"])(str).call(str, lastLastIndex, match.index));
            if (match.length > 1 && match.index < str.length) {
              Array.prototype.push.apply(output, (0, _slice["default"])(match).call(match, 1));
            }
            lastLength = match[0].length;
            lastLastIndex = match.index + lastLength;
          }
        });
        if (lastLastIndex === str.length) {
          if (!separator.test("") || lastLength) {
            output.push("");
          }
        } else {
          output.push((0, _slice["default"])(str).call(str, lastLastIndex));
        }
        separator.lastIndex = origLastIndex;
        return output.length > limit ? (0, _slice["default"])(output).call(output, 0, limit) : output;
      };
      XRegExp.addToken(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4}|{[\dA-Fa-f]+})|x(?![\dA-Fa-f]{2}))/, function(match, scope) {
        if (match[1] === "B" && scope === defaultScope) {
          return match[0];
        }
        throw new SyntaxError("Invalid escape ".concat(match[0]));
      }, {
        scope: "all",
        leadChar: "\\"
      });
      XRegExp.addToken(/\\u{([\dA-Fa-f]+)}/, function(match, scope, flags) {
        var code = dec(match[1]);
        if (code > 1114111) {
          throw new SyntaxError("Invalid Unicode code point ".concat(match[0]));
        }
        if (code <= 65535) {
          return "\\u".concat(pad4(hex(code)));
        }
        if (hasNativeU && (0, _indexOf["default"])(flags).call(flags, "u") !== -1) {
          return match[0];
        }
        throw new SyntaxError("Cannot use Unicode code point above \\u{FFFF} without flag u");
      }, {
        scope: "all",
        leadChar: "\\"
      });
      XRegExp.addToken(/\(\?#[^)]*\)/, getContextualTokenSeparator, {
        leadChar: "("
      });
      XRegExp.addToken(/\s+|#[^\n]*\n?/, getContextualTokenSeparator, {
        flag: "x"
      });
      if (!hasNativeS) {
        XRegExp.addToken(/\./, function() {
          return "[\\s\\S]";
        }, {
          flag: "s",
          leadChar: "."
        });
      }
      XRegExp.addToken(/\\k<([^>]+)>/, function(match) {
        var _context6, _context7;
        var index = isNaN(match[1]) ? (0, _indexOf["default"])(_context6 = this.captureNames).call(_context6, match[1]) + 1 : +match[1];
        var endIndex = match.index + match[0].length;
        if (!index || index > this.captureNames.length) {
          throw new SyntaxError("Backreference to undefined group ".concat(match[0]));
        }
        return (0, _concat["default"])(_context7 = "\\".concat(index)).call(_context7, endIndex === match.input.length || isNaN(match.input[endIndex]) ? "" : "(?:)");
      }, {
        leadChar: "\\"
      });
      XRegExp.addToken(/\\(\d+)/, function(match, scope) {
        if (!(scope === defaultScope && /^[1-9]/.test(match[1]) && +match[1] <= this.captureNames.length) && match[1] !== "0") {
          throw new SyntaxError("Cannot use octal escape or backreference to undefined group ".concat(match[0]));
        }
        return match[0];
      }, {
        scope: "all",
        leadChar: "\\"
      });
      XRegExp.addToken(/\(\?P?<((?:[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u0870-\u0887\u0889-\u088E\u0897-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3C-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C5D\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDD\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1-\u0CF3\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECE\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1715\u171F-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B4C\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF65-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDD40-\uDD65\uDD69-\uDD6D\uDD6F-\uDD85\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDEC2-\uDEC4\uDEFC-\uDF1C\uDF27\uDF30-\uDF50\uDF70-\uDF85\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC75\uDC7F-\uDCBA\uDCC2\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E-\uDE41\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7-\uDFC0\uDFC2\uDFC5\uDFC7-\uDFCA\uDFCC-\uDFD3\uDFE1\uDFE2]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDED0-\uDEE3\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39\uDF40-\uDF46]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0\uDFF0-\uDFF9]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDF00-\uDF10\uDF12-\uDF3A\uDF3E-\uDF42\uDF50-\uDF5A\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC40-\uDC55\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD39]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDD70-\uDD79\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD833[\uDCF0-\uDCF9\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC30-\uDC6D\uDC8F\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAE\uDEC0-\uDEF9]|\uD839[\uDCD0-\uDCF9\uDDD0-\uDDFA\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF]|\uDB40[\uDD00-\uDDEF])*)>/, function(match) {
        var _context8;
        if (!XRegExp.isInstalled("namespacing") && (match[1] === "length" || match[1] === "__proto__")) {
          throw new SyntaxError("Cannot use reserved word as capture name ".concat(match[0]));
        }
        if ((0, _indexOf["default"])(_context8 = this.captureNames).call(_context8, match[1]) !== -1) {
          throw new SyntaxError("Cannot use same name for multiple groups ".concat(match[0]));
        }
        this.captureNames.push(match[1]);
        this.hasNamedCapture = true;
        return "(";
      }, {
        leadChar: "("
      });
      XRegExp.addToken(/\((?!\?)/, function(match, scope, flags) {
        if ((0, _indexOf["default"])(flags).call(flags, "n") !== -1) {
          return "(?:";
        }
        this.captureNames.push(null);
        return "(";
      }, {
        optionalFlags: "n",
        leadChar: "("
      });
      var _default = exports["default"] = XRegExp;
      module.exports = exports.default;
    }
  });

  // node_modules/core-js-pure/internals/array-reduce.js
  var require_array_reduce = __commonJS({
    "node_modules/core-js-pure/internals/array-reduce.js"(exports, module) {
      "use strict";
      var aCallable = require_a_callable();
      var toObject = require_to_object();
      var IndexedObject = require_indexed_object();
      var lengthOfArrayLike = require_length_of_array_like();
      var $TypeError = TypeError;
      var REDUCE_EMPTY = "Reduce of empty array with no initial value";
      var createMethod = function(IS_RIGHT) {
        return function(that, callbackfn, argumentsLength, memo) {
          var O2 = toObject(that);
          var self2 = IndexedObject(O2);
          var length = lengthOfArrayLike(O2);
          aCallable(callbackfn);
          if (length === 0 && argumentsLength < 2) throw new $TypeError(REDUCE_EMPTY);
          var index = IS_RIGHT ? length - 1 : 0;
          var i = IS_RIGHT ? -1 : 1;
          if (argumentsLength < 2) while (true) {
            if (index in self2) {
              memo = self2[index];
              index += i;
              break;
            }
            index += i;
            if (IS_RIGHT ? index < 0 : length <= index) {
              throw new $TypeError(REDUCE_EMPTY);
            }
          }
          for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self2) {
            memo = callbackfn(memo, self2[index], index, O2);
          }
          return memo;
        };
      };
      module.exports = {
        // `Array.prototype.reduce` method
        // https://tc39.es/ecma262/#sec-array.prototype.reduce
        left: createMethod(false),
        // `Array.prototype.reduceRight` method
        // https://tc39.es/ecma262/#sec-array.prototype.reduceright
        right: createMethod(true)
      };
    }
  });

  // node_modules/core-js-pure/internals/environment.js
  var require_environment = __commonJS({
    "node_modules/core-js-pure/internals/environment.js"(exports, module) {
      "use strict";
      var globalThis2 = require_global_this();
      var userAgent = require_environment_user_agent();
      var classof = require_classof_raw();
      var userAgentStartsWith = function(string) {
        return userAgent.slice(0, string.length) === string;
      };
      module.exports = function() {
        if (userAgentStartsWith("Bun/")) return "BUN";
        if (userAgentStartsWith("Cloudflare-Workers")) return "CLOUDFLARE";
        if (userAgentStartsWith("Deno/")) return "DENO";
        if (userAgentStartsWith("Node.js/")) return "NODE";
        if (globalThis2.Bun && typeof Bun.version == "string") return "BUN";
        if (globalThis2.Deno && typeof Deno.version == "object") return "DENO";
        if (classof(globalThis2.process) === "process") return "NODE";
        if (globalThis2.window && globalThis2.document) return "BROWSER";
        return "REST";
      }();
    }
  });

  // node_modules/core-js-pure/internals/environment-is-node.js
  var require_environment_is_node = __commonJS({
    "node_modules/core-js-pure/internals/environment-is-node.js"(exports, module) {
      "use strict";
      var ENVIRONMENT = require_environment();
      module.exports = ENVIRONMENT === "NODE";
    }
  });

  // node_modules/core-js-pure/modules/es.array.reduce.js
  var require_es_array_reduce = __commonJS({
    "node_modules/core-js-pure/modules/es.array.reduce.js"() {
      "use strict";
      var $2 = require_export();
      var $reduce = require_array_reduce().left;
      var arrayMethodIsStrict = require_array_method_is_strict();
      var CHROME_VERSION = require_environment_v8_version();
      var IS_NODE = require_environment_is_node();
      var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;
      var FORCED = CHROME_BUG || !arrayMethodIsStrict("reduce");
      $2({ target: "Array", proto: true, forced: FORCED }, {
        reduce: function reduce(callbackfn) {
          var length = arguments.length;
          return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js-pure/es/array/virtual/reduce.js
  var require_reduce = __commonJS({
    "node_modules/core-js-pure/es/array/virtual/reduce.js"(exports, module) {
      "use strict";
      require_es_array_reduce();
      var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
      module.exports = getBuiltInPrototypeMethod("Array", "reduce");
    }
  });

  // node_modules/core-js-pure/es/instance/reduce.js
  var require_reduce2 = __commonJS({
    "node_modules/core-js-pure/es/instance/reduce.js"(exports, module) {
      "use strict";
      var isPrototypeOf = require_object_is_prototype_of();
      var method = require_reduce();
      var ArrayPrototype = Array.prototype;
      module.exports = function(it) {
        var own = it.reduce;
        return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.reduce ? method : own;
      };
    }
  });

  // node_modules/core-js-pure/stable/instance/reduce.js
  var require_reduce3 = __commonJS({
    "node_modules/core-js-pure/stable/instance/reduce.js"(exports, module) {
      "use strict";
      var parent = require_reduce2();
      module.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js
  var require_reduce4 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/instance/reduce.js"(exports, module) {
      "use strict";
      module.exports = require_reduce3();
    }
  });

  // node_modules/core-js-pure/modules/es.array.map.js
  var require_es_array_map = __commonJS({
    "node_modules/core-js-pure/modules/es.array.map.js"() {
      "use strict";
      var $2 = require_export();
      var $map = require_array_iteration().map;
      var arrayMethodHasSpeciesSupport = require_array_method_has_species_support();
      var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport("map");
      $2({ target: "Array", proto: true, forced: !HAS_SPECIES_SUPPORT }, {
        map: function map(callbackfn) {
          return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
      });
    }
  });

  // node_modules/core-js-pure/es/array/virtual/map.js
  var require_map = __commonJS({
    "node_modules/core-js-pure/es/array/virtual/map.js"(exports, module) {
      "use strict";
      require_es_array_map();
      var getBuiltInPrototypeMethod = require_get_built_in_prototype_method();
      module.exports = getBuiltInPrototypeMethod("Array", "map");
    }
  });

  // node_modules/core-js-pure/es/instance/map.js
  var require_map2 = __commonJS({
    "node_modules/core-js-pure/es/instance/map.js"(exports, module) {
      "use strict";
      var isPrototypeOf = require_object_is_prototype_of();
      var method = require_map();
      var ArrayPrototype = Array.prototype;
      module.exports = function(it) {
        var own = it.map;
        return it === ArrayPrototype || isPrototypeOf(ArrayPrototype, it) && own === ArrayPrototype.map ? method : own;
      };
    }
  });

  // node_modules/core-js-pure/stable/instance/map.js
  var require_map3 = __commonJS({
    "node_modules/core-js-pure/stable/instance/map.js"(exports, module) {
      "use strict";
      var parent = require_map2();
      module.exports = parent;
    }
  });

  // node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js
  var require_map4 = __commonJS({
    "node_modules/@babel/runtime-corejs3/core-js-stable/instance/map.js"(exports, module) {
      "use strict";
      module.exports = require_map3();
    }
  });

  // node_modules/xregexp/lib/addons/build.js
  var require_build = __commonJS({
    "node_modules/xregexp/lib/addons/build.js"(exports, module) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      var _interopRequireDefault = require_interopRequireDefault();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _reduce = _interopRequireDefault(require_reduce4());
      var _map = _interopRequireDefault(require_map4());
      var _indexOf = _interopRequireDefault(require_index_of4());
      var _concat = _interopRequireDefault(require_concat4());
      var _default = exports["default"] = function _default2(XRegExp) {
        var REGEX_DATA = "xregexp";
        var subParts = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*\]/g;
        var parts = XRegExp.union([/\({{([\w$]+)}}\)|{{([\w$]+)}}/, subParts], "g", {
          conjunction: "or"
        });
        function deanchor(pattern) {
          var leadingAnchor = /^(?:\(\?:\))*\^/;
          var trailingAnchor = /\$(?:\(\?:\))*$/;
          if (leadingAnchor.test(pattern) && trailingAnchor.test(pattern) && // Ensure that the trailing `$` isn't escaped
          trailingAnchor.test(pattern.replace(/\\[\s\S]/g, ""))) {
            return pattern.replace(leadingAnchor, "").replace(trailingAnchor, "");
          }
          return pattern;
        }
        function asXRegExp(value, addFlagX) {
          var flags = addFlagX ? "x" : "";
          return XRegExp.isRegExp(value) ? value[REGEX_DATA] && value[REGEX_DATA].captureNames ? (
            // Don't recompile, to preserve capture names
            value
          ) : (
            // Recompile as XRegExp
            XRegExp(value.source, flags)
          ) : (
            // Compile string as XRegExp
            XRegExp(value, flags)
          );
        }
        function interpolate(substitution) {
          return substitution instanceof RegExp ? substitution : XRegExp.escape(substitution);
        }
        function reduceToSubpatternsObject(subpatterns, interpolated, subpatternIndex) {
          subpatterns["subpattern".concat(subpatternIndex)] = interpolated;
          return subpatterns;
        }
        function embedSubpatternAfter(raw, subpatternIndex, rawLiterals) {
          var hasSubpattern = subpatternIndex < rawLiterals.length - 1;
          return raw + (hasSubpattern ? "{{subpattern".concat(subpatternIndex, "}}") : "");
        }
        XRegExp.tag = function(flags) {
          return function(literals) {
            var _context, _context2;
            for (var _len = arguments.length, substitutions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              substitutions[_key - 1] = arguments[_key];
            }
            var subpatterns = (0, _reduce["default"])(_context = (0, _map["default"])(substitutions).call(substitutions, interpolate)).call(_context, reduceToSubpatternsObject, {});
            var pattern = (0, _map["default"])(_context2 = literals.raw).call(_context2, embedSubpatternAfter).join("");
            return XRegExp.build(pattern, subpatterns, flags);
          };
        };
        XRegExp.build = function(pattern, subs, flags) {
          flags = flags || "";
          var addFlagX = (0, _indexOf["default"])(flags).call(flags, "x") !== -1;
          var inlineFlags = /^\(\?([\w$]+)\)/.exec(pattern);
          if (inlineFlags) {
            flags = XRegExp._clipDuplicates(flags + inlineFlags[1]);
          }
          var data = {};
          for (var p2 in subs) {
            if (subs.hasOwnProperty(p2)) {
              var sub = asXRegExp(subs[p2], addFlagX);
              data[p2] = {
                // Deanchoring allows embedding independently useful anchored regexes. If you
                // really need to keep your anchors, double them (i.e., `^^...$$`).
                pattern: deanchor(sub.source),
                names: sub[REGEX_DATA].captureNames || []
              };
            }
          }
          var patternAsRegex = asXRegExp(pattern, addFlagX);
          var numCaps = 0;
          var numPriorCaps;
          var numOuterCaps = 0;
          var outerCapsMap = [0];
          var outerCapNames = patternAsRegex[REGEX_DATA].captureNames || [];
          var output = patternAsRegex.source.replace(parts, function($0, $1, $2, $3, $4) {
            var subName = $1 || $2;
            var capName;
            var intro;
            var localCapIndex;
            if (subName) {
              var _context3;
              if (!data.hasOwnProperty(subName)) {
                throw new ReferenceError("Undefined property ".concat($0));
              }
              if ($1) {
                capName = outerCapNames[numOuterCaps];
                outerCapsMap[++numOuterCaps] = ++numCaps;
                intro = "(?<".concat(capName || subName, ">");
              } else {
                intro = "(?:";
              }
              numPriorCaps = numCaps;
              var rewrittenSubpattern = data[subName].pattern.replace(subParts, function(match, paren, backref) {
                if (paren) {
                  capName = data[subName].names[numCaps - numPriorCaps];
                  ++numCaps;
                  if (capName) {
                    return "(?<".concat(capName, ">");
                  }
                } else if (backref) {
                  localCapIndex = +backref - 1;
                  return data[subName].names[localCapIndex] ? (
                    // Need to preserve the backreference name in case using flag `n`
                    "\\k<".concat(data[subName].names[localCapIndex], ">")
                  ) : "\\".concat(+backref + numPriorCaps);
                }
                return match;
              });
              return (0, _concat["default"])(_context3 = "".concat(intro)).call(_context3, rewrittenSubpattern, ")");
            }
            if ($3) {
              capName = outerCapNames[numOuterCaps];
              outerCapsMap[++numOuterCaps] = ++numCaps;
              if (capName) {
                return "(?<".concat(capName, ">");
              }
            } else if ($4) {
              localCapIndex = +$4 - 1;
              return outerCapNames[localCapIndex] ? (
                // Need to preserve the backreference name in case using flag `n`
                "\\k<".concat(outerCapNames[localCapIndex], ">")
              ) : "\\".concat(outerCapsMap[+$4]);
            }
            return $0;
          });
          return XRegExp(output, flags);
        };
      };
      module.exports = exports.default;
    }
  });

  // node_modules/xregexp/lib/addons/matchrecursive.js
  var require_matchrecursive = __commonJS({
    "node_modules/xregexp/lib/addons/matchrecursive.js"(exports, module) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      var _interopRequireDefault = require_interopRequireDefault();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _indexOf = _interopRequireDefault(require_index_of4());
      var _concat = _interopRequireDefault(require_concat4());
      var _slice = _interopRequireDefault(require_slice4());
      var _default = exports["default"] = function _default2(XRegExp) {
        function row(name, value, start, end) {
          return {
            name,
            value,
            start,
            end
          };
        }
        XRegExp.matchRecursive = function(str, left, right, flags, options) {
          flags = flags || "";
          options = options || {};
          var global2 = (0, _indexOf["default"])(flags).call(flags, "g") !== -1;
          var sticky = (0, _indexOf["default"])(flags).call(flags, "y") !== -1;
          var basicFlags = flags.replace(/y/g, "");
          left = XRegExp(left, basicFlags);
          right = XRegExp(right, basicFlags);
          var esc;
          var _options = options, escapeChar = _options.escapeChar;
          if (escapeChar) {
            var _context, _context2;
            if (escapeChar.length > 1) {
              throw new Error("Cannot use more than one escape character");
            }
            escapeChar = XRegExp.escape(escapeChar);
            esc = new RegExp(
              (0, _concat["default"])(_context = (0, _concat["default"])(_context2 = "(?:".concat(escapeChar, "[\\S\\s]|(?:(?!")).call(
                _context2,
                // Using `XRegExp.union` safely rewrites backreferences in `left` and `right`.
                // Intentionally not passing `basicFlags` to `XRegExp.union` since any syntax
                // transformation resulting from those flags was already applied to `left` and
                // `right` when they were passed through the XRegExp constructor above.
                XRegExp.union([left, right], "", {
                  conjunction: "or"
                }).source,
                ")[^"
              )).call(_context, escapeChar, "])+)+"),
              // Flags `dgy` not needed here
              flags.replace(XRegExp._hasNativeFlag("s") ? /[^imsu]/g : /[^imu]/g, "")
            );
          }
          var openTokens = 0;
          var delimStart = 0;
          var delimEnd = 0;
          var lastOuterEnd = 0;
          var outerStart;
          var innerStart;
          var leftMatch;
          var rightMatch;
          var vN = options.valueNames;
          var output = [];
          while (true) {
            if (escapeChar) {
              delimEnd += (XRegExp.exec(str, esc, delimEnd, "sticky") || [""])[0].length;
            }
            leftMatch = XRegExp.exec(str, left, delimEnd);
            rightMatch = XRegExp.exec(str, right, delimEnd);
            if (leftMatch && rightMatch) {
              if (leftMatch.index <= rightMatch.index) {
                rightMatch = null;
              } else {
                leftMatch = null;
              }
            }
            if (leftMatch || rightMatch) {
              delimStart = (leftMatch || rightMatch).index;
              delimEnd = delimStart + (leftMatch || rightMatch)[0].length;
            } else if (!openTokens) {
              break;
            }
            if (sticky && !openTokens && delimStart > lastOuterEnd) {
              break;
            }
            if (leftMatch) {
              if (!openTokens) {
                outerStart = delimStart;
                innerStart = delimEnd;
              }
              openTokens += 1;
            } else if (rightMatch && openTokens) {
              openTokens -= 1;
              if (!openTokens) {
                if (vN) {
                  if (vN[0] && outerStart > lastOuterEnd) {
                    output.push(row(vN[0], (0, _slice["default"])(str).call(str, lastOuterEnd, outerStart), lastOuterEnd, outerStart));
                  }
                  if (vN[1]) {
                    output.push(row(vN[1], (0, _slice["default"])(str).call(str, outerStart, innerStart), outerStart, innerStart));
                  }
                  if (vN[2]) {
                    output.push(row(vN[2], (0, _slice["default"])(str).call(str, innerStart, delimStart), innerStart, delimStart));
                  }
                  if (vN[3]) {
                    output.push(row(vN[3], (0, _slice["default"])(str).call(str, delimStart, delimEnd), delimStart, delimEnd));
                  }
                } else {
                  output.push((0, _slice["default"])(str).call(str, innerStart, delimStart));
                }
                lastOuterEnd = delimEnd;
                if (!global2) {
                  break;
                }
              }
            } else {
              var unbalanced = options.unbalanced || "error";
              if (unbalanced === "skip" || unbalanced === "skip-lazy") {
                if (rightMatch) {
                  rightMatch = null;
                } else {
                  if (unbalanced === "skip") {
                    var outerStartDelimLength = XRegExp.exec(str, left, outerStart, "sticky")[0].length;
                    delimEnd = outerStart + (outerStartDelimLength || 1);
                  } else {
                    delimEnd = outerStart + 1;
                  }
                  openTokens = 0;
                }
              } else if (unbalanced === "error") {
                var _context3;
                var delimSide = rightMatch ? "right" : "left";
                var errorPos = rightMatch ? delimStart : outerStart;
                throw new Error((0, _concat["default"])(_context3 = "Unbalanced ".concat(delimSide, " delimiter found in string at position ")).call(_context3, errorPos));
              } else {
                throw new Error("Unsupported value for unbalanced: ".concat(unbalanced));
              }
            }
            if (delimStart === delimEnd) {
              delimEnd += 1;
            }
          }
          if (global2 && output.length > 0 && !sticky && vN && vN[0] && str.length > lastOuterEnd) {
            output.push(row(vN[0], (0, _slice["default"])(str).call(str, lastOuterEnd), lastOuterEnd, str.length));
          }
          return output;
        };
      };
      module.exports = exports.default;
    }
  });

  // node_modules/xregexp/lib/addons/unicode-base.js
  var require_unicode_base = __commonJS({
    "node_modules/xregexp/lib/addons/unicode-base.js"(exports, module) {
      "use strict";
      var _sliceInstanceProperty = require_slice4();
      var _Array$from = require_from3();
      var _Symbol = require_symbol3();
      var _getIteratorMethod = require_get_iterator_method7();
      var _Array$isArray = require_is_array4();
      var _Object$defineProperty = require_define_property3();
      var _interopRequireDefault = require_interopRequireDefault();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _slicedToArray2 = _interopRequireDefault(require_slicedToArray());
      var _forEach = _interopRequireDefault(require_for_each4());
      var _concat = _interopRequireDefault(require_concat4());
      var _indexOf = _interopRequireDefault(require_index_of4());
      function _createForOfIteratorHelper(r, e) {
        var t = "undefined" != typeof _Symbol && _getIteratorMethod(r) || r["@@iterator"];
        if (!t) {
          if (_Array$isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
            t && (r = t);
            var _n = 0, F2 = function F3() {
            };
            return { s: F2, n: function n() {
              return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
            }, e: function e2(r2) {
              throw r2;
            }, f: F2 };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o, a2 = true, u2 = false;
        return { s: function s2() {
          t = t.call(r);
        }, n: function n() {
          var r2 = t.next();
          return a2 = r2.done, r2;
        }, e: function e2(r2) {
          u2 = true, o = r2;
        }, f: function f() {
          try {
            a2 || null == t["return"] || t["return"]();
          } finally {
            if (u2) throw o;
          }
        } };
      }
      function _unsupportedIterableToArray(r, a2) {
        if (r) {
          var _context4;
          if ("string" == typeof r) return _arrayLikeToArray(r, a2);
          var t = _sliceInstanceProperty(_context4 = {}.toString.call(r)).call(_context4, 8, -1);
          return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? _Array$from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a2) : void 0;
        }
      }
      function _arrayLikeToArray(r, a2) {
        (null == a2 || a2 > r.length) && (a2 = r.length);
        for (var e = 0, n = Array(a2); e < a2; e++) n[e] = r[e];
        return n;
      }
      var _default = exports["default"] = function _default2(XRegExp) {
        var unicode = {};
        var unicodeTypes = {};
        var dec = XRegExp._dec;
        var hex = XRegExp._hex;
        var pad4 = XRegExp._pad4;
        function normalize(name) {
          return name.replace(/[- _]+/g, "").toLowerCase();
        }
        function charCode(chr) {
          var esc = /^\\[xu](.+)/.exec(chr);
          return esc ? dec(esc[1]) : chr.charCodeAt(chr[0] === "\\" ? 1 : 0);
        }
        function invertBmp(range) {
          var output = "";
          var lastEnd = -1;
          (0, _forEach["default"])(XRegExp).call(XRegExp, range, /(\\x..|\\u....|\\?[\s\S])(?:-(\\x..|\\u....|\\?[\s\S]))?/, function(m2) {
            var start = charCode(m2[1]);
            if (start > lastEnd + 1) {
              output += "\\u".concat(pad4(hex(lastEnd + 1)));
              if (start > lastEnd + 2) {
                output += "-\\u".concat(pad4(hex(start - 1)));
              }
            }
            lastEnd = charCode(m2[2] || m2[1]);
          });
          if (lastEnd < 65535) {
            output += "\\u".concat(pad4(hex(lastEnd + 1)));
            if (lastEnd < 65534) {
              output += "-\\uFFFF";
            }
          }
          return output;
        }
        function cacheInvertedBmp(slug) {
          var prop = "b!";
          return unicode[slug][prop] || (unicode[slug][prop] = invertBmp(unicode[slug].bmp));
        }
        function buildAstral(slug, isNegated) {
          var item = unicode[slug];
          var combined = "";
          if (item.bmp && !item.isBmpLast) {
            var _context;
            combined = (0, _concat["default"])(_context = "[".concat(item.bmp, "]")).call(_context, item.astral ? "|" : "");
          }
          if (item.astral) {
            combined += item.astral;
          }
          if (item.isBmpLast && item.bmp) {
            var _context2;
            combined += (0, _concat["default"])(_context2 = "".concat(item.astral ? "|" : "", "[")).call(_context2, item.bmp, "]");
          }
          return isNegated ? "(?:(?!".concat(combined, ")(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[\0-￿]))") : "(?:".concat(combined, ")");
        }
        function cacheAstral(slug, isNegated) {
          var prop = isNegated ? "a!" : "a=";
          return unicode[slug][prop] || (unicode[slug][prop] = buildAstral(slug, isNegated));
        }
        XRegExp.addToken(
          // Use `*` instead of `+` to avoid capturing `^` as the token name in `\p{^}`
          /\\([pP])(?:{(\^?)(?:(\w+)=)?([^}]*)}|([A-Za-z]))/,
          function(match, scope, flags) {
            var ERR_DOUBLE_NEG = "Invalid double negation ";
            var ERR_UNKNOWN_NAME = "Unknown Unicode token ";
            var ERR_UNKNOWN_REF = "Unicode token missing data ";
            var ERR_ASTRAL_ONLY = "Astral mode required for Unicode token ";
            var ERR_ASTRAL_IN_CLASS = "Astral mode does not support Unicode tokens within character classes";
            var _match = (0, _slicedToArray2["default"])(match, 6), fullToken = _match[0], pPrefix = _match[1], caretNegation = _match[2], typePrefix = _match[3], tokenName2 = _match[4], tokenSingleCharName = _match[5];
            var isNegated = pPrefix === "P" || !!caretNegation;
            var isAstralMode = (0, _indexOf["default"])(flags).call(flags, "A") !== -1;
            var slug = normalize(tokenSingleCharName || tokenName2);
            var item = unicode[slug];
            if (pPrefix === "P" && caretNegation) {
              throw new SyntaxError(ERR_DOUBLE_NEG + fullToken);
            }
            if (!unicode.hasOwnProperty(slug)) {
              throw new SyntaxError(ERR_UNKNOWN_NAME + fullToken);
            }
            if (typePrefix) {
              if (!(unicodeTypes[typePrefix] && unicodeTypes[typePrefix][slug])) {
                throw new SyntaxError(ERR_UNKNOWN_NAME + fullToken);
              }
            }
            if (item.inverseOf) {
              slug = normalize(item.inverseOf);
              if (!unicode.hasOwnProperty(slug)) {
                var _context3;
                throw new ReferenceError((0, _concat["default"])(_context3 = "".concat(ERR_UNKNOWN_REF + fullToken, " -> ")).call(_context3, item.inverseOf));
              }
              item = unicode[slug];
              isNegated = !isNegated;
            }
            if (!(item.bmp || isAstralMode)) {
              throw new SyntaxError(ERR_ASTRAL_ONLY + fullToken);
            }
            if (isAstralMode) {
              if (scope === "class") {
                throw new SyntaxError(ERR_ASTRAL_IN_CLASS);
              }
              return cacheAstral(slug, isNegated);
            }
            return scope === "class" ? isNegated ? cacheInvertedBmp(slug) : item.bmp : "".concat((isNegated ? "[^" : "[") + item.bmp, "]");
          },
          {
            scope: "all",
            optionalFlags: "A",
            leadChar: "\\"
          }
        );
        XRegExp.addUnicodeData = function(data, typePrefix) {
          var ERR_NO_NAME = "Unicode token requires name";
          var ERR_NO_DATA = "Unicode token has no character data ";
          if (typePrefix) {
            unicodeTypes[typePrefix] = {};
          }
          var _iterator = _createForOfIteratorHelper(data), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var item = _step.value;
              if (!item.name) {
                throw new Error(ERR_NO_NAME);
              }
              if (!(item.inverseOf || item.bmp || item.astral)) {
                throw new Error(ERR_NO_DATA + item.name);
              }
              var normalizedName = normalize(item.name);
              unicode[normalizedName] = item;
              if (typePrefix) {
                unicodeTypes[typePrefix][normalizedName] = true;
              }
              if (item.alias) {
                var normalizedAlias = normalize(item.alias);
                unicode[normalizedAlias] = item;
                if (typePrefix) {
                  unicodeTypes[typePrefix][normalizedAlias] = true;
                }
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          XRegExp.cache.flush("patterns");
        };
        XRegExp._getUnicodeProperty = function(name) {
          var slug = normalize(name);
          return unicode[slug];
        };
      };
      module.exports = exports.default;
    }
  });

  // node_modules/xregexp/tools/output/categories.js
  var require_categories = __commonJS({
    "node_modules/xregexp/tools/output/categories.js"(exports, module) {
      "use strict";
      module.exports = [
        {
          "name": "C",
          "alias": "Other",
          "isBmpLast": true,
          "bmp": "\0--­͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-؅؜۝܎܏݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࡯࢏-ࢗ࣢঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୔୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺఻౅౉౎-౔౗౛౜౞౟౤౥౰-౶಍಑಩಴಺಻೅೉೎-೔೗-೜೟೤೥೰ೳ-೿഍഑൅൉൐-൓൤൥඀඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅຋຤຦຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿᜖-᜞᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠎᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯᫏-᫿᭍-᭏᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏᳻-᳿἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿​-‏‪-‮⁠-⁯⁲⁳₏₝-₟⃁-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹞-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏㇤-㇯㈟꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ɤ-꟏꟒꟔Ꟛ-꟱꠭-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯꭬-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯃-﯒﶐﶑﷈-﷎﷐-﷯︚-︟﹓﹧﹬-﹯﹵﻽-＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￻￾￿",
          "astral": "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCBD\uDCC3-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA0-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDD73-\uDD7A\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]"
        },
        {
          "name": "Cc",
          "alias": "Control",
          "bmp": "\0--"
        },
        {
          "name": "Cf",
          "alias": "Format",
          "bmp": "­؀-؅؜۝܏࢐࢑࣢᠎​-‏‪-‮⁠-⁤⁦-⁯\uFEFF￹-￻",
          "astral": "\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]"
        },
        {
          "name": "Cn",
          "alias": "Unassigned",
          "bmp": "͸͹΀-΃΋΍΢԰՗՘֋֌֐׈-׏׫-׮׵-׿܎݋݌޲-޿߻߼࠮࠯࠿࡜࡝࡟࡫-࡯࢏࢒-ࢗ঄঍঎঑঒঩঱঳-঵঺঻৅৆৉৊৏-৖৘-৛৞৤৥৿਀਄਋-਎਑਒਩਱਴਷਺਻਽੃-੆੉੊੎-੐੒-੘੝੟-੥੷-઀઄઎઒઩઱઴઺઻૆૊૎૏૑-૟૤૥૲-૸଀଄଍଎଑଒଩଱଴଺଻୅୆୉୊୎-୔୘-୛୞୤୥୸-஁஄஋-஍஑஖-஘஛஝஠-஢஥-஧஫-஭஺-஽௃-௅௉௎௏௑-௖௘-௥௻-௿఍఑఩఺఻౅౉౎-౔౗౛౜౞౟౤౥౰-౶಍಑಩಴಺಻೅೉೎-೔೗-೜೟೤೥೰ೳ-೿഍഑൅൉൐-൓൤൥඀඄඗-඙඲඼඾඿෇-෉෋-෎෕෗෠-෥෰෱෵-฀฻-฾๜-຀຃຅຋຤຦຾຿໅໇໎໏໚໛໠-໿཈཭-཰྘྽࿍࿛-࿿჆჈-჌჎჏቉቎቏቗቙቞቟኉኎኏኱኶኷኿዁዆዇዗጑጖጗፛፜፽-፿᎚-᎟᏶᏷᏾᏿᚝-᚟᛹-᛿᜖-᜞᜷-᜿᝔-᝟᝭᝱᝴-᝿៞៟៪-៯៺-៿᠚-᠟᡹-᡿᢫-᢯᣶-᣿᤟᤬-᤯᤼-᤿᥁-᥃᥮᥯᥵-᥿᦬-᦯᧊-᧏᧛-᧝᨜᨝᩟᩽᩾᪊-᪏᪚-᪟᪮᪯᫏-᫿᭍-᭏᭿᯴-᯻᰸-᰺᱊-᱌Ᲊ-᲏᲻᲼᳈-᳏᳻-᳿἖἗἞἟὆὇὎὏὘὚὜὞὾὿᾵῅῔῕῜῰῱῵῿⁥⁲⁳₏₝-₟⃁-⃏⃱-⃿↌-↏␧-␿⑋-⑟⭴⭵⮖⳴-⳸⴦⴨-⴬⴮⴯⵨-⵮⵱-⵾⶗-⶟⶧⶯⶷⶿⷇⷏⷗⷟⹞-⹿⺚⻴-⻿⿖-⿯⿼-⿿぀゗゘㄀-㄄㄰㆏㇤-㇯㈟꒍-꒏꓇-꓏꘬-꘿꛸-꛿Ɤ-꟏꟒꟔Ꟛ-꟱꠭-꠯꠺-꠿꡸-꡿꣆-꣍꣚-꣟꥔-꥞꥽-꥿꧎꧚-꧝꧿꨷-꨿꩎꩏꩚꩛꫃-꫚꫷-꬀꬇꬈꬏꬐꬗-꬟꬧꬯꭬-꭯꯮꯯꯺-꯿힤-힯퟇-퟊퟼-퟿﩮﩯﫚-﫿﬇-﬒﬘-﬜﬷﬽﬿﭂﭅﯃-﯒﶐﶑﷈-﷎﷐-﷯︚-︟﹓﹧﹬-﹯﹵﻽﻾＀﾿-￁￈￉￐￑￘￙￝-￟￧￯-￸￾￿",
          "astral": "\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDCFF\uDD03-\uDD06\uDD34-\uDD36\uDD8F\uDD9D-\uDD9F\uDDA1-\uDDCF\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDFC4-\uDFC7\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6E\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFBB-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1E\uDD3A-\uDD3E\uDD40-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE49-\uDE4F\uDE59-\uDE5F\uDEA0-\uDEBF\uDEE7-\uDEEA\uDEF7-\uDEFF\uDF36-\uDF38\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDF98\uDF9D-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD28-\uDD2F\uDD3A-\uDE5F\uDE7F\uDEAA\uDEAE\uDEAF\uDEB2-\uDEFF\uDF28-\uDF2F\uDF5A-\uDF6F\uDF8A-\uDFAF\uDFCC-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC4E-\uDC51\uDC76-\uDC7E\uDCC3-\uDCCC\uDCCE\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD48-\uDD4F\uDD77-\uDD7F\uDDE0\uDDF5-\uDDFF\uDE12\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEAA-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC5C\uDC62-\uDC7F\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDDE-\uDDFF\uDE45-\uDE4F\uDE5A-\uDE5F\uDE6D-\uDE7F\uDEBA-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF47-\uDFFF]|\uD806[\uDC3C-\uDC9F\uDCF3-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD47-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE5-\uDDFF\uDE48-\uDE4F\uDEA3-\uDEAF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC46-\uDC4F\uDC6D-\uDC6F\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF9-\uDFAF\uDFB1-\uDFBF\uDFF2-\uDFFE]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F\uDC75-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80E-\uD810\uD812-\uD819\uD824-\uD82A\uD82D\uD82E\uD830-\uD832\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDB7F][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF3-\uDFFF]|\uD80D[\uDC2F\uDC39-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDE6D\uDEBF\uDECA-\uDECF\uDEEE\uDEEF\uDEF6-\uDEFF\uDF46-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE9B-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD23-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A\uDC9B\uDCA4-\uDFFF]|\uD833[\uDC00-\uDEFF\uDF2E\uDF2F\uDF47-\uDF4F\uDFC4-\uDFFF]|\uD834[\uDCF6-\uDCFF\uDD27\uDD28\uDDEB-\uDDFF\uDE46-\uDEDF\uDEF4-\uDEFF\uDF57-\uDF5F\uDF79-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]|\uD836[\uDE8C-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF1F-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD50-\uDE8F\uDEAF-\uDEBF\uDEFA-\uDEFE\uDF00-\uDFFF]|\uD839[\uDC00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDD5D\uDD60-\uDFFF]|\uD83B[\uDC00-\uDC70\uDCB5-\uDD00\uDD3E-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDEEF\uDEF2-\uDFFF]|\uD83C[\uDC2C-\uDC2F\uDC94-\uDC9F\uDCAF\uDCB0\uDCC0\uDCD0\uDCF6-\uDCFF\uDDAE-\uDDE5\uDE03-\uDE0F\uDE3C-\uDE3F\uDE49-\uDE4F\uDE52-\uDE5F\uDE66-\uDEFF]|\uD83D[\uDED8-\uDEDC\uDEED-\uDEEF\uDEFD-\uDEFF\uDF74-\uDF7F\uDFD9-\uDFDF\uDFEC-\uDFEF\uDFF1-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE\uDCAF\uDCB2-\uDCFF\uDE54-\uDE5F\uDE6E\uDE6F\uDE75-\uDE77\uDE7D-\uDE7F\uDE87-\uDE8F\uDEAD-\uDEAF\uDEBB-\uDEBF\uDEC6-\uDECF\uDEDA-\uDEDF\uDEE8-\uDEEF\uDEF7-\uDEFF\uDF93\uDFCB-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86D[\uDF39-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00\uDC02-\uDC1F\uDC80-\uDCFF\uDDF0-\uDFFF]|[\uDBBF\uDBFF][\uDFFE\uDFFF]"
        },
        {
          "name": "Co",
          "alias": "Private_Use",
          "bmp": "-",
          "astral": "[\uDB80-\uDBBE\uDBC0-\uDBFE][\uDC00-\uDFFF]|[\uDBBF\uDBFF][\uDC00-\uDFFD]"
        },
        {
          "name": "Cs",
          "alias": "Surrogate",
          "bmp": "\uD800-\uDFFF"
        },
        {
          "name": "L",
          "alias": "Letter",
          "bmp": "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
          "astral": "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]"
        },
        {
          "name": "LC",
          "alias": "Cased_Letter",
          "bmp": "A-Za-zµÀ-ÖØ-öø-ƺƼ-ƿǄ-ʓʕ-ʯͰ-ͳͶͷͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՠ-ֈႠ-ჅჇჍა-ჺჽ-ჿᎠ-Ᏽᏸ-ᏽᲀ-ᲈᲐ-ᲺᲽ-Ჿᴀ-ᴫᵫ-ᵷᵹ-ᶚḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-ⱻⱾ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭꙀ-ꙭꚀ-ꚛꜢ-ꝯꝱ-ꞇꞋ-ꞎꞐ-ꟊꟐꟑꟓꟕ-ꟙꟵꟶꟺꬰ-ꭚꭠ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚ",
          "astral": "\uD801[\uDC00-\uDC4F\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD806[\uDCA0-\uDCDF]|\uD81B[\uDE40-\uDE7F]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD00-\uDD43]"
        },
        {
          "name": "Ll",
          "alias": "Lowercase_Letter",
          "bmp": "a-zµß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʯͱͳͷͻ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᴫᵫ-ᵷᵹ-ᶚḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎↄⰰ-ⱟⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱻⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯꝱ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꞻꞽꞿꟁꟃꟈꟊꟑꟓꟕꟗꟙꟶꟺꬰ-ꭚꭠ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",
          "astral": "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]"
        },
        {
          "name": "Lm",
          "alias": "Modifier_Letter",
          "bmp": "ʰ-ˁˆ-ˑˠ-ˤˬˮʹͺՙـۥۦߴߵߺࠚࠤࠨࣉॱๆໆჼៗᡃᪧᱸ-ᱽᴬ-ᵪᵸᶛ-ᶿⁱⁿₐ-ₜⱼⱽⵯⸯ々〱-〵〻ゝゞー-ヾꀕꓸ-ꓽꘌꙿꚜꚝꜗ-ꜟꝰꞈꟲ-ꟴꟸꟹꧏꧦꩰꫝꫳꫴꭜ-ꭟꭩｰﾞﾟ",
          "astral": "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD81A[\uDF40-\uDF43]|\uD81B[\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD838[\uDD37-\uDD3D]|𞥋"
        },
        {
          "name": "Lo",
          "alias": "Other_Letter",
          "bmp": "ªºƻǀ-ǃʔא-תׯ-ײؠ-ؿف-يٮٯٱ-ۓەۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪࠀ-ࠕࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣈऄ-हऽॐक़-ॡॲ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౝౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೝೞೠೡೱೲഄ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๅກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎᄀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜑᜟ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៜᠠ-ᡂᡄ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᬅ-ᬳᭅ-ᭌᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱷᳩ-ᳬᳮ-ᳳᳵᳶᳺℵ-ℸⴰ-ⵧⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ〆〼ぁ-ゖゟァ-ヺヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꀔꀖ-ꒌꓐ-ꓷꔀ-ꘋꘐ-ꘟꘪꘫꙮꚠ-ꛥꞏꟷꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧠ-ꧤꧧ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩯꩱ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛꫜꫠ-ꫪꫲꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎יִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼｦ-ｯｱ-ﾝﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
          "astral": "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC50-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF4A\uDF50]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|𝼊|\uD838[\uDD00-\uDD2C\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]"
        },
        {
          "name": "Lt",
          "alias": "Titlecase_Letter",
          "bmp": "ǅǈǋǲᾈ-ᾏᾘ-ᾟᾨ-ᾯᾼῌῼ"
        },
        {
          "name": "Lu",
          "alias": "Uppercase_Letter",
          "bmp": "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅↃⰀ-ⰯⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸꞺꞼꞾꟀꟂꟄ-ꟇꟉꟐꟖꟘꟵＡ-Ｚ",
          "astral": "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]"
        },
        {
          "name": "M",
          "alias": "Mark",
          "bmp": "̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣ৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍୕-ୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఄ఼ా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣඁ-ඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜕ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍᠏ᢅᢆᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-ᫎᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧ꠬ꢀꢁꢴ-ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯",
          "astral": "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC82\uDCB0-\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD34\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDCE\uDDCF\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDC5E\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7\uDF1D-\uDF2B]|\uD806[\uDC2C-\uDC3A\uDD30-\uDD35\uDD37\uDD38\uDD3B-\uDD3E\uDD40\uDD42\uDD43\uDDD1-\uDDD7\uDDDA-\uDDE0\uDDE4\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDEF3-\uDEF6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF51-\uDF87\uDF8F-\uDF92\uDFE4\uDFF0\uDFF1]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]"
        },
        {
          "name": "Mc",
          "alias": "Spacing_Mark",
          "bmp": "ःऻा-ीॉ-ौॎॏংঃা-ীেৈোৌৗਃਾ-ੀઃા-ીૉોૌଂଃାୀେୈୋୌୗாிுூெ-ைொ-ௌௗఁ-ఃు-ౄಂಃಾೀ-ೄೇೈೊೋೕೖംഃാ-ീെ-ൈൊ-ൌൗංඃා-ෑෘ-ෟෲෳ༾༿ཿါာေးျြၖၗၢ-ၤၧ-ၭႃႄႇ-ႌႏႚ-ႜ᜕᜴ាើ-ៅះៈᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸᨙᨚᩕᩗᩡᩣᩤᩭ-ᩲᬄᬵᬻᬽ-ᭁᭃ᭄ᮂᮡᮦᮧ᮪ᯧᯪ-ᯬᯮ᯲᯳ᰤ-ᰫᰴᰵ᳡᳷〮〯ꠣꠤꠧꢀꢁꢴ-ꣃꥒ꥓ꦃꦴꦵꦺꦻꦾ-꧀ꨯꨰꨳꨴꩍꩻꩽꫫꫮꫯꫵꯣꯤꯦꯧꯩꯪ꯬",
          "astral": "\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3E\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB0-\uDCB2\uDCB9\uDCBB-\uDCBE\uDCC1\uDDAF-\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF20\uDF21\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD30-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD65\uDD66\uDD6D-\uDD72]"
        },
        {
          "name": "Me",
          "alias": "Enclosing_Mark",
          "bmp": "҈҉᪾⃝-⃠⃢-⃤꙰-꙲"
        },
        {
          "name": "Mn",
          "alias": "Nonspacing_Mark",
          "bmp": "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࢘-࢟࣊-ࣣ࣡-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣ৾ਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣૺ-૿ଁ଼ିୁ-ୄ୍୕ୖୢୣஂீ்ఀఄ఼ా-ీె-ైొ-్ౕౖౢౣಁ಼ಿೆೌ್ೢೣഀഁ഻഼ു-ൄ്ൢൣඁ්ි-ුූัิ-ฺ็-๎ັິ-ຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲᜳᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍᠏ᢅᢆᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽ᪿ-ᫎᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᮫-ᮭ᯦ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꠬꣄ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꦽꧥꨩ-ꨮꨱꨲꨵꨶꩃꩌꩼꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯",
          "astral": "\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF40\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB3-\uDCB8\uDCBA\uDCBF\uDCC0\uDCC2\uDCC3\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDD00-\uDDEF]"
        },
        {
          "name": "N",
          "alias": "Number",
          "bmp": "0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
          "astral": "\uD800[\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23\uDF41\uDF4A\uDFD1-\uDFD5]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDD30-\uDD39\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDDE1-\uDDF4\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF3B]|\uD806[\uDCE0-\uDCF2\uDD50-\uDD59]|\uD807[\uDC50-\uDC6C\uDD50-\uDD59\uDDA0-\uDDA9\uDFC0-\uDFD4]|\uD809[\uDC00-\uDC6E]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDCC7-\uDCCF\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]"
        },
        {
          "name": "Nd",
          "alias": "Decimal_Number",
          "bmp": "0-9٠-٩۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯෦-෯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９",
          "astral": "\uD801[\uDCA0-\uDCA9]|\uD803[\uDD30-\uDD39]|\uD804[\uDC66-\uDC6F\uDCF0-\uDCF9\uDD36-\uDD3F\uDDD0-\uDDD9\uDEF0-\uDEF9]|\uD805[\uDC50-\uDC59\uDCD0-\uDCD9\uDE50-\uDE59\uDEC0-\uDEC9\uDF30-\uDF39]|\uD806[\uDCE0-\uDCE9\uDD50-\uDD59]|\uD807[\uDC50-\uDC59\uDD50-\uDD59\uDDA0-\uDDA9]|\uD81A[\uDE60-\uDE69\uDEC0-\uDEC9\uDF50-\uDF59]|\uD835[\uDFCE-\uDFFF]|\uD838[\uDD40-\uDD49\uDEF0-\uDEF9]|\uD83A[\uDD50-\uDD59]|\uD83E[\uDFF0-\uDFF9]"
        },
        {
          "name": "Nl",
          "alias": "Letter_Number",
          "bmp": "ᛮ-ᛰⅠ-ↂↅ-ↈ〇〡-〩〸-〺ꛦ-ꛯ",
          "astral": "\uD800[\uDD40-\uDD74\uDF41\uDF4A\uDFD1-\uDFD5]|\uD809[\uDC00-\uDC6E]"
        },
        {
          "name": "No",
          "alias": "Other_Number",
          "bmp": "²³¹¼-¾৴-৹୲-୷௰-௲౸-౾൘-൞൰-൸༪-༳፩-፼៰-៹᧚⁰⁴-⁹₀-₉⅐-⅟↉①-⒛⓪-⓿❶-➓⳽㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꠰-꠵",
          "astral": "\uD800[\uDD07-\uDD33\uDD75-\uDD78\uDD8A\uDD8B\uDEE1-\uDEFB\uDF20-\uDF23]|\uD802[\uDC58-\uDC5F\uDC79-\uDC7F\uDCA7-\uDCAF\uDCFB-\uDCFF\uDD16-\uDD1B\uDDBC\uDDBD\uDDC0-\uDDCF\uDDD2-\uDDFF\uDE40-\uDE48\uDE7D\uDE7E\uDE9D-\uDE9F\uDEEB-\uDEEF\uDF58-\uDF5F\uDF78-\uDF7F\uDFA9-\uDFAF]|\uD803[\uDCFA-\uDCFF\uDE60-\uDE7E\uDF1D-\uDF26\uDF51-\uDF54\uDFC5-\uDFCB]|\uD804[\uDC52-\uDC65\uDDE1-\uDDF4]|\uD805[\uDF3A\uDF3B]|\uD806[\uDCEA-\uDCF2]|\uD807[\uDC5A-\uDC6C\uDFC0-\uDFD4]|\uD81A[\uDF5B-\uDF61]|\uD81B[\uDE80-\uDE96]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD83A[\uDCC7-\uDCCF]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D]|\uD83C[\uDD00-\uDD0C]"
        },
        {
          "name": "P",
          "alias": "Punctuation",
          "bmp": "!-#%-\\*,-\\/:;\\?@\\[-\\]_\\{\\}¡§«¶·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؝-؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰౷಄෴๏๚๛༄-༒༔༺-༽྅࿐-࿔࿙࿚၊-၏჻፠-፨᐀᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᭽᭾᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎⌈-⌋〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰-⹏⹒-⹝、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･",
          "astral": "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|𐕯|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|𛲟|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]"
        },
        {
          "name": "Pc",
          "alias": "Connector_Punctuation",
          "bmp": "_‿⁀⁔︳︴﹍-﹏＿"
        },
        {
          "name": "Pd",
          "alias": "Dash_Punctuation",
          "bmp": "\\-֊־᐀᠆‐-―⸗⸚⸺⸻⹀⹝〜〰゠︱︲﹘﹣－",
          "astral": "𐺭"
        },
        {
          "name": "Pe",
          "alias": "Close_Punctuation",
          "bmp": "\\)\\]\\}༻༽᚜⁆⁾₎⌉⌋〉❩❫❭❯❱❳❵⟆⟧⟩⟫⟭⟯⦄⦆⦈⦊⦌⦎⦐⦒⦔⦖⦘⧙⧛⧽⸣⸥⸧⸩⹖⹘⹚⹜〉》」』】〕〗〙〛〞〟﴾︘︶︸︺︼︾﹀﹂﹄﹈﹚﹜﹞）］｝｠｣"
        },
        {
          "name": "Pf",
          "alias": "Final_Punctuation",
          "bmp": "»’”›⸃⸅⸊⸍⸝⸡"
        },
        {
          "name": "Pi",
          "alias": "Initial_Punctuation",
          "bmp": "«‘‛“‟‹⸂⸄⸉⸌⸜⸠"
        },
        {
          "name": "Po",
          "alias": "Other_Punctuation",
          "bmp": "!-#%-'\\*,\\.\\/:;\\?@\\¡§¶·¿;·՚-՟։׀׃׆׳״؉؊،؍؛؝-؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰৽੶૰౷಄෴๏๚๛༄-༒༔྅࿐-࿔࿙࿚၊-၏჻፠-፨᙮᛫-᛭᜵᜶។-៖៘-៚᠀-᠅᠇-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᭽᭾᯼-᯿᰻-᰿᱾᱿᳀-᳇᳓‖‗†-‧‰-‸※-‾⁁-⁃⁇-⁑⁓⁕-⁞⳹-⳼⳾⳿⵰⸀⸁⸆-⸈⸋⸎-⸖⸘⸙⸛⸞⸟⸪-⸮⸰-⸹⸼-⸿⹁⹃-⹏⹒-⹔、-〃〽・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꣼꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꫰꫱꯫︐-︖︙︰﹅﹆﹉-﹌﹐-﹒﹔-﹗﹟-﹡﹨﹪﹫！-＃％-＇＊，．／：；？＠＼｡､･",
          "astral": "\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|𐕯|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|𛲟|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]"
        },
        {
          "name": "Ps",
          "alias": "Open_Punctuation",
          "bmp": "\\(\\[\\{༺༼᚛‚„⁅⁽₍⌈⌊〈❨❪❬❮❰❲❴⟅⟦⟨⟪⟬⟮⦃⦅⦇⦉⦋⦍⦏⦑⦓⦕⦗⧘⧚⧼⸢⸤⸦⸨⹂⹕⹗⹙⹛〈《「『【〔〖〘〚〝﴿︗︵︷︹︻︽︿﹁﹃﹇﹙﹛﹝（［｛｟｢"
        },
        {
          "name": "S",
          "alias": "Symbol",
          "bmp": "\\$\\+<->\\^`\\|~¢-¦¨©¬®-±´¸×÷˂-˅˒-˟˥-˫˭˯-˿͵΄΅϶҂֍-֏؆-؈؋؎؏۞۩۽۾߶߾߿࢈৲৳৺৻૱୰௳-௺౿൏൹฿༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᙭៛᥀᧞-᧿᭡-᭪᭴-᭼᾽᾿-῁῍-῏῝-῟῭-`´῾⁄⁒⁺-⁼₊-₌₠-⃀℀℁℃-℆℈℉℔№-℘℞-℣℥℧℩℮℺℻⅀-⅄⅊-⅍⅏↊↋←-⌇⌌-⌨⌫-␦⑀-⑊⒜-ⓩ─-❧➔-⟄⟇-⟥⟰-⦂⦙-⧗⧜-⧻⧾-⭳⭶-⮕⮗-⯿⳥-⳪⹐⹑⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿゛゜㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㏿䷀-䷿꒐-꓆꜀-꜖꜠꜡꞉꞊꠨-꠫꠶-꠹꩷-꩹꭛꭪꭫﬩﮲-﯂﵀-﵏﷏﷼-﷿﹢﹤-﹦﹩＄＋＜-＞＾｀｜～￠-￦￨-￮￼�",
          "astral": "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|𑜿|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|𛲜|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]"
        },
        {
          "name": "Sc",
          "alias": "Currency_Symbol",
          "bmp": "\\$¢-¥֏؋߾߿৲৳৻૱௹฿៛₠-⃀꠸﷼﹩＄￠￡￥￦",
          "astral": "\uD807[\uDFDD-\uDFE0]|𞋿|𞲰"
        },
        {
          "name": "Sk",
          "alias": "Modifier_Symbol",
          "bmp": "\\^`¨¯´¸˂-˅˒-˟˥-˫˭˯-˿͵΄΅࢈᾽᾿-῁῍-῏῝-῟῭-`´῾゛゜꜀-꜖꜠꜡꞉꞊꭛꭪꭫﮲-﯂＾｀￣",
          "astral": "\uD83C[\uDFFB-\uDFFF]"
        },
        {
          "name": "Sm",
          "alias": "Math_Symbol",
          "bmp": "\\+<->\\|~¬±×÷϶؆-؈⁄⁒⁺-⁼₊-₌℘⅀-⅄⅋←-↔↚↛↠↣↦↮⇎⇏⇒⇔⇴-⋿⌠⌡⍼⎛-⎳⏜-⏡▷◁◸-◿♯⟀-⟄⟇-⟥⟰-⟿⤀-⦂⦙-⧗⧜-⧻⧾-⫿⬰-⭄⭇-⭌﬩﹢﹤-﹦＋＜-＞｜～￢￩-￬",
          "astral": "\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD83B[\uDEF0\uDEF1]"
        },
        {
          "name": "So",
          "alias": "Other_Symbol",
          "bmp": "¦©®°҂֍֎؎؏۞۩۽۾߶৺୰௳-௸௺౿൏൹༁-༃༓༕-༗༚-༟༴༶༸྾-࿅࿇-࿌࿎࿏࿕-࿘႞႟᎐-᎙᙭᥀᧞-᧿᭡-᭪᭴-᭼℀℁℃-℆℈℉℔№℗℞-℣℥℧℩℮℺℻⅊⅌⅍⅏↊↋↕-↙↜-↟↡↢↤↥↧-↭↯-⇍⇐⇑⇓⇕-⇳⌀-⌇⌌-⌟⌢-⌨⌫-⍻⍽-⎚⎴-⏛⏢-␦⑀-⑊⒜-ⓩ─-▶▸-◀◂-◷☀-♮♰-❧➔-➿⠀-⣿⬀-⬯⭅⭆⭍-⭳⭶-⮕⮗-⯿⳥-⳪⹐⹑⺀-⺙⺛-⻳⼀-⿕⿰-⿻〄〒〓〠〶〷〾〿㆐㆑㆖-㆟㇀-㇣㈀-㈞㈪-㉇㉐㉠-㉿㊊-㊰㋀-㏿䷀-䷿꒐-꓆꠨-꠫꠶꠷꠹꩷-꩹﵀-﵏﷏﷽-﷿￤￨￭￮￼�",
          "astral": "\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|𑜿|\uD807[\uDFD5-\uDFDC\uDFE1-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|𛲜|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|𞅏|\uD83B[\uDCAC\uDD2E]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFA]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA]"
        },
        {
          "name": "Z",
          "alias": "Separator",
          "bmp": "    - \u2028\u2029  　"
        },
        {
          "name": "Zl",
          "alias": "Line_Separator",
          "bmp": "\u2028"
        },
        {
          "name": "Zp",
          "alias": "Paragraph_Separator",
          "bmp": "\u2029"
        },
        {
          "name": "Zs",
          "alias": "Space_Separator",
          "bmp": "    -   　"
        }
      ];
    }
  });

  // node_modules/xregexp/lib/addons/unicode-categories.js
  var require_unicode_categories = __commonJS({
    "node_modules/xregexp/lib/addons/unicode-categories.js"(exports, module) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      var _interopRequireDefault = require_interopRequireDefault();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _categories = _interopRequireDefault(require_categories());
      var _default = exports["default"] = function _default2(XRegExp) {
        if (!XRegExp.addUnicodeData) {
          throw new ReferenceError("Unicode Base must be loaded before Unicode Categories");
        }
        XRegExp.addUnicodeData(_categories["default"]);
      };
      module.exports = exports.default;
    }
  });

  // node_modules/xregexp/tools/output/properties.js
  var require_properties = __commonJS({
    "node_modules/xregexp/tools/output/properties.js"(exports, module) {
      "use strict";
      module.exports = [
        {
          "name": "ASCII",
          "bmp": "\0-"
        },
        {
          "name": "Alphabetic",
          "bmp": "A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͅͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈְ-ׇֽֿׁׂׅׄא-תׯ-ײؐ-ؚؠ-ٗٙ-ٟٮ-ۓە-ۜۡ-ۭۨ-ۯۺ-ۼۿܐ-ܿݍ-ޱߊ-ߪߴߵߺࠀ-ࠗࠚ-ࠬࡀ-ࡘࡠ-ࡪࡰ-ࢇࢉ-ࢎࢠ-ࣉࣔ-ࣣࣟ-ࣰࣩ-ऻऽ-ौॎ-ॐॕ-ॣॱ-ঃঅ-ঌএঐও-নপ-রলশ-হঽ-ৄেৈোৌৎৗড়ঢ়য়-ৣৰৱৼਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੂੇੈੋੌੑਖ਼-ੜਫ਼ੰ-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ૅે-ૉોૌૐૠ-ૣૹ-ૼଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽ-ୄେୈୋୌୖୗଡ଼ଢ଼ୟ-ୣୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-ௌௐௗఀ-ఃఅ-ఌఎ-ఐఒ-నప-హఽ-ౄె-ైొ-ౌౕౖౘ-ౚౝౠ-ౣಀ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊ-ೌೕೖೝೞೠ-ೣೱೲഀ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൌൎൔ-ൗൟ-ൣൺ-ൿඁ-ඃඅ-ඖක-නඳ-රලව-ෆා-ුූෘ-ෟෲෳก-ฺเ-ๆํກຂຄຆ-ຊຌ-ຣລວ-ູົ-ຽເ-ໄໆໍໜ-ໟༀཀ-ཇཉ-ཬཱ-ཱྀྈ-ྗྙ-ྼက-ံးျ-ဿၐ-ႏႚ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜓᜟ-ᜳᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-ឳា-ៈៗៜᠠ-ᡸᢀ-ᢪᢰ-ᣵᤀ-ᤞᤠ-ᤫᤰ-ᤸᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨛᨠ-ᩞᩡ-ᩴᪧᪿᫀᫌ-ᫎᬀ-ᬳᬵ-ᭃᭅ-ᭌᮀ-ᮩᮬ-ᮯᮺ-ᯥᯧ-ᯱᰀ-ᰶᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿᷧ-ᷴḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆿㇰ-ㇿ㐀-䶿一-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙴ-ꙻꙿ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꠅꠇ-ꠧꡀ-ꡳꢀ-ꣃꣅꣲ-ꣷꣻꣽ-ꣿꤊ-ꤪꤰ-ꥒꥠ-ꥼꦀ-ꦲꦴ-ꦿꧏꧠ-ꧯꧺ-ꧾꨀ-ꨶꩀ-ꩍꩠ-ꩶꩺ-ꪾꫀꫂꫛ-ꫝꫠ-ꫯꫲ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭩꭰ-ꯪ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
          "astral": "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC45\uDC71-\uDC75\uDC82-\uDCB8\uDCC2\uDCD0-\uDCE8\uDD00-\uDD32\uDD44-\uDD47\uDD50-\uDD72\uDD76\uDD80-\uDDBF\uDDC1-\uDDC4\uDDCE\uDDCF\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE34\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEE8\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D-\uDF44\uDF47\uDF48\uDF4B\uDF4C\uDF50\uDF57\uDF5D-\uDF63]|\uD805[\uDC00-\uDC41\uDC43-\uDC45\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCC1\uDCC4\uDCC5\uDCC7\uDD80-\uDDB5\uDDB8-\uDDBE\uDDD8-\uDDDD\uDE00-\uDE3E\uDE40\uDE44\uDE80-\uDEB5\uDEB8\uDF00-\uDF1A\uDF1D-\uDF2A\uDF40-\uDF46]|\uD806[\uDC00-\uDC38\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B\uDD3C\uDD3F-\uDD42\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDDF\uDDE1\uDDE3\uDDE4\uDE00-\uDE32\uDE35-\uDE3E\uDE50-\uDE97\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC3E\uDC40\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD41\uDD43\uDD46\uDD47\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD96\uDD98\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9E]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD47\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]"
        },
        {
          "name": "Any",
          "isBmpLast": true,
          "bmp": "\0-￿",
          "astral": "[\uD800-\uDBFF][\uDC00-\uDFFF]"
        },
        {
          "name": "Default_Ignorable_Code_Point",
          "bmp": "­͏؜ᅟᅠ឴឵᠋-᠏​-‏‪-‮⁠-⁯ㅤ︀-️\uFEFFﾠ￰-￸",
          "astral": "\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|[\uDB40-\uDB43][\uDC00-\uDFFF]"
        },
        {
          "name": "Lowercase",
          "bmp": "a-zªµºß-öø-ÿāăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżž-ƀƃƅƈƌƍƒƕƙ-ƛƞơƣƥƨƪƫƭưƴƶƹƺƽ-ƿǆǉǌǎǐǒǔǖǘǚǜǝǟǡǣǥǧǩǫǭǯǰǳǵǹǻǽǿȁȃȅȇȉȋȍȏȑȓȕȗșțȝȟȡȣȥȧȩȫȭȯȱȳ-ȹȼȿɀɂɇɉɋɍɏ-ʓʕ-ʸˀˁˠ-ˤͅͱͳͷͺ-ͽΐά-ώϐϑϕ-ϗϙϛϝϟϡϣϥϧϩϫϭϯ-ϳϵϸϻϼа-џѡѣѥѧѩѫѭѯѱѳѵѷѹѻѽѿҁҋҍҏґғҕҗҙқҝҟҡңҥҧҩҫҭүұҳҵҷҹһҽҿӂӄӆӈӊӌӎӏӑӓӕӗәӛӝӟӡӣӥӧөӫӭӯӱӳӵӷӹӻӽӿԁԃԅԇԉԋԍԏԑԓԕԗԙԛԝԟԡԣԥԧԩԫԭԯՠ-ֈა-ჺჽ-ჿᏸ-ᏽᲀ-ᲈᴀ-ᶿḁḃḅḇḉḋḍḏḑḓḕḗḙḛḝḟḡḣḥḧḩḫḭḯḱḳḵḷḹḻḽḿṁṃṅṇṉṋṍṏṑṓṕṗṙṛṝṟṡṣṥṧṩṫṭṯṱṳṵṷṹṻṽṿẁẃẅẇẉẋẍẏẑẓẕ-ẝẟạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹỻỽỿ-ἇἐ-ἕἠ-ἧἰ-ἷὀ-ὅὐ-ὗὠ-ὧὰ-ώᾀ-ᾇᾐ-ᾗᾠ-ᾧᾰ-ᾴᾶᾷιῂ-ῄῆῇῐ-ΐῖῗῠ-ῧῲ-ῴῶῷⁱⁿₐ-ₜℊℎℏℓℯℴℹℼℽⅆ-ⅉⅎⅰ-ⅿↄⓐ-ⓩⰰ-ⱟⱡⱥⱦⱨⱪⱬⱱⱳⱴⱶ-ⱽⲁⲃⲅⲇⲉⲋⲍⲏⲑⲓⲕⲗⲙⲛⲝⲟⲡⲣⲥⲧⲩⲫⲭⲯⲱⲳⲵⲷⲹⲻⲽⲿⳁⳃⳅⳇⳉⳋⳍⳏⳑⳓⳕⳗⳙⳛⳝⳟⳡⳣⳤⳬⳮⳳⴀ-ⴥⴧⴭꙁꙃꙅꙇꙉꙋꙍꙏꙑꙓꙕꙗꙙꙛꙝꙟꙡꙣꙥꙧꙩꙫꙭꚁꚃꚅꚇꚉꚋꚍꚏꚑꚓꚕꚗꚙꚛ-ꚝꜣꜥꜧꜩꜫꜭꜯ-ꜱꜳꜵꜷꜹꜻꜽꜿꝁꝃꝅꝇꝉꝋꝍꝏꝑꝓꝕꝗꝙꝛꝝꝟꝡꝣꝥꝧꝩꝫꝭꝯ-ꝸꝺꝼꝿꞁꞃꞅꞇꞌꞎꞑꞓ-ꞕꞗꞙꞛꞝꞟꞡꞣꞥꞧꞩꞯꞵꞷꞹꞻꞽꞿꟁꟃꟈꟊꟑꟓꟕꟗꟙꟶꟸ-ꟺꬰ-ꭚꭜ-ꭨꭰ-ꮿﬀ-ﬆﬓ-ﬗａ-ｚ",
          "astral": "\uD801[\uDC28-\uDC4F\uDCD8-\uDCFB\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDF80\uDF83-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD803[\uDCC0-\uDCF2]|\uD806[\uDCC0-\uDCDF]|\uD81B[\uDE60-\uDE7F]|\uD835[\uDC1A-\uDC33\uDC4E-\uDC54\uDC56-\uDC67\uDC82-\uDC9B\uDCB6-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDCEA-\uDD03\uDD1E-\uDD37\uDD52-\uDD6B\uDD86-\uDD9F\uDDBA-\uDDD3\uDDEE-\uDE07\uDE22-\uDE3B\uDE56-\uDE6F\uDE8A-\uDEA5\uDEC2-\uDEDA\uDEDC-\uDEE1\uDEFC-\uDF14\uDF16-\uDF1B\uDF36-\uDF4E\uDF50-\uDF55\uDF70-\uDF88\uDF8A-\uDF8F\uDFAA-\uDFC2\uDFC4-\uDFC9\uDFCB]|\uD837[\uDF00-\uDF09\uDF0B-\uDF1E]|\uD83A[\uDD22-\uDD43]"
        },
        {
          "name": "Noncharacter_Code_Point",
          "bmp": "﷐-﷯￾￿",
          "astral": "[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]"
        },
        {
          "name": "Uppercase",
          "bmp": "A-ZÀ-ÖØ-ÞĀĂĄĆĈĊČĎĐĒĔĖĘĚĜĞĠĢĤĦĨĪĬĮİĲĴĶĹĻĽĿŁŃŅŇŊŌŎŐŒŔŖŘŚŜŞŠŢŤŦŨŪŬŮŰŲŴŶŸŹŻŽƁƂƄƆƇƉ-ƋƎ-ƑƓƔƖ-ƘƜƝƟƠƢƤƦƧƩƬƮƯƱ-ƳƵƷƸƼǄǇǊǍǏǑǓǕǗǙǛǞǠǢǤǦǨǪǬǮǱǴǶ-ǸǺǼǾȀȂȄȆȈȊȌȎȐȒȔȖȘȚȜȞȠȢȤȦȨȪȬȮȰȲȺȻȽȾɁɃ-ɆɈɊɌɎͰͲͶͿΆΈ-ΊΌΎΏΑ-ΡΣ-ΫϏϒ-ϔϘϚϜϞϠϢϤϦϨϪϬϮϴϷϹϺϽ-ЯѠѢѤѦѨѪѬѮѰѲѴѶѸѺѼѾҀҊҌҎҐҒҔҖҘҚҜҞҠҢҤҦҨҪҬҮҰҲҴҶҸҺҼҾӀӁӃӅӇӉӋӍӐӒӔӖӘӚӜӞӠӢӤӦӨӪӬӮӰӲӴӶӸӺӼӾԀԂԄԆԈԊԌԎԐԒԔԖԘԚԜԞԠԢԤԦԨԪԬԮԱ-ՖႠ-ჅჇჍᎠ-ᏵᲐ-ᲺᲽ-ᲿḀḂḄḆḈḊḌḎḐḒḔḖḘḚḜḞḠḢḤḦḨḪḬḮḰḲḴḶḸḺḼḾṀṂṄṆṈṊṌṎṐṒṔṖṘṚṜṞṠṢṤṦṨṪṬṮṰṲṴṶṸṺṼṾẀẂẄẆẈẊẌẎẐẒẔẞẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼẾỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴỶỸỺỼỾἈ-ἏἘ-ἝἨ-ἯἸ-ἿὈ-ὍὙὛὝὟὨ-ὯᾸ-ΆῈ-ΉῘ-ΊῨ-ῬῸ-Ώℂℇℋ-ℍℐ-ℒℕℙ-ℝℤΩℨK-ℭℰ-ℳℾℿⅅⅠ-ⅯↃⒶ-ⓏⰀ-ⰯⱠⱢ-ⱤⱧⱩⱫⱭ-ⱰⱲⱵⱾ-ⲀⲂⲄⲆⲈⲊⲌⲎⲐⲒⲔⲖⲘⲚⲜⲞⲠⲢⲤⲦⲨⲪⲬⲮⲰⲲⲴⲶⲸⲺⲼⲾⳀⳂⳄⳆⳈⳊⳌⳎⳐⳒⳔⳖⳘⳚⳜⳞⳠⳢⳫⳭⳲꙀꙂꙄꙆꙈꙊꙌꙎꙐꙒꙔꙖꙘꙚꙜꙞꙠꙢꙤꙦꙨꙪꙬꚀꚂꚄꚆꚈꚊꚌꚎꚐꚒꚔꚖꚘꚚꜢꜤꜦꜨꜪꜬꜮꜲꜴꜶꜸꜺꜼꜾꝀꝂꝄꝆꝈꝊꝌꝎꝐꝒꝔꝖꝘꝚꝜꝞꝠꝢꝤꝦꝨꝪꝬꝮꝹꝻꝽꝾꞀꞂꞄꞆꞋꞍꞐꞒꞖꞘꞚꞜꞞꞠꞢꞤꞦꞨꞪ-ꞮꞰ-ꞴꞶꞸꞺꞼꞾꟀꟂꟄ-ꟇꟉꟐꟖꟘꟵＡ-Ｚ",
          "astral": "\uD801[\uDC00-\uDC27\uDCB0-\uDCD3\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95]|\uD803[\uDC80-\uDCB2]|\uD806[\uDCA0-\uDCBF]|\uD81B[\uDE40-\uDE5F]|\uD835[\uDC00-\uDC19\uDC34-\uDC4D\uDC68-\uDC81\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB5\uDCD0-\uDCE9\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD38\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD6C-\uDD85\uDDA0-\uDDB9\uDDD4-\uDDED\uDE08-\uDE21\uDE3C-\uDE55\uDE70-\uDE89\uDEA8-\uDEC0\uDEE2-\uDEFA\uDF1C-\uDF34\uDF56-\uDF6E\uDF90-\uDFA8\uDFCA]|\uD83A[\uDD00-\uDD21]|\uD83C[\uDD30-\uDD49\uDD50-\uDD69\uDD70-\uDD89]"
        },
        {
          "name": "White_Space",
          "bmp": "	-\r    - \u2028\u2029  　"
        }
      ];
    }
  });

  // node_modules/xregexp/lib/addons/unicode-properties.js
  var require_unicode_properties = __commonJS({
    "node_modules/xregexp/lib/addons/unicode-properties.js"(exports, module) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      var _interopRequireDefault = require_interopRequireDefault();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _properties = _interopRequireDefault(require_properties());
      var _default = exports["default"] = function _default2(XRegExp) {
        if (!XRegExp.addUnicodeData) {
          throw new ReferenceError("Unicode Base must be loaded before Unicode Properties");
        }
        var unicodeData = _properties["default"];
        unicodeData.push({
          name: "Assigned",
          // Since this is defined as the inverse of Unicode category Cn (Unassigned), the Unicode
          // Categories addon is required to use this property
          inverseOf: "Cn"
        });
        XRegExp.addUnicodeData(unicodeData);
      };
      module.exports = exports.default;
    }
  });

  // node_modules/xregexp/tools/output/scripts.js
  var require_scripts = __commonJS({
    "node_modules/xregexp/tools/output/scripts.js"(exports, module) {
      "use strict";
      module.exports = [
        {
          "name": "Adlam",
          "astral": "\uD83A[\uDD00-\uDD4B\uDD50-\uDD59\uDD5E\uDD5F]"
        },
        {
          "name": "Ahom",
          "astral": "\uD805[\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF46]"
        },
        {
          "name": "Anatolian_Hieroglyphs",
          "astral": "\uD811[\uDC00-\uDE46]"
        },
        {
          "name": "Arabic",
          "bmp": "؀-؄؆-؋؍-ؚ؜-؞ؠ-ؿف-يٖ-ٯٱ-ۜ۞-ۿݐ-ݿࡰ-ࢎ࢐࢑࢘-ࣣ࣡-ࣿﭐ-﯂ﯓ-ﴽ﵀-ﶏﶒ-ﷇ﷏ﷰ-﷿ﹰ-ﹴﹶ-ﻼ",
          "astral": "\uD803[\uDE60-\uDE7E]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB\uDEF0\uDEF1]"
        },
        {
          "name": "Armenian",
          "bmp": "Ա-Ֆՙ-֊֍-֏ﬓ-ﬗ"
        },
        {
          "name": "Avestan",
          "astral": "\uD802[\uDF00-\uDF35\uDF39-\uDF3F]"
        },
        {
          "name": "Balinese",
          "bmp": "ᬀ-ᭌ᭐-᭾"
        },
        {
          "name": "Bamum",
          "bmp": "ꚠ-꛷",
          "astral": "\uD81A[\uDC00-\uDE38]"
        },
        {
          "name": "Bassa_Vah",
          "astral": "\uD81A[\uDED0-\uDEED\uDEF0-\uDEF5]"
        },
        {
          "name": "Batak",
          "bmp": "ᯀ-᯳᯼-᯿"
        },
        {
          "name": "Bengali",
          "bmp": "ঀ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-৾"
        },
        {
          "name": "Bhaiksuki",
          "astral": "\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC45\uDC50-\uDC6C]"
        },
        {
          "name": "Bopomofo",
          "bmp": "˪˫ㄅ-ㄯㆠ-ㆿ"
        },
        {
          "name": "Brahmi",
          "astral": "\uD804[\uDC00-\uDC4D\uDC52-\uDC75\uDC7F]"
        },
        {
          "name": "Braille",
          "bmp": "⠀-⣿"
        },
        {
          "name": "Buginese",
          "bmp": "ᨀ-ᨛ᨞᨟"
        },
        {
          "name": "Buhid",
          "bmp": "ᝀ-ᝓ"
        },
        {
          "name": "Canadian_Aboriginal",
          "bmp": "᐀-ᙿᢰ-ᣵ",
          "astral": "\uD806[\uDEB0-\uDEBF]"
        },
        {
          "name": "Carian",
          "astral": "\uD800[\uDEA0-\uDED0]"
        },
        {
          "name": "Caucasian_Albanian",
          "astral": "\uD801[\uDD30-\uDD63\uDD6F]"
        },
        {
          "name": "Chakma",
          "astral": "\uD804[\uDD00-\uDD34\uDD36-\uDD47]"
        },
        {
          "name": "Cham",
          "bmp": "ꨀ-ꨶꩀ-ꩍ꩐-꩙꩜-꩟"
        },
        {
          "name": "Cherokee",
          "bmp": "Ꭰ-Ᏽᏸ-ᏽꭰ-ꮿ"
        },
        {
          "name": "Chorasmian",
          "astral": "\uD803[\uDFB0-\uDFCB]"
        },
        {
          "name": "Common",
          "bmp": "\0-@\\[-`\\{-©«-¹»-¿×÷ʹ-˟˥-˩ˬ-˿ʹ;΅·؅،؛؟ـ۝࣢।॥฿࿕-࿘჻᛫-᛭᜵᜶᠂᠃᠅᳓᳡ᳩ-ᳬᳮ-ᳳᳵ-᳷ᳺ -​‎-⁤⁦-⁰⁴-⁾₀-₎₠-⃀℀-℥℧-℩ℬ-ℱℳ-⅍⅏-⅟↉-↋←-␦⑀-⑊①-⟿⤀-⭳⭶-⮕⮗-⯿⸀-⹝⿰-⿻　-〄〆〈-〠〰-〷〼-〿゛゜゠・ー㆐-㆟㇀-㇣㈠-㉟㉿-㋏㋿㍘-㏿䷀-䷿꜀-꜡ꞈ-꞊꠰-꠹꤮ꧏ꭛꭪꭫﴾﴿︐-︙︰-﹒﹔-﹦﹨-﹫\uFEFF！-＠［-｀｛-･ｰﾞﾟ￠-￦￨-￮￹-�",
          "astral": "\uD800[\uDD00-\uDD02\uDD07-\uDD33\uDD37-\uDD3F\uDD90-\uDD9C\uDDD0-\uDDFC\uDEE1-\uDEFB]|\uD82F[\uDCA0-\uDCA3]|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD66\uDD6A-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDEE0-\uDEF3\uDF00-\uDF56\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDFCB\uDFCE-\uDFFF]|\uD83B[\uDC71-\uDCB4\uDD01-\uDD3D]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD00-\uDDAD\uDDE6-\uDDFF\uDE01\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDD-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF73\uDF80-\uDFD8\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE74\uDE78-\uDE7C\uDE80-\uDE86\uDE90-\uDEAC\uDEB0-\uDEBA\uDEC0-\uDEC5\uDED0-\uDED9\uDEE0-\uDEE7\uDEF0-\uDEF6\uDF00-\uDF92\uDF94-\uDFCA\uDFF0-\uDFF9]|\uDB40[\uDC01\uDC20-\uDC7F]"
        },
        {
          "name": "Coptic",
          "bmp": "Ϣ-ϯⲀ-ⳳ⳹-⳿"
        },
        {
          "name": "Cuneiform",
          "astral": "\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC70-\uDC74\uDC80-\uDD43]"
        },
        {
          "name": "Cypriot",
          "astral": "\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F]"
        },
        {
          "name": "Cypro_Minoan",
          "astral": "\uD80B[\uDF90-\uDFF2]"
        },
        {
          "name": "Cyrillic",
          "bmp": "Ѐ-҄҇-ԯᲀ-ᲈᴫᵸⷠ-ⷿꙀ-ꚟ︮︯"
        },
        {
          "name": "Deseret",
          "astral": "\uD801[\uDC00-\uDC4F]"
        },
        {
          "name": "Devanagari",
          "bmp": "ऀ-ॐॕ-ॣ०-ॿ꣠-ꣿ"
        },
        {
          "name": "Dives_Akuru",
          "astral": "\uD806[\uDD00-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD46\uDD50-\uDD59]"
        },
        {
          "name": "Dogra",
          "astral": "\uD806[\uDC00-\uDC3B]"
        },
        {
          "name": "Duployan",
          "astral": "\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9C-\uDC9F]"
        },
        {
          "name": "Egyptian_Hieroglyphs",
          "astral": "\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E\uDC30-\uDC38]"
        },
        {
          "name": "Elbasan",
          "astral": "\uD801[\uDD00-\uDD27]"
        },
        {
          "name": "Elymaic",
          "astral": "\uD803[\uDFE0-\uDFF6]"
        },
        {
          "name": "Ethiopic",
          "bmp": "ሀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፼ᎀ-᎙ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮ",
          "astral": "\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]"
        },
        {
          "name": "Georgian",
          "bmp": "Ⴀ-ჅჇჍა-ჺჼ-ჿᲐ-ᲺᲽ-Ჿⴀ-ⴥⴧⴭ"
        },
        {
          "name": "Glagolitic",
          "bmp": "Ⰰ-ⱟ",
          "astral": "\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]"
        },
        {
          "name": "Gothic",
          "astral": "\uD800[\uDF30-\uDF4A]"
        },
        {
          "name": "Grantha",
          "astral": "\uD804[\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]"
        },
        {
          "name": "Greek",
          "bmp": "Ͱ-ͳ͵-ͷͺ-ͽͿ΄ΆΈ-ΊΌΎ-ΡΣ-ϡϰ-Ͽᴦ-ᴪᵝ-ᵡᵦ-ᵪᶿἀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ῄῆ-ΐῖ-Ί῝-`ῲ-ῴῶ-῾Ωꭥ",
          "astral": "\uD800[\uDD40-\uDD8E\uDDA0]|\uD834[\uDE00-\uDE45]"
        },
        {
          "name": "Gujarati",
          "bmp": "ઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૱ૹ-૿"
        },
        {
          "name": "Gunjala_Gondi",
          "astral": "\uD807[\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9]"
        },
        {
          "name": "Gurmukhi",
          "bmp": "ਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-੶"
        },
        {
          "name": "Han",
          "bmp": "⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶿一-鿿豈-舘並-龎",
          "astral": "\uD81B[\uDFE2\uDFE3\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]"
        },
        {
          "name": "Hangul",
          "bmp": "ᄀ-ᇿ〮〯ㄱ-ㆎ㈀-㈞㉠-㉾ꥠ-ꥼ가-힣ힰ-ퟆퟋ-ퟻﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ"
        },
        {
          "name": "Hanifi_Rohingya",
          "astral": "\uD803[\uDD00-\uDD27\uDD30-\uDD39]"
        },
        {
          "name": "Hanunoo",
          "bmp": "ᜠ-᜴"
        },
        {
          "name": "Hatran",
          "astral": "\uD802[\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDCFF]"
        },
        {
          "name": "Hebrew",
          "bmp": "֑-ׇא-תׯ-״יִ-זּטּ-לּמּנּסּףּפּצּ-ﭏ"
        },
        {
          "name": "Hiragana",
          "bmp": "ぁ-ゖゝ-ゟ",
          "astral": "\uD82C[\uDC01-\uDD1F\uDD50-\uDD52]|🈀"
        },
        {
          "name": "Imperial_Aramaic",
          "astral": "\uD802[\uDC40-\uDC55\uDC57-\uDC5F]"
        },
        {
          "name": "Inherited",
          "bmp": "̀-ًͯ҅҆-ٰٕ॑-॔᪰-ᫎ᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷿‌‍⃐-〪⃰-゙゚〭︀-️︠-︭",
          "astral": "\uD800[\uDDFD\uDEE0]|𑌻|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD67-\uDD69\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uDB40[\uDD00-\uDDEF]"
        },
        {
          "name": "Inscriptional_Pahlavi",
          "astral": "\uD802[\uDF60-\uDF72\uDF78-\uDF7F]"
        },
        {
          "name": "Inscriptional_Parthian",
          "astral": "\uD802[\uDF40-\uDF55\uDF58-\uDF5F]"
        },
        {
          "name": "Javanese",
          "bmp": "ꦀ-꧍꧐-꧙꧞꧟"
        },
        {
          "name": "Kaithi",
          "astral": "\uD804[\uDC80-\uDCC2\uDCCD]"
        },
        {
          "name": "Kannada",
          "bmp": "ಀ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೝೞೠ-ೣ೦-೯ೱೲ"
        },
        {
          "name": "Katakana",
          "bmp": "ァ-ヺヽ-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ｯｱ-ﾝ",
          "astral": "\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00\uDD20-\uDD22\uDD64-\uDD67]"
        },
        {
          "name": "Kayah_Li",
          "bmp": "꤀-꤭꤯"
        },
        {
          "name": "Kharoshthi",
          "astral": "\uD802[\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F-\uDE48\uDE50-\uDE58]"
        },
        {
          "name": "Khitan_Small_Script",
          "astral": "𖿤|\uD822[\uDF00-\uDFFF]|\uD823[\uDC00-\uDCD5]"
        },
        {
          "name": "Khmer",
          "bmp": "ក-៝០-៩៰-៹᧠-᧿"
        },
        {
          "name": "Khojki",
          "astral": "\uD804[\uDE00-\uDE11\uDE13-\uDE3E]"
        },
        {
          "name": "Khudawadi",
          "astral": "\uD804[\uDEB0-\uDEEA\uDEF0-\uDEF9]"
        },
        {
          "name": "Lao",
          "bmp": "ກຂຄຆ-ຊຌ-ຣລວ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟ"
        },
        {
          "name": "Latin",
          "bmp": "A-Za-zªºÀ-ÖØ-öø-ʸˠ-ˤᴀ-ᴥᴬ-ᵜᵢ-ᵥᵫ-ᵷᵹ-ᶾḀ-ỿⁱⁿₐ-ₜKÅℲⅎⅠ-ↈⱠ-ⱿꜢ-ꞇꞋ-ꟊꟐꟑꟓꟕ-ꟙꟲ-ꟿꬰ-ꭚꭜ-ꭤꭦ-ꭩﬀ-ﬆＡ-Ｚａ-ｚ",
          "astral": "\uD801[\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD837[\uDF00-\uDF1E]"
        },
        {
          "name": "Lepcha",
          "bmp": "ᰀ-᰷᰻-᱉ᱍ-ᱏ"
        },
        {
          "name": "Limbu",
          "bmp": "ᤀ-ᤞᤠ-ᤫᤰ-᤻᥀᥄-᥏"
        },
        {
          "name": "Linear_A",
          "astral": "\uD801[\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]"
        },
        {
          "name": "Linear_B",
          "astral": "\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA]"
        },
        {
          "name": "Lisu",
          "bmp": "ꓐ-꓿",
          "astral": "𑾰"
        },
        {
          "name": "Lycian",
          "astral": "\uD800[\uDE80-\uDE9C]"
        },
        {
          "name": "Lydian",
          "astral": "\uD802[\uDD20-\uDD39\uDD3F]"
        },
        {
          "name": "Mahajani",
          "astral": "\uD804[\uDD50-\uDD76]"
        },
        {
          "name": "Makasar",
          "astral": "\uD807[\uDEE0-\uDEF8]"
        },
        {
          "name": "Malayalam",
          "bmp": "ഀ-ഌഎ-ഐഒ-ൄെ-ൈൊ-൏ൔ-ൣ൦-ൿ"
        },
        {
          "name": "Mandaic",
          "bmp": "ࡀ-࡛࡞"
        },
        {
          "name": "Manichaean",
          "astral": "\uD802[\uDEC0-\uDEE6\uDEEB-\uDEF6]"
        },
        {
          "name": "Marchen",
          "astral": "\uD807[\uDC70-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]"
        },
        {
          "name": "Masaram_Gondi",
          "astral": "\uD807[\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]"
        },
        {
          "name": "Medefaidrin",
          "astral": "\uD81B[\uDE40-\uDE9A]"
        },
        {
          "name": "Meetei_Mayek",
          "bmp": "ꫠ-꫶ꯀ-꯭꯰-꯹"
        },
        {
          "name": "Mende_Kikakui",
          "astral": "\uD83A[\uDC00-\uDCC4\uDCC7-\uDCD6]"
        },
        {
          "name": "Meroitic_Cursive",
          "astral": "\uD802[\uDDA0-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDDFF]"
        },
        {
          "name": "Meroitic_Hieroglyphs",
          "astral": "\uD802[\uDD80-\uDD9F]"
        },
        {
          "name": "Miao",
          "astral": "\uD81B[\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F]"
        },
        {
          "name": "Modi",
          "astral": "\uD805[\uDE00-\uDE44\uDE50-\uDE59]"
        },
        {
          "name": "Mongolian",
          "bmp": "᠀᠁᠄᠆-᠙ᠠ-ᡸᢀ-ᢪ",
          "astral": "\uD805[\uDE60-\uDE6C]"
        },
        {
          "name": "Mro",
          "astral": "\uD81A[\uDE40-\uDE5E\uDE60-\uDE69\uDE6E\uDE6F]"
        },
        {
          "name": "Multani",
          "astral": "\uD804[\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA9]"
        },
        {
          "name": "Myanmar",
          "bmp": "က-႟ꧠ-ꧾꩠ-ꩿ"
        },
        {
          "name": "Nabataean",
          "astral": "\uD802[\uDC80-\uDC9E\uDCA7-\uDCAF]"
        },
        {
          "name": "Nandinagari",
          "astral": "\uD806[\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE4]"
        },
        {
          "name": "New_Tai_Lue",
          "bmp": "ᦀ-ᦫᦰ-ᧉ᧐-᧚᧞᧟"
        },
        {
          "name": "Newa",
          "astral": "\uD805[\uDC00-\uDC5B\uDC5D-\uDC61]"
        },
        {
          "name": "Nko",
          "bmp": "߀-ߺ߽-߿"
        },
        {
          "name": "Nushu",
          "astral": "𖿡|\uD82C[\uDD70-\uDEFB]"
        },
        {
          "name": "Nyiakeng_Puachue_Hmong",
          "astral": "\uD838[\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDD4F]"
        },
        {
          "name": "Ogham",
          "bmp": " -᚜"
        },
        {
          "name": "Ol_Chiki",
          "bmp": "᱐-᱿"
        },
        {
          "name": "Old_Hungarian",
          "astral": "\uD803[\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDCFF]"
        },
        {
          "name": "Old_Italic",
          "astral": "\uD800[\uDF00-\uDF23\uDF2D-\uDF2F]"
        },
        {
          "name": "Old_North_Arabian",
          "astral": "\uD802[\uDE80-\uDE9F]"
        },
        {
          "name": "Old_Permic",
          "astral": "\uD800[\uDF50-\uDF7A]"
        },
        {
          "name": "Old_Persian",
          "astral": "\uD800[\uDFA0-\uDFC3\uDFC8-\uDFD5]"
        },
        {
          "name": "Old_Sogdian",
          "astral": "\uD803[\uDF00-\uDF27]"
        },
        {
          "name": "Old_South_Arabian",
          "astral": "\uD802[\uDE60-\uDE7F]"
        },
        {
          "name": "Old_Turkic",
          "astral": "\uD803[\uDC00-\uDC48]"
        },
        {
          "name": "Old_Uyghur",
          "astral": "\uD803[\uDF70-\uDF89]"
        },
        {
          "name": "Oriya",
          "bmp": "ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍୕-ୗଡ଼ଢ଼ୟ-ୣ୦-୷"
        },
        {
          "name": "Osage",
          "astral": "\uD801[\uDCB0-\uDCD3\uDCD8-\uDCFB]"
        },
        {
          "name": "Osmanya",
          "astral": "\uD801[\uDC80-\uDC9D\uDCA0-\uDCA9]"
        },
        {
          "name": "Pahawh_Hmong",
          "astral": "\uD81A[\uDF00-\uDF45\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]"
        },
        {
          "name": "Palmyrene",
          "astral": "\uD802[\uDC60-\uDC7F]"
        },
        {
          "name": "Pau_Cin_Hau",
          "astral": "\uD806[\uDEC0-\uDEF8]"
        },
        {
          "name": "Phags_Pa",
          "bmp": "ꡀ-꡷"
        },
        {
          "name": "Phoenician",
          "astral": "\uD802[\uDD00-\uDD1B\uDD1F]"
        },
        {
          "name": "Psalter_Pahlavi",
          "astral": "\uD802[\uDF80-\uDF91\uDF99-\uDF9C\uDFA9-\uDFAF]"
        },
        {
          "name": "Rejang",
          "bmp": "ꤰ-꥓꥟"
        },
        {
          "name": "Runic",
          "bmp": "ᚠ-ᛪᛮ-ᛸ"
        },
        {
          "name": "Samaritan",
          "bmp": "ࠀ-࠭࠰-࠾"
        },
        {
          "name": "Saurashtra",
          "bmp": "ꢀ-ꣅ꣎-꣙"
        },
        {
          "name": "Sharada",
          "astral": "\uD804[\uDD80-\uDDDF]"
        },
        {
          "name": "Shavian",
          "astral": "\uD801[\uDC50-\uDC7F]"
        },
        {
          "name": "Siddham",
          "astral": "\uD805[\uDD80-\uDDB5\uDDB8-\uDDDD]"
        },
        {
          "name": "SignWriting",
          "astral": "\uD836[\uDC00-\uDE8B\uDE9B-\uDE9F\uDEA1-\uDEAF]"
        },
        {
          "name": "Sinhala",
          "bmp": "ඁ-ඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟ෦-෯ෲ-෴",
          "astral": "\uD804[\uDDE1-\uDDF4]"
        },
        {
          "name": "Sogdian",
          "astral": "\uD803[\uDF30-\uDF59]"
        },
        {
          "name": "Sora_Sompeng",
          "astral": "\uD804[\uDCD0-\uDCE8\uDCF0-\uDCF9]"
        },
        {
          "name": "Soyombo",
          "astral": "\uD806[\uDE50-\uDEA2]"
        },
        {
          "name": "Sundanese",
          "bmp": "ᮀ-ᮿ᳀-᳇"
        },
        {
          "name": "Syloti_Nagri",
          "bmp": "ꠀ-꠬"
        },
        {
          "name": "Syriac",
          "bmp": "܀-܍܏-݊ݍ-ݏࡠ-ࡪ"
        },
        {
          "name": "Tagalog",
          "bmp": "ᜀ-᜕ᜟ"
        },
        {
          "name": "Tagbanwa",
          "bmp": "ᝠ-ᝬᝮ-ᝰᝲᝳ"
        },
        {
          "name": "Tai_Le",
          "bmp": "ᥐ-ᥭᥰ-ᥴ"
        },
        {
          "name": "Tai_Tham",
          "bmp": "ᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪠-᪭"
        },
        {
          "name": "Tai_Viet",
          "bmp": "ꪀ-ꫂꫛ-꫟"
        },
        {
          "name": "Takri",
          "astral": "\uD805[\uDE80-\uDEB9\uDEC0-\uDEC9]"
        },
        {
          "name": "Tamil",
          "bmp": "ஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௺",
          "astral": "\uD807[\uDFC0-\uDFF1\uDFFF]"
        },
        {
          "name": "Tangsa",
          "astral": "\uD81A[\uDE70-\uDEBE\uDEC0-\uDEC9]"
        },
        {
          "name": "Tangut",
          "astral": "𖿠|[\uD81C-\uD820][\uDC00-\uDFFF]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEFF]|\uD823[\uDD00-\uDD08]"
        },
        {
          "name": "Telugu",
          "bmp": "ఀ-ఌఎ-ఐఒ-నప-హ఼-ౄె-ైొ-్ౕౖౘ-ౚౝౠ-ౣ౦-౯౷-౿"
        },
        {
          "name": "Thaana",
          "bmp": "ހ-ޱ"
        },
        {
          "name": "Thai",
          "bmp": "ก-ฺเ-๛"
        },
        {
          "name": "Tibetan",
          "bmp": "ༀ-ཇཉ-ཬཱ-ྗྙ-ྼ྾-࿌࿎-࿔࿙࿚"
        },
        {
          "name": "Tifinagh",
          "bmp": "ⴰ-ⵧⵯ⵰⵿"
        },
        {
          "name": "Tirhuta",
          "astral": "\uD805[\uDC80-\uDCC7\uDCD0-\uDCD9]"
        },
        {
          "name": "Toto",
          "astral": "\uD838[\uDE90-\uDEAE]"
        },
        {
          "name": "Ugaritic",
          "astral": "\uD800[\uDF80-\uDF9D\uDF9F]"
        },
        {
          "name": "Vai",
          "bmp": "ꔀ-ꘫ"
        },
        {
          "name": "Vithkuqi",
          "astral": "\uD801[\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC]"
        },
        {
          "name": "Wancho",
          "astral": "\uD838[\uDEC0-\uDEF9\uDEFF]"
        },
        {
          "name": "Warang_Citi",
          "astral": "\uD806[\uDCA0-\uDCF2\uDCFF]"
        },
        {
          "name": "Yezidi",
          "astral": "\uD803[\uDE80-\uDEA9\uDEAB-\uDEAD\uDEB0\uDEB1]"
        },
        {
          "name": "Yi",
          "bmp": "ꀀ-ꒌ꒐-꓆"
        },
        {
          "name": "Zanabazar_Square",
          "astral": "\uD806[\uDE00-\uDE47]"
        }
      ];
    }
  });

  // node_modules/xregexp/lib/addons/unicode-scripts.js
  var require_unicode_scripts = __commonJS({
    "node_modules/xregexp/lib/addons/unicode-scripts.js"(exports, module) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      var _interopRequireDefault = require_interopRequireDefault();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _scripts = _interopRequireDefault(require_scripts());
      var _default = exports["default"] = function _default2(XRegExp) {
        if (!XRegExp.addUnicodeData) {
          throw new ReferenceError("Unicode Base must be loaded before Unicode Scripts");
        }
        XRegExp.addUnicodeData(_scripts["default"], "Script");
      };
      module.exports = exports.default;
    }
  });

  // node_modules/xregexp/lib/index.js
  var require_lib = __commonJS({
    "node_modules/xregexp/lib/index.js"(exports, module) {
      "use strict";
      var _Object$defineProperty = require_define_property3();
      var _interopRequireDefault = require_interopRequireDefault();
      _Object$defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _xregexp = _interopRequireDefault(require_xregexp());
      var _build = _interopRequireDefault(require_build());
      var _matchrecursive = _interopRequireDefault(require_matchrecursive());
      var _unicodeBase = _interopRequireDefault(require_unicode_base());
      var _unicodeCategories = _interopRequireDefault(require_unicode_categories());
      var _unicodeProperties = _interopRequireDefault(require_unicode_properties());
      var _unicodeScripts = _interopRequireDefault(require_unicode_scripts());
      (0, _build["default"])(_xregexp["default"]);
      (0, _matchrecursive["default"])(_xregexp["default"]);
      (0, _unicodeBase["default"])(_xregexp["default"]);
      (0, _unicodeCategories["default"])(_xregexp["default"]);
      (0, _unicodeProperties["default"])(_xregexp["default"]);
      (0, _unicodeScripts["default"])(_xregexp["default"]);
      var _default = exports["default"] = _xregexp["default"];
      module.exports = exports.default;
    }
  });

  // src/meta.ts
  var NAME = "tti";
  var AUTHOR = "白鱼、错误";
  var VERSION = "2.0.0";

  // src/ext.ts
  var ext = (() => {
    const existing = seal.ext.find(NAME);
    if (existing) {
      existing.author = AUTHOR;
      existing.version = VERSION;
      return existing;
    }
    const created = seal.ext.new(NAME, AUTHOR, VERSION);
    seal.ext.register(created);
    return created;
  })();

  // node_modules/@chevrotain/utils/lib/src/print.js
  function PRINT_ERROR(msg) {
    if (console && console.error) {
      console.error(`Error: ${msg}`);
    }
  }
  function PRINT_WARNING(msg) {
    if (console && console.warn) {
      console.warn(`Warning: ${msg}`);
    }
  }

  // node_modules/@chevrotain/utils/lib/src/timer.js
  function timer(func) {
    const start = (/* @__PURE__ */ new Date()).getTime();
    const val = func();
    const end = (/* @__PURE__ */ new Date()).getTime();
    const total = end - start;
    return { time: total, value: val };
  }

  // node_modules/@chevrotain/utils/lib/src/to-fast-properties.js
  function toFastProperties(toBecomeFast) {
    function FakeConstructor() {
    }
    FakeConstructor.prototype = toBecomeFast;
    const fakeInstance = new FakeConstructor();
    function fakeAccess() {
      return typeof fakeInstance.bar;
    }
    fakeAccess();
    fakeAccess();
    if (1)
      return toBecomeFast;
    (0, eval)(toBecomeFast);
  }

  // node_modules/@chevrotain/gast/lib/src/model.js
  function tokenLabel(tokType) {
    if (hasTokenLabel(tokType)) {
      return tokType.LABEL;
    } else {
      return tokType.name;
    }
  }
  function hasTokenLabel(obj) {
    return typeof obj.LABEL === "string" && obj.LABEL !== "";
  }
  var AbstractProduction = class {
    get definition() {
      return this._definition;
    }
    set definition(value) {
      this._definition = value;
    }
    constructor(_definition) {
      this._definition = _definition;
    }
    accept(visitor) {
      visitor.visit(this);
      this.definition.forEach((prod) => {
        prod.accept(visitor);
      });
    }
  };
  var NonTerminal = class extends AbstractProduction {
    constructor(options) {
      super([]);
      this.idx = 1;
      Object.assign(this, pickOnlyDefined(options));
    }
    set definition(definition) {
    }
    get definition() {
      if (this.referencedRule !== void 0) {
        return this.referencedRule.definition;
      }
      return [];
    }
    accept(visitor) {
      visitor.visit(this);
    }
  };
  var Rule = class extends AbstractProduction {
    constructor(options) {
      super(options.definition);
      this.orgText = "";
      Object.assign(this, pickOnlyDefined(options));
    }
  };
  var Alternative = class extends AbstractProduction {
    constructor(options) {
      super(options.definition);
      this.ignoreAmbiguities = false;
      Object.assign(this, pickOnlyDefined(options));
    }
  };
  var Option = class extends AbstractProduction {
    constructor(options) {
      super(options.definition);
      this.idx = 1;
      Object.assign(this, pickOnlyDefined(options));
    }
  };
  var RepetitionMandatory = class extends AbstractProduction {
    constructor(options) {
      super(options.definition);
      this.idx = 1;
      Object.assign(this, pickOnlyDefined(options));
    }
  };
  var RepetitionMandatoryWithSeparator = class extends AbstractProduction {
    constructor(options) {
      super(options.definition);
      this.idx = 1;
      Object.assign(this, pickOnlyDefined(options));
    }
  };
  var Repetition = class extends AbstractProduction {
    constructor(options) {
      super(options.definition);
      this.idx = 1;
      Object.assign(this, pickOnlyDefined(options));
    }
  };
  var RepetitionWithSeparator = class extends AbstractProduction {
    constructor(options) {
      super(options.definition);
      this.idx = 1;
      Object.assign(this, pickOnlyDefined(options));
    }
  };
  var Alternation = class extends AbstractProduction {
    get definition() {
      return this._definition;
    }
    set definition(value) {
      this._definition = value;
    }
    constructor(options) {
      super(options.definition);
      this.idx = 1;
      this.ignoreAmbiguities = false;
      this.hasPredicates = false;
      Object.assign(this, pickOnlyDefined(options));
    }
  };
  var Terminal = class {
    constructor(options) {
      this.idx = 1;
      Object.assign(this, pickOnlyDefined(options));
    }
    accept(visitor) {
      visitor.visit(this);
    }
  };
  function serializeGrammar(topRules) {
    return topRules.map(serializeProduction);
  }
  function serializeProduction(node) {
    function convertDefinition(definition) {
      return definition.map(serializeProduction);
    }
    if (node instanceof NonTerminal) {
      const serializedNonTerminal = {
        type: "NonTerminal",
        name: node.nonTerminalName,
        idx: node.idx
      };
      if (typeof node.label === "string") {
        serializedNonTerminal.label = node.label;
      }
      return serializedNonTerminal;
    } else if (node instanceof Alternative) {
      return {
        type: "Alternative",
        definition: convertDefinition(node.definition)
      };
    } else if (node instanceof Option) {
      return {
        type: "Option",
        idx: node.idx,
        definition: convertDefinition(node.definition)
      };
    } else if (node instanceof RepetitionMandatory) {
      return {
        type: "RepetitionMandatory",
        idx: node.idx,
        definition: convertDefinition(node.definition)
      };
    } else if (node instanceof RepetitionMandatoryWithSeparator) {
      return {
        type: "RepetitionMandatoryWithSeparator",
        idx: node.idx,
        separator: serializeProduction(new Terminal({ terminalType: node.separator })),
        definition: convertDefinition(node.definition)
      };
    } else if (node instanceof RepetitionWithSeparator) {
      return {
        type: "RepetitionWithSeparator",
        idx: node.idx,
        separator: serializeProduction(new Terminal({ terminalType: node.separator })),
        definition: convertDefinition(node.definition)
      };
    } else if (node instanceof Repetition) {
      return {
        type: "Repetition",
        idx: node.idx,
        definition: convertDefinition(node.definition)
      };
    } else if (node instanceof Alternation) {
      return {
        type: "Alternation",
        idx: node.idx,
        definition: convertDefinition(node.definition)
      };
    } else if (node instanceof Terminal) {
      const serializedTerminal = {
        type: "Terminal",
        name: node.terminalType.name,
        label: tokenLabel(node.terminalType),
        idx: node.idx
      };
      if (typeof node.label === "string") {
        serializedTerminal.terminalLabel = node.label;
      }
      const pattern = node.terminalType.PATTERN;
      if (node.terminalType.PATTERN) {
        serializedTerminal.pattern = pattern instanceof RegExp ? pattern.source : pattern;
      }
      return serializedTerminal;
    } else if (node instanceof Rule) {
      return {
        type: "Rule",
        name: node.name,
        orgText: node.orgText,
        definition: convertDefinition(node.definition)
      };
    } else {
      throw Error("non exhaustive match");
    }
  }
  function pickOnlyDefined(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== void 0));
  }

  // node_modules/@chevrotain/gast/lib/src/visitor.js
  var GAstVisitor = class {
    visit(node) {
      const nodeAny = node;
      switch (nodeAny.constructor) {
        case NonTerminal:
          return this.visitNonTerminal(nodeAny);
        case Alternative:
          return this.visitAlternative(nodeAny);
        case Option:
          return this.visitOption(nodeAny);
        case RepetitionMandatory:
          return this.visitRepetitionMandatory(nodeAny);
        case RepetitionMandatoryWithSeparator:
          return this.visitRepetitionMandatoryWithSeparator(nodeAny);
        case RepetitionWithSeparator:
          return this.visitRepetitionWithSeparator(nodeAny);
        case Repetition:
          return this.visitRepetition(nodeAny);
        case Alternation:
          return this.visitAlternation(nodeAny);
        case Terminal:
          return this.visitTerminal(nodeAny);
        case Rule:
          return this.visitRule(nodeAny);
        default:
          throw Error("non exhaustive match");
      }
    }
    /* c8 ignore next */
    visitNonTerminal(node) {
    }
    /* c8 ignore next */
    visitAlternative(node) {
    }
    /* c8 ignore next */
    visitOption(node) {
    }
    /* c8 ignore next */
    visitRepetition(node) {
    }
    /* c8 ignore next */
    visitRepetitionMandatory(node) {
    }
    /* c8 ignore next 3 */
    visitRepetitionMandatoryWithSeparator(node) {
    }
    /* c8 ignore next */
    visitRepetitionWithSeparator(node) {
    }
    /* c8 ignore next */
    visitAlternation(node) {
    }
    /* c8 ignore next */
    visitTerminal(node) {
    }
    /* c8 ignore next */
    visitRule(node) {
    }
  };

  // node_modules/@chevrotain/gast/lib/src/helpers.js
  function isSequenceProd(prod) {
    return prod instanceof Alternative || prod instanceof Option || prod instanceof Repetition || prod instanceof RepetitionMandatory || prod instanceof RepetitionMandatoryWithSeparator || prod instanceof RepetitionWithSeparator || prod instanceof Terminal || prod instanceof Rule;
  }
  function isOptionalProd(prod, alreadyVisited = []) {
    const isDirectlyOptional = prod instanceof Option || prod instanceof Repetition || prod instanceof RepetitionWithSeparator;
    if (isDirectlyOptional) {
      return true;
    }
    if (prod instanceof Alternation) {
      return prod.definition.some((subProd) => {
        return isOptionalProd(subProd, alreadyVisited);
      });
    } else if (prod instanceof NonTerminal && alreadyVisited.includes(prod)) {
      return false;
    } else if (prod instanceof AbstractProduction) {
      if (prod instanceof NonTerminal) {
        alreadyVisited.push(prod);
      }
      return prod.definition.every((subProd) => {
        return isOptionalProd(subProd, alreadyVisited);
      });
    } else {
      return false;
    }
  }
  function isBranchingProd(prod) {
    return prod instanceof Alternation;
  }
  function getProductionDslName(prod) {
    if (prod instanceof NonTerminal) {
      return "SUBRULE";
    } else if (prod instanceof Option) {
      return "OPTION";
    } else if (prod instanceof Alternation) {
      return "OR";
    } else if (prod instanceof RepetitionMandatory) {
      return "AT_LEAST_ONE";
    } else if (prod instanceof RepetitionMandatoryWithSeparator) {
      return "AT_LEAST_ONE_SEP";
    } else if (prod instanceof RepetitionWithSeparator) {
      return "MANY_SEP";
    } else if (prod instanceof Repetition) {
      return "MANY";
    } else if (prod instanceof Terminal) {
      return "CONSUME";
    } else {
      throw Error("non exhaustive match");
    }
  }

  // node_modules/chevrotain/lib/src/parse/grammar/rest.js
  var RestWalker = class {
    walk(prod, prevRest = []) {
      prod.definition.forEach((subProd, index) => {
        const currRest = prod.definition.slice(index + 1);
        if (subProd instanceof NonTerminal) {
          this.walkProdRef(subProd, currRest, prevRest);
        } else if (subProd instanceof Terminal) {
          this.walkTerminal(subProd, currRest, prevRest);
        } else if (subProd instanceof Alternative) {
          this.walkFlat(subProd, currRest, prevRest);
        } else if (subProd instanceof Option) {
          this.walkOption(subProd, currRest, prevRest);
        } else if (subProd instanceof RepetitionMandatory) {
          this.walkAtLeastOne(subProd, currRest, prevRest);
        } else if (subProd instanceof RepetitionMandatoryWithSeparator) {
          this.walkAtLeastOneSep(subProd, currRest, prevRest);
        } else if (subProd instanceof RepetitionWithSeparator) {
          this.walkManySep(subProd, currRest, prevRest);
        } else if (subProd instanceof Repetition) {
          this.walkMany(subProd, currRest, prevRest);
        } else if (subProd instanceof Alternation) {
          this.walkOr(subProd, currRest, prevRest);
        } else {
          throw Error("non exhaustive match");
        }
      });
    }
    walkTerminal(terminal, currRest, prevRest) {
    }
    walkProdRef(refProd, currRest, prevRest) {
    }
    walkFlat(flatProd, currRest, prevRest) {
      const fullOrRest = currRest.concat(prevRest);
      this.walk(flatProd, fullOrRest);
    }
    walkOption(optionProd, currRest, prevRest) {
      const fullOrRest = currRest.concat(prevRest);
      this.walk(optionProd, fullOrRest);
    }
    walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
      const fullAtLeastOneRest = [
        new Option({ definition: atLeastOneProd.definition })
      ].concat(currRest, prevRest);
      this.walk(atLeastOneProd, fullAtLeastOneRest);
    }
    walkAtLeastOneSep(atLeastOneSepProd, currRest, prevRest) {
      const fullAtLeastOneSepRest = restForRepetitionWithSeparator(atLeastOneSepProd, currRest, prevRest);
      this.walk(atLeastOneSepProd, fullAtLeastOneSepRest);
    }
    walkMany(manyProd, currRest, prevRest) {
      const fullManyRest = [
        new Option({ definition: manyProd.definition })
      ].concat(currRest, prevRest);
      this.walk(manyProd, fullManyRest);
    }
    walkManySep(manySepProd, currRest, prevRest) {
      const fullManySepRest = restForRepetitionWithSeparator(manySepProd, currRest, prevRest);
      this.walk(manySepProd, fullManySepRest);
    }
    walkOr(orProd, currRest, prevRest) {
      const fullOrRest = currRest.concat(prevRest);
      orProd.definition.forEach((alt) => {
        const prodWrapper = new Alternative({ definition: [alt] });
        this.walk(prodWrapper, fullOrRest);
      });
    }
  };
  function restForRepetitionWithSeparator(repSepProd, currRest, prevRest) {
    const repSepRest = [
      new Option({
        definition: [
          new Terminal({ terminalType: repSepProd.separator })
        ].concat(repSepProd.definition)
      })
    ];
    const fullRepSepRest = repSepRest.concat(currRest, prevRest);
    return fullRepSepRest;
  }

  // node_modules/chevrotain/lib/src/parse/grammar/first.js
  function first(prod) {
    if (prod instanceof NonTerminal) {
      return first(prod.referencedRule);
    } else if (prod instanceof Terminal) {
      return firstForTerminal(prod);
    } else if (isSequenceProd(prod)) {
      return firstForSequence(prod);
    } else if (isBranchingProd(prod)) {
      return firstForBranching(prod);
    } else {
      throw Error("non exhaustive match");
    }
  }
  function firstForSequence(prod) {
    let firstSet = [];
    const seq = prod.definition;
    let nextSubProdIdx = 0;
    let hasInnerProdsRemaining = seq.length > nextSubProdIdx;
    let currSubProd;
    let isLastInnerProdOptional = true;
    while (hasInnerProdsRemaining && isLastInnerProdOptional) {
      currSubProd = seq[nextSubProdIdx];
      isLastInnerProdOptional = isOptionalProd(currSubProd);
      firstSet = firstSet.concat(first(currSubProd));
      nextSubProdIdx = nextSubProdIdx + 1;
      hasInnerProdsRemaining = seq.length > nextSubProdIdx;
    }
    return [...new Set(firstSet)];
  }
  function firstForBranching(prod) {
    const allAlternativesFirsts = prod.definition.map((innerProd) => {
      return first(innerProd);
    });
    return [...new Set(allAlternativesFirsts.flat())];
  }
  function firstForTerminal(terminal) {
    return [terminal.terminalType];
  }

  // node_modules/chevrotain/lib/src/parse/constants.js
  var IN = "_~IN~_";

  // node_modules/chevrotain/lib/src/parse/grammar/follow.js
  var ResyncFollowsWalker = class extends RestWalker {
    constructor(topProd) {
      super();
      this.topProd = topProd;
      this.follows = {};
    }
    startWalking() {
      this.walk(this.topProd);
      return this.follows;
    }
    walkTerminal(terminal, currRest, prevRest) {
    }
    walkProdRef(refProd, currRest, prevRest) {
      const followName = buildBetweenProdsFollowPrefix(refProd.referencedRule, refProd.idx) + this.topProd.name;
      const fullRest = currRest.concat(prevRest);
      const restProd = new Alternative({ definition: fullRest });
      const t_in_topProd_follows = first(restProd);
      this.follows[followName] = t_in_topProd_follows;
    }
  };
  function computeAllProdsFollows(topProductions) {
    const reSyncFollows = {};
    topProductions.forEach((topProd) => {
      const currRefsFollow = new ResyncFollowsWalker(topProd).startWalking();
      Object.assign(reSyncFollows, currRefsFollow);
    });
    return reSyncFollows;
  }
  function buildBetweenProdsFollowPrefix(inner, occurenceInParent) {
    return inner.name + occurenceInParent + IN;
  }

  // node_modules/@chevrotain/regexp-to-ast/lib/src/utils.js
  function cc(char) {
    return char.charCodeAt(0);
  }
  function insertToSet(item, set) {
    if (Array.isArray(item)) {
      item.forEach(function(subItem) {
        set.push(subItem);
      });
    } else {
      set.push(item);
    }
  }
  function addFlag(flagObj, flagKey) {
    if (flagObj[flagKey] === true) {
      throw "duplicate flag " + flagKey;
    }
    const x2 = flagObj[flagKey];
    flagObj[flagKey] = true;
  }
  function ASSERT_EXISTS(obj) {
    if (obj === void 0) {
      throw Error("Internal Error - Should never get here!");
    }
    return true;
  }
  function ASSERT_NEVER_REACH_HERE() {
    throw Error("Internal Error - Should never get here!");
  }
  function isCharacter(obj) {
    return obj["type"] === "Character";
  }

  // node_modules/@chevrotain/regexp-to-ast/lib/src/character-classes.js
  var digitsCharCodes = [];
  for (let i = cc("0"); i <= cc("9"); i++) {
    digitsCharCodes.push(i);
  }
  var wordCharCodes = [cc("_")].concat(digitsCharCodes);
  for (let i = cc("a"); i <= cc("z"); i++) {
    wordCharCodes.push(i);
  }
  for (let i = cc("A"); i <= cc("Z"); i++) {
    wordCharCodes.push(i);
  }
  var whitespaceCodes = [
    cc(" "),
    cc("\f"),
    cc("\n"),
    cc("\r"),
    cc("	"),
    cc("\v"),
    cc("	"),
    cc(" "),
    cc(" "),
    cc(" "),
    cc(" "),
    cc(" "),
    cc(" "),
    cc(" "),
    cc(" "),
    cc(" "),
    cc(" "),
    cc(" "),
    cc(" "),
    cc(" "),
    cc("\u2028"),
    cc("\u2029"),
    cc(" "),
    cc(" "),
    cc("　"),
    cc("\uFEFF")
  ];

  // node_modules/@chevrotain/regexp-to-ast/lib/src/regexp-parser.js
  var hexDigitPattern = /[0-9a-fA-F]/;
  var decimalPattern = /[0-9]/;
  var decimalPatternNoZero = /[1-9]/;
  var RegExpParser = class {
    constructor() {
      this.idx = 0;
      this.input = "";
      this.groupIdx = 0;
    }
    saveState() {
      return {
        idx: this.idx,
        input: this.input,
        groupIdx: this.groupIdx
      };
    }
    restoreState(newState) {
      this.idx = newState.idx;
      this.input = newState.input;
      this.groupIdx = newState.groupIdx;
    }
    pattern(input) {
      this.idx = 0;
      this.input = input;
      this.groupIdx = 0;
      this.consumeChar("/");
      const value = this.disjunction();
      this.consumeChar("/");
      const flags = {
        type: "Flags",
        loc: { begin: this.idx, end: input.length },
        global: false,
        ignoreCase: false,
        multiLine: false,
        unicode: false,
        sticky: false
      };
      while (this.isRegExpFlag()) {
        switch (this.popChar()) {
          case "g":
            addFlag(flags, "global");
            break;
          case "i":
            addFlag(flags, "ignoreCase");
            break;
          case "m":
            addFlag(flags, "multiLine");
            break;
          case "u":
            addFlag(flags, "unicode");
            break;
          case "y":
            addFlag(flags, "sticky");
            break;
        }
      }
      if (this.idx !== this.input.length) {
        throw Error("Redundant input: " + this.input.substring(this.idx));
      }
      return {
        type: "Pattern",
        flags,
        value,
        loc: this.loc(0)
      };
    }
    disjunction() {
      const alts = [];
      const begin = this.idx;
      alts.push(this.alternative());
      while (this.peekChar() === "|") {
        this.consumeChar("|");
        alts.push(this.alternative());
      }
      return { type: "Disjunction", value: alts, loc: this.loc(begin) };
    }
    alternative() {
      const terms = [];
      const begin = this.idx;
      while (this.isTerm()) {
        terms.push(this.term());
      }
      return { type: "Alternative", value: terms, loc: this.loc(begin) };
    }
    term() {
      if (this.isAssertion()) {
        return this.assertion();
      } else {
        return this.atom();
      }
    }
    assertion() {
      const begin = this.idx;
      switch (this.popChar()) {
        case "^":
          return {
            type: "StartAnchor",
            loc: this.loc(begin)
          };
        case "$":
          return { type: "EndAnchor", loc: this.loc(begin) };
        case "\\":
          switch (this.popChar()) {
            case "b":
              return {
                type: "WordBoundary",
                loc: this.loc(begin)
              };
            case "B":
              return {
                type: "NonWordBoundary",
                loc: this.loc(begin)
              };
          }
          throw Error("Invalid Assertion Escape");
        case "(":
          this.consumeChar("?");
          let type;
          switch (this.popChar()) {
            case "=":
              type = "Lookahead";
              break;
            case "!":
              type = "NegativeLookahead";
              break;
            case "<": {
              switch (this.popChar()) {
                case "=":
                  type = "Lookbehind";
                  break;
                case "!":
                  type = "NegativeLookbehind";
              }
              break;
            }
          }
          ASSERT_EXISTS(type);
          const disjunction = this.disjunction();
          this.consumeChar(")");
          return {
            type,
            value: disjunction,
            loc: this.loc(begin)
          };
      }
      return ASSERT_NEVER_REACH_HERE();
    }
    quantifier(isBacktracking = false) {
      let range = void 0;
      const begin = this.idx;
      switch (this.popChar()) {
        case "*":
          range = {
            atLeast: 0,
            atMost: Infinity
          };
          break;
        case "+":
          range = {
            atLeast: 1,
            atMost: Infinity
          };
          break;
        case "?":
          range = {
            atLeast: 0,
            atMost: 1
          };
          break;
        case "{":
          const atLeast = this.integerIncludingZero();
          switch (this.popChar()) {
            case "}":
              range = {
                atLeast,
                atMost: atLeast
              };
              break;
            case ",":
              let atMost;
              if (this.isDigit()) {
                atMost = this.integerIncludingZero();
                range = {
                  atLeast,
                  atMost
                };
              } else {
                range = {
                  atLeast,
                  atMost: Infinity
                };
              }
              this.consumeChar("}");
              break;
          }
          if (isBacktracking === true && range === void 0) {
            return void 0;
          }
          ASSERT_EXISTS(range);
          break;
      }
      if (isBacktracking === true && range === void 0) {
        return void 0;
      }
      if (ASSERT_EXISTS(range)) {
        if (this.peekChar(0) === "?") {
          this.consumeChar("?");
          range.greedy = false;
        } else {
          range.greedy = true;
        }
        range.type = "Quantifier";
        range.loc = this.loc(begin);
        return range;
      }
    }
    atom() {
      let atom;
      const begin = this.idx;
      switch (this.peekChar()) {
        case ".":
          atom = this.dotAll();
          break;
        case "\\":
          atom = this.atomEscape();
          break;
        case "[":
          atom = this.characterClass();
          break;
        case "(":
          atom = this.group();
          break;
      }
      if (atom === void 0 && this.isPatternCharacter()) {
        atom = this.patternCharacter();
      }
      if (ASSERT_EXISTS(atom)) {
        atom.loc = this.loc(begin);
        if (this.isQuantifier()) {
          atom.quantifier = this.quantifier();
        }
        return atom;
      }
      return ASSERT_NEVER_REACH_HERE();
    }
    dotAll() {
      this.consumeChar(".");
      return {
        type: "Set",
        complement: true,
        value: [cc("\n"), cc("\r"), cc("\u2028"), cc("\u2029")]
      };
    }
    atomEscape() {
      this.consumeChar("\\");
      switch (this.peekChar()) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          return this.decimalEscapeAtom();
        case "d":
        case "D":
        case "s":
        case "S":
        case "w":
        case "W":
          return this.characterClassEscape();
        case "f":
        case "n":
        case "r":
        case "t":
        case "v":
          return this.controlEscapeAtom();
        case "c":
          return this.controlLetterEscapeAtom();
        case "0":
          return this.nulCharacterAtom();
        case "x":
          return this.hexEscapeSequenceAtom();
        case "u":
          return this.regExpUnicodeEscapeSequenceAtom();
        default:
          return this.identityEscapeAtom();
      }
    }
    decimalEscapeAtom() {
      const value = this.positiveInteger();
      return { type: "GroupBackReference", value };
    }
    characterClassEscape() {
      let set;
      let complement = false;
      switch (this.popChar()) {
        case "d":
          set = digitsCharCodes;
          break;
        case "D":
          set = digitsCharCodes;
          complement = true;
          break;
        case "s":
          set = whitespaceCodes;
          break;
        case "S":
          set = whitespaceCodes;
          complement = true;
          break;
        case "w":
          set = wordCharCodes;
          break;
        case "W":
          set = wordCharCodes;
          complement = true;
          break;
      }
      if (ASSERT_EXISTS(set)) {
        return { type: "Set", value: set, complement };
      }
      return ASSERT_NEVER_REACH_HERE();
    }
    controlEscapeAtom() {
      let escapeCode;
      switch (this.popChar()) {
        case "f":
          escapeCode = cc("\f");
          break;
        case "n":
          escapeCode = cc("\n");
          break;
        case "r":
          escapeCode = cc("\r");
          break;
        case "t":
          escapeCode = cc("	");
          break;
        case "v":
          escapeCode = cc("\v");
          break;
      }
      if (ASSERT_EXISTS(escapeCode)) {
        return { type: "Character", value: escapeCode };
      }
      return ASSERT_NEVER_REACH_HERE();
    }
    controlLetterEscapeAtom() {
      this.consumeChar("c");
      const letter = this.popChar();
      if (/[a-zA-Z]/.test(letter) === false) {
        throw Error("Invalid ");
      }
      const letterCode = letter.toUpperCase().charCodeAt(0) - 64;
      return { type: "Character", value: letterCode };
    }
    nulCharacterAtom() {
      this.consumeChar("0");
      return { type: "Character", value: cc("\0") };
    }
    hexEscapeSequenceAtom() {
      this.consumeChar("x");
      return this.parseHexDigits(2);
    }
    regExpUnicodeEscapeSequenceAtom() {
      this.consumeChar("u");
      return this.parseHexDigits(4);
    }
    identityEscapeAtom() {
      const escapedChar = this.popChar();
      return { type: "Character", value: cc(escapedChar) };
    }
    classPatternCharacterAtom() {
      switch (this.peekChar()) {
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
        case "\\":
        case "]":
          throw Error("TBD");
        default:
          const nextChar = this.popChar();
          return { type: "Character", value: cc(nextChar) };
      }
    }
    characterClass() {
      const set = [];
      let complement = false;
      this.consumeChar("[");
      if (this.peekChar(0) === "^") {
        this.consumeChar("^");
        complement = true;
      }
      while (this.isClassAtom()) {
        const from = this.classAtom();
        const isFromSingleChar = from.type === "Character";
        if (isCharacter(from) && this.isRangeDash()) {
          this.consumeChar("-");
          const to = this.classAtom();
          const isToSingleChar = to.type === "Character";
          if (isCharacter(to)) {
            if (to.value < from.value) {
              throw Error("Range out of order in character class");
            }
            set.push({ from: from.value, to: to.value });
          } else {
            insertToSet(from.value, set);
            set.push(cc("-"));
            insertToSet(to.value, set);
          }
        } else {
          insertToSet(from.value, set);
        }
      }
      this.consumeChar("]");
      return { type: "Set", complement, value: set };
    }
    classAtom() {
      switch (this.peekChar()) {
        case "]":
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
          throw Error("TBD");
        case "\\":
          return this.classEscape();
        default:
          return this.classPatternCharacterAtom();
      }
    }
    classEscape() {
      this.consumeChar("\\");
      switch (this.peekChar()) {
        case "b":
          this.consumeChar("b");
          return { type: "Character", value: cc("\b") };
        case "d":
        case "D":
        case "s":
        case "S":
        case "w":
        case "W":
          return this.characterClassEscape();
        case "f":
        case "n":
        case "r":
        case "t":
        case "v":
          return this.controlEscapeAtom();
        case "c":
          return this.controlLetterEscapeAtom();
        case "0":
          return this.nulCharacterAtom();
        case "x":
          return this.hexEscapeSequenceAtom();
        case "u":
          return this.regExpUnicodeEscapeSequenceAtom();
        default:
          return this.identityEscapeAtom();
      }
    }
    group() {
      let capturing = true;
      this.consumeChar("(");
      switch (this.peekChar(0)) {
        case "?":
          this.consumeChar("?");
          this.consumeChar(":");
          capturing = false;
          break;
        default:
          this.groupIdx++;
          break;
      }
      const value = this.disjunction();
      this.consumeChar(")");
      const groupAst = {
        type: "Group",
        capturing,
        value
      };
      if (capturing) {
        groupAst["idx"] = this.groupIdx;
      }
      return groupAst;
    }
    positiveInteger() {
      let number = this.popChar();
      if (decimalPatternNoZero.test(number) === false) {
        throw Error("Expecting a positive integer");
      }
      while (decimalPattern.test(this.peekChar(0))) {
        number += this.popChar();
      }
      return parseInt(number, 10);
    }
    integerIncludingZero() {
      let number = this.popChar();
      if (decimalPattern.test(number) === false) {
        throw Error("Expecting an integer");
      }
      while (decimalPattern.test(this.peekChar(0))) {
        number += this.popChar();
      }
      return parseInt(number, 10);
    }
    patternCharacter() {
      const nextChar = this.popChar();
      switch (nextChar) {
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
        case "^":
        case "$":
        case "\\":
        case ".":
        case "*":
        case "+":
        case "?":
        case "(":
        case ")":
        case "[":
        case "|":
          throw Error("TBD");
        default:
          return { type: "Character", value: cc(nextChar) };
      }
    }
    isRegExpFlag() {
      switch (this.peekChar(0)) {
        case "g":
        case "i":
        case "m":
        case "u":
        case "y":
          return true;
        default:
          return false;
      }
    }
    isRangeDash() {
      return this.peekChar() === "-" && this.isClassAtom(1);
    }
    isDigit() {
      return decimalPattern.test(this.peekChar(0));
    }
    isClassAtom(howMuch = 0) {
      switch (this.peekChar(howMuch)) {
        case "]":
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
          return false;
        default:
          return true;
      }
    }
    isTerm() {
      return this.isAtom() || this.isAssertion();
    }
    isAtom() {
      if (this.isPatternCharacter()) {
        return true;
      }
      switch (this.peekChar(0)) {
        case ".":
        case "\\":
        case "[":
        case "(":
          return true;
        default:
          return false;
      }
    }
    isAssertion() {
      switch (this.peekChar(0)) {
        case "^":
        case "$":
          return true;
        case "\\":
          switch (this.peekChar(1)) {
            case "b":
            case "B":
              return true;
            default:
              return false;
          }
        case "(":
          return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!" || this.peekChar(2) === "<" && (this.peekChar(3) === "=" || this.peekChar(3) === "!"));
        default:
          return false;
      }
    }
    isQuantifier() {
      const prevState = this.saveState();
      try {
        return this.quantifier(true) !== void 0;
      } catch (e) {
        return false;
      } finally {
        this.restoreState(prevState);
      }
    }
    isPatternCharacter() {
      switch (this.peekChar()) {
        case "^":
        case "$":
        case "\\":
        case ".":
        case "*":
        case "+":
        case "?":
        case "(":
        case ")":
        case "[":
        case "|":
        case "/":
        case "\n":
        case "\r":
        case "\u2028":
        case "\u2029":
          return false;
        default:
          return true;
      }
    }
    parseHexDigits(howMany) {
      let hexString = "";
      for (let i = 0; i < howMany; i++) {
        const hexChar = this.popChar();
        if (hexDigitPattern.test(hexChar) === false) {
          throw Error("Expecting a HexDecimal digits");
        }
        hexString += hexChar;
      }
      const charCode = parseInt(hexString, 16);
      return { type: "Character", value: charCode };
    }
    peekChar(howMuch = 0) {
      return this.input[this.idx + howMuch];
    }
    popChar() {
      const nextChar = this.peekChar(0);
      this.consumeChar(void 0);
      return nextChar;
    }
    consumeChar(char) {
      if (char !== void 0 && this.input[this.idx] !== char) {
        throw Error("Expected: '" + char + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
      }
      if (this.idx >= this.input.length) {
        throw Error("Unexpected end of input");
      }
      this.idx++;
    }
    loc(begin) {
      return { begin, end: this.idx };
    }
  };

  // node_modules/@chevrotain/regexp-to-ast/lib/src/base-regexp-visitor.js
  var BaseRegExpVisitor = class {
    visitChildren(node) {
      for (const key in node) {
        const child = node[key];
        if (node.hasOwnProperty(key)) {
          if (child.type !== void 0) {
            this.visit(child);
          } else if (Array.isArray(child)) {
            child.forEach((subChild) => {
              this.visit(subChild);
            }, this);
          }
        }
      }
    }
    visit(node) {
      switch (node.type) {
        case "Pattern":
          this.visitPattern(node);
          break;
        case "Flags":
          this.visitFlags(node);
          break;
        case "Disjunction":
          this.visitDisjunction(node);
          break;
        case "Alternative":
          this.visitAlternative(node);
          break;
        case "StartAnchor":
          this.visitStartAnchor(node);
          break;
        case "EndAnchor":
          this.visitEndAnchor(node);
          break;
        case "WordBoundary":
          this.visitWordBoundary(node);
          break;
        case "NonWordBoundary":
          this.visitNonWordBoundary(node);
          break;
        case "Lookahead":
          this.visitLookahead(node);
          break;
        case "NegativeLookahead":
          this.visitNegativeLookahead(node);
          break;
        case "Lookbehind":
          this.visitLookbehind(node);
          break;
        case "NegativeLookbehind":
          this.visitNegativeLookbehind(node);
          break;
        case "Character":
          this.visitCharacter(node);
          break;
        case "Set":
          this.visitSet(node);
          break;
        case "Group":
          this.visitGroup(node);
          break;
        case "GroupBackReference":
          this.visitGroupBackReference(node);
          break;
        case "Quantifier":
          this.visitQuantifier(node);
          break;
      }
      this.visitChildren(node);
    }
    visitPattern(node) {
    }
    visitFlags(node) {
    }
    visitDisjunction(node) {
    }
    visitAlternative(node) {
    }
    // Assertion
    visitStartAnchor(node) {
    }
    visitEndAnchor(node) {
    }
    visitWordBoundary(node) {
    }
    visitNonWordBoundary(node) {
    }
    visitLookahead(node) {
    }
    visitNegativeLookahead(node) {
    }
    visitLookbehind(node) {
    }
    visitNegativeLookbehind(node) {
    }
    // atoms
    visitCharacter(node) {
    }
    visitSet(node) {
    }
    visitGroup(node) {
    }
    visitGroupBackReference(node) {
    }
    visitQuantifier(node) {
    }
  };

  // node_modules/chevrotain/lib/src/scan/reg_exp_parser.js
  var regExpAstCache = {};
  var regExpParser = new RegExpParser();
  function getRegExpAst(regExp) {
    const regExpStr = regExp.toString();
    if (regExpAstCache.hasOwnProperty(regExpStr)) {
      return regExpAstCache[regExpStr];
    } else {
      const regExpAst = regExpParser.pattern(regExpStr);
      regExpAstCache[regExpStr] = regExpAst;
      return regExpAst;
    }
  }
  function clearRegExpParserCache() {
    regExpAstCache = {};
  }

  // node_modules/chevrotain/lib/src/scan/reg_exp.js
  var complementErrorMessage = "Complement Sets are not supported for first char optimization";
  var failedOptimizationPrefixMsg = 'Unable to use "first char" lexer optimizations:\n';
  function getOptimizedStartCodesIndices(regExp, ensureOptimizations = false) {
    try {
      const ast = getRegExpAst(regExp);
      const firstChars = firstCharOptimizedIndices(ast.value, {}, ast.flags.ignoreCase);
      return firstChars;
    } catch (e) {
      if (e.message === complementErrorMessage) {
        if (ensureOptimizations) {
          PRINT_WARNING(`${failedOptimizationPrefixMsg}	Unable to optimize: < ${regExp.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
        }
      } else {
        let msgSuffix = "";
        if (ensureOptimizations) {
          msgSuffix = "\n	This will disable the lexer's first char optimizations.\n	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.";
        }
        PRINT_ERROR(`${failedOptimizationPrefixMsg}
	Failed parsing: < ${regExp.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + msgSuffix);
      }
    }
    return [];
  }
  function firstCharOptimizedIndices(ast, result, ignoreCase) {
    switch (ast.type) {
      case "Disjunction":
        for (let i = 0; i < ast.value.length; i++) {
          firstCharOptimizedIndices(ast.value[i], result, ignoreCase);
        }
        break;
      case "Alternative":
        const terms = ast.value;
        for (let i = 0; i < terms.length; i++) {
          const term = terms[i];
          switch (term.type) {
            case "EndAnchor":
            case "GroupBackReference":
            case "Lookahead":
            case "NegativeLookahead":
            case "Lookbehind":
            case "NegativeLookbehind":
            case "StartAnchor":
            case "WordBoundary":
            case "NonWordBoundary":
              continue;
          }
          const atom = term;
          switch (atom.type) {
            case "Character":
              addOptimizedIdxToResult(atom.value, result, ignoreCase);
              break;
            case "Set":
              if (atom.complement === true) {
                throw Error(complementErrorMessage);
              }
              atom.value.forEach((code) => {
                if (typeof code === "number") {
                  addOptimizedIdxToResult(code, result, ignoreCase);
                } else {
                  const range = code;
                  if (ignoreCase === true) {
                    for (let rangeCode = range.from; rangeCode <= range.to; rangeCode++) {
                      addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                    }
                  } else {
                    for (let rangeCode = range.from; rangeCode <= range.to && rangeCode < minOptimizationVal; rangeCode++) {
                      addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                    }
                    if (range.to >= minOptimizationVal) {
                      const minUnOptVal = range.from >= minOptimizationVal ? range.from : minOptimizationVal;
                      const maxUnOptVal = range.to;
                      const minOptIdx = charCodeToOptimizedIndex(minUnOptVal);
                      const maxOptIdx = charCodeToOptimizedIndex(maxUnOptVal);
                      for (let currOptIdx = minOptIdx; currOptIdx <= maxOptIdx; currOptIdx++) {
                        result[currOptIdx] = currOptIdx;
                      }
                    }
                  }
                }
              });
              break;
            case "Group":
              firstCharOptimizedIndices(atom.value, result, ignoreCase);
              break;
            default:
              throw Error("Non Exhaustive Match");
          }
          const isOptionalQuantifier = atom.quantifier !== void 0 && atom.quantifier.atLeast === 0;
          if (
            // A group may be optional due to empty contents /(?:)/
            // or if everything inside it is optional /((a)?)/
            atom.type === "Group" && isWholeOptional(atom) === false || // If this term is not a group it may only be optional if it has an optional quantifier
            atom.type !== "Group" && isOptionalQuantifier === false
          ) {
            break;
          }
        }
        break;
      default:
        throw Error("non exhaustive match!");
    }
    return Object.values(result);
  }
  function addOptimizedIdxToResult(code, result, ignoreCase) {
    const optimizedCharIdx = charCodeToOptimizedIndex(code);
    result[optimizedCharIdx] = optimizedCharIdx;
    if (ignoreCase === true) {
      handleIgnoreCase(code, result);
    }
  }
  function handleIgnoreCase(code, result) {
    const char = String.fromCharCode(code);
    const upperChar = char.toUpperCase();
    if (upperChar !== char) {
      const optimizedCharIdx = charCodeToOptimizedIndex(upperChar.charCodeAt(0));
      result[optimizedCharIdx] = optimizedCharIdx;
    } else {
      const lowerChar = char.toLowerCase();
      if (lowerChar !== char) {
        const optimizedCharIdx = charCodeToOptimizedIndex(lowerChar.charCodeAt(0));
        result[optimizedCharIdx] = optimizedCharIdx;
      }
    }
  }
  function findCode(setNode, targetCharCodes) {
    return setNode.value.find((codeOrRange) => {
      if (typeof codeOrRange === "number") {
        return targetCharCodes.includes(codeOrRange);
      } else {
        const range = codeOrRange;
        return targetCharCodes.find((targetCode) => range.from <= targetCode && targetCode <= range.to) !== void 0;
      }
    });
  }
  function isWholeOptional(ast) {
    const quantifier = ast.quantifier;
    if (quantifier && quantifier.atLeast === 0) {
      return true;
    }
    if (!ast.value) {
      return false;
    }
    return Array.isArray(ast.value) ? ast.value.every(isWholeOptional) : isWholeOptional(ast.value);
  }
  var CharCodeFinder = class extends BaseRegExpVisitor {
    constructor(targetCharCodes) {
      super();
      this.targetCharCodes = targetCharCodes;
      this.found = false;
    }
    visitChildren(node) {
      if (this.found === true) {
        return;
      }
      switch (node.type) {
        case "Lookahead":
          this.visitLookahead(node);
          return;
        case "NegativeLookahead":
          this.visitNegativeLookahead(node);
          return;
        case "Lookbehind":
          this.visitLookbehind(node);
          return;
        case "NegativeLookbehind":
          this.visitNegativeLookbehind(node);
          return;
      }
      super.visitChildren(node);
    }
    visitCharacter(node) {
      if (this.targetCharCodes.includes(node.value)) {
        this.found = true;
      }
    }
    visitSet(node) {
      if (node.complement) {
        if (findCode(node, this.targetCharCodes) === void 0) {
          this.found = true;
        }
      } else {
        if (findCode(node, this.targetCharCodes) !== void 0) {
          this.found = true;
        }
      }
    }
  };
  function canMatchCharCode(charCodes, pattern) {
    if (pattern instanceof RegExp) {
      const ast = getRegExpAst(pattern);
      const charCodeFinder = new CharCodeFinder(charCodes);
      charCodeFinder.visit(ast);
      return charCodeFinder.found;
    } else {
      for (const char of pattern) {
        const charCode = char.charCodeAt(0);
        if (charCodes.includes(charCode)) {
          return true;
        }
      }
      return false;
    }
  }

  // node_modules/chevrotain/lib/src/scan/lexer.js
  var PATTERN = "PATTERN";
  var DEFAULT_MODE = "defaultMode";
  var MODES = "modes";
  function analyzeTokenTypes(tokenTypes, options) {
    options = Object.assign({ safeMode: false, positionTracking: "full", lineTerminatorCharacters: ["\r", "\n"], tracer: (msg, action) => action() }, options);
    const tracer = options.tracer;
    tracer("initCharCodeToOptimizedIndexMap", () => {
      initCharCodeToOptimizedIndexMap();
    });
    let onlyRelevantTypes;
    tracer("Reject Lexer.NA", () => {
      onlyRelevantTypes = tokenTypes.filter((currType) => {
        return currType[PATTERN] !== Lexer.NA;
      });
    });
    let hasCustom = false;
    let allTransformedPatterns;
    tracer("Transform Patterns", () => {
      hasCustom = false;
      allTransformedPatterns = onlyRelevantTypes.map((currType) => {
        const currPattern = currType[PATTERN];
        if (currPattern instanceof RegExp) {
          const regExpSource = currPattern.source;
          if (regExpSource.length === 1 && // only these regExp meta characters which can appear in a length one regExp
          regExpSource !== "^" && regExpSource !== "$" && regExpSource !== "." && !currPattern.ignoreCase) {
            return regExpSource;
          } else if (regExpSource.length === 2 && regExpSource[0] === "\\" && // not a meta character
          ![
            "d",
            "D",
            "s",
            "S",
            "t",
            "r",
            "n",
            "t",
            "0",
            "c",
            "b",
            "B",
            "f",
            "v",
            "w",
            "W"
          ].includes(regExpSource[1])) {
            return regExpSource[1];
          } else {
            return addStickyFlag(currPattern);
          }
        } else if (typeof currPattern === "function") {
          hasCustom = true;
          return { exec: currPattern };
        } else if (typeof currPattern === "object") {
          hasCustom = true;
          return currPattern;
        } else if (typeof currPattern === "string") {
          if (currPattern.length === 1) {
            return currPattern;
          } else {
            const escapedRegExpString = currPattern.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
            const wrappedRegExp = new RegExp(escapedRegExpString);
            return addStickyFlag(wrappedRegExp);
          }
        } else {
          throw Error("non exhaustive match");
        }
      });
    });
    let patternIdxToType;
    let patternIdxToGroup;
    let patternIdxToLongerAltIdxArr;
    let patternIdxToPushMode;
    let patternIdxToPopMode;
    tracer("misc mapping", () => {
      patternIdxToType = onlyRelevantTypes.map((currType) => currType.tokenTypeIdx);
      patternIdxToGroup = onlyRelevantTypes.map((clazz) => {
        const groupName = clazz.GROUP;
        if (groupName === Lexer.SKIPPED) {
          return void 0;
        } else if (typeof groupName === "string") {
          return groupName;
        } else if (groupName === void 0) {
          return false;
        } else {
          throw Error("non exhaustive match");
        }
      });
      patternIdxToLongerAltIdxArr = onlyRelevantTypes.map((clazz) => {
        const longerAltType = clazz.LONGER_ALT;
        if (longerAltType) {
          const longerAltIdxArr = Array.isArray(longerAltType) ? longerAltType.map((type) => onlyRelevantTypes.indexOf(type)) : [onlyRelevantTypes.indexOf(longerAltType)];
          return longerAltIdxArr;
        }
      });
      patternIdxToPushMode = onlyRelevantTypes.map((clazz) => clazz.PUSH_MODE);
      patternIdxToPopMode = onlyRelevantTypes.map((clazz) => Object.hasOwn(clazz, "POP_MODE"));
    });
    let patternIdxToCanLineTerminator;
    tracer("Line Terminator Handling", () => {
      const lineTerminatorCharCodes = getCharCodes(options.lineTerminatorCharacters);
      patternIdxToCanLineTerminator = onlyRelevantTypes.map((tokType) => false);
      if (options.positionTracking !== "onlyOffset") {
        patternIdxToCanLineTerminator = onlyRelevantTypes.map((tokType) => {
          if (Object.hasOwn(tokType, "LINE_BREAKS")) {
            return !!tokType.LINE_BREAKS;
          } else {
            return checkLineBreaksIssues(tokType, lineTerminatorCharCodes) === false && canMatchCharCode(lineTerminatorCharCodes, tokType.PATTERN);
          }
        });
      }
    });
    let patternIdxToIsCustom;
    let patternIdxToShort;
    let emptyGroups;
    let patternIdxToConfig;
    tracer("Misc Mapping #2", () => {
      patternIdxToIsCustom = onlyRelevantTypes.map(isCustomPattern);
      patternIdxToShort = allTransformedPatterns.map(isShortPattern);
      emptyGroups = onlyRelevantTypes.reduce((acc, clazz) => {
        const groupName = clazz.GROUP;
        if (typeof groupName === "string" && !(groupName === Lexer.SKIPPED)) {
          acc[groupName] = [];
        }
        return acc;
      }, {});
      patternIdxToConfig = allTransformedPatterns.map((x2, idx) => {
        return {
          pattern: allTransformedPatterns[idx],
          longerAlt: patternIdxToLongerAltIdxArr[idx],
          canLineTerminator: patternIdxToCanLineTerminator[idx],
          isCustom: patternIdxToIsCustom[idx],
          short: patternIdxToShort[idx],
          group: patternIdxToGroup[idx],
          push: patternIdxToPushMode[idx],
          pop: patternIdxToPopMode[idx],
          tokenTypeIdx: patternIdxToType[idx],
          tokenType: onlyRelevantTypes[idx]
        };
      });
    });
    let canBeOptimized = true;
    let charCodeToPatternIdxToConfig = [];
    if (!options.safeMode) {
      tracer("First Char Optimization", () => {
        charCodeToPatternIdxToConfig = onlyRelevantTypes.reduce((result, currTokType, idx) => {
          if (typeof currTokType.PATTERN === "string") {
            const charCode = currTokType.PATTERN.charCodeAt(0);
            const optimizedIdx = charCodeToOptimizedIndex(charCode);
            addToMapOfArrays(result, optimizedIdx, patternIdxToConfig[idx]);
          } else if (Array.isArray(currTokType.START_CHARS_HINT)) {
            let lastOptimizedIdx;
            currTokType.START_CHARS_HINT.forEach((charOrInt) => {
              const charCode = typeof charOrInt === "string" ? charOrInt.charCodeAt(0) : charOrInt;
              const currOptimizedIdx = charCodeToOptimizedIndex(charCode);
              if (lastOptimizedIdx !== currOptimizedIdx) {
                lastOptimizedIdx = currOptimizedIdx;
                addToMapOfArrays(result, currOptimizedIdx, patternIdxToConfig[idx]);
              }
            });
          } else if (currTokType.PATTERN instanceof RegExp) {
            if (currTokType.PATTERN.unicode) {
              canBeOptimized = false;
              if (options.ensureOptimizations) {
                PRINT_ERROR(`${failedOptimizationPrefixMsg}	Unable to analyze < ${currTokType.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
              }
            } else {
              const optimizedCodes = getOptimizedStartCodesIndices(currTokType.PATTERN, options.ensureOptimizations);
              if (optimizedCodes.length === 0) {
                canBeOptimized = false;
              }
              optimizedCodes.forEach((code) => {
                addToMapOfArrays(result, code, patternIdxToConfig[idx]);
              });
            }
          } else {
            if (options.ensureOptimizations) {
              PRINT_ERROR(`${failedOptimizationPrefixMsg}	TokenType: <${currTokType.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`);
            }
            canBeOptimized = false;
          }
          return result;
        }, []);
      });
    }
    return {
      emptyGroups,
      patternIdxToConfig,
      charCodeToPatternIdxToConfig,
      hasCustom,
      canBeOptimized
    };
  }
  function validatePatterns(tokenTypes, validModesNames) {
    let errors = [];
    const missingResult = findMissingPatterns(tokenTypes);
    errors = errors.concat(missingResult.errors);
    const invalidResult = findInvalidPatterns(missingResult.valid);
    const validTokenTypes = invalidResult.valid;
    errors = errors.concat(invalidResult.errors);
    errors = errors.concat(validateRegExpPattern(validTokenTypes));
    errors = errors.concat(findInvalidGroupType(validTokenTypes));
    errors = errors.concat(findModesThatDoNotExist(validTokenTypes, validModesNames));
    errors = errors.concat(findUnreachablePatterns(validTokenTypes));
    return errors;
  }
  function validateRegExpPattern(tokenTypes) {
    let errors = [];
    const withRegExpPatterns = tokenTypes.filter((currTokType) => currTokType[PATTERN] instanceof RegExp);
    errors = errors.concat(findEndOfInputAnchor(withRegExpPatterns));
    errors = errors.concat(findStartOfInputAnchor(withRegExpPatterns));
    errors = errors.concat(findUnsupportedFlags(withRegExpPatterns));
    errors = errors.concat(findDuplicatePatterns(withRegExpPatterns));
    errors = errors.concat(findEmptyMatchRegExps(withRegExpPatterns));
    return errors;
  }
  function findMissingPatterns(tokenTypes) {
    const tokenTypesWithMissingPattern = tokenTypes.filter((currType) => {
      return !Object.hasOwn(currType, PATTERN);
    });
    const errors = tokenTypesWithMissingPattern.map((currType) => {
      return {
        message: "Token Type: ->" + currType.name + "<- missing static 'PATTERN' property",
        type: LexerDefinitionErrorType.MISSING_PATTERN,
        tokenTypes: [currType]
      };
    });
    const valid = tokenTypes.filter((x2) => !tokenTypesWithMissingPattern.includes(x2));
    return { errors, valid };
  }
  function findInvalidPatterns(tokenTypes) {
    const tokenTypesWithInvalidPattern = tokenTypes.filter((currType) => {
      const pattern = currType[PATTERN];
      return !(pattern instanceof RegExp) && !(typeof pattern === "function") && !Object.hasOwn(pattern, "exec") && !(typeof pattern === "string");
    });
    const errors = tokenTypesWithInvalidPattern.map((currType) => {
      return {
        message: "Token Type: ->" + currType.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
        type: LexerDefinitionErrorType.INVALID_PATTERN,
        tokenTypes: [currType]
      };
    });
    const valid = tokenTypes.filter((x2) => !tokenTypesWithInvalidPattern.includes(x2));
    return { errors, valid };
  }
  var end_of_input = /[^\\][$]/;
  function findEndOfInputAnchor(tokenTypes) {
    class EndAnchorFinder extends BaseRegExpVisitor {
      constructor() {
        super(...arguments);
        this.found = false;
      }
      visitEndAnchor(node) {
        this.found = true;
      }
    }
    const invalidRegex = tokenTypes.filter((currType) => {
      const pattern = currType.PATTERN;
      try {
        const regexpAst = getRegExpAst(pattern);
        const endAnchorVisitor = new EndAnchorFinder();
        endAnchorVisitor.visit(regexpAst);
        return endAnchorVisitor.found;
      } catch (e) {
        return end_of_input.test(pattern.source);
      }
    });
    const errors = invalidRegex.map((currType) => {
      return {
        message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + currType.name + "<- static 'PATTERN' cannot contain end of input anchor '$'\n	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
        type: LexerDefinitionErrorType.EOI_ANCHOR_FOUND,
        tokenTypes: [currType]
      };
    });
    return errors;
  }
  function findEmptyMatchRegExps(tokenTypes) {
    const matchesEmptyString = tokenTypes.filter((currType) => {
      const pattern = currType.PATTERN;
      return pattern.test("");
    });
    const errors = matchesEmptyString.map((currType) => {
      return {
        message: "Token Type: ->" + currType.name + "<- static 'PATTERN' must not match an empty string",
        type: LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,
        tokenTypes: [currType]
      };
    });
    return errors;
  }
  var start_of_input = /[^\\[][\^]|^\^/;
  function findStartOfInputAnchor(tokenTypes) {
    class StartAnchorFinder extends BaseRegExpVisitor {
      constructor() {
        super(...arguments);
        this.found = false;
      }
      visitStartAnchor(node) {
        this.found = true;
      }
    }
    const invalidRegex = tokenTypes.filter((currType) => {
      const pattern = currType.PATTERN;
      try {
        const regexpAst = getRegExpAst(pattern);
        const startAnchorVisitor = new StartAnchorFinder();
        startAnchorVisitor.visit(regexpAst);
        return startAnchorVisitor.found;
      } catch (e) {
        return start_of_input.test(pattern.source);
      }
    });
    const errors = invalidRegex.map((currType) => {
      return {
        message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + currType.name + "<- static 'PATTERN' cannot contain start of input anchor '^'\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
        type: LexerDefinitionErrorType.SOI_ANCHOR_FOUND,
        tokenTypes: [currType]
      };
    });
    return errors;
  }
  function findUnsupportedFlags(tokenTypes) {
    const invalidFlags = tokenTypes.filter((currType) => {
      const pattern = currType[PATTERN];
      return pattern instanceof RegExp && (pattern.multiline || pattern.global);
    });
    const errors = invalidFlags.map((currType) => {
      return {
        message: "Token Type: ->" + currType.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
        type: LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,
        tokenTypes: [currType]
      };
    });
    return errors;
  }
  function findDuplicatePatterns(tokenTypes) {
    const found = [];
    let identicalPatterns = tokenTypes.map((outerType) => {
      return tokenTypes.reduce((result, innerType) => {
        if (outerType.PATTERN.source === innerType.PATTERN.source && !found.includes(innerType) && innerType.PATTERN !== Lexer.NA) {
          found.push(innerType);
          result.push(innerType);
          return result;
        }
        return result;
      }, []);
    });
    identicalPatterns = identicalPatterns.filter(Boolean);
    const duplicatePatterns = identicalPatterns.filter((currIdenticalSet) => {
      return currIdenticalSet.length > 1;
    });
    const errors = duplicatePatterns.map((setOfIdentical) => {
      const tokenTypeNames = setOfIdentical.map((currType) => {
        return currType.name;
      });
      const dupPatternSrc = setOfIdentical[0].PATTERN;
      return {
        message: `The same RegExp pattern ->${dupPatternSrc}<-has been used in all of the following Token Types: ${tokenTypeNames.join(", ")} <-`,
        type: LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,
        tokenTypes: setOfIdentical
      };
    });
    return errors;
  }
  function findInvalidGroupType(tokenTypes) {
    const invalidTypes = tokenTypes.filter((clazz) => {
      if (!Object.hasOwn(clazz, "GROUP")) {
        return false;
      }
      const group = clazz.GROUP;
      return group !== Lexer.SKIPPED && group !== Lexer.NA && !(typeof group === "string");
    });
    const errors = invalidTypes.map((currType) => {
      return {
        message: "Token Type: ->" + currType.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
        type: LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,
        tokenTypes: [currType]
      };
    });
    return errors;
  }
  function findModesThatDoNotExist(tokenTypes, validModes) {
    const invalidModes = tokenTypes.filter((clazz) => {
      return clazz.PUSH_MODE !== void 0 && !validModes.includes(clazz.PUSH_MODE);
    });
    const errors = invalidModes.map((tokType) => {
      const msg = `Token Type: ->${tokType.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${tokType.PUSH_MODE}<-which does not exist`;
      return {
        message: msg,
        type: LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,
        tokenTypes: [tokType]
      };
    });
    return errors;
  }
  function findUnreachablePatterns(tokenTypes) {
    const errors = [];
    const canBeTested = tokenTypes.reduce((result, tokType, idx) => {
      const pattern = tokType.PATTERN;
      if (pattern === Lexer.NA) {
        return result;
      }
      if (typeof pattern === "string") {
        result.push({ str: pattern, idx, tokenType: tokType });
      } else if (pattern instanceof RegExp && noMetaChar(pattern)) {
        result.push({ str: pattern.source, idx, tokenType: tokType });
      }
      return result;
    }, []);
    tokenTypes.forEach((aTokType, aIdx) => {
      canBeTested.forEach(({ str: bStr, idx: bIdx, tokenType: bTokType }) => {
        if (aIdx < bIdx && tryToMatchStrToPattern(bStr, aTokType.PATTERN)) {
          const msg = `Token: ->${bTokType.name}<- can never be matched.
Because it appears AFTER the Token Type ->${aTokType.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
          errors.push({
            message: msg,
            type: LexerDefinitionErrorType.UNREACHABLE_PATTERN,
            tokenTypes: [aTokType, bTokType]
          });
        }
      });
    });
    return errors;
  }
  function tryToMatchStrToPattern(str, pattern) {
    if (pattern instanceof RegExp) {
      if (usesLookAheadOrBehind(pattern)) {
        return false;
      }
      const regExpArray = pattern.exec(str);
      return regExpArray !== null && regExpArray.index === 0;
    } else if (typeof pattern === "function") {
      return pattern(str, 0, [], {});
    } else if (Object.hasOwn(pattern, "exec")) {
      return pattern.exec(str, 0, [], {});
    } else if (typeof pattern === "string") {
      return pattern === str;
    } else {
      throw Error("non exhaustive match");
    }
  }
  function noMetaChar(regExp) {
    const metaChars = [
      ".",
      "\\",
      "[",
      "]",
      "|",
      "^",
      "$",
      "(",
      ")",
      "?",
      "*",
      "+",
      "{"
    ];
    return metaChars.find((char) => regExp.source.indexOf(char) !== -1) === void 0;
  }
  function usesLookAheadOrBehind(regExp) {
    return /(\(\?=)|(\(\?!)|(\(\?<=)|(\(\?<!)/.test(regExp.source);
  }
  function addStickyFlag(pattern) {
    const flags = pattern.ignoreCase ? "iy" : "y";
    return new RegExp(`${pattern.source}`, flags);
  }
  function performRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
    const errors = [];
    if (!Object.hasOwn(lexerDefinition, DEFAULT_MODE)) {
      errors.push({
        message: "A MultiMode Lexer cannot be initialized without a <" + DEFAULT_MODE + "> property in its definition\n",
        type: LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
      });
    }
    if (!Object.hasOwn(lexerDefinition, MODES)) {
      errors.push({
        message: "A MultiMode Lexer cannot be initialized without a <" + MODES + "> property in its definition\n",
        type: LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
      });
    }
    if (Object.hasOwn(lexerDefinition, MODES) && Object.hasOwn(lexerDefinition, DEFAULT_MODE) && !Object.hasOwn(lexerDefinition.modes, lexerDefinition.defaultMode)) {
      errors.push({
        message: `A MultiMode Lexer cannot be initialized with a ${DEFAULT_MODE}: <${lexerDefinition.defaultMode}>which does not exist
`,
        type: LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
      });
    }
    if (Object.hasOwn(lexerDefinition, MODES)) {
      Object.keys(lexerDefinition.modes).forEach((currModeName) => {
        const currModeValue = lexerDefinition.modes[currModeName];
        currModeValue.forEach((currTokType, currIdx) => {
          if (currTokType === void 0) {
            errors.push({
              message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${currModeName}> at index: <${currIdx}>
`,
              type: LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
            });
          } else if (Object.hasOwn(currTokType, "LONGER_ALT")) {
            const longerAlt = Array.isArray(currTokType.LONGER_ALT) ? currTokType.LONGER_ALT : [currTokType.LONGER_ALT];
            longerAlt.forEach((currLongerAlt) => {
              if (currLongerAlt !== void 0 && !currModeValue.includes(currLongerAlt)) {
                errors.push({
                  message: `A MultiMode Lexer cannot be initialized with a longer_alt <${currLongerAlt.name}> on token <${currTokType.name}> outside of mode <${currModeName}>
`,
                  type: LexerDefinitionErrorType.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
                });
              }
            });
          }
        });
      });
    }
    return errors;
  }
  function performWarningRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
    const warnings = [];
    let hasAnyLineBreak = false;
    const allTokenTypes = Object.values(lexerDefinition.modes || {}).flat().filter(Boolean);
    const concreteTokenTypes = allTokenTypes.filter((currType) => currType[PATTERN] !== Lexer.NA);
    const terminatorCharCodes = getCharCodes(lineTerminatorCharacters);
    if (trackLines) {
      concreteTokenTypes.forEach((tokType) => {
        const currIssue = checkLineBreaksIssues(tokType, terminatorCharCodes);
        if (currIssue !== false) {
          const message = buildLineBreakIssueMessage(tokType, currIssue);
          const warningDescriptor = {
            message,
            type: currIssue.issue,
            tokenType: tokType
          };
          warnings.push(warningDescriptor);
        } else {
          if (Object.hasOwn(tokType, "LINE_BREAKS")) {
            if (tokType.LINE_BREAKS === true) {
              hasAnyLineBreak = true;
            }
          } else {
            if (canMatchCharCode(terminatorCharCodes, tokType.PATTERN)) {
              hasAnyLineBreak = true;
            }
          }
        }
      });
    }
    if (trackLines && !hasAnyLineBreak) {
      warnings.push({
        message: "Warning: No LINE_BREAKS Found.\n	This Lexer has been defined to track line and column information,\n	But none of the Token Types can be identified as matching a line terminator.\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n	for details.",
        type: LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS
      });
    }
    return warnings;
  }
  function cloneEmptyGroups(emptyGroups) {
    const clonedResult = {};
    const groupKeys = Object.keys(emptyGroups);
    groupKeys.forEach((currKey) => {
      const currGroupValue = emptyGroups[currKey];
      if (Array.isArray(currGroupValue)) {
        clonedResult[currKey] = [];
      } else {
        throw Error("non exhaustive match");
      }
    });
    return clonedResult;
  }
  function isCustomPattern(tokenType) {
    const pattern = tokenType.PATTERN;
    if (pattern instanceof RegExp) {
      return false;
    } else if (typeof pattern === "function") {
      return true;
    } else if (Object.hasOwn(pattern, "exec")) {
      return true;
    } else if (typeof pattern === "string") {
      return false;
    } else {
      throw Error("non exhaustive match");
    }
  }
  function isShortPattern(pattern) {
    if (typeof pattern === "string" && pattern.length === 1) {
      return pattern.charCodeAt(0);
    } else {
      return false;
    }
  }
  var LineTerminatorOptimizedTester = {
    // implements /\n|\r\n?/g.test
    test: function(text) {
      const len = text.length;
      for (let i = this.lastIndex; i < len; i++) {
        const c2 = text.charCodeAt(i);
        if (c2 === 10) {
          this.lastIndex = i + 1;
          return true;
        } else if (c2 === 13) {
          if (text.charCodeAt(i + 1) === 10) {
            this.lastIndex = i + 2;
          } else {
            this.lastIndex = i + 1;
          }
          return true;
        }
      }
      return false;
    },
    lastIndex: 0
  };
  function checkLineBreaksIssues(tokType, lineTerminatorCharCodes) {
    if (Object.hasOwn(tokType, "LINE_BREAKS")) {
      return false;
    } else {
      if (tokType.PATTERN instanceof RegExp) {
        try {
          canMatchCharCode(lineTerminatorCharCodes, tokType.PATTERN);
        } catch (e) {
          return {
            issue: LexerDefinitionErrorType.IDENTIFY_TERMINATOR,
            errMsg: e.message
          };
        }
        return false;
      } else if (typeof tokType.PATTERN === "string") {
        return false;
      } else if (isCustomPattern(tokType)) {
        return { issue: LexerDefinitionErrorType.CUSTOM_LINE_BREAK };
      } else {
        throw Error("non exhaustive match");
      }
    }
  }
  function buildLineBreakIssueMessage(tokType, details) {
    if (details.issue === LexerDefinitionErrorType.IDENTIFY_TERMINATOR) {
      return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${tokType.name}> Token Type
	 Root cause: ${details.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
    } else if (details.issue === LexerDefinitionErrorType.CUSTOM_LINE_BREAK) {
      return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${tokType.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
    } else {
      throw Error("non exhaustive match");
    }
  }
  function getCharCodes(charsOrCodes) {
    const charCodes = charsOrCodes.map((numOrString) => {
      if (typeof numOrString === "string") {
        return numOrString.charCodeAt(0);
      } else {
        return numOrString;
      }
    });
    return charCodes;
  }
  function addToMapOfArrays(map, key, value) {
    if (map[key] === void 0) {
      map[key] = [value];
    } else {
      map[key].push(value);
    }
  }
  var minOptimizationVal = 256;
  var charCodeToOptimizedIdxMap = [];
  function charCodeToOptimizedIndex(charCode) {
    return charCode < minOptimizationVal ? charCode : charCodeToOptimizedIdxMap[charCode];
  }
  function initCharCodeToOptimizedIndexMap() {
    if (charCodeToOptimizedIdxMap.length === 0) {
      charCodeToOptimizedIdxMap = new Array(65536);
      for (let i = 0; i < 65536; i++) {
        charCodeToOptimizedIdxMap[i] = i > 255 ? 255 + ~~(i / 255) : i;
      }
    }
  }

  // node_modules/chevrotain/lib/src/scan/tokens.js
  function tokenStructuredMatcher(tokInstance, tokConstructor) {
    const instanceType = tokInstance.tokenTypeIdx;
    if (instanceType === tokConstructor.tokenTypeIdx) {
      return true;
    } else {
      return tokConstructor.isParent === true && tokConstructor.categoryMatchesMap[instanceType] === true;
    }
  }
  function tokenStructuredMatcherNoCategories(token, tokType) {
    return token.tokenTypeIdx === tokType.tokenTypeIdx;
  }
  var tokenShortNameIdx = 1;
  var tokenIdxToClass = {};
  function augmentTokenTypes(tokenTypes) {
    const tokenTypesAndParents = expandCategories(tokenTypes);
    assignTokenDefaultProps(tokenTypesAndParents);
    assignCategoriesMapProp(tokenTypesAndParents);
    assignCategoriesTokensProp(tokenTypesAndParents);
    tokenTypesAndParents.forEach((tokType) => {
      tokType.isParent = tokType.categoryMatches.length > 0;
    });
  }
  function expandCategories(tokenTypes) {
    let result = [...tokenTypes];
    let categories = tokenTypes;
    let searching = true;
    while (searching) {
      categories = categories.map((currTokType) => currTokType.CATEGORIES).flat().filter(Boolean);
      const newCategories = categories.filter((x2) => !result.includes(x2));
      result = result.concat(newCategories);
      if (newCategories.length === 0) {
        searching = false;
      } else {
        categories = newCategories;
      }
    }
    return result;
  }
  function assignTokenDefaultProps(tokenTypes) {
    tokenTypes.forEach((currTokType) => {
      if (!hasShortKeyProperty(currTokType)) {
        tokenIdxToClass[tokenShortNameIdx] = currTokType;
        currTokType.tokenTypeIdx = tokenShortNameIdx++;
      }
      if (hasCategoriesProperty(currTokType) && !Array.isArray(currTokType.CATEGORIES)) {
        currTokType.CATEGORIES = [currTokType.CATEGORIES];
      }
      if (!hasCategoriesProperty(currTokType)) {
        currTokType.CATEGORIES = [];
      }
      if (!hasExtendingTokensTypesProperty(currTokType)) {
        currTokType.categoryMatches = [];
      }
      if (!hasExtendingTokensTypesMapProperty(currTokType)) {
        currTokType.categoryMatchesMap = {};
      }
    });
  }
  function assignCategoriesTokensProp(tokenTypes) {
    tokenTypes.forEach((currTokType) => {
      currTokType.categoryMatches = [];
      Object.keys(currTokType.categoryMatchesMap).forEach((key) => {
        currTokType.categoryMatches.push(tokenIdxToClass[key].tokenTypeIdx);
      });
    });
  }
  function assignCategoriesMapProp(tokenTypes) {
    tokenTypes.forEach((currTokType) => {
      singleAssignCategoriesToksMap([], currTokType);
    });
  }
  function singleAssignCategoriesToksMap(path, nextNode) {
    path.forEach((pathNode) => {
      nextNode.categoryMatchesMap[pathNode.tokenTypeIdx] = true;
    });
    nextNode.CATEGORIES.forEach((nextCategory) => {
      const newPath = path.concat(nextNode);
      if (!newPath.includes(nextCategory)) {
        singleAssignCategoriesToksMap(newPath, nextCategory);
      }
    });
  }
  function hasShortKeyProperty(tokType) {
    return Object.hasOwn(tokType !== null && tokType !== void 0 ? tokType : {}, "tokenTypeIdx");
  }
  function hasCategoriesProperty(tokType) {
    return Object.hasOwn(tokType !== null && tokType !== void 0 ? tokType : {}, "CATEGORIES");
  }
  function hasExtendingTokensTypesProperty(tokType) {
    return Object.hasOwn(tokType !== null && tokType !== void 0 ? tokType : {}, "categoryMatches");
  }
  function hasExtendingTokensTypesMapProperty(tokType) {
    return Object.hasOwn(tokType !== null && tokType !== void 0 ? tokType : {}, "categoryMatchesMap");
  }
  function isTokenType(tokType) {
    return Object.hasOwn(tokType !== null && tokType !== void 0 ? tokType : {}, "tokenTypeIdx");
  }

  // node_modules/chevrotain/lib/src/scan/lexer_errors_public.js
  var defaultLexerErrorProvider = {
    buildUnableToPopLexerModeMessage(token) {
      return `Unable to pop Lexer Mode after encountering Token ->${token.image}<- The Mode Stack is empty`;
    },
    buildUnexpectedCharactersMessage(fullText, startOffset, length, line, column, mode) {
      return `unexpected character: ->${fullText.charAt(startOffset)}<- at offset: ${startOffset}, skipped ${length} characters.`;
    }
  };

  // node_modules/chevrotain/lib/src/scan/lexer_public.js
  var LexerDefinitionErrorType;
  (function(LexerDefinitionErrorType2) {
    LexerDefinitionErrorType2[LexerDefinitionErrorType2["MISSING_PATTERN"] = 0] = "MISSING_PATTERN";
    LexerDefinitionErrorType2[LexerDefinitionErrorType2["INVALID_PATTERN"] = 1] = "INVALID_PATTERN";
    LexerDefinitionErrorType2[LexerDefinitionErrorType2["EOI_ANCHOR_FOUND"] = 2] = "EOI_ANCHOR_FOUND";
    LexerDefinitionErrorType2[LexerDefinitionErrorType2["UNSUPPORTED_FLAGS_FOUND"] = 3] = "UNSUPPORTED_FLAGS_FOUND";
    LexerDefinitionErrorType2[LexerDefinitionErrorType2["DUPLICATE_PATTERNS_FOUND"] = 4] = "DUPLICATE_PATTERNS_FOUND";
    LexerDefinitionErrorType2[LexerDefinitionErrorType2["INVALID_GROUP_TYPE_FOUND"] = 5] = "INVALID_GROUP_TYPE_FOUND";
    LexerDefinitionErrorType2[LexerDefinitionErrorType2["PUSH_MODE_DOES_NOT_EXIST"] = 6] = "PUSH_MODE_DOES_NOT_EXIST";
    LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE"] = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE";
    LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY"] = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY";
    LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST"] = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST";
    LexerDefinitionErrorType2[LexerDefinitionErrorType2["LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED"] = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED";
    LexerDefinitionErrorType2[LexerDefinitionErrorType2["SOI_ANCHOR_FOUND"] = 11] = "SOI_ANCHOR_FOUND";
    LexerDefinitionErrorType2[LexerDefinitionErrorType2["EMPTY_MATCH_PATTERN"] = 12] = "EMPTY_MATCH_PATTERN";
    LexerDefinitionErrorType2[LexerDefinitionErrorType2["NO_LINE_BREAKS_FLAGS"] = 13] = "NO_LINE_BREAKS_FLAGS";
    LexerDefinitionErrorType2[LexerDefinitionErrorType2["UNREACHABLE_PATTERN"] = 14] = "UNREACHABLE_PATTERN";
    LexerDefinitionErrorType2[LexerDefinitionErrorType2["IDENTIFY_TERMINATOR"] = 15] = "IDENTIFY_TERMINATOR";
    LexerDefinitionErrorType2[LexerDefinitionErrorType2["CUSTOM_LINE_BREAK"] = 16] = "CUSTOM_LINE_BREAK";
    LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"] = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
  })(LexerDefinitionErrorType || (LexerDefinitionErrorType = {}));
  var DEFAULT_LEXER_CONFIG = {
    deferDefinitionErrorsHandling: false,
    positionTracking: "full",
    lineTerminatorsPattern: /\n|\r\n?/g,
    lineTerminatorCharacters: ["\n", "\r"],
    ensureOptimizations: false,
    safeMode: false,
    errorMessageProvider: defaultLexerErrorProvider,
    traceInitPerf: false,
    skipValidations: false,
    recoveryEnabled: true
  };
  Object.freeze(DEFAULT_LEXER_CONFIG);
  var Lexer = class {
    constructor(lexerDefinition, config = DEFAULT_LEXER_CONFIG) {
      this.lexerDefinition = lexerDefinition;
      this.lexerDefinitionErrors = [];
      this.lexerDefinitionWarning = [];
      this.patternIdxToConfig = {};
      this.charCodeToPatternIdxToConfig = {};
      this.modes = [];
      this.emptyGroups = {};
      this.trackStartLines = true;
      this.trackEndLines = true;
      this.hasCustom = false;
      this.canModeBeOptimized = {};
      this.TRACE_INIT = (phaseDesc, phaseImpl) => {
        if (this.traceInitPerf === true) {
          this.traceInitIndent++;
          const indent = new Array(this.traceInitIndent + 1).join("	");
          if (this.traceInitIndent < this.traceInitMaxIdent) {
            console.log(`${indent}--> <${phaseDesc}>`);
          }
          const { time, value } = timer(phaseImpl);
          const traceMethod = time > 10 ? console.warn : console.log;
          if (this.traceInitIndent < this.traceInitMaxIdent) {
            traceMethod(`${indent}<-- <${phaseDesc}> time: ${time}ms`);
          }
          this.traceInitIndent--;
          return value;
        } else {
          return phaseImpl();
        }
      };
      if (typeof config === "boolean") {
        throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\na boolean 2nd argument is no longer supported");
      }
      this.config = Object.assign({}, DEFAULT_LEXER_CONFIG, config);
      const traceInitVal = this.config.traceInitPerf;
      if (traceInitVal === true) {
        this.traceInitMaxIdent = Infinity;
        this.traceInitPerf = true;
      } else if (typeof traceInitVal === "number") {
        this.traceInitMaxIdent = traceInitVal;
        this.traceInitPerf = true;
      }
      this.traceInitIndent = -1;
      this.TRACE_INIT("Lexer Constructor", () => {
        let actualDefinition;
        let hasOnlySingleMode = true;
        this.TRACE_INIT("Lexer Config handling", () => {
          if (this.config.lineTerminatorsPattern === DEFAULT_LEXER_CONFIG.lineTerminatorsPattern) {
            this.config.lineTerminatorsPattern = LineTerminatorOptimizedTester;
          } else {
            if (this.config.lineTerminatorCharacters === DEFAULT_LEXER_CONFIG.lineTerminatorCharacters) {
              throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");
            }
          }
          if (config.safeMode && config.ensureOptimizations) {
            throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
          }
          this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking);
          this.trackEndLines = /full/i.test(this.config.positionTracking);
          if (Array.isArray(lexerDefinition)) {
            actualDefinition = {
              modes: { defaultMode: [...lexerDefinition] },
              defaultMode: DEFAULT_MODE
            };
          } else {
            hasOnlySingleMode = false;
            actualDefinition = Object.assign({}, lexerDefinition);
          }
        });
        if (this.config.skipValidations === false) {
          this.TRACE_INIT("performRuntimeChecks", () => {
            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(performRuntimeChecks(actualDefinition, this.trackStartLines, this.config.lineTerminatorCharacters));
          });
          this.TRACE_INIT("performWarningRuntimeChecks", () => {
            this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(performWarningRuntimeChecks(actualDefinition, this.trackStartLines, this.config.lineTerminatorCharacters));
          });
        }
        actualDefinition.modes = actualDefinition.modes ? actualDefinition.modes : {};
        Object.entries(actualDefinition.modes).forEach(([currModeName, currModeValue]) => {
          actualDefinition.modes[currModeName] = currModeValue.filter((currTokType) => currTokType !== void 0);
        });
        const allModeNames = Object.keys(actualDefinition.modes);
        Object.entries(actualDefinition.modes).forEach(([currModName, currModDef]) => {
          this.TRACE_INIT(`Mode: <${currModName}> processing`, () => {
            this.modes.push(currModName);
            if (this.config.skipValidations === false) {
              this.TRACE_INIT(`validatePatterns`, () => {
                this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(validatePatterns(currModDef, allModeNames));
              });
            }
            if (this.lexerDefinitionErrors.length === 0) {
              augmentTokenTypes(currModDef);
              let currAnalyzeResult;
              this.TRACE_INIT(`analyzeTokenTypes`, () => {
                currAnalyzeResult = analyzeTokenTypes(currModDef, {
                  lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                  positionTracking: config.positionTracking,
                  ensureOptimizations: config.ensureOptimizations,
                  safeMode: config.safeMode,
                  tracer: this.TRACE_INIT
                });
              });
              this.patternIdxToConfig[currModName] = currAnalyzeResult.patternIdxToConfig;
              this.charCodeToPatternIdxToConfig[currModName] = currAnalyzeResult.charCodeToPatternIdxToConfig;
              this.emptyGroups = Object.assign({}, this.emptyGroups, currAnalyzeResult.emptyGroups);
              this.hasCustom = currAnalyzeResult.hasCustom || this.hasCustom;
              this.canModeBeOptimized[currModName] = currAnalyzeResult.canBeOptimized;
            }
          });
        });
        this.defaultMode = actualDefinition.defaultMode;
        if (this.lexerDefinitionErrors.length > 0 && !this.config.deferDefinitionErrorsHandling) {
          const allErrMessages = this.lexerDefinitionErrors.map((error) => {
            return error.message;
          });
          const allErrMessagesString = allErrMessages.join("-----------------------\n");
          throw new Error("Errors detected in definition of Lexer:\n" + allErrMessagesString);
        }
        this.lexerDefinitionWarning.forEach((warningDescriptor) => {
          PRINT_WARNING(warningDescriptor.message);
        });
        this.TRACE_INIT("Choosing sub-methods implementations", () => {
          if (hasOnlySingleMode) {
            this.handleModes = () => {
            };
          }
          if (this.trackStartLines === false) {
            this.computeNewColumn = (x2) => x2;
          }
          if (this.trackEndLines === false) {
            this.updateTokenEndLineColumnLocation = () => {
            };
          }
          if (/full/i.test(this.config.positionTracking)) {
            this.createTokenInstance = this.createFullToken;
          } else if (/onlyStart/i.test(this.config.positionTracking)) {
            this.createTokenInstance = this.createStartOnlyToken;
          } else if (/onlyOffset/i.test(this.config.positionTracking)) {
            this.createTokenInstance = this.createOffsetOnlyToken;
          } else {
            throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
          }
          if (this.hasCustom) {
            this.addToken = this.addTokenUsingPush;
            this.handlePayload = this.handlePayloadWithCustom;
          } else {
            this.addToken = this.addTokenUsingMemberAccess;
            this.handlePayload = this.handlePayloadNoCustom;
          }
        });
        this.TRACE_INIT("Failed Optimization Warnings", () => {
          const unOptimizedModes = Object.entries(this.canModeBeOptimized).reduce((cannotBeOptimized, [modeName, canBeOptimized]) => {
            if (canBeOptimized === false) {
              cannotBeOptimized.push(modeName);
            }
            return cannotBeOptimized;
          }, []);
          if (config.ensureOptimizations && unOptimizedModes.length > 0) {
            throw Error(`Lexer Modes: < ${unOptimizedModes.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
          }
        });
        this.TRACE_INIT("clearRegExpParserCache", () => {
          clearRegExpParserCache();
        });
        this.TRACE_INIT("toFastProperties", () => {
          toFastProperties(this);
        });
      });
    }
    tokenize(text, initialMode = this.defaultMode) {
      if (this.lexerDefinitionErrors.length > 0) {
        const allErrMessages = this.lexerDefinitionErrors.map((error) => {
          return error.message;
        });
        const allErrMessagesString = allErrMessages.join("-----------------------\n");
        throw new Error("Unable to Tokenize because Errors detected in definition of Lexer:\n" + allErrMessagesString);
      }
      return this.tokenizeInternal(text, initialMode);
    }
    // There is quite a bit of duplication between this and "tokenizeInternalLazy"
    // This is intentional due to performance considerations.
    // this method also used quite a bit of `!` none null assertions because it is too optimized
    // for `tsc` to always understand it is "safe"
    tokenizeInternal(text, initialMode) {
      let i, j2, k, matchAltImage, longerAlt, matchedImage, payload, altPayload, imageLength, group, tokType, newToken, errLength, msg, match;
      const orgText = text;
      const orgLength = orgText.length;
      let offset = 0;
      let matchedTokensIndex = 0;
      const guessedNumberOfTokens = this.hasCustom ? 0 : Math.floor(text.length / 10);
      const matchedTokens = new Array(guessedNumberOfTokens);
      const errors = [];
      let line = this.trackStartLines ? 1 : void 0;
      let column = this.trackStartLines ? 1 : void 0;
      const groups = cloneEmptyGroups(this.emptyGroups);
      const trackLines = this.trackStartLines;
      const lineTerminatorPattern = this.config.lineTerminatorsPattern;
      let currModePatternsLength = 0;
      let patternIdxToConfig = [];
      let currCharCodeToPatternIdxToConfig = [];
      const modeStack = [];
      const emptyArray = [];
      Object.freeze(emptyArray);
      let isOptimizedMode = false;
      const pop_mode = (popToken) => {
        if (modeStack.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
        // So no error should occur.
        popToken.tokenType.PUSH_MODE === void 0) {
          const msg2 = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(popToken);
          errors.push({
            offset: popToken.startOffset,
            line: popToken.startLine,
            column: popToken.startColumn,
            length: popToken.image.length,
            message: msg2
          });
        } else {
          modeStack.pop();
          const newMode = modeStack.at(-1);
          patternIdxToConfig = this.patternIdxToConfig[newMode];
          currCharCodeToPatternIdxToConfig = this.charCodeToPatternIdxToConfig[newMode];
          currModePatternsLength = patternIdxToConfig.length;
          const modeCanBeOptimized = this.canModeBeOptimized[newMode] && this.config.safeMode === false;
          if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
            isOptimizedMode = true;
          } else {
            isOptimizedMode = false;
          }
        }
      };
      function push_mode(newMode) {
        modeStack.push(newMode);
        currCharCodeToPatternIdxToConfig = this.charCodeToPatternIdxToConfig[newMode];
        patternIdxToConfig = this.patternIdxToConfig[newMode];
        currModePatternsLength = patternIdxToConfig.length;
        currModePatternsLength = patternIdxToConfig.length;
        const modeCanBeOptimized = this.canModeBeOptimized[newMode] && this.config.safeMode === false;
        if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
          isOptimizedMode = true;
        } else {
          isOptimizedMode = false;
        }
      }
      push_mode.call(this, initialMode);
      let currConfig;
      const recoveryEnabled = this.config.recoveryEnabled;
      while (offset < orgLength) {
        matchedImage = null;
        imageLength = -1;
        const nextCharCode = orgText.charCodeAt(offset);
        let chosenPatternIdxToConfig;
        if (isOptimizedMode) {
          const optimizedCharIdx = charCodeToOptimizedIndex(nextCharCode);
          const possiblePatterns = currCharCodeToPatternIdxToConfig[optimizedCharIdx];
          chosenPatternIdxToConfig = possiblePatterns !== void 0 ? possiblePatterns : emptyArray;
        } else {
          chosenPatternIdxToConfig = patternIdxToConfig;
        }
        const chosenPatternsLength = chosenPatternIdxToConfig.length;
        for (i = 0; i < chosenPatternsLength; i++) {
          currConfig = chosenPatternIdxToConfig[i];
          const currPattern = currConfig.pattern;
          payload = null;
          const singleCharCode = currConfig.short;
          if (singleCharCode !== false) {
            if (nextCharCode === singleCharCode) {
              imageLength = 1;
              matchedImage = currPattern;
            }
          } else if (currConfig.isCustom === true) {
            match = currPattern.exec(orgText, offset, matchedTokens, groups);
            if (match !== null) {
              matchedImage = match[0];
              imageLength = matchedImage.length;
              if (match.payload !== void 0) {
                payload = match.payload;
              }
            } else {
              matchedImage = null;
            }
          } else {
            currPattern.lastIndex = offset;
            imageLength = this.matchLength(currPattern, text, offset);
          }
          if (imageLength !== -1) {
            longerAlt = currConfig.longerAlt;
            if (longerAlt !== void 0) {
              matchedImage = text.substring(offset, offset + imageLength);
              const longerAltLength = longerAlt.length;
              for (k = 0; k < longerAltLength; k++) {
                const longerAltConfig = patternIdxToConfig[longerAlt[k]];
                const longerAltPattern = longerAltConfig.pattern;
                altPayload = null;
                if (longerAltConfig.isCustom === true) {
                  match = longerAltPattern.exec(orgText, offset, matchedTokens, groups);
                  if (match !== null) {
                    matchAltImage = match[0];
                    if (match.payload !== void 0) {
                      altPayload = match.payload;
                    }
                  } else {
                    matchAltImage = null;
                  }
                } else {
                  longerAltPattern.lastIndex = offset;
                  matchAltImage = this.match(longerAltPattern, text, offset);
                }
                if (matchAltImage && matchAltImage.length > matchedImage.length) {
                  matchedImage = matchAltImage;
                  imageLength = matchAltImage.length;
                  payload = altPayload;
                  currConfig = longerAltConfig;
                  break;
                }
              }
            }
            break;
          }
        }
        if (imageLength !== -1) {
          group = currConfig.group;
          if (group !== void 0) {
            matchedImage = matchedImage !== null ? matchedImage : text.substring(offset, offset + imageLength);
            tokType = currConfig.tokenTypeIdx;
            newToken = this.createTokenInstance(matchedImage, offset, tokType, currConfig.tokenType, line, column, imageLength);
            this.handlePayload(newToken, payload);
            if (group === false) {
              matchedTokensIndex = this.addToken(matchedTokens, matchedTokensIndex, newToken);
            } else {
              groups[group].push(newToken);
            }
          }
          if (trackLines === true && currConfig.canLineTerminator === true) {
            let numOfLTsInMatch = 0;
            let foundTerminator;
            let lastLTEndOffset;
            lineTerminatorPattern.lastIndex = 0;
            do {
              matchedImage = matchedImage !== null ? matchedImage : text.substring(offset, offset + imageLength);
              foundTerminator = lineTerminatorPattern.test(matchedImage);
              if (foundTerminator === true) {
                lastLTEndOffset = lineTerminatorPattern.lastIndex - 1;
                numOfLTsInMatch++;
              }
            } while (foundTerminator === true);
            if (numOfLTsInMatch !== 0) {
              line = line + numOfLTsInMatch;
              column = imageLength - lastLTEndOffset;
              this.updateTokenEndLineColumnLocation(newToken, group, lastLTEndOffset, numOfLTsInMatch, line, column, imageLength);
            } else {
              column = this.computeNewColumn(column, imageLength);
            }
          } else {
            column = this.computeNewColumn(column, imageLength);
          }
          offset = offset + imageLength;
          this.handleModes(currConfig, pop_mode, push_mode, newToken);
        } else {
          const errorStartOffset = offset;
          const errorLine = line;
          const errorColumn = column;
          let foundResyncPoint = recoveryEnabled === false;
          while (foundResyncPoint === false && offset < orgLength) {
            offset++;
            for (j2 = 0; j2 < currModePatternsLength; j2++) {
              const currConfig2 = patternIdxToConfig[j2];
              const currPattern = currConfig2.pattern;
              const singleCharCode = currConfig2.short;
              if (singleCharCode !== false) {
                if (orgText.charCodeAt(offset) === singleCharCode) {
                  foundResyncPoint = true;
                }
              } else if (currConfig2.isCustom === true) {
                foundResyncPoint = currPattern.exec(orgText, offset, matchedTokens, groups) !== null;
              } else {
                currPattern.lastIndex = offset;
                foundResyncPoint = currPattern.exec(text) !== null;
              }
              if (foundResyncPoint === true) {
                break;
              }
            }
          }
          errLength = offset - errorStartOffset;
          column = this.computeNewColumn(column, errLength);
          msg = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(orgText, errorStartOffset, errLength, errorLine, errorColumn, modeStack.at(-1));
          errors.push({
            offset: errorStartOffset,
            line: errorLine,
            column: errorColumn,
            length: errLength,
            message: msg
          });
          if (recoveryEnabled === false) {
            break;
          }
        }
      }
      if (!this.hasCustom) {
        matchedTokens.length = matchedTokensIndex;
      }
      return {
        tokens: matchedTokens,
        groups,
        errors
      };
    }
    handleModes(config, pop_mode, push_mode, newToken) {
      if (config.pop === true) {
        const pushMode = config.push;
        pop_mode(newToken);
        if (pushMode !== void 0) {
          push_mode.call(this, pushMode);
        }
      } else if (config.push !== void 0) {
        push_mode.call(this, config.push);
      }
    }
    // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
    updateTokenEndLineColumnLocation(newToken, group, lastLTIdx, numOfLTsInMatch, line, column, imageLength) {
      let lastCharIsLT, fixForEndingInLT;
      if (group !== void 0) {
        lastCharIsLT = lastLTIdx === imageLength - 1;
        fixForEndingInLT = lastCharIsLT ? -1 : 0;
        if (!(numOfLTsInMatch === 1 && lastCharIsLT === true)) {
          newToken.endLine = line + fixForEndingInLT;
          newToken.endColumn = column - 1 + -fixForEndingInLT;
        }
      }
    }
    computeNewColumn(oldColumn, imageLength) {
      return oldColumn + imageLength;
    }
    createOffsetOnlyToken(image, startOffset, tokenTypeIdx, tokenType) {
      return {
        image,
        startOffset,
        tokenTypeIdx,
        tokenType
      };
    }
    createStartOnlyToken(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn) {
      return {
        image,
        startOffset,
        startLine,
        startColumn,
        tokenTypeIdx,
        tokenType
      };
    }
    createFullToken(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn, imageLength) {
      return {
        image,
        startOffset,
        endOffset: startOffset + imageLength - 1,
        startLine,
        endLine: startLine,
        startColumn,
        endColumn: startColumn + imageLength - 1,
        tokenTypeIdx,
        tokenType
      };
    }
    addTokenUsingPush(tokenVector, index, tokenToAdd) {
      tokenVector.push(tokenToAdd);
      return index;
    }
    addTokenUsingMemberAccess(tokenVector, index, tokenToAdd) {
      tokenVector[index] = tokenToAdd;
      index++;
      return index;
    }
    handlePayloadNoCustom(token, payload) {
    }
    handlePayloadWithCustom(token, payload) {
      if (payload !== null) {
        token.payload = payload;
      }
    }
    match(pattern, text, offset) {
      const found = pattern.test(text);
      if (found === true) {
        return text.substring(offset, pattern.lastIndex);
      }
      return null;
    }
    matchLength(pattern, text, offset) {
      const found = pattern.test(text);
      if (found === true) {
        return pattern.lastIndex - offset;
      }
      return -1;
    }
  };
  Lexer.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it will be consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
  Lexer.NA = /NOT_APPLICABLE/;

  // node_modules/chevrotain/lib/src/scan/tokens_public.js
  function tokenLabel2(tokType) {
    if (hasTokenLabel2(tokType)) {
      return tokType.LABEL;
    } else {
      return tokType.name;
    }
  }
  function hasTokenLabel2(obj) {
    return typeof obj.LABEL === "string" && obj.LABEL !== "";
  }
  var PARENT = "parent";
  var CATEGORIES = "categories";
  var LABEL = "label";
  var GROUP = "group";
  var PUSH_MODE = "push_mode";
  var POP_MODE = "pop_mode";
  var LONGER_ALT = "longer_alt";
  var LINE_BREAKS = "line_breaks";
  var START_CHARS_HINT = "start_chars_hint";
  function createToken(config) {
    return createTokenInternal(config);
  }
  function createTokenInternal(config) {
    const pattern = config.pattern;
    const tokenType = {};
    tokenType.name = config.name;
    if (pattern !== void 0) {
      tokenType.PATTERN = pattern;
    }
    if (Object.hasOwn(config, PARENT)) {
      throw "The parent property is no longer supported.\nSee: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.";
    }
    if (Object.hasOwn(config, CATEGORIES)) {
      tokenType.CATEGORIES = config[CATEGORIES];
    }
    augmentTokenTypes([tokenType]);
    if (Object.hasOwn(config, LABEL)) {
      tokenType.LABEL = config[LABEL];
    }
    if (Object.hasOwn(config, GROUP)) {
      tokenType.GROUP = config[GROUP];
    }
    if (Object.hasOwn(config, POP_MODE)) {
      tokenType.POP_MODE = config[POP_MODE];
    }
    if (Object.hasOwn(config, PUSH_MODE)) {
      tokenType.PUSH_MODE = config[PUSH_MODE];
    }
    if (Object.hasOwn(config, LONGER_ALT)) {
      tokenType.LONGER_ALT = config[LONGER_ALT];
    }
    if (Object.hasOwn(config, LINE_BREAKS)) {
      tokenType.LINE_BREAKS = config[LINE_BREAKS];
    }
    if (Object.hasOwn(config, START_CHARS_HINT)) {
      tokenType.START_CHARS_HINT = config[START_CHARS_HINT];
    }
    return tokenType;
  }
  var EOF = createToken({ name: "EOF", pattern: Lexer.NA });
  augmentTokenTypes([EOF]);
  function createTokenInstance(tokType, image, startOffset, endOffset, startLine, endLine, startColumn, endColumn) {
    return {
      image,
      startOffset,
      endOffset,
      startLine,
      endLine,
      startColumn,
      endColumn,
      tokenTypeIdx: tokType.tokenTypeIdx,
      tokenType: tokType
    };
  }
  function tokenMatcher(token, tokType) {
    return tokenStructuredMatcher(token, tokType);
  }

  // node_modules/chevrotain/lib/src/parse/errors_public.js
  var defaultParserErrorProvider = {
    buildMismatchTokenMessage({ expected, actual, previous, ruleName }) {
      const hasLabel = hasTokenLabel2(expected);
      const expectedMsg = hasLabel ? `--> ${tokenLabel2(expected)} <--` : `token of type --> ${expected.name} <--`;
      const msg = `Expecting ${expectedMsg} but found --> '${actual.image}' <--`;
      return msg;
    },
    buildNotAllInputParsedMessage({ firstRedundant, ruleName }) {
      return "Redundant input, expecting EOF but found: " + firstRedundant.image;
    },
    buildNoViableAltMessage({ expectedPathsPerAlt, actual, previous, customUserDescription, ruleName }) {
      const errPrefix = "Expecting: ";
      const actualText = actual[0].image;
      const errSuffix = "\nbut found: '" + actualText + "'";
      if (customUserDescription) {
        return errPrefix + customUserDescription + errSuffix;
      } else {
        const allLookAheadPaths = expectedPathsPerAlt.reduce((result, currAltPaths) => result.concat(currAltPaths), []);
        const nextValidTokenSequences = allLookAheadPaths.map((currPath) => `[${currPath.map((currTokenType) => tokenLabel2(currTokenType)).join(", ")}]`);
        const nextValidSequenceItems = nextValidTokenSequences.map((itemMsg, idx) => `  ${idx + 1}. ${itemMsg}`);
        const calculatedDescription = `one of these possible Token sequences:
${nextValidSequenceItems.join("\n")}`;
        return errPrefix + calculatedDescription + errSuffix;
      }
    },
    buildEarlyExitMessage({ expectedIterationPaths, actual, customUserDescription, ruleName }) {
      const errPrefix = "Expecting: ";
      const actualText = actual[0].image;
      const errSuffix = "\nbut found: '" + actualText + "'";
      if (customUserDescription) {
        return errPrefix + customUserDescription + errSuffix;
      } else {
        const nextValidTokenSequences = expectedIterationPaths.map((currPath) => `[${currPath.map((currTokenType) => tokenLabel2(currTokenType)).join(",")}]`);
        const calculatedDescription = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${nextValidTokenSequences.join(" ,")}>`;
        return errPrefix + calculatedDescription + errSuffix;
      }
    }
  };
  Object.freeze(defaultParserErrorProvider);
  var defaultGrammarResolverErrorProvider = {
    buildRuleNotFoundError(topLevelRule, undefinedRule) {
      const msg = "Invalid grammar, reference to a rule which is not defined: ->" + undefinedRule.nonTerminalName + "<-\ninside top level rule: ->" + topLevelRule.name + "<-";
      return msg;
    }
  };
  var defaultGrammarValidatorErrorProvider = {
    buildDuplicateFoundError(topLevelRule, duplicateProds) {
      function getExtraProductionArgument2(prod) {
        if (prod instanceof Terminal) {
          return prod.terminalType.name;
        } else if (prod instanceof NonTerminal) {
          return prod.nonTerminalName;
        } else {
          return "";
        }
      }
      const topLevelName = topLevelRule.name;
      const duplicateProd = duplicateProds[0];
      const index = duplicateProd.idx;
      const dslName = getProductionDslName(duplicateProd);
      const extraArgument = getExtraProductionArgument2(duplicateProd);
      const hasExplicitIndex = index > 0;
      let msg = `->${dslName}${hasExplicitIndex ? index : ""}<- ${extraArgument ? `with argument: ->${extraArgument}<-` : ""}
                  appears more than once (${duplicateProds.length} times) in the top level rule: ->${topLevelName}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
      msg = msg.replace(/[ \t]+/g, " ");
      msg = msg.replace(/\s\s+/g, "\n");
      return msg;
    },
    buildNamespaceConflictError(rule) {
      const errMsg = `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${rule.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
      return errMsg;
    },
    buildAlternationPrefixAmbiguityError(options) {
      const pathMsg = options.prefixPath.map((currTok) => tokenLabel2(currTok)).join(", ");
      const occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
      const errMsg = `Ambiguous alternatives: <${options.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${occurrence}> inside <${options.topLevelRule.name}> Rule,
<${pathMsg}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
      return errMsg;
    },
    buildAlternationAmbiguityError(options) {
      const occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
      const isEmptyPath = options.prefixPath.length === 0;
      let currMessage = `Ambiguous Alternatives Detected: <${options.ambiguityIndices.join(" ,")}> in <OR${occurrence}> inside <${options.topLevelRule.name}> Rule,
`;
      if (isEmptyPath) {
        currMessage += `These alternatives are all empty (match no tokens), making them indistinguishable.
Only the last alternative may be empty.
`;
      } else {
        const pathMsg = options.prefixPath.map((currtok) => tokenLabel2(currtok)).join(", ");
        currMessage += `<${pathMsg}> may appears as a prefix path in all these alternatives.
`;
      }
      currMessage += `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`;
      return currMessage;
    },
    buildEmptyRepetitionError(options) {
      let dslName = getProductionDslName(options.repetition);
      if (options.repetition.idx !== 0) {
        dslName += options.repetition.idx;
      }
      const errMsg = `The repetition <${dslName}> within Rule <${options.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
      return errMsg;
    },
    // TODO: remove - `errors_public` from nyc.config.js exclude
    //       once this method is fully removed from this file
    buildTokenNameError(options) {
      return "deprecated";
    },
    buildEmptyAlternationError(options) {
      const errMsg = `Ambiguous empty alternative: <${options.emptyChoiceIdx + 1}> in <OR${options.alternation.idx}> inside <${options.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
      return errMsg;
    },
    buildTooManyAlternativesError(options) {
      const errMsg = `An Alternation cannot have more than 256 alternatives:
<OR${options.alternation.idx}> inside <${options.topLevelRule.name}> Rule.
 has ${options.alternation.definition.length + 1} alternatives.`;
      return errMsg;
    },
    buildLeftRecursionError(options) {
      const ruleName = options.topLevelRule.name;
      const pathNames = options.leftRecursionPath.map((currRule) => currRule.name);
      const leftRecursivePath = `${ruleName} --> ${pathNames.concat([ruleName]).join(" --> ")}`;
      const errMsg = `Left Recursion found in grammar.
rule: <${ruleName}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${leftRecursivePath}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
      return errMsg;
    },
    // TODO: remove - `errors_public` from nyc.config.js exclude
    //       once this method is fully removed from this file
    buildInvalidRuleNameError(options) {
      return "deprecated";
    },
    buildDuplicateRuleNameError(options) {
      let ruleName;
      if (options.topLevelRule instanceof Rule) {
        ruleName = options.topLevelRule.name;
      } else {
        ruleName = options.topLevelRule;
      }
      const errMsg = `Duplicate definition, rule: ->${ruleName}<- is already defined in the grammar: ->${options.grammarName}<-`;
      return errMsg;
    }
  };

  // node_modules/chevrotain/lib/src/parse/grammar/resolver.js
  function resolveGrammar(topLevels, errMsgProvider) {
    const refResolver = new GastRefResolverVisitor(topLevels, errMsgProvider);
    refResolver.resolveRefs();
    return refResolver.errors;
  }
  var GastRefResolverVisitor = class extends GAstVisitor {
    constructor(nameToTopRule, errMsgProvider) {
      super();
      this.nameToTopRule = nameToTopRule;
      this.errMsgProvider = errMsgProvider;
      this.errors = [];
    }
    resolveRefs() {
      Object.values(this.nameToTopRule).forEach((prod) => {
        this.currTopLevel = prod;
        prod.accept(this);
      });
    }
    visitNonTerminal(node) {
      const ref = this.nameToTopRule[node.nonTerminalName];
      if (!ref) {
        const msg = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, node);
        this.errors.push({
          message: msg,
          type: ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,
          ruleName: this.currTopLevel.name,
          unresolvedRefName: node.nonTerminalName
        });
      } else {
        node.referencedRule = ref;
      }
    }
  };

  // node_modules/chevrotain/lib/src/parse/grammar/interpreter.js
  var AbstractNextPossibleTokensWalker = class extends RestWalker {
    constructor(topProd, path) {
      super();
      this.topProd = topProd;
      this.path = path;
      this.possibleTokTypes = [];
      this.nextProductionName = "";
      this.nextProductionOccurrence = 0;
      this.found = false;
      this.isAtEndOfPath = false;
    }
    startWalking() {
      this.found = false;
      if (this.path.ruleStack[0] !== this.topProd.name) {
        throw Error("The path does not start with the walker's top Rule!");
      }
      this.ruleStack = [...this.path.ruleStack].reverse();
      this.occurrenceStack = [...this.path.occurrenceStack].reverse();
      this.ruleStack.pop();
      this.occurrenceStack.pop();
      this.updateExpectedNext();
      this.walk(this.topProd);
      return this.possibleTokTypes;
    }
    walk(prod, prevRest = []) {
      if (!this.found) {
        super.walk(prod, prevRest);
      }
    }
    walkProdRef(refProd, currRest, prevRest) {
      if (refProd.referencedRule.name === this.nextProductionName && refProd.idx === this.nextProductionOccurrence) {
        const fullRest = currRest.concat(prevRest);
        this.updateExpectedNext();
        this.walk(refProd.referencedRule, fullRest);
      }
    }
    updateExpectedNext() {
      if (this.ruleStack.length === 0) {
        this.nextProductionName = "";
        this.nextProductionOccurrence = 0;
        this.isAtEndOfPath = true;
      } else {
        this.nextProductionName = this.ruleStack.pop();
        this.nextProductionOccurrence = this.occurrenceStack.pop();
      }
    }
  };
  var NextAfterTokenWalker = class extends AbstractNextPossibleTokensWalker {
    constructor(topProd, path) {
      super(topProd, path);
      this.path = path;
      this.nextTerminalName = "";
      this.nextTerminalOccurrence = 0;
      this.nextTerminalName = this.path.lastTok.name;
      this.nextTerminalOccurrence = this.path.lastTokOccurrence;
    }
    walkTerminal(terminal, currRest, prevRest) {
      if (this.isAtEndOfPath && terminal.terminalType.name === this.nextTerminalName && terminal.idx === this.nextTerminalOccurrence && !this.found) {
        const fullRest = currRest.concat(prevRest);
        const restProd = new Alternative({ definition: fullRest });
        this.possibleTokTypes = first(restProd);
        this.found = true;
      }
    }
  };
  var AbstractNextTerminalAfterProductionWalker = class extends RestWalker {
    constructor(topRule, occurrence) {
      super();
      this.topRule = topRule;
      this.occurrence = occurrence;
      this.result = {
        token: void 0,
        occurrence: void 0,
        isEndOfRule: void 0
      };
    }
    startWalking() {
      this.walk(this.topRule);
      return this.result;
    }
  };
  var NextTerminalAfterManyWalker = class extends AbstractNextTerminalAfterProductionWalker {
    walkMany(manyProd, currRest, prevRest) {
      if (manyProd.idx === this.occurrence) {
        const firstAfterMany = currRest.concat(prevRest)[0];
        this.result.isEndOfRule = firstAfterMany === void 0;
        if (firstAfterMany instanceof Terminal) {
          this.result.token = firstAfterMany.terminalType;
          this.result.occurrence = firstAfterMany.idx;
        }
      } else {
        super.walkMany(manyProd, currRest, prevRest);
      }
    }
  };
  var NextTerminalAfterManySepWalker = class extends AbstractNextTerminalAfterProductionWalker {
    walkManySep(manySepProd, currRest, prevRest) {
      if (manySepProd.idx === this.occurrence) {
        const firstAfterManySep = currRest.concat(prevRest)[0];
        this.result.isEndOfRule = firstAfterManySep === void 0;
        if (firstAfterManySep instanceof Terminal) {
          this.result.token = firstAfterManySep.terminalType;
          this.result.occurrence = firstAfterManySep.idx;
        }
      } else {
        super.walkManySep(manySepProd, currRest, prevRest);
      }
    }
  };
  var NextTerminalAfterAtLeastOneWalker = class extends AbstractNextTerminalAfterProductionWalker {
    walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
      if (atLeastOneProd.idx === this.occurrence) {
        const firstAfterAtLeastOne = currRest.concat(prevRest)[0];
        this.result.isEndOfRule = firstAfterAtLeastOne === void 0;
        if (firstAfterAtLeastOne instanceof Terminal) {
          this.result.token = firstAfterAtLeastOne.terminalType;
          this.result.occurrence = firstAfterAtLeastOne.idx;
        }
      } else {
        super.walkAtLeastOne(atLeastOneProd, currRest, prevRest);
      }
    }
  };
  var NextTerminalAfterAtLeastOneSepWalker = class extends AbstractNextTerminalAfterProductionWalker {
    walkAtLeastOneSep(atleastOneSepProd, currRest, prevRest) {
      if (atleastOneSepProd.idx === this.occurrence) {
        const firstAfterfirstAfterAtLeastOneSep = currRest.concat(prevRest)[0];
        this.result.isEndOfRule = firstAfterfirstAfterAtLeastOneSep === void 0;
        if (firstAfterfirstAfterAtLeastOneSep instanceof Terminal) {
          this.result.token = firstAfterfirstAfterAtLeastOneSep.terminalType;
          this.result.occurrence = firstAfterfirstAfterAtLeastOneSep.idx;
        }
      } else {
        super.walkAtLeastOneSep(atleastOneSepProd, currRest, prevRest);
      }
    }
  };
  function possiblePathsFrom(targetDef, maxLength, currPath = []) {
    currPath = [...currPath];
    let result = [];
    let i = 0;
    function remainingPathWith(nextDef) {
      return nextDef.concat(targetDef.slice(i + 1));
    }
    function getAlternativesForProd(definition) {
      const alternatives = possiblePathsFrom(remainingPathWith(definition), maxLength, currPath);
      return result.concat(alternatives);
    }
    while (currPath.length < maxLength && i < targetDef.length) {
      const prod = targetDef[i];
      if (prod instanceof Alternative) {
        return getAlternativesForProd(prod.definition);
      } else if (prod instanceof NonTerminal) {
        return getAlternativesForProd(prod.definition);
      } else if (prod instanceof Option) {
        result = getAlternativesForProd(prod.definition);
      } else if (prod instanceof RepetitionMandatory) {
        const newDef = prod.definition.concat([
          new Repetition({
            definition: prod.definition
          })
        ]);
        return getAlternativesForProd(newDef);
      } else if (prod instanceof RepetitionMandatoryWithSeparator) {
        const newDef = [
          new Alternative({ definition: prod.definition }),
          new Repetition({
            definition: [new Terminal({ terminalType: prod.separator })].concat(prod.definition)
          })
        ];
        return getAlternativesForProd(newDef);
      } else if (prod instanceof RepetitionWithSeparator) {
        const newDef = prod.definition.concat([
          new Repetition({
            definition: [new Terminal({ terminalType: prod.separator })].concat(prod.definition)
          })
        ]);
        result = getAlternativesForProd(newDef);
      } else if (prod instanceof Repetition) {
        const newDef = prod.definition.concat([
          new Repetition({
            definition: prod.definition
          })
        ]);
        result = getAlternativesForProd(newDef);
      } else if (prod instanceof Alternation) {
        prod.definition.forEach((currAlt) => {
          if (currAlt.definition.length !== 0) {
            result = getAlternativesForProd(currAlt.definition);
          }
        });
        return result;
      } else if (prod instanceof Terminal) {
        currPath.push(prod.terminalType);
      } else {
        throw Error("non exhaustive match");
      }
      i++;
    }
    result.push({
      partialPath: currPath,
      suffixDef: targetDef.slice(i)
    });
    return result;
  }
  function nextPossibleTokensAfter(initialDef, tokenVector, tokMatcher, maxLookAhead) {
    const EXIT_NON_TERMINAL = "EXIT_NONE_TERMINAL";
    const EXIT_NON_TERMINAL_ARR = [EXIT_NON_TERMINAL];
    const EXIT_ALTERNATIVE = "EXIT_ALTERNATIVE";
    let foundCompletePath = false;
    const tokenVectorLength = tokenVector.length;
    const minimalAlternativesIndex = tokenVectorLength - maxLookAhead - 1;
    const result = [];
    const possiblePaths = [];
    possiblePaths.push({
      idx: -1,
      def: initialDef,
      ruleStack: [],
      occurrenceStack: []
    });
    while (possiblePaths.length !== 0) {
      const currPath = possiblePaths.pop();
      if (currPath === EXIT_ALTERNATIVE) {
        if (foundCompletePath && possiblePaths.at(-1).idx <= minimalAlternativesIndex) {
          possiblePaths.pop();
        }
        continue;
      }
      const currDef = currPath.def;
      const currIdx = currPath.idx;
      const currRuleStack = currPath.ruleStack;
      const currOccurrenceStack = currPath.occurrenceStack;
      if (currDef.length === 0) {
        continue;
      }
      const prod = currDef[0];
      if (prod === EXIT_NON_TERMINAL) {
        const nextPath = {
          idx: currIdx,
          def: currDef.slice(1),
          ruleStack: currRuleStack.slice(0, -1),
          occurrenceStack: currOccurrenceStack.slice(0, -1)
        };
        possiblePaths.push(nextPath);
      } else if (prod instanceof Terminal) {
        if (currIdx < tokenVectorLength - 1) {
          const nextIdx = currIdx + 1;
          const actualToken = tokenVector[nextIdx];
          if (tokMatcher(actualToken, prod.terminalType)) {
            const nextPath = {
              idx: nextIdx,
              def: currDef.slice(1),
              ruleStack: currRuleStack,
              occurrenceStack: currOccurrenceStack
            };
            possiblePaths.push(nextPath);
          }
        } else if (currIdx === tokenVectorLength - 1) {
          result.push({
            nextTokenType: prod.terminalType,
            nextTokenOccurrence: prod.idx,
            ruleStack: currRuleStack,
            occurrenceStack: currOccurrenceStack
          });
          foundCompletePath = true;
        } else {
          throw Error("non exhaustive match");
        }
      } else if (prod instanceof NonTerminal) {
        const newRuleStack = [...currRuleStack];
        newRuleStack.push(prod.nonTerminalName);
        const newOccurrenceStack = [...currOccurrenceStack];
        newOccurrenceStack.push(prod.idx);
        const nextPath = {
          idx: currIdx,
          def: prod.definition.concat(EXIT_NON_TERMINAL_ARR, currDef.slice(1)),
          ruleStack: newRuleStack,
          occurrenceStack: newOccurrenceStack
        };
        possiblePaths.push(nextPath);
      } else if (prod instanceof Option) {
        const nextPathWithout = {
          idx: currIdx,
          def: currDef.slice(1),
          ruleStack: currRuleStack,
          occurrenceStack: currOccurrenceStack
        };
        possiblePaths.push(nextPathWithout);
        possiblePaths.push(EXIT_ALTERNATIVE);
        const nextPathWith = {
          idx: currIdx,
          def: prod.definition.concat(currDef.slice(1)),
          ruleStack: currRuleStack,
          occurrenceStack: currOccurrenceStack
        };
        possiblePaths.push(nextPathWith);
      } else if (prod instanceof RepetitionMandatory) {
        const secondIteration = new Repetition({
          definition: prod.definition,
          idx: prod.idx
        });
        const nextDef = prod.definition.concat([secondIteration], currDef.slice(1));
        const nextPath = {
          idx: currIdx,
          def: nextDef,
          ruleStack: currRuleStack,
          occurrenceStack: currOccurrenceStack
        };
        possiblePaths.push(nextPath);
      } else if (prod instanceof RepetitionMandatoryWithSeparator) {
        const separatorGast = new Terminal({
          terminalType: prod.separator
        });
        const secondIteration = new Repetition({
          definition: [separatorGast].concat(prod.definition),
          idx: prod.idx
        });
        const nextDef = prod.definition.concat([secondIteration], currDef.slice(1));
        const nextPath = {
          idx: currIdx,
          def: nextDef,
          ruleStack: currRuleStack,
          occurrenceStack: currOccurrenceStack
        };
        possiblePaths.push(nextPath);
      } else if (prod instanceof RepetitionWithSeparator) {
        const nextPathWithout = {
          idx: currIdx,
          def: currDef.slice(1),
          ruleStack: currRuleStack,
          occurrenceStack: currOccurrenceStack
        };
        possiblePaths.push(nextPathWithout);
        possiblePaths.push(EXIT_ALTERNATIVE);
        const separatorGast = new Terminal({
          terminalType: prod.separator
        });
        const nthRepetition = new Repetition({
          definition: [separatorGast].concat(prod.definition),
          idx: prod.idx
        });
        const nextDef = prod.definition.concat([nthRepetition], currDef.slice(1));
        const nextPathWith = {
          idx: currIdx,
          def: nextDef,
          ruleStack: currRuleStack,
          occurrenceStack: currOccurrenceStack
        };
        possiblePaths.push(nextPathWith);
      } else if (prod instanceof Repetition) {
        const nextPathWithout = {
          idx: currIdx,
          def: currDef.slice(1),
          ruleStack: currRuleStack,
          occurrenceStack: currOccurrenceStack
        };
        possiblePaths.push(nextPathWithout);
        possiblePaths.push(EXIT_ALTERNATIVE);
        const nthRepetition = new Repetition({
          definition: prod.definition,
          idx: prod.idx
        });
        const nextDef = prod.definition.concat([nthRepetition], currDef.slice(1));
        const nextPathWith = {
          idx: currIdx,
          def: nextDef,
          ruleStack: currRuleStack,
          occurrenceStack: currOccurrenceStack
        };
        possiblePaths.push(nextPathWith);
      } else if (prod instanceof Alternation) {
        for (let i = prod.definition.length - 1; i >= 0; i--) {
          const currAlt = prod.definition[i];
          const currAltPath = {
            idx: currIdx,
            def: currAlt.definition.concat(currDef.slice(1)),
            ruleStack: currRuleStack,
            occurrenceStack: currOccurrenceStack
          };
          possiblePaths.push(currAltPath);
          possiblePaths.push(EXIT_ALTERNATIVE);
        }
      } else if (prod instanceof Alternative) {
        possiblePaths.push({
          idx: currIdx,
          def: prod.definition.concat(currDef.slice(1)),
          ruleStack: currRuleStack,
          occurrenceStack: currOccurrenceStack
        });
      } else if (prod instanceof Rule) {
        possiblePaths.push(expandTopLevelRule(prod, currIdx, currRuleStack, currOccurrenceStack));
      } else {
        throw Error("non exhaustive match");
      }
    }
    return result;
  }
  function expandTopLevelRule(topRule, currIdx, currRuleStack, currOccurrenceStack) {
    const newRuleStack = [...currRuleStack];
    newRuleStack.push(topRule.name);
    const newCurrOccurrenceStack = [...currOccurrenceStack];
    newCurrOccurrenceStack.push(1);
    return {
      idx: currIdx,
      def: topRule.definition,
      ruleStack: newRuleStack,
      occurrenceStack: newCurrOccurrenceStack
    };
  }

  // node_modules/chevrotain/lib/src/parse/grammar/lookahead.js
  var PROD_TYPE;
  (function(PROD_TYPE2) {
    PROD_TYPE2[PROD_TYPE2["OPTION"] = 0] = "OPTION";
    PROD_TYPE2[PROD_TYPE2["REPETITION"] = 1] = "REPETITION";
    PROD_TYPE2[PROD_TYPE2["REPETITION_MANDATORY"] = 2] = "REPETITION_MANDATORY";
    PROD_TYPE2[PROD_TYPE2["REPETITION_MANDATORY_WITH_SEPARATOR"] = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR";
    PROD_TYPE2[PROD_TYPE2["REPETITION_WITH_SEPARATOR"] = 4] = "REPETITION_WITH_SEPARATOR";
    PROD_TYPE2[PROD_TYPE2["ALTERNATION"] = 5] = "ALTERNATION";
  })(PROD_TYPE || (PROD_TYPE = {}));
  function getProdType(prod) {
    if (prod instanceof Option || prod === "Option") {
      return PROD_TYPE.OPTION;
    } else if (prod instanceof Repetition || prod === "Repetition") {
      return PROD_TYPE.REPETITION;
    } else if (prod instanceof RepetitionMandatory || prod === "RepetitionMandatory") {
      return PROD_TYPE.REPETITION_MANDATORY;
    } else if (prod instanceof RepetitionMandatoryWithSeparator || prod === "RepetitionMandatoryWithSeparator") {
      return PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR;
    } else if (prod instanceof RepetitionWithSeparator || prod === "RepetitionWithSeparator") {
      return PROD_TYPE.REPETITION_WITH_SEPARATOR;
    } else if (prod instanceof Alternation || prod === "Alternation") {
      return PROD_TYPE.ALTERNATION;
    } else {
      throw Error("non exhaustive match");
    }
  }
  function buildLookaheadFuncForOr(occurrence, ruleGrammar, maxLookahead, hasPredicates, dynamicTokensEnabled, laFuncBuilder) {
    const lookAheadPaths = getLookaheadPathsForOr(occurrence, ruleGrammar, maxLookahead);
    const tokenMatcher2 = areTokenCategoriesNotUsed(lookAheadPaths) ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher;
    return laFuncBuilder(lookAheadPaths, hasPredicates, tokenMatcher2, dynamicTokensEnabled);
  }
  function buildLookaheadFuncForOptionalProd(occurrence, ruleGrammar, k, dynamicTokensEnabled, prodType, lookaheadBuilder) {
    const lookAheadPaths = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k);
    const tokenMatcher2 = areTokenCategoriesNotUsed(lookAheadPaths) ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher;
    return lookaheadBuilder(lookAheadPaths[0], tokenMatcher2, dynamicTokensEnabled);
  }
  function buildAlternativesLookAheadFunc(alts, hasPredicates, tokenMatcher2, dynamicTokensEnabled) {
    const numOfAlts = alts.length;
    const areAllOneTokenLookahead = alts.every((currAlt) => {
      return currAlt.every((currPath) => {
        return currPath.length === 1;
      });
    });
    if (hasPredicates) {
      return function(orAlts) {
        const predicates = orAlts.map((currAlt) => currAlt.GATE);
        for (let t = 0; t < numOfAlts; t++) {
          const currAlt = alts[t];
          const currNumOfPaths = currAlt.length;
          const currPredicate = predicates[t];
          if (currPredicate !== void 0 && currPredicate.call(this) === false) {
            continue;
          }
          nextPath: for (let j2 = 0; j2 < currNumOfPaths; j2++) {
            const currPath = currAlt[j2];
            const currPathLength = currPath.length;
            for (let i = 0; i < currPathLength; i++) {
              const nextToken = this.LA_FAST(i + 1);
              if (tokenMatcher2(nextToken, currPath[i]) === false) {
                continue nextPath;
              }
            }
            return t;
          }
        }
        return void 0;
      };
    } else if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
      const singleTokenAlts = alts.map((currAlt) => {
        return currAlt.flat();
      });
      const choiceToAlt = singleTokenAlts.reduce((result, currAlt, idx) => {
        currAlt.forEach((currTokType) => {
          if (!(currTokType.tokenTypeIdx in result)) {
            result[currTokType.tokenTypeIdx] = idx;
          }
          currTokType.categoryMatches.forEach((currExtendingType) => {
            if (!Object.hasOwn(result, currExtendingType)) {
              result[currExtendingType] = idx;
            }
          });
        });
        return result;
      }, {});
      return function() {
        const nextToken = this.LA_FAST(1);
        return choiceToAlt[nextToken.tokenTypeIdx];
      };
    } else {
      return function() {
        for (let t = 0; t < numOfAlts; t++) {
          const currAlt = alts[t];
          const currNumOfPaths = currAlt.length;
          nextPath: for (let j2 = 0; j2 < currNumOfPaths; j2++) {
            const currPath = currAlt[j2];
            const currPathLength = currPath.length;
            for (let i = 0; i < currPathLength; i++) {
              const nextToken = this.LA_FAST(i + 1);
              if (tokenMatcher2(nextToken, currPath[i]) === false) {
                continue nextPath;
              }
            }
            return t;
          }
        }
        return void 0;
      };
    }
  }
  function buildSingleAlternativeLookaheadFunction(alt, tokenMatcher2, dynamicTokensEnabled) {
    const areAllOneTokenLookahead = alt.every((currPath) => {
      return currPath.length === 1;
    });
    const numOfPaths = alt.length;
    if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
      const singleTokensTypes = alt.flat();
      if (singleTokensTypes.length === 1 && singleTokensTypes[0].categoryMatches.length === 0) {
        const expectedTokenType = singleTokensTypes[0];
        const expectedTokenUniqueKey = expectedTokenType.tokenTypeIdx;
        return function() {
          return this.LA_FAST(1).tokenTypeIdx === expectedTokenUniqueKey;
        };
      } else {
        const choiceToAlt = singleTokensTypes.reduce((result, currTokType, idx) => {
          result[currTokType.tokenTypeIdx] = true;
          currTokType.categoryMatches.forEach((currExtendingType) => {
            result[currExtendingType] = true;
          });
          return result;
        }, []);
        return function() {
          const nextToken = this.LA_FAST(1);
          return choiceToAlt[nextToken.tokenTypeIdx] === true;
        };
      }
    } else {
      return function() {
        nextPath: for (let j2 = 0; j2 < numOfPaths; j2++) {
          const currPath = alt[j2];
          const currPathLength = currPath.length;
          for (let i = 0; i < currPathLength; i++) {
            const nextToken = this.LA_FAST(i + 1);
            if (tokenMatcher2(nextToken, currPath[i]) === false) {
              continue nextPath;
            }
          }
          return true;
        }
        return false;
      };
    }
  }
  var RestDefinitionFinderWalker = class extends RestWalker {
    constructor(topProd, targetOccurrence, targetProdType) {
      super();
      this.topProd = topProd;
      this.targetOccurrence = targetOccurrence;
      this.targetProdType = targetProdType;
    }
    startWalking() {
      this.walk(this.topProd);
      return this.restDef;
    }
    checkIsTarget(node, expectedProdType, currRest, prevRest) {
      if (node.idx === this.targetOccurrence && this.targetProdType === expectedProdType) {
        this.restDef = currRest.concat(prevRest);
        return true;
      }
      return false;
    }
    walkOption(optionProd, currRest, prevRest) {
      if (!this.checkIsTarget(optionProd, PROD_TYPE.OPTION, currRest, prevRest)) {
        super.walkOption(optionProd, currRest, prevRest);
      }
    }
    walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
      if (!this.checkIsTarget(atLeastOneProd, PROD_TYPE.REPETITION_MANDATORY, currRest, prevRest)) {
        super.walkOption(atLeastOneProd, currRest, prevRest);
      }
    }
    walkAtLeastOneSep(atLeastOneSepProd, currRest, prevRest) {
      if (!this.checkIsTarget(atLeastOneSepProd, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, currRest, prevRest)) {
        super.walkOption(atLeastOneSepProd, currRest, prevRest);
      }
    }
    walkMany(manyProd, currRest, prevRest) {
      if (!this.checkIsTarget(manyProd, PROD_TYPE.REPETITION, currRest, prevRest)) {
        super.walkOption(manyProd, currRest, prevRest);
      }
    }
    walkManySep(manySepProd, currRest, prevRest) {
      if (!this.checkIsTarget(manySepProd, PROD_TYPE.REPETITION_WITH_SEPARATOR, currRest, prevRest)) {
        super.walkOption(manySepProd, currRest, prevRest);
      }
    }
  };
  var InsideDefinitionFinderVisitor = class extends GAstVisitor {
    constructor(targetOccurrence, targetProdType, targetRef) {
      super();
      this.targetOccurrence = targetOccurrence;
      this.targetProdType = targetProdType;
      this.targetRef = targetRef;
      this.result = [];
    }
    checkIsTarget(node, expectedProdName) {
      if (node.idx === this.targetOccurrence && this.targetProdType === expectedProdName && (this.targetRef === void 0 || node === this.targetRef)) {
        this.result = node.definition;
      }
    }
    visitOption(node) {
      this.checkIsTarget(node, PROD_TYPE.OPTION);
    }
    visitRepetition(node) {
      this.checkIsTarget(node, PROD_TYPE.REPETITION);
    }
    visitRepetitionMandatory(node) {
      this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY);
    }
    visitRepetitionMandatoryWithSeparator(node) {
      this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);
    }
    visitRepetitionWithSeparator(node) {
      this.checkIsTarget(node, PROD_TYPE.REPETITION_WITH_SEPARATOR);
    }
    visitAlternation(node) {
      this.checkIsTarget(node, PROD_TYPE.ALTERNATION);
    }
  };
  function initializeArrayOfArrays(size) {
    const result = new Array(size);
    for (let i = 0; i < size; i++) {
      result[i] = [];
    }
    return result;
  }
  function pathToHashKeys(path) {
    let keys = [""];
    for (let i = 0; i < path.length; i++) {
      const tokType = path[i];
      const longerKeys = [];
      for (let j2 = 0; j2 < keys.length; j2++) {
        const currShorterKey = keys[j2];
        longerKeys.push(currShorterKey + "_" + tokType.tokenTypeIdx);
        for (let t = 0; t < tokType.categoryMatches.length; t++) {
          const categoriesKeySuffix = "_" + tokType.categoryMatches[t];
          longerKeys.push(currShorterKey + categoriesKeySuffix);
        }
      }
      keys = longerKeys;
    }
    return keys;
  }
  function isUniquePrefixHash(altKnownPathsKeys, searchPathKeys, idx) {
    for (let currAltIdx = 0; currAltIdx < altKnownPathsKeys.length; currAltIdx++) {
      if (currAltIdx === idx) {
        continue;
      }
      const otherAltKnownPathsKeys = altKnownPathsKeys[currAltIdx];
      for (let searchIdx = 0; searchIdx < searchPathKeys.length; searchIdx++) {
        const searchKey = searchPathKeys[searchIdx];
        if (otherAltKnownPathsKeys[searchKey] === true) {
          return false;
        }
      }
    }
    return true;
  }
  function lookAheadSequenceFromAlternatives(altsDefs, k) {
    const partialAlts = altsDefs.map((currAlt) => possiblePathsFrom([currAlt], 1));
    const finalResult = initializeArrayOfArrays(partialAlts.length);
    const altsHashes = partialAlts.map((currAltPaths) => {
      const dict = {};
      currAltPaths.forEach((item) => {
        const keys = pathToHashKeys(item.partialPath);
        keys.forEach((currKey) => {
          dict[currKey] = true;
        });
      });
      return dict;
    });
    let newData = partialAlts;
    for (let pathLength = 1; pathLength <= k; pathLength++) {
      const currDataset = newData;
      newData = initializeArrayOfArrays(currDataset.length);
      for (let altIdx = 0; altIdx < currDataset.length; altIdx++) {
        const currAltPathsAndSuffixes = currDataset[altIdx];
        for (let currPathIdx = 0; currPathIdx < currAltPathsAndSuffixes.length; currPathIdx++) {
          const currPathPrefix = currAltPathsAndSuffixes[currPathIdx].partialPath;
          const suffixDef = currAltPathsAndSuffixes[currPathIdx].suffixDef;
          const prefixKeys = pathToHashKeys(currPathPrefix);
          const isUnique = isUniquePrefixHash(altsHashes, prefixKeys, altIdx);
          if (isUnique || suffixDef.length === 0 || currPathPrefix.length === k) {
            const currAltResult = finalResult[altIdx];
            if (containsPath(currAltResult, currPathPrefix) === false) {
              currAltResult.push(currPathPrefix);
              for (let j2 = 0; j2 < prefixKeys.length; j2++) {
                const currKey = prefixKeys[j2];
                altsHashes[altIdx][currKey] = true;
              }
            }
          } else {
            const newPartialPathsAndSuffixes = possiblePathsFrom(suffixDef, pathLength + 1, currPathPrefix);
            newData[altIdx] = newData[altIdx].concat(newPartialPathsAndSuffixes);
            newPartialPathsAndSuffixes.forEach((item) => {
              const prefixKeys2 = pathToHashKeys(item.partialPath);
              prefixKeys2.forEach((key) => {
                altsHashes[altIdx][key] = true;
              });
            });
          }
        }
      }
    }
    return finalResult;
  }
  function getLookaheadPathsForOr(occurrence, ruleGrammar, k, orProd) {
    const visitor = new InsideDefinitionFinderVisitor(occurrence, PROD_TYPE.ALTERNATION, orProd);
    ruleGrammar.accept(visitor);
    return lookAheadSequenceFromAlternatives(visitor.result, k);
  }
  function getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k) {
    const insideDefVisitor = new InsideDefinitionFinderVisitor(occurrence, prodType);
    ruleGrammar.accept(insideDefVisitor);
    const insideDef = insideDefVisitor.result;
    const afterDefWalker = new RestDefinitionFinderWalker(ruleGrammar, occurrence, prodType);
    const afterDef = afterDefWalker.startWalking();
    const insideFlat = new Alternative({ definition: insideDef });
    const afterFlat = new Alternative({ definition: afterDef });
    return lookAheadSequenceFromAlternatives([insideFlat, afterFlat], k);
  }
  function containsPath(alternative, searchPath) {
    compareOtherPath: for (let i = 0; i < alternative.length; i++) {
      const otherPath = alternative[i];
      if (otherPath.length !== searchPath.length) {
        continue;
      }
      for (let j2 = 0; j2 < otherPath.length; j2++) {
        const searchTok = searchPath[j2];
        const otherTok = otherPath[j2];
        const matchingTokens = searchTok === otherTok || otherTok.categoryMatchesMap[searchTok.tokenTypeIdx] !== void 0;
        if (matchingTokens === false) {
          continue compareOtherPath;
        }
      }
      return true;
    }
    return false;
  }
  function isStrictPrefixOfPath(prefix, other) {
    return prefix.length < other.length && prefix.every((tokType, idx) => {
      const otherTokType = other[idx];
      return tokType === otherTokType || otherTokType.categoryMatchesMap[tokType.tokenTypeIdx];
    });
  }
  function areTokenCategoriesNotUsed(lookAheadPaths) {
    return lookAheadPaths.every((singleAltPaths) => singleAltPaths.every((singlePath) => singlePath.every((token) => token.categoryMatches.length === 0)));
  }

  // node_modules/chevrotain/lib/src/parse/grammar/checks.js
  function validateLookahead(options) {
    const lookaheadValidationErrorMessages = options.lookaheadStrategy.validate({
      rules: options.rules,
      tokenTypes: options.tokenTypes,
      grammarName: options.grammarName
    });
    return lookaheadValidationErrorMessages.map((errorMessage) => Object.assign({ type: ParserDefinitionErrorType.CUSTOM_LOOKAHEAD_VALIDATION }, errorMessage));
  }
  function validateGrammar(topLevels, tokenTypes, errMsgProvider, grammarName) {
    const duplicateErrors = topLevels.flatMap((currTopLevel) => validateDuplicateProductions(currTopLevel, errMsgProvider));
    const termsNamespaceConflictErrors = checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider);
    const tooManyAltsErrors = topLevels.flatMap((curRule) => validateTooManyAlts(curRule, errMsgProvider));
    const duplicateRulesError = topLevels.flatMap((curRule) => validateRuleDoesNotAlreadyExist(curRule, topLevels, grammarName, errMsgProvider));
    return duplicateErrors.concat(termsNamespaceConflictErrors, tooManyAltsErrors, duplicateRulesError);
  }
  function validateDuplicateProductions(topLevelRule, errMsgProvider) {
    const collectorVisitor2 = new OccurrenceValidationCollector();
    topLevelRule.accept(collectorVisitor2);
    const allRuleProductions = collectorVisitor2.allProductions;
    const productionGroups = Object.groupBy(allRuleProductions, identifyProductionForDuplicates);
    const duplicates = Object.fromEntries(Object.entries(productionGroups).filter(([_k, currGroup]) => currGroup.length > 1));
    const errors = Object.values(duplicates).map((currDuplicates) => {
      const firstProd = currDuplicates[0];
      const msg = errMsgProvider.buildDuplicateFoundError(topLevelRule, currDuplicates);
      const dslName = getProductionDslName(firstProd);
      const defError = {
        message: msg,
        type: ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,
        ruleName: topLevelRule.name,
        dslName,
        occurrence: firstProd.idx
      };
      const param = getExtraProductionArgument(firstProd);
      if (param) {
        defError.parameter = param;
      }
      return defError;
    });
    return errors;
  }
  function identifyProductionForDuplicates(prod) {
    return `${getProductionDslName(prod)}_#_${prod.idx}_#_${getExtraProductionArgument(prod)}`;
  }
  function getExtraProductionArgument(prod) {
    if (prod instanceof Terminal) {
      return prod.terminalType.name;
    } else if (prod instanceof NonTerminal) {
      return prod.nonTerminalName;
    } else {
      return "";
    }
  }
  var OccurrenceValidationCollector = class extends GAstVisitor {
    constructor() {
      super(...arguments);
      this.allProductions = [];
    }
    visitNonTerminal(subrule) {
      this.allProductions.push(subrule);
    }
    visitOption(option) {
      this.allProductions.push(option);
    }
    visitRepetitionWithSeparator(manySep) {
      this.allProductions.push(manySep);
    }
    visitRepetitionMandatory(atLeastOne) {
      this.allProductions.push(atLeastOne);
    }
    visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
      this.allProductions.push(atLeastOneSep);
    }
    visitRepetition(many) {
      this.allProductions.push(many);
    }
    visitAlternation(or2) {
      this.allProductions.push(or2);
    }
    visitTerminal(terminal) {
      this.allProductions.push(terminal);
    }
  };
  function validateRuleDoesNotAlreadyExist(rule, allRules, className, errMsgProvider) {
    const errors = [];
    const occurrences = allRules.reduce((result, curRule) => {
      if (curRule.name === rule.name) {
        return result + 1;
      }
      return result;
    }, 0);
    if (occurrences > 1) {
      const errMsg = errMsgProvider.buildDuplicateRuleNameError({
        topLevelRule: rule,
        grammarName: className
      });
      errors.push({
        message: errMsg,
        type: ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
        ruleName: rule.name
      });
    }
    return errors;
  }
  function validateRuleIsOverridden(ruleName, definedRulesNames, className) {
    const errors = [];
    let errMsg;
    if (!definedRulesNames.includes(ruleName)) {
      errMsg = `Invalid rule override, rule: ->${ruleName}<- cannot be overridden in the grammar: ->${className}<-as it is not defined in any of the super grammars `;
      errors.push({
        message: errMsg,
        type: ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,
        ruleName
      });
    }
    return errors;
  }
  function validateNoLeftRecursion(topRule, currRule, errMsgProvider, path = []) {
    const errors = [];
    const nextNonTerminals = getFirstNoneTerminal(currRule.definition);
    if (nextNonTerminals.length === 0) {
      return [];
    } else {
      const ruleName = topRule.name;
      const foundLeftRecursion = nextNonTerminals.includes(topRule);
      if (foundLeftRecursion) {
        errors.push({
          message: errMsgProvider.buildLeftRecursionError({
            topLevelRule: topRule,
            leftRecursionPath: path
          }),
          type: ParserDefinitionErrorType.LEFT_RECURSION,
          ruleName
        });
      }
      const excluded = path.concat([topRule]);
      const validNextSteps = nextNonTerminals.filter((x2) => !excluded.includes(x2));
      const errorsFromNextSteps = validNextSteps.flatMap((currRefRule) => {
        const newPath = [...path];
        newPath.push(currRefRule);
        return validateNoLeftRecursion(topRule, currRefRule, errMsgProvider, newPath);
      });
      return errors.concat(errorsFromNextSteps);
    }
  }
  function getFirstNoneTerminal(definition) {
    let result = [];
    if (definition.length === 0) {
      return result;
    }
    const firstProd = definition[0];
    if (firstProd instanceof NonTerminal) {
      result.push(firstProd.referencedRule);
    } else if (firstProd instanceof Alternative || firstProd instanceof Option || firstProd instanceof RepetitionMandatory || firstProd instanceof RepetitionMandatoryWithSeparator || firstProd instanceof RepetitionWithSeparator || firstProd instanceof Repetition) {
      result = result.concat(getFirstNoneTerminal(firstProd.definition));
    } else if (firstProd instanceof Alternation) {
      result = firstProd.definition.map((currSubDef) => getFirstNoneTerminal(currSubDef.definition)).flat();
    } else if (firstProd instanceof Terminal) {
    } else {
      throw Error("non exhaustive match");
    }
    const isFirstOptional = isOptionalProd(firstProd);
    const hasMore = definition.length > 1;
    if (isFirstOptional && hasMore) {
      const rest = definition.slice(1);
      return result.concat(getFirstNoneTerminal(rest));
    } else {
      return result;
    }
  }
  var OrCollector = class extends GAstVisitor {
    constructor() {
      super(...arguments);
      this.alternations = [];
    }
    visitAlternation(node) {
      this.alternations.push(node);
    }
  };
  function validateEmptyOrAlternative(topLevelRule, errMsgProvider) {
    const orCollector = new OrCollector();
    topLevelRule.accept(orCollector);
    const ors = orCollector.alternations;
    const errors = ors.flatMap((currOr) => {
      const exceptLast = currOr.definition.slice(0, -1);
      return exceptLast.flatMap((currAlternative, currAltIdx) => {
        const possibleFirstInAlt = nextPossibleTokensAfter([currAlternative], [], tokenStructuredMatcher, 1);
        if (possibleFirstInAlt.length === 0) {
          return [
            {
              message: errMsgProvider.buildEmptyAlternationError({
                topLevelRule,
                alternation: currOr,
                emptyChoiceIdx: currAltIdx
              }),
              type: ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,
              ruleName: topLevelRule.name,
              occurrence: currOr.idx,
              alternative: currAltIdx + 1
            }
          ];
        } else {
          return [];
        }
      });
    });
    return errors;
  }
  function validateAmbiguousAlternationAlternatives(topLevelRule, globalMaxLookahead, errMsgProvider) {
    const orCollector = new OrCollector();
    topLevelRule.accept(orCollector);
    let ors = orCollector.alternations;
    ors = ors.filter((currOr) => currOr.ignoreAmbiguities !== true);
    const errors = ors.flatMap((currOr) => {
      const currOccurrence = currOr.idx;
      const actualMaxLookahead = currOr.maxLookahead || globalMaxLookahead;
      const alternatives = getLookaheadPathsForOr(currOccurrence, topLevelRule, actualMaxLookahead, currOr);
      const altsAmbiguityErrors = checkAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
      const altsPrefixAmbiguityErrors = checkPrefixAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
      return altsAmbiguityErrors.concat(altsPrefixAmbiguityErrors);
    });
    return errors;
  }
  var RepetitionCollector = class extends GAstVisitor {
    constructor() {
      super(...arguments);
      this.allProductions = [];
    }
    visitRepetitionWithSeparator(manySep) {
      this.allProductions.push(manySep);
    }
    visitRepetitionMandatory(atLeastOne) {
      this.allProductions.push(atLeastOne);
    }
    visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
      this.allProductions.push(atLeastOneSep);
    }
    visitRepetition(many) {
      this.allProductions.push(many);
    }
  };
  function validateTooManyAlts(topLevelRule, errMsgProvider) {
    const orCollector = new OrCollector();
    topLevelRule.accept(orCollector);
    const ors = orCollector.alternations;
    const errors = ors.flatMap((currOr) => {
      if (currOr.definition.length > 255) {
        return [
          {
            message: errMsgProvider.buildTooManyAlternativesError({
              topLevelRule,
              alternation: currOr
            }),
            type: ParserDefinitionErrorType.TOO_MANY_ALTS,
            ruleName: topLevelRule.name,
            occurrence: currOr.idx
          }
        ];
      } else {
        return [];
      }
    });
    return errors;
  }
  function validateSomeNonEmptyLookaheadPath(topLevelRules, maxLookahead, errMsgProvider) {
    const errors = [];
    topLevelRules.forEach((currTopRule) => {
      const collectorVisitor2 = new RepetitionCollector();
      currTopRule.accept(collectorVisitor2);
      const allRuleProductions = collectorVisitor2.allProductions;
      allRuleProductions.forEach((currProd) => {
        const prodType = getProdType(currProd);
        const actualMaxLookahead = currProd.maxLookahead || maxLookahead;
        const currOccurrence = currProd.idx;
        const paths = getLookaheadPathsForOptionalProd(currOccurrence, currTopRule, prodType, actualMaxLookahead);
        const pathsInsideProduction = paths[0];
        if (pathsInsideProduction.flat().length === 0) {
          const errMsg = errMsgProvider.buildEmptyRepetitionError({
            topLevelRule: currTopRule,
            repetition: currProd
          });
          errors.push({
            message: errMsg,
            type: ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,
            ruleName: currTopRule.name
          });
        }
      });
    });
    return errors;
  }
  function checkAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
    const foundAmbiguousPaths = [];
    const identicalAmbiguities = alternatives.reduce((result, currAlt, currAltIdx) => {
      if (alternation.definition[currAltIdx].ignoreAmbiguities === true) {
        return result;
      }
      currAlt.forEach((currPath) => {
        const altsCurrPathAppearsIn = [currAltIdx];
        alternatives.forEach((currOtherAlt, currOtherAltIdx) => {
          if (currAltIdx !== currOtherAltIdx && containsPath(currOtherAlt, currPath) && // ignore (skip) ambiguities with this "other" alternative
          alternation.definition[currOtherAltIdx].ignoreAmbiguities !== true) {
            altsCurrPathAppearsIn.push(currOtherAltIdx);
          }
        });
        if (altsCurrPathAppearsIn.length > 1 && !containsPath(foundAmbiguousPaths, currPath)) {
          foundAmbiguousPaths.push(currPath);
          result.push({
            alts: altsCurrPathAppearsIn,
            path: currPath
          });
        }
      });
      return result;
    }, []);
    const currErrors = identicalAmbiguities.map((currAmbDescriptor) => {
      const ambgIndices = currAmbDescriptor.alts.map((currAltIdx) => currAltIdx + 1);
      const currMessage = errMsgProvider.buildAlternationAmbiguityError({
        topLevelRule: rule,
        alternation,
        ambiguityIndices: ambgIndices,
        prefixPath: currAmbDescriptor.path
      });
      return {
        message: currMessage,
        type: ParserDefinitionErrorType.AMBIGUOUS_ALTS,
        ruleName: rule.name,
        occurrence: alternation.idx,
        alternatives: currAmbDescriptor.alts
      };
    });
    return currErrors;
  }
  function checkPrefixAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
    const pathsAndIndices = alternatives.reduce((result, currAlt, idx) => {
      const currPathsAndIdx = currAlt.map((currPath) => {
        return { idx, path: currPath };
      });
      return result.concat(currPathsAndIdx);
    }, []);
    const errors = pathsAndIndices.flatMap((currPathAndIdx) => {
      const alternativeGast = alternation.definition[currPathAndIdx.idx];
      if (alternativeGast.ignoreAmbiguities === true) {
        return [];
      }
      const targetIdx = currPathAndIdx.idx;
      const targetPath = currPathAndIdx.path;
      const prefixAmbiguitiesPathsAndIndices = pathsAndIndices.filter((searchPathAndIdx) => {
        return (
          // ignore (skip) ambiguities with this "other" alternative
          alternation.definition[searchPathAndIdx.idx].ignoreAmbiguities !== true && searchPathAndIdx.idx < targetIdx && // checking for strict prefix because identical lookaheads
          // will be be detected using a different validation.
          isStrictPrefixOfPath(searchPathAndIdx.path, targetPath)
        );
      });
      const currPathPrefixErrors = prefixAmbiguitiesPathsAndIndices.map((currAmbPathAndIdx) => {
        const ambgIndices = [currAmbPathAndIdx.idx + 1, targetIdx + 1];
        const occurrence = alternation.idx === 0 ? "" : alternation.idx;
        const message = errMsgProvider.buildAlternationPrefixAmbiguityError({
          topLevelRule: rule,
          alternation,
          ambiguityIndices: ambgIndices,
          prefixPath: currAmbPathAndIdx.path
        });
        return {
          message,
          type: ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,
          ruleName: rule.name,
          occurrence,
          alternatives: ambgIndices
        };
      });
      return currPathPrefixErrors;
    });
    return errors;
  }
  function checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider) {
    const errors = [];
    const tokenNames = tokenTypes.map((currToken) => currToken.name);
    topLevels.forEach((currRule) => {
      const currRuleName = currRule.name;
      if (tokenNames.includes(currRuleName)) {
        const errMsg = errMsgProvider.buildNamespaceConflictError(currRule);
        errors.push({
          message: errMsg,
          type: ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,
          ruleName: currRuleName
        });
      }
    });
    return errors;
  }

  // node_modules/chevrotain/lib/src/parse/grammar/gast/gast_resolver_public.js
  function resolveGrammar2(options) {
    const actualOptions = Object.assign({ errMsgProvider: defaultGrammarResolverErrorProvider }, options);
    const topRulesTable = {};
    options.rules.forEach((rule) => {
      topRulesTable[rule.name] = rule;
    });
    return resolveGrammar(topRulesTable, actualOptions.errMsgProvider);
  }
  function validateGrammar2(options) {
    var _a;
    const errMsgProvider = (_a = options.errMsgProvider) !== null && _a !== void 0 ? _a : defaultGrammarValidatorErrorProvider;
    return validateGrammar(options.rules, options.tokenTypes, errMsgProvider, options.grammarName);
  }

  // node_modules/chevrotain/lib/src/parse/exceptions_public.js
  var MISMATCHED_TOKEN_EXCEPTION = "MismatchedTokenException";
  var NO_VIABLE_ALT_EXCEPTION = "NoViableAltException";
  var EARLY_EXIT_EXCEPTION = "EarlyExitException";
  var NOT_ALL_INPUT_PARSED_EXCEPTION = "NotAllInputParsedException";
  var RECOGNITION_EXCEPTION_NAMES = [
    MISMATCHED_TOKEN_EXCEPTION,
    NO_VIABLE_ALT_EXCEPTION,
    EARLY_EXIT_EXCEPTION,
    NOT_ALL_INPUT_PARSED_EXCEPTION
  ];
  Object.freeze(RECOGNITION_EXCEPTION_NAMES);
  function isRecognitionException(error) {
    return RECOGNITION_EXCEPTION_NAMES.includes(error.name);
  }
  var RecognitionException = class extends Error {
    constructor(message, token) {
      super(message);
      this.token = token;
      this.resyncedTokens = [];
      Object.setPrototypeOf(this, new.target.prototype);
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  };
  var MismatchedTokenException = class extends RecognitionException {
    constructor(message, token, previousToken) {
      super(message, token);
      this.previousToken = previousToken;
      this.name = MISMATCHED_TOKEN_EXCEPTION;
    }
  };
  var NoViableAltException = class extends RecognitionException {
    constructor(message, token, previousToken) {
      super(message, token);
      this.previousToken = previousToken;
      this.name = NO_VIABLE_ALT_EXCEPTION;
    }
  };
  var NotAllInputParsedException = class extends RecognitionException {
    constructor(message, token) {
      super(message, token);
      this.name = NOT_ALL_INPUT_PARSED_EXCEPTION;
    }
  };
  var EarlyExitException = class extends RecognitionException {
    constructor(message, token, previousToken) {
      super(message, token);
      this.previousToken = previousToken;
      this.name = EARLY_EXIT_EXCEPTION;
    }
  };

  // node_modules/chevrotain/lib/src/parse/parser/traits/recoverable.js
  var EOF_FOLLOW_KEY = {};
  var IN_RULE_RECOVERY_EXCEPTION = "InRuleRecoveryException";
  var InRuleRecoveryException = class extends Error {
    constructor(message) {
      super(message);
      this.name = IN_RULE_RECOVERY_EXCEPTION;
    }
  };
  var Recoverable = class {
    initRecoverable(config) {
      this.firstAfterRepMap = {};
      this.resyncFollows = {};
      this.recoveryEnabled = Object.hasOwn(config, "recoveryEnabled") ? config.recoveryEnabled : DEFAULT_PARSER_CONFIG.recoveryEnabled;
      if (this.recoveryEnabled) {
        this.attemptInRepetitionRecovery = attemptInRepetitionRecovery;
      }
    }
    getTokenToInsert(tokType) {
      const tokToInsert = createTokenInstance(tokType, "", NaN, NaN, NaN, NaN, NaN, NaN);
      tokToInsert.isInsertedInRecovery = true;
      return tokToInsert;
    }
    canTokenTypeBeInsertedInRecovery(tokType) {
      return true;
    }
    canTokenTypeBeDeletedInRecovery(tokType) {
      return true;
    }
    tryInRepetitionRecovery(grammarRule, grammarRuleArgs, lookAheadFunc, expectedTokType) {
      const reSyncTokType = this.findReSyncTokenType();
      const savedLexerState = this.exportLexerState();
      const resyncedTokens = [];
      let passedResyncPoint = false;
      const nextTokenWithoutResync = this.LA_FAST(1);
      let currToken = this.LA_FAST(1);
      const generateErrorMessage = () => {
        const previousToken = this.LA(0);
        const msg = this.errorMessageProvider.buildMismatchTokenMessage({
          expected: expectedTokType,
          actual: nextTokenWithoutResync,
          previous: previousToken,
          ruleName: this.getCurrRuleFullName()
        });
        const error = new MismatchedTokenException(msg, nextTokenWithoutResync, this.LA(0));
        error.resyncedTokens = resyncedTokens.slice(0, -1);
        this.SAVE_ERROR(error);
      };
      while (!passedResyncPoint) {
        if (this.tokenMatcher(currToken, expectedTokType)) {
          generateErrorMessage();
          return;
        } else if (lookAheadFunc.call(this)) {
          generateErrorMessage();
          grammarRule.apply(this, grammarRuleArgs);
          return;
        } else if (this.tokenMatcher(currToken, reSyncTokType)) {
          passedResyncPoint = true;
        } else {
          currToken = this.SKIP_TOKEN();
          this.addToResyncTokens(currToken, resyncedTokens);
        }
      }
      this.importLexerState(savedLexerState);
    }
    shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck) {
      if (notStuck === false) {
        return false;
      }
      if (this.tokenMatcher(this.LA_FAST(1), expectTokAfterLastMatch)) {
        return false;
      }
      if (this.isBackTracking()) {
        return false;
      }
      if (this.canPerformInRuleRecovery(expectTokAfterLastMatch, this.getFollowsForInRuleRecovery(expectTokAfterLastMatch, nextTokIdx))) {
        return false;
      }
      return true;
    }
    // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
    // TODO: should this be more explicitly part of the public API?
    getNextPossibleTokenTypes(grammarPath) {
      const topRuleName = grammarPath.ruleStack[0];
      const gastProductions = this.getGAstProductions();
      const topProduction = gastProductions[topRuleName];
      const nextPossibleTokenTypes = new NextAfterTokenWalker(topProduction, grammarPath).startWalking();
      return nextPossibleTokenTypes;
    }
    // Error Recovery functionality
    getFollowsForInRuleRecovery(tokType, tokIdxInRule) {
      const grammarPath = this.getCurrentGrammarPath(tokType, tokIdxInRule);
      const follows = this.getNextPossibleTokenTypes(grammarPath);
      return follows;
    }
    tryInRuleRecovery(expectedTokType, follows) {
      if (this.canRecoverWithSingleTokenInsertion(expectedTokType, follows)) {
        const tokToInsert = this.getTokenToInsert(expectedTokType);
        return tokToInsert;
      }
      if (this.canRecoverWithSingleTokenDeletion(expectedTokType)) {
        const nextTok = this.SKIP_TOKEN();
        this.consumeToken();
        return nextTok;
      }
      throw new InRuleRecoveryException("sad sad panda");
    }
    canPerformInRuleRecovery(expectedToken, follows) {
      return this.canRecoverWithSingleTokenInsertion(expectedToken, follows) || this.canRecoverWithSingleTokenDeletion(expectedToken);
    }
    canRecoverWithSingleTokenInsertion(expectedTokType, follows) {
      if (!this.canTokenTypeBeInsertedInRecovery(expectedTokType)) {
        return false;
      }
      if (follows.length === 0) {
        return false;
      }
      const mismatchedTok = this.LA_FAST(1);
      const isMisMatchedTokInFollows = follows.find((possibleFollowsTokType) => {
        return this.tokenMatcher(mismatchedTok, possibleFollowsTokType);
      }) !== void 0;
      return isMisMatchedTokInFollows;
    }
    canRecoverWithSingleTokenDeletion(expectedTokType) {
      if (!this.canTokenTypeBeDeletedInRecovery(expectedTokType)) {
        return false;
      }
      const isNextTokenWhatIsExpected = this.tokenMatcher(
        // not using LA_FAST because LA(2) might be un-safe with maxLookahead=1
        // in some edge cases (?)
        this.LA(2),
        expectedTokType
      );
      return isNextTokenWhatIsExpected;
    }
    isInCurrentRuleReSyncSet(tokenTypeIdx) {
      const followKey = this.getCurrFollowKey();
      const currentRuleReSyncSet = this.getFollowSetFromFollowKey(followKey);
      return currentRuleReSyncSet.includes(tokenTypeIdx);
    }
    findReSyncTokenType() {
      const allPossibleReSyncTokTypes = this.flattenFollowSet();
      let nextToken = this.LA_FAST(1);
      let k = 2;
      while (true) {
        const foundMatch = allPossibleReSyncTokTypes.find((resyncTokType) => {
          const canMatch = tokenMatcher(nextToken, resyncTokType);
          return canMatch;
        });
        if (foundMatch !== void 0) {
          return foundMatch;
        }
        nextToken = this.LA(k);
        k++;
      }
    }
    getCurrFollowKey() {
      if (this.RULE_STACK_IDX === 0) {
        return EOF_FOLLOW_KEY;
      }
      const currRuleShortName = this.currRuleShortName;
      const currRuleIdx = this.getLastExplicitRuleOccurrenceIndex();
      const prevRuleShortName = this.getPreviousExplicitRuleShortName();
      return {
        ruleName: this.shortRuleNameToFullName(currRuleShortName),
        idxInCallingRule: currRuleIdx,
        inRule: this.shortRuleNameToFullName(prevRuleShortName)
      };
    }
    buildFullFollowKeyStack() {
      const explicitRuleStack = this.RULE_STACK;
      const explicitOccurrenceStack = this.RULE_OCCURRENCE_STACK;
      const len = this.RULE_STACK_IDX + 1;
      const result = new Array(len);
      for (let idx = 0; idx < len; idx++) {
        if (idx === 0) {
          result[idx] = EOF_FOLLOW_KEY;
        } else {
          result[idx] = {
            ruleName: this.shortRuleNameToFullName(explicitRuleStack[idx]),
            idxInCallingRule: explicitOccurrenceStack[idx],
            inRule: this.shortRuleNameToFullName(explicitRuleStack[idx - 1])
          };
        }
      }
      return result;
    }
    flattenFollowSet() {
      const followStack = this.buildFullFollowKeyStack().map((currKey) => {
        return this.getFollowSetFromFollowKey(currKey);
      });
      return followStack.flat();
    }
    getFollowSetFromFollowKey(followKey) {
      if (followKey === EOF_FOLLOW_KEY) {
        return [EOF];
      }
      const followName = followKey.ruleName + followKey.idxInCallingRule + IN + followKey.inRule;
      return this.resyncFollows[followName];
    }
    // It does not make any sense to include a virtual EOF token in the list of resynced tokens
    // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
    addToResyncTokens(token, resyncTokens) {
      if (!this.tokenMatcher(token, EOF)) {
        resyncTokens.push(token);
      }
      return resyncTokens;
    }
    reSyncTo(tokType) {
      const resyncedTokens = [];
      let nextTok = this.LA_FAST(1);
      while (this.tokenMatcher(nextTok, tokType) === false) {
        nextTok = this.SKIP_TOKEN();
        this.addToResyncTokens(nextTok, resyncedTokens);
      }
      return resyncedTokens.slice(0, -1);
    }
    attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
    }
    getCurrentGrammarPath(tokType, tokIdxInRule) {
      const pathRuleStack = this.getHumanReadableRuleStack();
      const pathOccurrenceStack = this.RULE_OCCURRENCE_STACK.slice(0, this.RULE_OCCURRENCE_STACK_IDX + 1);
      const grammarPath = {
        ruleStack: pathRuleStack,
        occurrenceStack: pathOccurrenceStack,
        lastTok: tokType,
        lastTokOccurrence: tokIdxInRule
      };
      return grammarPath;
    }
    getHumanReadableRuleStack() {
      const len = this.RULE_STACK_IDX + 1;
      const result = new Array(len);
      for (let i = 0; i < len; i++) {
        result[i] = this.shortRuleNameToFullName(this.RULE_STACK[i]);
      }
      return result;
    }
  };
  function attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
    const key = this.getKeyForAutomaticLookahead(dslMethodIdx, prodOccurrence);
    let firstAfterRepInfo = this.firstAfterRepMap[key];
    if (firstAfterRepInfo === void 0) {
      const currRuleName = this.getCurrRuleFullName();
      const ruleGrammar = this.getGAstProductions()[currRuleName];
      const walker = new nextToksWalker(ruleGrammar, prodOccurrence);
      firstAfterRepInfo = walker.startWalking();
      this.firstAfterRepMap[key] = firstAfterRepInfo;
    }
    let expectTokAfterLastMatch = firstAfterRepInfo.token;
    let nextTokIdx = firstAfterRepInfo.occurrence;
    const isEndOfRule = firstAfterRepInfo.isEndOfRule;
    if (this.RULE_STACK_IDX === 0 && isEndOfRule && expectTokAfterLastMatch === void 0) {
      expectTokAfterLastMatch = EOF;
      nextTokIdx = 1;
    }
    if (expectTokAfterLastMatch === void 0 || nextTokIdx === void 0) {
      return;
    }
    if (this.shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck)) {
      this.tryInRepetitionRecovery(prodFunc, args, lookaheadFunc, expectTokAfterLastMatch);
    }
  }

  // node_modules/chevrotain/lib/src/parse/grammar/keys.js
  var BITS_FOR_METHOD_TYPE = 4;
  var BITS_FOR_OCCURRENCE_IDX = 8;
  var BITS_FOR_ALT_IDX = 8;
  var OR_IDX = 1 << BITS_FOR_OCCURRENCE_IDX;
  var OPTION_IDX = 2 << BITS_FOR_OCCURRENCE_IDX;
  var MANY_IDX = 3 << BITS_FOR_OCCURRENCE_IDX;
  var AT_LEAST_ONE_IDX = 4 << BITS_FOR_OCCURRENCE_IDX;
  var MANY_SEP_IDX = 5 << BITS_FOR_OCCURRENCE_IDX;
  var AT_LEAST_ONE_SEP_IDX = 6 << BITS_FOR_OCCURRENCE_IDX;
  function getKeyForAutomaticLookahead(ruleIdx, dslMethodIdx, occurrence) {
    return occurrence | dslMethodIdx | ruleIdx;
  }
  var BITS_START_FOR_ALT_IDX = 32 - BITS_FOR_ALT_IDX;

  // node_modules/chevrotain/lib/src/parse/grammar/llk_lookahead.js
  var LLkLookaheadStrategy = class {
    constructor(options) {
      var _a;
      this.maxLookahead = (_a = options === null || options === void 0 ? void 0 : options.maxLookahead) !== null && _a !== void 0 ? _a : DEFAULT_PARSER_CONFIG.maxLookahead;
    }
    validate(options) {
      const leftRecursionErrors = this.validateNoLeftRecursion(options.rules);
      if (leftRecursionErrors.length === 0) {
        const emptyAltErrors = this.validateEmptyOrAlternatives(options.rules);
        const ambiguousAltsErrors = this.validateAmbiguousAlternationAlternatives(options.rules, this.maxLookahead);
        const emptyRepetitionErrors = this.validateSomeNonEmptyLookaheadPath(options.rules, this.maxLookahead);
        const allErrors = [
          ...leftRecursionErrors,
          ...emptyAltErrors,
          ...ambiguousAltsErrors,
          ...emptyRepetitionErrors
        ];
        return allErrors;
      }
      return leftRecursionErrors;
    }
    validateNoLeftRecursion(rules) {
      return rules.flatMap((currTopRule) => validateNoLeftRecursion(currTopRule, currTopRule, defaultGrammarValidatorErrorProvider));
    }
    validateEmptyOrAlternatives(rules) {
      return rules.flatMap((currTopRule) => validateEmptyOrAlternative(currTopRule, defaultGrammarValidatorErrorProvider));
    }
    validateAmbiguousAlternationAlternatives(rules, maxLookahead) {
      return rules.flatMap((currTopRule) => validateAmbiguousAlternationAlternatives(currTopRule, maxLookahead, defaultGrammarValidatorErrorProvider));
    }
    validateSomeNonEmptyLookaheadPath(rules, maxLookahead) {
      return validateSomeNonEmptyLookaheadPath(rules, maxLookahead, defaultGrammarValidatorErrorProvider);
    }
    buildLookaheadForAlternation(options) {
      return buildLookaheadFuncForOr(options.prodOccurrence, options.rule, options.maxLookahead, options.hasPredicates, options.dynamicTokensEnabled, buildAlternativesLookAheadFunc);
    }
    buildLookaheadForOptional(options) {
      return buildLookaheadFuncForOptionalProd(options.prodOccurrence, options.rule, options.maxLookahead, options.dynamicTokensEnabled, getProdType(options.prodType), buildSingleAlternativeLookaheadFunction);
    }
  };

  // node_modules/chevrotain/lib/src/parse/parser/traits/looksahead.js
  var LooksAhead = class {
    initLooksAhead(config) {
      this.dynamicTokensEnabled = Object.hasOwn(config, "dynamicTokensEnabled") ? config.dynamicTokensEnabled : DEFAULT_PARSER_CONFIG.dynamicTokensEnabled;
      this.maxLookahead = Object.hasOwn(config, "maxLookahead") ? config.maxLookahead : DEFAULT_PARSER_CONFIG.maxLookahead;
      this.lookaheadStrategy = Object.hasOwn(config, "lookaheadStrategy") ? config.lookaheadStrategy : new LLkLookaheadStrategy({ maxLookahead: this.maxLookahead });
      this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
    }
    preComputeLookaheadFunctions(rules) {
      rules.forEach((currRule) => {
        this.TRACE_INIT(`${currRule.name} Rule Lookahead`, () => {
          const { alternation, repetition, option, repetitionMandatory, repetitionMandatoryWithSeparator, repetitionWithSeparator } = collectMethods(currRule);
          alternation.forEach((currProd) => {
            const prodIdx = currProd.idx === 0 ? "" : currProd.idx;
            this.TRACE_INIT(`${getProductionDslName(currProd)}${prodIdx}`, () => {
              const laFunc = this.lookaheadStrategy.buildLookaheadForAlternation({
                prodOccurrence: currProd.idx,
                rule: currRule,
                maxLookahead: currProd.maxLookahead || this.maxLookahead,
                hasPredicates: currProd.hasPredicates,
                dynamicTokensEnabled: this.dynamicTokensEnabled
              });
              const key = getKeyForAutomaticLookahead(this.fullRuleNameToShort[currRule.name], OR_IDX, currProd.idx);
              this.setLaFuncCache(key, laFunc);
            });
          });
          repetition.forEach((currProd) => {
            this.computeLookaheadFunc(currRule, currProd.idx, MANY_IDX, "Repetition", currProd.maxLookahead, getProductionDslName(currProd));
          });
          option.forEach((currProd) => {
            this.computeLookaheadFunc(currRule, currProd.idx, OPTION_IDX, "Option", currProd.maxLookahead, getProductionDslName(currProd));
          });
          repetitionMandatory.forEach((currProd) => {
            this.computeLookaheadFunc(currRule, currProd.idx, AT_LEAST_ONE_IDX, "RepetitionMandatory", currProd.maxLookahead, getProductionDslName(currProd));
          });
          repetitionMandatoryWithSeparator.forEach((currProd) => {
            this.computeLookaheadFunc(currRule, currProd.idx, AT_LEAST_ONE_SEP_IDX, "RepetitionMandatoryWithSeparator", currProd.maxLookahead, getProductionDslName(currProd));
          });
          repetitionWithSeparator.forEach((currProd) => {
            this.computeLookaheadFunc(currRule, currProd.idx, MANY_SEP_IDX, "RepetitionWithSeparator", currProd.maxLookahead, getProductionDslName(currProd));
          });
        });
      });
    }
    computeLookaheadFunc(rule, prodOccurrence, prodKey, prodType, prodMaxLookahead, dslMethodName) {
      this.TRACE_INIT(`${dslMethodName}${prodOccurrence === 0 ? "" : prodOccurrence}`, () => {
        const laFunc = this.lookaheadStrategy.buildLookaheadForOptional({
          prodOccurrence,
          rule,
          maxLookahead: prodMaxLookahead || this.maxLookahead,
          dynamicTokensEnabled: this.dynamicTokensEnabled,
          prodType
        });
        const key = getKeyForAutomaticLookahead(this.fullRuleNameToShort[rule.name], prodKey, prodOccurrence);
        this.setLaFuncCache(key, laFunc);
      });
    }
    // this actually returns a number, but it is always used as a string (object prop key)
    getKeyForAutomaticLookahead(dslMethodIdx, occurrence) {
      return getKeyForAutomaticLookahead(this.currRuleShortName, dslMethodIdx, occurrence);
    }
    getLaFuncFromCache(key) {
      return this.lookAheadFuncsCache.get(key);
    }
    /* istanbul ignore next */
    setLaFuncCache(key, value) {
      this.lookAheadFuncsCache.set(key, value);
    }
  };
  var DslMethodsCollectorVisitor = class extends GAstVisitor {
    constructor() {
      super(...arguments);
      this.dslMethods = {
        option: [],
        alternation: [],
        repetition: [],
        repetitionWithSeparator: [],
        repetitionMandatory: [],
        repetitionMandatoryWithSeparator: []
      };
    }
    reset() {
      this.dslMethods = {
        option: [],
        alternation: [],
        repetition: [],
        repetitionWithSeparator: [],
        repetitionMandatory: [],
        repetitionMandatoryWithSeparator: []
      };
    }
    visitOption(option) {
      this.dslMethods.option.push(option);
    }
    visitRepetitionWithSeparator(manySep) {
      this.dslMethods.repetitionWithSeparator.push(manySep);
    }
    visitRepetitionMandatory(atLeastOne) {
      this.dslMethods.repetitionMandatory.push(atLeastOne);
    }
    visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
      this.dslMethods.repetitionMandatoryWithSeparator.push(atLeastOneSep);
    }
    visitRepetition(many) {
      this.dslMethods.repetition.push(many);
    }
    visitAlternation(or2) {
      this.dslMethods.alternation.push(or2);
    }
  };
  var collectorVisitor = new DslMethodsCollectorVisitor();
  function collectMethods(rule) {
    collectorVisitor.reset();
    rule.accept(collectorVisitor);
    const dslMethods = collectorVisitor.dslMethods;
    collectorVisitor.reset();
    return dslMethods;
  }

  // node_modules/chevrotain/lib/src/parse/cst/cst.js
  function setNodeLocationOnlyOffset(currNodeLocation, newLocationInfo) {
    if (isNaN(currNodeLocation.startOffset) === true) {
      currNodeLocation.startOffset = newLocationInfo.startOffset;
      currNodeLocation.endOffset = newLocationInfo.endOffset;
    } else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
      currNodeLocation.endOffset = newLocationInfo.endOffset;
    }
  }
  function setNodeLocationFull(currNodeLocation, newLocationInfo) {
    if (isNaN(currNodeLocation.startOffset) === true) {
      currNodeLocation.startOffset = newLocationInfo.startOffset;
      currNodeLocation.startColumn = newLocationInfo.startColumn;
      currNodeLocation.startLine = newLocationInfo.startLine;
      currNodeLocation.endOffset = newLocationInfo.endOffset;
      currNodeLocation.endColumn = newLocationInfo.endColumn;
      currNodeLocation.endLine = newLocationInfo.endLine;
    } else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
      currNodeLocation.endOffset = newLocationInfo.endOffset;
      currNodeLocation.endColumn = newLocationInfo.endColumn;
      currNodeLocation.endLine = newLocationInfo.endLine;
    }
  }
  function addTerminalToCst(node, token, tokenTypeName) {
    if (node.children[tokenTypeName] === void 0) {
      node.children[tokenTypeName] = [token];
    } else {
      node.children[tokenTypeName].push(token);
    }
  }
  function addNoneTerminalToCst(node, ruleName, ruleResult) {
    if (node.children[ruleName] === void 0) {
      node.children[ruleName] = [ruleResult];
    } else {
      node.children[ruleName].push(ruleResult);
    }
  }

  // node_modules/chevrotain/lib/src/lang/lang_extensions.js
  var NAME2 = "name";
  function defineNameProp(obj, nameValue) {
    Object.defineProperty(obj, NAME2, {
      enumerable: false,
      configurable: true,
      writable: false,
      value: nameValue
    });
  }

  // node_modules/chevrotain/lib/src/parse/cst/cst_visitor.js
  function defaultVisit(ctx, param) {
    const childrenNames = Object.keys(ctx);
    const childrenNamesLength = childrenNames.length;
    for (let i = 0; i < childrenNamesLength; i++) {
      const currChildName = childrenNames[i];
      const currChildArray = ctx[currChildName];
      const currChildArrayLength = currChildArray.length;
      for (let j2 = 0; j2 < currChildArrayLength; j2++) {
        const currChild = currChildArray[j2];
        if (currChild.tokenTypeIdx === void 0) {
          this[currChild.name](currChild.children, param);
        }
      }
    }
  }
  function createBaseSemanticVisitorConstructor(grammarName, ruleNames) {
    const derivedConstructor = function() {
    };
    defineNameProp(derivedConstructor, grammarName + "BaseSemantics");
    const semanticProto = {
      visit: function(cstNode, param) {
        if (Array.isArray(cstNode)) {
          cstNode = cstNode[0];
        }
        if (cstNode === void 0) {
          return void 0;
        }
        return this[cstNode.name](cstNode.children, param);
      },
      validateVisitor: function() {
        const semanticDefinitionErrors = validateVisitor(this, ruleNames);
        if (semanticDefinitionErrors.length !== 0) {
          const errorMessages = semanticDefinitionErrors.map((currDefError) => currDefError.msg);
          throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${errorMessages.join("\n\n").replace(/\n/g, "\n	")}`);
        }
      }
    };
    derivedConstructor.prototype = semanticProto;
    derivedConstructor.prototype.constructor = derivedConstructor;
    derivedConstructor._RULE_NAMES = ruleNames;
    return derivedConstructor;
  }
  function createBaseVisitorConstructorWithDefaults(grammarName, ruleNames, baseConstructor) {
    const derivedConstructor = function() {
    };
    defineNameProp(derivedConstructor, grammarName + "BaseSemanticsWithDefaults");
    const withDefaultsProto = Object.create(baseConstructor.prototype);
    ruleNames.forEach((ruleName) => {
      withDefaultsProto[ruleName] = defaultVisit;
    });
    derivedConstructor.prototype = withDefaultsProto;
    derivedConstructor.prototype.constructor = derivedConstructor;
    return derivedConstructor;
  }
  var CstVisitorDefinitionError;
  (function(CstVisitorDefinitionError2) {
    CstVisitorDefinitionError2[CstVisitorDefinitionError2["REDUNDANT_METHOD"] = 0] = "REDUNDANT_METHOD";
    CstVisitorDefinitionError2[CstVisitorDefinitionError2["MISSING_METHOD"] = 1] = "MISSING_METHOD";
  })(CstVisitorDefinitionError || (CstVisitorDefinitionError = {}));
  function validateVisitor(visitorInstance, ruleNames) {
    const missingErrors = validateMissingCstMethods(visitorInstance, ruleNames);
    return missingErrors;
  }
  function validateMissingCstMethods(visitorInstance, ruleNames) {
    const missingRuleNames = ruleNames.filter((currRuleName) => {
      return typeof visitorInstance[currRuleName] === "function" === false;
    });
    const errors = missingRuleNames.map((currRuleName) => {
      return {
        msg: `Missing visitor method: <${currRuleName}> on ${visitorInstance.constructor.name} CST Visitor.`,
        type: CstVisitorDefinitionError.MISSING_METHOD,
        methodName: currRuleName
      };
    });
    return errors.filter(Boolean);
  }

  // node_modules/chevrotain/lib/src/parse/parser/traits/tree_builder.js
  var TreeBuilder = class {
    initTreeBuilder(config) {
      this.CST_STACK = [];
      this.outputCst = config.outputCst;
      this.nodeLocationTracking = Object.hasOwn(config, "nodeLocationTracking") ? config.nodeLocationTracking : DEFAULT_PARSER_CONFIG.nodeLocationTracking;
      if (!this.outputCst) {
        this.cstInvocationStateUpdate = () => {
        };
        this.cstFinallyStateUpdate = () => {
        };
        this.cstPostTerminal = () => {
        };
        this.cstPostNonTerminal = () => {
        };
        this.cstPostRule = () => {
        };
      } else {
        if (/full/i.test(this.nodeLocationTracking)) {
          if (this.recoveryEnabled) {
            this.setNodeLocationFromToken = setNodeLocationFull;
            this.setNodeLocationFromNode = setNodeLocationFull;
            this.cstPostRule = () => {
            };
            this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery;
          } else {
            this.setNodeLocationFromToken = () => {
            };
            this.setNodeLocationFromNode = () => {
            };
            this.cstPostRule = this.cstPostRuleFull;
            this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular;
          }
        } else if (/onlyOffset/i.test(this.nodeLocationTracking)) {
          if (this.recoveryEnabled) {
            this.setNodeLocationFromToken = setNodeLocationOnlyOffset;
            this.setNodeLocationFromNode = setNodeLocationOnlyOffset;
            this.cstPostRule = () => {
            };
            this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery;
          } else {
            this.setNodeLocationFromToken = () => {
            };
            this.setNodeLocationFromNode = () => {
            };
            this.cstPostRule = this.cstPostRuleOnlyOffset;
            this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular;
          }
        } else if (/none/i.test(this.nodeLocationTracking)) {
          this.setNodeLocationFromToken = () => {
          };
          this.setNodeLocationFromNode = () => {
          };
          this.cstPostRule = () => {
          };
          this.setInitialNodeLocation = () => {
          };
        } else {
          throw Error(`Invalid <nodeLocationTracking> config option: "${config.nodeLocationTracking}"`);
        }
      }
    }
    setInitialNodeLocationOnlyOffsetRecovery(cstNode) {
      cstNode.location = {
        startOffset: NaN,
        endOffset: NaN
      };
    }
    setInitialNodeLocationOnlyOffsetRegular(cstNode) {
      cstNode.location = {
        // without error recovery the starting Location of a new CstNode is guaranteed
        // To be the next Token's startOffset (for valid inputs).
        // For invalid inputs there won't be any CSTOutput so this potential
        // inaccuracy does not matter
        startOffset: this.LA_FAST(1).startOffset,
        endOffset: NaN
      };
    }
    setInitialNodeLocationFullRecovery(cstNode) {
      cstNode.location = {
        startOffset: NaN,
        startLine: NaN,
        startColumn: NaN,
        endOffset: NaN,
        endLine: NaN,
        endColumn: NaN
      };
    }
    /**
         *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work
    
         * @param cstNode
         */
    setInitialNodeLocationFullRegular(cstNode) {
      const nextToken = this.LA_FAST(1);
      cstNode.location = {
        startOffset: nextToken.startOffset,
        startLine: nextToken.startLine,
        startColumn: nextToken.startColumn,
        endOffset: NaN,
        endLine: NaN,
        endColumn: NaN
      };
    }
    cstInvocationStateUpdate(fullRuleName) {
      const cstNode = {
        name: fullRuleName,
        children: /* @__PURE__ */ Object.create(null)
      };
      this.setInitialNodeLocation(cstNode);
      this.CST_STACK.push(cstNode);
    }
    cstFinallyStateUpdate() {
      this.CST_STACK.pop();
    }
    cstPostRuleFull(ruleCstNode) {
      const prevToken = this.LA(0);
      const loc = ruleCstNode.location;
      if (loc.startOffset <= prevToken.startOffset === true) {
        loc.endOffset = prevToken.endOffset;
        loc.endLine = prevToken.endLine;
        loc.endColumn = prevToken.endColumn;
      } else {
        loc.startOffset = NaN;
        loc.startLine = NaN;
        loc.startColumn = NaN;
      }
    }
    cstPostRuleOnlyOffset(ruleCstNode) {
      const prevToken = this.LA(0);
      const loc = ruleCstNode.location;
      if (loc.startOffset <= prevToken.startOffset === true) {
        loc.endOffset = prevToken.endOffset;
      } else {
        loc.startOffset = NaN;
      }
    }
    cstPostTerminal(key, consumedToken) {
      const rootCst = this.CST_STACK[this.CST_STACK.length - 1];
      addTerminalToCst(rootCst, consumedToken, key);
      this.setNodeLocationFromToken(rootCst.location, consumedToken);
    }
    cstPostNonTerminal(ruleCstResult, ruleName) {
      const preCstNode = this.CST_STACK[this.CST_STACK.length - 1];
      addNoneTerminalToCst(preCstNode, ruleName, ruleCstResult);
      this.setNodeLocationFromNode(preCstNode.location, ruleCstResult.location);
    }
    getBaseCstVisitorConstructor() {
      if (this.baseCstVisitorConstructor === void 0) {
        const newBaseCstVisitorConstructor = createBaseSemanticVisitorConstructor(this.className, Object.keys(this.gastProductionsCache));
        this.baseCstVisitorConstructor = newBaseCstVisitorConstructor;
        return newBaseCstVisitorConstructor;
      }
      return this.baseCstVisitorConstructor;
    }
    getBaseCstVisitorConstructorWithDefaults() {
      if (this.baseCstVisitorWithDefaultsConstructor === void 0) {
        const newConstructor = createBaseVisitorConstructorWithDefaults(this.className, Object.keys(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
        this.baseCstVisitorWithDefaultsConstructor = newConstructor;
        return newConstructor;
      }
      return this.baseCstVisitorWithDefaultsConstructor;
    }
    getPreviousExplicitRuleShortName() {
      return this.RULE_STACK[this.RULE_STACK_IDX - 1];
    }
    getLastExplicitRuleOccurrenceIndex() {
      return this.RULE_OCCURRENCE_STACK[this.RULE_OCCURRENCE_STACK_IDX];
    }
  };

  // node_modules/chevrotain/lib/src/parse/parser/traits/lexer_adapter.js
  var LexerAdapter = class {
    initLexerAdapter() {
      this.tokVector = [];
      this.tokVectorLength = 0;
      this.currIdx = -1;
    }
    set input(newInput) {
      if (this.selfAnalysisDone !== true) {
        throw Error(`Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.`);
      }
      this.reset();
      this.tokVector = newInput;
      this.tokVectorLength = newInput.length;
    }
    get input() {
      return this.tokVector;
    }
    // skips a token and returns the next token
    SKIP_TOKEN() {
      if (this.currIdx <= this.tokVectorLength - 2) {
        this.consumeToken();
        return this.LA_FAST(1);
      } else {
        return END_OF_FILE;
      }
    }
    // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
    // or lexers dependent on parser context.
    // Performance Optimized version of LA without bound checks
    // note that token beyond the end of the token vector EOF Token will still be returned
    // due to using sentinels at the end of the token vector. (for K=max lookahead)
    LA_FAST(howMuch) {
      const soughtIdx = this.currIdx + howMuch;
      return this.tokVector[soughtIdx];
    }
    LA(howMuch) {
      const soughtIdx = this.currIdx + howMuch;
      if (soughtIdx < 0 || this.tokVectorLength <= soughtIdx) {
        return END_OF_FILE;
      } else {
        return this.tokVector[soughtIdx];
      }
    }
    consumeToken() {
      this.currIdx++;
    }
    exportLexerState() {
      return this.currIdx;
    }
    importLexerState(newState) {
      this.currIdx = newState;
    }
    resetLexerState() {
      this.currIdx = -1;
    }
    moveToTerminatedState() {
      this.currIdx = this.tokVectorLength - 1;
    }
    getLexerPosition() {
      return this.exportLexerState();
    }
  };

  // node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_api.js
  var RecognizerApi = class {
    ACTION(impl) {
      return impl.call(this);
    }
    consume(idx, tokType, options) {
      return this.consumeInternal(tokType, idx, options);
    }
    subrule(idx, ruleToCall, options) {
      return this.subruleInternal(ruleToCall, idx, options);
    }
    option(idx, actionORMethodDef) {
      return this.optionInternal(actionORMethodDef, idx);
    }
    or(idx, altsOrOpts) {
      return this.orInternal(altsOrOpts, idx);
    }
    many(idx, actionORMethodDef) {
      return this.manyInternal(idx, actionORMethodDef);
    }
    atLeastOne(idx, actionORMethodDef) {
      return this.atLeastOneInternal(idx, actionORMethodDef);
    }
    CONSUME(tokType, options) {
      return this.consumeInternal(tokType, 0, options);
    }
    CONSUME1(tokType, options) {
      return this.consumeInternal(tokType, 1, options);
    }
    CONSUME2(tokType, options) {
      return this.consumeInternal(tokType, 2, options);
    }
    CONSUME3(tokType, options) {
      return this.consumeInternal(tokType, 3, options);
    }
    CONSUME4(tokType, options) {
      return this.consumeInternal(tokType, 4, options);
    }
    CONSUME5(tokType, options) {
      return this.consumeInternal(tokType, 5, options);
    }
    CONSUME6(tokType, options) {
      return this.consumeInternal(tokType, 6, options);
    }
    CONSUME7(tokType, options) {
      return this.consumeInternal(tokType, 7, options);
    }
    CONSUME8(tokType, options) {
      return this.consumeInternal(tokType, 8, options);
    }
    CONSUME9(tokType, options) {
      return this.consumeInternal(tokType, 9, options);
    }
    SUBRULE(ruleToCall, options) {
      return this.subruleInternal(ruleToCall, 0, options);
    }
    SUBRULE1(ruleToCall, options) {
      return this.subruleInternal(ruleToCall, 1, options);
    }
    SUBRULE2(ruleToCall, options) {
      return this.subruleInternal(ruleToCall, 2, options);
    }
    SUBRULE3(ruleToCall, options) {
      return this.subruleInternal(ruleToCall, 3, options);
    }
    SUBRULE4(ruleToCall, options) {
      return this.subruleInternal(ruleToCall, 4, options);
    }
    SUBRULE5(ruleToCall, options) {
      return this.subruleInternal(ruleToCall, 5, options);
    }
    SUBRULE6(ruleToCall, options) {
      return this.subruleInternal(ruleToCall, 6, options);
    }
    SUBRULE7(ruleToCall, options) {
      return this.subruleInternal(ruleToCall, 7, options);
    }
    SUBRULE8(ruleToCall, options) {
      return this.subruleInternal(ruleToCall, 8, options);
    }
    SUBRULE9(ruleToCall, options) {
      return this.subruleInternal(ruleToCall, 9, options);
    }
    OPTION(actionORMethodDef) {
      return this.optionInternal(actionORMethodDef, 0);
    }
    OPTION1(actionORMethodDef) {
      return this.optionInternal(actionORMethodDef, 1);
    }
    OPTION2(actionORMethodDef) {
      return this.optionInternal(actionORMethodDef, 2);
    }
    OPTION3(actionORMethodDef) {
      return this.optionInternal(actionORMethodDef, 3);
    }
    OPTION4(actionORMethodDef) {
      return this.optionInternal(actionORMethodDef, 4);
    }
    OPTION5(actionORMethodDef) {
      return this.optionInternal(actionORMethodDef, 5);
    }
    OPTION6(actionORMethodDef) {
      return this.optionInternal(actionORMethodDef, 6);
    }
    OPTION7(actionORMethodDef) {
      return this.optionInternal(actionORMethodDef, 7);
    }
    OPTION8(actionORMethodDef) {
      return this.optionInternal(actionORMethodDef, 8);
    }
    OPTION9(actionORMethodDef) {
      return this.optionInternal(actionORMethodDef, 9);
    }
    OR(altsOrOpts) {
      return this.orInternal(altsOrOpts, 0);
    }
    OR1(altsOrOpts) {
      return this.orInternal(altsOrOpts, 1);
    }
    OR2(altsOrOpts) {
      return this.orInternal(altsOrOpts, 2);
    }
    OR3(altsOrOpts) {
      return this.orInternal(altsOrOpts, 3);
    }
    OR4(altsOrOpts) {
      return this.orInternal(altsOrOpts, 4);
    }
    OR5(altsOrOpts) {
      return this.orInternal(altsOrOpts, 5);
    }
    OR6(altsOrOpts) {
      return this.orInternal(altsOrOpts, 6);
    }
    OR7(altsOrOpts) {
      return this.orInternal(altsOrOpts, 7);
    }
    OR8(altsOrOpts) {
      return this.orInternal(altsOrOpts, 8);
    }
    OR9(altsOrOpts) {
      return this.orInternal(altsOrOpts, 9);
    }
    MANY(actionORMethodDef) {
      this.manyInternal(0, actionORMethodDef);
    }
    MANY1(actionORMethodDef) {
      this.manyInternal(1, actionORMethodDef);
    }
    MANY2(actionORMethodDef) {
      this.manyInternal(2, actionORMethodDef);
    }
    MANY3(actionORMethodDef) {
      this.manyInternal(3, actionORMethodDef);
    }
    MANY4(actionORMethodDef) {
      this.manyInternal(4, actionORMethodDef);
    }
    MANY5(actionORMethodDef) {
      this.manyInternal(5, actionORMethodDef);
    }
    MANY6(actionORMethodDef) {
      this.manyInternal(6, actionORMethodDef);
    }
    MANY7(actionORMethodDef) {
      this.manyInternal(7, actionORMethodDef);
    }
    MANY8(actionORMethodDef) {
      this.manyInternal(8, actionORMethodDef);
    }
    MANY9(actionORMethodDef) {
      this.manyInternal(9, actionORMethodDef);
    }
    MANY_SEP(options) {
      this.manySepFirstInternal(0, options);
    }
    MANY_SEP1(options) {
      this.manySepFirstInternal(1, options);
    }
    MANY_SEP2(options) {
      this.manySepFirstInternal(2, options);
    }
    MANY_SEP3(options) {
      this.manySepFirstInternal(3, options);
    }
    MANY_SEP4(options) {
      this.manySepFirstInternal(4, options);
    }
    MANY_SEP5(options) {
      this.manySepFirstInternal(5, options);
    }
    MANY_SEP6(options) {
      this.manySepFirstInternal(6, options);
    }
    MANY_SEP7(options) {
      this.manySepFirstInternal(7, options);
    }
    MANY_SEP8(options) {
      this.manySepFirstInternal(8, options);
    }
    MANY_SEP9(options) {
      this.manySepFirstInternal(9, options);
    }
    AT_LEAST_ONE(actionORMethodDef) {
      this.atLeastOneInternal(0, actionORMethodDef);
    }
    AT_LEAST_ONE1(actionORMethodDef) {
      return this.atLeastOneInternal(1, actionORMethodDef);
    }
    AT_LEAST_ONE2(actionORMethodDef) {
      this.atLeastOneInternal(2, actionORMethodDef);
    }
    AT_LEAST_ONE3(actionORMethodDef) {
      this.atLeastOneInternal(3, actionORMethodDef);
    }
    AT_LEAST_ONE4(actionORMethodDef) {
      this.atLeastOneInternal(4, actionORMethodDef);
    }
    AT_LEAST_ONE5(actionORMethodDef) {
      this.atLeastOneInternal(5, actionORMethodDef);
    }
    AT_LEAST_ONE6(actionORMethodDef) {
      this.atLeastOneInternal(6, actionORMethodDef);
    }
    AT_LEAST_ONE7(actionORMethodDef) {
      this.atLeastOneInternal(7, actionORMethodDef);
    }
    AT_LEAST_ONE8(actionORMethodDef) {
      this.atLeastOneInternal(8, actionORMethodDef);
    }
    AT_LEAST_ONE9(actionORMethodDef) {
      this.atLeastOneInternal(9, actionORMethodDef);
    }
    AT_LEAST_ONE_SEP(options) {
      this.atLeastOneSepFirstInternal(0, options);
    }
    AT_LEAST_ONE_SEP1(options) {
      this.atLeastOneSepFirstInternal(1, options);
    }
    AT_LEAST_ONE_SEP2(options) {
      this.atLeastOneSepFirstInternal(2, options);
    }
    AT_LEAST_ONE_SEP3(options) {
      this.atLeastOneSepFirstInternal(3, options);
    }
    AT_LEAST_ONE_SEP4(options) {
      this.atLeastOneSepFirstInternal(4, options);
    }
    AT_LEAST_ONE_SEP5(options) {
      this.atLeastOneSepFirstInternal(5, options);
    }
    AT_LEAST_ONE_SEP6(options) {
      this.atLeastOneSepFirstInternal(6, options);
    }
    AT_LEAST_ONE_SEP7(options) {
      this.atLeastOneSepFirstInternal(7, options);
    }
    AT_LEAST_ONE_SEP8(options) {
      this.atLeastOneSepFirstInternal(8, options);
    }
    AT_LEAST_ONE_SEP9(options) {
      this.atLeastOneSepFirstInternal(9, options);
    }
    RULE(name, implementation, config = DEFAULT_RULE_CONFIG) {
      if (this.definedRulesNames.includes(name)) {
        const errMsg = defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({
          topLevelRule: name,
          grammarName: this.className
        });
        const error = {
          message: errMsg,
          type: ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
          ruleName: name
        };
        this.definitionErrors.push(error);
      }
      this.definedRulesNames.push(name);
      const ruleImplementation = this.defineRule(name, implementation, config);
      this[name] = ruleImplementation;
      return ruleImplementation;
    }
    OVERRIDE_RULE(name, impl, config = DEFAULT_RULE_CONFIG) {
      const ruleErrors = validateRuleIsOverridden(name, this.definedRulesNames, this.className);
      this.definitionErrors = this.definitionErrors.concat(ruleErrors);
      const ruleImplementation = this.defineRule(name, impl, config);
      this[name] = ruleImplementation;
      return ruleImplementation;
    }
    BACKTRACK(grammarRule, args) {
      var _a;
      const ruleToCall = (_a = grammarRule.coreRule) !== null && _a !== void 0 ? _a : grammarRule;
      return function() {
        this.isBackTrackingStack.push(1);
        const orgState = this.saveRecogState();
        try {
          ruleToCall.apply(this, args);
          return true;
        } catch (e) {
          if (isRecognitionException(e)) {
            return false;
          } else {
            throw e;
          }
        } finally {
          this.reloadRecogState(orgState);
          this.isBackTrackingStack.pop();
        }
      };
    }
    // GAST export APIs
    getGAstProductions() {
      return this.gastProductionsCache;
    }
    getSerializedGastProductions() {
      return serializeGrammar(Object.values(this.gastProductionsCache));
    }
  };

  // node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_engine.js
  var RecognizerEngine = class {
    initRecognizerEngine(tokenVocabulary, config) {
      this.className = this.constructor.name;
      this.shortRuleNameToFull = {};
      this.fullRuleNameToShort = {};
      this.ruleShortNameIdx = 256;
      this.tokenMatcher = tokenStructuredMatcherNoCategories;
      this.subruleIdx = 0;
      this.currRuleShortName = 0;
      this.definedRulesNames = [];
      this.tokensMap = {};
      this.isBackTrackingStack = [];
      this.RULE_STACK = [];
      this.RULE_STACK_IDX = -1;
      this.RULE_OCCURRENCE_STACK = [];
      this.RULE_OCCURRENCE_STACK_IDX = -1;
      this.gastProductionsCache = {};
      if (Object.hasOwn(config, "serializedGrammar")) {
        throw Error("The Parser's configuration can no longer contain a <serializedGrammar> property.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0\n	For Further details.");
      }
      if (Array.isArray(tokenVocabulary)) {
        if (tokenVocabulary.length === 0) {
          throw Error("A Token Vocabulary cannot be empty.\n	Note that the first argument for the parser constructor\n	is no longer a Token vector (since v4.0).");
        }
        if (typeof tokenVocabulary[0].startOffset === "number") {
          throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0\n	For Further details.");
        }
      }
      if (Array.isArray(tokenVocabulary)) {
        this.tokensMap = tokenVocabulary.reduce((acc, tokType) => {
          acc[tokType.name] = tokType;
          return acc;
        }, {});
      } else if (Object.hasOwn(tokenVocabulary, "modes") && Object.values(tokenVocabulary.modes).flat().every(isTokenType)) {
        const allTokenTypes2 = Object.values(tokenVocabulary.modes).flat();
        const uniqueTokens = [...new Set(allTokenTypes2)];
        this.tokensMap = uniqueTokens.reduce((acc, tokType) => {
          acc[tokType.name] = tokType;
          return acc;
        }, {});
      } else if (typeof tokenVocabulary === "object" && tokenVocabulary !== null) {
        this.tokensMap = Object.assign({}, tokenVocabulary);
      } else {
        throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
      }
      this.tokensMap["EOF"] = EOF;
      const allTokenTypes = Object.hasOwn(tokenVocabulary, "modes") ? Object.values(tokenVocabulary.modes).flat() : Object.values(tokenVocabulary);
      const noTokenCategoriesUsed = allTokenTypes.every(
        // intentional "==" to also cover "undefined"
        (tokenConstructor) => {
          var _a;
          return ((_a = tokenConstructor.categoryMatches) === null || _a === void 0 ? void 0 : _a.length) == 0;
        }
      );
      this.tokenMatcher = noTokenCategoriesUsed ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher;
      augmentTokenTypes(Object.values(this.tokensMap));
    }
    defineRule(ruleName, impl, config) {
      if (this.selfAnalysisDone) {
        throw Error(`Grammar rule <${ruleName}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
      }
      const resyncEnabled = Object.hasOwn(config, "resyncEnabled") ? config.resyncEnabled : DEFAULT_RULE_CONFIG.resyncEnabled;
      const recoveryValueFunc = Object.hasOwn(config, "recoveryValueFunc") ? config.recoveryValueFunc : DEFAULT_RULE_CONFIG.recoveryValueFunc;
      const shortName = this.ruleShortNameIdx << BITS_FOR_METHOD_TYPE + BITS_FOR_OCCURRENCE_IDX;
      this.ruleShortNameIdx++;
      this.shortRuleNameToFull[shortName] = ruleName;
      this.fullRuleNameToShort[ruleName] = shortName;
      let coreRuleFunction;
      if (this.outputCst === true) {
        coreRuleFunction = function invokeRuleWithTry(...args) {
          try {
            this.ruleInvocationStateUpdate(shortName, ruleName, this.subruleIdx);
            impl.apply(this, args);
            const cst = this.CST_STACK[this.CST_STACK.length - 1];
            this.cstPostRule(cst);
            return cst;
          } catch (e) {
            return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
          } finally {
            this.ruleFinallyStateUpdate();
          }
        };
      } else {
        coreRuleFunction = function invokeRuleWithTryCst(...args) {
          try {
            this.ruleInvocationStateUpdate(shortName, ruleName, this.subruleIdx);
            return impl.apply(this, args);
          } catch (e) {
            return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
          } finally {
            this.ruleFinallyStateUpdate();
          }
        };
      }
      const rootRuleFunction = function rootRule(...args) {
        this.onBeforeParse(ruleName);
        try {
          return coreRuleFunction.apply(this, args);
        } finally {
          this.onAfterParse(ruleName);
        }
      };
      const wrappedGrammarRule = Object.assign(rootRuleFunction, { ruleName, originalGrammarAction: impl, coreRule: coreRuleFunction });
      return wrappedGrammarRule;
    }
    invokeRuleCatch(e, resyncEnabledConfig, recoveryValueFunc) {
      const isFirstInvokedRule = this.RULE_STACK_IDX === 0;
      const reSyncEnabled = resyncEnabledConfig && !this.isBackTracking() && this.recoveryEnabled;
      if (isRecognitionException(e)) {
        const recogError = e;
        if (reSyncEnabled) {
          const reSyncTokType = this.findReSyncTokenType();
          if (this.isInCurrentRuleReSyncSet(reSyncTokType)) {
            recogError.resyncedTokens = this.reSyncTo(reSyncTokType);
            if (this.outputCst) {
              const partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
              partialCstResult.recoveredNode = true;
              return partialCstResult;
            } else {
              return recoveryValueFunc(e);
            }
          } else {
            if (this.outputCst) {
              const partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
              partialCstResult.recoveredNode = true;
              recogError.partialCstResult = partialCstResult;
            }
            throw recogError;
          }
        } else if (isFirstInvokedRule) {
          this.moveToTerminatedState();
          return recoveryValueFunc(e);
        } else {
          throw recogError;
        }
      } else {
        throw e;
      }
    }
    // Implementation of parsing DSL
    optionInternal(actionORMethodDef, occurrence) {
      const key = this.getKeyForAutomaticLookahead(OPTION_IDX, occurrence);
      return this.optionInternalLogic(actionORMethodDef, occurrence, key);
    }
    optionInternalLogic(actionORMethodDef, occurrence, key) {
      let lookAheadFunc = this.getLaFuncFromCache(key);
      let action;
      if (typeof actionORMethodDef !== "function") {
        action = actionORMethodDef.DEF;
        const predicate = actionORMethodDef.GATE;
        if (predicate !== void 0) {
          const orgLookaheadFunction = lookAheadFunc;
          lookAheadFunc = () => {
            return predicate.call(this) && orgLookaheadFunction.call(this);
          };
        }
      } else {
        action = actionORMethodDef;
      }
      if (lookAheadFunc.call(this) === true) {
        return action.call(this);
      }
      return void 0;
    }
    atLeastOneInternal(prodOccurrence, actionORMethodDef) {
      const laKey = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_IDX, prodOccurrence);
      return this.atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, laKey);
    }
    atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, key) {
      let lookAheadFunc = this.getLaFuncFromCache(key);
      let action;
      if (typeof actionORMethodDef !== "function") {
        action = actionORMethodDef.DEF;
        const predicate = actionORMethodDef.GATE;
        if (predicate !== void 0) {
          const orgLookaheadFunction = lookAheadFunc;
          lookAheadFunc = () => {
            return predicate.call(this) && orgLookaheadFunction.call(this);
          };
        }
      } else {
        action = actionORMethodDef;
      }
      if (lookAheadFunc.call(this) === true) {
        let notStuck = this.doSingleRepetition(action);
        while (lookAheadFunc.call(this) === true && notStuck === true) {
          notStuck = this.doSingleRepetition(action);
        }
      } else {
        throw this.raiseEarlyExitException(prodOccurrence, PROD_TYPE.REPETITION_MANDATORY, actionORMethodDef.ERR_MSG);
      }
      this.attemptInRepetitionRecovery(this.atLeastOneInternal, [prodOccurrence, actionORMethodDef], lookAheadFunc, AT_LEAST_ONE_IDX, prodOccurrence, NextTerminalAfterAtLeastOneWalker);
    }
    atLeastOneSepFirstInternal(prodOccurrence, options) {
      const laKey = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_SEP_IDX, prodOccurrence);
      this.atLeastOneSepFirstInternalLogic(prodOccurrence, options, laKey);
    }
    atLeastOneSepFirstInternalLogic(prodOccurrence, options, key) {
      const action = options.DEF;
      const separator = options.SEP;
      const firstIterationLookaheadFunc = this.getLaFuncFromCache(key);
      if (firstIterationLookaheadFunc.call(this) === true) {
        action.call(this);
        const separatorLookAheadFunc = () => {
          return this.tokenMatcher(this.LA_FAST(1), separator);
        };
        while (this.tokenMatcher(this.LA_FAST(1), separator) === true) {
          this.CONSUME(separator);
          action.call(this);
        }
        this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
          prodOccurrence,
          separator,
          separatorLookAheadFunc,
          action,
          NextTerminalAfterAtLeastOneSepWalker
        ], separatorLookAheadFunc, AT_LEAST_ONE_SEP_IDX, prodOccurrence, NextTerminalAfterAtLeastOneSepWalker);
      } else {
        throw this.raiseEarlyExitException(prodOccurrence, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, options.ERR_MSG);
      }
    }
    manyInternal(prodOccurrence, actionORMethodDef) {
      const laKey = this.getKeyForAutomaticLookahead(MANY_IDX, prodOccurrence);
      return this.manyInternalLogic(prodOccurrence, actionORMethodDef, laKey);
    }
    manyInternalLogic(prodOccurrence, actionORMethodDef, key) {
      let lookaheadFunction = this.getLaFuncFromCache(key);
      let action;
      if (typeof actionORMethodDef !== "function") {
        action = actionORMethodDef.DEF;
        const predicate = actionORMethodDef.GATE;
        if (predicate !== void 0) {
          const orgLookaheadFunction = lookaheadFunction;
          lookaheadFunction = () => {
            return predicate.call(this) && orgLookaheadFunction.call(this);
          };
        }
      } else {
        action = actionORMethodDef;
      }
      let notStuck = true;
      while (lookaheadFunction.call(this) === true && notStuck === true) {
        notStuck = this.doSingleRepetition(action);
      }
      this.attemptInRepetitionRecovery(
        this.manyInternal,
        [prodOccurrence, actionORMethodDef],
        lookaheadFunction,
        MANY_IDX,
        prodOccurrence,
        NextTerminalAfterManyWalker,
        // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
        // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
        // An infinite loop cannot occur as:
        // - Either the lookahead is guaranteed to consume something (Single Token Separator)
        // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
        notStuck
      );
    }
    manySepFirstInternal(prodOccurrence, options) {
      const laKey = this.getKeyForAutomaticLookahead(MANY_SEP_IDX, prodOccurrence);
      this.manySepFirstInternalLogic(prodOccurrence, options, laKey);
    }
    manySepFirstInternalLogic(prodOccurrence, options, key) {
      const action = options.DEF;
      const separator = options.SEP;
      const firstIterationLaFunc = this.getLaFuncFromCache(key);
      if (firstIterationLaFunc.call(this) === true) {
        action.call(this);
        const separatorLookAheadFunc = () => {
          return this.tokenMatcher(this.LA_FAST(1), separator);
        };
        while (this.tokenMatcher(this.LA_FAST(1), separator) === true) {
          this.CONSUME(separator);
          action.call(this);
        }
        this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
          prodOccurrence,
          separator,
          separatorLookAheadFunc,
          action,
          NextTerminalAfterManySepWalker
        ], separatorLookAheadFunc, MANY_SEP_IDX, prodOccurrence, NextTerminalAfterManySepWalker);
      }
    }
    repetitionSepSecondInternal(prodOccurrence, separator, separatorLookAheadFunc, action, nextTerminalAfterWalker) {
      while (separatorLookAheadFunc()) {
        this.CONSUME(separator);
        action.call(this);
      }
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        prodOccurrence,
        separator,
        separatorLookAheadFunc,
        action,
        nextTerminalAfterWalker
      ], separatorLookAheadFunc, AT_LEAST_ONE_SEP_IDX, prodOccurrence, nextTerminalAfterWalker);
    }
    doSingleRepetition(action) {
      const beforeIteration = this.getLexerPosition();
      action.call(this);
      const afterIteration = this.getLexerPosition();
      return afterIteration > beforeIteration;
    }
    orInternal(altsOrOpts, occurrence) {
      const laKey = this.getKeyForAutomaticLookahead(OR_IDX, occurrence);
      const alts = Array.isArray(altsOrOpts) ? altsOrOpts : altsOrOpts.DEF;
      const laFunc = this.getLaFuncFromCache(laKey);
      const altIdxToTake = laFunc.call(this, alts);
      if (altIdxToTake !== void 0) {
        const chosenAlternative = alts[altIdxToTake];
        return chosenAlternative.ALT.call(this);
      }
      this.raiseNoAltException(occurrence, altsOrOpts.ERR_MSG);
    }
    ruleFinallyStateUpdate() {
      this.RULE_STACK_IDX--;
      this.RULE_OCCURRENCE_STACK_IDX--;
      if (this.RULE_STACK_IDX >= 0) {
        this.currRuleShortName = this.RULE_STACK[this.RULE_STACK_IDX];
      }
      this.cstFinallyStateUpdate();
    }
    subruleInternal(ruleToCall, idx, options) {
      let ruleResult;
      try {
        const args = options !== void 0 ? options.ARGS : void 0;
        this.subruleIdx = idx;
        ruleResult = ruleToCall.coreRule.apply(this, args);
        this.cstPostNonTerminal(ruleResult, options !== void 0 && options.LABEL !== void 0 ? options.LABEL : ruleToCall.ruleName);
        return ruleResult;
      } catch (e) {
        throw this.subruleInternalError(e, options, ruleToCall.ruleName);
      }
    }
    subruleInternalError(e, options, ruleName) {
      if (isRecognitionException(e) && e.partialCstResult !== void 0) {
        this.cstPostNonTerminal(e.partialCstResult, options !== void 0 && options.LABEL !== void 0 ? options.LABEL : ruleName);
        delete e.partialCstResult;
      }
      throw e;
    }
    consumeInternal(tokType, idx, options) {
      let consumedToken;
      try {
        const nextToken = this.LA_FAST(1);
        if (this.tokenMatcher(nextToken, tokType) === true) {
          this.consumeToken();
          consumedToken = nextToken;
        } else {
          this.consumeInternalError(tokType, nextToken, options);
        }
      } catch (eFromConsumption) {
        consumedToken = this.consumeInternalRecovery(tokType, idx, eFromConsumption);
      }
      this.cstPostTerminal(options !== void 0 && options.LABEL !== void 0 ? options.LABEL : tokType.name, consumedToken);
      return consumedToken;
    }
    consumeInternalError(tokType, nextToken, options) {
      let msg;
      const previousToken = this.LA(0);
      if (options !== void 0 && options.ERR_MSG) {
        msg = options.ERR_MSG;
      } else {
        msg = this.errorMessageProvider.buildMismatchTokenMessage({
          expected: tokType,
          actual: nextToken,
          previous: previousToken,
          ruleName: this.getCurrRuleFullName()
        });
      }
      throw this.SAVE_ERROR(new MismatchedTokenException(msg, nextToken, previousToken));
    }
    consumeInternalRecovery(tokType, idx, eFromConsumption) {
      if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
      eFromConsumption.name === "MismatchedTokenException" && !this.isBackTracking()) {
        const follows = this.getFollowsForInRuleRecovery(tokType, idx);
        try {
          return this.tryInRuleRecovery(tokType, follows);
        } catch (eFromInRuleRecovery) {
          if (eFromInRuleRecovery.name === IN_RULE_RECOVERY_EXCEPTION) {
            throw eFromConsumption;
          } else {
            throw eFromInRuleRecovery;
          }
        }
      } else {
        throw eFromConsumption;
      }
    }
    saveRecogState() {
      const savedErrors = this.errors;
      const savedRuleStack = this.RULE_STACK.slice(0, this.RULE_STACK_IDX + 1);
      return {
        errors: savedErrors,
        lexerState: this.exportLexerState(),
        RULE_STACK: savedRuleStack,
        CST_STACK: this.CST_STACK
      };
    }
    reloadRecogState(newState) {
      this.errors = newState.errors;
      this.importLexerState(newState.lexerState);
      const saved = newState.RULE_STACK;
      for (let i = 0; i < saved.length; i++) {
        this.RULE_STACK[i] = saved[i];
      }
      this.RULE_STACK_IDX = saved.length - 1;
      if (this.RULE_STACK_IDX >= 0) {
        this.currRuleShortName = this.RULE_STACK[this.RULE_STACK_IDX];
      }
    }
    ruleInvocationStateUpdate(shortName, fullName, idxInCallingRule) {
      this.RULE_OCCURRENCE_STACK[++this.RULE_OCCURRENCE_STACK_IDX] = idxInCallingRule;
      this.RULE_STACK[++this.RULE_STACK_IDX] = shortName;
      this.currRuleShortName = shortName;
      this.cstInvocationStateUpdate(fullName);
    }
    isBackTracking() {
      return this.isBackTrackingStack.length !== 0;
    }
    getCurrRuleFullName() {
      const shortName = this.currRuleShortName;
      return this.shortRuleNameToFull[shortName];
    }
    shortRuleNameToFullName(shortName) {
      return this.shortRuleNameToFull[shortName];
    }
    isAtEndOfInput() {
      return this.tokenMatcher(this.LA(1), EOF);
    }
    reset() {
      this.resetLexerState();
      this.subruleIdx = 0;
      this.currRuleShortName = 0;
      this.isBackTrackingStack = [];
      this.errors = [];
      this.RULE_STACK_IDX = -1;
      this.RULE_OCCURRENCE_STACK_IDX = -1;
      this.CST_STACK = [];
    }
    /**
     * Hook called before the root-level parsing rule is invoked.
     * This is only called when a rule is invoked directly by the consumer
     * (e.g., `parser.json()`), not when invoked as a sub-rule via SUBRULE.
     *
     * Override this method to perform actions before parsing begins.
     * The default implementation is a no-op.
     *
     * @param ruleName - The name of the root rule being invoked.
     */
    onBeforeParse(ruleName) {
      for (let i = 0; i < this.maxLookahead + 1; i++) {
        this.tokVector.push(END_OF_FILE);
      }
    }
    /**
     * Hook called after the root-level parsing rule has completed (or thrown).
     * This is only called when a rule is invoked directly by the consumer
     * (e.g., `parser.json()`), not when invoked as a sub-rule via SUBRULE.
     *
     * This hook is called in a `finally` block, so it executes regardless of
     * whether parsing succeeded or threw an error.
     *
     * Override this method to perform actions after parsing completes.
     * The default implementation is a no-op.
     *
     * @param ruleName - The name of the root rule that was invoked.
     */
    onAfterParse(ruleName) {
      if (this.isAtEndOfInput() === false) {
        const firstRedundantTok = this.LA(1);
        const errMsg = this.errorMessageProvider.buildNotAllInputParsedMessage({
          firstRedundant: firstRedundantTok,
          ruleName: this.getCurrRuleFullName()
        });
        this.SAVE_ERROR(new NotAllInputParsedException(errMsg, firstRedundantTok));
      }
      while (this.tokVector.at(-1) === END_OF_FILE) {
        this.tokVector.pop();
      }
    }
  };

  // node_modules/chevrotain/lib/src/parse/parser/traits/error_handler.js
  var ErrorHandler = class {
    initErrorHandler(config) {
      this._errors = [];
      this.errorMessageProvider = Object.hasOwn(config, "errorMessageProvider") ? config.errorMessageProvider : DEFAULT_PARSER_CONFIG.errorMessageProvider;
    }
    SAVE_ERROR(error) {
      if (isRecognitionException(error)) {
        error.context = {
          ruleStack: this.getHumanReadableRuleStack(),
          ruleOccurrenceStack: this.RULE_OCCURRENCE_STACK.slice(0, this.RULE_OCCURRENCE_STACK_IDX + 1)
        };
        this._errors.push(error);
        return error;
      } else {
        throw Error("Trying to save an Error which is not a RecognitionException");
      }
    }
    get errors() {
      return [...this._errors];
    }
    set errors(newErrors) {
      this._errors = newErrors;
    }
    // TODO: consider caching the error message computed information
    raiseEarlyExitException(occurrence, prodType, userDefinedErrMsg) {
      const ruleName = this.getCurrRuleFullName();
      const ruleGrammar = this.getGAstProductions()[ruleName];
      const lookAheadPathsPerAlternative = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, this.maxLookahead);
      const insideProdPaths = lookAheadPathsPerAlternative[0];
      const actualTokens = [];
      for (let i = 1; i <= this.maxLookahead; i++) {
        actualTokens.push(this.LA(i));
      }
      const msg = this.errorMessageProvider.buildEarlyExitMessage({
        expectedIterationPaths: insideProdPaths,
        actual: actualTokens,
        previous: this.LA(0),
        customUserDescription: userDefinedErrMsg,
        ruleName
      });
      throw this.SAVE_ERROR(new EarlyExitException(msg, this.LA(1), this.LA(0)));
    }
    // TODO: consider caching the error message computed information
    raiseNoAltException(occurrence, errMsgTypes) {
      const ruleName = this.getCurrRuleFullName();
      const ruleGrammar = this.getGAstProductions()[ruleName];
      const lookAheadPathsPerAlternative = getLookaheadPathsForOr(occurrence, ruleGrammar, this.maxLookahead);
      const actualTokens = [];
      for (let i = 1; i <= this.maxLookahead; i++) {
        actualTokens.push(this.LA(i));
      }
      const previousToken = this.LA(0);
      const errMsg = this.errorMessageProvider.buildNoViableAltMessage({
        expectedPathsPerAlt: lookAheadPathsPerAlternative,
        actual: actualTokens,
        previous: previousToken,
        customUserDescription: errMsgTypes,
        ruleName: this.getCurrRuleFullName()
      });
      throw this.SAVE_ERROR(new NoViableAltException(errMsg, this.LA(1), previousToken));
    }
  };

  // node_modules/chevrotain/lib/src/parse/parser/traits/gast_recorder.js
  var RECORDING_NULL_OBJECT = {
    description: "This Object indicates the Parser is during Recording Phase"
  };
  Object.freeze(RECORDING_NULL_OBJECT);
  var HANDLE_SEPARATOR = true;
  var MAX_METHOD_IDX = Math.pow(2, BITS_FOR_OCCURRENCE_IDX) - 1;
  var RFT = createToken({ name: "RECORDING_PHASE_TOKEN", pattern: Lexer.NA });
  augmentTokenTypes([RFT]);
  var RECORDING_PHASE_TOKEN = createTokenInstance(
    RFT,
    "This IToken indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
    // Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
    // cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
    -1,
    -1,
    -1,
    -1,
    -1,
    -1
  );
  Object.freeze(RECORDING_PHASE_TOKEN);
  var RECORDING_PHASE_CSTNODE = {
    name: "This CSTNode indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
    children: {}
  };
  var GastRecorder = class {
    initGastRecorder(config) {
      this.recordingProdStack = [];
      this.RECORDING_PHASE = false;
    }
    enableRecording() {
      this.RECORDING_PHASE = true;
      this.TRACE_INIT("Enable Recording", () => {
        for (let i = 0; i < 10; i++) {
          const idx = i > 0 ? i : "";
          this[`CONSUME${idx}`] = function(arg1, arg2) {
            return this.consumeInternalRecord(arg1, i, arg2);
          };
          this[`SUBRULE${idx}`] = function(arg1, arg2) {
            return this.subruleInternalRecord(arg1, i, arg2);
          };
          this[`OPTION${idx}`] = function(arg1) {
            return this.optionInternalRecord(arg1, i);
          };
          this[`OR${idx}`] = function(arg1) {
            return this.orInternalRecord(arg1, i);
          };
          this[`MANY${idx}`] = function(arg1) {
            this.manyInternalRecord(i, arg1);
          };
          this[`MANY_SEP${idx}`] = function(arg1) {
            this.manySepFirstInternalRecord(i, arg1);
          };
          this[`AT_LEAST_ONE${idx}`] = function(arg1) {
            this.atLeastOneInternalRecord(i, arg1);
          };
          this[`AT_LEAST_ONE_SEP${idx}`] = function(arg1) {
            this.atLeastOneSepFirstInternalRecord(i, arg1);
          };
        }
        this[`consume`] = function(idx, arg1, arg2) {
          return this.consumeInternalRecord(arg1, idx, arg2);
        };
        this[`subrule`] = function(idx, arg1, arg2) {
          return this.subruleInternalRecord(arg1, idx, arg2);
        };
        this[`option`] = function(idx, arg1) {
          return this.optionInternalRecord(arg1, idx);
        };
        this[`or`] = function(idx, arg1) {
          return this.orInternalRecord(arg1, idx);
        };
        this[`many`] = function(idx, arg1) {
          this.manyInternalRecord(idx, arg1);
        };
        this[`atLeastOne`] = function(idx, arg1) {
          this.atLeastOneInternalRecord(idx, arg1);
        };
        this.ACTION = this.ACTION_RECORD;
        this.BACKTRACK = this.BACKTRACK_RECORD;
        this.LA = this.LA_RECORD;
      });
    }
    disableRecording() {
      this.RECORDING_PHASE = false;
      this.TRACE_INIT("Deleting Recording methods", () => {
        const that = this;
        for (let i = 0; i < 10; i++) {
          const idx = i > 0 ? i : "";
          delete that[`CONSUME${idx}`];
          delete that[`SUBRULE${idx}`];
          delete that[`OPTION${idx}`];
          delete that[`OR${idx}`];
          delete that[`MANY${idx}`];
          delete that[`MANY_SEP${idx}`];
          delete that[`AT_LEAST_ONE${idx}`];
          delete that[`AT_LEAST_ONE_SEP${idx}`];
        }
        delete that[`consume`];
        delete that[`subrule`];
        delete that[`option`];
        delete that[`or`];
        delete that[`many`];
        delete that[`atLeastOne`];
        delete that.ACTION;
        delete that.BACKTRACK;
        delete that.LA;
      });
    }
    //   Parser methods are called inside an ACTION?
    //   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
    // @ts-expect-error -- noop place holder
    ACTION_RECORD(impl) {
    }
    // Executing backtracking logic will break our recording logic assumptions
    BACKTRACK_RECORD(grammarRule, args) {
      return () => true;
    }
    // LA is part of the official API and may be used for custom lookahead logic
    // by end users who may forget to wrap it in ACTION or inside a GATE
    LA_RECORD(howMuch) {
      return END_OF_FILE;
    }
    topLevelRuleRecord(name, def) {
      try {
        const newTopLevelRule = new Rule({ definition: [], name });
        newTopLevelRule.name = name;
        this.recordingProdStack.push(newTopLevelRule);
        def.call(this);
        this.recordingProdStack.pop();
        return newTopLevelRule;
      } catch (originalError) {
        if (originalError.KNOWN_RECORDER_ERROR !== true) {
          try {
            originalError.message = originalError.message + '\n	 This error was thrown during the "grammar recording phase" For more info see:\n	https://chevrotain.io/docs/guide/internals.html#grammar-recording';
          } catch (mutabilityError) {
            throw originalError;
          }
        }
        throw originalError;
      }
    }
    // Implementation of parsing DSL
    optionInternalRecord(actionORMethodDef, occurrence) {
      return recordProd.call(this, Option, actionORMethodDef, occurrence);
    }
    atLeastOneInternalRecord(occurrence, actionORMethodDef) {
      recordProd.call(this, RepetitionMandatory, actionORMethodDef, occurrence);
    }
    atLeastOneSepFirstInternalRecord(occurrence, options) {
      recordProd.call(this, RepetitionMandatoryWithSeparator, options, occurrence, HANDLE_SEPARATOR);
    }
    manyInternalRecord(occurrence, actionORMethodDef) {
      recordProd.call(this, Repetition, actionORMethodDef, occurrence);
    }
    manySepFirstInternalRecord(occurrence, options) {
      recordProd.call(this, RepetitionWithSeparator, options, occurrence, HANDLE_SEPARATOR);
    }
    orInternalRecord(altsOrOpts, occurrence) {
      return recordOrProd.call(this, altsOrOpts, occurrence);
    }
    subruleInternalRecord(ruleToCall, occurrence, options) {
      assertMethodIdxIsValid(occurrence);
      if (!ruleToCall || !Object.hasOwn(ruleToCall, "ruleName")) {
        const error = new Error(`<SUBRULE${getIdxSuffix(occurrence)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(ruleToCall)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
        error.KNOWN_RECORDER_ERROR = true;
        throw error;
      }
      const prevProd = this.recordingProdStack.at(-1);
      const ruleName = ruleToCall.ruleName;
      const newNoneTerminal = new NonTerminal({
        idx: occurrence,
        nonTerminalName: ruleName,
        label: options === null || options === void 0 ? void 0 : options.LABEL,
        // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
        referencedRule: void 0
      });
      prevProd.definition.push(newNoneTerminal);
      return this.outputCst ? RECORDING_PHASE_CSTNODE : RECORDING_NULL_OBJECT;
    }
    consumeInternalRecord(tokType, occurrence, options) {
      assertMethodIdxIsValid(occurrence);
      if (!hasShortKeyProperty(tokType)) {
        const error = new Error(`<CONSUME${getIdxSuffix(occurrence)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(tokType)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
        error.KNOWN_RECORDER_ERROR = true;
        throw error;
      }
      const prevProd = this.recordingProdStack.at(-1);
      const newNoneTerminal = new Terminal({
        idx: occurrence,
        terminalType: tokType,
        label: options === null || options === void 0 ? void 0 : options.LABEL
      });
      prevProd.definition.push(newNoneTerminal);
      return RECORDING_PHASE_TOKEN;
    }
  };
  function recordProd(prodConstructor, mainProdArg, occurrence, handleSep = false) {
    assertMethodIdxIsValid(occurrence);
    const prevProd = this.recordingProdStack.at(-1);
    const grammarAction = typeof mainProdArg === "function" ? mainProdArg : mainProdArg.DEF;
    const newProd = new prodConstructor({ definition: [], idx: occurrence });
    if (handleSep) {
      newProd.separator = mainProdArg.SEP;
    }
    if (Object.hasOwn(mainProdArg, "MAX_LOOKAHEAD")) {
      newProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
    }
    this.recordingProdStack.push(newProd);
    grammarAction.call(this);
    prevProd.definition.push(newProd);
    this.recordingProdStack.pop();
    return RECORDING_NULL_OBJECT;
  }
  function recordOrProd(mainProdArg, occurrence) {
    assertMethodIdxIsValid(occurrence);
    const prevProd = this.recordingProdStack.at(-1);
    const hasOptions = Array.isArray(mainProdArg) === false;
    const alts = hasOptions === false ? mainProdArg : mainProdArg.DEF;
    const newOrProd = new Alternation({
      definition: [],
      idx: occurrence,
      ignoreAmbiguities: hasOptions && mainProdArg.IGNORE_AMBIGUITIES === true
    });
    if (Object.hasOwn(mainProdArg, "MAX_LOOKAHEAD")) {
      newOrProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
    }
    const hasPredicates = alts.some((currAlt) => typeof currAlt.GATE === "function");
    newOrProd.hasPredicates = hasPredicates;
    prevProd.definition.push(newOrProd);
    alts.forEach((currAlt) => {
      const currAltFlat = new Alternative({ definition: [] });
      newOrProd.definition.push(currAltFlat);
      if (Object.hasOwn(currAlt, "IGNORE_AMBIGUITIES")) {
        currAltFlat.ignoreAmbiguities = currAlt.IGNORE_AMBIGUITIES;
      } else if (Object.hasOwn(currAlt, "GATE")) {
        currAltFlat.ignoreAmbiguities = true;
      }
      this.recordingProdStack.push(currAltFlat);
      currAlt.ALT.call(this);
      this.recordingProdStack.pop();
    });
    return RECORDING_NULL_OBJECT;
  }
  function getIdxSuffix(idx) {
    return idx === 0 ? "" : `${idx}`;
  }
  function assertMethodIdxIsValid(idx) {
    if (idx < 0 || idx > MAX_METHOD_IDX) {
      const error = new Error(
        // The stack trace will contain all the needed details
        `Invalid DSL Method idx value: <${idx}>
	Idx value must be a none negative value smaller than ${MAX_METHOD_IDX + 1}`
      );
      error.KNOWN_RECORDER_ERROR = true;
      throw error;
    }
  }

  // node_modules/chevrotain/lib/src/parse/parser/traits/perf_tracer.js
  var PerformanceTracer = class {
    initPerformanceTracer(config) {
      if (Object.hasOwn(config, "traceInitPerf")) {
        const userTraceInitPerf = config.traceInitPerf;
        const traceIsNumber = typeof userTraceInitPerf === "number";
        this.traceInitMaxIdent = traceIsNumber ? userTraceInitPerf : Infinity;
        this.traceInitPerf = traceIsNumber ? userTraceInitPerf > 0 : userTraceInitPerf;
      } else {
        this.traceInitMaxIdent = 0;
        this.traceInitPerf = DEFAULT_PARSER_CONFIG.traceInitPerf;
      }
      this.traceInitIndent = -1;
    }
    TRACE_INIT(phaseDesc, phaseImpl) {
      if (this.traceInitPerf === true) {
        this.traceInitIndent++;
        const indent = new Array(this.traceInitIndent + 1).join("	");
        if (this.traceInitIndent < this.traceInitMaxIdent) {
          console.log(`${indent}--> <${phaseDesc}>`);
        }
        const { time, value } = timer(phaseImpl);
        const traceMethod = time > 10 ? console.warn : console.log;
        if (this.traceInitIndent < this.traceInitMaxIdent) {
          traceMethod(`${indent}<-- <${phaseDesc}> time: ${time}ms`);
        }
        this.traceInitIndent--;
        return value;
      } else {
        return phaseImpl();
      }
    }
  };

  // node_modules/chevrotain/lib/src/parse/parser/utils/apply_mixins.js
  function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach((baseCtor) => {
      const baseProto = baseCtor.prototype;
      Object.getOwnPropertyNames(baseProto).forEach((propName) => {
        if (propName === "constructor") {
          return;
        }
        const basePropDescriptor = Object.getOwnPropertyDescriptor(baseProto, propName);
        if (basePropDescriptor && (basePropDescriptor.get || basePropDescriptor.set)) {
          Object.defineProperty(derivedCtor.prototype, propName, basePropDescriptor);
        } else {
          derivedCtor.prototype[propName] = baseCtor.prototype[propName];
        }
      });
    });
  }

  // node_modules/chevrotain/lib/src/parse/parser/parser.js
  var END_OF_FILE = createTokenInstance(EOF, "", NaN, NaN, NaN, NaN, NaN, NaN);
  Object.freeze(END_OF_FILE);
  var DEFAULT_PARSER_CONFIG = Object.freeze({
    recoveryEnabled: false,
    maxLookahead: 3,
    dynamicTokensEnabled: false,
    outputCst: true,
    errorMessageProvider: defaultParserErrorProvider,
    nodeLocationTracking: "none",
    traceInitPerf: false,
    skipValidations: false
  });
  var DEFAULT_RULE_CONFIG = Object.freeze({
    recoveryValueFunc: () => void 0,
    resyncEnabled: true
  });
  var ParserDefinitionErrorType;
  (function(ParserDefinitionErrorType2) {
    ParserDefinitionErrorType2[ParserDefinitionErrorType2["INVALID_RULE_NAME"] = 0] = "INVALID_RULE_NAME";
    ParserDefinitionErrorType2[ParserDefinitionErrorType2["DUPLICATE_RULE_NAME"] = 1] = "DUPLICATE_RULE_NAME";
    ParserDefinitionErrorType2[ParserDefinitionErrorType2["INVALID_RULE_OVERRIDE"] = 2] = "INVALID_RULE_OVERRIDE";
    ParserDefinitionErrorType2[ParserDefinitionErrorType2["DUPLICATE_PRODUCTIONS"] = 3] = "DUPLICATE_PRODUCTIONS";
    ParserDefinitionErrorType2[ParserDefinitionErrorType2["UNRESOLVED_SUBRULE_REF"] = 4] = "UNRESOLVED_SUBRULE_REF";
    ParserDefinitionErrorType2[ParserDefinitionErrorType2["LEFT_RECURSION"] = 5] = "LEFT_RECURSION";
    ParserDefinitionErrorType2[ParserDefinitionErrorType2["NONE_LAST_EMPTY_ALT"] = 6] = "NONE_LAST_EMPTY_ALT";
    ParserDefinitionErrorType2[ParserDefinitionErrorType2["AMBIGUOUS_ALTS"] = 7] = "AMBIGUOUS_ALTS";
    ParserDefinitionErrorType2[ParserDefinitionErrorType2["CONFLICT_TOKENS_RULES_NAMESPACE"] = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE";
    ParserDefinitionErrorType2[ParserDefinitionErrorType2["INVALID_TOKEN_NAME"] = 9] = "INVALID_TOKEN_NAME";
    ParserDefinitionErrorType2[ParserDefinitionErrorType2["NO_NON_EMPTY_LOOKAHEAD"] = 10] = "NO_NON_EMPTY_LOOKAHEAD";
    ParserDefinitionErrorType2[ParserDefinitionErrorType2["AMBIGUOUS_PREFIX_ALTS"] = 11] = "AMBIGUOUS_PREFIX_ALTS";
    ParserDefinitionErrorType2[ParserDefinitionErrorType2["TOO_MANY_ALTS"] = 12] = "TOO_MANY_ALTS";
    ParserDefinitionErrorType2[ParserDefinitionErrorType2["CUSTOM_LOOKAHEAD_VALIDATION"] = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
  })(ParserDefinitionErrorType || (ParserDefinitionErrorType = {}));
  var Parser = class _Parser {
    /**
     *  @deprecated use the **instance** method with the same name instead
     */
    static performSelfAnalysis(parserInstance) {
      throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
    }
    performSelfAnalysis() {
      this.TRACE_INIT("performSelfAnalysis", () => {
        let defErrorsMsgs;
        this.selfAnalysisDone = true;
        const className = this.className;
        this.TRACE_INIT("toFastProps", () => {
          toFastProperties(this);
        });
        this.TRACE_INIT("Grammar Recording", () => {
          try {
            this.enableRecording();
            this.definedRulesNames.forEach((currRuleName) => {
              const wrappedRule = this[currRuleName];
              const originalGrammarAction = wrappedRule["originalGrammarAction"];
              let recordedRuleGast;
              this.TRACE_INIT(`${currRuleName} Rule`, () => {
                recordedRuleGast = this.topLevelRuleRecord(currRuleName, originalGrammarAction);
              });
              this.gastProductionsCache[currRuleName] = recordedRuleGast;
            });
          } finally {
            this.disableRecording();
          }
        });
        let resolverErrors = [];
        this.TRACE_INIT("Grammar Resolving", () => {
          resolverErrors = resolveGrammar2({
            rules: Object.values(this.gastProductionsCache)
          });
          this.definitionErrors = this.definitionErrors.concat(resolverErrors);
        });
        this.TRACE_INIT("Grammar Validations", () => {
          if (resolverErrors.length === 0 && this.skipValidations === false) {
            const validationErrors = validateGrammar2({
              rules: Object.values(this.gastProductionsCache),
              tokenTypes: Object.values(this.tokensMap),
              errMsgProvider: defaultGrammarValidatorErrorProvider,
              grammarName: className
            });
            const lookaheadValidationErrors = validateLookahead({
              lookaheadStrategy: this.lookaheadStrategy,
              rules: Object.values(this.gastProductionsCache),
              tokenTypes: Object.values(this.tokensMap),
              grammarName: className
            });
            this.definitionErrors = this.definitionErrors.concat(validationErrors, lookaheadValidationErrors);
          }
        });
        if (this.definitionErrors.length === 0) {
          if (this.recoveryEnabled) {
            this.TRACE_INIT("computeAllProdsFollows", () => {
              const allFollows = computeAllProdsFollows(Object.values(this.gastProductionsCache));
              this.resyncFollows = allFollows;
            });
          }
          this.TRACE_INIT("ComputeLookaheadFunctions", () => {
            var _a, _b;
            (_b = (_a = this.lookaheadStrategy).initialize) === null || _b === void 0 ? void 0 : _b.call(_a, {
              rules: Object.values(this.gastProductionsCache)
            });
            this.preComputeLookaheadFunctions(Object.values(this.gastProductionsCache));
          });
        }
        if (!_Parser.DEFER_DEFINITION_ERRORS_HANDLING && this.definitionErrors.length !== 0) {
          defErrorsMsgs = this.definitionErrors.map((defError) => defError.message);
          throw new Error(`Parser Definition Errors detected:
 ${defErrorsMsgs.join("\n-------------------------------\n")}`);
        }
      });
    }
    constructor(tokenVocabulary, config) {
      this.definitionErrors = [];
      this.selfAnalysisDone = false;
      const that = this;
      that.initErrorHandler(config);
      that.initLexerAdapter();
      that.initLooksAhead(config);
      that.initRecognizerEngine(tokenVocabulary, config);
      that.initRecoverable(config);
      that.initTreeBuilder(config);
      that.initGastRecorder(config);
      that.initPerformanceTracer(config);
      if (Object.hasOwn(config, "ignoredIssues")) {
        throw new Error("The <ignoredIssues> IParserConfig property has been deprecated.\n	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.\n	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES\n	For further details.");
      }
      this.skipValidations = Object.hasOwn(config, "skipValidations") ? config.skipValidations : DEFAULT_PARSER_CONFIG.skipValidations;
    }
  };
  Parser.DEFER_DEFINITION_ERRORS_HANDLING = false;
  applyMixins(Parser, [
    Recoverable,
    LooksAhead,
    TreeBuilder,
    LexerAdapter,
    RecognizerEngine,
    RecognizerApi,
    ErrorHandler,
    GastRecorder,
    PerformanceTracer
  ]);
  var CstParser = class extends Parser {
    constructor(tokenVocabulary, config = DEFAULT_PARSER_CONFIG) {
      const configClone = Object.assign({}, config);
      configClone.outputCst = true;
      super(tokenVocabulary, configClone);
    }
  };

  // node_modules/js-toml/dist/index.js
  var import_xregexp = __toESM(require_lib(), 1);
  var Oe = class {
    constructor() {
      __publicField(this, "debug", false);
    }
    enableDebug() {
      this.debug = true;
    }
    isDebug() {
      return this.debug;
    }
  };
  var P = new Oe();
  var xt = /]/;
  var C = createToken({ name: "ArrayClose", pattern: xt, label: "]", pop_mode: true });
  var It = /\[/;
  var O = createToken({ name: "ArrayOpen", pattern: It, label: "[", push_mode: "Array" });
  var Lt = /,/;
  var $ = createToken({ name: "Comma", pattern: Lt, label: "," });
  var X = createToken({ name: "ArrayTableClose", pattern: /]]/, label: "]]", push_mode: "Value" });
  var Q = createToken({ name: "ArrayTableOpen", pattern: /\[\[/, label: "[[" });
  var te = /* @__PURE__ */ new Map();
  var wt = (r, e, t) => {
    let n = te.get(e.tokenType.name);
    if (n) return n(r, e, t);
  };
  var a = (r, e) => {
    te.set(r.name, e);
  };
  var g = (r, e) => {
    let t = createToken(__spreadValues({ name: r, pattern: Lexer.NA }, e && { categories: e }));
    return a(t, wt), t;
  };
  var b = g("Boolean");
  var w = /[ \t]/;
  var re = /[\x80-\uD7FF]|[\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/;
  var p = /\r\n|\n/;
  var Y = /"/;
  var Ae = /\\/;
  var m = /[0-9]/;
  var we = import_xregexp.default.build("{{digit}}|[A-Fa-f]", { digit: m });
  var Dt = import_xregexp.default.build('["\\\\befnrt]|x{{hexDigit}}{2}|u{{hexDigit}}{4}|U{{hexDigit}}{8}', { hexDigit: we });
  var ne = import_xregexp.default.build("{{escape}}{{escapeSeqChar}}", { escape: Ae, escapeSeqChar: Dt });
  var ie = import_xregexp.default.build("{{whiteSpaceChar}}|!|[#-\\x5B]|[\\x5D-~]|{{nonAscii}}", { whiteSpaceChar: w, nonAscii: re });
  var oe = import_xregexp.default.build("	|[ -&]|[\\x28-~]|{{nonAscii}}", { nonAscii: re });
  var q = /'/;
  var D = /_/;
  var ae = /-/;
  var se = /\+/;
  var Nt = /[1-9]/;
  var Ut = import_xregexp.default.build("{{digit1_9}}({{digit}}|{{underscore}}{{digit}})+|{{digit}}", { digit1_9: Nt, digit: m, underscore: D });
  var le = import_xregexp.default.build("({{minus}}|{{plus}})?{{unsignedDecimalInteger}}", { minus: ae, plus: se, unsignedDecimalInteger: Ut });
  var l = class extends Error {
    constructor(e) {
      super(e), this.name = "SyntaxParseError";
    }
  };
  var pe = class extends l {
    constructor(e) {
      super(`Syntax error
` + e.map((t) => t.message).join(`
`));
      __publicField(this, "errors");
      this.errors = e;
    }
  };
  var me = class extends l {
    constructor(e) {
      super(`Syntax error
` + e.map((t) => t.message).join(`
`));
      __publicField(this, "errors");
      this.errors = e;
    }
  };
  var ce = class extends l {
    constructor(e) {
      super(e);
    }
  };
  var R = class extends l {
    constructor(e) {
      super(`Maximum nesting depth of ${e} exceeded`);
    }
  };
  var Ze = import_xregexp.default.build("{{digit}}{4}", { digit: m });
  var Je = import_xregexp.default.build("{{digit}}{2}", { digit: m });
  var je = import_xregexp.default.build("{{digit}}{2}", { digit: m });
  var De = /[Tt ]/;
  var ue = import_xregexp.default.build("{{digit}}{2}", { digit: m });
  var fe = import_xregexp.default.build("{{digit}}{2}", { digit: m });
  var et = import_xregexp.default.build("{{digit}}{2}", { digit: m });
  var Vt = import_xregexp.default.build("\\.{{digit}}+", { digit: m });
  var Pt = import_xregexp.default.build("[+-]{{timeHour}}:{{timeMinute}}", { timeHour: ue, timeMinute: fe });
  var Rt = import_xregexp.default.build("[Zz]|{{timeNumOffset}}", { timeNumOffset: Pt });
  var Ne = import_xregexp.default.build("{{timeHour}}:{{timeMinute}}(?::{{timeSecond}}{{timeSecFrac}}?)?", { timeHour: ue, timeMinute: fe, timeSecond: et, timeSecFrac: Vt });
  var de = import_xregexp.default.build("{{dateFullYear}}-{{dateMonth}}-{{dateMDay}}", { dateFullYear: Ze, dateMonth: Je, dateMDay: je });
  var Bt = import_xregexp.default.build("{{partialTime}}{{timeOffset}}", { partialTime: Ne, timeOffset: Rt });
  var _t = import_xregexp.default.build("{{fullDate}}{{timeDelim}}{{fullTime}}", { fullDate: de, timeDelim: De, fullTime: Bt });
  var Ft = import_xregexp.default.build("{{fullDate}}{{timeDelim}}{{partialTime}}", { fullDate: de, timeDelim: De, partialTime: Ne });
  var Kt = de;
  var tt = Ne;
  var zt = import_xregexp.default.build("{{offsetDateTime}}|{{localDateTime}}|{{localDate}}|{{localTime}}", { offsetDateTime: _t, localDateTime: Ft, localDate: Kt, localTime: tt });
  var x = createToken({ name: "DateTime", pattern: zt });
  var vt = import_xregexp.default.build("({{dateFullYear}})-({{dateMonth}})-({{dateMDay}})", { dateFullYear: Ze, dateMonth: Je, dateMDay: je });
  var $t = import_xregexp.default.build("({{timeHour}}):({{timeMinute}}):({{timeSecond}})", { timeHour: ue, timeMinute: fe, timeSecond: et });
  var Xt = (r) => {
    let e = import_xregexp.default.exec(r, vt);
    if (e) {
      let t = Number(e[1]), n = Number(e[2]), i = Number(e[3]), o = /* @__PURE__ */ new Date(0);
      return o.setUTCFullYear(t, n - 1, i), o.getUTCFullYear() === t && o.getUTCMonth() + 1 === n && o.getUTCDate() === i;
    }
    return true;
  };
  var Qt = (r) => {
    let e = import_xregexp.default.exec(r, $t);
    if (e) {
      let t = Number(e[1]), n = Number(e[2]), i = Number(e[3]), o = new Date(0, 0, 0, t, n, i);
      return o.getHours() === t && o.getMinutes() === n && o.getSeconds() === i;
    }
    return true;
  };
  var Yt = /[+-](\d{2}):(\d{2})$/;
  var qt = (r) => {
    let e = Yt.exec(r);
    return e ? Number(e[1]) <= 23 && Number(e[2]) <= 59 : true;
  };
  var Ht = (r) => Xt(r) && Qt(r) && qt(r);
  var Gt = import_xregexp.default.build("^((?:{{fullDate}}{{timeDelim}})?{{timeHour}}:{{timeMinute}})(?=$|[Zz+-])", { fullDate: de, timeDelim: De, timeHour: ue, timeMinute: fe });
  a(x, (r) => {
    var i;
    let e = r.indexOf(":"), t = e !== -1 && r.charCodeAt(e + 3) !== 58 ? r.replace(Gt, "$1:00") : r;
    if (!Ht(t)) throw new l(`Invalid date time: ${r}`);
    return ((i = t.match(tt)) == null ? void 0 : i.index) === 0 ? t : new Date(t.replace(/[t ]/, "T").replace(/z$/, "Z"));
  });
  var N = createToken({ name: "DotSeparator", pattern: /\./, label: "." });
  var B = createToken({ name: "ExpressionNewLine", pattern: p });
  var jt = le;
  var rt = import_xregexp.default.build("{{digit}}({{digit}}|{{underscore}}{{digit}})*", { digit: m, underscore: D });
  var er = import_xregexp.default.build("({{minus}}|{{plus}})?{{zeroPrefixableInt}}", { minus: ae, plus: se, zeroPrefixableInt: rt });
  var tr = import_xregexp.default.build("[Ee]{{floatExpPart}}", { floatExpPart: er });
  var rr = /\./;
  var nr = import_xregexp.default.build("{{decimalPoint}}{{zeroPrefixableInt}}", { decimalPoint: rr, zeroPrefixableInt: rt });
  var ir = /inf/;
  var or = /nan/;
  var ar = import_xregexp.default.build("({{minus}}|{{plus}})?({{inf}}|{{nan}})", { minus: ae, plus: se, inf: ir, nan: or });
  var sr = import_xregexp.default.build("{{floatIntPart}}({{exp}}|{{frac}}{{exp}}?)|{{specialFloat}}", { floatIntPart: jt, exp: tr, frac: nr, specialFloat: ar });
  var S = createToken({ name: "Float", pattern: sr });
  var lr = (r) => r === "inf" || r === "+inf" ? 1 / 0 : r === "-inf" ? -1 / 0 : r === "nan" || r === "+nan" || r === "-nan" ? NaN : null;
  a(S, (r) => {
    let e = lr(r);
    if (e !== null) return e;
    let t = r.replace(/_/g, "");
    return parseFloat(t);
  });
  var mr = /}/;
  var I = createToken({ name: "InlineTableClose", pattern: mr, label: "}", pop_mode: true });
  var ur = /{/;
  var U = createToken({ name: "InlineTableOpen", pattern: ur, label: "{", push_mode: "InlineTable" });
  var dr = /,/;
  var H = createToken({ name: "InlineTableSep", pattern: dr, label: ",", pop_mode: true, push_mode: "InlineTable" });
  var T = g("Integer");
  var M = createToken({ name: "KeyValueSeparator", pattern: /=/, label: "=", push_mode: "Value" });
  var G = createToken({ name: "Newline", pattern: p, pop_mode: true });
  var c = g("SimpleKey");
  var W = createToken({ name: "StdTableClose", pattern: /]/, label: "]", push_mode: "Value" });
  var Z = createToken({ name: "StdTableOpen", pattern: /\[/, label: "[" });
  var u = g("String");
  var Ir = import_xregexp.default.build("{{whiteSpaceChar}}+", { whiteSpaceChar: w });
  var Ue = createToken({ name: "WhiteSpace", pattern: Ir, group: Lexer.SKIPPED });
  var Er = import_xregexp.default.build("^{{whiteSpaceChar}}*{{newline}}(?:{{whiteSpaceChar}}|{{newline}})*", { whiteSpaceChar: w, newline: p });
  var Lr = (r) => {
    let e = import_xregexp.default.exec(r, Er);
    return e ? e[0].length : 0;
  };
  var he = (r) => {
    let e = "";
    for (let t = 0; t < r.length; t++) {
      let n = r[t];
      if (n === "\\") {
        t++;
        let i = Lr(r.slice(t));
        if (i > 0) {
          t += i - 1;
          continue;
        }
        switch (r[t]) {
          case "b":
            e += "\b";
            break;
          case "t":
            e += "	";
            break;
          case "n":
            e += `
`;
            break;
          case "f":
            e += "\f";
            break;
          case "r":
            e += "\r";
            break;
          case "e":
            e += "\x1B";
            break;
          case "x": {
            let o = r.slice(t + 1, t + 3);
            e += String.fromCodePoint(parseInt(o, 16)), t += 2;
            break;
          }
          case '"':
            e += '"';
            break;
          case "\\":
            e += "\\";
            break;
          case "u": {
            let o = r.slice(t + 1, t + 5), f = parseInt(o, 16);
            if (f > 55295 && f < 57344) throw new l(`Invalid Unicode code point: \\u${o}`);
            e += String.fromCodePoint(f), t += 4;
            break;
          }
          case "U": {
            let o = r.slice(t + 1, t + 9), f = parseInt(o, 16);
            if (f > 1114111) throw new l(`Invalid Unicode code point: \\U${o}`);
            e += String.fromCodePoint(f), t += 8;
            break;
          }
        }
      } else e += n;
    }
    return e;
  };
  var ge = (r) => r.substring(3, r.length - 3).replace(/^(\r\n|\n)/, "");
  var kr = import_xregexp.default.build("{{quotationMark}}{3}", { quotationMark: Y });
  var Or = import_xregexp.default.build("{{basicUnescaped}}|{{escaped}}", { basicUnescaped: ie, escaped: ne });
  var Ar = import_xregexp.default.build("{{whiteSpaceChar}}*", { whiteSpaceChar: w });
  var wr = import_xregexp.default.build("{{escape}}{{whiteSpace}}{{newline}}", { escape: Ae, whiteSpace: Ar, newline: p });
  var Dr = import_xregexp.default.build("{{multiLineBasicChar}}|{{newline}}|{{multiLineBasicEscapedNewline}}", { multiLineBasicChar: Or, newline: p, multiLineBasicEscapedNewline: wr });
  var Nr = import_xregexp.default.build("{{quotationMark}}{1,2}", { quotationMark: Y });
  var Ur = import_xregexp.default.build("{{multiLineBasicContent}}*({{multiLineBasicQuotes}}{{multiLineBasicContent}}+)*{{multiLineBasicQuotes}}?", { multiLineBasicContent: Dr, multiLineBasicQuotes: Nr });
  var Me = createToken({ name: "MultiLineBasicString", pattern: import_xregexp.default.build("{{multiLineBasicStringDelimiter}}{{newline}}?{{multiLineBasicBody}}{{multiLineBasicStringDelimiter}}", { multiLineBasicStringDelimiter: kr, newline: p, multiLineBasicBody: Ur }), label: '"""MultiLineBasicString"""', categories: [u], line_breaks: true });
  a(Me, (r) => {
    let e = ge(r);
    return he(e);
  });
  var Vr = import_xregexp.default.build("{{apostrophe}}{3}", { apostrophe: q });
  var Pr = import_xregexp.default.build("{{literalChar}}|{{newline}}", { literalChar: oe, newline: p });
  var Rr = import_xregexp.default.build("{{apostrophe}}{1,2}", { apostrophe: q });
  var Br = import_xregexp.default.build("{{multiLineLiteralContent}}*({{multiLineLiteralQuotes}}{{multiLineLiteralContent}}+)*{{multiLineLiteralQuotes}}?", { multiLineLiteralContent: Pr, multiLineLiteralQuotes: Rr });
  var Ve = createToken({ name: "MultiLineLiteralString", pattern: import_xregexp.default.build("{{multiLineLiteralStringDelimiter}}{{newline}}?{{multiLineLiteralBody}}{{multiLineLiteralStringDelimiter}}", { multiLineLiteralStringDelimiter: Vr, newline: p, multiLineLiteralBody: Br }), label: "'''MultiLineLiteralString'''", categories: [u], line_breaks: true });
  a(Ve, ge);
  var be = g("QuotedKey", [c]);
  var Fr = import_xregexp.default.build("{{basicUnescaped}}|{{escaped}}", { basicUnescaped: ie, escaped: ne });
  var Te = createToken({ name: "BasicString", pattern: import_xregexp.default.build("{{quotationMark}}{{basicChar}}*{{quotationMark}}", { quotationMark: Y, basicChar: Fr }), label: '"BasicString"', categories: [be, u] });
  a(Te, (r) => {
    let e = r.slice(1, -1);
    return he(e);
  });
  var ye = createToken({ name: "LiteralString", pattern: import_xregexp.default.build("{{apostrophe}}{{literalChar}}*{{apostrophe}}", { apostrophe: q, literalChar: oe }), label: "'LiteralString'", categories: [be, u] });
  a(ye, (r) => r.slice(1, -1));
  var $r = /0x/;
  var Xr = /0o/;
  var Qr = /0b/;
  var Yr = /[0-7]/;
  var qr = /[01]/;
  var Hr = import_xregexp.default.build("{{hexPrefix}}{{hexDigit}}({{hexDigit}}|{{underscore}}{{hexDigit}})*", { hexPrefix: $r, hexDigit: we, underscore: D });
  var Gr = import_xregexp.default.build("{{octPrefix}}{{digit0_7}}({{digit0_7}}|{{underscore}}{{digit0_7}})*", { octPrefix: Xr, digit0_7: Yr, underscore: D });
  var Wr = import_xregexp.default.build("{{binPrefix}}{{digit0_1}}({{digit0_1}}|{{underscore}}{{digit0_1}})*", { binPrefix: Qr, digit0_1: qr, underscore: D });
  var Zr = import_xregexp.default.build("{{hexInteger}}|{{octalInteger}}|{{binaryInteger}}", { hexInteger: Hr, octalInteger: Gr, binaryInteger: Wr });
  var Pe = createToken({ name: "NonDecimalInteger", pattern: Zr, categories: [T] });
  var ot = 1e3;
  var Jr = (r) => {
    switch (r.slice(0, 2)) {
      case "0x":
        return 16;
      case "0o":
        return 8;
      case "0b":
        return 2;
    }
  };
  a(Pe, (r) => {
    let e = r.replace(/_/g, ""), t = e.slice(2), n = Jr(r);
    if (t.length > ot) throw new l(`Radix-prefixed integer literal exceeds ${ot} digits (length ${t.length})`);
    let i = parseInt(t, n);
    return Number.isSafeInteger(i) ? i : BigInt(e);
  });
  var Re = createToken({ name: "DecimalInteger", pattern: le, categories: [T] });
  var at = 1e3;
  a(Re, (r) => {
    let e = r.replace(/_/g, ""), t = e.replace(/^[+-]/, "");
    if (t.length > at) throw new l(`Decimal integer literal exceeds ${at} digits (length ${t.length})`);
    let n = parseInt(e);
    return Number.isSafeInteger(n) ? n || 0 : BigInt(e);
  });
  var rn = /[a-zA-Z]/;
  var nn = import_xregexp.default.build("({{alpha}}|{{digit}}|-|_)+", { alpha: rn, digit: m });
  var Be = createToken({ name: "UnquotedKey", pattern: nn, categories: [c] });
  a(Be, (r) => r);
  var an = /#/;
  var sn = import_xregexp.default.build("	|[ -~]|{{nonAscii}}", { nonAscii: re });
  var ln = import_xregexp.default.build("{{commentStartChar}}{{nonEol}}*", { commentStartChar: an, nonEol: sn });
  var Se = createToken({ name: "Comment", pattern: ln, group: "comment" });
  var mn = /true/;
  var _e = createToken({ name: "True", pattern: mn, label: "true", categories: [b] });
  a(_e, () => true);
  var un = /false/;
  var Fe = createToken({ name: "False", pattern: un, label: "false", categories: [b] });
  a(Fe, () => false);
  var lt = createToken({ name: "IgnoredNewline", pattern: p, group: Lexer.SKIPPED });
  var Ie = createToken({ name: "InlineTableKeyValSep", pattern: /=/, label: "=", push_mode: "InlineTableValue", pop_mode: true, categories: [M] });
  var pt = new RegExp(p.source, "y");
  var mt = /[ \t]*[=.]/y;
  var Tn = (r, e, t) => {
    var o;
    pt.lastIndex = e;
    let n = pt.exec(r);
    if (!n) return null;
    let i = (o = t[t.length - 1]) == null ? void 0 : o.tokenType;
    return i === N || i === Ie || (mt.lastIndex = e + n[0].length, mt.exec(r)) ? null : n;
  };
  var Ke = createToken({ name: "InlineTableNewline", pattern: Tn, start_chars_hint: ["\r", `
`], line_breaks: true, group: Lexer.SKIPPED });
  var ct = [Ue, Te, ye, Be, N, c];
  var ze = [Ue, Me, Ve, Te, ye, _e, Fe, x, S, Pe, Re, O, U, Se];
  var j = { modes: { Key: [Se, B, M, Q, X, Z, W, ...ct], Value: [...ze, G], Array: [...ze, lt, $, C], InlineTable: [...ct, Se, Ke, Ie, I], InlineTableValue: [...ze, Ke, H, I] }, defaultMode: "Key" };
  var ut = new Lexer(j, { ensureOptimizations: true, skipValidations: !P.isDebug(), traceInitPerf: P.isDebug() });
  var ve = class extends CstParser {
    constructor() {
      super(j, { traceInitPerf: P.isDebug(), maxLookahead: 1, skipValidations: !P.isDebug() });
      __publicField(this, "toml", this.RULE("toml", () => {
        this.MANY(() => this.CONSUME(B)), this.MANY1(() => {
          this.SUBRULE1(this.expression), this.OPTION2(() => {
            this.CONSUME1(G), this.MANY3(() => this.CONSUME2(B));
          });
        });
      }));
      __publicField(this, "valueCache");
      __publicField(this, "dottedKey", this.RULE("dottedKey", () => {
        this.CONSUME(c), this.AT_LEAST_ONE(() => {
          this.CONSUME(N), this.CONSUME1(c);
        });
      }));
      __publicField(this, "key", this.RULE("key", () => {
        this.OR({ MAX_LOOKAHEAD: 2, DEF: [{ ALT: () => this.SUBRULE(this.dottedKey) }, { ALT: () => this.CONSUME(c) }] });
      }));
      __publicField(this, "inlineTableKeyValues", this.RULE("inlineTableKeyValues", () => {
        this.SUBRULE(this.keyValue);
        let e = true;
        this.MANY({ GATE: () => e, DEF: () => {
          this.CONSUME(H), this.OPTION(() => this.SUBRULE1(this.keyValue)) || (e = false);
        } });
      }));
      __publicField(this, "inlineTable", this.RULE("inlineTable", () => {
        this.CONSUME(U), this.OPTION(() => this.SUBRULE(this.inlineTableKeyValues)), this.CONSUME(I);
      }));
      __publicField(this, "array", this.RULE("array", () => {
        this.CONSUME(O), this.OPTION(() => this.SUBRULE(this.arrayValues)), this.CONSUME(C);
      }));
      __publicField(this, "value", this.RULE("value", () => {
        this.OR(this.valueCache || (this.valueCache = [{ ALT: () => this.CONSUME(u) }, { ALT: () => this.CONSUME(b) }, { ALT: () => this.SUBRULE(this.array) }, { ALT: () => this.SUBRULE(this.inlineTable) }, { ALT: () => this.CONSUME(x) }, { ALT: () => this.CONSUME(S) }, { ALT: () => this.CONSUME(T) }]));
      }));
      __publicField(this, "keyValue", this.RULE("keyValue", () => {
        this.SUBRULE(this.key), this.CONSUME(M), this.SUBRULE(this.value);
      }));
      __publicField(this, "arrayValues", this.RULE("arrayValues", () => {
        this.SUBRULE(this.value);
        let e = true;
        this.MANY({ GATE: () => e, DEF: () => {
          this.CONSUME($), this.OPTION(() => this.SUBRULE1(this.value)) || (e = false);
        } });
      }));
      __publicField(this, "stdTable", this.RULE("stdTable", () => {
        this.CONSUME(Z), this.SUBRULE(this.key), this.CONSUME(W);
      }));
      __publicField(this, "arrayTable", this.RULE("arrayTable", () => {
        this.CONSUME(Q), this.SUBRULE(this.key), this.CONSUME(X);
      }));
      __publicField(this, "table", this.RULE("table", () => {
        this.OR([{ ALT: () => this.SUBRULE(this.stdTable) }, { ALT: () => this.SUBRULE(this.arrayTable) }]);
      }));
      __publicField(this, "expression", this.RULE("expression", () => {
        this.OR([{ ALT: () => this.SUBRULE(this.keyValue) }, { ALT: () => this.SUBRULE(this.table) }]);
      }));
      this.performSelfAnalysis();
    }
  };
  var V = new ve();
  var h = (r) => r != null && typeof r == "object" && !Array.isArray(r) && (r.constructor === Object || r.constructor === void 0);
  var Ee = () => /* @__PURE__ */ Object.create(null);
  var Le = (r, e, t) => {
    r[e] = t;
  };
  var F = (r, e) => e in r;
  var y = class extends Error {
  };
  var $e = (r, e) => {
    try {
      return r();
    } catch (t) {
      throw t instanceof y ? new ce(e) : t;
    }
  };
  var Sn = V.getBaseCstVisitorConstructor();
  var Xe = Symbol("explicitlyDeclared");
  var ft = Symbol("implicitlyDeclared");
  var K = Symbol("notEditable");
  var Qe = class extends Sn {
    constructor() {
      super();
      __publicField(this, "maxDepth", Number.POSITIVE_INFINITY);
      this.validateVisitor();
    }
    toml(e) {
      var i;
      let t = Ee(), n = t;
      return (i = e.expression) == null || i.forEach((o) => n = this.visit(o, { current: n, root: t })), this.cleanInternalProperties(t), t;
    }
    expression(e, { current: t, root: n }) {
      if (e.keyValue) return this.visit(e.keyValue, t), t;
      if (e.table) return this.visit(e.table, n);
    }
    keyValue(e, t) {
      let n = this.visit(e.key), i = this.visit(e.value);
      $e(() => this.assignValue(n, i, t), `Cannot assign value to '${n.join(".")}'`);
    }
    key(e) {
      let t = e.dottedKey ? this.visit(e.dottedKey) : [this.interpret(e, c)];
      if (t.length > this.maxDepth) throw new R(this.maxDepth);
      return t;
    }
    dottedKey(e) {
      return this.interpret(e, c);
    }
    inlineTableKeyValues(e, t) {
      e.keyValue && e.keyValue.forEach((n) => this.visit(n, t));
    }
    inlineTable(e) {
      let t = Ee();
      return Le(t, K, true), e.inlineTableKeyValues && this.visit(e.inlineTableKeyValues, t), t;
    }
    value(e) {
      return e.array ? this.visit(e.array) : e.inlineTable ? this.visit(e.inlineTable) : this.interpret(e, u, S, b, x, T);
    }
    arrayValues(e, t) {
      return e.value.forEach((n) => t.push(this.visit(n))), t;
    }
    array(e) {
      let t = [];
      return Le(t, K, true), e.arrayValues ? this.visit(e.arrayValues, t) : t;
    }
    table(e, t) {
      if (e.stdTable) return this.visit(e.stdTable, t);
      if (e.arrayTable) return this.visit(e.arrayTable, t);
    }
    stdTable(e, t) {
      let n = this.visit(e.key);
      return $e(() => this.createTable(n, t), `Cannot create table '${n.join(".")}'`);
    }
    arrayTable(e, t) {
      let n = this.visit(e.key);
      return $e(() => {
        let i = this.getOrCreateArray(n, t);
        if (F(i, K)) throw new y();
        let o = Ee();
        return i.push(o), o;
      }, `Cannot create array table '${n.join(".")}'`);
    }
    cleanInternalProperties(e) {
      for (let t of Object.getOwnPropertySymbols(e)) delete e[t];
      for (let t in e) if (Array.isArray(e[t])) {
        for (let n of Object.getOwnPropertySymbols(e[t])) delete e[t][n];
        e[t].forEach((n) => this.cleanInternalProperties(n));
      } else typeof e[t] == "object" && this.cleanInternalProperties(e[t]);
    }
    interpret(e, ...t) {
      for (let n of t) if (e[n.name]) {
        let i = te.get(n.name), o = e[n.name].map((f) => i(f.image, f, n.name));
        return o.length === 1 ? o[0] : o;
      }
    }
    assignPrimitiveValue(e, t, n) {
      if (e in n) throw new y();
      return h(t) && Le(t, Xe, true), n[e] = t, n;
    }
    tryCreatingObject(e, t, n, i, o) {
      if (e in t) {
        if (!h(t[e]) || !o && F(t[e], Xe) || !i && F(t[e], ft) || F(t[e], K)) throw new y();
      } else t[e] = Ee();
      return n && Le(t[e], n, true), t[e];
    }
    assignValue(e, t, n, i = 0) {
      let o = e[i];
      return i < e.length - 1 ? (this.tryCreatingObject(o, n, ft, true, false), this.assignValue(e, t, n[o], i + 1)) : this.assignPrimitiveValue(o, t, n);
    }
    createTable(e, t, n = 0) {
      let i = e[n];
      if (n < e.length - 1) {
        if (Array.isArray(t[i])) {
          if (F(t[i], K)) throw new y();
          let o = t[i][t[i].length - 1];
          return this.createTable(e, o, n + 1);
        }
        return this.tryCreatingObject(i, t, null, true, true), this.createTable(e, t[i], n + 1);
      }
      return this.tryCreatingObject(i, t, Xe, false, false);
    }
    getOrCreateArray(e, t, n = 0) {
      let i = e[n];
      if (n < e.length - 1) {
        if (Array.isArray(t[i])) {
          if (F(t[i], K)) throw new y();
          let o = t[i][t[i].length - 1];
          return this.getOrCreateArray(e, o, n + 1);
        }
        return this.tryCreatingObject(i, t, null, true, true), this.getOrCreateArray(e, t[i], n + 1);
      }
      if (i in t && !Array.isArray(t[i])) throw new y();
      return t[i] = t[i] || [], t[i];
    }
  };
  var Ye = new Qe();
  var qe = 100;
  var In = (r, e) => {
    let t = 0;
    for (let n of r) {
      let i = n.tokenType;
      if (i === O || i === U) {
        if (t += 1, t > e) throw new R(e);
      } else (i === C || i === I) && (t -= 1);
    }
  };
  var dt = (r, e) => {
    let t = e != null && e.maxDepth && e.maxDepth > 0 ? e.maxDepth : qe, n = ut.tokenize(r);
    if (n.errors.length > 0) throw new pe(n.errors);
    In(n.tokens, t);
    try {
      V.input = n.tokens;
      let i = V.toml();
      if (V.errors.length > 0) throw new me(V.errors);
      return Ye.maxDepth = t, Ye.visit(i);
    } catch (i) {
      throw i instanceof RangeError ? new l("Maximum nesting depth exceeded (stack overflow)") : i;
    }
  };

  // src/utils.ts
  function toErrorMessage(error) {
    return error instanceof Error ? error.message : String(error);
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function encodeMultipart(values, boundary) {
    const parts = [];
    for (const key of Object.keys(values)) {
      const value = values[key];
      const text = typeof value === "string" ? value : JSON.stringify(value != null ? value : "");
      parts.push(
        `--${boundary}\r
Content-Disposition: form-data; name="${key}"\r
\r
${text}\r
`
      );
    }
    parts.push(`--${boundary}--\r
`);
    return parts.join("");
  }
  function withTimeout(task, timeoutMs) {
    if (!(timeoutMs > 0)) return task;
    return new Promise((resolve, reject) => {
      const timer2 = setTimeout(() => reject(new Error(`请求超时（${timeoutMs}ms）`)), timeoutMs);
      task.then(
        (value) => {
          clearTimeout(timer2);
          resolve(value);
        },
        (error) => {
          clearTimeout(timer2);
          reject(error);
        }
      );
    });
  }
  function replacePlaceholders(text, placeholders) {
    let result = text;
    for (const key of Object.keys(placeholders)) {
      result = result.split(`{${key}}`).join(placeholders[key]);
    }
    return result;
  }
  function deepReplacePlaceholders(value, placeholders) {
    if (typeof value === "string") return replacePlaceholders(value, placeholders);
    if (Array.isArray(value)) return value.map((item) => deepReplacePlaceholders(item, placeholders));
    if (value && typeof value === "object") {
      const result = {};
      for (const key of Object.keys(value)) {
        result[key] = deepReplacePlaceholders(value[key], placeholders);
      }
      return result;
    }
    return value;
  }
  function getByPath(data, path) {
    var _a;
    if (!path) return void 0;
    let value = data;
    const segments = path.split(".").filter(Boolean);
    for (const segment of segments) {
      if (value === null || value === void 0) return void 0;
      const bracket = /^(.+?)\[(\d+)\]$/.exec(segment);
      if (bracket) {
        value = (_a = value == null ? void 0 : value[bracket[1]]) == null ? void 0 : _a[Number(bracket[2])];
        continue;
      }
      if (Array.isArray(value) && /^\d+$/.test(segment)) {
        value = value[Number(segment)];
        continue;
      }
      value = value == null ? void 0 : value[segment];
    }
    return value;
  }
  function pickString(...values) {
    for (const value of values) {
      if (typeof value === "string" && value.trim()) return value.trim();
    }
    return null;
  }
  function parseJson(text) {
    try {
      return JSON.parse(text.replace(/^\uFEFF/, ""));
    } catch (e) {
      throw new Error(`服务器返回了无效的 JSON：${toErrorMessage(e)}
内容预览：${text.slice(0, 200)}`);
    }
  }
  function tryParseJson(text) {
    try {
      return JSON.parse(text);
    } catch (e) {
      return null;
    }
  }
  function formatHttpError(response, bodyText) {
    let message = `HTTP ${response.status}${response.statusText ? ` ${response.statusText}` : ""}`;
    const data = tryParseJson(bodyText);
    if (data) {
      const error = data.error;
      if (typeof error === "string") message += `
错误：${error}`;
      else if (error == null ? void 0 : error.message) message += `
错误：${error.message}`;
      else if (error) message += `
错误：${JSON.stringify(error)}`;
      if (data.message) message += `
消息：${data.message}`;
      if (data.msg) message += `
消息：${data.msg}`;
    } else if (bodyText) {
      message += `
响应：${bodyText.slice(0, 200)}`;
    }
    return message;
  }
  function isHttpUrl(value) {
    return /^https?:\/\//i.test(value.trim());
  }
  function isHexString(value) {
    return /^[0-9a-f]+$/i.test(value) && value.length % 2 === 0 && value.length >= 16;
  }
  var BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  function hexToBase64(hex) {
    const clean = hex.replace(/\s+/g, "");
    if (clean.length % 2 !== 0) throw new Error("十六进制数据长度不合法");
    const bytes = new Uint8Array(clean.length / 2);
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = parseInt(clean.slice(i * 2, i * 2 + 2), 16);
    }
    let result = "";
    for (let i = 0; i < bytes.length; i += 3) {
      const a2 = bytes[i];
      const b2 = i + 1 < bytes.length ? bytes[i + 1] : 0;
      const c2 = i + 2 < bytes.length ? bytes[i + 2] : 0;
      result += BASE64_CHARS[a2 >> 2];
      result += BASE64_CHARS[(a2 & 3) << 4 | b2 >> 4];
      result += i + 1 < bytes.length ? BASE64_CHARS[(b2 & 15) << 2 | c2 >> 6] : "=";
      result += i + 2 < bytes.length ? BASE64_CHARS[c2 & 63] : "=";
    }
    return result;
  }

  // src/models.ts
  var CONFIG_KEY = "生成图片模型";
  var PRESET_MODELS = [
    `# 生成图片模型，使用 TOML 格式。默认只保留一个经典模型，其他示例见 MODELS.md。
name = "gpt-image-1"
provider = "openai"
api_key = "sk-xxx"
base_url = "https://api.openai.com/v1/images/generations"

[body]
model = "gpt-image-1"
prompt = "{prompt}"
n = 1
size = "1024x1024"
quality = "standard"
response_format = "b64_json"

[response]
data_path = "data.0.b64_json"`
  ];
  var DEFAULT_SUCCESS_VALUES = ["SUCCEEDED", "SUCCESS", "COMPLETED"];
  var DEFAULT_FAILURE_VALUES = ["FAILED", "ERROR", "CANCELED"];
  function asString(value) {
    return typeof value === "string" ? value : "";
  }
  function asNumber(value, fallback) {
    return typeof value === "number" && isFinite(value) ? value : fallback;
  }
  function asObject(value) {
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
  }
  function asHeaders(value) {
    var _a;
    const result = {};
    for (const key of Object.keys(asObject(value))) {
      result[key] = String((_a = value[key]) != null ? _a : "");
    }
    return result;
  }
  function asStringArray(value, fallback) {
    if (!Array.isArray(value)) return fallback;
    const result = [];
    for (const item of value) {
      if (typeof item === "string" && item.trim()) result.push(item.trim());
    }
    return result.length > 0 ? result : fallback;
  }
  function parseModel(tomlText) {
    const raw = dt(tomlText);
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
      throw new Error("TOML 内容为空或格式错误");
    }
    const name = asString(raw.name);
    if (!name) throw new Error("缺失模型名称 name");
    const requestRaw = asObject(raw.request);
    const baseUrl = asString(raw.base_url) || asString(requestRaw.url);
    if (!baseUrl) throw new Error("缺失 base_url 或 request.url");
    const request = {
      url: asString(requestRaw.url) || void 0,
      method: asString(requestRaw.method) || "POST",
      headers: asHeaders(requestRaw.headers),
      contentType: asString(requestRaw.content_type) || (requestRaw.form ? "application/x-www-form-urlencoded" : "application/json"),
      authHeaderName: asString(requestRaw.auth_header_name) || void 0,
      form: requestRaw.form === true,
      authUrl: asString(requestRaw.auth_url) || void 0,
      authTokenPath: asString(requestRaw.auth_token_path) || "access_token",
      authExpiresPath: asString(requestRaw.auth_expires_path) || "expires_in",
      pollUrl: asString(requestRaw.poll_url) || void 0,
      pollInterval: asNumber(requestRaw.poll_interval, 15),
      pollMax: asNumber(requestRaw.poll_max, 20),
      pollMethod: asString(requestRaw.poll_method) || void 0,
      pollBody: asObject(requestRaw.poll_body),
      timeout: asNumber(requestRaw.timeout, 300)
    };
    const responseRaw = asObject(raw.response);
    const dataType = asString(responseRaw.data_type);
    const response = {
      dataPath: asString(responseRaw.data_path) || void 0,
      dataType: dataType === "url" || dataType === "base64" || dataType === "hex" ? dataType : "auto",
      taskIdPath: asString(responseRaw.task_id_path) || void 0,
      taskStatusPath: asString(responseRaw.task_status_path) || void 0,
      successValues: asStringArray(responseRaw.success_values, DEFAULT_SUCCESS_VALUES),
      failureValues: asStringArray(responseRaw.failure_values, DEFAULT_FAILURE_VALUES),
      errorMessagePath: asString(responseRaw.error_message_path) || void 0
    };
    return {
      name,
      provider: asString(raw.provider),
      apiKey: asString(raw.api_key),
      apiSecret: asString(raw.api_secret),
      voiceId: asString(raw.voice_id) || void 0,
      baseUrl,
      body: asObject(raw.body),
      request,
      response
    };
  }
  function getModels() {
    return seal.ext.getTemplateConfig(ext, CONFIG_KEY).map((tomlText) => {
      try {
        return parseModel(tomlText);
      } catch (e) {
        console.error(`[tti] ${CONFIG_KEY} 解析失败，已跳过：${toErrorMessage(e)}`);
        return null;
      }
    }).filter((model) => model !== null);
  }

  // src/config.ts
  var Config = class {
    static register() {
      seal.ext.registerTemplateConfig(
        ext,
        CONFIG_KEY,
        PRESET_MODELS,
        `每行一个模型（TOML），每行是一段完整 TOML，可直接修改或新增。
必填：name（模型名）、base_url（API 地址，或用 request.url 代替）。
可选：provider（服务商标识）、api_key（无鉴权接口可留空）、api_secret（百度等需要换 token 的服务商）、voice_id（音色/语音 ID，支持 URL 与请求体占位符 {voice_id}）、body（请求体，支持 {prompt}/{negative_prompt}/{model}/{voice_id}/{api_key}/{api_secret}/{access_token}/{image}/{image_url}/{image_base64} 占位符）。
[request]：method、headers、content_type（支持 application/json、application/x-www-form-urlencoded、multipart/form-data）、form、auth_header_name（自定义鉴权头，如 x-goog-api-key，默认 Authorization: Bearer）、auth_url、auth_token_path、auth_expires_path、poll_url、poll_method（轮询请求方法，默认 GET；配置 poll_body 时默认 POST）、poll_body（轮询请求体，支持 {task_id} 占位符）、poll_interval（秒）、poll_max（次）、timeout（秒）。
[response]：data_path（如 data.0.url / output.results.0.url）、data_type（auto/url/base64/hex）、task_id_path、task_status_path、success_values、failure_values、error_message_path。
默认生成图片模型取列表第一项。
格式指导与完整示例见 https://github.com/error2913/aiplugin4-dependencies/blob/main/tti/MODELS.md`,
        "模型"
      );
    }
    static getModels() {
      return getModels();
    }
    static getModel(name = "") {
      const models = getModels();
      if (models.length === 0) {
        throw new Error("请先配置生成图片模型");
      }
      if (name) {
        const model = models.find((item) => item.name === name);
        if (!model) throw new Error(`未找到生成图片模型：${name}`);
        return model;
      }
      return models[0];
    }
  };

  // src/request.ts
  var accessTokenCache = {};
  var accessTokenRequest = null;
  async function requestText(url, init) {
    const response = await fetch(url, init);
    const bodyText = await response.text();
    if (!response.ok) {
      throw new Error(formatHttpError(response, bodyText));
    }
    return bodyText;
  }
  async function getAccessToken(model, timeoutMs) {
    const authUrl = model.request.authUrl;
    if (!authUrl) return "";
    const cacheKey = `${model.provider}|${model.apiKey}|${model.apiSecret}|${model.request.authTokenPath || ""}`;
    const cached = accessTokenCache[cacheKey];
    if (cached && Date.now() < cached.expireAt) return cached.token;
    if (accessTokenRequest && accessTokenRequest.key === cacheKey) {
      return accessTokenRequest.promise;
    }
    const promise = (async () => {
      const url = replacePlaceholders(authUrl, {
        api_key: model.apiKey,
        api_secret: model.apiSecret
      });
      const bodyText = await withTimeout(requestText(url, { method: "GET" }), timeoutMs);
      const data = parseJson(bodyText);
      const token = getByPath(data, model.request.authTokenPath || "access_token");
      if (typeof token !== "string" || !token) {
        const message = (data == null ? void 0 : data.error_description) || (data == null ? void 0 : data.error) || (data == null ? void 0 : data.err_msg) || bodyText.slice(0, 200);
        throw new Error(`获取访问令牌失败：${message}`);
      }
      const expiresIn = Number(getByPath(data, model.request.authExpiresPath || "expires_in")) || 2592e3;
      accessTokenCache[cacheKey] = {
        token,
        expireAt: Date.now() + Math.max(expiresIn - 60, 60) * 1e3
      };
      return token;
    })();
    accessTokenRequest = { key: cacheKey, promise };
    try {
      return await promise;
    } finally {
      accessTokenRequest = null;
    }
  }
  function buildPlaceholders(model, prompt, negativeText, accessToken, image) {
    const rawImage = image.trim();
    const isDataUrl = /^data:/i.test(rawImage);
    const isUrl = isHttpUrl(rawImage);
    const imageBase64 = isDataUrl && rawImage.includes(",") ? rawImage.slice(rawImage.indexOf(",") + 1) : isUrl ? "" : rawImage;
    const imageUrl = isUrl || isDataUrl ? rawImage : imageBase64 ? `data:image/png;base64,${imageBase64}` : "";
    return {
      prompt,
      negative_prompt: negativeText,
      text: prompt,
      input: prompt,
      image: rawImage,
      image_url: imageUrl,
      image_base64: imageBase64,
      model: model.name,
      voice_id: model.voiceId || "",
      api_key: model.apiKey,
      api_secret: model.apiSecret,
      access_token: accessToken
    };
  }
  function buildUrl(model, placeholders) {
    const template = model.request.url || model.baseUrl;
    return replacePlaceholders(template, placeholders);
  }
  function buildHeaders(model, placeholders) {
    const headers = {
      "Content-Type": model.request.contentType || "application/json"
    };
    if (model.apiKey && model.provider !== "baidu") {
      const headerName = model.request.authHeaderName || "Authorization";
      const headerValue = model.request.authHeaderName ? model.apiKey : `Bearer ${model.apiKey}`;
      headers[headerName] = headerValue;
    }
    for (const key of Object.keys(model.request.headers || {})) {
      headers[key] = replacePlaceholders(model.request.headers[key], placeholders);
    }
    return headers;
  }
  function buildBody(model, placeholders) {
    const replaced = deepReplacePlaceholders(model.body, placeholders);
    const contentType = model.request.contentType || "application/json";
    if (/multipart\/form-data/i.test(contentType)) {
      const boundary = `seal-${Date.now().toString(36)}`;
      return {
        body: encodeMultipart(replaced, boundary),
        contentType: `multipart/form-data; boundary=${boundary}`
      };
    }
    const isForm = model.request.form || /x-www-form-urlencoded/i.test(contentType);
    if (isForm) {
      const parts = [];
      for (const key of Object.keys(replaced)) {
        const value = replaced[key];
        if (Array.isArray(value) || value && typeof value === "object") {
          parts.push(`${key}=${encodeURIComponent(JSON.stringify(value))}`);
        } else {
          parts.push(`${key}=${encodeURIComponent(String(value != null ? value : ""))}`);
        }
      }
      return { body: parts.join("&") };
    }
    return { body: JSON.stringify(replaced) };
  }
  function normalizeImageData(value, dataType) {
    if (typeof value !== "string" || !value.trim()) return null;
    const text = value.trim();
    if (dataType === "hex" || dataType === "auto" && isHexString(text)) {
      return hexToBase64(text);
    }
    return text;
  }
  function extractImageData(data, model) {
    const dataType = model.response.dataType || "auto";
    const explicit = normalizeImageData(getByPath(data, model.response.dataPath), dataType);
    if (explicit) return explicit;
    const candidates = [
      "data.0.url",
      "data.0.b64_json",
      "data.0.image_url.url",
      "data.url",
      "data.b64_json",
      "images.0.url",
      "images.0.b64_json",
      "images.0",
      "artifacts.0.base64",
      "image",
      "output.results.0.url",
      "output.results.0.b64_json",
      "img_urls.0",
      "url",
      "b64_json"
    ];
    for (const path of candidates) {
      const found = normalizeImageData(getByPath(data, path), dataType);
      if (found) return found;
    }
    const content = getByPath(data, "output.choices.0.message.content");
    if (Array.isArray(content)) {
      const image = pickString(
        ...content.map(
          (item) => {
            var _a;
            return typeof item === "string" ? item : (item == null ? void 0 : item.image) || ((_a = item == null ? void 0 : item.image_url) == null ? void 0 : _a.url);
          }
        )
      );
      if (image) return image;
    }
    const parts = getByPath(data, "candidates.0.content.parts");
    if (Array.isArray(parts)) {
      const inline = pickString(
        ...parts.map(
          (part) => {
            var _a, _b, _c;
            return typeof part === "string" ? part : ((_a = part == null ? void 0 : part.inlineData) == null ? void 0 : _a.data) || ((_b = part == null ? void 0 : part.inline_data) == null ? void 0 : _b.data) || ((_c = part == null ? void 0 : part.image) == null ? void 0 : _c.data);
          }
        )
      );
      if (inline) return inline;
    }
    return null;
  }
  function extractTaskId(data, model) {
    const explicit = getByPath(data, model.response.taskIdPath);
    if (typeof explicit === "string" && explicit.trim()) return explicit.trim();
    return pickString(
      getByPath(data, "output.task_id"),
      getByPath(data, "output.taskId"),
      getByPath(data, "task_id"),
      getByPath(data, "taskId"),
      getByPath(data, "data.task_id")
    ) || "";
  }
  function extractTaskStatus(data, model) {
    var _a, _b, _c;
    const explicit = getByPath(data, model.response.taskStatusPath);
    if (explicit !== void 0 && explicit !== null) return String(explicit);
    const fallback = (_c = (_b = (_a = getByPath(data, "output.task_status")) != null ? _a : getByPath(data, "output.status")) != null ? _b : getByPath(data, "task_status")) != null ? _c : getByPath(data, "status");
    return fallback === void 0 || fallback === null ? "" : String(fallback);
  }
  function checkJsonError(data, model) {
    var _a, _b, _c, _d, _e2, _f;
    const baseResp = data == null ? void 0 : data.base_resp;
    if (baseResp && Number(baseResp.status_code) !== 0) {
      throw new Error(`接口返回错误：${baseResp.status_msg || baseResp.status_code}`);
    }
    const code = (_c = (_b = (_a = getByPath(data, "error_code")) != null ? _a : getByPath(data, "err_no")) != null ? _b : getByPath(data, "status_code")) != null ? _c : getByPath(data, "code");
    const numericCode = Number(code);
    if (code !== void 0 && code !== null && numericCode !== 0 && numericCode !== 200 && !isNaN(numericCode)) {
      const message = model.response.errorMessagePath ? getByPath(data, model.response.errorMessagePath) : void 0;
      const detail = (_f = (_e2 = (_d = message != null ? message : getByPath(data, "message")) != null ? _d : getByPath(data, "err_msg")) != null ? _e2 : getByPath(data, "error_description")) != null ? _f : JSON.stringify(data).slice(0, 200);
      throw new Error(`接口返回错误（${code}）：${detail}`);
    }
    if (typeof (data == null ? void 0 : data.error) === "string") {
      throw new Error(`接口返回错误：${data.error}`);
    }
    if ((data == null ? void 0 : data.error) && typeof data.error === "object") {
      throw new Error(`接口返回错误：${data.error.message || JSON.stringify(data.error)}`);
    }
  }
  async function pollTask(taskId, model, headers, placeholders, timeoutMs) {
    const pollUrlTemplate = model.request.pollUrl;
    if (!pollUrlTemplate) {
      throw new Error("响应中未找到图片URL或任务ID，且未配置轮询地址 request.poll_url");
    }
    const pollMax = model.request.pollMax || 20;
    const pollIntervalMs = (model.request.pollInterval || 15) * 1e3;
    for (let i = 0; i < pollMax; i++) {
      const url = replacePlaceholders(pollUrlTemplate, __spreadProps(__spreadValues({}, placeholders), { task_id: taskId }));
      let method = "GET";
      let body;
      const pollBody = model.request.pollBody;
      if (pollBody && Object.keys(pollBody).length > 0) {
        method = model.request.pollMethod || "POST";
        body = JSON.stringify(
          deepReplacePlaceholders(pollBody, __spreadProps(__spreadValues({}, placeholders), { task_id: taskId }))
        );
      } else if (model.request.pollMethod) {
        method = model.request.pollMethod;
      }
      const bodyText = await withTimeout(
        requestText(url, { method, headers, body }),
        timeoutMs
      );
      const data = parseJson(bodyText);
      checkJsonError(data, model);
      const status = extractTaskStatus(data, model).toUpperCase();
      if ((model.response.successValues || []).some((value) => status === value.toUpperCase())) {
        const result = extractImageData(data, model);
        if (result) return result;
        throw new Error("任务已完成，但响应中未找到图片URL");
      }
      if ((model.response.failureValues || []).some((value) => status === value.toUpperCase())) {
        throw new Error(`任务失败，状态：${status}`);
      }
      if (i < pollMax - 1) await sleep(pollIntervalMs);
    }
    throw new Error(`轮询超时：${pollMax} 次仍未完成`);
  }
  async function sendImageRequest(prompt, negativeText = "", modelName = "", image = "") {
    if (!prompt.trim()) throw new Error("图片描述不能为空");
    const model = Config.getModel(modelName);
    const timeoutMs = (model.request.timeout || 300) * 1e3;
    const accessToken = await getAccessToken(model, timeoutMs);
    const placeholders = buildPlaceholders(model, prompt, negativeText, accessToken, image);
    const url = buildUrl(model, placeholders);
    const headers = buildHeaders(model, placeholders);
    const { body, contentType } = buildBody(model, placeholders);
    if (contentType) headers["Content-Type"] = contentType;
    const bodyText = await withTimeout(
      requestText(url, {
        method: model.request.method || "POST",
        headers,
        body
      }),
      timeoutMs
    );
    const data = parseJson(bodyText);
    checkJsonError(data, model);
    const immediate = extractImageData(data, model);
    if (immediate) return immediate;
    const taskId = extractTaskId(data, model);
    if (!taskId) throw new Error("无法从响应中提取图片URL或任务ID");
    return pollTask(taskId, model, headers, placeholders, timeoutMs);
  }

  // src/api.ts
  function registerApi() {
    if (globalThis[NAME]) return;
    const api = {
      name: NAME,
      version: VERSION,
      generate: async (request) => {
        try {
          const data = await sendImageRequest(
            request.text,
            request.negativeText || "",
            request.model || "",
            request.image || ""
          );
          return { success: true, type: "image", data };
        } catch (e) {
          return { success: false, type: "image", data: "", error: toErrorMessage(e) };
        }
      }
    };
    globalThis[NAME] = api;
  }

  // src/cmd.ts
  async function generateAndReply(ctx, msg, text) {
    const api = globalThis[NAME];
    if (!api) throw new Error("生成图片插件API未注册");
    const result = await api.generate({ text });
    if (!result.success) throw new Error(result.error || "生成图片失败");
    if (isHttpUrl(result.data)) {
      seal.replyToSender(ctx, msg, `[CQ:image,file=${result.data}]`);
      return;
    }
    let file = "";
    try {
      file = seal.base64ToImage(result.data);
    } catch (e) {
      throw new Error(`已获取图片数据，但保存为本地文件失败：${toErrorMessage(e)}`);
    }
    seal.replyToSender(ctx, msg, `[CQ:image,file=${file}]`);
  }
  function createCmd(name, help) {
    const cmd = seal.ext.newCmdItemInfo();
    cmd.name = name;
    cmd.help = help;
    cmd.solve = async (ctx, msg, cmdArgs) => {
      const text = cmdArgs.rawArgs.trim();
      if (!text) {
        seal.replyToSender(ctx, msg, "请输入图片描述");
        return seal.ext.newCmdExecuteResult(true);
      }
      seal.replyToSender(ctx, msg, "正在生成图片，请稍候...");
      try {
        await generateAndReply(ctx, msg, text);
      } catch (e) {
        seal.replyToSender(ctx, msg, `生成图片失败：${toErrorMessage(e)}`);
      }
      return seal.ext.newCmdExecuteResult(true);
    };
    return cmd;
  }
  function registerCmd() {
    const help = "通过文字描述生成图片\n用法：.tti 提示词";
    const cmdTti = createCmd("tti", help);
    ext.cmdMap[cmdTti.name] = cmdTti;
  }

  // src/index.ts
  function main() {
    Config.register();
    registerApi();
    registerCmd();
  }
  main();
})();
/*! Bundled license information:

xregexp/lib/xregexp.js:
  (*!
   * XRegExp 5.1.2
   * <xregexp.com>
   * Steven Levithan (c) 2007-present MIT License
   *)

xregexp/lib/addons/build.js:
  (*!
   * XRegExp.build 5.1.2
   * <xregexp.com>
   * Steven Levithan (c) 2012-present MIT License
   *)

xregexp/lib/addons/matchrecursive.js:
  (*!
   * XRegExp.matchRecursive 5.1.2
   * <xregexp.com>
   * Steven Levithan (c) 2009-present MIT License
   *)

xregexp/lib/addons/unicode-base.js:
  (*!
   * XRegExp Unicode Base 5.1.2
   * <xregexp.com>
   * Steven Levithan (c) 2008-present MIT License
   *)

xregexp/lib/addons/unicode-categories.js:
  (*!
   * XRegExp Unicode Categories 5.1.2
   * <xregexp.com>
   * Steven Levithan (c) 2010-present MIT License
   * Unicode data by Mathias Bynens <mathiasbynens.be>
   *)

xregexp/lib/addons/unicode-properties.js:
  (*!
   * XRegExp Unicode Properties 5.1.2
   * <xregexp.com>
   * Steven Levithan (c) 2012-present MIT License
   * Unicode data by Mathias Bynens <mathiasbynens.be>
   *)

xregexp/lib/addons/unicode-scripts.js:
  (*!
   * XRegExp Unicode Scripts 5.1.2
   * <xregexp.com>
   * Steven Levithan (c) 2010-present MIT License
   * Unicode data by Mathias Bynens <mathiasbynens.be>
   *)
*/
