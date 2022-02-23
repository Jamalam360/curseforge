import { CurseForgeApi } from "../mod.ts";

const token = prompt("Enter CF API Token: ")!;
const api = new CurseForgeApi(token);

const res = await api.games();

console.log(res);
