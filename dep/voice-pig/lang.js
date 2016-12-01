define(['require'], function (require) {
    var exports = {};
    exports.throttle = function (func, wait) {
        var context;
        var args;
        var timeout;
        var result;
        var previous = 0;
        var later = function () {
            previous = new Date();
            timeout = null;
            result = func.apply(context, args);
        };
        return function () {
            var now = new Date();
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
            } else if (!timeout) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    };
    exports.debounce = function (func, wait, immediate) {
        var timeout;
        var result;
        return function () {
            var context = this;
            var args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) {
                    result = func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) {
                result = func.apply(context, args);
            }
            return result;
        };
    };
    return exports;
});