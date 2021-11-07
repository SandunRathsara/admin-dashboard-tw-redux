import React from 'react';
import {string} from 'prop-types';

function Logo({fill}) {
  return (
    <div className="flex items-end">
      <svg
        className=""
        height={40}
        viewBox="0 0 53 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.78271 1.36523C5.61377 1.36523 6.99072 1.80713 7.91357 2.69092C8.84131 3.57471 9.30518 4.88818 9.30518 6.63135C9.30518 8.38916 8.83643 9.72461 7.89893 10.6377C6.96631 11.5459 5.59424 12 3.78271 12H0.21582V1.36523H3.78271ZM3.93652 10.2935C4.92773 10.2935 5.67725 9.98828 6.18506 9.37793C6.69287 8.76758 6.94678 7.86182 6.94678 6.66064C6.94678 5.479 6.69531 4.58789 6.19238 3.9873C5.68945 3.38672 4.9375 3.08643 3.93652 3.08643H2.479V10.2935H3.93652ZM10.9531 0.977051H13.2017V3.02783H10.9531V0.977051ZM10.9531 4.229H13.2017V12H10.9531V4.229ZM18.6729 4.06787C19.0439 4.06787 19.3906 4.12158 19.7129 4.229C20.04 4.33154 20.3232 4.48291 20.5625 4.68311L20.7896 4.14111H22.606V11.8682C22.606 13.04 22.2446 13.9312 21.522 14.5415C20.8042 15.1567 19.8252 15.4644 18.585 15.4644C17.9551 15.4644 17.3301 15.3911 16.71 15.2446C16.0898 15.103 15.5381 14.8955 15.0547 14.6221L15.7505 13.1572C16.1021 13.3477 16.5317 13.5088 17.0396 13.6406C17.5474 13.7773 18.0161 13.8457 18.4458 13.8457C19.0562 13.8457 19.5249 13.687 19.8521 13.3696C20.1841 13.0571 20.3501 12.5957 20.3501 11.9854V11.1577C19.7495 11.729 19.0415 12.0146 18.2261 12.0146C17.1372 12.0146 16.29 11.6802 15.6846 11.0112C15.0791 10.3423 14.7764 9.40234 14.7764 8.19141C14.7764 6.90234 15.1206 5.89404 15.8091 5.1665C16.4976 4.43408 17.4521 4.06787 18.6729 4.06787ZM19.0903 5.56201C18.4312 5.56201 17.9258 5.78174 17.5742 6.22119C17.2275 6.65576 17.0542 7.28809 17.0542 8.11816C17.0542 8.86035 17.1934 9.43164 17.4717 9.83203C17.7549 10.2275 18.1602 10.4253 18.6875 10.4253C19.0879 10.4253 19.437 10.3105 19.7349 10.0811C20.0376 9.85156 20.2427 9.5415 20.3501 9.15088V5.8916C19.9692 5.67188 19.5493 5.56201 19.0903 5.56201ZM24.7812 0.977051H27.0298V3.02783H24.7812V0.977051ZM24.7812 4.229H27.0298V12H24.7812V4.229Z"
          fill={fill || 'white'}
        />
        <path
          d="M31.6294 5.68652H35.8188V7.34912H31.6294V10.3081H36.4194V12H29.3369V1.36523H36.2656V3.05713H31.6294V5.68652ZM39.9277 11.9561L36.9541 4.14111H39.1001L39.9863 6.55811C40.2061 7.15869 40.4844 8.10352 40.8213 9.39258L41.019 10.1396L41.2461 9.26807C41.5342 8.07666 41.7881 7.16113 42.0078 6.52148L42.8647 4.14111H45.0254L40.7188 15.4351H38.668L39.9277 11.9561ZM47.6108 8.4917C47.728 9.82959 48.4165 10.4985 49.6763 10.4985C50.0669 10.4985 50.46 10.4546 50.8555 10.3667C51.251 10.2739 51.688 10.1274 52.1665 9.92725L52.7085 11.3262C51.5171 11.8779 50.416 12.1514 49.4053 12.1465C48.165 12.1465 47.1909 11.7852 46.4829 11.0625C45.7749 10.3398 45.4209 9.33643 45.4209 8.05225C45.4209 6.77295 45.7676 5.77686 46.4609 5.06396C47.1543 4.34619 48.126 3.9873 49.376 3.9873C51.7246 3.9873 52.8989 5.31787 52.8989 7.979V8.4917H47.6108ZM50.8335 7.18799C50.77 6.09424 50.2891 5.54736 49.3906 5.54736C48.8926 5.54736 48.4995 5.68408 48.2114 5.95752C47.9282 6.22607 47.7427 6.63623 47.6548 7.18799H50.8335Z"
          fill="#FFAC00"
        />
      </svg>
    </div>
  );
}

Logo.propTypes = {
  fill: string,
};

export default Logo;