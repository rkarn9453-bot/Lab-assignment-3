import { useState, useEffect } from 'react';

const StudentRow = ({ student, index, onUpdate }) => {
  const [editScore, setEditScore] = useState(student.score);

  useEffect(() => {
  
  }, [student.score]);

  const isFail = student.score <= 39;

  return (
    <tr className={isFail ? 'fail-row' : ''}>
      <td className="name-col">{student.name}</td>
      <td className="score-col">{student.score}</td>
      <td>
        <span className="status-badge" style={{ 
          borderColor: isFail ? '#ff3131' : '#39ff14',
          color: isFail ? '#ff3131' : '#39ff14'
        }}>
          ● {isFail ? 'FAIL' : 'PASS'}
        </span>
      </td>
      <td>
        <div className="update-container">
          <input 
            type="number" 
            className="update-input"
            value={editScore} 
            onChange={(e) => setEditScore(e.target.value)} 
          />
          <button className="save-btn" onClick={() => onUpdate(index, editScore)}>
            Save
          </button>
        </div>
      </td>
    </tr>
  );
};

export default StudentRow;