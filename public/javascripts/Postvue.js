Vue.component('vue-post', {
    template: '#vue-temp',
    props: ['title', 'posttime', 'description', 'items'],
});

var app7 = new Vue({
    el: '#vue-app',
    data: {
        title: 'Test',
        posttime: '12 Seconds Ago',
        description: 'THis is a long version of a description to see if the workds are cut off in the card stack',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
});