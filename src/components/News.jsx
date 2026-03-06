import NewsCard from "./NewsCard";
const img1="https://eola.qodeinteractive.com/wp-content/uploads/2018/05/blog-1-img-1-768x941.jpg";
const img2="https://eola.qodeinteractive.com/wp-content/uploads/2018/05/blog-1-img-2.jpg";
const img3="https://eola.qodeinteractive.com/wp-content/uploads/2018/05/blog-1-img-3-768x941.jpg";


export default function News(){
    return(
        <>
    <div className="flex justify-center px-4 sm:px-8 md:px-10">
        <div className="flex flex-col justify-center items-center pt-6 sm:pt-14 w-full max-w-[80rem]">
            <div className="pb-6 sm:pb-10">
                <div className="text-[#f5989d] font-cormorant-gara text-center text-base sm:text-lg md:text-xl font-medium italic">
                    spring / summer '18 collection
                </div>
                <div className="font-cormorant-uni text-3xl sm:text-4xl md:text-5xl text-center">
                    Our Latest News
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 lg:gap-20 w-full">
                <NewsCard image={img1} date={"18 May"} title={"Home Decor Ideas"} content={"Lorem ipsum dolor sit amet, eum an aperiam facilisi lobortis, eam dicant melius ornatus te, his oportere"}/>
                <NewsCard image={img2} date={"18 May"}  title={"Feminine Blouses"} content={"Lorem ipsum dolor sit amet, eum an aperiam facilisi lobortis, eam dicant melius ornatus te, his oportere"}/>
                <NewsCard image={img3} date={"18 May"} title={"Best Pieces"} content={"Lorem ipsum dolor sit amet, eum an aperiam facilisi lobortis, eam dicant melius ornatus te, his oportere"}/>
            </div>
        </div>
        </div>
        </>
    )
}
