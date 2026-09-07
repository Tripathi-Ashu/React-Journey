import React from "react";
import "./ProfileDropdown.css";

function ProfileDropdown({ isOpen, onClose, user, onLogout }) {

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop — kahin bhi bahar click karo toh band ho jaye */}
      <div className="profile-dropdown-backdrop" onClick={onClose}></div>

      <div className="profile-dropdown-card">

        {/* Top section — photo, naam, country */}
        <div className="profile-dropdown-top">

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWKLUwXP-IKv2EBZcU_x5CXTJoo5_JaKqFHlZEcpN9WA&s=10"
            alt="User"
            className="profile-dropdown-avatar"
          />

          <div>
            <h5 className="mb-0">
              {user?.name || "Guest"}
            </h5>
            <small className="text-secondary">
              🇺🇸 {user?.email || "Not signed in"}
            </small>
          </div>

        </div>

        {/* Menu items */}
        <a href="/dashboard" className="profile-dropdown-item" onClick={onClose}>
          <i className="bi bi-grid"></i>
          <span>My Dashboard</span>
        </a>

        <a href="#" className="profile-dropdown-item">
          <i className="bi bi-currency-dollar"></i>
          <span>Earning</span>
        </a>

        <a href="#" className="profile-dropdown-item">
          <i className="bi bi-gift"></i>
          <span>Subscription</span>
          <span className="profile-dropdown-badge">Upgrade</span>
        </a>

        <a href="#" className="profile-dropdown-item">
          <i className="bi bi-file-text"></i>
          <span>Statement</span>
        </a>

        <a href="#" className="profile-dropdown-item">
          <i className="bi bi-translate"></i>
          <span>Language</span>
          <span className="profile-dropdown-sub">EN - English</span>
        </a>

        <a href="#" className="profile-dropdown-item">
          <i className="bi bi-gear"></i>
          <span>Account Setting</span>
        </a>

        <hr className="profile-dropdown-divider" />

        <a
          href="#"
          className="profile-dropdown-item profile-dropdown-logout"
          onClick={(e) => {
            e.preventDefault();
            onLogout();
          }}
        >
          <i className="bi bi-box-arrow-right"></i>
          <span>Logout</span>
        </a>

      </div>
    </>
  );
}

export default ProfileDropdown;