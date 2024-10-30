import Image, { ImageProps } from 'next/image';
import { avatarImg } from '@/constants/personal';

const AvatarInitProps = {
    className: 'rounded-full aspect-square',
    src: avatarImg,
    width: 160,
    height: 160,
    alt: 'avatar',
};

const Avatar = ({ ...props }: Partial<ImageProps>) => {
    return <Image {...AvatarInitProps} {...props} />;
};

export default Avatar;
