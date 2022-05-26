import { useContext } from "react";
import { PricingContext } from "./context/PricingContext";
import Toogle from "./components/Toogle";
import PricingCard from "./components/PricingCard";

function App() {
  const { allPricing, enabled, setEnabled } = useContext(PricingContext);
  return (
    <div className="bg-slate-800 w-full h-screen p-20">
      <div className="flex justify-center items-center">
        <p className="text-white opacity-50">Monthly package</p>
        <Toogle />
        <p className="text-white  opacity-50">Full package</p>
      </div>
      <PricingCard />
    </div>
  );
}

export default App;
