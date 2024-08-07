import NewsCard from "./NewsCard";
const img1="https://eola.qodeinteractive.com/wp-content/uploads/2018/05/blog-1-img-1-768x941.jpg";
const img2="https://eola.qodeinteractive.com/wp-content/uploads/2018/05/blog-1-img-2.jpg";
const img3="https://eola.qodeinteractive.com/wp-content/uploads/2018/05/blog-1-img-3-768x941.jpg";


export default function News(){
    return(
        <>
    <div className="flex justify-center pl-12 pr-12 md:pl-10 md:pr-10  ">
        <div className="flex flex-col justify-center items-center pt-6 sm:pt-14 md:w-[80rem]  ">
            <div className="pb-10">
                <div className="text-[#f5989d] font-cormorant-gara text-center sm:text-xl text-lg font-medium italic">
                    spring / summer ‘18 collection
                </div>
                <div className="font-cormorant-uni sm:text-5xl text-4xl">
                    Our Latest News
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 ">
                <NewsCard image={img1} date={"18 May"} title={"Home Decor Ideas"} content={"Lorem ipsum dolor sit amet, eum an aperiam facilisi lobortis, eam dicant melius ornatus te, his oportere"}/>
                <NewsCard image={img2} date={"18 May"}  title={"Feminine Blouses"} content={"Lorem ipsum dolor sit amet, eum an aperiam facilisi lobortis, eam dicant melius ornatus te, his oportere"}/>
                <NewsCard image={img3} date={"18 May"} title={"Best Pieces"} content={"Lorem ipsum dolor sit amet, eum an aperiam facilisi lobortis, eam dicant melius ornatus te, his oportere"}/>
            </div>
        </div>
        </div> 
        </>
    )
}