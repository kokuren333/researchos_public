import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const workflow=JSON.parse(await readFile(path.join(root,"workflows/appraise-observational-study/workflow.yaml"),"utf8"));
const artifact=JSON.parse(await readFile(path.join(root,"dist/generated/appraise-observational-study.json"),"utf8"));
const steps=workflow.steps.map((s,i)=>({step_id:s.id,skill_id:s.skill,status:artifact.steps[i]?.status??"failed",resolved_inputs:s.inputs,output_ref:`${s.id}.output`,inputs_from:Object.fromEntries(Object.entries(s.inputs).filter(([,v])=>!v.startsWith("workflow.")))}));
const execution={workflow_id:workflow.id,workflow_version:workflow.version,steps,artifact:{type:workflow.final_artifact.type,filename:workflow.final_artifact.filename,source_steps:workflow.steps.map(s=>`${s.id}.output`)},validation:{deterministic:true,all_steps_completed:steps.every(s=>s.status==="completed"),provenance_recorded:true}};
if(!execution.validation.all_steps_completed)throw new Error("workflow contains incomplete step"); await mkdir(path.join(root,"dist/generated"),{recursive:true}); await writeFile(path.join(root,"dist/generated/appraise-observational-study.execution.json"),JSON.stringify(execution,null,2),"utf8"); console.log("workflow execution record written");
