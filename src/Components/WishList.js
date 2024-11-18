import toast from 'react-hot-toast';
export let getWishList=()=>{
    let wish=[];
    let getWishBlog=localStorage.getItem('wish');
    if(getWishBlog){
        wish=JSON.parse(getWishBlog);
    }
    return wish;
}

export let setWishDataOnLocalStorage=(blog)=>{
    let getBlogs=getWishList();
    let findAlreadyHaveBeen=getBlogs.find(blogId=>blogId.bookId===blog.bookId);
    if(findAlreadyHaveBeen){
        return toast.error('already been have wish list');
    }
    getBlogs.push(blog);
    localStorage.setItem('wish',JSON.stringify(getBlogs));
    toast.success('success full added wish list')
}