import React from "react";

const Book = ({ book }) => {
  return (
    <div className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl">
      <img
        src={book.image}
        alt="book cover"
        className="object-cover h-56 w-full md:h-64 lg:h-80"
      />
      <div className="bg-black text-gray-300 px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 absolute inset-0 transition-opacity duration-200 flex flex-col">
        <p>{book.title}</p>
        <br />
        <p>{book.subtitle.substring(0, 45)}...</p>
        <br />
        <p className="mt-auto">Price: {book.price}</p>
      </div>
    </div>
  );
};

export default Book;
