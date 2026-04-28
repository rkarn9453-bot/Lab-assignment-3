import StudentRow from './StudentRow';

const StudentTable = ({ students, onUpdate }) => (
  <div className="card">
    <div className="card-header">
      <span>STUDENT RECORDS</span>
      <span>{students.length} Entries</span>
    </div>
    <table className="score-table">
      <thead>
        <tr>
          <th style={{ width: '30%' }}>Name</th>
          <th style={{ width: '15%' }}>Score</th>
          <th style={{ width: '25%' }}>Status</th>
          <th style={{ width: '30%' }}>Update</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <StudentRow 
            key={index} 
            index={index} 
            student={student} 
            onUpdate={onUpdate} 
          />
        ))}
      </tbody>
    </table>
  </div>
);

export default StudentTable;