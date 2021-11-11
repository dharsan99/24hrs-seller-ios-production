(self["webpackChunkseller_app"] = self["webpackChunkseller_app"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 64021:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraSource": function() { return /* binding */ CameraSource; },
/* harmony export */   "CameraDirection": function() { return /* binding */ CameraDirection; },
/* harmony export */   "CameraResultType": function() { return /* binding */ CameraResultType; }
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
    /**
     * Prompts the user to select either the photo album or take a photo.
     */
    CameraSource["Prompt"] = "PROMPT";
    /**
     * Take a new photo using the camera.
     */
    CameraSource["Camera"] = "CAMERA";
    /**
     * Pick an existing photo fron the gallery or photo album.
     */
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 37673:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection; },
/* harmony export */   "CameraResultType": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType; },
/* harmony export */   "CameraSource": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource; },
/* harmony export */   "Camera": function() { return /* binding */ Camera; }
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 64021);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 14028)).then(m => new m.CameraWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 68384:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": function() { return /* binding */ Capacitor; },
/* harmony export */   "CapacitorException": function() { return /* binding */ CapacitorException; },
/* harmony export */   "CapacitorPlatforms": function() { return /* binding */ CapacitorPlatforms; },
/* harmony export */   "ExceptionCode": function() { return /* binding */ ExceptionCode; },
/* harmony export */   "Plugins": function() { return /* binding */ Plugins; },
/* harmony export */   "WebPlugin": function() { return /* binding */ WebPlugin; },
/* harmony export */   "WebView": function() { return /* binding */ WebView; },
/* harmony export */   "addPlatform": function() { return /* binding */ addPlatform; },
/* harmony export */   "registerPlugin": function() { return /* binding */ registerPlugin; },
/* harmony export */   "registerWebPlugin": function() { return /* binding */ registerWebPlugin; },
/* harmony export */   "setPlatform": function() { return /* binding */ setPlatform; }
/* harmony export */ });
/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = (win) => {
    const defaultPlatformMap = new Map();
    defaultPlatformMap.set('web', { name: 'web' });
    const capPlatforms = win.CapacitorPlatforms || {
        currentPlatform: { name: 'web' },
        platforms: defaultPlatformMap,
    };
    const addPlatform = (name, platform) => {
        capPlatforms.platforms.set(name, platform);
    };
    const setPlatform = (name) => {
        if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
        }
    };
    capPlatforms.addPlatform = addPlatform;
    capPlatforms.setPlatform = setPlatform;
    return capPlatforms;
};
const initPlatforms = (win) => (win.CapacitorPlatforms = createCapacitorPlatforms(win));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const CapacitorPlatforms = /*#__PURE__*/ initPlatforms((typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
                ? global
                : {}));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
    var _a;
    const config = webPlugin.config;
    const Plugins = cap.Plugins;
    if (!config || !config.name) {
        // TODO: add link to upgrade guide
        throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
    }
    // TODO: add link to upgrade guide
    console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);
    if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
        // Add the web plugin into the plugins registry if there already isn't
        // an existing one. If it doesn't already exist, that means
        // there's no existing native implementation for it.
        // - OR -
        // If we already have a plugin registered (meaning it was defined in the native layer),
        // then we should only overwrite it if the corresponding web plugin activates on
        // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
        Plugins[config.name] = webPlugin;
    }
};

