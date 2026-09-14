import React from "react";
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const materials = [
  {
    id: 1,
    title: "Giáo trình Lập trình hướng đối tượng",
    subject: "Lập trình hướng đối tượng",
    code: "INT1001",
    type: "PDF",
    category: "Giáo trình",
    uploader: "Nguyễn Văn An",
    date: "10/09/2026",
    downloads: 128,
  },
  {
    id: 2,
    title: "Bài giảng Lập trình hướng đối tượng",
    subject: "Lập trình hướng đối tượng",
    code: "INT1001",
    type: "PPTX",
    category: "Bài giảng",
    uploader: "Trần Thị Bình",
    date: "09/09/2026",
    downloads: 96,
  },
  {
    id: 3,
    title: "Đề cương Cơ sở dữ liệu",
    subject: "Cơ sở dữ liệu",
    code: "INT1002",
    type: "PDF",
    category: "Đề cương",
    uploader: "Lê Văn Cường",
    date: "08/09/2026",
    downloads: 115,
  },
  {
    id: 4,
    title: "Bài giảng Cơ sở dữ liệu",
    subject: "Cơ sở dữ liệu",
    code: "INT1002",
    type: "PPTX",
    category: "Bài giảng",
    uploader: "Nguyễn Văn An",
    date: "07/09/2026",
    downloads: 142,
  },
  {
    id: 5,
    title: "Bài tập SQL Server",
    subject: "Cơ sở dữ liệu",
    code: "INT1002",
    type: "DOCX",
    category: "Bài tập",
    uploader: "Trần Thị Bình",
    date: "06/09/2026",
    downloads: 87,
  },
  {
    id: 6,
    title: "Đề thi Cơ sở dữ liệu",
    subject: "Cơ sở dữ liệu",
    code: "INT1002",
    type: "PDF",
    category: "Đề thi",
    uploader: "Lê Văn Cường",
    date: "05/09/2026",
    downloads: 203,
  },
  {
    id: 7,
    title: "Giáo trình Cơ sở dữ liệu phân tán",
    subject: "Cơ sở dữ liệu phân tán",
    code: "INT1003",
    type: "PDF",
    category: "Giáo trình",
    uploader: "Nguyễn Văn An",
    date: "04/09/2026",
    downloads: 76,
  },
  {
    id: 8,
    title: "Bài giảng Cơ sở dữ liệu phân tán",
    subject: "Cơ sở dữ liệu phân tán",
    code: "INT1003",
    type: "PPTX",
    category: "Bài giảng",
    uploader: "Phạm Minh Đức",
    date: "03/09/2026",
    downloads: 65,
  },
  {
    id: 9,
    title: "Đề cương Nhập môn Công nghệ phần mềm",
    subject: "Nhập môn Công nghệ phần mềm",
    code: "INT1004",
    type: "PDF",
    category: "Đề cương",
    uploader: "Hoàng Thu Hà",
    date: "02/09/2026",
    downloads: 91,
  },
  {
    id: 10,
    title: "Bài giảng Công nghệ phần mềm",
    subject: "Nhập môn Công nghệ phần mềm",
    code: "INT1004",
    type: "PPTX",
    category: "Bài giảng",
    uploader: "Nguyễn Văn An",
    date: "01/09/2026",
    downloads: 110,
  },
  {
    id: 11,
    title: "Bài tập Cấu trúc dữ liệu",
    subject: "Cấu trúc dữ liệu và giải thuật",
    code: "INT1005",
    type: "DOCX",
    category: "Bài tập",
    uploader: "Trần Thị Bình",
    date: "31/08/2026",
    downloads: 98,
  },
  {
    id: 12,
    title: "Đề thi Cấu trúc dữ liệu và giải thuật",
    subject: "Cấu trúc dữ liệu và giải thuật",
    code: "INT1005",
    type: "PDF",
    category: "Đề thi",
    uploader: "Lê Văn Cường",
    date: "30/08/2026",
    downloads: 174,
  },
  {
    id: 13,
    title: "Giáo trình Hệ điều hành",
    subject: "Hệ điều hành",
    code: "INT1006",
    type: "PDF",
    category: "Giáo trình",
    uploader: "Nguyễn Văn An",
    date: "29/08/2026",
    downloads: 83,
  },
  {
    id: 14,
    title: "Bài giảng Hệ điều hành",
    subject: "Hệ điều hành",
    code: "INT1006",
    type: "PPTX",
    category: "Bài giảng",
    uploader: "Phạm Minh Đức",
    date: "28/08/2026",
    downloads: 71,
  },
  {
    id: 15,
    title: "Giáo trình Mạng máy tính",
    subject: "Mạng máy tính",
    code: "TEL1001",
    type: "PDF",
    category: "Giáo trình",
    uploader: "Hoàng Thu Hà",
    date: "27/08/2026",
    downloads: 126,
  },
  {
    id: 16,
    title: "Bài giảng Mạng máy tính",
    subject: "Mạng máy tính",
    code: "TEL1001",
    type: "PPTX",
    category: "Bài giảng",
    uploader: "Đỗ Minh Hoàng",
    date: "26/08/2026",
    downloads: 89,
  },
  {
    id: 17,
    title: "Tài liệu Kỹ thuật điện tử",
    subject: "Kỹ thuật điện tử",
    code: "TEL1002",
    type: "PDF",
    category: "Tham khảo",
    uploader: "Phạm Minh Đức",
    date: "25/08/2026",
    downloads: 54,
  },
  {
    id: 18,
    title: "Giáo trình Mạng viễn thông",
    subject: "Mạng viễn thông",
    code: "VT1001",
    type: "PDF",
    category: "Giáo trình",
    uploader: "Đỗ Minh Hoàng",
    date: "24/08/2026",
    downloads: 62,
  },
  {
    id: 19,
    title: "Bài giảng Kinh tế học đại cương",
    subject: "Kinh tế học đại cương",
    code: "KTB1001",
    type: "PPTX",
    category: "Bài giảng",
    uploader: "Nguyễn Thu Lan",
    date: "23/08/2026",
    downloads: 48,
  },
  {
    id: 20,
    title: "Giáo trình An toàn thông tin",
    subject: "An toàn thông tin",
    code: "ATTT1001",
    type: "PDF",
    category: "Giáo trình",
    uploader: "Vũ Thành Nam",
    date: "22/08/2026",
    downloads: 137,
  },
];

