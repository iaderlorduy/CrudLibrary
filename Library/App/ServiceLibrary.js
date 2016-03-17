/*
    Relative Path
    stackoverflow.com/questions/17011616/using-a-relative-path-for-a-service-call-in-angularjs
*/
angular.module('appLibrary')
.factory('serviceLibrary', ['$http', function ($http) {

    var serviceInstance = {};
    //lista todos
    serviceInstance.getBooks = function () {
        return $http.get('/api/Books');
    };
    //lista uno solo
    serviceInstance.getBook = function (id) {
        return $http.get('/api/Books/' + id);
    };

    serviceInstance.putBook = function (Book) {
        //var request = $http({
        //    method: "put",
        //    url: "/api/Books/" + Book.BookId,
        //    data: Book
        //});
        //return request;

        console.log(Book);
        var urlApi = '/api/Books/' + Book.idBook;
        console.log(Book.BookId);
        return $http(
            {
                url: urlApi,
                method: "PUT",
                data: Book
            }
        );

    };

    serviceInstance.postBook = function (Book) {
        //var request = $http({
        //    method: "put",
        //    url: "/api/Books/" + Book.BookId,
        //    data: Book
        //});
        //return request;

        var urlApi = '/api/Books/';
        return $http(
            {
                url: urlApi,
                method: "POST",
                data: Book
            }
        );

    };

    serviceInstance.deleteBook = function (id) {
        //var request = $http({
        //    method: "put",
        //    url: "/api/Books/" + Book.BookId,
        //    data: Book
        //});
        //return request;

        var urlApi = '/api/Books/' + id;
        return $http(
            {
                url: urlApi,
                method: "DELETE"
            }
        );

    };

    serviceInstance.getAuthors = function () {
        return $http.get('/api/Authors');
    };

    return serviceInstance;

}]);

angular.module('appLibrary')
.factory('serviceAuthor', ['$http', function ($http) {

    var serviceInstance = {};
    //lista todos
    serviceInstance.getAuthors = function () {
        return $http.get('/api/Authors');
    };
    //lista uno solo
    serviceInstance.getAuthor = function (id) {
        return $http.get('/api/Authors/' + id);
    };

    serviceInstance.putAuthor = function (Author) {
        //var request = $http({
        //    method: "put",
        //    url: "/api/Authors/" + Author.AuthorId,
        //    data: Author
        //});
        //return request;

        console.log(Author);
        var urlApi = '/api/Authors/' + Author.idAuthor;
        console.log(Author.AuthorId);
        return $http(
            {
                url: urlApi,
                method: "PUT",
                data: Author
            }
        );

    };

    serviceInstance.postAuthor = function (Author) {
        //var request = $http({
        //    method: "put",
        //    url: "/api/Authors/" + Author.AuthorId,
        //    data: Author
        //});
        //return request;

        var urlApi = '/api/Authors/';
        return $http(
            {
                url: urlApi,
                method: "POST",
                data: Author
            }
        );

    };

    serviceInstance.deleteAuthor = function (id) {
        //var request = $http({
        //    method: "put",
        //    url: "/api/Authors/" + Author.AuthorId,
        //    data: Author
        //});
        //return request;

        var urlApi = '/api/Authors/' + id;
        return $http(
            {
                url: urlApi,
                method: "DELETE"
            }
        );

    };

    serviceInstance.getAuthors = function () {
        return $http.get('/api/Authors');
    };

    return serviceInstance;

}]);