// khởi tạo class product với khung sườn thông tin của sản phẩm
class Product {
  constructor(photo, type, dec, price, quantiy) {
    this.photo = photo;
    this.type = type;
    this.dec = dec;
    this.price = price;
    this.quantiy = quantiy

  }
}

// Hàm thông báo chức năng chưa hoàn thiện của web
function ChuaHoanThien() {
  alert("Tính năng này đang trong quá trình hoàn thiện")
}
function DaHoanThien() {
  alert("Bạn đã thanh toán thành công")
}
//  trả về phần tử có thuộc tính id 'Products' gán cho biến tb
let tb = document.getElementById('Products')

// Mảng chứa tất cả thông tin của sản phẩm 
let Products = [
  new Product("/image/img1.jpg", "Áo đá bóng nam", "Áo bóng đá CLB Real Madrid sân nhà thun thái cao cấp", 160000, "https://belo.vn/ao-bong-da-clb-Barcelona-thun-thai-cao-cap/"),
  new Product("/image/img2.jpg", "Áo đá bóng nam", "Áo bóng đá CLB Barcelona thun thái cao cấp", 180000, "https://belo.vn/ao-bong-da-clb-Real-Madrid-thun-thai-cao-cap/"),
  new Product("/image/img3.jpg", "Áo đá bóng nam", "Áo bóng đá CLB Real Madrid thun thái cao cấp", 170000, "https://belo.vn/ao-bong-da-clb-Chelsea-thun-thai-cao-cap/"),
  new Product("/image/img4.jpg", "Áo đá bóng nam", "Áo bóng đá CLB Chelsea thun thái cao cấp", 180000, "https://belo.vn/ao-bong-da-clb-PSG-thun-thai-cao-cap/"),
  new Product("/image/img5.jpg", "Áo đá bóng nam", "Áo bóng đá CLB PSG thun thái cao cấp", 190000, "https://belo.vn/ao-bong-da-clb-bayern-munich-thun-thai-cao-cap/"),
  new Product("/image/img6.jpg", "Áo đá bóng nam", "Áo bóng đá CLB Bayern Munich thun thái cao cấp", 175000, "https://belo.vn/ao-bong-da-clb-Manchester-United-thun-thai-cao-cap/"),
  new Product("/image/img7.jpg", "Áo đá bóng nam", "Áo bóng đá CLB MU sân nhà thun thái cao cấp", 180000, "https://belo.vn/ao-bong-da-doi-tuyen-bo-dao-nha-mau-xanh-la-phoi-do-moi-nhat-2020/"),
  new Product("/image/img8.jpg", "Áo đá bóng nam", "Áo bóng đá CLB Everton thun thái cao cấp", 165000, "https://belo.vn/ao-bong-da-clb-everton-thun-thai-cao-cap-2/"),
  new Product("/image/img9.jpg", "Áo đá bóng nam", "Áo bóng đá đội tuyển Bồ Đào Nha thun thái cao cấp", 180000, "https://belo.vn/ao-bong-da-doi-tuyen-bo-dao-nha-mau-xanh-la-phoi-do-moi-nhat-2020/")
]

// Hiển thị tất các sản phẩm trong mảng Product ra Website
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
                      <button  type="button" onclick="AddProduct(${i})">
                          
                          <span>Thêm Vào Giỏ Hàng</span>
                      </button>
                  </div>       
              </div>
      `

}

// Hàm tính tổng tiền của các sản phẩm được thêm vào giỏ hàng
function formatCurrency(number) {
  if(number){
    return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }
  return '';
  
}

// Hàm hiển thị thông tin các sản phẩm được thêm vào giỏ hàng 
function show() {
  let total = 0;
  let price = 0;
  let sp = "";
  for (let i = 0; i < cart.length; i++) {
      sp+= `<tr>
                <td>
                  <div class='product-information'>
                    <img src="${cart[i].photo}" alt="">
                    <p>${cart[i].dec}</p>
                  </div>
                </td>
                <td>
                  <p style="color: red; text-align: center ">  ${formatCurrency(cart[i].cost)}  ${formatCurrency(cart[i].price)}</p>
                </td>
                <td>
                  <button onclick="tru(${i})" style="margin-left :60px">-</button>
                  <input style="width: 25px; text-align: center"  type="number"   readonly class="sl" value="${cart[i].quantiy}" >
                  <button onclick="cong(${i})">+</button>
                </td>
                <td><p style="color:red; text-align: center">${formatCurrency(cart[i].price * cart[i].quantiy)}</p></td>
                <td class="ButtonDelete">
                  <button onclick="DeleteProduct(${i})">xoá</button>
                </td>
            </tr>`

    price = cart[i].price * cart[i].quantiy
    total += price;
  }

  // Thực hiện hiển thị sản phẩm được thêm vào giỏ hàng
  document.getElementById('cart').innerHTML = sp

  // Thực hiện hiển thị tổng tiền của các sản phẩm được thêm vào giỏ hàng
  document.getElementById("price-total").innerHTML = formatCurrency(total)
}
let cart = [];
show();

// Hàm thêm sản phẩm vào giỏ hàng
function AddProduct(i) {
  if (cart.indexOf(Products[i]) != -1) {
      Products[i].quantiy += 1
  } else {
      Products[i].quantiy = 1
      cart.push(Products[i])
  }
  console.log(cart)
  document.getElementById('cart').innerHTML = ""
  show();
  showCartStatus = true;
}

//Hàm xáo sản phẩm trong giỏ hàng
function DeleteProduct(i) {
  cart.splice(i, 1)
  document.getElementById('cart').innerHTML = ""
  show()
}


function tru(i) {
  cart[i].quantiy -= 1;
  if (cart[i].quantiy < 0) {
      if (confirm('bạn có muốn xoá sản phẩm ra khỏi giỏ hàng không') == true) {
          DeleteProduct(i);
      } else {
          cart[i].quantiy = 0
      }
  }
  document.getElementById('cart').innerHTML = ""
  show()
}


function cong(i) {
  cart[i].quantiy += 1;
  document.getElementById('cart').innerHTML = ""
  show()
}