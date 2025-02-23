import React, { useState, useEffect } from 'react';
import "../data/dummy-data.js"
import dummyData from '../data/dummy-data.js';

export const StudentProfile = () => {
  const [tag, setTag] = useState({ tag: ""});
  const [strategies, setStrategies] = useState([]);


  useEffect(() => {
    // Fetch or define the students data here
    const fetchTag = async () => {
      // Example data
      const data = { tag: "Tag name" }
      setTag(data);
    };

    fetchTag();
  }, []);

  useEffect(() => {
    // Fetch or define the students data here
    const fetchStrategies = async () => {
      // Example data
      const data = [
        "strat1", "strat2", "strat3",
      ]
      //dummyData.collections;
      setStrategies(data);
    };

    fetchStrategies();
  }, []);


  return (

    <div className="w-full">
      {/* Navigation Bar */}
      <div className="bg-gray-100 text-black p-10 flex justify-between items-center mb-8 w-full fixed top-0 left-0">
        <div className="flex items-center space-x-6">
          <div className="text-4xl font-bold pr-4">{tag.tag}</div>
        </div>
        <div>
          <button className="text-white mr-4 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Profile</button>
          <button className="text-white px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Settings</button>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6 pt-24">


        <h1 className="text-3xl px-4 py-2 bg-gray-300 rounded font-bold mb-6">Associated Strategies</h1>

        <div className="bg-white rounded-lg shadow-md">
          {strategies.map((strategy, index) => (
            <div key={index} className="p-4 border-b last:border-b-0">
              <div className="text-xl mb-2">{strategy}</div>

            </div>
          ))}


        </div>
      </div>
    </div>

  );
};

export default StudentProfile;