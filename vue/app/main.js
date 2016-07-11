require([
'vue',
'fetch',
'pageHeaderView',
'loaderView',
'usersView'
], 
function(Vue, fetch, PageHeaderView, LoaderView, UsersView) {

    Vue.component('page-header', PageHeaderView);
    Vue.component('loader', LoaderView);
    Vue.component('users-list', UsersView);

    var vm = new Vue({
        el: '#app',
        data: {
            isLoading: true,
            users: []
        },

        ready: function() {
            fetch('https://api.github.com/users')
                .then(function(response) {
                    return response.json()
                })
                .then(function(data) {
                    this.users = data;
                    this.isLoading = false;
                }.bind(this))
                .catch(function(ex) {
                    console.log('parsing failed', ex)
                });
        }
    });

});