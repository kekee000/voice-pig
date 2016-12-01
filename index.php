<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="author" content="hahnzhu" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <title>西瓜西米露</title>
    <link rel="stylesheet" href="src/index/css/parallax.css">
    <link rel="stylesheet" href="src/index/css/animate.css">
    <link rel="stylesheet" type="text/css" href="dep/voice-pig/voice-pig.css">

    <style>
        body {
    		font-family: 'Helvetica', Arial, 'Hiragino Sans GB', 'WenQuanYi Micro Hei', 'Microsoft Yahei', sans-serif;
    		font-size: 20px;
    		color: #584444;
    	}

        .page {
            background-color: #B4EACF;
        }

    	.box1 {
        		position: absolute;
        		left: 82px; top: 58px;
        		border: 1px solid #fff;
        		padding: 7px;
        }

        .box1 img {
            display: inline-block;
            vertical-align: top;
        }
        .box2 {
            width: 50px;
            height: 50px;
            background-color: #E0818E;
            position: absolute;
            left: 32px; top: 373px;
            color: #fff;
            font-size: 30px;
            text-align: center;
            line-height: 50px;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
        }
        .box3 {
            position: absolute;
            left: 41px; top: 454px;
        }
    	</style>
</head>
<body>

<voice-pig id="voice-baidu" text="众里寻她千百度，蓦然回首那人却在灯火阑珊处" onStop="window.open('http://www.baidu.com/')"></voice-pig>

<voice-pig id="voice-yuyin" text="百度语音，天天开心" onStop="window.open('http://yuyin.baidu.com/')"></voice-pig>

<div class="wrapper">
    <div class="pages">
        <?php require('./section-1.html');?>
        <?php require('./section-2.html');?>
        <?php require('./section-3.html');?>
        <?php require('./section-4.html');?>
        <?php require('./section-5.html');?>
        <?php require('./section-6.html');?>
        <?php require('./section-7.html');?>
        <?php require('./section-8.html');?>
    </div>
</div>


<script src="http://s1.bdstatic.com/r/www/cache/ecom/esl/2-0-6/esl.js"></script>
<script src="http://s1.bdstatic.com/r/www/cache/biz/ecom/cityplan/zepto.min.js"></script>
<script>
    require.config({
        'baseUrl': './src',
        'packages': [{
        'name': 'voice-pig',
        'location': '../dep/voice-pig',
        'main': 'main'
        }]
    });
    require(['index/main']);
</script>

</body>
</html>
