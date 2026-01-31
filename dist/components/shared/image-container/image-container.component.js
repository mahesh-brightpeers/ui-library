import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ImageWrapper, LoadingOverlay, StyledImage } from './image-container.styles';
export const ImageContainer = ({ src, alt, fallback, loadingContent, containerStyle, imgStyle, ...imgProps }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const handleLoad = () => {
        setIsLoading(false);
        setHasError(false);
    };
    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };
    if (hasError && fallback) {
        return _jsx(ImageWrapper, { style: containerStyle, children: fallback });
    }
    return (_jsxs(ImageWrapper, { style: containerStyle, children: [isLoading && loadingContent && (_jsx(LoadingOverlay, { children: loadingContent })), _jsx(StyledImage, { src: src, alt: alt, onLoad: handleLoad, onError: handleError, isLoading: isLoading, style: imgStyle, ...imgProps })] }));
};
