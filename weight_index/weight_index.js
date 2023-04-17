function kiem_tra() {
    let weight = +document.getElementById("cannang").value;
    let height = +document.getElementById("chieucao").value;

    let bmi = weight / (height * height);
    let result;

    if (bmi < 18) {
        result = "Thiếu cân";
    } else if (bmi < 25.0) {
        result = "Bình thường";
    } else if (bmi < 30.0) {
        result = "Thừa cân";
    } else {
        result = "Béo phì";
    }

    document.getElementById("result").innerHTML = `Chỉ số BMI của bạn là ${bmi}, phân loại ${result}`;
}