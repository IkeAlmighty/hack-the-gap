import dummyData from '../data/dummy-data.js'
import { useState } from "react";

export default function StudentProfile() {

    const student = {
        Name: "John Doe",
        studentTags: ["Reading Support", "Speech Therapy"],
        notedWorkingStrategies: ["fidgets", "lots of breaks"],
        allEducators: ["Paraprofessional", "Speech Therapist"],
        uniqueScheduledSupports: ["speech therapy Tuesdays at 2pm", "resource room"]
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