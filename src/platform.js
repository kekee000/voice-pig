/**
 * @file 判断浏览器
 * @author mengke01(kekee000@gmail.com)
 */


define(
    function (require) {

        var u = navigator.appVersion;
        return {
            android:!!u.match(/Android\s\d/),
            ios: !!u.match(/iPhone\sOS\s\d/),
            webkit: !!u.match(/\sAppleWebKit/)
        };
    }
);
