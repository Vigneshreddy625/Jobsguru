import React, {useState} from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { SearchIcon, UserCircleIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ToggleMode from "@/components/Darkmode/ToggleMode"
import { useTheme } from "@/components/Darkmode/Theme-provider"
import img from "/vite.svg"

const CustomNavbar = () => {

  const [searchShow, setSearchShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchShow(false); 
};

  const{theme} = useTheme();

  return (
    <div className={`flex items-center justify-between px-8 py-2 bg-background border-2 ${theme === "light" ? "border-blue-400 shadow-[0_0_20px_rgba(59,130,246,1),_0_0_30px_rgba(59,130,246,0.5)]" : "border-green-400 shadow-[0_0_20px_rgba(34,197,94,1),_0_0_30px_rgba(34,197,94,0.5)]"} m-8 rounded-full`}>
      <div className="flex items-center space-x-4">
        <img src={img} alt="Logo" className="w-8 h-8" />
        <span className="font-bold text-lg">JobsGuru</span>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className="px-3 py-2 hover:bg-accent rounded-md">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="px-3 py-2 hover:bg-accent rounded-md">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="px-3 py-2 hover:bg-accent rounded-md">
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center space-x-2">
      <div className={`p-2 box-border ${searchShow ? "border" : ""}  rounded-lg`}>
            <form className='flex' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="search" 
                    placeholder="Search..." 
                    className={`transition-all duration-300 ${searchShow ? "block" : "hidden"} bg-background focus:outline-none`} 
                />
            
            <SearchIcon 
                className="cursor-pointer" 
                onMouseEnter={() => setSearchShow(true)} 
                aria-label="Search" 
                onClick={handleSubmit}
            />
            </form>
        </div>
        <ToggleMode/>
        <Button variant="ghost" size="icon" aria-label="Profile">
          <UserCircleIcon className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default CustomNavbar;