import React, { useContext } from "react";

import { UserContext } from "../context/UserContext";

function TopUsers() {

  const { topUsers } = useContext(UserContext);

  return (
    <div className="top-users">

      <h3>Top users</h3>

      <div className="row g-4">

        {topUsers.map((user, index) => (

          <div
            className="col-xl-3 col-lg-6 col-md-6"
            key={index}
          >

            <div className="user-card">

              <img
                src={user.image}
                alt={user.name}
              />

              <h4>{user.name}</h4>

              <p>{user.location}</p>

              <div className="user-stats">

                <div>
                  <strong>{user.task}</strong>
                  <span>Task</span>
                </div>

                <div>
                  <strong>{user.earning}</strong>
                  <span>Earning</span>
                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TopUsers;