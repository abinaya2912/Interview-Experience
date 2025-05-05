import React, { useState, useEffect } from "react";

function ViewExperiences() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch("/api/get-experiences");
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    };
    fetchExperiences();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Interview Experiences</h2>
        {experiences.length === 0 ? (
          <p className="text-center text-gray-600">No experiences shared yet.</p>
        ) : (
          experiences.map((exp, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
              <h3 className="text-xl font-semibold">{exp.name} - {exp.companyName}</h3>
              <p><strong>Role:</strong> {exp.role}</p>
              <p><strong>Date:</strong> {exp.interviewDate}</p>
              <p><strong>Difficulty:</strong> {exp.difficultyLevel}</p>
              <p><strong>Rounds Cleared:</strong> {exp.clearedCount} / {exp.totalCount}</p>
              <p><strong>Status:</strong> {exp.status}</p>
              <div className="mt-3">
                {exp.descriptions.map((desc, i) => (
                  <div key={i} className="bg-gray-50 p-3 rounded mb-2">
                    <strong>Round {i + 1}:</strong>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ViewExperiences;
