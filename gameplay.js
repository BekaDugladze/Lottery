

const buttons = [
    ...document.querySelectorAll(".red"),
    ...document.querySelectorAll(".blue"),
    ...document.querySelectorAll(".green"),
    ...document.querySelectorAll(".yellow"),
    ...document.querySelectorAll(".pink")
  ];
  
  const chosenByYou = document.querySelector("#chosenByYou");
  const done = document.querySelector("#done");
  const del = document.querySelector("#delete");
  const refresh = document.querySelector("#refresh");
  const reload = document.querySelector("#reload");
  let selectedNumbersByYou = []
  


  //chooseNumbers by visitor
  function chooseNumbers(button) {
    if(selectedNumbersByYou.length < 5 && !selectedNumbersByYou.includes(button.dataset.number)) {
        selectedNumbersByYou.push(button.dataset.number)
    chosenByYou.innerHTML = `${selectedNumbersByYou.join(",")} `;
    button.disabled = true;

  }
  if (selectedNumbersByYou.length === 5) {
    done.disabled = false;
  }
}
  
  function addClickListeners() {
    buttons.forEach(button => {
      button.onclick = () => {
        chooseNumbers(button);
      };
    });
  }
  
  addClickListeners();

  
  const chosenByAI = document.querySelector("#chosenByAI");
  const won = document.querySelector("#won")
  const lost = document.querySelector("#lost")
  const jackpot = document.getElementById('Jackpot')
  const num = document.querySelectorAll(".numbers");
  const handle = document.querySelector(".handle")
  

// ai and click

done.onclick = () => {

    if(selectedNumbersByYou.length !== 5) {
        done.disabled = true
    } else{

  
    let randomNumbers = [];
    while (randomNumbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * 30) + 1;
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    chosenByAI.innerHTML = `${randomNumbers.join(",")}`;

    
    const aiZrda = randomNumbers.slice().sort((a, b) => a - b);
    const myZrda = selectedNumbersByYou.slice().sort((a, b) => a - b);
    const slectedByYou = myZrda.join(", ");
    const selectedByAi = aiZrda.join(", ");
    let jackpotCash = 0;
    
    if (selectedByAi === slectedByYou) {
        won.style.display = 'block';
        lost.style.display = 'none';
        reload.style.display = 'block';
        document.querySelector("body").style.background = 'green';
        handle.style.display = 'none'
      } else {
        won.style.display = 'none';
        lost.style.display = 'block';
        reload.style.display = 'block';
        document.querySelector("body").style.background = 'red';
        handle.style.display = 'none'
        jackpot.innerHTML = `${jackpotCash += 100}`
      }
    }
    }
  
  
        chosenByAI.innerHTML = `${randomNumbers}`
        done.disabled= true;
        reload.disabled = true

}
reload.onclick = () => {
    window.location.reload()
  }
refresh.onclick = () => {
    window.location.reload()
  }