var ExceptionCode;
(function (ExceptionCode) {
    /**
     * API is not implemented.
     *
     * This usually means the API can't be used because it is not implemented for
     * the current platform.
     */
    ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
    /**
     * API is not available.
     *
     * This means the API can't be used right now because:
     *   - it is currently missing a prerequisite, such as network connectivity
     *   - it requires a particular platform or browser version
     */
    ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
class CapacitorException extends Error {
    constructor(message, code) {
        super(message);
        this.message = message;
        this.code = code;
    }
}
const getPlatformId = (win) => {
    var _a, _b;
    if (win === null || win === void 0 ? void 0 : win.androidBridge) {
        return 'android';
    }
    else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
        return 'ios';
    }
    else {
        return 'web';
    }
};

const createCapacitor = (win) => {
    var _a, _b, _c, _d, _e;
    const capCustomPlatform = win.CapacitorCustomPlatform || null;
    const cap = win.Capacitor || {};
    const Plugins = (cap.Plugins = cap.Plugins || {});
    /**
     * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
     */
    const capPlatforms = win.CapacitorPlatforms;
    const defaultGetPlatform = () => {
        return capCustomPlatform !== null
            ? capCustomPlatform.name
            : getPlatformId(win);
    };
    const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
    const defaultIsNativePlatform = () => getPlatform() !== 'web';
    const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
    const defaultIsPluginAvailable = (pluginName) => {
        const plugin = registeredPlugins.get(pluginName);
        if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
            // JS implementation available for the current platform.
            return true;
        }
        if (getPluginHeader(pluginName)) {
            // Native implementation available.
            return true;
        }
        return false;
    };
    const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) ||
        defaultIsPluginAvailable;
    const defaultGetPluginHeader = (pluginName) => { var _a; return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName); };
    const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
    const handleError = (err) => win.console.error(err);
    const pluginMethodNoop = (_target, prop, pluginName) => {
        return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
    };
    const registeredPlugins = new Map();
    const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
        const registeredPlugin = registeredPlugins.get(pluginName);
        if (registeredPlugin) {
            console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
            return registeredPlugin.proxy;
        }
        const platform = getPlatform();
        const pluginHeader = getPluginHeader(pluginName);
        let jsImplementation;
        const loadPluginImplementation = async () => {
            if (!jsImplementation && platform in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations[platform] === 'function'
                        ? (jsImplementation = await jsImplementations[platform]())
                        : (jsImplementation = jsImplementations[platform]);
            }
            else if (capCustomPlatform !== null &&
                !jsImplementation &&
                'web' in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations['web'] === 'function'
                        ? (jsImplementation = await jsImplementations['web']())
                        : (jsImplementation = jsImplementations['web']);
            }
            return jsImplementation;
        };
        const createPluginMethod = (impl, prop) => {
            var _a, _b;
            if (pluginHeader) {
                const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
                if (methodHeader) {
                    if (methodHeader.rtype === 'promise') {
                        return (options) => cap.nativePromise(pluginName, prop.toString(), options);
                    }
                    else {
                        return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
                    }
                }
                else if (impl) {
                    return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
                }
            }
            else if (impl) {
                return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            }
            else {
                throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
            }
        };
        const createPluginMethodWrapper = (prop) => {
            let remove;
            const wrapper = (...args) => {
                const p = loadPluginImplementation().then(impl => {
                    const fn = createPluginMethod(impl, prop);
                    if (fn) {
                        const p = fn(...args);
                        remove = p === null || p === void 0 ? void 0 : p.remove;
                        return p;
                    }
                    else {
                        throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
                    }
                });
                if (prop === 'addListener') {
                    p.remove = async () => remove();
                }
                return p;
            };
            // Some flair ✨
            wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
            Object.defineProperty(wrapper, 'name', {
                value: prop,
                writable: false,
                configurable: false,
            });
            return wrapper;
        };
        const addListener = createPluginMethodWrapper('addListener');
        const removeListener = createPluginMethodWrapper('removeListener');
        const addListenerNative = (eventName, callback) => {
            const call = addListener({ eventName }, callback);
            const remove = async () => {
                const callbackId = await call;
                removeListener({
                    eventName,
                    callbackId,
                }, callback);
            };
            const p = new Promise(resolve => call.then(() => resolve({ remove })));
            p.remove = async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            };
            return p;
        };
        const proxy = new Proxy({}, {
            get(_, prop) {
                switch (prop) {
                    // https://github.com/facebook/react/issues/20030
                    case '$$typeof':
                        return undefined;
                    case 'toJSON':
                        return () => ({});
                    case 'addListener':
                        return pluginHeader ? addListenerNative : addListener;
                    case 'removeListener':
                        return removeListener;
                    default:
                        return createPluginMethodWrapper(prop);
                }
            },
        });
        Plugins[pluginName] = proxy;
        registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy,
            platforms: new Set([
                ...Object.keys(jsImplementations),
                ...(pluginHeader ? [platform] : []),
            ]),
        });
        return proxy;
    };
    const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
    // Add in convertFileSrc for web, it will already be available in native context
    if (!cap.convertFileSrc) {
        cap.convertFileSrc = filePath => filePath;
    }
    cap.getPlatform = getPlatform;
    cap.handleError = handleError;
    cap.isNativePlatform = isNativePlatform;
    cap.isPluginAvailable = isPluginAvailable;
    cap.pluginMethodNoop = pluginMethodNoop;
    cap.registerPlugin = registerPlugin;
    cap.Exception = CapacitorException;
    cap.DEBUG = !!cap.DEBUG;
    cap.isLoggingEnabled = !!cap.isLoggingEnabled;
    // Deprecated props
    cap.platform = cap.getPlatform();
    cap.isNative = cap.isNativePlatform();
    return cap;
};
const initCapacitorGlobal = (win) => (win.Capacitor = createCapacitor(win));

