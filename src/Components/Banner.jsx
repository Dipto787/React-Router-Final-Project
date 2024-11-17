const Banner = () => {
    return (
        <div>
            <div className="hero   rounded-2xl py-8   bg-base-200  ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="/src/assets/pngwing 1.svg"
                        className="max-w-sm rounded-lg  " />
                    <div>
                        <h1 className="md:text-5xl text-3xl max-w-lg font-bold">Books to freshen up your bookshelf</h1>
                         
                        <button className="btn mt-8 bg-[#23BE0A] text-white font-bold">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;