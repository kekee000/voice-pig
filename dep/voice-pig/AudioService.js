/**
 * @file 语音调用api
 * @author mengke01(kekee000@gmail.com)
 *
 * @reference
 * html5 audio 事件: http://www.epooll.com/archives/422/
 */


define(
    function (require) {

        /**
         * 百度语音合成api
         *
         * @type {String}
         */
        var VOICE_SERVICE = 'http://tts.baidu.com/text2audio'
            + '?idx=1&cuid=baidu_speech_demo&cod=2&lan=zh&ctp=1&pdt=1&spd=7&per=0&vol=5&pit=5&tex=';

        var VOICE_SERVICE = '//mirror.duapp.com/demo.mp3?';

        function audioHandler(e) {

            if (e.type === "canplay" && this.autoPlay) {
                this.audio.play();
                this.fire('play', {
                    text: this.text
                })
            }
            else if (e.type === "playing") {
                this.fire('play', {
                    text: this.text
                })
            }
            else if (e.type === "ended" || e.type === "error" || e.type === "stalled") {
                this.audio && this.audio.remove();
                this.audio = null;
                this.fire('stop', {
                    text: this.text
                });
            }
        }

        function AudioService() {
            this.audiohandler = $.proxy(audioHandler, this);
        }

        AudioService.prototype.playText = function (text) {
            this.text = text;
            var audio = new Audio();
            audio.addEventListener("canplay", this.audiohandler);
            audio.addEventListener("playing", this.audiohandler);
            audio.addEventListener("ended", this.audiohandler);
            audio.addEventListener("error", this.audiohandler);
            audio.addEventListener("stalled", this.audiohandler);
            audio.src = VOICE_SERVICE + encodeURIComponent(text);
            this.audio = audio;
            return this;
        };

        AudioService.prototype.play = function () {
            this.audio && this.audio.play();
            return this;
        };

        AudioService.prototype.stop = function () {
            this.audio && this.audio.pause();
            this.audio = null;
            return this;
        };

        AudioService.prototype.pause = function () {
            this.audio && this.audio.pause();
            return this;
        };

        AudioService.prototype.dispose = function () {
            this.audiohandler = this.audio = null;
        };


        require('./observable').mixin(AudioService.prototype);
        return AudioService;
    }
);
