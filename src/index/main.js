define('index/main', [
    'require',
    './parallax',
    'voice-pig'
], function (require) {
    require('./parallax');
    $('.page > div').addClass('hide');
    var pages = $('.pages');
    pages.parallax({
        direction: 'vertical',
        swipeAnim: 'default',
        drag: true,
        loading: false,
        indicator: false,
        arrow: false,
        onchange: function (index, element, direction) {
            console.log('change-' + index);
            if (index >= pages[0].length) {
                return;
            }
            pages.page = index + 1;
            $('.page > div').addClass('hide');
            $(element).find('.hide').removeClass('hide');
            if (!pages.started) {
                pages.started = 1;
                return;
            }
            setTimeout(function () {
                $('#voice-' + pages.page)[0].play();
            }, 500);
        },
        orientationchange: function (orientation) {
        }
    });
    require('voice-pig').init({ autoPlay: false });
    window.playDeng = function () {
        setTimeout(function () {
            $('#voice-3-1')[0].play();
        }, 500);
    };
    window.playFinish = function () {
        setTimeout(function () {
            $('#voice-finish')[0].play();
        }, 500);
    };
    window.goNext = function () {
        setTimeout(function () {
            pages[0].next();
        }, 300);
        console.log('next scention');
    };
    var yuyin = require('voice-pig').getYuyin();
    yuyin.on('finish', function (e) {
        console.log('finish');
        var text = e.result;
        if (text === '\u4E0A\u4E00\u9875' || text === '\u4E0A\u9875' || text === '\u4E0A\u591C') {
            pages[0].prev();
        } else if (text === '\u4E0B\u4E00\u9875' || text === '\u4E0B\u9875' || text === '\u4E0B\u591C' || text === '\u590F\u591C') {
            pages[0].next();
        } else if (text === '\u767E\u5EA6') {
            $('#voice-baidu')[0].play();
        } else if (text === '\u767E\u5EA6\u8BED\u97F3') {
            $('#voice-yuyin')[0].play();
        } else if (text === '\u5F00\u59CB') {
            pages[0].top();
        }
    });
});