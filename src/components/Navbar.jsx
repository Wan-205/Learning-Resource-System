import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    {
      path: "/",
      label: "Trang chủ",
      end: true,
    },
    {
      path: "/subjects",
      label: "Môn học",
    },
    {
      path: "/materials",
      label: "Học liệu",
    },
    {
      path: "/about",
      label: "Giới thiệu",
    },
  ];

  return (
    <header className="bg-white border-bottom">
      {/* Dòng trên */}
      <div
        style={{
          backgroundColor: "#8f0000",
          height: "4px",
        }}
      />

      <div className="container">
        <div
          className="d-flex align-items-center justify-content-between"
          style={{
            minHeight: "88px",
          }}
        >

          {/* LOGO + TÊN */}
          <Link
            to="/"
            className="d-flex align-items-center text-decoration-none"
          >
            <img
              src="/Logo_PTIT_University.png"
              alt="Logo PTIT"
              style={{
                width: "58px",
                height: "58px",
                objectFit: "contain",
              }}
            />

            <div className="ms-3">
              <div
                className="fw-bold"
                style={{
                  color: "#8f0000",
                  fontSize: "19px",
                  lineHeight: "1.2",
                }}
              >
                HỌC LIỆU PTIT
              </div>

              <div
                className="text-secondary"
                style={{
                  fontSize: "12px",
                }}
              >
                Học viện Công nghệ Bưu chính Viễn thông
              </div>
            </div>
          </Link>


          {/* MENU */}
          <nav className="d-none d-lg-flex align-items-center gap-1">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `text-decoration-none fw-semibold px-3 py-2 rounded ${
                    isActive
                      ? "text-white"
                      : "text-dark"
                  }`
                }
                style={({ isActive }) => ({
                  backgroundColor: isActive
                    ? "#a50000"
                    : "transparent",
                  transition: "0.2s",
                })}
              >
                {item.label}
              </NavLink>
            ))}

          </nav>


          {/* TÀI KHOẢN */}
          <div className="d-flex align-items-center gap-2">

            <Link
              to="/login"
              className="btn btn-outline-danger"
            >
              Đăng nhập
            </Link>

            <Link
              to="/register"
              className="btn text-white"
              style={{
                backgroundColor: "#a50000",
              }}
            >
              Đăng ký
            </Link>

          </div>

        </div>
      </div>

      {/* Đường đỏ dưới navbar */}
      <div
        style={{
          height: "1px",
          backgroundColor: "#eeeeee",
        }}
      />
    </header>
  );
}