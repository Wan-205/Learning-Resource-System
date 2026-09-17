
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { currentUser, logout, isAdmin } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navItems = [
    { label: "Trang chủ", path: "/" },
    { label: "Môn học", path: "/subjects" },
    { label: "Học liệu", path: "/materials" },
    { label: "Giới thiệu", path: "/about" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="/Logo_PTIT_University.png"
            alt="Logo PTIT"
            style={{ width: "55px" }}
            className="me-2"
          />

          <span className="fw-bold" style={{ color: "#8f0000" }}>
            HỌC LIỆU PTIT
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Mở menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "fw-bold" : ""}`
                  }
                  style={({ isActive }) => ({
                    color: isActive ? "#8f0000" : "#333",
                  })}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center gap-2 flex-wrap">
            {currentUser ? (
              <>
                <span className="text-secondary small">
                  Xin chào, {currentUser.name || currentUser.account}
                </span>

                {isAdmin && (
                  <>
                    <Link
                      to="/admin"
                      className="btn btn-outline-danger btn-sm"
                    >
                      Quản trị
                    </Link>

                    <span className="badge bg-danger">
                      ADMIN
                    </span>
                  </>
                )}

                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={handleLogout}
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="btn btn-outline-danger btn-sm"
                >
                  Đăng nhập
                </Link>

                <Link
                  to="/register"
                  className="btn btn-danger btn-sm"
                >
                  Đăng ký
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}