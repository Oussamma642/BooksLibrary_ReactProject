import React from "react";

function Pagination({ totalPosts, postsPerPage, currentPage, changePage }) {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <nav className="mt-3">
      <ul className="pagination justify-content-center ">
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${currentPage === page ? "active" : ""} `}
          >
            <button
              className="page-link"
              onClick={() => changePage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Pagination;