import React from 'react';
import useTheme from '../../../hooks/useTheme';
import BaseDisclaimer from './BaseDisclaimer';

interface Props {
  text: string;
  testID?: string;
}

const Warning = ({text, testID}: Props) => {
  const theme = useTheme();

  return (
    <BaseDisclaimer
      text={text}
      testID={testID}
      backgroundColor={'#FFDFBC'}
      textColor={'black'}
      iconColor={'#955000'}
    />
  );
};

export default Warning;
