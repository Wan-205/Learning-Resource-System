import { Link, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Subjects from "./pages/Subjects";
import Materials from "./pages/Materials";
import MaterialDetail from "./pages/MaterialDetail";
import About from "./pages/About";

function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        style={{
          minHeight: "560px",
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(170, 0, 0, 0.98) 0%,
              rgba(175, 0, 0, 0.94) 20%,
              rgba(180, 0, 0, 0.72) 34%,
              rgba(180, 0, 0, 0.35) 47%,
              rgba(180, 0, 0, 0.08) 60%,
              rgba(0, 0, 0, 0) 72%
            ),
            url("/ptit.webp")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 text-white">
              <div
                className="fw-semibold mb-3"
                style={{
                  fontSize: "15px",
                  letterSpacing: "1px",
                }}
              >
                HỌC VIỆN CÔNG NGHỆ
              </div>

              {/* TÊN HỌC VIỆN */}
              <div
                style={{
                  fontWeight: "800",
                  fontSize: "clamp(32px, 5vw, 58px)",
                  lineHeight: "1.08",
                  letterSpacing: "0.5px",
                  width: "700px",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    height: "63px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      transform: "scaleX(1.24)",
                      transformOrigin: "left center",
                      whiteSpace: "nowrap",
                    }}
                  >
                    BƯU CHÍNH
                  </span>
                </div>

                <div
                  style={{
                    height: "63px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      transform: "scaleX(0.99)",
                      transformOrigin: "left center",
                      whiteSpace: "nowrap",
                    }}
                  >
                    VIỄN THÔNG
                  </span>
                </div>
              </div>

              <div
                className="fw-bold mt-4"
                style={{
                  fontSize: "28px",
                }}
              >
                HỌC LIỆU PTIT
              </div>

              <p
                className="mt-3 mb-4"
                style={{
                  maxWidth: "540px",
                  fontSize: "17px",
                  lineHeight: "1.7",
                  opacity: 0.9,
                }}
              >
                Hệ thống lưu trữ và phân phối học liệu
                dành cho sinh viên Học viện Công nghệ
                Bưu chính Viễn thông.
              </p>

              <Link
                to="/materials"
                className="btn btn-warning btn-lg px-4 fw-semibold"
              >
                Khám phá học liệu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KHÁM PHÁ KHO HỌC LIỆU */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div
              className="text-danger fw-semibold"
              style={{ fontSize: "14px" }}
            >
              KHO HỌC LIỆU
            </div>

            <h2 className="fw-bold mt-2">
              Khám phá kho học liệu
            </h2>

            <p className="text-secondary">
              Tìm kiếm tài liệu học tập theo môn học và
              nội dung bạn cần.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center mb-4"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#fff0f0",
                      fontSize: "28px",
                    }}
                  >
                    📚
                  </div>

                  <h4 className="fw-bold">
                    Môn học
                  </h4>

                  <p className="text-secondary">
                    Xem danh sách các môn học và truy cập
                    học liệu tương ứng.
                  </p>

                  <Link
                    to="/subjects"
                    className="text-danger fw-semibold text-decoration-none"
                  >
                    Xem môn học →
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center mb-4"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#fff0f0",
                      fontSize: "28px",
                    }}
                  >
                    📂
                  </div>

                  <h4 className="fw-bold">
                    Học liệu
                  </h4>

                  <p className="text-secondary">
                    Tìm kiếm giáo trình, bài giảng, đề thi,
                    bài tập và nhiều tài liệu khác.
                  </p>

                  <Link
                    to="/materials"
                    className="text-danger fw-semibold text-decoration-none"
                  >
                    Xem học liệu →
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center mb-4"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#fff0f0",
                      fontSize: "28px",
                    }}
                  >
                    🔎
                  </div>

                  <h4 className="fw-bold">
                    Tìm kiếm
                  </h4>

                  <p className="text-secondary">
                    Tìm nhanh tài liệu theo tên, mã môn hoặc
                    môn học.
                  </p>

                  <Link
                    to="/materials"
                    className="text-danger fw-semibold text-decoration-none"
                  >
                    Tìm tài liệu →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HỌC LIỆU NỔI BẬT */}
      <section
        className="py-5"
        style={{
          backgroundColor: "#f5f7fa",
        }}
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <div
                className="text-danger fw-semibold"
                style={{ fontSize: "14px" }}
              >
                ĐỀ XUẤT
              </div>

              <h2 className="fw-bold mt-2 mb-0">
                Học liệu nổi bật
              </h2>
            </div>

            <Link
              to="/materials"
              className="text-danger text-decoration-none fw-semibold"
            >
              Xem tất cả →
            </Link>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <span className="badge bg-danger mb-3">
                    PDF
                  </span>

                  <h5 className="fw-bold">
                    Giáo trình Lập trình hướng đối tượng
                  </h5>

                  <p className="text-secondary small">
                    INT1001 · Lập trình hướng đối tượng
                  </p>

                  <div className="d-flex justify-content-between small text-secondary mb-3">
                    <span>128 lượt tải</span>
                    <span>10/09/2026</span>
                  </div>

                  <Link
                    to="/materials/1"
                    className="btn btn-outline-danger btn-sm"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <span className="badge bg-danger mb-3">
                    PPTX
                  </span>

                  <h5 className="fw-bold">
                    Bài giảng Cơ sở dữ liệu
                  </h5>

                  <p className="text-secondary small">
                    INT1002 · Cơ sở dữ liệu
                  </p>

                  <div className="d-flex justify-content-between small text-secondary mb-3">
                    <span>142 lượt tải</span>
                    <span>07/09/2026</span>
                  </div>

                  <Link
                    to="/materials/4"
                    className="btn btn-outline-danger btn-sm"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body p-4">
                  <span className="badge bg-danger mb-3">
                    PDF
                  </span>

                  <h5 className="fw-bold">
                    Giáo trình An toàn thông tin
                  </h5>

                  <p className="text-secondary small">
                    ATTT1001 · An toàn thông tin
                  </p>

                  <div className="d-flex justify-content-between small text-secondary mb-3">
                    <span>137 lượt tải</span>
                    <span>22/08/2026</span>
                  </div>

                  <Link
                    to="/materials/20"
                    className="btn btn-outline-danger btn-sm"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="text-white"
        style={{
          backgroundColor: "#680000",
        }}
      >
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-7">
              <h5 className="fw-bold">
                HỌC LIỆU PTIT
              </h5>

              <p
                className="mb-0"
                style={{
                  opacity: 0.8,
                  lineHeight: "1.7",
                }}
              >
                Hệ thống lưu trữ và phân phối học liệu
                dành cho sinh viên Học viện Công nghệ
                Bưu chính Viễn thông.
              </p>
            </div>

            <div className="col-md-5">
              <h6 className="fw-bold">
                Liên kết
              </h6>

              <div className="d-flex flex-column gap-2">
                <Link
                  to="/subjects"
                  className="text-white text-decoration-none"
                  style={{ opacity: 0.8 }}
                >
                  Môn học
                </Link>

                <Link
                  to="/materials"
                  className="text-white text-decoration-none"
                  style={{ opacity: 0.8 }}
                >
                  Học liệu
                </Link>

                <Link
                  to="/about"
                  className="text-white text-decoration-none"
                  style={{ opacity: 0.8 }}
                >
                  Giới thiệu
                </Link>
              </div>
            </div>
          </div>

          <hr
            className="my-4"
            style={{ opacity: 0.2 }}
          />

          <div
            className="small"
            style={{ opacity: 0.65 }}
          >
            © 2026 Học liệu PTIT
          </div>
        </div>
      </footer>
    </div>
  );
}

function NotFound() {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        minHeight: "70vh",
        backgroundColor: "#f5f7fa",
      }}
    >
      <div>
        <div
          style={{
            fontSize: "70px",
            fontWeight: "700",
            color: "#a50000",
          }}
        >
          404
        </div>

        <h2 className="fw-bold">
          Không tìm thấy trang
        </h2>

        <p className="text-secondary">
          Trang bạn đang tìm kiếm không tồn tại.
        </p>

        <Link
          to="/"
          className="btn btn-danger"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/subjects"
            element={<Subjects />}
          />

          <Route
            path="/materials"
            element={<Materials />}
          />

          <Route
            path="/materials/:id"
            element={<MaterialDetail />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </main>
    </>
  );
}