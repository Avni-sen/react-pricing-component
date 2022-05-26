import React from "react";
import { useContext } from "react";
import { PricingContext } from "../context/PricingContext";

const PricingCard = () => {
  const { allPricing, enabled } = useContext(PricingContext);
  return (
    <div className="w-full flex flex-col  items-center justify-center ">
      {enabled ? (
        <>
          <h1 className="text-5xl text-white uppercase m-2">Full Package</h1>
          <ul className="flex items-center justify-center ">
            <li className=" bg-slate-400 hover:bg-slate-100 hover:translate-y-3 hover:duration-300 hover:ease-in shadow-md shadow-white p-12 border flex flex-col  items-center justify-center border-slate-700 rounded-lg m-5">
             <h1 className="text-xl mb-2">Basic</h1>
              <p className="text-5xl mb-3">{allPricing.Full.Basic}</p>
            <div>
                <ul className="flex flex-col items-center justify-center">
                    <li className="border-b-2 border-slate-800 p-2 mb-4 ">
                        500 GB Storege
                    </li>
                     <li className="border-b-2 border-slate-800 p-2 mb-4">
                        2 User Allowed
                    </li>
                    <li className="border-b-2 border-slate-800 p-2 mb-4">
                        Sed Up To 3 GB
                    </li>
                </ul>
            </div>
            <button className="bg-emerald-500 p-3 border border-slate-900 rounded-xl items-center justify-center flex text-sm text-white hover:bg-white hover:text-emerald-500" type="button">LEARN MORE</button>
            </li>
            <li className=" bg-slate-400 hover:bg-slate-100 hover:translate-y-3 hover:duration-500  hover:ease-in hover:p-20 shadow-md shadow-white p-12 border flex flex-col  items-center justify-center border-slate-700 rounded-lg m-5">
             <h1 className="text-xl mb-2">Professional</h1>
              <p className="text-5xl mb-3">{allPricing.Full.Pro}</p>
            <div>
                <ul className="flex flex-col items-center justify-center">
                    <li className="border-b-2 border-slate-800 p-2 mb-4 ">
                        1 TB Storege
                    </li>
                     <li className="border-b-2 border-slate-800 p-2 mb-4">
                        5 User Allowed
                    </li>
                    <li className="border-b-2 border-slate-800 p-2 mb-4">
                        Send Up To 10 GB
                    </li>
                </ul>
            </div>
            <button className="bg-emerald-500 p-3 border border-slate-900 rounded-xl items-center justify-center flex text-sm text-white hover:bg-white hover:text-emerald-500" type="button">LEARN MORE</button>
            </li>
            <li className=" bg-slate-400 hover:bg-slate-100 hover:translate-y-3 hover:duration-300 hover:ease-in shadow-md shadow-white p-12 border flex flex-col  items-center justify-center border-slate-700 rounded-lg m-5">
             <h1 className="text-xl mb-2">Master</h1>
              <p className="text-5xl mb-3">{allPricing.Full.Master}</p>
            <div>
                <ul className="flex flex-col items-center justify-center">
                    <li className="border-b-2 border-slate-800 p-2 mb-4 ">
                        2 TB Storege
                    </li>
                     <li className="border-b-2 border-slate-800 p-2 mb-4">
                        10 User Allowed
                    </li>
                    <li className="border-b-2 border-slate-800 p-2 mb-4">
                        Sed Up To 20 GB
                    </li>
                </ul>
            </div>
            <button className="bg-emerald-500 p-3 border border-slate-900 rounded-xl items-center justify-center flex text-sm text-white hover:bg-white hover:text-emerald-500" type="button">LEARN MORE</button>
            </li>
          </ul>
        </>
      ) : (
        <>
          <h1 className="text-5xl text-white uppercase m-2">Monthly Package</h1>
          <ul className="flex items-center justify-center ">
            <li className=" bg-slate-400 hover:bg-slate-100 hover:translate-y-3 hover:duration-300 hover:ease-in shadow-md shadow-white p-14 border flex flex-col  items-center justify-center border-slate-700 rounded-lg m-5">
             <h1 className="text-xl mb-2">Basic</h1>
              <p className="text-5xl mb-3">{allPricing.Monthly.Basic}</p>
            <div>
                <ul className="flex flex-col items-center justify-center">
                    <li className="border-b-2 border-slate-800 p-2 mb-4 ">
                        500 GB Storege
                    </li>
                     <li className="border-b-2 border-slate-800 p-2 mb-4">
                        2 User Allowed
                    </li>
                    <li className="border-b-2 border-slate-800 p-2 mb-4">
                        Sed Up To 3 GB
                    </li>
                </ul>
            </div>
            <button className="bg-emerald-500 p-3 border border-slate-900 rounded-xl items-center justify-center flex text-sm text-white hover:bg-white hover:text-emerald-500" type="button">LEARN MORE</button>
            </li>
            <li className=" bg-slate-400 hover:bg-slate-100 hover:translate-y-3 hover:duration-500  hover:ease-in hover:p-20 shadow-md shadow-white p-14 border flex flex-col  items-center justify-center border-slate-700 rounded-lg m-5">
             <h1 className="text-xl mb-2">Professional</h1>
              <p className="text-5xl mb-3">{allPricing.Monthly.Pro}</p>
            <div>
                <ul className="flex flex-col items-center justify-center">
                    <li className="border-b-2 border-slate-800 p-2 mb-4 ">
                        1 TB Storege
                    </li>
                     <li className="border-b-2 border-slate-800 p-2 mb-4">
                        5 User Allowed
                    </li>
                    <li className="border-b-2 border-slate-800 p-2 mb-4">
                        Send Up To 10 GB
                    </li>
                </ul>
            </div>
            <button className="bg-emerald-500 p-3 border border-slate-900 rounded-xl items-center justify-center flex text-sm text-white hover:bg-white hover:text-emerald-500" type="button">LEARN MORE</button>
            </li>
            <li className=" bg-slate-400 hover:bg-slate-100 hover:translate-y-3 hover:duration-300 hover:ease-in shadow-md shadow-white p-14 border flex flex-col  items-center justify-center border-slate-700 rounded-lg m-5">
             <h1 className="text-xl mb-2">Master</h1>
              <p className="text-5xl mb-3">{allPricing.Monthly.Master}</p>
            <div>
                <ul className="flex flex-col items-center justify-center">
                    <li className="border-b-2 border-slate-800 p-2 mb-4 ">
                        2 TB Storege
                    </li>
                     <li className="border-b-2 border-slate-800 p-2 mb-4">
                        10 User Allowed
                    </li>
                    <li className="border-b-2 border-slate-800 p-2 mb-4">
                        Sed Up To 20 GB
                    </li>
                </ul>
            </div>
            <button className="bg-emerald-500 p-3 border border-slate-900 rounded-xl items-center justify-center flex text-sm text-white hover:bg-white hover:text-emerald-500" type="button">LEARN MORE</button>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default PricingCard;
