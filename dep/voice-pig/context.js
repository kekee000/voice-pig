/**
 * @file voicepig 运行时
 *
 * @author mengke01(kekee000@gmail.com)
 */


define(
    function (require) {

        var AudioService = require('./AudioService');
        var panel = require('./panel');
        var platform = require('./platform');

        var context = {

            init: function () {
                if (this.panel) {
                    return;
                }

                this.panel = panel.init();

                var audioService = this.voice = new AudioService();
                audioService.on('play', function () {
                    panel.setStatus('play');
                }).on('stop', function (e) {
                    panel.setStatus('stop');
                }).on('error', function (e) {
                    panel.setStatus('error');
                });

                return this;
            }
        };

        return context;
    }
);
