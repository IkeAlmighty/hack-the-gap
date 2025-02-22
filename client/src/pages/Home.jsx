import React, { useState, useEffect } from 'react';
import "../data/dummy-data.js"
import dummyData from '../data/dummy-data.js';

export const HomePage = () => {
  const [students, setStudents] = useState([]);
  const [strategies, setStrategies] = useState([]);
  const [visibleStudents, setVisibleStudents] = useState(3);
  const [visibleStrategies, setVisibleStrategies] = useState(3);


  useEffect(() => {
    // Fetch or define the students data here
    const fetchStudents = async () => {
      // Example data
      const data = [
        { id: 1, name: 'John Doe', para: 'Nara Coldwater', issue: 'Reading'},
        { id: 2, name: 'Jane Smith', para: 'Jarred Vanhorn', issue: 'Focus' },
        { id: 3, name: 'John Doe', para: 'Nara Coldwater', issue: 'Reading'},
        { id: 4, name: 'Jane Smith', para: 'Jarred Vanhorn', issue: 'Focus' },
        { id: 5, name: 'John Doe', para: 'Nara Coldwater', issue: 'Reading'},
        { id: 6, name: 'Jane Smith', para: 'Jarred Vanhorn', issue: 'Focus' },
        // Add more students here
      ];
      setStudents(data);
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    // Fetch or define the students data here
    const fetchStrategies = async () => {
      // Example data
      const data = [
        {tag: "Attention", behavior: "Very active"},
        {tag: "Reading", behavior: "Struggles identifying letters"},
        {tag: "Attention2", behavior: "Very active"},
        {tag: "Reading2", behavior: "Struggles identifying letters"},
        {tag: "Attention3", behavior: "Very active"},
        {tag: "Reading3", behavior: "Struggles identifying letters"},
      ]
      //dummyData.collections;
      setStrategies(data);
    };

    fetchStrategies();
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

        {students.slice(0, visibleStudents).map(student => (
          <div
            key={student.id}
            className="grid grid-cols-3 gap-4 p-4 hover:bg-gray-50 border-b last:border-b-0"
          >
            <div>{student.name}</div>
            <div className="text-gray-600">{student.para}</div>
            <div className="font-medium">{student.issue}</div>
          </div>
        ))}
        {visibleStudents < students.length && (
          <button onClick={showMoreStudents} className="mt-4 text-blue-500">
            See More Students
          </button>
        )}
      </div>

      <h1 className="text-3xl px-4 py-2 bg-gray-300 rounded font-bold mb-6">Tag Library</h1>

      <div className="bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-4 p-4 font-medium text-gray-600 border-b">
          <div>Strategy</div>
          <div>Short Description</div>
        </div>

        {strategies.slice(0, visibleStrategies).map(strategy => (
          <div
            key={strategy.tag}
            className="grid grid-cols-2 gap-4 p-4 hover:bg-gray-50 border-b last:border-b-0"
          >
            <div>{strategy.tag}</div>
            <div className="text-gray-600">{strategy.behavior}</div>
          </div>
        ))}

        {visibleStrategies < strategies.length && (
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