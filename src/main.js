/**
 * @file main.js
 * @author mengke01(kekee000@gmail.com)
 */

define(
    function (require) {

        var entry = {

            /**
             * 初始化
             */
            init: function () {
                require('voice-pig').init();
            }
        };

        entry.init();
        return entry;
    }
);
