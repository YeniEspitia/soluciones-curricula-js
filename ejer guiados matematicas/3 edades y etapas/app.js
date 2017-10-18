
var edad=parseInt(prompt('¿Cúantos años tienes?'));
var etapa= function (edad) {
  if(edad==0 || edad % 1 !=0 ){
    document.write('ERROR');
 } else if (edad<=3){ //&& edad<4) {
   document.write('Toddler');
 } else if (edad<=5){// && edad<6) {
   document.write('Preschooler');
 } else if (edad<=12){ //&& edad<12) {
   document.write('Gradeschooler');
 } else if (edad<=18){// && edad<18) {
   document.write('Teenager');
 } else if (edad<=21){// && edad<21) {
   document.write('Young adult');
 } else {
  document.write('Adult');
 }
 return edad++;
 }
etapa(edad);
/*var edad=prompt('¿Cuantos años tienes?');
if(edad<=3){
  document.write('Toddler');
} else if(edad<=5){
  document.write('Preschooler');
}else if (edad<=12){
  ocument.write('Gradeschooler');
}else if (edad<=18) {
  ocument.write('Teenager');
} else if (edad<=21) {
  ocument.write('Young adult');
}else {
  ocument.write('Adult');
}*/
