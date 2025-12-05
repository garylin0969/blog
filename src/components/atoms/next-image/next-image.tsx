import Image, { ImageProps } from 'next/image';
import { DEFAULT_IMAGE_NOT_FOUND } from '@/constants/site';

/**
 * Next.js 圖片元件封裝。
 *
 * 封裝了 next/image，提供預設的錯誤處理和優化設定。
 * 如果未提供 src，則顯示預設的找不到圖片佔位符。
 * 預設關閉優化 (unoptimized=true) 以避免額外的圖片處理開銷 (視需求調整)。
 *
 * @param props - Next.js Image 元件屬性 {@link ImageProps}。
 */
const NextImage = ({ src, alt = '', unoptimized = true, ...props }: ImageProps) => {
    const imgSrc = src || DEFAULT_IMAGE_NOT_FOUND;

    return <Image src={imgSrc} alt={alt} unoptimized={unoptimized} {...props} />;
};

export default NextImage;
