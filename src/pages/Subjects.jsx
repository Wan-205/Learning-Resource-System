import React from "react";

export default function Subjects() {
  return (
    <div className="bg-light min-vh-100">
      <section className="bg-white border-bottom">
        <div className="container py-5">
          <span className="badge bg-danger mb-3">HỌC LIỆU PTIT</span>
          <h1 className="fw-bold mb-2">Danh mục môn học</h1>
          <p className="text-secondary mb-0">Tra cứu các môn học và học liệu được cung cấp trong hệ thống.</p>
        </div>
      </section>

      <section className="container py-4">
        <div className="card border-0 shadow-sm">
          <div className="card-body text-center py-5">
            <div className="display-5 mb-3" aria-hidden="true">📚</div>
            <h2 className="h5 fw-bold">Chưa có dữ liệu môn học</h2>
            <p className="text-secondary mb-0">Danh sách môn học sẽ hiển thị sau khi kết nối nguồn dữ liệu.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
