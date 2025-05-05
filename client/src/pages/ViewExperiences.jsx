// ViewExperiences.jsx
import React, { useState, useEffect } from "react";

function ViewExperiences() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const response = await fetch("/api/get-experiences");
      const data = await response.json();
      setExperiences(data);
    };
    fetchExperiences();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Interview Experiences</h2>
        {experiences.length === 0 ? (
          <p>No experiences added yet.</p>
        ) : (
          <ul>
            {experiences.map((exp, index) => (
              <li key={index} className="mb-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold">{exp.companyName}</h3>
                <p><strong>Role:</strong> {exp.role}</p>
                <p><strong>Interview Date:</strong> {new Date(exp.interviewDate).toLocaleDateString()}</p>
                <p><strong>Difficulty:</strong> {exp.difficultyLevel}</p>
                <p><strong>Outcome:</strong> {exp.status}</p>
                <p><strong>Total Rounds:</strong> {exp.totalCount}</p>
                <p><strong>Rounds Cleared:</strong> {exp.clearedCount}</p>
                <p><strong>Details:</strong></p>
                <ul>
                  {exp.descriptions.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ViewExperiences;
