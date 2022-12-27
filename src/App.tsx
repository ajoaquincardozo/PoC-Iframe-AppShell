import { BrowserRouter } from "react-router-dom";
import { GlobalRoutes } from "./Components/Routes";
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { useAuth } from "./Components/AuthProvider";

function App() {
  const { auth } = useAuth();

  return (
    <BrowserRouter>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        {auth && <Header/>}
          <div className="my-10 h-screen">
            <GlobalRoutes/>
          </div>
        {auth && <Footer/>}
      </div>
    </BrowserRouter>
  )
}

export default App
