import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Đăng nhập chưa khả dụng vì hệ thống xác thực chưa được kết nối.");
  }

  return (
    <main className="container-fluid min-vh-100 d-flex align-items-center py-5" style={{ backgroundColor: "#f5f7fa" }}>
      <div className="row g-0 mx-auto overflow-hidden rounded-4 shadow bg-white" style={{ width: "min(100%, 960px)" }}>
        <section
          className="col-lg-5 d-none d-lg-flex flex-column justify-content-between p-5 text-white"
          style={{
            minHeight: 570,
            background: "linear-gradient(145deg, #790000 0%, #a50000 55%, #c62121 100%)",
          }}
        >
          <Link to="/" className="d-flex align-items-center gap-3 text-white text-decoration-none">
            <img src="/Logo_PTIT_University.png" alt="Logo PTIT" style={{ width: 52, height: 52, objectFit: "contain", borderRadius: "50%", backgroundColor: "#fff", padding: 3 }} />
            <span>
              <strong className="d-block" style={{ letterSpacing: ".7px" }}>HỌC LIỆU PTIT</strong>
              <small style={{ opacity: 0.8 }}>Học viện Công nghệ Bưu chính Viễn thông</small>
            </span>
          </Link>

          <div className="py-5">
            <div className="text-uppercase fw-semibold mb-3" style={{ letterSpacing: 1.5, fontSize: 12, opacity: 0.8 }}>Chào mừng trở lại</div>
            <h1 className="fw-bold mb-3" style={{ fontSize: 38, lineHeight: 1.2 }}>Tri thức trong tầm tay.</h1>
            <p className="mb-0" style={{ maxWidth: 330, lineHeight: 1.8, opacity: 0.82 }}>
              Đăng nhập để tiếp tục khám phá và chia sẻ học liệu cùng cộng đồng PTIT.
            </p>
          </div>

          <small style={{ opacity: 0.7 }}>© 2026 Học liệu PTIT</small>
        </section>

        <section className="col-12 col-lg-7 d-flex align-items-center justify-content-center p-4 p-md-5">
          <div className="w-100" style={{ maxWidth: 390 }}>
            <Link to="/" className="d-inline-flex d-lg-none align-items-center gap-2 mb-4 text-decoration-none" style={{ color: "#8f0000" }}>
              <img src="/Logo_PTIT_University.png" alt="Logo PTIT" style={{ width: 40, height: 40, objectFit: "contain" }} />
              <strong>HỌC LIỆU PTIT</strong>
            </Link>

            <div className="mb-4">
              <span className="badge rounded-pill mb-3 px-3 py-2" style={{ color: "#a50000", backgroundColor: "#fff0f0" }}>TÀI KHOẢN PTIT</span>
              <h2 className="fw-bold mb-2" style={{ color: "#202b3c" }}>Đăng nhập</h2>
              <p className="text-secondary mb-0">Nhập thông tin tài khoản của bạn để tiếp tục.</p>
            </div>

            {message && (
              <div className="alert alert-warning py-2" role="status" style={{ fontSize: 13 }}>
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="login-email" className="form-label fw-semibold">Email hoặc mã sinh viên</label>
                <input
                  id="login-email"
                  className="form-control form-control-lg"
                  type="text"
                  autoComplete="username"
                  placeholder="Nhập email hoặc mã sinh viên"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="login-password" className="form-label fw-semibold">Mật khẩu</label>
                <input
                  id="login-password"
                  className="form-control form-control-lg"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
              </div>

              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="form-check">
                  <input id="remember-me" className="form-check-input" type="checkbox" />
                  <label htmlFor="remember-me" className="form-check-label text-secondary small">Ghi nhớ đăng nhập</label>
                </div>
                <span className="small text-secondary">Quên mật khẩu?</span>
              </div>

              <button type="submit" className="btn btn-lg w-100 text-white fw-semibold" style={{ backgroundColor: "#a50000" }}>
                Đăng nhập
              </button>
            </form>

            <div className="text-center mt-4">
              <Link to="/" className="small text-decoration-none" style={{ color: "#a50000" }}>← Quay lại trang chủ</Link>
            </div>

            <p className="text-center text-secondary mt-4 mb-0" style={{ fontSize: 11 }}>
              Đăng nhập sẽ khả dụng sau khi hệ thống xác thực được cấu hình.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
