const productId = document.querySelector("#ip-id");
const productName = document.querySelector("#ip-name");
const productPrice = document.querySelector("#ip-price");
const productColor = document.querySelector("#ip-color");
const productQuantity = document.querySelector("#ip-quantity");
const productImage = document.querySelector("#ip-image");
const divPagination = document.querySelector(".pagination-box");
const imageChange = document.querySelector("#img-change");
const checkName = document.querySelector("#rd-name");
const table_Product = document.querySelector("#tb-allproduct>tbody");
const productFind = document.querySelector("#ip-find");
const page_size = 5;
const default_page_number = 1;
var products = [];
const key_data = "product_data";

let scrImage = 'https://static.mercdn.net/item/detail/orig/photos/m27770932991_1.jpg'
imageChange.src = scrImage;

class Product {
    constructor(id, name, price, color, quantity, image) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.color = color;
        this.quantity = quantity;
        this.image = image;
    }
}
function chuahoanthien() {
    alert("Tính năng này đang trong quá trình hoàn thiện")
} 
 //Hàm khởi tạo danh sách sản phẩm
function init() {
    if(getData(key_data) == null ) {
        products = [
            new Product (1, "Stussy Long Hand", 2000000, "Black", 4, "https://cdn.shopify.com/s/files/1/0463/0999/8749/products/1994762_BLAC_1_300x300.jpg?v=1661456498"),
            new Product (2, "Stussy Long Hand", 2000000, "White", 2, "http://cdn.shopify.com/s/files/1/0463/0999/8749/products/1994762_WHIT_2_1024x1024.jpg?v=1661456364"),
            new Product (3, "Stussy Short    Hand", 1500000, "White", 10, "https://cdn.shopify.com/s/files/1/0521/6472/2881/products/1234TFSFS.png?v=1666609975"),
            new Product (4, "Stussy Hoddie", 3000000, "Grey", 5, "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/1924762_WHIT_1_ea9b3a0c-1f9e-4f84-a880-cb2d8c6dda8c_1024x1024.jpg?v=1660939849"),
            new Product (5, "Stussy Ball Jacket", 2500000, "White", 10, "https://image.goat.com/1000/attachments/product_template_pictures/images/078/520/045/original/1046243_00.png.png"),
            new Product (6, "Jacket", 4500000, "Blue", 3, "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/115570_BLUE_1_grande.jpg?v=1660922715"),
            new Product (7, "Sweater", 2500000, "Green", 10, "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/118520_MOGR_1_e43c34c0-5970-414e-9519-834092950dba_300x300.jpg?v=1675140857"),
        ]
        setData(key_data, products);
    }
    else{
        products = getData(key_data);
    }
}
// Lấy data lưu vào local strorage
function getData(key){
    return JSON.parse(localStorage.getItem(key));
}
// Sửa lại data
function setData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
// Hiển thị danh sách sản phẩm kèm phần trang
function renderProduct(data, page_number){
    let pages = data.slice((page_number -1) * page_size, page_number * page_size);
    //hàm trong hàm
    let html = pages.map(function(product)  {
        return `
        <tr> 
            <td onclick = "showProduct(${product.id})"> ${product.id}</td>
            <td onclick = "showProduct(${product.id})" style = "text-algin:left">${product.name}</td>
            <td onclick = "showProduct(${product.id})" style = "text-algin:right">${formatCurrency(Number(product.price))}</td>
            <td onclick = "showProduct(${product.id})">${product.color}</td>
            <td onclick = "showProduct(${product.id})">${product.quantity}</td>
            <td onclick = "showProduct(${product.id})">
                <img style="width:70px"; height:70px; src="${product.image}" alt="">
            </td>
            <td>
                <button onclick ="showProduct(${product.id})" class="btn_edit" type="button">Edit </button>
                <button onclick ="deleteProduct(${product.id})" class="btn_delete" type="button">Delete </button>
            </td>
        </tr>
        `
    } );
    table_Product.innerHTML = html.join("");
     
}
function formatCurrency(number) {
    return number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
}
function changeImage() {
    productImage.value.trim() == "" ? imageChange.setAttribute("src", scrImage) :
    imageChange.setAttribute("src", productImage.value);
}
function getProductIndex(productID){
    return products.findIndex(function(std){
        return std.id == productID;
    })
}
//Hiển thị các nút hành động
function showButton() {
    document.querySelector("#saveProduct").classList.remove('d-none');
    document.querySelector("#cancelProduct").classList.remove('d-none');
}
function showProduct(productID) {
    let index = getProductIndex(productID);
    productId.value = products[index].id;
    productName.value = products[index].name;
    productPrice.value = products[index].price;
    productColor.value = products[index].color;
    productQuantity.value = products[index].quantity;
    productImage.value = products[index].image;
    changeImage();
    showButton();
}
//Lấy ra id cuối cùng trong danh sách sản phẩm
// function getLastId() {
//     let productTemp = [...products];
//     let maxId = productTemp.sort(function(pdt1,ptd2){
//         return ptd2.id - pdt1;
//     })[0].id;
//     return maxId;
// }
function getLastId() {
    let productTemp = [...products];
    let maxId = productTemp.sort(function (pdt1, pdt2) {
        return pdt2.id - pdt1.id;
    })[0].id;
    return maxId;
}
function addProduct() {
    productName.value == "" ? alert ("Xin hãy nhập tên sản phẩm")
        :productPrice.value.trim() == "" ? alert("Vui lòng nhập giá")
            :productColor.value ==  "" ? alert("Vui lòng nhập màu bạn chọn")
                :productQuantity.value.trim() == "" ? alert("Vui lòng nhập số lượng")
                    :productImage.value.trim() == "" ? alert("vui lòng thêm ảnh")
                        :products.push(new Product(Number(getLastId())+1, productName.value, productPrice.value, productColor.value, productQuantity.value, productImage.value));
    setData(key_data, products);
    renderPagination(page_size, default_page_number);
    renderProduct(products, default_page_number);
    showDivPaginigation();
    resetProduct();

}

