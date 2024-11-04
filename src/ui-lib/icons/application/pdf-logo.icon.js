import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const PdfLogoIcon = forwardRef((props, ref) => {
    return (jsx("svg", { ...props, ref: ref, width: "1em", height: "1em", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.702 27.9406C30.6659 27.3306 29.5974 26.6711 28.7555 25.8796C26.5052 23.7362 24.6272 20.7519 23.4615 17.5037C23.5425 17.1904 23.6072 16.9266 23.672 16.6463C23.672 16.6463 24.9348 9.30915 24.611 6.81946C24.5689 6.5196 24.539 6.41759 24.4792 6.21359L24.4491 6.11047L24.3358 5.81368C23.9958 5.00577 23.3158 4.06595 22.2473 4.09893L21.6321 4H21.6159C20.434 4 19.4627 4.6925 19.2198 5.63232C18.4427 8.51772 19.2522 12.8706 20.6769 18.4765L20.3207 19.4163C19.3454 21.8602 18.1035 24.3343 17.0058 26.5213L16.8561 26.8195L16.7104 27.1327C15.5124 29.5235 14.4115 31.5515 13.4401 33.2663L12.4363 33.8104C12.3723 33.8365 11.2737 34.441 10.6096 34.8064L10.2022 35.0305C6.73758 37.141 4.43865 39.5317 4.0501 41.4444C3.92058 42.0544 4.01772 42.8293 4.63293 43.1756L5.62049 43.6702C6.04143 43.9011 6.49474 44 6.96424 44C9.42507 44 12.3068 40.8673 16.2571 33.8598C20.8226 32.3429 26.0195 31.0899 30.5688 30.3974C34.0334 32.3759 38.3074 33.7609 41.0111 33.7609C41.4806 33.7609 41.9015 33.7115 42.2415 33.6125C42.7596 33.4806 43.1967 33.1838 43.4557 32.7716C43.9738 31.9637 44.0871 30.8755 43.9414 29.7213C43.8929 29.3751 43.6338 28.9629 43.3586 28.6991C42.5653 27.8912 40.7845 27.479 38.097 27.446C36.219 27.446 34.0172 27.6109 31.702 27.9406ZM6.41353 42.1368C6.86684 40.8838 8.6477 38.3941 11.2866 36.2011C11.4023 36.1155 11.6066 35.9186 11.8421 35.6918C11.9693 35.5693 12.1055 35.438 12.2418 35.3108C9.47337 39.7791 7.62775 41.5762 6.41353 42.1368ZM23.316 9.44113C23.2836 7.54501 22.8303 5.50049 22.037 5.50049C21.6646 5.50049 21.697 8.40238 21.697 8.40238C21.697 9.91928 21.9075 12.2276 22.3608 13.695C22.9274 12.6893 23.3484 11.3537 23.316 9.44113ZM17.3736 31.6011C17.9241 30.5788 18.4907 29.5236 19.0897 28.4024C20.5306 25.6489 21.4372 23.4725 22.1172 21.7083C23.461 24.1815 25.1285 26.2919 27.1036 28.0067C27.3177 28.1956 27.5444 28.3718 27.7836 28.5577L27.8807 28.6332C23.8495 29.4247 20.4011 30.4139 17.3736 31.6011ZM42.5492 31.3701C42.792 31.2052 42.7758 30.4633 41.3511 30.1005C39.9264 29.7378 39.5055 29.7378 38.0646 29.7378C37.2713 29.7378 36.3971 29.7708 35.4257 29.8532C37.9189 30.9414 39.716 31.6174 41.1568 31.6174C41.6102 31.6174 42.3063 31.535 42.5492 31.3701Z", fill: "currentColor" }) }));
});
PdfLogoIcon.displayName = 'UIPdfLogoIcon';

export { PdfLogoIcon };