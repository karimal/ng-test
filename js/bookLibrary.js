angular.module('bookLibraryApp', [])
  .config(function($locationProvider){
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
  })
  .controller('BooksListController', function($scope, $window ,$location, $timeout) {
    var booksList = this;
    booksList.state = 'add';
    booksList.books = [
      {id:0, name:'The Cairo Trilogy',img:"https://d.gr-assets.com/books/1386924721l/5488.jpg", author:'Naguib Mahfouz', year: 1956},
      {id:1, name:'Kafka on the Shore',img:"https://d.gr-assets.com/books/1429638085l/4929.jpg", author:'Haruki Murakami', year: 2006},
      {id:2, name:'The New York Trilogy',img:"https://d.gr-assets.com/books/1386924429l/431.jpg", author:'Paul Auster', year: 1987},
      {id:3, name:'Thus Spoke Zarathustra',img:"https://d.gr-assets.com/books/1302165411l/6137505.jpg", author:'Friedrich Nietzsche', year: 1891},
      {id:4, name:'Waiting for Godot',img:"https://d.gr-assets.com/books/1327910301l/17716.jpg", author:'Samuel Beckett', year: 1953},
      {id:5, name:'One Hundred Years of Solitude',img:"https://d.gr-assets.com/books/1402721499l/22467482.jpg", author:'Gabriel Garcia Marquez', year: 1967},
      {id:6, name:'The Unbearable Lightness of Being',img:"https://d.gr-assets.com/books/1265401884l/9717.jpg", author:'Milan Kundera', year: 1984},
    ];

    booksList.addBook = function() {
      booksList.books.push({id: booksList.books.length ,name:booksList.book.name, author:booksList.book.author, year:booksList.book.year, price: booksList.book.price });
      booksList.book = [];
    };

    booksList.selectBook = function(BookIndex) {
      $window.location=      'edit.html?state=update&param=' + BookIndex;

    // $location.url('edit.html').search('ref', 'test');
    // $window.location.reload();

      // booksList.book = {
      //   id : booksList.books[BookIndex].id,
      //   name : booksList.books[BookIndex].name,
      //   author:booksList.books[BookIndex].author,
      //   year:booksList.books[BookIndex].year,
      //   price: booksList.books[BookIndex].price
      // };
      // booksList.state = 'select';
    };

    booksList.editBook = function(){
      booksList.books[booksList.book.id] = booksList.book;
      booksList.book = [];
      booksList.state = 'add';
    };

    booksList.deleteBook = function() {

    };
}).controller('BooksEditController', function($scope, $window ,$location) {
  $scope.state = $location.search().state;
})
