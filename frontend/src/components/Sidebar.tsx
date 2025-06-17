import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 h-full bg-gray-100 p-4 shadow-md">
      <ul className="space-y-4">
        <li className="font-semibold">Dashboard</li>
        <li>Patients</li>
        <li>Appointments</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
