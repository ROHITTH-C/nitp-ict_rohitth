"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import "./styles/Navbar.css";
import useNavigationEvent from "./useNavigationEvent";
import Home from "@/app/page";
import { ChevronDown, ChevronRight, Menu, X, Home as HomeIcon, BookOpen, Building, School, Fingerprint, Award, Users, Flag, GraduationCap, Calendar} from "lucide-react";

//List of all nav items
const navItems = [
  {
    label: "Home",
    link: "/",
    iconImage: HomeIcon,
  },

  {
    label: "Institute",
    link: "#",
    mlabel: "Institute",
    iconImage: Building,
    children: [
      {
        label: "Introduction",
        link: "/Institute/Introduction",
        iconImage: BookOpen,
      },
      {
        label: "Impelmentation Strategy",
        link: "/Institute/ImplementationStrategy",
        iconImage: Award,
      },
      {
        label: "Infrastructure",
        link: "/Institute/Infrastructure",
        iconImage: Building,
      },
      {
        label: "Responsibility",
        link: "#",
        iconImage: Fingerprint,
        children: [
          {
            label: "Deity",
            link: "/Institute/Diety",
            iconImage: Building,
          },
          {
            label: "NIT Patna",
            link: "/Institute/Nitp",
            iconImage: Award,
          },
        ],
      },
    
      {
        label: "Features",
        link: "/Institute/Features",
        iconImage: Award,
      },
    ],
  },
  {
    label: "Committees",
    link: "#",
    mlabel: "Committees",
    iconImage: Users,
    children: [
      {
        label: "Advisory Board",
        link: "/Committees/Ab",
        iconImage: Users,
      },
      {
        label: "Academic Committee",
        link: "/Committees/Ac",
        iconImage: GraduationCap,
      },
      {
        label: "Research Committee",
        link: "/Committees/Rc",
        iconImage: BookOpen,
      },
    ],
  },
/*  {
    label: "Training Program",
    link: "#",
    mlabel: "Training Program",
    children: [
      {
        label: "Upcoming",
        link: "#",

        children: [
          {
            label: "Module1",
            link: "/Training/Upcoming/Module1_up",
          },
          {
            label: "Module2",
            link: "/Training/Upcoming/Module2_up",
          },
        ],
      },
      {
        label: "Proposed",
        link: "#",

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
        ],
      },
    ],
  }, */
  {
    label: "States",
    link: "/States",
    iconImage: Flag,
  },
  {
    label: "Joint Courses",
    link: "#",
    mlabel: "Joint Courses",
    iconImage: GraduationCap,
    children: [
      {
        label: "Upcoming Programs",
        link: "/Joint/Upcoming",
        iconImage: Calendar,
      },
      {
        label: "Joint Summer Programs 2022",
        link: "/Joint/JSP2022",
        iconImage: Calendar,
      },
      {
        label: "Joint Winter Programs 2022",
        link: "/Joint/JWP2022",
        iconImage: Calendar,
      },
      {
        label: "Summer Joint Courses 2021",
        link: "/Joint/SJC2021",
        iconImage: Calendar,
      },
      {
        label: "Spring Joint Courses 2021",
        link: "/Joint/SPJC2021",
        iconImage: Calendar,
      },
      {
        label: "Summer Joint Courses 2020",
        link: "/Joint/SJC2020",
        iconImage: Calendar,
      },
    ],
  },
  {
    label: "FDP(FY 2024-25)",
    link: "#",
    mlabel: "FDP(FY 2024-25)",
    iconImage: Calendar,
    children: [
      {
        label: "January 2025",
        link: "/FDP/January2025",
        iconImage: Calendar,
      },
      {
        label: "February 2025",
        link: "/FDP/February2025",
        iconImage: Calendar,
      },
      {
        label: "March 2025",
        link: "/FDP/March2025",
        iconImage: Calendar,
      },
      // {
      //   label: "Misc",
      //   link: "/FDP/Misc",
      // }
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
    <header className={`w-full z-50 ${isSticky ? "sticky top-0 z-50" : ""}`}>
      {/* Top blue bar */}
      <div className="bg-blue-600 text-white w-full">
        <div className="container mx-auto flex justify-between items-center px-4 py-1 text-sm">
          <div className="flex space-x-2 text-xs md:text-sm">
            {/* <a href="#" className="hover:underline text-[0.6rem] md:text-sm">
              Jobs@NITP
            </a>
            <span className="text-[0.5rem] md:text-sm">|</span>
            <a href="#" className="hover:underline text-[0.6rem] md:text-sm">
              Fee Payment
            </a> */}
          </div>
          
          <div className="flex space-x-3">
           
            <a href="https://www.nitp.ac.in/" className="ml-4 hover:underline text-xs sm:text-sm">
              Go To NITP Site
            </a>
            <span className="text-[0.5rem] md:text-sm">|</span>
            <a href="/Institute/Diety" className="ml-4 hover:underline text-xs sm:text-sm">
              Go To Deity
            </a>
          </div>
        </div>
      </div>

      {/* Logo and title section */}
      <div className="bg-white shadow-sm relative z-40">
        <div className="container mx-auto flex justify-between items-center px-4 py-2 sm:py-4">
          {/* Government Logo */}
          <div className="flex-shrink-0">
            <img src="/satya.png" alt="Government Logo" className="h-10 sm:h-16" />
          </div>
          
          {/* Title and subtitle */}
          <div className="flex-grow flex flex-col items-center justify-center text-center px-2 sm:px-4">
            <h1 className="text-xs sm:text-sm md:text-xl lg:text-2xl font-bold text-center leading-tight">
              ELECTRONICS AND ICT ACADEMY AT NATIONAL INSTITUTE OF TECHNOLOGY PATNA
            </h1>
            <p className="text-[8px] sm:text-xs md:text-sm mt-1">
              Setup Under Scheme of Department of Electronics and Information Technology
            </p>
            <p className="text-[8px] sm:text-xs md:text-sm">
              Ministry of Communications and IT, Govt. of India
            </p>
          </div>

          {/* NIT Patna Logo */}
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="NIT Patna Logo" className="h-10 sm:h-16" />
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-blue-600 shadow-md relative z-40">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <div className="hidden md:flex justify-center w-full">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </div>
          <button 
            onClick={() => setSideMenuOpen(true)}
            className="md:hidden text-white p-2"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isSideMenuOpen && (
        <MobileNav closeSideMenu={() => setSideMenuOpen(false)} />
      )}
    </header>
  );
}

function NavItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative mx-1"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={item.link ?? "#"}
        className="flex cursor-pointer items-center gap-2 px-3 py-2 text-white font-medium transition-all hover:bg-blue-700 rounded"
      >
        {item.iconImage && (
          <span className="w-5 h-5 flex items-center justify-center">
            <item.iconImage size={16} className="text-white" />
          </span>
        )}
        <span>{item.label}</span>
        {item.children && (
          <ChevronDown
            className={`w-4 h-4 transition-all ${isOpen ? "rotate-180" : ""}`}
          />
        )}
      </Link>
      {item.children && (
        <div
          className={`absolute right-0 top-10 w-auto flex-col gap-1 text-black font-semibold bg-white shadow-md transition-all rounded-lg ${
            isOpen ? "flex" : "hidden"
          } group`}
        >
          <div className="border-solid border-2 border-blue-700 m-3 p-2 rounded-lg bg-white shadow-md">
            {item.children.map((child, index) => (
              <DropdownItem
                key={index}
                item={child}
                parentLabel={item.mlabel}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function DropdownItem({ item, parentLabel }) {
  const [isSOpen, setIsSOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsSOpen(true)}
      onMouseLeave={() => setIsSOpen(false)}
    >
      <Link
        href={item.link ?? "#"}
        className="flex cursor-pointer items-center py-1 pl-4 pr-8 text-blue-800 hover:text-blue-600 hover:bg-blue-50 rounded"
      >
        {item.iconImage && (
          <span className="w-5 h-5 flex items-center justify-center">
            <item.iconImage size={16} className="text-blue-800" />
          </span>
        )}
        <span className="whitespace-nowrap pl-3">{item.label}</span>
        {item.children && (
          <ChevronRight
            className={`ml-auto w-4 h-4 transition-all ${isSOpen ? "rotate-90" : ""}`}
          />
        )}
      </Link>

      {item.children && (
        <div
          className={`absolute left-full top-0 w-auto flex-col gap-1 rounded-lg shadow-md transition-all bg-white ${
            isSOpen ? "flex" : "hidden"
          }`}
        >
          <div className="border-solid border-2 border-blue-700 m-3 p-2 rounded-lg">
            {item.children.map((subChild, subIndex) => (
              <Link
                key={subIndex}
                href={subChild.link ?? "#"}
                className="flex cursor-pointer items-center py-1 pl-4 pr-8 text-blue-800 hover:text-blue-600 hover:bg-blue-50 rounded"
              >
                {subChild.iconImage && (
                  <span className="w-5 h-5 flex items-center justify-center">
                    <subChild.iconImage size={16} className="text-blue-800" />
                  </span>
                )}
                <span className="whitespace-nowrap pl-3">{subChild.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNav({ closeSideMenu }) {
  return (
    <div className="mobile-nav text-black">
      <div className="mobile-nav-content text-black">
        <X
          onClick={closeSideMenu}
          className="mobile-nav-close w-8 h-8 text-blue-600"
        />
        <div className="flex flex-col text-base gap-2 transition-all pt-10">
          {navItems.map((item, index) => (
            <SingleNavItem key={index} item={item} closeSideMenu={closeSideMenu} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleNavItem({ item, closeSideMenu }) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItemOpen] = useState(false);

  return (
    <div ref={animationParent} className="relative px-1 py-2 transition-all border-b border-gray-100">
      <div
        onClick={() => {
          // Only toggle if there are children, otherwise just close the menu
          if (item.children) {
            setItemOpen(!isItemOpen);
          }
        }}
        className="flex cursor-pointer items-center gap-2 text-blue-800 hover:text-blue-600 font-medium"
      >
        {item.iconImage && (
          <span className="w-5 h-5 flex items-center justify-center">
            <item.iconImage size={16} className="text-blue-800" />
          </span>
        )}
        <Link 
          href={item.link} 
          onClick={(e) => {
            // Prevent navigation if item has children
            if (item.children) {
              e.preventDefault();
            } else {
              closeSideMenu();
            }
          }}
          className="py-1"
        >
          {item.label}
        </Link>
        {item.children && (
          <ChevronDown
            className={`ml-auto w-5 h-5 transition-all ${isItemOpen && "rotate-180"}`}
          />
        )}
      </div>
      {isItemOpen && item.children && (
        <div className="w-auto flex-col gap-1 bg-blue-50 py-2 pl-4 pr-2 my-1 rounded-md transition-all flex">
          {item.children.map((child, index) => (
            <SubSidemenu 
              key={index} 
              item={child} 
              closeSideMenu={closeSideMenu}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function SubSidemenu({ item, closeSideMenu }) {
  const [isSubItemOpen, setSubItemOpen] = useState(false);

  return (
    <div className="relative py-1 transition-all">
      <div
        onClick={() => {
          if (item.children) {
            setSubItemOpen(!isSubItemOpen);
          }
        }}
        className="flex cursor-pointer items-center gap-1 text-blue-700 hover:text-blue-500 group-hover:text-blue-600"
      >
        {item.iconImage && (
          <span className="w-5 h-5 flex items-center justify-center">
            <item.iconImage size={16} className="text-blue-700" />
          </span>
        )}
        <Link 
          href={item.link} 
          onClick={(e) => {
            if (item.children) {
              e.preventDefault();
            } else {
              closeSideMenu();
            }
          }}
          className="text-sm font-medium hover:text-blue-500"
        >
          <span>{item.label}</span>
        </Link>
        {item.children && (
          <ChevronDown
            className={`ml-auto w-4 h-4 transition-all ${isSubItemOpen && "rotate-180"}`}
          />
        )}
      </div>
      {isSubItemOpen && item.children && (
        <div className="w-auto flex-col gap-1 bg-white py-1 pl-3 my-1 rounded-md border-l-2 border-blue-400 transition-all text-sm">
          {item.children.map((subChild, index) => (
            <div key={index} className="flex pl-2 my-1">
              {subChild.iconImage && (
                <span className="w-5 h-5 flex items-center justify-center">
                  <subChild.iconImage size={16} className="text-blue-700" />
                </span>
              )}
              <Link
                href={subChild.link}
                className="flex cursor-pointer items-center py-1 text-blue-600 hover:text-blue-800 pl-1"
                onClick={closeSideMenu}
              >
                <span>{subChild.label}</span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
