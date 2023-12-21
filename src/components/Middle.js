import React from 'react';
import Timesheet from './Timesheet';
import TaskManager from './TaskManager';
import LeaveManagement from './LeaveManagement';
import Integrations from './Integrations';
import AdminToolbar from './AdminToolbar';
import Payroll from './Payroll';

const Middle = ({ selectedComponent }) => {
  return (
    <div>
      {selectedComponent === 'Timesheet' && <Timesheet/>}
      {selectedComponent === 'TaskManager' && <TaskManager />}
      {selectedComponent === 'LeaveManagement' && <LeaveManagement/>}
      {selectedComponent === 'Integrations' && <Integrations/>}
      {selectedComponent === 'AdminToolbar' && <AdminToolbar/>}
      {selectedComponent === 'Payroll' && <Payroll/>}
    </div>
  );
};

export default Middle;
