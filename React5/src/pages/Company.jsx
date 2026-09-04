import React from "react";
import { useParams } from "react-router-dom";

const companyData = {
  "profile": { title: "Company Profile", subtitle: "Company profile related information" },
  "user-rules": { title: "User Rules", subtitle: "Rules and guidelines for users" },
  "career": { title: "Career", subtitle: "Career opportunities information" },
  "help-center": { title: "Help Center", subtitle: "Help and support information" },
  "contact-us": { title: "Contact Us", subtitle: "Contact information" },
};

function Company() {

  const { type } = useParams();
  const data = companyData[type];

  if (!data) return <p>Page not found</p>;

  return (
    <div className="dashboard-container">

      <div className="dashboard-heading">
        <div>
          <h2>{data.title}</h2>
          <p>{data.subtitle}</p>
        </div>
      </div>

      <div className="dashboard-card p-5">
        <h3>{data.title}</h3>
        <p>{data.title} content will appear here.</p>
      </div>

    </div>
  );
}

export default Company;