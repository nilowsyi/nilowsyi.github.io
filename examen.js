function suma() {
    
  let nota = 0;
  let Q1 = document.getElementById('p1');
  let A1 = Q1.options[Q1.selectedIndex].value;
  if (A1 == 1) {
      nota = nota +1;
  }

let Q2 = document.getElementById('p2');
let A2 = Q2.options[Q2.selectedIndex].value;
  if (A2 == 1) {
       nota = nota +1;
  }

    
let Q3 = document.getElementById('p3');
let A3 = Q3.options[Q3.selectedIndex].value;
  if (A3 == 1) {
      nota = nota +1;
  }

    
let Q4 = document.getElementById('p4');
let A4 = Q4.options[Q4.selectedIndex].value;
  if (A4 == 2) {
      nota = nota +1;
  }

    
let Q5 = document.getElementById('p5');
let A5 = Q5.options[Q5.selectedIndex].value;
  if (A5 == 2) {
      nota = nota +1;
   }
  
let Q6= document.getElementById('p6');
let A6 = Q6.options[Q6.selectedIndex].value;
  if (A6 == 1) {
      nota = nota +1;
  }

let Q7 = document.getElementById('p7');
let A7 = Q7.options[Q7.selectedIndex].value;
  if (A7 == 2) {
      nota = nota +1;
  }

let Q8 = document.getElementById('p8');
let A8 = Q8.options[Q8.selectedIndex].value;
if (A8 == 1) {
     nota = nota +1;
  }
      
let Q9 = document.getElementById('p9');
let A9 = Q9.options[Q9.selectedIndex].value;
  if (A9 == 1) {
    nota = nota +1;
  }

let Q10 = document.getElementById('p10');
let A10 = Q10.options[Q10.selectedIndex].value;
  if (A10 == 1) {
    nota = nota +1;
  }
  

    

      
      let feliz = document.getElementById('Feliz')
   let result = document.getElementById('resultado') ;
      result.value = `${nota} Puntos`;
      if (nota == 1) {
        result.value = `${nota} Punto`;
        
      }
       if (nota == 10) {
        feliz.textContent = 'Felicidades contestaste todas las preguntas correctamente'
      }else{
        feliz.textContent = ''
      }
       if(nota == 0){
        feliz.innerHTML = `<h3 style="color: red;">FAVOR LLENAR UNA RESPUESTA CORRECTA</h3>`
        result.value = ``

      }
}




