const btn = document.querySelector(".residents");
const body = document.querySelector('body')

function buttonClickedString() {
  console.log("Button clicked");
  axios.get("https://swapi.dev/api/planets?search=Alderaan").then((res) => {
    console.log(res.data.results);

    let alderaanObj = res.data.results[0];
    // const [alderaanObj] = res.data.results;
    console.log(alderaanObj)
    console.log(alderaanObj.residents)

    let residentArr = alderaanObj.residents;

    // const {residents} = alderaanObj;

  



    console.log(residentArr)

    
    for (let i = 0; i < residentArr.length; i++){
      axios.get(residentArr[i]).then((res) => {
        console.log(res.data.name)
        
         let h2 = document.createElement('div')
         h2.innerHTML = `<h2>${res.data.name}</h2>`
         h2.style.textShadow = "1px .5px .5px"
         body.appendChild(h2)
         

      })
    }
  });
}

btn.addEventListener("click", buttonClickedString);
