import React, { useState } from "react";
import "./UploadFileModal.css";

function UploadFileModal({ mode = "upload", initialData = null, onClose, onSubmit }) {

  const [fileName, setFileName] = useState(initialData?.fileName || "");
  const [shareWith, setShareWith] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      if (!fileName) setFileName(file.name);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      if (!fileName) setFileName(file.name);
    }
  };

  const handleSubmit = () => {
    if (!fileName.trim()) {
      setError("File name is required");
      return;
    }

    const payload = mode === "upload"
      ? {
          fileName,
          fileType: fileName.split(".").pop() || "file",
          isFavorite: false,
          uploadedBy: "me",
          uploaderName: "You",
          shareStatus: "Active",
          fileSize: selectedFile
            ? `${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB`
            : "0 MB",
        }
      : { fileName };

    onSubmit(payload);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        <h4 className="modal-title">
          {mode === "upload" ? "Create New Email" : "Update File"}
        </h4>

        {mode === "upload" && (
          <div
            className="drop-zone"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => document.getElementById("fileInput").click()}
          >
            <i className="bi bi-cloud-upload"></i>
            <p>Drag and Drop or Click here to upload</p>

            <input
              id="fileInput"
              type="file"
              hidden
              onChange={handleFileSelect}
            />

            {selectedFile && (
              <small className="selected-file-name">
                {selectedFile.name}
              </small>
            )}
          </div>
        )}

        <div className="modal-field">
          <label>File Name</label>
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="Enter file name"
          />
        </div>

        {mode === "upload" && (
          <>
            <small className="modal-hint">
              Upload only .jpeg, .png, .mp4, .mpeg4 file format max. file size 6MB
            </small>

            <div className="modal-field">
              <label>Share with</label>
              <input
                type="email"
                value={shareWith}
                onChange={(e) => setShareWith(e.target.value)}
                placeholder="contact@testmail.com"
              />
            </div>
          </>
        )}

        {error && <p className="modal-error">{error}</p>}

        <div className="modal-actions">
          <button className="btn-discard" onClick={onClose}>
            <i className="bi bi-trash me-1"></i> Discard
          </button>

          <button className="btn-send" onClick={handleSubmit}>
            <i className="bi bi-send me-1"></i>
            {mode === "upload" ? "Send" : "Update"}
          </button>
        </div>

      </div>

    </div>
  );
}

export default UploadFileModal;