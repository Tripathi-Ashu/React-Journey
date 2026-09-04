import React from "react";
import { useParams } from "react-router-dom";

const profileData = {
  professional: {
    title: "Professional Profile",
    subtitle: "Professional related information",
  },
  social: {
    title: "Social Profile",
    subtitle: "Social profile related information",
  },
  analytical: {
    title: "Analytical Profile",
    subtitle: "Analytical related information",
  },
};

function Profile() {

  const { type } = useParams(); // URL se "professional"/"social"/"analytical" milega

  const data = profileData[type];

  if (!data) {
    return <p>Profile not found</p>;
  }

  return (
    <div className="dashboard-container">

      <div className="dashboard-heading">

        <div>
          <h2>{data.title}</h2>
          <p>{data.subtitle}</p>
        </div>

        <div className="dashboard-actions">

          <button>
            19/05/2025 - 25/06/2025
          </button>

          <i className="bi bi-calendar3"></i>
          <i className="bi bi-filter"></i>
          <i className="bi bi-life-preserver"></i>

        </div>

      </div>

      <div className="dashboard-card p-5">
        <h3>{data.title}</h3>
        <p>{data.title} content will appear here.</p>
      </div>

    </div>
  );
}

export default Profile;