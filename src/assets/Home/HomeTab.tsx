import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

type Props = {
  color?: string;
  size?: number;
};

const SVGComponent = ({color, size}: Props) => (
  <Svg width={size} height={32} color={color} viewBox="0 0 64 32" fill="none">
    <G clipPath="url(#clip0_8714_2597)">
      <G clipPath="url(#clip1_8714_2597)">
        <Path
          d="M29.5 4H21.5C20.6716 4 20 4.67157 20 5.5V13.5C20 14.3284 20.6716 15 21.5 15H29.5C30.3284 15 31 14.3284 31 13.5V5.5C31 4.67157 30.3284 4 29.5 4Z"
          fill="#05053D"
        />
        <Path
          d="M42.5 4H34.5C33.6716 4 33 4.67157 33 5.5V13.5C33 14.3284 33.6716 15 34.5 15H42.5C43.3284 15 44 14.3284 44 13.5V5.5C44 4.67157 43.3284 4 42.5 4Z"
          fill="#05053D"
        />
        <Path
          d="M29.5 17H21.5C20.6716 17 20 17.6716 20 18.5V26.5C20 27.3284 20.6716 28 21.5 28H29.5C30.3284 28 31 27.3284 31 26.5V18.5C31 17.6716 30.3284 17 29.5 17Z"
          fill="#05053D"
        />
        <Path
          d="M42.5 17H34.5C33.6716 17 33 17.6716 33 18.5V26.5C33 27.3284 33.6716 28 34.5 28H42.5C43.3284 28 44 27.3284 44 26.5V18.5C44 17.6716 43.3284 17 42.5 17Z"
          fill="#05053D"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_8714_2597">
        <Rect width={64} height={32} rx={16} fill="white" />
      </ClipPath>
      <ClipPath id="clip1_8714_2597">
        <Rect width={24} height={24} fill="white" transform="translate(20 4)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
