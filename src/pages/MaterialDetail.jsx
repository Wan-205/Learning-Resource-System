import React from "react";
import { Link, useParams } from "react-router-dom";

export default function MaterialDetail() {
  const { id } = useParams();

  return (
    <div className="d-flex align-items-center justify-content-center text-center p-4" style={{ minHeight: "70vh", backgroundColor: "#f5f7fa" }}>
      <div>
        <div className="display-4 mb-3" aria-hidden="true">📄</div>
        <h1 className="h3 fw-bold">Chưa có dữ liệu học liệu</h1>
        <p className="text-secondary">Thông tin tài liệu {id} sẽ hiển thị sau khi kết nối nguồn dữ liệu.</p>
        <Link to="/materials" className="btn btn-danger">Quay lại kho học liệu</Link>
      </div>
    </div>
  );
}
