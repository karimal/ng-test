angular.module('bookLibraryApp', [])
  .controller('BooksListController', function($scope) {
    var booksList = this;
    booksList.state = 'add';
    booksList.books = [
      {id:0, name:'learn angular', author:'test1', year: 1960, price:35},
      {id:1, name:'learn angular', author:'test2', year: 1960, price:35},
      {id:2, name:'learn angular', author:'test3', year: 1960, price:35},
      {id:3, name:'learn angular', author:'test4', year: 1960, price:35},
      {id:4, name:'learn angular', author:'test5', year: 1960, price:35},
    ];

    booksList.addBook = function() {
      booksList.books.push({id: booksList.books.length ,name:booksList.book.name, author:booksList.book.author, year:booksList.book.year, price: booksList.book.price });
      booksList.book = [];
    };

    booksList.selectBook = function(BookIndex) {
      booksList.book = {
        id : booksList.books[BookIndex].id,
        name : booksList.books[BookIndex].name,
        author:booksList.books[BookIndex].author, 
        year:booksList.books[BookIndex].year, 
        price: booksList.books[BookIndex].price
      };
      booksList.state = 'select';
    };

    booksList.editBook = function() {
      booksList.books[booksList.book.id] = booksList.book;
      booksList.book = [];
      booksList.state = 'add';
    };

    booksList.deleteBook = function() {
      
    };
});