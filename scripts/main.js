const shoppingcart = [
    {
       id: 1,
       name: "Hp laptop",
       price: 30000,
       Quantity: 1,
       image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c07957988.png"
    },
    {
        id: 2,
        name: "lenovo",
        price: 20000,
        Quantity: 1,
        image: "https://solaroidenergy.com/wp-content/uploads/2023/02/laptop-for-lenovo-yoga-1.jpg"
    },
    {
        id:3,
        name: "macbook pro",
        price: 9000,
        Quantity: 1,
        image:"https://photos5.appleinsider.com/gallery/45240-88149-The-new-MacBook-Pro-16-inch-xl.jpg"
    },
    {
        id: 4,
        name: "asus",
        price: 60000,
        Quantity: 1,
        image: "https://www.technocratng.com/wp-content/uploads/2023/07/Asus-X515J-10th-gen-Intel-core-i3-512gb-solid-state-drive-4gb-memory-webcam-Bluetooth-wlan-no-optical-drive-15.6-windows-10.jpg"
    },
];
// select shopping cart container
const shoppingcontainer = document.getElementById("Checkoutcon");
// console.log(shoppingcontainer)
// loop through shopping cart items
for (product of shoppingcart) {
          const productcontainer = document.createElement("div");
          productcontainer.setAttribute("class", "card");
          console.log("productcontainer")
           // check product product Image 
           const productImage = document.createElement("img")
            productImage.setAttribute("src", product.image);
            productImage.setAttribute("alt", product.image);
            console.log("productImage")
            // add product image to product container
            productcontainer.appendChild(productImage);
            // add productcontainer to shopping container
            shoppingcontainer.appendChild(productcontainer);
            // create product info conainer
            const productInfo = document.createElement("div");
            productInfo.setAttribute("class", "productInfo");
            const topcon = document.createElement("div");
            topcon.setAttribute("class", "topcon");
            console.log("topcon")

            // create product name and delete btn
            const productname = document.createElement("h3");
            productInfo.innerHTML = product.name;
            const deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "Delete";
            console.log("productname")

            // add product na,e and delete btn to topcon
            topcon.appendChild(productname);
            topcon.appendChild(deleteBtn);

            // add topcon to productinto container
            productInfo.appendChild(topcon);

            // create product price
            const productprice = document.createElement("p");
            productprice.innerHT = `price: $(product.price)`;

            //add product price to product info container
            productInfo.appendChild(productprice) 

            // add product name and delete btn to topcon 
            topcon.appendChild(productname);
            topcon.appendChild(deleteBtn);

            // add topcon to product into container
            productInfo.appendChild(productInfo);

            // create product price
            const productPrice = document.createElement("p");
            productprice.innerHTML = `price: $(product.price)`;

            // add product price to product info container
            prduct.appendChild(productprice);

            // add productcontainer to shopping container
            // shoppingcontainer.appendChild(productcontainer);

            // create btn container
            const btncontainer = document.createElement("div");
            btncontainer.setAttribute("class", "btncon");

            // create the increment and decrement button
            const increment = document.createElement("button");
            increment.innerHTML = "+";
            const decrement = document.createElement("button");
            decrement.innerHTML = "_";

            // create quantity display
            const quantity = document.createElement("p");
            quantity.innerHTML = product.quantity;

            // add increment, decrement and quantity to the container
            btncontainer.appendChild(increment);
            btncontainer.appendChild(quantity);
            btncontainer.appendChild(decrement);

            // add btn container to product info container
            productInfo.appendChild(btncontainer);
            // add productcontainer to shopping container
            shoppingcontainer.appendChild(productcontainer)
}





