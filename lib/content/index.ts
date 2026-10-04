import type {Note,Build,Tool} from '../schemas/content';
import { prompts } from './prompts';
import { skills } from './skills';
export const note:Note={editorialStatus:'draft',title:'我为什么开始自己做 Codex 用量监控器？',slug:'why-i-built-codex-monitor',summary:'草稿：触发场景、尝试过程与实验记录仍待作者核实。',topic:'AI × 真实工作',tags:['Codex','工作流'],date:'2026-10-01',readingTime:'2 分钟',relatedBuild:'codex-usage-monitor',relatedTool:'codex-usage-monitor'};
export const build:Build={title:'Codex Usage Monitor',slug:'codex-usage-monitor',summary:'开发计划：数据来源与实际功能仍待验证。',topic:'AI × 真实工作',tags:['Codex','工作流'],problem:'具体使用场景与当前信息缺口待作者提供与核实。',hypothesis:'如果用量信息更容易理解，可能更方便安排工作。此假设尚未验证。',status:'ACTIVE',timeline:['2026-10-01 · 本站建立监控器的草稿、项目记录与演示外壳。','监控器开发过程与测试记录：待作者补充。'],evidence:['暂无已核实的监控器测试证据。'],decisions:['本站先提供记录与演示外壳，真实能力接入前需核实数据来源。'],currentState:'开发计划。演示外壳尚未接入真实数据，监控器的实现情况待作者核实。',result:'待补充，当前没有可验证的监控器效果数据。',relatedNotes:[note.slug],relatedTool:'codex-usage-monitor'};
export const tool:Tool={category:"app",title:'Codex Usage Monitor',slug:'codex-usage-monitor',summary:'用量监控器的演示外壳，等待真实能力接入。',topic:'AI × 真实工作',tags:['Codex','工作流'],problem:build.problem,description:'计划帮助查看 Codex 用量与工作节奏；当前仅提供演示状态说明，不读取任何账号数据。',status:'BUILDING',launchUrl:'/tools/codex-usage-monitor/app',relatedBuild:build.slug,relatedNotes:[note.slug]};
export const entries=[{title:"Morty OS",slug:"morty-os",summary:"已上线技能与提示词分享、内容浏览、搜索与移动适配的个人网站。",topic:"AI × 真实工作",tags:["网站设计","工作流"],status:"SHIPPED",kind:"builds",label:"首版已发布"},{title:"还没有落地工具，个人网站应该展示什么？",slug:"building-an-honest-homepage",summary:"来自 Morty OS 实际迭代的实践笔记：区分本站成果、第三方分享和开发计划，让入口兑现承诺。",topic:"AI × 真实工作",tags:["网站设计","工作流"],editorialStatus:'ready',kind:"notes",label:"实践文章"},{...note,kind:'notes',label:'草稿 · 待核实'},{...build,kind:'builds',label:'开发计划 · 待核实'},{...tool,kind:'tools',label:'演示外壳 · 暂不可用'},
  {kind:'tools',category:'skill',slug:'ponytail',title:'Ponytail',summary:'让 AI 少绕弯，用简单方案减少不必要的 Token 消耗。提供安装命令与作者测试。',topic:'AI × 真实工作',tags:['Codex','技能','工作流'],label:'第三方技能'},
  ...skills.map(s=>({kind:'tools',category:'skill',slug:s.slug,title:s.title,summary:s.summary,topic:'AI × 真实工作',tags:['Codex','技能',s.name,...s.tags],label:'第三方技能'})),
  ...prompts.map(p=>({kind:'tools',category:'prompt',slug:`prompt-${p.id}`,title:p.title,summary:p.summary,topic:'AI × 真实工作',tags:['提示词',p.kind],label:'社区用法 · 中文整理'}))
];


