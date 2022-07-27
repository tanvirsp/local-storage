const addItem = () =>{
    const nameField= document.getElementById('product-name');
    const name = nameField.value;

    if(!name){
        return;
    }

    //display Product in UI
    displayProduct(name);
 
    //add to local storage
    addProductToCart(name)

    //clean input field
    nameField.value= '';
}

const displayProduct  = name =>{
    const ui = document.getElementById("products");
    const li = document.createElement('li');
    li.innerText = name;
    ui.appendChild(li);
}

const getCart = ()=>{
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    } else {
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = name =>{
    const cart = getCart();
    console.log(cart)
    if(cart[name]){
        cart[name] = cart[name]+ 1
    
    }else {
        cart[name] = 1;

    }
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied );
}

const displayItemFromLocal = ()=>{
    const cart = getCart();
    for(const name in cart){
        displayProduct(name);
    }
}


const placeOrder =()=>{
    document.getElementById('products').textContent = "";
    localStorage.removeItem('cart');
}


displayItemFromLocal();