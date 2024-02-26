import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Navbar } from "./Component/Navbar";
import { SideBar } from "./Component/Sidebar";
import { Home } from "./Component/pages/Home";
import { About } from "./Component/pages/About";
import { Dashboard } from "./Component/pages/Dashboard";
import { Product } from "./Component/pages/Product";
import { Services } from "./Component/pages/Services";

function App() {
  const [selectItems, setSelectItems] = useState('')
  // comportements
    function recherche(val) {
      setSelectItems(val)
    }
    function validation() {
      alert('success')
    }
  
  return (
    <div className="App container-fluid px-0">
     <div className="row">
        <div className="col-sm-12">
          <Navbar recherche={recherche}
            validation={validation} selectItems={selectItems} /> 
        </div>
        <div className="col-sm-2">
          <SideBar />
        </div>
        <div className="col-sm-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about"  element={<About />}/>
          <Route path="/dashboard"  element={<Dashboard />}/>
          <Route path="/product"  element={<Product />}/>
          <Route path="/service"  element={<Services />}/>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
