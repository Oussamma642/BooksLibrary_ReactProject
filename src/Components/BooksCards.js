import React from "react";
import BookCard from "./BookCard";

export default function BooksCards({ currentPost, User, isFavSection }) {
  
  return currentPost && currentPost.length > 0 ? (
    <>
      {currentPost.map((book, index) => (
        <BookCard
          key={index}
          User={User}
          bookID={book.id || null}
          title={book.title}
          author={book.author_name ? book.author_name[0] : "Unknown"}
          publishYear={book.first_publish_year}
          description={book.description?.value || "No description available"}
          subject={Array.isArray(book.subject)? book.subject.join(", ") : book.subject || "No subjects available"}
          cover={
            book.cover_edition_key
              ? `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`
              : null
          }
          cover_edition_key={book.cover_edition_key}
          isFavSection={isFavSection}
        />
      ))}
    </>
  ) : (

   <>
    <span></span>
    <span className="alert alert-warning">No books found.</span>

    </>

  );
}
