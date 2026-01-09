# Finca La Carmelita - Landing Page

Landing page premium para Finca La Carmelita, un espacio de descanso en la naturaleza con cancha de fútbol profesional.

## 🚀 Características

- **Next.js 14+** con App Router y TypeScript
- **TailwindCSS** para estilos modernos y responsive
- **shadcn/ui** para componentes elegantes
- **Framer Motion** para animaciones suaves
- **Lucide React** para iconos consistentes
- Diseño one-page con navegación suave
- Optimizado para SEO y performance
- Botón flotante de WhatsApp
- Completamente responsive

## 🎨 Paleta de Colores

- **Verde Bosque**: `#1F5F43`
- **Salvia**: `#9DB8A0`
- **Tierra**: `#7A5A3A`
- **Beige**: `#EFE7D8`
- **Cielo**: `#7DAFC2`
- **CTA Verde**: `#18B36A`
- **Texto**: `#2E2E2E`

## 📱 Secciones

1. **Header** - Navegación sticky con logo y CTA
2. **Hero** - Presentación principal con animaciones
3. **Estadía & Cancha** - Cards con precios y características
4. **Galería** - 10 placeholders de imágenes con efectos
5. **Ubicación** - Información de ubicación con mapa placeholder
6. **FAQ** - Preguntas frecuentes en acordeón
7. **Footer** - Información de contacto y redes sociales
8. **WhatsApp Float** - Botón flotante con animación

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Instalación

1. **Clona o descarga el proyecto**
   ```bash
   # Si clonas desde git
   git clone <url-del-repo>
   cd finca-la-carmelita
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura shadcn/ui** (si no está configurado)
   ```bash
   npx shadcn@latest init --yes
   ```

4. **Instala los componentes de shadcn/ui**
   ```bash
   npx shadcn@latest add button
   npx shadcn@latest add accordion
   ```

### Desarrollo

```bash
# Ejecuta el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Producción

```bash
# Construye para producción
npm run build

# Ejecuta en modo producción
npm start
```

## 📂 Estructura del Proyecto

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globales y Tailwind
│   │   ├── layout.tsx       # Layout principal con metadata
│   │   └── page.tsx         # Página principal one-page
│   └── components/
│       ├── Header.tsx       # Navegación superior
│       ├── Hero.tsx         # Sección principal
│       ├── PlanCards.tsx    # Cards de estadía y cancha
│       ├── Gallery.tsx      # Galería de imágenes
│       ├── Location.tsx     # Información de ubicación
│       ├── FAQ.tsx          # Preguntas frecuentes
│       ├── Footer.tsx       # Pie de página
│       └── WhatsAppFloat.tsx # Botón flotante de WhatsApp
├── public/
│   └── placeholder.jpg      # Placeholder para imágenes
├── components.json          # Configuración de shadcn/ui
├── tailwind.config.js       # Configuración de TailwindCSS
└── package.json
```

## 🎯 Próximos Pasos

### Reemplazos Necesarios

1. **Imágenes**: Reemplaza los placeholders en `public/` con imágenes reales de la finca
2. **Google Maps**: Actualiza el enlace en `Location.tsx` con la ubicación real
3. **SEO Images**: Agrega `og-image.jpg` en `public/` para compartir en redes sociales
4. **Contenido**: Revisa y actualiza cualquier información que cambie

### Optimizaciones

- Implementa lazy loading para imágenes
- Agrega más animaciones sutiles
- Considera implementar un CMS para gestión de contenido
- Agrega analytics (Google Analytics, etc.)

## 🌐 Despliegue en Vercel

1. **Conecta tu repositorio** en [Vercel](https://vercel.com)
2. **Configura las variables de entorno** (si es necesario)
3. **Deploy automático** en cada push a main

## 📞 Contacto

- **WhatsApp**: [+57 301 385 1608](https://wa.me/573013851608)
- **Instagram**: [@fincalacarmelita](https://instagram.com/fincalacarmelita)
- **TikTok**: [@fincalacarmelita](https://tiktok.com/@fincalacarmelita)

## 📋 Notas Importantes

- Todo el contenido está en español
- Los precios y horarios están actualizados según la información proporcionada
- El diseño es completamente responsive
- Se siguen las mejores prácticas de accesibilidad
- Performance optimizada con componentes ligeros

---

**Desarrollado con ❤️ para Finca La Carmelita**
