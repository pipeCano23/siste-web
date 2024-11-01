import { BUCKET } from "@/constants/config";
import Image from "next/image";
import React from "react";

const AnalysisPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

      {/* First Row of Graphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white shadow-md p-4 rounded-lg h-80">
          <h2 className="text-xl font-semibold mb-4">Total Sales Over Time</h2>
          {/* Placeholder for Total Sales Over Time Graph */}
          <div className="h-full flex items-center justify-center text-gray-400">
            <Image
              src={`${BUCKET}torta.png`}
              alt="File icon"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg h-80">
          <h2 className="text-xl font-semibold mb-4">Sales by Category</h2>
          {/* Placeholder for Sales by Category Graph */}
          <div className="h-full flex items-center justify-center text-gray-400">
          <Image
              src={`${BUCKET}grafico-diagramas.jpg`}
              alt="File icon"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* Third Row of Graphs */}
      <div className="bg-white shadow-md p-4 rounded-lg h-80">
        <div className="h-full flex items-center justify-center text-purple-700 font-semibold text-xl">
          Pronostico: Veo exito en tu futuro, sigue asi, guap@!
        </div>
      </div>
    </div>
  );
};

export default AnalysisPage;
