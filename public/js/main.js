new WOW().init();

var today = new Date();
var year = today.getFullYear();

$('.service-ul').columnize({ width: 500 });

$(document).ready(function() {
    $('#equipment').DataTable({
    	paging: false
    });
} );

var feedApp = angular.module('feedDataApp', ['firebase']);
 
feedApp.controller('feedListController', function ($scope, $firebase) {
    var fbURL = new Firebase("https://tdn.firebaseio.com/Jobs/");
    $scope.feedsList = $firebase(fbURL);
 
    $scope.save = function () {
        $scope.feedsList.$add({
            Title: $scope.feedsList.title,
            Description: $scope.feedsList.description
             
        });
        $(":text").val('');
    }
});