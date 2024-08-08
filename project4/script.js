let btn = document.querySelector("button");

let url2="https://dog.ceo/api/breeds/image/random";


btn.addEventListener("click", async () => {
let link = await getImage();
 let img = document.querySelector("#result");
  img.setAttribute("src",link);
  
}); 

async function getImage() {
        try {
            let res = await axios.get(url2);
            return res.data.message;
        }
        catch (e) {
            console.log("err", e);
            return "/";
        }
    }

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {

//     let fact = await getFact();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })
// let url = "https://catfact.ninja/fact";
// let url2="https://dog.ceo/api/breads/image/random";


// async function getFact() {
//     try {
//         let res = await axios(url);
//         return res.data.fact;
//     }
//     catch (e) {
//         console.log("err", e);
//         return "no fact found";
//     }
// }

// fetch(url)
// .then((res)=>{
//     //  console.log(res);
//    return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
// })
// .catch((err)=>{
//      console.log('error',err);
// });
