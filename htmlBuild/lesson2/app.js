new Vue({
    //vue示例容器,定义根节点
    el: '#app',
    //数据模型
    data: {
        text: 'Hello Vue!',
        xss: '<img src="xss.jpg" onerror="alert(\'xss\');">'
    }
});
