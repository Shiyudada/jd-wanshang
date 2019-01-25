window.onload = function () {
    // 顶部块透明度效果
    headerEffect()

    // 倒计时效果
    timeBack()

    // 轮播图
    initSwiper()
}

// 顶部透明
function headerEffect() {
    // 0.获取轮播图的高度
    var slideH = document.querySelector('#slide').offsetHeight
    // 获取头部块
    var header = document.querySelector('#header')
    // 为了解决用户随意刷新的问题，我们需要在触发屏幕滚动事件之前也获取到正确的透明度
    var scrollOut = document.documentElement.scrollTop + document.body.scrollTop
    var opacity = scrollOut / slideH
    header.style.backgroundColor = `rgba(233,35,34,${opacity})`

    // 1.添加屏幕滚动事件
    window.onscroll = function () {
        // 2.获取当前滚动出屏幕的距离
        // document.body.scrollTop:有兼容性，一些浏览器不支持，如果不支持则返回0
        // var scrollOut = document.body.scrollTop
        scrollOut = document.documentElement.scrollTop + document.body.scrollTop
        // 3.计算透明度
        opacity = scrollOut / slideH
        if (opacity >= 1) {
            opacity = 1
        }
        // 4.为头部块设置透明度
        // 反引号：1.创建多行文本  2，可以解析变量
        header.style.backgroundColor = `rgba(233,35,34,${opacity})`
    }
}

// 倒计时
function timeBack() {
    // 1.定义总时长，因为后期定时器以秒做为单位 所以这个时长我也以秒做为单位 
    var total = 360000
    // 获取用于展示时间的所有span
    var allSpan = document.querySelectorAll('.seckill-downtime > span')
    // 2.添加定时器
    var timeId = setInterval(function () {
        // 时间减少
        total--
        // 计算剩余时间中的时分秒
        var hour = Math.floor(total / 3600) // 1
        var minute = Math.floor(total % 3600 / 60) // 1
        var second = total % 60 // 40
        console.log(hour, minute, second)
        // 为span赋值
        allSpan[0].innerHTML = Math.floor(hour / 10)  // 15
        allSpan[1].innerHTML = hour % 10
        allSpan[3].innerHTML = Math.floor(minute / 10)  // 15
        allSpan[4].innerHTML = minute % 10
        allSpan[6].innerHTML = Math.floor(second / 10)  // 15
        allSpan[7].innerHTML = second % 10

        // 判断倒计时是否结束
        if (total == 0) {
            clearTimeout(timeId)
        }
    }, 1000);
}

// 轮播图初始化
function initSwiper() {
    var mySwiper = new Swiper('.swiper-container', {
        // 这个对象中可以添加对当前轮播图的配置属性
        // 1.滑动的方向，默认为水平
        direction: 'horizontal',
        // 2.循环轮播：loop，默认为False
        loop: true,
        // 3.设置滑动习惯性之后是否紧贴容器，默认值为false-紧贴
        freeMode: false,
        // 4.添加分页器
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        // 5.添加自动轮播
        autoplay:true
    })
}