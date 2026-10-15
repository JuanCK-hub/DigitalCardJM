# Tarjeta digital · Jaqueline Martinez

Web estática en HTML, CSS y JavaScript. No depende de Framer ni requiere compilación.

## Archivos

- `dist/index.html`: contenido y enlaces.
- `dist/styles.css`: diseño y animaciones.
- `dist/assets/`: imágenes, iconos y fuente Black Mango.
- Manrope Regular (400) y Light (300) se cargan desde Google Fonts.
- `netlify.toml`: configuración de publicación.

## Vista local

Desde la carpeta del proyecto:

```sh
python3 -m http.server 4173 --directory dist
```

Abrir http://localhost:4173/.

## GitHub y Netlify

1. Descomprimir este proyecto.
2. Crear un repositorio en GitHub y subir el contenido de la carpeta, manteniendo `dist` y `netlify.toml` en la raíz del repositorio.
3. En Netlify, importar ese repositorio desde GitHub.
4. Dejar vacío el comando de compilación y usar `dist` como directorio de publicación (declarado en `netlify.toml`).

Netlify publicará los archivos estáticos y podrá actualizar el sitio con cada cambio en GitHub.
