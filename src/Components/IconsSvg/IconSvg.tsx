interface BookIconsProps {
  colorFill: string;
}

export const BookIcon = ({ colorFill }: BookIconsProps): JSX.Element => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.36041 3.61962C6.3766 3.45969 5.37339 3.45968 4.38958 3.6196C4.04635 3.6754 3.70153 3.75841 2.93705 3.94359C2.81458 3.97326 2.74343 3.99063 2.69021 4.00574C2.65679 4.01523 2.64282 4.02049 2.63939 4.02187C2.63939 4.02187 2.63939 4.02187 2.63939 4.02187C2.57137 4.05532 2.52241 4.11766 2.50599 4.19116C2.50545 4.19484 2.50364 4.20961 2.50229 4.24409C2.50013 4.2993 2.5 4.37244 2.5 4.49837V15.8195C2.5 15.9082 2.50004 15.9625 2.50094 16.0032C2.50152 16.0293 2.50233 16.0409 2.50254 16.0436C2.52142 16.1748 2.64045 16.269 2.77379 16.2563C2.7765 16.2559 2.78793 16.2539 2.81364 16.2483C2.85351 16.2396 2.90634 16.2268 2.99253 16.2059L3.00808 16.2022C3.34106 16.1215 3.52686 16.0765 3.71294 16.0383C5.13943 15.7456 6.61057 15.7456 8.03706 16.0383C8.22311 16.0765 8.40887 16.1215 8.74174 16.2021L9.25 16.3252V4.04949L8.81294 3.94362C8.04846 3.75843 7.70364 3.67541 7.36041 3.61962ZM10.75 4.0495V16.3252L11.2581 16.2022C11.5911 16.1215 11.7769 16.0765 11.9629 16.0383C13.3894 15.7456 14.8606 15.7456 16.2871 16.0383C16.4731 16.0765 16.6589 16.1215 16.9919 16.2022L17.0075 16.2059C17.0937 16.2268 17.1465 16.2396 17.1864 16.2483C17.2255 16.2569 17.2316 16.2569 17.2241 16.2561C17.3583 16.27 17.4785 16.1755 17.4975 16.0436C17.4977 16.0409 17.4985 16.0293 17.4991 16.0032C17.5 15.9625 17.5 15.9082 17.5 15.8195V4.49843C17.5 4.37249 17.4999 4.29934 17.4977 4.24413C17.4964 4.20964 17.4945 4.19487 17.494 4.19119C17.4776 4.1177 17.4286 4.05536 17.3606 4.02191C17.3572 4.02053 17.3432 4.01527 17.3098 4.00578C17.2566 3.99066 17.1854 3.97329 17.0629 3.94362C16.2984 3.75843 15.9536 3.67542 15.6103 3.61963C14.6266 3.45971 13.6234 3.45971 12.6397 3.61963C12.2964 3.67542 11.9516 3.75843 11.1871 3.94362L10.75 4.0495ZM4.14891 2.13904C5.29212 1.9532 6.45788 1.95321 7.60109 2.13905C8.00763 2.20514 8.41041 2.30271 9.13214 2.47756L9.80158 2.63972C9.87468 2.65743 9.91502 2.66714 9.94592 2.67372C9.97261 2.6794 9.97794 2.67957 9.9757 2.67936C9.99187 2.68093 10.0081 2.68093 10.0243 2.67936C10.0221 2.67957 10.0274 2.6794 10.0541 2.67372C10.085 2.66714 10.1253 2.65743 10.1984 2.63972L10.8679 2.47756C11.5896 2.30272 11.9924 2.20514 12.399 2.13906C13.5422 1.95324 14.7078 1.95324 15.851 2.13906C16.2576 2.20514 16.6604 2.30272 17.3821 2.47756L17.4161 2.48579C17.4318 2.4896 17.4476 2.49341 17.4635 2.49723C17.6481 2.54161 17.8424 2.58835 18.0148 2.67206C18.4971 2.90631 18.8456 3.34879 18.9598 3.87283C19.0007 4.06011 19.0004 4.26002 19.0001 4.44962C19 4.46597 19 4.48224 19 4.49843V15.8195C19 15.8316 19 15.8437 19 15.8558C19.0002 15.9883 19.0003 16.1237 18.9842 16.2425C18.8575 17.1796 18.0091 17.8457 17.0692 17.7481C16.95 17.7357 16.8184 17.7037 16.6895 17.6723C16.6778 17.6695 16.666 17.6666 16.6543 17.6638C16.3017 17.5784 16.1427 17.5399 15.9856 17.5077C14.758 17.2559 13.492 17.2559 12.2644 17.5077C12.1073 17.5399 11.9483 17.5784 11.5957 17.6638L10.5516 17.9167C10.5426 17.9189 10.5336 17.9211 10.5245 17.9233C10.4133 17.9503 10.2942 17.9793 10.1696 17.9914C10.0568 18.0024 9.94319 18.0024 9.83038 17.9914C9.70578 17.9793 9.58669 17.9503 9.47546 17.9233C9.4664 17.9211 9.45739 17.9189 9.44843 17.9167L8.40433 17.6638C8.05171 17.5784 7.89267 17.5399 7.73559 17.5077C6.508 17.2559 5.242 17.2559 4.01441 17.5077C3.85733 17.5399 3.69829 17.5784 3.34567 17.6638C3.33397 17.6666 3.32223 17.6695 3.31047 17.6723C3.18161 17.7037 3.05004 17.7357 2.9308 17.7481C1.99089 17.8457 1.14248 17.1796 1.01577 16.2425C0.999701 16.1237 0.99984 15.9883 0.999976 15.8558C0.999988 15.8437 1 15.8316 1 15.8195V4.49837C1 4.48219 0.999974 4.46591 0.999947 4.44956C0.999638 4.25997 0.999312 4.06008 1.04015 3.87281C1.15444 3.34875 1.50289 2.90626 1.98525 2.67201C2.15762 2.58831 2.35194 2.54157 2.53644 2.49719C2.55235 2.49337 2.56818 2.48956 2.58391 2.48575L2.61785 2.47753C3.33959 2.30269 3.74237 2.20512 4.14891 2.13904Z"
        fill={colorFill}
      />
    </svg>
  );
};

export const Bars = ({ colorFill }: BookIconsProps): JSX.Element => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 4.75C1 4.33579 1.33579 4 1.75 4H18.25C18.6642 4 19 4.33579 19 4.75C19 5.16421 18.6642 5.5 18.25 5.5H1.75C1.33579 5.5 1 5.16421 1 4.75ZM1 10C1 9.58579 1.33579 9.25 1.75 9.25H18.25C18.6642 9.25 19 9.58579 19 10C19 10.4142 18.6642 10.75 18.25 10.75H1.75C1.33579 10.75 1 10.4142 1 10ZM1 15.25C1 14.8358 1.33579 14.5 1.75 14.5H18.25C18.6642 14.5 19 14.8358 19 15.25C19 15.6642 18.6642 16 18.25 16H1.75C1.33579 16 1 15.6642 1 15.25Z"
        fill={colorFill}
      />
    </svg>
  );
};