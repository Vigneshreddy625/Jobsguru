import React, { useContext, useState } from "react";
import { Button } from "../ui/button";
import { MyContext } from "../../context/UseContext";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import {ChevronUp, ChevronDown } from "lucide-react";

function Header() {
  const { setJobtype, jobtype, setLocation, location, setSortBy, sortBy } = useContext(MyContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [issortbyDropdownOpen, setIssortbyDropdownOpen] = useState(false);

  const handleJobTypeClick = (value) => {
    setJobtype(value);
    setIsDropdownOpen(false);
  };

  const handleLocationChange = (value) => {
    setLocation(value);
    setIsLocationDropdownOpen(false);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    setIssortbyDropdownOpen(false);
  }

  return (
    <div className="flex justify-around w-screen pb-4">
      <div className="flex items-center space-x-2">
        <span>Job type: </span>
      <DropdownMenu onOpenChange={(open) => setIsDropdownOpen(open)}>
        <DropdownMenuTrigger asChild>
          <Button className="flex items-center justify-between space-x-1">
            <span>{jobtype}</span>
            {isDropdownOpen ? <ChevronUp className="mt-1" /> : <ChevronDown className="mt-1"/>}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleJobTypeClick("Internships")}>
            Internships
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleJobTypeClick("Full-time")}>
            Full-time
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleJobTypeClick("Contract")}>
            Contract
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>

      <div className="flex items-center space-x-2">
        <span>Sort By: </span>
      <DropdownMenu onOpenChange={(open) => setIssortbyDropdownOpen(open)}>
        <DropdownMenuTrigger asChild>
          <Button className="flex items-center justify-between space-x-1">
            <span>{sortBy}</span>
            {issortbyDropdownOpen ? <ChevronUp className="mt-1" /> : <ChevronDown className="mt-1" />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleSortChange("Recent")}>
            Most Recent
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSortChange("Salary")}>
            Salary
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>

      <div className="flex items-center space-x-2">
        <span>Job Location: </span>
      <DropdownMenu onOpenChange={(open) => setIsLocationDropdownOpen(open)}> 
        <DropdownMenuTrigger asChild>
          <Button className="flex items-center justify-between space-x-1">
            <span>{location}</span>
            {isLocationDropdownOpen ? <ChevronUp className="mt-1"/> : <ChevronDown className="mt-1" />}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleLocationChange("Remote")}>
            Remote
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLocationChange("On-site")}>
            On-site
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLocationChange("Hybrid")}>
            Hybrid
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </div>
  );
}

export default Header;
