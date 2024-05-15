



// let shoplist_ar = [];

// window.onload = function () {

    
 
//     time();
//     createProducsts();
    
//     onAdd.onclick = function () {
//         time();
//         let obg = {
//             name: id_h1.value,
//             opject: id_h2.value,
//             time: time_now,
//         }
//         shoplist_ar.push(obg)
//         localStorage.setItem(obg.name, obg.opject )
//         x.push(localStorage.getItem(`${obg.name}`))
//         // document.querySelector("#chek").innerHTML = x
//         document.querySelector('#id_h1').value = ""
//         document.querySelector('#id_h2').value = ""
//         createProducsts()
//         // createProducsts2()
        
        
        
//     }
// }

// let x =[]
// // function createProducsts2() {  
// //     document.querySelector("#chek").innerHTML = ""
// //       for (let i = 0; i < shoplist_ar.length; i++) {
// //     let item = shoplist_ar[i];
// //   localStorage.setItem(`${item.name}`,`${[item.name ,item.opject, item.time]}`);
   
 
// //  x.push(localStorage.getItem(`${item.name}`))
// // document.querySelector("#chek").innerHTML = x

// //   }
  
// // }


// function createProducsts() {
//     document.querySelector("#id_row").innerHTML = "";
//     for (let i in shoplist_ar) {
//         console.log(shoplist_ar[i])
//         let item = shoplist_ar[i];
//         localStorage.setItem(`${item.name}`,`${[item.name ,item.opject, item.time]}`);
//         document.querySelector("#id_row").innerHTML += "<h1 class=border>" + item.name + "</h1>";
//         document.querySelector("#id_row").innerHTML += "<h2>" + item.opject + "</h2>";
//         document.querySelector("#id_row").innerHTML += "<h2>" + item.time + "</h2>";
        
        
//         let id_row2 = document.querySelector("#id_row");
//         let mybtn = document.createElement("button");
//         mybtn.onclick = " del"();
//         mybtn.innerHTML = 'delete';
//         id_row2.appendChild(mybtn);

//         let mybtn2 = document.createElement("button");
//         mybtn2.innerHTML = 'marcer';
//         id_row2.appendChild(mybtn2);
//         mybtn2.addEventListener("click", function () {shoplist_ar[i].style.backgroundColor = "pink" ; })
//     }
    
// }

// function Product(_id_h1, _id_h2, _time) {
//     this.name = _id_h1;
//     this.project = _id_h2;
//     this.time = _time;
// }

// function del() {
//     console.log("del pressed")
//     shoplist_ar.pop()
//     createProducsts()
// }

// function time() {

//     const d = new Date();
//     time_now = d;
    

// }



let shoplist_ar = [];

window.onload = function () {
    time();
    createProducts();
    
    onAdd.onclick = function () {
        time();
        let obj = {
            name: productNameInput.value,
            object: productObjectInput.value,
            time: time_now,
        };
        shoplist_ar.push(obj);
        createProducts();
        productNameInput.value = "";
        productObjectInput.value = "";
    };
}

function createProducts() {
    const idRow = document.querySelector("#id_row");
    idRow.innerHTML = "";
    shoplist_ar.forEach((item, index) => {
        const productContainer = document.createElement("div");
        productContainer.classList.add("product-container");

        const productName = document.createElement("h1");
        productName.textContent = item.name;
        productContainer.appendChild(productName);

        const productObject = document.createElement("h2");
        productObject.textContent = item.object;
        productContainer.appendChild(productObject);

        const productTime = document.createElement("h2");
        productTime.textContent = item.time;
        productContainer.appendChild(productTime);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            deleteProduct(index);
        });
        productContainer.appendChild(deleteButton);

        const markButton = document.createElement("button");
        markButton.textContent = "Mark";
        markButton.addEventListener("click", () => {
            markProduct(productContainer);
        });
        productContainer.appendChild(markButton);

        idRow.appendChild(productContainer);
    });
}

function deleteProduct(index) {
    shoplist_ar.splice(index, 1);
    createProducts();
}

function markProduct(productContainer) {
    productContainer.style.backgroundColor = "pink";
}

function time() {
    const d = new Date();
    time_now = d;
}




