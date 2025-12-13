
Diapositivas principales

- Introducción: autor, rol y contexto de la charla; diferencia entre “vibe coding” y “software engineering”.

- Paradoja del “vibe coding”: alta adopción, baja confianza; necesidad de control senior.

- Métricas de sobrecarga: +154% tamaño de PR, +91% tiempo de review, +9% bugs/dev; capacidad humana 200–400 LOC/h vs 1000 LOC/h de IA.

- Code churn y refactorización: aumento de copy‑paste (GitClear, 211M LOC), menos refactor; +41% churn.

- Seguridad: 30% del código de IA con vulnerabilidades; randomness pobre, inyección, XSS.

- Estudios METR 2025: seniors 19% más lentos objetivamente, aunque perciben ir 20% más rápido.

- Framework 4R: Riesgo, Legibilidad, Confiabilidad, Resiliencia; preguntas y controles por cada R.

 ▫ Riesgo: secretos, escalado de privilegios, validación de inputs; herramientas: SonarQube, pre‑commit.

 ▫ Legibilidad: linters, Prettier, nombres claros, complejidad <10, documentación del “por qué”.

 ▫ Confiabilidad: TDD con IA, generar tests y hacerlos pasar, iterar edge cases.

 ▫ Resiliencia: recursos, graceful degradation, retry/backoff, observabilidad.

- Límite humano y PRs: detección 70–90% con 200–400 LOC; atención decae tras 10–60 min.

- Stack PRs: dividir una feature en 3 PRs pequeñas; soporte nativo en GitHub y alternativa con feature flags.

- Pre‑commit hooks: pipeline de lint/format/security/tests/E2E; herramienta Husky “instalación en 5 minutos”, bloquea commits si fallan.

- Prompts “guardrail‑PR”: contexto, tarea, archivos/líneas, limitaciones, resultado esperado, validación con ejemplos (few‑shot) y cadena de pensamiento/planificación.

- Revisores aumentados: GitHub Copilot, C‑Rabbit, Kudu Merge; guía automática en ~30s; +90% satisfacción, −40% tiempo de review.

- Regla de oro y explicabilidad: revisar todas las líneas solo con ≤400 LOC; pensar si se explica en 6 meses.

- Casos reales:

 ▫ Amazon: migraciones en 30 000 apps, ahorro 260 M/año en <6 meses, 79% del código de IA sin cambios al ser caso específico.

 ▫ Gobierno UK: 2500 licencias, ~100 activadas; ahorro 1h/día; 39% del código comiteado por IA; necesidad de entrenamiento.

- Qué funciona vs no:

 ▫ Funciona: procesos correctos, boilerplates, testing, documentación, casos específicos, training.

 ▫ No funciona: vibe coding, copiar/pegar sin entender, saltarse gates, no adaptar procesos.

- Plan semanal de adopción: limitar PRs, pre‑commit hooks, métricas útiles, checklist de review, piloto de stack PRs + entrenamiento.

- Cierre: la IA mal usada crea caos; bien usada da hasta ×5 beneficios; priorizar proceso sobre herramienta y aplicar ≤200 LOC/PR, stack PRs, pre‑commit hooks.

- Q&A: uso de IA para análisis técnico/documentación guiado por humanos; cómo convencer al equipo de PRs pequeñas mediante experimentos y adaptación al contexto.
