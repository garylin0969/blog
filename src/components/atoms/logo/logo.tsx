import Link from 'next/link';
import NextImage from '@/components/atoms/next-image';
import { LOGO_IMAGE_PATH, WEBSITE_TITLE } from '@/constants/site';
import { cn } from '@/utils/shadcn';

interface LogoProps {
    href?: string;
    className?: string;
    imageClassName?: string;
    imageWidth?: number;
    imageHeight?: number;
    imageLoading?: 'eager' | 'lazy';
    imageAlt?: string;
    titleClassName?: string;
}

const Logo = ({
    href = '/',
    className,
    imageClassName,
    imageWidth = 32,
    imageHeight = 32,
    imageLoading = 'eager',
    imageAlt = 'website logo',
    titleClassName,
}: LogoProps) => {
    return (
        <Link href={href} className={cn('flex items-center gap-x-2', className)}>
            <NextImage
                src={LOGO_IMAGE_PATH}
                className={imageClassName}
                width={imageWidth}
                height={imageHeight}
                loading={imageLoading}
                alt={imageAlt}
            />
            <span className={cn('font-bold', titleClassName)}>{WEBSITE_TITLE}</span>
        </Link>
    );
};

export default Logo;
