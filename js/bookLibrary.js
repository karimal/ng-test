angular.module('bookLibraryApp', [])
.config(function($locationProvider){
  $locationProvider.html5Mode({ enabled: true, requireBase: false });
})
.controller('BooksListController', function($scope, $window ,$location, $timeout) {
  var booksList = this;
  booksList.state = 'add';
  if(!localStorage.getItem('booksList')){
    var books = [
      {id:0, name:'The Cairo Trilogy',img:"https://d.gr-assets.com/books/1386924721l/5488.jpg", author:'Naguib Mahfouz', year: 1956},
      {id:1, name:'Kafka on the Shore',img:"https://d.gr-assets.com/books/1429638085l/4929.jpg", author:'Haruki Murakami', year: 2006},
      {id:2, name:'The New York Trilogy',img:"https://d.gr-assets.com/books/1386924429l/431.jpg", author:'Paul Auster', year: 1987},
      {id:3, name:'Thus Spoke Zarathustra',img:"https://d.gr-assets.com/books/1302165411l/6137505.jpg", author:'Friedrich Nietzsche', year: 1891},
      {id:4, name:'Waiting for Godot',img:"https://d.gr-assets.com/books/1327910301l/17716.jpg", author:'Samuel Beckett', year: 1953},
      {id:5, name:'One Hundred Years of Solitude',img:"https://d.gr-assets.com/books/1402721499l/22467482.jpg", author:'Gabriel Garcia Marquez', year: 1967},
      {id:6, name:'The Unbearable Lightness of Being',img:"https://d.gr-assets.com/books/1265401884l/9717.jpg", author:'Milan Kundera', year: 1984},
    ];
    localStorage.setItem('booksList', JSON.stringify(books));
  }
  booksList.books = JSON.parse(localStorage.getItem('booksList'));
  booksList.selectBook = function(BookIndex) {
    $window.location = 'edit.html?state=update&param=' + BookIndex;
  };
})
.controller('BooksEditController', function($scope, $window ,$location) {
  $scope.state = $location.search().state;
  $scope.books = JSON.parse(localStorage.getItem('booksList'));
  $scope.saveBook = function() {
    localStorage.setItem('booksList', JSON.stringify($scope.books));
    $scope.book = [];
    $window.location= 'index.html';
  };
  $scope.addBook = function(){
    $scope.books.push({id: $scope.books.length ,name:$scope.book.name, author:$scope.book.author, img: $scope.book.img, year:$scope.book.year});
    $scope.saveBook();
  };
  if($scope.state === 'update'){
    $scope.param = $location.search().param;
    $scope.book = {
      id : $scope.books[$scope.param].id,
      name : $scope.books[$scope.param].name,
      author:$scope.books[$scope.param].author,
      img: $scope.books[$scope.param].img,
      year:$scope.books[$scope.param].year
    }
  }
  $scope.updateBook = function() {
    $scope.books[$scope.param] = $scope.book;
    $scope.saveBook();
  };
  $scope.removeBook = function() {
    $scope.books.splice($scope.param, 1);
    $scope.saveBook();
  };
  $scope.backHome = function() {
    $window.location= 'index.html';
  };
})
