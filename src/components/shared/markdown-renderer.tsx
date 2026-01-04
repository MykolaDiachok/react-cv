import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';

import 'highlight.js/styles/github.css';

interface MarkdownRendererProperties {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProperties> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
      components={{
        ul: ({ node, ...properties }) => {
          void node;
          return <ul className="list-disc pl-6 space-y-1" {...properties} />;
        },
        ol: ({ node, ...properties }) => {
          void node;
          return <ol className="list-decimal pl-6 space-y-1" {...properties} />;
        },
        li: ({ node, ...properties }) => {
          void node;
          return <li {...properties} />;
        },
        p: ({ node, ...properties }) => {
          void node;
          return <p {...properties} />;
        },
        div: ({ node, ...properties }) => {
          void node;
          return <div {...properties} />;
        },
        h3: ({ node, children, ...properties }) => {
          void node;
          return (
            <h3 className="not-first:mt-5 font-semibold" {...properties}>
              {children}
            </h3>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
