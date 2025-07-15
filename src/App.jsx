import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./components/ContactUs";
import EnagicKangenPage from "./pages/EnagicKangenPage";
import WaterIonizer from "./pages/WaterIonizerPage";
import WastewaterTreatmentPage from "./pages/WasteWater";
import WaterTreatment from "./pages/WaterTreatment";

const About = () => <h1 className="pt-24 text-2xl font-bold">About Page</h1>;
const Contact = () => <h1 className="pt-24 text-2xl font-bold">Contact Page</h1>;


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/enagic" element={<EnagicKangenPage/>} />
        <Route path="/water-ionizer" element={<WaterIonizer/>} />
        <Route path="/waste-water" element={<WastewaterTreatmentPage/>} />
         <Route path="/water-treatment" element={<WaterTreatment/>} />
       
      </Routes>
    </>
  );
}

export default App;

