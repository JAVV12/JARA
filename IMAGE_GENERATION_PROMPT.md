# 🎨 Imagen Hero - Finca La Carmelita

## 📋 Descripción para Generación con IA

### 🎯 **Prompt Optimizado para Herramientas de IA:**

```
A cinematic ultra-realistic photograph of a Colombian countryside finca at golden hour.
Wide soccer field on the right side, green grass perfectly cut, white goalpost visible.
On the left side a warm rustic country house with clay roof, wooden details and soft yellow lights inside.
Mountains and trees in the background.
Soft mist in the distance.
Warm sunlight, calm atmosphere, peaceful but energetic.
Feeling of escape, rest, freedom and sport.

Camera: wide angle 24mm
Depth of field: natural
Lighting: golden hour sunlight, soft shadows
Style: cinematic, photorealistic, premium lifestyle photography
Color grading: warm beige highlights, soft green shadows, creamy whites
No people.
No text.
No logos.
High detail, 8K resolution.
```

### 🎯 **Prompt Anterior (Referencia):**

```
Crea una imagen panorámica y atractiva de una hermosa finca rural llamada "Finca La Carmelita" con una cancha de fútbol profesional, que transmita paz, naturaleza y diversión. La imagen debe generar ganas irresistibles de visitar el lugar.

**Elementos principales:**
- Una finca colonial encantadora con arquitectura tradicional colombiana
- Jardines verdes exuberantes y árboles frondosos
- Una cancha de fútbol profesional bien mantenida con césped perfecto
- Montañas verdes al fondo creando un paisaje impresionante
- Cielo azul con algunas nubes suaves
- Atmósfera cálida y acogedora con luz dorada del atardecer

**Elementos específicos para incluir:**
- Casa principal con techo de tejas rojas
- Área de descanso con hamacas o muebles de jardín
- Árboles frutales y flores coloridas
- Senderos de piedra o tierra
- Cercas de madera rústica

**Atmósfera que debe transmitir:**
- Paz y tranquilidad absoluta
- Conexión con la naturaleza
- Alegría y diversión familiar
- Calidez y hospitalidad colombiana
- Escape perfecto del estrés urbano
```

### 🔧 **Especificaciones Técnicas:**

- **Formato:** JPG o PNG de alta calidad
- **Resolución:** Mínimo 1920x1080 (Full HD)
- **Aspect Ratio:** 16:9 (panorámico)
- **Estilo:** Fotorealista con elementos artísticos
- **Colores:** Gama natural y cálida

### 📁 **Implementación en el Proyecto:**

Una vez generada la imagen, guárdala como:
```
public/hero-background.jpg
```

**Especificaciones requeridas:**
- **Formato:** JPG o PNG
- **Resolución mínima:** 1920x1080 (Full HD)
- **Aspect Ratio:** 16:9 (horizontal)
- **Calidad:** Alta resolución, sin compresión visible

**El código ya está preparado:**
```tsx
<div className="absolute inset-0">
  <img
    src="/hero-background.jpg"
    alt="Finca La Carmelita - Cancha de fútbol en medio de la naturaleza"
    className="w-full h-full object-cover"
  />
</div>
```

**Nota:** La imagen se mostrará con un overlay semitransparente para mantener la legibilidad del texto.

### 🎨 **Herramientas Recomendadas para Generación:**

#### 1. **Midjourney** (Discord) - RECOMENDADO
```
/imagine prompt: A cinematic ultra-realistic photograph of a Colombian countryside finca at golden hour. Wide soccer field on the right side, green grass perfectly cut, white goalpost visible. On the left side a warm rustic country house with clay roof, wooden details and soft yellow lights inside. Mountains and trees in the background. Soft mist in the distance. Warm sunlight, calm atmosphere, peaceful but energetic. Feeling of escape, rest, freedom and sport. --ar 16:9 --v 6 --q 2 --style raw
```

#### 2. **DALL-E 3** (ChatGPT Plus)
```
Generate a cinematic ultra-realistic photograph of a Colombian countryside finca at golden hour. Show a wide soccer field on the right with perfectly cut green grass and visible white goalposts. On the left, depict a warm rustic country house with clay roof, wooden details, and soft yellow lights glowing from inside. Include mountains and trees in the background with soft mist in the distance. Use warm golden hour sunlight with soft shadows. Create a calm but energetic atmosphere that conveys feelings of escape, rest, freedom, and sport. Style: cinematic photorealistic premium lifestyle photography. No people, text, or logos. 16:9 aspect ratio, high detail.
```

#### 3. **Stable Diffusion** (Automatic1111 WebUI)
- **Modelo recomendado:** Realistic Vision o Anything V5
- **Pasos:** 50-100
- **CFG Scale:** 7-12
- **Negative Prompt:** `blurry, low quality, distorted, ugly, poorly drawn, cartoon, anime, text, watermark, logo, people, crowds`

#### 4. **Firefly** (Adobe) - Para usuarios de Adobe Creative Cloud

### ⚙️ **Ajustes Técnicos Recomendados:**

| Herramienta | Aspect Ratio | Resolución | Estilo |
|-------------|-------------|------------|--------|
| Midjourney | --ar 16:9 | Automático | --style raw |
| DALL-E 3 | 16:9 | Alta | Photorealistic |
| Stable Diffusion | 1920x1080 | 8K | Cinematic |
| Adobe Firefly | 16:9 | Máxima | Photography |

### 🔍 **Consejos para Mejorar la Generación:**

1. **Midjourney:** Usa `--v 6` para versión más reciente, `--q 2` para mayor calidad
2. **DALL-E:** Sé específico con la composición (izquierda/derecha)
3. **Iluminación:** Enfatiza "golden hour" para atmósfera cálida
4. **Estilo:** "Cinematic photorealistic" da mejores resultados que solo "realistic"

### 🎯 **Resultado Final:**

La imagen debe ser tan atractiva que cualquier persona que la vea sienta el deseo inmediato de:
- Respirar aire fresco de montaña
- Correr por la cancha de fútbol
- Relajarse en los jardines
- Disfrutar de la tranquilidad absoluta
- Planear su visita inmediata

**¡Esta imagen será el corazón visual de tu landing page!** 🌟