import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const subjects = [
  {
    code: "INT1001",
    name: "Lập trình hướng đối tượng",
    department: "Khoa Công nghệ thông tin",
    credits: 3,
    materials: 12,
  },
  {
    code: "INT1002",
    name: "Cơ sở dữ liệu",
    department: "Khoa Công nghệ thông tin",
    credits: 3,
    materials: 18,
  },
  {
    code: "INT1003",
    name: "Cơ sở dữ liệu phân tán",
    department: "Khoa Công nghệ thông tin",
    credits: 3,
    materials: 9,
  },
  {
    code: "INT1004",
    name: "Nhập môn Công nghệ phần mềm",
    department: "Khoa Công nghệ thông tin",
    credits: 3,
    materials: 15,
  },
  {
    code: "INT1005",
    name: "Cấu trúc dữ liệu và giải thuật",
    department: "Khoa Công nghệ thông tin",
    credits: 4,
    materials: 14,
  },
  {
    code: "INT1006",
    name: "Hệ điều hành",
    department: "Khoa Công nghệ thông tin",
    credits: 3,
    materials: 8,
  },
  {
    code: "TEL1001",
    name: "Mạng máy tính",
    department: "Khoa Kỹ thuật Điện tử và Viễn thông",
    credits: 3,
    materials: 11,
  },
  {
    code: "TEL1002",
    name: "Kỹ thuật điện tử",
    department: "Khoa Kỹ thuật Điện tử và Viễn thông",
    credits: 3,
    materials: 7,
  },
  {
    code: "VT1001",
    name: "Mạng viễn thông",
    department: "Khoa Viễn thông",
    credits: 3,
    materials: 6,
  },
  {
    code: "KTB1001",
    name: "Kinh tế học đại cương",
    department: "Viện Kinh tế Bưu điện",
    credits: 3,
    materials: 5,
  },
  {
    code: "ATTT1001",
    name: "An toàn thông tin",
    department: "Bộ môn An toàn thông tin",
    credits: 3,
    materials: 10,
  },
];

const departments = [
  "Tất cả khoa",
  "Khoa Công nghệ thông tin",
  "Khoa Kỹ thuật Điện tử và Viễn thông",
  "Khoa Viễn thông",
  "Viện Kinh tế Bưu điện",
  "Bộ môn An toàn thông tin",
];

export default function Subjects() {
  const [keyword, setKeyword] = useState("");
  const [department, setDepartment] = useState("Tất cả khoa");

  const filteredSubjects = useMemo(() => {
    const search = keyword.trim().toLowerCase();

    return subjects.filter((subject) => {
      const matchesKeyword =
        !search ||
        subject.name.toLowerCase().includes(search) ||
        subject.code.toLowerCase().includes(search);

      const matchesDepartment =
        department === "Tất cả khoa" ||
        subject.department === department;

      return matchesKeyword && matchesDepartment;
    });
  }, [keyword, department]);

  function resetFilters() {
    setKeyword("");
    setDepartment("Tất cả khoa");
  }

  return (
    <div className="bg-light min-vh-100">

      {/* Tiêu đề */}
      <section className="bg-white border-bottom">
        <div className="container py-5">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <span className="badge bg-danger mb-3">
                HỌC LIỆU PTIT
              </span>

              <h1 className="fw-bold mb-2">
                Danh mục môn học
              </h1>

              <p className="text-secondary mb-0">
                Tra cứu các môn học và học liệu được cung cấp
                trong hệ thống.
              </p>

            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">

              <div className="text-lg-end">

                <div className="small text-secondary">
                  Tổng số môn học
                </div>

                <div
                  className="display-5 fw-bold"
                  style={{ color: "#a50000" }}
                >
                  {subjects.length}
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* Tìm kiếm */}
      <section className="container py-4">

        <div className="card border-0 shadow-sm">

          <div className="card-body p-4">

            <div className="row g-3 align-items-end">

              <div className="col-lg-7">

                <label className="form-label fw-semibold">
                  Tìm kiếm môn học
                </label>

                <div className="input-group">

                  <span className="input-group-text bg-white">
                    🔎
                  </span>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập tên môn hoặc mã môn..."
                    value={keyword}
                    onChange={(e) =>
                      setKeyword(e.target.value)
                    }
                  />

                </div>

              </div>


              <div className="col-lg-4">

                <label className="form-label fw-semibold">
                  Khoa / đơn vị
                </label>

                <select
                  className="form-select"
                  value={department}
                  onChange={(e) =>
                    setDepartment(e.target.value)
                  }
                >
                  {departments.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

              </div>


              <div className="col-lg-1">

                <button
                  type="button"
                  className="btn btn-outline-danger w-100"
                  onClick={resetFilters}
                  title="Đặt lại"
                >
                  ↻
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Danh sách môn */}
      <section className="container pb-5">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>

            <h4 className="fw-bold mb-1">
              Danh sách môn học
            </h4>

            <div className="text-secondary small">
              Hiển thị {filteredSubjects.length} môn học
            </div>

          </div>

        </div>


        {filteredSubjects.length === 0 ? (

          <div className="card border-0 shadow-sm">

            <div className="card-body text-center py-5">

              <div className="display-5 mb-3">
                📚
              </div>

              <h5 className="fw-bold">
                Không tìm thấy môn học
              </h5>

              <p className="text-secondary">
                Hãy thử thay đổi từ khóa hoặc khoa.
              </p>

              <button
                className="btn btn-outline-danger"
                onClick={resetFilters}
              >
                Xóa bộ lọc
              </button>

            </div>

          </div>

        ) : (

          <div className="row g-4">

            {filteredSubjects.map((subject) => (

              <div
                className="col-md-6 col-xl-4"
                key={subject.code}
              >

                <div
                  className="card border-0 shadow-sm h-100"
                  style={{
                    transition: "0.2s",
                  }}
                >

                  <div className="card-body p-4">

                    {/* Mã môn */}
                    <div className="d-flex justify-content-between align-items-center mb-3">

                      <span
                        className="badge text-white"
                        style={{
                          backgroundColor: "#a50000",
                        }}
                      >
                        {subject.code}
                      </span>

                      <span className="small text-secondary">
                        {subject.credits} tín chỉ
                      </span>

                    </div>


                    {/* Tên môn */}
                    <h5 className="fw-bold mb-3">
                      {subject.name}
                    </h5>


                    {/* Khoa */}
                    <p className="text-secondary small mb-3">

                      <span className="me-2">
                        🏫
                      </span>

                      {subject.department}

                    </p>


                    {/* Số học liệu */}
                    <div
                      className="rounded p-3 mb-4"
                      style={{
                        backgroundColor: "#fff5f5",
                      }}
                    >

                      <div className="d-flex justify-content-between align-items-center">

                        <span className="small text-secondary">
                          Học liệu
                        </span>

                        <strong
                          style={{
                            color: "#a50000",
                          }}
                        >
                          {subject.materials} tài liệu
                        </strong>

                      </div>

                    </div>


                    {/* Nút */}
                    <Link
                      to={`/materials?subject=${encodeURIComponent(
                        subject.name
                      )}`}
                      className="btn btn-outline-danger w-100"
                    >
                      Xem học liệu
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>
  );
}