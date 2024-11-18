import { useLoaderData } from "react-router-dom";
import ShowBookCard from "./ShowBookCard";

 
const BookCard = () => {
    let bookCardData=useLoaderData(); 
    return (
        <div>
         <h2 className="text-5xl font-bold text-center">Books</h2>
         <div className="grid md:grid-cols-3 items-center mt-8 gap-8">
            {
                bookCardData.map(card=><ShowBookCard key={card.id} card={card}></ShowBookCard>)
            }
         </div>
        </div>
    );
};

export default BookCard;