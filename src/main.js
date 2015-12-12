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

                $('#voice-1').on('play', function (e) {
                    console.log('play' + this.id);
                }).on('stop', function (e) {
                    console.log('stop' + this.id);
                });

                $('#voice-2').on('play', function (e) {
                    console.log('play' + this.id);
                });

                $('#voice-3').on('playing', function (e) {
                    console.log('playing' + this.id);
                });
            }
        };

        entry.init();
        return entry;
    }
);
