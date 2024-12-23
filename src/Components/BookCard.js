import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BookCard({
  User,
  bookID,
  title,
  author,
  publishYear,
  description,
  subject,
  cover,
  cover_edition_key,
  isFavSection,
}) {
  const [showInfo, setShowInfo] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [bookIdToDelete, setBookIdToDelete] = useState(null);

  function handleShowInfo() {
    setShowInfo((prev) => !prev);
  }

  // *-*-*-*-*-*-*-*-*-*-*-*-*-*-* Delete Book from Favorite *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
  async function deleteFavBook(bookId) {
    const response = await fetch(`http://localhost:3000/api/book/${bookID}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok){
      console.log(bookID);
      alert("The book has successfully been deleted from your favorite books !!");
      setBookIdToDelete(bookID);
    }
    else{
      console.log("Failed to delete the book");
    }
  }


  // *-*-*-*-*-*-*-*-*-*-*-*-*-*-* Add Book to Favorite *-*-*-*-*-*-*-*-*-*-*-*-*-*-*
  async function addFavBook(status) {
    if (!status) {
      return; // Don't proceed if not adding to favorites
    }

    const book = {
      title: title,
      author_name: author,
      cover_edition_key: cover_edition_key,
      first_publish_year: publishYear,
      description: description,
      subject: subject,
      userID: User.id,
    };

    try {
      const response = await fetch("http://localhost:3000/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });

      if (response.ok) {
        console.log("Book added to favorites successfully!");
      } else {
        console.error("Failed to add book to favorites.");
      }
    } catch (error) {
      console.error("Error while adding book to favorites:", error);
    }
  }

  function handleFavorite() {
    setIsFavorite((prev) => {
      const newFavoriteStatus = !prev;
      addFavBook(newFavoriteStatus); // Use the updated value here
      return newFavoriteStatus;
    });
  }

  return (
    <div className="mb-5 transform transition-transform hover:scale-105" style={{display:bookID===bookIdToDelete?'none':''}} >
      {" "}
      {/*border-2 border-indigo-100 rounded-xl*/}
      <img src={cover} className="w-full h-80 rounded-xl p-3" alt={title} />
      <div className="mt-2">
        <h6 className="text-center text-lg font-semibold">{title}</h6>
        <p className="text-center text-sm">By {author}</p>
      </div>
      <div className="flex flex-row justify-center gap-3">
        <button className="btn btn-danger" onClick={handleShowInfo}>
          {showInfo ? "Show Less" : "Show More"}
        </button>

        {isFavSection ? (
          // Delete Book From Favorite
          <button className="btn btn-danger" onClick={()=>deleteFavBook(bookID)} >Delete From Favorite</button>
        ) : (
          // Add Book to Favorite
          <span
            onClick={handleFavorite}
            style={{
              marginLeft: "10px",
              fontSize: "30px",
              cursor: "pointer",
              color: isFavorite ? "yellow" : "gray",
              transition: "color 0.3s ease",
            }}
          >
            ★
          </span>
        )}
      </div>

      {/* Sho More Infos about the book */}
      <div className="mt-2 flex flex-col">
        {showInfo && (
          <>
            <p>
              <b>Publish Year:</b> {publishYear}
            </p>
            <p>
              <b>Description:</b>{" "}
              {description === null
                ? "No description for this book"
                : description}
            </p>
            <p>
              <b>Subject:</b> {subject}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
