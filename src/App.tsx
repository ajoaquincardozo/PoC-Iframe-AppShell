import { BrowserRouter } from "react-router-dom";
import { GlobalRoutes } from "./Components/Routes";
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
          <div className="my-10">
            <GlobalRoutes/>
          </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
