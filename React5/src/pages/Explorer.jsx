import React, { useEffect, useState, useMemo, useRef } from "react";
import { getFiles, searchFilesAPI, uploadFile, updateFile, deleteFile } from "../services/explorerService";
import UploadFileModal from "../components/Explorer/UploadFileModal";
import "./Explorer.css";

const fileIcons = {
  pdf: "bi-file-earmark-pdf text-danger",
  pptx: "bi-file-earmark-ppt text-warning",
  docx: "bi-file-earmark-word text-primary",
  png: "bi-file-earmark-image text-success",
};

function Explorer() {

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [editingFile, setEditingFile] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);

  const debounceRef = useRef(null);

  // ---------- FETCH (initial load) ----------
  const loadFiles = async () => {
    try {
      setLoading(true);
      const data = await getFiles();
      setFiles(data);
      setError("");
    } catch (err) {
      setError("Files load nahi ho paayi. Internet connection check karo.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFiles();
  }, []);

  // ---------- SEARCH VIA API (debounced) ----------
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      try {
        setLoading(true);
        const data = searchTerm.trim()
          ? await searchFilesAPI(searchTerm.trim())
          : await getFiles();
        setFiles(data);
        setError("");
      } catch (err) {
        setError("Search fail ho gaya, dobara try karo.");
      } finally {
        setLoading(false);
      }
    }, 400); // 400ms debounce — har keystroke pe API call nahi hoga

    return () => clearTimeout(debounceRef.current);
  }, [searchTerm]);

  // ---------- CLIENT-SIDE CATEGORY FILTER + SORT ----------
  const visibleFiles = useMemo(() => {
    let result = [...files];

    if (category === "Uploaded by me") {
      result = result.filter(f => f.uploadedBy === "me");
    } else if (category === "Shared") {
      result = result.filter(f => f.uploadedBy === "others");
    } else if (category === "Favorite") {
      result = result.filter(f => f.isFavorite);
    }

    if (sortField) {
      result.sort((a, b) => {
        const valA = (a[sortField] || "").toString().toLowerCase();
        const valB = (b[sortField] || "").toString().toLowerCase();
        if (valA < valB) return sortOrder === "asc" ? -1 : 1;
        if (valA > valB) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [files, category, sortField, sortOrder]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  // ---------- UPLOAD (CREATE) ----------
  const handleUpload = async (payload) => {
    try {
      const newFile = await uploadFile(payload);
      setFiles(prev => [newFile, ...prev]);
      setShowUploadModal(false);
    } catch (err) {
      alert("Upload fail ho gaya, dobara try karo.");
    }
  };

  // ---------- UPDATE ----------
  const handleUpdate = async (payload) => {
    try {
      const updated = await updateFile(editingFile.id, editingFile, payload);
      setFiles(prev => prev.map(f => (f.id === updated.id ? updated : f)));
      setEditingFile(null);
    } catch (err) {
      alert("Update fail ho gaya, dobara try karo.");
    }
  };

  const toggleShareStatus = async (file) => {
    const newStatus = file.shareStatus === "Active" ? "Inactive" : "Active";
    try {
      const updated = await updateFile(file.id, file, { shareStatus: newStatus });
      setFiles(prev => prev.map(f => (f.id === updated.id ? updated : f)));
    } catch {
      alert("Status update fail ho gaya.");
    }
    setOpenMenuId(null);
  };

  // ---------- DELETE ----------
  const handleDelete = async (id) => {
    if (!window.confirm("Kya aap sach me is file ko delete karna chahte ho?")) return;
    try {
      await deleteFile(id);
      setFiles(prev => prev.filter(f => f.id !== id));
    } catch {
      alert("Delete fail ho gaya.");
    }
    setOpenMenuId(null);
  };

  return (
    <div className="dashboard-container">

      {/* TOP BAR */}
      <div className="explorer-topbar">
        <div>
          <h2>File Explorer</h2>
          <p>Manage and share your files</p>
        </div>

        <button
          className="upload-file-btn"
          onClick={() => setShowUploadModal(true)}
        >
          <i className="bi bi-plus-lg"></i> Upload File
        </button>
      </div>

      {/* TABLE CARD */}
      <div className="dashboard-card explorer-card">

        <div className="explorer-header">
          <div>
            <h4>Shared with me</h4>
            <p>Sharpen details on trending products</p>
          </div>

          <div className="explorer-controls">

            <select
              className="category-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>All Categories</option>
              <option>Shared</option>
              <option>Uploaded by me</option>
              <option>Favorite</option>
            </select>

            <div className="search-input">
              <i className="bi bi-search"></i>
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

          </div>
        </div>

        {loading && <p className="p-3">Loading files...</p>}
        {error && <p className="p-3 text-danger">{error}</p>}

        {!loading && !error && (
          <table className="explorer-table">
            <thead>
              <tr>
                <th onClick={() => handleSort("fileName")}>
                  File Name <i className="bi bi-arrow-down-up"></i>
                </th>
                <th onClick={() => handleSort("shareStatus")}>
                  Share Status <i className="bi bi-arrow-down-up"></i>
                </th>
                <th>File size</th>
                <th onClick={() => handleSort("uploaderName")}>
                  Uploaded by <i className="bi bi-arrow-down-up"></i>
                </th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {visibleFiles.map(file => (
                <tr key={file.id}>

                  <td>
                    <div className="file-name-cell">
                      <i className={`bi ${fileIcons[file.fileType] || "bi-file-earmark"} file-icon`}></i>
                      <div>
                        <div className="file-name">{file.fileName}</div>
                        <div className="uploaded-sub">
                          {file.isFavorite && <span className="heart">♥</span>}
                          Uploaded by {file.uploaderName}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span className={`status-badge ${file.shareStatus === "Active" ? "active" : "inactive"}`}>
                      {file.shareStatus}
                    </span>
                  </td>

                  <td>{file.fileSize}</td>

                  <td>{file.uploaderName}</td>

                  <td className="action-cell">
                    <i
                      className="bi bi-three-dots"
                      onClick={() =>
                        setOpenMenuId(openMenuId === file.id ? null : file.id)
                      }
                    ></i>

                    {openMenuId === file.id && (
                      <div className="action-menu">
                        <div onClick={() => { setEditingFile(file); setOpenMenuId(null); }}>
                          <i className="bi bi-pencil"></i> Edit
                        </div>
                        <div onClick={() => toggleShareStatus(file)}>
                          <i className="bi bi-arrow-repeat"></i>
                          {file.shareStatus === "Active" ? " Mark Inactive" : " Mark Active"}
                        </div>
                        <div className="danger" onClick={() => handleDelete(file.id)}>
                          <i className="bi bi-trash"></i> Delete
                        </div>
                      </div>
                    )}
                  </td>

                </tr>
              ))}

              {visibleFiles.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center p-4 text-secondary">
                    Koi file nahi mili.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}

        {!loading && !error && (
          <div className="explorer-footer">
            Showing {visibleFiles.length} of {files.length} entries
          </div>
        )}

      </div>

      {showUploadModal && (
        <UploadFileModal
          mode="upload"
          onClose={() => setShowUploadModal(false)}
          onSubmit={handleUpload}
        />
      )}

      {editingFile && (
        <UploadFileModal
          mode="edit"
          initialData={editingFile}
          onClose={() => setEditingFile(null)}
          onSubmit={handleUpdate}
        />
      )}

    </div>
  );
}

export default Explorer;