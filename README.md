# JSK Autopartes — jskautopartes.com

Sitio web estático (HTML + CSS + JS, sin dependencias ni compilación), adaptado a móviles y escritorio.

## Estructura

```
index.html              Página única con todas las secciones
assets/css/styles.css   Estilos (colores del logotipo en :root)
assets/js/main.js       Menú móvil y formulario de cotización
assets/img/             Logotipo, favicon e imagen para redes sociales
CNAME                   Dominio para GitHub Pages
robots.txt, sitemap.xml SEO básico
```

## Secciones

1. **Inicio** — mensaje principal y botón de WhatsApp
2. **Por qué JSK** — servicio personalizado
3. **Productos** — categorías de repuestos y tipos de vehículo
4. **Importación** — repuestos difíciles de conseguir y proceso en 4 pasos
5. **Empresas** — flotillas, talleres e instituciones
6. **Cobertura** — las 7 provincias de Costa Rica
7. **Preguntas frecuentes**
8. **Contacto** — el formulario arma el mensaje y lo abre en WhatsApp o en el correo (no requiere servidor)

## Ver localmente

```
python3 -m http.server 8000
```

y abrir http://localhost:8000

## Publicar

Funciona en cualquier hosting estático (GitHub Pages, Netlify, Cloudflare Pages, etc.).
En GitHub Pages: *Settings → Pages → Deploy from a branch* y apuntar el DNS de
`jskautopartes.com` a GitHub Pages (el archivo `CNAME` ya está incluido).

## Contacto

- WhatsApp: +506 7081-3307
- Correo: info@jskautopartes.com
