export type BuildStatus='ACTIVE'|'TESTING'|'SHIPPED'|'PAUSED'|'FAILED';
export type ToolStatus='LIVE'|'BETA'|'BUILDING'|'COMING_SOON'|'OPEN_SOURCE';
type Base={title:string;slug:string;summary:string;topic:string;tags:string[]};
export type Note=Base & {editorialStatus:'ready'|'draft';date:string;readingTime:string;relatedBuild:string;relatedTool:string};
export type Build=Base & {problem:string;hypothesis:string;status:BuildStatus;timeline:string[];evidence:string[];decisions:string[];currentState:string;result:string;relatedNotes:string[];relatedTool:string};
export type Tool=Base & {category:"app"|"skill"|"prompt";problem:string;description:string;status:ToolStatus;launchUrl:string;relatedBuild:string;relatedNotes:string[]};

