(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasm_game_of_life.js":
/*!***********************************!*\
  !*** ../pkg/wasm_game_of_life.js ***!
  \***********************************/
/*! exports provided: __wbg_set_wasm, greet, Cell, Pattern, Universe, __wbg_alert_d3b6e8db27c82dfa, __wbg_new_abda76e883ba8a5f, __wbg_stack_658279fe44541cf6, __wbg_error_f851667af71bcfc6, __wbindgen_object_drop_ref, __wbg_random_afb3265527cf67c8, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_game_of_life_bg.wasm */ \"../pkg/wasm_game_of_life_bg.wasm\");\n/* harmony import */ var _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_game_of_life_bg.js */ \"../pkg/wasm_game_of_life_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"greet\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Pattern\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Pattern\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_d3b6e8db27c82dfa\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_alert_d3b6e8db27c82dfa\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_abda76e883ba8a5f\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_new_abda76e883ba8a5f\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_658279fe44541cf6\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_stack_658279fe44541cf6\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_f851667af71bcfc6\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_error_f851667af71bcfc6\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_object_drop_ref\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_afb3265527cf67c8\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_random_afb3265527cf67c8\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\nObject(_wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"])(_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life.js?");

/***/ }),

/***/ "../pkg/wasm_game_of_life_bg.js":
/*!**************************************!*\
  !*** ../pkg/wasm_game_of_life_bg.js ***!
  \**************************************/
/*! exports provided: __wbg_set_wasm, greet, Cell, Pattern, Universe, __wbg_alert_d3b6e8db27c82dfa, __wbg_new_abda76e883ba8a5f, __wbg_stack_658279fe44541cf6, __wbg_error_f851667af71bcfc6, __wbindgen_object_drop_ref, __wbg_random_afb3265527cf67c8, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return __wbg_set_wasm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cell\", function() { return Cell; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pattern\", function() { return Pattern; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_d3b6e8db27c82dfa\", function() { return __wbg_alert_d3b6e8db27c82dfa; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_abda76e883ba8a5f\", function() { return __wbg_new_abda76e883ba8a5f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_658279fe44541cf6\", function() { return __wbg_stack_658279fe44541cf6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_f851667af71bcfc6\", function() { return __wbg_error_f851667af71bcfc6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_random_afb3265527cf67c8\", function() { return __wbg_random_afb3265527cf67c8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst heap = new Array(128).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 132) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n* @param {string} name\n*/\nfunction greet(name) {\n    const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n    const len0 = WASM_VECTOR_LEN;\n    wasm.greet(ptr0, len0);\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nlet cachedInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }\n/**\n*/\nconst Cell = Object.freeze({ Dead:0,\"0\":\"Dead\",Alive:1,\"1\":\"Alive\", });\n/**\n*/\nconst Pattern = Object.freeze({ Glider:0,\"0\":\"Glider\",Pulsar:1,\"1\":\"Pulsar\", });\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_universe_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    nrows() {\n        const ret = wasm.universe_nrows(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    ncols() {\n        const ret = wasm.universe_ncols(this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    state() {\n        const ret = wasm.universe_state(this.ptr);\n        return ret;\n    }\n    /**\n    */\n    clear() {\n        wasm.universe_clear(this.ptr);\n    }\n    /**\n    * @param {number} p\n    */\n    randomize(p) {\n        wasm.universe_randomize(this.ptr, p);\n    }\n    /**\n    * @param {number} row\n    * @param {number} col\n    */\n    toggle_cell(row, col) {\n        wasm.universe_toggle_cell(this.ptr, row, col);\n    }\n    /**\n    * @param {number} pattern\n    * @param {number} row_center\n    * @param {number} col_center\n    */\n    add_pattern(pattern, row_center, col_center) {\n        wasm.universe_add_pattern(this.ptr, pattern, row_center, col_center);\n    }\n    /**\n    */\n    tick() {\n        wasm.universe_tick(this.ptr);\n    }\n    /**\n    * @param {number} nrows\n    * @param {number} ncols\n    * @param {number | undefined} cell_state\n    * @returns {Universe}\n    */\n    static new(nrows, ncols, cell_state) {\n        const ret = wasm.universe_new(nrows, ncols, isLikeNone(cell_state) ? 2 : cell_state);\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @returns {string}\n    */\n    render() {\n        try {\n            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n            wasm.universe_render(retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            wasm.__wbindgen_add_to_stack_pointer(16);\n            wasm.__wbindgen_free(r0, r1);\n        }\n    }\n}\n\nfunction __wbg_alert_d3b6e8db27c82dfa(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbg_new_abda76e883ba8a5f() {\n    const ret = new Error();\n    return addHeapObject(ret);\n};\n\nfunction __wbg_stack_658279fe44541cf6(arg0, arg1) {\n    const ret = getObject(arg1).stack;\n    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n    const len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nfunction __wbg_error_f851667af71bcfc6(arg0, arg1) {\n    try {\n        console.error(getStringFromWasm0(arg0, arg1));\n    } finally {\n        wasm.__wbindgen_free(arg0, arg1);\n    }\n};\n\nfunction __wbindgen_object_drop_ref(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbg_random_afb3265527cf67c8 = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life_bg.js?");

/***/ }),

/***/ "../pkg/wasm_game_of_life_bg.wasm":
/*!****************************************!*\
  !*** ../pkg/wasm_game_of_life_bg.wasm ***!
  \****************************************/
