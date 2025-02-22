import React, { useState, useEffect } from 'react';
import "../data/dummy-data.js"
import dummyData, { getCollection } from '../data/dummy-data.js';

export const StudentProfile = () => {
  const [student, setStudent] = useState({ name: '', grade: '', teachers:[], tags: ["None"] });
  const [strategies, setStrategies] = useState([]);


  useEffect(() => {
    // Fetch or define the students data here
    const fetchStudentData = async () => {
      // Example data
      const data = await getCollection("studentAccounts")

      const filteredData = data.filter(o => o.Name === 'Zoe Martinez');
      setStudent(filteredData);
    };

    fetchStudentData();
  }, []);

  useEffect(() => {
    // Fetch or define the students data here
    const fetchStrategies = async () => {
      // Example data
      if(student.studentTags.length > 0){
        const strategiesData = await getCollection("strategyTools");
        const filteredStrategies = strategiesData.filter(strategy =>
          student.studentTags.includes(strategy.studentTag)
        );
        setStrategies(filteredStrategies);
      }

    };

    fetchStrategies();
  }, []);


  return (

    <div className="w-full">
      {/* Navigation Bar */}
      <div className="bg-gray-100 text-black p-10 flex justify-between items-center mb-8 w-full fixed top-0 left-0">
        <div className="flex items-center space-x-6">
          <div className="text-4xl font-bold border-r-2 pr-4">{student.Name}</div>
          <div className="text-xl">Grade: {student.Grade}</div>
          <div className="text-xl flex items-center">
            <span>Needs: </span>
            <div className="flex space-x-2 ml-2">
              {student.studentTags && student.studentTags.split(",").map(tag => (
                <span key={tag} className="bg-gray-200 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <span className="ml-4">Teachers: </span>
            <div className="flex space-x-2 ml-2">
              {student.teachers && student.allEducators.split(",").map((teacher, index) => (
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
        {strategies.map(need => (
          <div
            key={need.studentTag}
            className="grid grid-cols-2 gap-4 p-4 hover:bg-gray-50 border-b last:border-b-0"
          >
            <div>{need.studentTag}</div>
            <div className="text-gray-600">{need.studentBehavior}</div>
          </div>
        ))}


        </div>
      </div>
    </div>

  );
};

export default StudentProfile;