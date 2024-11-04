import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const MessageIcon = forwardRef((props, ref) => {
    return (jsx("svg", { ref: ref, ...props, width: "1em", height: "1em", viewBox: "0 0 70 69", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.25 34.5432C6.25 19.398 18.3538 5.75 35.0575 5.75C51.3875 5.75 63.75 19.1388 63.75 34.4568C63.75 52.2222 49.26 63.25 35 63.25C30.285 63.25 25.0525 61.9831 20.855 59.5069C19.3888 58.6143 18.1525 57.952 16.5712 58.4703L10.7638 60.1979C9.2975 60.6586 7.975 59.5069 8.40625 57.9521L10.3325 51.5024C10.6487 50.6098 10.5912 49.6596 10.1313 48.911C7.65875 44.3617 6.25 39.3804 6.25 34.5432ZM31.2625 34.5432C31.2625 36.5875 32.9013 38.2287 34.9425 38.2575C36.9838 38.2575 38.6225 36.5875 38.6225 34.572C38.6225 32.5277 36.9838 30.8865 34.9425 30.8865C32.93 30.8577 31.2625 32.5277 31.2625 34.5432ZM44.5163 34.572C44.5163 36.5875 46.155 38.2575 48.1963 38.2575C50.2375 38.2575 51.8763 36.5875 51.8763 34.572C51.8763 32.5277 50.2375 30.8865 48.1963 30.8865C46.155 30.8865 44.5163 32.5277 44.5163 34.572ZM21.6888 38.2575C19.6763 38.2575 18.0088 36.5875 18.0088 34.572C18.0088 32.5277 19.6475 30.8865 21.6888 30.8865C23.73 30.8865 25.3688 32.5277 25.3688 34.572C25.3688 36.5875 23.73 38.2287 21.6888 38.2575Z", fill: "currentColor", fillOpacity: "1" }) }));
});
MessageIcon.displayName = 'UIMessageIcon';

export { MessageIcon };