const Capacitor = /*#__PURE__*/ initCapacitorGlobal(typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
                ? global
                : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */
const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */
const registerWebPlugin = (plugin) => legacyRegisterWebPlugin(Capacitor, plugin);

/**
 * Base class web plugins should extend.
 */
class WebPlugin {
    constructor(config) {
        this.listeners = {};
        this.windowListeners = {};
        if (config) {
            // TODO: add link to upgrade guide
            console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
            this.config = config;
        }
    }
    addListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        const windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        const remove = async () => this.removeListener(eventName, listenerFunc);
        const p = Promise.resolve({ remove });
        Object.defineProperty(p, 'remove', {
            value: async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            },
        });
        return p;
    }
    async removeAllListeners() {
        this.listeners = {};
        for (const listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
        }
        this.windowListeners = {};
    }
    notifyListeners(eventName, data) {
        const listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(listener => listener(data));
        }
    }
    hasListeners(eventName) {
        return !!this.listeners[eventName].length;
    }
    registerWindowListener(windowEventName, pluginEventName) {
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName,
            pluginEventName,
            handler: event => {
                this.notifyListeners(pluginEventName, event);
            },
        };
    }
    unimplemented(msg = 'not implemented') {
        return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
    }
    unavailable(msg = 'not available') {
        return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
    }
    async removeListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        const index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    }
    addWindowListener(handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    }
    removeWindowListener(handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    }
}

const WebView = /*#__PURE__*/ registerPlugin('WebView');


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 39399:
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": function() { return /* binding */ ModalComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./modal.component.html */ 33889);
/* harmony import */ var _modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.component.scss */ 56235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 37673);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/http.service */ 28191);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);









let ModalComponent = class ModalComponent {
    constructor(router, http, toastCtrl, route) {
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        route.params.subscribe(val => {
        });
    }
    ngOnInit() { }
    getPicture() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let imgUrl = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera,
                quality: 100
            });
            let base64Image = 'data:image/jpeg;base64,' + imgUrl;
            console.log(base64Image);
            this.http.post('/processImage', { dataUrl: base64Image }).subscribe((response) => {
                console.log(response);
                if (response.success == true) {
                    this.imagesrc = response.productData;
                }
            }, (error) => {
                console.log(error);
            });
        });
    }
};
ModalComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
ModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-modal',
        template: _raw_loader_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ModalComponent);



/***/ }),

/***/ 99818:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": function() { return /* binding */ Tab3PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page,
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ 53746:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": function() { return /* binding */ Tab3PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab3.page */ 78592);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3-routing.module */ 99818);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal.component */ 39399);










let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule,
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page, _modal_modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent]
    })
], Tab3PageModule);



/***/ }),

/***/ 78592:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": function() { return /* binding */ Tab3Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab3.page.html */ 64255);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab3.page.scss */ 90943);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/modal.component */ 39399);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/http.service */ 28191);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);











