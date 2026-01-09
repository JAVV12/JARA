# 🎨 Guía Completa para Generar Imagen AI del Hero

## 📋 Prompt Optimizado para Cada Herramienta

### 🎯 **Prompt Base:**
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
No people. No text. No logos.
High detail, 8K resolution.
```

---

## 🛠️ **Instrucciones por Herramienta**

### 1. **Midjourney (Discord) - RECOMENDADO**
```
/imagine prompt: A cinematic ultra-realistic photograph of a Colombian countryside finca at golden hour. Wide soccer field on the right side, green grass perfectly cut, white goalpost visible. On the left side a warm rustic country house with clay roof, wooden details and soft yellow lights inside. Mountains and trees in the background. Soft mist in the distance. Warm sunlight, calm atmosphere, peaceful but energetic. Feeling of escape, rest, freedom and sport. --ar 16:9 --v 6 --q 2 --style raw --q 2
```

**Parámetros importantes:**
- `--ar 16:9` = Aspect ratio correcto
- `--v 6` = Última versión del modelo
- `--q 2` = Mayor calidad
- `--style raw` = Estilo más realista

**Consejos:**
- Si no queda perfecto, usa `--v 6 --ar 16:9 --q 2 --stylize 200`
- Para más detalle usa `U 1`, `U 2`, `U 3`, etc. en las variaciones

---

### 2. **DALL-E 3 (ChatGPT Plus)**
```
Create a highly detailed, cinematic photograph of a peaceful Colombian countryside finca during golden hour. The composition shows a wide soccer field on the right side with perfectly manicured green grass and visible white goalposts. On the left side, depict a charming rustic country house with traditional clay roof tiles, wooden architectural details, and warm yellow light emanating from the windows. In the background, include rolling mountains covered with trees, and a soft mist hanging in the distant valleys. The lighting should be warm golden hour sunlight casting soft, natural shadows. The overall atmosphere should convey peace, relaxation, and gentle energy. Use a wide-angle 24mm camera perspective with natural depth of field. Color palette: warm beige highlights, soft green shadows, creamy whites. No people, text, or logos. Photorealistic style, 8K resolution, horizontal composition.
```

**Consejos:**
- Sé muy específico con la composición (izquierda/derecha)
- Menciona "photorealistic" y "cinematic" para mejores resultados
- Si no sale bien, pide "more photorealistic" o "higher detail"

---

### 3. **Stable Diffusion (Automatic1111)**
**Prompt positivo:**
```
cinematic photograph, photorealistic, Colombian countryside finca, golden hour lighting, wide soccer field right side, perfectly cut green grass, white goalposts, rustic country house left side, clay roof, wooden details, yellow warm lights inside windows, mountains background, trees, soft mist distance, warm sunlight, calm atmosphere, peaceful energetic, 24mm wide angle, natural depth of field, soft shadows, beige highlights, green shadows, creamy whites, no people, no text, no logos, highly detailed, 8k resolution
```

**Prompt negativo:**
```
blurry, low quality, distorted, ugly, poorly drawn, cartoon, anime, text, watermark, logo, people, crowds, modern buildings, urban, city, cars, vehicles, roads, pavement, concrete, plastic, metal structures, wires, poles
```

**Configuración:**
- **Modelo:** Realistic Vision o Anything V5
- **Pasos:** 50-100
- **CFG Scale:** 7-12
- **Sampler:** Euler a o DPM++ 2M Karras
- **Resolution:** 1920x1080
- **Hires fix:** On (para mejor calidad)

---

### 4. **Adobe Firefly**
```
Photorealistic image of a Colombian countryside estate at sunset. Wide-angle view showing a soccer field on the right with green grass and goalposts, and a rustic house on the left with clay roof and warm lighting. Mountains and trees in background with mist. Cinematic lighting, peaceful atmosphere.
```

**Configuración:**
- **Estilo:** Photography
- **Aspect Ratio:** 16:9 Landscape

---

## 📋 **Checklist para la Imagen Perfecta**

- [ ] **Composición correcta:** Cancha derecha, casa izquierda
- [ ] **Atmósfera golden hour:** Luz cálida del atardecer
- [ ] **Colores naturales:** Beige, verdes suaves, blancos cremosos
- [ ] **Estilo cinematográfico:** Fotografía profesional
- [ ] **Detalles colombianos:** Arquitectura tradicional, naturaleza
- [ ] **Sin elementos:** Personas, texto, logos
- [ ] **Resolución:** Mínimo 1920x1080, ideal 8K
- [ ] **Formato:** 16:9 horizontal

---

## 🚀 **Implementación Final**

1. **Genera la imagen** con cualquiera de las herramientas arriba
2. **Descarga en alta calidad** (sin compresión)
3. **Guarda como:** `public/hero-ai-background.jpg`
4. **Sobreescribe el archivo actual**
5. **¡Listo!** La imagen aparecerá automáticamente en el hero

---

## 🎨 **Si la Imagen no Queda Perfecta**

### Problemas Comunes y Soluciones:

**🏠 Casa no se ve rústica:**
- Agrega: "traditional Colombian architecture, clay tiles, wooden beams"
- Evita: "modern house, contemporary design"

**⚽ Cancha no se ve deportiva:**
- Agrega: "professional soccer field, well-maintained grass"
- Evita: "small field, overgrown grass"

**🌄 Colores demasiado vibrantes:**
- Agrega: "natural colors, earthy tones, muted palette"
- Evita: "bright colors, saturated, vivid"

**📷 Composición incorrecta:**
- Agrega: "wide composition, field on right side, house on left side"
- Usa referencias visuales si es posible

---

## 💡 **Prompts Alternativos por Estilo**

### Más Enfocado en Naturaleza:
```
Peaceful Colombian mountain finca at golden hour, soccer field, rustic house, lush greenery, misty mountains, warm sunset light, cinematic photography, photorealistic, serene atmosphere
```

### Más Deportivo:
```
Colombian countryside sports complex, professional soccer field with green turf, traditional finca house nearby, mountain landscape, golden hour lighting, peaceful but active atmosphere
```

### Más Arquitectónico:
```
Traditional Colombian hacienda with clay roof and wooden details, adjacent soccer field, mountain backdrop, golden hour photography, warm lighting, peaceful rural setting
```

---

**¡Genera la imagen perfecta y reemplaza el placeholder actual!** 🌟