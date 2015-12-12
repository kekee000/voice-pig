/**
 * @author  刘超凡
 * @file demo
 */

define(function (require) {
    require("demo/parallax");
    $('.pages').parallax({
		direction: 'vertical', 	// horizontal (水平翻页)
		swipeAnim: 'cover', 	// cover (切换效果)
		drag:      false,		// 是否允许拖拽 (若 false 则只有在 touchend 之后才会翻页)
		loading:   true,		// 有无加载页
		indicator: false,		// 有无指示点
		arrow:     false,		// 有无指示箭头
		/*
		 * 翻页后立即执行
		 * {int} 		index: 第几页
		 * {DOMElement} element: 当前页节点
		 * {String}		directation: forward(前翻)、backward(后翻)、stay(保持原页)
		 */
		onchange: function(index, element, direction) {
			// code here...
			// console.log(index, element, direction);
		},
		/*
		 * 横竖屏检测
		 * {String}		orientation: landscape、protrait
		 */
		orientationchange: function(orientation) {
			// console.log(orientation);
		}
	});
    $(function () {
        // $('.page1').find('.box1').addClass('');
    })
});
