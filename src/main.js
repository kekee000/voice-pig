define('main', [
    'require',
    'voice-pig'
], function (require) {
    var entry = {
        init: function () {
            require('voice-pig').init({ autoPlay: false });
            $('#voice-1-btn').click(function () {
                $('#voice-1')[0].play();
            });
            $('#voice-1').on('play', function (e) {
                console.log('play' + this.id);
            }).on('stop', function (e) {
                console.log('stop' + this.id);
                $('#voice-1-btn').html('\u8BF4\u5B8C\u4E86');
            });
            $('#voice-2').on('play', function (e) {
                console.log('play' + this.id);
            });
            $('#voice-3').on('playing', function (e) {
                console.log('playing' + this.id);
            });
            window.goNext = function (index) {
                console.log(index);
            };
        }
    };
    entry.init();
    return entry;
});