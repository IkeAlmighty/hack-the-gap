import React, { useState, useEffect } from 'react';
import "../data/dummy-data.js";
import { getCollection } from '../data/dummy-data.js';

export const HomePage = () => {
  const [data, setData] = useState([]);
  const [students, setStudents] = useState([]);
  const [visibleStudents, setVisibleStudents] = useState(4);
  const [visibleStrategies, setVisibleStrategies] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      const strategyData = await getCollection("strategyTools");
      setData(strategyData);

      const studentData = await getCollection("studentAccounts");
      setStudents(studentData);
      console.log(studentData);
    };

    fetchData();
  }, []);

  const showMoreStudents = () => {
    setVisibleStudents((prev) => prev + 4);
  };

  const showMoreStrategies = () => {
    setVisibleStrategies((prev) => prev + 4);
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
        <h1 className="text-3xl px-4 py-2 bg-gray-300 rounded font-bold mb-6">My Students</h1>

        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-2 gap-4 p-4 font-medium text-gray-600 border-b">
            <div>Name</div>
            <div>Grade</div>
          </div>

          {students.slice(0, visibleStudents).map((student) => (
            <div
              key={student.id}
              className="grid grid-cols-2 gap-4 p-4 hover:bg-gray-50 border-b last:border-b-0"
            >
              <div className="text-gray-600">{student.Name}</div>
              <div className="font-medium">{student.Grade}</div>
            </div>
          ))}

          {visibleStudents < students.length && (
            <button onClick={showMoreStudents} className="mt-4 text-blue-500">
              See More Students
            </button>
          )}
        </div>

        <h1 className="text-3xl px-4 py-2 bg-gray-300 rounded font-bold mb-6">Strategy Library</h1>

        <div className="bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-2 gap-4 p-4 font-medium text-gray-600 border-b">
            <div>Student Need</div>
            <div>Short Description</div>
          </div>

          {data.slice(0, visibleStrategies).map((need) => (
            <div
              key={need.studentTag}
              className="grid grid-cols-2 gap-4 p-4 hover:bg-gray-50 border-b last:border-b-0"
            >
              <div>{need.studentTag}</div>
              <div className="text-gray-600">{need.studentBehavior}</div>
            </div>
          ))}

          {visibleStrategies < data.length && (
            <button onClick={showMoreStrategies} className="mt-4 text-blue-500">
              See More Strategies
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
