import Image, { ImageProps } from 'next/image';
import { authorImg } from '@/constants/personal';

const avatarInitProps = {
    className: 'rounded-full aspect-square',
    src: authorImg,
    width: 160,
    height: 160,
    alt: 'avatar',
};

const Avatar = ({ ...props }: Partial<ImageProps>) => {
    return <Image {...avatarInitProps} {...props} />;
};

export default Avatar;
