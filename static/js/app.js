var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        json: null,
        refs: null
    },
    created: function () {
        var _this = this;
        $.getJSON('/static/files/data.json', function (json) {
            _this.json = json;
        });
        $.getJSON('/static/files/refs.json', function (json) {
            _this.refs = json;
        });
    }
})

Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: -80,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})