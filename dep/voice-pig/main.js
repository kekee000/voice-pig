/**
 * @file voice语音导航标签
 * @author mengke01(kekee000@gmail.com)
 */


define(
    function (require) {
        var context = require('./context');
        var platform = require('./platform');
        var AnchorDetect = require('./AnchorDetect');

        /**
         * 元素的附加方法
         *
         * @type {Object}
         */
        var elementMethods = {

            triggerEvent: function (type) {
                var e = document.createEvent('Event');
                e.initEvent(type, true, true);
                e.context = context;
                this.dispatchEvent(e);
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

        function bindEvent(options) {

            ['play', 'playing', 'stop', 'error'].forEach(function (name) {
                context.voice.on(name, function () {
                    context.target.triggerEvent(name);
                    if (name === 'stop' || name === 'error') {
                        context.target = null;
                    }
                });
            });

            $('voice-pig').each(function (i, item) {
                // 绑定过的元素不再绑定
                if (item.__id__) {
                    return;
                }

                item.__id__ = '' + Math.random();
                $.extend(item, elementMethods);
            });
        }

        /**
         * 初始化操作
         */
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

            // ios safari audio 不能自动播放音频
            if (platform.ios) {
                document.addEventListener('touchend', function () {
                    context.voice.play();
                });
            }
            else {
                context.voice.autoPlay = true;
            }
        }



        return {

            /**
             * 初始化
             * @param  {Object} options 参数
             * @return {this}
             */
            init: function (options) {
                context.init();
                options = options || {
                    autoPlay: true
                };

                bindEvent(options);
                if (options.autoPlay) {
                    autoPlay(options);
                }

                return this;
            },

            /**
             * 获取当前运行时对象
             *
             * @return {context}
             */
            getContext: function () {
                return context;
            },

            dispose: function () {
                $('voice-pig').remove();
                context.panel.dispose();
                context.voice.stop();
                context = null;
            }
        };
    }
);
