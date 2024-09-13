import React, { useState, useMemo } from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { SearchIcon, UserCircleIcon, MenuIcon, XIcon, Home, Info, Mail, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ToggleMode from "@/components/Darkmode/ToggleMode"
import { useTheme } from "@/components/Darkmode/Theme-provider"
import img from "/vite.svg"
import { motion, AnimatePresence } from 'framer-motion';

const CustomNavbar = () => {
  const [searchShow, setSearchShow] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchShow(false);
  };

  const toggleDropdown = () => setDropDownOpen(!dropDownOpen);

  const menuItems = [
    { icon: Home, text: 'Home' },
    { icon: Info, text: 'About' },
    { icon: Mail, text: 'Contact' },
  ];

  const memoizedMenuItems = useMemo(() => menuItems, [menuItems]);

  return (
    <div className={`relative flex items-center justify-between px-4 py-2 bg-background border-2 ${theme === "light" ? "border-blue-400 shadow-[0_0_20px_rgba(59,130,246,1),_0_0_30px_rgba(59,130,246,0.5)]" : "border-green-400 shadow-[0_0_20px_rgba(34,197,94,1),_0_0_30px_rgba(34,197,94,0.5)]"} m-8 rounded-full`}>
      <div className="flex items-center space-x-2">
        <img src={img} alt="Logo" className="w-6 h-6" />
        <span className="font-bold text-sm">JobsGuru</span>
      </div>
      <div className="flex items-center">
        <div className={`p-2 box-border ${searchShow ? "border" : ""} rounded-lg`}>
          <form className='flex' onSubmit={handleSubmit}>
            <input 
              type="text" 
              id="search" 
              placeholder="Search..." 
              className={`transition-all duration-300 ${searchShow ? "block" : "hidden"} bg-background focus:outline-none`} 
            />
            <SearchIcon 
              className="cursor-pointer w-6 h-6" 
              onMouseEnter={() => setSearchShow(true)} 
              aria-label="Search" 
              onClick={handleSubmit}
            />
          </form>
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
              <MenuIcon className={`absolute inset-0 transition-all duration-300 ease-in-out ${dropDownOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <XIcon className={`absolute inset-0 transition-all duration-300 ease-in-out ${dropDownOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </Button>
          
          <AnimatePresence>
            {dropDownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`absolute top-16 right-0 w-full bg-background border-2 rounded-lg shadow-lg overflow-hidden z-50`}              >
                <NavigationMenu className="w-full">
                  <NavigationMenuList className="flex flex-col p-2 space-y-1">
                    {memoizedMenuItems.map((item, index) => (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink className="flex items-center px-4 py-2 hover:bg-accent rounded-md transition-colors duration-200">
                          <item.icon className="w-5 h-5 mr-3" />
                          <span>{item.text}</span>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
                <div className="p-4 border-t border-border">
                    <div className="flex items-center space-x-4">
                    <ToggleMode/>
                    <span>Toggle</span>
                    </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;