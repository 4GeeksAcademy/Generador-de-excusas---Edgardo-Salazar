window.onload = function() {

  let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
  let action = ['comió', 'orinó en', 'aplastó', 'rompió'];
  let what = ['mi tarea', 'mi teléfono', 'el auto'];
  let when = ['antes de clase', 'mientras dormía', 'cuando hacía ejercicio', 'durante el almuerzo', 'mientras rezaba'];

 let parte1 = Math.floor(Math.random() * who.length);
 let parte2 = Math.floor(Math.random() * action.length);
 let parte3 = Math.floor(Math.random() * what.length);
 let parte4 = Math.floor(Math.random() * when.length);
    
   document.querySelector("#excuse").innerHTML = 
  who[parte1] + action[parte2] 
 + what[parte3] + when[parte4];
};