let Tab3Page = class Tab3Page {
    constructor(popoverController, router, http, toastCtrl, route) {
        this.popoverController = popoverController;
        this.router = router;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.date = new Date().toISOString();
        this.Category = '';
        this.subcategory = '';
        this.productname = '';
        this.description = '';
        this.cost = '';
        this.categoryName = '';
        this.categoryList = [];
        this.PopupModel = false;
        route.params.subscribe(val => {
            this.PopupModel = false;
            this.getCategoryList();
        });
    }
    ngOnInit() {
    }
    upload(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__.ModalComponent,
                cssClass: 'my-custom-class',
                event: ev,
                translucent: true
            });
            yield popover.present();
            const { role } = yield popover.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    backToprivious() {
        this.PopupModel = false;
        this.Category = '';
    }
    addproduct() {
        this.router.navigate(['/myproducts']);
    }
    createCategory() {
        this.PopupModel = false;
        const catData = {
            category_name: this.categoryName,
            created_at: this.date
        };
        this.http.post('/create_category', catData).subscribe((response) => {
            console.log(response);
            this.Category = "";
            this.getCategoryList();
            if (response.success == "true") {
                console.log("test");
            }
        }, (error) => {
            console.log(error);
        });
    }
    getCategoryList() {
        this.http.get('/read_category').subscribe((response) => {
            this.categoryList = response.records;
            console.log(response.records);
        }, (error) => {
            console.log(error);
        });
    }
    popupModelOpen() {
        if (this.Category == "1") {
            this.PopupModel = true;
            this.Category = 'Select Your Category';
        }
    }
    addToProduct() {
        const productData = {
            category: this.Category,
            subcategory: this.subcategory,
            product_name: this.productname,
            description: this.description,
            cost: this.cost
        };
        this.http.post('/update_product', productData).subscribe((response) => {
            console.log(response);
            if (response.success == "true") {
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                });
                this.addproduct();
            }
        }, (error) => {
            console.log(error);
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _shared_http_service__WEBPACK_IMPORTED_MODULE_3__.HttpService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute }
];
Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab3Page);



/***/ }),

