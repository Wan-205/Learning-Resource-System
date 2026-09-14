import React from "react";
import { Link, useParams } from "react-router-dom";

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
    fileName: "Giao_trinh_LTHDT.pdf",
    fileSize: "4.8 MB",
    description:
      "Tài liệu cung cấp các kiến thức cơ bản và nâng cao về lập trình hướng đối tượng, bao gồm lớp, đối tượng, kế thừa, đa hình và các nguyên tắc thiết kế.",
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
    fileName: "Bai_giang_LTHDT.pptx",
    fileSize: "8.2 MB",
    description:
      "Bộ bài giảng phục vụ môn Lập trình hướng đối tượng, được sử dụng trong quá trình học tập và ôn tập.",
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
    fileName: "De_cuong_CSDL.pdf",
    fileSize: "1.5 MB",
    description:
      "Đề cương môn Cơ sở dữ liệu gồm các nội dung chính, yêu cầu học tập và các chủ đề cần hoàn thành trong học kỳ.",
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
    fileName: "Bai_giang_CSDL.pptx",
    fileSize: "9.6 MB",
    description:
      "Bộ bài giảng môn Cơ sở dữ liệu với các nội dung về mô hình dữ liệu, SQL, thiết kế cơ sở dữ liệu và hệ quản trị cơ sở dữ liệu.",
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
    fileName: "Bai_tap_SQL_Server.docx",
    fileSize: "2.1 MB",
    description:
      "Tài liệu bài tập thực hành SQL Server giúp sinh viên luyện tập truy vấn và thao tác với cơ sở dữ liệu.",
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
    fileName: "De_thi_CSDL.pdf",
    fileSize: "1.8 MB",
    description:
      "Tài liệu đề thi tham khảo môn Cơ sở dữ liệu, hỗ trợ sinh viên ôn tập trước kỳ thi.",
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
    fileName: "Giao_trinh_CSDLPT.pdf",
    fileSize: "5.2 MB",
    description:
      "Giáo trình giới thiệu các khái niệm và kỹ thuật cơ bản trong cơ sở dữ liệu phân tán.",
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
    fileName: "Bai_giang_CSDLPT.pptx",
    fileSize: "7.4 MB",
    description:
      "Bộ bài giảng môn Cơ sở dữ liệu phân tán phục vụ học tập và ôn tập.",
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
    fileName: "De_cuong_CNPM.pdf",
    fileSize: "1.4 MB",
    description:
      "Đề cương môn Nhập môn Công nghệ phần mềm với các nội dung học tập chính.",
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
    fileName: "Bai_giang_CNPM.pptx",
    fileSize: "8.7 MB",
    description:
      "Bài giảng cung cấp kiến thức về quy trình phát triển phần mềm, yêu cầu phần mềm và quản lý dự án.",
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
    fileName: "Bai_tap_CTDL.docx",
    fileSize: "2.3 MB",
    description:
      "Các bài tập thực hành về cấu trúc dữ liệu và giải thuật.",
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
    fileName: "De_thi_CTDL.pdf",
    fileSize: "1.7 MB",
    description:
      "Đề thi tham khảo môn Cấu trúc dữ liệu và giải thuật.",
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
    fileName: "Giao_trinh_HDH.pdf",
    fileSize: "5.6 MB",
    description:
      "Giáo trình môn Hệ điều hành với các nội dung về tiến trình, bộ nhớ, hệ thống tệp và quản lý tài nguyên.",
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
    fileName: "Bai_giang_HDH.pptx",
    fileSize: "7.9 MB",
    description:
      "Bộ bài giảng môn Hệ điều hành.",
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
    fileName: "Giao_trinh_MMT.pdf",
    fileSize: "6.1 MB",
    description:
      "Giáo trình cung cấp kiến thức về mạng máy tính, mô hình OSI, TCP/IP và các giao thức mạng.",
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
    fileName: "Bai_giang_MMT.pptx",
    fileSize: "8.3 MB",
    description:
      "Bộ bài giảng môn Mạng máy tính.",
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
    fileName: "Tai_lieu_KTD.pdf",
    fileSize: "3.8 MB",
    description:
      "Tài liệu tham khảo cho môn Kỹ thuật điện tử.",
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
    fileName: "Giao_trinh_MVT.pdf",
    fileSize: "5.1 MB",
    description:
      "Giáo trình môn Mạng viễn thông.",
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
    fileName: "Bai_giang_KTHDC.pptx",
    fileSize: "6.7 MB",
    description:
      "Bài giảng môn Kinh tế học đại cương.",
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
    fileName: "Giao_trinh_ATTT.pdf",
    fileSize: "5.9 MB",
    description:
      "Giáo trình cung cấp các kiến thức nền tảng về an toàn thông tin và bảo vệ hệ thống.",
  },
];

