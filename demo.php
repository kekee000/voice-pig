<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="author" content="hahnzhu" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <title>Demo</title>
    <link rel="stylesheet" href="/src/demo/css/parallax.less">
    <link rel="stylesheet" href="/src/demo/css/animate.css">
</head>
<body>
<div class="wrapper">
    <div class="pages">
        <?php require('./section-1.html');?>
        <?php require('./section-2.html');?>
        <?php require('./section-3.html');?>
        <?php require('./section-4.html');?>
        <?php require('./section-5.html');?>
    </div>
</div>
<script src="http://s1.bdstatic.com/r/www/cache/ecom/esl/2-0-6/esl.js"></script>
<script src="/src/demo/zepto.min.js"></script>
<script>
    require.config({
        'baseUrl': './src',
    });
    require(['demo/main']);
</script>

</body>
</html>
