angular.module("appLibrary")
.controller("controllerLibrary", function ($scope, $http, $filter, serviceLibrary) {

    $scope.Books;

    $scope.Books = {};
    $scope.Book = {};
    $scope.tituloModal = "Add New Book";
    $scope.bandera;
    $scope.Authors = [];

    function getBooks() {
        $scope.loading = true;
        serviceLibrary.getBooks()
            .success(function (listaBooks) {
                $scope.Books = listaBooks;
                $scope.loading = false;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    };

    var init = function () {
        getBooks();
        getAuthors();
        $scope.loading = true;
    };

    //http://stackoverflow.com/questions/15458609/execute-function-on-page-load
    init();

    $scope.nuevo = function () {
        $scope.b = null;
        $scope.bandera = 1;
        $scope.tituloModal = "Add New Book";
        $("#file").val('');
        $("#imgID").attr('src','');
    };

    $scope.accion = function (bandera, b) {
        if (bandera == 1) {
            addBook(b);
        }
        else {
            putBook(b);
        }
    };

    $scope.edit = function (c) {
        $scope.b = null;
        $scope.tituloModal = "Edit Book";
        $("#myModal").modal({ show: true });
        serviceLibrary.getBook(c)
           .success(function (Book) {
               $scope.b = Book;
               $scope.bandera = 0;
               $("#file").val('');
           })
           .error(function (error) {
               $scope.status = 'Unable to load customer data: ' + error.message;

           });
    };

    $scope.delete = function (id) {
        $scope.loading = true;
        serviceLibrary.deleteBook(id)
           .success(function () {
               getBooks();
               $scope.loading = false;
           })
           .error(function (error) {
               $scope.status = 'Unable to load customer data: ' + error.message;

           });
    }

    function putBook(Book) {
        try {
            var b = Book;

            if (b == null || b == undefined) throw "You have to fill the fields";
            if (b.title == null || b.title == undefined) throw "The author is required";
            if (b.author == null || b.author == undefined) throw "The author is required";

            b.idAuthor = Book.author.idAuthor;
            var reader = new window.FileReader();

            reader.onloadend = function () {
                base64data = reader.result;
                b.image = base64data;
                $scope.loading = true;
                serviceLibrary.putBook(b)
                .success(function () {
                    getBooks();
                    $scope.loading = false;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
                $("#myModal").modal('hide');
            }

            if ($scope.myFile) {
                reader.readAsDataURL($scope.myFile);
            }
            else {
                $scope.loading = true;
                serviceLibrary.putBook(b)
                .success(function () {
                    getBooks();
                    $scope.loading = false;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
                $("#myModal").modal('hide');
            }
        }
        catch (err) {
            $("#message").text(err);
            $("#Notification").show();
        }

    };

    function addBook(Book) {
        try {
            var b = Book;

            if (b == null || b == undefined) throw "You have to fill the fields";
            if (b.author == null || b.author == undefined) throw "The author is required";

            b.idAuthor = Book.author.idAuthor;
            b.author = null;

            var reader = new window.FileReader();

            reader.onloadend = function () {
                base64data = reader.result;
                b.image = base64data;
                $scope.loading = true;
                serviceLibrary.postBook(b)
                .success(function () {
                    getBooks();
                    $scope.loading = false;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
                $("#myModal").modal('hide');
            }

            if ($scope.myFile) {
                reader.readAsDataURL($scope.myFile);
            }
            else {
                b.image = 'http://placehold.it/700x400';
                $scope.loading = true;
                serviceLibrary.postBook(b)
                .success(function () {
                    getBooks();
                    $scope.loading = false;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
                $("#myModal").modal('hide');
            }
        }
        catch (err) {
            $("#message").text(err);
            $("#Notification").show();
        }
    };

    function getAuthors() {
        serviceLibrary.getAuthors()
            .success(function (listaAuthor) {
                $scope.Authors = listaAuthor;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    };

});


angular.module("appLibrary")
.controller("controllerAuthor", function ($scope, $http, $filter, serviceAuthor) {

    $scope.Authors;

    $scope.Authors = {};
    $scope.Author = {};
    $scope.tituloModal = "Add New Author";
    $scope.bandera;
    $scope.Authors = [];

    function getAuthors() {
        serviceAuthor.getAuthors()
            .success(function (listaAuthors) {
                $scope.Authors = listaAuthors;

            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    };

    var init = function () {
        getAuthors();
    };

    //http://stackoverflow.com/questions/15458609/execute-function-on-page-load
    init();

    $scope.nuevo = function () {
        $scope.a = null;
        $scope.bandera = 1;
        $scope.tituloModal = "Add New Author";
    };

    $scope.accion = function (bandera, a) {
        if (bandera == 1) {
            addAuthor(a);
        }
        else {
            putAuthor(a);
        }
    };

    $scope.edit = function (a) {
        $scope.a = null;
        $scope.tituloModal = "Add New Author";
        $("#myModal").modal({ show: true });
        serviceAuthor.getAuthor(a)
           .success(function (Author) {
               $scope.a = Author;
               $scope.bandera = 0;
           })
           .error(function (error) {
               //console.log("error");
               //console.log(error);
               $scope.status = 'Unable to load customer data: ' + error.message;

           });
    };

    $scope.delete = function (id) {
        serviceAuthor.deleteAuthor(id)
           .success(function () {
               getAuthors();
           })
           .error(function (error) {
               $scope.status = 'Unable to load customer data: ' + error.message;

           });
    }

    function putAuthor(Author) {
        var a = Author;
        serviceAuthor.putAuthor(a)
        .success(function () {
            getAuthors();
        })
        .error(function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
        $("#myModal").modal('hide');

    };

    function addAuthor(Author) {
        var b = Author;
        serviceAuthor.postAuthor(b)
        .success(function () {
            getAuthors();
        })
        .error(function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
        $("#myModal").modal('hide');
    };

});