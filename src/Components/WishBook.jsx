import { useEffect, useState } from "react";
import { getWishList } from "./WishList";
import ReadBook from "./ReadBook";
import ShowReadBook from "./ShowReadBook";

 
const WishBook = () => {
    let [wishBook,setWishBook]=useState([]);
    useEffect(()=>{
        let getWishItems=getWishList();
        setWishBook(getWishItems)
    },[])
    return (
        <div className="max-w-7xl mx-auto mt-4">
           {
            wishBook.map(book=> <ShowReadBook book={book}></ShowReadBook>)
           } 
        </div>
    );
};

export default WishBook;