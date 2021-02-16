document.querySelector("form").addEventListener("submit", wuGen)

const generator = (e) => {
  e.preventDefault()
  let wuSmash = document.querySelectorAll(".smash:checked")[0].value;
  let wuPet = document.querySelectorAll(".pet:checked")[0].value;
  let wuDessert = document.querySelectorAll(".dessert:checked")[0].value;
  let wuRec = document.querySelectorAll(".rec:checked")[0].value;
  let wuMarvel = document.querySelectorAll(".marvel:checked")[0].value;

  class Answers {
    constructor(smash, pet, dessert, rec, marvel){
      this.smash = parseInt(smash),
      this.animal = parseInt(pet),
      this.dessert = parseInt(choice),
      this.rec = parseInt(color),
      this.marvel = parseInt(store)
    }
  }
  
  let wutangName = new Answers(wuSmash, wuPet, wuDessert, wuRev, wuMarvel);

  let total = 0;
  
  Object.values(wutangName).forEach(num => {
    total = total+num;
  })
  document.querySelector("span").textContent = checkResult(total);
  }

  const result = (total)=> {
    if (total === 5){
      return "Resilient Reeves"
    }else if(total === 6){
      return "Mx Thang"
    }else if(total === 7){
      return "Vizual Princess"
    }else if(total === ){
      return "Jaguar Illusive"
    }else if(total === ){
      return "Thunderous Odie"
    }else if(total === 25){
      return "Wicked Pissa"
    }else if(total === ){
      return "Sir Loco"
    }else if(total === ){
      return "Geneyes"
    }else{
      return "Error: 404; There's either an error or you're just not Wu-Tang worthy!"
    }
  }
