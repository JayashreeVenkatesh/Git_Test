import React, { useMemo } from 'react';

export type FontSizes =
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | '2x-large'
  | '6x-large';

type Colors =
  | 'primary'
  | 'secondary'
  | 'secondary1'
  | 'teritiary'
  | 'neutral'
  | 'error'
  | 'success'
  | 'border'
  | 'grey9'
  | 'grey8'
  | 'grey7'
  | 'grey6'
  | 'grey5'
  | 'grey3'
  | 'grey2'
  | 'grey4'
  | 'white';

export type Weight =
  | 'thin'
  | 'light'
  | 'normal'
  | 'semi-bold'
  | 'bold'
  | 'black';

export type Transform =
  | 'normal-case'
  | 'uppercase'
  | 'lowercase'
  | 'capitalize';

type Decoration = 'underline' | 'line-through' | 'italic' | 'none';

type TextAlign = 'left' | 'center' | 'right' | 'justify';

export type Opacity = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;

export type MaxLines = 1 | 2 | 3 | 4 | 5 | 6 | 9;

const MaxLinesMap = {
  1: 'line-clamp-1',
  2: 'line-clamp-2',
  3: 'line-clamp-3',
  4: 'line-clamp-4',
  5: 'line-clamp-5',
  6: 'line-clamp-6',
  9: 'line-clamp-9',
};

const OpacityMap = {
  10: 'text-opacity-10',
  20: 'text-opacity-20',
  30: 'text-opacity-30',
  40: 'text-opacity-40',
  50: 'text-opacity-50',
  60: 'text-opacity-60',
  70: 'text-opacity-70',
  80: 'text-opacity-80',
  90: 'text-opacity-90',
  100: 'text-opacity-100',
};

const WeightMap = {
  thin: 'font-thin',
  light: 'font-light',
  normal: 'font-normal',
  'semi-bold': 'font-semibold',
  bold: 'font-bold',
  black: 'font-black',
};
const TransformMap = {
  'normal-case': 'normal-case',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
};

const DecorationMap = {
  'line-through': 'line-through',
  underline: 'underline',
  italic: 'italic',
  none: '',
};
const FontSizeMap = {
  'x-small': {
    lg: 'lg:text-xs',
    md: 'md:text-xs',
    sm: 'sm:text-xs',
    xs: 'xs:text-xs',
  },
  small: {
    lg: 'lg:text-sm',
    md: 'md:text-sm',
    sm: 'sm:text-sm',
    xs: 'xs:text-sm',
  },
  medium: {
    lg: 'lg:text-base',
    md: 'md:text-base',
    sm: 'sm:text-base',
    xs: 'xs:text-base',
  },
  large: {
    lg: 'lg:text-lg',
    md: 'md:text-lg',
    sm: 'sm:text-lg',
    xs: 'xs:text-lg',
  },
  'x-large': {
    lg: 'lg:text-xl',
    md: 'md:text-xl',
    sm: 'sm:text-xl',
    xs: 'xs:text-xl',
  },
  '2x-large': {
    lg: 'lg:text-2xl',
    md: 'md:text-2xl',
    sm: 'sm:text-2xl',
    xs: 'xs:text-2xl',
  },
  '6x-large': {
    lg: 'lg:text-6xl',
    md: 'md:text-6xl',
    sm: 'sm:text-6xl',
    xs: 'xs:text-6xl',
  },
};
const ColorMap = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  secondary1: 'text-secondary1',
  teritiary: 'text-teritiary',
  neutral: 'text-neutral',
  error: 'text-error',
  success: 'text-success',
  border: 'text-border',
  white: 'text-white',
  grey9: 'text-grey9',
  grey8: 'text-grey8',
  grey7: 'text-grey7',
  grey6: 'text-grey6',
  grey5: 'text-grey5',
  grey3: 'text-grey3',
  grey2: 'text-grey2',
  grey4: 'text-grey4',
};

const TextAlignMapper = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

export type TextProps = {
  children: string;
  size?: FontSizes;
  color?: Colors;
  weight?: Weight;
  transform?: Transform;
  decoration?: Decoration;
  opacity?: Opacity;
  hover?: boolean;
  relaxed?: boolean;
  textAlign?: TextAlign;
  onClick?: () => void;
  maxLines?: MaxLines;
};

export function Text({
  size = 'medium',
  color = 'primary',
  weight = 'normal',
  transform = 'normal-case',
  decoration = 'none',
  opacity = 100,
  relaxed = false,
  textAlign = 'left',
  onClick,
  children,
  maxLines = 1,
}: TextProps) {
  const computedClasses = useMemo(() => {
    const computedOpacity = OpacityMap[opacity];
    const computedDecoration = DecorationMap[decoration];
    const computedFontSize = `${FontSizeMap[size].sm.split(':')[1]}  ${
      FontSizeMap[size].sm
    }`;
    const computedWeight = WeightMap[weight];
    const computedColor = ColorMap[color];
    const computedTransform = TransformMap[transform];
    const computedLineHeight = relaxed ? 'leading-relaxed' : '';
    const computedTextAlign = TextAlignMapper[textAlign];
    const computedMaxLines = MaxLinesMap[maxLines];
    return `${computedColor} ${computedWeight} ${computedDecoration} ${computedFontSize} ${computedTransform}  ${computedOpacity} ${computedLineHeight} ${computedTextAlign} ${computedMaxLines}`;
  }, [
    opacity,
    decoration,
    size,
    weight,
    color,
    transform,
    relaxed,
    textAlign,
    maxLines,
  ]);

  return (
    <div
      className={`break-words  ${computedClasses} font-averta cursor-pointer`}
      // style={{ marginBottom: '-1px' }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
