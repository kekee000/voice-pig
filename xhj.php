<?php
if (!empty($_GET['text'])) {
    $text = $_GET['text'];
    $text = urlencode($text);
    echo file_get_contents('http://simsimi.com/requestChat?lc=zh&ft=1.0&req='. $text .'&uid=50073664&did=0');
}
else {
    echo '{"status":200,"res":{"msg":"没听懂你在说啥。。。"}}';
}
