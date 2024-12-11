import React from "react";

export default function Footer(){
    return(
        <div>
            <footer className="flex flex-col space-y-10 justify-center m-10 mb-0">
                <nav className="flex justify-center flex-wrap gap-6 text-slate-500 font-medium bg-gradient-to-r from-black to-slate-700">
                    <a className="hover:text-cyan-500 text-amber-500" href="#">Home</a>
                    <a className="hover:text-cyan-500 text-amber-500" href="#">About</a>
                    <a className="hover:text-cyan-500 text-amber-500" href="#">Delivery</a>
                    <a className="hover:text-cyan-500 text-amber-500" href="#">Contact</a>
                </nav>
                <div className="flex justify-center space-x-5 transition-transform duration-500 ease-in-out transform hover:scale-105">
                  
                  
                   <a href="https://www.facebook.com/profile.php?id=100077464142154&mibextid=ZbWKwL" target="blank" rel="nofollow noopener" >
                   <img src="https://img.icons8.com/?size=100&id=118490&format=png&color=000000" alt="facebook logo" />
                   </a>

                   <a href="https://www.linkedin.com/in/dua-azhar-ba47122b5" target="blank" rel="nofollow noopener" >
                   <img src="https://img.icons8.com/?size=100&id=84888&format=png&color=000000" alt="linkdin logo" />
                   </a>

                   <a href="https://www.instagram.com/__duaa_azhar/profilecard/?igsh=YmZqMGE1eXZoNHhs" target="blank" rel="nofollow noopener" >
                   <img src="https://img.icons8.com/?size=100&id=32309&format=png&color=000000" alt="instagram logo" />
                   </a>

                   <div>
                    <p className="text-center hover:text-cyan-600 text-amber-400 font-medium mb-8"> 2024 Dua Ali. All Rights Reserved. </p>
                   <br />
                   <br />
                   <br />
                   </div>





                </div>

            </footer>
        </div>
    )
}