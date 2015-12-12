/**
 * @file 语音操作面板
 * @author mengke01(kekee000@gmail.com)
 */


define(
    function (require) {

        var CSS_URL = 'http://127.0.0.1:8848/src/voice-pig.less';

        function appendCSS(url) {
            var link = document.createElement("link");
            link.setAttribute("rel","stylesheet");
            link.setAttribute("charset","utf-8");
            link.setAttribute("href", url);
            (document.head || document.documentElement).appendChild(link);
        }



        var panel = {

            /**
             * 初始化操作面板
             *
             * @return {panel}
             */
            init: function () {
                //appendCSS(CSS_URL);
                var tpl = '<div id="voice-pig-panel"'
                    + ' data-status="stop" class="voice-pig-panel" title="百度语音导航服务">'
                    + '<i class="voice-pig-mouse"></i>'
                    + '</div>';
                document.body.insertAdjacentHTML('beforeend', tpl);
                this.panel = $('#voice-pig-panel');
                return this;
            },

            /**
             * 设置当前状态
             *
             * @param {string} status 状态
             * @return {panel}
             */
            setStatus: function (status) {
                this.panel.attr('data-status', status);
                return this;
            },

            /**
             * 获取当前状态
             *
             * @return {string}
             */
            getStatus: function (status) {
                return this.panel.attr('data-status') || 'stop';
            },

            dispose: function () {
                this.panel.remove();
            }
        };

        return panel;
    }
);
