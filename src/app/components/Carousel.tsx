import React from "react";

export default function Carsousel() {
    return (
        <div>
            <section className="bg-gradient-to-r from-black to grey-700">
                <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                        <div className="col-span-2 sm:col-span-1  md:col-span-2 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col">
                            <a href=""
                                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xBxLjNUPWyH4ot7NGZRUx-cKQKaAwhODUQ&s"
                                    alt="CAR 1"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"

                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5">
                                </div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                                    Toyyota corolla{" "}
                                </h3>
                            </a>
                        </div>

                        <div className="col-span-2 sm:col-span-1  md:col-span-2 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col">">
                            <a href=""
                                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4" >
                                <img src="https://static.toiimg.com/photo/80387978.cms"
                                    alt="CAR 2"
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"

                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5">
                                </div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl"> Suzuki Alto{" "}
                                </h3>
                            </a>

                            <div className="grid gap-4 grid-cols-2 sm:grid-col-2 lg:grid-cols-2">
                                <a href=""
                                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40" >
                                    <img src="https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/08/bugatti-chiron-bugatti.jpg"
                                        alt="CAR 3"
                                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"> </div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                                        Honda City
                                    </h3>
                                </a>
                                <a href=""
                                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40" >
                                    <img src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg"
                                        alt="CAR 4"
                                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"> </div>
                                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                                        Honda civic{" "}
                                    </h3>
                                </a>
                            </div>
                        </div>

                        <div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col">
                            <a href=""
                                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40" >
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtyoKr8-EgU3I8xH4GlEJiPOqPszxHJLWcw&s"
                                    alt="CAR 5"
                                    className=" absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"> </div>
                                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                                    {" "}
                                    BMW{" "}
                                </h3>

                            </a>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}