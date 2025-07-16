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
import WaterSofteningPlant from "./pages/WaterSofteningPlant";
import IndustrialROPlant from "./pages/IndustrialROPlant";
import OneLitreBottlingPlant from "./pages/OneLitreBottlingPlant";
import WaterFillingMachine from "./pages/WaterFillingMachine";
import MineralWaterPlant from "./pages/MineralWaterPlant";
import ROPlantPage from "./pages/ROPlantPage";
import FPOPage from "./pages/FPO";
import SSPage from "./pages/SS";
import SewageTreatmentPage from "./pages/SewageTreatmentPage";
import EffluentTreatmentPage from "./pages/EffluentTreatmentPage";

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
         <Route path="/softening-plant" element={<WaterSofteningPlant/>} />
         <Route path="/industrial-ro" element={<IndustrialROPlant/>} />
          <Route path="/bottling-plant" element={<OneLitreBottlingPlant/>} />
          <Route path="/water-filling" element={<WaterFillingMachine/>} />
           <Route path="/mineral-water" element={<MineralWaterPlant/>} />
          <Route path="/ro-plant" element={<ROPlantPage/>} />
          <Route path="/frp-ro" element={<FPOPage/>} />
          <Route path="/ss-ro" element={<SSPage/>} />
           <Route path="/sewage-treatment" element={<SewageTreatmentPage/>} />
            <Route path="/effluent-treatment" element={<EffluentTreatmentPage/>} />
      </Routes>
    </>
  );
}

export default App;

