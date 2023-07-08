document.addEventListener('DOMContentLoaded', function() {
    //array of objects
    const product = [
      {
        id: 1,
        title: "small garden",
        price: "$275",
      },
      {
        id: 2,
        title: "medium garden",
        price: "$680-$850",
      },
      {
        id: 3,
        title: "large garden",
        price: "$890-$1,230",
      }
    ];

    const categories = [...new Set(product.map(item => item))];
    let i = 0;

    const container = document.getElementsByClassName('container-prices')[0];
    
    container.innerHTML = categories.map(item => {
      const { id, title, price } = item;
      return (
        `<div class="card-price">
          <h3>${title.toUpperCase()}</h3>
          <p>${price}</p>
         
          <ul>
              <li>
                  Dimensions: 100m<sup>2</sup> to 320m<sup>2</sup>
              </li>
              <li>Consulting</li>
              <li>2 months free care</li>
              <li>2 months support</li>
          </ul> 
          <button class="add-to-cart">Add to cart</button>
        </div>`
      );
    }).join('');

    const cartItems = document.querySelector('.cart-items');
    const cartItemsIcon = document.querySelector('.cart-items-icon');
    const cart = [];

    container.addEventListener('click', function(event) {
      if (event.target.classList.contains('add-to-cart')) {
        const selectedItem = categories.find(item => item.id === (i + 1));

        if (selectedItem) {
          const { id, title, price } = selectedItem;

          if (cart.length === 0) {
          const cartItem = document.createElement('li');
          cartItem.innerHTML = `
            <div class="cart-element">
              <h3>${title.toUpperCase()}</h3>
              <p>Price: ${price}</p>
            </div>
            <button class="remove-from-cart" >Remove</button>
            <div class="subtotal-cart">Subtotal: ${price}.00</div>
            
          `;
          cart.push(selectedItem);
          cartItems.appendChild(cartItem);
          i++;
          }else{
            alert('Only one item allowed in the cart!');
          }
          updateCartItemCount();

        }
      }
    });
    function updateCartItemCount() {
        const itemCount = cartItems.children.length;
        cartItemsIcon.textContent = itemCount;
      }
  });

