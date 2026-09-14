export default function Home() {
  return (
    <div>
      {/* Banner */}
      <section className="bg-primary text-white py-5">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-5 fw-bold">
                Học liệu PTIT
              </h1>

              <p className="fs-5 mb-4">
                Hệ thống lưu trữ và phân phối học liệu
                dành cho sinh viên Học viện Công nghệ
                Bưu chính Viễn thông.
              </p>

              <div className="input-group input-group-lg">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm kiếm học liệu, môn học..."
                />

                <button className="btn btn-warning">
                  Tìm kiếm
                </button>
              </div>
            </div>

            <div className="col-lg-5 text-center mt-4 mt-lg-0">
              <div className="bg-white bg-opacity-10 rounded-4 p-5">
                <div className="display-1">📚</div>
                <h3 className="mt-3">
                  Kho học liệu
                </h3>
                <p className="mb-0">
                  Học tập thuận tiện, mọi lúc, mọi nơi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Danh mục */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold mb-1">
                Danh mục học liệu
              </h2>

              <p className="text-secondary mb-0">
                Tìm kiếm tài liệu theo nhu cầu học tập
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="fs-1 mb-3">📖</div>
                  <h4 className="fw-bold">
                    Giáo trình
                  </h4>
                  <p className="text-secondary mb-0">
                    Giáo trình và tài liệu học tập các môn.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="fs-1 mb-3">📝</div>
                  <h4 className="fw-bold">
                    Bài giảng
                  </h4>
                  <p className="text-secondary mb-0">
                    Slide và nội dung bài giảng của các môn học.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="fs-1 mb-3">📋</div>
                  <h4 className="fw-bold">
                    Đề thi và bài tập
                  </h4>
                  <p className="text-secondary mb-0">
                    Đề thi, đề cương và bài tập tham khảo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Học liệu mới */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold mb-1">
            Học liệu mới nhất
          </h2>

          <p className="text-secondary mb-4">
            Những tài liệu được cập nhật gần đây
          </p>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <span className="badge bg-danger mb-3">
                    PDF
                  </span>

                  <h5 className="fw-bold">
                    Giáo trình Lập trình hướng đối tượng
                  </h5>

                  <p className="text-secondary small">
                    Môn: Lập trình hướng đối tượng
                  </p>

                  <button className="btn btn-outline-primary">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <span className="badge bg-success mb-3">
                    DOCX
                  </span>

                  <h5 className="fw-bold">
                    Đề cương Cơ sở dữ liệu
                  </h5>

                  <p className="text-secondary small">
                    Môn: Cơ sở dữ liệu
                  </p>

                  <button className="btn btn-outline-primary">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <span className="badge bg-warning text-dark mb-3">
                    PPTX
                  </span>

                  <h5 className="fw-bold">
                    Bài giảng Công nghệ phần mềm
                  </h5>

                  <p className="text-secondary small">
                    Môn: Nhập môn Công nghệ phần mềm
                  </p>

                  <button className="btn btn-outline-primary">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <h5 className="fw-bold">
            HỌC LIỆU PTIT
          </h5>

          <p className="text-white-50 mb-0">
            Hệ thống lưu trữ và phân phối học liệu
          </p>
        </div>
      </footer>
    </div>
  );
}