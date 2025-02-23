import cn from '@/utils/cn';
import { SkillsConfig } from '@/constants/personal';

const Skills = () => {
    return (
        <div className="flex flex-wrap justify-between gap-4">
            {SkillsConfig.map(({ title, skills }) => (
                <div
                    key={title}
                    className="mx-2 flex-1 transform rounded-lg border border-purple-100 p-5 shadow-md transition-transform hover:scale-105 dark:border-white/30"
                >
                    <h2 className="border-b-2 pb-2 text-xl font-bold">{title}</h2>
                    <ul className={cn('list-inside list-disc space-y-1 rounded-lg', 'p-4')}>
                        {skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Skills;
