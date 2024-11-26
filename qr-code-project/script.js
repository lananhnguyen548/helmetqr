document.getElementById('bio-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Lấy thông tin từ form
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;
  const address = document.getElementById('address').value;
  const bioContent = `Họ và Tên: ${name}\nNgày sinh: ${dob}\nĐịa chỉ: ${address}`;

  // Tạo mã QR từ bioContent
  const qrCodeDiv = document.getElementById('qr-code');
  qrCodeDiv.innerHTML = ""; // Xóa mã QR cũ

  QRCode.toCanvas(document.createElement('canvas'), bioContent, { width: 1000 }, (error, canvas) => {
    if (!error) {
      qrCodeDiv.appendChild(canvas);

      // Hiển thị nút tải mã QR
      const downloadBtn = document.getElementById('download-btn');
      downloadBtn.style.display = 'inline-block';
      downloadBtn.onclick = () => {
        const link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = canvas.toDataURL();
        link.click();
      };
    } else {
      console.error(error);
    }
  });
});
