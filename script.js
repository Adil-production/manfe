document.getElementById("ok").addEventListener("click" , function(){
    //verify the budget and continue
    if(document.getElementById("budget").value == ""){
        alert("Sorry , your budget field is empty")
    }else if(Number(document.getElementById("budget").value) < 500){
        document.getElementById("special-case").style.display = "block"
        document.getElementById("1").style.display = "none"
        
    }else{
        document.getElementById("1").style.display = "none"
        document.getElementById("2").style.display = "block"
        document.getElementById("ref").style.display = "none"
        document.getElementById("ref1").style.display = "none"
    }
     
})
document.getElementById("add").addEventListener("click" , function(){
    document.getElementById("0").style.display = "none"
    document.getElementById("1").style.display = "block"
    document.getElementById("ref1").style.display = "block"
})
document.getElementById("ref1").addEventListener("click" , function(){
    document.getElementById("0").style.display = "block"
    document.getElementById("ref1").style.display = "none"
    document.getElementById("1").style.display = "none"
    document.getElementById("3").style.display = "none"
    document.getElementById("special-case").style.display = "none"
})
document.getElementById("special-btn").addEventListener("click" , function(){
    //special case
    document.getElementById("1").style.display = "none"
    document.getElementById("2").style.display = "block"
    document.getElementById("special-case").style.display = "none"
})
document.getElementById("sorry").addEventListener("click" , function(){
    //sorry
    document.getElementById("special-case").style.display = "none"
    document.getElementById("1").style.display = " block"
    document.getElementById("budget").value = ""
})
document.getElementById("back").addEventListener("click" , function(){
    document.getElementById("1").style.display = "block"
    document.getElementById("2").style.display = "none"
    document.getElementById("budget").value = ""
    document.getElementById("ref1").style.display = "block"
})
document.getElementById("trash1").addEventListener("click",function(){
    if(confirm("Are you sure?")){
        document.getElementById("car-tax").style.display = "none"
        document.getElementById("car-tax-in").value = "0"
        document.getElementById("reset").style.display = "block"
        if(document.getElementById("car-tax").style.display == "none" && document.getElementById("water-bill").style.display == "none" && document.getElementById("light-bill").style.display == "none" && document.getElementById("necessary-items").style.display == "none" && document.getElementById("others").style.display == "none" && document.getElementById("investing").style.display == "none"){
            alert("Sorry , you removed all the inputs")
            document.getElementById("reset").click()
        }
    }else{

    }
    
})
document.getElementById("trash2").addEventListener("click",function(){
    if(confirm("Are you sure?")){
        document.getElementById("water-bill").style.display = "none"
        document.getElementById("water-bill-in").value = "0"
        document.getElementById("reset").style.display = "block"
        if(document.getElementById("car-tax").style.display == "none" && document.getElementById("water-bill").style.display == "none" && document.getElementById("light-bill").style.display == "none" && document.getElementById("necessary-items").style.display == "none" && document.getElementById("others").style.display == "none" && document.getElementById("investing").style.display == "none"){
            alert("Sorry , you removed all the inputs")
            document.getElementById("reset").click()
        }
    }else{

    }
    
})
document.getElementById("trash3").addEventListener("click",function(){
    if(confirm("Are you sure?")){
        document.getElementById("light-bill").style.display = "none"
        document.getElementById("light-bill-in").value = "0"
        document.getElementById("reset").style.display = "block"
        if(document.getElementById("car-tax").style.display == "none" && document.getElementById("water-bill").style.display == "none" && document.getElementById("light-bill").style.display == "none" && document.getElementById("necessary-items").style.display == "none" && document.getElementById("others").style.display == "none" && document.getElementById("investing").style.display == "none"){
            alert("Sorry , you removed all the inputs")
            document.getElementById("reset").click()
        }
    }else{

    }
    
})
document.getElementById("trash4").addEventListener("click",function(){
    if(confirm("Are you sure?")){
        document.getElementById("necessary-items").style.display = "none"
        document.getElementById("necessary-items-in").value = "0"
        document.getElementById("reset").style.display = "block"
        if(document.getElementById("car-tax").style.display == "none" && document.getElementById("water-bill").style.display == "none" && document.getElementById("light-bill").style.display == "none" && document.getElementById("necessary-items").style.display == "none" && document.getElementById("others").style.display == "none" && document.getElementById("investing").style.display == "none"){
            alert("Sorry , you removed all the inputs")
            document.getElementById("reset").click()
        }
    }else{

    }
    
})
document.getElementById("trash5").addEventListener("click",function(){
    if(confirm("Are you sure?")){
        document.getElementById("others").style.display = "none"
        document.getElementById("others").value = "0"
        document.getElementById("reset").style.display = "block"
        if(document.getElementById("car-tax").style.display == "none" && document.getElementById("water-bill").style.display == "none" && document.getElementById("light-bill").style.display == "none" && document.getElementById("necessary-items").style.display == "none" && document.getElementById("others").style.display == "none" && document.getElementById("investing").style.display == "none"){
            alert("Sorry , you removed all the inputs")
            document.getElementById("reset").click()
        }
    }else{

    }
    
})
document.getElementById("trash6").addEventListener("click",function(){
    if(confirm("Are you sure?")){
        document.getElementById("investing").style.display = "none"
        document.getElementById("investing").value = "0"
        document.getElementById("reset").style.display = "block"
        if(document.getElementById("car-tax").style.display == "none" && document.getElementById("water-bill").style.display == "none" && document.getElementById("light-bill").style.display == "none" && document.getElementById("necessary-items").style.display == "none" && document.getElementById("others").style.display == "none" && document.getElementById("investing").style.display == "none"){
            alert("Sorry , you removed all the inputs")
            document.getElementById("reset").click()
        }
    }else{

    }
    
})
document.getElementById("reset").addEventListener("click",function(){
    document.getElementById("car-tax").style.display = "block"
    document.getElementById("water-bill").style.display = "block"
    document.getElementById("light-bill").style.display = "block"
    document.getElementById("necessary-items").style.display = "block"
    document.getElementById("others").style.display = "block"
    document.getElementById("investing").style.display = "block"
    document.getElementById("car-tax-in").value = "0"
    document.getElementById("water-bill-in").value = "0"
    document.getElementById("light-bill-in").value = "0"
    document.getElementById("necessary-items-in").value = "0"
    document.getElementById("others-in").value = "0"
    document.getElementById("investing-in").value = "0"
})

