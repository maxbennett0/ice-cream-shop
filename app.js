const menu = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
  quantity: 0
},
{
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0
},
{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0
},
{
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0
},
{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  quantity: 0
},
{
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  quantity: 0
}]

function buyMenu(itemName) {
  let boughtItem = menu.find(m => m.name == itemName)
  boughtItem.quantity++
  console.log(boughtItem);
  drawCart()
}

function drawTotal() {
  let total = 0
  menu.forEach(m => {
    total += m.price * m.quantity
  })
  document.getElementById('total').innerText = total.toFixed(2)
}

function drawCart() {
  let template = ''
  menu.forEach(m => {
    if (m.quantity > 0) {
      template += `
          <div class="col-12 p-3 d-flex justify-content-between">
          <i class="mdi mdi-close cursor-pointer" onclick="removeItem('${m.name}')"></i>
            <p>${m.name}</p>
            <p>${m.quantity}</p>
            <p>${m.price}</p>
          </div>
      `
    }
    document.getElementById('cart').innerHTML = template
    drawTotal()
  })
}

function checkout() {
  if (window.confirm("u sure")) {
    menu.forEach(m => {
      m.quantity = 0
    })
  }
  drawCart()
}

function removeItem(removed) {
  let foundItem = menu.find(m => m.name == removed)
  foundItem.quantity--
  drawCart()
}

drawCart()