import React from "react";
const products = [
    {
        id: 1,
        title: "Toyota Corolla",
        category: "popular",
        Price: "50,00,000",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xBxLjNUPWyH4ot7NGZRUx-cKQKaAwhODUQ&s",
        bgcolor: "bg-amber-500"
    },

    {
        id: 2,
        title: "Honda Civic",
        category: "popular",
        Price: "50,00,000",
        imageUrl: "https://static.toiimg.com/photo/80387978.cms",
        bgcolor: "bg-amber-500"
    },


    {
        id: 3,
        title: "Suzuki Alto",
        category: "upcoming",
        Price: "50,00,000",
        imageUrl: "https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/08/bugatti-chiron-bugatti.jpg",
        bgcolor: "bg-amber-500"
    },

    {
        id: 4,
        title: "Honda City",
        category: "newly launched",
        Price: "50,00,000",
        imageUrl: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg",
        bgcolor: "bg-amber-500"
    }


]

export default function Prodectlist() {
    return (
        <div className="p-1 flex flex-wrap items-center justify-center mb-6">
            {products.map((products) => (
                <div key={products.id} className={`flex shrink-0 m-6 relative overflow-hidden ${products.bgcolor} rounded-lg shadow-lggroup max-w-sm`} >
                    <svg className="absolute bottom-0 left-0 mb-8 scale-150 group:hover:scale-[1.65] transition" viewBox="0 0 375 283" fill="none" style={{ opacity: 0.1 }}>
                        <rect x="159.52" y="152" height="152" width="152" rx="8" transform="rotate(-45 159.52 175" fill="white" />
                        <rect y="107.48" height="152" width="152" rx="8" transform="rotate(-45 0 107.48" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
                            style={{ background: "radial-gradient(black, transparent 50%", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: 0.2 }}
                        >
                        </div>
                        <img className="relative w-50" src={products.imageUrl} alt={products.title} />
                    </div>

                    <div className="relative text-white px-6 pb-6 mt-6 ">
                        <span className="block opacity-75 -mb-1">{products.category}</span>

                        <div className="flex justify-between">
                            <span className="block font-semibold text-xl">{products.title}</span>
                            <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-3 leading-none items-center">{products.Price}</span>
                        </div>

                    </div>
                </div>
            ))}

        </div>
    )
}