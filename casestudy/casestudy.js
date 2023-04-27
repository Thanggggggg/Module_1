class Product {
  constructor(photo, type, dec, price, quan) {
    this.photo = photo;
    this.type = type;
    this.dec = dec;
    this.price = price;
    this.quan = quan

  }
}
function chuahoanthien() {
  alert("Tính năng này đang trong quá trình hoàn thiện")
}
let tb = document.getElementById('Products')
let Products = [
  new Product("ảnh 2.jpg", "Áo đá bóng nam", "Áo bóng đá CLB Barcelona thun thái cao cấp", 160000, "https://belo.vn/ao-bong-da-clb-Barcelona-thun-thai-cao-cap/", 1),
  new Product("ảnh 3.jpg", "Áo đá bóng nam", "Áo bóng đá CLB Real Madrid thun thái cao cấp", 180000, "https://belo.vn/ao-bong-da-clb-Real-Madrid-thun-thai-cao-cap/", 1),
  new Product("ảnh 4.jpg", "Áo đá bóng nam", "Áo bóng đá CLB Chelsea thun thái cao cấp", 170000, "https://belo.vn/ao-bong-da-clb-Chelsea-thun-thai-cao-cap/", 1),
  new Product("ảnh 5.jpg", "Áo đá bóng nam", "Áo bóng đá CLB PSG thun thái cao cấp", 180000, "https://belo.vn/ao-bong-da-clb-PSG-thun-thai-cao-cap/", 1),
  new Product("ảnh 6.jpg", "Áo đá bóng nam", "Áo bóng đá CLB Bayern Munich thun thái cao cấp", 190000, "https://belo.vn/ao-bong-da-clb-bayern-munich-thun-thai-cao-cap/", 1),
  new Product("ảnh 7.jpg", "Áo đá bóng nam", "Áo bóng đá CLB Manchester United thun thái cao cấp", 175000, "https://belo.vn/ao-bong-da-clb-Manchester-United-thun-thai-cao-cap/", 2),
  new Product("/image/ảnh1.jpg", "Áo đá bóng nam", "Áo bóng đá CLB Real Madrid sân nhà thun thái cao cấp", 180000, "https://belo.vn/ao-bong-da-doi-tuyen-bo-dao-nha-mau-xanh-la-phoi-do-moi-nhat-2020/", 1),
  new Product("ảnh 8.jpg", "Áo đá bóng nam", "Áo bóng đá CLB Everton thun thái cao cấp", 165000, "https://belo.vn/ao-bong-da-clb-everton-thun-thai-cao-cap-2/", 1),
  new Product("/image/ảnh 9.jpg", "Áo đá bóng nam", "Áo bóng đá đội tuyển Bồ Đào Nha thun thái cao cấp", 180000, "https://belo.vn/ao-bong-da-doi-tuyen-bo-dao-nha-mau-xanh-la-phoi-do-moi-nhat-2020/", 1)
]
for (let i = 0; i < Products.length; i++) {
  console.log(i.photo)
  tb.innerHTML += `
              
              <div class="Product" >
                  <img class="photo-Product" src="${Products[i].photo}" alt="">
                  <p class="type">${Products[i].type}</p>
                  <p class="dec">${Products[i].dec}</p>
                  <div>
                      <span class="price">${formatCurrency(Products[i].price)}</span>
                      
                  </div>
                  <div>
                      <button  type="button" onclick="addpr(${i})">
                          
                          <span>Thêm Vào Giỏ Hàng</span>
                      </button>
                  </div>       
              </div>
      `

}

function formatCurrency(number) {
  if(number){
    return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }
  return "";
  
}

function show() {
  let sp = "";
  for (let i = 0; i < cart.length; i++) {
      sp += `
          <div class="cart">
              <div class="cart-sp" style="display: flex;">
                  <img src="${cart[i].photo}" alt="">
                  <p>${cart[i].dec}</p>
              </div>
              <div class="cart-pr">
                  <p style="color: red "><del style="color: black ;font-size:13px  "> ${formatCurrency(cart[i].cost)}</del>  ${formatCurrency(cart[i].price)}</p>
          
                  <p style="display: flex;">
                      <button onclick="tru(${i})" style="margin-left :30px">-</button>
                      <input type="number" readonly class="sl" value="${cart[i].quan}" width=20px>
                      <button onclick="cong(${i})">+</button>
                  </p>
                  <p style="color: red  ">${formatCurrency(cart[i].price * cart[i].quan)}</p>   
                  <p>
                  <button onclick="buy(${i})"> Mua hàng</button>
                  <button onclick="del(${i})">xoá</button>
                  
                  </p>
                  
              </div>
          </div>`


  }

  document.getElementById('cart').innerHTML = sp
}
let cart = [

];

function addpr(i) {
  if (cart.indexOf(Products[i]) != -1) {
      Products[i].quan += 1
  } else {
      Products[i].quan = 1
      cart.push(Products[i])
  }
  console.log(cart)
  document.getElementById('cart').innerHTML = ""
  show();
 
  
}

function del(i) {
  cart.splice(i, 1)
  document.getElementById('cart').innerHTML = ""
  show()
}
function tru(i) {
  cart[i].quan -= 1;
  if (cart[i].quan < 0) {
      if (confirm('bạn có muốn xoá sản phẩm ra khỏi giỏ hàng không') == true) {
          del(i);
      } else {
          cart[i].quan = 0
      }
  }
  document.getElementById('cart').innerHTML = ""
  show()
}
function cong(i) {
  cart[i].quan += 1;
  document.getElementById('cart').innerHTML = ""
  show()
}
function buy(i) {
  document.getElementById('dec').value = cart[i].dec
  document.getElementById('soluong').value = cart[i].quan
  document.getElementById('dongia').value = cart[i].price
  document.getElementById('thanhtien').value = cart[i].quan * cart[i].price
  document.getElementById('form-buy').style.display = "block"

}
function cancel() {
  document.getElementById('form-buy').style.display = "none"
}