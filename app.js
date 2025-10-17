window.onload = function () {
  let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
  let action = ['comió', 'orinó en', 'aplastó', 'rompió'];
  let what = ['mi tarea', 'mi teléfono', 'el auto'];
  let when = ['antes de clase', 'mientras dormía', 'cuando hacía ejercicio', 'durante el almuerzo', 'mientras rezaba'];

  let indiceSustantivo = Math.floor(Math.random() * who.length);
  let indiceAcciones = Math.floor(Math.random() * action.length);
  let indiceEvitar = Math.floor(Math.random() * what.length);
  let indiceCuando = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML = who[indiceSustantivo] + action[indiceAcciones] + what[indiceEvitar] + when[indiceCuando];
};