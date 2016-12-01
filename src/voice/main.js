define('voice/main', [
    'require',
    'voice-pig'
], function (require) {
    var voicePig = require('voice-pig');
    voicePig.init();
    voicePig.getContext().voice.setVoice('pig');
    var yuyin = voicePig.getYuyin();
    yuyin.on('finish', function (e) {
        console.log(e.result);
        if (e.result) {
            $('<p class="ask">' + e.result + '</p>').appendTo('#result');
            $.getJSON('xhj.php', { text: e.result }).then(function (data) {
                console.log(data);
                if (data.status === 200) {
                    $('<p class="answer">' + data.res.msg + '</p>').appendTo('#result');
                    $('#result')[0].scrollTop = 100000;
                    $('#voice-answer').attr('text', data.res.msg)[0].play();
                }
            });
        }
    });
    $('#voice-answer').on('stop', function () {
        voicePig.getContext().recognition.show();
    }).on('error', function () {
        voicePig.getContext().recognition.show();
    });
    $('#voice')[0].play();
    return {};
});