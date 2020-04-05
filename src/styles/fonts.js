import { css } from 'styled-components'
import OpenSansLightTTF from '@fonts/Open_Sans/OpenSans-Light.ttf'
import OpenSansRegularTTF from '@fonts/Open_Sans/OpenSans-Regular.ttf'
import OpenSansSemiBoldTTF from '@fonts/Open_Sans/OpenSans-SemiBold.ttf'
import RobotoMonoRegularTTF from '@fonts/Roboto_Mono/RobotoMono-Regular.ttf'
import RobotoMonoMediumTTF from '@fonts/Roboto_Mono/RobotoMono-Medium.ttf'
import RobotoMonoBoldTTF from '@fonts/Roboto_Mono/RobotoMono-Bold.ttf'
import LatoBlackTTF from '@fonts/Lato/Lato-Black.ttf'
import LatoBoldTTF from '@fonts/Lato/Lato-Bold.ttf'

const Fonts = css`
@font-face {
  font-family: 'Late';
  src: url(${LatoBlackTTF}) format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Late';
  src: url(${LatoBoldTTF}) format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto Mono';
  src: url(${RobotoMonoRegularTTF}) format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto Mono';
  src: url(${RobotoMonoMediumTTF}) format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Roboto Mono';
  src: url(${RobotoMonoBoldTTF}) format('truetype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Open Sans';
  src: url(${OpenSansLightTTF}) format('truetype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Open Sans';
  src: url(${OpenSansRegularTTF}) format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Open Sans';
  src: url(${OpenSansSemiBoldTTF}) format('truetype');
  font-weight: 600;
  font-style: normal;
}
`

export default Fonts
