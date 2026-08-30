# Field generality audit

Physics exposes the first major difference from Statistics: its orientation is organized around state, dynamics, interaction, conservation, symmetry, scale, approximation, and measurement rather than sampling and inference.

The public renderer now emits both `/fields/statistics/` and `/fields/physics/`, and each Field owns its own 30-concept data and learning guide. Internal IDs remain English and stable. The current limitation is that the build script still contains compact field-specific content blocks; the next refactor should move these into a declarative Field manifest before adding a third Field.

## Findings

- Field-specific: orientation prose, questions, methods, debates, failure modes, canon, frontier, concept definitions, learning sequence.
- Shared: locale shell, concept route shape, prerequisite link shape, Source link rendering, static output contract.
- Resolved: Statistics-only 30-concept count is no longer used to build Physics.
- Remaining: YAML is currently validated by presence tests rather than a full YAML parser; cross-field Meta Concept records need richer field realization data.
