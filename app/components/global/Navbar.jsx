


"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowDropright } from "react-icons/io";
// import { useAutoAnimate } from "@formkit/auto-animate/react";
import "./styles/Navbar.css";



import useNavigationEvent from "./useNavigationEvent"
import Home from "@/app/page";
import { FiMenu } from "react-icons/fi";
// import { AiOutlineClose } from "react-icons/ai";


//List of all nav items

const navItems = [
  {
    label: "Home",
    link: "/",
  },

  {
    label: "Institute",
    link: "#",
    mlabel: "Institute",
    children: [
      {
        label: "Introduction",
        link: "/Institute/Introduction",


      },
      {
        label: "Impelmentation Strategy",
        link: "/Institute/ImplementationStrategy",

      },
      {
        label: "Infrastructure",
        link: "/Institute/Infrastructure",

      },
      {
        label: "Responsibility",
        link: "/Rsp",

        children: [
          {
            label: "Deity",
            link: "/Institute/Diety",

          },
          {
            label: "Nit Patna",
            link: "/Institute/Nitp",

          },
        ]

      },
      {
        label: "Laboratory Facilities",
        link: "/Institute/Lab",

      },
      {
        label: "Features",
        link: "/Institute/Features",

      },
    ],
  },
  {
    label: "Committees",
    link: "#",
    mlabel: "Committees",
    children: [
      {
        label: "Advisory Board",
        link: "/Committees/Ab",


      },
      {
        label: "Academic Committee",
        link: "/Committees/Ac",

      },
      {
        label: "Research Committee",
        link: "/Committees/Rc",

      },
    ],
  },
  {
    label: "Training Program",
    link: "#",
    mlabel: "Training Program",
    children: [
      {
        label: "Upcoming",
        link: "/Training/Upcoming",

        children: [
          {
            label: "Module1",
            link: "/Training/Upcoming/Module1_up",

          },
          {
            label: "Module2",
            link: "/Training/Upcoming/Module2_up",

          },
        ]

      },
      {
        label: "Proposed",
        link: "/Training/Proposed",

        children: [
          {
            label: "Module1",
            link: "/Training/Proposed/Module1",

          },
          {
            label: "Module2",
            link: "/Training/Proposed/Module2",

          },
          {
            label: "Module3",
            link: "/Training/Proposed/Module3",

          },
          {
            label: "Module4",
            link: "/Training/Proposed/Module4",

          },
          {
            label: "Module5",
            link: "/Training/Proposed/Module5",

          },
        ]

      },

    ],
  },
  {
    label: "States",
    link: "/States",
  },
  {
    label: "Joint Courses",
    link: "#",
    mlabel: "Joint Courses",
    children: [
      {
        label: "Upcoming Programs",
        link: "/Joint/Upcoming",
      },
      {
        label: "Joint Summer Programs 2022",
        link: "/Joint/JSP2022",
      },
      {
        label: "Joint Winter Programs 2022",
        link: "/Joint/JWP2022",
      },
      {
        label: "Summer Joint Courses 2021",
        link: "/Joint/SJC2021",
      },
      {
        label: "Spring Joint Courses 2021",
        link: "/Joint/SPJC2021",
      },
      {
        label: "Summer Joint Courses 2020",
        link: "/Joint/SJC2020",
      },
    ],
  },


];
//main nav funtion
export default function Navbar() {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  useNavigationEvent(() => setSideMenuOpen(false));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <>
      <div className="bg-blue-700 text-white">
          
          <div className="flex justify-end items-center px-4 py-2 text-sm">
            <a href="#" className="ml-4 hover:underline">
              Contact Us
            </a>
            <a href="https://www.nitp.ac.in/" className="ml-4 hover:underline">
              Go To NITP Site
            </a>
            <a href="#" className="ml-4 hover:underline">
              Go To Deity
            </a>
          </div>
        </div>
  

      <div className={`mobiletest navbar-container  ${isSticky ? "sticky-nav md:py-0 stickdiv" : ""}`}>
      <div className="flex justify-between items-center bg-white px-4 py-4">
        <div className="flex items-center">
          {/* Government Logo */}
          <img
            src="/satya.png"
            alt="Government Logo"
            className="h-16 ml-40"
          />
          <div className="ml-40">
            <h1 className="text-lg font-bold">
              ELECTRONICS AND ICT ACADEMY AT NATIONAL INSTITUTE OF TECHNOLOGY PATNA
            </h1>
            <p className="text-sm ml-20">
              Setup Under Scheme of Department of Electronics and Information Technology
            </p>
            <p className="text-sm ml-32">
              Ministry of Communications and IT, Govt. of India
            </p>
          </div>
        </div>
        {/* NIT Patna Logo */}
        <img
          src="/logo.png"
          alt="NIT Patna Logo"
          className="h-16 mr-48"
        />
      </div>

        

      <div className="desktopnav  flex w-full  justify-center px-4 py-3 text-sm  md:py-1 md:bg-blue-500 backdrop-blur-lg  shadow-lg">

          <section className="nav-items hidden md:flex ">

            {navItems.map((item, index) => (

              <NavItem key={index} item={item} />
            ))}
          </section>
          <FiMenu onClick={() => setSideMenuOpen(true)} className="cursor-pointer text-4xl md:hidden text-black" />
        </div>

        {isSideMenuOpen && <MobileNav closeSideMenu={() => setSideMenuOpen(false)} />}
      </div></>
  );
}

function NavItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative  "
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      
      <Link href={item.link ?? "#"} className="flex cursor-pointer items-center gap-2 px-10 py-3 text-white transition-all group-hover:text-blue-800">
        <span>{item.label}</span>
        {item.children && <IoIosArrowDown className={`transition-all ${isOpen ? "rotate-180" : ""}`} />}
      </Link>
      {item.children && (
        <div className={`absolute right-0 top-10 w-auto flex-col gap-1  bg-blue-700  shadow-md transition-all ${isOpen ? "flex" : "hidden"} group`}>
          <div className="border-solid border-2 m-4 p-2 rounded-lg	bg-blue-600 shadow-md">
          {item.children.map((child, index) => (
            <DropdownItem key={index} item={child} parentLabel={item.mlabel} />
          ))}</div>
        </div>
      )}
    </div>
  );
}



function DropdownItem({ item, parentLabel }) {
  const [isSOpen, setIsSOpen] = useState(false);

  return (
    <div
      className="relative "
      onMouseEnter={() => setIsSOpen(true)}
      onMouseLeave={() => setIsSOpen(false)}
    >
      
      <Link href={item.link ?? "#"} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-white-800 hover:text-white-100 hover:bg-blue-700">
        {item.iconImage && <Image src={item.iconImage} alt="item-icon" />}
        <span className="whitespace-nowrap pl-3">{item.label}</span>
        {item.children && <IoIosArrowDropright className={`ml-auto transition-all ${isSOpen ? "rotate-180" : ""}`} />}
      </Link>
      
      {item.children && (
        
        <div className={`absolute left-full top-0  w-auto flex-col gap-1 rounded-lg shadow-md transition-all  bg-blue-700 md:bg-black-100 ${isSOpen ? "flex" : "hidden"}`}>
          <div className="border-solid border-2 border-blue-800 m-4 p-2 rounded-lg	">
          {item.children.map((subChild, subIndex) => (
            <Link key={subIndex} href={subChild.link ?? "#"} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-white md:text-whitr-900 hover:text-white-900 hover:bg-blue-800">
              {subChild.iconImage && <Image src={subChild.iconImage} alt="item-icon" />}
              <span className="whitespace-nowrap pl-3">{subChild.label}</span>
            </Link>
          ))}</div>
        </div>
      )}
    </div>
  );
}
function MobileNav({ closeSideMenu }) {



  return (
    <div className="mobile-nav text-black">
      <div className="mobile-nav-content text-black">
        <AiOutlineClose onClick={closeSideMenu} className="mobile-nav-close text-4xl text-black" />
        <div className="flex flex-col text-base gap-2 transition-all ">
          {navItems.map((item, index) => (
            
            <SingleNavItem key={index} item={item} onClick={closeSideMenu} />
          ))}
        </div>
      </div>
    </div>
  );
}




function SingleNavItem({ item ,closeSideMenu}) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItemOpen] = useState(false);
 
  return (
    <div ref={animationParent} className="relative px-1 py-3 transition-all">
      <p onClick={() => setItemOpen(!isItemOpen)} className="flex cursor-pointer items-center gap-2 text-neutral-900 group-hover:text-black">
      {item.iconImage && <Image src={item.iconImage} alt="item-icon" />}
      <Link href={ "#"} onClick={closeSideMenu} >
                {item.label}
              </Link>
        {item.children && <IoIosArrowDown className={`text-xs transition-all ${isItemOpen && "rotate-180"}`} />}
      </p>
      {isItemOpen && item.children && (
        <p className="w-auto flex-col gap-1  bg-neutral-50 py-3 transition-all flex">
          {item.children.map((child, index) => (
            <SubSidemenu key={index} item={child}/>
          ))}
        </p>
      )}
    </div>
  );
}
function SubSidemenu({ item,closeSideMenu }) {
  const [isSubItemOpen, setSubItemOpen] = useState(false);
  const [isItemOpen, setItemOpen] = useState(true);
  const handleSubToggle = () => {
    setSubItemOpen(!isSubItemOpen);
  };

  return (
    <div className="relative px-1 py-1 transition-all ">
      <p onClick={handleSubToggle} className="flex cursor-pointer items-center gap-1 text-neutral-700 group-hover:text-black">
      {item.iconImage && <Image src={item.iconImage} alt="item-icon" />}
        <Link href={item.link ?? "#"} onClick={closeSideMenu}>
        <span>{item.label}</span>
              </Link>
        {item.children && <IoIosArrowDown className={`text-xs transition-all ${isSubItemOpen && "rotate-180"} `} />}
      </p>
      {isSubItemOpen && item.children && (
        <div className="w-auto flex-col gap-1 bg-white py-1 transition-all text-sm">
          {item.children.map((subChild, index) => (
            <p key={index} className="flex pl-4">
              {item.iconImage && <Image src={subChild.iconImage} alt="item-icon" />}
              <Link href={subChild.link ?? "#"} className="flex cursor-pointer items-center py-1 text-neutral-700 hover:text-black pl-1">
                <span>{subChild.label}</span>
              </Link>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
