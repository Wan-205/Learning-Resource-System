
import { Link, useState } from "react";

export default function ForgotPassword() {
  const [account, setAccount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!account.trim()) return;

    setSubmitted(true);
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
                    QUÊN MẬT KHẨU
                  </h3>
                  <p className="text-secondary">
                    Khôi phục tài khoản sinh viên
                  </p>
                </div>

                {submitted ? (
                  <div>
                    <div className="alert alert-info">
                      Yêu cầu khôi phục đã được ghi nhận.
                      <br />
                      Chức năng gửi OTP và cấp lại mật khẩu
                      sẽ được kết nối với backend.
                    </div>

                    <Link
                      to="/login"
                      className="btn text-white w-100"
                      style={{ backgroundColor: "#8f0000" }}
                    >
                      Quay lại đăng nhập
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <label className="form-label fw-semibold">
                      Email, số điện thoại hoặc mã sinh viên
                    </label>

                    <input
                      className="form-control mb-4"
                      placeholder="Nhập thông tin tài khoản"
                      value={account}
                      onChange={(e) => setAccount(e.target.value)}
                      required
                    />

                    <button
                      type="submit"
                      className="btn text-white w-100 py-2"
                      style={{ backgroundColor: "#8f0000" }}
                    >
                      Tiếp tục
                    </button>
                  </form>
                )}

                <div className="text-center mt-4">
                  <Link
                    to="/login"
                    className="text-secondary text-decoration-none"
                  >
                    ← Quay lại đăng nhập
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