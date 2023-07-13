type DiscoverProps = {
  className?: string;
  tabIndex?: string;
  onClick?: () => void;
};

export default function Discover(props: DiscoverProps) {
  return (
    // @ts-ignore
    <svg viewBox="0 0 102 119" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.8761 52.903C12.914 53.4552 12.8134 53.9535 12.5745 54.3978C12.3276 54.8427 11.9709 55.1882 11.5044 55.4342L11.2454 54.9527C11.6258 54.7205 11.915 54.4312 12.1131 54.0847C12.3107 53.7304 12.3954 53.3481 12.3673 52.9379C12.337 52.4962 12.2011 52.133 11.9597 51.8484C11.7177 51.556 11.4153 51.4222 11.0524 51.4471C10.8631 51.4601 10.6965 51.5151 10.5525 51.6122C10.4086 51.7092 10.2874 51.8483 10.1889 52.0294C10.0819 52.2032 10.0053 52.4145 9.95896 52.6634L9.74564 53.7123C9.64619 54.2263 9.46708 54.619 9.20832 54.8904C8.94167 55.1623 8.6072 55.3121 8.2049 55.3397C7.8736 55.3624 7.57605 55.2996 7.31226 55.1513C7.04004 54.9956 6.82292 54.7767 6.66091 54.4946C6.49889 54.2125 6.4057 53.8939 6.38134 53.539C6.34669 53.0341 6.44544 52.5677 6.6776 52.1396C6.90133 51.7042 7.21682 51.3933 7.62406 51.2069L7.89644 51.7112C7.55338 51.9091 7.29353 52.1647 7.1169 52.478C6.94027 52.7913 6.86468 53.1333 6.89012 53.5041C6.91719 53.8985 7.05009 54.2182 7.28883 54.4634C7.52756 54.7085 7.81652 54.8195 8.15571 54.7962C8.32925 54.7843 8.48431 54.734 8.62088 54.6454C8.74957 54.5573 8.85977 54.4309 8.95149 54.2661C9.04321 54.1013 9.11277 53.9023 9.16017 53.6692L9.38452 52.6077C9.49132 52.0852 9.68512 51.6756 9.96592 51.379C10.2388 51.0829 10.5804 50.9207 10.9906 50.8926C11.3219 50.8698 11.6281 50.9439 11.9093 51.1148C12.1826 51.2863 12.4053 51.5286 12.5774 51.8417C12.7489 52.147 12.8485 52.5007 12.8761 52.903Z"
        fill="currentColor"
      />
      <path
        d="M13.2841 44.06C13.1915 44.6297 12.9667 45.1259 12.6097 45.5485C12.2539 45.9633 11.8119 46.268 11.2836 46.4625C10.7476 46.6557 10.1752 46.7029 9.56642 46.604C8.94988 46.5038 8.42186 46.2778 7.98238 45.926C7.5429 45.5743 7.22009 45.1453 7.01395 44.6392C6.80909 44.1253 6.75294 43.5835 6.84552 43.0138C6.90766 42.6313 7.02716 42.2903 7.20403 41.9906C7.38216 41.6831 7.60014 41.4262 7.85798 41.2197C8.11708 41.0055 8.39853 40.851 8.70231 40.7561L8.87586 41.2409C8.45013 41.3961 8.10728 41.6327 7.8473 41.9509C7.57951 42.2679 7.40948 42.6488 7.33719 43.0936C7.25983 43.5697 7.30325 44.0173 7.46743 44.4365C7.63162 44.8557 7.90214 45.2121 8.27899 45.5056C8.64804 45.7979 9.10572 45.9884 9.65202 46.0772C10.1983 46.166 10.6967 46.1308 11.1471 45.9717C11.5897 45.8113 11.9552 45.5583 12.2437 45.2127C12.5322 44.867 12.7151 44.4562 12.7924 43.9801C12.8647 43.5353 12.824 43.1201 12.6704 42.7347C12.5167 42.3492 12.2665 42.0162 11.9196 41.7355L12.226 41.3287C12.4763 41.5136 12.6943 41.7493 12.8801 42.0358C13.0593 42.3132 13.1886 42.6266 13.268 42.976C13.3409 43.3162 13.3463 43.6776 13.2841 44.06Z"
        fill="currentColor"
      />
      <path
        d="M14.7485 37.6765L8.91888 35.4555L9.10888 34.9568L10.3391 35.4254L10.233 35.5373C9.88364 35.2773 9.66515 34.9402 9.57755 34.5261C9.48256 34.1092 9.51811 33.6827 9.68419 33.2468L9.82352 32.8811L10.3223 33.0711L10.1787 33.4479C9.97602 33.9799 9.99202 34.4598 10.2267 34.8876C10.4642 35.3081 10.8526 35.6211 11.392 35.8266L14.9385 37.1777L14.7485 37.6765Z"
        fill="currentColor"
      />
      <path
        d="M18.7654 29.7755C18.4442 30.274 18.0356 30.6456 17.5394 30.8903C17.0432 31.135 16.5141 31.2409 15.9521 31.2081C15.3835 31.171 14.8399 30.9855 14.3215 30.6515C13.7964 30.3132 13.4027 29.8951 13.1404 29.397C12.8782 28.8988 12.7558 28.3733 12.7734 27.8203C12.791 27.2674 12.9604 26.7416 13.2815 26.2431C13.6069 25.7379 14.0156 25.3663 14.5075 25.1283C15.0037 24.8836 15.5328 24.7777 16.0948 24.8105C16.6568 24.8433 17.2003 25.0288 17.7254 25.3671C18.2439 25.7011 18.6376 26.1193 18.9065 26.6217C19.1687 27.1198 19.2911 27.6453 19.2735 28.1983C19.2601 28.7446 19.0908 29.2703 18.7654 29.7755ZM18.3366 29.4993C18.5978 29.0939 18.7336 28.6641 18.744 28.2099C18.7477 27.7515 18.6355 27.3124 18.4074 26.8927C18.1793 26.473 17.8492 26.124 17.4171 25.8457C16.9784 25.5631 16.5242 25.4069 16.0544 25.377C15.5822 25.3362 15.1415 25.4144 14.7323 25.6116C14.3164 25.8046 13.9757 26.1072 13.7103 26.5193C13.4491 26.9247 13.3145 27.36 13.3065 27.8251C13.2961 28.2793 13.4049 28.7162 13.6331 29.1359C13.8588 29.5446 14.191 29.8903 14.6298 30.1729C15.0618 30.4512 15.5161 30.6075 15.9925 30.6416C16.469 30.6758 16.9152 30.5964 17.331 30.4034C17.7402 30.2062 18.0754 29.9048 18.3366 29.4993Z"
        fill="currentColor"
      />
      <path
        d="M22.9196 24.2024L16.4398 17.9881L16.8092 17.6029L23.2891 23.8172L22.9196 24.2024Z"
        fill="currentColor"
      />
      <path
        d="M26.4719 20.868L20.8394 13.8765L21.255 13.5417L26.8875 20.5332L26.4719 20.868Z"
        fill="currentColor"
      />
      <path
        d="M35.9282 15.2181C35.4881 15.4156 35.0957 15.4487 34.7508 15.3175C34.4059 15.1863 34.1267 14.8826 33.913 14.4065L32.1648 10.5112L31.0828 10.9968L30.8885 10.564L31.4296 10.3212C31.6171 10.237 31.7331 10.1286 31.7776 9.996C31.8221 9.86338 31.799 9.69607 31.7083 9.49409L31.3684 8.73667L31.8553 8.51815L32.4575 9.85987L33.691 9.30628L33.8853 9.7391L32.6517 10.2927L34.3999 14.188C34.4582 14.3179 34.5393 14.4504 34.6434 14.5857C34.7547 14.7178 34.8995 14.8088 35.0779 14.8587C35.2603 14.8982 35.4885 14.8564 35.7626 14.7334C35.8204 14.7075 35.8909 14.6715 35.9742 14.6255C36.0575 14.5794 36.1228 14.5414 36.1701 14.5116L36.3643 14.9444C36.3019 14.9984 36.2218 15.0517 36.124 15.1042C36.0367 15.1607 35.9715 15.1987 35.9282 15.2181Z"
        fill="currentColor"
      />
      <path
        d="M42.7467 13.1572C42.1665 13.2798 41.6149 13.2509 41.0919 13.0705C40.5689 12.8901 40.1213 12.5887 39.7492 12.1663C39.3755 11.7361 39.1249 11.2193 38.9973 10.6159C38.8682 10.0048 38.8883 9.43083 39.0577 8.89399C39.2271 8.35715 39.5145 7.90044 39.9198 7.52386C40.3251 7.14729 40.8178 6.8977 41.398 6.7751C41.986 6.65086 42.5376 6.67976 43.0528 6.8618C43.5758 7.04221 44.0234 7.34362 44.3955 7.76603C44.7676 8.18844 45.0182 8.70521 45.1474 9.31635C45.2749 9.91975 45.2548 10.4937 45.087 11.0383C44.9176 11.5752 44.6302 12.0319 44.2249 12.4084C43.8274 12.7834 43.3346 13.033 42.7467 13.1572ZM42.6412 12.6582C43.1131 12.5585 43.5141 12.3526 43.8441 12.0404C44.1725 11.7205 44.4055 11.3318 44.5432 10.8744C44.6809 10.417 44.6966 9.93688 44.5904 9.43405C44.4825 8.92348 44.2739 8.49077 43.9645 8.13591C43.6613 7.77168 43.2956 7.51357 42.8675 7.3616C42.4378 7.20189 41.9831 7.17271 41.5035 7.27406C41.0316 7.37378 40.6276 7.58441 40.2915 7.90596C39.9615 8.21814 39.7276 8.60293 39.5899 9.06034C39.4583 9.50838 39.4464 9.98768 39.5543 10.4982C39.6606 11.0011 39.8692 11.4338 40.1802 11.7964C40.4912 12.159 40.8615 12.4201 41.2913 12.5798C41.7194 12.7318 42.1694 12.758 42.6412 12.6582Z"
        fill="currentColor"
      />
      <path
        d="M56.3558 12.7454C55.7855 12.6564 55.2919 12.4353 54.8748 12.0821C54.459 11.7211 54.1561 11.2777 53.9661 10.7519C53.7761 10.2261 53.7287 9.65848 53.8238 9.04913C53.9189 8.43979 54.1371 7.91367 54.4783 7.47078C54.8208 7.02008 55.2444 6.69009 55.7492 6.48081C56.254 6.27152 56.7916 6.21139 57.3619 6.30041C57.9556 6.3931 58.4624 6.63227 58.8824 7.01792C59.3035 7.39576 59.5839 7.85565 59.7233 8.39758L59.5985 8.58216L60.2936 4.12926L60.8209 4.21157L59.4362 13.0822L58.9089 12.9999L59.1814 11.2539L59.2441 11.4677C58.9461 11.9414 58.5383 12.2979 58.0208 12.5372C57.5045 12.7687 56.9495 12.8381 56.3558 12.7454ZM56.4381 12.2181C56.9146 12.2925 57.3587 12.2418 57.7703 12.0659C58.1818 11.8901 58.5287 11.6161 58.8108 11.2441C59.093 10.872 59.2743 10.4281 59.3548 9.91254C59.4365 9.38913 59.3991 8.91114 59.2425 8.47858C59.0872 8.0382 58.8404 7.67156 58.502 7.37867C58.1636 7.08577 57.7561 6.90212 57.2796 6.82773C56.803 6.75334 56.359 6.80406 55.9474 6.97989C55.5436 7.15693 55.2007 7.4315 54.9185 7.80358C54.6442 8.17689 54.4668 8.62134 54.3863 9.13694C54.3058 9.65254 54.3393 10.1299 54.4868 10.5691C54.6422 11.0094 54.8851 11.3755 55.2157 11.6672C55.5541 11.9601 55.9616 12.1437 56.4381 12.2181Z"
        fill="currentColor"
      />
      <path
        d="M63.2049 14.2948L65.327 8.42844L65.8289 8.60998L63.7068 14.4764L63.2049 14.2948ZM65.7667 7.21278L66.2105 5.98597L66.7124 6.16751L66.2686 7.39432L65.7667 7.21278Z"
        fill="currentColor"
      />
      <path
        d="M69.3604 17.2429C68.8795 16.9688 68.5201 16.6093 68.2823 16.1644C68.0483 15.7125 67.958 15.2243 68.0113 14.6995L68.5557 14.7504C68.5385 15.1956 68.6194 15.5966 68.7984 15.9534C68.9841 16.3141 69.2556 16.5962 69.6129 16.7998C69.9975 17.019 70.3752 17.1068 70.7459 17.0632C71.1234 17.0235 71.4022 16.8457 71.5823 16.5297C71.6762 16.3648 71.7226 16.1956 71.7214 16.022C71.7202 15.8484 71.6715 15.6705 71.5752 15.4882C71.4896 15.3029 71.356 15.1222 71.1744 14.9458L70.4188 14.1877C70.0457 13.8203 69.8178 13.4538 69.735 13.0881C69.6561 12.7156 69.7164 12.3541 69.9161 12.0037C70.0805 11.7152 70.2975 11.5021 70.567 11.3645C70.8473 11.224 71.1498 11.1643 71.4744 11.1855C71.7991 11.2066 72.116 11.3053 72.4251 11.4815C72.8648 11.732 73.1986 12.0724 73.4266 12.5027C73.6655 12.93 73.7498 13.3648 73.6797 13.8072L73.1089 13.7549C73.1339 13.3597 73.0649 13.0018 72.9017 12.6813C72.7385 12.3608 72.4955 12.1086 72.1726 11.9246C71.8291 11.7288 71.4892 11.6626 71.1529 11.7257C70.8166 11.7889 70.5643 11.9682 70.396 12.2635C70.3098 12.4147 70.2659 12.5716 70.2641 12.7344C70.2663 12.8904 70.3106 13.0521 70.3971 13.2197C70.4836 13.3873 70.6108 13.5554 70.7787 13.7239L71.5387 14.4982C71.9147 14.8763 72.1486 15.2644 72.2403 15.6625C72.3359 16.0537 72.2819 16.4279 72.0783 16.7851C71.9139 17.0736 71.6827 17.2877 71.3848 17.4273C71.0907 17.56 70.7657 17.6114 70.4096 17.5814C70.0605 17.5554 69.7107 17.4425 69.3604 17.2429Z"
        fill="currentColor"
      />
      <path
        d="M76.5 22.4766C76.0768 22.0842 75.7879 21.6224 75.6335 21.0911C75.485 20.5652 75.4758 20.0285 75.6062 19.4808C75.7419 18.9274 76.0194 18.4245 76.4387 17.9723C76.8633 17.5142 77.3438 17.1995 77.88 17.0281C78.4162 16.8568 78.9521 16.8253 79.4878 16.9337C80.0292 17.0475 80.5115 17.3006 80.9348 17.693C81.2189 17.9564 81.4368 18.2447 81.5886 18.5579C81.7461 18.8764 81.8395 19.2002 81.8687 19.5292C81.9037 19.8635 81.8767 20.1835 81.7875 20.489L81.2877 20.3652C81.3941 19.9248 81.3867 19.5082 81.2656 19.1156C81.1498 18.7171 80.9266 18.3647 80.5961 18.0583C80.2424 17.7304 79.8456 17.5188 79.4056 17.4236C78.9656 17.3283 78.519 17.3564 78.066 17.5078C77.6183 17.6535 77.2063 17.9292 76.8301 18.3351C76.4538 18.741 76.2073 19.1755 76.0905 19.6387C75.9791 20.0961 75.9876 20.5406 76.1158 20.9721C76.244 21.4037 76.485 21.7834 76.8387 22.1113C77.1692 22.4177 77.5375 22.6136 77.9435 22.6989C78.3496 22.7843 78.7655 22.7602 79.1913 22.6265L79.3605 23.1069C79.068 23.2131 78.751 23.2642 78.4096 23.2604C78.0793 23.2561 77.7467 23.1903 77.4118 23.0632C77.0881 22.9355 76.7841 22.74 76.5 22.4766Z"
        fill="currentColor"
      />
      <path
        d="M82.4844 29.6103C82.1633 29.1118 81.9939 28.5861 81.9763 28.0331C81.9587 27.4801 82.081 26.9546 82.3433 26.4565C82.6122 25.9541 83.0059 25.5359 83.5244 25.2019C84.0495 24.8637 84.593 24.6781 85.155 24.6453C85.717 24.6125 86.2461 24.7184 86.7423 24.9631C87.2384 25.2078 87.6471 25.5794 87.9682 26.0779C88.2936 26.5831 88.463 27.1089 88.4763 27.6552C88.494 28.2081 88.3716 28.7337 88.1094 29.2318C87.8471 29.7299 87.4534 30.1481 86.9283 30.4863C86.4098 30.8203 85.8663 31.0058 85.2977 31.0429C84.7357 31.0758 84.2066 30.9698 83.7104 30.7251C83.2185 30.4871 82.8098 30.1155 82.4844 29.6103ZM82.9132 29.3342C83.1743 29.7396 83.5095 30.041 83.9188 30.2383C84.3346 30.4312 84.7808 30.5106 85.2572 30.4765C85.7337 30.4423 86.188 30.2861 86.62 30.0077C87.0587 29.7252 87.3888 29.3762 87.6103 28.9607C87.8427 28.5477 87.9537 28.1141 87.9433 27.6599C87.9396 27.2015 87.805 26.7662 87.5395 26.3541C87.2783 25.9486 86.9377 25.6461 86.5175 25.4465C86.1083 25.2492 85.6655 25.1677 85.189 25.2018C84.7235 25.2384 84.2713 25.3979 83.8326 25.6805C83.4006 25.9588 83.0705 26.3078 82.8424 26.7275C82.6142 27.1472 82.5021 27.5863 82.5058 28.0447C82.5162 28.4989 82.652 28.9287 82.9132 29.3342Z"
        fill="currentColor"
      />
      <path
        d="M86.4413 37.2475L91.4961 32.8103L91.6963 33.3811L87.0112 37.475L86.9367 37.2623L93.1564 37.5444L93.3605 38.1264L86.6297 37.7847L86.4413 37.2475Z"
        fill="currentColor"
      />
      <path
        d="M88.3679 46.2549C88.3042 45.6653 88.3883 45.1194 88.6203 44.6172C88.8602 44.1141 89.2089 43.6986 89.6665 43.3708C90.132 43.0421 90.6674 42.8451 91.2727 42.7796C91.8859 42.7133 92.4506 42.7875 92.9669 43.0021C93.491 43.2158 93.9188 43.5314 94.2502 43.9489C94.5825 44.3742 94.7792 44.8699 94.8404 45.4359C94.8838 45.8368 94.8494 46.2182 94.7375 46.5803C94.6255 46.9423 94.4495 47.2635 94.2094 47.544C93.9702 47.8323 93.6774 48.0667 93.3311 48.2473C92.9927 48.4271 92.6151 48.5394 92.1985 48.5845C92.1199 48.593 92.0448 48.5971 91.9732 48.5969C91.9024 48.6046 91.823 48.6052 91.7348 48.5988L91.137 43.0687L91.6086 43.0177L92.1733 48.2413L91.9984 48.0574C92.4883 48.0283 92.9152 47.8946 93.2792 47.6565C93.651 47.4175 93.9317 47.1088 94.1215 46.7304C94.319 46.3511 94.3936 45.9375 94.3452 45.4894C94.295 45.0256 94.1277 44.6182 93.8432 44.2673C93.5596 43.9241 93.1976 43.665 92.7572 43.49C92.3246 43.3141 91.8489 43.2542 91.3301 43.3102C90.8113 43.3663 90.3559 43.5309 89.9639 43.8039C89.5719 44.0769 89.2749 44.4192 89.0728 44.8307C88.8795 45.2492 88.8096 45.7061 88.8631 46.2014C88.9116 46.6494 89.0615 47.0428 89.3128 47.3814C89.5641 47.7201 89.8943 47.9787 90.3033 48.1571L90.1159 48.6307C89.801 48.5136 89.5156 48.3377 89.2596 48.103C89.0114 47.8673 88.8106 47.5908 88.6569 47.2734C88.5042 46.9639 88.4078 46.6244 88.3679 46.2549Z"
        fill="currentColor"
      />
      <path
        d="M88.6474 52.7626L94.8575 53.3558L94.8068 53.8871L93.4963 53.7619L93.5688 53.6259C93.9747 53.7838 94.2749 54.0507 94.4693 54.4267C94.6716 54.8034 94.7506 55.224 94.7062 55.6884L94.669 56.078L94.1377 56.0273L94.1761 55.6258C94.2302 55.0591 94.0873 54.6007 93.7475 54.2505C93.4068 53.9082 92.9493 53.7096 92.3747 53.6548L88.5966 53.2939L88.6474 52.7626Z"
        fill="currentColor"
      />
      <path
        d="M88.9234 66.1739C88.8855 65.6218 88.986 65.1235 89.225 64.6791C89.4718 64.2342 89.8285 63.8888 90.2951 63.6428L90.554 64.1243C90.1737 64.3565 89.8844 64.6458 89.6863 64.9922C89.4887 65.3466 89.404 65.7288 89.4321 66.139C89.4625 66.5808 89.5983 66.9439 89.8398 67.2285C90.0818 67.521 90.3842 67.6548 90.747 67.6299C90.9364 67.6169 91.103 67.5619 91.2469 67.4648C91.3908 67.3678 91.512 67.2287 91.6106 67.0476C91.7175 66.8738 91.7942 66.6625 91.8405 66.4136L92.0538 65.3647C92.1533 64.8507 92.3324 64.4579 92.5911 64.1866C92.8578 63.9147 93.1922 63.7649 93.5945 63.7373C93.9258 63.7146 94.2234 63.7774 94.4872 63.9257C94.7594 64.0814 94.9765 64.3003 95.1385 64.5824C95.3006 64.8645 95.3937 65.183 95.4181 65.538C95.4528 66.0428 95.354 66.5093 95.1218 66.9373C94.8981 67.3727 94.5826 67.6837 94.1754 67.8701L93.903 67.3657C94.2461 67.1678 94.5059 66.9122 94.6825 66.599C94.8592 66.2857 94.9348 65.9437 94.9093 65.5729C94.8822 65.1785 94.7493 64.8587 94.5106 64.6136C94.2719 64.3684 93.9829 64.2575 93.6437 64.2808C93.4702 64.2927 93.3151 64.3429 93.1786 64.4316C93.0499 64.5197 92.9397 64.6461 92.8479 64.8109C92.7562 64.9757 92.6867 65.1746 92.6393 65.4077L92.4149 66.4693C92.3081 66.9918 92.1143 67.4013 91.8335 67.698C91.5606 67.9941 91.2191 68.1562 90.8089 68.1844C90.4776 68.2071 90.1713 68.133 89.8901 67.9621C89.6168 67.7907 89.3941 67.5484 89.2221 67.2353C89.0505 66.93 88.951 66.5762 88.9234 66.1739Z"
        fill="currentColor"
      />
      <path
        d="M88.5155 75.0171C88.608 74.4474 88.8328 73.9512 89.1899 73.5286C89.5457 73.1138 89.9877 72.8091 90.5159 72.6146C91.052 72.4214 91.6244 72.3742 92.2331 72.4731C92.8497 72.5733 93.3777 72.7993 93.8172 73.151C94.2567 73.5028 94.5795 73.9318 94.7856 74.4379C94.9905 74.9518 95.0466 75.4936 94.954 76.0633C94.8919 76.4457 94.7724 76.7868 94.5955 77.0865C94.4174 77.394 94.1994 77.6509 93.9416 77.8574C93.6825 78.0716 93.401 78.2261 93.0973 78.3209L92.9237 77.8361C93.3494 77.681 93.6923 77.4444 93.9523 77.1261C94.22 76.8092 94.3901 76.4283 94.4624 75.9834C94.5397 75.5074 94.4963 75.0597 94.3321 74.6406C94.1679 74.2214 93.8974 73.865 93.5206 73.5715C93.1515 73.2792 92.6938 73.0887 92.1475 72.9999C91.6012 72.9111 91.1029 72.9463 90.6525 73.1054C90.2099 73.2658 89.8443 73.5188 89.5559 73.8644C89.2674 74.2101 89.0845 74.6209 89.0071 75.097C88.9348 75.5418 88.9755 75.957 89.1292 76.3424C89.2828 76.7278 89.5331 77.0609 89.88 77.3416L89.5736 77.7484C89.3233 77.5635 89.1052 77.3278 88.9195 77.0413C88.7403 76.7638 88.611 76.4505 88.5316 76.1011C88.4587 75.7608 88.4533 75.3995 88.5155 75.0171Z"
        fill="currentColor"
      />
      <path
        d="M87.051 81.4006L92.8807 83.6216L92.6907 84.1203L91.4605 83.6516L91.5665 83.5398C91.9159 83.7998 92.1344 84.1369 92.222 84.551C92.317 84.9679 92.2815 85.3944 92.1154 85.8303L91.976 86.196L91.4773 86.006L91.6209 85.6292C91.8235 85.0972 91.8075 84.6173 91.5729 84.1894C91.3354 83.769 90.947 83.456 90.4076 83.2505L86.861 81.8994L87.051 81.4006Z"
        fill="currentColor"
      />
      <path
        d="M83.0341 89.3015C83.3552 88.8029 83.7639 88.4313 84.2601 88.1866C84.7563 87.942 85.2854 87.836 85.8473 87.8689C86.416 87.906 86.9595 88.0915 87.478 88.4255C88.0031 88.7637 88.3968 89.1819 88.659 89.68C88.9213 90.1781 89.0436 90.7037 89.026 91.2566C89.0084 91.8096 88.839 92.3353 88.5179 92.8339C88.1925 93.339 87.7838 93.7106 87.2919 93.9487C86.7957 94.1934 86.2666 94.2993 85.7047 94.2665C85.1427 94.2337 84.5991 94.0481 84.074 93.7099C83.5555 93.3759 83.1619 92.9577 82.893 92.4553C82.6307 91.9572 82.5084 91.4317 82.526 90.8787C82.5393 90.3324 82.7087 89.8066 83.0341 89.3015ZM83.4628 89.5776C83.2016 89.9831 83.0659 90.4129 83.0555 90.8671C83.0517 91.3255 83.1639 91.7646 83.392 92.1843C83.6202 92.604 83.9502 92.953 84.3823 93.2313C84.821 93.5139 85.2753 93.6701 85.7451 93.7C86.2173 93.7408 86.658 93.6626 87.0672 93.4653C87.483 93.2724 87.8237 92.9698 88.0892 92.5577C88.3503 92.1522 88.485 91.7169 88.493 91.2519C88.5034 90.7977 88.3945 90.3608 88.1664 89.9411C87.9406 89.5323 87.6084 89.1866 87.1697 88.904C86.7376 88.6257 86.2834 88.4695 85.8069 88.4353C85.3304 88.4012 84.8843 88.4806 84.4684 88.6735C84.0592 88.8708 83.724 89.1722 83.4628 89.5776Z"
        fill="currentColor"
      />
      <path
        d="M78.8798 94.8747L85.3596 101.089L84.9902 101.474L78.5104 95.2599L78.8798 94.8747Z"
        fill="currentColor"
      />
      <path
        d="M75.3275 98.2091L80.96 105.201L80.5444 105.535L74.9119 98.5439L75.3275 98.2091Z"
        fill="currentColor"
      />
      <path
        d="M65.8713 103.859C66.3113 103.661 66.7037 103.628 67.0486 103.76C67.3935 103.891 67.6728 104.194 67.8865 104.67L69.6346 108.566L70.7167 108.08L70.9109 108.513L70.3699 108.756C70.1823 108.84 70.0663 108.948 70.0218 109.081C69.9774 109.214 70.0004 109.381 70.0911 109.583L70.431 110.34L69.9441 110.559L69.3419 109.217L68.1084 109.771L67.9142 109.338L69.1477 108.784L67.3995 104.889C67.3413 104.759 67.2601 104.627 67.156 104.491C67.0448 104.359 66.8999 104.268 66.7215 104.218C66.5392 104.179 66.3109 104.221 66.0368 104.344C65.9791 104.37 65.9086 104.405 65.8252 104.452C65.7419 104.498 65.6766 104.536 65.6294 104.565L65.4351 104.133C65.4976 104.079 65.5776 104.025 65.6754 103.973C65.7627 103.916 65.828 103.878 65.8713 103.859Z"
        fill="currentColor"
      />
      <path
        d="M59.0529 105.92C59.6331 105.797 60.1847 105.826 60.7077 106.007C61.2307 106.187 61.6782 106.488 62.0503 106.911C62.4241 107.341 62.6747 107.858 62.8022 108.461C62.9314 109.072 62.9112 109.646 62.7418 110.183C62.5724 110.72 62.2851 111.177 61.8798 111.553C61.4745 111.93 60.9817 112.179 60.4015 112.302C59.8136 112.426 59.262 112.397 58.7467 112.215C58.2237 112.035 57.7762 111.733 57.4041 111.311C57.032 110.889 56.7813 110.372 56.6522 109.761C56.5247 109.157 56.5448 108.583 56.7126 108.039C56.882 107.502 57.1693 107.045 57.5746 106.669C57.9722 106.294 58.465 106.044 59.0529 105.92ZM59.1583 106.419C58.6864 106.519 58.2855 106.724 57.9555 107.037C57.6271 107.357 57.394 107.745 57.2563 108.203C57.1186 108.66 57.1029 109.14 57.2092 109.643C57.3171 110.154 57.5257 110.586 57.835 110.941C58.1383 111.305 58.5039 111.563 58.932 111.715C59.3618 111.875 59.8165 111.904 60.2961 111.803C60.768 111.703 61.172 111.493 61.5081 111.171C61.8381 110.859 62.072 110.474 62.2097 110.017C62.3413 109.569 62.3531 109.089 62.2452 108.579C62.139 108.076 61.9304 107.643 61.6194 107.281C61.3084 106.918 60.938 106.657 60.5083 106.497C60.0802 106.345 59.6302 106.319 59.1583 106.419Z"
        fill="currentColor"
      />
      <path
        d="M45.4437 106.332C46.0139 106.421 46.5076 106.642 46.9246 106.995C47.3404 107.356 47.6433 107.799 47.8333 108.325C48.0233 108.851 48.0707 109.419 47.9756 110.028C47.8805 110.637 47.6623 111.163 47.3211 111.606C46.9787 112.057 46.555 112.387 46.0502 112.596C45.5454 112.806 45.0079 112.866 44.4376 112.777C43.8438 112.684 43.337 112.445 42.9171 112.059C42.4959 111.681 42.2156 111.221 42.0761 110.679L42.201 110.495L41.5058 114.948L40.9785 114.865L42.3633 105.995L42.8906 106.077L42.618 107.823L42.5554 107.609C42.8534 107.136 43.2611 106.779 43.7786 106.54C44.2949 106.308 44.8499 106.239 45.4437 106.332ZM45.3613 106.859C44.8848 106.785 44.4407 106.835 44.0292 107.011C43.6176 107.187 43.2708 107.461 42.9886 107.833C42.7065 108.205 42.5251 108.649 42.4446 109.164C42.3629 109.688 42.4004 110.166 42.5569 110.598C42.7122 111.039 42.9591 111.405 43.2975 111.698C43.6359 111.991 44.0433 112.175 44.5199 112.249C44.9964 112.324 45.4405 112.273 45.852 112.097C46.2558 111.92 46.5987 111.646 46.8809 111.273C47.1552 110.9 47.3327 110.456 47.4131 109.94C47.4936 109.424 47.4601 108.947 47.3126 108.508C47.1573 108.068 46.9143 107.702 46.5837 107.41C46.2453 107.117 45.8379 106.933 45.3613 106.859Z"
        fill="currentColor"
      />
      <path
        d="M38.5945 104.782L36.4724 110.649L35.9706 110.467L38.0926 104.601L38.5945 104.782ZM36.0327 111.864L35.5889 113.091L35.087 112.909L35.5308 111.683L36.0327 111.864Z"
        fill="currentColor"
      />
      <path
        d="M32.4391 101.834C32.92 102.108 33.2793 102.468 33.5172 102.913C33.7511 103.364 33.8414 103.853 33.7881 104.377L33.2438 104.327C33.2609 103.881 33.18 103.48 33.0011 103.124C32.8153 102.763 32.5438 102.481 32.1866 102.277C31.8019 102.058 31.4242 101.97 31.0536 102.014C30.676 102.053 30.3972 102.231 30.2172 102.547C30.1232 102.712 30.0768 102.881 30.078 103.055C30.0792 103.229 30.1279 103.406 30.2243 103.589C30.3098 103.774 30.4434 103.955 30.625 104.131L31.3806 104.889C31.7537 105.257 31.9817 105.623 32.0645 105.989C32.1434 106.361 32.083 106.723 31.8833 107.073C31.7189 107.362 31.502 107.575 31.2324 107.712C30.9521 107.853 30.6496 107.913 30.325 107.892C30.0004 107.87 29.6835 107.772 29.3743 107.595C28.9347 107.345 28.6008 107.005 28.3728 106.574C28.134 106.147 28.0496 105.712 28.1197 105.27L28.6905 105.322C28.6655 105.717 28.7346 106.075 28.8978 106.396C29.0609 106.716 29.304 106.968 29.6268 107.152C29.9703 107.348 30.3102 107.414 30.6465 107.351C30.9828 107.288 31.2351 107.109 31.4035 106.813C31.4896 106.662 31.5335 106.505 31.5353 106.343C31.5332 106.187 31.4888 106.025 31.4023 105.857C31.3158 105.69 31.1886 105.522 31.0207 105.353L30.2608 104.579C29.8847 104.201 29.6508 103.813 29.5591 103.415C29.4636 103.023 29.5175 102.649 29.7211 102.292C29.8855 102.003 30.1167 101.789 30.4147 101.65C30.7087 101.517 31.0338 101.466 31.3898 101.496C31.739 101.522 32.0887 101.634 32.4391 101.834Z"
        fill="currentColor"
      />
      <path
        d="M25.2994 96.6003C25.7227 96.9928 26.0115 97.4546 26.1659 97.9859C26.3145 98.5118 26.3236 99.0485 26.1933 99.5962C26.0576 100.15 25.7801 100.652 25.3608 101.105C24.9361 101.563 24.4557 101.877 23.9194 102.049C23.3832 102.22 22.8473 102.252 22.3117 102.143C21.7703 102.029 21.2879 101.776 20.8646 101.384C20.5805 101.121 20.3626 100.832 20.2109 100.519C20.0534 100.201 19.96 99.8768 19.9308 99.5478C19.8957 99.2134 19.9228 98.8935 20.0119 98.588L20.5118 98.7118C20.4053 99.1522 20.4127 99.5687 20.5339 99.9614C20.6497 100.36 20.8728 100.712 21.2033 101.019C21.557 101.347 21.9539 101.558 22.3939 101.653C22.8339 101.749 23.2804 101.721 23.7334 101.569C24.1811 101.424 24.5931 101.148 24.9694 100.742C25.3457 100.336 25.5922 99.9014 25.7089 99.4382C25.8203 98.9808 25.8119 98.5364 25.6836 98.1048C25.5554 97.6733 25.3145 97.2935 24.9608 96.9656C24.6303 96.6592 24.262 96.4634 23.8559 96.378C23.4498 96.2927 23.0339 96.3168 22.6082 96.4504L22.4389 95.9701C22.7315 95.8639 23.0484 95.8127 23.3899 95.8166C23.7201 95.8209 24.0527 95.8866 24.3876 96.0138C24.7114 96.1414 25.0153 96.3369 25.2994 96.6003Z"
        fill="currentColor"
      />
      <path
        d="M19.3151 89.4668C19.6363 89.9653 19.8056 90.491 19.8232 91.044C19.8408 91.597 19.7185 92.1225 19.4563 92.6206C19.1874 93.123 18.7937 93.5412 18.2752 93.8752C17.7501 94.2134 17.2065 94.3989 16.6446 94.4318C16.0826 94.4646 15.5535 94.3587 15.0573 94.114C14.5611 93.8693 14.1524 93.4977 13.8313 92.9992C13.5059 92.494 13.3365 91.9682 13.3232 91.4219C13.3056 90.869 13.4279 90.3434 13.6902 89.8453C13.9524 89.3472 14.3461 88.929 14.8713 88.5908C15.3897 88.2568 15.9333 88.0712 16.5019 88.0341C17.0639 88.0013 17.593 88.1073 18.0891 88.3519C18.5811 88.59 18.9897 88.9616 19.3151 89.4668ZM18.8864 89.7429C18.6252 89.3375 18.29 89.0361 17.8808 88.8388C17.4649 88.6459 17.0188 88.5665 16.5423 88.6006C16.0659 88.6348 15.6116 88.791 15.1795 89.0693C14.7408 89.3519 14.4107 89.7009 14.1893 90.1163C13.9569 90.5294 13.8458 90.963 13.8562 91.4172C13.86 91.8756 13.9946 92.3109 14.2601 92.723C14.5212 93.1285 14.8619 93.431 15.282 93.6306C15.6913 93.8279 16.1341 93.9094 16.6106 93.8753C17.0761 93.8387 17.5282 93.6792 17.9669 93.3966C18.399 93.1183 18.7291 92.7693 18.9572 92.3496C19.1853 91.9299 19.2975 91.4908 19.2938 91.0324C19.2834 90.5782 19.1476 90.1484 18.8864 89.7429Z"
        fill="currentColor"
      />
      <path
        d="M15.3584 81.8294L10.3036 86.2666L10.1034 85.6959L14.7884 81.602L14.863 81.8146L8.64332 81.5325L8.43922 80.9506L15.17 81.2922L15.3584 81.8294Z"
        fill="currentColor"
      />
      <path
        d="M13.4315 72.8222C13.4953 73.4118 13.4111 73.9577 13.1791 74.4599C12.9393 74.963 12.5905 75.3785 12.1329 75.7063C11.6674 76.035 11.132 76.232 10.5267 76.2975C9.91356 76.3637 9.34885 76.2896 8.83258 76.075C8.30845 75.8613 7.88067 75.5457 7.54923 75.1282C7.21695 74.7029 7.02022 74.2072 6.95903 73.6412C6.91569 73.2403 6.95 72.8588 7.06197 72.4968C7.17393 72.1348 7.34995 71.8136 7.59003 71.5331C7.82926 71.2448 8.12202 71.0104 8.46833 70.8298C8.80677 70.65 9.18431 70.5376 9.60094 70.4926C9.67954 70.4841 9.75465 70.48 9.82625 70.4802C9.89699 70.4725 9.97645 70.4719 10.0646 70.4783L10.6625 76.0084L10.1908 76.0594L9.62611 70.8358L9.80107 71.0197C9.31114 71.0488 8.88421 71.1824 8.52027 71.4206C8.14847 71.6596 7.86771 71.9683 7.67799 72.3467C7.4804 72.7259 7.40583 73.1396 7.45427 73.5877C7.50441 74.0515 7.67172 74.4589 7.9562 74.8098C8.23983 75.153 8.60185 75.412 9.04228 75.5871C9.47484 75.763 9.95053 75.8229 10.4694 75.7668C10.9882 75.7108 11.4436 75.5462 11.8356 75.2732C12.2275 75.0002 12.5246 74.6579 12.7266 74.2464C12.9199 73.8279 12.9898 73.371 12.9363 72.8757C12.8879 72.4277 12.738 72.0343 12.4866 71.6956C12.2353 71.357 11.9051 71.0984 11.4962 70.92L11.6835 70.4464C11.9984 70.5635 12.2838 70.7394 12.5399 70.9741C12.788 71.2098 12.9889 71.4863 13.1425 71.8037C13.2952 72.1132 13.3916 72.4527 13.4315 72.8222Z"
        fill="currentColor"
      />
      <path
        d="M13.152 66.3143L6.94191 65.7212L6.99265 65.1899L8.30316 65.3151L8.23059 65.4511C7.82471 65.2932 7.52456 65.0263 7.33013 64.6503C7.12783 64.2735 7.04886 63.853 7.09322 63.3886L7.13043 62.999L7.66172 63.0497L7.62338 63.4511C7.56925 64.0178 7.71212 64.4763 8.05198 64.8264C8.39259 65.1687 8.85018 65.3673 9.42476 65.4222L13.2028 65.783L13.152 66.3143Z"
        fill="currentColor"
      />
      <path
        d="M47.2274 64.0158C46.2532 64.0158 45.3764 63.782 44.597 63.3144C43.8176 62.8467 43.2006 62.2102 42.746 61.4049C42.2914 60.5865 42.064 59.6708 42.064 58.6576C42.064 57.6314 42.2914 56.7156 42.746 55.9103C43.2006 55.1049 43.8176 54.4684 44.597 54.0008C45.3764 53.5332 46.2532 53.2994 47.2274 53.2994C48.2146 53.2994 49.0914 53.5332 49.8578 54.0008C50.6372 54.4684 51.2542 55.1049 51.7088 55.9103C52.1635 56.7156 52.3908 57.6314 52.3908 58.6576C52.3908 59.6708 52.1635 60.5865 51.7088 61.4049C51.2542 62.2102 50.6372 62.8467 49.8578 63.3144C49.0914 63.782 48.2146 64.0158 47.2274 64.0158ZM47.2274 63.178C48.0198 63.178 48.7342 62.9831 49.3707 62.5934C50.0072 62.1908 50.5138 61.6452 50.8905 60.9567C51.2672 60.2683 51.4555 59.5019 51.4555 58.6576C51.4555 57.8003 51.2672 57.0339 50.8905 56.3584C50.5268 55.67 50.0267 55.1309 49.3902 54.7412C48.7537 54.3385 48.0328 54.1372 47.2274 54.1372C46.4351 54.1372 45.7141 54.3385 45.0646 54.7412C44.4282 55.1309 43.9216 55.67 43.5449 56.3584C43.1812 57.0339 42.9993 57.8003 42.9993 58.6576C42.9993 59.5019 43.1876 60.2683 43.5643 60.9567C43.941 61.6452 44.4476 62.1908 45.0841 62.5934C45.7206 62.9831 46.4351 63.178 47.2274 63.178ZM55.3935 63.782V53.5332H56.2703V55.696L56.0365 55.5985C56.2313 54.9101 56.621 54.3775 57.2056 54.0008C57.7901 53.6111 58.4656 53.4163 59.2319 53.4163H59.8749V54.2931H59.2125C58.2772 54.2931 57.5498 54.5983 57.0302 55.2088C56.5236 55.8194 56.2703 56.5987 56.2703 57.547V63.782H55.3935Z"
        fill="currentColor"
        fillOpacity="0.5"
      />
    </svg>
  );
}