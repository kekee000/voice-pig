/**
 * @file voice语音导航标签
 * @author mengke01(kekee000@gmail.com)
 */


define(
    function (require) {

        var AudioService = require('./AudioService');
        var AnchorDetect = require('./AnchorDetect');
        var panel = require('./panel');
        var platform = require('platform');

        var audioService = new AudioService();

        /**
         * 初始化操作
         */
        function init() {
            panel.init();

            audioService.on('play', function () {
                panel.setStatus('play');
            });

            audioService.on('stop', function (e) {
                panel.setStatus('stop');
            });

            audioService.on('error', function (e) {
                panel.setStatus('stop');
            });

            var detector = new AnchorDetect({
                throttle: 300,
                selector: 'voice-pig',
                anchorOffset: -20,
                triggerRange: 100,
                onAnchorChange: function (e) {
                    console.log('change')
                    audioService.stop();
                    audioService.playText(e.target.attr('text'));
                }
            });

            detector.check();

            // ios safari audio 不能自动播放音频
            if (platform.ios) {
                document.addEventListener('touchend', function () {
                    audioService.play();
                });
            }
            else {
                audioService.autoPlay = true;
            }
        }


        init();
        return {
            dispose: function () {

            }
        };
    }
);
