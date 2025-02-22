import dummyData from '../data/dummy-data.js'
import { useState } from "react";

export default function StudentProfile() {

    const student = {
        name: "John Doe",
        id: "12345",
        grade: "5th Grade",
        photo: "https://via.placeholder.com/150",
        tags: ["Reading Support", "Speech Therapy"],
        strategies: [{ id: 1, name: "Use visual schedules", tags: ["Organization"] }],
        staff: [
          { name: "Ms. Smith", role: "Special Ed Teacher", schedule: "MWF 10:00-11:00" },
          { name: "Mr. Brown", role: "Speech Therapist", schedule: "TTh 9:00-9:30" }
        ],
        iepSnapshot: "https://example.com/iep.pdf"
      };
    
      const [strategies, setStrategies] = useState(student.strategies);
      const [newStrategy, setNewStrategy] = useState("");
      const [tags, setTags] = useState("");
      const [open, setOpen] = useState(false);
    
      const addStrategy = () => {
        if (newStrategy.trim()) {
          setStrategies([...strategies, { id: Date.now(), name: newStrategy, tags: tags.split(",") }]);
          setNewStrategy("");
          setTags("");
          setOpen(false);
        }
      };
    
      const deleteStrategy = (id) => {
        setStrategies(strategies.filter((s) => s.id !== id));
      };
    
      return (
        <div className="p-6 space-y-6">
          <div className="flex items-center space-x-4">
            <img src={student.photo} alt="Student" className="w-24 h-24 rounded-full" />
            <div>
              <h1 className="text-2xl font-bold">{student.name}</h1>
              <p className="text-gray-500">ID: {student.id} | {student.grade}</p>
            </div>
          </div>
        </div>
      );
}