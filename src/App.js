// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timesheet from './components/Timesheet';
import TaskManager from './components/TaskManager';
import LeaveManagement from './components/LeaveManagement';
import Payroll from './components/Payroll';
import Integrations from './components/Integrations';
import AdminToolbar from './components/AdminToolbar';
import Middle from './components/Middle';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Vertical Left Div */}
        <div className="col-md-3">
          <div className="mb-3">
            <Timesheet />
          </div>
          <div className="mb-3">
            <TaskManager />
          </div>
          <div className="mb-3">
            <LeaveManagement />
          </div>
          <div className="mb-3">
            <Payroll />
          </div>
          <div className="mb-3">
            <Integrations />
          </div>
          <div className="mb-3">
            <AdminToolbar />
          </div>
        </div>

        {/* Middle Div */}
        <div className="col-md-6">
          {/* Your content in the middle div */}
          <Middle />
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
