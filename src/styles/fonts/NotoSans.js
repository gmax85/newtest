import NotoSansRegular from '../../assets/fonts/NotoSans-Regular.ttf';
import NotoSansBold from '../../assets/fonts/NotoSans-Bold.ttf';
import NotoSansItalic from '../../assets/fonts/NotoSans-Italic.ttf';

export default [
  {
    fontFamily: 'NotoSans-Regular',
    fontStyle: 'normal',
    fontWeight: 500,
    src: `local('NotoSans-Regular'), local('NotoSans-Regular'),
        url(${NotoSansRegular}) format('truetype')`,
  },
  {
    fontFamily: 'NotoSans-Bold',
    fontStyle: 'normal',
    fontWeight: 800,
    src: `local('NotoSans-Bold'), local('NotoSans-Bold'),
        url(${NotoSansBold}) format('truetype')`,
  },
  {
    fontFamily: 'NotoSans-Italic',
    fontStyle: 'italic',
    fontWeight: 500,
    src: `local('NotoSans-Italic'), local('NotoSans-Italic'),
        url(${NotoSansItalic}) format('truetype')`,
  },
];
