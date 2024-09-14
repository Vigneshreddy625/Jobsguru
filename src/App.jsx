import React from "react"
import { ThemeProvider } from "@/components/Darkmode/Theme-provider"
import Navbar from "@/components/Navbar"
import Header from "./components/Header"
import { ContextProvider } from "./context/UseContext"
import CustomNavbar from "./components/MobileView/Navbar"
import Layout from "./components/MobileView/Layout"
import Routing from "./components/MobileView/Routing"
import { AuthProvider } from "./authContext/useAuth"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
      <ContextProvider>
        <div className="hidden lg:block">
      <Navbar/>
      <Header/>
      </div>
      <div className="lg:hidden">
        <Routing/>
      </div>
      </ContextProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App;
