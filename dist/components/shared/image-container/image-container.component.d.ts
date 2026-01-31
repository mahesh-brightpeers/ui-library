import type { ImgHTMLAttributes, CSSProperties } from 'react';
interface ImageContainerProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    fallback?: React.ReactNode;
    loadingContent?: React.ReactNode;
    containerStyle?: CSSProperties;
    imgStyle?: CSSProperties;
}
export declare const ImageContainer: ({ src, alt, fallback, loadingContent, containerStyle, imgStyle, ...imgProps }: ImageContainerProps) => import("react/jsx-runtime").JSX.Element;
export {};
