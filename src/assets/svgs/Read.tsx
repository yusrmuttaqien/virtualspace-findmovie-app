type ReadProps = {
  className?: string;
  tabIndex?: string;
  onClick?: () => void;
  onKeyUp?: () => void;
};

export default function Read(props: ReadProps) {
  return (
    // @ts-ignore
    <svg viewBox="0 0 237 279" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M30.1119 129.3L15.4702 130.892L15.334 129.64L18.4238 129.304L18.3209 129.653C17.3071 129.482 16.4858 129.008 15.8568 128.231C15.2093 127.456 14.826 126.522 14.7069 125.427L14.607 124.508L15.8597 124.372L15.9626 125.319C16.1079 126.655 16.657 127.646 17.6099 128.294C18.5608 128.923 19.7135 129.164 21.0682 129.016L29.9757 128.048L30.1119 129.3Z"
        fill="currentColor"
      />
      <path
        d="M30.0947 108.5C29.9594 109.893 29.5031 111.115 28.7259 112.165C27.9302 113.213 26.9248 114.006 25.7097 114.544C24.476 115.081 23.1439 115.28 21.7133 115.141C20.2641 115 18.9943 114.558 17.9037 113.814C16.7946 113.069 15.9571 112.134 15.3911 111.01C14.827 109.867 14.6099 108.627 14.7398 107.289C14.8319 106.342 15.0941 105.477 15.5266 104.693C15.959 103.91 16.5199 103.252 17.2094 102.719C17.9007 102.167 18.6899 101.766 19.577 101.514C20.4455 101.261 21.3722 101.182 22.3569 101.278C22.5427 101.296 22.7183 101.322 22.8837 101.357C23.0509 101.373 23.2349 101.41 23.4356 101.467L22.1657 114.538L21.051 114.429L22.2505 102.083L22.5667 102.592C21.4202 102.425 20.3692 102.529 19.4137 102.905C18.4397 103.279 17.6426 103.858 17.0226 104.642C16.384 105.424 16.0132 106.344 15.9103 107.403C15.8038 108.499 15.9952 109.521 16.4845 110.469C16.9757 111.398 17.6883 112.171 18.6224 112.787C19.538 113.401 20.6089 113.767 21.8351 113.886C23.0614 114.006 24.193 113.844 25.2301 113.401C26.2671 112.957 27.1178 112.309 27.7822 111.454C28.4299 110.579 28.8105 109.557 28.9243 108.386C29.0271 107.327 28.8693 106.346 28.4507 105.443C28.0321 104.539 27.3929 103.783 26.533 103.175L27.1933 102.17C27.865 102.591 28.4405 103.135 28.9197 103.8C29.3803 104.464 29.7121 105.199 29.915 106.007C30.1197 106.796 30.1796 107.627 30.0947 108.5Z"
        fill="currentColor"
      />
      <path
        d="M34.0552 89.7567C33.7565 90.6015 33.3275 91.3111 32.768 91.8855C32.1972 92.436 31.5499 92.811 30.826 93.0105C30.0845 93.2037 29.3266 93.1635 28.5522 92.8897C27.9187 92.6657 27.3613 92.3103 26.88 91.8234C26.3874 91.3127 26.0362 90.6539 25.8265 89.8472C25.6229 89.0229 25.6291 88.0253 25.8451 86.8543L26.9215 80.7012L28.0567 81.1025L27.041 86.8316C26.7845 88.2852 26.8502 89.3875 27.2381 90.1384C27.626 90.8893 28.1896 91.3954 28.9287 91.6567C29.8087 91.9678 30.619 91.888 31.3596 91.4172C32.1001 90.9465 32.6415 90.2271 32.9837 89.2592C33.3633 88.1856 33.4347 87.1714 33.1981 86.2166C32.9677 85.2442 32.5167 84.3918 31.8451 83.6594C31.1558 82.9208 30.3272 82.3804 29.3593 82.0382L26.0066 80.853C24.9683 80.4859 24.0136 80.5542 23.1425 81.0581C22.26 81.538 21.6104 82.3676 21.1935 83.5468C20.8762 84.4443 20.8038 85.3493 20.9762 86.2616C21.1487 87.1739 21.521 87.9688 22.0933 88.6463L21.1656 89.5062C20.731 89.0556 20.3838 88.4973 20.1243 87.8314C19.8534 87.1416 19.7015 86.395 19.6688 85.5915C19.6361 84.788 19.766 83.9726 20.0584 83.1455C20.413 82.1423 20.9177 81.3308 21.5724 80.7109C22.2334 80.0734 22.9817 79.6648 23.8174 79.4851C24.6593 79.2877 25.529 79.3477 26.4266 79.665L36.0622 83.0714L35.6422 84.2594L32.6064 83.1861L32.6437 83.0805C33.1436 83.5146 33.5554 84.0859 33.8791 84.7943C34.2028 85.5027 34.3924 86.2825 34.4479 87.1337C34.5034 87.9848 34.3725 88.8592 34.0552 89.7567Z"
        fill="currentColor"
      />
      <path
        d="M44.185 68.8875C43.4289 70.0212 42.4658 70.8597 41.2957 71.4032C40.11 71.9362 38.8597 72.1457 37.5447 72.0316C36.2297 71.9175 34.9665 71.4565 33.7552 70.6486C32.5439 69.8408 31.6329 68.8518 31.0221 67.6817C30.3959 66.5011 30.1088 65.2663 30.1607 63.9772C30.2127 62.6881 30.6168 61.4767 31.3728 60.343C32.1599 59.1628 33.1748 58.3139 34.4174 57.7963C35.6445 57.2685 36.9078 57.1237 38.2072 57.3621L38.4789 57.8125L29.6269 51.9091L30.326 50.8608L47.9602 62.6211L47.2611 63.6694L43.7902 61.3546L44.3105 61.4324C45.0299 62.5404 45.3895 63.7675 45.3893 65.1135C45.3735 66.4493 44.9721 67.7072 44.185 68.8875ZM43.1367 68.1884C43.7685 67.2411 44.1 66.2394 44.1312 65.1832C44.1625 64.1271 43.9193 63.1123 43.4017 62.1389C42.8842 61.1655 42.1129 60.337 41.0879 59.6535C40.0474 58.9596 38.9862 58.5659 37.9042 58.4725C36.8066 58.3688 35.7763 58.5343 34.8133 58.969C33.8503 59.4038 33.0529 60.0948 32.4211 61.0421C31.7893 61.9894 31.4578 62.9912 31.4266 64.0473C31.4057 65.0879 31.654 66.0949 32.1716 67.0683C32.6995 68.0262 33.4759 68.8469 34.5009 69.5305C35.5259 70.214 36.582 70.6155 37.6692 70.7347C38.7667 70.8384 39.7918 70.6807 40.7445 70.2615C41.7075 69.8268 42.5049 69.1357 43.1367 68.1884Z"
        fill="currentColor"
      />
      <path
        d="M60.4879 49.1978L52.445 36.8599L53.5005 36.1718L55.2284 38.8223L54.7879 38.6081C54.544 37.653 54.621 36.7114 55.0189 35.7836C55.4324 34.8456 56.0927 34.0809 56.9996 33.4897C57.9692 32.8577 59.0491 32.5659 60.2394 32.6144C61.4195 32.6473 62.4742 33.0516 63.4033 33.8275L63.028 34.0721C62.6353 32.9912 62.6491 31.9014 63.0694 30.803C63.4796 29.6889 64.1929 28.8005 65.2093 28.1379C66.0068 27.618 66.8719 27.3215 67.8046 27.2482C68.7373 27.175 69.639 27.3448 70.5098 27.7576C71.3703 28.1548 72.0962 28.8069 72.6875 29.7138L77.9628 37.8062L76.9072 38.4943L71.7084 30.5192C71.2191 29.7686 70.6369 29.2345 69.962 28.9169C69.2768 28.5837 68.5637 28.4469 67.8227 28.5066C67.0974 28.556 66.4141 28.7897 65.773 29.2077C65.038 29.6868 64.5192 30.2924 64.2166 31.0245C63.9193 31.7307 63.826 32.4935 63.9367 33.3126C64.0528 34.106 64.3606 34.8858 64.8601 35.652L69.7531 43.158L68.6976 43.8461L63.4987 35.871C63.0094 35.1204 62.4273 34.5863 61.7523 34.2687C61.0671 33.9354 60.354 33.7986 59.6131 33.8583C58.8877 33.9078 58.2044 34.1415 57.5633 34.5595C56.8284 35.0386 56.3095 35.6442 56.0069 36.3762C55.7097 37.0825 55.6164 37.8452 55.727 38.6644C55.8431 39.4577 56.1509 40.2375 56.6504 41.0038L61.5434 48.5098L60.4879 49.1978Z"
        fill="currentColor"
      />
      <path
        d="M92.8875 32.9828C91.5423 33.3707 90.2385 33.3969 88.9762 33.0616C87.7138 32.7262 86.6085 32.093 85.66 31.162C84.7064 30.2131 84.0279 29.0391 83.6245 27.6401C83.2159 26.2232 83.1651 24.8682 83.4722 23.5752C83.7793 22.2821 84.3778 21.1576 85.2678 20.2016C86.1577 19.2456 87.2753 18.5736 88.6205 18.1857C89.9836 17.7926 91.2874 17.7663 92.5318 18.1069C93.7941 18.4422 94.8995 19.0754 95.8479 20.0064C96.7964 20.9374 97.4749 22.1114 97.8835 23.5283C98.2869 24.9273 98.3377 26.2823 98.0358 27.5933C97.7287 28.8863 97.1301 30.0108 96.2402 30.9669C95.3682 31.9177 94.2506 32.5897 92.8875 32.9828ZM92.5539 31.8259C93.648 31.5104 94.5569 30.9569 95.2806 30.1654C95.9991 29.3559 96.4813 28.4009 96.7274 27.3003C96.9734 26.1997 96.9283 25.0665 96.5921 23.9007C96.2507 22.7169 95.6855 21.7337 94.8964 20.951C94.1201 20.1453 93.2149 19.6001 92.1809 19.3154C91.1417 19.0128 90.0661 19.0219 88.9541 19.3426C87.86 19.6581 86.9447 20.2231 86.2083 21.0377C85.4846 21.8292 84.9997 22.7753 84.7537 23.8759C84.5205 24.9534 84.5745 26.084 84.9159 27.2677C85.2521 28.4336 85.8173 29.4168 86.6116 30.2174C87.4058 31.018 88.3225 31.5696 89.3617 31.8722C90.3957 32.1568 91.4598 32.1414 92.5539 31.8259Z"
        fill="currentColor"
      />
      <path
        d="M108.721 29.541L107.688 14.8492L108.945 14.7609L109.163 17.8612L108.818 17.7451C109.028 16.7386 109.533 15.9359 110.333 15.3369C111.132 14.7194 112.08 14.372 113.179 14.2948L114.101 14.23L114.189 15.4869L113.24 15.5537C111.899 15.6479 110.887 16.1588 110.204 17.0863C109.539 18.0126 109.254 19.1553 109.35 20.5146L109.978 29.4526L108.721 29.541Z"
        fill="currentColor"
      />
      <path
        d="M129.507 30.3163C128.12 30.1279 126.916 29.6254 125.897 28.8088C124.88 27.9737 124.126 26.9388 123.634 25.7041C123.145 24.4509 122.997 23.1121 123.191 21.6879C123.387 20.2451 123.877 18.9931 124.662 17.9317C125.449 16.8518 126.415 16.0504 127.559 15.5277C128.723 15.0075 129.97 14.8379 131.302 15.0187C132.245 15.1468 133.1 15.4419 133.866 15.9038C134.632 16.3658 135.269 16.9514 135.775 17.6607C136.3 18.3725 136.671 19.1764 136.889 20.0725C137.109 20.9501 137.152 21.879 137.019 22.8594C136.994 23.0443 136.961 23.2188 136.919 23.3827C136.897 23.5492 136.853 23.7317 136.789 23.9301L123.776 22.163L123.927 21.0532L136.218 22.7223L135.697 23.019C135.909 21.8797 135.845 20.8255 135.505 19.8564C135.168 18.8687 134.62 18.0502 133.861 17.4007C133.104 16.7328 132.198 16.3272 131.144 16.184C130.052 16.0358 129.024 16.1881 128.058 16.641C127.111 17.0963 126.312 17.779 125.661 18.689C125.012 19.5805 124.605 20.6366 124.439 21.8574C124.273 23.0782 124.392 24.2152 124.795 25.2684C125.199 26.3216 125.815 27.1964 126.643 27.8929C127.493 28.5734 128.5 28.9928 129.665 29.151C130.72 29.2942 131.706 29.1739 132.625 28.79C133.543 28.4061 134.323 27.7962 134.964 26.9602L135.943 27.6583C135.496 28.3134 134.931 28.8678 134.248 29.3213C133.567 29.7563 132.82 30.0598 132.005 30.2317C131.209 30.4062 130.376 30.4344 129.507 30.3163Z"
        fill="currentColor"
      />
      <path
        d="M158.906 39.8983C157.708 39.249 156.785 38.3665 156.137 37.2509C155.497 36.1188 155.175 34.8929 155.168 33.573C155.162 32.253 155.505 30.9531 156.199 29.673C156.893 28.393 157.795 27.3954 158.904 26.6804C160.023 25.9489 161.226 25.5502 162.515 25.4843C163.803 25.4183 165.046 25.71 166.244 26.3594C167.491 27.0354 168.43 27.9685 169.058 29.1587C169.696 30.3324 169.956 31.5772 169.837 32.893L169.413 33.2047L174.484 23.8505L175.591 24.451L165.491 43.0855L164.383 42.4851L166.371 38.8172L166.341 39.3425C165.303 40.1601 164.114 40.6303 162.774 40.753C161.442 40.8593 160.153 40.5744 158.906 39.8983ZM159.506 38.7906C160.507 39.3332 161.535 39.5719 162.589 39.5065C163.644 39.4412 164.632 39.1064 165.554 38.5021C166.477 37.8978 167.231 37.0541 167.818 35.9709C168.414 34.8714 168.709 33.7786 168.703 32.6926C168.706 31.5902 168.448 30.5793 167.927 29.66C167.406 28.7407 166.645 28.0097 165.644 27.4671C164.643 26.9245 163.615 26.6859 162.56 26.7512C161.522 26.8254 160.542 27.1647 159.62 27.769C158.714 28.3822 157.968 29.2304 157.381 30.3135C156.794 31.3966 156.49 32.4849 156.471 33.5785C156.468 34.6809 156.719 35.6873 157.223 36.5977C157.744 37.517 158.505 38.248 159.506 38.7906Z"
        fill="currentColor"
      />
      <path
        d="M177.486 53.2428C176.462 52.2881 175.769 51.183 175.408 49.9277C175.06 48.6588 175.042 47.3783 175.353 46.0863C175.678 44.7807 176.33 43.6022 177.31 42.551C178.303 41.4861 179.426 40.7469 180.68 40.3333C181.946 39.906 183.197 39.8095 184.434 40.0436C185.684 40.2905 186.8 40.8722 187.783 41.7888C188.48 42.4381 189.007 43.1724 189.366 43.992C189.725 44.8115 189.906 45.657 189.91 46.5286C189.928 47.4129 189.767 48.2836 189.427 49.1407C189.1 49.9842 188.599 50.7677 187.924 51.4913C187.797 51.6278 187.669 51.7512 187.541 51.8613C187.426 51.9842 187.285 52.108 187.118 52.2327L177.514 43.2769L178.278 42.4578L187.349 50.9171L186.753 50.8587C187.583 50.0504 188.14 49.1527 188.422 48.1655C188.717 47.1646 188.742 46.1798 188.497 45.211C188.265 44.2286 187.759 43.3745 186.981 42.6489C186.176 41.8978 185.248 41.4283 184.198 41.2405C183.162 41.0654 182.115 41.1614 181.058 41.5285C180.014 41.882 179.072 42.5092 178.232 43.4103C177.391 44.3113 176.832 45.3082 176.553 46.401C176.274 47.4937 176.272 48.5636 176.546 49.6106C176.847 50.6567 177.427 51.5807 178.288 52.3828C179.066 53.1084 179.941 53.5797 180.912 53.7967C181.884 54.0137 182.873 53.9659 183.879 53.6534L184.275 54.7886C183.532 55.0655 182.751 55.1919 181.931 55.1677C181.124 55.1298 180.338 54.946 179.574 54.6161C178.823 54.2989 178.127 53.8412 177.486 53.2428Z"
        fill="currentColor"
      />
      <path
        d="M190.702 68.582C190.05 67.6485 189.8 66.7529 189.952 65.8951C190.105 65.0374 190.686 64.2558 191.696 63.5502L199.959 57.7777L198.356 55.4823L199.274 54.8409L200.075 55.9886C200.353 56.3864 200.656 56.6077 200.983 56.6524C201.31 56.697 201.688 56.5697 202.117 56.2704L203.724 55.148L204.445 56.1809L201.599 58.1692L203.427 60.786L202.509 61.4273L200.681 58.8106L192.417 64.5831C192.142 64.7756 191.87 65.0223 191.602 65.3233C191.345 65.6396 191.198 66.0156 191.161 66.4514C191.15 66.8918 191.347 67.4028 191.753 67.9843C191.839 68.1067 191.953 68.2544 192.097 68.4273C192.241 68.6003 192.357 68.735 192.448 68.8314L191.529 69.4728C191.377 69.3518 191.218 69.1896 191.053 68.986C190.883 68.8085 190.766 68.6738 190.702 68.582Z"
        fill="currentColor"
      />
      <path
        d="M197.382 80.9892C197.03 80.1655 196.864 79.3529 196.887 78.5514C196.934 77.7598 197.156 77.0453 197.553 76.4082C197.967 75.7637 198.552 75.2798 199.307 74.9565C199.925 74.6919 200.576 74.5757 201.259 74.6077C201.968 74.6496 202.672 74.8962 203.373 75.3474C204.081 75.8157 204.753 76.5537 205.387 77.5612L208.765 82.8161L207.658 83.29L204.523 78.3882C203.727 77.1453 202.932 76.3791 202.138 76.0897C201.344 75.8002 200.586 75.8098 199.866 76.1184C199.008 76.4858 198.466 77.0935 198.24 77.9415C198.014 78.7895 198.103 79.6854 198.508 80.6292C198.956 81.6759 199.59 82.4702 200.411 83.0122C201.24 83.5712 202.149 83.8926 203.139 83.9762C204.146 84.0525 205.122 83.8886 206.066 83.4844L209.335 82.0846C210.347 81.6511 211.003 80.9539 211.302 79.9932C211.626 79.0423 211.542 77.992 211.049 76.8423C210.675 75.9672 210.115 75.2525 209.37 74.6984C208.625 74.1442 207.813 73.8118 206.933 73.7013L207.032 72.4403C207.657 72.4772 208.291 72.6526 208.933 72.9666C209.599 73.2903 210.217 73.7366 210.785 74.3054C211.354 74.8742 211.811 75.5618 212.156 76.3683C212.575 77.3464 212.754 78.2852 212.692 79.1848C212.638 80.1014 212.364 80.909 211.872 81.6074C211.386 82.323 210.706 82.8681 209.831 83.2429L200.436 87.266L199.94 86.1077L202.9 84.8402L202.944 84.9431C202.282 84.9625 201.592 84.8214 200.874 84.5197C200.156 84.218 199.488 83.7729 198.871 83.1845C198.253 82.5961 197.757 81.8643 197.382 80.9892Z"
        fill="currentColor"
      />
      <path
        d="M203.168 96.9269L217.538 93.698L217.814 94.9274L203.444 98.1563L203.168 96.9269ZM220.516 93.0289L223.521 92.3537L223.797 93.583L220.792 94.2583L220.516 93.0289Z"
        fill="currentColor"
      />
      <path
        d="M205.076 108.176L226.183 106.241L226.299 107.495L205.191 109.431L205.076 108.176Z"
        fill="currentColor"
      />
      <path
        d="M204.931 124.165C205.037 122.863 205.447 121.735 206.162 120.782C206.895 119.83 207.849 119.15 209.025 118.74L209.46 119.955C208.49 120.363 207.713 120.936 207.128 121.675C206.542 122.433 206.21 123.295 206.131 124.263C206.046 125.305 206.235 126.2 206.698 126.95C207.16 127.718 207.819 128.137 208.675 128.207C209.121 128.243 209.53 128.173 209.9 127.997C210.27 127.822 210.602 127.54 210.896 127.151C211.207 126.784 211.46 126.317 211.656 125.753L212.524 123.379C212.937 122.214 213.493 121.361 214.193 120.818C214.911 120.278 215.745 120.046 216.694 120.123C217.475 120.187 218.148 120.438 218.711 120.878C219.292 121.337 219.722 121.924 220 122.64C220.279 123.356 220.384 124.132 220.316 124.969C220.219 126.16 219.824 127.214 219.131 128.132C218.456 129.069 217.61 129.684 216.593 129.976L216.135 128.702C217.006 128.361 217.702 127.856 218.225 127.187C218.748 126.518 219.045 125.746 219.116 124.872C219.192 123.941 218.994 123.148 218.524 122.492C218.053 121.835 217.417 121.474 216.617 121.409C216.208 121.376 215.828 121.439 215.478 121.597C215.147 121.758 214.845 122.014 214.573 122.366C214.3 122.719 214.068 123.159 213.875 123.686L212.977 126.085C212.544 127.267 211.947 128.155 211.187 128.748C210.446 129.343 209.591 129.602 208.624 129.523C207.842 129.459 207.154 129.178 206.557 128.68C205.98 128.184 205.545 127.539 205.254 126.748C204.961 125.975 204.853 125.114 204.931 124.165Z"
        fill="currentColor"
      />
      <path
        d="M206.649 149.584L221.291 147.992L221.427 149.245L218.337 149.581L218.44 149.232C219.454 149.403 220.275 149.877 220.904 150.654C221.552 151.428 221.935 152.363 222.054 153.458L222.154 154.376L220.901 154.513L220.799 153.566C220.653 152.23 220.104 151.238 219.151 150.591C218.2 149.962 217.048 149.721 215.693 149.868L206.785 150.837L206.649 149.584Z"
        fill="currentColor"
      />
      <path
        d="M206.666 170.385C206.802 168.991 207.258 167.77 208.035 166.72C208.831 165.672 209.836 164.879 211.051 164.341C212.285 163.804 213.617 163.605 215.048 163.744C216.497 163.885 217.767 164.327 218.857 165.071C219.966 165.816 220.804 166.751 221.37 167.875C221.934 169.017 222.151 170.258 222.021 171.595C221.929 172.543 221.667 173.408 221.235 174.191C220.802 174.975 220.241 175.633 219.552 176.166C218.86 176.718 218.071 177.119 217.184 177.371C216.316 177.624 215.389 177.703 214.404 177.607C214.218 177.589 214.043 177.562 213.877 177.528C213.71 177.511 213.526 177.475 213.325 177.418L214.595 164.347L215.71 164.456L214.511 176.801L214.194 176.292C215.341 176.46 216.392 176.356 217.347 175.98C218.321 175.606 219.119 175.027 219.739 174.243C220.377 173.461 220.748 172.541 220.851 171.482C220.957 170.385 220.766 169.363 220.277 168.416C219.785 167.487 219.073 166.714 218.139 166.098C217.223 165.484 216.152 165.117 214.926 164.998C213.7 164.879 212.568 165.041 211.531 165.484C210.494 165.927 209.643 166.576 208.979 167.431C208.331 168.305 207.951 169.328 207.837 170.499C207.734 171.558 207.892 172.539 208.31 173.442C208.729 174.345 209.368 175.102 210.228 175.71L209.568 176.715C208.896 176.293 208.321 175.75 207.841 175.084C207.381 174.421 207.049 173.685 206.846 172.878C206.641 172.089 206.582 171.258 206.666 170.385Z"
        fill="currentColor"
      />
      <path
        d="M202.706 189.128C203.005 188.283 203.434 187.574 203.993 186.999C204.564 186.449 205.211 186.074 205.935 185.874C206.677 185.681 207.435 185.721 208.209 185.995C208.842 186.219 209.4 186.574 209.881 187.061C210.374 187.572 210.725 188.231 210.935 189.038C211.138 189.862 211.132 190.859 210.916 192.03L209.84 198.184L208.704 197.782L209.72 192.053C209.977 190.6 209.911 189.497 209.523 188.746C209.135 187.995 208.572 187.489 207.832 187.228C206.952 186.917 206.142 186.997 205.402 187.468C204.661 187.938 204.12 188.658 203.777 189.626C203.398 190.699 203.326 191.713 203.563 192.668C203.793 193.641 204.244 194.493 204.916 195.225C205.605 195.964 206.434 196.504 207.402 196.847L210.754 198.032C211.793 198.399 212.748 198.331 213.619 197.827C214.501 197.347 215.151 196.517 215.568 195.338C215.885 194.44 215.957 193.536 215.785 192.623C215.612 191.711 215.24 190.916 214.668 190.239L215.596 189.379C216.03 189.829 216.377 190.387 216.637 191.053C216.908 191.743 217.06 192.49 217.092 193.293C217.125 194.097 216.995 194.912 216.703 195.739C216.348 196.742 215.843 197.554 215.189 198.174C214.528 198.811 213.779 199.22 212.944 199.4C212.102 199.597 211.232 199.537 210.335 199.22L200.699 195.813L201.119 194.625L204.155 195.699L204.117 195.804C203.618 195.37 203.206 194.799 202.882 194.09C202.558 193.382 202.369 192.602 202.313 191.751C202.258 190.9 202.389 190.026 202.706 189.128Z"
        fill="currentColor"
      />
      <path
        d="M192.576 209.997C193.332 208.863 194.295 208.025 195.465 207.481C196.651 206.948 197.901 206.739 199.216 206.853C200.531 206.967 201.795 207.428 203.006 208.236C204.217 209.043 205.128 210.032 205.739 211.203C206.365 212.383 206.652 213.618 206.6 214.907C206.548 216.196 206.144 217.408 205.388 218.541C204.601 219.722 203.586 220.57 202.344 221.088C201.117 221.616 199.853 221.761 198.554 221.522L198.282 221.072L207.134 226.975L206.435 228.023L188.801 216.263L189.5 215.215L192.971 217.53L192.451 217.452C191.731 216.344 191.372 215.117 191.372 213.771C191.388 212.435 191.789 211.177 192.576 209.997ZM193.624 210.696C192.993 211.643 192.661 212.645 192.63 213.701C192.599 214.757 192.842 215.772 193.359 216.745C193.877 217.719 194.648 218.547 195.673 219.231C196.714 219.925 197.775 220.318 198.857 220.412C199.954 220.515 200.985 220.35 201.948 219.915C202.911 219.481 203.708 218.789 204.34 217.842C204.972 216.895 205.303 215.893 205.335 214.837C205.355 213.796 205.107 212.789 204.59 211.816C204.062 210.858 203.285 210.037 202.26 209.354C201.235 208.67 200.179 208.269 199.092 208.15C197.994 208.046 196.969 208.204 196.017 208.623C195.054 209.058 194.256 209.749 193.624 210.696Z"
        fill="currentColor"
      />
      <path
        d="M176.273 229.687L184.316 242.025L183.261 242.713L181.533 240.062L181.973 240.277C182.217 241.232 182.14 242.173 181.742 243.101C181.329 244.039 180.668 244.804 179.761 245.395C178.792 246.027 177.712 246.319 176.522 246.27C175.342 246.237 174.287 245.833 173.358 245.057L173.733 244.813C174.126 245.894 174.112 246.983 173.692 248.082C173.282 249.196 172.568 250.084 171.552 250.747C170.754 251.267 169.889 251.563 168.956 251.637C168.024 251.71 167.122 251.54 166.251 251.127C165.391 250.73 164.665 250.078 164.074 249.171L158.798 241.079L159.854 240.39L165.053 248.366C165.542 249.116 166.124 249.65 166.799 249.968C167.484 250.301 168.197 250.438 168.938 250.378C169.664 250.329 170.347 250.095 170.988 249.677C171.723 249.198 172.242 248.592 172.545 247.86C172.842 247.154 172.935 246.391 172.824 245.572C172.708 244.779 172.401 243.999 171.901 243.233L167.008 235.727L168.064 235.039L173.262 243.014C173.752 243.764 174.334 244.298 175.009 244.616C175.694 244.949 176.407 245.086 177.148 245.026C177.873 244.977 178.557 244.743 179.198 244.325C179.933 243.846 180.452 243.241 180.754 242.509C181.051 241.802 181.145 241.04 181.034 240.22C180.918 239.427 180.61 238.647 180.111 237.881L175.218 230.375L176.273 229.687Z"
        fill="currentColor"
      />
      <path
        d="M143.874 245.902C145.219 245.514 146.523 245.488 147.785 245.823C149.047 246.159 150.153 246.792 151.101 247.723C152.055 248.672 152.733 249.846 153.137 251.245C153.545 252.662 153.596 254.017 153.289 255.31C152.982 256.603 152.383 257.727 151.493 258.683C150.603 259.639 149.486 260.311 148.141 260.699C146.778 261.092 145.474 261.118 144.229 260.778C142.967 260.443 141.862 259.809 140.913 258.878C139.965 257.947 139.286 256.773 138.878 255.356C138.474 253.957 138.424 252.602 138.725 251.291C139.033 249.998 139.631 248.874 140.521 247.918C141.393 246.967 142.511 246.295 143.874 245.902ZM144.207 247.059C143.113 247.374 142.204 247.928 141.481 248.719C140.762 249.529 140.28 250.484 140.034 251.584C139.788 252.685 139.833 253.818 140.169 254.984C140.51 256.168 141.076 257.151 141.865 257.934C142.641 258.739 143.546 259.285 144.58 259.569C145.62 259.872 146.695 259.863 147.807 259.542C148.901 259.227 149.816 258.662 150.553 257.847C151.277 257.056 151.761 256.109 152.008 255.009C152.241 253.931 152.187 252.801 151.845 251.617C151.509 250.451 150.944 249.468 150.15 248.667C149.355 247.867 148.439 247.315 147.4 247.013C146.365 246.728 145.301 246.743 144.207 247.059Z"
        fill="currentColor"
      />
      <path
        d="M128.04 249.344L129.073 264.036L127.816 264.124L127.598 261.024L127.943 261.14C127.733 262.146 127.228 262.949 126.428 263.548C125.629 264.165 124.681 264.513 123.582 264.59L122.66 264.655L122.572 263.398L123.522 263.331C124.862 263.237 125.874 262.726 126.558 261.798C127.222 260.872 127.507 259.729 127.411 258.37L126.783 249.432L128.04 249.344Z"
        fill="currentColor"
      />
      <path
        d="M107.254 248.568C108.641 248.757 109.845 249.259 110.864 250.076C111.881 250.911 112.635 251.946 113.127 253.181C113.616 254.434 113.764 255.773 113.57 257.197C113.374 258.64 112.884 259.892 112.1 260.953C111.312 262.033 110.346 262.834 109.202 263.357C108.038 263.877 106.791 264.047 105.459 263.866C104.516 263.738 103.661 263.443 102.895 262.981C102.129 262.519 101.493 261.933 100.986 261.224C100.461 260.512 100.09 259.708 99.8724 258.812C99.6525 257.935 99.6091 257.006 99.7423 256.025C99.7674 255.84 99.8005 255.666 99.8416 255.502C99.8642 255.336 99.9078 255.153 99.9725 254.955L112.985 256.722L112.834 257.832L100.543 256.162L101.064 255.866C100.853 257.005 100.917 258.059 101.256 259.028C101.593 260.016 102.141 260.835 102.9 261.484C103.657 262.152 104.563 262.558 105.617 262.701C106.709 262.849 107.737 262.697 108.703 262.244C109.65 261.788 110.449 261.106 111.1 260.196C111.749 259.304 112.156 258.248 112.322 257.027C112.488 255.807 112.369 254.67 111.966 253.616C111.562 252.563 110.946 251.688 110.118 250.992C109.269 250.311 108.261 249.892 107.096 249.734C106.041 249.591 105.055 249.711 104.136 250.095C103.218 250.479 102.438 251.089 101.797 251.925L100.818 251.226C101.265 250.571 101.83 250.017 102.513 249.563C103.194 249.128 103.941 248.825 104.756 248.653C105.552 248.479 106.385 248.45 107.254 248.568Z"
        fill="currentColor"
      />
      <path
        d="M77.8556 238.986C79.0535 239.636 79.9765 240.518 80.6246 241.634C81.2637 242.766 81.5864 243.992 81.5929 245.312C81.5994 246.632 81.2557 247.932 80.5618 249.212C79.868 250.492 78.9663 251.489 77.8568 252.204C76.7385 252.936 75.535 253.335 74.2466 253.4C72.9581 253.466 71.7148 253.175 70.5168 252.525C69.2696 251.849 68.3316 250.916 67.7028 249.726C67.065 248.552 66.8055 247.308 66.9242 245.992L67.348 245.68L62.2776 255.034L61.1699 254.434L71.2706 235.799L72.3783 236.4L70.3902 240.068L70.4201 239.542C71.4578 238.725 72.6469 238.255 73.9874 238.132C75.3189 238.025 76.6083 238.31 77.8556 238.986ZM77.2551 240.094C76.254 239.552 75.2262 239.313 74.1716 239.378C73.1171 239.444 72.1287 239.778 71.2067 240.383C70.2846 240.987 69.53 241.831 68.9429 242.914C68.3469 244.013 68.0519 245.106 68.0577 246.192C68.0546 247.295 68.3135 248.305 68.8344 249.225C69.3553 250.144 70.1162 250.875 71.1173 251.418C72.1184 251.96 73.1462 252.199 74.2008 252.134C75.2389 252.059 76.219 251.72 77.1411 251.116C78.0468 250.503 78.7931 249.654 79.3802 248.571C79.9673 247.488 80.2706 246.4 80.2901 245.306C80.2931 244.204 80.0424 243.197 79.538 242.287C79.0171 241.368 78.2562 240.637 77.2551 240.094Z"
        fill="currentColor"
      />
      <path
        d="M59.2755 225.641C60.2995 226.596 60.9918 227.701 61.3527 228.957C61.7008 230.226 61.7191 231.506 61.4077 232.798C61.0835 234.104 60.4313 235.282 59.451 236.333C58.4581 237.398 57.3349 238.137 56.0814 238.551C54.8152 238.978 53.5639 239.075 52.3274 238.841C51.0773 238.594 49.9608 238.012 48.9778 237.095C48.2815 236.446 47.754 235.712 47.3952 234.892C47.0364 234.073 46.8549 233.227 46.8509 232.356C46.8332 231.471 46.9943 230.601 47.3341 229.744C47.6613 228.9 48.1622 228.117 48.8369 227.393C48.9642 227.256 49.0919 227.133 49.2202 227.023C49.3347 226.9 49.4757 226.776 49.643 226.652L59.2474 235.607L58.4836 236.427L49.4117 227.967L50.008 228.026C49.1778 228.834 48.6214 229.732 48.339 230.719C48.0437 231.72 48.0187 232.705 48.2639 233.673C48.4963 234.656 49.0016 235.51 49.7798 236.235C50.5853 236.986 51.513 237.456 52.563 237.644C53.5993 237.819 54.6459 237.723 55.7029 237.356C56.7471 237.002 57.6893 236.375 58.5295 235.474C59.3697 234.573 59.9292 233.576 60.208 232.483C60.4868 231.391 60.489 230.321 60.2147 229.274C59.914 228.228 59.3336 227.304 58.4735 226.502C57.6954 225.776 56.8204 225.305 55.8487 225.088C54.877 224.871 53.8881 224.918 52.882 225.231L52.4858 224.096C53.2289 223.819 54.0103 223.692 54.83 223.717C55.637 223.754 56.4227 223.938 57.187 224.268C57.9377 224.585 58.6339 225.043 59.2755 225.641Z"
        fill="currentColor"
      />
      <path
        d="M46.059 210.302C46.711 211.236 46.961 212.131 46.8088 212.989C46.6565 213.847 46.0754 214.629 45.0655 215.334L36.8021 221.107L38.4055 223.402L37.4874 224.043L36.6856 222.896C36.4077 222.498 36.1051 222.277 35.7779 222.232C35.4507 222.187 35.0729 222.315 34.6444 222.614L33.0376 223.736L32.316 222.703L35.1623 220.715L33.3344 218.098L34.2525 217.457L36.0805 220.074L44.3439 214.301C44.6193 214.109 44.891 213.862 45.1589 213.561C45.4161 213.245 45.5633 212.869 45.6004 212.433C45.6116 211.992 45.414 211.481 45.0078 210.9C44.9223 210.778 44.8077 210.63 44.6642 210.457C44.5206 210.284 44.4037 210.149 44.3136 210.053L45.2317 209.411C45.3845 209.532 45.5434 209.695 45.7084 209.898C45.878 210.076 45.9948 210.21 46.059 210.302Z"
        fill="currentColor"
      />
      <path
        d="M39.3787 197.895C39.7314 198.719 39.8966 199.531 39.8743 200.333C39.8275 201.125 39.6055 201.839 39.2083 202.476C38.7938 203.121 38.2091 203.605 37.4541 203.928C36.8364 204.192 36.1856 204.309 35.5017 204.277C34.7934 204.235 34.0888 203.988 33.3879 203.537C32.6797 203.069 32.0083 202.331 31.3738 201.323L27.9966 196.068L29.1033 195.594L32.238 200.496C33.0343 201.739 33.8294 202.505 34.6235 202.795C35.4175 203.084 36.1749 203.074 36.8956 202.766C37.7536 202.398 38.2954 201.791 38.5212 200.943C38.7469 200.095 38.6577 199.199 38.2536 198.255C37.8053 197.208 37.1708 196.414 36.3498 195.872C35.5215 195.313 34.6123 194.992 33.6221 194.908C32.6147 194.832 31.6391 194.996 30.6954 195.4L27.4265 196.8C26.4141 197.233 25.7582 197.93 25.4589 198.891C25.1351 199.842 25.2193 200.892 25.7117 202.042C26.0864 202.917 26.6463 203.632 27.3912 204.186C28.1362 204.74 28.9486 205.072 29.8285 205.183L29.7289 206.444C29.1039 206.407 28.4703 206.232 27.8282 205.918C27.1616 205.594 26.5441 205.148 25.9756 204.579C25.4071 204.01 24.9502 203.322 24.6049 202.516C24.186 201.538 24.0074 200.599 24.0689 199.7C24.1231 198.783 24.3966 197.975 24.8895 197.277C25.375 196.561 26.0553 196.016 26.9305 195.641L36.3253 191.618L36.8213 192.777L33.8613 194.044L33.8172 193.941C34.479 193.922 35.1689 194.063 35.887 194.365C36.6051 194.666 37.2729 195.111 37.8903 195.7C38.5078 196.288 39.004 197.02 39.3787 197.895Z"
        fill="currentColor"
      />
      <path
        d="M33.5929 181.957L19.2232 185.186L18.947 183.957L33.3167 180.728L33.5929 181.957ZM16.2455 185.855L13.2404 186.531L12.9642 185.301L15.9692 184.626L16.2455 185.855Z"
        fill="currentColor"
      />
      <path
        d="M31.685 170.708L10.5776 172.644L10.4625 171.389L31.57 169.454L31.685 170.708Z"
        fill="currentColor"
      />
      <path
        d="M31.8304 154.72C31.7243 156.022 31.314 157.15 30.5995 158.103C29.8665 159.055 28.912 159.735 27.7362 160.145L27.3015 158.93C28.2711 158.522 29.0483 157.948 29.6329 157.209C30.219 156.452 30.5515 155.589 30.6304 154.622C30.7153 153.58 30.5261 152.684 30.0628 151.935C29.6009 151.167 28.9421 150.748 28.0863 150.678C27.6398 150.642 27.2314 150.712 26.8613 150.887C26.4911 151.063 26.1591 151.345 25.8653 151.733C25.5543 152.101 25.301 152.568 25.1051 153.132L24.2375 155.506C23.8241 156.67 23.2676 157.524 22.5679 158.066C21.8496 158.607 21.0161 158.839 20.0672 158.762C19.2858 158.698 18.6133 158.446 18.0498 158.007C17.4692 157.548 17.0395 156.96 16.7607 156.245C16.4819 155.529 16.3767 154.753 16.4449 153.915C16.5419 152.725 16.9369 151.671 17.6297 150.753C18.3054 149.816 19.1514 149.201 20.1678 148.909L20.6259 150.183C19.7553 150.524 19.0587 151.029 18.5359 151.698C18.0132 152.367 17.7162 153.139 17.6449 154.013C17.5691 154.943 17.7666 155.737 18.2376 156.393C18.7085 157.05 19.3439 157.41 20.1439 157.476C20.5532 157.509 20.9329 157.446 21.283 157.287C21.6144 157.127 21.9162 156.871 22.1884 156.518C22.4606 156.166 22.6931 155.726 22.8859 155.199L23.7838 152.8C24.2172 151.618 24.814 150.73 25.574 150.136C26.3155 149.541 27.1699 149.283 28.1374 149.362C28.9188 149.426 29.6076 149.707 30.2038 150.205C30.7813 150.701 31.2158 151.345 31.5071 152.137C31.8 152.91 31.9077 153.771 31.8304 154.72Z"
        fill="currentColor"
      />
      <path
        d="M70.054 155.552C67.7233 155.552 65.638 154.954 63.798 153.758C61.9887 152.531 60.6393 150.921 59.75 148.928L60.118 148.146V155H58.048V120.178H60.118V137.658L59.75 136.876C60.6393 134.883 61.9887 133.288 63.798 132.092C65.638 130.865 67.7233 130.252 70.054 130.252C72.3233 130.252 74.3473 130.804 76.126 131.908C77.9353 133.012 79.3613 134.53 80.404 136.462C81.4467 138.363 81.968 140.51 81.968 142.902C81.968 145.294 81.4467 147.441 80.404 149.342C79.3613 151.243 77.9353 152.761 76.126 153.896C74.3473 155 72.3233 155.552 70.054 155.552ZM70.054 153.482C71.9247 153.482 73.5807 153.022 75.022 152.102C76.494 151.182 77.644 149.925 78.472 148.33C79.3307 146.735 79.76 144.926 79.76 142.902C79.76 140.878 79.3307 139.069 78.472 137.474C77.644 135.879 76.494 134.622 75.022 133.702C73.5807 132.782 71.9247 132.322 70.054 132.322C68.214 132.322 66.5427 132.782 65.04 133.702C63.568 134.622 62.4027 135.879 61.544 137.474C60.6853 139.038 60.256 140.847 60.256 142.902C60.256 144.926 60.6853 146.735 61.544 148.33C62.4027 149.925 63.568 151.182 65.04 152.102C66.5427 153.022 68.214 153.482 70.054 153.482ZM98.3821 155.552C96.0821 155.552 94.0121 155 92.1721 153.896C90.3321 152.761 88.8754 151.243 87.8021 149.342C86.7288 147.41 86.1921 145.263 86.1921 142.902C86.1921 140.51 86.7134 138.363 87.7561 136.462C88.7988 134.53 90.1941 133.012 91.9421 131.908C93.7208 130.804 95.7141 130.252 97.9221 130.252C99.4861 130.252 100.943 130.543 102.292 131.126C103.641 131.709 104.807 132.521 105.788 133.564C106.8 134.607 107.582 135.833 108.134 137.244C108.686 138.624 108.962 140.127 108.962 141.752C108.962 142.059 108.947 142.35 108.916 142.626C108.916 142.902 108.885 143.209 108.824 143.546H87.2501V141.706H107.628L106.846 142.304C106.938 140.403 106.601 138.701 105.834 137.198C105.067 135.665 103.994 134.453 102.614 133.564C101.234 132.644 99.6701 132.184 97.9221 132.184C96.1128 132.184 94.4721 132.659 93.0001 133.61C91.5588 134.561 90.4088 135.849 89.5501 137.474C88.6914 139.069 88.2621 140.878 88.2621 142.902C88.2621 144.926 88.7068 146.751 89.5961 148.376C90.4854 150.001 91.6814 151.289 93.1841 152.24C94.7174 153.16 96.4501 153.62 98.3821 153.62C100.13 153.62 101.709 153.206 103.12 152.378C104.531 151.55 105.665 150.385 106.524 148.882L108.272 149.802C107.689 150.967 106.892 151.995 105.88 152.884C104.868 153.743 103.718 154.402 102.43 154.862C101.173 155.322 99.8234 155.552 98.3821 155.552ZM114.204 155V120.178H116.274V155H114.204ZM133.694 155.552C131.394 155.552 129.324 155 127.484 153.896C125.644 152.792 124.188 151.289 123.114 149.388C122.041 147.456 121.504 145.294 121.504 142.902C121.504 140.479 122.041 138.317 123.114 136.416C124.188 134.515 125.644 133.012 127.484 131.908C129.324 130.804 131.394 130.252 133.694 130.252C136.025 130.252 138.095 130.804 139.904 131.908C141.744 133.012 143.201 134.515 144.274 136.416C145.348 138.317 145.884 140.479 145.884 142.902C145.884 145.294 145.348 147.456 144.274 149.388C143.201 151.289 141.744 152.792 139.904 153.896C138.095 155 136.025 155.552 133.694 155.552ZM133.694 153.574C135.565 153.574 137.252 153.114 138.754 152.194C140.257 151.243 141.453 149.955 142.342 148.33C143.232 146.705 143.676 144.895 143.676 142.902C143.676 140.878 143.232 139.069 142.342 137.474C141.484 135.849 140.303 134.576 138.8 133.656C137.298 132.705 135.596 132.23 133.694 132.23C131.824 132.23 130.122 132.705 128.588 133.656C127.086 134.576 125.89 135.849 125 137.474C124.142 139.069 123.712 140.878 123.712 142.902C123.712 144.895 124.157 146.705 125.046 148.33C125.936 149.955 127.132 151.243 128.634 152.194C130.137 153.114 131.824 153.574 133.694 153.574ZM155.928 155L147.648 130.804H149.948L157.538 153.482H156.572L163.196 130.804H165.404L172.028 153.482H171.016L178.698 130.804H180.998L172.672 155H170.464L164.116 133.426H164.484L158.136 155H155.928Z"
        fill="currentColor"
        fillOpacity="0.5"
      />
    </svg>
  );
}