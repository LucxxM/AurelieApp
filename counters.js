const darkMode = document.getElementById('dark-mode');
darkMode.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

// PART Counter
function syncDelay(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
}

let id = 0; 
function addElement () {
  const newParent = document.getElementById('sectionHome');
  
  var newDiv = document.createElement("div");
  newDiv.classList.add('box-actes');

  
  var newH2 = document.createElement("h2");
  newH2.textContent = prompt('choissez un nom');
  if (newH2.textContent == ''){
    id++;
    newH2.textContent = 'Compteur : ' + id ;
    alert(`Vous n'avez pas choisi de nom, vous avez donc un compteur par défaut`);
  }
  newDiv.appendChild(newH2);
  
  var newInput = document.createElement("input");
  newInput.classList.add('input');
  newInput.type = 'hidden';
  newInput.value = 0;
  newInput.ariaValueMax = prompt('choisir un nombre à atteindre');

  if (newInput.ariaValueMax == ''){
    newInput.ariaValueMax = 10;
    alert('nombre à atteindre par défaut: 10');
  }
  newDiv.appendChild(newInput);

  
  
  var newDiv2 = document.createElement('div');
  newDiv2.classList.add('count-box');
  newDiv2.textContent = newInput.value;
  newDiv.appendChild(newDiv2);
  
  var newBtn = document.createElement('button');
  newBtn.classList.add('btn');
  newBtn.id = 'brnPrepend';
  newBtn.textContent = 'Ajouter un acte';
  newBtn.click = 'onClickBtn()';
  newDiv.appendChild(newBtn);

  const newP = document.createElement('p');
  newP.innerText = 'nombre à atteindre ' + newInput.ariaValueMax;

  newDiv.appendChild(newP);
  
  newParent.prepend(newDiv);
  
  newParent.insertBefore(newDiv, newParent.childNodes[0]);
  document.querySelectorAll('button.btn');
  
}

document.querySelectorAll('button.btn').forEach((link) => {
    link.addEventListener("click", onClickBtn); 
})

function random(max){
  return Math.random() * (max - 0) + 0;
}

function onClickBtn(e){
  
  this.previousElementSibling.previousElementSibling.value ++;
  var countShow = this.previousElementSibling;
  var count = this.previousElementSibling.previousElementSibling.value;
  var maxCount = this.previousElementSibling.previousElementSibling.ariaValueMax;
  var valueMaxDiv = this.nextElementSibling;
  var valueToInsert = maxCount - parseInt(count);

  valueMaxDiv.textContent = "Nombre restant : " + valueToInsert;
  e.preventDefault();
  countShow.textContent = count;

  var c = document.createDocumentFragment();

  for (var i=0; i<20; i++) {
    var styles = 'transform: translate3d(' + (random(25) - 0) + 'px, ' + (random(50) - 150) + 'px, 0) rotate(' + random(360) + 'deg);\
                  background: hsla('+random(360)+',100%,50%,1);\
                  animation: bang 800ms ease-out forwards;\
                  opacity: 0';
    var e = document.createElement("i");
    e.style.cssText = styles.toString();
    c.appendChild(e);
  }
  document.getElementById('confetti').appendChild(c);


  if (count == maxCount){
    onClickBtn2();
    countShow.textContent = 'Fini!!!';
    this.classList.add('display-none');
  }

} 

document.addEventListener('click',(e) => { if(e.target && e.target.id == 'brnPrepend'){ document.querySelectorAll('button.btn').forEach((link) => {
  link.addEventListener("click", onClickBtn); 
}) } })

const onClickBtn2 = () => {  
  var c = document.createDocumentFragment();

  for (var i=0; i<200; i++) {
    var styles = 'transform: translate3d(' + (random(1000) - 250) + 'px, ' + (random(500) - 150) + 'px, 0) rotate(' + random(360) + 'deg);\
                  background: hsla('+random(360)+',100%,50%,1);\
                  animation: bang 1100ms ease-out forwards;\
                  opacity: 0';
    var e = document.createElement("i");
    e.style.cssText = styles.toString();
    c.appendChild(e);
  }
  document.getElementById('confetti').appendChild(c);
}
