import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),".."); const maps=JSON.parse(await readFile(path.join(root,"domains/concept-maps.json"),"utf8")); const ids=new Set(); for(const map of maps){if(map.concepts.length!==30)throw new Error(`${map.domain} must contain 30 concepts`); for(const c of map.concepts){const id=`${map.domain}.${c}`; if(ids.has(id))throw new Error(`duplicate Concept ID: ${id}`); ids.add(id);}} if(ids.size!==180)throw new Error(`expected 180 concepts, got ${ids.size}`); console.log(`concept corpus passed: ${maps.length} domains, ${ids.size} concepts`);
