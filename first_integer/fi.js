
function kiemtraNT(number) {
    let count = 0; 
    let countSNT = 0; 
    for (let i = 2; i < 1000; i++) { 
        if (countSNT < number) { 
            for (let j = 1; j <= i; j++) {
                if (i % j == 0) {
                    count++;
                }
            }
            if (count == 2) {
                document.write(i + "<br>"); 
                countSNT++; 
            }
            count = 0;
        } else {
            break;
        }
    }
}
let number = parseInt(prompt("Nhập n số nguyên tố đầu tiên: ")); 
kiemtraNT(number);