const subjects = [
  "Tất cả môn học",
  ...new Set(materials.map((item) => item.subject)),
];

const categories = [
  "Tất cả loại",
  "Giáo trình",
  "Bài giảng",
  "Đề cương",
  "Bài tập",
  "Đề thi",
  "Tham khảo",
];

const fileTypes = ["Tất cả định dạng", "PDF", "DOCX", "PPTX"];

export default function Materials() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialSubject = searchParams.get("subject") || "Tất cả môn học";

  const [keyword, setKeyword] = useState("");
  const [subject, setSubject] = useState(initialSubject);
  const [category, setCategory] = useState("Tất cả loại");
  const [fileType, setFileType] = useState("Tất cả định dạng");
  const [sort, setSort] = useState("Mới nhất");
  const [page, setPage] = useState(1);

  const itemsPerPage = 8;

  function changeSubject(value) {
    setSubject(value);
    setPage(1);

    const params = new URLSearchParams(searchParams);

    if (value === "Tất cả môn học") {
      params.delete("subject");
    } else {
      params.set("subject", value);
    }

    setSearchParams(params);
  }

  function resetFilters() {
    setKeyword("");
    setSubject("Tất cả môn học");
    setCategory("Tất cả loại");
    setFileType("Tất cả định dạng");
    setSort("Mới nhất");
    setPage(1);
    setSearchParams({});
  }

  const filteredMaterials = useMemo(() => {
    let result = materials.filter((item) => {
      const matchKeyword =
        item.title.toLowerCase().includes(keyword.toLowerCase()) ||
        item.subject.toLowerCase().includes(keyword.toLowerCase()) ||
        item.code.toLowerCase().includes(keyword.toLowerCase());

      const matchSubject =
        subject === "Tất cả môn học" || item.subject === subject;

      const matchCategory =
        category === "Tất cả loại" || item.category === category;

      const matchType =
        fileType === "Tất cả định dạng" || item.type === fileType;

      return matchKeyword && matchSubject && matchCategory && matchType;
    });

    if (sort === "Lượt tải nhiều") {
      result.sort((a, b) => b.downloads - a.downloads);
    }

    if (sort === "Tên A-Z") {
      result.sort((a, b) => a.title.localeCompare(b.title, "vi"));
    }

    if (sort === "Mới nhất") {
      result.sort((a, b) => {
        const dateA = a.date.split("/").reverse().join("-");
        const dateB = b.date.split("/").reverse().join("-");
        return new Date(dateB) - new Date(dateA);
      });
    }

    return result;
  }, [keyword, subject, category, fileType, sort]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredMaterials.length / itemsPerPage)
  );

  const currentPage = Math.min(page, totalPages);

  const displayedMaterials = filteredMaterials.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div style={{ backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
      {/* Tiêu đề */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #8f0000 0%, #b30000 60%, #d00000 100%)",
          color: "white",
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div
                className="text-uppercase fw-semibold mb-2"
                style={{ fontSize: "14px", letterSpacing: "1px" }}
              >
                Kho học liệu PTIT
              </div>

              <h1 className="fw-bold mb-3">
                Học liệu
              </h1>

              <p className="mb-0" style={{ opacity: 0.9 }}>
                Tìm kiếm và truy cập tài liệu học tập theo từng môn học.
              </p>
            </div>

            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <div
                className="d-inline-block px-4 py-3 rounded-3"
                style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
              >
                <div className="small">Tổng số học liệu</div>
                <div className="fs-2 fw-bold">
                  {filteredMaterials.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-4">
        {/* Bộ lọc */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body p-4">
            <div className="row g-3">
              <div className="col-lg-5">
                <label className="form-label fw-semibold">
                  Tìm kiếm
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập tên tài liệu, môn học hoặc mã môn..."
                  value={keyword}
                  onChange={(e) => {
                    setKeyword(e.target.value);
                    setPage(1);
                  }}
                />
              </div>

              <div className="col-lg-3">
                <label className="form-label fw-semibold">
                  Môn học
                </label>

                <select
                  className="form-select"
                  value={subject}
                  onChange={(e) => changeSubject(e.target.value)}
                >
                  {subjects.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-lg-2">
                <label className="form-label fw-semibold">
                  Loại tài liệu
                </label>

                <select
                  className="form-select"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setPage(1);
                  }}
                >
                  {categories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-lg-2">
                <label className="form-label fw-semibold">
                  Định dạng
                </label>

                <select
                  className="form-select"
                  value={fileType}
                  onChange={(e) => {
                    setFileType(e.target.value);
                    setPage(1);
                  }}
                >
                  {fileTypes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="d-flex flex-wrap justify-content-between align-items-center mt-4 gap-3">
              <div className="text-secondary small">
                Hiển thị{" "}
                <strong>{filteredMaterials.length}</strong>{" "}
                học liệu
              </div>

              <div className="d-flex gap-2">
                <select
                  className="form-select"
                  style={{ width: "180px" }}
                  value={sort}
                  onChange={(e) => {
                    setSort(e.target.value);
                    setPage(1);
                  }}
                >
                  <option>Mới nhất</option>
                  <option>Lượt tải nhiều</option>
                  <option>Tên A-Z</option>
                </select>

                <button
                  className="btn btn-outline-secondary"
                  onClick={resetFilters}
                >
                  Xóa lọc
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Danh sách */}
        {displayedMaterials.length > 0 ? (
          <div className="row g-3">
            {displayedMaterials.map((item) => (
              <div className="col-12" key={item.id}>
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="row align-items-center">
                      <div className="col-lg-8">
                        <div className="d-flex align-items-start gap-3">
                          <div
                            className="rounded-3 d-flex align-items-center justify-content-center fw-bold"
                            style={{
                              width: "55px",
                              height: "55px",
                              minWidth: "55px",
                              backgroundColor: "#fff0f0",
                              color: "#a50000",
                            }}
                          >
                            {item.type}
                          </div>

                          <div>
                            <Link
                              to={`/materials/${item.id}`}
                              className="text-decoration-none text-dark"
                            >
                              <h5 className="fw-bold mb-2">
                                {item.title}
                              </h5>
                            </Link>

                            <div className="d-flex flex-wrap gap-2">
                              <span className="badge text-bg-light border">
                                {item.code}
                              </span>

                              <span className="badge text-bg-light border">
                                {item.subject}
                              </span>

                              <span className="badge text-bg-light border">
                                {item.category}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 mt-3 mt-lg-0">
                        <div className="d-flex justify-content-lg-end gap-4">
                          <div>
                            <div className="small text-secondary">
                              Người đăng
                            </div>
                            <div className="fw-semibold">
                              {item.uploader}
                            </div>
                          </div>

                          <div>
                            <div className="small text-secondary">
                              Lượt tải
                            </div>
                            <div className="fw-semibold">
                              {item.downloads}
                            </div>
                          </div>

                          <div>
                            <div className="small text-secondary">
                              Ngày đăng
                            </div>
                            <div className="fw-semibold">
                              {item.date}
                            </div>
                          </div>
                        </div>

                        <div className="text-lg-end mt-3">
                          <Link
                            to={`/materials/${item.id}`}
                            className="btn btn-outline-danger btn-sm"
                          >
                            Xem chi tiết
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center py-5">
              <div className="fs-1 mb-3">📚</div>

              <h4 className="fw-bold">
                Không tìm thấy học liệu
              </h4>

              <p className="text-secondary mb-3">
                Hãy thử thay đổi từ khóa hoặc bộ lọc.
              </p>

              <button
                className="btn btn-danger"
                onClick={resetFilters}
              >
                Xóa bộ lọc
              </button>
            </div>
          </div>
        )}

        {/* Phân trang */}
        {filteredMaterials.length > 0 && (
          <div className="d-flex justify-content-center mt-4">
            <nav>
              <ul className="pagination">
                <li
                  className={`page-item ${
                    currentPage === 1 ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setPage((prev) => Math.max(1, prev - 1))
                    }
                  >
                    Trước
                  </button>
                </li>

                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((number) => (
                  <li
                    key={number}
                    className={`page-item ${
                      currentPage === number ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setPage(number)}
                    >
                      {number}
                    </button>
                  </li>
                ))}

                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setPage((prev) =>
                        Math.min(totalPages, prev + 1)
                      )
                    }
                  >
                    Sau
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}