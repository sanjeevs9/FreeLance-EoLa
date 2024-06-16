const img="https://eola.qodeinteractive.com/wp-content/uploads/2018/05/h1-parallax.jpg"

export default function Image(){
    return (
        <>
            <div className="p-5">
                <div className="">
                <img className="object-cover sm:h-[13rem] lg:h-[16rem] xl:h-[23rem] w-full bg-black" src={img}></img>
                </div>
            </div>
        </>
    )
}