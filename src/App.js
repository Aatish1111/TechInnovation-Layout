// App.js
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timesheet from './components/Timesheet';
import TaskManager from './components/TaskManager';
import LeaveManagement from './components/LeaveManagement';
import Payroll from './components/Payroll';
import Integrations from './components/Integrations';
import AdminToolbar from './components/AdminToolbar';
import Middle from './components/Middle';
import Footer from './components/Footer'; // Assuming you have a Footer component

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div className="container-fluid">
      {/* Top Section */}
      <div className="row">
        <div className="col">
          {/* Content for the top section */}
          <h1>The Top Component</h1>
        </div>
      </div>

      {/* Middle Section */}
      <div className="row">
        {/* Left Div */}
        <div className="col-md-3">
          <div className="mb-3">
            <Timesheet onClick={() => handleComponentClick('Timesheet')} />
          </div>
          <div className="mb-3">
            <TaskManager onClick={() => handleComponentClick('TaskManager')} />
          </div>
          <div className="mb-3">
            <LeaveManagement onClick={() => handleComponentClick('LeaveManagement')} />
          </div>
          <div className="mb-3">
            <Payroll onClick={() => handleComponentClick('Payroll')} />
          </div>
          <div className="mb-3">
            <Integrations onClick={() => handleComponentClick('Integrations')} />
          </div>
          <div className="mb-3">
            <AdminToolbar onClick={() => handleComponentClick('AdminToolbar')} />
          </div>
        </div>

        {/* Middle Div */}
        <div className="col-md-6">
          <div>
            You had clicked on <span className='text-danger'><Middle selectedComponent={selectedComponent} /></span> component
          </div>
        </div>

        {/* Right Div */}
        <div className="col-md-3">
          {/* Content for the right div */}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="row">
        <div className="col">
          {/* Content for the bottom section */}
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
