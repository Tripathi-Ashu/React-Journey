import React, { useContext } from "react";

import { UserContext } from "../context/UserContext";

function ProfileCard() {

  const { profile } = useContext(UserContext);

  return (
    <div className="dashboard-card profile-card">

      <div className="profile-heading">

        <h3>Profile</h3>

        <i className="bi bi-pencil"></i>

      </div>

      <div className="profile-image">

        <img
          src={profile.image}
          alt={profile.name}
        />

      </div>

      <h2>{profile.name}</h2>

      <p>{profile.country}</p>


      <div className="profile-stats">

        <div>
          <strong>{profile.orders}</strong>
          <span>Orders</span>
        </div>

        <div>
          <strong>{profile.revenue}</strong>
          <span>Revenue</span>
        </div>

        <div>
          <strong>{profile.leads}</strong>
          <span>Leads</span>
        </div>

      </div>

    </div>
  );
}

export default ProfileCard;