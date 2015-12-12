 // CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

/*  SWFObject v2.2 <http://code.google.com/p/swfobject/>
    is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */

function initVoicePostion(e) {
    function t() {
        e.length > 0 && e.css({left: ($(window).width() - e.width()) / 2,top: ($(window).height() - e.height()) / 2})
    }
    t(), $(window).unbind("resize", t), $(window).on("resize", t)
}
define("common/widget/tab/tab", ["require"], function(e) {
    function t(e) {
        this.obj = e, this.index = 0
    }
    return $.extend(t.prototype, {init: function(e) {
            e !== null && this.initSel(e), this.obj.selAttr ? this.selId = this.obj.tit.filter(".cur").attr(this.obj.selAttr) : this.index = this.obj.tit.filter(".cur").index(), this.selCon()
        },initSel: function(e) {
            var t = null, n = null;
            e !== null && (this.obj.selAttr ? (this.selAttr(e), t = this.obj.tit.filter("[" + this.obj.selAttr + "=" + e + "]"), n = this.obj.con.filter("." + this.obj.selAttr + "-con-" + e)) : (this.selN(e), t = this.obj.tit.eq(e), n = this.obj.con.eq(e))), this.obj.callback && this.obj.callback(t, n)
        },selCon: function() {
            var e = this.obj.eve || "click", t = this, n = null;
            this.obj.tit.on(e, function() {
                var e = $(this);
                t.obj.selAttr ? t.selId !== e.attr(t.obj.selAttr) && (t.selAttr(e.attr(t.obj.selAttr)), t.selId = e.attr(t.obj.selAttr), n = t.obj.con.filter("." + t.obj.selAttr + "-con-" + t.selId)) : t.index !== e.index() && (t.selN(e.index()), t.index = e.index(), n = t.obj.con.eq(t.index)), t.obj.callback && n && t.obj.callback(e, n)
            })
        },selN: function(e) {
            this.obj.tit.removeClass("cur").eq(e).addClass("cur"), this.obj.con.addClass("dsn").eq(e).removeClass("dsn")
        },selAttr: function(e) {
            this.obj.tit.removeClass("cur").filter("[" + this.obj.selAttr + "=" + e + "]").addClass("cur"), this.obj.con.addClass("dsn").filter("." + this.obj.selAttr + "-con-" + e).removeClass("dsn")
        }}), t
}), define("common/widget/fixtop/fixtop", ["require"], function(e) {
    function t(e) {
        this.obj = e, this._src = e.src, this.init()
    }
    return $.extend(t.prototype, {init: function() {
            this.bindEvent()
        },bindEvent: function() {
            var e = this, t = this._src.offset().top;
            this._src.attr("data-offset-top", t), $(window).on("scroll", function() {
                e.diff()
            })
        },createSpace: function() {
            this._space || (this._space = $("<div></div>").css({width: this._src.width() + "px",height: this._src.height() + "px",overflow: "hidden"}), this._src.after(this._space))
        },diff: function() {
            var e = this._src.attr("data-offset-top"), t = $(window).scrollTop();
            e < t ? this._src.attr("fixed") !== "1" && (this.createSpace(), this._src.css({position: "fixed",top: "0px",zIndex: 1}), this.obj.fixedCallback && this.obj.fixedCallback(), this._src.attr("fixed", 1)) : this._src.attr("fixed") !== "0" && (this._space && (this._space.remove(), this._space = null), this._src.css({position: "",top: e + "px"}), this.obj.callback && this.obj.callback(), this._src.attr("fixed", 0))
        }}), t
}), define("common/widget/lazyload/scrollload", ["require"], function(e) {
    function t() {
        this.oImg = $("img[data-src]")
    }
    return $.extend(t.prototype, {init: function() {
            this.checkImgPos(), this.scrollGetImg()
        },scrollGetImg: function() {
            $(window).on("scroll", $.proxy(this.showImgs, this))
        },checkImgPos: function() {
            var e = $(window).scrollTop(), t = $(window).height(), n = e + t, r = this;
            this.oImg.each(function() {
                var t = $(this), i = t.offset().top, s = i + t.height();
                i > 0 && (i >= e && i <= n || s >= e && s <= n) && r.setImgSrc(t)
            })
        },showImgs: function() {
            var e = this;
            this.oImg.each(function() {
                e.setImgSrc($(this))
            }), $(window).off("scroll", this.setImgSrc)
        },setImgSrc: function(e) {
            e.attr("data-loaded") || (e.attr("src", e.attr("data-src")), e.removeAttr("data-src"), e.attr("data-loaded", 1))
        }}), t
}), function(e) {
    if (typeof exports == "object" && typeof module == "object")
        module.exports = e();
    else {
        if (typeof define == "function" && define.amd)
            return define("CodeMirror", [], e);
        this.CodeMirror = e()
    }
}(function() {
    function S(e, t) {
        if (!(this instanceof S))
            return new S(e, t);
        this.options = t = t ? Qo(t) : {}, Qo(mi, t, !1), H(t);
        var n = t.value;
        typeof n == "string" && (n = new Ws(n, t.mode)), this.doc = n;
        var s = this.display = new x(e, n);
        s.wrapper.CodeMirror = this, M(this), A(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), t.autofocus && !d && or(this), I(this), this.state = {keyMaps: [],overlays: [],modeGen: 0,overwrite: !1,focused: !1,suppressEdits: !1,pasteIncoming: !1,cutIncoming: !1,draggingText: !1,highlight: new qo,keySeq: null}, r && i < 11 && setTimeout(Go(sr, this, !0), 20), fr(this), mu(), Dn(this), this.curOp.forceUpdate = !0, Js(this, n), t.autofocus && !d || fu() == s.input ? setTimeout(Go(Rr, this), 20) : Ur(this);
        for (var o in gi)
            gi.hasOwnProperty(o) && gi[o](this, t[o], bi);
        W(this);
        for (var u = 0; u < xi.length; ++u)
            xi[u](this);
        Hn(this)
    }
    function x(e, t) {
        var n = this, o = n.input = iu("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none");
        s ? o.style.width = "1000px" : o.setAttribute("wrap", "off"), p && (o.style.border = "1px solid black"), o.setAttribute("autocorrect", "off"), o.setAttribute("autocapitalize", "off"), o.setAttribute("spellcheck", "false"), n.inputDiv = iu("div", [o], null, "overflow: hidden; position: relative; width: 3px; height: 0px;"), n.scrollbarFiller = iu("div", null, "CodeMirror-scrollbar-filler"), n.scrollbarFiller.setAttribute("not-content", "true"), n.gutterFiller = iu("div", null, "CodeMirror-gutter-filler"), n.gutterFiller.setAttribute("not-content", "true"), n.lineDiv = iu("div", null, "CodeMirror-code"), n.selectionDiv = iu("div", null, null, "position: relative; z-index: 1"), n.cursorDiv = iu("div", null, "CodeMirror-cursors"), n.measure = iu("div", null, "CodeMirror-measure"), n.lineMeasure = iu("div", null, "CodeMirror-measure"), n.lineSpace = iu("div", [n.measure, n.lineMeasure, n.selectionDiv, n.cursorDiv, n.lineDiv], null, "position: relative; outline: none"), n.mover = iu("div", [iu("div", [n.lineSpace], "CodeMirror-lines")], null, "position: relative"), n.sizer = iu("div", [n.mover], "CodeMirror-sizer"), n.sizerWidth = null, n.heightForcer = iu("div", null, null, "position: absolute; height: " + Ho + "px; width: 1px;"), n.gutters = iu("div", null, "CodeMirror-gutters"), n.lineGutter = null, n.scroller = iu("div", [n.sizer, n.heightForcer, n.gutters], "CodeMirror-scroll"), n.scroller.setAttribute("tabIndex", "-1"), n.wrapper = iu("div", [n.inputDiv, n.scrollbarFiller, n.gutterFiller, n.scroller], "CodeMirror"), r && i < 8 && (n.gutters.style.zIndex = -1, n.scroller.style.paddingRight = 0), p && (o.style.width = "0px"), s || (n.scroller.draggable = !0), l && (n.inputDiv.style.height = "1px", n.inputDiv.style.position = "absolute"), e && (e.appendChild ? e.appendChild(n.wrapper) : e(n.wrapper)), n.viewFrom = n.viewTo = t.first, n.reportedViewFrom = n.reportedViewTo = t.first, n.view = [], n.renderedView = null, n.externalMeasured = null, n.viewOffset = 0, n.lastWrapHeight = n.lastWrapWidth = 0, n.updateLineNumbers = null, n.nativeBarWidth = n.barHeight = n.barWidth = 0, n.scrollbarsClipped = !1, n.lineNumWidth = n.lineNumInnerWidth = n.lineNumChars = null, n.prevInput = "", n.alignWidgets = !1, n.pollingFast = !1, n.poll = new qo, n.cachedCharWidth = n.cachedTextHeight = n.cachedPaddingH = null, n.inaccurateSelection = !1, n.maxLine = null, n.maxLineLength = 0, n.maxLineChanged = !1, n.wheelDX = n.wheelDY = n.wheelStartX = n.wheelStartY = null, n.shift = !1, n.selForContextMenu = null
    }
    function T(e) {
        e.doc.mode = S.getMode(e.options, e.doc.modeOption), N(e)
    }
    function N(e) {
        e.doc.iter(function(e) {
            e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null)
        }), e.doc.frontier = e.doc.first, Jt(e, 100), e.state.modeGen++, e.curOp && Jn(e)
    }
    function C(e) {
        e.options.lineWrapping ? (hu(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (cu(e.display.wrapper, "CodeMirror-wrap"), P(e)), L(e), Jn(e), gn(e), setTimeout(function() {
            q(e)
        }, 100)
    }
    function k(e) {
        var t = An(e.display), n = e.options.lineWrapping, r = n && Math.max(5, e.display.scroller.clientWidth / On(e.display) - 3);
        return function(i) {
            if (hs(e.doc, i))
                return 0;
            var s = 0;
            if (i.widgets)
                for (var o = 0; o < i.widgets.length; o++)
                    i.widgets[o].height && (s += i.widgets[o].height);
            return n ? s + (Math.ceil(i.text.length / r) || 1) * t : s + t
        }
    }
    function L(e) {
        var t = e.doc, n = k(e);
        t.iter(function(e) {
            var t = n(e);
            t != e.height && Ys(e, t)
        })
    }
    function A(e) {
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), gn(e)
    }
    function O(e) {
        M(e), Jn(e), setTimeout(function() {
            z(e)
        }, 20)
    }
    function M(e) {
        var t = e.display.gutters, n = e.options.gutters;
        ou(t);
        for (var r = 0; r < n.length; ++r) {
            var i = n[r], s = t.appendChild(iu("div", null, "CodeMirror-gutter " + i));
            i == "CodeMirror-linenumbers" && (e.display.lineGutter = s, s.style.width = (e.display.lineNumWidth || 1) + "px")
        }
        t.style.display = r ? "" : "none", _(e)
    }
    function _(e) {
        var t = e.display.gutters.offsetWidth;
        e.display.sizer.style.marginLeft = t + "px"
    }
    function D(e) {
        if (e.height == 0)
            return 0;
        var t = e.text.length, n, r = e;
        while (n = ss(r)) {
            var i = n.find(0, !0);
            r = i.from.line, t += i.from.ch - i.to.ch
        }
        r = e;
        while (n = os(r)) {
            var i = n.find(0, !0);
            t -= r.text.length - i.from.ch, r = i.to.line, t += r.text.length - i.to.ch
        }
        return t
    }
    function P(e) {
        var t = e.display, n = e.doc;
        t.maxLine = Ks(n, n.first), t.maxLineLength = D(t.maxLine), t.maxLineChanged = !0, n.iter(function(e) {
            var n = D(e);
            n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e)
        })
    }
    function H(e) {
        var t = $o(e.gutters, "CodeMirror-linenumbers");
        t == -1 && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0), e.gutters.splice(t, 1))
    }
    function B(e) {
        var t = e.display, n = t.gutters.offsetWidth, r = Math.round(e.doc.height + Zt(e.display));
        return {clientHeight: t.scroller.clientHeight,viewHeight: t.wrapper.clientHeight,scrollWidth: t.scroller.scrollWidth,clientWidth: t.scroller.clientWidth,viewWidth: t.wrapper.clientWidth,barLeft: e.options.fixedGutter ? n : 0,docHeight: r,scrollHeight: r + tn(e) + t.barHeight,nativeBarWidth: t.nativeBarWidth,gutterWidth: n}
    }
    function j(e, t, n) {
        this.cm = n;
        var s = this.vert = iu("div", [iu("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"), o = this.horiz = iu("div", [iu("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        e(s), e(o), No(s, "scroll", function() {
            s.clientHeight && t(s.scrollTop, "vertical")
        }), No(o, "scroll", function() {
            o.clientWidth && t(o.scrollLeft, "horizontal")
        }), this.checkedOverlay = !1, r && i < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
    }
    function F() {
    }
    function I(e) {
        e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && cu(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new S.scrollbarModel[e.options.scrollbarStyle](function(t) {
            e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), No(t, "mousedown", function() {
                e.state.focused && setTimeout(Go(or, e), 0)
            }), t.setAttribute("not-content", "true")
        }, function(t, n) {
            n == "horizontal" ? Nr(e, t) : Tr(e, t)
        }, e), e.display.scrollbars.addClass && hu(e.display.wrapper, e.display.scrollbars.addClass)
    }
    function q(e, t) {
        t || (t = B(e));
        var n = e.display.barWidth, r = e.display.barHeight;
        R(e, t);
        for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++)
            n != e.display.barWidth && e.options.lineWrapping && Z(e), R(e, B(e)), n = e.display.barWidth, r = e.display.barHeight
    }
    function R(e, t) {
        var n = e.display, r = n.scrollbars.update(t);
        n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = ""
    }
    function U(e, t, n) {
        var r = n && n.top != null ? Math.max(0, n.top) : e.scroller.scrollTop;
        r = Math.floor(r - Yt(e));
        var i = n && n.bottom != null ? n.bottom : r + e.wrapper.clientHeight, s = eo(t, r), o = eo(t, i);
        if (n && n.ensure) {
            var u = n.ensure.from.line, a = n.ensure.to.line;
            u < s ? (s = u, o = eo(t, to(Ks(t, u)) + e.wrapper.clientHeight)) : Math.min(a, t.lastLine()) >= o && (s = eo(t, to(Ks(t, a)) - e.wrapper.clientHeight), o = a)
        }
        return {from: s,to: Math.max(o, s + 1)}
    }
    function z(e) {
        var t = e.display, n = t.view;
        if (!t.alignWidgets && (!t.gutters.firstChild || !e.options.fixedGutter))
            return;
        var r = V(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, s = r + "px";
        for (var o = 0; o < n.length; o++)
            if (!n[o].hidden) {
                e.options.fixedGutter && n[o].gutter && (n[o].gutter.style.left = s);
                var u = n[o].alignable;
                if (u)
                    for (var a = 0; a < u.length; a++)
                        u[a].style.left = s
            }
        e.options.fixedGutter && (t.gutters.style.left = r + i + "px")
    }
    function W(e) {
        if (!e.options.lineNumbers)
            return !1;
        var t = e.doc, n = X(e.options, t.first + t.size - 1), r = e.display;
        if (n.length != r.lineNumChars) {
            var i = r.measure.appendChild(iu("div", [iu("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt")), s = i.firstChild.offsetWidth, o = i.offsetWidth - s;
            return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(s, r.lineGutter.offsetWidth - o), r.lineNumWidth = r.lineNumInnerWidth + o, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", _(e), !0
        }
        return !1
    }
    function X(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber))
    }
    function V(e) {
        return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
    }
    function $(e, t, n) {
        var r = e.display;
        this.viewport = t, this.visible = U(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = nn(e), this.force = n, this.dims = tt(e)
    }
    function J(e) {
        var t = e.display;
        !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = tn(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = tn(e) + "px", t.scrollbarsClipped = !0)
    }
    function K(e, t) {
        var n = e.display, r = e.doc;
        if (t.editorIsHidden)
            return Qn(e), !1;
        if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && er(e) == 0)
            return !1;
        W(e) && (Qn(e), t.dims = tt(e));
        var i = r.first + r.size, s = Math.max(t.visible.from - e.options.viewportMargin, r.first), o = Math.min(i, t.visible.to + e.options.viewportMargin);
        n.viewFrom < s && s - n.viewFrom < 20 && (s = Math.max(r.first, n.viewFrom)), n.viewTo > o && n.viewTo - o < 20 && (o = Math.min(i, n.viewTo)), E && (s = ls(e.doc, s), o = cs(e.doc, o));
        var u = s != n.viewFrom || o != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
        Zn(e, s, o), n.viewOffset = to(Ks(e.doc, n.viewFrom)), e.display.mover.style.top = n.viewOffset + "px";
        var a = er(e);
        if (!u && a == 0 && !t.force && n.renderedView == n.view && (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo))
            return !1;
        var f = fu();
        return a > 4 && (n.lineDiv.style.display = "none"), nt(e, n.updateLineNumbers, t.dims), a > 4 && (n.lineDiv.style.display = ""), n.renderedView = n.view, f && fu() != f && f.offsetHeight && f.focus(), ou(n.cursorDiv), ou(n.selectionDiv), n.gutters.style.height = 0, u && (n.lastWrapHeight = t.wrapperHeight, n.lastWrapWidth = t.wrapperWidth, Jt(e, 400)), n.updateLineNumbers = null, !0
    }
    function Q(e, t) {
        var n = t.force, r = t.viewport;
        for (var i = !0; ; i = !1) {
            if (i && e.options.lineWrapping && t.oldDisplayWidth != nn(e))
                n = !0;
            else {
                n = !1, r && r.top != null && (r = {top: Math.min(e.doc.height + Zt(e.display) - rn(e), r.top)}), t.visible = U(e.display, e.doc, r);
                if (t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo)
                    break
            }
            if (!K(e, t))
                break;
            Z(e);
            var s = B(e);
            Wt(e), Y(e, s), q(e, s)
        }
        Ao(e, "update", e);
        if (e.display.viewFrom != e.display.reportedViewFrom || e.display.viewTo != e.display.reportedViewTo)
            Ao(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo
    }
    function G(e, t) {
        var n = new $(e, t);
        if (K(e, n)) {
            Z(e), Q(e, n);
            var r = B(e);
            Wt(e), Y(e, r), q(e, r)
        }
    }
    function Y(e, t) {
        e.display.sizer.style.minHeight = t.docHeight + "px";
        var n = t.docHeight + e.display.barHeight;
        e.display.heightForcer.style.top = n + "px", e.display.gutters.style.height = Math.max(n + tn(e), t.clientHeight) + "px"
    }
    function Z(e) {
        var t = e.display, n = t.lineDiv.offsetTop;
        for (var s = 0; s < t.view.length; s++) {
            var o = t.view[s], u;
            if (o.hidden)
                continue;
            if (r && i < 8) {
                var a = o.node.offsetTop + o.node.offsetHeight;
                u = a - n, n = a
            } else {
                var f = o.node.getBoundingClientRect();
                u = f.bottom - f.top
            }
            var l = o.line.height - u;
            u < 2 && (u = An(t));
            if (l > .001 || l < -0.001) {
                Ys(o.line, u), et(o.line);
                if (o.rest)
                    for (var c = 0; c < o.rest.length; c++)
                        et(o.rest[c])
            }
        }
    }
    function et(e) {
        if (e.widgets)
            for (var t = 0; t < e.widgets.length; ++t)
                e.widgets[t].height = e.widgets[t].node.offsetHeight
    }
    function tt(e) {
        var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft;
        for (var s = t.gutters.firstChild, o = 0; s; s = s.nextSibling, ++o)
            n[e.options.gutters[o]] = s.offsetLeft + s.clientLeft + i, r[e.options.gutters[o]] = s.clientWidth;
        return {fixedPos: V(t),gutterTotalWidth: t.gutters.offsetWidth,gutterLeft: n,gutterWidth: r,wrapperWidth: t.wrapper.clientWidth}
    }
    function nt(e, t, n) {
        function a(t) {
            var n = t.nextSibling;
            return s && v && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t), n
        }
        var r = e.display, i = e.options.lineNumbers, o = r.lineDiv, u = o.firstChild, f = r.view, l = r.viewFrom;
        for (var c = 0; c < f.length; c++) {
            var h = f[c];
            if (!h.hidden)
                if (!h.node) {
                    var p = ct(e, h, l, n);
                    o.insertBefore(p, u)
                } else {
                    while (u != h.node)
                        u = a(u);
                    var d = i && t != null && t <= l && h.lineNumber;
                    h.changes && ($o(h.changes, "gutter") > -1 && (d = !1), rt(e, h, l, n)), d && (ou(h.lineNumber), h.lineNumber.appendChild(document.createTextNode(X(e.options, l)))), u = h.node.nextSibling
                }
            l += h.size
        }
        while (u)
            u = a(u)
    }
    function rt(e, t, n, r) {
        for (var i = 0; i < t.changes.length; i++) {
            var s = t.changes[i];
            s == "text" ? ut(e, t) : s == "gutter" ? ft(e, t, n, r) : s == "class" ? at(t) : s == "widget" && lt(t, r)
        }
        t.changes = null
    }
    function it(e) {
        return e.node == e.text && (e.node = iu("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), r && i < 8 && (e.node.style.zIndex = 2)), e.node
    }
    function st(e) {
        var t = e.bgClass ? e.bgClass + " " + (e.line.bgClass || "") : e.line.bgClass;
        t && (t += " CodeMirror-linebackground");
        if (e.background)
            t ? e.background.className = t : (e.background.parentNode.removeChild(e.background), e.background = null);
        else if (t) {
            var n = it(e);
            e.background = n.insertBefore(iu("div", null, t), n.firstChild)
        }
    }
    function ot(e, t) {
        var n = e.display.externalMeasured;
        return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : _s(e, t)
    }
    function ut(e, t) {
        var n = t.text.className, r = ot(e, t);
        t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, at(t)) : n && (t.text.className = n)
    }
    function at(e) {
        st(e), e.line.wrapClass ? it(e).className = e.line.wrapClass : e.node != e.text && (e.node.className = "");
        var t = e.textClass ? e.textClass + " " + (e.line.textClass || "") : e.line.textClass;
        e.text.className = t || ""
    }
    function ft(e, t, n, r) {
        t.gutter && (t.node.removeChild(t.gutter), t.gutter = null);
        var i = t.line.gutterMarkers;
        if (e.options.lineNumbers || i) {
            var s = it(t), o = t.gutter = s.insertBefore(iu("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"), t.text);
            t.line.gutterClass && (o.className += " " + t.line.gutterClass), e.options.lineNumbers && (!i || !i["CodeMirror-linenumbers"]) && (t.lineNumber = o.appendChild(iu("div", X(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px")));
            if (i)
                for (var u = 0; u < e.options.gutters.length; ++u) {
                    var a = e.options.gutters[u], f = i.hasOwnProperty(a) && i[a];
                    f && o.appendChild(iu("div", [f], "CodeMirror-gutter-elt", "left: " + r.gutterLeft[a] + "px; width: " + r.gutterWidth[a] + "px"))
                }
        }
    }
    function lt(e, t) {
        e.alignable && (e.alignable = null);
        for (var n = e.node.firstChild, r; n; n = r) {
            var r = n.nextSibling;
            n.className == "CodeMirror-linewidget" && e.node.removeChild(n)
        }
        ht(e, t)
    }
    function ct(e, t, n, r) {
        var i = ot(e, t);
        return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), at(t), ft(e, t, n, r), ht(t, r), t.node
    }
    function ht(e, t) {
        pt(e.line, e, t, !0);
        if (e.rest)
            for (var n = 0; n < e.rest.length; n++)
                pt(e.rest[n], e, t, !1)
    }
    function pt(e, t, n, r) {
        if (!e.widgets)
            return;
        var i = it(t);
        for (var s = 0, o = e.widgets; s < o.length; ++s) {
            var u = o[s], a = iu("div", [u.node], "CodeMirror-linewidget");
            u.handleMouseEvents || a.setAttribute("cm-ignore-events", "true"), dt(u, a, t, n), r && u.above ? i.insertBefore(a, t.gutter || t.text) : i.appendChild(a), Ao(u, "redraw")
        }
    }
    function dt(e, t, n, r) {
        if (e.noHScroll) {
            (n.alignable || (n.alignable = [])).push(t);
            var i = r.wrapperWidth;
            t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px"
        }
        e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"))
    }
    function gt(e) {
        return vt(e.line, e.ch)
    }
    function yt(e, t) {
        return mt(e, t) < 0 ? t : e
    }
    function bt(e, t) {
        return mt(e, t) < 0 ? e : t
    }
    function wt(e, t) {
        this.ranges = e, this.primIndex = t
    }
    function Et(e, t) {
        this.anchor = e, this.head = t
    }
    function St(e, t) {
        var n = e[t];
        e.sort(function(e, t) {
            return mt(e.from(), t.from())
        }), t = $o(e, n);
        for (var r = 1; r < e.length; r++) {
            var i = e[r], s = e[r - 1];
            if (mt(s.to(), i.from()) >= 0) {
                var o = bt(s.from(), i.from()), u = yt(s.to(), i.to()), a = s.empty() ? i.from() == i.head : s.from() == s.head;
                r <= t && --t, e.splice(--r, 2, new Et(a ? u : o, a ? o : u))
            }
        }
        return new wt(e, t)
    }
    function xt(e, t) {
        return new wt([new Et(e, t || e)], 0)
    }
    function Tt(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size - 1))
    }
    function Nt(e, t) {
        if (t.line < e.first)
            return vt(e.first, 0);
        var n = e.first + e.size - 1;
        return t.line > n ? vt(n, Ks(e, n).text.length) : Ct(t, Ks(e, t.line).text.length)
    }
    function Ct(e, t) {
        var n = e.ch;
        return n == null || n > t ? vt(e.line, t) : n < 0 ? vt(e.line, 0) : e
    }
    function kt(e, t) {
        return t >= e.first && t < e.first + e.size
    }
    function Lt(e, t) {
        for (var n = [], r = 0; r < t.length; r++)
            n[r] = Nt(e, t[r]);
        return n
    }
    function At(e, t, n, r) {
        if (e.cm && e.cm.display.shift || e.extend) {
            var i = t.anchor;
            if (r) {
                var s = mt(n, i) < 0;
                s != mt(r, i) < 0 ? (i = n, n = r) : s != mt(n, r) < 0 && (n = r)
            }
            return new Et(i, n)
        }
        return new Et(r || n, n)
    }
    function Ot(e, t, n, r) {
        Bt(e, new wt([At(e, e.sel.primary(), t, n)], 0), r)
    }
    function Mt(e, t, n) {
        for (var r = [], i = 0; i < e.sel.ranges.length; i++)
            r[i] = At(e, e.sel.ranges[i], t[i], null);
        var s = St(r, e.sel.primIndex);
        Bt(e, s, n)
    }
    function _t(e, t, n, r) {
        var i = e.sel.ranges.slice(0);
        i[t] = n, Bt(e, St(i, e.sel.primIndex), r)
    }
    function Dt(e, t, n, r) {
        Bt(e, xt(t, n), r)
    }
    function Pt(e, t) {
        var n = {ranges: t.ranges,update: function(t) {
                this.ranges = [];
                for (var n = 0; n < t.length; n++)
                    this.ranges[n] = new Et(Nt(e, t[n].anchor), Nt(e, t[n].head))
            }};
        return ko(e, "beforeSelectionChange", e, n), e.cm && ko(e.cm, "beforeSelectionChange", e.cm, n), n.ranges != t.ranges ? St(n.ranges, n.ranges.length - 1) : t
    }
    function Ht(e, t, n) {
        var r = e.history.done, i = Xo(r);
        i && i.ranges ? (r[r.length - 1] = t, jt(e, t, n)) : Bt(e, t, n)
    }
    function Bt(e, t, n) {
        jt(e, t, n), fo(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n)
    }
    function jt(e, t, n) {
        if (Do(e, "beforeSelectionChange") || e.cm && Do(e.cm, "beforeSelectionChange"))
            t = Pt(e, t);
        var r = n && n.bias || (mt(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
        Ft(e, qt(e, t, r, !0)), (!n || n.scroll !== !1) && e.cm && fi(e.cm)
    }
    function Ft(e, t) {
        if (t.equals(e.sel))
            return;
        e.sel = t, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0, _o(e.cm)), Ao(e, "cursorActivity", e)
    }
    function It(e) {
        Ft(e, qt(e, e.sel, null, !1), jo)
    }
    function qt(e, t, n, r) {
        var i;
        for (var s = 0; s < t.ranges.length; s++) {
            var o = t.ranges[s], u = Rt(e, o.anchor, n, r), a = Rt(e, o.head, n, r);
            if (i || u != o.anchor || a != o.head)
                i || (i = t.ranges.slice(0, s)), i[s] = new Et(u, a)
        }
        return i ? St(i, t.primIndex) : t
    }
    function Rt(e, t, n, r) {
        var i = !1, s = t, o = n || 1;
        e.cantEdit = !1;
        e: for (; ; ) {
            var u = Ks(e, s.line);
            if (u.markedSpans)
                for (var a = 0; a < u.markedSpans.length; ++a) {
                    var f = u.markedSpans[a], l = f.marker;
                    if ((f.from == null || (l.inclusiveLeft ? f.from <= s.ch : f.from < s.ch)) && (f.to == null || (l.inclusiveRight ? f.to >= s.ch : f.to > s.ch))) {
                        if (r) {
                            ko(l, "beforeCursorEnter");
                            if (l.explicitlyCleared) {
                                if (!u.markedSpans)
                                    break;
                                --a;
                                continue
                            }
                        }
                        if (!l.atomic)
                            continue;
                        var c = l.find(o < 0 ? -1 : 1);
                        if (mt(c, s) == 0) {
                            c.ch += o, c.ch < 0 ? c.line > e.first ? c = Nt(e, vt(c.line - 1)) : c = null : c.ch > u.text.length && (c.line < e.first + e.size - 1 ? c = vt(c.line + 1, 0) : c = null);
                            if (!c) {
                                if (i)
                                    return r ? (e.cantEdit = !0, vt(e.first, 0)) : Rt(e, t, n, !0);
                                i = !0, c = t, o = -o
                            }
                        }
                        s = c;
                        continue e
                    }
                }
            return s
        }
    }
    function Ut(e) {
        var t = e.display, n = e.doc, r = {}, i = r.cursors = document.createDocumentFragment(), s = r.selection = document.createDocumentFragment();
        for (var o = 0; o < n.sel.ranges.length; o++) {
            var u = n.sel.ranges[o], a = u.empty();
            (a || e.options.showCursorWhenSelecting) && Xt(e, u, i), a || Vt(e, u, s)
        }
        if (e.options.moveInputWithCursor) {
            var f = xn(e, n.sel.primary().head, "div"), l = t.wrapper.getBoundingClientRect(), c = t.lineDiv.getBoundingClientRect();
            r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, f.top + c.top - l.top)), r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, f.left + c.left - l.left))
        }
        return r
    }
    function zt(e, t) {
        uu(e.display.cursorDiv, t.cursors), uu(e.display.selectionDiv, t.selection), t.teTop != null && (e.display.inputDiv.style.top = t.teTop + "px", e.display.inputDiv.style.left = t.teLeft + "px")
    }
    function Wt(e) {
        zt(e, Ut(e))
    }
    function Xt(e, t, n) {
        var r = xn(e, t.head, "div", null, null, !e.options.singleCursorHeightPerLine), i = n.appendChild(iu("div", " ", "CodeMirror-cursor"));
        i.style.left = r.left + "px", i.style.top = r.top + "px", i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px";
        if (r.other) {
            var s = n.appendChild(iu("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
            s.style.display = "", s.style.left = r.other.left + "px", s.style.top = r.other.top + "px", s.style.height = (r.other.bottom - r.other.top) * .85 + "px"
        }
    }
    function Vt(e, t, n) {
        function f(e, t, n, r) {
            t < 0 && (t = 0), t = Math.round(t), r = Math.round(r), s.appendChild(iu("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px; top: " + t + "px; width: " + (n == null ? a - e : n) + "px; height: " + (r - t) + "px"))
        }
        function l(t, n, r) {
            function h(n, r) {
                return Sn(e, vt(t, n), "div", s, r)
            }
            var s = Ks(i, t), o = s.text.length, l, c;
            return Au(no(s), n || 0, r == null ? o : r, function(e, t, i) {
                var s = h(e, "left"), p, d, v;
                if (e == t)
                    p = s, d = v = s.left;
                else {
                    p = h(t - 1, "right");
                    if (i == "rtl") {
                        var m = s;
                        s = p, p = m
                    }
                    d = s.left, v = p.right
                }
                n == null && e == 0 && (d = u), p.top - s.top > 3 && (f(d, s.top, null, s.bottom), d = u, s.bottom < p.top && f(d, s.bottom, null, p.top)), r == null && t == o && (v = a);
                if (!l || s.top < l.top || s.top == l.top && s.left < l.left)
                    l = s;
                if (!c || p.bottom > c.bottom || p.bottom == c.bottom && p.right > c.right)
                    c = p;
                d < u + 1 && (d = u), f(d, p.top, v - d, p.bottom)
            }), {start: l,end: c}
        }
        var r = e.display, i = e.doc, s = document.createDocumentFragment(), o = en(e.display), u = o.left, a = Math.max(r.sizerWidth, nn(e) - r.sizer.offsetLeft) - o.right, c = t.from(), h = t.to();
        if (c.line == h.line)
            l(c.line, c.ch, h.ch);
        else {
            var p = Ks(i, c.line), d = Ks(i, h.line), v = as(p) == as(d), m = l(c.line, c.ch, v ? p.text.length + 1 : null).end, g = l(h.line, v ? 0 : null, h.ch).start;
            v && (m.top < g.top - 2 ? (f(m.right, m.top, null, m.bottom), f(u, g.top, g.left, g.bottom)) : f(m.right, m.top, g.left - m.right, m.bottom)), m.bottom < g.top && f(u, m.bottom, null, g.top)
        }
        n.appendChild(s)
    }
    function $t(e) {
        if (!e.state.focused)
            return;
        var t = e.display;
        clearInterval(t.blinker);
        var n = !0;
        t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function() {
            t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
        }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
    }
    function Jt(e, t) {
        e.doc.mode.startState && e.doc.frontier < e.display.viewTo && e.state.highlight.set(t, Go(Kt, e))
    }
    function Kt(e) {
        var t = e.doc;
        t.frontier < t.first && (t.frontier = t.first);
        if (t.frontier >= e.display.viewTo)
            return;
        var n = +(new Date) + e.options.workTime, r = Ni(t.mode, Gt(e, t.frontier)), i = [];
        t.iter(t.frontier, Math.min(t.first + t.size, e.display.viewTo + 500), function(s) {
            if (t.frontier >= e.display.viewFrom) {
                var o = s.styles, u = Cs(e, s, r, !0);
                s.styles = u.styles;
                var a = s.styleClasses, f = u.classes;
                f ? s.styleClasses = f : a && (s.styleClasses = null);
                var l = !o || o.length != s.styles.length || a != f && (!a || !f || a.bgClass != f.bgClass || a.textClass != f.textClass);
                for (var c = 0; !l && c < o.length; ++c)
                    l = o[c] != s.styles[c];
                l && i.push(t.frontier), s.stateAfter = Ni(t.mode, r)
            } else
                Ls(e, s.text, r), s.stateAfter = t.frontier % 5 == 0 ? Ni(t.mode, r) : null;
            ++t.frontier;
            if (+(new Date) > n)
                return Jt(e, e.options.workDelay), !0
        }), i.length && Un(e, function() {
            for (var t = 0; t < i.length; t++)
                Kn(e, i[t], "text")
        })
    }
    function Qt(e, t, n) {
        var r, i, s = e.doc, o = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100);
        for (var u = t; u > o; --u) {
            if (u <= s.first)
                return s.first;
            var a = Ks(s, u - 1);
            if (a.stateAfter && (!n || u <= s.frontier))
                return u;
            var f = Ro(a.text, null, e.options.tabSize);
            if (i == null || r > f)
                i = u - 1, r = f
        }
        return i
    }
    function Gt(e, t, n) {
        var r = e.doc, i = e.display;
        if (!r.mode.startState)
            return !0;
        var s = Qt(e, t, n), o = s > r.first && Ks(r, s - 1).stateAfter;
        return o ? o = Ni(r.mode, o) : o = Ci(r.mode), r.iter(s, t, function(n) {
            Ls(e, n.text, o);
            var u = s == t - 1 || s % 5 == 0 || s >= i.viewFrom && s < i.viewTo;
            n.stateAfter = u ? Ni(r.mode, o) : null, ++s
        }), n && (r.frontier = s), o
    }
    function Yt(e) {
        return e.lineSpace.offsetTop
    }
    function Zt(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight
    }
    function en(e) {
        if (e.cachedPaddingH)
            return e.cachedPaddingH;
        var t = uu(e.measure, iu("pre", "x")), n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle, r = {left: parseInt(n.paddingLeft),right: parseInt(n.paddingRight)};
        return !isNaN(r.left) && !isNaN(r.right) && (e.cachedPaddingH = r), r
    }
    function tn(e) {
        return Ho - e.display.nativeBarWidth
    }
    function nn(e) {
        return e.display.scroller.clientWidth - tn(e) - e.display.barWidth
    }
    function rn(e) {
        return e.display.scroller.clientHeight - tn(e) - e.display.barHeight
    }
    function sn(e, t, n) {
        var r = e.options.lineWrapping, i = r && nn(e);
        if (!t.measure.heights || r && t.measure.width != i) {
            var s = t.measure.heights = [];
            if (r) {
                t.measure.width = i;
                var o = t.text.firstChild.getClientRects();
                for (var u = 0; u < o.length - 1; u++) {
                    var a = o[u], f = o[u + 1];
                    Math.abs(a.bottom - f.bottom) > 2 && s.push((a.bottom + f.top) / 2 - n.top)
                }
            }
            s.push(n.bottom - n.top)
        }
    }
    function on(e, t, n) {
        if (e.line == t)
            return {map: e.measure.map,cache: e.measure.cache};
        for (var r = 0; r < e.rest.length; r++)
            if (e.rest[r] == t)
                return {map: e.measure.maps[r],cache: e.measure.caches[r]};
        for (var r = 0; r < e.rest.length; r++)
            if (Zs(e.rest[r]) > n)
                return {map: e.measure.maps[r],cache: e.measure.caches[r],before: !0}
    }
    function un(e, t) {
        t = as(t);
        var n = Zs(t), r = e.display.externalMeasured = new Vn(e.doc, t, n);
        r.lineN = n;
        var i = r.built = _s(e, r);
        return r.text = i.pre, uu(e.display.lineMeasure, i.pre), r
    }
    function an(e, t, n, r) {
        return cn(e, ln(e, t), n, r)
    }
    function fn(e, t) {
        if (t >= e.display.viewFrom && t < e.display.viewTo)
            return e.display.view[Gn(e, t)];
        var n = e.display.externalMeasured;
        if (n && t >= n.lineN && t < n.lineN + n.size)
            return n
    }
    function ln(e, t) {
        var n = Zs(t), r = fn(e, n);
        r && !r.text ? r = null : r && r.changes && rt(e, r, n, tt(e)), r || (r = un(e, t));
        var i = on(r, t, n);
        return {line: t,view: r,rect: null,map: i.map,cache: i.cache,before: i.before,hasHeights: !1}
    }
    function cn(e, t, n, r, i) {
        t.before && (n = -1);
        var s = n + (r || ""), o;
        return t.cache.hasOwnProperty(s) ? o = t.cache[s] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (sn(e, t.view, t.rect), t.hasHeights = !0), o = pn(e, t, n, r), o.bogus || (t.cache[s] = o)), {left: o.left,right: o.right,top: i ? o.rtop : o.top,bottom: i ? o.rbottom : o.bottom}
    }
    function pn(e, t, n, s) {
        var o = t.map, u, a, f, l;
        for (var c = 0; c < o.length; c += 3) {
            var h = o[c], p = o[c + 1];
            if (n < h)
                a = 0, f = 1, l = "left";
            else if (n < p)
                a = n - h, f = a + 1;
            else if (c == o.length - 3 || n == p && o[c + 3] > n)
                f = p - h, a = f - 1, n >= p && (l = "right");
            if (a != null) {
                u = o[c + 2], h == p && s == (u.insertLeft ? "left" : "right") && (l = s);
                if (s == "left" && a == 0)
                    while (c && o[c - 2] == o[c - 3] && o[c - 1].insertLeft)
                        u = o[(c -= 3) + 2], l = "left";
                if (s == "right" && a == p - h)
                    while (c < o.length - 3 && o[c + 3] == o[c + 4] && !o[c + 5].insertLeft)
                        u = o[(c += 3) + 2], l = "right";
                break
            }
        }
        var d;
        if (u.nodeType == 3) {
            for (var c = 0; c < 4; c++) {
                while (a && ru(t.line.text.charAt(h + a)))
                    --a;
                while (h + f < p && ru(t.line.text.charAt(h + f)))
                    ++f;
                if (r && i < 9 && a == 0 && f == p - h)
                    d = u.parentNode.getBoundingClientRect();
                else if (r && e.options.lineWrapping) {
                    var v = su(u, a, f).getClientRects();
                    v.length ? d = v[s == "right" ? v.length - 1 : 0] : d = hn
                } else
                    d = su(u, a, f).getBoundingClientRect() || hn;
                if (d.left || d.right || a == 0)
                    break;
                f = a, a -= 1, l = "right"
            }
            r && i < 11 && (d = dn(e.display.measure, d))
        } else {
            a > 0 && (l = s = "right");
            var v;
            e.options.lineWrapping && (v = u.getClientRects()).length > 1 ? d = v[s == "right" ? v.length - 1 : 0] : d = u.getBoundingClientRect()
        }
        if (r && i < 9 && !a && (!d || !d.left && !d.right)) {
            var m = u.parentNode.getClientRects()[0];
            m ? d = {left: m.left,right: m.left + On(e.display),top: m.top,bottom: m.bottom} : d = hn
        }
        var g = d.top - t.rect.top, y = d.bottom - t.rect.top, b = (g + y) / 2, w = t.view.measure.heights;
        for (var c = 0; c < w.length - 1; c++)
            if (b < w[c])
                break;
        var E = c ? w[c - 1] : 0, S = w[c], x = {left: (l == "right" ? d.right : d.left) - t.rect.left,right: (l == "left" ? d.left : d.right) - t.rect.left,top: E,bottom: S};
        return !d.left && !d.right && (x.bogus = !0), e.options.singleCursorHeightPerLine || (x.rtop = g, x.rbottom = y), x
    }
    function dn(e, t) {
        if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !ku(e))
            return t;
        var n = screen.logicalXDPI / screen.deviceXDPI, r = screen.logicalYDPI / screen.deviceYDPI;
        return {left: t.left * n,right: t.right * n,top: t.top * r,bottom: t.bottom * r}
    }
    function vn(e) {
        if (e.measure) {
            e.measure.cache = {}, e.measure.heights = null;
            if (e.rest)
                for (var t = 0; t < e.rest.length; t++)
                    e.measure.caches[t] = {}
        }
    }
    function mn(e) {
        e.display.externalMeasure = null, ou(e.display.lineMeasure);
        for (var t = 0; t < e.display.view.length; t++)
            vn(e.display.view[t])
    }
    function gn(e) {
        mn(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null
    }
    function yn() {
        return window.pageXOffset || (document.documentElement || document.body).scrollLeft
    }
    function bn() {
        return window.pageYOffset || (document.documentElement || document.body).scrollTop
    }
    function wn(e, t, n, r) {
        if (t.widgets)
            for (var i = 0; i < t.widgets.length; ++i)
                if (t.widgets[i].above) {
                    var s = ms(t.widgets[i]);
                    n.top += s, n.bottom += s
                }
        if (r == "line")
            return n;
        r || (r = "local");
        var o = to(t);
        r == "local" ? o += Yt(e.display) : o -= e.display.viewOffset;
        if (r == "page" || r == "window") {
            var u = e.display.lineSpace.getBoundingClientRect();
            o += u.top + (r == "window" ? 0 : bn());
            var a = u.left + (r == "window" ? 0 : yn());
            n.left += a, n.right += a
        }
        return n.top += o, n.bottom += o, n
    }
    function En(e, t, n) {
        if (n == "div")
            return t;
        var r = t.left, i = t.top;
        if (n == "page")
            r -= yn(), i -= bn();
        else if (n == "local" || !n) {
            var s = e.display.sizer.getBoundingClientRect();
            r += s.left, i += s.top
        }
        var o = e.display.lineSpace.getBoundingClientRect();
        return {left: r - o.left,top: i - o.top}
    }
    function Sn(e, t, n, r, i) {
        return r || (r = Ks(e.doc, t.line)), wn(e, r, an(e, r, t.ch, i), n)
    }
    function xn(e, t, n, r, i, s) {
        function o(t, o) {
            var u = cn(e, i, t, o ? "right" : "left", s);
            return o ? u.left = u.right : u.right = u.left, wn(e, r, u, n)
        }
        function u(e, t) {
            var n = a[t], r = n.level % 2;
            return e == Ou(n) && t && n.level < a[t - 1].level ? (n = a[--t], e = Mu(n) - (n.level % 2 ? 0 : 1), r = !0) : e == Mu(n) && t < a.length - 1 && n.level < a[t + 1].level && (n = a[++t], e = Ou(n) - n.level % 2, r = !1), r && e == n.to && e > n.from ? o(e - 1) : o(e, r)
        }
        r = r || Ks(e.doc, t.line), i || (i = ln(e, r));
        var a = no(r), f = t.ch;
        if (!a)
            return o(f);
        var l = Iu(a, f), c = u(f, l);
        return Fu != null && (c.other = u(f, Fu)), c
    }
    function Tn(e, t) {
        var n = 0, t = Nt(e.doc, t);
        e.options.lineWrapping || (n = On(e.display) * t.ch);
        var r = Ks(e.doc, t.line), i = to(r) + Yt(e.display);
        return {left: n,right: n,top: i,bottom: i + r.height}
    }
    function Nn(e, t, n, r) {
        var i = vt(e, t);
        return i.xRel = r, n && (i.outside = !0), i
    }
    function Cn(e, t, n) {
        var r = e.doc;
        n += e.display.viewOffset;
        if (n < 0)
            return Nn(r.first, 0, !0, -1);
        var i = eo(r, n), s = r.first + r.size - 1;
        if (i > s)
            return Nn(r.first + r.size - 1, Ks(r, s).text.length, !0, 1);
        t < 0 && (t = 0);
        var o = Ks(r, i);
        for (; ; ) {
            var u = kn(e, o, i, t, n), a = os(o), f = a && a.find(0, !0);
            if (!a || !(u.ch > f.from.ch || u.ch == f.from.ch && u.xRel > 0))
                return u;
            i = Zs(o = f.to.line)
        }
    }
    function kn(e, t, n, r, i) {
        function f(r) {
            var i = xn(e, vt(n, r), "line", t, a);
            return o = !0, s > i.bottom ? i.left - u : s < i.top ? i.left + u : (o = !1, i.left)
        }
        var s = i - to(t), o = !1, u = 2 * e.display.wrapper.clientWidth, a = ln(e, t), l = no(t), c = t.text.length, h = _u(t), p = Du(t), d = f(h), v = o, m = f(p), g = o;
        if (r > m)
            return Nn(n, p, g, 1);
        for (; ; ) {
            if (l ? p == h || p == Ru(t, h, 1) : p - h <= 1) {
                var y = r < d || r - d <= m - r ? h : p, b = r - (y == h ? d : m);
                while (ru(t.text.charAt(y)))
                    ++y;
                var w = Nn(n, y, y == h ? v : g, b < -1 ? -1 : b > 1 ? 1 : 0);
                return w
            }
            var E = Math.ceil(c / 2), S = h + E;
            if (l) {
                S = h;
                for (var x = 0; x < E; ++x)
                    S = Ru(t, S, 1)
            }
            var T = f(S);
            if (T > r) {
                p = S, m = T;
                if (g = o)
                    m += 1e3;
                c = E
            } else
                h = S, d = T, v = o, c -= E
        }
    }
    function An(e) {
        if (e.cachedTextHeight != null)
            return e.cachedTextHeight;
        if (Ln == null) {
            Ln = iu("pre");
            for (var t = 0; t < 49; ++t)
                Ln.appendChild(document.createTextNode("x")), Ln.appendChild(iu("br"));
            Ln.appendChild(document.createTextNode("x"))
        }
        uu(e.measure, Ln);
        var n = Ln.offsetHeight / 50;
        return n > 3 && (e.cachedTextHeight = n), ou(e.measure), n || 1
    }
    function On(e) {
        if (e.cachedCharWidth != null)
            return e.cachedCharWidth;
        var t = iu("span", "xxxxxxxxxx"), n = iu("pre", [t]);
        uu(e.measure, n);
        var r = t.getBoundingClientRect(), i = (r.right - r.left) / 10;
        return i > 2 && (e.cachedCharWidth = i), i || 10
    }
    function Dn(e) {
        e.curOp = {cm: e,viewChanged: !1,startHeight: e.doc.height,forceUpdate: !1,updateInput: null,typing: !1,changeObjs: null,cursorActivityHandlers: null,cursorActivityCalled: 0,selectionChanged: !1,updateMaxLine: !1,scrollLeft: null,scrollTop: null,scrollToPos: null,id: ++_n}, Mn ? Mn.ops.push(e.curOp) : e.curOp.ownsGroup = Mn = {ops: [e.curOp],delayedCallbacks: []}
    }
    function Pn(e) {
        var t = e.delayedCallbacks, n = 0;
        do {
            for (; n < t.length; n++)
                t[n]();
            for (var r = 0; r < e.ops.length; r++) {
                var i = e.ops[r];
                if (i.cursorActivityHandlers)
                    while (i.cursorActivityCalled < i.cursorActivityHandlers.length)
                        i.cursorActivityHandlers[i.cursorActivityCalled++](i.cm)
            }
        } while (n < t.length)
    }
    function Hn(e) {
        var t = e.curOp, n = t.ownsGroup;
        if (!n)
            return;
        try {
            Pn(n)
        }finally {
            Mn = null;
            for (var r = 0; r < n.ops.length; r++)
                n.ops[r].cm.curOp = null;
            Bn(n)
        }
    }
    function Bn(e) {
        var t = e.ops;
        for (var n = 0; n < t.length; n++)
            jn(t[n]);
        for (var n = 0; n < t.length; n++)
            Fn(t[n]);
        for (var n = 0; n < t.length; n++)
            In(t[n]);
        for (var n = 0; n < t.length; n++)
            qn(t[n]);
        for (var n = 0; n < t.length; n++)
            Rn(t[n])
    }
    function jn(e) {
        var t = e.cm, n = t.display;
        J(t), e.updateMaxLine && P(t), e.mustUpdate = e.viewChanged || e.forceUpdate || e.scrollTop != null || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new $(t, e.mustUpdate && {top: e.scrollTop,ensure: e.scrollToPos}, e.forceUpdate)
    }
    function Fn(e) {
        e.updatedDisplay = e.mustUpdate && K(e.cm, e.update)
    }
    function In(e) {
        var t = e.cm, n = t.display;
        e.updatedDisplay && Z(t), e.barMeasure = B(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = an(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + tn(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - nn(t)));
        if (e.updatedDisplay || e.selectionChanged)
            e.newSelectionNodes = Ut(t)
    }
    function qn(e) {
        var t = e.cm;
        e.adjustWidthTo != null && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && Nr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1), e.newSelectionNodes && zt(t, e.newSelectionNodes), e.updatedDisplay && Y(t, e.barMeasure), (e.updatedDisplay || e.startHeight != t.doc.height) && q(t, e.barMeasure), e.selectionChanged && $t(t), t.state.focused && e.updateInput && sr(t, e.typing)
    }
    function Rn(e) {
        var t = e.cm, n = t.display, r = t.doc;
        e.updatedDisplay && Q(t, e.update), n.wheelStartX != null && (e.scrollTop != null || e.scrollLeft != null || e.scrollToPos) && (n.wheelStartX = n.wheelStartY = null), e.scrollTop != null && (n.scroller.scrollTop != e.scrollTop || e.forceScroll) && (r.scrollTop = Math.max(0, Math.min(n.scroller.scrollHeight - n.scroller.clientHeight, e.scrollTop)), n.scrollbars.setScrollTop(r.scrollTop), n.scroller.scrollTop = r.scrollTop), e.scrollLeft != null && (n.scroller.scrollLeft != e.scrollLeft || e.forceScroll) && (r.scrollLeft = Math.max(0, Math.min(n.scroller.scrollWidth - nn(t), e.scrollLeft)), n.scrollbars.setScrollLeft(r.scrollLeft), n.scroller.scrollLeft = r.scrollLeft, z(t));
        if (e.scrollToPos) {
            var i = si(t, Nt(r, e.scrollToPos.from), Nt(r, e.scrollToPos.to), e.scrollToPos.margin);
            e.scrollToPos.isCursor && t.state.focused && ii(t, i)
        }
        var s = e.maybeHiddenMarkers, o = e.maybeUnhiddenMarkers;
        if (s)
            for (var u = 0; u < s.length; ++u)
                s[u].lines.length || ko(s[u], "hide");
        if (o)
            for (var u = 0; u < o.length; ++u)
                o[u].lines.length && ko(o[u], "unhide");
        n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && ko(t, "changes", t, e.changeObjs)
    }
    function Un(e, t) {
        if (e.curOp)
            return t();
        Dn(e);
        try {
            return t()
        }finally {
            Hn(e)
        }
    }
    function zn(e, t) {
        return function() {
            if (e.curOp)
                return t.apply(e, arguments);
            Dn(e);
            try {
                return t.apply(e, arguments)
            }finally {
                Hn(e)
            }
        }
    }
    function Wn(e) {
        return function() {
            if (this.curOp)
                return e.apply(this, arguments);
            Dn(this);
            try {
                return e.apply(this, arguments)
            }finally {
                Hn(this)
            }
        }
    }
    function Xn(e) {
        return function() {
            var t = this.cm;
            if (!t || t.curOp)
                return e.apply(this, arguments);
            Dn(t);
            try {
                return e.apply(this, arguments)
            }finally {
                Hn(t)
            }
        }
    }
    function Vn(e, t, n) {
        this.line = t, this.rest = fs(t), this.size = this.rest ? Zs(Xo(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = hs(e, t)
    }
    function $n(e, t, n) {
        var r = [], i;
        for (var s = t; s < n; s = i) {
            var o = new Vn(e.doc, Ks(e.doc, s), s);
            i = s + o.size, r.push(o)
        }
        return r
    }
    function Jn(e, t, n, r) {
        t == null && (t = e.doc.first), n == null && (n = e.doc.first + e.doc.size), r || (r = 0);
        var i = e.display;
        r && n < i.viewTo && (i.updateLineNumbers == null || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0;
        if (t >= i.viewTo)
            E && ls(e.doc, t) < i.viewTo && Qn(e);
        else if (n <= i.viewFrom)
            E && cs(e.doc, n + r) > i.viewFrom ? Qn(e) : (i.viewFrom += r, i.viewTo += r);
        else if (t <= i.viewFrom && n >= i.viewTo)
            Qn(e);
        else if (t <= i.viewFrom) {
            var s = Yn(e, n, n + r, 1);
            s ? (i.view = i.view.slice(s.index), i.viewFrom = s.lineN, i.viewTo += r) : Qn(e)
        } else if (n >= i.viewTo) {
            var s = Yn(e, t, t, -1);
            s ? (i.view = i.view.slice(0, s.index), i.viewTo = s.lineN) : Qn(e)
        } else {
            var o = Yn(e, t, t, -1), u = Yn(e, n, n + r, 1);
            o && u ? (i.view = i.view.slice(0, o.index).concat($n(e, o.lineN, u.lineN)).concat(i.view.slice(u.index)), i.viewTo += r) : Qn(e)
        }
        var a = i.externalMeasured;
        a && (n < a.lineN ? a.lineN += r : t < a.lineN + a.size && (i.externalMeasured = null))
    }
    function Kn(e, t, n) {
        e.curOp.viewChanged = !0;
        var r = e.display, i = e.display.externalMeasured;
        i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null);
        if (t < r.viewFrom || t >= r.viewTo)
            return;
        var s = r.view[Gn(e, t)];
        if (s.node == null)
            return;
        var o = s.changes || (s.changes = []);
        $o(o, n) == -1 && o.push(n)
    }
    function Qn(e) {
        e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0
    }
    function Gn(e, t) {
        if (t >= e.display.viewTo)
            return null;
        t -= e.display.viewFrom;
        if (t < 0)
            return null;
        var n = e.display.view;
        for (var r = 0; r < n.length; r++) {
            t -= n[r].size;
            if (t < 0)
                return r
        }
    }
    function Yn(e, t, n, r) {
        var i = Gn(e, t), s, o = e.display.view;
        if (!E || n == e.doc.first + e.doc.size)
            return {index: i,lineN: n};
        for (var u = 0, a = e.display.viewFrom; u < i; u++)
            a += o[u].size;
        if (a != t) {
            if (r > 0) {
                if (i == o.length - 1)
                    return null;
                s = a + o[i].size - t, i++
            } else
                s = a - t;
            t += s, n += s
        }
        while (ls(e.doc, n) != n) {
            if (i == (r < 0 ? 0 : o.length - 1))
                return null;
            n += r * o[i - (r < 0 ? 1 : 0)].size, i += r
        }
        return {index: i,lineN: n}
    }
    function Zn(e, t, n) {
        var r = e.display, i = r.view;
        i.length == 0 || t >= r.viewTo || n <= r.viewFrom ? (r.view = $n(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = $n(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(Gn(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat($n(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, Gn(e, n)))), r.viewTo = n
    }
    function er(e) {
        var t = e.display.view, n = 0;
        for (var r = 0; r < t.length; r++) {
            var i = t[r];
            !i.hidden && (!i.node || i.changes) && ++n
        }
        return n
    }
    function tr(e) {
        if (e.display.pollingFast)
            return;
        e.display.poll.set(e.options.pollInterval, function() {
            ir(e), e.state.focused && tr(e)
        })
    }
    function nr(e) {
        function n() {
            var r = ir(e);
            !r && !t ? (t = !0, e.display.poll.set(60, n)) : (e.display.pollingFast = !1, tr(e))
        }
        var t = !1;
        e.display.pollingFast = !0, e.display.poll.set(20, n)
    }
    function ir(e) {
        var t = e.display.input, n = e.display.prevInput, s = e.doc;
        if (!e.state.focused || Tu(t) && !n || ar(e) || e.options.disableInput || e.state.keySeq)
            return !1;
        e.state.pasteIncoming && e.state.fakedLastChar && (t.value = t.value.substring(0, t.value.length - 1), e.state.fakedLastChar = !1);
        var o = t.value;
        if (o == n && !e.somethingSelected())
            return !1;
        if (r && i >= 9 && e.display.inputHasSelection === o || v && /[\uf700-\uf7ff]/.test(o))
            return sr(e), !1;
        var u = !e.curOp;
        u && Dn(e), e.display.shift = !1, o.charCodeAt(0) == 8203 && s.sel == e.display.selForContextMenu && !n && (n = "​");
        var a = 0, f = Math.min(n.length, o.length);
        while (a < f && n.charCodeAt(a) == o.charCodeAt(a))
            ++a;
        var l = o.slice(a), c = xu(l), h = null;
        e.state.pasteIncoming && s.sel.ranges.length > 1 && (rr && rr.join("\n") == l ? h = s.sel.ranges.length % rr.length == 0 && Jo(rr, xu) : c.length == s.sel.ranges.length && (h = Jo(c, function(e) {
            return [e]
        })));
        for (var p = s.sel.ranges.length - 1; p >= 0; p--) {
            var d = s.sel.ranges[p], m = d.from(), g = d.to();
            a < n.length ? m = vt(m.line, m.ch - (n.length - a)) : e.state.overwrite && d.empty() && !e.state.pasteIncoming && (g = vt(g.line, Math.min(Ks(s, g.line).text.length, g.ch + Xo(c).length)));
            var y = e.curOp.updateInput, b = {from: m,to: g,text: h ? h[p % h.length] : c,origin: e.state.pasteIncoming ? "paste" : e.state.cutIncoming ? "cut" : "+input"};
            Gr(e.doc, b), Ao(e, "inputRead", e, b);
            if (l && !e.state.pasteIncoming && e.options.electricChars && e.options.smartIndent && d.head.ch < 100 && (!p || s.sel.ranges[p - 1].head.line != d.head.line)) {
                var w = e.getModeAt(d.head), E = Xr(b);
                if (w.electricChars) {
                    for (var S = 0; S < w.electricChars.length; S++)
                        if (l.indexOf(w.electricChars.charAt(S)) > -1) {
                            ci(e, E.line, "smart");
                            break
                        }
                } else
                    w.electricInput && w.electricInput.test(Ks(s, E.line).text.slice(0, E.ch)) && ci(e, E.line, "smart")
            }
        }
        return fi(e), e.curOp.updateInput = y, e.curOp.typing = !0, o.length > 1e3 || o.indexOf("\n") > -1 ? t.value = e.display.prevInput = "" : e.display.prevInput = o, u && Hn(e), e.state.pasteIncoming = e.state.cutIncoming = !1, !0
    }
    function sr(e, t) {
        if (e.display.contextMenuPending)
            return;
        var n, s, o = e.doc;
        if (e.somethingSelected()) {
            e.display.prevInput = "";
            var u = o.sel.primary();
            n = Nu && (u.to().line - u.from().line > 100 || (s = e.getSelection()).length > 1e3);
            var a = n ? "-" : s || e.getSelection();
            e.display.input.value = a, e.state.focused && Vo(e.display.input), r && i >= 9 && (e.display.inputHasSelection = a)
        } else
            t || (e.display.prevInput = e.display.input.value = "", r && i >= 9 && (e.display.inputHasSelection = null));
        e.display.inaccurateSelection = n
    }
    function or(e) {
        e.options.readOnly != "nocursor" && (!d || fu() != e.display.input) && e.display.input.focus()
    }
    function ur(e) {
        e.state.focused || (or(e), Rr(e))
    }
    function ar(e) {
        return e.options.readOnly || e.doc.cantEdit
    }
    function fr(e) {
        function n(t) {
            Mo(e, t) || So(t)
        }
        function o(n) {
            if (e.somethingSelected())
                rr = e.getSelections(), t.inaccurateSelection && (t.prevInput = "", t.inaccurateSelection = !1, t.input.value = rr.join("\n"), Vo(t.input));
            else {
                var r = [], i = [];
                for (var s = 0; s < e.doc.sel.ranges.length; s++) {
                    var o = e.doc.sel.ranges[s].head.line, u = {anchor: vt(o, 0),head: vt(o + 1, 0)};
                    i.push(u), r.push(e.getRange(u.anchor, u.head))
                }
                n.type == "cut" ? e.setSelections(i, null, jo) : (t.prevInput = "", t.input.value = r.join("\n"), Vo(t.input)), rr = r
            }
            n.type == "cut" && (e.state.cutIncoming = !0)
        }
        var t = e.display;
        No(t.scroller, "mousedown", zn(e, pr)), r && i < 11 ? No(t.scroller, "dblclick", zn(e, function(t) {
            if (Mo(e, t))
                return;
            var n = hr(e, t);
            if (!n || wr(e, t) || cr(e.display, t))
                return;
            bo(t);
            var r = e.findWordAt(n);
            Ot(e.doc, r.anchor, r.head)
        })) : No(t.scroller, "dblclick", function(t) {
            Mo(e, t) || bo(t)
        }), No(t.lineSpace, "selectstart", function(e) {
            cr(t, e) || bo(e)
        }), b || No(t.scroller, "contextmenu", function(t) {
            zr(e, t)
        }), No(t.scroller, "scroll", function() {
            t.scroller.clientHeight && (Tr(e, t.scroller.scrollTop), Nr(e, t.scroller.scrollLeft, !0), ko(e, "scroll", e))
        }), No(t.scroller, "mousewheel", function(t) {
            Ar(e, t)
        }), No(t.scroller, "DOMMouseScroll", function(t) {
            Ar(e, t)
        }), No(t.wrapper, "scroll", function() {
            t.wrapper.scrollTop = t.wrapper.scrollLeft = 0
        }), No(t.input, "keyup", function(t) {
            Ir.call(e, t)
        }), No(t.input, "input", function() {
            r && i >= 9 && e.display.inputHasSelection && (e.display.inputHasSelection = null), ir(e)
        }), No(t.input, "keydown", zn(e, jr)), No(t.input, "keypress", zn(e, qr)), No(t.input, "focus", Go(Rr, e)), No(t.input, "blur", Go(Ur, e)), e.options.dragDrop && (No(t.scroller, "dragstart", function(t) {
            xr(e, t)
        }), No(t.scroller, "dragenter", n), No(t.scroller, "dragover", n), No(t.scroller, "drop", zn(e, Sr))), No(t.scroller, "paste", function(n) {
            if (cr(t, n))
                return;
            e.state.pasteIncoming = !0, or(e), nr(e)
        }), No(t.input, "paste", function() {
            if (s && !e.state.fakedLastChar && !(new Date - e.state.lastMiddleDown < 200)) {
                var n = t.input.selectionStart, r = t.input.selectionEnd;
                t.input.value += "$", t.input.selectionEnd = r, t.input.selectionStart = n, e.state.fakedLastChar = !0
            }
            e.state.pasteIncoming = !0, nr(e)
        }), No(t.input, "cut", o), No(t.input, "copy", o), l && No(t.sizer, "mouseup", function() {
            fu() == t.input && t.input.blur(), or(e)
        })
    }
    function lr(e) {
        var t = e.display;
        if (t.lastWrapHeight == t.wrapper.clientHeight && t.lastWrapWidth == t.wrapper.clientWidth)
            return;
        t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize()
    }
    function cr(e, t) {
        for (var n = xo(t); n != e.wrapper; n = n.parentNode)
            if (!n || n.getAttribute("cm-ignore-events") == "true" || n.parentNode == e.sizer && n != e.mover)
                return !0
    }
    function hr(e, t, n, r) {
        var i = e.display;
        if (!n && xo(t).getAttribute("not-content") == "true")
            return null;
        var s, o, u = i.lineSpace.getBoundingClientRect();
        try {
            s = t.clientX - u.left, o = t.clientY - u.top
        } catch (t) {
            return null
        }
        var a = Cn(e, s, o), f;
        if (r && a.xRel == 1 && (f = Ks(e.doc, a.line).text).length == a.ch) {
            var l = Ro(f, f.length, e.options.tabSize) - f.length;
            a = vt(a.line, Math.max(0, Math.round((s - en(e.display).left) / On(e.display)) - l))
        }
        return a
    }
    function pr(e) {
        if (Mo(this, e))
            return;
        var t = this, n = t.display;
        n.shift = e.shiftKey;
        if (cr(n, e)) {
            s || (n.scroller.draggable = !1, setTimeout(function() {
                n.scroller.draggable = !0
            }, 100));
            return
        }
        if (wr(t, e))
            return;
        var r = hr(t, e);
        window.focus();
        switch (To(e)) {
            case 1:
                r ? mr(t, e, r) : xo(e) == n.scroller && bo(e);
                break;
            case 2:
                s && (t.state.lastMiddleDown = +(new Date)), r && Ot(t.doc, r), setTimeout(Go(or, t), 20), bo(e);
                break;
            case 3:
                b && zr(t, e)
        }
    }
    function mr(e, t, n) {
        setTimeout(Go(ur, e), 0);
        var r = +(new Date), i;
        vr && vr.time > r - 400 && mt(vr.pos, n) == 0 ? i = "triple" : dr && dr.time > r - 400 && mt(dr.pos, n) == 0 ? (i = "double", vr = {time: r,pos: n}) : (i = "single", dr = {time: r,pos: n});
        var s = e.doc.sel, o = v ? t.metaKey : t.ctrlKey, u;
        e.options.dragDrop && yu && !ar(e) && i == "single" && (u = s.contains(n)) > -1 && !s.ranges[u].empty() ? gr(e, t, n, o) : yr(e, t, n, i, o)
    }
    function gr(e, t, n, o) {
        var u = e.display, a = zn(e, function(f) {
            s && (u.scroller.draggable = !1), e.state.draggingText = !1, Co(document, "mouseup", a), Co(u.scroller, "drop", a), Math.abs(t.clientX - f.clientX) + Math.abs(t.clientY - f.clientY) < 10 && (bo(f), o || Ot(e.doc, n), or(e), r && i == 9 && setTimeout(function() {
                document.body.focus(), or(e)
            }, 20))
        });
        s && (u.scroller.draggable = !0), e.state.draggingText = a, u.scroller.dragDrop && u.scroller.dragDrop(), No(document, "mouseup", a), No(u.scroller, "drop", a)
    }
    function yr(e, t, n, r, i) {
        function d(t) {
            if (mt(p, t) == 0)
                return;
            p = t;
            if (r == "rect") {
                var i = [], s = e.options.tabSize, l = Ro(Ks(o, n.line).text, n.ch, s), c = Ro(Ks(o, t.line).text, t.ch, s), h = Math.min(l, c), d = Math.max(l, c);
                for (var v = Math.min(n.line, t.line), m = Math.min(e.lastLine(), Math.max(n.line, t.line)); v <= m; v++) {
                    var g = Ks(o, v).text, y = Uo(g, h, s);
                    h == d ? i.push(new Et(vt(v, y), vt(v, y))) : g.length > y && i.push(new Et(vt(v, y), vt(v, Uo(g, d, s))))
                }
                i.length || i.push(new Et(n, n)), Bt(o, St(f.ranges.slice(0, a).concat(i), a), {origin: "*mouse",scroll: !1}), e.scrollIntoView(t)
            } else {
                var b = u, w = b.anchor, E = t;
                if (r != "single") {
                    if (r == "double")
                        var S = e.findWordAt(t);
                    else
                        var S = new Et(vt(t.line, 0), Nt(o, vt(t.line + 1, 0)));
                    mt(S.anchor, w) > 0 ? (E = S.head, w = bt(b.from(), S.anchor)) : (E = S.anchor, w = yt(b.to(), S.head))
                }
                var i = f.ranges.slice(0);
                i[a] = new Et(Nt(o, w), E), Bt(o, St(i, a), Fo)
            }
        }
        function g(t) {
            var n = ++m, i = hr(e, t, !0, r == "rect");
            if (!i)
                return;
            if (mt(i, p) != 0) {
                ur(e), d(i);
                var u = U(s, o);
                (i.line >= u.to || i.line < u.from) && setTimeout(zn(e, function() {
                    m == n && g(t)
                }), 150)
            } else {
                var a = t.clientY < v.top ? -20 : t.clientY > v.bottom ? 20 : 0;
                a && setTimeout(zn(e, function() {
                    if (m != n)
                        return;
                    s.scroller.scrollTop += a, g(t)
                }), 50)
            }
        }
        function y(t) {
            m = Infinity, bo(t), or(e), Co(document, "mousemove", b), Co(document, "mouseup", w), o.history.lastSelOrigin = null
        }
        var s = e.display, o = e.doc;
        bo(t);
        var u, a, f = o.sel, l = f.ranges;
        i && !t.shiftKey ? (a = o.sel.contains(n), a > -1 ? u = l[a] : u = new Et(n, n)) : u = o.sel.primary();
        if (t.altKey)
            r = "rect", i || (u = new Et(n, n)), n = hr(e, t, !0, !0), a = -1;
        else if (r == "double") {
            var c = e.findWordAt(n);
            e.display.shift || o.extend ? u = At(o, u, c.anchor, c.head) : u = c
        } else if (r == "triple") {
            var h = new Et(vt(n.line, 0), Nt(o, vt(n.line + 1, 0)));
            e.display.shift || o.extend ? u = At(o, u, h.anchor, h.head) : u = h
        } else
            u = At(o, u, n);
        i ? a == -1 ? (a = l.length, Bt(o, St(l.concat([u]), a), {scroll: !1,origin: "*mouse"})) : l.length > 1 && l[a].empty() && r == "single" ? (Bt(o, St(l.slice(0, a).concat(l.slice(a + 1)), 0)), f = o.sel) : _t(o, a, u, Fo) : (a = 0, Bt(o, new wt([u], 0), Fo), f = o.sel);
        var p = n, v = s.wrapper.getBoundingClientRect(), m = 0, b = zn(e, function(e) {
            To(e) ? g(e) : y(e)
        }), w = zn(e, y);
        No(document, "mousemove", b), No(document, "mouseup", w)
    }
    function br(e, t, n, r, i) {
        try {
            var s = t.clientX, o = t.clientY
        } catch (t) {
            return !1
        }
        if (s >= Math.floor(e.display.gutters.getBoundingClientRect().right))
            return !1;
        r && bo(t);
        var u = e.display, a = u.lineDiv.getBoundingClientRect();
        if (o > a.bottom || !Do(e, n))
            return Eo(t);
        o -= a.top - u.viewOffset;
        for (var f = 0; f < e.options.gutters.length; ++f) {
            var l = u.gutters.childNodes[f];
            if (l && l.getBoundingClientRect().right >= s) {
                var c = eo(e.doc, o), h = e.options.gutters[f];
                return i(e, n, e, c, h, t), Eo(t)
            }
        }
    }
    function wr(e, t) {
        return br(e, t, "gutterClick", !0, Ao)
    }
    function Sr(e) {
        var t = this;
        if (Mo(t, e) || cr(t.display, e))
            return;
        bo(e), r && (Er = +(new Date));
        var n = hr(t, e, !0), i = e.dataTransfer.files;
        if (!n || ar(t))
            return;
        if (i && i.length && window.FileReader && window.File) {
            var s = i.length, o = Array(s), u = 0, a = function(e, r) {
                var i = new FileReader;
                i.onload = zn(t, function() {
                    o[r] = i.result;
                    if (++u == s) {
                        n = Nt(t.doc, n);
                        var e = {from: n,to: n,text: xu(o.join("\n")),origin: "paste"};
                        Gr(t.doc, e), Ht(t.doc, xt(n, Xr(e)))
                    }
                }), i.readAsText(e)
            };
            for (var f = 0; f < s; ++f)
                a(i[f], f)
        } else {
            if (t.state.draggingText && t.doc.sel.contains(n) > -1) {
                t.state.draggingText(e), setTimeout(Go(or, t), 20);
                return
            }
            try {
                var o = e.dataTransfer.getData("Text");
                if (o) {
                    if (t.state.draggingText && (v ? !e.metaKey : !e.ctrlKey))
                        var l = t.listSelections();
                    jt(t.doc, xt(n, n));
                    if (l)
                        for (var f = 0; f < l.length; ++f)
                            ri(t.doc, "", l[f].anchor, l[f].head, "drag");
                    t.replaceSelection(o, "around", "paste"), or(t)
                }
            } catch (e) {
            }
        }
    }
    function xr(e, t) {
        if (r && (!e.state.draggingText || +(new Date) - Er < 100)) {
            So(t);
            return
        }
        if (Mo(e, t) || cr(e.display, t))
            return;
        t.dataTransfer.setData("Text", e.getSelection());
        if (t.dataTransfer.setDragImage && !f) {
            var n = iu("img", null, null, "position: fixed; left: 0; top: 0;");
            n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", a && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), a && n.parentNode.removeChild(n)
        }
    }
    function Tr(t, n) {
        if (Math.abs(t.doc.scrollTop - n) < 2)
            return;
        t.doc.scrollTop = n, e || G(t, {top: n}), t.display.scroller.scrollTop != n && (t.display.scroller.scrollTop = n), t.display.scrollbars.setScrollTop(n), e && G(t), Jt(t, 100)
    }
    function Nr(e, t, n) {
        if (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2)
            return;
        t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), e.doc.scrollLeft = t, z(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t)
    }
    function Ar(t, n) {
        var r = Lr(n), i = r.x, o = r.y, u = t.display, f = u.scroller;
        if (!(i && f.scrollWidth > f.clientWidth || o && f.scrollHeight > f.clientHeight))
            return;
        if (o && v && s)
            e: for (var l = n.target, c = u.view; l != f; l = l.parentNode)
                for (var h = 0; h < c.length; h++)
                    if (c[h].node == l) {
                        t.display.currentWheelTarget = l;
                        break e
                    }
        if (i && !e && !a && kr != null) {
            o && Tr(t, Math.max(0, Math.min(f.scrollTop + o * kr, f.scrollHeight - f.clientHeight))), Nr(t, Math.max(0, Math.min(f.scrollLeft + i * kr, f.scrollWidth - f.clientWidth))), bo(n), u.wheelStartX = null;
            return
        }
        if (o && kr != null) {
            var p = o * kr, d = t.doc.scrollTop, m = d + u.wrapper.clientHeight;
            p < 0 ? d = Math.max(0, d + p - 50) : m = Math.min(t.doc.height, m + p + 50), G(t, {top: d,bottom: m})
        }
        Cr < 20 && (u.wheelStartX == null ? (u.wheelStartX = f.scrollLeft, u.wheelStartY = f.scrollTop, u.wheelDX = i, u.wheelDY = o, setTimeout(function() {
            if (u.wheelStartX == null)
                return;
            var e = f.scrollLeft - u.wheelStartX, t = f.scrollTop - u.wheelStartY, n = t && u.wheelDY && t / u.wheelDY || e && u.wheelDX && e / u.wheelDX;
            u.wheelStartX = u.wheelStartY = null;
            if (!n)
                return;
            kr = (kr * Cr + n) / (Cr + 1), ++Cr
        }, 200)) : (u.wheelDX += i, u.wheelDY += o))
    }
    function Or(e, t, n) {
        if (typeof t == "string") {
            t = ki[t];
            if (!t)
                return !1
        }
        e.display.pollingFast && ir(e) && (e.display.pollingFast = !1);
        var r = e.display.shift, i = !1;
        try {
            ar(e) && (e.state.suppressEdits = !0), n && (e.display.shift = !1), i = t(e) != Bo
        }finally {
            e.display.shift = r, e.state.suppressEdits = !1
        }
        return i
    }
    function Mr(e, t, n) {
        for (var r = 0; r < e.state.keyMaps.length; r++) {
            var i = Oi(t, e.state.keyMaps[r], n, e);
            if (i)
                return i
        }
        return e.options.extraKeys && Oi(t, e.options.extraKeys, n, e) || Oi(t, e.options.keyMap, n, e)
    }
    function Dr(e, t, n, r) {
        var i = e.state.keySeq;
        if (i) {
            if (Mi(t))
                return "handled";
            _r.set(50, function() {
                e.state.keySeq == i && (e.state.keySeq = null, sr(e))
            }), t = i + " " + t
        }
        var s = Mr(e, t, r);
        s == "multi" && (e.state.keySeq = t), s == "handled" && Ao(e, "keyHandled", e, t, n);
        if (s == "handled" || s == "multi")
            bo(n), $t(e);
        return i && !s && /\'$/.test(t) ? (bo(n), !0) : !!s
    }
    function Pr(e, t) {
        var n = _i(t, !0);
        return n ? t.shiftKey && !e.state.keySeq ? Dr(e, "Shift-" + n, t, function(t) {
            return Or(e, t, !0)
        }) || Dr(e, n, t, function(t) {
            if (typeof t == "string" ? /^go[A-Z]/.test(t) : t.motion)
                return Or(e, t)
        }) : Dr(e, n, t, function(t) {
            return Or(e, t)
        }) : !1
    }
    function Hr(e, t, n) {
        return Dr(e, "'" + n + "'", t, function(t) {
            return Or(e, t, !0)
        })
    }
    function jr(e) {
        var t = this;
        ur(t);
        if (Mo(t, e))
            return;
        r && i < 11 && e.keyCode == 27 && (e.returnValue = !1);
        var n = e.keyCode;
        t.display.shift = n == 16 || e.shiftKey;
        var s = Pr(t, e);
        a && (Br = s ? n : null, !s && n == 88 && !Nu && (v ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), n == 18 && !/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) && Fr(t)
    }
    function Fr(e) {
        function n(e) {
            if (e.keyCode == 18 || !e.altKey)
                cu(t, "CodeMirror-crosshair"), Co(document, "keyup", n), Co(document, "mouseover", n)
        }
        var t = e.display.lineDiv;
        hu(t, "CodeMirror-crosshair"), No(document, "keyup", n), No(document, "mouseover", n)
    }
    function Ir(e) {
        e.keyCode == 16 && (this.doc.sel.shift = !1), Mo(this, e)
    }
    function qr(e) {
        var t = this;
        if (Mo(t, e) || e.ctrlKey && !e.altKey || v && e.metaKey)
            return;
        var n = e.keyCode, s = e.charCode;
        if (a && n == Br) {
            Br = null, bo(e);
            return
        }
        if ((a && (!e.which || e.which < 10) || l) && Pr(t, e))
            return;
        var o = String.fromCharCode(s == null ? n : s);
        if (Hr(t, e, o))
            return;
        r && i >= 9 && (t.display.inputHasSelection = null), nr(t)
    }
    function Rr(e) {
        if (e.options.readOnly == "nocursor")
            return;
        e.state.focused || (ko(e, "focus", e), e.state.focused = !0, hu(e.display.wrapper, "CodeMirror-focused"), !e.curOp && e.display.selForContextMenu != e.doc.sel && (sr(e), s && setTimeout(Go(sr, e, !0), 0))), tr(e), $t(e)
    }
    function Ur(e) {
        e.state.focused && (ko(e, "blur", e), e.state.focused = !1, cu(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
            e.state.focused || (e.display.shift = !1)
        }, 150)
    }
    function zr(e, t) {
        function h() {
            if (n.input.selectionStart != null) {
                var t = e.somethingSelected(), r = n.input.value = "​" + (t ? n.input.value : "");
                n.prevInput = t ? "" : "​", n.input.selectionStart = 1, n.input.selectionEnd = r.length, n.selForContextMenu = e.doc.sel
            }
        }
        function p() {
            n.contextMenuPending = !1, n.inputDiv.style.position = "relative", n.input.style.cssText = l, r && i < 9 && n.scrollbars.setScrollTop(n.scroller.scrollTop = u), tr(e);
            if (n.input.selectionStart != null) {
                (!r || r && i < 9) && h();
                var t = 0, s = function() {
                    n.selForContextMenu == e.doc.sel && n.input.selectionStart == 0 ? zn(e, ki.selectAll)(e) : t++ < 10 ? n.detectingSelectAll = setTimeout(s, 500) : sr(e)
                };
                n.detectingSelectAll = setTimeout(s, 200)
            }
        }
        if (Mo(e, t, "contextmenu"))
            return;
        var n = e.display;
        if (cr(n, t) || Wr(e, t))
            return;
        var o = hr(e, t), u = n.scroller.scrollTop;
        if (!o || a)
            return;
        var f = e.options.resetSelectionOnContextMenu;
        f && e.doc.sel.contains(o) == -1 && zn(e, Bt)(e.doc, xt(o), jo);
        var l = n.input.style.cssText;
        n.inputDiv.style.position = "absolute", n.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (t.clientY - 5) + "px; left: " + (t.clientX - 5) + "px; z-index: 1000; background: " + (r ? "rgba(255, 255, 255, .05)" : "transparent") + "; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
        if (s)
            var c = window.scrollY;
        or(e), s && window.scrollTo(null, c), sr(e), e.somethingSelected() || (n.input.value = n.prevInput = " "), n.contextMenuPending = !0, n.selForContextMenu = e.doc.sel, clearTimeout(n.detectingSelectAll), r && i >= 9 && h();
        if (b) {
            So(t);
            var d = function() {
                Co(window, "mouseup", d), setTimeout(p, 20)
            };
            No(window, "mouseup", d)
        } else
            setTimeout(p, 50)
    }
    function Wr(e, t) {
        return Do(e, "gutterContextMenu") ? br(e, t, "gutterContextMenu", !1, ko) : !1
    }
    function Vr(e, t) {
        if (mt(e, t.from) < 0)
            return e;
        if (mt(e, t.to) <= 0)
            return Xr(t);
        var n = e.line + t.text.length - (t.to.line - t.from.line) - 1, r = e.ch;
        return e.line == t.to.line && (r += Xr(t).ch - t.to.ch), vt(n, r)
    }
    function $r(e, t) {
        var n = [];
        for (var r = 0; r < e.sel.ranges.length; r++) {
            var i = e.sel.ranges[r];
            n.push(new Et(Vr(i.anchor, t), Vr(i.head, t)))
        }
        return St(n, e.sel.primIndex)
    }
    function Jr(e, t, n) {
        return e.line == t.line ? vt(n.line, e.ch - t.ch + n.ch) : vt(n.line + (e.line - t.line), e.ch)
    }
    function Kr(e, t, n) {
        var r = [], i = vt(e.first, 0), s = i;
        for (var o = 0; o < t.length; o++) {
            var u = t[o], a = Jr(u.from, i, s), f = Jr(Xr(u), i, s);
            i = u.to, s = f;
            if (n == "around") {
                var l = e.sel.ranges[o], c = mt(l.head, l.anchor) < 0;
                r[o] = new Et(c ? f : a, c ? a : f)
            } else
                r[o] = new Et(a, a)
        }
        return new wt(r, e.sel.primIndex)
    }
    function Qr(e, t, n) {
        var r = {canceled: !1,from: t.from,to: t.to,text: t.text,origin: t.origin,cancel: function() {
                this.canceled = !0
            }};
        return n && (r.update = function(t, n, r, i) {
            t && (this.from = Nt(e, t)), n && (this.to = Nt(e, n)), r && (this.text = r), i !== undefined && (this.origin = i)
        }), ko(e, "beforeChange", e, r), e.cm && ko(e.cm, "beforeChange", e.cm, r), r.canceled ? null : {from: r.from,to: r.to,text: r.text,origin: r.origin}
    }
    function Gr(e, t, n) {
        if (e.cm) {
            if (!e.cm.curOp)
                return zn(e.cm, Gr)(e, t, n);
            if (e.cm.state.suppressEdits)
                return
        }
        if (Do(e, "beforeChange") || e.cm && Do(e.cm, "beforeChange")) {
            t = Qr(e, t, !0);
            if (!t)
                return
        }
        var r = w && !n && Yi(e, t.from, t.to);
        if (r)
            for (var i = r.length - 1; i >= 0; --i)
                Yr(e, {from: r[i].from,to: r[i].to,text: i ? [""] : t.text});
        else
            Yr(e, t)
    }
    function Yr(e, t) {
        if (t.text.length == 1 && t.text[0] == "" && mt(t.from, t.to) == 0)
            return;
        var n = $r(e, t);
        uo(e, t, n, e.cm ? e.cm.curOp.id : NaN), ti(e, t, n, Ki(e, t));
        var r = [];
        $s(e, function(e, n) {
            !n && $o(r, e.history) == -1 && (yo(e.history, t), r.push(e.history)), ti(e, t, null, Ki(e, t))
        })
    }
    function Zr(e, t, n) {
        if (e.cm && e.cm.state.suppressEdits)
            return;
        var r = e.history, i, s = e.sel, o = t == "undo" ? r.done : r.undone, u = t == "undo" ? r.undone : r.done;
        for (var a = 0; a < o.length; a++) {
            i = o[a];
            if (n ? i.ranges && !i.equals(e.sel) : !i.ranges)
                break
        }
        if (a == o.length)
            return;
        r.lastOrigin = r.lastSelOrigin = null;
        for (; ; ) {
            i = o.pop();
            if (!i.ranges)
                break;
            lo(i, u);
            if (n && !i.equals(e.sel)) {
                Bt(e, i, {clearRedo: !1});
                return
            }
            s = i
        }
        var f = [];
        lo(s, u), u.push({changes: f,generation: r.generation}), r.generation = i.generation || ++r.maxGeneration;
        var l = Do(e, "beforeChange") || e.cm && Do(e.cm, "beforeChange");
        for (var a = i.changes.length - 1; a >= 0; --a) {
            var c = i.changes[a];
            c.origin = t;
            if (l && !Qr(e, c, !1)) {
                o.length = 0;
                return
            }
            f.push(io(e, c));
            var h = a ? $r(e, c) : Xo(o);
            ti(e, c, h, Gi(e, c)), !a && e.cm && e.cm.scrollIntoView({from: c.from,to: Xr(c)});
            var p = [];
            $s(e, function(e, t) {
                !t && $o(p, e.history) == -1 && (yo(e.history, c), p.push(e.history)), ti(e, c, null, Gi(e, c))
            })
        }
    }
    function ei(e, t) {
        if (t == 0)
            return;
        e.first += t, e.sel = new wt(Jo(e.sel.ranges, function(e) {
            return new Et(vt(e.anchor.line + t, e.anchor.ch), vt(e.head.line + t, e.head.ch))
        }), e.sel.primIndex);
        if (e.cm) {
            Jn(e.cm, e.first, e.first - t, t);
            for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
                Kn(e.cm, r, "gutter")
        }
    }
    function ti(e, t, n, r) {
        if (e.cm && !e.cm.curOp)
            return zn(e.cm, ti)(e, t, n, r);
        if (t.to.line < e.first) {
            ei(e, t.text.length - 1 - (t.to.line - t.from.line));
            return
        }
        if (t.from.line > e.lastLine())
            return;
        if (t.from.line < e.first) {
            var i = t.text.length - 1 - (e.first - t.from.line);
            ei(e, i), t = {from: vt(e.first, 0),to: vt(t.to.line + i, t.to.ch),text: [Xo(t.text)],origin: t.origin}
        }
        var s = e.lastLine();
        t.to.line > s && (t = {from: t.from,to: vt(s, Ks(e, s).text.length),text: [t.text[0]],origin: t.origin}), t.removed = Qs(e, t.from, t.to), n || (n = $r(e, t)), e.cm ? ni(e.cm, t, r) : qs(e, t, r), jt(e, n, jo)
    }
    function ni(e, t, n) {
        var r = e.doc, i = e.display, s = t.from, o = t.to, u = !1, a = s.line;
        e.options.lineWrapping || (a = Zs(as(Ks(r, s.line))), r.iter(a, o.line + 1, function(e) {
            if (e == i.maxLine)
                return u = !0, !0
        })), r.sel.contains(t.from, t.to) > -1 && _o(e), qs(r, t, n, k(e)), e.options.lineWrapping || (r.iter(a, s.line + t.text.length, function(e) {
            var t = D(e);
            t > i.maxLineLength && (i.maxLine = e, i.maxLineLength = t, i.maxLineChanged = !0, u = !1)
        }), u && (e.curOp.updateMaxLine = !0)), r.frontier = Math.min(r.frontier, s.line), Jt(e, 400);
        var f = t.text.length - (o.line - s.line) - 1;
        s.line == o.line && t.text.length == 1 && !Is(e.doc, t) ? Kn(e, s.line, "text") : Jn(e, s.line, o.line + 1, f);
        var l = Do(e, "changes"), c = Do(e, "change");
        if (c || l) {
            var h = {from: s,to: o,text: t.text,removed: t.removed,origin: t.origin};
            c && Ao(e, "change", e, h), l && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(h)
        }
        e.display.selForContextMenu = null
    }
    function ri(e, t, n, r, i) {
        r || (r = n);
        if (mt(r, n) < 0) {
            var s = r;
            r = n, n = s
        }
        typeof t == "string" && (t = xu(t)), Gr(e, {from: n,to: r,text: t,origin: i})
    }
    function ii(e, t) {
        if (Mo(e, "scrollCursorIntoView"))
            return;
        var n = e.display, r = n.sizer.getBoundingClientRect(), i = null;
        t.top + r.top < 0 ? i = !0 : t.bottom + r.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1);
        if (i != null && !h) {
            var s = iu("div", "​", null, "position: absolute; top: " + (t.top - n.viewOffset - Yt(e.display)) + "px; height: " + (t.bottom - t.top + tn(e) + n.barHeight) + "px; left: " + t.left + "px; width: 2px;");
            e.display.lineSpace.appendChild(s), s.scrollIntoView(i), e.display.lineSpace.removeChild(s)
        }
    }
    function si(e, t, n, r) {
        r == null && (r = 0);
        for (var i = 0; i < 5; i++) {
            var s = !1, o = xn(e, t), u = !n || n == t ? o : xn(e, n), a = ui(e, Math.min(o.left, u.left), Math.min(o.top, u.top) - r, Math.max(o.left, u.left), Math.max(o.bottom, u.bottom) + r), f = e.doc.scrollTop, l = e.doc.scrollLeft;
            a.scrollTop != null && (Tr(e, a.scrollTop), Math.abs(e.doc.scrollTop - f) > 1 && (s = !0)), a.scrollLeft != null && (Nr(e, a.scrollLeft), Math.abs(e.doc.scrollLeft - l) > 1 && (s = !0));
            if (!s)
                break
        }
        return o
    }
    function oi(e, t, n, r, i) {
        var s = ui(e, t, n, r, i);
        s.scrollTop != null && Tr(e, s.scrollTop), s.scrollLeft != null && Nr(e, s.scrollLeft)
    }
    function ui(e, t, n, r, i) {
        var s = e.display, o = An(e.display);
        n < 0 && (n = 0);
        var u = e.curOp && e.curOp.scrollTop != null ? e.curOp.scrollTop : s.scroller.scrollTop, a = rn(e), f = {};
        i - n > a && (i = n + a);
        var l = e.doc.height + Zt(s), c = n < o, h = i > l - o;
        if (n < u)
            f.scrollTop = c ? 0 : n;
        else if (i > u + a) {
            var p = Math.min(n, (h ? l : i) - a);
            p != u && (f.scrollTop = p)
        }
        var d = e.curOp && e.curOp.scrollLeft != null ? e.curOp.scrollLeft : s.scroller.scrollLeft, v = nn(e) - (e.options.fixedGutter ? s.gutters.offsetWidth : 0), m = r - t > v;
        return m && (r = t + v), t < 10 ? f.scrollLeft = 0 : t < d ? f.scrollLeft = Math.max(0, t - (m ? 0 : 10)) : r > v + d - 3 && (f.scrollLeft = r + (m ? 0 : 10) - v), f
    }
    function ai(e, t, n) {
        (t != null || n != null) && li(e), t != null && (e.curOp.scrollLeft = (e.curOp.scrollLeft == null ? e.doc.scrollLeft : e.curOp.scrollLeft) + t), n != null && (e.curOp.scrollTop = (e.curOp.scrollTop == null ? e.doc.scrollTop : e.curOp.scrollTop) + n)
    }
    function fi(e) {
        li(e);
        var t = e.getCursor(), n = t, r = t;
        e.options.lineWrapping || (n = t.ch ? vt(t.line, t.ch - 1) : t, r = vt(t.line, t.ch + 1)), e.curOp.scrollToPos = {from: n,to: r,margin: e.options.cursorScrollMargin,isCursor: !0}
    }
    function li(e) {
        var t = e.curOp.scrollToPos;
        if (t) {
            e.curOp.scrollToPos = null;
            var n = Tn(e, t.from), r = Tn(e, t.to), i = ui(e, Math.min(n.left, r.left), Math.min(n.top, r.top) - t.margin, Math.max(n.right, r.right), Math.max(n.bottom, r.bottom) + t.margin);
            e.scrollTo(i.scrollLeft, i.scrollTop)
        }
    }
    function ci(e, t, n, r) {
        var i = e.doc, s;
        n == null && (n = "add"), n == "smart" && (i.mode.indent ? s = Gt(e, t) : n = "prev");
        var o = e.options.tabSize, u = Ks(i, t), a = Ro(u.text, null, o);
        u.stateAfter && (u.stateAfter = null);
        var f = u.text.match(/^\s*/)[0], l;
        if (!r && !/\S/.test(u.text))
            l = 0, n = "not";
        else if (n == "smart") {
            l = i.mode.indent(s, u.text.slice(f.length), u.text);
            if (l == Bo || l > 150) {
                if (!r)
                    return;
                n = "prev"
            }
        }
        n == "prev" ? t > i.first ? l = Ro(Ks(i, t - 1).text, null, o) : l = 0 : n == "add" ? l = a + e.options.indentUnit : n == "subtract" ? l = a - e.options.indentUnit : typeof n == "number" && (l = a + n), l = Math.max(0, l);
        var c = "", h = 0;
        if (e.options.indentWithTabs)
            for (var p = Math.floor(l / o); p; --p)
                h += o, c += "  ";
        h < l && (c += Wo(l - h));
        if (c != f)
            ri(i, c, vt(t, 0), vt(t, f.length), "+input");
        else
            for (var p = 0; p < i.sel.ranges.length; p++) {
                var d = i.sel.ranges[p];
                if (d.head.line == t && d.head.ch < f.length) {
                    var h = vt(t, f.length);
                    _t(i, p, new Et(h, h));
                    break
                }
            }
        u.stateAfter = null
    }
    function hi(e, t, n, r) {
        var i = t, s = t;
        return typeof t == "number" ? s = Ks(e, Tt(e, t)) : i = Zs(t), i == null ? null : (r(s, i) && e.cm && Kn(e.cm, i, n), s)
    }
    function pi(e, t) {
        var n = e.doc.sel.ranges, r = [];
        for (var i = 0; i < n.length; i++) {
            var s = t(n[i]);
            while (r.length && mt(s.from, Xo(r).to) <= 0) {
                var o = r.pop();
                if (mt(o.from, s.from) < 0) {
                    s.from = o.from;
                    break
                }
            }
            r.push(s)
        }
        Un(e, function() {
            for (var t = r.length - 1; t >= 0; t--)
                ri(e.doc, "", r[t].from, r[t].to, "+delete");
            fi(e)
        })
    }
    function di(e, t, n, r, i) {
        function l() {
            var t = s + n;
            return t < e.first || t >= e.first + e.size ? f = !1 : (s = t, a = Ks(e, t))
        }
        function c(e) {
            var t = (i ? Ru : Uu)(a, o, n, !0);
            if (t == null) {
                if (!!e || !l())
                    return f = !1;
                i ? o = (n < 0 ? Du : _u)(a) : o = n < 0 ? a.text.length : 0
            } else
                o = t;
            return !0
        }
        var s = t.line, o = t.ch, u = n, a = Ks(e, s), f = !0;
        if (r == "char")
            c();
        else if (r == "column")
            c(!0);
        else if (r == "word" || r == "group") {
            var h = null, p = r == "group", d = e.cm && e.cm.getHelper(t, "wordChars");
            for (var v = !0; ; v = !1) {
                if (n < 0 && !c(!v))
                    break;
                var m = a.text.charAt(o) || "\n", g = eu(m, d) ? "w" : p && m == "\n" ? "n" : !p || /\s/.test(m) ? null : "p";
                p && !v && !g && (g = "s");
                if (h && h != g) {
                    n < 0 && (n = 1, c());
                    break
                }
                g && (h = g);
                if (n > 0 && !c(!v))
                    break
            }
        }
        var y = Rt(e, vt(s, o), u, !0);
        return f || (y.hitSide = !0), y
    }
    function vi(e, t, n, r) {
        var i = e.doc, s = t.left, o;
        if (r == "page") {
            var u = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
            o = t.top + n * (u - (n < 0 ? 1.5 : .5) * An(e.display))
        } else
            r == "line" && (o = n > 0 ? t.bottom + 3 : t.top - 3);
        for (; ; ) {
            var a = Cn(e, s, o);
            if (!a.outside)
                break;
            if (n < 0 ? o <= 0 : o >= i.height) {
                a.hitSide = !0;
                break
            }
            o += n * 5
        }
        return a
    }
    function yi(e, t, n, r) {
        S.defaults[e] = t, n && (gi[e] = r ? function(e, t, r) {
            r != bi && n(e, t, r)
        } : n)
    }
    function Ai(e) {
        var t = e.split(/-(?!$)/), e = t[t.length - 1], n, r, i, s;
        for (var o = 0; o < t.length - 1; o++) {
            var u = t[o];
            if (/^(cmd|meta|m)$/i.test(u))
                s = !0;
            else if (/^a(lt)?$/i.test(u))
                n = !0;
            else if (/^(c|ctrl|control)$/i.test(u))
                r = !0;
            else {
                if (!/^s(hift)$/i.test(u))
                    throw new Error("Unrecognized modifier name: " + u);
                i = !0
            }
        }
        return n && (e = "Alt-" + e), r && (e = "Ctrl-" + e), s && (e = "Cmd-" + e), i && (e = "Shift-" + e), e
    }
    function Di(e) {
        return typeof e == "string" ? Li[e] : e
    }
    function ji(e, t, n, r, i) {
        if (r && r.shared)
            return Ii(e, t, n, r, i);
        if (e.cm && !e.cm.curOp)
            return zn(e.cm, ji)(e, t, n, r, i);
        var s = new Hi(e, i), o = mt(t, n);
        r && Qo(r, s, !1);
        if (o > 0 || o == 0 && s.clearWhenEmpty !== !1)
            return s;
        s.replacedWith && (s.collapsed = !0, s.widgetNode = iu("span", [s.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || s.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (s.widgetNode.insertLeft = !0));
        if (s.collapsed) {
            if (us(e, t.line, t, n, s) || t.line != n.line && us(e, n.line, t, n, s))
                throw new Error("Inserting collapsed marker partially overlapping an existing one");
            E = !0
        }
        s.addToHistory && uo(e, {from: t,to: n,origin: "markText"}, e.sel, NaN);
        var u = t.line, a = e.cm, f;
        e.iter(u, n.line + 1, function(e) {
            a && s.collapsed && !a.options.lineWrapping && as(e) == a.display.maxLine && (f = !0), s.collapsed && u != t.line && Ys(e, 0), Vi(e, new zi(s, u == t.line ? t.ch : null, u == n.line ? n.ch : null)), ++u
        }), s.collapsed && e.iter(t.line, n.line + 1, function(t) {
            hs(e, t) && Ys(t, 0)
        }), s.clearOnEnter && No(s, "beforeCursorEnter", function() {
            s.clear()
        }), s.readOnly && (w = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), s.collapsed && (s.id = ++Bi, s.atomic = !0);
        if (a) {
            f && (a.curOp.updateMaxLine = !0);
            if (s.collapsed)
                Jn(a, t.line, n.line + 1);
            else if (s.className || s.title || s.startStyle || s.endStyle || s.css)
                for (var l = t.line; l <= n.line; l++)
                    Kn(a, l, "text");
            s.atomic && It(a.doc), Ao(a, "markerAdded", a, s)
        }
        return s
    }
    function Ii(e, t, n, r, i) {
        r = Qo(r), r.shared = !1;
        var s = [ji(e, t, n, r, i)], o = s[0], u = r.widgetNode;
        return $s(e, function(e) {
            u && (r.widgetNode = u.cloneNode(!0)), s.push(ji(e, Nt(e, t), Nt(e, n), r, i));
            for (var a = 0; a < e.linked.length; ++a)
                if (e.linked[a].isParent)
                    return;
            o = Xo(s)
        }), new Fi(s, o)
    }
    function qi(e) {
        return e.findMarks(vt(e.first, 0), e.clipPos(vt(e.lastLine())), function(e) {
            return e.parent
        })
    }
    function Ri(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n], i = r.find(), s = e.clipPos(i.from), o = e.clipPos(i.to);
            if (mt(s, o)) {
                var u = ji(e, s, o, r.primary, r.primary.type);
                r.markers.push(u), u.parent = r
            }
        }
    }
    function Ui(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t], r = [n.primary.doc];
            $s(n.primary.doc, function(e) {
                r.push(e)
            });
            for (var i = 0; i < n.markers.length; i++) {
                var s = n.markers[i];
                $o(r, s.doc) == -1 && (s.parent = null, n.markers.splice(i--, 1))
            }
        }
    }
    function zi(e, t, n) {
        this.marker = e, this.from = t, this.to = n
    }
    function Wi(e, t) {
        if (e)
            for (var n = 0; n < e.length; ++n) {
                var r = e[n];
                if (r.marker == t)
                    return r
            }
    }
    function Xi(e, t) {
        for (var n, r = 0; r < e.length; ++r)
            e[r] != t && (n || (n = [])).push(e[r]);
        return n
    }
    function Vi(e, t) {
        e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e)
    }
    function $i(e, t, n) {
        if (e)
            for (var r = 0, i; r < e.length; ++r) {
                var s = e[r], o = s.marker, u = s.from == null || (o.inclusiveLeft ? s.from <= t : s.from < t);
                if (u || s.from == t && o.type == "bookmark" && (!n || !s.marker.insertLeft)) {
                    var a = s.to == null || (o.inclusiveRight ? s.to >= t : s.to > t);
                    (i || (i = [])).push(new zi(o, s.from, a ? null : s.to))
                }
            }
        return i
    }
    function Ji(e, t, n) {
        if (e)
            for (var r = 0, i; r < e.length; ++r) {
                var s = e[r], o = s.marker, u = s.to == null || (o.inclusiveRight ? s.to >= t : s.to > t);
                if (u || s.from == t && o.type == "bookmark" && (!n || s.marker.insertLeft)) {
                    var a = s.from == null || (o.inclusiveLeft ? s.from <= t : s.from < t);
                    (i || (i = [])).push(new zi(o, a ? null : s.from - t, s.to == null ? null : s.to - t))
                }
            }
        return i
    }
    function Ki(e, t) {
        var n = kt(e, t.from.line) && Ks(e, t.from.line).markedSpans, r = kt(e, t.to.line) && Ks(e, t.to.line).markedSpans;
        if (!n && !r)
            return null;
        var i = t.from.ch, s = t.to.ch, o = mt(t.from, t.to) == 0, u = $i(n, i, o), a = Ji(r, s, o), f = t.text.length == 1, l = Xo(t.text).length + (f ? i : 0);
        if (u)
            for (var c = 0; c < u.length; ++c) {
                var h = u[c];
                if (h.to == null) {
                    var p = Wi(a, h.marker);
                    p ? f && (h.to = p.to == null ? null : p.to + l) : h.to = i
                }
            }
        if (a)
            for (var c = 0; c < a.length; ++c) {
                var h = a[c];
                h.to != null && (h.to += l);
                if (h.from == null) {
                    var p = Wi(u, h.marker);
                    p || (h.from = l, f && (u || (u = [])).push(h))
                } else
                    h.from += l, f && (u || (u = [])).push(h)
            }
        u && (u = Qi(u)), a && a != u && (a = Qi(a));
        var d = [u];
        if (!f) {
            var v = t.text.length - 2, m;
            if (v > 0 && u)
                for (var c = 0; c < u.length; ++c)
                    u[c].to == null && (m || (m = [])).push(new zi(u[c].marker, null, null));
            for (var c = 0; c < v; ++c)
                d.push(m);
            d.push(a)
        }
        return d
    }
    function Qi(e) {
        for (var t = 0; t < e.length; ++t) {
            var n = e[t];
            n.from != null && n.from == n.to && n.marker.clearWhenEmpty !== !1 && e.splice(t--, 1)
        }
        return e.length ? e : null
    }
    function Gi(e, t) {
        var n = po(e, t), r = Ki(e, t);
        if (!n)
            return r;
        if (!r)
            return n;
        for (var i = 0; i < n.length; ++i) {
            var s = n[i], o = r[i];
            if (s && o)
                e: for (var u = 0; u < o.length; ++u) {
                    var a = o[u];
                    for (var f = 0; f < s.length; ++f)
                        if (s[f].marker == a.marker)
                            continue e;
                    s.push(a)
                }
            else
                o && (n[i] = o)
        }
        return n
    }
    function Yi(e, t, n) {
        var r = null;
        e.iter(t.line, n.line + 1, function(e) {
            if (e.markedSpans)
                for (var t = 0; t < e.markedSpans.length; ++t) {
                    var n = e.markedSpans[t].marker;
                    n.readOnly && (!r || $o(r, n) == -1) && (r || (r = [])).push(n)
                }
        });
        if (!r)
            return null;
        var i = [{from: t,to: n}];
        for (var s = 0; s < r.length; ++s) {
            var o = r[s], u = o.find(0);
            for (var a = 0; a < i.length; ++a) {
                var f = i[a];
                if (mt(f.to, u.from) < 0 || mt(f.from, u.to) > 0)
                    continue;
                var l = [a, 1], c = mt(f.from, u.from), h = mt(f.to, u.to);
                (c < 0 || !o.inclusiveLeft && !c) && l.push({from: f.from,to: u.from}), (h > 0 || !o.inclusiveRight && !h) && l.push({from: u.to,to: f.to}), i.splice.apply(i, l), a += l.length - 1
            }
        }
        return i
    }
    function Zi(e) {
        var t = e.markedSpans;
        if (!t)
            return;
        for (var n = 0; n < t.length; ++n)
            t[n].marker.detachLine(e);
        e.markedSpans = null
    }
    function es(e, t) {
        if (!t)
            return;
        for (var n = 0; n < t.length; ++n)
            t[n].marker.attachLine(e);
        e.markedSpans = t
    }
    function ts(e) {
        return e.inclusiveLeft ? -1 : 0
    }
    function ns(e) {
        return e.inclusiveRight ? 1 : 0
    }
    function rs(e, t) {
        var n = e.lines.length - t.lines.length;
        if (n != 0)
            return n;
        var r = e.find(), i = t.find(), s = mt(r.from, i.from) || ts(e) - ts(t);
        if (s)
            return -s;
        var o = mt(r.to, i.to) || ns(e) - ns(t);
        return o ? o : t.id - e.id
    }
    function is(e, t) {
        var n = E && e.markedSpans, r;
        if (n)
            for (var i, s = 0; s < n.length; ++s)
                i = n[s], i.marker.collapsed && (t ? i.from : i.to) == null && (!r || rs(r, i.marker) < 0) && (r = i.marker);
        return r
    }
    function ss(e) {
        return is(e, !0)
    }
    function os(e) {
        return is(e, !1)
    }
    function us(e, t, n, r, i) {
        var s = Ks(e, t), o = E && s.markedSpans;
        if (o)
            for (var u = 0; u < o.length; ++u) {
                var a = o[u];
                if (!a.marker.collapsed)
                    continue;
                var f = a.marker.find(0), l = mt(f.from, n) || ts(a.marker) - ts(i), c = mt(f.to, r) || ns(a.marker) - ns(i);
                if (l >= 0 && c <= 0 || l <= 0 && c >= 0)
                    continue;
                if (l <= 0 && (mt(f.to, n) > 0 || a.marker.inclusiveRight && i.inclusiveLeft) || l >= 0 && (mt(f.from, r) < 0 || a.marker.inclusiveLeft && i.inclusiveRight))
                    return !0
            }
    }
    function as(e) {
        var t;
        while (t = ss(e))
            e = t.find(-1, !0).line;
        return e
    }
    function fs(e) {
        var t, n;
        while (t = os(e))
            e = t.find(1, !0).line, (n || (n = [])).push(e);
        return n
    }
    function ls(e, t) {
        var n = Ks(e, t), r = as(n);
        return n == r ? t : Zs(r)
    }
    function cs(e, t) {
        if (t > e.lastLine())
            return t;
        var n = Ks(e, t), r;
        if (!hs(e, n))
            return t;
        while (r = os(n))
            n = r.find(1, !0).line;
        return Zs(n) + 1
    }
    function hs(e, t) {
        var n = E && t.markedSpans;
        if (n)
            for (var r, i = 0; i < n.length; ++i) {
                r = n[i];
                if (!r.marker.collapsed)
                    continue;
                if (r.from == null)
                    return !0;
                if (r.marker.widgetNode)
                    continue;
                if (r.from == 0 && r.marker.inclusiveLeft && ps(e, t, r))
                    return !0
            }
    }
    function ps(e, t, n) {
        if (n.to == null) {
            var r = n.marker.find(1, !0);
            return ps(e, r.line, Wi(r.line.markedSpans, n.marker))
        }
        if (n.marker.inclusiveRight && n.to == t.text.length)
            return !0;
        for (var i, s = 0; s < t.markedSpans.length; ++s) {
            i = t.markedSpans[s];
            if (i.marker.collapsed && !i.marker.widgetNode && i.from == n.to && (i.to == null || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && ps(e, t, i))
                return !0
        }
    }
    function vs(e, t, n) {
        to(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && ai(e, null, n)
    }
    function ms(e) {
        if (e.height != null)
            return e.height;
        if (!au(document.body, e.node)) {
            var t = "position: relative;";
            e.coverGutter && (t += "margin-left: -" + e.cm.getGutterElement().offsetWidth + "px;"), uu(e.cm.display.measure, iu("div", [e.node], null, t))
        }
        return e.height = e.node.offsetHeight
    }
    function gs(e, t, n, r) {
        var i = new ds(e, n, r);
        return i.noHScroll && (e.display.alignWidgets = !0), hi(e.doc, t, "widget", function(t) {
            var n = t.widgets || (t.widgets = []);
            i.insertAt == null ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t;
            if (!hs(e.doc, t)) {
                var r = to(t) < e.doc.scrollTop;
                Ys(t, t.height + ms(i)), r && ai(e, null, i.height), e.curOp.forceUpdate = !0
            }
            return !0
        }), i
    }
    function bs(e, t, n, r) {
        e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), e.order != null && (e.order = null), Zi(e), es(e, n);
        var i = r ? r(e) : 1;
        i != e.height && Ys(e, i)
    }
    function ws(e) {
        e.parent = null, Zi(e)
    }
    function Es(e, t) {
        if (e)
            for (; ; ) {
                var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                if (!n)
                    break;
                e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
                var r = n[1] ? "bgClass" : "textClass";
                t[r] == null ? t[r] = n[2] : (new RegExp("(?:^|s)" + n[2] + "(?:$|s)")).test(t[r]) || (t[r] += " " + n[2])
            }
        return e
    }
    function Ss(e, t) {
        if (e.blankLine)
            return e.blankLine(t);
        if (!e.innerMode)
            return;
        var n = S.innerMode(e, t);
        if (n.mode.blankLine)
            return n.mode.blankLine(n.state)
    }
    function xs(e, t, n, r) {
        for (var i = 0; i < 10; i++) {
            r && (r[0] = S.innerMode(e, n).mode);
            var s = e.token(t, n);
            if (t.pos > t.start)
                return s
        }
        throw new Error("Mode " + e.name + " failed to advance stream.")
    }
    function Ts(e, t, n, r) {
        function i(e) {
            return {start: l.start,end: l.pos,string: l.current(),type: u || null,state: e ? Ni(s.mode, f) : f}
        }
        var s = e.doc, o = s.mode, u;
        t = Nt(s, t);
        var a = Ks(s, t.line), f = Gt(e, t.line, n), l = new Pi(a.text, e.options.tabSize), c;
        r && (c = []);
        while ((r || l.pos < t.ch) && !l.eol())
            l.start = l.pos, u = xs(o, l, f), r && c.push(i(!0));
        return r ? c : i()
    }
    function Ns(e, t, n, r, i, s, o) {
        var u = n.flattenSpans;
        u == null && (u = e.options.flattenSpans);
        var a = 0, f = null, l = new Pi(t, e.options.tabSize), c, h = e.options.addModeClass && [null];
        t == "" && Es(Ss(n, r), s);
        while (!l.eol()) {
            l.pos > e.options.maxHighlightLength ? (u = !1, o && Ls(e, t, r, l.pos), l.pos = t.length, c = null) : c = Es(xs(n, l, r, h), s);
            if (h) {
                var p = h[0].name;
                p && (c = "m-" + (c ? p + " " + c : p))
            }
            if (!u || f != c) {
                while (a < l.start)
                    a = Math.min(l.start, a + 5e4), i(a, f);
                f = c
            }
            l.start = l.pos
        }
        while (a < l.pos) {
            var d = Math.min(l.pos, a + 5e4);
            i(d, f), a = d
        }
    }
    function Cs(e, t, n, r) {
        var i = [e.state.modeGen], s = {};
        Ns(e, t.text, e.doc.mode, n, function(e, t) {
            i.push(e, t)
        }, s, r);
        for (var o = 0; o < e.state.overlays.length; ++o) {
            var u = e.state.overlays[o], a = 1, f = 0;
            Ns(e, t.text, u.mode, !0, function(e, t) {
                var n = a;
                while (f < e) {
                    var r = i[a];
                    r > e && i.splice(a, 1, e, i[a + 1], r), a += 2, f = Math.min(e, r)
                }
                if (!t)
                    return;
                if (u.opaque)
                    i.splice(n, a - n, e, "cm-overlay " + t), a = n + 2;
                else
                    for (; n < a; n += 2) {
                        var s = i[n + 1];
                        i[n + 1] = (s ? s + " " : "") + "cm-overlay " + t
                    }
            }, s)
        }
        return {styles: i,classes: s.bgClass || s.textClass ? s : null}
    }
    function ks(e, t, n) {
        if (!t.styles || t.styles[0] != e.state.modeGen) {
            var r = Cs(e, t, t.stateAfter = Gt(e, Zs(t)));
            t.styles = r.styles, r.classes ? t.styleClasses = r.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.frontier && e.doc.frontier++
        }
        return t.styles
    }
    function Ls(e, t, n, r) {
        var i = e.doc.mode, s = new Pi(t, e.options.tabSize);
        s.start = s.pos = r || 0, t == "" && Ss(i, n);
        while (!s.eol() && s.pos <= e.options.maxHighlightLength)
            xs(i, s, n), s.start = s.pos
    }
    function Ms(e, t) {
        if (!e || /^\s*$/.test(e))
            return null;
        var n = t.addModeClass ? Os : As;
        return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"))
    }
    function _s(e, t) {
        var n = iu("span", null, null, s ? "padding-right: .1px" : null), i = {pre: iu("pre", [n]),content: n,col: 0,pos: 0,cm: e};
        t.measure = {};
        for (var o = 0; o <= (t.rest ? t.rest.length : 0); o++) {
            var u = o ? t.rest[o - 1] : t.line, a;
            i.pos = 0, i.addToken = Ps, (r || s) && e.getOption("lineWrapping") && (i.addToken = Hs(i.addToken)), Su(e.display.measure) && (a = no(u)) && (i.addToken = Bs(i.addToken, a)), i.map = [];
            var f = t != e.display.externalMeasured && Zs(u);
            Fs(u, i, ks(e, u, f)), u.styleClasses && (u.styleClasses.bgClass && (i.bgClass = pu(u.styleClasses.bgClass, i.bgClass || "")), u.styleClasses.textClass && (i.textClass = pu(u.styleClasses.textClass, i.textClass || ""))), i.map.length == 0 && i.map.push(0, 0, i.content.appendChild(wu(e.display.measure))), o == 0 ? (t.measure.map = i.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(i.map), (t.measure.caches || (t.measure.caches = [])).push({}))
        }
        return s && /\bcm-tab\b/.test(i.content.lastChild.className) && (i.content.className = "cm-tab-wrap-hack"), ko(e, "renderLine", e, t.line, i.pre), i.pre.className && (i.textClass = pu(i.pre.className, i.textClass || "")), i
    }
    function Ds(e) {
        var t = iu("span", "•", "cm-invalidchar");
        return t.title = "\\u" + e.charCodeAt(0).toString(16), t
    }
    function Ps(e, t, n, s, o, u, a) {
        if (!t)
            return;
        var f = e.cm.options.specialChars, l = !1;
        if (!f.test(t)) {
            e.col += t.length;
            var c = document.createTextNode(t);
            e.map.push(e.pos, e.pos + t.length, c), r && i < 9 && (l = !0), e.pos += t.length
        } else {
            var c = document.createDocumentFragment(), h = 0;
            for (; ; ) {
                f.lastIndex = h;
                var p = f.exec(t), d = p ? p.index - h : t.length - h;
                if (d) {
                    var v = document.createTextNode(t.slice(h, h + d));
                    r && i < 9 ? c.appendChild(iu("span", [v])) : c.appendChild(v), e.map.push(e.pos, e.pos + d, v), e.col += d, e.pos += d
                }
                if (!p)
                    break;
                h += d + 1;
                if (p[0] == "   ") {
                    var m = e.cm.options.tabSize, g = m - e.col % m, v = c.appendChild(iu("span", Wo(g), "cm-tab"));
                    e.col += g
                } else {
                    var v = e.cm.options.specialCharPlaceholder(p[0]);
                    r && i < 9 ? c.appendChild(iu("span", [v])) : c.appendChild(v), e.col += 1
                }
                e.map.push(e.pos, e.pos + 1, v), e.pos++
            }
        }
        if (n || s || o || l || a) {
            var y = n || "";
            s && (y += s), o && (y += o);
            var b = iu("span", [c], y, a);
            return u && (b.title = u), e.content.appendChild(b)
        }
        e.content.appendChild(c)
    }
    function Hs(e) {
        function t(e) {
            var t = " ";
            for (var n = 0; n < e.length - 2; ++n)
                t += n % 2 ? " " : " ";
            return t += " ", t
        }
        return function(n, r, i, s, o, u) {
            e(n, r.replace(/ {3,}/g, t), i, s, o, u)
        }
    }
    function Bs(e, t) {
        return function(n, r, i, s, o, u) {
            i = i ? i + " cm-force-border" : "cm-force-border";
            var a = n.pos, f = a + r.length;
            for (; ; ) {
                for (var l = 0; l < t.length; l++) {
                    var c = t[l];
                    if (c.to > a && c.from <= a)
                        break
                }
                if (c.to >= f)
                    return e(n, r, i, s, o, u);
                e(n, r.slice(0, c.to - a), i, s, null, u), s = null, r = r.slice(c.to - a), a = c.to
            }
        }
    }
    function js(e, t, n, r) {
        var i = !r && n.widgetNode;
        i && (e.map.push(e.pos, e.pos + t, i), e.content.appendChild(i)), e.pos += t
    }
    function Fs(e, t, n) {
        var r = e.markedSpans, i = e.text, s = 0;
        if (!r) {
            for (var o = 1; o < n.length; o += 2)
                t.addToken(t, i.slice(s, s = n[o]), Ms(n[o + 1], t.cm.options));
            return
        }
        var u = i.length, a = 0, o = 1, f = "", l, c, h = 0, p, d, v, m, g;
        for (; ; ) {
            if (h == a) {
                p = d = v = m = c = "", g = null, h = Infinity;
                var y = [];
                for (var b = 0; b < r.length; ++b) {
                    var w = r[b], E = w.marker;
                    w.from <= a && (w.to == null || w.to > a) ? (w.to != null && h > w.to && (h = w.to, d = ""), E.className && (p += " " + E.className), E.css && (c = E.css), E.startStyle && w.from == a && (v += " " + E.startStyle), E.endStyle && w.to == h && (d += " " + E.endStyle), E.title && !m && (m = E.title), E.collapsed && (!g || rs(g.marker, E) < 0) && (g = w)) : w.from > a && h > w.from && (h = w.from), E.type == "bookmark" && w.from == a && E.widgetNode && y.push(E)
                }
                if (g && (g.from || 0) == a) {
                    js(t, (g.to == null ? u + 1 : g.to) - a, g.marker, g.from == null);
                    if (g.to == null)
                        return
                }
                if (!g && y.length)
                    for (var b = 0; b < y.length; ++b)
                        js(t, 0, y[b])
            }
            if (a >= u)
                break;
            var S = Math.min(u, h);
            for (; ; ) {
                if (f) {
                    var x = a + f.length;
                    if (!g) {
                        var T = x > S ? f.slice(0, S - a) : f;
                        t.addToken(t, T, l ? l + p : p, v, a + T.length == h ? d : "", m, c)
                    }
                    if (x >= S) {
                        f = f.slice(S - a), a = S;
                        break
                    }
                    a = x, v = ""
                }
                f = i.slice(s, s = n[o++]), l = Ms(n[o++], t.cm.options)
            }
        }
    }
    function Is(e, t) {
        return t.from.ch == 0 && t.to.ch == 0 && Xo(t.text) == "" && (!e.cm || e.cm.options.wholeLineUpdateBefore)
    }
    function qs(e, t, n, r) {
        function i(e) {
            return n ? n[e] : null
        }
        function s(e, n, i) {
            bs(e, n, i, r), Ao(e, "change", e, t)
        }
        var o = t.from, u = t.to, a = t.text, f = Ks(e, o.line), l = Ks(e, u.line), c = Xo(a), h = i(a.length - 1), p = u.line - o.line;
        if (Is(e, t)) {
            for (var d = 0, v = []; d < a.length - 1; ++d)
                v.push(new ys(a[d], i(d), r));
            s(l, l.text, h), p && e.remove(o.line, p), v.length && e.insert(o.line, v)
        } else if (f == l)
            if (a.length == 1)
                s(f, f.text.slice(0, o.ch) + c + f.text.slice(u.ch), h);
            else {
                for (var v = [], d = 1; d < a.length - 1; ++d)
                    v.push(new ys(a[d], i(d), r));
                v.push(new ys(c + f.text.slice(u.ch), h, r)), s(f, f.text.slice(0, o.ch) + a[0], i(0)), e.insert(o.line + 1, v)
            }
        else if (a.length == 1)
            s(f, f.text.slice(0, o.ch) + a[0] + l.text.slice(u.ch), i(0)), e.remove(o.line + 1, p);
        else {
            s(f, f.text.slice(0, o.ch) + a[0], i(0)), s(l, c + l.text.slice(u.ch), h);
            for (var d = 1, v = []; d < a.length - 1; ++d)
                v.push(new ys(a[d], i(d), r));
            p > 1 && e.remove(o.line + 1, p - 1), e.insert(o.line + 1, v)
        }
        Ao(e, "change", e, t)
    }
    function Rs(e) {
        this.lines = e, this.parent = null;
        for (var t = 0, n = 0; t < e.length; ++t)
            e[t].parent = this, n += e[t].height;
        this.height = n
    }
    function Us(e) {
        this.children = e;
        var t = 0, n = 0;
        for (var r = 0; r < e.length; ++r) {
            var i = e[r];
            t += i.chunkSize(), n += i.height, i.parent = this
        }
        this.size = t, this.height = n, this.parent = null
    }
    function $s(e, t, n) {
        function r(e, i, s) {
            if (e.linked)
                for (var o = 0; o < e.linked.length; ++o) {
                    var u = e.linked[o];
                    if (u.doc == i)
                        continue;
                    var a = s && u.sharedHist;
                    if (n && !a)
                        continue;
                    t(u.doc, a), r(u.doc, e, a)
                }
        }
        r(e, null, !0)
    }
    function Js(e, t) {
        if (t.cm)
            throw new Error("This document is already in use.");
        e.doc = t, t.cm = e, L(e), T(e), e.options.lineWrapping || P(e), e.options.mode = t.modeOption, Jn(e)
    }
    function Ks(e, t) {
        t -= e.first;
        if (t < 0 || t >= e.size)
            throw new Error("There is no line " + (t + e.first) + " in the document.");
        for (var n = e; !n.lines; )
            for (var r = 0; ; ++r) {
                var i = n.children[r], s = i.chunkSize();
                if (t < s) {
                    n = i;
                    break
                }
                t -= s
            }
        return n.lines[t]
    }
    function Qs(e, t, n) {
        var r = [], i = t.line;
        return e.iter(t.line, n.line + 1, function(e) {
            var s = e.text;
            i == n.line && (s = s.slice(0, n.ch)), i == t.line && (s = s.slice(t.ch)), r.push(s), ++i
        }), r
    }
    function Gs(e, t, n) {
        var r = [];
        return e.iter(t, n, function(e) {
            r.push(e.text)
        }), r
    }
    function Ys(e, t) {
        var n = t - e.height;
        if (n)
            for (var r = e; r; r = r.parent)
                r.height += n
    }
    function Zs(e) {
        if (e.parent == null)
            return null;
        var t = e.parent, n = $o(t.lines, e);
        for (var r = t.parent; r; t = r, r = r.parent)
            for (var i = 0; ; ++i) {
                if (r.children[i] == t)
                    break;
                n += r.children[i].chunkSize()
            }
        return n + t.first
    }
    function eo(e, t) {
        var n = e.first;
        e: do {
            for (var r = 0; r < e.children.length; ++r) {
                var i = e.children[r], s = i.height;
                if (t < s) {
                    e = i;
                    continue e
                }
                t -= s, n += i.chunkSize()
            }
            return n
        } while (!e.lines);
        for (var r = 0; r < e.lines.length; ++r) {
            var o = e.lines[r], u = o.height;
            if (t < u)
                break;
            t -= u
        }
        return n + r
    }
    function to(e) {
        e = as(e);
        var t = 0, n = e.parent;
        for (var r = 0; r < n.lines.length; ++r) {
            var i = n.lines[r];
            if (i == e)
                break;
            t += i.height
        }
        for (var s = n.parent; s; n = s, s = n.parent)
            for (var r = 0; r < s.children.length; ++r) {
                var o = s.children[r];
                if (o == n)
                    break;
                t += o.height
            }
        return t
    }
    function no(e) {
        var t = e.order;
        return t == null && (t = e.order = zu(e.text)), t
    }
    function ro(e) {
        this.done = [], this.undone = [], this.undoDepth = Infinity, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e || 1
    }
    function io(e, t) {
        var n = {from: gt(t.from),to: Xr(t),text: Qs(e, t.from, t.to)};
        return co(e, n, t.from.line, t.to.line + 1), $s(e, function(e) {
            co(e, n, t.from.line, t.to.line + 1)
        }, !0), n
    }
    function so(e) {
        while (e.length) {
            var t = Xo(e);
            if (!t.ranges)
                break;
            e.pop()
        }
    }
    function oo(e, t) {
        if (t)
            return so(e.done), Xo(e.done);
        if (e.done.length && !Xo(e.done).ranges)
            return Xo(e.done);
        if (e.done.length > 1 && !e.done[e.done.length - 2].ranges)
            return e.done.pop(), Xo(e.done)
    }
    function uo(e, t, n, r) {
        var i = e.history;
        i.undone.length = 0;
        var s = +(new Date), o;
        if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && (t.origin.charAt(0) == "+" && e.cm && i.lastModTime > s - e.cm.options.historyEventDelay || t.origin.charAt(0) == "*")) && (o = oo(i, i.lastOp == r))) {
            var u = Xo(o.changes);
            mt(t.from, t.to) == 0 && mt(t.from, u.to) == 0 ? u.to = Xr(t) : o.changes.push(io(e, t))
        } else {
            var a = Xo(i.done);
            (!a || !a.ranges) && lo(e.sel, i.done), o = {changes: [io(e, t)],generation: i.generation}, i.done.push(o);
            while (i.done.length > i.undoDepth)
                i.done.shift(), i.done[0].ranges || i.done.shift()
        }
        i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = s, i.lastOp = i.lastSelOp = r, i.lastOrigin = i.lastSelOrigin = t.origin, u || ko(e, "historyAdded")
    }
    function ao(e, t, n, r) {
        var i = t.charAt(0);
        return i == "*" || i == "+" && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
    }
    function fo(e, t, n, r) {
        var i = e.history, s = r && r.origin;
        n == i.lastSelOp || s && i.lastSelOrigin == s && (i.lastModTime == i.lastSelTime && i.lastOrigin == s || ao(e, s, Xo(i.done), t)) ? i.done[i.done.length - 1] = t : lo(t, i.done), i.lastSelTime = +(new Date), i.lastSelOrigin = s, i.lastSelOp = n, r && r.clearRedo !== !1 && so(i.undone)
    }
    function lo(e, t) {
        var n = Xo(t);
        n && n.ranges && n.equals(e) || t.push(e)
    }
    function co(e, t, n, r) {
        var i = t["spans_" + e.id], s = 0;
        e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(n) {
            n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[s] = n.markedSpans), ++s
        })
    }
    function ho(e) {
        if (!e)
            return null;
        for (var t = 0, n; t < e.length; ++t)
            e[t].marker.explicitlyCleared ? n || (n = e.slice(0, t)) : n && n.push(e[t]);
        return n ? n.length ? n : null : e
    }
    function po(e, t) {
        var n = t["spans_" + e.id];
        if (!n)
            return null;
        for (var r = 0, i = []; r < t.text.length; ++r)
            i.push(ho(n[r]));
        return i
    }
    function vo(e, t, n) {
        for (var r = 0, i = []; r < e.length; ++r) {
            var s = e[r];
            if (s.ranges) {
                i.push(n ? wt.prototype.deepCopy.call(s) : s);
                continue
            }
            var o = s.changes, u = [];
            i.push({changes: u});
            for (var a = 0; a < o.length; ++a) {
                var f = o[a], l;
                u.push({from: f.from,to: f.to,text: f.text});
                if (t)
                    for (var c in f)
                        (l = c.match(/^spans_(\d+)$/)) && $o(t, Number(l[1])) > -1 && (Xo(u)[c] = f[c], delete f[c])
            }
        }
        return i
    }
    function mo(e, t, n, r) {
        n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0)
    }
    function go(e, t, n, r) {
        for (var i = 0; i < e.length; ++i) {
            var s = e[i], o = !0;
            if (s.ranges) {
                s.copied || (s = e[i] = s.deepCopy(), s.copied = !0);
                for (var u = 0; u < s.ranges.length; u++)
                    mo(s.ranges[u].anchor, t, n, r), mo(s.ranges[u].head, t, n, r);
                continue
            }
            for (var u = 0; u < s.changes.length; ++u) {
                var a = s.changes[u];
                if (n < a.from.line)
                    a.from = vt(a.from.line + r, a.from.ch), a.to = vt(a.to.line + r, a.to.ch);
                else if (t <= a.to.line) {
                    o = !1;
                    break
                }
            }
            o || (e.splice(0, i + 1), i = 0)
        }
    }
    function yo(e, t) {
        var n = t.from.line, r = t.to.line, i = t.text.length - (r - n) - 1;
        go(e.done, n, r, i), go(e.undone, n, r, i)
    }
    function Eo(e) {
        return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == 0
    }
    function xo(e) {
        return e.target || e.srcElement
    }
    function To(e) {
        var t = e.which;
        return t == null && (e.button & 1 ? t = 1 : e.button & 2 ? t = 3 : e.button & 4 && (t = 2)), v && e.ctrlKey && t == 1 && (t = 3), t
    }
    function Ao(e, t) {
        function s(e) {
            return function() {
                e.apply(null, r)
            }
        }
        var n = e._handlers && e._handlers[t];
        if (!n)
            return;
        var r = Array.prototype.slice.call(arguments, 2), i;
        Mn ? i = Mn.delayedCallbacks : Lo ? i = Lo : (i = Lo = [], setTimeout(Oo, 0));
        for (var o = 0; o < n.length; ++o)
            i.push(s(n[o]))
    }
    function Oo() {
        var e = Lo;
        Lo = null;
        for (var t = 0; t < e.length; ++t)
            e[t]()
    }
    function Mo(e, t, n) {
        return typeof t == "string" && (t = {type: t,preventDefault: function() {
                this.defaultPrevented = !0
            }}), ko(e, n || t.type, e, t), Eo(t) || t.codemirrorIgnore
    }
    function _o(e) {
        var t = e._handlers && e._handlers.cursorActivity;
        if (!t)
            return;
        var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []);
        for (var r = 0; r < t.length; ++r)
            $o(n, t[r]) == -1 && n.push(t[r])
    }
    function Do(e, t) {
        var n = e._handlers && e._handlers[t];
        return n && n.length > 0
    }
    function Po(e) {
        e.prototype.on = function(e, t) {
            No(this, e, t)
        }, e.prototype.off = function(e, t) {
            Co(this, e, t)
        }
    }
    function qo() {
        this.id = null
    }
    function Uo(e, t, n) {
        for (var r = 0, i = 0; ; ) {
            var s = e.indexOf(" ", r);
            s == -1 && (s = e.length);
            var o = s - r;
            if (s == e.length || i + o >= t)
                return r + Math.min(o, t - i);
            i += s - r, i += n - i % n, r = s + 1;
            if (i >= t)
                return r
        }
    }
    function Wo(e) {
        while (zo.length <= e)
            zo.push(Xo(zo) + " ");
        return zo[e]
    }
    function Xo(e) {
        return e[e.length - 1]
    }
    function $o(e, t) {
        for (var n = 0; n < e.length; ++n)
            if (e[n] == t)
                return n;
        return -1
    }
    function Jo(e, t) {
        var n = [];
        for (var r = 0; r < e.length; r++)
            n[r] = t(e[r], r);
        return n
    }
    function Ko(e, t) {
        var n;
        if (Object.create)
            n = Object.create(e);
        else {
            var r = function() {
            };
            r.prototype = e, n = new r
        }
        return t && Qo(t, n), n
    }
    function Qo(e, t, n) {
        t || (t = {});
        for (var r in e)
            e.hasOwnProperty(r) && (n !== !1 || !t.hasOwnProperty(r)) && (t[r] = e[r]);
        return t
    }
    function Go(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function() {
            return e.apply(null, t)
        }
    }
    function eu(e, t) {
        return t ? t.source.indexOf("\\w") > -1 && Zo(e) ? !0 : t.test(e) : Zo(e)
    }
    function tu(e) {
        for (var t in e)
            if (e.hasOwnProperty(t) && e[t])
                return !1;
        return !0
    }
    function ru(e) {
        return e.charCodeAt(0) >= 768 && nu.test(e)
    }
    function iu(e, t, n, r) {
        var i = document.createElement(e);
        n && (i.className = n), r && (i.style.cssText = r);
        if (typeof t == "string")
            i.appendChild(document.createTextNode(t));
        else if (t)
            for (var s = 0; s < t.length; ++s)
                i.appendChild(t[s]);
        return i
    }
    function ou(e) {
        for (var t = e.childNodes.length; t > 0; --t)
            e.removeChild(e.firstChild);
        return e
    }
    function uu(e, t) {
        return ou(e).appendChild(t)
    }
    function au(e, t) {
        if (e.contains)
            return e.contains(t);
        while (t = t.parentNode)
            if (t == e)
                return !0
    }
    function fu() {
        return document.activeElement
    }
    function lu(e) {
        return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
    }
    function pu(e, t) {
        var n = e.split(" ");
        for (var r = 0; r < n.length; r++)
            n[r] && !lu(n[r]).test(t) && (t += " " + n[r]);
        return t
    }
    function du(e) {
        if (!document.body.getElementsByClassName)
            return;
        var t = document.body.getElementsByClassName("CodeMirror");
        for (var n = 0; n < t.length; n++) {
            var r = t[n].CodeMirror;
            r && e(r)
        }
    }
    function mu() {
        if (vu)
            return;
        gu(), vu = !0
    }
    function gu() {
        var e;
        No(window, "resize", function() {
            e == null && (e = setTimeout(function() {
                e = null, du(lr)
            }, 100))
        }), No(window, "blur", function() {
            du(Ur)
        })
    }
    function wu(e) {
        if (bu == null) {
            var t = iu("span", "​");
            uu(e, iu("span", [t, document.createTextNode("x")])), e.firstChild.offsetHeight != 0 && (bu = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(r && i < 8))
        }
        return bu ? iu("span", "​") : iu("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px")
    }
    function Su(e) {
        if (Eu != null)
            return Eu;
        var t = uu(e, document.createTextNode("AخA")), n = su(t, 0, 1).getBoundingClientRect();
        if (!n || n.left == n.right)
            return !1;
        var r = su(t, 1, 2).getBoundingClientRect();
        return Eu = r.right - n.right < 3
    }
    function ku(e) {
        if (Cu != null)
            return Cu;
        var t = uu(e, iu("span", "x")), n = t.getBoundingClientRect(), r = su(t, 0, 1).getBoundingClientRect();
        return Cu = Math.abs(n.left - r.left) > 1
    }
    function Au(e, t, n, r) {
        if (!e)
            return r(t, n, "ltr");
        var i = !1;
        for (var s = 0; s < e.length; ++s) {
            var o = e[s];
            if (o.from < n && o.to > t || t == n && o.to == t)
                r(Math.max(o.from, t), Math.min(o.to, n), o.level == 1 ? "rtl" : "ltr"), i = !0
        }
        i || r(t, n, "ltr")
    }
    function Ou(e) {
        return e.level % 2 ? e.to : e.from
    }
    function Mu(e) {
        return e.level % 2 ? e.from : e.to
    }
    function _u(e) {
        var t = no(e);
        return t ? Ou(t[0]) : 0
    }
    function Du(e) {
        var t = no(e);
        return t ? Mu(Xo(t)) : e.text.length
    }
    function Pu(e, t) {
        var n = Ks(e.doc, t), r = as(n);
        r != n && (t = Zs(r));
        var i = no(r), s = i ? i[0].level % 2 ? Du(r) : _u(r) : 0;
        return vt(t, s)
    }
    function Hu(e, t) {
        var n, r = Ks(e.doc, t);
        while (n = os(r))
            r = n.find(1, !0).line, t = null;
        var i = no(r), s = i ? i[0].level % 2 ? _u(r) : Du(r) : r.text.length;
        return vt(t == null ? Zs(r) : t, s)
    }
    function Bu(e, t) {
        var n = Pu(e, t.line), r = Ks(e.doc, n.line), i = no(r);
        if (!i || i[0].level == 0) {
            var s = Math.max(0, r.text.search(/\S/)), o = t.line == n.line && t.ch <= s && t.ch;
            return vt(n.line, o ? 0 : s)
        }
        return n
    }
    function ju(e, t, n) {
        var r = e[0].level;
        return t == r ? !0 : n == r ? !1 : t < n
    }
    function Iu(e, t) {
        Fu = null;
        for (var n = 0, r; n < e.length; ++n) {
            var i = e[n];
            if (i.from < t && i.to > t)
                return n;
            if (i.from == t || i.to == t) {
                if (r != null)
                    return ju(e, i.level, e[r].level) ? (i.from != i.to && (Fu = r), n) : (i.from != i.to && (Fu = n), r);
                r = n
            }
        }
        return r
    }
    function qu(e, t, n, r) {
        if (!r)
            return t + n;
        do
            t += n;
        while (t > 0 && ru(e.text.charAt(t)));
        return t
    }
    function Ru(e, t, n, r) {
        var i = no(e);
        if (!i)
            return Uu(e, t, n, r);
        var s = Iu(i, t), o = i[s], u = qu(e, t, o.level % 2 ? -n : n, r);
        for (; ; ) {
            if (u > o.from && u < o.to)
                return u;
            if (u == o.from || u == o.to)
                return Iu(i, u) == s ? u : (o = i[s += n], n > 0 == o.level % 2 ? o.to : o.from);
            o = i[s += n];
            if (!o)
                return null;
            n > 0 == o.level % 2 ? u = qu(e, o.to, -1, r) : u = qu(e, o.from, 1, r)
        }
    }
    function Uu(e, t, n, r) {
        var i = t + n;
        if (r)
            while (i > 0 && ru(e.text.charAt(i)))
                i += n;
        return i < 0 || i > e.text.length ? null : i
    }
    var e = /gecko\/\d/i.test(navigator.userAgent), t = /MSIE \d/.test(navigator.userAgent), n = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), r = t || n, i = r && (t ? document.documentMode || 6 : n[1]), s = /WebKit\//.test(navigator.userAgent), o = s && /Qt\/\d+\.\d+/.test(navigator.userAgent), u = /Chrome\//.test(navigator.userAgent), a = /Opera\//.test(navigator.userAgent), f = /Apple Computer/.test(navigator.vendor), l = /KHTML\//.test(navigator.userAgent), c = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent), h = /PhantomJS/.test(navigator.userAgent), p = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent), d = p || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent), v = p || /Mac/.test(navigator.platform), m = /win/i.test(navigator.platform), g = a && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
    g && (g = Number(g[1])), g && g >= 15 && (a = !1, s = !0);
    var y = v && (o || a && (g == null || g < 12.11)), b = e || r && i >= 9, w = !1, E = !1;
    j.prototype = Qo({update: function(e) {
            var t = e.scrollWidth > e.clientWidth + 1, n = e.scrollHeight > e.clientHeight + 1, r = e.nativeBarWidth;
            if (n) {
                this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";
                var i = e.viewHeight - (t ? r : 0);
                this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px"
            } else
                this.vert.style.display = "", this.vert.firstChild.style.height = "0";
            if (t) {
                this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
                var s = e.viewWidth - e.barLeft - (n ? r : 0);
                this.horiz.firstChild.style.width = e.scrollWidth - e.clientWidth + s + "px"
            } else
                this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
            return !this.checkedOverlay && e.clientHeight > 0 && (r == 0 && this.overlayHack(), this.checkedOverlay = !0), {right: n ? r : 0,bottom: t ? r : 0}
        },setScrollLeft: function(e) {
            this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e)
        },setScrollTop: function(e) {
            this.vert.scrollTop != e && (this.vert.scrollTop = e)
        },overlayHack: function() {
            var e = v && !c ? "12px" : "18px";
            this.horiz.style.minHeight = this.vert.style.minWidth = e;
            var t = this, n = function(e) {
                xo(e) != t.vert && xo(e) != t.horiz && zn(t.cm, pr)(e)
            };
            No(this.vert, "mousedown", n), No(this.horiz, "mousedown", n)
        },clear: function() {
            var e = this.horiz.parentNode;
            e.removeChild(this.horiz), e.removeChild(this.vert)
        }}, j.prototype), F.prototype = Qo({update: function() {
            return {bottom: 0,right: 0}
        },setScrollLeft: function() {
        },setScrollTop: function() {
        },clear: function() {
        }}, F.prototype), S.scrollbarModel = {"native": j,"null": F};
    var vt = S.Pos = function(e, t) {
        if (!(this instanceof vt))
            return new vt(e, t);
        this.line = e, this.ch = t
    }, mt = S.cmpPos = function(e, t) {
        return e.line - t.line || e.ch - t.ch
    };
    wt.prototype = {primary: function() {
            return this.ranges[this.primIndex]
        },equals: function(e) {
            if (e == this)
                return !0;
            if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length)
                return !1;
            for (var t = 0; t < this.ranges.length; t++) {
                var n = this.ranges[t], r = e.ranges[t];
                if (mt(n.anchor, r.anchor) != 0 || mt(n.head, r.head) != 0)
                    return !1
            }
            return !0
        },deepCopy: function() {
            for (var e = [], t = 0; t < this.ranges.length; t++)
                e[t] = new Et(gt(this.ranges[t].anchor), gt(this.ranges[t].head));
            return new wt(e, this.primIndex)
        },somethingSelected: function() {
            for (var e = 0; e < this.ranges.length; e++)
                if (!this.ranges[e].empty())
                    return !0;
            return !1
        },contains: function(e, t) {
            t || (t = e);
            for (var n = 0; n < this.ranges.length; n++) {
                var r = this.ranges[n];
                if (mt(t, r.from()) >= 0 && mt(e, r.to()) <= 0)
                    return n
            }
            return -1
        }}, Et.prototype = {from: function() {
            return bt(this.anchor, this.head)
        },to: function() {
            return yt(this.anchor, this.head)
        },empty: function() {
            return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
        }};
    var hn = {left: 0,right: 0,top: 0,bottom: 0}, Ln, Mn = null, _n = 0, rr = null, dr, vr, Er = 0, Cr = 0, kr = null;
    r ? kr = -0.53 : e ? kr = 15 : u ? kr = -0.7 : f && (kr = -1 / 3);
    var Lr = function(e) {
        var t = e.wheelDeltaX, n = e.wheelDeltaY;
        return t == null && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), n == null && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : n == null && (n = e.wheelDelta), {x: t,y: n}
    };
    S.wheelEventPixels = function(e) {
        var t = Lr(e);
        return t.x *= kr, t.y *= kr, t
    };
    var _r = new qo, Br = null, Xr = S.changeEnd = function(e) {
        return e.text ? vt(e.from.line + e.text.length - 1, Xo(e.text).length + (e.text.length == 1 ? e.from.ch : 0)) : e.to
    };
    S.prototype = {constructor: S,focus: function() {
            window.focus(), or(this), nr(this)
        },setOption: function(e, t) {
            var n = this.options, r = n[e];
            if (n[e] == t && e != "mode")
                return;
            n[e] = t, gi.hasOwnProperty(e) && zn(this, gi[e])(this, t, r)
        },getOption: function(e) {
            return this.options[e]
        },getDoc: function() {
            return this.doc
        },addKeyMap: function(e, t) {
            this.state.keyMaps[t ? "push" : "unshift"](Di(e))
        },removeKeyMap: function(e) {
            var t = this.state.keyMaps;
            for (var n = 0; n < t.length; ++n)
                if (t[n] == e || t[n].name == e)
                    return t.splice(n, 1), !0
        },addOverlay: Wn(function(e, t) {
            var n = e.token ? e : S.getMode(this.options, e);
            if (n.startState)
                throw new Error("Overlays may not be stateful.");
            this.state.overlays.push({mode: n,modeSpec: e,opaque: t && t.opaque}), this.state.modeGen++, Jn(this)
        }),removeOverlay: Wn(function(e) {
            var t = this.state.overlays;
            for (var n = 0; n < t.length; ++n) {
                var r = t[n].modeSpec;
                if (r == e || typeof e == "string" && r.name == e) {
                    t.splice(n, 1), this.state.modeGen++, Jn(this);
                    return
                }
            }
        }),indentLine: Wn(function(e, t, n) {
            typeof t != "string" && typeof t != "number" && (t == null ? t = this.options.smartIndent ? "smart" : "prev" : t = t ? "add" : "subtract"), kt(this.doc, e) && ci(this, e, t, n)
        }),indentSelection: Wn(function(e) {
            var t = this.doc.sel.ranges, n = -1;
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                if (!i.empty()) {
                    var s = i.from(), o = i.to(), u = Math.max(n, s.line);
                    n = Math.min(this.lastLine(), o.line - (o.ch ? 0 : 1)) + 1;
                    for (var a = u; a < n; ++a)
                        ci(this, a, e);
                    var f = this.doc.sel.ranges;
                    s.ch == 0 && t.length == f.length && f[r].from().ch > 0 && _t(this.doc, r, new Et(s, f[r].to()), jo)
                } else
                    i.head.line > n && (ci(this, i.head.line, e, !0), n = i.head.line, r == this.doc.sel.primIndex && fi(this))
            }
        }),getTokenAt: function(e, t) {
            return Ts(this, e, t)
        },getLineTokens: function(e, t) {
            return Ts(this, vt(e), t, !0)
        },getTokenTypeAt: function(e) {
            e = Nt(this.doc, e);
            var t = ks(this, Ks(this.doc, e.line)), n = 0, r = (t.length - 1) / 2, i = e.ch, s;
            if (i == 0)
                s = t[2];
            else
                for (; ; ) {
                    var o = n + r >> 1;
                    if ((o ? t[o * 2 - 1] : 0) >= i)
                        r = o;
                    else {
                        if (!(t[o * 2 + 1] < i)) {
                            s = t[o * 2 + 2];
                            break
                        }
                        n = o + 1
                    }
                }
            var u = s ? s.indexOf("cm-overlay ") : -1;
            return u < 0 ? s : u == 0 ? null : s.slice(0, u - 1)
        },getModeAt: function(e) {
            var t = this.doc.mode;
            return t.innerMode ? S.innerMode(t, this.getTokenAt(e).state).mode : t
        },getHelper: function(e, t) {
            return this.getHelpers(e, t)[0]
        },getHelpers: function(e, t) {
            var n = [];
            if (!Ti.hasOwnProperty(t))
                return Ti;
            var r = Ti[t], i = this.getModeAt(e);
            if (typeof i[t] == "string")
                r[i[t]] && n.push(r[i[t]]);
            else if (i[t])
                for (var s = 0; s < i[t].length; s++) {
                    var o = r[i[t][s]];
                    o && n.push(o)
                }
            else
                i.helperType && r[i.helperType] ? n.push(r[i.helperType]) : r[i.name] && n.push(r[i.name]);
            for (var s = 0; s < r._global.length; s++) {
                var u = r._global[s];
                u.pred(i, this) && $o(n, u.val) == -1 && n.push(u.val)
            }
            return n
        },getStateAfter: function(e, t) {
            var n = this.doc;
            return e = Tt(n, e == null ? n.first + n.size - 1 : e), Gt(this, e + 1, t)
        },cursorCoords: function(e, t) {
            var n, r = this.doc.sel.primary();
            return e == null ? n = r.head : typeof e == "object" ? n = Nt(this.doc, e) : n = e ? r.from() : r.to(), xn(this, n, t || "page")
        },charCoords: function(e, t) {
            return Sn(this, Nt(this.doc, e), t || "page")
        },coordsChar: function(e, t) {
            return e = En(this, e, t || "page"), Cn(this, e.left, e.top)
        },lineAtHeight: function(e, t) {
            return e = En(this, {top: e,left: 0}, t || "page").top, eo(this.doc, e + this.display.viewOffset)
        },heightAtLine: function(e, t) {
            var n = !1, r = this.doc.first + this.doc.size - 1;
            e < this.doc.first ? e = this.doc.first : e > r && (e = r, n = !0);
            var i = Ks(this.doc, e);
            return wn(this, i, {top: 0,left: 0}, t || "page").top + (n ? this.doc.height - to(i) : 0)
        },defaultTextHeight: function() {
            return An(this.display)
        },defaultCharWidth: function() {
            return On(this.display)
        },setGutterMarker: Wn(function(e, t, n) {
            return hi(this.doc, e, "gutter", function(e) {
                var r = e.gutterMarkers || (e.gutterMarkers = {});
                return r[t] = n, !n && tu(r) && (e.gutterMarkers = null), !0
            })
        }),clearGutter: Wn(function(e) {
            var t = this, n = t.doc, r = n.first;
            n.iter(function(n) {
                n.gutterMarkers && n.gutterMarkers[e] && (n.gutterMarkers[e] = null, Kn(t, r, "gutter"), tu(n.gutterMarkers) && (n.gutterMarkers = null)), ++r
            })
        }),addLineWidget: Wn(function(e, t, n) {
            return gs(this, e, t, n)
        }),removeLineWidget: function(e) {
            e.clear()
        },lineInfo: function(e) {
            if (typeof e == "number") {
                if (!kt(this.doc, e))
                    return null;
                var t = e;
                e = Ks(this.doc, e);
                if (!e)
                    return null
            } else {
                var t = Zs(e);
                if (t == null)
                    return null
            }
            return {line: t,handle: e,text: e.text,gutterMarkers: e.gutterMarkers,textClass: e.textClass,bgClass: e.bgClass,wrapClass: e.wrapClass,widgets: e.widgets}
        },getViewport: function() {
            return {from: this.display.viewFrom,to: this.display.viewTo}
        },addWidget: function(e, t, n, r, i) {
            var s = this.display;
            e = xn(this, Nt(this.doc, e));
            var o = e.bottom, u = e.left;
            t.style.position = "absolute", t.setAttribute("cm-ignore-events", "true"), s.sizer.appendChild(t);
            if (r == "over")
                o = e.top;
            else if (r == "above" || r == "near") {
                var a = Math.max(s.wrapper.clientHeight, this.doc.height), f = Math.max(s.sizer.clientWidth, s.lineSpace.clientWidth);
                (r == "above" || e.bottom + t.offsetHeight > a) && e.top > t.offsetHeight ? o = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= a && (o = e.bottom), u + t.offsetWidth > f && (u = f - t.offsetWidth)
            }
            t.style.top = o + "px", t.style.left = t.style.right = "", i == "right" ? (u = s.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : (i == "left" ? u = 0 : i == "middle" && (u = (s.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = u + "px"), n && oi(this, u, o, u + t.offsetWidth, o + t.offsetHeight)
        },triggerOnKeyDown: Wn(jr),triggerOnKeyPress: Wn(qr),triggerOnKeyUp: Ir,execCommand: function(e) {
            if (ki.hasOwnProperty(e))
                return ki[e](this)
        },findPosH: function(e, t, n, r) {
            var i = 1;
            t < 0 && (i = -1, t = -t);
            for (var s = 0, o = Nt(this.doc, e); s < t; ++s) {
                o = di(this.doc, o, i, n, r);
                if (o.hitSide)
                    break
            }
            return o
        },moveH: Wn(function(e, t) {
            var n = this;
            n.extendSelectionsBy(function(r) {
                return n.display.shift || n.doc.extend || r.empty() ? di(n.doc, r.head, e, t, n.options.rtlMoveVisually) : e < 0 ? r.from() : r.to()
            }, Io)
        }),deleteH: Wn(function(e, t) {
            var n = this.doc.sel, r = this.doc;
            n.somethingSelected() ? r.replaceSelection("", null, "+delete") : pi(this, function(n) {
                var i = di(r, n.head, e, t, !1);
                return e < 0 ? {from: i,to: n.head} : {from: n.head,to: i}
            })
        }),findPosV: function(e, t, n, r) {
            var i = 1, s = r;
            t < 0 && (i = -1, t = -t);
            for (var o = 0, u = Nt(this.doc, e); o < t; ++o) {
                var a = xn(this, u, "div");
                s == null ? s = a.left : a.left = s, u = vi(this, a, i, n);
                if (u.hitSide)
                    break
            }
            return u
        },moveV: Wn(function(e, t) {
            var n = this, r = this.doc, i = [], s = !n.display.shift && !r.extend && r.sel.somethingSelected();
            r.extendSelectionsBy(function(o) {
                if (s)
                    return e < 0 ? o.from() : o.to();
                var u = xn(n, o.head, "div");
                o.goalColumn != null && (u.left = o.goalColumn), i.push(u.left);
                var a = vi(n, u, e, t);
                return t == "page" && o == r.sel.primary() && ai(n, null, Sn(n, a, "div").top - u.top), a
            }, Io);
            if (i.length)
                for (var o = 0; o < r.sel.ranges.length; o++)
                    r.sel.ranges[o].goalColumn = i[o]
        }),findWordAt: function(e) {
            var t = this.doc, n = Ks(t, e.line).text, r = e.ch, i = e.ch;
            if (n) {
                var s = this.getHelper(e, "wordChars");
                (e.xRel < 0 || i == n.length) && r ? --r : ++i;
                var o = n.charAt(r), u = eu(o, s) ? function(e) {
                    return eu(e, s)
                } : /\s/.test(o) ? function(e) {
                    return /\s/.test(e)
                } : function(e) {
                    return !/\s/.test(e) && !eu(e)
                };
                while (r > 0 && u(n.charAt(r - 1)))
                    --r;
                while (i < n.length && u(n.charAt(i)))
                    ++i
            }
            return new Et(vt(e.line, r), vt(e.line, i))
        },toggleOverwrite: function(e) {
            if (e != null && e == this.state.overwrite)
                return;
            (this.state.overwrite = !this.state.overwrite) ? hu(this.display.cursorDiv, "CodeMirror-overwrite") : cu(this.display.cursorDiv, "CodeMirror-overwrite"), ko(this, "overwriteToggle", this, this.state.overwrite)
        },hasFocus: function() {
            return fu() == this.display.input
        },scrollTo: Wn(function(e, t) {
            (e != null || t != null) && li(this), e != null && (this.curOp.scrollLeft = e), t != null && (this.curOp.scrollTop = t)
        }),getScrollInfo: function() {
            var e = this.display.scroller;
            return {left: e.scrollLeft,top: e.scrollTop,height: e.scrollHeight - tn(this) - this.display.barHeight,width: e.scrollWidth - tn(this) - this.display.barWidth,clientHeight: rn(this),clientWidth: nn(this)}
        },scrollIntoView: Wn(function(e, t) {
            e == null ? (e = {from: this.doc.sel.primary().head,to: null}, t == null && (t = this.options.cursorScrollMargin)) : typeof e == "number" ? e = {from: vt(e, 0),to: null} : e.from == null && (e = {from: e,to: null}), e.to || (e.to = e.from), e.margin = t || 0;
            if (e.from.line != null)
                li(this), this.curOp.scrollToPos = e;
            else {
                var n = ui(this, Math.min(e.from.left, e.to.left), Math.min(e.from.top, e.to.top) - e.margin, Math.max(e.from.right, e.to.right), Math.max(e.from.bottom, e.to.bottom) + e.margin);
                this.scrollTo(n.scrollLeft, n.scrollTop)
            }
        }),setSize: Wn(function(e, t) {
            function r(e) {
                return typeof e == "number" || /^\d+$/.test(String(e)) ? e + "px" : e
            }
            var n = this;
            e != null && (n.display.wrapper.style.width = r(e)), t != null && (n.display.wrapper.style.height = r(t)), n.options.lineWrapping && mn(this);
            var i = n.display.viewFrom;
            n.doc.iter(i, n.display.viewTo, function(e) {
                if (e.widgets)
                    for (var t = 0; t < e.widgets.length; t++)
                        if (e.widgets[t].noHScroll) {
                            Kn(n, i, "widget");
                            break
                        }
                ++i
            }), n.curOp.forceUpdate = !0, ko(n, "refresh", this)
        }),operation: function(e) {
            return Un(this, e)
        },refresh: Wn(function() {
            var e = this.display.cachedTextHeight;
            Jn(this), this.curOp.forceUpdate = !0, gn(this), this.scrollTo(this.doc.scrollLeft, this.doc.scrollTop), _(this), (e == null || Math.abs(e - An(this.display)) > .5) && L(this), ko(this, "refresh", this)
        }),swapDoc: Wn(function(e) {
            var t = this.doc;
            return t.cm = null, Js(this, e), gn(this), sr(this), this.scrollTo(e.scrollLeft, e.scrollTop), this.curOp.forceScroll = !0, Ao(this, "swapDoc", this, t), t
        }),getInputField: function() {
            return this.display.input
        },getWrapperElement: function() {
            return this.display.wrapper
        },getScrollerElement: function() {
            return this.display.scroller
        },getGutterElement: function() {
            return this.display.gutters
        }}, Po(S);
    var mi = S.defaults = {}, gi = S.optionHandlers = {}, bi = S.Init = {toString: function() {
            return "CodeMirror.Init"
        }};
    yi("value", "", function(e, t) {
        e.setValue(t)
    }, !0), yi("mode", null, function(e, t) {
        e.doc.modeOption = t, T(e)
    }, !0), yi("indentUnit", 2, T, !0), yi("indentWithTabs", !1), yi("smartIndent", !0), yi("tabSize", 4, function(e) {
        N(e), gn(e), Jn(e)
    }, !0), yi("specialChars", /[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g, function(e, t) {
        e.options.specialChars = new RegExp(t.source + (t.test("    ") ? "" : "|    "), "g"), e.refresh()
    }, !0), yi("specialCharPlaceholder", Ds, function(e) {
        e.refresh()
    }, !0), yi("electricChars", !0), yi("rtlMoveVisually", !m), yi("wholeLineUpdateBefore", !0), yi("theme", "default", function(e) {
        A(e), O(e)
    }, !0), yi("keyMap", "default", function(e, t, n) {
        var r = Di(t), i = n != S.Init && Di(n);
        i && i.detach && i.detach(e, r), r.attach && r.attach(e, i || null)
    }), yi("extraKeys", null), yi("lineWrapping", !1, C, !0), yi("gutters", [], function(e) {
        H(e.options), O(e)
    }, !0), yi("fixedGutter", !0, function(e, t) {
        e.display.gutters.style.left = t ? V(e.display) + "px" : "0", e.refresh()
    }, !0), yi("coverGutterNextToScrollbar", !1, function(e) {
        q(e)
    }, !0), yi("scrollbarStyle", "native", function(e) {
        I(e), q(e), e.display.scrollbars.setScrollTop(e.doc.scrollTop), e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
    }, !0), yi("lineNumbers", !1, function(e) {
        H(e.options), O(e)
    }, !0), yi("firstLineNumber", 1, O, !0), yi("lineNumberFormatter", function(e) {
        return e
    }, O, !0), yi("showCursorWhenSelecting", !1, Wt, !0), yi("resetSelectionOnContextMenu", !0), yi("readOnly", !1, function(e, t) {
        t == "nocursor" ? (Ur(e), e.display.input.blur(), e.display.disabled = !0) : (e.display.disabled = !1, t || sr(e))
    }), yi("disableInput", !1, function(e, t) {
        t || sr(e)
    }, !0), yi("dragDrop", !0), yi("cursorBlinkRate", 530), yi("cursorScrollMargin", 0), yi("cursorHeight", 1, Wt, !0), yi("singleCursorHeightPerLine", !0, Wt, !0), yi("workTime", 100), yi("workDelay", 100), yi("flattenSpans", !0, N, !0), yi("addModeClass", !1, N, !0), yi("pollInterval", 100), yi("undoDepth", 200, function(e, t) {
        e.doc.history.undoDepth = t
    }), yi("historyEventDelay", 1250), yi("viewportMargin", 10, function(e) {
        e.refresh()
    }, !0), yi("maxHighlightLength", 1e4, N, !0), yi("moveInputWithCursor", !0, function(e, t) {
        t || (e.display.inputDiv.style.top = e.display.inputDiv.style.left = 0)
    }), yi("tabindex", null, function(e, t) {
        e.display.input.tabIndex = t || ""
    }), yi("autofocus", null);
    var wi = S.modes = {}, Ei = S.mimeModes = {};
    S.defineMode = function(e, t) {
        !S.defaults.mode && e != "null" && (S.defaults.mode = e), arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), wi[e] = t
    }, S.defineMIME = function(e, t) {
        Ei[e] = t
    }, S.resolveMode = function(e) {
        if (typeof e == "string" && Ei.hasOwnProperty(e))
            e = Ei[e];
        else if (e && typeof e.name == "string" && Ei.hasOwnProperty(e.name)) {
            var t = Ei[e.name];
            typeof t == "string" && (t = {name: t}), e = Ko(t, e), e.name = t.name
        } else if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
            return S.resolveMode("application/xml");
        return typeof e == "string" ? {name: e} : e || {name: "null"}
    }, S.getMode = function(e, t) {
        var t = S.resolveMode(t), n = wi[t.name];
        if (!n)
            return S.getMode(e, "text/plain");
        var r = n(e, t);
        if (Si.hasOwnProperty(t.name)) {
            var i = Si[t.name];
            for (var s in i) {
                if (!i.hasOwnProperty(s))
                    continue;
                r.hasOwnProperty(s) && (r["_" + s] = r[s]), r[s] = i[s]
            }
        }
        r.name = t.name, t.helperType && (r.helperType = t.helperType);
        if (t.modeProps)
            for (var s in t.modeProps)
                r[s] = t.modeProps[s];
        return r
    }, S.defineMode("null", function() {
        return {token: function(e) {
                e.skipToEnd()
            }}
    }), S.defineMIME("text/plain", "null");
    var Si = S.modeExtensions = {};
    S.extendMode = function(e, t) {
        var n = Si.hasOwnProperty(e) ? Si[e] : Si[e] = {};
        Qo(t, n)
    }, S.defineExtension = function(e, t) {
        S.prototype[e] = t
    }, S.defineDocExtension = function(e, t) {
        Ws.prototype[e] = t
    }, S.defineOption = yi;
    var xi = [];
    S.defineInitHook = function(e) {
        xi.push(e)
    };
    var Ti = S.helpers = {};
    S.registerHelper = function(e, t, n) {
        Ti.hasOwnProperty(e) || (Ti[e] = S[e] = {_global: []}), Ti[e][t] = n
    }, S.registerGlobalHelper = function(e, t, n, r) {
        S.registerHelper(e, t, r), Ti[e]._global.push({pred: n,val: r})
    };
    var Ni = S.copyState = function(e, t) {
        if (t === !0)
            return t;
        if (e.copyState)
            return e.copyState(t);
        var n = {};
        for (var r in t) {
            var i = t[r];
            i instanceof Array && (i = i.concat([])), n[r] = i
        }
        return n
    }, Ci = S.startState = function(e, t, n) {
        return e.startState ? e.startState(t, n) : !0
    };
    S.innerMode = function(e, t) {
        while (e.innerMode) {
            var n = e.innerMode(t);
            if (!n || n.mode == e)
                break;
            t = n.state, e = n.mode
        }
        return n || {mode: e,state: t}
    };
    var ki = S.commands = {selectAll: function(e) {
            e.setSelection(vt(e.firstLine(), 0), vt(e.lastLine()), jo)
        },singleSelection: function(e) {
            e.setSelection(e.getCursor("anchor"), e.getCursor("head"), jo)
        },killLine: function(e) {
            pi(e, function(t) {
                if (t.empty()) {
                    var n = Ks(e.doc, t.head.line).text.length;
                    return t.head.ch == n && t.head.line < e.lastLine() ? {from: t.head,to: vt(t.head.line + 1, 0)} : {from: t.head,to: vt(t.head.line, n)}
                }
                return {from: t.from(),to: t.to()}
            })
        },deleteLine: function(e) {
            pi(e, function(t) {
                return {from: vt(t.from().line, 0),to: Nt(e.doc, vt(t.to().line + 1, 0))}
            })
        },delLineLeft: function(e) {
            pi(e, function(e) {
                return {from: vt(e.from().line, 0),to: e.from()}
            })
        },delWrappedLineLeft: function(e) {
            pi(e, function(t) {
                var n = e.charCoords(t.head, "div").top + 5, r = e.coordsChar({left: 0,top: n}, "div");
                return {from: r,to: t.from()}
            })
        },delWrappedLineRight: function(e) {
            pi(e, function(t) {
                var n = e.charCoords(t.head, "div").top + 5, r = e.coordsChar({left: e.display.lineDiv.offsetWidth + 100,top: n}, "div");
                return {from: t.from(),to: r}
            })
        },undo: function(e) {
            e.undo()
        },redo: function(e) {
            e.redo()
        },undoSelection: function(e) {
            e.undoSelection()
        },redoSelection: function(e) {
            e.redoSelection()
        },goDocStart: function(e) {
            e.extendSelection(vt(e.firstLine(), 0))
        },goDocEnd: function(e) {
            e.extendSelection(vt(e.lastLine()))
        },goLineStart: function(e) {
            e.extendSelectionsBy(function(t) {
                return Pu(e, t.head.line)
            }, {origin: "+move",bias: 1})
        },goLineStartSmart: function(e) {
            e.extendSelectionsBy(function(t) {
                return Bu(e, t.head)
            }, {origin: "+move",bias: 1})
        },goLineEnd: function(e) {
            e.extendSelectionsBy(function(t) {
                return Hu(e, t.head.line)
            }, {origin: "+move",bias: -1})
        },goLineRight: function(e) {
            e.extendSelectionsBy(function(t) {
                var n = e.charCoords(t.head, "div").top + 5;
                return e.coordsChar({left: e.display.lineDiv.offsetWidth + 100,top: n}, "div")
            }, Io)
        },goLineLeft: function(e) {
            e.extendSelectionsBy(function(t) {
                var n = e.charCoords(t.head, "div").top + 5;
                return e.coordsChar({left: 0,top: n}, "div")
            }, Io)
        },goLineLeftSmart: function(e) {
            e.extendSelectionsBy(function(t) {
                var n = e.charCoords(t.head, "div").top + 5, r = e.coordsChar({left: 0,top: n}, "div");
                return r.ch < e.getLine(r.line).search(/\S/) ? Bu(e, t.head) : r
            }, Io)
        },goLineUp: function(e) {
            e.moveV(-1, "line")
        },goLineDown: function(e) {
            e.moveV(1, "line")
        },goPageUp: function(e) {
            e.moveV(-1, "page")
        },goPageDown: function(e) {
            e.moveV(1, "page")
        },goCharLeft: function(e) {
            e.moveH(-1, "char")
        },goCharRight: function(e) {
            e.moveH(1, "char")
        },goColumnLeft: function(e) {
            e.moveH(-1, "column")
        },goColumnRight: function(e) {
            e.moveH(1, "column")
        },goWordLeft: function(e) {
            e.moveH(-1, "word")
        },goGroupRight: function(e) {
            e.moveH(1, "group")
        },goGroupLeft: function(e) {
            e.moveH(-1, "group")
        },goWordRight: function(e) {
            e.moveH(1, "word")
        },delCharBefore: function(e) {
            e.deleteH(-1, "char")
        },delCharAfter: function(e) {
            e.deleteH(1, "char")
        },delWordBefore: function(e) {
            e.deleteH(-1, "word")
        },delWordAfter: function(e) {
            e.deleteH(1, "word")
        },delGroupBefore: function(e) {
            e.deleteH(-1, "group")
        },delGroupAfter: function(e) {
            e.deleteH(1, "group")
        },indentAuto: function(e) {
            e.indentSelection("smart")
        },indentMore: function(e) {
            e.indentSelection("add")
        },indentLess: function(e) {
            e.indentSelection("subtract")
        },insertTab: function(e) {
            e.replaceSelection("    ")
        },insertSoftTab: function(e) {
            var t = [], n = e.listSelections(), r = e.options.tabSize;
            for (var i = 0; i < n.length; i++) {
                var s = n[i].from(), o = Ro(e.getLine(s.line), s.ch, r);
                t.push((new Array(r - o % r + 1)).join(" "))
            }
            e.replaceSelections(t)
        },defaultTab: function(e) {
            e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
        },transposeChars: function(e) {
            Un(e, function() {
                var t = e.listSelections(), n = [];
                for (var r = 0; r < t.length; r++) {
                    var i = t[r].head, s = Ks(e.doc, i.line).text;
                    if (s) {
                        i.ch == s.length && (i = new vt(i.line, i.ch - 1));
                        if (i.ch > 0)
                            i = new vt(i.line, i.ch + 1), e.replaceRange(s.charAt(i.ch - 1) + s.charAt(i.ch - 2), vt(i.line, i.ch - 2), i, "+transpose");
                        else if (i.line > e.doc.first) {
                            var o = Ks(e.doc, i.line - 1).text;
                            o && e.replaceRange(s.charAt(0) + "\n" + o.charAt(o.length - 1), vt(i.line - 1, o.length - 1), vt(i.line, 1), "+transpose")
                        }
                    }
                    n.push(new Et(i, i))
                }
                e.setSelections(n)
            })
        },newlineAndIndent: function(e) {
            Un(e, function() {
                var t = e.listSelections().length;
                for (var n = 0; n < t; n++) {
                    var r = e.listSelections()[n];
                    e.replaceRange("\n", r.anchor, r.head, "+input"), e.indentLine(r.from().line + 1, null, !0), fi(e)
                }
            })
        },toggleOverwrite: function(e) {
            e.toggleOverwrite()
        }}, Li = S.keyMap = {};
    Li.basic = {Left: "goCharLeft",Right: "goCharRight",Up: "goLineUp",Down: "goLineDown",End: "goLineEnd",Home: "goLineStartSmart",PageUp: "goPageUp",PageDown: "goPageDown",Delete: "delCharAfter",Backspace: "delCharBefore","Shift-Backspace": "delCharBefore",Tab: "defaultTab","Shift-Tab": "indentAuto",Enter: "newlineAndIndent",Insert: "toggleOverwrite",Esc: "singleSelection"}, Li.pcDefault = {"Ctrl-A": "selectAll","Ctrl-D": "deleteLine","Ctrl-Z": "undo","Shift-Ctrl-Z": "redo","Ctrl-Y": "redo","Ctrl-Home": "goDocStart","Ctrl-End": "goDocEnd","Ctrl-Up": "goLineUp","Ctrl-Down": "goLineDown","Ctrl-Left": "goGroupLeft","Ctrl-Right": "goGroupRight","Alt-Left": "goLineStart","Alt-Right": "goLineEnd","Ctrl-Backspace": "delGroupBefore","Ctrl-Delete": "delGroupAfter","Ctrl-S": "save","Ctrl-F": "find","Ctrl-G": "findNext","Shift-Ctrl-G": "findPrev","Shift-Ctrl-F": "replace","Shift-Ctrl-R": "replaceAll","Ctrl-[": "indentLess","Ctrl-]": "indentMore","Ctrl-U": "undoSelection","Shift-Ctrl-U": "redoSelection","Alt-U": "redoSelection",fallthrough: "basic"}, Li.emacsy = {"Ctrl-F": "goCharRight","Ctrl-B": "goCharLeft","Ctrl-P": "goLineUp","Ctrl-N": "goLineDown","Alt-F": "goWordRight","Alt-B": "goWordLeft","Ctrl-A": "goLineStart","Ctrl-E": "goLineEnd","Ctrl-V": "goPageDown","Shift-Ctrl-V": "goPageUp","Ctrl-D": "delCharAfter","Ctrl-H": "delCharBefore","Alt-D": "delWordAfter","Alt-Backspace": "delWordBefore","Ctrl-K": "killLine","Ctrl-T": "transposeChars"}, Li.macDefault = {"Cmd-A": "selectAll","Cmd-D": "deleteLine","Cmd-Z": "undo","Shift-Cmd-Z": "redo","Cmd-Y": "redo","Cmd-Home": "goDocStart","Cmd-Up": "goDocStart","Cmd-End": "goDocEnd","Cmd-Down": "goDocEnd","Alt-Left": "goGroupLeft","Alt-Right": "goGroupRight","Cmd-Left": "goLineLeft","Cmd-Right": "goLineRight","Alt-Backspace": "delGroupBefore","Ctrl-Alt-Backspace": "delGroupAfter","Alt-Delete": "delGroupAfter","Cmd-S": "save","Cmd-F": "find","Cmd-G": "findNext","Shift-Cmd-G": "findPrev","Cmd-Alt-F": "replace","Shift-Cmd-Alt-F": "replaceAll","Cmd-[": "indentLess","Cmd-]": "indentMore","Cmd-Backspace": "delWrappedLineLeft","Cmd-Delete": "delWrappedLineRight","Cmd-U": "undoSelection","Shift-Cmd-U": "redoSelection","Ctrl-Up": "goDocStart","Ctrl-Down": "goDocEnd",fallthrough: ["basic", "emacsy"]}, Li["default"] = v ? Li.macDefault : Li.pcDefault, S.normalizeKeyMap = function(e) {
        var t = {};
        for (var n in e)
            if (e.hasOwnProperty(n)) {
                var r = e[n];
                if (/^(name|fallthrough|(de|at)tach)$/.test(n))
                    continue;
                if (r == "...") {
                    delete e[n];
                    continue
                }
                var i = Jo(n.split(" "), Ai);
                for (var s = 0; s < i.length; s++) {
                    var o, u;
                    s == i.length - 1 ? (u = n, o = r) : (u = i.slice(0, s + 1).join(" "), o = "...");
                    var a = t[u];
                    if (!a)
                        t[u] = o;
                    else if (a != o)
                        throw new Error("Inconsistent bindings for " + u)
                }
                delete e[n]
            }
        for (var f in t)
            e[f] = t[f];
        return e
    };
    var Oi = S.lookupKey = function(e, t, n, r) {
        t = Di(t);
        var i = t.call ? t.call(e, r) : t[e];
        if (i === !1)
            return "nothing";
        if (i === "...")
            return "multi";
        if (i != null && n(i))
            return "handled";
        if (t.fallthrough) {
            if (Object.prototype.toString.call(t.fallthrough) != "[object Array]")
                return Oi(e, t.fallthrough, n, r);
            for (var s = 0; s < t.fallthrough.length; s++) {
                var o = Oi(e, t.fallthrough[s], n, r);
                if (o)
                    return o
            }
        }
    }, Mi = S.isModifierKey = function(e) {
        var t = typeof e == "string" ? e : Lu[e.keyCode];
        return t == "Ctrl" || t == "Alt" || t == "Shift" || t == "Mod"
    }, _i = S.keyName = function(e, t) {
        if (a && e.keyCode == 34 && e["char"])
            return !1;
        var n = Lu[e.keyCode], r = n;
        return r == null || e.altGraphKey ? !1 : (e.altKey && n != "Alt" && (r = "Alt-" + r), (y ? e.metaKey : e.ctrlKey) && n != "Ctrl" && (r = "Ctrl-" + r), (y ? e.ctrlKey : e.metaKey) && n != "Cmd" && (r = "Cmd-" + r), !t && e.shiftKey && n != "Shift" && (r = "Shift-" + r), r)
    };
    S.fromTextArea = function(e, t) {
        function r() {
            e.value = a.getValue()
        }
        t || (t = {}), t.value = e.value, !t.tabindex && e.tabindex && (t.tabindex = e.tabindex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder);
        if (t.autofocus == null) {
            var n = fu();
            t.autofocus = n == e || e.getAttribute("autofocus") != null && n == document.body
        }
        if (e.form) {
            No(e.form, "submit", r);
            if (!t.leaveSubmitMethodAlone) {
                var i = e.form, s = i.submit;
                try {
                    var o = i.submit = function() {
                        r(), i.submit = s, i.submit(), i.submit = o
                    }
                } catch (u) {
                }
            }
        }
        e.style.display = "none";
        var a = S(function(t) {
            e.parentNode.insertBefore(t, e.nextSibling)
        }, t);
        return a.save = r, a.getTextArea = function() {
            return e
        }, a.toTextArea = function() {
            a.toTextArea = isNaN, r(), e.parentNode.removeChild(a.getWrapperElement()), e.style.display = "", e.form && (Co(e.form, "submit", r), typeof e.form.submit == "function" && (e.form.submit = s))
        }, a
    };
    var Pi = S.StringStream = function(e, t) {
        this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0
    };
    Pi.prototype = {eol: function() {
            return this.pos >= this.string.length
        },sol: function() {
            return this.pos == this.lineStart
        },peek: function() {
            return this.string.charAt(this.pos) || undefined
        },next: function() {
            if (this.pos < this.string.length)
                return this.string.charAt(this.pos++)
        },eat: function(e) {
            var t = this.string.charAt(this.pos);
            if (typeof e == "string")
                var n = t == e;
            else
                var n = t && (e.test ? e.test(t) : e(t));
            if (n)
                return ++this.pos, t
        },eatWhile: function(e) {
            var t = this.pos;
            while (this.eat(e))
                ;
            return this.pos > t
        },eatSpace: function() {
            var e = this.pos;
            while (/[\s\u00a0]/.test(this.string.charAt(this.pos)))
                ++this.pos;
            return this.pos > e
        },skipToEnd: function() {
            this.pos = this.string.length
        },skipTo: function(e) {
            var t = this.string.indexOf(e, this.pos);
            if (t > -1)
                return this.pos = t, !0
        },backUp: function(e) {
            this.pos -= e
        },column: function() {
            return this.lastColumnPos < this.start && (this.lastColumnValue = Ro(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? Ro(this.string, this.lineStart, this.tabSize) : 0)
        },indentation: function() {
            return Ro(this.string, null, this.tabSize) - (this.lineStart ? Ro(this.string, this.lineStart, this.tabSize) : 0)
        },match: function(e, t, n) {
            if (typeof e != "string") {
                var s = this.string.slice(this.pos).match(e);
                return s && s.index > 0 ? null : (s && t !== !1 && (this.pos += s[0].length), s)
            }
            var r = function(e) {
                return n ? e.toLowerCase() : e
            }, i = this.string.substr(this.pos, e.length);
            if (r(i) == r(e))
                return t !== !1 && (this.pos += e.length), !0
        },current: function() {
            return this.string.slice(this.start, this.pos)
        },hideFirstChars: function(e, t) {
            this.lineStart += e;
            try {
                return t()
            }finally {
                this.lineStart -= e
            }
        }};
    var Hi = S.TextMarker = function(e, t) {
        this.lines = [], this.type = t, this.doc = e
    };
    Po(Hi), Hi.prototype.clear = function() {
        if (this.explicitlyCleared)
            return;
        var e = this.doc.cm, t = e && !e.curOp;
        t && Dn(e);
        if (Do(this, "clear")) {
            var n = this.find();
            n && Ao(this, "clear", n.from, n.to)
        }
        var r = null, i = null;
        for (var s = 0; s < this.lines.length; ++s) {
            var o = this.lines[s], u = Wi(o.markedSpans, this);
            e && !this.collapsed ? Kn(e, Zs(o), "text") : e && (u.to != null && (i = Zs(o)), u.from != null && (r = Zs(o))), o.markedSpans = Xi(o.markedSpans, u), u.from == null && this.collapsed && !hs(this.doc, o) && e && Ys(o, An(e.display))
        }
        if (e && this.collapsed && !e.options.lineWrapping)
            for (var s = 0; s < this.lines.length; ++s) {
                var a = as(this.lines[s]), f = D(a);
                f > e.display.maxLineLength && (e.display.maxLine = a, e.display.maxLineLength = f, e.display.maxLineChanged = !0)
            }
        r != null && e && this.collapsed && Jn(e, r, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && It(e.doc)), e && Ao(e, "markerCleared", e, this), t && Hn(e), this.parent && this.parent.clear()
    }, Hi.prototype.find = function(e, t) {
        e == null && this.type == "bookmark" && (e = 1);
        var n, r;
        for (var i = 0; i < this.lines.length; ++i) {
            var s = this.lines[i], o = Wi(s.markedSpans, this);
            if (o.from != null) {
                n = vt(t ? s : Zs(s), o.from);
                if (e == -1)
                    return n
            }
            if (o.to != null) {
                r = vt(t ? s : Zs(s), o.to);
                if (e == 1)
                    return r
            }
        }
        return n && {from: n,to: r}
    }, Hi.prototype.changed = function() {
        var e = this.find(-1, !0), t = this, n = this.doc.cm;
        if (!e || !n)
            return;
        Un(n, function() {
            var r = e.line, i = Zs(e.line), s = fn(n, i);
            s && (vn(s), n.curOp.selectionChanged = n.curOp.forceUpdate = !0), n.curOp.updateMaxLine = !0;
            if (!hs(t.doc, r) && t.height != null) {
                var o = t.height;
                t.height = null;
                var u = ms(t) - o;
                u && Ys(r, r.height + u)
            }
        })
    }, Hi.prototype.attachLine = function(e) {
        if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            (!t.maybeHiddenMarkers || $o(t.maybeHiddenMarkers, this) == -1) && (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
        }
        this.lines.push(e)
    }, Hi.prototype.detachLine = function(e) {
        this.lines.splice($o(this.lines, e), 1);
        if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
        }
    };
    var Bi = 0, Fi = S.SharedTextMarker = function(e, t) {
        this.markers = e, this.primary = t;
        for (var n = 0; n < e.length; ++n)
            e[n].parent = this
    };
    Po(Fi), Fi.prototype.clear = function() {
        if (this.explicitlyCleared)
            return;
        this.explicitlyCleared = !0;
        for (var e = 0; e < this.markers.length; ++e)
            this.markers[e].clear();
        Ao(this, "clear")
    }, Fi.prototype.find = function(e, t) {
        return this.primary.find(e, t)
    };
    var ds = S.LineWidget = function(e, t, n) {
        if (n)
            for (var r in n)
                n.hasOwnProperty(r) && (this[r] = n[r]);
        this.cm = e, this.node = t
    };
    Po(ds), ds.prototype.clear = function() {
        var e = this.cm, t = this.line.widgets, n = this.line, r = Zs(n);
        if (r == null || !t)
            return;
        for (var i = 0; i < t.length; ++i)
            t[i] == this && t.splice(i--, 1);
        t.length || (n.widgets = null);
        var s = ms(this);
        Un(e, function() {
            vs(e, n, -s), Kn(e, r, "widget"), Ys(n, Math.max(0, n.height - s))
        })
    }, ds.prototype.changed = function() {
        var e = this.height, t = this.cm, n = this.line;
        this.height = null;
        var r = ms(this) - e;
        if (!r)
            return;
        Un(t, function() {
            t.curOp.forceUpdate = !0, vs(t, n, r), Ys(n, n.height + r)
        })
    };
    var ys = S.Line = function(e, t, n) {
        this.text = e, es(this, t), this.height = n ? n(this) : 1
    };
    Po(ys), ys.prototype.lineNo = function() {
        return Zs(this)
    };
    var As = {}, Os = {};
    Rs.prototype = {chunkSize: function() {
            return this.lines.length
        },removeInner: function(e, t) {
            for (var n = e, r = e + t; n < r; ++n) {
                var i = this.lines[n];
                this.height -= i.height, ws(i), Ao(i, "delete")
            }
            this.lines.splice(e, t)
        },collapse: function(e) {
            e.push.apply(e, this.lines)
        },insertInner: function(e, t, n) {
            this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
            for (var r = 0; r < t.length; ++r)
                t[r].parent = this
        },iterN: function(e, t, n) {
            for (var r = e + t; e < r; ++e)
                if (n(this.lines[e]))
                    return !0
        }}, Us.prototype = {chunkSize: function() {
            return this.size
        },removeInner: function(e, t) {
            this.size -= t;
            for (var n = 0; n < this.children.length; ++n) {
                var r = this.children[n], i = r.chunkSize();
                if (e < i) {
                    var s = Math.min(t, i - e), o = r.height;
                    r.removeInner(e, s), this.height -= o - r.height, i == s && (this.children.splice(n--, 1), r.parent = null);
                    if ((t -= s) == 0)
                        break;
                    e = 0
                } else
                    e -= i
            }
            if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof Rs))) {
                var u = [];
                this.collapse(u), this.children = [new Rs(u)], this.children[0].parent = this
            }
        },collapse: function(e) {
            for (var t = 0; t < this.children.length; ++t)
                this.children[t].collapse(e)
        },insertInner: function(e, t, n) {
            this.size += t.length, this.height += n;
            for (var r = 0; r < this.children.length; ++r) {
                var i = this.children[r], s = i.chunkSize();
                if (e <= s) {
                    i.insertInner(e, t, n);
                    if (i.lines && i.lines.length > 50) {
                        while (i.lines.length > 50) {
                            var o = i.lines.splice(i.lines.length - 25, 25), u = new Rs(o);
                            i.height -= u.height, this.children.splice(r + 1, 0, u), u.parent = this
                        }
                        this.maybeSpill()
                    }
                    break
                }
                e -= s
            }
        },maybeSpill: function() {
            if (this.children.length <= 10)
                return;
            var e = this;
            do {
                var t = e.children.splice(e.children.length - 5, 5), n = new Us(t);
                if (!e.parent) {
                    var r = new Us(e.children);
                    r.parent = e, e.children = [r, n], e = r
                } else {
                    e.size -= n.size, e.height -= n.height;
                    var i = $o(e.parent.children, e);
                    e.parent.children.splice(i + 1, 0, n)
                }
                n.parent = e.parent
            } while (e.children.length > 10);
            e.parent.maybeSpill()
        },iterN: function(e, t, n) {
            for (var r = 0; r < this.children.length; ++r) {
                var i = this.children[r], s = i.chunkSize();
                if (e < s) {
                    var o = Math.min(t, s - e);
                    if (i.iterN(e, o, n))
                        return !0;
                    if ((t -= o) == 0)
                        break;
                    e = 0
                } else
                    e -= s
            }
        }};
    var zs = 0, Ws = S.Doc = function(e, t, n) {
        if (!(this instanceof Ws))
            return new Ws(e, t, n);
        n == null && (n = 0), Us.call(this, [new Rs([new ys("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.frontier = n;
        var r = vt(n, 0);
        this.sel = xt(r), this.history = new ro(null), this.id = ++zs, this.modeOption = t, typeof e == "string" && (e = xu(e)), qs(this, {from: r,to: r,text: e}), Bt(this, xt(r), jo)
    };
    Ws.prototype = Ko(Us.prototype, {constructor: Ws,iter: function(e, t, n) {
            n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e)
        },insert: function(e, t) {
            var n = 0;
            for (var r = 0; r < t.length; ++r)
                n += t[r].height;
            this.insertInner(e - this.first, t, n)
        },remove: function(e, t) {
            this.removeInner(e - this.first, t)
        },getValue: function(e) {
            var t = Gs(this, this.first, this.first + this.size);
            return e === !1 ? t : t.join(e || "\n")
        },setValue: Xn(function(e) {
            var t = vt(this.first, 0), n = this.first + this.size - 1;
            Gr(this, {from: t,to: vt(n, Ks(this, n).text.length),text: xu(e),origin: "setValue"}, !0), Bt(this, xt(t))
        }),replaceRange: function(e, t, n, r) {
            t = Nt(this, t), n = n ? Nt(this, n) : t, ri(this, e, t, n, r)
        },getRange: function(e, t, n) {
            var r = Qs(this, Nt(this, e), Nt(this, t));
            return n === !1 ? r : r.join(n || "\n")
        },getLine: function(e) {
            var t = this.getLineHandle(e);
            return t && t.text
        },getLineHandle: function(e) {
            if (kt(this, e))
                return Ks(this, e)
        },getLineNumber: function(e) {
            return Zs(e)
        },getLineHandleVisualStart: function(e) {
            return typeof e == "number" && (e = Ks(this, e)), as(e)
        },lineCount: function() {
            return this.size
        },firstLine: function() {
            return this.first
        },lastLine: function() {
            return this.first + this.size - 1
        },clipPos: function(e) {
            return Nt(this, e)
        },getCursor: function(e) {
            var t = this.sel.primary(), n;
            return e == null || e == "head" ? n = t.head : e == "anchor" ? n = t.anchor : e == "end" || e == "to" || e === !1 ? n = t.to() : n = t.from(), n
        },listSelections: function() {
            return this.sel.ranges
        },somethingSelected: function() {
            return this.sel.somethingSelected()
        },setCursor: Xn(function(e, t, n) {
            Dt(this, Nt(this, typeof e == "number" ? vt(e, t || 0) : e), null, n)
        }),setSelection: Xn(function(e, t, n) {
            Dt(this, Nt(this, e), Nt(this, t || e), n)
        }),extendSelection: Xn(function(e, t, n) {
            Ot(this, Nt(this, e), t && Nt(this, t), n)
        }),extendSelections: Xn(function(e, t) {
            Mt(this, Lt(this, e, t))
        }),extendSelectionsBy: Xn(function(e, t) {
            Mt(this, Jo(this.sel.ranges, e), t)
        }),setSelections: Xn(function(e, t, n) {
            if (!e.length)
                return;
            for (var r = 0, i = []; r < e.length; r++)
                i[r] = new Et(Nt(this, e[r].anchor), Nt(this, e[r].head));
            t == null && (t = Math.min(e.length - 1, this.sel.primIndex)), Bt(this, St(i, t), n)
        }),addSelection: Xn(function(e, t, n) {
            var r = this.sel.ranges.slice(0);
            r.push(new Et(Nt(this, e), Nt(this, t || e))), Bt(this, St(r, r.length - 1), n)
        }),getSelection: function(e) {
            var t = this.sel.ranges, n;
            for (var r = 0; r < t.length; r++) {
                var i = Qs(this, t[r].from(), t[r].to());
                n = n ? n.concat(i) : i
            }
            return e === !1 ? n : n.join(e || "\n")
        },getSelections: function(e) {
            var t = [], n = this.sel.ranges;
            for (var r = 0; r < n.length; r++) {
                var i = Qs(this, n[r].from(), n[r].to());
                e !== !1 && (i = i.join(e || "\n")), t[r] = i
            }
            return t
        },replaceSelection: function(e, t, n) {
            var r = [];
            for (var i = 0; i < this.sel.ranges.length; i++)
                r[i] = e;
            this.replaceSelections(r, t, n || "+input")
        },replaceSelections: Xn(function(e, t, n) {
            var r = [], i = this.sel;
            for (var s = 0; s < i.ranges.length; s++) {
                var o = i.ranges[s];
                r[s] = {from: o.from(),to: o.to(),text: xu(e[s]),origin: n}
            }
            var u = t && t != "end" && Kr(this, r, t);
            for (var s = r.length - 1; s >= 0; s--)
                Gr(this, r[s]);
            u ? Ht(this, u) : this.cm && fi(this.cm)
        }),undo: Xn(function() {
            Zr(this, "undo")
        }),redo: Xn(function() {
            Zr(this, "redo")
        }),undoSelection: Xn(function() {
            Zr(this, "undo", !0)
        }),redoSelection: Xn(function() {
            Zr(this, "redo", !0)
        }),setExtending: function(e) {
            this.extend = e
        },getExtending: function() {
            return this.extend
        },historySize: function() {
            var e = this.history, t = 0, n = 0;
            for (var r = 0; r < e.done.length; r++)
                e.done[r].ranges || ++t;
            for (var r = 0; r < e.undone.length; r++)
                e.undone[r].ranges || ++n;
            return {undo: t,redo: n}
        },clearHistory: function() {
            this.history = new ro(this.history.maxGeneration)
        },markClean: function() {
            this.cleanGeneration = this.changeGeneration(!0)
        },changeGeneration: function(e) {
            return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation
        },isClean: function(e) {
            return this.history.generation == (e || this.cleanGeneration)
        },getHistory: function() {
            return {done: vo(this.history.done),undone: vo(this.history.undone)}
        },setHistory: function(e) {
            var t = this.history = new ro(this.history.maxGeneration);
            t.done = vo(e.done.slice(0), null, !0), t.undone = vo(e.undone.slice(0), null, !0)
        },addLineClass: Xn(function(e, t, n) {
            return hi(this, e, t == "gutter" ? "gutter" : "class", function(e) {
                var r = t == "text" ? "textClass" : t == "background" ? "bgClass" : t == "gutter" ? "gutterClass" : "wrapClass";
                if (!e[r])
                    e[r] = n;
                else {
                    if (lu(n).test(e[r]))
                        return !1;
                    e[r] += " " + n
                }
                return !0
            })
        }),removeLineClass: Xn(function(e, t, n) {
            return hi(this, e, t == "gutter" ? "gutter" : "class", function(e) {
                var r = t == "text" ? "textClass" : t == "background" ? "bgClass" : t == "gutter" ? "gutterClass" : "wrapClass", i = e[r];
                if (!i)
                    return !1;
                if (n == null)
                    e[r] = null;
                else {
                    var s = i.match(lu(n));
                    if (!s)
                        return !1;
                    var o = s.index + s[0].length;
                    e[r] = i.slice(0, s.index) + (!s.index || o == i.length ? "" : " ") + i.slice(o) || null
                }
                return !0
            })
        }),markText: function(e, t, n) {
            return ji(this, Nt(this, e), Nt(this, t), n, "range")
        },setBookmark: function(e, t) {
            var n = {replacedWith: t && (t.nodeType == null ? t.widget : t),insertLeft: t && t.insertLeft,clearWhenEmpty: !1,shared: t && t.shared};
            return e = Nt(this, e), ji(this, e, e, n, "bookmark")
        },findMarksAt: function(e) {
            e = Nt(this, e);
            var t = [], n = Ks(this, e.line).markedSpans;
            if (n)
                for (var r = 0; r < n.length; ++r) {
                    var i = n[r];
                    (i.from == null || i.from <= e.ch) && (i.to == null || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
                }
            return t
        },findMarks: function(e, t, n) {
            e = Nt(this, e), t = Nt(this, t);
            var r = [], i = e.line;
            return this.iter(e.line, t.line + 1, function(s) {
                var o = s.markedSpans;
                if (o)
                    for (var u = 0; u < o.length; u++) {
                        var a = o[u];
                        !(i == e.line && e.ch > a.to || a.from == null && i != e.line || i == t.line && a.from > t.ch) && (!n || n(a.marker)) && r.push(a.marker.parent || a.marker)
                    }
                ++i
            }), r
        },getAllMarks: function() {
            var e = [];
            return this.iter(function(t) {
                var n = t.markedSpans;
                if (n)
                    for (var r = 0; r < n.length; ++r)
                        n[r].from != null && e.push(n[r].marker)
            }), e
        },posFromIndex: function(e) {
            var t, n = this.first;
            return this.iter(function(r) {
                var i = r.text.length + 1;
                if (i > e)
                    return t = e, !0;
                e -= i, ++n
            }), Nt(this, vt(n, t))
        },indexFromPos: function(e) {
            e = Nt(this, e);
            var t = e.ch;
            return e.line < this.first || e.ch < 0 ? 0 : (this.iter(this.first, e.line, function(e) {
                t += e.text.length + 1
            }), t)
        },copy: function(e) {
            var t = new Ws(Gs(this, this.first, this.first + this.size), this.modeOption, this.first);
            return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t
        },linkedDoc: function(e) {
            e || (e = {});
            var t = this.first, n = this.first + this.size;
            e.from != null && e.from > t && (t = e.from), e.to != null && e.to < n && (n = e.to);
            var r = new Ws(Gs(this, t, n), e.mode || this.modeOption, t);
            return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({doc: r,sharedHist: e.sharedHist}), r.linked = [{doc: this,isParent: !0,sharedHist: e.sharedHist}], Ri(r, qi(this)), r
        },unlinkDoc: function(e) {
            e instanceof S && (e = e.doc);
            if (this.linked)
                for (var t = 0; t < this.linked.length; ++t) {
                    var n = this.linked[t];
                    if (n.doc != e)
                        continue;
                    this.linked.splice(t, 1), e.unlinkDoc(this), Ui(qi(this));
                    break
                }
            if (e.history == this.history) {
                var r = [e.id];
                $s(e, function(e) {
                    r.push(e.id)
                }, !0), e.history = new ro(null), e.history.done = vo(this.history.done, r), e.history.undone = vo(this.history.undone, r)
            }
        },iterLinkedDocs: function(e) {
            $s(this, e)
        },getMode: function() {
            return this.mode
        },getEditor: function() {
            return this.cm
        }}), Ws.prototype.eachLine = Ws.prototype.iter;
    var Xs = "iter insert remove copy getEditor".split(" ");
    for (var Vs in Ws.prototype)
        Ws.prototype.hasOwnProperty(Vs) && $o(Xs, Vs) < 0 && (S.prototype[Vs] = function(e) {
            return function() {
                return e.apply(this.doc, arguments)
            }
        }(Ws.prototype[Vs]));
    Po(Ws);
    var bo = S.e_preventDefault = function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }, wo = S.e_stopPropagation = function(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }, So = S.e_stop = function(e) {
        bo(e), wo(e)
    }, No = S.on = function(e, t, n) {
        if (e.addEventListener)
            e.addEventListener(t, n, !1);
        else if (e.attachEvent)
            e.attachEvent("on" + t, n);
        else {
            var r = e._handlers || (e._handlers = {}), i = r[t] || (r[t] = []);
            i.push(n)
        }
    }, Co = S.off = function(e, t, n) {
        if (e.removeEventListener)
            e.removeEventListener(t, n, !1);
        else if (e.detachEvent)
            e.detachEvent("on" + t, n);
        else {
            var r = e._handlers && e._handlers[t];
            if (!r)
                return;
            for (var i = 0; i < r.length; ++i)
                if (r[i] == n) {
                    r.splice(i, 1);
                    break
                }
        }
    }, ko = S.signal = function(e, t) {
        var n = e._handlers && e._handlers[t];
        if (!n)
            return;
        var r = Array.prototype.slice.call(arguments, 2);
        for (var i = 0; i < n.length; ++i)
            n[i].apply(null, r)
    }, Lo = null, Ho = 30, Bo = S.Pass = {toString: function() {
            return "CodeMirror.Pass"
        }}, jo = {scroll: !1}, Fo = {origin: "*mouse"}, Io = {origin: "+move"};
    qo.prototype.set = function(e, t) {
        clearTimeout(this.id), this.id = setTimeout(t, e)
    };
    var Ro = S.countColumn = function(e, t, n, r, i) {
        t == null && (t = e.search(/[^\s\u00a0]/), t == -1 && (t = e.length));
        for (var s = r || 0, o = i || 0; ; ) {
            var u = e.indexOf(" ", s);
            if (u < 0 || u >= t)
                return o + (t - s);
            o += u - s, o += n - o % n, s = u + 1
        }
    }, zo = [""], Vo = function(e) {
        e.select()
    };
    p ? Vo = function(e) {
        e.selectionStart = 0, e.selectionEnd = e.value.length
    } : r && (Vo = function(e) {
        try {
            e.select()
        } catch (t) {
        }
    }), [].indexOf && ($o = function(e, t) {
        return e.indexOf(t)
    }), [].map && (Jo = function(e, t) {
        return e.map(t)
    });
    var Yo = /[\u00df\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, Zo = S.isWordChar = function(e) {
        return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || Yo.test(e))
    }, nu = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/, su;
    document.createRange ? su = function(e, t, n) {
        var r = document.createRange();
        return r.setEnd(e, n), r.setStart(e, t), r
    } : su = function(e, t, n) {
        var r = document.body.createTextRange();
        try {
            r.moveToElementText(e.parentNode)
        } catch (i) {
            return r
        }
        return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r
    }, r && i < 11 && (fu = function() {
        try {
            return document.activeElement
        } catch (e) {
            return document.body
        }
    });
    var cu = S.rmClass = function(e, t) {
        var n = e.className, r = lu(t).exec(n);
        if (r) {
            var i = n.slice(r.index + r[0].length);
            e.className = n.slice(0, r.index) + (i ? r[1] + i : "")
        }
    }, hu = S.addClass = function(e, t) {
        var n = e.className;
        lu(t).test(n) || (e.className += (n ? " " : "") + t)
    }, vu = !1, yu = function() {
        if (r && i < 9)
            return !1;
        var e = iu("div");
        return "draggable" in e || "dragDrop" in e
    }(), bu, Eu, xu = S.splitLines = "\n\nb".split(/\n/).length != 3 ? function(e) {
        var t = 0, n = [], r = e.length;
        while (t <= r) {
            var i = e.indexOf("\n", t);
            i == -1 && (i = e.length);
            var s = e.slice(t, e.charAt(i - 1) == "\r" ? i - 1 : i), o = s.indexOf("\r");
            o != -1 ? (n.push(s.slice(0, o)), t += o + 1) : (n.push(s), t = i + 1)
        }
        return n
    } : function(e) {
        return e.split(/\r\n?|\n/)
    }, Tu = window.getSelection ? function(e) {
        try {
            return e.selectionStart != e.selectionEnd
        } catch (t) {
            return !1
        }
    } : function(e) {
        try {
            var t = e.ownerDocument.selection.createRange()
        } catch (n) {
        }
        return !t || t.parentElement() != e ? !1 : t.compareEndPoints("StartToEnd", t) != 0
    }, Nu = function() {
        var e = iu("div");
        return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), typeof e.oncopy == "function")
    }(), Cu = null, Lu = {3: "Enter",8: "Backspace",9: "Tab",13: "Enter",16: "Shift",17: "Ctrl",18: "Alt",19: "Pause",20: "CapsLock",27: "Esc",32: "Space",33: "PageUp",34: "PageDown",35: "End",36: "Home",37: "Left",38: "Up",39: "Right",40: "Down",44: "PrintScrn",45: "Insert",46: "Delete",59: ";",61: "=",91: "Mod",92: "Mod",93: "Mod",107: "=",109: "-",127: "Delete",173: "-",186: ";",187: "=",188: ",",189: "-",190: ".",191: "/",192: "`",219: "[",220: "\\",221: "]",222: "'",63232: "Up",63233: "Down",63234: "Left",63235: "Right",63272: "Delete",63273: "Home",63275: "End",63276: "PageUp",63277: "PageDown",63302: "Insert"};
    S.keyNames = Lu, function() {
        for (var e = 0; e < 10; e++)
            Lu[e + 48] = Lu[e + 96] = String(e);
        for (var e = 65; e <= 90; e++)
            Lu[e] = String.fromCharCode(e);
        for (var e = 1; e <= 12; e++)
            Lu[e + 111] = Lu[e + 63235] = "F" + e
    }();
    var Fu, zu = function() {
        function n(n) {
            return n <= 247 ? e.charAt(n) : 1424 <= n && n <= 1524 ? "R" : 1536 <= n && n <= 1773 ? t.charAt(n - 1536) : 1774 <= n && n <= 2220 ? "r" : 8192 <= n && n <= 8203 ? "w" : n == 8204 ? "b" : "L"
        }
        function f(e, t, n) {
            this.level = e, this.from = t, this.to = n
        }
        var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN", t = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm", r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, i = /[stwN]/, s = /[LRr]/, o = /[Lb1n]/, u = /[1n]/, a = "L";
        return function(e) {
            if (!r.test(e))
                return !1;
            var t = e.length, l = [];
            for (var c = 0, h; c < t; ++c)
                l.push(h = n(e.charCodeAt(c)));
            for (var c = 0, p = a; c < t; ++c) {
                var h = l[c];
                h == "m" ? l[c] = p : p = h
            }
            for (var c = 0, d = a; c < t; ++c) {
                var h = l[c];
                h == "1" && d == "r" ? l[c] = "n" : s.test(h) && (d = h, h == "r" && (l[c] = "R"))
            }
            for (var c = 1, p = l[0]; c < t - 1; ++c) {
                var h = l[c];
                h == "+" && p == "1" && l[c + 1] == "1" ? l[c] = "1" : h == "," && p == l[c + 1] && (p == "1" || p == "n") && (l[c] = p), p = h
            }
            for (var c = 0; c < t; ++c) {
                var h = l[c];
                if (h == ",")
                    l[c] = "N";
                else if (h == "%") {
                    for (var v = c + 1; v < t && l[v] == "%"; ++v)
                        ;
                    var m = c && l[c - 1] == "!" || v < t && l[v] == "1" ? "1" : "N";
                    for (var g = c; g < v; ++g)
                        l[g] = m;
                    c = v - 1
                }
            }
            for (var c = 0, d = a; c < t; ++c) {
                var h = l[c];
                d == "L" && h == "1" ? l[c] = "L" : s.test(h) && (d = h)
            }
            for (var c = 0; c < t; ++c)
                if (i.test(l[c])) {
                    for (var v = c + 1; v < t && i.test(l[v]); ++v)
                        ;
                    var y = (c ? l[c - 1] : a) == "L", b = (v < t ? l[v] : a) == "L", m = y || b ? "L" : "R";
                    for (var g = c; g < v; ++g)
                        l[g] = m;
                    c = v - 1
                }
            var w = [], E;
            for (var c = 0; c < t; )
                if (o.test(l[c])) {
                    var S = c;
                    for (++c; c < t && o.test(l[c]); ++c)
                        ;
                    w.push(new f(0, S, c))
                } else {
                    var x = c, T = w.length;
                    for (++c; c < t && l[c] != "L"; ++c)
                        ;
                    for (var g = x; g < c; )
                        if (u.test(l[g])) {
                            x < g && w.splice(T, 0, new f(1, x, g));
                            var N = g;
                            for (++g; g < c && u.test(l[g]); ++g)
                                ;
                            w.splice(T, 0, new f(2, N, g)), x = g
                        } else
                            ++g;
                    x < c && w.splice(T, 0, new f(1, x, c))
                }
            return w[0].level == 1 && (E = e.match(/^\s+/)) && (w[0].from = E[0].length, w.unshift(new f(0, 0, E[0].length))), Xo(w).level == 1 && (E = e.match(/\s+$/)) && (Xo(w).to -= E[0].length, w.push(new f(0, t - E[0].length, t))), w[0].level != Xo(w).level && w.push(new f(w[0].level, t, t)), w
        }
    }();
    return S.version = "4.11.0", S
}), function(e) {
    typeof exports == "object" && typeof module == "object" ? e(require("CodeMirror")) : typeof define == "function" && define.amd ? define("common/lib/codemirror-4.11/mode/javascript", ["CodeMirror"], e) : e(CodeMirror)
}(function(e) {
    e.defineMode("javascript", function(t, n) {
        function h(e) {
            var t = !1, n, r = !1;
            while ((n = e.next()) != null) {
                if (!t) {
                    if (n == "/" && !r)
                        return;
                    n == "[" ? r = !0 : r && n == "]" && (r = !1)
                }
                t = !t && n == "\\"
            }
        }
        function v(e, t, n) {
            return p = e, d = n, t
        }
        function m(e, t) {
            var n = e.next();
            if (n == '"' || n == "'")
                return t.tokenize = g(n), t.tokenize(e, t);
            if (n == "." && e.match(/^\d+(?:[eE][+\-]?\d+)?/))
                return v("number", "number");
            if (n == "." && e.match(".."))
                return v("spread", "meta");
            if (/[\[\]{}\(\),;\:\.]/.test(n))
                return v(n);
            if (n == "=" && e.eat(">"))
                return v("=>", "operator");
            if (n == "0" && e.eat(/x/i))
                return e.eatWhile(/[\da-f]/i), v("number", "number");
            if (/\d/.test(n))
                return e.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/), v("number", "number");
            if (n == "/")
                return e.eat("*") ? (t.tokenize = y, y(e, t)) : e.eat("/") ? (e.skipToEnd(), v("comment", "comment")) : t.lastType == "operator" || t.lastType == "keyword c" || t.lastType == "sof" || /^[\[{}\(,;:]$/.test(t.lastType) ? (h(e), e.eatWhile(/[gimy]/), v("regexp", "string-2")) : (e.eatWhile(l), v("operator", "operator", e.current()));
            if (n == "`")
                return t.tokenize = b, b(e, t);
            if (n == "#")
                return e.skipToEnd(), v("error", "error");
            if (l.test(n))
                return e.eatWhile(l), v("operator", "operator", e.current());
            if (a.test(n)) {
                e.eatWhile(a);
                var r = e.current(), i = f.propertyIsEnumerable(r) && f[r];
                return i && t.lastType != "." ? v(i.type, i.style, r) : v("variable", "variable", r)
            }
        }
        function g(e) {
            return function(t, n) {
                var r = !1, i;
                if (s && t.peek() == "@" && t.match(c))
                    return n.tokenize = m, v("jsonld-keyword", "meta");
                while ((i = t.next()) != null) {
                    if (i == e && !r)
                        break;
                    r = !r && i == "\\"
                }
                return r || (n.tokenize = m), v("string", "string")
            }
        }
        function y(e, t) {
            var n = !1, r;
            while (r = e.next()) {
                if (r == "/" && n) {
                    t.tokenize = m;
                    break
                }
                n = r == "*"
            }
            return v("comment", "comment")
        }
        function b(e, t) {
            var n = !1, r;
            while ((r = e.next()) != null) {
                if (!n && (r == "`" || r == "$" && e.eat("{"))) {
                    t.tokenize = m;
                    break
                }
                n = !n && r == "\\"
            }
            return v("quasi", "string-2", e.current())
        }
        function E(e, t) {
            t.fatArrowAt && (t.fatArrowAt = null);
            var n = e.string.indexOf("=>", e.start);
            if (n < 0)
                return;
            var r = 0, i = !1;
            for (var s = n - 1; s >= 0; --s) {
                var o = e.string.charAt(s), u = w.indexOf(o);
                if (u >= 0 && u < 3) {
                    if (!r) {
                        ++s;
                        break
                    }
                    if (--r == 0)
                        break
                } else if (u >= 3 && u < 6)
                    ++r;
                else if (a.test(o))
                    i = !0;
                else {
                    if (/["'\/]/.test(o))
                        return;
                    if (i && !r) {
                        ++s;
                        break
                    }
                }
            }
            i && !r && (t.fatArrowAt = s)
        }
        function x(e, t, n, r, i, s) {
            this.indented = e, this.column = t, this.type = n, this.prev = i, this.info = s, r != null && (this.align = r)
        }
        function T(e, t) {
            for (var n = e.localVars; n; n = n.next)
                if (n.name == t)
                    return !0;
            for (var r = e.context; r; r = r.prev)
                for (var n = r.vars; n; n = n.next)
                    if (n.name == t)
                        return !0
        }
        function N(e, t, n, r, i) {
            var s = e.cc;
            C.state = e, C.stream = i, C.marked = null, C.cc = s, C.style = t, e.lexical.hasOwnProperty("align") || (e.lexical.align = !0);
            for (; ; ) {
                var u = s.length ? s.pop() : o ? j : B;
                if (u(n, r)) {
                    while (s.length && s[s.length - 1].lex)
                        s.pop()();
                    return C.marked ? C.marked : n == "variable" && T(e, r) ? "variable-2" : t
                }
            }
        }
        function k() {
            for (var e = arguments.length - 1; e >= 0; e--)
                C.cc.push(arguments[e])
        }
        function L() {
            return k.apply(null, arguments), !0
        }
        function A(e) {
            function t(t) {
                for (var n = t; n; n = n.next)
                    if (n.name == e)
                        return !0;
                return !1
            }
            var r = C.state;
            if (r.context) {
                C.marked = "def";
                if (t(r.localVars))
                    return;
                r.localVars = {name: e,next: r.localVars}
            } else {
                if (t(r.globalVars))
                    return;
                n.globalVars && (r.globalVars = {name: e,next: r.globalVars})
            }
        }
        function M() {
            C.state.context = {prev: C.state.context,vars: C.state.localVars}, C.state.localVars = O
        }
        function _() {
            C.state.localVars = C.state.context.vars, C.state.context = C.state.context.prev
        }
        function D(e, t) {
            var n = function() {
                var n = C.state, r = n.indented;
                if (n.lexical.type == "stat")
                    r = n.lexical.indented;
                else
                    for (var i = n.lexical; i && i.type == ")" && i.align; i = i.prev)
                        r = i.indented;
                n.lexical = new x(r, C.stream.column(), e, null, n.lexical, t)
            };
            return n.lex = !0, n
        }
        function P() {
            var e = C.state;
            e.lexical.prev && (e.lexical.type == ")" && (e.indented = e.lexical.indented), e.lexical = e.lexical.prev)
        }
        function H(e) {
            function t(n) {
                return n == e ? L() : e == ";" ? k() : L(t)
            }
            return t
        }
        function B(e, t) {
            return e == "var" ? L(D("vardef", t.length), it, H(";"), P) : e == "keyword a" ? L(D("form"), j, B, P) : e == "keyword b" ? L(D("form"), B, P) : e == "{" ? L(D("}"), tt, P) : e == ";" ? L() : e == "if" ? (C.state.lexical.info == "else" && C.state.cc[C.state.cc.length - 1] == P && C.state.cc.pop()(), L(D("form"), j, B, P, ft)) : e == "function" ? L(vt) : e == "for" ? L(D("form"), lt, B, P) : e == "variable" ? L(D("stat"), J) : e == "switch" ? L(D("form"), j, D("}", "switch"), H("{"), tt, P, P) : e == "case" ? L(j, H(":")) : e == "default" ? L(H(":")) : e == "catch" ? L(D("form"), M, H("("), mt, H(")"), B, P, _) : e == "module" ? L(D("form"), M, Et, _, P) : e == "class" ? L(D("form"), gt, P) : e == "export" ? L(D("form"), St, P) : e == "import" ? L(D("form"), xt, P) : k(D("stat"), j, H(";"), P)
        }
        function j(e) {
            return I(e, !1)
        }
        function F(e) {
            return I(e, !0)
        }
        function I(e, t) {
            if (C.state.fatArrowAt == C.stream.start) {
                var n = t ? $ : V;
                if (e == "(")
                    return L(M, D(")"), Z(st, ")"), P, H("=>"), n, _);
                if (e == "variable")
                    return k(M, st, H("=>"), n, _)
            }
            var r = t ? z : U;
            return S.hasOwnProperty(e) ? L(r) : e == "function" ? L(vt, r) : e == "keyword c" ? L(t ? R : q) : e == "(" ? L(D(")"), q, Lt, H(")"), P, r) : e == "operator" || e == "spread" ? L(t ? F : j) : e == "[" ? L(D("]"), Ct, P, r) : e == "{" ? et(Q, "}", null, r) : e == "quasi" ? k(W, r) : L()
        }
        function q(e) {
            return e.match(/[;\}\)\],]/) ? k() : k(j)
        }
        function R(e) {
            return e.match(/[;\}\)\],]/) ? k() : k(F)
        }
        function U(e, t) {
            return e == "," ? L(j) : z(e, t, !1)
        }
        function z(e, t, n) {
            var r = n == 0 ? U : z, i = n == 0 ? j : F;
            if (e == "=>")
                return L(M, n ? $ : V, _);
            if (e == "operator")
                return /\+\+|--/.test(t) ? L(r) : t == "?" ? L(j, H(":"), i) : L(i);
            if (e == "quasi")
                return k(W, r);
            if (e == ";")
                return;
            if (e == "(")
                return et(F, ")", "call", r);
            if (e == ".")
                return L(K, r);
            if (e == "[")
                return L(D("]"), q, H("]"), P, r)
        }
        function W(e, t) {
            return e != "quasi" ? k() : t.slice(t.length - 2) != "${" ? L(W) : L(j, X)
        }
        function X(e) {
            if (e == "}")
                return C.marked = "string-2", C.state.tokenize = b, L(W)
        }
        function V(e) {
            return E(C.stream, C.state), k(e == "{" ? B : j)
        }
        function $(e) {
            return E(C.stream, C.state), k(e == "{" ? B : F)
        }
        function J(e) {
            return e == ":" ? L(P, B) : k(U, H(";"), P)
        }
        function K(e) {
            if (e == "variable")
                return C.marked = "property", L()
        }
        function Q(e, t) {
            if (e == "variable" || C.style == "keyword")
                return C.marked = "property", t == "get" || t == "set" ? L(G) : L(Y);
            if (e == "number" || e == "string")
                return C.marked = s ? "property" : C.style + " property", L(Y);
            if (e == "jsonld-keyword")
                return L(Y);
            if (e == "[")
                return L(j, H("]"), Y)
        }
        function G(e) {
            return e != "variable" ? k(Y) : (C.marked = "property", L(vt))
        }
        function Y(e) {
            if (e == ":")
                return L(F);
            if (e == "(")
                return k(vt)
        }
        function Z(e, t) {
            function n(r) {
                if (r == ",") {
                    var i = C.state.lexical;
                    return i.info == "call" && (i.pos = (i.pos || 0) + 1), L(e, n)
                }
                return r == t ? L() : L(H(t))
            }
            return function(r) {
                return r == t ? L() : k(e, n)
            }
        }
        function et(e, t, n) {
            for (var r = 3; r < arguments.length; r++)
                C.cc.push(arguments[r]);
            return L(D(t, n), Z(e, t), P)
        }
        function tt(e) {
            return e == "}" ? L() : k(B, tt)
        }
        function nt(e) {
            if (u && e == ":")
                return L(rt)
        }
        function rt(e) {
            if (e == "variable")
                return C.marked = "variable-3", L()
        }
        function it() {
            return k(st, nt, ut, at)
        }
        function st(e, t) {
            if (e == "variable")
                return A(t), L();
            if (e == "[")
                return et(st, "]");
            if (e == "{")
                return et(ot, "}")
        }
        function ot(e, t) {
            return e == "variable" && !C.stream.match(/^\s*:/, !1) ? (A(t), L(ut)) : (e == "variable" && (C.marked = "property"), L(H(":"), st, ut))
        }
        function ut(e, t) {
            if (t == "=")
                return L(F)
        }
        function at(e) {
            if (e == ",")
                return L(it)
        }
        function ft(e, t) {
            if (e == "keyword b" && t == "else")
                return L(D("form", "else"), B, P)
        }
        function lt(e) {
            if (e == "(")
                return L(D(")"), ct, H(")"), P)
        }
        function ct(e) {
            return e == "var" ? L(it, H(";"), pt) : e == ";" ? L(pt) : e == "variable" ? L(ht) : k(j, H(";"), pt)
        }
        function ht(e, t) {
            return t == "in" || t == "of" ? (C.marked = "keyword", L(j)) : L(U, pt)
        }
        function pt(e, t) {
            return e == ";" ? L(dt) : t == "in" || t == "of" ? (C.marked = "keyword", L(j)) : k(j, H(";"), dt)
        }
        function dt(e) {
            e != ")" && L(j)
        }
        function vt(e, t) {
            if (t == "*")
                return C.marked = "keyword", L(vt);
            if (e == "variable")
                return A(t), L(vt);
            if (e == "(")
                return L(M, D(")"), Z(mt, ")"), P, B, _)
        }
        function mt(e) {
            return e == "spread" ? L(mt) : k(st, nt)
        }
        function gt(e, t) {
            if (e == "variable")
                return A(t), L(yt)
        }
        function yt(e, t) {
            if (t == "extends")
                return L(j, yt);
            if (e == "{")
                return L(D("}"), bt, P)
        }
        function bt(e, t) {
            if (e == "variable" || C.style == "keyword")
                return C.marked = "property", t == "get" || t == "set" ? L(wt, vt, bt) : L(vt, bt);
            if (t == "*")
                return C.marked = "keyword", L(bt);
            if (e == ";")
                return L(bt);
            if (e == "}")
                return L()
        }
        function wt(e) {
            return e != "variable" ? k() : (C.marked = "property", L())
        }
        function Et(e, t) {
            if (e == "string")
                return L(B);
            if (e == "variable")
                return A(t), L(Nt)
        }
        function St(e, t) {
            return t == "*" ? (C.marked = "keyword", L(Nt, H(";"))) : t == "default" ? (C.marked = "keyword", L(j, H(";"))) : k(B)
        }
        function xt(e) {
            return e == "string" ? L() : k(Tt, Nt)
        }
        function Tt(e, t) {
            return e == "{" ? et(Tt, "}") : (e == "variable" && A(t), L())
        }
        function Nt(e, t) {
            if (t == "from")
                return C.marked = "keyword", L(j)
        }
        function Ct(e) {
            return e == "]" ? L() : k(F, kt)
        }
        function kt(e) {
            return e == "for" ? k(Lt, H("]")) : e == "," ? L(Z(R, "]")) : k(Z(F, "]"))
        }
        function Lt(e) {
            if (e == "for")
                return L(lt, Lt);
            if (e == "if")
                return L(j, Lt)
        }
        var r = t.indentUnit, i = n.statementIndent, s = n.jsonld, o = n.json || s, u = n.typescript, a = n.wordCharacters || /[\w$\xa1-\uffff]/, f = function() {
            function e(e) {
                return {type: e,style: "keyword"}
            }
            var t = e("keyword a"), n = e("keyword b"), r = e("keyword c"), i = e("operator"), s = {type: "atom",style: "atom"}, o = {"if": e("if"),"while": t,"with": t,"else": n,"do": n,"try": n,"finally": n,"return": r,"break": r,"continue": r,"new": r,"delete": r,"throw": r,"debugger": r,"var": e("var"),"const": e("var"),let: e("var"),"function": e("function"),"catch": e("catch"),"for": e("for"),"switch": e("switch"),"case": e("case"),"default": e("default"),"in": i,"typeof": i,"instanceof": i,"true": s,"false": s,"null": s,"undefined": s,NaN: s,Infinity: s,"this": e("this"),module: e("module"),"class": e("class"),"super": e("atom"),yield: r,"export": e("export"),"import": e("import"),"extends": r};
            if (u) {
                var a = {type: "variable",style: "variable-3"}, f = {"interface": e("interface"),"extends": e("extends"),constructor: e("constructor"),"public": e("public"),"private": e("private"),"protected": e("protected"),"static": e("static"),string: a,number: a,bool: a,any: a};
                for (var l in f)
                    o[l] = f[l]
            }
            return o
        }(), l = /[+\-*&%=<>!?|~^]/, c = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/, p, d, w = "([{}])", S = {atom: !0,number: !0,variable: !0,string: !0,regexp: !0,"this": !0,"jsonld-keyword": !0}, C = {state: null,column: null,marked: null,cc: null}, O = {name: "this",next: {name: "arguments"}};
        return P.lex = !0, {startState: function(e) {
                var t = {tokenize: m,lastType: "sof",cc: [],lexical: new x((e || 0) - r, 0, "block", !1),localVars: n.localVars,context: n.localVars && {vars: n.localVars},indented: 0};
                return n.globalVars && typeof n.globalVars == "object" && (t.globalVars = n.globalVars), t
            },token: function(e, t) {
                e.sol() && (t.lexical.hasOwnProperty("align") || (t.lexical.align = !1), t.indented = e.indentation(), E(e, t));
                if (t.tokenize != y && e.eatSpace())
                    return null;
                var n = t.tokenize(e, t);
                return p == "comment" ? n : (t.lastType = p != "operator" || d != "++" && d != "--" ? p : "incdec", N(t, n, p, d, e))
            },indent: function(t, s) {
                if (t.tokenize == y)
                    return e.Pass;
                if (t.tokenize != m)
                    return 0;
                var o = s && s.charAt(0), u = t.lexical;
                if (!/^\s*else\b/.test(s))
                    for (var a = t.cc.length - 1; a >= 0; --a) {
                        var f = t.cc[a];
                        if (f == P)
                            u = u.prev;
                        else if (f != ft)
                            break
                    }
                u.type == "stat" && o == "}" && (u = u.prev), i && u.type == ")" && u.prev.type == "stat" && (u = u.prev);
                var l = u.type, c = o == l;
                return l == "vardef" ? u.indented + (t.lastType == "operator" || t.lastType == "," ? u.info + 1 : 0) : l == "form" && o == "{" ? u.indented : l == "form" ? u.indented + r : l == "stat" ? u.indented + (t.lastType == "operator" || t.lastType == "," ? i || r : 0) : u.info == "switch" && !c && n.doubleIndentSwitch != 0 ? u.indented + (/^(?:case|default)\b/.test(s) ? r : 2 * r) : u.align ? u.column + (c ? 0 : 1) : u.indented + (c ? 0 : r)
            },electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart: o ? null : "/*",blockCommentEnd: o ? null : "*/",lineComment: o ? null : "//",fold: "brace",helperType: o ? "json" : "javascript",jsonldMode: s,jsonMode: o}
    }), e.registerHelper("wordChars", "javascript", /[\w$]/), e.defineMIME("text/javascript", "javascript"), e.defineMIME("text/ecmascript", "javascript"), e.defineMIME("application/javascript", "javascript"), e.defineMIME("application/x-javascript", "javascript"), e.defineMIME("application/ecmascript", "javascript"), e.defineMIME("application/json", {name: "javascript",json: !0}), e.defineMIME("application/x-json", {name: "javascript",json: !0}), e.defineMIME("application/ld+json", {name: "javascript",jsonld: !0}), e.defineMIME("text/typescript", {name: "javascript",typescript: !0}), e.defineMIME("application/typescript", {name: "javascript",typescript: !0})
}), function(e) {
    typeof exports == "object" && typeof module == "object" ? e(require("CodeMirror")) : typeof define == "function" && define.amd ? define("common/lib/codemirror-4.11/addon/active-line", ["CodeMirror"], e) : e(CodeMirror)
}(function(e) {
    function r(e) {
        for (var r = 0; r < e.state.activeLines.length; r++)
            e.removeLineClass(e.state.activeLines[r], "wrap", t), e.removeLineClass(e.state.activeLines[r], "background", n)
    }
    function i(e, t) {
        if (e.length != t.length)
            return !1;
        for (var n = 0; n < e.length; n++)
            if (e[n] != t[n])
                return !1;
        return !0
    }
    function s(e, s) {
        var o = [];
        for (var u = 0; u < s.length; u++) {
            var a = s[u];
            if (!a.empty())
                continue;
            var f = e.getLineHandleVisualStart(a.head.line);
            o[o.length - 1] != f && o.push(f)
        }
        if (i(e.state.activeLines, o))
            return;
        e.operation(function() {
            r(e);
            for (var i = 0; i < o.length; i++)
                e.addLineClass(o[i], "wrap", t), e.addLineClass(o[i], "background", n);
            e.state.activeLines = o
        })
    }
    function o(e, t) {
        s(e, t.ranges)
    }
    var t = "CodeMirror-activeline", n = "CodeMirror-activeline-background";
    e.defineOption("styleActiveLine", !1, function(t, n, i) {
        var u = i && i != e.Init;
        n && !u ? (t.state.activeLines = [], s(t, t.listSelections()), t.on("beforeSelectionChange", o)) : !n && u && (t.off("beforeSelectionChange", o), r(t), delete t.state.activeLines)
    })
}), !function() {
    function e(e) {
        var t = "    ";
        if (isNaN(parseInt(e, 10)))
            t = e;
        else
            switch (e) {
                case 1:
                    t = " ";
                    break;
                case 2:
                    t = "  ";
                    break;
                case 3:
                    t = "   ";
                    break;
                case 4:
                    t = "    ";
                    break;
                case 5:
                    t = "     ";
                    break;
                case 6:
                    t = "      ";
                    break;
                case 7:
                    t = "       ";
                    break;
                case 8:
                    t = "        ";
                    break;
                case 9:
                    t = "         ";
                    break;
                case 10:
                    t = "          ";
                    break;
                case 11:
                    t = "           ";
                    break;
                case 12:
                    t = "            "
            }
        var n = ["\n"];
        for (var r = 0; 100 > r; r++)
            n.push(n[r] + t);
        return n
    }
    function t() {
        this.step = "    ", this.shift = e(this.step)
    }
    function n(e, t) {
        return t - (e.replace(/\(/g, "").length - e.replace(/\)/g, "").length)
    }
    function r(e, t) {
        return e.replace(/\s{1,}/g, " ").replace(/ AND /gi, "~::~" + t + t + "AND ").replace(/ BETWEEN /gi, "~::~" + t + "BETWEEN ").replace(/ CASE /gi, "~::~" + t + "CASE ").replace(/ ELSE /gi, "~::~" + t + "ELSE ").replace(/ END /gi, "~::~" + t + "END ").replace(/ FROM /gi, "~::~FROM ").replace(/ GROUP\s{1,}BY/gi, "~::~GROUP BY ").replace(/ HAVING /gi, "~::~HAVING ").replace(/ IN /gi, " IN ").replace(/ JOIN /gi, "~::~JOIN ").replace(/ CROSS~::~{1,}JOIN /gi, "~::~CROSS JOIN ").replace(/ INNER~::~{1,}JOIN /gi, "~::~INNER JOIN ").replace(/ LEFT~::~{1,}JOIN /gi, "~::~LEFT JOIN ").replace(/ RIGHT~::~{1,}JOIN /gi, "~::~RIGHT JOIN ").replace(/ ON /gi, "~::~" + t + "ON ").replace(/ OR /gi, "~::~" + t + t + "OR ").replace(/ ORDER\s{1,}BY/gi, "~::~ORDER BY ").replace(/ OVER /gi, "~::~" + t + "OVER ").replace(/\(\s{0,}SELECT /gi, "~::~(SELECT ").replace(/\)\s{0,}SELECT /gi, ")~::~SELECT ").replace(/ THEN /gi, " THEN~::~" + t).replace(/ UNION /gi, "~::~UNION~::~").replace(/ USING /gi, "~::~USING ").replace(/ WHEN /gi, "~::~" + t + "WHEN ").replace(/ WHERE /gi, "~::~WHERE ").replace(/ WITH /gi, "~::~WITH ").replace(/ ALL /gi, " ALL ").replace(/ AS /gi, " AS ").replace(/ ASC /gi, " ASC ").replace(/ DESC /gi, " DESC ").replace(/ DISTINCT /gi, " DISTINCT ").replace(/ EXISTS /gi, " EXISTS ").replace(/ NOT /gi, " NOT ").replace(/ NULL /gi, " NULL ").replace(/ LIKE /gi, " LIKE ").replace(/\s{0,}SELECT /gi, "SELECT ").replace(/~::~{1,}/g, "~::~").split("~::~")
    }
    t.prototype.xml = function(t, n) {
        var r = t.replace(/>\s{0,}</g, "><").replace(/</g, "~::~<").replace(/xmlns\:/g, "~::~xmlns:").replace(/xmlns\=/g, "~::~xmlns=").split("~::~"), i = r.length, s = !1, o = 0, u = "", a = 0, f = n ? e(n) : this.shift;
        for (a = 0; i > a; a++)
            r[a].search(/<!/) > -1 ? (u += f[o] + r[a], s = !0, (r[a].search(/-->/) > -1 || r[a].search(/\]>/) > -1 || r[a].search(/!DOCTYPE/) > -1) && (s = !1)) : r[a].search(/-->/) > -1 || r[a].search(/\]>/) > -1 ? (u += r[a], s = !1) : /^<\w/.exec(r[a - 1]) && /^<\/\w/.exec(r[a]) && /^<[\w:\-\.\,]+/.exec(r[a - 1]) === /^<\/[\w:\-\.\,]+/.exec(r[a])[0].replace("/", "") ? (u += r[a], s || o--) : r[a].search(/<\w/) > -1 && -1 === r[a].search(/<\//) && -1 === r[a].search(/\/>/) ? u = u += s ? r[a] : f[o++] + r[a] : r[a].search(/<\w/) > -1 && r[a].search(/<\//) > -1 ? u = u += s ? r[a] : f[o] + r[a] : r[a].search(/<\//) > -1 ? u = u += s ? r[a] : f[--o] + r[a] : r[a].search(/\/>/) > -1 ? u = u += s ? r[a] : f[o] + r[a] : u += r[a].search(/<\?/) > -1 ? f[o] + r[a] : r[a].search(/xmlns\:/) > -1 || r[a].search(/xmlns\=/) > -1 ? f[o] + r[a] : r[a];
        return "\n" === u[0] ? u.slice(1) : u
    }, t.prototype.json = function(t, n) {
        var n = n ? n : this.step;
        if (window.JSON && window.JSON.stringify)
            return "string" == typeof t ? JSON.stringify(JSON.parse(t), null, n) : "object" == typeof t ? JSON.stringify(t, null, n) : null;
        if ("string" != typeof t || !t)
            return null;
        var r = this.jsonmin(t).replace(/\{/g, "~::~{~::~").replace(/\[/g, "[~::~").replace(/\}/g, "~::~}").replace(/\]/g, "~::~]").replace(/\"\,/g, '",~::~').replace(/\,\"/g, ',~::~"').replace(/\]\,/g, "],~::~").replace(/~::~\s{0,}~::~/g, "~::~").split("~::~"), i = r.length, s = 0, o = "", u = 0, a = n ? e(n) : this.shift;
        for (u = 0; i > u; u++)
            o += /\{/.exec(r[u]) ? a[s++] + r[u] : /\[/.exec(r[u]) ? a[s++] + r[u] : /\]/.exec(r[u]) ? a[--s] + r[u] : /\}/.exec(r[u]) ? a[--s] + r[u] : a[s] + r[u];
        return o.replace(/^\n{1,}/, "")
    }, t.prototype.css = function(t, n) {
        var r = t.replace(/\s{1,}/g, " ").replace(/\{/g, "{~::~").replace(/\}/g, "~::~}~::~").replace(/\;/g, ";~::~").replace(/\/\*/g, "~::~/*").replace(/\*\//g, "*/~::~").replace(/~::~\s{0,}~::~/g, "~::~").split("~::~"), i = r.length, s = 0, o = "", u = 0, a = n ? e(n) : this.shift;
        for (u = 0; i > u; u++)
            o += /\{/.exec(r[u]) ? a[s++] + r[u] : /\}/.exec(r[u]) ? a[--s] + r[u] : /\*\\/.exec(r[u]) ? a[s] + r[u] : a[s] + r[u];
        return o.replace(/^\n{1,}/, "")
    }, t.prototype.sql = function(t, i) {
        var s = t.replace(/\s{1,}/g, " ").replace(/\'/gi, "~::~'").split("~::~"), o = s.length, u = [], f = 0, l = this.step, h = 0, p = "", d = 0, v = i ? e(i) : this.shift;
        for (d = 0; o > d; d++)
            u = u.concat(d % 2 ? s[d] : r(s[d], l));
        for (o = u.length, d = 0; o > d; d++)
            h = n(u[d], h), /\s{0,}\s{0,}SELECT\s{0,}/.exec(u[d]) && (u[d] = u[d].replace(/\,/g, ",\n" + l + l)), /\s{0,}\(\s{0,}SELECT\s{0,}/.exec(u[d]) ? (f++, p += v[f] + u[d]) : /\'/.exec(u[d]) ? (1 > h && f && f--, p += u[d]) : (p += v[f] + u[d], 1 > h && f && f--);
        return p = p.replace(/^\n{1,}/, "").replace(/\n{1,}/g, "\n")
    }, t.prototype.xmlmin = function(e, t) {
        var n = t ? e : e.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g, "").replace(/[ \r\n\t]{1,}xmlns/g, " xmlns");
        return n.replace(/>\s{0,}</g, "><")
    }, t.prototype.jsonmin = function(e) {
        return e.replace(/\s{0,}\{\s{0,}/g, "{").replace(/\s{0,}\[$/g, "[").replace(/\[\s{0,}/g, "[").replace(/:\s{0,}\[/g, ":[").replace(/\s{0,}\}\s{0,}/g, "}").replace(/\s{0,}\]\s{0,}/g, "]").replace(/\"\s{0,}\,/g, '",').replace(/\,\s{0,}\"/g, ',"').replace(/\"\s{0,}:/g, '":').replace(/:\s{0,}\"/g, ':"').replace(/:\s{0,}\[/g, ":[").replace(/\,\s{0,}\[/g, ",[").replace(/\,\s{2,}/g, ", ").replace(/\]\s{0,},\s{0,}\[/g, "],[")
    }, t.prototype.cssmin = function(e, t) {
        var n = t ? e : e.replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\//g, "");
        return n.replace(/\s{1,}/g, " ").replace(/\{\s{1,}/g, "{").replace(/\}\s{1,}/g, "}").replace(/\;\s{1,}/g, ";").replace(/\/\*\s{1,}/g, "/*").replace(/\*\/\s{1,}/g, "*/")
    }, t.prototype.sqlmin = function(e) {
        return e.replace(/\s{1,}/g, " ").replace(/\s{1,}\(/, "(").replace(/\s{1,}\)/, ")")
    }, window.vkbeautify = new t
}(), define("common/widget/buildcode/vkbeautify", function() {
}), define("product/widget/serviceTry/callApi", ["require", "CodeMirror", "common/lib/codemirror-4.11/mode/javascript", "common/lib/codemirror-4.11/addon/active-line", "common/widget/buildcode/vkbeautify"], function(e) {
    function n() {
        this.oField = $("#js-field-list"), this.oPText = $("#js-parsing-text"), this.btn = this.oPText.find(".btn-01"), this.preBox = this.oPText.find(".callback-infor .txt-01"), this.editor = null
    }
    var t = e("CodeMirror");
    return e("common/lib/codemirror-4.11/mode/javascript"), e("common/lib/codemirror-4.11/addon/active-line"), e("common/widget/buildcode/vkbeautify"), $.extend(n.prototype, {init: function() {
            this.createCodemirror(this.preBox[0]), this.bindCallAPI(), this.getApi()
        },bindCallAPI: function() {
            var e = this;
            this.btn.on("click", function(t) {
                e.getApi()
            })
        },getApi: function(e) {
            var t = this;
            this.setCallState(this.btn, !1), this.sendData({domainIds: this.oField.find(".f-cur").attr("data-field-id"),query: this.oPText.find(".ipt-01").val()}, function(n) {
                var r = JSON.stringify(n), i = "JSON";
                if (i === "JSON")
                    try {
                        $.parseJSON(r)
                    } catch (s) {
                        i = "htmlmixed"
                    }
                if (i === "XML")
                    try {
                        $.parseXML(r)
                    } catch (s) {
                        i = "htmlmixed"
                    }
                t.setCodemirror(i, r), e && t.setScrollPos(t.preBox)
            })
        },setCodemirror: function(e, t) {
            if (e) {
                this.preBox.parents(".callback-infor").show();
                switch (e) {
                    case "JSON":
                        this.editor.setOption("mode", "javascript"), t = window.vkbeautify.json(t, 4);
                        break;
                    case "XML":
                        this.editor.setOption("mode", "xml"), t = window.vkbeautify.xml(t);
                        break;
                    default:
                        this.editor.setOption("mode", "htmlmixed")
                }
                this.editor.setValue(t)
            } else
                this.preBox.parents(".callback-infor").hide()
        },createCodemirror: function(e) {
            this.editor = t(e, {lineNumbers: !0,mode: "htmlmixed",theme: "eui",indentUnit: 4,lineWrapping: !0,styleActiveLine: !0,readOnly: !0,value: ""})
        },setScrollPos: function(e) {
            $("html, body").animate({scrollTop: e.offset().top}, 500)
        },setCallState: function(e, t) {
            t ? e.removeAttr("disabled").siblings(".loading").css("display", "none") : e.attr("disabled", "disabled").siblings(".loading").css("display", "inline-block")
        },sendData: function(e, t) {
            var n = this;
            $.ajax({url: window.$CONFIG["paths.base"] + "nlp/analysisPreview",type: "POST",data: e,dataType: "json"}).done(function(e) {
                t(e), n.setCallState(n.btn, !0)
            }).fail(function() {
                n.setCallState(n.btn, !0)
            })
        }}), n
}), define("product/widget/serviceTry/serviceTry", ["require", "product/widget/serviceTry/callApi"], function(e) {
    function n() {
        this.oServTit = $("#js-service-try-tit"), this.oField = $("#js-field-list"), this.oPText = $("#js-parsing-text"), this.callApi = new t
    }
    var t = e("product/widget/serviceTry/callApi");
    return $.extend(n.prototype, {init: function() {
            this.selField(), this.selHotSent(), this.setIpt(), this.oField.length && this.callApi.init()
        },selField: function() {
            var e = this;
            this.oField.find("li").hover(function() {
                var t = $(this), n = t.attr("data-field-id");
                t.addClass("f-hov"), e.selTip(n)
            }, function() {
                var t = $(this), n = t.siblings(".f-cur").attr("data-field-id");
                t.removeClass("f-hov"), e.selTip(n)
            }), this.oField.on("click", "li", function() {
                var t = $(this), n = t.attr("data-field-id");
                t.addClass("f-cur").siblings(".f-cur").removeClass("f-cur"), e.selTip(n), e.selHotTag(n), e.callApi.getApi()
            })
        },selTip: function(e) {
            this.oServTit.find("[data-tip-id=" + e + "]").removeClass("dsn").siblings().addClass("dsn")
        },selHotTag: function(e) {
            var t = this.oPText.find("[data-tag-id=" + e + "]");
            t.removeClass("dsn").siblings().addClass("dsn"), this.oPText.find(".ipt-01").val(t.find(".tag").eq(0).text())
        },selHotSent: function() {
            var e = this;
            this.oPText.on("click", ".hot-sentences .tag", function() {
                e.oPText.find(".ipt-01").val($(this).text()).css("color", "#666"), e.callApi.getApi()
            })
        },setIpt: function() {
            var e = this;
            this.oPText.on("focus", ".ipt-01", function() {
                e.inputFocus($(this))
            }), this.oPText.on("blur", ".ipt-01", function() {
                e.inputBlur($(this))
            })
        },inputFocus: function(e) {
            e.val() === e[0].defaultValue && (e.val(""), e.css("color", "#666"))
        },inputBlur: function(e) {
            e.val() === "" && (e.val(e[0].defaultValue), e.css("color", "#999"))
        }}), n
});
var swfobject = function() {
    function C() {
        if (b)
            return;
        try {
            var e = a.getElementsByTagName("body")[0].appendChild(U("span"));
            e.parentNode.removeChild(e)
        } catch (t) {
            return
        }
        b = !0;
        var n = c.length;
        for (var r = 0; r < n; r++)
            c[r]()
    }
    function k(e) {
        b ? e() : c[c.length] = e
    }
    function L(t) {
        if (typeof u.addEventListener != e)
            u.addEventListener("load", t, !1);
        else if (typeof a.addEventListener != e)
            a.addEventListener("load", t, !1);
        else if (typeof u.attachEvent != e)
            z(u, "onload", t);
        else if (typeof u.onload == "function") {
            var n = u.onload;
            u.onload = function() {
                n(), t()
            }
        } else
            u.onload = t
    }
    function A() {
        l ? O() : M()
    }
    function O() {
        var n = a.getElementsByTagName("body")[0], r = U(t);
        r.setAttribute("type", i);
        var s = n.appendChild(r);
        if (s) {
            var o = 0;
            (function() {
                if (typeof s.GetVariable != e) {
                    var t = s.GetVariable("$version");
                    t && (t = t.split(" ")[1].split(","), T.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)])
                } else if (o < 10) {
                    o++, setTimeout(arguments.callee, 10);
                    return
                }
                n.removeChild(r), s = null, M()
            })()
        } else
            M()
    }
    function M() {
        var t = h.length;
        if (t > 0)
            for (var n = 0; n < t; n++) {
                var r = h[n].id, i = h[n].callbackFn, s = {success: !1,id: r};
                if (T.pv[0] > 0) {
                    var o = R(r);
                    if (o)
                        if (W(h[n].swfVersion) && !(T.wk && T.wk < 312))
                            V(r, !0), i && (s.success = !0, s.ref = _(r), i(s));
                        else if (h[n].expressInstall && D()) {
                            var u = {};
                            u.data = h[n].expressInstall, u.width = o.getAttribute("width") || "0", u.height = o.getAttribute("height") || "0", o.getAttribute("class") && (u.styleclass = o.getAttribute("class")), o.getAttribute("align") && (u.align = o.getAttribute("align"));
                            var a = {}, f = o.getElementsByTagName("param"), l = f.length;
                            for (var c = 0; c < l; c++)
                                f[c].getAttribute("name").toLowerCase() != "movie" && (a[f[c].getAttribute("name")] = f[c].getAttribute("value"));
                            P(u, a, r, i)
                        } else
                            H(o), i && i(s)
                } else {
                    V(r, !0);
                    if (i) {
                        var p = _(r);
                        p && typeof p.SetVariable != e && (s.success = !0, s.ref = p), i(s)
                    }
                }
            }
    }
    function _(n) {
        var r = null, i = R(n);
        if (i && i.nodeName == "OBJECT")
            if (typeof i.SetVariable != e)
                r = i;
            else {
                var s = i.getElementsByTagName(t)[0];
                s && (r = s)
            }
        return r
    }
    function D() {
        return !w && W("6.0.65") && (T.win || T.mac) && !(T.wk && T.wk < 312)
    }
    function P(t, n, r, i) {
        w = !0, g = i || null, y = {success: !1,id: r};
        var o = R(r);
        if (o) {
            o.nodeName == "OBJECT" ? (v = B(o), m = null) : (v = o, m = r), t.id = s;
            if (typeof t.width == e || !/%$/.test(t.width) && parseInt(t.width, 10) < 310)
                t.width = "310";
            if (typeof t.height == e || !/%$/.test(t.height) && parseInt(t.height, 10) < 137)
                t.height = "137";
            a.title = a.title.slice(0, 47) + " - Flash Player Installation";
            var f = T.ie && T.win ? "ActiveX" : "PlugIn", l = "MMredirectURL=" + u.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + a.title;
            typeof n.flashvars != e ? n.flashvars += "&" + l : n.flashvars = l;
            if (T.ie && T.win && o.readyState != 4) {
                var c = U("div");
                r += "SWFObjectNew", c.setAttribute("id", r), o.parentNode.insertBefore(c, o), o.style.display = "none", function() {
                    o.readyState == 4 ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10)
                }()
            }
            j(t, n, r)
        }
    }
    function H(e) {
        if (T.ie && T.win && e.readyState != 4) {
            var t = U("div");
            e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(B(e), t), e.style.display = "none", function() {
                e.readyState == 4 ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
            }()
        } else
            e.parentNode.replaceChild(B(e), e)
    }
    function B(e) {
        var n = U("div");
        if (T.win && T.ie)
            n.innerHTML = e.innerHTML;
        else {
            var r = e.getElementsByTagName(t)[0];
            if (r) {
                var i = r.childNodes;
                if (i) {
                    var s = i.length;
                    for (var o = 0; o < s; o++)
                        (i[o].nodeType != 1 || i[o].nodeName != "PARAM") && i[o].nodeType != 8 && n.appendChild(i[o].cloneNode(!0))
                }
            }
        }
        return n
    }
    function j(n, r, s) {
        var o, u = R(s);
        if (T.wk && T.wk < 312)
            return o;
        if (u) {
            typeof n.id == e && (n.id = s);
            if (T.ie && T.win) {
                var a = "";
                for (var f in n)
                    n[f] != Object.prototype[f] && (f.toLowerCase() == "data" ? r.movie = n[f] : f.toLowerCase() == "styleclass" ? a += ' class="' + n[f] + '"' : f.toLowerCase() != "classid" && (a += " " + f + '="' + n[f] + '"'));
                var l = "";
                for (var c in r)
                    r[c] != Object.prototype[c] && (l += '<param name="' + c + '" value="' + r[c] + '" />');
                u.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + a + ">" + l + "</object>", p[p.length] = n.id, o = R(n.id)
            } else {
                var h = U(t);
                h.setAttribute("type", i);
                for (var d in n)
                    n[d] != Object.prototype[d] && (d.toLowerCase() == "styleclass" ? h.setAttribute("class", n[d]) : d.toLowerCase() != "classid" && h.setAttribute(d, n[d]));
                for (var v in r)
                    r[v] != Object.prototype[v] && v.toLowerCase() != "movie" && F(h, v, r[v]);
                u.parentNode.replaceChild(h, u), o = h
            }
        }
        return o
    }
    function F(e, t, n) {
        var r = U("param");
        r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r)
    }
    function I(e) {
        var t = R(e);
        t && t.nodeName == "OBJECT" && (T.ie && T.win ? (t.style.display = "none", function() {
            t.readyState == 4 ? q(e) : setTimeout(arguments.callee, 10)
        }()) : t.parentNode.removeChild(t))
    }
    function q(e) {
        var t = R(e);
        if (t) {
            for (var n in t)
                typeof t[n] == "function" && (t[n] = null);
            t.parentNode.removeChild(t)
        }
    }
    function R(e) {
        var t = null;
        try {
            t = a.getElementById(e)
        } catch (n) {
        }
        return t
    }
    function U(e) {
        return a.createElement(e)
    }
    function z(e, t, n) {
        e.attachEvent(t, n), d[d.length] = [e, t, n]
    }
    function W(e) {
        var t = T.pv, n = e.split(".");
        return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
    }
    function X(n, r, i, s) {
        if (T.ie && T.mac)
            return;
        var o = a.getElementsByTagName("head")[0];
        if (!o)
            return;
        var u = i && typeof i == "string" ? i : "screen";
        s && (E = null, S = null);
        if (!E || S != u) {
            var f = U("style");
            f.setAttribute("type", "text/css"), f.setAttribute("media", u), E = o.appendChild(f), T.ie && T.win && typeof a.styleSheets != e && a.styleSheets.length > 0 && (E = a.styleSheets[a.styleSheets.length - 1]), S = u
        }
        T.ie && T.win ? E && typeof E.addRule == t && E.addRule(n, r) : E && typeof a.createTextNode != e && E.appendChild(a.createTextNode(n + " {" + r + "}"))
    }
    function V(e, t) {
        if (!x)
            return;
        var n = t ? "visible" : "hidden";
        b && R(e) ? R(e).style.visibility = n : X("#" + e, "visibility:" + n)
    }
    function $(t) {
        var n = /[\\\"<>\.;]/, r = n.exec(t) != null;
        return r && typeof encodeURIComponent != e ? encodeURIComponent(t) : t
    }
    var e = "undefined", t = "object", n = "Shockwave Flash", r = "ShockwaveFlash.ShockwaveFlash", i = "application/x-shockwave-flash", s = "SWFObjectExprInst", o = "onreadystatechange", u = window, a = document, f = navigator, l = !1, c = [A], h = [], p = [], d = [], v, m, g, y, b = !1, w = !1, E, S, x = !0, T = function() {
        var s = typeof a.getElementById != e && typeof a.getElementsByTagName != e && typeof a.createElement != e, o = f.userAgent.toLowerCase(), c = f.platform.toLowerCase(), h = c ? /win/.test(c) : /win/.test(o), p = c ? /mac/.test(c) : /mac/.test(o), d = /webkit/.test(o) ? parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1, v = !1, m = [0, 0, 0], g = null;
        if (typeof f.plugins != e && typeof f.plugins[n] == t)
            g = f.plugins[n].description, g && (typeof f.mimeTypes == e || !f.mimeTypes[i] || !!f.mimeTypes[i].enabledPlugin) && (l = !0, v = !1, g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), m[0] = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10), m[1] = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10), m[2] = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
        else if (typeof u.ActiveXObject != e)
            try {
                var y = new ActiveXObject(r);
                y && (g = y.GetVariable("$version"), g && (v = !0, g = g.split(" ")[1].split(","), m = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)]))
            } catch (b) {
            }
        return {w3: s,pv: m,wk: d,ie: v,win: h,mac: p}
    }(), N = function() {
        if (!T.w3)
            return;
        (typeof a.readyState != e && a.readyState == "complete" || typeof a.readyState == e && (a.getElementsByTagName("body")[0] || a.body)) && C(), b || (typeof a.addEventListener != e && a.addEventListener("DOMContentLoaded", C, !1), T.ie && T.win && (a.attachEvent(o, function() {
            a.readyState == "complete" && (a.detachEvent(o, arguments.callee), C())
        }), u == top && function() {
            if (b)
                return;
            try {
                a.documentElement.doScroll("left")
            } catch (e) {
                setTimeout(arguments.callee, 0);
                return
            }
            C()
        }()), T.wk && function() {
            if (b)
                return;
            if (!/loaded|complete/.test(a.readyState)) {
                setTimeout(arguments.callee, 0);
                return
            }
            C()
        }(), L(C))
    }(), J = function() {
        T.ie && T.win && window.attachEvent("onunload", function() {
            var e = d.length;
            for (var t = 0; t < e; t++)
                d[t][0].detachEvent(d[t][1], d[t][2]);
            var n = p.length;
            for (var r = 0; r < n; r++)
                I(p[r]);
            for (var i in T)
                T[i] = null;
            T = null;
            for (var s in swfobject)
                swfobject[s] = null;
            swfobject = null
        })
    }();
    return {registerObject: function(e, t, n, r) {
            if (T.w3 && e && t) {
                var i = {};
                i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = r, h[h.length] = i, V(e, !1)
            } else
                r && r({success: !1,id: e})
        },getObjectById: function(e) {
            if (T.w3)
                return _(e)
        },embedSWF: function(n, r, i, s, o, u, a, f, l, c) {
            var h = {success: !1,id: r};
            T.w3 && !(T.wk && T.wk < 312) && n && r && i && s && o ? (V(r, !1), k(function() {
                i += "", s += "";
                var p = {};
                if (l && typeof l === t)
                    for (var d in l)
                        p[d] = l[d];
                p.data = n, p.width = i, p.height = s;
                var v = {};
                if (f && typeof f === t)
                    for (var m in f)
                        v[m] = f[m];
                if (a && typeof a === t)
                    for (var g in a)
                        typeof v.flashvars != e ? v.flashvars += "&" + g + "=" + a[g] : v.flashvars = g + "=" + a[g];
                if (W(o)) {
                    var y = j(p, v, r);
                    p.id == r && V(r, !0), h.success = !0, h.ref = y
                } else {
                    if (u && D()) {
                        p.data = u, P(p, v, r, c);
                        return
                    }
                    V(r, !0)
                }
                c && c(h)
            })) : c && c(h)
        },switchOffAutoHideShow: function() {
            x = !1
        },ua: T,getFlashPlayerVersion: function() {
            return {major: T.pv[0],minor: T.pv[1],release: T.pv[2]}
        },hasFlashPlayerVersion: W,createSWF: function(e, t, n) {
            return T.w3 ? j(e, t, n) : undefined
        },showExpressInstall: function(e, t, n, r) {
            T.w3 && D() && P(e, t, n, r)
        },removeSWF: function(e) {
            T.w3 && I(e)
        },createCSS: function(e, t, n, r) {
            T.w3 && X(e, t, n, r)
        },addDomLoadEvent: k,addLoadEvent: L,getQueryParamValue: function(e) {
            var t = a.location.search || a.location.hash;
            if (t) {
                /\?/.test(t) && (t = t.split("?")[1]);
                if (e == null)
                    return $(t);
                var n = t.split("&");
                for (var r = 0; r < n.length; r++)
                    if (n[r].substring(0, n[r].indexOf("=")) == e)
                        return $(n[r].substring(n[r].indexOf("=") + 1))
            }
            return ""
        },expressInstallCallback: function() {
            if (w) {
                var e = R(s);
                e && v && (e.parentNode.replaceChild(v, e), m && (V(m, !0), T.ie && T.win && (v.style.display = "block")), g && g(y)), w = !1
            }
        }}
}();
define("common/lib/swfobject/swfobject", function() {
}), function(e) {
    typeof define == "function" && define.amd ? define("jquery.cookie", ["jquery"], e) : typeof exports == "object" ? e(require("jquery")) : e(jQuery)
}(function(e) {
    function n(e) {
        return u.raw ? e : encodeURIComponent(e)
    }
    function r(e) {
        return u.raw ? e : decodeURIComponent(e)
    }
    function i(e) {
        return n(u.json ? JSON.stringify(e) : String(e))
    }
    function s(e) {
        e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(t, " ")), u.json ? JSON.parse(e) : e
        } catch (n) {
        }
    }
    function o(t, n) {
        var r = u.raw ? t : s(t);
        return e.isFunction(n) ? n(r) : r
    }
    var t = /\+/g, u = e.cookie = function(t, s, a) {
        if (s !== undefined && !e.isFunction(s)) {
            a = e.extend({}, u.defaults, a);
            if (typeof a.expires == "number") {
                var f = a.expires, l = a.expires = new Date;
                l.setTime(+l + f * 864e5)
            }
            return document.cookie = [n(t), "=", i(s), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
        }
        var c = t ? undefined : {}, h = document.cookie ? document.cookie.split("; ") : [];
        for (var p = 0, d = h.length; p < d; p++) {
            var v = h[p].split("="), m = r(v.shift()), g = v.join("=");
            if (t && t === m) {
                c = o(g, s);
                break
            }
            !t && (g = o(g)) !== undefined && (c[m] = g)
        }
        return c
    };
    u.defaults = {}, e.removeCookie = function(t, n) {
        return e.cookie(t) === undefined ? !1 : (e.cookie(t, "", e.extend({}, n, {expires: -1})), !e.cookie(t))
    }
}), function(e) {
    function a(e) {
        if (!o) {
            var e = $.extend({top: 0,"z-index": 999}, e);
            s || (s = $('<div class="eui-mask" id="_voice_mask" data-for="result"></div>')), o = !0, s.appendTo(u)
        }
    }
    function f() {
        s && o && (o = !1, s.remove())
    }
    function p(e, t) {
        var n = document.createElement("div"), r = '_<style type="text/css">';
        return t && (r = "_<style type=\"text/css\" data-for='result'>"), n.innerHTML = r + e + "</style>", n.removeChild(n.firstChild), document.getElementsByTagName("HEAD")[0].appendChild(n.firstChild), n.firstChild
    }
    var t = function() {
        var e = new Blob(['function str2uint8(e){var t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(var r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}function init(e){sampleRate=e.sampleRate,outputChannels=e.outputChannels,outputSampleRate=e.outputSampleRate,uid=e.uid,uid||(uid="test_uid")}function record(e){recBuffersL.push(e[0]),outputChannels==2&&recBuffersR.push(e[1])}function exportWAV(e){var t,n=mergeBuffers(recBuffersL);if(outputChannels==2){var r=mergeBuffers(recBuffersR);t=interleave(n,r)}else t=n;var i=encodeWAV(t),s=new Blob([i],{type:e});return s}function getBuffer(){var e=[];return e.push(mergeBuffers(recBuffersL)),outputChannels==2&&e.push(mergeBuffers(recBuffersR)),e}function getSendBuffer(e){var t="-BD**VR+gzgzip",n="\\r\\n",r={pfm:"iOS&1&1&1&1",ver:"1.0",enc:"utf-8",rtn:"json",pdt:"818",app_name:"com.baidu.www.voice",idx:sendIdx++ +"",fun:"1",glb:glb,uid:uid};e&&(r.idx="-"+r.idx);var i=JSON.stringify(r),s=new Zlib.Gzip(str2uint8(i)),o=s.compress();if(sendOffset>=recBuffersL.length&&!e){sendIdx--;return null;}recBuffersL.slice(sendOffset);var u=mergeBuffers(recBuffersL.slice(sendOffset));sendOffset=recBuffersL.length;var a="--"+t,f=new ArrayBuffer(o.byteLength+4+u.length*2+(n.length+n.length+a.length)*3+2),l=new DataView(f),c=0;return c=writeString(l,c,n+a+n),c=writeUint8Array(l,c,o),c=writeString(l,c,n+a+n),l.setUint32(c,1,!0),c+=4,c=writePcm(l,c,u),c=writeString(l,c,n+a+"--"+n),{buffer:f,boundary:t,json:r}}function clear(){recBuffersL=[],recBuffersR=[]}function mergeBuffers(e){var t=0;e.forEach(function(e){t+=e.length});var n=new Float32Array(t),r=0,i;for(i=0;i<e.length;i++)n.set(e[i],r),r+=e[i].length;var s=0,o=sampleRate/outputSampleRate,u=Math.ceil(t*outputSampleRate/sampleRate),a=new Float32Array(u);for(i=0;i<u;i++)a[i]=n[Math.floor(s)],s+=o;return a}function interleave(e,t){var n=e.length+t.length,r=new Float32Array(n),i=0,s=0;while(i<n)r[i++]=e[s],r[i++]=t[s],s++;return r}function floatTo16BitPCM(e,t,n){for(var r=0;r<n.length;r++,t+=2){var i=Math.max(-1,Math.min(1,n[r]));e.setInt16(t,i<0?i*32768:i*32767,!0)}}function writeUint8Array(e,t,n){for(var r=0;r<n.length;r++)e.setUint8(t+r,n[r]);return t+n.length}function writeString(e,t,n){for(var r=0;r<n.length;r++)e.setUint8(t+r,n.charCodeAt(r));return t+n.length}function writePcm(e,t,n){return floatTo16BitPCM(e,t,n),t+n.length*2}function encodeWAV(e){var t=new ArrayBuffer(44+e.length*2),n=new DataView(t);return writeString(n,0,"RIFF"),n.setUint32(4,32+e.length*2,!0),writeString(n,8,"WAVE"),writeString(n,12,"fmt "),n.setUint32(16,16,!0),n.setUint16(20,1,!0),n.setUint16(22,outputChannels,!0),n.setUint32(24,outputSampleRate,!0),n.setUint32(28,outputSampleRate,!0),n.setUint16(32,outputChannels*2,!0),n.setUint16(34,16,!0),writeString(n,36,"data"),n.setUint32(40,e.length*2,!0),floatTo16BitPCM(n,44,e),n}(function(){function r(t,r){var i=t.split("."),s=n;!(i[0]in s)&&s.execScript&&s.execScript("var "+i[0]);for(var o;i.length&&(o=i.shift());)!i.length&&r!==e?s[o]=r:s=s[o]?s[o]:s[o]={}}function s(e,t){this.index="number"==typeof t?t:0,this.f=0,this.buffer=e instanceof(i?Uint8Array:Array)?e:new(i?Uint8Array:Array)(32768);if(2*this.buffer.length<=this.index)throw Error("invalid index");this.buffer.length<=this.index&&o(this)}function o(e){var t=e.buffer,n,r=t.length,s=new(i?Uint8Array:Array)(r<<1);if(i)s.set(t);else for(n=0;n<r;++n)s[n]=t[n];return e.buffer=s}function p(e,t,n){var r,i="number"==typeof t?t:t=0,s="number"==typeof n?n:e.length;r=-1;for(i=s&7;i--;++t)r=r>>>8^v[(r^e[t])&255];for(i=s>>3;i--;t+=8)r=r>>>8^v[(r^e[t])&255],r=r>>>8^v[(r^e[t+1])&255],r=r>>>8^v[(r^e[t+2])&255],r=r>>>8^v[(r^e[t+3])&255],r=r>>>8^v[(r^e[t+4])&255],r=r>>>8^v[(r^e[t+5])&255],r=r>>>8^v[(r^e[t+6])&255],r=r>>>8^v[(r^e[t+7])&255];return(r^4294967295)>>>0}function m(e){this.buffer=new(i?Uint16Array:Array)(2*e),this.length=0}function g(e,t){this.h=y,this.j=0,this.input=i&&e instanceof Array?new Uint8Array(e):e,this.c=0,t&&(t.lazy&&(this.j=t.lazy),"number"==typeof t.compressionType&&(this.h=t.compressionType),t.outputBuffer&&(this.a=i&&t.outputBuffer instanceof Array?new Uint8Array(t.outputBuffer):t.outputBuffer),"number"==typeof t.outputIndex&&(this.c=t.outputIndex)),this.a||(this.a=new(i?Uint8Array:Array)(32768))}function E(e,t){this.length=e,this.k=t}function T(n,r){function s(e,n){var r=e.k,i=[],s=0,o;o=x[e.length],i[s++]=o&65535,i[s++]=o>>16&255,i[s++]=o>>24;var u;switch(t){case 1===r:u=[0,r-1,0];break;case 2===r:u=[1,r-2,0];break;case 3===r:u=[2,r-3,0];break;case 4===r:u=[3,r-4,0];break;case 6>=r:u=[4,r-5,1];break;case 8>=r:u=[5,r-7,1];break;case 12>=r:u=[6,r-9,2];break;case 16>=r:u=[7,r-13,2];break;case 24>=r:u=[8,r-17,3];break;case 32>=r:u=[9,r-25,3];break;case 48>=r:u=[10,r-33,4];break;case 64>=r:u=[11,r-49,4];break;case 96>=r:u=[12,r-65,5];break;case 128>=r:u=[13,r-97,5];break;case 192>=r:u=[14,r-129,6];break;case 256>=r:u=[15,r-193,6];break;case 384>=r:u=[16,r-257,7];break;case 512>=r:u=[17,r-385,7];break;case 768>=r:u=[18,r-513,8];break;case 1024>=r:u=[19,r-769,8];break;case 1536>=r:u=[20,r-1025,9];break;case 2048>=r:u=[21,r-1537,9];break;case 3072>=r:u=[22,r-2049,10];break;case 4096>=r:u=[23,r-3073,10];break;case 6144>=r:u=[24,r-4097,11];break;case 8192>=r:u=[25,r-6145,11];break;case 12288>=r:u=[26,r-8193,12];break;case 16384>=r:u=[27,r-12289,12];break;case 24576>=r:u=[28,r-16385,13];break;case 32768>=r:u=[29,r-24577,13];break;default:throw"invalid distance"}o=u,i[s++]=o[0],i[s++]=o[1],i[s++]=o[2];var a,f;a=0;for(f=i.length;a<f;++a)v[m++]=i[a];y[i[0]]++,b[i[3]]++,g=e.length+n-1,d=null}var o,u,a,f,l,c={},h,p,d,v=i?new Uint16Array(2*r.length):[],m=0,g=0,y=new(i?Uint32Array:Array)(286),b=new(i?Uint32Array:Array)(30),w=n.j,E;if(!i){for(a=0;285>=a;)y[a++]=0;for(a=0;29>=a;)b[a++]=0}y[256]=1,o=0;for(u=r.length;o<u;++o){a=l=0;for(f=3;a<f&&o+a!==u;++a)l=l<<8|r[o+a];c[l]===e&&(c[l]=[]),h=c[l];if(!(0<g--)){for(;0<h.length&&32768<o-h[0];)h.shift();if(o+3>=u){d&&s(d,-1),a=0;for(f=u-o;a<f;++a)E=r[o+a],v[m++]=E,++y[E];break}0<h.length?(p=N(r,o,h),d?d.length<p.length?(E=r[o-1],v[m++]=E,++y[E],s(p,0)):s(d,-1):p.length<w?d=p:s(p,0)):d?s(d,-1):(E=r[o],v[m++]=E,++y[E])}h.push(o)}return v[m++]=256,y[256]++,n.n=y,n.m=b,i?v.subarray(0,m):v}function N(e,t,n){var r,i,s=0,o,u,a,f,l=e.length;u=0,f=n.length;e:for(;u<f;u++){r=n[f-u-1],o=3;if(3<s){for(a=s;3<a;a--)if(e[r+a-1]!==e[t+a-1])continue e;o=s}for(;258>o&&t+o<l&&e[r+o]===e[t+o];)++o;o>s&&(i=r,s=o);if(258===o)break}return new E(s,t-i)}function C(e,t){var n=e.length,r=new m(572),s=new(i?Uint8Array:Array)(n),o,u,a,f,l;if(!i)for(f=0;f<n;f++)s[f]=0;for(f=0;f<n;++f)0<e[f]&&r.push(f,e[f]);o=Array(r.length/2),u=new(i?Uint32Array:Array)(r.length/2);if(1===o.length)return s[r.pop().index]=1,s;f=0;for(l=r.length/2;f<l;++f)o[f]=r.pop(),u[f]=o[f].value;a=k(u,u.length,t),f=0;for(l=o.length;f<l;++f)s[o[f].index]=a[f];return s}function k(e,t,n){function r(e){var n=f[e][l[e]];n===t?(r(e+1),r(e+1)):--u[n],++l[e]}var s=new(i?Uint16Array:Array)(n),o=new(i?Uint8Array:Array)(n),u=new(i?Uint8Array:Array)(t),a=Array(n),f=Array(n),l=Array(n),c=(1<<n)-t,h=1<<n-1,p,d,v,m,g;s[n-1]=t;for(d=0;d<n;++d)c<h?o[d]=0:(o[d]=1,c-=h),c<<=1,s[n-2-d]=(s[n-1-d]/2|0)+t;s[0]=o[0],a[0]=Array(s[0]),f[0]=Array(s[0]);for(d=1;d<n;++d)s[d]>2*s[d-1]+o[d]&&(s[d]=2*s[d-1]+o[d]),a[d]=Array(s[d]),f[d]=Array(s[d]);for(p=0;p<t;++p)u[p]=n;for(v=0;v<s[n-1];++v)a[n-1][v]=e[v],f[n-1][v]=v;for(p=0;p<n;++p)l[p]=0;1===o[n-1]&&(--u[0],++l[n-1]);for(d=n-2;0<=d;--d){m=p=0,g=l[d+1];for(v=0;v<s[d];v++)m=a[d+1][g]+a[d+1][g+1],m>e[p]?(a[d][v]=m,f[d][v]=t,g+=2):(a[d][v]=e[p],f[d][v]=p,++p);l[d]=0,1===o[d]&&r(d)}return u}function L(e){var t=new(i?Uint16Array:Array)(e.length),n=[],r=[],s=0,o,u,a,f;o=0;for(u=e.length;o<u;o++)n[e[o]]=(n[e[o]]|0)+1;o=1;for(u=16;o<=u;o++)r[o]=s,s+=n[o]|0,s<<=1;o=0;for(u=e.length;o<u;o++){s=r[e[o]],r[e[o]]+=1,a=t[o]=0;for(f=e[o];a<f;a++)t[o]=t[o]<<1|s&1,s>>>=1}return t}function A(e,t){this.input=e,this.c=this.i=0,this.d={},t&&(t.flags&&(this.d=t.flags),"string"==typeof t.filename&&(this.filename=t.filename),"string"==typeof t.comment&&(this.l=t.comment),t.deflateOptions&&(this.e=t.deflateOptions)),this.e||(this.e={})}var e=void 0,t=!0,n=this,i="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array&&"undefined"!=typeof DataView;s.prototype.b=function(e,t,n){var r=this.buffer,i=this.index,s=this.f,u=r[i],a;n&&1<t&&(e=8<t?(h[e&255]<<24|h[e>>>8&255]<<16|h[e>>>16&255]<<8|h[e>>>24&255])>>32-t:h[e]>>8-t);if(8>t+s)u=u<<t|e,s+=t;else for(a=0;a<t;++a)u=u<<1|e>>t-a-1&1,8===++s&&(s=0,r[i++]=h[u],u=0,i===r.length&&(r=o(this)));r[i]=u,this.buffer=r,this.f=s,this.index=i},s.prototype.finish=function(){var e=this.buffer,t=this.index,n;return 0<this.f&&(e[t]<<=8-this.f,e[t]=h[e[t]],t++),i?n=e.subarray(0,t):(e.length=t,n=e),n};var u=new(i?Uint8Array:Array)(256),a;for(a=0;256>a;++a){for(var f=a,l=f,c=7,f=f>>>1;f;f>>>=1)l<<=1,l|=f&1,--c;u[a]=(l<<c&255)>>>0}var h=u,d=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],v=i?new Uint32Array(d):d;m.prototype.getParent=function(e){return 2*((e-2)/4|0)},m.prototype.push=function(e,t){var n,r,i=this.buffer,s;n=this.length,i[this.length++]=t;for(i[this.length++]=e;0<n;){if(r=this.getParent(n),!(i[n]>i[r]))break;s=i[n],i[n]=i[r],i[r]=s,s=i[n+1],i[n+1]=i[r+1],i[r+1]=s,n=r}return this.length},m.prototype.pop=function(){var e,t,n=this.buffer,r,i,s;t=n[0],e=n[1],this.length-=2,n[0]=n[this.length],n[1]=n[this.length+1];for(s=0;;){i=2*s+2;if(i>=this.length)break;i+2<this.length&&n[i+2]>n[i]&&(i+=2);if(!(n[i]>n[s]))break;r=n[s],n[s]=n[i],n[i]=r,r=n[s+1],n[s+1]=n[i+1],n[i+1]=r,s=i}return{index:e,value:t,length:this.length}};var y=2,b=[],w;for(w=0;288>w;w++)switch(t){case 143>=w:b.push([w+48,8]);break;case 255>=w:b.push([w-144+400,9]);break;case 279>=w:b.push([w-256+0,7]);break;case 287>=w:b.push([w-280+192,8]);break;default:throw"invalid literal: "+w}g.prototype.g=function(){var n,r,o,u,a=this.input;switch(this.h){case 0:o=0;for(u=a.length;o<u;){r=i?a.subarray(o,o+65535):a.slice(o,o+65535),o+=r.length;var f=r,l=o===u,c=e,h=e,p=e,d=e,v=e,m=this.a,g=this.c;if(i){for(m=new Uint8Array(this.a.buffer);m.length<=g+f.length+5;)m=new Uint8Array(m.length<<1);m.set(this.a)}c=l?1:0,m[g++]=c|0,h=f.length,p=~h+65536&65535,m[g++]=h&255,m[g++]=h>>>8&255,m[g++]=p&255,m[g++]=p>>>8&255;if(i)m.set(f,g),g+=f.length,m=m.subarray(0,g);else{d=0;for(v=f.length;d<v;++d)m[g++]=f[d];m.length=g}this.c=g,this.a=m}break;case 1:var w=new s(i?new Uint8Array(this.a.buffer):this.a,this.c);w.b(1,1,t),w.b(1,2,t);var E=T(this,a),S,x,N;S=0;for(x=E.length;S<x;S++)if(N=E[S],s.prototype.b.apply(w,b[N]),256<N)w.b(E[++S],E[++S],t),w.b(E[++S],5),w.b(E[++S],E[++S],t);else if(256===N)break;this.a=w.finish(),this.c=this.a.length;break;case y:var k=new s(i?new Uint8Array(this.a.buffer):this.a,this.c),A,O,M,_,D,P=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],H,B,j,I,q,R=Array(19),U,z,W,X,$;A=y,k.b(1,1,t),k.b(A,2,t),O=T(this,a),H=C(this.n,15),B=L(H),j=C(this.m,7),I=L(j);for(M=286;257<M&&0===H[M-1];M--);for(_=30;1<_&&0===j[_-1];_--);var J=M,K=_,Q=new(i?Uint32Array:Array)(J+K),G,Y,Z,et,tt=new(i?Uint32Array:Array)(316),nt,rt,it=new(i?Uint8Array:Array)(19);for(G=Y=0;G<J;G++)Q[Y++]=H[G];for(G=0;G<K;G++)Q[Y++]=j[G];if(!i){G=0;for(et=it.length;G<et;++G)it[G]=0}G=nt=0;for(et=Q.length;G<et;G+=Y){for(Y=1;G+Y<et&&Q[G+Y]===Q[G];++Y);Z=Y;if(0===Q[G])if(3>Z)for(;0<Z--;)tt[nt++]=0,it[0]++;else for(;0<Z;)rt=138>Z?Z:138,rt>Z-3&&rt<Z&&(rt=Z-3),10>=rt?(tt[nt++]=17,tt[nt++]=rt-3,it[17]++):(tt[nt++]=18,tt[nt++]=rt-11,it[18]++),Z-=rt;else if(tt[nt++]=Q[G],it[Q[G]]++,Z--,3>Z)for(;0<Z--;)tt[nt++]=Q[G],it[Q[G]]++;else for(;0<Z;)rt=6>Z?Z:6,rt>Z-3&&rt<Z&&(rt=Z-3),tt[nt++]=16,tt[nt++]=rt-3,it[16]++,Z-=rt}n=i?tt.subarray(0,nt):tt.slice(0,nt),q=C(it,7);for(X=0;19>X;X++)R[X]=q[P[X]];for(D=19;4<D&&0===R[D-1];D--);U=L(q),k.b(M-257,5,t),k.b(_-1,5,t),k.b(D-4,4,t);for(X=0;X<D;X++)k.b(R[X],3,t);X=0;for($=n.length;X<$;X++)if(z=n[X],k.b(U[z],q[z],t),16<=z){X++;switch(z){case 16:W=2;break;case 17:W=3;break;case 18:W=7;break;default:throw"invalid code: "+z}k.b(n[X],W,t)}var st=[B,H],ot=[I,j],ut,at,ft,lt,ct,ht,pt,dt;ct=st[0],ht=st[1],pt=ot[0],dt=ot[1],ut=0;for(at=O.length;ut<at;++ut)if(ft=O[ut],k.b(ct[ft],ht[ft],t),256<ft)k.b(O[++ut],O[++ut],t),lt=O[++ut],k.b(pt[lt],dt[lt],t),k.b(O[++ut],O[++ut],t);else if(256===ft)break;this.a=k.finish(),this.c=this.a.length;break;default:throw"invalid compression type"}return this.a};var S=function(){function e(e){switch(t){case 3===e:return[257,e-3,0];case 4===e:return[258,e-4,0];case 5===e:return[259,e-5,0];case 6===e:return[260,e-6,0];case 7===e:return[261,e-7,0];case 8===e:return[262,e-8,0];case 9===e:return[263,e-9,0];case 10===e:return[264,e-10,0];case 12>=e:return[265,e-11,1];case 14>=e:return[266,e-13,1];case 16>=e:return[267,e-15,1];case 18>=e:return[268,e-17,1];case 22>=e:return[269,e-19,2];case 26>=e:return[270,e-23,2];case 30>=e:return[271,e-27,2];case 34>=e:return[272,e-31,2];case 42>=e:return[273,e-35,3];case 50>=e:return[274,e-43,3];case 58>=e:return[275,e-51,3];case 66>=e:return[276,e-59,3];case 82>=e:return[277,e-67,4];case 98>=e:return[278,e-83,4];case 114>=e:return[279,e-99,4];case 130>=e:return[280,e-115,4];case 162>=e:return[281,e-131,5];case 194>=e:return[282,e-163,5];case 226>=e:return[283,e-195,5];case 257>=e:return[284,e-227,5];case 258===e:return[285,e-258,0];default:throw"invalid length: "+e}}var n=[],r,i;for(r=3;258>=r;r++)i=e(r),n[r]=i[2]<<24|i[1]<<16|i[0];return n}(),x=i?new Uint32Array(S):S;A.prototype.g=function(){var t,n,r,s,o,u,a,f,l=new(i?Uint8Array:Array)(32768),c=0,h=this.input,d=this.i,v=this.filename,m=this.l;l[c++]=31,l[c++]=139,l[c++]=8,t=0,this.d.fname&&(t|=_),this.d.fcomment&&(t|=D),this.d.fhcrc&&(t|=M),l[c++]=t,n=(Date.now?Date.now():+(new Date))/1e3|0,l[c++]=n&255,l[c++]=n>>>8&255,l[c++]=n>>>16&255,l[c++]=n>>>24&255,l[c++]=0,l[c++]=O;if(this.d.fname!==e){a=0;for(f=v.length;a<f;++a)u=v.charCodeAt(a),255<u&&(l[c++]=u>>>8&255),l[c++]=u&255;l[c++]=0}if(this.d.comment){a=0;for(f=m.length;a<f;++a)u=m.charCodeAt(a),255<u&&(l[c++]=u>>>8&255),l[c++]=u&255;l[c++]=0}return this.d.fhcrc&&(r=p(l,0,c)&65535,l[c++]=r&255,l[c++]=r>>>8&255),this.e.outputBuffer=l,this.e.outputIndex=c,o=new g(h,this.e),l=o.g(),c=o.c,i&&(c+8>l.buffer.byteLength?(this.a=new Uint8Array(c+8),this.a.set(new Uint8Array(l.buffer)),l=this.a):l=new Uint8Array(l.buffer)),s=p(h,e,e),l[c++]=s&255,l[c++]=s>>>8&255,l[c++]=s>>>16&255,l[c++]=s>>>24&255,f=h.length,l[c++]=f&255,l[c++]=f>>>8&255,l[c++]=f>>>16&255,l[c++]=f>>>24&255,this.i=d,i&&c<l.length&&(this.a=l=l.subarray(0,c)),l};var O=255,M=2,_=8,D=16;r("Zlib.Gzip",A),r("Zlib.Gzip.prototype.compress",A.prototype.g)}).call(this);var createUUID=function(e,t){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(e,t).toUpperCase()}}(/[xy]/g,function(e){var t=Math.random()*16|0,n=e=="x"?t:t&3|8;return n.toString(16)}),recBuffersL=[],recBuffersR=[],outputChannels,outputSampleRate,sendOffset=0,glb=createUUID(),sendIdx=1,uid="",sampleRate;this.onmessage=function(e){var t;switch(e.data.command){case"reinit":recBuffersL=[],recBuffersR=[],sendOffset=0,sendIdx=1,glb=createUUID();break;case"init":init(e.data.config);break;case"record":record(e.data.buffer);break;case"exportWAV":t=exportWAV(e.data.type),this.postMessage({data:t,eventId:e.data.eventId});break;case"getBuffer":t=getBuffer(),this.postMessage({data:t,eventId:e.data.eventId});break;case"getSendBuffer":t=getSendBuffer(),this.postMessage({data:t,eventId:e.data.eventId});break;case"getLastSendBuffer":t=getSendBuffer(!0),this.postMessage({data:t,eventId:e.data.eventId});break;case"clear":clear()}};'], {type: "text/javascript"});
        return URL.createObjectURL(e)
    }, n, r, i = function(e, n) {
        function c(e, t) {
            var n = parseInt(Math.random() * 1e5) + "_" + (new Date).getTime();
            e && (e.eventId = n), f.postMessage(e), t && (l[n] = t)
        }
        function w(e, t) {
            if (!t && m.length > 4)
                return;
            e.getSendBuffer(function(r) {
                if (!r)
                    return;
                b = e.glb = r.json.glb;
                var i = $.ajax({url: n.url,cache: !1,contentType: "Content-Type: multipart/form-data; boundary=" + r.boundary,dataType: "json",data: r.buffer,processData: !1,type: "post"});
                m.push(i), i.always(function(n) {
                    m = $.grep(m, function(e) {
                        return i !== e
                    });
                    if (n && n.result && n.result.err_no != 0) {
                        $.each(m, function(e, t) {
                            t.abort()
                        }), m = [], d.fail.fire(n), h = !1;
                        return
                    }
                    n && n.content && n.content.item && (y = n, d.result.fire(n)), (n && n.result && (n.result.res_type == 3 || n.result.res_type == 5) || !n.result) && e.stop(!0);
                    if (t || n && n.result && n.result.idx < 0)
                        $.each(m, function(e, t) {
                            t.abort()
                        }), m = [], y ? d.finish.fire(y) : d.fail.fire(n), h = !1, clearInterval(p)
                })
            }, t)
        }
        if (e.ended)
            return !1;
        r || (r = this.context = new AudioContext);
        var i = this.source = r.createMediaStreamSource(e), s = $.extend({timeout: 5e3}, n);
        s.eq;
        var o = s.bufferLen || 4096;
        this.context = i.context;
        var u = 1, a = 1;
        this.node = this.context.createScriptProcessor(o, u, a);
        var f = new Worker(s.workerPath || t());
        f.postMessage({command: "init",config: {outputChannels: a,outputSampleRate: 8e3,uid: $.cookie("BAIDUID"),sampleRate: this.context.sampleRate}});
        var l = {};
        f.onmessage = function(e) {
            e.data && e.data.eventId && typeof l[e.data.eventId] == "function" && (l[e.data.eventId](e.data.data), l[e.data.eventId] = null)
        };
        var h = !1;
        this.node.onaudioprocess = function(e) {
            if (!h)
                return;
            var t = [], n;
            for (n = 0; n < a; n++)
                t.push(e.inputBuffer.getChannelData(n));
            c({command: "record",buffer: t}), d.audioprocess.fire(e)
        }, this.configure = function(e) {
            for (var t in e)
                e.hasOwnProperty(t) && (s[t] = e[t])
        }, this.reinit = function() {
            f.postMessage({command: "reinit"}), y = null
        };
        var p;
        this.start = function() {
            if (h)
                return;
            this.reinit(), d.start.fire(), w(this), h = !0, p = setInterval(function() {
                w(v)
            }, 100)
        };
        var d = {}, v = this;
        $.each(["audioprocess", "stop", "start", "finish", "stop", "result", "fail", "noUserMedia"], function(e, t) {
            d[t] = $.Callbacks(), v["on" + t] = function(e) {
                d[t].add(e)
            }
        }), this.removeEventListener = function(e, t) {
            typeof t == "undefined" ? d[e].empty() : d[e].remove(t)
        }, e && e.addEventListener && e.addEventListener("ended", function() {
            d.noUserMedia.fire(), e.removeEventListener(arguments.callee)
        }), this.stop = function(e) {
            h && (e ? ($.each(m, function(e, t) {
                t.abort()
            }), m = [], y ? d.finish.fire(y) : d.fail.fire()) : w(this, !0), d.stop.fire(), g && clearTimeout(g)), clearInterval(p), h = !1
        }, this.clear = function() {
            c({command: "clear"}, cb)
        }, this.getBuffer = function(e) {
            c({command: "getBuffer"}, e)
        }, this.getSendBuffer = function(e, t) {
            var n = t ? "getLastSendBuffer" : "getSendBuffer";
            c({command: n}, e)
        }, this.exportWAV = function(e, t) {
            c({command: "exportWAV",type: t}, e)
        }, i.connect(this.node), this.node.connect(this.context.destination);
        var m = [], g, y, b = this.glb = ""
    };
    e.URL = e.URL || e.webkitURL, navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, e.AudioContext = e.AudioContext || e.webkitAudioContext, i.support = function() {
        return !navigator.getUserMedia || !e.URL ? !1 : e.AudioContext ? e.Worker ? !0 : !1 : !1
    };
    var s, o = !1, u = $("body"), l = function() {
        var e, t, n, r, i, s, o, l;
        return function(c) {
            function d() {
                s.show(), c.removeEventListener("audioprocess"), c.onaudioprocess(function(e) {
                    var t = e.inputBuffer.getChannelData(0), n = Math.max.apply(Math, t), s = (1 - n) * (1 - n) * 56;
                    r.height(s);
                    var o = n * 100;
                    i.css({width: o + 100 + "px",height: o + 100 + "px","border-radius": o + 100 + "px",margin: 91 - o / 2 + "px 0 0 -" + (o / 2 + 50) + "px"})
                })
            }
            function v() {
                this.removeEventListener("audioprocess"), i.get(0).style.cssText = "", r.get(0).style.cssText = "", s.hide()
            }
            if (!e) {
                var h = ['<div class="default-tip"></div>', '<div class="result"></div>', '<div class="voice_inner_html5">', '<div class="voice-btn-text">点击麦克风，开始说话</div>', '<img class="voice-btn" src="' + $CONFIG["paths.static"] + 'common/widget/voice/img/start_btn.png">', '<div class="box">', '<div class="box_inner"></div>', "</div>", '<div class="round2"></div>', '<div class="round1"></div>', '<div class="round3"></div>', "</div>"].join(""), p = ['<div class="eui-dialog" id="voice">', '<div class="eui-dialog-header">', '<h5 class="eui-dialog-title">语音识别快速体验</h5>', '<a href="#" data-action="close" class="dialog-close">×</a>', "</div>", '<div class="eui-dialog-body">' + h + "</div>", "</div>"].join("");
                e = $(p), t = $(".voice-btn", e), n = $(".result", e), r = $(".box_inner", e), i = $(".round3", e), o = $(".default-tip", e), l = $(".voice-btn-text", e), s = $(".round2,.round1", e), s.hide()
            }
            t.on("click", function() {
                var e = t.attr("data-type");
                e === "open" ? (v(c), c.stop(), t.attr("data-type", "stop")) : (c.start(), d(), t.attr("data-type", "open"))
            }), $(".dialog-close", e).click(function() {
                c.stop(!0), c.closeUI(), f()
            }), c.closeUI = function() {
                e.remove(), f()
            }, c.openUI = function() {
                a(), o.show(), n.html(""), l.show(), n.removeClass("waiting"), e.appendTo(u), initVoicePostion($("#voice"))
            }, c.onnoUserMedia(function() {
                c.stop(!0), c.closeUI(), f()
            }), c.onfinish(function() {
                n.removeClass("waiting"), v(c), l.show(), t.attr("data-type", "stop")
            }), c.onresult(function(e) {
                n.html(e.content.item[0])
            }), c.onstart(function() {
                o.hide(), l.hide(), n.html("请说话"), n.addClass("waiting")
            }), c.onfail(function(e) {
                var r = "识别失败，请点击下面按钮后再说一次";
                e && e.result && e.result.err_no == "-3005" && (r = "没听清楚，请点击下面按钮后再说一次"), n.html(r), l.show(), n.removeClass("waiting"), v(c), t.attr("data-type", "stop")
            })
        }
    }(), c = !1, h;
    i.init = function(t) {
        var r = $.Deferred();
        if (n) {
            var s = new i(n, t);
            l(s), r.resolve(s)
        } else
            navigator.getUserMedia({audio: !0}, function(s) {
                n = s, c || (c = !0, $(e).on("focus", function() {
                    h && (clearTimeout(h), h = !1)
                }));
                var o = new i(n, t);
                l(o), r.resolve(o)
            }, function() {
                r.reject()
            });
        return r
    }, i.forceDownload = function(t, n) {
        var r = URL.createObjectURL(t), i = e.document.createElement("a");
        i.href = r, i.download = n || "output.wav";
        var s = document.createEvent("Event");
        s.initEvent("click", !0, !0), i.dispatchEvent(s)
    }, i.addStartBtn = function(e) {
        $('<span class="ipt_rec"></span>').prependTo($("#kw").parent()), e = e || ".ipt_rec{z-index:1;display:none;position:absolute;right:0;height:32px;width:30px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1QzhBRTc4QUQxQURFNDExOThEMzhEMjQzRjc4OTk1NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMUNGNTJENUIwM0UxMUU0QUE5Q0I1NUY4NEU2NEE3QyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMUNGNTJENEIwM0UxMUU0QUE5Q0I1NUY4NEU2NEE3QyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYxOEFFNzhBRDFBREU0MTE5OEQzOEQyNDNGNzg5OTU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVDOEFFNzhBRDFBREU0MTE5OEQzOEQyNDNGNzg5OTU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7GDGFwAAAIRQTFRFsbGx09PTs7Oznp6e+Pj4ysrK9/f34ODgqKio+/v7m5ub8fHxpaWlr6+vnZ2dpqam4eHhtbW17+/vt7e36Ojo1NTU2dnZ+fn5qamp6urq4+PjxsbGoaGhrq6uoqKiu7u78PDwz8/Purq6/f39+vr6nJycycnJ0NDQ4uLi0tLSmZmZ// // u30gbgAAAN1JREFUeNrs1dcOgjAUBuCW0lL2RnHv8fv+76c4IkQLNfHCRM4Fp00+bs4AcvokyP/qyGDMsDQ1xzW4lo7gUNOkDiwdbYBWaQlDRzOYVTLBdDTQzL3+DU3IqyakXTc7r9ZDlM+p2l+nqsRQpefIL0+rPrE5VipNMa1tw646+ziqtAhwuG1aENw2bYStUFaQwxON10OM1fW2JfzB8zrwITct3XFnCLPHJQsxcVt7mUggLty1vShiQCYdnbc5wz0Yt7vnRNDUA7yUCt0v25uJ+nlNHjUh39f9P+0jfRZgAC77RDy7MTXTAAAAAElFTkSuQmCC) no-repeat center;background-size:25px 25px;background-position:0 50%;cursor:pointer}.ipt_rec:hover{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1QzhBRTc4QUQxQURFNDExOThEMzhEMjQzRjc4OTk1NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNjY1MjJDOUIwM0UxMUU0OTVBNEJDRTlDQTdDMTA3QyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNjY1MjJDOEIwM0UxMUU0OTVBNEJDRTlDQTdDMTA3QyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYxOEFFNzhBRDFBREU0MTE5OEQzOEQyNDNGNzg5OTU1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjVDOEFFNzhBRDFBREU0MTE5OEQzOEQyNDNGNzg5OTU1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4sUn+wAAAL1QTFRFXp// YqH/pMn/8Pb/N4f/v9n/7vX/MYT/wNn/Nof/S5P/XZ7/9vr/8ff/o8j/kb3/TZX/RI// z+L/3+z/7/b/4e3/kr7/R5H/NYb/aqb/k77/Wpz/LYH/ZqT/8vf/ncT/Poz/WJv/ncX/osj/4O3/MoT/M4X/1OX/RpD/sdH/+Pv/irn/car/0+X/SZL/+/3/S5T/cqv/pcn/9fn/stH/psr/vtj/w9v/PYv/WZz/yN7/4+7/kL3/LIH// // /484UWgAAAPFJREFUeNrslccOwjAQRO00SAihJ9TQe+91+P/PIgGiEIHBSByQYA/eXev5sjO2yfGdIL9Lh6mqUpmTzuMcMS46jJAgRoUQZB6awnBTGZSHliC6SYTEQwPB/Ke/gybkniaESUcCyqv+3iM6jqHvqtrZVW3EWfQUM2eVHcdGPccuMWDRBqo3t+Hg1lvUWbTSwvpy07JZunKrHZoKc4IxdJTA8RH67Hn3JijYfmsXoM2fqJOpwEp6TdLCJvNUy5SGYqm7H+uNRakILfVCed2UcA3J1F/7JC3kEkAiJ6R5X7YHjvp6mngzIW/Rkf8v9XH6JMAA4NrUl+9owZwAAAAASUVORK5CYII=)}", p(e, "forResult")
    }, i.addStyle = function() {
        i.addStartBtn();
        var e = "";
        p(e, "forResult")
    }, i.addMask = a, i.removeMask = f, i.addStyleEle = p, e.Recorder = i
}(window), (!Recorder.support() || location.href.match(/voice_flash=1/)) && function() {
    var e = Recorder.addStartBtn, t = Recorder.addMask, n = Recorder.removeMask, r = Recorder.addStyleEle;
    (function() {
        function p(e) {
            var t = [];
            for (var n in e)
                t.push('"' + n + '":' + '"' + e[n] + '"');
            return "{" + t.join(",") + "}"
        }
        var i = "11.1.0", s = "playerProductInstall.swf", o = {}, u = {};
        u.quality = "high", u.bgcolor = "#ffffff", u.allowscriptaccess = "always", u.allowfullscreen = "false";
        var a = {};
        a.id = "flash_recorder", a.name = "flash_recorder", a.align = "middle";
        var f = !1, l = function(e) {
            var t = this, n = {timeout: 5e3,BlueMicoUrl: window.$CONFIG["paths.static"] + "common/widget/voice/img/start_btn_flash.png",GrayMicoUrl: window.$CONFIG["paths.static"] + "common/widget/voice/img/start_btn_disabled_flash.png",swfUrl: window.$CONFIG["paths.static"] + "common/widget/voice/flash_recorder.swf"};
            $.extend(t, n, e), this.callbacks = {}, $.each(["stop", "start", "finish", "result", "fail"], function(e, n) {
                t.callbacks[n] = $.Callbacks(), t["on" + n] = function(e) {
                    t.callbacks[n].add(e)
                }
            })
        };
        l.addStyle = function() {
            var t = ".ipt_rec{z-index:1;display:none;position:absolute;right:0;height:32px;width:30px;background:url(" + window.$CONFIG["paths.static"] + "preview/img/mic_flash.png" + ") no-repeat;background-position:-20px 4px;background-color:#fff;cursor:pointer;}.ipt_rec:hover{background-position:-20px -24px;}";
            e(t);
            var n = "";
            r(n, "forResult")
        };
        var c = function() {
            var e, r, l;
            return function(c) {
                if (!e) {
                    var p = ['<div class="default-tip"></div>', '<div class="result"></div>', '<div class="voice_inner">', '<div class="voice-btn-text">点击麦克风，开始说话</div>', '<div id="voice_flashContent"></div>', "</div>"].join(""), d = ['<div class="eui-dialog" id="voice">', '<div class="eui-dialog-header">', '<h5 class="eui-dialog-title">语音识别快速体验</h5>', '<a href="#" data-action="close" class="dialog-close">×</a></div>', '<div class="eui-dialog-body">' + p + "</div>", "</div>"].join("");
                    e = $(d).appendTo("body"), r = e.find(".result"), l = e.find(".default-tip"), btnText = $(".voice-btn-text", e), r.html(""), swfobject.embedSWF(c.swfUrl, "voice_flashContent", "300", "300", i, s, o, u, a, function(e) {
                        c.swf = e.ref
                    }), t(), initVoicePostion($("#voice")), $(".dialog-close", e).click(function() {
                        f || c.stop(!0), c.closeUI(), n()
                    })
                }
                c.closeUI = function() {
                    e.css("margin-top", "-32767px"), n(), c.stop()
                }, c.openUI = function() {
                    e.css("margin-top", ""), l.show(), btnText.show(), t()
                }, c.onstop(function() {
                    r.removeClass("waiting")
                }), c.onfinish(function() {
                }), c.onresult(function(e) {
                    r.html(e.content.item[0])
                }), c.onstart(function() {
                    btnText.hide(), l.hide(), r.addClass("waiting"), r.html("请说话")
                }), c.onfail(function(e) {
                    var t = "识别失败，请点击下面按钮后再说一次";
                    e && e.result && e.result.err_no == "-3005" && (t = "没听清楚，请点击下面按钮后再说一次"), r.removeClass("waiting"), r.html(t)
                }), h.defer.done(function() {
                    c.start(), c.stop()
                })
            }
        }();
        l.support = function() {
            return swfobject.hasFlashPlayerVersion(i)
        }, l.flash_loaded = function() {
            h.defer.resolve(h.obj)
        }, l.flash_noMicrophone = function() {
            h.obj.BlueMicoUrl = h.obj.GrayMicoUrl, h.obj.config(), f = !0, h.defer.reject()
        }, l.recorder_enable = function() {
        }, l.recorder_disabled = function() {
        }, $.each(["start", "stop", "finish", "result", "fail"], function(e, t) {
            l[t] = function(e) {
                if (!h)
                    throw new Error(t + " be called before recorder initial");
                var n = h.obj;
                e = e && $.parseJSON(e), n.callbacks[t].fire(e)
            }
        });
        var h;
        l.init = function(e) {
            var t = $.Deferred(), n = !1;
            return h && (n = !0), h = h || {}, h.defer = t, h.obj = h.obj || new l(e), c(h.obj), n && t.resolve(h.obj), t
        }, $.extend(l.prototype, {clear: function() {
                var e = this;
                for (var t in e.callbacks)
                    e.callbacks[t].empty()
            },config: function() {
                var e = this;
                e.configed || (e.swf.config(p({timeout: e.timeout,server: e.url,BlueMicoUrl: e.BlueMicoUrl,GrayMicoUrl: e.GrayMicoUrl})), e.configed = !0)
            },start: function() {
                var e = this;
                e.config(), e.swf.startRecord()
            },stop: function() {
                this.swf.stopRecord()
            },close: function() {
                this.swf.closeRecord()
            }}), window.Recorder = l
    })()
}(window), typeof define == "function" && define("Recorder", [], function() {
    return window.Recorder
}), define("common/widget/voice/voiceRecorder", ["require", "common/lib/swfobject/swfobject", "jquery.cookie", "Recorder"], function(e) {
    function n(e) {
        this._src = e.src, this.init()
    }
    e("common/lib/swfobject/swfobject"), e("jquery.cookie");
    var t = e("Recorder");
    return $.extend(n.prototype, {init: function() {
            if (!t || !t.support()) {
                this._src.hide();
                return
            }
            window.__supportvoice = !0, this._src.click(function(e) {
                e.preventDefault();
                var n = t.init({url: "http://vse.baidu.com/echo.fcgi"});
                n.done(function(e) {
                    e.openUI()
                }).fail(function() {
                    alert("不能获得麦克风的权限")
                })
            })
        }}), n
}), define("common/widget/dialog/dialog", ["require"], function(e) {
    function n(e) {
        e = e || {}, this.uid = "eui-" + (new Date).getTime() + "-" + parseInt(Math.random() * 1e5, 10);
        var t = {title: "提示",content: "",mask: !0,callback: function() {
            }};
        this._opt = $.extend(t, e);
        var n = ['<div class="eui-dialog">', '<div class="eui-dialog-header">', '<h5 class="eui-dialog-title">' + this._opt.title + "</h5>", '<a href="#" data-action="close" class="dialog-close">&times;</a>', "</div>", '<div class="eui-dialog-body">', this._opt.content, "</div>", "</div>"].join("");
        this._opt.tpl = e.tpl || n
    }
    var t = window.EUI || {};
    return t.showMask = function() {
        this.mask ? this.mask.show() : this.mask = $('<div class="eui-mask"></div>').appendTo(document.body)
    }, t.hideMask = function() {
        this.mask && this.mask.hide()
    }, $.extend(n.prototype, {bindEvent: function() {
            this.bindClose(), this.bindResize()
        },createDialog: function() {
            this._self = $(this._opt.tpl), $("body").append(this._self), this._self.attr("id", this.uid), this.bindEvent(), this._opt.ready && this._opt.ready(this._self)
        },setPosition: function() {
            this._self.css({left: ($(window).width() - this._self.width()) / 2,top: ($(window).height() - this._self.height()) / 2})
        },bindResize: function() {
            var e = this;
            $(window).on("resize", function() {
                e.setPosition()
            })
        },bindClose: function() {
            var e = this;
            this._self.delegate("*[data-action=close]", "click", function(t) {
                t.preventDefault(), e.hide($(this))
            })
        },setContent: function(e, t) {
            this._self.find(".eui-dialog-body").html(e), typeof t == "function" && t(this._self)
        },getDialog: function() {
            return this._self
        },show: function() {
            this._opt.mask ? t.showMask() : t.hideMask(), this._self ? this._self.show() : (this.createDialog(), this._self.show()), this.setPosition()
        },hide: function(e) {
            this._self && this._self.hide(), this._opt.mask && t.hideMask();
            if (this._opt.callback)
                if (e) {
                    var n = e.attr("data-type") === "yes" ? !0 : !1;
                    this._opt.callback(n)
                } else
                    this._opt.callback()
        }}), t.dialog = function(e) {
        return new n(e)
    }, t.alert = function(e) {
        e = e || {};
        var t = e.title || "提示", r = e.content || "", i = e.alertText || "确定";
        return e.tpl = ['<div class="eui-dialog">', '<div class="eui-dialog-header">', '<h5 class="eui-dialog-title">' + t + "</h5>", '<a href="#" data-action="close" class="dialog-close">&times;</a>', "</div>", '<div class="eui-dialog-body">', '<div class="eui-text-content">', r, "</div>", "</div>", '<div class="eui-dialog-footer">', '<input type="button" class="btn btn-primary" data-action="close" value="&nbsp;' + i + '&nbsp;">', "</div>", "</div>"].join(""), new n(e)
    }, t.confirm = function(e) {
        e = e || {};
        var t = e.title || "提示", r = e.content || "", i = {yesText: e.yesText || "确定",noText: e.noText || "取消"};
        return e.tpl = ['<div class="eui-dialog">', '<div class="eui-dialog-header">', '<h5 class="eui-dialog-title">' + t + "</h5>", '<a href="#" data-action="close" class="dialog-close">&times;</a>', "</div>", '<div class="eui-dialog-body">', '<div class="eui-text-content">', r, "</div>", "</div>", '<div class="eui-dialog-footer">', '<input type="button" class="btn btn-primary"', ' data-type="yes" data-action="close" value="&nbsp;' + i.yesText + '&nbsp;">', '<input type="button" class="btn btn-default"', ' data-type="no" data-action="close" value="&nbsp;' + i.noText + '&nbsp;">', "</div>", "</div>"].join(""), new n(e)
    }, t.tip = function(e) {
        e = e || {}, e.type = e.type || "default", e.time = e.time || 2e3, e.mask = !1;
        var t = e.content || "";
        e.tpl = ['<div class="eui-tip eui-tip-' + e.type + '">', '<p class="tip-icon"></p>', '<p class="eui-tip-content">' + t + "</p>", "</div>"].join("");
        var r = new n(e);
        return r.show = function() {
            r._self ? r._self.fadeIn() : (r.createDialog(), r._self.hide().fadeIn()), r.setPosition(), setTimeout(function() {
                r._self.fadeOut()
            }, e.time)
        }, r
    }, window.EUI = t, window.EUI
}), define("common/widget/string/utils", ["require", "exports", "module"], function(e, t, n) {
    var r = {getLength: function(e) {
            var t = /[\u4e00-\u9fa5]/g, n = e.replace(t, "ww").length;
            return n
        },setEllipsis: function(e, t, n) {
            n = n || "";
            var r = this, i = this.getLength(e);
            if (i <= t)
                return e;
            var s = 0, o = [], u = e.split("");
            for (var a = 0, f = u.length; a < f; a++) {
                var l = u[a];
                s += r.getLength(l);
                if (!(s <= t))
                    break;
                o.push(l)
            }
            return o.join("") + n
        },unhtml: function(e, t) {
            return e ? e.replace(t || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g, function(e, t) {
                return t ? e : {"<": "&lt;","&": "&amp;",'"': "&quot;",">": "&gt;","'": "&#39;"}[e]
            }) : ""
        },html: function(e) {
            return e ? e.replace(/&((g|l|quo)t|amp|#39);/g, function(e) {
                return {"&lt;": "<","&amp;": "&","&quot;": '"',"&gt;": ">","&#39;": "'"}[e]
            }) : ""
        },unhtml4Hash: function(e) {
            for (var t in e)
                if (e.hasOwnProperty(t)) {
                    var n = e[t];
                    typeof n == "string" && (e[t] = this.unhtml(n))
                }
            return e
        }};
    n.exports = r
}), define("common/widget/voice/voiceSpeech", ["require", "common/widget/dialog/dialog", "common/widget/string/utils"], function(e) {
    function r(e) {
        this._src = e.src, this.init(), this.defaultParams = {tex: "百度语音，面向广大开发者永久免费开放语音合成技术。所采用的离在线融合技术，根据当前网络状况，自动判断使用本地引擎或者云端引擎，进行语音合成，再也不用担心流量消耗了！",per: 0,lan: "zh",spd: 5,vol: 5}, this.playParams = $.extend({}, this.defaultParams), this._limit = 400
    }
    var t = e("common/widget/dialog/dialog"), n = e("common/widget/string/utils");
    return $.extend(r.prototype, {init: function() {
            this.bindEvent()
        },bindEvent: function() {
            this.bindOpenBtn()
        },bindOpenBtn: function() {
            var e = this;
            this._src.click(function() {
                e.showContainer()
            })
        },showContainer: function() {
            this._self ? (this._self.remove(), this.playParams = $.extend({}, this.defaultParams), this.createContainer()) : this.createContainer()
        },createContainer: function() {
            var e = this;
            t.showMask();
            var n = ['<div class="eui-dialog">', '<div class="eui-dialog-header">', '<h5 class="eui-dialog-title">语音合成快速体验</h5>', '<a href="#" data-action="close" class="dialog-close">×</a></div>', '<div class="eui-dialog-body">' + this.getSpeechContent() + "</div>", "</div>"].join("");
            this._self = $(n), this._self.appendTo($("body")), this.setPosition(), $(window).on("resize", function() {
                e.setPosition()
            }), this._self.find("a[data-action=close]").click(function(n) {
                n.preventDefault(), e._self.hide(), t.hideMask(), e.activePlayer && e.activePlayer.pause()
            }), this.initDom(), this.checkNumber(), this.bindPlayBtn(), this.bindInput(), this.bindSpeechConfig()
        },initDom: function() {
            this._input = this._self.find("textarea[data-node=input]"), this._number = this._self.find("div[data-node=number]")
        },setPosition: function() {
            this._self.css({left: ($(window).width() - this._self.width()) / 2,top: ($(window).height() - this._self.height()) / 2})
        },getSpeechContent: function() {
            var e = ['<div class="speech-container">', '<div class="speech-view">', '<div class="speech-upic speecher-woman"></div>', '<div class="speech-inbox">', '<div class="input-warp">', '<div class="input-horn"></div>', '<div class="input-bg">', '<textarea class="speech-input" data-node="input">' + this.playParams.tex, "</textarea>", "</div>", "</div>", '<div class="input-number" data-node="number"></div>', "</div>", '<div class="speech-play">', '<p class="play-text">输入文字后，点击播放</p>', '<a href="#" class="play-btn" data-action="play"></a>', "</div>", "</div>", '<div class="speech-config">', '<div class="config-title">发音人性别</div>', '<div class="config-body">', '<div class="config-group config-sex">', '<span class="config-item first man" data-action="per" data-code="1">男性</span>', '<span class="config-item item-active last woman" data-action="per" data-code="0">', "女性</span>", "</div>", "</div>", '<div class="config-title">语速</div>', '<div class="config-body">', '<div class="config-group">', '<span class="config-item first" data-action="spd" data-code="0">最慢</span>', '<span class="config-item" data-action="spd" data-code="3">较慢</span>', '<span class="config-item item-active" data-action="spd" data-code="5">正常</span>', '<span class="config-item" data-action="spd" data-code="7">较快</span>', '<span class="config-item last" data-action="spd" data-code="9">最快</span>', "</div>", "</div>", '<div class="config-title">音量</div>', '<div class="config-body">', '<div class="vol-config">', '<div class="vol-bg"></div>', '<div class="vol-bar"></div>', '<span class="vol-handle"></span>', "</div>", "</div>", "</div>", "</div>"].join("");
            return e
        },play: function() {
            var e = this.getMp3Url();
            document.createElement("audio").canPlayType && document.createElement("audio").canPlayType("audio/mpeg") ? this.playForH5(e) : this.playForNoH5(e)
        },bindPlayBtn: function() {
            var e = this;
            this._self.delegate("a[data-action=play]", "click", function(t) {
                t.preventDefault(), e.play()
            }), this._self.delegate("a[data-action=pause]", "click", function(t) {
                t.preventDefault(), e.activePlayer && e.activePlayer.pause && e.activePlayer.pause()
            })
        },playForH5: function(e) {
            this.activePlayer && this.activePlayer.pause();
            var t = this._self.find(".play-btn"), n = this._self.find(".play-text"), r = new Audio(e);
            this.activePlayer = r, r.src = e, r.onpause = function() {
                t.removeClass("pause-btn"), t.attr("data-action", "play"), n.html("输入文字后，点击播放")
            }, r.onended = function() {
                t.removeClass("pause-btn"), t.attr("data-action", "play"), n.html("输入文字后，点击播放")
            }, r.onplaying = function() {
                t.addClass("pause-btn"), n.html('朗读中<span class="playing-icon"></span>'), t.attr("data-action", "pause")
            }, r.play()
        },playForNoH5: function(e) {
            this.activePlayer && (this.activePlayer.pause(), $(this.activePlayer).remove());
            var t = "j-embed-" + (new Date - 0), n = $('<div style="display:none"><embed id=' + t + ' src="' + e + '" width="0" height="0" ></div>');
            this._self.append(n), this.activePlayer = $("#" + t)[0]
        },bindSpeechConfig: function() {
            var e = this;
            this._self.delegate(".speech-config *[data-action]", "click", function(t) {
                t.preventDefault();
                var n = $(this).attr("data-action"), r = $(this).attr("data-code"), i = {};
                i[n] = r, $.extend(e.playParams, i), $(this).siblings(".item-active").removeClass("item-active"), $(this).addClass("item-active"), n === "per" && e.updateSpeecher(r), e.play()
            }), this.bindVolConfig()
        },updateSpeecher: function(e) {
            var t = {0: "speecher-woman",1: "speecher-man"}, n = window.parseInt(e) === 1 ? 0 : 1;
            this._self.find(".speech-upic").removeClass(t[n]).addClass(t[e])
        },bindVolConfig: function() {
            function n() {
                t || ($(document).on("mousemove", function(t) {
                    if (e.volmove) {
                        var n = t.pageX - e._self.find(".vol-config").offset().left;
                        e.setVolPoint(n)
                    }
                }), t = 1)
            }
            var e = this, t = 0;
            this._self.find(".vol-handle").on("mousedown", function(t) {
                t.preventDefault(), e.volmove = 1, e.volmovestart = 1, n()
            }), this._self.find(".vol-handle").on("mouseup", function(t) {
                t.preventDefault(), e.volmove = 0
            }), this._self.find(".vol-config").on("mouseleave", function(t) {
                t.preventDefault(), e.volmove = 0
            }), this._self.find(".vol-config").on("mouseup", function(t) {
                t.preventDefault(), e.volmove = 0, e.volmovestart === 1 && (e.play(), e.volmovestart = 0)
            }), this._self.find(".vol-config").on("click", function(t) {
                var n = t.pageX - $(this).offset().left;
                e.volmovestart = 1, e.setVolPoint(n)
            })
        },setVolValue: function(e) {
            var t = window.parseInt(e / 20);
            t = t > 9 ? 9 : t, $.extend(this.playParams, {vol: t})
        },setVolPoint: function(e) {
            e = e < 0 ? 0 : e, e = e > 200 ? 200 : e, this._self.find(".vol-handle").css({left: e - 4 + "px"}), this._self.find(".vol-bar").css({width: e + "px"}), this.setVolValue(e)
        },bindInput: function() {
            var e = this;
            this._input.on("keyup", function(t) {
                e.checkNumber()
            }), this._input.on("focus", function(t) {
                e.checkValueForFocus(), e.checkNumber()
            }), this._input.on("blur", function(t) {
                e.checkValueForBlur(), e.checkNumber()
            })
        },getMp3Url: function() {
            var e = "http://tts.baidu.com/text2audio", t = this.getParams();
            return e + "?idx=1" + "&tex=" + encodeURIComponent(encodeURIComponent(t.tex)) + "&cuid=baidu_speech_demo" + "&cod=2" + "&lan=" + t.lan + "&ctp=1" + "&pdt=1" + "&spd=" + t.spd + "&per=" + t.per + "&vol=" + t.vol + "&pit=5"
        },checkValueForFocus: function() {
            var e = this._input.val();
            e === this.defaultParams.tex && this._input.val("")
        },checkValueForBlur: function() {
            var e = this._input.val();
            e === "" && this._input.val(this.defaultParams.tex)
        },checkNumber: function() {
            if (!this._number)
                return;
            var e = this._input.val(), t = n.getLength(e), r = this._limit - t;
            if (r >= 0) {
                var i = r % 2 !== 0 ? (r - r % 2) / 2 : r / 2;
                this._number.html(this.getNumTpl("success").replace(/\{number\}/g, i))
            } else
                this._input.val(n.setEllipsis(e, this._limit, "")), this._number.html(this.getNumTpl("success").replace(/\{number\}/g, 0))
        },getNumTpl: function(e) {
            var t = {success: '还可以输入<strong class="number">{number}</strong>字',error: '已超出<strong class="number number-overflow">{number}</strong>字'};
            return t[e]
        },getParams: function() {
            var e = this._self.find(".speech-input");
            return $.extend(this.playParams, {tex: e.val()})
        }}), r
}), require(["common/widget/tab/tab", "common/widget/loginpop/loginpop", "common/widget/fixtop/fixtop", "common/widget/lazyload/scrollload", "product/widget/serviceTry/serviceTry", "common/widget/voice/voiceRecorder", "common/widget/voice/voiceSpeech"], function(e, t, n, r, i, s, o) {
    (function() {
        var e = $("#js-detail-tab-01 .cc-01");
        e.hasClass("sectionid-con-nlp") && (new i).init()
    })(), (new e({tit: $("#js-detail-tab-02 .tt-02 li"),con: $("#js-detail-tab-02 .cc-02"),eve: "mouseover"})).init(0), $("[data-immediate-use=true]").on("click", function() {
        var e = window.$CONFIG["logging.status"], n = window.$CONFIG["paths.base"] + $(this).attr("data-logged-url");
        e ? window.location.href = n : ((new t({goUrl: n})).init(), window.LoginPop.show())
    }), new n({src: $("#js-detail-tab-01 .tt-01"),callback: function() {
            $(".detail-top-banner .btn-01").show(), $("#js-detail-tab-01 [data-immediate-use=true]").hide()
        },fixedCallback: function() {
            $(".detail-top-banner .btn-01").hide(), $("#js-detail-tab-01 [data-immediate-use=true]").show()
        }}), (new r).init(), $(".panel-header-download").click(function() {
        var e = $(this);
        e.hasClass("act") ? (e.siblings(".panel-body-download").slideUp(), e.removeClass("act")) : (e.siblings(".panel-body-download").slideDown(), e.addClass("act"))
    }), $("#j-voice-start").length > 0 && new s({src: $("#j-voice-start")}), $("#j-speech-start").length > 0 && new o({src: $("#j-speech-start")})
}), define("product/detail", function() {
});
