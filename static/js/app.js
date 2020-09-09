var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        json: null,
        refs: null,
        btns: {
            all: "btn-clicked",
            tool: "",
            open: "",
            pub: "",
            work: "",
            preprint: ""
        },
        pub_icon_map: {
            arXiv: "ai ai-arxiv ai-1x",
            DOI: "far fa-file-pdf",
            SocArXiv: "far fa-file-pdf",
            GitHub: "fab fa-github-square",
            Dataset: "fas fa-database"
        }
    },
    created: function () {
        var _this = this;
        $.getJSON('/static/files/data.json', function (json) {
            _this.json = json;
        });
        $.getJSON('/static/files/refs.json', function (json) {
            _this._disable_highlight(json);
            _this._show_all_pub(json);

            json.forEach(project => {
                project.papers.forEach(paper => paper.show=true)
            });

            _this.refs = json;
        });

    },
    methods: {
        get_pub_icon: function (c) {
            var icon = this.pub_icon_map[c];
            if (icon === undefined) {
                icon = "fas fa-external-link-alt";
            }
            return icon;
        },
        reset_btns: function () {
            Object.keys(this.btns).forEach(key => {
                this.btns[key] = "";
            });
        },
        _show_all_pub: function (array) {
            array.forEach(project => {
                project.papers.forEach(paper => paper.show=true)
            });
        },
        pubfilter_default: function () {
            this._show_all_pub(this.refs);
            this.reset_btns();
            this.btns.all = "btn-clicked"
        },
        pubfilter_with_link_to: function (target, btn){
            this.refs.forEach(project => {
                project.papers.forEach(paper => paper.show=this.has_link_to(paper, target))
            });
            this.reset_btns();
            this.btns[btn] = "btn-clicked"
        },
        pubfilter_without_link_to: function (target, btn){
            this.refs.forEach(project => {
                project.papers.forEach(paper => paper.show=!this.has_link_to(paper, target))
            });
            this.reset_btns();
            this.btns[btn] = "btn-clicked"
        },
        has_link_to: function (paper_obj, target) {
            for (i=0; i<paper_obj.links.length; i++){
                if (target.indexOf(paper_obj.links[i].name) > -1) {
                    return true;
                }
            }
            return false;
        },

        highlight_pub: function (index) {
            this.disable_highlight();
            this.refs[2].papers[index].highlight = true;
        },
        disable_highlight: function () {
            this._disable_highlight(this.refs)
        },
        _disable_highlight: function (array) {
            array.forEach(project => {
                project.papers.forEach(paper =>{
                    paper.highlight = false;
                })
            });
        }
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