function StudentDetails({ student, onBack }) {
  if (!student) {
    return (
      <div className="card">
        <div className="card-body">
          <p>No student selected.</p>
          <button className="btn" onClick={onBack}>Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-header">
        <h2>Student Details</h2>
        <div />
      </div>

      <div className="card-body details">
        <p><b>Name:</b> {student.name}</p>
        <p><b>Section:</b> {student.section}</p>
        <p><b>Marks:</b> {student.marks}</p>
        <p><b>Grade:</b> {student.grade}</p>

        <div style={{ marginTop: 12 }}>
          <button className="btn" onClick={onBack}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default StudentDetails;
