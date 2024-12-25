import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function UpcomingEvents() {
  // Static academic calendar data for session 2024-25
  const academicCalendar = [
    {
      id: 1,
      details: "Registration of Courses for All Programmes for Jan-June 2025",
      from: "11 January 2025 (Saturday)",
      to: "14 January 2025 (Tuesday)",
    },
    {
      id: 2,
      details: "Commencement of Classes Even Semester (2024-2025) for All Programmes",
      from: "15 January 2025 (Wednesday)",
      to: "",
    },
    {
      id: 3,
      details: "Submission of Mid-term Attendance up to 05 March 2025",
      from: "07 March 2025 (Friday)",
      to: "12:00 Noon",
    },
    {
      id: 4,
      details: "Minor Test and Aptitude Test (Continuous Evaluations)",
      from: "06 March 2025 (Thursday)",
      to: "12 March 2025 (Wednesday)",
    },
    {
      id: 5,
      details: "Technovation Event",
      from: "25 April 2025 (Friday)",
      to: "",
    },
    {
      id: 6,
      details: "Semester Ends",
      from: "08 May 2025 (Thursday)",
      to: "",
    },
    {
      id: 7,
      details: "Major Tests (Offline)",
      from: "13 May 2025 (Tuesday)",
      to: "23 May 2025 (Friday)",
    },
    {
      id: 8,
      details: "Examination Activities",
      from: "13 May 2025 (Tuesday)",
      to: "13 June 2025 (Friday)",
    },
    {
      id: 9,
      details: "Display of Semester Result",
      from: "13 June 2025 (Friday)",
      to: "",
    },
  ];

  // Static holidays list for session 2024-25
  const holidays = [
    { id: 1, name: "Republic Day", date: "26 Jan 2025 (Sunday)", days: 1 },
    { id: 2, name: "Maha Shivratri", date: "26 Feb 2025 (Wednesday)", days: 1 },
    { id: 3, name: "Holi", date: "13 Mar 2025 (Thursday) to 15 Mar 2025 (Saturday)", days: 3 },
    { id: 4, name: "Id Ul Fitr", date: "31 Mar 2025 (Monday)", days: 1 },
    { id: 5, name: "Good Friday", date: "18 Apr 2025 (Friday)", days: 1 },
  ];

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-28">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            General Academic Calendar <span className="text-pink-500">for Session 2024-25</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Here’s a detailed list of important academic events for the upcoming session.
          </p>
        </div>

        {/* Academic Calendar Events List */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {academicCalendar.map((event) => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl duration-300">
              <h3 className="text-2xl font-semibold text-pink-500">{event.details}</h3>
              <p className="mt-4 text-lg text-gray-700">From: {event.from}</p>
              <p className="mt-2 text-lg text-gray-700">To: {event.to || "Ongoing"}</p>
            </div>
          ))}
        </div>

        {/* Holidays List */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-500">List of Holidays</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {holidays.map((holiday) => (
              <div key={holiday.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl duration-300">
                <h3 className="text-2xl font-semibold text-pink-500">{holiday.name}</h3>
                <p className="mt-4 text-lg text-gray-700">Date: {holiday.date}</p>
                <p className="mt-2 text-lg text-gray-700">Duration: {holiday.days} day(s)</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            For more details, please visit the official college website.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UpcomingEvents;
