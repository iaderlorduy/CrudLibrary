angular.module("appLibrary")

 .directive('fileModel', ['$parse', function ($parse) {
     return {
         restrict: 'A',
         link: function (scope, element, attrs) {
             var model = $parse(attrs.fileModel);
             var modelSetter = model.assign;

             element.bind('change', function () {
                 scope.$apply(function () {
                     modelSetter(scope, element[0].files[0]);
                 });
             });
         }
     };
 }]);

/*http://stackoverflow.com/questions/17144180/angularjs-loading-screen-on-ajax-request*/
angular.module("appLibrary")
 .directive('loading', ['$http', function ($http) {
     return {
         restrict: 'E',
         replace: true,
         template: '<div class="preloader-container col-xs-12">' +
                        '<div class="preloader full-width">'+
                        '<div class="preloader-pacman">'+
                             '<div class="pacman"></div>'+
                             '<div class="dot"></div>'+
                             '<div class="dot"></div>'+
                             '<div class="dot"></div>'+
                             '<div class="dot"></div>'+
                             '<div class="dot"></div>'+
                             '<div class="dot"></div>'+
                             '<div class="dot"></div>'+
                             '<div class="dot"></div>'+
                             '<div class="dot"></div>'+
                             '<div class="dot"></div>'+
                             '<div class="dot"></div>'+
                             '<div class="dot"></div>'+
                             '<div class="dot"></div>'+
                             '<div class="dot"></div>'+
                             '<div class="dot"></div>'+
                             '<div class="dot"></div>'+
                             '<div class="ghost"></div>'+
                        '</div>'+
                    '</div>' +         
            '</div>',
         link: function (scope, element, attr) {
             scope.$watch('loading', function (val) {
                 if (val)
                     $(element).show();
                 else
                     $(element).hide();
             });
         }
     };

 }]);