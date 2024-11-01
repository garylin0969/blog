import Avatar from '@/components/atoms/avatar';
import cn from '@/utils/cn';
import Container from '@/components/atoms/container';
import BasicInfo from '@/components/molecules/basic-info';
import { basicInfoConfig } from '@/constants/personal';

const AboutPage = () => {
    return (
        <Container>
            <Avatar />
            {basicInfoConfig?.map((data) => {
                return <BasicInfo key={data?.text} icon={data?.icon} link={data?.link} text={data?.text} />;
            })}
        </Container>
    );
};

export default AboutPage;
