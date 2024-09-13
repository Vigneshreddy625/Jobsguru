import React, {createContext, useState} from "react";

export const MyContext = createContext();

export const ContextProvider = ({children}) => {
    const [jobtype, setJobtype] = useState("Internships");
    const [sortBy, setSortBy] = useState("Sort By");
    const [location, setLocation] = useState("Remote");

    return(
        <MyContext.Provider value = {{jobtype, setJobtype, sortBy, setSortBy, location, setLocation}}>
            {children}
        </MyContext.Provider>
    );
};