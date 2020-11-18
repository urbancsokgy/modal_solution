
  // Get the modal
  const modal = document.querySelector('.modal');

function visible(){

  modal.classList.add('visible');
  console.log('visible');
}

function hide(){
  modal.classList.remove('visible');
  modal.classList.add('hidden');
  console.log('hidden');
  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('visible')
    modal.classList.add('hidden');
    }
  }
  
 function modify(selector, attribute, value){
       let nodelist=document.querySelectorAll(selector);
       for (let i = 0; i < nodelist.length; i++) {
         nodelist[i][attribute]=value;               
       }
 }
 //modify('input','placeholder','placeholder' );
 let modalOpen=document.querySelector('.open__modal');
 modalOpen.addEventListener('click',function(){
   //alert("clikkeltem")
 })
 window.addEventListener("resize",
 
 
 function(){
 console.log(this.innerHeight, ' ', this.innerWidth);
 });

 let sendData=document.querySelector('#my__form');
 sendData.addEventListener('submit', function(ev)
 { 
    ev.preventDefault();
    console.log(ev);
    let inputs=this.querySelectorAll('input, select');
    let values={};
        for (let i = 0; i < inputs.length; i++) {
          values[inputs[i].name]=inputs[i].value;     
        } console.log(values);
  } );
  let select=document.querySelector('.myINput1');
  let selectionItems=['Répa','Hagyma','Májas'];
  selectionItems.forEach(element => {
    console.log(element);
    let option=document.createElement('option');
    option.value=element;
    option.innerHTML=element;
    select.appendChild(option);
    
  });
let currentColor=getComputedStyle(document.documentElement)
    .getPropertyValue('--bgc2');
    let root=document.documentElement;
    
  function colors(){     
    switch (currentColor) {
      case 'black':
        root.style.setProperty('--bgc2', 'white');
      root.style.setProperty('--fcolor', 'black');
      //currentColor='white';
      break;
      case 'white':
        root.style.setProperty('--bgc2', 'black');
        root.style.setProperty('--fcolor', 'white');
        //currentColor='black';
        break;
    
      default:
        break;
    }      
    currentColor=getComputedStyle(document.documentElement)
    .getPropertyValue('--bgc2');
    
    
   
  }
