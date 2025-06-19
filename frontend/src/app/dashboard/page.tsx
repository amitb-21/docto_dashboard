'use client';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
  UserPlus, CalendarDays, Bell, FileText, HeartPulse, PlusCircle, Stethoscope, DollarSign, X, Check
} from 'lucide-react';

export default function DoctorDashboard() {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState([
    { id: 1, name: "John Doe", time: "10:00 AM", reason: "Fever", completed: false },
    { id: 2, name: "Jane Smith", time: "11:30 AM", reason: "Headache", completed: true },
    { id: 3, name: "Alice Johnson", time: "1:00 PM", reason: "Consultation", completed: false },
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, text: "Review lab results", completed: false },
    { id: 2, text: "Approve pharmacy request", completed: false }
  ]);
  const [taskInput, setTaskInput] = useState("");

  const toggleAppt = (id: number) => {
    setAppointments(prev => prev.map(a => a.id === id ? { ...a, completed: !a.completed } : a));
  };

  const addTask = () => {
    if (!taskInput.trim()) return;
    setTasks(prev => [...prev, { id: Date.now(), text: taskInput, completed: false }]);
    setTaskInput("");
  };

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: number) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-white px-6 py-6 text-gray-800 font-sans">
      {/* Header & Stats Section with Calendar + Buttons */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Left Column: Welcome + Stats */}
        <div className="lg:col-span-2">
          <div className="mb-4">
            <h1 className="text-3xl font-semibold">Welcome back</h1>
            <p className="text-gray-500 mt-1">Here’s what’s happening today</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-xl text-center shadow-sm">
              <p className="text-xs text-gray-500">Today's Patients</p>
              <p className="text-xl font-bold text-blue-600">12</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl text-center shadow-sm">
              <p className="text-xs text-gray-500">Completed Appointments</p>
              <p className="text-xl font-bold text-green-600">7</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl text-center shadow-sm">
              <p className="text-xs text-gray-500">New Patients</p>
              <p className="text-xl font-bold text-purple-600">3</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl text-center shadow-sm">
              <p className="text-xs text-gray-500">Surgeries Scheduled</p>
              <p className="text-xl font-bold text-pink-600">2</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl text-center shadow-sm">
              <p className="text-xs text-gray-500">Revenue Today</p>
              <p className="text-xl font-bold text-yellow-600">₹32,500</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl text-center shadow-sm">
              <p className="text-xs text-gray-500">Critical Cases</p>
              <p className="text-xl font-bold text-red-600">1</p>
            </div>
          </div>
        </div>
        

        {/* Right Column: Calendar + Buttons */}
        <div className="space-y-2">
          <div className="transform scale-90 origin-top-right">
            <Calendar
              onChange={setDate}
              value={date}
              className="rounded-md shadow-md w-full text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              <UserPlus className="w-4 h-4" />
              New Patient
            </button>

            <button className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
              <FileText className="w-4 h-4" />
              Generate Prescription
            </button>
          </div>
        </div>
      </div>

      {/* Appointments + Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Appointments Table */}
        <div className="col-span-2 bg-gray-50 p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Today's Appointments</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-2">Patient</th>
                <th>Time</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(appt => (
                <tr key={appt.id} className="border-b last:border-none">
                  <td className="py-2">{appt.name}</td>
                  <td>{appt.time}</td>
                  <td>{appt.reason}</td>
                  <td>
                    <button
                      onClick={() => toggleAppt(appt.id)}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        appt.completed ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {appt.completed ? "Completed" : "Pending"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Alerts Section */}
        <div className="bg-yellow-50 rounded-xl shadow-sm p-4">
          <div className="flex items-center gap-2 mb-3">
            <Bell className="w-5 h-5 text-yellow-500" />
            <h2 className="text-md font-semibold">Alerts & Notifications</h2>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="bg-yellow-100 p-2 rounded">🧪 Blood reports for Jane Smith ready for review.</li>
            <li className="bg-blue-100 p-2 rounded">💬 Dr. Ankit sent you a referral note.</li>
            <li className="bg-red-100 p-2 rounded">❗ System update scheduled at 6:00 PM.</li>
          </ul>
        </div>
      </div>

      {/* To-do List */}
      <div className="bg-gray-50 p-4 rounded-xl shadow-sm mb-6">
        <h2 className="text-lg font-semibold mb-4">Today's Tasks</h2>
        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 p-2 border rounded-md text-sm"
            placeholder="Add a task..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <ul className="space-y-2 text-sm">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-white rounded-md p-2 border"
            >
              <span
                onClick={() => toggleTask(task.id)}
                className={`cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
              >
                {task.text}
              </span>
              <div className="flex gap-2">
                <button onClick={() => toggleTask(task.id)} className="text-green-600 hover:text-green-800">
                  <Check size={16} />
                </button>
                <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
                  <X size={16} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
