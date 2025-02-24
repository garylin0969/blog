import SkillCard from '@/components/molecules/skill-card';
import { SkillsConfig } from '@/constants/personal';

const Skills = () => {
    return (
        <div className="flex flex-wrap justify-between gap-4">
            {SkillsConfig.map(({ title, skills }) => (
                <SkillCard key={title} title={title} skills={skills} />
            ))}
        </div>
    );
};

export default Skills;
