import { useState } from 'react';
import { getStudents, deleteStudent } from '../services/studentService';

function StudentList({ onAdd, onEdit, onView }) {
  const [students, setStudents] = useState([]);

  async function load() {
    const data = await getStudents();
    setStudents(data);
  }

  async function remove(id) {
    await deleteStudent(id);
    alert('Deleted');
    // optionally reload
    setStudents(prev => prev.filter(p => p.id !== id));
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2>Student List</h2>
        <div className="actions">
          <button className="btn" onClick={load}>Load Students</button>
          <button className="btn btn-primary" onClick={onAdd}>Add Student</button>
        </div>
      </div>

      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Section</th>
              <th scope="col">Marks</th>
              <th scope="col">Grade</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.section}</td>
                <td>{s.marks}</td>
                <td>{s.grade}</td>
                <td>
                  <button className="btn btn-sm" onClick={() => onEdit(s)}>Edit</button>
                  <button className="btn btn-sm" onClick={() => remove(s.id)}>Delete</button>
                  <button className="btn btn-sm" onClick={() => onView(s)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
