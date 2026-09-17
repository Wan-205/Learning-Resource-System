import { Link, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Subjects from "./pages/Subjects";
import Materials from "./pages/Materials";
import MaterialDetail from "./pages/MaterialDetail";
import About from "./pages/About";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Admin from "./pages/Admin";

// Trang chủ
function Home() {
  const materials = [
    {
      id: 2,
      title: "Giáo trình Lập trình hướng đối tượng",
      subject: "Lập trình hướng đối tượng",
      type: "PDF",
      uploader: "Nguyễn Văn An",
      date: "12/09/2026",
      downloads: 25,
    },
    {
      id: 3,
      title: "Bài giảng Lập trình hướng đối tượng",
      subject: "Lập trình hướng đối tượng",
      type: "PDF",
      uploader: "Trần Thị Bình",
      date: "11/09/2026",
      downloads: 18,
    },
    {
      id: 4,
      title: "Đề cương Cơ sở dữ liệu",
      subject: "Cơ sở dữ liệu",
      type: "DOCX",
      uploader: "Lê Văn Cường",
      date: "10/09/2026",
      downloads: 32,
    },
    {
      id: 5,
      title: "Bài giảng Cơ sở dữ liệu",
      subject: "Cơ sở dữ liệu",
      type: "PDF",
      uploader: "Phạm Minh Đức",
      date: "09/09/2026",
      downloads: 20,
    },
    {
      id: 6,
      title: "Bài tập SQL Server",
      subject: "Cơ sở dữ liệu",
      type: "PDF",
      uploader: "Hoàng Thu Hà",
      date: "08/09/2026",
      downloads: 15,
    },
    {
      id: 7,
      title: "Giáo trình Cơ sở dữ liệu phân tán",
      subject: "Cơ sở dữ liệu phân tán",
      type: "PDF",
      uploader: "Đỗ Minh Hoàng",
      date: "07/09/2026",
      downloads: 28,
    },
  ];

  return (
    <>
      {/* Banner giới thiệu */}
      <section
        className="py-5 text-white"
        style={{
          background:
            "linear-gradient(rgba(0, 46, 95, 0.75), rgba(0, 46, 95, 0.75)), url('/ptit.webp') center/cover",
          minHeight: "380px",
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="fw-bold display-5">
                Học liệu Học viện Công nghệ Bưu chính Viễn thông
              </h1>

              <p className="lead mt-3">
                Hệ thống lưu trữ và phân phối học liệu hỗ trợ sinh viên
                tìm kiếm, học tập và chia sẻ tài liệu.
              </p>

              <Link
                to="/materials"
                className="btn btn-danger btn-lg mt-3"
              >
                Khám phá học liệu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nội dung chính */}
      <main className="container py-5">
        {/* Thanh tìm kiếm */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="text-center fw-bold mb-3">
                  Tìm kiếm học liệu
                </h4>

                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập tên tài liệu hoặc môn học..."
                  />

                  <Link
                    to="/materials"
                    className="btn btn-primary"
                  >
                    Tìm kiếm
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tiêu đề */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-primary mb-0">
            Học liệu mới nhất
          </h2>

          <Link
            to="/materials"
            className="btn btn-outline-primary"
          >
            Xem tất cả
          </Link>
        </div>

        {/* Danh sách học liệu */}
        <div className="row g-4">
          {materials.map((material) => (
            <div className="col-md-6 col-lg-4" key={material.id}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge bg-danger">
                      {material.type}
                    </span>

                    <small className="text-muted">
                      {material.date}
                    </small>
                  </div>

                  <h5 className="card-title fw-bold">
                    {material.title}
                  </h5>

                  <p className="text-muted mb-2">
                    <strong>Môn học:</strong> {material.subject}
                  </p>

                  <p className="text-muted mb-2">
                    <strong>Người đăng:</strong> {material.uploader}
                  </p>

                  <p className="text-muted mb-3">
                    <strong>Lượt tải:</strong> {material.downloads}
                  </p>

                  <div className="mt-auto">
                    <Link
                      to={`/materials/${material.id}`}
                      className="btn btn-outline-primary w-100"
                    >
                      Xem chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Giới thiệu ngắn */}
        <section className="row align-items-center mt-5 pt-4">
          <div className="col-md-6">
            <h3 className="fw-bold text-primary">
              Học tập thuận tiện hơn
            </h3>

            <p className="text-muted">
              Hệ thống giúp sinh viên dễ dàng tìm kiếm, xem và
              tiếp cận các tài liệu học tập theo từng môn học,
              loại học liệu và chuyên ngành.
            </p>

            <Link
              to="/about"
              className="btn btn-primary"
            >
              Tìm hiểu thêm
            </Link>
          </div>

          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src="/Logo_PTIT_University.png"
              alt="Logo PTIT"
              className="img-fluid"
              style={{ maxHeight: "180px" }}
            />
          </div>
        </section>
      </main>
    </>
  );
}

// Trang lỗi 404
function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-4 fw-bold text-danger">
        404
      </h1>

      <h3 className="mb-3">
        Không tìm thấy trang
      </h3>

      <p className="text-muted">
        Trang bạn đang tìm kiếm không tồn tại.
      </p>

      <Link
        to="/"
        className="btn btn-primary mt-3"
      >
        Quay về trang chủ
      </Link>
    </div>
  );
}

// Component chính
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Trang chủ */}
        <Route path="/" element={<Home />} />

        {/* Các trang học liệu */}
        <Route path="/subjects" element={<Subjects />} />

        <Route path="/materials" element={<Materials />} />

        <Route
          path="/materials/:id"
          element={<MaterialDetail />}
        />

        {/* Trang giới thiệu */}
        <Route path="/about" element={<About />} />

        {/* Trang tài khoản */}
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* Trang không tồn tại */}
        <Route path="*" element={<NotFound />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;