const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const baseDir = "c:/cursos/generation";
const refDir = path.join(baseDir, "10-Referencias");

// 1. Create content for new modules
const newFiles = {
  // 11-Git-GitHub
  "11-Git-GitHub/OBJETIVOS.md": "# 🎯 Objetivos: Git y GitHub\n1. Dominar ramas y merges.\n2. Resolver conflictos de código.\n3. Colaborar mediante Pull Requests.",
  "11-Git-GitHub/clases/01-FundamentosGit.md": "# Clase 1: Comandos Básicos (init, add, commit, status, log)",
  "11-Git-GitHub/clases/02-RamasYMerge.md": "# Clase 2: Branching y Merging, evitando conflictos",
  "11-Git-GitHub/clases/03-GitHubColaborativo.md": "# Clase 3: Remotos, Push, Pull y Pull Requests",
  "11-Git-GitHub/ejercicios/01-SimulacionConflicto.md": "# Reto: Crea dos ramas, modifica la misma línea, haz merge y resuelve el conflicto.",
  
  // 12-Testing
  "12-Testing/OBJETIVOS.md": "# 🎯 Objetivos: Pruebas Unitarias\n1. Entender TDD (Test Driven Development).\n2. Crear tests en Java con JUnit 5 y Mockito.\n3. Crear tests en JS/React con Jest.",
  "12-Testing/clases/01-IntroduccionTesting.md": "# Clase 1: ¿Por qué probar el código? Pirámide de Testing",
  "12-Testing/clases/02-JUnit_Java.java": "// Clase 2: Uso de @Test, @BeforeEach, y aserciones básicas en Java",
  "12-Testing/clases/03-Mockito_Java.java": "// Clase 3: Mocking de repositorios y servicios",
  "12-Testing/clases/04-Jest_React.jsx": "// Clase 4: Probando componentes en React",
  "12-Testing/ejercicios/01-TestCalculadora.java": "// Reto: Escribe los Unit Tests para cubrir el 100% de la calculadora",
  
  // 13-Despliegue-DevOps
  "13-Despliegue-DevOps/OBJETIVOS.md": "# 🎯 Objetivos: Despliegue (DevOps)\n1. Containerizar aplicaciones con Docker.\n2. Subir bases de datos a servicios PaaS.\n3. Desplegar Frontend y Backend en la Nube (AWS/Render).",
  "13-Despliegue-DevOps/clases/01-ConceptosDocker.md": "# Clase 1: Imágenes, Contenedores y Dockerfile",
  "13-Despliegue-DevOps/clases/02-DockerCompose.md": "# Clase 2: Orquestando DB + Backend con docker-compose.yml",
  "13-Despliegue-DevOps/clases/03-DespliegueNube.md": "# Clase 3: Opciones PaaS (Render, Heroku, AWS EC2)",
  "13-Despliegue-DevOps/ejercicios/01-ContainerizarAPI.md": "# Reto: Crea un Dockerfile para el API de Spring Boot que construiste.",
  
  // 10-Referencias updates
  "10-Referencias/11-Git-GitHub/plan_estudio.md": "# Plan de Estudio: Git\n**Libro:** Git Notes for Professionals\n**Ritmo:** 1 hora diaria. **Duración:** 2 Semanas.",
  "10-Referencias/12-Testing/plan_estudio.md": "# Plan de Estudio: Testing\n**Recurso:** Documentación oficial de JUnit y Jest\n**Ritmo:** 1 hora diaria. **Duración:** 3 Semanas.",
  "10-Referencias/13-Despliegue-DevOps/plan_estudio.md": "# Plan de Estudio: DevOps\n**Recurso:** Docker Docs y guías de nube\n**Ritmo:** 2 horas diarias. **Duración:** 3 Semanas."
};

// Write files
for (const [relPath, content] of Object.entries(newFiles)) {
  const fullPath = path.join(baseDir, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
}

// 2. Copy Git PDF
const srcGitPdf = "C:/Users/LuisFernandoMartínez/OneDrive - P&A INTEGRITY MANAGEMENT COMPANY SA DE CV/Documents/Biblioteca/Programación/GitNotesForProfessionals.pdf";
const destGitPdf = path.join(refDir, "11-Git-GitHub/GitNotesForProfessionals.pdf");
try {
  if (fs.existsSync(srcGitPdf)) {
    fs.copyFileSync(srcGitPdf, destGitPdf);
  }
} catch (e) { console.error("Could not copy Git PDF:", e); }

// 3. Update SEGUIMIENTO.md
const seguimientoPath = path.join(baseDir, "SEGUIMIENTO.md");
let content = fs.readFileSync(seguimientoPath, 'utf8');

const insertText = `
---

## 🌳 11 - Control de Versiones (Git y GitHub)
- **Ruta de Aprendizaje**
  - [ ] \`OBJETIVOS.md\`
- **Clases**
  - [ ] \`01-FundamentosGit.md\`
  - [ ] \`02-RamasYMerge.md\`
  - [ ] \`03-GitHubColaborativo.md\`
- **Ejercicios**
  - [ ] \`01-SimulacionConflicto.md\`

---

## 🧪 12 - Testing y Calidad de Código
- **Ruta de Aprendizaje**
  - [ ] \`OBJETIVOS.md\`
- **Clases**
  - [ ] \`01-IntroduccionTesting.md\`
  - [ ] \`02-JUnit_Java.java\`
  - [ ] \`03-Mockito_Java.java\`
  - [ ] \`04-Jest_React.jsx\`
- **Ejercicios**
  - [ ] \`01-TestCalculadora.java\`

---

## ☁️ 13 - Despliegue y DevOps
- **Ruta de Aprendizaje**
  - [ ] \`OBJETIVOS.md\`
- **Clases**
  - [ ] \`01-ConceptosDocker.md\`
  - [ ] \`02-DockerCompose.md\`
  - [ ] \`03-DespliegueNube.md\`
- **Ejercicios**
  - [ ] \`01-ContainerizarAPI.md\`
`;

// Insert before module 09 (Exámenes)
content = content.replace("## 🎓 09 - Exámenes y Pruebas Técnicas", insertText.trim() + "\n\n---\n\n## 🎓 09 - Exámenes y Pruebas Técnicas");
fs.writeFileSync(seguimientoPath, content);

console.log("Modulos extra generados exitosamente.");

// 4. Git Commit and Push
try {
  console.log("Realizando commit y push...");
  execSync('git add .', { cwd: baseDir });
  execSync('git commit -m "feat: add Git, Testing and DevOps modules to complete curriculum"', { cwd: baseDir });
  execSync('git push --force', { cwd: baseDir });
  console.log("Push completado.");
} catch (e) {
  console.error("Error en git:", e.stdout ? e.stdout.toString() : e);
}
