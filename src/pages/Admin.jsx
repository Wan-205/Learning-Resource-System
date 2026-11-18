import React, { useState } from "react";
import { Link } from "react-router-dom";

const navigation = [
  { id: "overview", label: "Tổng quan", icon: "▦" },
  { id: "materials", label: "Quản lý học liệu", icon: "▤" },
  { id: "subjects", label: "Quản lý môn học", icon: "▧" },
  { id: "users", label: "Người dùng", icon: "♙" },
];

const colors = { ink: "#202b3c", muted: "#8791a1", border: "#edf0f4", red: "#a50000" };
const cardStyle = { border: `1px solid ${colors.border}`, borderRadius: 8, backgroundColor: "#fff", boxShadow: "0 2px 7px #18243805" };
function Admin() {
  const [activeSection, setActiveSection] = useState("overview");
  const activeNavigation = navigation.find((item) => item.id === activeSection);

  return (
    <div className="d-flex min-vh-100" style={{ backgroundColor: "#f7f8fb", color: colors.ink }}>
      <aside className="d-none d-md-flex flex-column p-3 text-white" style={{ width: 252, flex: "0 0 252px", minHeight: "100vh", backgroundColor: "#171d2a" }}>
        <Link to="/" className="d-flex align-items-center gap-2 px-2 pb-4 text-decoration-none text-white">
          <img src="/Logo_PTIT_University.png" alt="" style={{ width: 42, height: 42, objectFit: "contain", backgroundColor: "#fff", borderRadius: "50%", padding: 3 }} />
          <span className="d-flex flex-column gap-1">
            <strong style={{ fontSize: 13, letterSpacing: ".45px" }}>HỌC LIỆU PTIT</strong>
            <small style={{ color: "#9da6b6", fontSize: 9, letterSpacing: 1.2 }}>TRANG QUẢN TRỊ</small>
          </span>
        </Link>
        <div className="px-2 pt-2 pb-3 text-uppercase" style={{ color: "#777f91", fontSize: 10, fontWeight: 700, letterSpacing: 1.15 }}>Menu chính</div>
        <AdminNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <Link to="/" className="d-block mt-auto pt-3 border-top text-decoration-none" style={{ borderColor: "#303746 !important", color: "#aeb6c4", fontSize: 12 }}>← Về trang học liệu</Link>
      </aside>

      <main className="flex-grow-1" style={{ minWidth: 0 }}>
        <header className="d-flex align-items-center justify-content-between gap-3 px-3 px-lg-4 py-3 border-bottom bg-white" style={{ minHeight: 82, borderColor: "#ebedf1 !important" }}>
          <div>
            <div className="mb-1" style={{ color: "#929aaa", fontSize: 11 }}>Học liệu PTIT <span className="px-1">/</span> Quản trị</div>
            <h1 className="m-0 fw-bold" style={{ color: colors.ink, fontSize: 20 }}>{activeNavigation?.label || "Tổng quan"}</h1>
          </div>
          <Link to="/" className="text-decoration-none fw-semibold" style={{ color: colors.red, fontSize: 12, whiteSpace: "nowrap" }}>Trang chủ ↗</Link>
        </header>

        <div className="d-md-none p-2 bg-white border-bottom">
          <AdminNavigation activeSection={activeSection} setActiveSection={setActiveSection} horizontal />
        </div>

        <div className="mx-auto p-3 p-lg-4" style={{ maxWidth: 1500 }}>
          {activeSection === "overview" && <Overview />}
          {activeSection === "materials" && (
            <section>
              <SectionHeading title="Danh sách học liệu" description="Dữ liệu học liệu sẽ được tải từ máy chủ khi API được kết nối." />
              <div style={cardStyle}>
                <EmptyState message="Chưa có dữ liệu học liệu." />
              </div>
            </section>
          )}
          {activeSection === "subjects" && (
            <section>
              <SectionHeading title="Danh mục môn học" description="Danh sách môn học sẽ được tải từ máy chủ khi API được kết nối." />
              <div style={cardStyle}><EmptyState message="Chưa có dữ liệu môn học." /></div>
            </section>
          )}
          {activeSection === "users" && (
            <section>
              <SectionHeading title="Tài khoản người dùng" description="Danh sách người dùng sẽ được tải từ máy chủ khi API được kết nối." />
              <div style={cardStyle}><EmptyState message="Chưa có dữ liệu người dùng." /></div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

function AdminNavigation({ activeSection, setActiveSection, horizontal = false }) {
  return (
    <nav className={horizontal ? "d-flex gap-1 overflow-auto" : "d-grid gap-1"} aria-label="Điều hướng quản trị">
      {navigation.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`btn d-flex align-items-center gap-2 text-start ${horizontal ? "flex-shrink-0" : ""}`}
          style={{
            minHeight: 42,
            padding: "0 11px",
            color: activeSection === item.id ? "#fff" : horizontal ? "#596477" : "#b7bfcc",
            backgroundColor: activeSection === item.id ? colors.red : horizontal ? "#f7f8fb" : "transparent",
            border: 0,
            borderRadius: 7,
            fontSize: 12,
            whiteSpace: "nowrap",
          }}
          onClick={() => setActiveSection(item.id)}
        >
          <span aria-hidden="true" style={{ width: 20, textAlign: "center", fontSize: 16 }}>{item.icon}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

function SectionHeading({ title, description }) {
  return (
    <div className="mb-3">
      <h2 className="mb-1 fw-bold" style={{ color: colors.ink, fontSize: 19 }}>{title}</h2>
      <p className="mb-0" style={{ color: colors.muted, fontSize: 12 }}>{description}</p>
    </div>
  );
}

function Overview() {
  const sections = [
    { title: "Học liệu", description: "Chưa có dữ liệu học liệu." },
    { title: "Môn học", description: "Chưa có dữ liệu môn học." },
    { title: "Người dùng", description: "Chưa có dữ liệu người dùng." },
  ];

  return (
    <>
      <section className="mb-4">
        <div className="text-uppercase fw-bold mb-2" style={{ color: "#b15d5d", fontSize: 10, letterSpacing: 1.3 }}>Trung tâm điều hành</div>
        <h2 className="mb-2 fw-bold" style={{ color: colors.ink, fontSize: 22 }}>Quản trị hệ thống</h2>
        <p className="mb-0" style={{ color: colors.muted, fontSize: 12 }}>Nội dung sẽ hiển thị sau khi kết nối nguồn dữ liệu.</p>
      </section>
      <section className="row g-3">
        {sections.map((section) => (
          <div className="col-md-4" key={section.title}>
            <article className="h-100 p-4" style={cardStyle}>
              <h3 className="mb-2 fw-bold" style={{ color: "#283447", fontSize: 14 }}>{section.title}</h3>
              <p className="mb-0" style={{ color: colors.muted, fontSize: 11 }}>{section.description}</p>
            </article>
          </div>
        ))}
      </section>
      <div className="mt-3 p-3 rounded" style={{ color: "#6d7180", backgroundColor: "#fff8e9", fontSize: 11 }}>
        Chưa có API backend trong dự án. Trang quản trị hiện không lưu hay chỉnh sửa dữ liệu cục bộ.
      </div>
    </>
  );
}

function EmptyState({ message }) {
  return (
    <div className="text-center p-5">
      <div className="display-6 mb-2" aria-hidden="true">▤</div>
      <p className="mb-0" style={{ color: colors.muted, fontSize: 12 }}>{message}</p>
    </div>
  );
}

export default Admin;
