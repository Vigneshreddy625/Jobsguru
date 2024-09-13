import React from "react"
import { ThemeProvider } from "@/components/Darkmode/Theme-provider"
import Navbar from "@/components/Navbar"
import Header from "./components/Header"
import { ContextProvider } from "./context/UseContext"
import CustomNavbar from "./components/MobileView/Navbar"
import Layout from "./components/MobileView/Layout"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ContextProvider>
        <div className="hidden lg:block">
      <Navbar/>
      <Header/>
      </div>
      <div className="lg:hidden">
        <Layout/>
      </div>
      </ContextProvider>
    </ThemeProvider>
  )
}

export default App;
