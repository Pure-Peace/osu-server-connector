import { useState } from 'react';

const DEFAULT_IMG = '/images/nothing.png';

const DefaultImage = (
  props: React.ImgHTMLAttributes<HTMLImageElement> & {
    defaultImg?: string;
    onErrorImg?: string;
  }
) => {
  const [imgSrc, setImgSrc] = useState(DEFAULT_IMG || props.defaultImg);

  if (props.src) {
    const img = new Image();
    img.src = props.src;
    img.onload = () => {
      setImgSrc(img.src);
    };
  }

  return (
    <img
      {...{ src: imgSrc, ...props }}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = DEFAULT_IMG || props.onErrorImg;
      }}
    />
  );
};

export default DefaultImage;
