import { motion } from 'framer-motion';
import { useResume } from '../../providers/use-resume.ts';

export const ResumeEducation = () => {
  const { resume } = useResume();
  const { educations } = resume;

  if (!educations?.length) return;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mt-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700"
    >
      <h2 className="text-xl font-bold mb-4 text-teal-600 dark:text-teal-400">Education</h2>

      <ul className="space-y-4 text-left">
        {educations.map((edu, index) => (
          <li key={index}>
            <h3 className="text-lg font-semibold">{edu.degree}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {edu.institutionName} — {edu.location}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {edu.startDate.toLocaleDateString()} –{' '}
              {edu.endDate?.toLocaleDateString() ?? 'Present'}
            </p>
            {edu.description && (
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-200">{edu.description}</p>
            )}
            {edu.link && (
              <p className="mt-1 text-sm">
                <a
                  href={edu.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 dark:text-teal-400 hover:underline"
                >
                  Visit website
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </motion.section>
  );
};
