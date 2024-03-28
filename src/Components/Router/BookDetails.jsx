import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { setLocalStorage } from "../../utils";

const BookDetails = () => {
  const [book, setBook] = useState({});
  let { bookId } = useParams();

  useEffect(() => {
    fetch("/Books.json")
      .then((res) => res.json())
      .then((data) => {
        const bk = data?.find((item) => item.bookId === Number(bookId));
        setBook(bk);
      });
  }, []);

  const handleRead = () => {
    setLocalStorage("read", book.bookId);
    
  };

  const handleWishlist = () => {
     setLocalStorage("wishlists", book.bookId);

  };

  console.log(book)
  return (
    <div className="container mx-auto px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <figure className="bg-[#F3F3F3] flex items-center justify-center p-20  rounded-lg">
          <img
            className="sm:max-w-[425px] w-full h-auto sm:h-[564px] "
            src={book.image}
            alt="book-image"
          />
        </figure>
        <div className="card-body max-w-lg">
          <h2 className="card-title text-lg font-bold">{book.bookName}</h2>
          <p>By : {book.author}</p>
          <hr />
          <span>{book.category}</span>
          <hr />
          <p>
            Review : Sit amet consectetur. Interdum porta pulvinar non sit
            aliquam. Aenean pulvinar blandit vel non enim elementum penatibus
            pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi
            elementum a auctor erat diam tellus. Fermentum faucibus nulla enim
            ornare. Id neque neque pretium enim platea urna non dictum. Faucibus
            dignissim ridiculus nibh tristique massa non.
          </p>
          <div>
            <span className="text-xl font-bold mx-5">Tag</span>

            {book?.tags?.map((tag) => (
              <span
                key={tag}
                className=" bg-[#23BE0A]/5 text-[#23BE0A] px-4 py-1.5 rounded-3xl mx-4"
              >
                #{tag}
              </span>
            ))}

            <div className="mt-4 mb-4">
              <hr />
            </div>
          </div>
          <div className="mr-10 flex">
            <span>Name of Pages:</span>
            <div>
              <span className="ml-14 text-sm font-bold">{book.totalPages}</span>
            </div>
          </div>
          <div className="mr-15 flex">
            <span>Publisher:</span>
            <div>
              <span className="ml-24 text-sm font-bold">
                J.B Lippincott & Co
              </span>
            </div>
          </div>
          <div className="mr-10 flex">
            <span>Year of Publishing:</span>
            <div>
              <span className="ml-8 text-sm font-bold">
                {book.yearOfPublishing}
              </span>
            </div>
          </div>
          <div className="mr-10 flex">
            <span>Rating:</span>
            <div>
              <span className="ml-28 text-sm font-bold">{book.rating}</span>
            </div>
          </div>
          <div className="flex gap-4 mt-3">
            <button
              onClick={handleRead}
              className="border rounded-md px-5 py-2"
            >
              Read
            </button>
            <button
              onClick={handleWishlist}
              className=" rounded-md px-5 py-2 bg-[#50B1C9] text-white"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookDetails;
