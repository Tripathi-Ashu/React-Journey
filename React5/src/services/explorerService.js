const BASE_URL = "https://dummyjson.com";


function mapProductToFile(product, index = 0) {
  const fileTypes = ["pdf", "docx", "pptx", "png"];

  return {
    id: product.id,
    fileName: product.title,
    fileType: fileTypes[(product.id ?? index) % fileTypes.length],
    isFavorite: (product.rating || 0) >= 4.5,
    uploadedBy: product.id % 2 === 0 ? "me" : "others",
    uploaderName: product.brand || "Unknown",
    shareStatus: product.stock > 0 ? "Active" : "Inactive",
    fileSize: `${(product.price || 1).toFixed(2)} MB`,
  };
}

export async function getFiles() {
  const res = await fetch(`${BASE_URL}/products?limit=12`);
  if (!res.ok) throw new Error("Failed to fetch files");
  const data = await res.json();
  return data.products.map(mapProductToFile);
}

export async function searchFilesAPI(query) {
  const res = await fetch(`${BASE_URL}/products/search?q=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error("Search failed");
  const data = await res.json();
  return data.products.map(mapProductToFile);
}


export async function uploadFile(fileData) {
  const res = await fetch(`${BASE_URL}/products/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: fileData.fileName }),
  });
  if (!res.ok) throw new Error("Failed to upload file");
  const created = await res.json();

 
  return {
    id: created.id,
    fileName: fileData.fileName,
    fileType: fileData.fileType || "pdf",
    isFavorite: false,
    uploadedBy: "me",
    uploaderName: "You",
    shareStatus: "Active",
    fileSize: fileData.fileSize || "1.00 MB",
  };
}


export async function updateFile(id, existingFile, updates) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: updates.fileName || existingFile.fileName }),
  });
  if (!res.ok) throw new Error("Failed to update file");
  await res.json();

  return { ...existingFile, ...updates };
}


export async function deleteFile(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete file");
  return true;
}