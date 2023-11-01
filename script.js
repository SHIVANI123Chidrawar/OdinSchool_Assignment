// api url
var currentdata 
const api_url = 
      "https://fakestoreapi.com/products";

// Defining async function
async function getapi(url) {
    // Storing response
    const response = await fetch(url);
   
    // Storing data in form of JSON
    var data = await response.json();
   
   localStorage.setItem('user', JSON.stringify(data))
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
 
//Data Save in console
async function SaveData(Data) {
    const userData = JSON.parse(localStorage.getItem('user'));
    userData.map((userData) => {
       if(userData.id === Data){
        console.log(userData)
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
        
      }
      }); 

}

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}

// Function to define innerHTML for HTML table
function show(shopData) {
   
  //recent code

// for( var i = 0; i < shopData.length; i++) {
//     document.querySelector('.card').innerHTML += `
//     <span>${shopData[i].id}<span>
//     <div class="card">
//       <img src="${shopData[i].image}" alt="">    
//         <h4> ${shopData[i].title}</h1>
//         <h5>${shopData[i].price}</h3>  
//         <p> ${shopData[i].description}</p>
//         <button onclick = "SaveData(${shopData[i].id})">Add to cart</button>
//      </div>
//     `;
//   }

if(shopData == ""){
  document.getElementById('error').innerHTML += `<span> data not found</span>`
}
 else{
  for( var i = 0; i < shopData.length; i++) {
    document.getElementById('myTable').innerHTML += `
    
    <tr>
      <td> <span>${shopData[i].id}<span></td>
       <td> <img src="${shopData[i].image}" alt="">  
       <button onclick = "SaveData(${shopData[i].id})">Add to cart</button></td>  
       <td> <h4> ${shopData[i].title}</h1> </td>
       <td> <h5>${shopData[i].price}</h3> </td> 
      <td>  ${shopData[i].description}</td>
      </tr>
    `;
  }
 

}

}

//function for search data
const searchfun = ()=>{
  let filter = document.getElementById('myInput').value.toUpperCase();
  let myTable =document.getElementById('myTable');
  let tr  = myTable.getElementsByTagName('tr')
  for(var i=0 ; i<tr.length; i++){
   let td =tr[i].getElementsByTagName('td')[2]
   if(td){
  let textvalue = td.textContent || td.innerHTML;
  if(textvalue.toLocaleUpperCase().indexOf(filter) > -1){
    tr[i].style.display = ""
  }
  else{
      tr[i].style.display = "None"
  }
   }
  }

  
}
