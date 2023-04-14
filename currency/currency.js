function confirm(){
let amount = document.getElementById("Amount").value;
let FromCurency = document.getElementById("From").value;
let ToCurrency = document.getElementById("Out").value;
let Result;

if (FromCurency == 'VND' && ToCurrency == 'USD') {
    Result = amount / 23000 + 'USD'
} else if (FromCurency == 'USD' && ToCurrency == 'VND') {
    Result = amount * 23000 + 'VND'
} else if (FromCurency == 'VND') {
    Result = amount + 'VND'
} else {
    Result = amount + 'USD'
};
document.getElementById('result').innerHTML = Result;
}