document.getElementById("ok2").addEventListener("click" , function(){

    if(document.getElementById("car-tax-in").value == "" || document.getElementById("water-bill-in").value == "" || document.getElementById("light-bill-in").value == "" || document.getElementById("necessary-items-in").value == "" || document.getElementById("others-in").value == "" || document.getElementById("investing-in").value == ""){
        alert("Sorry something wrong")
    } else if(Number(document.getElementById("car-tax-in").value + document.getElementById("water-bill-in").value + document.getElementById("light-bill-in").value+document.getElementById("necessary-items-in").value+document.getElementById("others-in").value) == 0){
        alert("Sorry , all your inputs is 0")
    } else {
        document.getElementById("2").style.display = "none"
        document.getElementById("ref").style.display = "block"
        document.getElementById("ref1").style.display = "none"
        document.getElementById("3").style.display = "block"
        document.getElementById("return").style.display = "block"
        localStorage.setItem("car-tax" , document.getElementById("car-tax-in").value)
        localStorage.setItem("water-bill" , document.getElementById("water-bill-in").value)
        localStorage.setItem("light-bill" , document.getElementById("light-bill-in").value)
        localStorage.setItem("necessary-items" , document.getElementById("necessary-items-in").value)
        localStorage.setItem("others" , document.getElementById("others-in").value)
        localStorage.setItem("investing" , document.getElementById("investing-in").value)
        localStorage.setItem("budget" , document.getElementById("budget").value)
        localStorage.setItem("done" , "done")
        document.getElementById("main-budget").innerHTML = localStorage.getItem("budget")
        document.getElementById("main-car-tax").innerHTML = localStorage.getItem("car-tax")
        document.getElementById("main-water-bill").innerHTML = localStorage.getItem("water-bill")
        document.getElementById("main-light-bill").innerHTML = localStorage.getItem("light-bill")
        document.getElementById("main-necessary-items").innerHTML = localStorage.getItem("necessary-items")
        document.getElementById("main-others").innerHTML = localStorage.getItem("others")
        document.getElementById("main-investing").innerHTML = localStorage.getItem("investing")
        document.getElementById("real-budget").innerHTML = Number(localStorage.getItem("budget") - localStorage.getItem("car-tax") - localStorage.getItem("water-bill") - localStorage.getItem("light-bill") - localStorage.getItem("necessary-items") - localStorage.getItem("others") - localStorage.getItem("investing"))
        document.getElementById("dire").innerHTML = document.getElementById("real-budget").innerHTML
    }
})
function get(){
    if(localStorage.getItem("done") == "done"){
        document.getElementById("ref").style.display = "none";
        document.getElementById("return").style.display = "inline-block"
        document.getElementById("main-budget").innerHTML = localStorage.getItem("budget")
        document.getElementById("main-car-tax").innerHTML = localStorage.getItem("car-tax")
        document.getElementById("main-water-bill").innerHTML = localStorage.getItem("water-bill")
        document.getElementById("main-light-bill").innerHTML = localStorage.getItem("light-bill")
        document.getElementById("main-necessary-items").innerHTML = localStorage.getItem("necessary-items")
        document.getElementById("main-others").innerHTML = localStorage.getItem("others")
        document.getElementById("main-investing").innerHTML = localStorage.getItem("investing")
        document.getElementById("real-budget").innerHTML = Number(localStorage.getItem("budget") - localStorage.getItem("car-tax") - localStorage.getItem("water-bill") - localStorage.getItem("light-bill") - localStorage.getItem("necessary-items") - localStorage.getItem("others") - localStorage.getItem("investing"))
        document.getElementById("dire").innerHTML = document.getElementById("real-budget").innerHTML
    } 
}

document.getElementById("ref").addEventListener("click" , function(){

        document.getElementById("1").style.display = "none";
        document.getElementById("0").style.display = "block";
        document.getElementById("ref").style.display = "none"
        document.getElementById("3").style.display = "none";
   

})
document.getElementById("return").addEventListener("click" , function(){
    document.getElementById("0").style.display = "none";
    document.getElementById("1").style.display = "none";
    document.getElementById("ref").style.display = "block";
    document.getElementById("3").style.display = "block";
})

const API_URL = 'https://api.marketaux.com/v1/news/all?symbols=TSLA%2CAMZN%2CMSFT&filter_entities=true&language=en&api_token=Kf1IEg8dvUHtPUHBqd4j1Ie1rYtfcF6QSxu66VAF'
const main = document.getElementById('main')


// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.data)
    console.log(data)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title , image_url , published_at , source } = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
        <ion-card>
        <img src="${image_url}" style="padding:10px; border-radius:10px" />
        <ion-card-header>
          <ion-card-title>${title}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          
        </ion-card-content>

            <ion-label style="margin : 10px; padding:10px;">${published_at} | ${source}</ion-label>
            <br>
            <br>

      </ion-card>
      <br>
      <hr>
            
        `
        main.appendChild(movieEl)
    })
}
