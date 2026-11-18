import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Mật khẩu xác nhận không khớp.");
      return;
    }

    setMessage("Đăng ký chưa khả dụng vì hệ thống xác thực chưa được kết nối.");
  }

  return (
    <main className="container-fluid min-vh-100 d-flex align-items-center py-5" style={{ backgroundColor: "#f5f7fa" }}>
      <div className="row g-0 mx-auto overflow-hidden rounded-4 shadow bg-white" style={{ width: "min(100%, 1000px)" }}>
        <section
          className="col-lg-5 d-none d-lg-flex flex-column justify-content-between p-5 text-white"
          style={{
            minHeight: 650,
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
            <div className="text-uppercase fw-semibold mb-3" style={{ letterSpacing: 1.5, fontSize: 12, opacity: 0.8 }}>Cộng đồng học tập</div>
            <h1 className="fw-bold mb-3" style={{ fontSize: 38, lineHeight: 1.2 }}>Cùng nhau chia sẻ tri thức.</h1>
            <p className="mb-0" style={{ maxWidth: 340, lineHeight: 1.8, opacity: 0.82 }}>
              Tạo tài khoản để khám phá và đóng góp học liệu cho cộng đồng PTIT.
            </p>
          </div>

          <small style={{ opacity: 0.7 }}>© 2026 Học liệu PTIT</small>
        </section>

        <section className="col-12 col-lg-7 d-flex align-items-center justify-content-center p-4 p-md-5">
          <div className="w-100" style={{ maxWidth: 420 }}>
            <Link to="/" className="d-inline-flex d-lg-none align-items-center gap-2 mb-4 text-decoration-none" style={{ color: "#8f0000" }}>
              <img src="/Logo_PTIT_University.png" alt="Logo PTIT" style={{ width: 40, height: 40, objectFit: "contain" }} />
              <strong>HỌC LIỆU PTIT</strong>
            </Link>

            <div className="mb-4">
              <span className="badge rounded-pill mb-3 px-3 py-2" style={{ color: "#a50000", backgroundColor: "#fff0f0" }}>TÀI KHOẢN PTIT</span>
              <h2 className="fw-bold mb-2" style={{ color: "#202b3c" }}>Tạo tài khoản</h2>
              <p className="text-secondary mb-0">Điền thông tin để tham gia kho học liệu PTIT.</p>
            </div>

            {message && (
              <div className={`alert ${message.includes("không khớp") ? "alert-danger" : "alert-warning"} py-2`} role="status" style={{ fontSize: 13 }}>
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="register-name" className="form-label fw-semibold">Họ và tên</label>
                <input
                  id="register-name"
                  className="form-control"
                  type="text"
                  autoComplete="name"
                  placeholder="Nhập họ và tên"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="register-email" className="form-label fw-semibold">Email</label>
                <input
                  id="register-email"
                  className="form-control"
                  type="email"
                  autoComplete="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="register-student-id" className="form-label fw-semibold">Mã sinh viên <span className="text-secondary fw-normal">(không bắt buộc)</span></label>
                <input
                  id="register-student-id"
                  className="form-control"
                  type="text"
                  autoComplete="off"
                  placeholder="Nhập mã sinh viên nếu có"
                  value={studentId}
                  onChange={(event) => setStudentId(event.target.value)}
                />
              </div>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label htmlFor="register-password" className="form-label fw-semibold">Mật khẩu</label>
                  <input
                    id="register-password"
                    className="form-control"
                    type="password"
                    autoComplete="new-password"
                    minLength={8}
                    placeholder="Tối thiểu 8 ký tự"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="register-confirm-password" className="form-label fw-semibold">Xác nhận mật khẩu</label>
                  <input
                    id="register-confirm-password"
                    className="form-control"
                    type="password"
                    autoComplete="new-password"
                    minLength={8}
                    placeholder="Nhập lại mật khẩu"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-check mb-4">
                <input id="register-terms" className="form-check-input" type="checkbox" required />
                <label htmlFor="register-terms" className="form-check-label text-secondary small">
                  Tôi đồng ý với các điều khoản sử dụng của hệ thống.
                </label>
              </div>

              <button type="submit" className="btn btn-lg w-100 text-white fw-semibold" style={{ backgroundColor: "#a50000" }}>
                Tạo tài khoản
              </button>
            </form>

            <p className="text-center text-secondary mt-4 mb-0">
              Đã có tài khoản?{" "}
              <Link to="/login" className="fw-semibold text-decoration-none" style={{ color: "#a50000" }}>Đăng nhập</Link>
            </p>

            <p className="text-center text-secondary mt-3 mb-0" style={{ fontSize: 11 }}>
              Đăng ký sẽ khả dụng sau khi hệ thống xác thực được cấu hình.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
