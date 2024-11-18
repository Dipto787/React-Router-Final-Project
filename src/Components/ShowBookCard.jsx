import { NavLink } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const ShowBookCard = ({ card }) => {
    let {author,bookId,category,image,publisher,rating,review,tags,bookName}=card;
    return (
        <div className="px-1">
            <NavLink to={`/detail/${bookId}`} className="card border-2 p-2 md:p-5">
                <figure className="bg-base-200 rounded-2xl p-4  md:p-8">
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {
                            tags.map(tag=>(
                                <NavLink className='flex bg-[#23BE0A] bg-opacity-10 px-2 p-1 rounded-full text-sm text-[#23BE0A]'  >
                                    {tag}
                                </NavLink>
                            ))
                        }
                    </h2>
                    <h2 className="text-2xl font-bold">{bookName}</h2>
                    <p>By: {author}</p>
                   <div className="mt-2 ">
                   <hr /><hr />
                   </div>
                    <div className="card-actions justify-between mt-4 items-center">
                        <div className=" ">{category}</div>
                        <div className="flex items-center gap-2">{rating}<CiStar size={20} /></div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default ShowBookCard;