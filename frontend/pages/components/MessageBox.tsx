import React from "react";
import Avvvatars from 'avvvatars-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'

const MessageBox: React.FC<{text: string, author: 'AI' | 'user'}> = ({text, author}) => (
<div className={`flex items-center gap-2  ${author == 'user' ? 'ml-auto' : ''}`}>
<Avvvatars shadow value={author} />
  <div className={` whitespace-pre-line text-left px-6 first-letter:capitalize py-2 shadow bg-white rounded-md text-slate-800 `}>
   <ReactMarkdown className="prose prose-lg " rehypePlugins={[[rehypePrism, { ignoreMissing: true }]]} remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
  </div>
</div>
)
export default MessageBox