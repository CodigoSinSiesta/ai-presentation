– Introducción y contexto del ponente. ​⁠￼
– Diferencia entre “vibe coding” y “software engineering”; problemas de PR gigantes y necesidad de control senior. ​⁠￼
– Datos de adopción y confianza en IA: deseo de usarla vs baja confianza; iteración de prompts. ​⁠￼
– Cuello de botella en revisiones: aumento de tamaño de PR, tiempos de review y bugs por dev. ​⁠￼
– Capacidad humana de revisión: 200–400 líneas/hora vs 1000 líneas/hora generadas por IA; aumento de code churn y rework. ​⁠￼
– Copiar/pegar y menor refactorización; análisis de GitClear. ​⁠￼
– Seguridad: vulnerabilidades comunes (randomness pobre, inyección de código, XSS). ​⁠￼
– Paradoja: se mergea más rápido con IA, pero los seniors son más lentos por analizar riesgos; estudio METR 2025. ​⁠￼
– Framework 4R: Riesgo, Legibilidad, Confiabilidad, Resiliencia. ​⁠￼

Riesgo ￼

– Pregunta guía: “¿Se puede explotar todo?” Vulnerabilidades, secretos, escalado de privilegios, validación de inputs. ​⁠￼
– Herramientas: SonarQube, revisión humana, pre-commit hooks para tests/linters. ​⁠￼

Legibilidad ￼

– Linters, formateo, convenciones de nombres, complejidad ciclomática (<10), documentación del “por qué”. ​⁠￼
– Herramientas: ESLint, Prettier, Black, análisis de complejidad. ​⁠￼

Confiabilidad ￼

– Código de IA en ambientes ideales vs producción; TDD asistido por IA: generar tests, hacerlos pasar, iterar edge cases. ​⁠￼

Resiliencia ￼

– Estrés de recursos: memoria, CPU, balanceo; graceful degradation, retry/backoff, observabilidad/monitoreo. ​⁠￼

Límites humanos y estrategia de PR ￼

– Eficiencia de detección con 200–400 líneas; fatiga y atención decreciente. ​⁠￼
– Stack PRs: dividir una feature en varias PRs pequeñas; soporte nativo en GitHub y alternativa con feature flags. ​⁠￼
– Flujo de trabajo con PRs pequeñas y revisión más rápida. ​⁠￼

Pre-commit hooks ￼

– Pipeline: lint, format, reglas, seguridad, unit tests, end-to-end antes del commit.
– Uso de Husky para automatizar scripts y bloquear commits si fallan. ​⁠￼

Prompts “guardrail” ￼

– Contexto, tarea, archivos/líneas, limitaciones, resultado esperado, validación con ejemplos (few-shot), cadena de pensamiento/planificación con edge cases. ​⁠￼

Revisores aumentados (LLM linters) ￼

– Integraciones: GitHub Copilot para reviews automáticas, C-Rabbit, Kudu Merge (open source, reglas custom, self-host). ​⁠￼
– IA da guía de riesgos en ~30s; el senior decide qué aplicar; satisfacción +90%, tiempo de review −40%. ​⁠￼

Reglas de revisión ￼

– “Revisa todas las líneas” solo viable con ≤400 líneas; pensar en mantener explicabilidad a 6 meses con features pequeñas. ​⁠￼

Casos reales ￼

– Amazon: migraciones en 30 000 apps; ahorro 260 M/año en <6 meses; 79 % del código de IA sin cambios por ser caso específico bien definido. ​⁠￼
– Gobierno de UK: 2500 licencias, ~100 activadas; ahorro de 1h/día; 39 % del código comiteado por IA; aceptación 30 % industria vs menor interna; necesidad de entrenar equipos. ​⁠￼

Qué funciona y qué no ￼

– Funciona: procesos correctos, boilerplates, testing, documentación, casos específicos y training. ​⁠￼
– No funciona: vibe coding, “copiar/pegar sin entender”, saltarse gates de calidad, no adaptar procesos a la IA. ​⁠￼

Plan de acción semanal ￼

– Limitar PRs pequeñas. Lunes. ​⁠￼
– Pre-commit hooks en 5 minutos. Martes. ​⁠￼
– Métricas de observabilidad centradas en detección y tiempo de fix. Miércoles. ​⁠￼
– Checklist de revisión. Jueves. ​⁠￼
– Piloto de stack PRs y sesión de entrenamiento. Viernes. ​⁠￼

Cierre ￼

– La IA mal usada crea caos; bien usada puede dar hasta ×5 de beneficios.
– Importa el proceso por encima de la herramienta; aplicar 4R, ≤200 líneas por PR, stack PRs, pre-commit hooks. ​⁠￼

Q&A ￼

– Uso de IA para análisis técnico/documentación: tú guías el análisis; la IA destapa huecos y redacta; evitar “¿qué hago?” y usar planificación con contexto y riesgos. ​⁠￼
– Cómo convencer al equipo sobre PRs pequeñas: experimentar, comunicar beneficios, adaptar procesos al contexto del equipo, pensar en PR grande compuesta de PRs pequeñas (stack PR). ​⁠￼
