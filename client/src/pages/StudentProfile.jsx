import React, { useState, useEffect } from 'react';
import "../data/dummy-data.js"
import dummyData from '../data/dummy-data.js';

export const StudentProfile = () => {
  const [student, setStudent] = useState({ name: '', grade: '', teachers:[], tags: [] });
  const [strategies, setStrategies] = useState([]);


  useEffect(() => {
    // Fetch or define the students data here
    const fetchStudent = async () => {
      // Example data
      const data = { name: "Sofa", grade: "First", teachers:["Nara Coldwater"], tags: ["tag1", "tag2"] }
      setStudent(data);
    };

    fetchStudent();
  }, []);

  useEffect(() => {
    // Fetch or define the students data here
    const fetchStrategies = async () => {
      // Example data
      const data = [
        { tag: "Attention", behavior: "Very active" },
        { tag: "Reading", behavior: "Struggles identifying letters" },
        { tag: "Attention2", behavior: "Very active" },
        { tag: "Reading2", behavior: "Struggles identifying letters" },
        { tag: "Attention3", behavior: "Very active" },
        { tag: "Reading3", behavior: "Struggles identifying letters" },
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
          <div className="text-4xl font-bold border-r-2 pr-4">{student.name}</div>
          <div className="text-xl">Grade: {student.grade}</div>
          <div className="text-xl flex items-center">
            <span>Needs: </span>
            <div className="flex space-x-2 ml-2">
              {student.tags.map((tag, index) => (
                <span key={index} className="bg-gray-200 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <span className="ml-4">Teachers: </span>
            <div className="flex space-x-2 ml-2">
              {student.teachers.map((teacher, index) => (
                <span key={index} className="bg-gray-200 px-2 py-1 rounded">
                  {teacher}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <button className="text-white mr-4 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Profile</button>
          <button className="text-white px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Settings</button>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6 pt-24">


        <h1 className="text-3xl px-4 py-2 bg-gray-300 rounded font-bold mb-6">Tag Library</h1>

        <div className="bg-white rounded-lg shadow-md">
          {strategies.map((strategy, index) => (
            <div key={index} className="p-4 border-b last:border-b-0">
              <div className="text-xl font-bold mb-2">{strategy.tag}</div>
              <div className="bg-gray-100 p-4 rounded-lg">
              <div className="text-gray-600">{strategy.behavior}</div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>

  );
};

export default StudentProfile;