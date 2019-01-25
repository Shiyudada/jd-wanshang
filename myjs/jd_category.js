window.onload = function () {
    var mySwiper = new Swiper('.left .swiper-container', {
        direction: 'vertical', // 垂直切换选项
        // 这个值一定要添加。，不然无法计算高度值
        slidesPerView: 'auto',
        // 为了避免松开手指之后还原到默认位置
        freeMode: true
    })

    var mySwiper = new Swiper('.right .swiper-container', {
        direction: 'vertical', // 垂直切换选项
        // 这个值一定要添加。，不然无法计算高度值
        slidesPerView: 'auto',
        // 为了避免松开手指之后还原到默认位置
        freeMode: true
    })


    // 实现单击吸顶效果
    // 1.获取所有li元素
    var left = document.querySelector('.left');
    // 获取left的高度
    var leftH = left.offsetHeight
    var left_ul = document.querySelector('.left ul');
    // ul的高度
    var left_ulH = left_ul.offsetHeight
    var allLi = left_ul.querySelectorAll('li');
    var liH = allLi[0].offsetHeight

    // 获取真正需要进行偏移的元素块
    var swiper_wrapper = document.querySelector('.left .swiper-wrapper')

    // 计算最大偏移值
    var maxOffset = leftH - left_ulH
    console.log(maxOffset)
    // 2.遍历：绑定事件
    // let可以产生块级作用域
    // 所谓块就是指一个{}结构
    // 一个变量的作用域是从这个变量定义开始到这个变更所在结构的}结束
    for(let i=0;i<allLi.length;i++){
        allLi[i].onclick = function(){
            // 计算偏移值
            var offset = - (liH * i)
            console.log(offset)
            // 我们不能让被单击的子元素无止境的往上偏移，而是应该有一个最大的范围
            if(offset < maxOffset){
                offset = maxOffset
            }
            // 添加过渡
            swiper_wrapper.style.transition = 'transform 1s'
            // 实现偏移
            swiper_wrapper.style.transform=`translateY(${offset}px)`

            // 修改当前li元素的样式
            for(var j =0;j<allLi.length;j++){
                allLi[j].classList.remove('active')
            }
            this.classList.add('active')
        }
    }
    // allLi.forEach(function(value,index){
    //     value.onclick = function(){
    //         // 计算偏移值
    //         var offset = - (liH * index)
    //         console.log(offset)
    //         // 我们不能让被单击的子元素无止境的往上偏移，而是应该有一个最大的范围
    //         if(offset < maxOffset){
    //             console.log('aaa')
    //             offset = maxOffset
    //         }
    //         // 添加过渡
    //         left_ul.style.transition = 'transform 1s'
    //         // 实现偏移
    //         left_ul.style.transform=`translateY(${offset}px)`
    //     }
    // })
}