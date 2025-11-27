import { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';

function App() {
  const [screen, setScreen] = useState('list');
  const [selected, setSelected] = useState(null);

  return (
    <div className="app">
      <main className="container">
        {screen === 'list' && (
          <StudentList
            onAdd={() => setScreen('add')}
            onEdit={(s) => { setSelected(s); setScreen('edit'); }}
            onView={(s) => { setSelected(s); setScreen('details'); }}
          />
        )}

        {screen === 'add' && (
          <StudentForm mode="add" onBack={() => setScreen('list')} />
        )}

        {screen === 'edit' && (
          <StudentForm mode="edit" student={selected} onBack={() => setScreen('list')} />
        )}

        {screen === 'details' && (
          <StudentDetails student={selected} onBack={() => setScreen('list')} />
        )}
      </main>
    </div>
  );
}

export default App;
