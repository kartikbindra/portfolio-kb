import { FileUser } from "lucide-react";
import kbLogo from "../assets/kbLogo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <nav className="text-textPrimary p-4 w-full fixed top-0 z-10 bg-gradient-to-b from-[#111111] to-[#11111101] ">
        <div className="px-4 container mx-auto flex justify-between items-center">
          {/* <h1 className="text-2xl font-semibold cursor-pointer">Kartik Bindra</h1> */}
            <img src={kbLogo} className="h-8 md:h-10 cursor-pointer object-contain" onClick={()=>{
                window.location.href="/";
            }}></img>
          <ul className="gap-6 text-textPrimary hidden md:flex">
            <li className="text-md cursor-pointer hover:text-textPrimary" onClick={()=>{
                window.location.href="/";
            }}>Home</li>
            <li className="text-md cursor-pointer hover:text-textPrimary" onClick={()=>{
                window.location.href="/about";
            }}>About</li>
            <li className="text-md cursor-pointer hover:text-textPrimary" onClick={()=>{
                window.location.href="/projects";
            }}>Projects</li>
            <li className="text-md cursor-pointer hover:text-textPrimary" onClick={()=>{
                window.location.href="/contact";
            }}>Contact Me</li>
          </ul>
          <div className="flex gap-2 items-center">
          <button className="text-black bg-white text-md font-semibold py-2 px-4 rounded-lg flex gap-2 items-center hover:bg-white/80 transition duration-300" onClick={()=>{
            // window.location.href="https://drive.google.com/file/d/1UIclYO4ov2B8zT6oYRdiYJ3H15y1vgLa/view?usp=sharing";
            window.open("https://drive.google.com/file/d/13jAFA32JCrIOQ6NFxhm4J2dEZN_JmxAY/view?usp=sharing");
          }}><FileUser className="w-5 h-5"/> Resume </button>

          {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        </div>

        {isMenuOpen && (
          <ul className={`md:hidden absolute top-16 right-4 bg-darkBg/50 p-4 rounded-lg text-textPrimary border-textSecondary/10 border flex flex-col gap-4 backdrop-blur-sm transition-all duration-1000 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <li className="text-md cursor-pointer hover:text-textPrimary" onClick={()=>{
                window.location.href="/";
            }}>Home</li>
            <li className="text-md cursor-pointer hover:text-textPrimary" onClick={()=>{
                window.location.href="/about";
            }}>About</li>
            <li className="text-md cursor-pointer hover:text-textPrimary" onClick={()=>{
                window.location.href="/projects";
            }}>Projects</li>
            <li className="text-md cursor-pointer hover:text-textPrimary" onClick={()=>{
                window.location.href="/contact";
            }}>Contact Me</li>
          </ul>
        )  
        }
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  