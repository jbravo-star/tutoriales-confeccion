# Academia ChileMáquina — Tutoriales de confección

Sitio estático (HTML, CSS y un poco de JavaScript, sin compilación) para GitHub Pages, publicado en
**https://tutoriales-confeccion.chilemaquina.pro**.

## Estructura

```
.
├── CNAME                     # dominio personalizado (no modificar)
├── .nojekyll                 # evita que GitHub procese el sitio con Jekyll
├── index.html                # portada con las tarjetas de tutoriales
├── 404.html                  # página de error
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── style.css             # estilos de marca
│   ├── tutoriales.js         # LISTA DE TUTORIALES (alimenta la portada)
│   ├── polera.jpg            # miniaturas (960 px de ancho)
│   └── capa-halloween.jpg
├── polera/
│   ├── index.html
│   ├── tutorial-polera.mp4
│   └── Tutorial_Polera_ChileMaquina.pdf
└── capa-halloween/
    ├── index.html
    ├── tutorial-capa-halloween.mp4
    └── Tutorial_Capa_Halloween_ChileMaquina.pdf
```

## Publicar en GitHub Pages (paso a paso)

1. **Crear el repositorio.** En GitHub, haz clic en **New repository**, ponle un nombre
   (por ejemplo `tutoriales-confeccion`), déjalo **Public** y créalo sin README.
2. **Subir los archivos.** En el repositorio vacío, elige **uploading an existing file** y arrastra
   *todo el contenido* de esta carpeta (no la carpeta en sí), incluidos `CNAME` y `.nojekyll`.
   Confirma con **Commit changes** en la rama `main`.
   - **No se necesita Git LFS**: cada video MP4 pesa menos de 100 MB, el límite de GitHub por archivo.
   - Por la web, GitHub acepta archivos de hasta 25 MB. Si un video pesa más, súbelo con
     GitHub Desktop o por línea de comandos:
     ```
     git init
     git add .
     git commit -m "Sitio de tutoriales"
     git branch -M main
     git remote add origin https://github.com/<usuario>/tutoriales-confeccion.git
     git push -u origin main
     ```
   - Los archivos que empiezan con punto (`.nojekyll`) pueden quedar ocultos en tu explorador;
     verifica que aparezca en el repositorio.
3. **Verificar el dominio (recomendado, antes del paso 5).** GitHub recomienda verificar el dominio
   para evitar que otra cuenta lo tome (*domain takeover*). Ve a la configuración de tu cuenta
   (o de la organización): **Settings → Pages → Add a domain**, ingresa `chilemaquina.pro` y crea
   el registro **TXT** que GitHub indica en tu proveedor de DNS. Luego haz clic en **Verify**.
4. **Activar Pages.** En el repositorio: **Settings → Pages**. En **Build and deployment**, elige
   **Source: Deploy from a branch**, rama **`main`** y carpeta **`/ (root)`**. Guarda (**Save**).
5. **Dominio personalizado.** En la misma pantalla, en **Custom domain**, escribe
   `tutoriales-confeccion.chilemaquina.pro` y guarda. (El archivo `CNAME` del repositorio ya
   contiene este dominio.)
6. **Registro DNS.** En el proveedor de DNS de `chilemaquina.pro`, crea:

   | Tipo  | Nombre / Host           | Valor                  |
   |-------|-------------------------|------------------------|
   | CNAME | `tutoriales-confeccion` | `<usuario>.github.io`  |

   Reemplaza `<usuario>` por tu usuario u organización de GitHub (sin el nombre del repositorio).
   **No uses registros comodín** (`*.chilemaquina.pro`): GitHub los desaconseja por el riesgo de
   *takeover*. La propagación puede tardar desde minutos hasta 24 horas.
7. **HTTPS.** Cuando GitHub muestre que el DNS está correcto (check verde en **Settings → Pages**),
   marca **Enforce HTTPS**. El certificado puede demorar un rato en emitirse; si la casilla aparece
   deshabilitada, espera y vuelve a intentarlo.
8. **Comprobar.** Abre https://tutoriales-confeccion.chilemaquina.pro y revisa que se vean los
   videos y que los botones de PDF descarguen el archivo.

## Agregar un tutorial nuevo

1. Crea una carpeta sin tildes ni espacios (ej.: `falda-plisada/`).
2. Copia `polera/index.html` dentro y cambia título, descripción, etiquetas Open Graph, video, PDF,
   materiales, pasos y productos relacionados.
3. Agrega el MP4 (menos de 100 MB) y el PDF a esa carpeta.
4. Guarda una miniatura de 960 px de ancho en `assets/` (ej.: `assets/falda-plisada.jpg`).
5. Agrega un objeto al arreglo de `assets/tutoriales.js` (las instrucciones están en el comentario
   al inicio del archivo). La tarjeta aparece sola en la portada.
6. Agrega la URL nueva a `sitemap.xml`.
7. Sube los cambios a `main`; GitHub Pages republica el sitio en uno o dos minutos.

## Contacto

WhatsApp ChileMáquina: [+56 9 4549 4865](https://wa.me/56945494865) · Tienda: https://chilemaquina.pro
