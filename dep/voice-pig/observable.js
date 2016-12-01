define(['require'], function (require) {
    var observe = {
        on: function (type, listener) {
            if (typeof type === 'function') {
                listener = type;
                type = '*';
            }
            this._listeners = this._listeners || {};
            var listeners = this._listeners[type] || [];
            if (listeners.indexOf(listener) < 0) {
                listener.$type = type;
                listeners.push(listener);
            }
            this._listeners[type] = listeners;
            return this;
        },
        once: function (type, listener) {
            var onceFn = function (e) {
                listener.call(this, e);
                this.un(type, listener);
            };
            this.on(type, onceFn);
            return this;
        },
        un: function (type, listener) {
            if (typeof type === 'function') {
                listener = type;
                type = '*';
            } else if (typeof type === 'undefined') {
                delete this._listeners;
                this._listeners = {};
                return this;
            }
            this._listeners = this._listeners || {};
            var listeners = this._listeners[type];
            if (listeners) {
                if (listener) {
                    var index = listeners.indexOf(listener);
                    if (~index) {
                        delete listeners[index];
                    }
                } else {
                    listeners.length = 0;
                    delete this._listeners[type];
                }
            }
            return this;
        },
        fire: function (type, args) {
            this._listeners = this._listeners || {};
            var listeners = this._listeners[type];
            if (listeners) {
                var me = this;
                listeners.forEach(function (listener) {
                    args = args || {};
                    args.type = type;
                    listener.call(me, args);
                });
            }
            if (type !== '*') {
                this.fire('*', args);
            }
            return this;
        }
    };
    var observable = {
        mixin: function (object) {
            if (undefined === object) {
                return object;
            }
            return $.extend(object, observe);
        }
    };
    return observable;
});