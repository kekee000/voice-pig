define([
    'require',
    './AudioService',
    './panel',
    './platform',
    './VoiceRecognition'
], function (require) {
    var AudioService = require('./AudioService');
    var panel = require('./panel');
    var platform = require('./platform');
    var VoiceRecognition = require('./VoiceRecognition');
    var context = {
        initRecogintion: function () {
            var defered = $.Deferred();
            if (this.recognition) {
                defered.resolve(this);
                return;
            }
            var recognition = this.recognition = new VoiceRecognition({ main: document.body });
            recognition.on('load', function () {
                defered.resolve(context);
            });
            return defered.promise();
        },
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
});