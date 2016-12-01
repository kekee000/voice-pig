define([
    'require',
    './observable'
], function (require) {
    var voiceAPI = {
        female: 'http://tts.baidu.com/text2audio' + '?idx=1&cuid=baidu_speech_demo&cod=2&lan=zh&ctp=1&pdt=1&spd=7&per=0&vol=5&pit=5&tex=',
        pig: 'http://tts.baidu.com/text2audio' + '?idx=1&cuid=baidu_speech_demo&cod=2&lan=zh&ctp=1&pdt=1&spd=1&per=1&vol=5&pit=5&tex='
    };
    function audioHandler(e) {
        if (e.type === 'canplay') {
            this.audio.play();
            this.fire('play', { text: this.text });
        } else if (e.type === 'playing') {
            this.fire('playing', { text: this.text });
        } else if (e.type === 'ended' || e.type === 'error' || e.type === 'stalled') {
            this.audio && this.audio.remove();
            this.audio = null;
            this.fire('stop', { text: this.text });
        }
    }
    function AudioService() {
        this.audiohandler = $.proxy(audioHandler, this);
        this.voice = voiceAPI.female;
    }
    AudioService.prototype.playText = function (text) {
        this.text = text;
        var audio = new Audio();
        audio.addEventListener('canplay', this.audiohandler);
        audio.addEventListener('playing', this.audiohandler);
        audio.addEventListener('ended', this.audiohandler);
        audio.addEventListener('error', this.audiohandler);
        audio.addEventListener('stalled', this.audiohandler);
        audio.src = this.voice + encodeURIComponent(text);
        this.audio = audio;
        return this;
    };
    AudioService.prototype.setVoice = function (type) {
        if (voiceAPI[type]) {
            this.voice = voiceAPI[type];
        }
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
});