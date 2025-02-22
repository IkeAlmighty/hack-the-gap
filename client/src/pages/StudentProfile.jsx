import dummyData from '../dummy-data.js'
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tag, Plus, Trash } from "lucide-react";

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
          
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">Tags</h2>
              <div className="flex space-x-2 mt-2">
                {student.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">Strategies</h2>
                <Button onClick={() => setOpen(true)}><Plus className="w-4 h-4 mr-2" /> Add Strategy</Button>
              </div>
              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Tags</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {strategies.map((strategy) => (
                    <TableRow key={strategy.id}>
                      <TableCell>{strategy.name}</TableCell>
                      <TableCell>
                        {strategy.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-green-200 text-green-800 rounded-full text-xs mr-1">{tag}</span>
                        ))}
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon" onClick={() => deleteStrategy(strategy.id)}>
                          <Trash className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">Staff & Schedule</h2>
              <ul className="mt-2 space-y-2">
                {student.staff.map((staff) => (
                  <li key={staff.name} className="p-2 border rounded-md">
                    <strong>{staff.name}</strong> - {staff.role} ({staff.schedule})
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">IEP Snapshot</h2>
              <iframe src={student.iepSnapshot} className="w-full h-64 mt-2 border" title="IEP Snapshot"></iframe>
            </CardContent>
          </Card>
    
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Strategy</DialogTitle>
              </DialogHeader>
              <Input placeholder="Strategy name" value={newStrategy} onChange={(e) => setNewStrategy(e.target.value)} className="mt-2" />
              <Input placeholder="Tags (comma-separated)" value={tags} onChange={(e) => setTags(e.target.value)} className="mt-2" />
              <Button className="mt-4" onClick={addStrategy}>Add</Button>
            </DialogContent>
          </Dialog>
        </div>
      );
}