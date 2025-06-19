"use client"; 
import React, { useState } from "react";
import {
  UserCircle,
  Phone,
  Mail,
  CalendarClock,
  Star,
  Stethoscope,
  Users,
  HeartPulse,
  Clock3,
  ClipboardEdit
} from "lucide-react";

import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, ArcElement, BarElement, Tooltip, Legend);

export default function DoctorProfile() {
  const [notes, setNotes] = useState("");

  const patientData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Patients Treated",
        data: [50, 80, 65, 90, 120, 100],
        backgroundColor: "#4F46E5",
      },
    ],
  };

  const caseDistribution = {
    labels: ["General", "Cardiology", "Surgery", "Emergency"],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ["#60A5FA", "#34D399", "#FBBF24", "#F87171"],
      },
    ],
  };

  return (
    <div className="min-h-screen p-6 bg-white text-gray-800 font-sans">
      {/* Profile Card */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm flex flex-col md:flex-row gap-6 mb-8">
        <img
          src="https://source.unsplash.com/160x160/?doctor"
          alt="Doctor"
          className="w-32 h-32 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold">Dr. Aryan Mehta</h2>
          <p className="text-sm text-gray-500 mb-2">Cardiologist | MBBS, MD</p>
          <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
            <Phone className="w-4 h-4" /> +91 98765 43210
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700 mb-1">
            <Mail className="w-4 h-4" /> dr.aryan@hospital.com
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CalendarClock className="w-4 h-4" /> Next Shift: 20 June, 9:00 AM
          </div>
          <div className="mt-4 flex gap-2 flex-wrap">
            {["Cardiology", "Surgery", "ECG", "Critical Care", "Emergency"].map((skill, idx) => (
              <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-100 rounded-xl p-4 text-center">
          <Users className="mx-auto text-blue-500 mb-1" />
          <p className="text-sm text-gray-600">Total Patients</p>
          <p className="text-xl font-bold text-blue-600">1,240</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-4 text-center">
          <HeartPulse className="mx-auto text-pink-500 mb-1" />
          <p className="text-sm text-gray-600">Surgeries</p>
          <p className="text-xl font-bold text-pink-600">88</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-4 text-center">
          <Star className="mx-auto text-yellow-500 mb-1" />
          <p className="text-sm text-gray-600">Avg. Rating</p>
          <p className="text-xl font-bold text-yellow-600">4.8 ★</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-4 text-center">
          <Clock3 className="mx-auto text-green-500 mb-1" />
          <p className="text-sm text-gray-600">Experience</p>
          <p className="text-xl font-bold text-green-600">12 yrs</p>
        </div>
      </div>

      {/* Charts Section + Notes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2 bg-gray-50 p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Patients Treated (Monthly)</h2>
          <Bar data={patientData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
        </div>

        <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Case Distribution</h2>
          <Doughnut data={caseDistribution} />
        </div>

        <div className="md:col-span-3 bg-blue-50 p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <ClipboardEdit className="w-5 h-5 text-blue-500" /> Quick Notes
          </h2>
          <textarea
            rows={4}
            placeholder="Write down your thoughts or reminders..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full border border-blue-200 rounded-md p-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      </div>

      {/* Availability Note */}
      <div className="bg-green-50 p-4 rounded-xl shadow-sm">
        <p className="text-green-700 text-sm">
          ✅ Dr. Aryan is available for teleconsultation and walk-ins every weekday from 9:00 AM to 2:00 PM.
        </p>
      </div>
    </div>
  );
}
