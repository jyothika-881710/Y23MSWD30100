import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Students from './components/Students';
import Faculty from './components/Faculty';
import Timetable from './components/Timetable';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Header from './components/Header';




function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <div className="App">
      <Header>
      
      </Header>
      <nav style={{ display: 'flex', gap: '20px', justifyContent: 'left' }}>
  <Button label="Students" onClick={() => setSelectedComponent('students')} />
  <Button label="Faculty" onClick={() => setSelectedComponent('faculty')} />
  <Button label="Timetable" onClick={() => setSelectedComponent('timetable')} />
  <Button label="Courses" onClick={() => setSelectedComponent('courses')} />
</nav>

      <main>
        {selectedComponent === 'students' && <Students />}
        {selectedComponent === 'faculty' && <Faculty />}
        {selectedComponent === 'timetable' && <Timetable />}
        {selectedComponent === 'courses' && <Courses />}
      </main>
      <Footer />
    </div>
  );
}

export default App;