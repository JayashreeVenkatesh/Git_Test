import React, { useMemo } from 'react';

export enum SpaceSizes {
  'x-small' = 'x-small',
  small = 'small',
  medium = 'medium',
  large = 'large',
}

const VerticalSpaceMap = {
  [SpaceSizes['x-small']]: 'h-1',
  [SpaceSizes.small]: 'h-3',
  [SpaceSizes.medium]: 'h-4',
  [SpaceSizes.large]: 'h-8',
};
const HorizontalSpaceMap = {
  [SpaceSizes['x-small']]: 'w-1',
  [SpaceSizes.small]: 'w-3',
  [SpaceSizes.medium]: 'w-4',
  [SpaceSizes.large]: 'w-8',
};

export type SpacerProps = {
  size: SpaceSizes;
  horizontal?: boolean;
};

export function Spacer({ size, horizontal = false }: SpacerProps) {
  const computedClasses = useMemo(() => {
    return horizontal ? HorizontalSpaceMap[size] : VerticalSpaceMap[size];
  }, [size, horizontal]);

  return <div className={computedClasses} />;
}
