# Academia ChileMáquina — Tutoriales de confección

Sitio estático (HTML, CSS y un poco de JavaScript, sin compilación) para GitHub Pages, publicado en
**https://tutoriales-confeccion.chilemaquina.pro**.

## Estructura

Las páginas se **generan** con `build.py` (carpeta `sitegen/`, fuera de este sitio) a partir de un
solo archivo de datos, `sitegen/tutoriales.json`. GitHub Pages solo sirve archivos: no hay compilación
en GitHub. No edites a mano los archivos marcados como *generado*: se sobrescriben en cada ejecución.

```
.
├── CNAME                     # dominio personalizado (no modificar)
├── .nojekyll                 # evita que GitHub procese el sitio con Jekyll
├── index.html                # portada con las tarjetas (generado, HTML estático)
├── 404.html                  # página de error (generado)
├── robots.txt                # permite buscadores y bots de IA (generado)
├── sitemap.xml               # con extensión de video de Google (generado)
├── llms.txt                  # índice para asistentes de IA (generado)
├── assets/
│   ├── style.css             # estilos de marca (a mano)
│   ├── site.js               # capítulos y ?t= del video (a mano, mejora progresiva)
│   ├── polera.jpg            # miniaturas 960 × 540
│   ├── capa-halloween.jpg

└── <tutorial>/               # polera/, capa-halloween/
    ├── index.html            # página del tutorial (generado)
    ├── index.md              # versión Markdown con pasos y transcripción (generado)
    ├── subtitulos-es.vtt     # subtítulos (generado desde timeline.json)
    ├── transcripcion.txt     # transcripción (generado)
    ├── <video>.mp4
    └── <PDF>.pdf
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

## Agregar un tutorial nuevo (con build.py)

Requisitos: Python 3 (sin librerías extra).

1. Crea la carpeta del tutorial dentro del sitio, sin tildes ni espacios (ej.: `falda-plisada/`),
   y copia ahí el MP4 (menos de 100 MB) y el PDF.
2. Guarda la miniatura de 960 × 540 px en `assets/` (ej.: `assets/falda-plisada.jpg`).
3. En `sitegen/tutoriales.json`, copia un bloque de `"tutoriales"` y cambia: `slug` (nombre de la
   carpeta), `titulo` (etiqueta `<title>`), `h1`, `nombreCorto` (migas de pan), `descripcion`
   (máx. 155 caracteres; el script se detiene si es más larga), `ogDescripcion`, `intro`, `resumen`,
   `palabrasClave`, `fechaPublicacion` (ej.: `2026-11-05T00:00:00-03:00`), `fechaModificacion`,
   `maquinas`, `materiales`, `medidas`, `preparacion`, `pasos`, `faq`, `productos`, `fuentes`,
   `pdf`, `video`, `miniatura`, `miniaturaAlt` y `timeline` (ruta al `timeline.json` del video,
   relativa a `sitegen/`). El orden del arreglo es el orden de las tarjetas.
   - `duracion` puede quedar en `null`: se calcula sola desde el `timeline.json`.
   - Si el `timeline.json` todavía no existe, el script usa `guion` (texto sin tiempos) y omite
     capítulos, subtítulos y *Clips*, sin fallar.
4. Ejecuta:
   ```
   cd sitegen
   python3 build.py                 # escribe en ../sitio
   python3 build.py --out OTRA/RUTA # o en otra carpeta
   ```
   El script avisa (`AVISO:`) si falta un video, PDF, miniatura o timeline.
5. Opcional: `python3 verify.py` revisa JSON-LD, enlaces locales, sitemap, subtítulos y abre
   cada página con Playwright a 1280 y 390 px.
6. Sube los cambios a `main`; GitHub Pages republica el sitio en uno o dos minutos.

## Checklist SEO después de publicar

1. **Google Search Console** (https://search.google.com/search-console): agrega la propiedad
   `https://tutoriales-confeccion.chilemaquina.pro/` (o el dominio `chilemaquina.pro`), verifica con
   un registro TXT en el DNS y en **Sitemaps** envía `sitemap.xml`.
2. **Bing Webmaster Tools** (https://www.bing.com/webmasters): agrega el sitio (puedes importarlo
   desde Search Console) y envía el mismo `sitemap.xml`.
3. **robots.txt por bot**: comprueba que cada bot recibe `200`:
   ```
   for ua in Googlebot Bingbot OAI-SearchBot ChatGPT-User GPTBot Claude-SearchBot Claude-User ClaudeBot PerplexityBot Perplexity-User; do
     printf "%-18s" "$ua"; curl -s -o /dev/null -w "%{http_code}\n" -A "$ua" https://tutoriales-confeccion.chilemaquina.pro/polera/
   done
   curl -s https://tutoriales-confeccion.chilemaquina.pro/robots.txt
   curl -s https://tutoriales-confeccion.chilemaquina.pro/llms.txt
   ```
   Si usas Cloudflare u otro CDN, revisa que no bloquee bots de IA (opción "Block AI bots").
4. **Rich Results Test** (https://search.google.com/test/rich-results): prueba cada página de
   tutorial; debe detectar *Video* (con momentos clave), *Breadcrumb* y FAQ/HowTo. Revisa también
   https://validator.schema.org.
5. **Solicitar indexación**: en Search Console, **Inspección de URLs** → pega la URL de cada
   tutorial → **Solicitar indexación**. Repite cuando publiques un tutorial nuevo.
6. Después de unos días, revisa en Search Console **Videos** e **Páginas** (indexación de videos y
   errores).

## Contacto

WhatsApp ChileMáquina: [+56 9 4549 4865](https://wa.me/56945494865) · Tienda: https://chilemaquina.pro
