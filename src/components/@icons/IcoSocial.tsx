import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoSocial = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_social'}</title>
    <path d="M5.58,14.45a2,2,0,1,0-.73-2.74A2,2,0,0,0,5.58,14.45Zm8.66,5a2,2,0,1,0-.73-2.74A2,2,0,0,0,14.24,19.45ZM13.91,10a2,2,0,1,0-.73-2.73A2,2,0,0,0,13.91,10ZM8.17,15.26a4.95,4.95,0,0,0,4.08,2.35,2.92,2.92,0,0,1,.4-1.4,3,3,0,0,1,4.09-1.09,5,5,0,0,0,.2-4.62,3,3,0,0,1-5-2.87,5,5,0,0,0-3.91,2.49,3,3,0,0,1,1.1,4.09A2.83,2.83,0,0,1,8.17,15.26Zm-.94.38a3,3,0,1,1-.09-5.88,1,1,0,0,1,.08-.14,6,6,0,0,1,5.2-3,3,3,0,0,1,5.19,3,6,6,0,0,1,0,6l-.09.14a3,3,0,0,1-3.78,4.55,3,3,0,0,1-1.36-1.69,6.06,6.06,0,0,1-3-.81A6,6,0,0,1,7.23,15.64Z" />
  </svg>
);
const Memo = memo(SvgIcoSocial);
export default Memo;
