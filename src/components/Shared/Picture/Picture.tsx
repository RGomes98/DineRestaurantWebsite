import type { ReactNode } from '@tanstack/react-router';
import styles from './Picture.module.scss';

type PictureProps = {
  alt: string;
  mobileSrc: string;
  tabletSrc: string;
  desktopSrc: string;
  children?: ReactNode;
  pictureClassName: string;
  mediaQueries?: { mobile: string; tablet: string };
};

export function Picture({
  desktopSrc,
  tabletSrc,
  mobileSrc,
  pictureClassName,
  alt,
  children,
  mediaQueries = { mobile: '640px', tablet: '1024px' },
}: PictureProps) {
  return (
    <picture className={pictureClassName}>
      <source media={`(width <= ${mediaQueries.mobile})`} srcSet={mobileSrc} />
      <source media={`(width <= ${mediaQueries.tablet})`} srcSet={tabletSrc} />
      <img className={styles.image} src={desktopSrc} alt={alt} />
      {children}
    </picture>
  );
}
