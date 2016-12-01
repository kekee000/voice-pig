define(['require'], function (require) {
    var u = navigator.appVersion;
    return {
        android: !!u.match(/Android\s\d/),
        ios: !!u.match(/iPhone\sOS\s\d/),
        webkit: !!u.match(/\sAppleWebKit/)
    };
});