/*! exports provided: memory, greet, __wbg_universe_free, universe_nrows, universe_ncols, universe_state, universe_clear, universe_randomize, universe_toggle_cell, universe_add_pattern, universe_tick, universe_new, universe_render, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_add_to_stack_pointer, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_game_of_life_bg.js */ \"../pkg/wasm_game_of_life_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_game_of_life_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_game_of_life_wasm_game_of_life_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-game-of-life/wasm_game_of_life_bg */ \"../pkg/wasm_game_of_life_bg.wasm\");\n/* harmony import */ var wasm_game_of_life__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wasm-game-of-life */ \"../pkg/wasm_game_of_life.js\");\n\n\n\n// Construct universe\nconst nrows = 206;\nconst ncols = 128;\nconst universe = wasm_game_of_life__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"].new(nrows, ncols);\n\n// Some aesthetics\nconst CELL_SIZE = 7; // px\nconst GRID_COLOR = \"#303030\";\nconst ALIVE_COLOR = \"#ffffff\";\nconst DEAD_COLOR = \"#000000\";\n\n// Create canvas\nconst canvas = document.getElementById(\"game-of-life-canvas\");\ncanvas.height = (CELL_SIZE + 1) * nrows + 1;\ncanvas.width = (CELL_SIZE + 1) * ncols + 1;\n\nconst ctx = canvas.getContext('2d');\n\nconst drawGrid = () => {\n    ctx.beginPath();\n    ctx.strokeStyle = GRID_COLOR;\n\n    // Vertical lines.\n    for (let i = 0; i <= ncols; i++) {\n        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);\n        ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * nrows + 1);\n    }\n\n    // Horizontal lines.\n    for (let j = 0; j <= nrows; j++) {\n        ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);\n        ctx.lineTo((CELL_SIZE + 1) * nrows + 1, j * (CELL_SIZE + 1) + 1);\n    }\n\n    ctx.stroke();\n};\n\nconst getIndex = (row, col) => {\n    return row * ncols + col;\n};\n\nconst drawCells = () => {\n    const statePtr = universe.state();\n    const state = new Uint8Array(wasm_game_of_life_wasm_game_of_life_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer, statePtr, nrows * ncols);\n\n    ctx.beginPath();\n\n    for (let row = 0; row < nrows; row++) {\n        for (let col = 0; col < ncols; col++) {\n            const idx = getIndex(row, col);\n\n            ctx.fillStyle = state[idx] === wasm_game_of_life__WEBPACK_IMPORTED_MODULE_1__[\"Cell\"].Dead\n                ? DEAD_COLOR\n                : ALIVE_COLOR;\n\n            ctx.fillRect(\n                col * (CELL_SIZE + 1) + 1,\n                row * (CELL_SIZE + 1) + 1,\n                CELL_SIZE,\n                CELL_SIZE\n            );\n        }\n    }\n\n    ctx.stroke();\n};\n\n// We keep track fo the identifier returned by the `requestAnimationFrame`\nlet animationId = null;\n\n// Tell if the animation is paused\nconst isPaused = () => {\n    return animationId == null;\n}\n\n// Recursive loop to render\nconst renderLoop = () => {\n\n    universe.tick();\n\n    drawCells();\n\n    animationId = requestAnimationFrame(renderLoop);\n};\n\n// Play/Pause button\nconst playPauseButton = document.getElementById(\"play-pause-button\");\n\n// Play action\nconst play = () => {\n    playPauseButton.textContent = \"⏸\";\n    renderLoop();\n};\n\n// Pause action\nconst pause = () => {\n    playPauseButton.textContent = \"▶\";\n    cancelAnimationFrame(animationId);\n    animationId = null;\n};\n\n// On click event\nplayPauseButton.addEventListener(\"click\", event => {\n    if (isPaused()) {\n        play();\n    } else {\n        pause();\n    }\n});\n\n// Probability slider\nconst pSlider = document.getElementById(\"pSlider\");\nconst pValue = document.getElementById(\"pValue\");\npValue.textContent = pSlider.value;\npSlider.addEventListener(\"input\", (event) => {\n    pValue.textContent = event.target.value\n    universe.randomize(pSlider.value)\n});\n\n// Randomize button\nconst randomizeButton = document.getElementById(\"randomize-button\");\nrandomizeButton.textContent = \"Random\";\nrandomizeButton.addEventListener(\"click\", event => {\n    universe.randomize(pSlider.value);\n    drawCells();\n});\n\n// Clear button\nconst clearButton = document.getElementById(\"clear-button\");\nclearButton.textContent = \"Clear\"\nclearButton.addEventListener(\"click\", event => {\n    universe.clear();\n    drawCells();\n});\n\n// Click on canvas to toggle cell\ncanvas.addEventListener(\"click\", event => {\n\n    const boundingRect = canvas.getBoundingClientRect();\n\n    const scaleX = canvas.width / boundingRect.width;\n    const scaleY = canvas.height / boundingRect.height;\n\n    const canvasLeft = (event.clientX - boundingRect.left) * scaleX;\n    const canvasTop = (event.clientY - boundingRect.top) * scaleY;\n\n    const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), nrows - 1);\n    const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), ncols - 1);\n\n    if (event.ctrlKey) {\n\n        universe.add_pattern(wasm_game_of_life__WEBPACK_IMPORTED_MODULE_1__[\"Pattern\"].Glider, row, col);\n\n    } else if (event.shiftKey) {\n\n        universe.add_pattern(wasm_game_of_life__WEBPACK_IMPORTED_MODULE_1__[\"Pattern\"].Pulsar, row, col);\n\n    } else {\n\n        universe.toggle_cell(row, col);\n\n    }\n\n    drawCells();\n});\n\n// Set initial state\nfunction init() {\n\n\n    // Start paused\n    pause();\n\n    // Initial conditions\n    pSlider.value = 0.5\n    universe.randomize(pSlider.value);\n\n    // Initial draw\n    drawGrid();\n    drawCells();\n\n\n    play();\n\n}\n\ninit();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);