// function renderPagnigation(page_size, page_number) {
//     let total_page = Math.ceil(products.leghth / page_size);
//     let pagination = document.querySelector(".pagination-box>ul");
//     pagination.innerHTML = "";
//     for (let i = 1; i <= total_page; i++) {
//        pagination.innerHTML += `<li class="page-item ${page_number == i ? 'active' : ''}"><button onclick = "paging(${i})">${i}</button></li>`
        
//     }
// }
function renderPagination(page_size, page_number) {
    let total_page = Math.ceil(products.length / page_size)
    let pagination = document.querySelector(".pagination-box>ul");
    pagination.innerHTML = "";
    for (let i = 1; i <= total_page; i++) {
        pagination.innerHTML += `<li class="page-item ${page_number == i ? 'active' : ''}"><button onclick='paging(${i})'>${i}</button></li>`
    }
}

function showDivPaginigation() {
    divPagination.classList.remove('d-none');
}
function hideDivPaginigation() {
    divPagination.classList.add('d-none');
}
 function resetProduct() {
    productId.value = "";
    productName.value = "";
    productPrice.value ="";
    productColor.value = "";
    productQuantity.value ="";
    productImage.value = "" ;
    imageChange.src = scrImage;
    hidebutton();
    showDivPaginigation();
    renderProduct(products, default_page_number);
 }
// xoá sản phẩm
 function deleteProduct (productID) {
    let comfirmed = window.confirm("Bạn có muốn xoá sản phẩm này");
    let position = getProductIndex(productID)
    if(comfirmed) {
        products.splice(position, 1);
    }
    setData(key_data, products,);
    renderProduct(products, default_page_number);
    renderPagination(page_size,default_page_number);
    resetProduct();
 }

 //Lưu sản phẩm
 function saveProduct () {
    let index = getProductIndex(productId.value);
    products[index].id = productId.value;
    products[index].name = productName.value;
    products[index].price = productPrice.value;
    products[index].color = productColor.value;
    products[index].quantity = productQuantity.value;
    products[index].image = productImage.value;
    setData(key_data, products);
    hidebutton();
 }
// ẩn các nút hành động
 function hidebutton() {
    document.querySelector("#saveProduct").classList.add('d-none');
    document.querySelector("#cancelProduct").classList.add('d-none');
 }

 function cancelProduct() {
    let index = getProductIndex(productId.value);
    productId.value = products[index].id;
    productName.value = products[index].name;  
    productPrice.value = products[index].price; 
    productColor.value = products[index].color;
    productQuantity.value = products[index].quantity ;
    productImage.value = products[index].image;
    hidebutton();
 } 

  function searchProduct() {
    if ( checkName.cheked) {
        hideDivPaginigation();
        table_Product.innerHTML = fin
    }
}

// function findByName(findName) {
//     let html = "";
//     for (let i = 0; i < products.length; i++) {
//         if(products[i].name.toUpperCase().includes(findName.toUpperCase())) {

//         }
        
//     }
// }
function paging(page_number){
    current_page = page_number;
    renderPagination(page_size,page_number);
    renderProduct(products,page_number);
}
function ready() {
    init();
    renderPagination(page_size, default_page_number);
    renderProduct(products, default_page_number);
}
ready();