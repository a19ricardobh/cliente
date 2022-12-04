/***************************************************************************************************************
 *
 *   Objetivo: puntuacionGolf. El el golf cada hoyo tiene un par, es decir, el número medio de golpes que se espera hacer para meter la bola en el hoyo.
 *             Dependiendo de como de lejos, por arriba o abajo, estamos del par, la clasificacion recibirá un nombre diferente.
 *             Crearemos una funcion que al pasarle el par y el número de golpes que se hicieron devuelva el nombre de la clasificacion de acuerdo con la siguiente tabla:
 *
 *             Golpes	    Clasificacion
 *              1	         "Hole-in-one!"
 *              <= par - 2	 "Eagle"
 *              par - 1	     "Birdie"
 *              par	         "Par"
 *              par + 1	     "Bogey"
 *              par + 2	     "Double Bogey"
 *              >= par + 3	 "Go Home!"
 *
 *   Entrada :
 *
 *   Salida  : La cadena que representa la clasificion
 *
 *                puntuacionGolf(4, 1) debería devolver Hole-in-one!
 *                puntuacionGolf(4, 2) debería devolver Eagle
 *                puntuacionGolf(5, 2) debería devolver Eagle
 *                puntuacionGolf(4, 3) debería devolver Birdie
 *                puntuacionGolf(4, 4) debería devolver Par
 *                puntuacionGolf(1, 1) debería devolver Hole-in-one!
 *                puntuacionGolf(5, 5) debería devolver Par
 *                puntuacionGolf(4, 5) debería devolver Bogey
 *                puntuacionGolf(4, 6) debería devolver Double Bogey
 *                puntuacionGolf(4, 7) debería devolver Go Home!
 *                puntuacionGolf(5, 9) debería devolver Go Home!
 *
 ***************************************************************************************************************/

function puntuacionGolf(par, golpes) {
  let msg;
  switch (true) {
    case golpes == 1:
      msg = "Hole-in-one!";
      break;
    case golpes <= par - 2:
      msg = "Eagle";
      break;
    case golpes == par - 1:
      msg = "Birdie";
      break;
    case golpes == par:
      msg = "Par";
      break;
    case golpes == par + 1:
      msg = "Bogey";
      break;
    case golpes == par + 2:
      msg = "Double Bogey";
      break;
    case golpes >= par + 3:
      msg = "Go Home!";
      break;
  }
  console.log(msg);
}

puntuacionGolf(4, 1);
puntuacionGolf(4, 2);
puntuacionGolf(5, 2);
puntuacionGolf(4, 3);
puntuacionGolf(4, 4);
puntuacionGolf(1, 1);
puntuacionGolf(5, 5);
puntuacionGolf(4, 5);
puntuacionGolf(4, 6);
puntuacionGolf(4, 7);
puntuacionGolf(5, 9);
