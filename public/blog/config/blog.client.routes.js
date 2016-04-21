angular.module('blog').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/blog', {
            templateUrl: 'blog/views/blog.client.view.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);