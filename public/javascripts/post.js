Vue.component('feed', {

});


Vue.component('post', {
    template: '#post-template',
    data: function () {
        return {
            title: '',
            posttime: '',
            description: '',
            options: []
        }
    },
    methods: {
        setData: function (title, posttime, description, options) {
            this.title = title;
            this.posttime = posttime;
            this.description = description;
            this.options = options;
        }
    }
});

new Vue({
    el: '#vue-app'
});
