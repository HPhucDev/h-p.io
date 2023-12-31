import * as React from 'react';
import { memo, SVGProps } from 'react';

const SvgIcoMagazine = (props: SVGProps<SVGSVGElement>) => (
  <svg id="Layer_1" viewBox="0 0 24 24" width="1em" height="1em" role="img" {...props}>
    <title>{'ico_magazine'}</title>
    <path
      id="magazine"
      d="M6,12.5h4a.49.49,0,0,1,0,1l-4,0a.5.5,0,0,1-.5-.5h0A.5.5,0,0,1,6,12.5Zm0,2.23,4-.21a.47.47,0,0,1,.48.44v0a.51.51,0,0,1-.47.5l-4,.22a.47.47,0,0,1-.5-.44v0A.5.5,0,0,1,6,14.73Zm8-6.25,4-.21a.48.48,0,0,1,.5.46v0a.5.5,0,0,1-.48.5l-4,.21A.48.48,0,0,1,13.5,9V9A.5.5,0,0,1,14,8.48Zm0,6,4,.21a.5.5,0,0,1,.48.5v0a.48.48,0,0,1-.48.48h0l-4-.21a.5.5,0,0,1-.48-.5v0a.48.48,0,0,1,.48-.48Zm0-4,4-.13a.5.5,0,0,1,.5.48h0a.49.49,0,0,1-.49.5l-4,.13a.5.5,0,0,1-.5-.48h0A.49.49,0,0,1,14,10.49Zm0,2,4,.13a.49.49,0,0,1,.49.5h0a.49.49,0,0,1-.49.49h0l-4-.13a.49.49,0,0,1-.49-.5h0a.49.49,0,0,1,.49-.49ZM6,8l4,.32a.5.5,0,0,1,.46.5V11a.5.5,0,0,1-.5.5H6a.5.5,0,0,1-.5-.5V8.54A.5.5,0,0,1,6,8Zm7.35-.74a1,1,0,0,0-.89,1v7.42a1,1,0,0,0,.89,1l5,.56h.11a1,1,0,0,0,1-1V7.73a.45.45,0,0,0,0-.11,1,1,0,0,0-1.1-.88Zm-1.89,1a1,1,0,0,0-.89-1l-5-.56H5.5a1,1,0,0,0-1,1v8.54a.45.45,0,0,0,0,.11,1,1,0,0,0,1.1.88l5-.56a1,1,0,0,0,.89-1ZM12,7a2,2,0,0,1,1.28-.67l5-.55a2,2,0,0,1,2.21,1.76,1.7,1.7,0,0,1,0,.22v8.54a2,2,0,0,1-2,2l-.22,0-5-.55A2,2,0,0,1,12,17a2,2,0,0,1-1.28.67l-5,.55a2,2,0,0,1-2.21-1.76,1.7,1.7,0,0,1,0-.22V7.73a2,2,0,0,1,2-2l.22,0,5,.55A2,2,0,0,1,12,7Z"
    />
  </svg>
);
const Memo = memo(SvgIcoMagazine);
export default Memo;
