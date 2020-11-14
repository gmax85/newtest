import { createStyles } from '@material-ui/core/styles';
import fontFace from './fonts';

const styles = createStyles({
  ...fontFace,
  '@global': {
    '*': {
      boxSizing: 'border-box',
    },
    'html,body,#root': {
      fontFamily: 'NotoSans-Regular',
      margin: 0,
      padding: 0,
      overflow: 'visible',
    },
    a: {
      textDecoration: 'none',
      color: '#1565C0',
    },
    '.imageWrapper': {
      '& > img': {
        maxWidth: '100%',
      },
    },
  },
});

export default styles;
