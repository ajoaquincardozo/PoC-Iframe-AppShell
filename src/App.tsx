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
      <div className="App">
        {auth && <Header/>}
          <div className="my-10">
            <GlobalRoutes/>
          </div>
        {auth && <Footer/>}
      </div>
    </BrowserRouter>
  )
}

export default App
