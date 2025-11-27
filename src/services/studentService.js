const API = 'http://localhost:3000/students';

export async function getStudents() {
  const res = await fetch(API);
  return res.json();
}

export async function addStudent(data) {
  await fetch(API, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data) });
}

export async function updateStudent(id, data) {
  await fetch(`${API}/${id}`, { method: 'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) });
}

export async function deleteStudent(id) {
  await fetch(`${API}/${id}`, { method: 'DELETE' });
}
