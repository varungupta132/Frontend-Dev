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

        <input className="input" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="input" placeholder="Section" value={section} onChange={e=>setSection(e.target.value)} />
        <input className="input" placeholder="Marks" value={marks} onChange={e=>setMarks(e.target.value)} />
        <input className="input" placeholder="Grade" value={grade} onChange={e=>setGrade(e.target.value)} />

        <div className="form-actions">
          <button className="btn btn-primary" type="submit">Save</button>
          <button className="btn" type="button" onClick={onBack}>Back</button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