/***/ 56235:
/*!********************************************!*\
  !*** ./src/app/modal/modal.component.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#card {\n  background-color: transparent !important;\n  border-radius: 0px !important;\n  border: 1px solid #fff;\n}\n\n.items {\n  align-items: center !important;\n  margin: 5px !important;\n}\n\n.gallary-btn, .upload-btn {\n  font-size: smaller;\n  margin: 6px;\n  background-color: darkturquoise;\n  border: 1px solid darkturquoise;\n}\n\n#close {\n  color: red;\n  cursor: pointer;\n}\n\n#close:hover {\n  color: #7e0202;\n}\n\nlottie-player {\n  cursor: pointer;\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7RUFDSiw2QkFBQTtFQUNBLHNCQUFBO0FBQ0E7O0FBQ0E7RUFDSSw4QkFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFFQSwrQkFBQTtFQUNBLCtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQURBO0VBQ0ksaUNBQUE7RUFLQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUNJO0VBQ0ksYUFBQTtBQUNSIiwiZmlsZSI6Im1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbmJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuYm9yZGVyOjFweCBzb2xpZCAjZmZmO1xufVxuLml0ZW1ze1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBtYXJnaW46NXB4ICFpbXBvcnRhbnQ7XG59XG4uZ2FsbGFyeS1idG4sIC51cGxvYWQtYnRue1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgICBtYXJnaW46IDZweDtcbiAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6ZGFya3R1cnF1b2lzZTtcbiAgICBib3JkZXI6MXB4IHNvbGlkIGRhcmt0dXJxdW9pc2U7XG4gICAgXG59XG4jY2xvc2V7XG4gICAgY29sb3I6cmVkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNjbG9zZTpob3ZlcntcbiAgICBjb2xvcjogcmdiKDEyNiwgMiwgMik7XG59XG5sb3R0aWUtcGxheWVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZlxuICAgICFpbXBvcnRhbnQ7XG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzhjZGJlMlxuICAgIC8vIDAlLCAjZDFmMmU3XG4gICAgLy8gMTAwJSkgIWltcG9ydGFudDtcbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ 90943:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  color: #5C5C5C;\n}\n\n.cost {\n  width: 55px;\n  border-radius: 5px;\n  margin: 15px;\n  text-align: center;\n}\n\n.addproduct-btn {\n  border-radius: 5px !important;\n  width: 50%;\n  height: 35px;\n  background-color: #FF6000;\n  border: 1px solid #fff;\n  margin: 5px;\n  color: #fff;\n}\n\n#upload {\n  cursor: pointer;\n}\n\ninput[type=text] {\n  margin: 0 5px;\n  margin-top: -12px;\n  width: 90%;\n  box-sizing: border-box;\n  border: none;\n  border-bottom: 2px solid #FF6000;\n}\n\n#offer:focus {\n  outline: none !important;\n  border: 1px solid #e9f3ff !important;\n  box-shadow: 0 0 2px #8b8d91;\n}\n\n#kg-dropdwon {\n  position: relative;\n  display: flex;\n  width: 90%;\n  height: 3em;\n  border-radius: 0.25em;\n  overflow: hidden;\n  margin-left: 2%;\n}\n\n.select {\n  position: relative;\n  display: flex;\n  width: 97%;\n  height: 3em;\n  border-radius: 0.25em;\n  overflow: hidden;\n}\n\nselect:required:invalid {\n  color: gray;\n}\n\noption[value=\"\"][disabled] {\n  display: none;\n}\n\noption {\n  color: black;\n}\n\n.submit-btn {\n  border-radius: 5px !important;\n  width: 50%;\n  height: 35px;\n  background-color: #FF6000;\n  border: 1px solid #fff;\n  color: #fff;\n  margin: 5px;\n}\n\n#overlay {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: red;\n  z-index: 2;\n  cursor: pointer;\n}\n\n#card {\n  position: absolute;\n  height: 150%;\n  width: 250%;\n  background-color: rgba(0, 0, 0, 0.4);\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  margin-top: -150px !important;\n}\n\n#modal {\n  position: relative;\n  top: 35%;\n  margin: 10px;\n  background-color: #fff;\n  border: 1px solid #ebe6e6;\n  border-radius: 5px;\n  box-shadow: 2px 2px 2px 2px #ccc;\n  width: 90% !important;\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes example {\n  from {\n    top: 0px;\n  }\n  to {\n    top: 200px;\n    background-color: #fff;\n  }\n}\n\n@keyframes example {\n  from {\n    top: 0px;\n  }\n  to {\n    top: 200px;\n    background-color: #fff;\n  }\n}\n\nion-content {\n  background-color: #fff !important;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUFJSjs7QUFBQTtFQUNJLHdCQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtBQUdKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBR0U7RUFDRSxXQUFBO0FBQUo7O0FBRUU7RUFDRSxhQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0FBRUo7O0FBQ0U7RUFDRSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFFSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FBR0o7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBQUdKOztBQUFFO0VBQ0U7SUFBTSxRQUFBO0VBSVI7RUFIRTtJQUFJLFVBQUE7SUFBWSxzQkFBQTtFQU9sQjtBQUNGOztBQVZFO0VBQ0U7SUFBTSxRQUFBO0VBSVI7RUFIRTtJQUFJLFVBQUE7SUFBWSxzQkFBQTtFQU9sQjtBQUNGOztBQU5FO0VBQ0UsaUNBQUE7RUFLQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUhJO0VBQ0ksYUFBQTtBQUtSIiwiZmlsZSI6InRhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgY29sb3I6IzVDNUM1Qztcbn1cblxuLmNvc3R7XG4gICAgd2lkdGg6NTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOjE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFkZHByb2R1Y3QtYnRue1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OjM1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNjAwMDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNmZmY7XG4gICAgbWFyZ2luOjVweDtcbiAgICBjb2xvcjogI2ZmZjtcbn1cbiN1cGxvYWR7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkY2MDAwXG4gICAgO1xuICB9XG5cbiNvZmZlcjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2U5ZjNmZiAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IDAgMCAycHggIzhiOGQ5MTtcbiAgIFxuICB9XG5cbiAgI2tnLWRyb3Bkd29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogM2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICBcbiAgfVxuICAuc2VsZWN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogOTclO1xuICAgIGhlaWdodDogM2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICBcbiAgXG4gIH1cblxuICBzZWxlY3Q6cmVxdWlyZWQ6aW52YWxpZCB7XG4gICAgY29sb3I6IGdyYXk7XG4gIH1cbiAgb3B0aW9uW3ZhbHVlPVwiXCJdW2Rpc2FibGVkXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBvcHRpb24ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgLnN1Ym1pdC1idG57XG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6MzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY2MDAwO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcbiAgICBjb2xvcjojZmZmO1xuICAgIG1hcmdpbjo1cHg7XG4gIH1cbiAgXG4gICNvdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAjY2FyZHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBoZWlnaHQ6MTUwJTtcbiAgICB3aWR0aDoyNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNlYmU2ZTY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjY2NjO1xuICAgIG1hcmdpbi10b3A6IC0xNTBweCAhaW1wb3J0YW50O1xuICAgIFxuICB9XG4gICNtb2RhbHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB0b3A6MzUlO1xuICAgIG1hcmdpbjogMTBweDs7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNlYmU2ZTY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCAjY2NjO1xuICAgIHdpZHRoOjkwJSAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1uYW1lOiBleGFtcGxlO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7ICBcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICBcbiAgfVxuICBAa2V5ZnJhbWVzIGV4YW1wbGUge1xuICAgIGZyb20ge3RvcDogMHB4O31cbiAgICB0byB7dG9wOiAyMDBweDsgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjt9XG4gIH1cbiAgaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZcbiAgICAvLyAwJSwgI2QxZjJlN1xuICAgIC8vIDEwMCUpICFpbXBvcnRhbnQ7XG5cbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ 33889:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.component.html ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content >\n\n  <div  class=\"row mt-3\" >\n    <div class=\"col-4 items\">\n      <lottie-player  src=\"https://assets5.lottiefiles.com/packages/lf20_GZxjzF.json\" background=\"transparent\"\n      speed=\"1.5\" style=\"width:100%;margin-left:15px;\" loop autoplay></lottie-player>          \n    </div>\n    <div  class=\"col-4 items \" >\n      <lottie-player (click)=\"getPicture()\" src=\"https://assets2.lottiefiles.com/packages/lf20_b0shjbsq.json\" background=\"transparent\"\n      speed=\"1.5\" style=\"width:100%;margin-left:35px;\" loop autoplay></lottie-player>\n    </div>\n\n    <div  class=\"col-4 items ion-text-right\">\n      <p style=\"width:100%;margin-left:15px;\" >Gallery</p>         \n    </div>\n    <div  class=\"col-4 items ion-text-right\" >\n      <p style=\"width:100%;margin-left:25px;\">Upload</p>\n    </div>\n\n    <div>\n      <p style=\"font-size: 9px;color:red; text-align:center;\">Image will be uploaded after successful verification</p>\n    </div>\n\n  </div> \n</ion-content>\n");

/***/ }),

