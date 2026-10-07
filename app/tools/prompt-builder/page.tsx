import PromptBuilder from '../../../components/tools/prompt-builder';

export const metadata = {
  title: '提示词整理器',
  description: '选择整理资料、学习知识或梳理想法，补充需求和条件，组合一份可复制的提示词。仅在当前页面处理，不调用 AI 模型。',
};

export default function Page() { return <PromptBuilder />; }
