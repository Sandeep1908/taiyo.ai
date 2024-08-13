import React, { useState, useEffect } from "react";
import MapComponent from "./MapComponent";
import type { MapMarker } from "./MapComponent";
import { useQuery } from "@tanstack/react-query";

import LineChart from "./LineChart";

// Fetch COVID data for the map chart
const fetchCovidData = async (): Promise<MapMarker[]> => {
  const response = await fetch("https://disease.sh/v3/covid-19/countries");
  const data = await response.json();

  return data.map((countryData: any) => ({
    lat: countryData.countryInfo.lat,
    lng: countryData.countryInfo.long,
    country: countryData.country,
    active: countryData.active,
    recovered: countryData.recovered,
    deaths: countryData.deaths,
  }));
};

// Fetch COVID data for the line chart
const fetchCasesData = async () => {
  const response = await fetch(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=30"
  );
  const data = await response.json();
  return data.cases; // Adjust based on your API response
};


//Total counts
const fetchTotalCount = async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/all');
  const data = await response.json();
  return data;
};



//Dashboard component
const Dashboard: React.FC = () => {
  const tabs = ["Map", "Line Graph"];
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  //fetching map data
  const {
    data: mapMarkers = [],
    isLoading,
    error,
  } = useQuery({ queryKey: ["covidData"], queryFn: fetchCovidData });

  //fecting line graph data
  const {
    data: casesData = {},
    isLoading: isCasesLoading,
    error: casesError,
  } = useQuery({ queryKey: ["casesData"], queryFn: fetchCasesData });


  //fetching total count 

  const { data } = useQuery({queryKey:['totalCount'], queryFn:fetchTotalCount});


  if (isLoading) return <h1 className="flex justify-center items-center h-full text-3xl text-white">Loading....  </h1>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div className="w-full h-full relative">
              <div className="flex justify-center items-center mt-3 p-3 space-x-4">
              <p className="text-xs md:text-sm text-white">Total Caes: {data.cases.toLocaleString()}</p>
              <p className="text-xs md:text-sm text-white">Total Death: {data.deaths.toLocaleString()}</p>
              <p className="text-xs md:text-sm text-white">Total Recoverd: {data.recovered.toLocaleString()}</p>

              
          </div>
      <div className="w-full p-5 mt-5 flex justify-between items-end ">
        <h1 className="text-lg md:text-5xl text-white font-bold ">Charts & Map</h1>
        
  
        <div className="flex justify-center items-center space-x-4">
          {tabs?.map((item, id) => {
            return (
              <p
                key={id}
                onClick={() => setCurrentIdx(id)}
                className="p-1 text-xs  md:p-3 text-white rounded-md border bottom-1"
              >
                {item}
              </p>
            );
          })}
        </div>
        </div>
        
     
      <hr />

      {currentIdx === 0 ? (
        <div className=" w-full p-2 flex flex-col mt-10 justify-center items-center   h-[600px] ">
          <h1 className=" text-lg md:text-4xl text-white  mb-10"> World Wide Cases</h1>
          <MapComponent markers={mapMarkers} />
        </div>
      ) : (
        <div className="w-full p-2 flex flex-col mt-10 justify-center items-center md:h-[700px]">
          <h1 className="text-lg md:text-4xl text-white  mb-10"> Cases Fluctuations Over Time</h1>
          <LineChart data={casesData} />
        </div>
      )}
    </div>
  );
};
export default Dashboard;
