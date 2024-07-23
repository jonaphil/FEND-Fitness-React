var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useState } from "react";
export default function usePopup(message, options) {
    if (message === void 0) { message = undefined; }
    if (options === void 0) { options = undefined; }
    var _a = useState({
        show: false,
        message: message,
        options: options ? __spreadArray([], options, true) : undefined,
    }), popUp = _a[0], setPopUp = _a[1];
    var toggle = function () {
        setPopUp(function (prevState) {
            return __assign(__assign({}, prevState), { show: prevState.show ? false : true });
        });
    };
    var show = function () {
        setPopUp(__assign(__assign({}, popUp), { show: true }));
    };
    var hide = function () {
        setPopUp(__assign(__assign({}, popUp), { show: false }));
    };
    var setObject = function (Obj) {
        setPopUp(__assign(__assign({}, Obj), { show: false }));
    };
    var Component = function () {
        return (<div className="align-center absolute flex h-screen w-screen flex-col justify-center bg-black opacity-35">
        <div className="rounded-xl bg-dmedium p-8">
          <p>{popUp.message}</p>
          <div className="flex flex-row gap-4">
            {popUp.options.map(function (option) {
                return (<button className="rounded-full bg-ddark px-4 py-2" onClick={option.action}>
                  {option.name}
                </button>);
            })}
          </div>
        </div>
      </div>);
    };
    return {
        data: {
            Component: Component,
            show: popUp.show,
        },
        set: { toggle: toggle, show: show, hide: hide, object: setObject },
    };
}
