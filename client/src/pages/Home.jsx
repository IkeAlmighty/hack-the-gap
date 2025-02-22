import React, { useState, useEffect } from 'react';
import "../data/dummy-data.js"
import {getCollection} from '../data/dummy-data.js';

export const HomePage = () => {
  const [data, setData] = useState([]);



  useEffect(() => {
    // Fetch or define the students data here
    const fetchData = async () => {
      // Example data
      const data = await getCollection("strategyTools");
      setData(data);
    };

    fetchData();
  }, []);

  const showMoreStudents = () => {
    setVisibleStudents(prevVisibleStudents => prevVisibleStudents + 4);
  };

  const showMoreStrategies = () => {
    setVisibleStrategies(prevVisibleStrategies => prevVisibleStrategies + 4);
  };

  return (

    <div className="w-full">
      {/* Navigation Bar */}
      <div className="bg-gray-100 text-black p-10 flex justify-between items-center mb-8 w-full fixed top-0 left-0">
        <div className="text-4xl font-bold">IEP Organizer</div>
        <div>
          <button className="text-white mr-4 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Profile</button>
          <button className="text-white px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Settings</button>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6 pt-24">
      <h1 className="text-3xl px-4 py-2 bg-gray-300 rounded font-bold mb-6">Students</h1>

      <div className="bg-white rounded-lg shadow-md mb-8">
        <div className="grid grid-cols-3 gap-4 p-4 font-medium text-gray-600 border-b">
          <div>Name</div>
          <div>Para</div>
          <div>Main Issue</div>
        </div>

        {/* {students.slice(0, visibleStudents).map(student => (
          <div
            key={student.id}
            className="grid grid-cols-3 gap-4 p-4 hover:bg-gray-50 border-b last:border-b-0"
          >
            <div>{student.name}</div>
            <div className="text-gray-600">{student.para}</div>
            <div className="font-medium">{student.issue}</div>
          </div>
        ))} */}
        {/* {visibleStudents < students.length && (
          <button onClick={showMoreStudents} className="mt-4 text-blue-500">
            See More Students
          </button>
        )} */}
      </div>

      <h1 className="text-3xl px-4 py-2 bg-gray-300 rounded font-bold mb-6">Tag Library</h1>

      <div className="bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-4 p-4 font-medium text-gray-600 border-b">
          <div>Strategy</div>
          <div>Short Description</div>
        </div>

        {data.map(need => (
          <div
            key={need.studentTag}
            className="grid grid-cols-2 gap-4 p-4 hover:bg-gray-50 border-b last:border-b-0"
          >
            <div>{need.studentTag}</div>
            <div className="text-gray-600">{need.studentBehavior}</div>
          </div>
        ))}

        {/* {visibleStrategies < strategies.length && (
          <button onClick={showMoreStrategies} className="mt-4 text-blue-500">
            See More Strategies
          </button> */}
        )}
      </div>
      </div>
    </div>

  );
};

export default HomePage;