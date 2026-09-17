
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    studentCode: "",
    fullName: "",
    email: "",
    phone: "",
    department: "",
    className: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.studentCode ||
      !form.fullName ||
      !form.email ||
      !form.phone ||
      !form.department ||
      !form.className ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    if (form.password.length < 8) {
      setError("Mật khẩu phải có ít nhất 8 ký tự.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Mật khẩu nhập lại không khớp.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Email không hợp lệ.");
      return;
    }

    if (!/^[0-9]{9,11}$/.test(form.phone)) {
      setError("Số điện thoại phải có từ 9 đến 11 chữ số.");
      return;
    }

    localStorage.setItem(
      "registeredUser",
      JSON.stringify({
        studentCode: form.studentCode,
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        department: form.department,
        className: form.className,
      })
    );

    alert("Đăng ký thành công! Vui lòng đăng nhập.");
    navigate("/login");
  };

  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
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
                    ĐĂNG KÝ TÀI KHOẢN
                  </h3>
                  <p className="text-secondary">
                    Dành cho sinh viên Học viện PTIT
                  </p>
                </div>

                {error && (
                  <div className="alert alert-danger">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Mã sinh viên *
                      </label>
                      <input
                        name="studentCode"
                        className="form-control"
                        placeholder="VD: B23DVCN105"
                        value={form.studentCode}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Họ và tên *
                      </label>
                      <input
                        name="fullName"
                        className="form-control"
                        placeholder="Nhập họ và tên"
                        value={form.fullName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Email/Gmail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="example@gmail.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        placeholder="Nhập số điện thoại"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Khoa/Viện *
                      </label>
                      <select
                        name="department"
                        className="form-select"
                        value={form.department}
                        onChange={handleChange}
                      >
                        <option value="">Chọn Khoa/Viện</option>
                        <option value="CNTT">
                          Khoa Công nghệ thông tin
                        </option>
                        <option value="DTVT">
                          Khoa Kỹ thuật Điện tử và Viễn thông
                        </option>
                        <option value="VT">
                          Khoa Viễn thông
                        </option>
                        <option value="KTBĐ">
                          Viện Kinh tế Bưu điện
                        </option>
                        <option value="ATTT">
                          Bộ môn An toàn thông tin
                        </option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Lớp *
                      </label>
                      <input
                        name="className"
                        className="form-control"
                        placeholder="VD: D23DVCN01_B"
                        value={form.className}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Mật khẩu *
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Ít nhất 8 ký tự"
                        value={form.password}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Nhập lại mật khẩu *
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        placeholder="Nhập lại mật khẩu"
                        value={form.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-check mt-4 mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      required
                      id="terms"
                    />
                    <label className="form-check-label" htmlFor="terms">
                      Tôi đồng ý với điều khoản sử dụng hệ thống.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn text-white w-100 py-2"
                    style={{ backgroundColor: "#8f0000" }}
                  >
                    Đăng ký tài khoản
                  </button>
                </form>

                <p className="text-center mt-4 mb-0">
                  Đã có tài khoản?{" "}
                  <Link
                    to="/login"
                    className="fw-semibold text-decoration-none"
                    style={{ color: "#8f0000" }}
                  >
                    Đăng nhập
                  </Link>
                </p>

                <div className="text-center mt-3">
                  <Link to="/" className="text-secondary text-decoration-none">
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