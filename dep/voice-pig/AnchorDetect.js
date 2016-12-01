define(['require'], function (require) {
    function bind(object, method) {
        var fn = object[method];
        object[method] = function () {
            fn.apply(object, arguments);
        };
        return object;
    }
    function getScrollTop() {
        return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
    }
    function AnchorDetect(options) {
        options = options || {};
        this.main = options.main || window;
        this.throttle = options.throttle || 50;
        this.triggerRange = options.triggerRange || 400;
        this.selector = options.selector || '[data-anchor]';
        this.anchorOffset = options.anchorOffset || 0;
        $.extend(this, options);
        bind(this, '_onScroll');
        bind(this, '_scrollChange');
        this.init();
    }
    AnchorDetect.getScrollTop = getScrollTop;
    $.extend(AnchorDetect.prototype, {
        _scrollChange: function () {
            var top = 0;
            if (this.main === window) {
                top = getScrollTop();
            } else {
                top = this.main.scrollTop;
            }
            this.onScrollChange && this.onScrollChange({
                top: top,
                target: this.main[0]
            });
            var anchorPos = this.anchorPos;
            var i = anchorPos.length;
            while (--i && top < anchorPos[i][0]) {
            }
            if (top + this.triggerRange < anchorPos[i][0]) {
                return;
            }
            if (this.lastIndex === anchorPos[i][1]) {
                return;
            }
            var index = anchorPos[i][1];
            var current = this.anchors[index];
            this.onAnchorChange && this.onAnchorChange({
                top: top,
                target: current[0],
                anchor: current.attr('data-anchor')
            });
            this.lastIndex = index;
        },
        _onScroll: function () {
            clearTimeout(this.scrollTimer);
            this.scrollTimer = setTimeout(this._scrollChange, this.throttle);
        },
        init: function () {
            var anchors = [];
            var main = this.main === window ? document.body : this.main;
            $(main).find(this.selector).each(function (index, item) {
                anchors[index] = $(item);
            });
            this.anchors = anchors;
            if (this.anchors.length) {
                this.refresh();
                this.start();
            }
        },
        onScrollChange: null,
        onAnchorChange: null,
        getAnchorPos: function (anchor) {
            return anchor.offset().top + this.anchorOffset;
        },
        refresh: function () {
            var me = this;
            var anchorPos = [];
            var i = 0;
            $(this.anchors).each(function (index, item) {
                if ('none' !== item.css('display')) {
                    anchorPos[i++] = [
                        me.getAnchorPos(item),
                        index
                    ];
                }
            });
            this.anchorPos = anchorPos.sort(function (a, b) {
                return a[0] - b[0];
            });
        },
        start: function () {
            if (!this._binded) {
                $(this.main).on('scroll', this._onScroll);
                this._binded = true;
            }
            return this;
        },
        stop: function () {
            clearTimeout(this.scrollTimer);
            if (this._binded) {
                $(this.main).off('scroll', this._onScroll);
                this._binded = false;
            }
            return this;
        },
        check: function () {
            this._scrollChange();
        },
        dispose: function () {
            clearTimeout(this.scrollTimer);
            $(this.main).off('scroll', this._onScroll);
            this.anchors = null;
            this.anchorPos = null;
            this.main = null;
        }
    });
    return AnchorDetect;
});