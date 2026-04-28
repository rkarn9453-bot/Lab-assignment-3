import { useState } from 'react';

const AddStudentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = () => {
    if (name && score) {
      onAdd(name, score);
      setName(''); setScore('');
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <span><span className="dot"></span> Register Student</span>
        <span>NEW ENTRY</span>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="STUDENT NAME" style={{flex: 2, background: 'transparent', border: '1px solid #3d1c71', color: 'white', padding: '10px'}} />
        <input type="number" value={score} onChange={(e) => setScore(e.target.value)} placeholder="SCORE" style={{flex: 1, background: 'transparent', border: '1px solid #3d1c71', color: 'white', padding: '10px'}} />
        <button onClick={handleSubmit} style={{background: 'transparent', border: '1px solid #bc13fe', color: '#bc13fe', cursor: 'pointer', padding: '0 20px'}}>+ ADD</button>
      </div>
    </div>
  );
};
export default AddStudentForm;