import React from 'react';

import { Text } from '@shopify/react-native-skia';

import { GRAPH_BOTTOM_MARGIN } from '../../..//utils/graphUtils';
import type { SelectedPointProps } from '../LineChartProps';
import { useSelectionLabels } from './useSelectionLabels';

export const SelectionLabels = (props: SelectedPointProps) => {
  const { font, selectedData, selectedPositions, color } =
    useSelectionLabels(props);

  return (
    <>
      {font != null && selectedPositions && selectedData && (
        <Text
          font={font}
          text={selectedData}
          color={color}
          x={selectedPositions.translateX - GRAPH_BOTTOM_MARGIN}
          y={selectedPositions.translateY - 10}
        />
      )}
    </>
  );
};
