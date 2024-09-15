import React, {createContext, useState} from "react";

export const MyContext = createContext();

export const ContextProvider = ({children}) => {
    const [jobtype, setJobtype] = useState("Any");
    const [sortBy, setSortBy] = useState("Any");
    const [location, setLocation] = useState("Any");
    const [showFilter, setShowFilter] = useState(false)

    return(
        <MyContext.Provider value = {{jobtype, setJobtype, sortBy, setSortBy, location, setLocation, showFilter, setShowFilter}}>
            {children}
        </MyContext.Provider>
    );
};