// AddExperience.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddExperience() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    role: "",
    interviewDate: "",
    difficultyLevel: "",
    totalCount: "",
    clearedCount: "",
    descriptions: [],
    status: "",
  });

  const navigate = useNavigate();

  // Handle form data change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle description input change dynamically (for each count)
  const handleDescriptionChange = (e, index) => {
    const { value } = e.target;
    const newDescriptions = [...formData.descriptions];
    newDescriptions[index] = value;
    setFormData((prev) => ({
      ...prev,
      descriptions: newDescriptions,
    }));
  };

  // Add a new count description field dynamically
  const addCountDescription = () => {
    setFormData((prev) => ({
      ...prev,
      descriptions: [...prev.descriptions, ""],
    }));
  };

  // Handle form submission (save the data to DB)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/add-experience", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        // Redirect to the view experiences page after adding
        navigate("/explore");
      } else {
        alert("Failed to add experience. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Unlock Your Interview Experience to Help Others</h2>
        {!isFormVisible ? (
          <div>
            <p className="text-lg mb-4">
              Share your valuable insights from your interview experience. Help others understand the process and gain useful tips.
            </p>
            <button
              onClick={() => setIsFormVisible(true)}
              className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition"
            >
              Add Your Experience
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Person's Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold">Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold">Interview Date</label>
              <input
                type="date"
                name="interviewDate"
                value={formData.interviewDate}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold">Difficulty Level</label>
              <select
                name="difficultyLevel"
                value={formData.difficultyLevel}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border rounded-lg"
                required
              >
                <option value="">Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold">Total Number of Rounds</label>
              <input
                type="number"
                name="totalCount"
                value={formData.totalCount}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border rounded-lg"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold">Number of Rounds Cleared</label>
              <input
                type="number"
                name="clearedCount"
                value={formData.clearedCount}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border rounded-lg"
                required
              />
            </div>

            {formData.descriptions.map((desc, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-semibold">
                  Description for Round {index + 1}
                </label>
                <textarea
                  name={`description-${index}`}
                  value={desc}
                  onChange={(e) => handleDescriptionChange(e, index)}
                  className="w-full p-3 mt-2 border rounded-lg"
                  placeholder="Write questions or experience details here"
                  required
                />
              </div>
            ))}

            <button
              type="button"
              onClick={addCountDescription}
              className="text-blue-600 hover:text-blue-700"
            >
              Add Round Description
            </button>

            <div className="mb-4">
              <label className="block text-sm font-semibold">Interview Outcome</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border rounded-lg"
                required
              >
                <option value="">Select Status</option>
                <option value="Placed">Placed</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition"
            >
              Submit Experience
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AddExperience;
