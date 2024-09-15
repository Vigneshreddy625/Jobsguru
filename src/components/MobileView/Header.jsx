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
    <div className="flex justify-around items-center w-full px-4">
  <div className="flex justify-between items-center">
    <DropdownMenu onOpenChange={(open) => setIsDropdownOpen(open)}>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center text-sm p-2">
          {jobtype}
          {isDropdownOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => handleJobTypeClick("Internship")}>
          Internships
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleJobTypeClick("Full time")}>
          Full-time
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleJobTypeClick("Contract")}>
          Contract
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>

  <div className="flex justify-between items-center">
    <DropdownMenu onOpenChange={(open) => setIssortbyDropdownOpen(open)}>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center text-sm p-2">
          {sortBy}
          {issortbyDropdownOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
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

  <div className="flex justify-between items-center">
    <DropdownMenu onOpenChange={(open) => setIsLocationDropdownOpen(open)}>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center text-sm p-2">
          {location}
          {isLocationDropdownOpen ? <ChevronUp className="ml-2" /> : <ChevronDown className="ml-2" />}
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
