import React from "react";

export default function Materials() {
  return (
    <div style={{ backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      <section style={{ background: "linear-gradient(135deg, #8f0000 0%, #b30000 60%, #d00000 100%)", color: "white" }}>
        <div className="container py-5">
          <div className="text-uppercase fw-semibold mb-2" style={{ fontSize: 14, letterSpacing: 1 }}>Kho học liệu PTIT</div>
          <h1 className="fw-bold mb-3">Học liệu</h1>
          <p className="mb-0" style={{ opacity: 0.9 }}>Tìm kiếm và truy cập tài liệu học tập theo từng môn học.</p>
        </div>
      </section>

      <main className="container py-4">
        <section className="card border-0 shadow-sm">
          <div className="card-body text-center py-5">
            <div className="display-5 mb-3" aria-hidden="true">📂</div>
            <h2 className="h5 fw-bold">Chưa có dữ liệu học liệu</h2>
            <p className="text-secondary mb-0">Danh sách tài liệu sẽ hiển thị sau khi kết nối nguồn dữ liệu.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
