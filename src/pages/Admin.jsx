
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Admin() {
  const { currentUser, isAdmin } = useAuth();

  if (!currentUser || !isAdmin) {
    return (
      <div className="container py-5 text-center">
        <h3 className="text-danger">Không có quyền truy cập</h3>
        <p>Bạn cần đăng nhập bằng tài khoản quản trị.</p>
        <Link to="/" className="btn btn-outline-danger">
          Về trang chủ
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h2 className="fw-bold" style={{ color: "#8f0000" }}>
        Trang quản trị
      </h2>

      <p className="text-secondary">
        Xin chào, {currentUser.name}
      </p>

      <div className="row g-4 mt-3">
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5>Quản lý học liệu</h5>
              <p className="text-secondary">
                Thêm, sửa và xóa học liệu.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5>Quản lý người dùng</h5>
              <p className="text-secondary">
                Theo dõi tài khoản người dùng.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5>Thống kê</h5>
              <p className="text-secondary">
                Theo dõi số lượt tải học liệu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}