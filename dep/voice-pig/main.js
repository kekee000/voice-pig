define([
    'require',
    './context',
    './platform',
    './AnchorDetect',
    './observable'
], function (require) {
    var context = require('./context');
    var platform = require('./platform');
    var AnchorDetect = require('./AnchorDetect');
    var yuyinDispatcher = require('./observable').mixin({});
    var elementMethods = {
        triggerEvent: function (type) {
            var e = document.createEvent('Event');
            e.initEvent(type, true, true);
            e.context = context;
            this.dispatchEvent(e);
            this['on' + type] && this['on' + type].call(this, e);
        },
        play: function () {
            context.target = this;
            context.voice.stop();
            context.voice.playText(this.getAttribute('text'));
            return this;
        },
        pause: function () {
            context.voice.pause();
            return this;
        },
        stop: function () {
            context.voice.stop();
            return this;
        }
    };
    function bindRecognition() {
        var onFinish = function (e) {
            console.log(e);
        };
        var onStart = function (e) {
            console.log(e);
        };
        context.panel.on('click', function () {
            if (context.recognition) {
                if (context.recognition.visible) {
                    context.recognition.hide();
                } else {
                    context.recognition.show();
                    yuyinDispatcher.fire('start');
                }
            } else {
                context.initRecogintion().then(function () {
                    context.recognition.on('finish', function (e) {
                        yuyinDispatcher.fire('finish', e);
                    }).on('result', function (e) {
                        yuyinDispatcher.fire('result', e);
                    }).on('error', function (e) {
                        yuyinDispatcher.fire('error', e);
                    });
                    context.recognition.show();
                });
            }
        });
    }
    function bindEvent(options) {
        [
            'play',
            'playing',
            'stop',
            'error'
        ].forEach(function (name) {
            context.voice.on(name, function () {
                context.target && context.target.triggerEvent(name);
                if (name === 'stop' || name === 'error') {
                    context.target = null;
                }
            });
        });
        $('voice-pig').each(function (i, item) {
            if (item.__id__) {
                return;
            }
            [
                'play',
                'playing',
                'stop',
                'error'
            ].forEach(function (name) {
                var handlerStr = item.getAttribute('on' + name) || item.getAttribute('on' + name[0].toUpperCase() + name.slice(1));
                if (handlerStr) {
                    item['on' + name] = new Function(handlerStr);
                }
            });
            item.__id__ = '' + Math.random();
            $.extend(item, elementMethods);
        });
    }
    function autoPlay() {
        var detector = new AnchorDetect({
            throttle: 300,
            selector: 'voice-pig',
            anchorOffset: -20,
            triggerRange: 100,
            onAnchorChange: function (e) {
                e.target.play();
            }
        });
        detector.check();
        if (platform.ios) {
            document.addEventListener('touchend', function () {
                context.voice.play();
            });
        } else {
            context.voice.autoPlay = true;
        }
    }
    return {
        init: function (options) {
            context.init();
            options = options || { autoPlay: false };
            bindEvent(options);
            bindRecognition();
            if (options.autoPlay) {
                autoPlay(options);
            }
            return this;
        },
        getContext: function () {
            return context;
        },
        getYuyin: function () {
            return yuyinDispatcher;
        },
        dispose: function () {
            $('voice-pig').remove();
            context.panel.dispose();
            context.voice.stop();
            context = null;
        }
    };
});