/***/ 64255:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"margin-top:15px;color:#fff\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n\n    <div class=\"row\">\n      <div class=\"col-5\">\n        <!-- <h4 style=\"color: #fff;margin-top:25px\">24hrs</h4> -->\n        <h5 style=\"color:#fff;margin-top:30px\">24HRS</h5>\n      </div>\n      <div class=\"col-7\" style=\"text-align: right;width: 90%;margin-top: -40px;\">\n        <svg style=\"margin:5px;text-align:right\" width=\"16\" height=\"20\" viewBox=\"0 0 16 20\" fill=\"none\"\n          xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n            d=\"M8.0002 0C7.11654 0 6.4002 0.716344 6.4002 1.6V1.80156C3.63963 2.51189 1.5998 5.01775 1.5998 8.00003V13.6H2C0.895431 13.6 0 14.4955 0 15.6V15.8C0 16.3523 0.447715 16.8 1 16.8H15C15.5523 16.8 16 16.3523 16 15.8V15.6C16 14.4955 15.1046 13.6 14 13.6H14.3998V8.00003C14.3998 5.01803 12.3604 2.51237 9.60019 1.80176V1.6C9.60019 0.716344 8.88385 0 8.0002 0ZM5.5998 17.6C5.5998 18.9255 6.67432 20 7.9998 20C9.32529 20 10.3998 18.9255 10.3998 17.6H5.5998Z\"\n            fill=\"white\" />\n        </svg>\n      </div>\n    </div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"bg-class\" [fullscreen]=\"true\">\n  <div class=\"container\">\n   \n    <div   class=\"signin-div mt-4 \">\n\n      <div class=\"row mt-3\" style=\"padding: 10px;\">\n        <div class=\"col-12\">\n          <h5 class=\"name  ion-text-center\" style=\"color:#676767;\" ><b>Add Your Product</b></h5>\n          <p class=\"name mt-2 ion-text-left\" style=\"color:hsl(0, 0%, 25%);\">Category :</p>\n        </div>\n\n        <div class=\"col-12 \">\n          <div class=\"select\" >\n            <select (change)=\"popupModelOpen()\" [(ngModel)]=\"Category\" placeholder=\"category\">\n              <option value=\"\"  >Select Your Category</option>\n              <option *ngFor=\"let cat of categoryList\" value=\"{{cat.category}}\">{{cat.category}}</option>\n              <option  style=\"background-color: #FF6000;\" value=\"1\">+ add new</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-12 mt-2\">\n          <div class=\"select\" >\n            <select (change)=\"popupModelOpen()\"  [(ngModel)]=\"subcategory\">\n              <option value=\"\" disabled selected>Select Your Subcategory</option>\n              <option *ngFor=\"let cat of categoryList\" value=\"{{cat.category}}\">{{cat.category}}</option>\n              <option  style=\"background-color:#FF6000;color:#fff;\" value=\"1\">+ add new</option>\n            </select>\n          </div>\n        </div>\n  \n          <div class=\"col-6 mt-3\">\n            <p  class=\"name\" style=\"color:#404040;\" >Product Name    :</p>\n          </div>\n          <div class=\"col-6 mt-2\">\n            <input [(ngModel)]=\"productname\" type=\"text\" placeholder=\"Onion\"  id=\"offer\" >\n        </div>\n\n        <div class=\"col-6\">\n          <p class=\"name\" style=\"color:#404040;\">Cost:</p>\n          <input [(ngModel)]=\"cost\" type=\"text\"  placeholder=\"100\" id=\"offer\" >\n        </div>\n        <div class=\"col-6\">\n          <div class=\"select mt-4\" id=\"kg-dropdwon\">\n            <select>\n              <option value=\"\" disabled selected> Kg/g</option> \n              <option class=\"option\" value=\"1\">Kg</option>\n              <option value=\"2\">G</option>\n              <option value=\"3\">L</option>\n              <option value=\"3\">ml</option>\n            </select>\n          </div>\n        </div>\n\n        <div class=\"col-6 mt-3\">\n          <p class=\"name\" style=\"color:#404040;\">Product picture:</p>\n        </div>\n        <div class=\"col-6 mt-3\">\n          <svg style=\"margin:10px;cursor:pointer;\" (click)=\"upload()\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#FF6000\" class=\"bi bi-upload\" viewBox=\"0 0 16 16\">\n            <path d=\"M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z\"/>\n            <path d=\"M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z\"/>\n          </svg>\n        </div>\n      </div>\n      \n      <div class=\"form-group \">\n        <label style=\"color:#404040;\" for=\"exampleFormControlTextarea1\">Product Description :</label>\n        <textarea [(ngModel)]=\"description\" style=\"background-color: #fff;\" class=\"form-control\" id=\"exampleFormControlTextarea1\"\n          rows=\"3\"></textarea>\n      </div>\n\n      <div style=\"width:100%; text-align: center;\">\n        <button (click)=\"addToProduct()\" type=\"button\" class=\"btn btn-primary  addproduct-btn mt-2\">Add Product </button>\n      </div>\n    </div>\n  </div>\n\n    <div class=\"card\" *ngIf=\"PopupModel\"  style=\"margin-top: 20px;\"  id=\"card\">\n      <div class=\"row\"  id=\"modal\">\n  \n        <div class=\"col-12 ion-text-left \" style=\"margin-top: 20px;\">\n          <svg (click)=\"backToprivious()\" style=\"color: black;margin-top:-8px;cursor:pointer\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#FF6000\" class=\"bi bi-arrow-left\" viewBox=\"0 0 16 16\">\n            <path fill-rule=\"evenodd\" d=\"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z\"/>\n          </svg>\n        </div>\n        <div class=\"col-12\">\n          <h5 class=\"name  ion-text-center\" style=\"color:#676767;\" ><b>Type Your Category Name</b></h5>\n        </div>\n        <div class=\"col-12\">\n          <input [(ngModel)]=\"categoryName\" type=\"text\">\n        </div>\n\n        <div style=\"width:100%; text-align: center;\">\n          <button type=\"button\" (click)=\"createCategory()\" class=\"btn btn-primary  submit-btn mt-2\">Submit</button>\n        </div>\n      </div>\n    </div>  \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts-es2015.js.map