let tbody = document.querySelector("tbody");
let thead = document.querySelector("thead");

// thead.innerHTML = `
//                     <tr>
//                         <th>Product Id</th>
//                         <th>Product Name</th>
//                         <th>Unit Price</th>
//                         <th>Units In Stock</th>
//                         <th>Quantity Per Unit</th>
//                     </tr>
//                     `;


fetch("https://northwind.vercel.app/api/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
      tbody.innerHTML += `<tr>
                                <td>${data[i].id}</td>
                                <td>${data[i].name}</td>
                                <td>${data[i].unitPrice}</td>
                                <td>${data[i].unitsInStock}</td>
                                <td>${data[i].quantityPerUnit}</td>
                        </tr>`;
    }
  });












// axios("https://northwind.vercel.app/api/products")
//   .then((data) => {

//     for (let i = 0; i < data.data.length; i++) {
//               console.log(data.data[i]);
//               tbody.innerHTML += `<tr>
//                                         <td>${data.data[i].id}</td>
//                                         <td>${data.data[i].name}</td>
//                                         <td>${data.data[i].unitPrice}</td>
//                                         <td>${data.data[i].unitsInStock}</td>
//                                         <td>${data.data[i].quantityPerUnit}</td>
//                                 </tr>`;
//             }
//   });
