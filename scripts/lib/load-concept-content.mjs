import { readFile } from "node:fs/promises";
import path from "node:path";
export async function loadConceptContent(root,id){if(id==="measurement.validity")return JSON.parse(await readFile(path.join(root,"domains/priority-validity.json"),"utf8"));const all=JSON.parse(await readFile(path.join(root,"domains/priority-concepts.json"),"utf8"));return all.find(c=>c.id===id);}
