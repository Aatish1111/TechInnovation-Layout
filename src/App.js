// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timesheet from './components/Timesheet';
import TaskManager from './components/TaskManager';
import LeaveManagement from './components/LeaveManagement';
import Payroll from './components/Payroll';
import Integrations from './components/Integrations';
import AdminToolbar from './components/AdminToolbar';
import Middle from './components/Middle';

const App = () => {

    const [selectedComponent, setSelectedComponent] = useState(null);
  
    const handleComponentClick = (componentName) => {
      setSelectedComponent(componentName);
    };
  return (
    <div className="container-fluid mt-3">
      <div className="row ">
        {/* Vertical Left Div */}
        <div className="col-md-3">
          <div className="mb-3">
          <Timesheet onClick={() => handleComponentClick('Timesheet')} />
          </div>
          <div className="mb-3">
          <TaskManager onClick={() => handleComponentClick('TaskManager')} />
          </div>
          <div className="mb-3">
            <LeaveManagement onClick={() => handleComponentClick('LeaveManagement')}/>
          </div>
          <div className="mb-3">
            <Payroll onClick={() => handleComponentClick('Payroll')}/>
          </div>
          <div className="mb-3">
            <Integrations onClick={() => handleComponentClick('Integrations')}/>
          </div>
          <div className="mb-3">
            <AdminToolbar onClick={() => handleComponentClick('AdminToolbar')}/>
          </div>
        </div>

        {/* Middle Div */}
        <div className="col-md-6 mt-5 w-40" >
       <div>
       You had clicked on <span className='text-danger'><Middle selectedComponent={selectedComponent} /> </span>component
       </div>
        </div>

        {/* Vertical Right Div */}
        <div className="col-md-3">
          {/* Content for the vertical right div */}
        </div>
      </div>

      {/* Horizontal Top Div */}
      <div className="row mt-3">
        <div className="col">
          {/* Content for the horizontal top div */}
        </div>
      </div>

      {/* Horizontal Bottom Div */}
      <div className="row mt-3">
        <div className="col">
          {/* Content for the horizontal bottom div */}
        </div>
      </div>
    </div>
  );
};

export default App;
