import { useState } from 'react';
import { addStudent, updateStudent } from '../services/studentService';

function StudentForm({ mode, student, onBack }) {
  const [name, setName] = useState(student?.name || '');
  const [section, setSection] = useState(student?.section || '');
  const [marks, setMarks] = useState(student?.marks || '');
  const [grade, setGrade] = useState(student?.grade || '');

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { name, section, marks, grade };

    if (mode === 'add') {
      await addStudent(data);
      alert('Added');
    } else {
      await updateStudent(student.id, data);
      alert('Updated');
    }
    onBack();
  }

  return (
    <div className="card">
      <form className="form" onSubmit={handleSubmit}>
        <div className="card-header">
          <h2>{mode === 'add' ? 'Add Student' : 'Edit Student'}</h2>
          <div />
        </div>

        <label>
          <span style={{display:'block',fontSize:12,color:'var(--muted)',marginBottom:6}}>Name</span>
          <input id="student-name" className="input" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} required />
        </label>

        <label>
          <span style={{display:'block',fontSize:12,color:'var(--muted)',marginBottom:6}}>Section</span>
          <input id="student-section" className="input" placeholder="Section" value={section} onChange={e=>setSection(e.target.value)} />
        </label>

        <label>
          <span style={{display:'block',fontSize:12,color:'var(--muted)',marginBottom:6}}>Marks</span>
          <input id="student-marks" className="input" type="number" min="0" max="100" placeholder="Marks" value={marks} onChange={e=>setMarks(e.target.value)} />
        </label>

        <label>
          <span style={{display:'block',fontSize:12,color:'var(--muted)',marginBottom:6}}>Grade</span>
          <input id="student-grade" className="input" placeholder="Grade" value={grade} onChange={e=>setGrade(e.target.value)} />
        </label>

        <div className="form-actions">
          <button className="btn btn-primary" type="submit">Save</button>
          <button className="btn" type="button" onClick={onBack}>Back</button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
