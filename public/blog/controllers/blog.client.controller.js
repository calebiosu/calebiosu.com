angular.module('blog').controller('BlogController', ['$scope', 'Authentication', 'Posts',
    function($scope, Authentication, Posts) {
        $scope.authentication = Authentication;

        $scope.find = function() {
            $scope.posts = Posts.query();
        };
    }
]);