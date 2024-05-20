Book Management API

The Book Management API is a RESTful web service built with NestJS and MongoDB, designed to manage a collection of books.

Features
Create Book: Add new books to the collection.
Get All Books: Retrieve a list of all books in the collection.
Get Book by ID: Retrieve a specific book by its unique identifier.
Update Book: Modify the information of an existing book.
Delete Book: Remove a book from the collection.

Installation

Clone the repository:
git clone https://github.com/oluchicharity/My-Nest-App.git

Install dependencies:
cd myNestApp
npm install

.env
DB_URI= “mongodb+srv://agbakwuruoluchi29:aA5WzFqMs5ijOE9O@cluster0.r2kagcs.mongodb.net/myNestApp”

#Start the server/ watch mode:
$ npm run start:dev

development
$ npm run start

Usage
Once the server is running, you can interact with the API using tools like Postman or curl.

#API endpoints:

GET /books: Retrieve a list of all books.
GET /books/{id}: Retrieve a specific book by ID.
POST /books: Create a new book.
PUT /books/{id}: Update an existing book.
DELETE /books/{id}: Delete a book.

#Documentation
{
“originalUrl”: “https://documenter.getpostman.com/view/31029174/2sA3QmEv82”
}

Contributing
Contributions are welcome! If you’d like to contribute to the project, please follow the contributing guidelines.

