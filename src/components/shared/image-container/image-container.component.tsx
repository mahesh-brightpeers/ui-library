import { useState } from 'react';
import type { ImgHTMLAttributes, CSSProperties } from 'react';
import { ImageWrapper, LoadingOverlay, StyledImage } from './image-container.styles';

interface ImageContainerProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: React.ReactNode;
  loadingContent?: React.ReactNode;
  containerStyle?: CSSProperties;
  imgStyle?: CSSProperties;
}

export const ImageContainer = ({
  src,
  alt,
  fallback,
  loadingContent,
  containerStyle,
  imgStyle,
  ...imgProps
}: ImageContainerProps) => {
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
    return <ImageWrapper style={containerStyle}>{fallback}</ImageWrapper>;
  }

  return (
    <ImageWrapper style={containerStyle}>
      {isLoading && loadingContent && (
        <LoadingOverlay>
          {loadingContent}
        </LoadingOverlay>
      )}
      <StyledImage
        src={src}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        isLoading={isLoading}
        style={imgStyle}
        {...imgProps}
      />
    </ImageWrapper>
  );
};
