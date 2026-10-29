/*
 * Academia ChileMáquina — listado de tutoriales
 * ------------------------------------------------
 * Este archivo alimenta las tarjetas de la portada (index.html).
 *
 * CÓMO AGREGAR UN TUTORIAL NUEVO
 * 1. Crea una carpeta con un nombre corto, sin tildes ni espacios
 *    (ej.: "falda-plisada/") y copia dentro:
 *      - index.html  (duplica polera/index.html y cambia textos, video y PDF)
 *      - el video MP4 (menos de 100 MB) y el PDF del tutorial.
 * 2. Guarda una miniatura de 960 px de ancho en assets/ (ej.: assets/falda-plisada.jpg).
 * 3. Agrega un objeto al final del arreglo TUTORIALES (no olvides la coma):
 *      {
 *        slug: "falda-plisada",              // nombre de la carpeta
 *        titulo: "Título del tutorial",
 *        duracion: "4:20",                   // duración del video
 *        maquinas: "Máquina de coser doméstica",
 *        miniatura: "assets/falda-plisada.jpg",
 *        resumen: "Una o dos frases que describan el tutorial."
 *      }
 * 4. Agrega la URL nueva en sitemap.xml.
 * El orden del arreglo es el orden en que aparecen las tarjetas.
 */
window.TUTORIALES = [
  {
    slug: "polera",
    titulo: "Cómo hacer una polera con overlock y colleretera",
    duracion: "6:05",
    maquinas: "Overlock BSQ 3250 + Colleretera Brother CV3440",
    miniatura: "assets/polera.jpg",
    resumen: "Una polera completa de principio a fin con el Pack Poleras en Casa: hombros, cuello, mangas, costados y bastas."
  },
  {
    slug: "capa-halloween",
    titulo: "Capa de Halloween con capucha",
    duracion: "4:36",
    maquinas: "Máquina de coser doméstica (overlock opcional)",
    miniatura: "assets/capa-halloween.jpg",
    resumen: "Capa de círculo completo con capucha: medidas, corte, armado, terminaciones y cierre."
  }
];
