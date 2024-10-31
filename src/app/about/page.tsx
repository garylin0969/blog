import Avatar from '@/components/atoms/avatar';
import cn from '@/utils/cn';
import { IoMdMail } from 'react-icons/io';
import { FaBuilding } from 'react-icons/fa';
import Container from '@/components/atoms/container';

const AboutPage = () => {
    return (
        <Container>
            <Avatar />
            <div className={cn('flex items-center', 'text-sm text-white')}>
                <div className="mr-2">
                    <FaBuilding />
                </div>
                <div>Anue</div>
            </div>
            <div className={cn('flex items-center', 'text-sm text-white')}>
                <div className="mr-2">
                    <IoMdMail />
                </div>
                <div>garylin0969@gmail.com</div>
            </div>
        </Container>
    );
};

export default AboutPage;
