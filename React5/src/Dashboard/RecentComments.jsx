import React, { useContext } from "react";

import { UserContext } from "../context/UserContext";

function RecentComments() {

  const { comments } = useContext(UserContext);

  return (
    <div className="dashboard-card comments-card">

      <h3>My Recent Comments</h3>

      {comments.map((comment, index) => (

        <div className="comment-item" key={index}>

          <img
            src={comment.image}
            alt={comment.name}
          />

          <div>

            <strong>{comment.name}</strong>

            <p>{comment.message}</p>

          </div>

          <i className="bi bi-chat-square-text"></i>

        </div>

      ))}

    </div>
  );
}

export default RecentComments;