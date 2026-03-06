import { useEffect } from "react";
import Footer from "../Footer";

const posts = [
  {
    image: "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/blog-1-img-1-768x941.jpg",
    date: "18 May", title: "Home Decor Ideas", category: "Design",
    content: "Lorem ipsum dolor sit amet, eum an aperiam facilisi lobortis, eam dicant melius ornatus te, his oportere percipitur at. Cum an tota voluptatibus. Cu duo falli latine, est ad ignota tractatos. Autem nominavi quaestio in vis, no est sumo timeam.",
  },
  {
    image: "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/blog-1-img-2.jpg",
    date: "18 May", title: "Feminine Blouses", category: "Fashion",
    content: "Lorem ipsum dolor sit amet, eum an aperiam facilisi lobortis, eam dicant melius ornatus te, his oportere percipitur at. Cum an tota voluptatibus. Cu duo falli latine, est ad ignota tractatos. Autem nominavi quaestio in vis, no est sumo timeam.",
  },
  {
    image: "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/blog-1-img-3-768x941.jpg",
    date: "18 May", title: "Best Pieces", category: "Style",
    content: "Lorem ipsum dolor sit amet, eum an aperiam facilisi lobortis, eam dicant melius ornatus te, his oportere percipitur at. Cum an tota voluptatibus. Cu duo falli latine, est ad ignota tractatos. Autem nominavi quaestio in vis, no est sumo timeam.",
  },
  {
    image: "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/h1-img-3.jpg",
    date: "22 May", title: "Fall Winter Lookbook", category: "Lookbook",
    content: "Lorem ipsum dolor sit amet, eum an aperiam facilisi lobortis, eam dicant melius ornatus te, his oportere percipitur at. Cum an tota voluptatibus. Cu duo falli latine, est ad ignota tractatos. Autem nominavi quaestio in vis, no est sumo timeam.",
  },
  {
    image: "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/shop-1-img-1.jpg",
    date: "25 May", title: "Eco-Friendly Fashion", category: "Lifestyle",
    content: "Lorem ipsum dolor sit amet, eum an aperiam facilisi lobortis, eam dicant melius ornatus te, his oportere percipitur at. Cum an tota voluptatibus. Cu duo falli latine, est ad ignota tractatos. Autem nominavi quaestio in vis, no est sumo timeam.",
  },
  {
    image: "https://eola.qodeinteractive.com/wp-content/uploads/2018/05/shop-1-img-7.jpg",
    date: "28 May", title: "Jewelry Trends", category: "Accessories",
    content: "Lorem ipsum dolor sit amet, eum an aperiam facilisi lobortis, eam dicant melius ornatus te, his oportere percipitur at. Cum an tota voluptatibus. Cu duo falli latine, est ad ignota tractatos. Autem nominavi quaestio in vis, no est sumo timeam.",
  },
];

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#f5f5f7] py-12 sm:py-16 md:py-20 text-center px-4">
        <p className="font-cormorant-gara italic text-[#f5989d] text-base sm:text-lg lg:text-2xl mb-2 sm:mb-3">
          spring / summer '18 collection
        </p>
        <h1 className="font-cormorant-uni text-3xl sm:text-4xl md:text-5xl">Our Blog</h1>
      </div>

      {/* Blog Posts Grid */}
      <div className="flex justify-center px-3 sm:px-5 py-10 sm:py-16 lg:py-24">
        <div className="w-full max-w-[72rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-16">
            {posts.map((post, index) => (
              <div key={index} className="flex flex-col gap-3 sm:gap-4">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                </div>
                <p className="font-cormorant-gara italic text-[#f5989d] text-sm sm:text-base">
                  {post.date}
                </p>
                <h2 className="font-cormorant-uni text-xl sm:text-2xl md:text-3xl">
                  {post.title}
                </h2>
                <p className="font-work-sans text-[#a6a4a4] text-xs sm:text-sm leading-relaxed">
                  {post.content}
                </p>
                <a
                  href="#"
                  className="font-work-sans text-xs sm:text-sm underline hover:text-[#f5989d] transition-colors duration-300"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
