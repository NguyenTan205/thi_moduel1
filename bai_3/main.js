document.getElementById('checkButton').addEventListener('click', function (event) {
    event.preventDefault();

    const input = document.getElementById('thangNam').value.trim();

    // Kiểm tra có dấu "/" hay không
    if (!input.includes('/')) {
        document.getElementById('result').textContent = 'Định dạng không hợp lệ! Thiếu dấu "/".';
        return;
    }

    const parts = input.split('/');
    if (parts.length !== 2) {
        document.getElementById('result').innerHTML = 'Định dạng không hợp lệ! Phải có dạng MM/yyyy.';
        return;
    }

    const thang = parseInt(parts[0]);
    const nam = parseInt(parts[1]);

    // giá trị
    if (isNaN(thang) || thang < 1 || thang > 12) {
        document.getElementById('result').innerHTML = 'Tháng không hợp lệ! Tháng phải từ 01 đến 12.';
        return;
    }

    if (isNaN(nam)) {
        document.getElementById('result').innerHTML = 'Năm không hợp lệ! Năm phải có 4 chữ số.';
        return;
    }
    switch (thang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById('result').innerHTML = `Tháng ${thang} có 31 ngày`;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById('result').innerHTML = `Tháng ${thang} có 30 ngày`;
            break;
        case 2:
            if ((nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0)) {
                document.getElementById('result').innerHTML = `Tháng 2 năm ${nam} có 29 ngày (vì năm nhuận)`;
            } else {
                document.getElementById('result').innerHTML = `Tháng 2 năm ${nam} có 28 ngày (vì không phải năm nhuận)`;
            }
            break;
        default:
            document.getElementById('result').innerHTML = "Nhập tháng hợp lệ"
    }
});

