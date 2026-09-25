$ErrorActionPreference = "Stop"
$destDir = "C:\cursos\10-Referencias"

# Create folders
$folders = @("00-Fundamentos-Terminal", "01-HTML-CSS", "02-JavaScript", "03-Java-Core", "04-Bootstrap", "05-Node-Express", "06-Bases-De-Datos", "07-Java-SpringBoot", "08-React", "09-Fundamentos-Matematicos")
foreach ($f in $folders) {
    $path = Join-Path $destDir $f
    if (-not (Test-Path $path)) { New-Item -ItemType Directory -Force -Path $path | Out-Null }
}

# Copy existing from local library
$srcDir = "C:\Users\LuisFernandoMartínez\OneDrive - P&A INTEGRITY MANAGEMENT COMPANY SA DE CV\Documents\Biblioteca\Programación"
Copy-Item "$srcDir\PowerShellNotesForProfessionals.pdf" "$destDir\00-Fundamentos-Terminal\" -ErrorAction SilentlyContinue
Copy-Item "$srcDir\JavaScriptNotesForProfessionals.pdf" "$destDir\02-JavaScript\" -ErrorAction SilentlyContinue
Copy-Item "$srcDir\SQLNotesForProfessionals.pdf" "$destDir\06-Bases-De-Datos\" -ErrorAction SilentlyContinue
Copy-Item "$srcDir\Fundamentos de programación 4ta Edición Luis Joyanes Aguilar.pdf" "$destDir\09-Fundamentos-Matematicos\" -ErrorAction SilentlyContinue

# Since we don't have direct internet download guarantee without bot protection, we create links/placeholders for the others and generate the study plans.

function Create-StudyPlan {
    param($folder, $bookName, $weeks)
    $filePath = Join-Path $destDir "$folder\plan_estudio.md"
    $content = @"
# Plan de Estudio: $folder 🚀

**Libro de Referencia:** *$bookName*
**Ritmo estimado:** 1 a 2 horas diarias.
**Duración total:** $weeks Semanas.

Este plan de estudio está diseñado para acompañar el temario práctico de la carpeta principal.

---

## 📘 Fase 1: Fundamentos (Semanas 1 - 2)
- **Día 1-3:** Lectura de los capítulos iniciales (Sintaxis, configuración del entorno).
- **Día 4-7:** Pruebas de código en consola / navegador.
- **Meta:** Poder explicar los conceptos básicos sin leer el libro.

## 📙 Fase 2: Conceptos Intermedios y Avanzados (Semanas 3 - $weeks)
- **Día 1-3:** Estudio de patrones, métodos avanzados o arquitectura.
- **Día 4-7:** Resolución de los ejercicios de la carpeta principal aplicando lo leído.
- **Meta:** Implementar un mini-proyecto conectando este conocimiento.
"@
    Set-Content -Path $filePath -Value $content
}

Create-StudyPlan "00-Fundamentos-Terminal" "PowerShell Notes for Professionals" 3
Create-StudyPlan "01-HTML-CSS" "HTML5 & CSS3 Notes for Professionals (Descarga en Goalkicker)" 4
Create-StudyPlan "02-JavaScript" "JavaScript Notes for Professionals" 6
Create-StudyPlan "03-Java-Core" "Java Notes for Professionals (Descarga en Goalkicker)" 8
Create-StudyPlan "04-Bootstrap" "Bootstrap Notes for Professionals (Descarga en Goalkicker)" 3
Create-StudyPlan "05-Node-Express" "Node.js Notes for Professionals (Descarga en Goalkicker)" 5
Create-StudyPlan "06-Bases-De-Datos" "SQL Notes for Professionals" 5
Create-StudyPlan "07-Java-SpringBoot" "Spring Framework Notes for Professionals (Descarga en Goalkicker)" 7
Create-StudyPlan "08-React" "React JS Notes for Professionals (Descarga en Goalkicker)" 6
Create-StudyPlan "09-Fundamentos-Matematicos" "Fundamentos de Programación (Luis Joyanes)" 8

Write-Output "Done creating folders, copying PDFs and generating study plans."
