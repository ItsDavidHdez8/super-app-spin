import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
type Props = {
  size?: number;
};

const SVGComponent = ({size = 24}: Props) => (
  <Svg width={size} height={24} viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_9007_2915)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C5.76516 22.7357 8.8174 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 8.8174 22.7357 5.76516 20.4853 3.51472C18.2348 1.26428 15.1826 0 12 0ZM5.96628 20.0258C7.6958 21.3261 9.81105 22.0408 12 22.0408C14.1889 22.0408 16.3042 21.3261 18.0337 20.0258C17.319 19.4429 16.5221 18.9655 15.6673 18.6099C14.5051 18.1263 13.2588 17.8774 12 17.8774C10.7412 17.8774 9.49489 18.1263 8.33269 18.6099C7.4779 18.9655 6.68105 19.4429 5.96628 20.0258ZM8.36345 13.4325C7.39898 12.468 6.85715 11.1599 6.85715 9.79593C6.85715 8.43196 7.39898 7.12386 8.36345 6.15938C9.32793 5.19491 10.636 4.65308 12 4.65308C13.364 4.65308 14.6721 5.19491 15.6366 6.15938C16.601 7.12386 17.1429 8.43196 17.1429 9.79593C17.1429 11.1599 16.601 12.468 15.6366 13.4325C14.6721 14.397 13.364 14.9388 12 14.9388C10.636 14.9388 9.32793 14.397 8.36345 13.4325Z"
        fill="#05053D"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_9007_2915">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;