export default function MaterialDetail() {
  const { id } = useParams();

  const material = materials.find(
    (item) => item.id === Number(id)
  );

  if (!material) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "70vh",
          backgroundColor: "#f5f7fa",
        }}
      >
        <div className="text-center">
          <div className="display-4 mb-3">📄</div>

          <h2 className="fw-bold">
            Không tìm thấy học liệu
          </h2>

          <p className="text-secondary">
            Học liệu bạn đang tìm kiếm không tồn tại.
          </p>

          <Link
            to="/materials"
            className="btn btn-danger"
          >
            Quay lại kho học liệu
          </Link>
        </div>
      </div>
    );
  }

  function handleDownload() {
    alert(
      "Chức năng tải tài liệu sẽ được kết nối với backend ở giai đoạn sau."
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #8f0000 0%, #b30000 100%)",
          color: "white",
        }}
      >
        <div className="container py-5">
          <Link
            to="/materials"
            className="text-white text-decoration-none small"
          >
            ← Quay lại kho học liệu
          </Link>

          <div className="mt-4">
            <span className="badge bg-light text-danger mb-3">
              {material.type}
            </span>

            <h1 className="fw-bold mb-3">
              {material.title}
            </h1>

            <p className="mb-0 opacity-75">
              {material.subject} · {material.code}
            </p>
          </div>
        </div>
      </section>

      {/* Nội dung */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Thông tin chính */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-lg-5">
                <h4 className="fw-bold mb-4">
                  Thông tin học liệu
                </h4>

                <div className="mb-4">
                  <h6 className="fw-bold">
                    Mô tả
                  </h6>

                  <p
                    className="text-secondary"
                    style={{ lineHeight: "1.8" }}
                  >
                    {material.description}
                  </p>
                </div>

                <hr />

                <div className="row g-4 mt-1">
                  <div className="col-md-6">
                    <div className="text-secondary small">
                      Môn học
                    </div>

                    <div className="fw-semibold mt-1">
                      {material.subject}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="text-secondary small">
                      Mã môn
                    </div>

                    <div className="fw-semibold mt-1">
                      {material.code}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="text-secondary small">
                      Loại tài liệu
                    </div>

                    <div className="fw-semibold mt-1">
                      {material.category}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="text-secondary small">
                      Định dạng
                    </div>

                    <div className="fw-semibold mt-1">
                      {material.type}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="text-secondary small">
                      Người đăng
                    </div>

                    <div className="fw-semibold mt-1">
                      {material.uploader}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="text-secondary small">
                      Ngày đăng
                    </div>

                    <div className="fw-semibold mt-1">
                      {material.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* File */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-4">
                  Tệp tài liệu
                </h5>

                <div
                  className="rounded-3 p-3 mb-3"
                  style={{
                    backgroundColor: "#fff5f5",
                  }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center fw-bold"
                      style={{
                        width: "52px",
                        height: "52px",
                        backgroundColor: "#a50000",
                        color: "white",
                      }}
                    >
                      {material.type}
                    </div>

                    <div className="overflow-hidden">
                      <div
                        className="fw-semibold text-truncate"
                        title={material.fileName}
                      >
                        {material.fileName}
                      </div>

                      <div className="small text-secondary">
                        {material.fileSize}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-danger w-100 py-2"
                  onClick={handleDownload}
                >
                  Tải tài liệu
                </button>

                <div className="text-center text-secondary small mt-3">
                  {material.downloads} lượt tải
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm mt-3">
              <div className="card-body p-4">
                <h6 className="fw-bold">
                  Danh mục
                </h6>

                <span className="badge text-bg-light border mt-2">
                  {material.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}