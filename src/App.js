import './App.css';
import HomePage from './HomePage';
import MainRouter from './MainRouter';
import {BrowserRouter} from "react-router-dom"
import ContextProvider from "./ContextProvider"



function App() {
  return (

    <div className="App">
    
      
      <ContextProvider >
          <MainRouter />
      </ContextProvider>
    

   
     
     
      
    
    </div>
  );
}

export default App;
