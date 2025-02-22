import React, { useState, useEffect } from 'react';

export const HomePage = () => {
  const [students, setStudents] = useState([]);
  const [strategies, setStrategies] = useState([]);

  useEffect(() => {
    // Fetch or define the students data here
    const fetchStudents = async () => {
      // Example data
      const data = [
        { id: 1, name: 'John Doe', para: 'Nara Coldwater', issue: 'Reading'},
        { id: 2, name: 'Jane Smith', para: 'Jarred Vanhorn', issue: 'Focus' },
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
        { id: 1, strat: 'idk something', short_desc: 'this strategy helps the student read i guess <3'},
        { id: 2, strat: 'focusing????', short_desc: 'get good lmao'},
        // Add more students here
      ];
      setStrategies(data);
    };

    fetchStrategies();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">All Students</h1>

      <div className="bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-3 gap-4 p-4 font-medium text-gray-600 border-b">
          <div>Name</div>
          <div>Para</div>
          <div>Main Issue</div>
        </div>

        {students.map(student => (
          <div
            key={student.id}
            className="grid grid-cols-3 gap-4 p-4 hover:bg-gray-50 border-b last:border-b-0"
          >
            <div>{student.name}</div>
            <div className="text-gray-600">{student.para}</div>
            <div className="font-medium">{student.issue}</div>
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-bold mb-6">All Strategies</h1>

      <div className="bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-2 gap-4 p-4 font-medium text-gray-600 border-b">
          <div>Strategy</div>
          <div>Short Description</div>
        </div>

        {strategies.map(strategy => (
          <div
            key={strategy.id}
            className="grid grid-cols-2 gap-4 p-4 hover:bg-gray-50 border-b last:border-b-0"
          >
            <div>{strategy.strat}</div>
            <div className="text-gray-1000">{strategy.short_desc}</div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default HomePage;