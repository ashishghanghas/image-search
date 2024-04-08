const text= document.querySelector(".text");
const btn= document.querySelector(".submit");
const btn2= document.querySelector(".submit2");
const showresult= document.querySelector(".showresult");
const api= "aRdGzVCdD9v6vGvldwwWIo9BRPZ2IkFz5GQRQ722NhM";

 

var keyword ="";
let page = 1;
async function searchimages(){
    keyword = text.value; 
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${api}`
    const response= await fetch(url);
    const data = await response.json();
    const results = data.results;
    
   
    
    results.map((result)=>{
        const image= document.createElement("img")
        image.src=result.urls.small;
        const imagelink=document.createElement("a")
        imagelink.href=result.links.html;
        imagelink.target="_blank";
        imagelink.appendChild(image);
        showresult.appendChild(imagelink)
       
    })

}




btn.addEventListener("click",(e)=>{
searchimages();
});

btn2.addEventListener("click",()=>{
    page++
    searchimages()
})



