import { IconProps } from './types';
import React from 'react';

const Icon = (props: IconProps) => {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g>
        <path
          d="M20.8391 6.10193C20.9318 6.10193 21.0216 6.07899 21.0386 6.05096C21.0573 6.01998 21.4287 6 21.986 6C22.5432 6 22.9146 6.01998 22.9334 6.05096C22.9503 6.07899 23.0513 6.10193 23.1577 6.10193C23.2642 6.10193 23.3652 6.12486 23.3821 6.15289C23.3991 6.18092 23.4656 6.20385 23.53 6.20385C23.5943 6.20385 23.7444 6.25298 23.8635 6.31302C23.9827 6.37305 24.1363 6.44756 24.2049 6.47855C24.2734 6.50959 24.3407 6.54679 24.3544 6.56126C24.3786 6.58669 24.68 6.74743 25.7257 7.29249C25.9999 7.43544 26.2355 7.56489 26.2492 7.58013C26.263 7.59537 26.4761 7.70993 26.7229 7.83469C26.9698 7.95945 27.1829 8.07422 27.1966 8.08966C27.2104 8.10511 27.4684 8.24266 27.7701 8.39529C28.0717 8.54793 28.3298 8.68528 28.3435 8.70041C28.3675 8.72707 28.6539 8.88001 29.7147 9.43296C29.989 9.57592 30.2246 9.70516 30.2383 9.72009C30.252 9.73508 30.454 9.8474 30.6871 9.96977C31.1661 10.2212 31.974 10.6515 32.6941 11.0387L33.6664 11.5615C33.9337 11.7052 34.3601 11.9346 34.6138 12.0712C34.8674 12.2077 35.2826 12.4303 35.5362 12.5658C36.2658 12.9554 36.3838 13.0322 36.5968 13.2558C36.7977 13.4666 36.856 13.5691 36.9619 13.8971C37.0192 14.0747 36.9921 14.2368 36.8507 14.5619C36.7702 14.747 36.2738 15.2444 36.0847 15.3294C35.9956 15.3694 35.9227 15.4195 35.9227 15.4407C35.9227 15.4619 35.8987 15.4792 35.8693 15.4792C35.84 15.4792 35.7181 15.548 35.5986 15.6321C35.479 15.7162 35.3668 15.785 35.3493 15.785C35.3317 15.785 35.2195 15.8538 35.0999 15.9379C34.9804 16.022 34.8682 16.0908 34.8506 16.0908C34.8331 16.0908 34.7209 16.1596 34.6013 16.2437C34.4817 16.3278 34.3695 16.3966 34.352 16.3966C34.3344 16.3966 34.2223 16.4654 34.1027 16.5495C33.9831 16.6336 33.8721 16.7024 33.8561 16.7024C33.8282 16.7024 33.6736 16.8005 32.919 17.2968C32.7342 17.4184 32.5705 17.5178 32.5553 17.5178C32.54 17.5178 32.3612 17.6325 32.158 17.7726C31.9548 17.9128 31.7748 18.0274 31.7579 18.0274C31.741 18.0274 31.6294 18.0962 31.5098 18.1803C31.3902 18.2644 31.278 18.3332 31.2605 18.3332C31.2429 18.3332 31.1307 18.402 31.0112 18.4861C30.8916 18.5702 30.7794 18.639 30.7619 18.639C30.7443 18.639 30.6321 18.7078 30.5125 18.7919C30.393 18.876 30.2808 18.9448 30.2632 18.9448C30.2457 18.9448 30.1335 19.0136 30.0139 19.0977C29.8943 19.1818 29.7821 19.2506 29.7646 19.2506C29.747 19.2506 29.6349 19.3194 29.5153 19.4034C29.3957 19.4875 29.2839 19.5563 29.2667 19.5563C29.2496 19.5563 29.1034 19.6481 28.9419 19.7602C28.7803 19.8723 28.6341 19.964 28.617 19.964C28.5998 19.964 28.488 20.0328 28.3684 20.1169C28.2489 20.201 28.1367 20.2698 28.1191 20.2698C28.1016 20.2698 27.9894 20.3386 27.8698 20.4227C27.7502 20.5068 27.6384 20.5756 27.6212 20.5756C27.6041 20.5756 27.4579 20.6673 27.2964 20.7795C27.1348 20.8916 26.9927 20.9833 26.9805 20.9833C26.9684 20.9833 26.6586 21.1696 26.2922 21.3973C25.9257 21.6249 25.5474 21.8569 25.4514 21.9128C25.3555 21.9688 25.2174 22.0577 25.1446 22.1105C25.0718 22.1633 24.9967 22.2065 24.9777 22.2065C24.9588 22.2065 24.8837 22.2496 24.8109 22.3024C24.5747 22.4737 24.007 22.7861 23.781 22.8691C23.499 22.9728 23.313 23.0219 23.2016 23.0219C23.1336 23.0219 23.0516 23.0488 23.0194 23.0817C22.9437 23.1591 21.1422 23.1566 20.9055 23.0787C20.1322 22.8244 19.9957 22.7609 18.6451 22.0278C18.3983 21.8938 17.9495 21.6528 17.6479 21.4923C17.3462 21.3318 16.875 21.0799 16.6007 20.9325L15.6533 20.4234C15.4065 20.2907 15.0138 20.0788 14.7807 19.9525C14.5476 19.8262 14.1325 19.6021 13.8583 19.4544C13.584 19.3067 13.1689 19.0827 12.9358 18.9565C12.7027 18.8304 12.2819 18.6042 12.0009 18.4538C11.1037 17.9738 10.4305 17.6129 9.95648 17.3581L9.03402 16.862C8.78031 16.7257 8.40185 16.5224 8.19298 16.4105C7.64483 16.1167 7.37617 15.9147 7.24343 15.6966C7.02593 15.3389 6.95248 15.0134 7.04777 14.8287C7.0729 14.7801 7.1289 14.66 7.17223 14.5619C7.21561 14.4638 7.2905 14.3377 7.33877 14.2816C7.52566 14.0645 8.27774 13.5358 8.51046 13.458C8.55847 13.4419 8.59772 13.4085 8.59772 13.3838C8.59772 13.3591 8.6217 13.3388 8.65107 13.3388C8.68039 13.3388 8.80225 13.27 8.92183 13.1859C9.0414 13.1018 9.15359 13.033 9.17114 13.033C9.18869 13.033 9.30088 12.9642 9.42046 12.8801C9.54003 12.796 9.65222 12.7272 9.66977 12.7272C9.68732 12.7272 9.79952 12.6584 9.91909 12.5743C10.0387 12.4902 10.1505 12.4214 10.1677 12.4214C10.1848 12.4214 10.331 12.3297 10.4925 12.2176C10.6541 12.1054 10.8002 12.0137 10.8174 12.0137C10.8345 12.0137 10.9464 11.9449 11.0659 11.8608C11.1855 11.7767 11.2977 11.7079 11.3153 11.7079C11.3328 11.7079 11.445 11.6391 11.5646 11.555C11.6841 11.471 11.7963 11.4022 11.8139 11.4022C11.8314 11.4022 11.9436 11.3333 12.0632 11.2493C12.1828 11.1652 12.3027 11.0964 12.3298 11.0964C12.3568 11.0964 12.3865 11.0792 12.3956 11.0581C12.4164 11.0103 12.682 10.8448 12.7987 10.807C12.8466 10.7914 12.8859 10.7584 12.8859 10.7337C12.8859 10.7089 12.9099 10.6887 12.9393 10.6887C12.9686 10.6887 13.0905 10.6199 13.2101 10.5358C13.3296 10.4517 13.4418 10.3829 13.4594 10.3829C13.4769 10.3829 13.5891 10.3141 13.7087 10.23C13.8283 10.1459 13.9404 10.0771 13.958 10.0771C13.9755 10.0771 14.0877 10.0083 14.2073 9.9242C14.3269 9.84011 14.4391 9.77131 14.4566 9.77131C14.4742 9.77131 14.5864 9.70251 14.7059 9.61842C14.8255 9.53433 14.9377 9.46553 14.9553 9.46553C14.9728 9.46553 15.085 9.39673 15.2046 9.31264C15.3241 9.22855 15.436 9.15975 15.4531 9.15975C15.4703 9.15975 15.6164 9.06801 15.778 8.95589C15.9396 8.84377 16.0857 8.75204 16.1029 8.75204C16.12 8.75204 16.2319 8.68324 16.3514 8.59915C16.471 8.51506 16.5929 8.44626 16.6222 8.44626C16.6515 8.44626 16.6755 8.42597 16.6755 8.40126C16.6755 8.37649 16.7148 8.34351 16.7628 8.32792C16.8482 8.30025 17.1249 8.13991 17.1742 8.08951C17.1879 8.0755 17.2496 8.03539 17.3113 8.00032L17.5357 7.87292C17.5974 7.8379 17.6591 7.79774 17.6728 7.78373C17.7221 7.73333 17.9988 7.57299 18.0842 7.54532C18.1321 7.52973 18.1714 7.49675 18.1714 7.47198C18.1714 7.44727 18.1954 7.42698 18.2248 7.42698C18.2541 7.42698 18.376 7.35818 18.4955 7.27409C18.6151 7.19 18.7273 7.1212 18.7449 7.1212C18.7624 7.1212 18.8746 7.0524 18.9942 6.96831C19.1137 6.88422 19.2259 6.81542 19.2435 6.81542C19.261 6.81542 19.3692 6.75166 19.4838 6.67369C19.6845 6.53731 19.8506 6.45067 20.1161 6.344C20.1846 6.31643 20.2797 6.27362 20.3273 6.24886C20.3749 6.22409 20.4577 6.20385 20.5114 6.20385C20.565 6.20385 20.6227 6.18092 20.6397 6.15289C20.6566 6.12486 20.7464 6.10193 20.8391 6.10193Z"
          fill="url(#paint0_linear_32_315)"
        />
        <path
          d="M33.5134 19.7581C33.5359 19.757 33.644 19.6891 33.7537 19.6073C33.9948 19.4276 34.0692 19.4219 34.3132 19.5648C34.4169 19.6256 34.7036 19.7831 34.9505 19.9148C36.0372 20.4948 36.1795 20.5739 36.3334 20.684C36.5377 20.8302 36.7892 21.1037 36.8556 21.2522C37.0396 21.6637 37.0387 21.8346 36.8508 22.2535C36.7765 22.4193 36.3251 22.8761 36.1434 22.9693C36.0632 23.0106 35.9038 23.108 35.7892 23.1859C35.6745 23.2639 35.5667 23.3277 35.5496 23.3277C35.5324 23.3277 35.3863 23.4194 35.2247 23.5315C35.0631 23.6436 34.917 23.7354 34.8998 23.7354C34.8827 23.7354 34.7708 23.8042 34.6513 23.8883C34.5317 23.9723 34.4199 24.0411 34.4027 24.0411C34.3856 24.0411 34.2394 24.1329 34.0779 24.245C33.9163 24.3571 33.7701 24.4489 33.753 24.4489C33.7358 24.4489 33.624 24.5177 33.5044 24.6017C33.3849 24.6858 33.2727 24.7546 33.2551 24.7546C33.2376 24.7546 33.1254 24.8234 33.0058 24.9075C32.8862 24.9916 32.774 25.0604 32.7565 25.0604C32.7389 25.0604 32.6267 25.1292 32.5072 25.2133C32.3876 25.2974 32.2754 25.3662 32.2578 25.3662C32.2403 25.3662 32.1281 25.435 32.0085 25.5191C31.889 25.6032 31.7762 25.672 31.7579 25.672C31.7397 25.672 31.6652 25.7151 31.5924 25.7679C31.5196 25.8207 31.3815 25.9094 31.2855 25.965C31.1895 26.0206 30.9203 26.1869 30.6872 26.3345C30.4541 26.4822 30.196 26.6427 30.1137 26.6913C30.0315 26.7398 29.7734 26.9004 29.5403 27.048C29.3072 27.1956 29.0379 27.3617 28.942 27.417C28.846 27.4723 28.745 27.5356 28.7176 27.5576C28.6901 27.5797 28.5892 27.643 28.4932 27.6983C28.3972 27.7536 28.1279 27.9196 27.8948 28.0673C27.6617 28.2149 27.4037 28.3755 27.3214 28.424C27.2391 28.4726 26.9811 28.6331 26.748 28.7808C26.5149 28.9284 26.2456 29.0947 26.1496 29.1503C26.0536 29.2059 25.9156 29.2945 25.8428 29.3473C25.77 29.4001 25.6949 29.4433 25.6759 29.4433C25.657 29.4433 25.5819 29.4865 25.5091 29.5393C25.4363 29.5921 25.2982 29.6807 25.2022 29.7363C25.1062 29.7919 24.8482 29.9502 24.6288 30.0881C24.1806 30.3698 23.8753 30.5196 23.5817 30.6021C22.6161 30.873 22.2385 30.9108 21.4432 30.8163C20.5032 30.7045 20.4545 30.6831 17.4111 29.0428L16.4388 28.5191C16.1714 28.3752 15.7619 28.1542 15.5288 28.0281C15.2957 27.9019 14.8806 27.6789 14.6063 27.5325C14.3321 27.3861 13.8833 27.1452 13.6091 26.9972C13.3348 26.8493 12.8636 26.5968 12.5619 26.4362C12.2603 26.2756 11.8115 26.0346 11.5647 25.9008C11.3178 25.7669 10.8691 25.5262 10.5674 25.3658C10.2657 25.2055 9.85063 24.9826 9.64494 24.8704C9.43925 24.7583 9.08024 24.5635 8.84713 24.4375C7.46607 23.6916 7.41781 23.6594 7.22329 23.3554C7.02987 23.0532 6.93304 22.5619 7.05206 22.4868C7.07948 22.4694 7.10247 22.4165 7.10317 22.3691C7.10581 22.1838 7.45665 21.7975 7.89694 21.4949C8.14321 21.3256 8.35832 21.1872 8.37498 21.1872C8.39168 21.1872 8.50318 21.1184 8.62275 21.0343C8.74232 20.9502 8.85451 20.8814 8.87206 20.8814C8.88961 20.8814 9.00181 20.8126 9.12138 20.7285C9.24095 20.6444 9.35314 20.5756 9.37069 20.5756C9.38824 20.5756 9.4964 20.5119 9.61103 20.4339C9.96576 20.1927 10.0818 20.1453 10.1585 20.2104C10.196 20.2422 10.4605 20.3916 10.7461 20.5424C11.0318 20.6931 11.4674 20.9259 11.7143 21.0596C11.9611 21.1934 12.3874 21.4227 12.6617 21.5693C12.9359 21.7158 13.3622 21.9452 13.6091 22.0789C13.8559 22.2127 14.2822 22.4422 14.5565 22.589C15.9139 23.3157 16.198 23.4674 16.7754 23.7742C18.6976 24.7958 19.3782 25.1497 19.5677 25.2259C19.6363 25.2536 19.7313 25.2964 19.7789 25.3212C19.8265 25.346 19.9062 25.3662 19.9559 25.3662C20.0057 25.3662 20.0677 25.3868 20.0937 25.412C20.1198 25.4371 20.2309 25.4704 20.3406 25.486C20.4503 25.5016 20.6859 25.5425 20.8641 25.5771C21.0424 25.6116 21.5585 25.6399 22.011 25.6399C22.7851 25.6399 23.1226 25.6047 23.6565 25.4682C23.7799 25.4367 23.9428 25.3982 24.0186 25.3827C24.0943 25.3672 24.1686 25.3341 24.1836 25.3094C24.1986 25.2846 24.2566 25.2643 24.3125 25.2643C24.4375 25.2643 25.2012 24.8943 25.4854 24.6961C25.6001 24.6162 25.7082 24.5508 25.7258 24.5508C25.7433 24.5508 25.8555 24.482 25.9751 24.3979C26.0947 24.3138 26.2075 24.245 26.2257 24.245C26.244 24.245 26.3185 24.2018 26.3913 24.149C26.4641 24.0962 26.6078 24.0045 26.7106 23.9452L27.0846 23.7294C27.1874 23.6701 27.3311 23.5783 27.4039 23.5255C27.4767 23.4727 27.5505 23.4296 27.5679 23.4296C27.5852 23.4296 27.7997 23.292 28.0444 23.1238C28.2891 22.9556 28.503 22.818 28.5197 22.818C28.5364 22.818 28.6479 22.7492 28.7674 22.6651C28.887 22.581 28.9992 22.5122 29.0167 22.5122C29.0343 22.5122 29.1465 22.4434 29.2661 22.3593C29.3856 22.2753 29.4978 22.2065 29.5154 22.2065C29.5329 22.2065 29.6451 22.1376 29.7647 22.0536C29.8843 21.9695 29.9965 21.9007 30.014 21.9007C30.0316 21.9007 30.1438 21.8319 30.2633 21.7478C30.3829 21.6637 30.4951 21.5949 30.5126 21.5949C30.5302 21.5949 30.6424 21.5261 30.762 21.442C30.8815 21.3579 30.9937 21.2891 31.0113 21.2891C31.0288 21.2891 31.141 21.2203 31.2606 21.1362C31.3802 21.0521 31.4923 20.9833 31.5099 20.9833C31.5275 20.9833 31.6396 20.9145 31.7592 20.8304C31.8788 20.7463 31.991 20.6775 32.0085 20.6775C32.0261 20.6775 32.1383 20.6087 32.2578 20.5246C32.3774 20.4406 32.4896 20.3718 32.5072 20.3718C32.5247 20.3718 32.6369 20.303 32.7565 20.2189C32.8761 20.1348 32.9882 20.066 33.0058 20.066C33.0233 20.066 33.1355 19.9972 33.2551 19.9131C33.3747 19.829 33.4909 19.7593 33.5134 19.7581Z"
          fill="url(#paint1_linear_32_315)"
        />
        <path
          d="M32.8562 27.8128C32.9385 27.7633 33.1393 27.6397 33.3024 27.5382C33.5881 27.3604 33.7084 27.3425 33.8535 27.4566C33.8809 27.4782 34.1221 27.613 34.3895 27.7562C34.6569 27.8993 35.0945 28.1352 35.3618 28.2802C35.6292 28.4252 35.9557 28.5999 36.0874 28.6683C36.4646 28.8643 36.8367 29.267 36.939 29.59C37.0132 29.824 37.017 29.8991 36.965 30.1063C36.8951 30.3852 36.6516 30.7515 36.412 30.9382C36.2688 31.0498 34.7268 32.0177 34.2274 32.3094C34.1315 32.3654 33.9934 32.4545 33.9206 32.5073C33.8478 32.5601 33.7733 32.6032 33.755 32.6032C33.7368 32.6032 33.624 32.672 33.5044 32.7561C33.3849 32.8402 33.2721 32.909 33.2538 32.909C33.2356 32.909 33.1611 32.9522 33.0883 33.005C33.0155 33.0578 32.8774 33.1468 32.7814 33.2029C32.6854 33.259 32.1918 33.5625 31.6844 33.8773C31.1771 34.1922 30.6946 34.4904 30.6124 34.54C30.5301 34.5896 29.9355 34.9565 29.291 35.3553C28.6465 35.7541 28.0407 36.1263 27.9447 36.1825C27.8487 36.2386 27.7106 36.3277 27.6378 36.3805C27.565 36.4333 27.4899 36.4765 27.471 36.4765C27.452 36.4765 27.3769 36.5196 27.3041 36.5724C27.2313 36.6252 27.0933 36.7143 26.9973 36.7705C26.9013 36.8267 26.2955 37.1998 25.651 37.5996C25.0065 37.9995 24.367 38.3895 24.2299 38.4662C23.5314 38.857 22.3071 39.0791 21.4284 38.9743C20.5966 38.8751 20.1982 38.709 18.2214 37.6371C17.9883 37.5107 17.5788 37.2896 17.3114 37.1457L16.3515 36.6294L15.4041 36.1197L14.4567 35.6101L13.5093 35.1005L12.5619 34.5908L11.6145 34.0812C11.354 33.941 10.9333 33.7145 10.6796 33.5778C10.4259 33.441 9.97713 33.2002 9.68234 33.0427C9.3875 32.8851 8.91629 32.6324 8.63521 32.4812C8.35408 32.33 8.02314 32.1523 7.89973 32.0863C7.41965 31.8294 7.00035 31.2554 7.00294 30.8586C7.00469 30.593 7.20863 30.1812 7.44683 29.9621C7.59906 29.8222 8.27999 29.3416 8.32606 29.3416C8.34366 29.3416 8.41761 29.2984 8.49041 29.2456C8.56321 29.1928 8.70128 29.1038 8.79727 29.0478C8.89325 28.9918 9.30512 28.7393 9.71251 28.4868L10.4533 28.0277L10.9342 28.2829C11.1987 28.4233 11.6058 28.6418 11.8389 28.7686C12.072 28.8954 12.4984 29.1248 12.7863 29.2784C13.0743 29.432 13.5006 29.6614 13.7337 29.7881C13.9668 29.9147 14.3932 30.1441 14.6811 30.2977C15.1749 30.5612 15.4857 30.7283 16.5884 31.3231C18.6175 32.4177 19.5207 32.8827 19.7671 32.9594C19.8906 32.9979 20.014 33.0454 20.0414 33.0651C20.0688 33.0847 20.1698 33.1138 20.2658 33.1298C20.3618 33.1457 20.5861 33.1883 20.7644 33.2244C21.3431 33.3417 23.1361 33.3039 23.5567 33.1657C23.6253 33.1432 23.7824 33.096 23.9058 33.061C24.5757 32.8708 24.8825 32.7299 25.6011 32.2827C25.7794 32.1717 25.9926 32.0411 26.0748 31.9924C26.2658 31.8795 26.5117 31.7279 27.6455 31.0237C28.1529 30.7087 28.6465 30.405 28.7425 30.3489C28.8385 30.2929 28.9766 30.2038 29.0494 30.151C29.1222 30.0982 29.1967 30.0551 29.2149 30.0551C29.2332 30.0551 29.3459 29.9863 29.4655 29.9022C29.5851 29.8181 29.6973 29.7493 29.7148 29.7493C29.7324 29.7493 29.8446 29.6805 29.9641 29.5964C30.0837 29.5123 30.1965 29.4435 30.2148 29.4435C30.233 29.4435 30.3075 29.4003 30.3803 29.3475C30.4531 29.2947 30.5912 29.2057 30.6872 29.1496C30.7831 29.0935 31.2768 28.79 31.7841 28.4752C32.2915 28.1603 32.7739 27.8622 32.8562 27.8128Z"
          fill="url(#paint2_linear_32_315)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_32_315"
          x1="8.62152"
          y1="6"
          x2="25.4132"
          y2="7.98468"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B6F9B7" />
          <stop offset="1" stopColor="#EFFA90" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_32_315"
          x1="8.62162"
          y1="5.99996"
          x2="25.4133"
          y2="7.98464"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B6F9B7" />
          <stop offset="1" stopColor="#EFFA90" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_32_315"
          x1="8.62162"
          y1="6.00023"
          x2="25.4133"
          y2="7.98491"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B6F9B7" />
          <stop offset="1" stopColor="#EFFA90" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default React.memo(Icon);