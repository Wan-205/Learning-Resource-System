
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!account || !password) {
      setError("Vui lòng nhập đầy đủ tài khoản và mật khẩu.");
      return;
    }

    // Dữ liệu đăng nhập tạm thời để kiểm tra giao diện
    const user = {
      id: 2,
      name: "Nguyễn Văn An",
      account: account,
      role: "ADMIN",
    };

    // Lưu thông tin người dùng thông qua AuthContext
    login(user);

    // Chuyển về trang chủ sau khi đăng nhập
    navigate("/");
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <img
                    src="/Logo_PTIT_University.png"
                    alt="Logo PTIT"
                    style={{ width: "75px" }}
                  />

                  <h3
                    className="fw-bold mt-3"
                    style={{ color: "#8f0000" }}
                  >
                    ĐĂNG NHẬP
                  </h3>

                  <p className="text-secondary">
                    Hệ thống học liệu PTIT
                  </p>
                </div>

                {error && (
                  <div className="alert alert-danger">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <label className="form-label fw-semibold">
                    Tài khoản
                  </label>

                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Mã sinh viên, email hoặc số điện thoại"
                    value={account}
                    onChange={(e) => {
                      setAccount(e.target.value);
                      setError("");
                    }}
                  />

                  <label className="form-label fw-semibold">
                    Mật khẩu
                  </label>

                  <input
                    type="password"
                    className="form-control mb-2"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                  />

                  <div className="text-end mb-4">
                    <Link
                      to="/forgot-password"
                      className="text-decoration-none"
                      style={{ color: "#8f0000" }}
                    >
                      Quên mật khẩu?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="btn text-white w-100 py-2"
                    style={{ backgroundColor: "#8f0000" }}
                  >
                    Đăng nhập
                  </button>
                </form>

                <p className="text-center mt-4 mb-0">
                  Chưa có tài khoản?{" "}
                  <Link
                    to="/register"
                    className="fw-semibold text-decoration-none"
                    style={{ color: "#8f0000" }}
                  >
                    Đăng ký ngay
                  </Link>
                </p>

                <div className="text-center mt-3">
                  <Link
                    to="/"
                    className="text-secondary text-decoration-none"
                  >
                    ← Về trang chủ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}