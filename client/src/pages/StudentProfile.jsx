import React, { useState, useEffect } from 'react';
import "../data/dummy-data.js"
import dummyData, { getCollection } from '../data/dummy-data.js';
import { NavLink } from 'react-router';

export const StudentProfile = () => {
  const [student, setStudent] = useState({ name: '', grade: '', teachers:[], tags: ["None"] });
  const [strategies, setStrategies] = useState([]);


  useEffect(() => {
    // Fetch or define the students data here
    const fetchStudentData = async () => {
      // Example data
      const filteredData = {Name: "Zoe Martinez", Grade: "2nd Grade", studentTags: "Attention,Sensory-Seeking,Task Avoidance", allEducators: "Benjamin Rhodes,Isabella Monroe,Lauren McKinley"};
      setStudent(filteredData);

    };

    fetchStudentData();
  }, []);

  useEffect(() => {
    // Fetch or define the students data here
    const fetchStrategies = async () => {
      // Example data
      const filteredStrategies = [{studentTag: "Attention", studentBehavior: "Students may have difficulty staying focused, get easily distracted, or struggle to follow multi-step instructions"},{studentTag: "Task Avoidance", studentBehavior: "Students who procrastinate or avoid challenging activities"},{studentTag: "Sensory-Seeking", studentBehavior: "Students who actively seek out sensory stimulation, like constantly touching objects, spinning, loud vocalizations"},];
        setStrategies(filteredStrategies);


    };

    fetchStrategies();
  }, []);


  return (

    <div className="w-full">
      {/* Navigation Bar */}
      <div className="bg-gray-100 text-black p-10 flex justify-between items-center mb-8 w-full fixed top-0 left-0">
        <div className="flex items-center space-x-6">
          <div className="text-4xl font-bold border-r-2 pr-4">{student.Name}</div>
          <div className="text-l">Grade: {student.Grade}</div>
          <div className="text-l flex items-center">
            <span>Needs: </span>
            <div className="flex space-x-2 ml-2">
              {student.studentTags && student.studentTags.split(",").map(tag => (
                <span key={tag} className="bg-gray-200 px-2 py-1 rounded">
                  <NavLink to="/tags">
                  
                  {tag} 
                 
                  </NavLink>
                </span>
              ))}
            </div>
            <span className="ml-4">Teachers: </span>
            <div className="flex space-x-2 ml-2">
              {student.allEducators && student.allEducators.split(",").map((teacher, index) => (
                <span key={index} className="bg-gray-200 px-2 py-1 rounded max-w-20">
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
            
            <div>
            <NavLink to="/tags">
                {need.studentTag}
                </NavLink>
            </div>
            <div className="text-gray-600">{need.studentBehavior}</div>
          </div>
        ))}


        </div>
      </div>
    </div>

  );
};

export default StudentProfile;