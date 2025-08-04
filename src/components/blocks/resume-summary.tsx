import { useResume } from '../../providers/use-resume.ts';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css'; // або dark/light стиль

export const ResumeSummary = () => {
  const { resume } = useResume();
  const { summary } = resume;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700
                 sticky top-24 self-start"
    >
      <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400 tracking-tight">
        Summary
      </h2>

      <div
        className="prose prose-sm sm:prose-base dark:prose-invert max-w-none leading-relaxed text-gray-700 dark:text-gray-200
             text-left
             [&>ul]:list-disc [&>ul]:pl-5 [&>strong]:text-teal-600 dark:[&>strong]:text-teal-400"
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
          {summary}
        </ReactMarkdown>
      </div>
    </motion.section>
  );
};
