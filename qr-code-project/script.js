document.getElementById('bio-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Lấy thông tin từ form
  const name = document.getElementById('name').value.trim();
  const dob = document.getElementById('dob').value.trim();
  const medicalHistory = document.getElementById('medical-history').value.trim();
  const bloodType = document.getElementById('blood-type').value.trim();
  const allergies = document.getElementById('allergies').value.trim();
  const address = document.getElementById('address').value.trim();

  // Kiểm tra dữ liệu nhập vào (nếu cần thiết)
  if (!name || !dob || !medicalHistory || !bloodType || !allergies || !address) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  // Tạo nội dung mã QR
  const bioContent = 
    `Họ và Tên: ${name}\n` +
    `Ngày sinh: ${dob}\n` +
    `Bệnh mãn tính: ${medicalHistory}\n` +
    `Nhóm máu: ${bloodType}\n` +
    `Dị ứng: ${allergies}\n` +
    `Địa chỉ: ${address}`;

  // Tạo mã QR từ bioContent
  const qrCodeDiv = document.getElementById('qr-code');
  qrCodeDiv.innerHTML = ""; // Xóa mã QR cũ

  QRCode.toCanvas(bioContent, { width: 300 }, (error, canvas) => {
    if (error) {
      console.error("Lỗi tạo mã QR: ", error);
      alert("Đã xảy ra lỗi khi tạo mã QR. Vui lòng thử lại.");
    } else {
      qrCodeDiv.appendChild(canvas);

      // Hiển thị nút tải mã QR
      const downloadBtn = document.getElementById('download-btn');
      downloadBtn.style.display = 'inline-block';
      downloadBtn.onclick = () => {
        const dataUrl = canvas.toDataURL();
        const link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = dataUrl;
        link.click();
      };
    }
  });
});
