define([
    'require',
    './observable'
], function (require) {
    var CSS_URL = 'http://127.0.0.1:8848/src/voice-pig.less';
    function appendCSS(url) {
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('charset', 'utf-8');
        link.setAttribute('href', url);
        (document.head || document.documentElement).appendChild(link);
    }
    var panel = {
        init: function () {
            var tpl = '<div id="voice-pig-panel"' + ' data-status="stop" class="voice-pig-panel" title="\u767E\u5EA6\u8BED\u97F3\u5BFC\u822A\u670D\u52A1">' + '<i class="voice-pig-mouse"></i>' + '</div>';
            document.body.insertAdjacentHTML('beforeend', tpl);
            this.main = $('#voice-pig-panel');
            this.main.on('click', function () {
                panel.fire('click');
            });
            return this;
        },
        setStatus: function (status) {
            this.main.attr('data-status', status);
            return this;
        },
        getStatus: function (status) {
            return this.main.attr('data-status') || 'stop';
        },
        dispose: function () {
            this.main.remove();
        }
    };
    require('./observable').mixin(panel);
    return panel;
});