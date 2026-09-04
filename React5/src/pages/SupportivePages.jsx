import React from "react";
import { useParams } from "react-router-dom";

const supportiveData = {
  "sign-in": {
    title: "Sign In",
    subtitle: "Sign in page",
  },
  "sign-up": {
    title: "Sign Up",
    subtitle: "Sign up page",
  },
  "forget-password": {
    title: "Forget Password",
    subtitle: "Forget password page",
  },
  "change-password": {
    title: "Change Password",
    subtitle: "Change password page",
  },
  "onboarding": {
    title: "Onboarding",
    subtitle: "Onboarding page",
  },
  "404-error": {
    title: "404 Error",
    subtitle: "Page not found",
  },
  "error": {
    title: "Error",
    subtitle: "Something went wrong",
  },
};

function SupportivePages() {

  const { type } = useParams();

  const data = supportiveData[type];

  if (!data) {
    return <p>Page not found</p>;
  }

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

export default SupportivePages;