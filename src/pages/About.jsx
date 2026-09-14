import { Link } from "react-router-dom";

export default function About() {
  return (
    <div
      style={{
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      {/* Tiêu đề */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #8f0000 0%, #b30000 100%)",
          color: "white",
        }}
      >
        <div className="container py-5">
          <div
            className="text-uppercase fw-semibold mb-2"
            style={{
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            Học liệu PTIT
          </div>

          <h1 className="fw-bold mb-3">
            Giới thiệu
          </h1>

          <p
            className="mb-0"
            style={{
              maxWidth: "700px",
              opacity: 0.9,
              lineHeight: "1.7",
            }}
          >
            Giới thiệu về hệ thống lưu trữ và phân phối
            học liệu dành cho sinh viên.
          </p>
        </div>
      </section>

      <div className="container py-5">
        {/* Giới thiệu hệ thống */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body p-4 p-lg-5">
            <h3 className="fw-bold mb-3">
              Hệ thống Học liệu PTIT
            </h3>

            <p
              className="text-secondary"
              style={{ lineHeight: "1.9" }}
            >
              Hệ thống Học liệu PTIT được xây dựng nhằm
              hỗ trợ sinh viên tìm kiếm, lưu trữ và sử dụng
              các tài liệu phục vụ quá trình học tập.
            </p>

            <p
              className="text-secondary"
              style={{ lineHeight: "1.9" }}
            >
              Hệ thống tập trung các loại học liệu như giáo
              trình, bài giảng, đề cương, bài tập, đề thi và
              tài liệu tham khảo. Sinh viên có thể tìm kiếm
              tài liệu theo môn học, loại tài liệu hoặc định
              dạng tệp.
            </p>

            <p
              className="text-secondary mb-0"
              style={{ lineHeight: "1.9" }}
            >
              Giao diện được thiết kế đơn giản, dễ sử dụng
              và phù hợp với nhu cầu tra cứu học liệu của
              sinh viên Học viện Công nghệ Bưu chính Viễn thông.
            </p>
          </div>
        </div>

        {/* PTIT */}
        <div className="row g-4 mb-4">
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#fff0f0",
                    color: "#a50000",
                    fontSize: "25px",
                  }}
                >
                  🎓
                </div>

                <h4 className="fw-bold">
                  Học viện Công nghệ Bưu chính Viễn thông
                </h4>

                <p
                  className="text-secondary mt-3 mb-0"
                  style={{ lineHeight: "1.8" }}
                >
                  Học viện Công nghệ Bưu chính Viễn thông
                  là cơ sở đào tạo và nghiên cứu trong lĩnh
                  vực công nghệ thông tin, điện tử viễn thông
                  và nhiều lĩnh vực kinh tế, kỹ thuật khác.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#fff0f0",
                    color: "#a50000",
                    fontSize: "25px",
                  }}
                >
                  📚
                </div>

                <h4 className="fw-bold">
                  Kho học liệu
                </h4>

                <p
                  className="text-secondary mt-3 mb-0"
                  style={{ lineHeight: "1.8" }}
                >
                  Kho học liệu cung cấp không gian để sinh
                  viên dễ dàng tìm kiếm và tiếp cận các tài
                  liệu học tập theo từng môn học.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chức năng */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body p-4 p-lg-5">
            <h3 className="fw-bold mb-4">
              Chức năng chính
            </h3>

            <div className="row g-4">
              <div className="col-md-4">
                <div className="d-flex gap-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "42px",
                      height: "42px",
                      minWidth: "42px",
                      backgroundColor: "#fff0f0",
                    }}
                  >
                    🔍
                  </div>

                  <div>
                    <h6 className="fw-bold">
                      Tìm kiếm học liệu
                    </h6>

                    <p className="text-secondary small mb-0">
                      Tìm tài liệu theo tên, môn học hoặc mã môn.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="d-flex gap-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "42px",
                      height: "42px",
                      minWidth: "42px",
                      backgroundColor: "#fff0f0",
                    }}
                  >
                    📂
                  </div>

                  <div>
                    <h6 className="fw-bold">
                      Phân loại tài liệu
                    </h6>

                    <p className="text-secondary small mb-0">
                      Lọc học liệu theo môn học và loại tài liệu.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="d-flex gap-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "42px",
                      height: "42px",
                      minWidth: "42px",
                      backgroundColor: "#fff0f0",
                    }}
                  >
                    ⬇️
                  </div>

                  <div>
                    <h6 className="fw-bold">
                      Tải tài liệu
                    </h6>

                    <p className="text-secondary small mb-0">
                      Xem thông tin và tải các tài liệu học tập.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Điều hướng */}
        <div className="text-center pt-2">
          <h4 className="fw-bold mb-3">
            Khám phá kho học liệu
          </h4>

          <p className="text-secondary mb-4">
            Tìm kiếm tài liệu phù hợp với môn học của bạn.
          </p>

          <Link
            to="/materials"
            className="btn btn-danger px-4 py-2"
          >
            Xem kho học liệu
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="text-white mt-5"
        style={{
          backgroundColor: "#680000",
        }}
      >
        <div className="container py-4">
          <div className="row">
            <div className="col-md-8">
              <h5 className="fw-bold">
                HỌC LIỆU PTIT
              </h5>

              <p
                className="mb-0 small"
                style={{ opacity: 0.8 }}
              >
                Hệ thống lưu trữ và phân phối học liệu
                dành cho sinh viên.
              </p>
            </div>

            <div className="col-md-4 text-md-end mt-3 mt-md-0">
              <div className="small" style={{ opacity: 0.8 }}>
                Học viện Công nghệ Bưu chính Viễn thông
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}