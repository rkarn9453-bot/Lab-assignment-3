import { useState } from 'react';
import Header from './components/Header';
import AddStudentForm from './components/AddStudentForm';
import StudentTable from './components/StudentTable';
import './App.css';

function App() {
  const [students, setStudents] = useState([
{ id: 1, name: 'Alice', score: 85 },
{ id: 2, name: 'Bob', score: 72 },
{ id: 3, name: 'Charlie', score: 34 },
{ id: 4, name: 'alex', score: 38 },

  ]);

  const addStudent = (name, score) => {
    setStudents([...students, { name, score: Number(score) }]);
  };

  // This function updates the main state so the average changes
  const updateStudent = (index, newScore) => {
    const updatedList = [...students];
    updatedList[index] = { ...updatedList[index], score: Number(newScore) };
    setStudents(updatedList);
  };

  const total = students.length;
  const passed = students.filter(s => s.score >= 40).length;
  const avg = total > 0 
    ? Math.round(students.reduce((acc, curr) => acc + curr.score, 0) / total) 
    : 0;

  return (
    <div className="container">
      <Header />
      <AddStudentForm onAdd={addStudent} />

      <div className="stats-grid">
        <div className="stat-box"><p>TOTAL</p><h2>{total}</h2></div>
        <div className="stat-box"><p>PASSED</p><h2>{passed}</h2></div>
        <div className="stat-box"><p>AVG SCORE</p><h2>{avg}</h2></div>
      </div>

      <StudentTable students={students} onUpdate={updateStudent} />
    </div>
  );
}

export default App;