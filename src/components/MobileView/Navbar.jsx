import React, { useState, useMemo, useContext } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  SearchIcon,
  MenuIcon,
  XIcon,
  Home,
  Info,
  Mail,
  FilterIcon,
  UserCircleIcon,
  LogOutIcon, 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ToggleMode from "@/components/Darkmode/ToggleMode";
import { useTheme } from "@/components/Darkmode/Theme-provider";
import img from "/vite.svg";
import { motion, AnimatePresence } from "framer-motion";
import { MyContext } from "../../context/UseContext";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/authContext/useAuth";

const CustomNavbar = () => {
  const [searchShow, setSearchShow] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const { theme } = useTheme();
  const { isAuthenticated, logout } = useAuth(); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchShow(false);
  };

  const toggleDropdown = () => setDropDownOpen(!dropDownOpen);

  const { showFilter, setShowFilter } = useContext(MyContext);

  const menuItems = useMemo(() => [
    { icon: Home, text: "Home", link: "/home" },
    { icon: Info, text: "About", link: "/about" },
    { icon: Mail, text: "Contact", link: "/contact" },
    ...(isAuthenticated
      ? [{ icon: UserCircleIcon, text: "Admin", link: "/admin" }] 
      : [{ icon: UserCircleIcon, text: "Login", link: "/login" }]), 
  ], [isAuthenticated]);

  const handleLogout = () => {
    logout(); 
    navigate('/'); 
  };

  return (
    <>
      <div
        className={`relative flex items-center justify-between px-4 py-2 bg-background border-2 ${
          theme === "light"
            ? "border-blue-400 shadow-[0_0_20px_rgba(59,130,246,1),_0_0_30px_rgba(59,130,246,0.5)]"
            : "border-green-400 shadow-[0_0_20px_rgba(34,197,94,1),_0_0_30px_rgba(34,197,94,0.5)]"
        } mx-4 mt-6 mb-4 rounded-full`}
      >
        <div className="flex items-center space-x-2">
          <img src={img} alt="Logo" className="w-8 h-8" />
          <span className="font-bold text-lg">JobsGuru</span>
        </div>
        <div className="flex items-center">
          <div
            className={`p-2 box-border ${
              searchShow ? "border" : ""
            } rounded-lg`}
          >
            {!searchShow ? (
              <SearchIcon
                className="cursor-pointer w-6 h-6"
                aria-label="Search"
                onClick={() => setSearchShow(true)}
              />
            ) : (
              <XIcon
                className="cursor-pointer w-6 h-6"
                aria-label="Search"
                onClick={() => setSearchShow(false)}
              />
            )}
            {searchShow && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute top-16 right-0 w-full p-2 overflow-hidden z-50`}
                >
                  <section className={`relative flex w-full mb-4`}>
                    <input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search..."
                      className={`w-full bg-background p-2 ${
                        theme === "light"
                          ? "bg-gray-900 text-white"
                          : "bg-white text-black"
                      } rounded-full pl-6 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      aria-label="Search"
                    />
                    <SearchIcon
                      onClick={handleSubmit}
                      className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${
                        theme === "light" ? "text-white" : "text-black"
                      }`}
                    />
                  </section>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
          <div className="">
            {!showFilter ? (
              <FilterIcon
                className="cursor-pointer w-6 h-6"
                aria-label="Search"
                onClick={() => setShowFilter(true)}
              />
            ) : (
              <XIcon
                className="cursor-pointer w-6 h-6"
                aria-label="Search"
                onClick={() => setShowFilter(false)}
              />
            )}
          </div>
          <div className="">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDropdown}
              aria-label={dropDownOpen ? "Close menu" : "Open menu"}
              className="transition-all duration-300 ease-in-out"
            >
              <div className="relative w-6 h-6">
                <MenuIcon
                  className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                    dropDownOpen
                      ? "opacity-0 rotate-90"
                      : "opacity-100 rotate-0"
                  }`}
                />
                <XIcon
                  className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                    dropDownOpen
                      ? "opacity-100 rotate-0"
                      : "opacity-0 -rotate-90"
                  }`}
                />
              </div>
            </Button>

            <AnimatePresence>
              {dropDownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute top-16 right-0 w-full bg-background border-2 rounded-lg shadow-lg overflow-hidden z-50`}
                >
                  <NavigationMenu className="w-full">
                    <NavigationMenuList className="flex flex-col p-2 space-y-1">
                      {menuItems.map((item, index) => (
                        <NavigationMenuItem key={index}>
                          <NavigationMenuLink className="flex items-center px-4 py-2 hover:bg-accent rounded-md transition-colors duration-200">
                            <item.icon className="w-5 h-5 mr-3" />
                            <Link to={item.link}>{item.text}</Link>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}

                      {isAuthenticated && (
                        <NavigationMenuItem>
                          <NavigationMenuLink
                            className="flex items-center px-4 py-2 hover:bg-accent rounded-md transition-colors duration-200 cursor-pointer"
                            onClick={handleLogout} 
                          >
                            <LogOutIcon className="w-5 h-5 mr-3" />
                            Logout
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      )}
                    </NavigationMenuList>
                  </NavigationMenu>
                  <div className="p-4 border-t border-border">
                    <div className="flex items-center space-x-4">
                      <ToggleMode />
                      <span>Toggle</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomNavbar;