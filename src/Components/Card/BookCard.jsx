import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
  return (
    <Link to={`/book/${book.bookId}`}>
      <div className="card bg-base-100 border">
        <div className="p-6 ">
          <figure className="p-10 bg-[#F3F3F3] rounded-xl">
            <img
              src={book.image}
              alt="Shoes"
              className="rounded-xl max-w-[112px] w-full h-[166px]"
            />
          </figure>
        </div>
        <div className="card-body pt-3 ">
          <div className="flex gap-4">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className=" bg-[#23BE0A]/5 text-[#23BE0A] px-4 py-1.5 rounded-3xl"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="card-title line-clamp-1">{book.bookName}</h2>
          <p className="mb-2">By: {book.author}</p>
          <hr />
          <div className="flex justify-between">
            <h2>{book.category}</h2>
            <div className="flex gap-5 items-center">
              <div>{book.rating}.00</div>
              <FaRegStar />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
