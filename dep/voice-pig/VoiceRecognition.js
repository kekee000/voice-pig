define([
    'require',
    './lang',
    './observable'
], function (require) {
    var Recogintion_SERVICE = 'dep/yuyin/yuyin.html';
    function Service(options) {
        options = options || {};
        this.main = $(options.main);
        this.init();
    }
    Service.prototype.init = function () {
        if (this.panel) {
            return;
        }
        $('<iframe id="voice-pig-say" class="voice-pig-say" src="' + Recogintion_SERVICE + '" frameborder="0"></iframe>').appendTo(this.main);
        var me = this;
        $('#voice-pig-say').on('load', function () {
            me.service = $('#voice-pig-say')[0].contentWindow.service;
            me.service.onLoad = function () {
                me.visible = true;
                me.fire('load');
            };
            me.service.onResult = function (result) {
                me.result = result;
                me.fire('result', { result: result });
            };
            var debounceFinish = require('./lang').debounce(function () {
                me.fire('finish', { result: me.result });
            }, 300);
            me.service.onFinish = debounceFinish;
            me.service.onError = function (e) {
                me.result = '';
                me.fire('error');
            };
        });
    };
    Service.prototype.show = function () {
        $('#voice-pig-say').show();
        this.service.start();
        this.visible = true;
        return this;
    };
    Service.prototype.hide = function () {
        this.service.stop();
        $('#voice-pig-say').hide();
        this.visible = false;
        return this;
    };
    Service.prototype.dispose = function () {
        this.service = null;
        $('#voice-pig-say').remove();
    };
    require('./observable').mixin(Service.prototype);
    return Service;
});