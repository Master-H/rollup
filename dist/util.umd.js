(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.util = {}));
})(this, (function (exports) { 'use strict';

    const add = () => {
        console.log('add');
    };

    const isArray = () => {
        console.log('array');
        
    };

    exports.add = add;
    exports.isArray = isArray;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=util.umd.js.map
