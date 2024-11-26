document.getElementById('bio-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Lấy thông tin từ form
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const address = document.getElementById('address').value;
  const medicalHistory = document.getElementById('medical-history').value;

  // Tạo nội dung bio (bao gồm thông tin bệnh sử)
  const bioContent = `Họ và Tên: ${name}\nNgày sinh: ${dob}\nĐịa chỉ: ${address}\nBệnh sử: ${medicalHistory}`;

  // Tạo mã QR từ bioContent
  const qrCodeDiv = document.getElementById('qr-code');
  qrCodeDiv.innerHTML = ""; // Xóa mã QR cũ

  QRCode.toCanvas(document.createElement('canvas'), bioContent, { width: 300 }, (error, canvas) => {
    if (error) {
      console.error(error);
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
