function maximumTrianglePathSum(triangle) {

    function sumUp() {
        let lastLine = triangle.pop(),
            aboveLine = triangle.pop();
        for (let i = 0; i < aboveLine.length; i++)
            aboveLine[i] = Math.max(
                aboveLine[i] + lastLine[i],
                aboveLine[i] + lastLine[i + 1]
            );
        triangle.push(aboveLine);
    }

    do {
        sumUp();
    } while (triangle.length > 1);
    return triangle[0][0];
}

// testing
let theTriangle = [
    [9235],
    [9096, 637],
    [973, 3269, 7039],
    [3399, 3350, 4788, 7546],
    [1739, 8032, 9427, 976, 2476],
    [703, 9642, 4232, 1890, 704, 6463],
    [9601, 1921, 5655, 1119, 3115, 5920, 1808],
    [645, 3674, 246, 2023, 4440, 9607, 4112, 3215],
    [660, 6345, 323, 1664, 2331, 7452, 3794, 7679, 3102],
    [1383, 3058, 755, 1677, 8032, 2408, 2592, 2138, 2373, 8718],
    [8117, 4602, 7324, 7545, 4014, 6970, 4342, 7682, 150, 3856, 8177],
    [1966, 1782, 3248, 1745, 4864, 9443, 4900, 8115, 4120, 9015, 7040, 9258],
    [4572, 6637, 9558, 5366, 7156, 1848, 2524, 4337, 5049, 7608, 8639, 8301, 1939],
    [7714, 6996, 2968, 4473, 541, 3388, 5992, 2092, 2973, 9367, 2573, 2658, 9965, 8168],
    [67, 1546, 3243, 752, 8497, 5215, 7319, 9245, 574, 7634, 2223, 8296, 3044, 9445, 120],
    [7064, 1045, 5210, 7347, 5870, 8487, 3701, 4301, 1899, 441, 9828, 3076, 7769, 8008, 4496, 6796],
    [5256, 2199, 464, 5164, 4039, 1014, 8099, 7932, 1909, 3051, 4805, 1698, 8578, 1771, 5889, 5711, 9967],
    [6830, 2603, 9256, 3629, 2793, 5219, 6534, 8838, 944, 5113, 4981, 6811, 6958, 48, 9463, 7477, 5723, 1111],
    [7907, 9312, 4756, 8096, 3564, 7809, 9326, 2502, 5346, 6383, 5658, 3791, 423, 701, 3417, 5042, 2669, 3759, 5017],
    [8754, 6389, 4368, 7284, 2150, 7288, 6145, 459, 4079, 1631, 7595, 620, 2350, 171, 6401, 4222, 1182, 5561, 2669, 7641]
    // 3335 696 6551 360 454 708 5378 7750 8156 3187 4263 8282 9494 9607 1989 435 1558 5920 909 6567 5174 
    // 1771 5573 4603 6962 5957 9870 3482 6287 324 6551 5035 7100 5595 6189 3178 6047 354 4873 1168 3815 8771 1222 
    // 8982 6194 3575 3673 5892 5035 8234 8414 7744 6956 6341 6824 4562 9416 6808 8836 1692 9636 609 5238 6918 1685 8565 
    // 7610 6713 1077 9905 9328 7107 4166 8230 4864 8540 1762 4870 7483 9504 2516 9634 7336 761 1805 5454 2967 530 6166 6541 
    // 9277 1113 1596 9327 4106 9159 6484 1666 3774 5001 6357 8586 5151 1306 8160 2201 8124 7684 6362 9309 7702 5800 1827 2679 9402 
    // 9080 7085 1053 5077 2129 8422 8489 8852 7628 6024 5841 4504 2658 8298 5860 6226 2157 5477 8728 4520 4513 590 6642 7711 3209 3005 
    // 4500 7462 8825 848 8698 3585 7756 3857 7587 9434 7531 7443 5232 4212 3761 2111 4765 2628 432 9750 8871 5534 3519 9777 2692 7383 7686 
    // 3624 8816 7672 7245 5646 4888 3871 5462 2170 1897 2787 823 8107 5186 5782 4911 2313 835 816 4192 8726 7262 903 7191 187 5542 4234 9292 
    // 5817 2292 5964 9704 836 5776 5457 9027 9782 9306 5636 1268 250 5976 3032 1188 4460 5327 8071 6400 229 5587 5243 3777 1265 4847 1853 1421 9092 
    // 704 2262 685 5345 716 1758 7567 3740 5354 480 9161 5544 1022 3196 8803 1074 3236 5157 3026 2407 9018 7720 4543 9281 3233 13 8065 996 5680 4485 
    // 9963 1991 4531 4900 8560 7771 6957 5041 9103 823 9644 5190 6393 3295 291 1344 8459 4311 6189 8997 6670 5018 7465 9360 1255 3737 714 891 6314 6900 3369 
    // 3160 5093 8864 404 3212 4571 5136 2730 6864 8175 9081 991 8629 6874 1727 9398 4353 1791 7975 1676 79 6005 173 5249 9092 9272 1827 401 6713 7010 26 8267 
    // 8974 4103 5046 5274 6983 4807 9583 1897 3563 2384 8047 476 2499 5930 8452 214 3611 7346 5579 7471 8807 8361 4272 5997 5233 6109 6024 4832 1692 5886 327 1273 3633 
    // 1377 4645 2518 160 5935 3329 2396 3755 3272 6328 8905 9729 2328 3103 4238 7738 8995 5798 1396 2157 6902 8463 558 1575 515 5827 3949 234 6437 6012 126 5832 2979 6441 
    // 7307 8791 3842 1132 657 7840 9032 640 289 5535 5045 2925 5151 5220 6760 4623 2934 7859 5524 7361 7679 3131 1427 3046 4833 4257 2937 5389 8209 128 3724 2300 4461 1466 4779 
    // 5267 8533 9 9710 7333 7839 986 2533 875 3863 9532 147 22 7337 1095 6244 267 7172 4391 9425 9587 3942 3000 5959 1211 5846 8321 6766 8081 8815 2253 9001 2992 2718 2738 4910 
    // 6435 2443 9071 4492 6216 6061 6768 3976 9095 2236 3682 9092 4889 5596 70 689 7730 1847 5340 394 7524 4099 3329 5672 7042 8078 6141 6914 6522 6675 3795 4000 8177 3662 3259 6130 7610 
    // 2258 5763 6708 7737 6758 5762 4507 3566 4424 8365 3451 2915 465 4607 5963 9007 1072 5565 9005 5753 8196 6975 7712 5498 5059 5742 8816 2030 3209 8568 4937 8719 345 728 1278 2792 3133 9997 
    // 8226 1983 721 6701 6953 9027 2801 5895 239 2827 701 1815 7406 2497 1211 7901 525 1956 638 7934 8869 8237 936 5126 9949 6296 633 6368 8425 6713 806 8251 8680 397 316 9989 2901 6176 5180 
    // 5883 4165 2973 4063 6614 3168 8186 5624 4303 8055 7803 3721 1023 9048 1845 3325 4237 3518 782 3410 5515 2521 4720 3050 785 6882 7356 3478 1374 9420 981 1986 5142 67 7113 3167 6122 2324 9764 9257 
    // 9240 2726 4783 4078 3959 9828 9244 4470 6945 5576 9405 8984 9255 9900 4457 6075 7944 8826 5918 3086 5487 7507 9357 2894 2955 2176 5932 7258 4504 9219 6115 4612 1390 5323 6949 5366 3494 9970 7190 9565 5099 
    // 408 1771 233 9549 9691 8154 641 4346 372 2372 5306 4199 9991 1790 2614 4628 9646 4980 1610 2803 3596 6476 6735 5484 6132 5633 2054 6181 1731 4350 891 4916 5913 7961 7657 4368 7146 7280 6168 5573 4644 7463 
    // 2764 4872 2984 1130 3119 1307 2067 9021 8833 320 175 1340 3573 5251 8588 6919 8844 2877 8567 5325 6300 3049 5378 9129 6921 5313 9471 9705 7350 7360 1923 107 219 1110 9836 2867 8386 2290 7486 8872 2663 8492 730 
    // 5867 8841 8856 5413 1612 2596 5748 5338 7189 203 5146 1741 595 8910 7746 4155 9357 3261 7284 2035 3615 2738 6013 7593 7917 1633 9843 2925 754 4269 7264 8673 5793 7381 6835 7263 7709 6751 7766 1013 8521 7056 6920 4360 
    // 7443 2273 3418 9801 8378 8974 8954 9246 4411 6370 7927 5950 7904 5051 6515 7396 8136 1045 3969 6132 5834 3021 2540 3863 5369 8259 4713 3878 938 7348 7709 8282 2613 8476 5590 9457 1787 9665 8699 9658 3258 1318 8696 8707 2945 
    // 2046 4951 7421 6082 7912 4707 3529 598 8938 5077 7661 4384 6996 9684 9235 3127 6083 6544 6007 7501 9347 6667 6444 4635 7229 4760 1094 8971 7614 4417 7722 1933 1969 208 5048 8094 1119 8218 1666 7993 522 4744 9958 4152 7693 89 
    // 9612 7380 3771 710 1762 5054 7126 8320 2685 1662 9388 8978 5499 4646 3294 8688 9370 5317 7359 4567 8370 5459 4536 2262 6300 5134 733 971 9561 6144 4359 7153 7467 8628 9912 6814 8260 5362 7016 4115 9541 9460 1306 981 3825 6374 5069 
    // 8361 3493 390 3674 4850 4541 9096 8460 2493 5224 6751 7965 2760 3920 8877 7202 7919 394 5969 8981 4346 5975 3758 2230 4641 1135 1125 9698 4879 3430 4465 1502 1795 4859 9068 1531 2233 5295 3901 906 3839 7849 6098 6405 1623 2772 5385 2056 
    // 9751 8824 6710 8920 1747 4906 1411 1538 5134 184 3420 9440 8450 7965 7169 8679 9609 7117 8177 1438 4561 4963 5590 1412 4378 7282 8360 8899 7026 4281 3187 2305 7333 6235 2890 2116 4971 8843 8424 9320 5605 6329 6432 2684 4828 9772 6893 8386 7931 
    // 9250 2232 1035 1163 989 51 7337 1713 4906 6565 2308 4321 3688 6762 3303 2175 1854 321 8894 8548 2141 9426 8111 3471 6968 5728 468 6697 4772 8928 8778 4151 4531 8724 4829 164 6951 5181 2656 1852 7463 9987 5372 5192 4444 2515 9302 4612 5865 120 
    // 3501 9154 8979 1673 3653 8675 581 7017 6824 2974 9860 2664 7559 5174 1978 5902 6428 8304 8075 5240 9262 582 6631 5056 9069 592 1860 6252 2874 8308 7108 2737 2591 1669 5136 5639 2441 1318 2562 3304 5394 8006 2796 5313 7651 8172 310 3054 3280 3248 9256 
    // 7692 766 7348 1105 8769 9483 6181 9244 3147 6835 7253 3294 4494 6214 7747 2251 8114 1773 1783 3553 4553 8539 3253 4600 8130 5369 3834 4400 3293 3907 8401 5573 2551 8792 1631 1176 4593 3155 268 6551 215 8669 5274 3699 6618 1300 6875 4597 7799 2301 3366 267 
    // 9840 8950 1483 4442 5132 1096 2120 4232 8840 7645 226 5306 4229 1779 1821 5815 881 4954 4249 1515 1282 7450 8028 4377 6768 7648 9944 8343 3401 3075 7397 8824 2015 3761 3455 7036 4323 2456 512 6355 8806 6875 8055 5458 5879 6277 6597 2249 1770 8432 5547 3303 4457 
    // 3271 7509 5863 3076 6408 5306 3327 4233 9096 874 578 4859 1159 7114 2534 1409 9988 4766 7841 9474 1765 6405 9766 6244 750 8804 8040 597 8688 3051 8648 2101 9160 9048 3376 676 1073 7344 7318 3301 1364 6582 448 2743 9496 9280 8914 6022 5320 2164 2734 7087 7502 9790 
    // 9226 8997 1871 1828 5672 5806 7730 5056 497 3296 5513 816 9527 737 959 7536 2789 2911 9425 5727 7749 2783 8900 9833 6877 439 1841 7267 1011 3125 4032 40 5104 4595 3321 8476 9624 9352 2333 9702 9154 8820 7008 5826 9521 1999 7198 8016 6181 2753 6422 3060 9520 9503 5384 
    // 8406 7238 807 7878 163 34 2093 8291 6111 4456 4616 7092 2348 5951 7616 4404 7914 5918 8616 2038 6433 8866 4802 1219 7641 9671 507 6642 4503 6356 1989 7464 3575 818 856 2369 7226 8505 1802 8947 6403 8148 8611 7279 1720 4370 4805 3841 8840 9231 1762 4628 1339 3574 7623 5735 
    // 556 5440 4931 5566 7278 735 3550 5262 4548 838 8129 3033 4362 2924 6153 3633 3572 1370 3447 6386 5917 2832 8869 3897 7792 3315 8941 8862 5092 2868 6107 8234 7257 2443 1462 2419 2532 7854 3875 2124 5350 7811 2693 7050 2762 6540 420 8686 1844 6655 5152 4121 4190 4608 9901 9037 6686 
    // 9320 7413 5807 90 4389 4603 6960 8156 5671 307 5215 465 8953 3692 8727 1521 6932 8369 4231 7155 808 9032 1379 6833 9397 3265 8692 7095 7866 1052 5304 6980 8963 8486 2937 1083 1896 192 9401 9644 7925 7045 8310 7958 7148 1925 9692 9298 7976 6445 2691 6561 9347 5858 4662 7852 5869 7675 
    // 613 369 7753 1933 3175 5112 673 7486 6053 2172 5478 9226 3276 2660 4078 5715 2449 8697 5760 5352 2698 7307 7685 1902 7026 7542 4389 6989 4395 2728 3737 7972 8998 1306 972 4530 2930 443 8230 6229 3713 6315 4252 6358 22 3750 7847 4418 7313 5805 9147 765 86 752 4665 2132 8985 9950 5738 
    // 6023 9086 5117 5085 5292 360 7635 2867 1607 2505 5696 1912 7987 4151 7328 1572 6074 776 8634 1056 3410 6572 6962 6032 9627 2980 8108 6775 8158 642 5188 2225 1846 2127 4320 1922 6659 9911 8897 6998 7614 7858 9892 2134 4966 4701 4383 2735 6730 4869 8271 5411 5697 5431 2037 5334 5230 7889 304 1023 
    // 8359 76 6952 5664 8916 6530 7596 4211 1836 5359 322 7224 2101 5831 3793 5593 8272 3726 9016 5184 7084 804 7422 6756 133 677 3216 4497 2356 5824 2418 5956 4686 9536 4491 7301 45 2165 4973 378 2666 3212 9205 2284 5617 9509 7839 3910 381 5035 4624 1211 5325 9750 5715 1854 7014 3234 7622 321 9429 
    // 3910 7865 6552 1384 6123 8352 6779 1687 5492 6571 333 4922 7569 3783 2873 8129 6080 2589 4769 113 4811 8471 3168 612 1520 1211 7644 6174 3206 2451 2295 3179 9493 5082 1615 6215 4960 8638 3584 1715 1804 2407 988 2648 1425 4614 1226 9921 7202 1661 5567 100 1034 6185 1167 7106 3067 6464 3014 7581 7427 2591 
    // 8420 5799 6754 6726 3668 4175 4863 5756 1005 9706 9955 4716 4273 5010 469 8451 3197 5007 1859 7170 9550 6760 5404 8765 3287 498 9461 7093 3065 4432 9512 756 3545 4600 5821 1356 1342 3717 6522 3672 2587 9728 9605 2762 7656 5637 9378 4622 2838 7037 1723 7668 4458 2762 7766 2081 8280 7051 7381 2837 5884 8751 2405 
    // 106 196 4175 4376 7626 4272 5473 3168 5659 1089 5619 950 155 7155 4468 622 3904 9479 7709 9018 8582 3669 2002 3033 8874 772 5124 1101 1128 1807 9481 3425 9379 1904 1052 1775 974 487 3472 3751 2553 9935 8771 6962 4664 2865 2101 5760 9902 7310 7670 6880 5157 9837 7073 610 3261 8976 9212 974 3152 5185 3082 1819 
    // 517 9038 852 5649 2809 6305 8860 8614 3502 7171 8414 8122 529 6966 6633 9239 2925 7461 9933 2216 7893 1041 9233 6317 7736 4887 6477 4420 2409 8659 6628 8810 8791 7132 7954 1023 2205 8725 6125 7661 9220 1922 4399 9660 3282 4247 3011 4692 6364 2579 5778 1070 483 9422 877 6816 2670 6994 5781 9411 5787 9919 3399 142 5429 
    // 7718 7643 1924 87 316 1814 1039 7738 3344 2482 1288 7055 5119 4874 3739 5567 3911 3164 6480 255 2328 510 6531 8316 5486 9217 460 7119 979 979 1133 2745 1652 779 5491 5922 6617 5755 2307 2656 2080 2104 9438 4397 1138 8901 7284 9218 884 7638 8842 1113 5959 213 7073 9309 9950 6148 7103 3248 9939 1854 4223 1762 4950 945 
    // 8592 6907 6020 4777 4110 3894 4217 6679 2001 8590 3016 1656 9314 3213 3182 5737 8769 8970 1503 5618 9165 1669 9583 9733 4891 2596 5255 6502 9022 2342 7113 4114 6928 9660 2174 8932 6354 945 7736 6374 5556 8460 1145 8933 3198 7037 5331 906 2456 9696 3784 8377 7065 2302 5893 5967 8870 6224 2506 8994 4859 5812 1960 800 6649 4408 8865 
    // 214 6880 8630 1474 3393 5115 5693 8609 7601 487 2640 3776 1897 9537 9549 2405 1133 5490 1001 7909 5209 9572 1399 3664 5086 5831 93 955 722 8466 1679 7418 3782 4636 5343 6576 9758 6352 4652 6706 9953 2212 5817 6459 3682 3449 8121 5386 4989 9040 4951 9878 6217 1500 7655 8856 2818 8350 7320 9042 9959 4258 1487 6588 1679 5354 3808 446 
    // 7598 344 4688 2963 550 2682 81 4904 861 4292 3774 5312 9483 4119 5730 1477 2684 4114 5364 637 5606 1198 3979 2969 608 6188 5028 4948 9051 9721 4331 3208 1925 806 4955 1655 5563 5783 3044 8795 3570 4194 1581 7969 5053 3365 8809 517 2266 5317 6792 757 7842 8066 3526 2123 2944 8309 8861 5787 2873 4053 549 6660 5925 3827 1727 6821 4627 
    // 3778 5289 3054 5886 5166 3765 3495 8011 2568 5554 8145 8118 7443 9672 9424 2985 2614 1517 1859 76 682 1606 4497 3165 3470 7685 5727 8732 105 8208 7783 5177 8606 1752 7424 6741 9467 2636 14 8016 96 7732 6551 2930 5742 3260 7078 4161 6008 3237 9328 5109 5983 3128 8473 6712 7570 3297 2415 5719 9688 6850 7163 9301 5678 5596 8548 3324 2468 6036 
    // 9785 8039 8820 4507 9174 5453 9364 6908 8653 7257 6980 3821 1808 796 8614 6227 9498 3291 8603 534 2272 1279 9204 4168 1400 3083 181 4589 4548 6996 8006 5274 7841 6838 536 1948 3407 9539 4850 1122 347 6514 4369 888 7535 1704 6316 830 8641 4385 2141 3883 3335 4106 1601 8051 3769 8448 5869 9979 2106 1692 6254 5566 3134 3927 2889 5026 5799 5671 2117 
    // 1127 8891 2627 2173 9663 9035 8864 4280 679 3647 4405 259 7426 7593 4979 8385 7580 9898 7510 6371 7876 6046 4831 4074 8975 2174 7048 8799 2119 9763 4999 2941 2937 3315 3340 7099 605 8948 6937 1759 2518 8828 4416 7201 5586 4935 7049 4351 5338 5784 9414 8984 3122 1410 727 7886 9851 5177 2140 8381 2013 5781 5866 1948 1913 9213 6539 8607 9537 8364 3866 1177 
    // 7788 7462 8351 7561 6386 9611 8616 4825 2232 8314 9687 970 5673 8043 6494 9023 2772 4702 5810 3371 3401 4108 2852 96 3830 5517 5849 1466 267 7650 3037 9743 6811 6677 1733 6950 7195 9184 8418 5397 4797 8278 2078 8364 9476 7667 455 1596 2977 6796 306 4053 6893 9978 8298 665 8442 3758 8732 796 9721 9782 7939 3559 5482 4850 2901 5176 2983 5983 3410 4158 5021 
    // 5892 2908 7261 3841 3466 3051 2854 9314 4640 984 8676 9508 1308 6344 7742 5546 9838 7078 9621 5567 6172 9317 4237 4459 1497 6723 1913 7073 1065 9048 6436 2652 8811 7913 7623 7323 2166 250 6046 9674 4683 6282 5383 1683 8904 9459 7207 3546 8295 306 8916 6341 5001 4835 8005 851 9667 822 4878 4391 663 2075 2032 17 2647 1592 9577 4099 8612 9450 5783 8932 5294 189 
    // 6634 6772 9165 7478 216 519 9072 956 156 4078 2050 1233 7318 2408 831 4297 504 7219 5143 5801 4960 9332 3991 9049 2211 2841 2849 7896 5895 9385 7898 7215 6127 3051 9291 9134 9197 7777 6784 2786 366 9433 4025 8984 4976 4212 2280 8939 7113 3449 462 7888 5678 2520 5925 345 4872 8096 9705 3579 9799 3694 623 9864 8226 8213 4984 6089 6325 5933 2486 1367 9670 9313 4393 
    // 9452 727 7862 7013 2955 589 7331 2119 631 5828 3527 6042 7337 970 4162 866 8652 3356 322 4438 8604 9882 6378 654 9467 4515 3465 7940 7179 1335 7001 1707 4553 383 3169 6131 7191 2557 2728 1615 3746 5469 3130 6965 3028 4272 1465 9463 5333 232 1474 1799 4335 5058 7590 2128 8894 907 7780 2382 1209 4329 4787 441 8910 7432 2341 3732 3846 1049 8866 5402 9646 2817 6258 9362 
    // 3410 7705 5438 7143 4314 9762 3535 7793 3364 1651 9822 1850 4020 2852 8782 1792 3043 8361 9088 4317 4513 7146 6677 4299 7701 3683 8589 6342 1232 6481 1803 7466 1812 4648 7892 3658 5673 7310 12 3774 4872 918 3475 6589 8563 6399 4931 660 1463 1434 8082 2133 7876 3195 5750 2596 9831 3338 9107 7662 2170 195 4935 7089 5744 2741 900 8939 2276 7129 6971 3514 888 9401 8381 7643 6836 
    // 7279 1809 6251 7545 9893 1831 6099 9698 6757 9105 6061 3833 6322 5249 9408 9676 60 1916 6145 6245 172 3171 7680 5690 7725 978 1839 8755 3347 3307 3545 2780 4395 3189 5380 250 975 4908 2661 7016 8130 438 9695 4544 3051 5219 7401 9803 4277 7417 7662 9726 4486 8926 6415 4591 9716 9537 5774 6107 5633 7954 5267 1502 5804 4592 3669 4525 7856 1526 5837 7869 843 4296 3458 9260 1222 8842 
    // 4690 5218 5384 4330 5302 2316 3880 9275 3099 5670 6195 4032 8186 8334 5192 7459 3925 3302 7209 9359 7325 1895 7200 3164 3041 8453 8267 5260 2160 1459 1485 8320 5510 5489 4990 6083 1381 6709 999 6097 9190 7040 5590 5163 3927 8557 8936 9402 985 212 2940 7209 7400 3560 9210 8693 3418 2778 2728 9634 7853 7020 5617 1482 1735 9868 1019 1453 7382 1511 9238 8413 4227 4150 7026 888 8474 94 6177 
    // 3299 969 5025 9441 5307 6564 5990 176 7004 8671 4831 7116 9640 4727 2947 7198 7536 1834 2574 7435 1884 6975 3082 1542 1265 2909 8187 8186 6861 9075 1437 5555 2614 6657 2830 1261 1829 8367 9022 7519 2134 6392 3227 8998 101 6499 8584 4783 5323 2325 574 6489 1300 1535 9883 1701 7093 4680 6988 5673 9375 8388 3717 4458 9253 6794 5044 9534 2023 9012 6455 7349 895 5893 8376 7227 7635 6304 9341 7577 
    // 4066 1732 3870 3448 8416 8158 9325 8153 9612 5802 8447 7871 796 628 678 951 570 6296 5949 2971 6778 1620 9146 4505 2999 6536 2133 1058 2343 9094 2914 3607 6625 7039 8278 3836 1557 182 7110 278 187 3941 6421 305 7505 204 1144 8193 8867 8954 1720 1341 3684 2997 605 5111 3686 8560 9962 1755 1997 6525 8001 397 5247 2644 717 3166 5972 199 9079 7203 6714 5246 9143 3506 338 2867 3995 1367 3398 
    // 2637 1959 1462 599 2902 5090 1618 8848 6415 5590 6701 8733 4351 5530 8143 9817 1816 6985 9182 3646 5578 5558 9093 4991 3926 127 3368 7527 9350 5634 7098 4869 7002 3735 5684 1715 5817 8206 358 2662 4592 8169 6018 8234 2319 2372 5384 8612 649 2048 6587 5615 6478 8202 958 2603 4332 1575 4010 133 1509 9960 5384 2442 3694 8106 2879 6117 5210 9996 1592 7711 5949 1932 1666 1429 6558 7569 7179 1554 4517 2819 
    // 4290 6782 6369 9344 8947 5289 5539 290 3142 9995 969 835 4013 3233 9055 9162 1921 8854 307 541 2056 7614 2544 8349 9066 8674 4472 1049 5777 5957 7030 3446 5132 3230 5049 3837 9147 5829 8423 6079 9921 161 264 7059 5491 4321 9326 5552 7681 4498 5356 8054 13 2153 8967 792 1201 6445 2136 4850 3797 4786 1487 3091 8130 2039 4161 3401 8882 5414 5243 2663 5313 7831 6481 9837 6463 7242 8354 4523 9504 3212 1398 
    // 9475 2800 4899 8167 1687 5238 6526 4185 6839 9894 7401 4834 6214 3208 3596 5209 3469 515 7526 1718 1087 4957 9798 7402 2755 9641 4996 7798 8445 2204 9313 533 3567 6878 3338 9780 2172 1629 7702 6209 6934 6938 2815 4117 5358 8439 6414 79 2534 7743 4313 1614 5627 4525 384 147 4243 8223 1547 9830 3853 9543 2338 2684 6511 380 1499 967 4261 5729 9944 9643 5824 2688 5446 5439 6430 9774 4443 4052 3993 4397 5468 3815 
    // 2196 7583 1882 2316 2552 2820 3826 2344 2974 224 604 4873 7 8161 5085 9735 5497 1904 1102 9162 6189 2962 3364 5410 6487 3285 6886 1329 491 5740 9605 1911 9256 5951 7495 5630 3224 877 6232 6661 7763 6370 7279 2980 1860 9343 9090 774 6112 147 6090 2572 6422 7316 9047 5111 4015 9897 514 3038 771 2269 8137 6273 1224 2568 6774 2079 9057 8601 7636 7730 6436 4519 8941 6015 9084 7370 7938 3782 8684 5182 8582 3203 6849 
    // 7212 2631 6539 1717 2627 4480 7762 9017 6011 1650 8635 4379 6850 3559 2558 2586 5382 878 6839 2501 9101 6644 2886 3496 2552 8099 4298 297 8081 5194 4803 8451 6698 7666 1571 1792 6319 7632 4551 6700 9322 8784 9173 5275 2552 6418 8014 1042 716 4777 6815 6296 8431 9486 1663 9807 7115 3224 7033 7199 375 2180 8929 4082 5577 9360 3413 3722 9881 8330 8439 6924 6185 7606 6090 1644 8131 1587 3086 3831 3632 8623 9732 9016 3194 667 
    // 1351 6224 2752 1768 1697 1959 661 4618 4838 2192 5081 5340 556 4551 1020 6758 8464 1271 6013 9491 7686 5805 9606 8408 2250 2504 4612 9188 7114 9252 7430 6059 6150 7542 667 7118 1330 3126 3719 8099 1883 3046 6050 8897 3236 1673 3480 9740 8186 9148 9943 5494 6948 576 5919 7269 8459 3223 18 224 2644 2019 2021 5267 2232 741 4131 219 3135 7386 2119 2919 4405 7449 9600 4743 2381 8110 6777 8055 8702 9631 9637 5232 8627 7678 6797 
    // 45 4288 1734 9015 4462 7363 294 676 5196 7001 3082 3524 4703 1802 4222 335 767 9124 7958 298 7257 1072 301 8437 6250 4164 5814 8581 8258 8813 8645 3112 3036 5575 842 2992 8121 7380 9046 8420 6113 863 2699 3886 4514 5346 3073 1355 3912 5030 2614 1840 1244 8499 8379 8729 4953 9801 1649 5883 7940 7024 8232 9746 2406 7564 374 7493 7904 4076 1771 2578 214 1494 1702 4967 4035 3431 2987 5792 6898 5782 1152 5219 5183 6410 8958 7907 
    // 5692 2429 1299 2573 7833 779 325 947 2124 3547 9657 6630 502 6808 9523 6264 2686 608 1765 3777 717 8200 4786 3496 729 4592 3729 9403 6977 8071 419 5940 8207 3475 976 401 564 2680 6344 8195 4401 6009 2481 19 4596 8114 2449 4364 5273 3225 2227 9631 203 7611 5720 7666 9560 1625 2141 4506 2211 9719 684 4753 262 4493 3292 3136 9201 9994 6157 560 2633 266 4580 2193 5359 1420 3823 2023 2340 9434 685 1700 3959 1260 6626 1461 9887 
    // 3888 3546 7465 4896 4520 7509 2959 9963 5177 4105 363 1136 6732 1487 7567 6838 612 3590 4533 1458 1243 6577 5635 9438 8667 6091 9061 9394 8715 1587 7110 2233 7622 6683 210 731 9019 1262 3102 571 3887 1861 3786 4458 8226 1815 4552 1595 8960 1533 9690 4556 5897 2336 6324 4367 6463 4348 3243 2497 346 88 7524 5343 3196 594 341 2843 2099 206 1385 7818 658 9440 6022 6831 8216 2795 530 6485 5985 9776 8505 1313 2698 2948 5935 743 3737 6404 
    // 3277 2953 655 1678 408 2871 2501 5843 4301 51 6435 8286 9913 9718 2725 8508 1906 6873 8421 7161 8549 9030 4763 6510 9440 7890 5669 4523 5515 4058 8545 8848 3248 1780 4102 3125 4872 2567 8838 8238 3048 7607 2451 5408 1427 8885 2535 6354 2282 8030 629 8129 8558 133 6922 6717 495 6947 5745 3960 6307 251 355 7007 2337 1448 3442 8075 543 7969 9315 5052 232 458 4769 225 6538 7346 8267 5241 307 4955 1269 5315 2765 2015 1273 4639 3637 7152 3478 
    // 7985 3228 6765 6811 543 7377 8511 551 9210 9174 2592 9739 3742 2866 8989 1173 5417 3469 3854 6850 4250 251 2384 8493 3133 3496 8657 4964 8755 1719 5174 4244 4682 861 6118 3006 1543 7897 8731 9755 2910 8757 6620 2006 3172 4502 7282 4055 5478 285 3706 9479 3628 8791 6512 1761 1713 3563 8740 7115 9244 7908 193 5944 7525 1939 1964 3243 5122 3674 4707 3663 6402 136 6089 3996 7332 902 3862 4376 6998 9633 1055 9633 1629 8814 8872 3915 301 9118 1082 4962 
    // 7961 7609 896 9213 1913 8333 7657 5307 2513 4778 6001 1496 7430 6116 4583 1964 1560 8216 4955 8122 1445 5977 3723 3595 3865 5712 2713 5761 3173 5021 2578 2503 906 2882 4982 122 4204 4535 7318 7231 6666 4125 1764 9917 6403 3073 7419 5433 1260 3652 236 5253 449 5336 519 3466 5148 6185 1871 3149 8039 2694 8640 1636 3195 9377 1164 5386 3247 3649 9397 6564 342 2523 5864 6360 1059 5069 8340 4589 3127 8651 1081 1163 3584 7519 1052 2684 3836 9538 2153 6557 6954 
    // 491 6138 5805 6531 5746 3671 67 4414 5872 2739 2138 6710 6222 4516 4862 3623 462 8702 169 8864 4561 1319 633 8655 861 8044 4042 8682 1479 5211 3163 9724 6551 8838 6141 9172 5576 9248 7781 6135 9486 5148 8338 2441 6963 6402 4391 461 1014 9163 5858 1403 814 488 4289 4476 9459 2146 207 8176 418 4916 1433 9819 4165 5339 104 8406 1810 6659 3399 8930 4339 4451 1864 3305 4527 5304 9679 4244 3509 3876 3178 3630 5592 9580 7552 6157 2912 9253 6734 2392 6268 6241 
    // 8197 2773 9635 9516 2628 5519 3666 8691 8257 6945 7837 2063 1006 2267 1781 5228 4548 8602 3858 7175 8883 9600 9009 9299 2097 2885 8550 316 7585 7334 1739 6633 8228 7101 2634 3460 9760 3267 6070 6651 7860 1981 3423 9052 7406 81 2231 8033 7744 5282 3714 2764 4852 8260 8780 811 9809 8210 6179 3660 3149 1781 6144 9892 6326 7700 9072 2914 4806 5843 1571 7375 2083 30 1571 4701 326 8389 68 3554 1266 3809 9581 5410 478 9671 8397 8993 9233 2825 5311 9795 756 6634 1692 
    // 2549 1895 1761 6452 5214 6972 1355 4771 2723 7882 306 3267 7577 3419 5311 2719 2234 1193 3645 4427 5129 7564 3727 7802 8190 4533 9850 4904 8731 7697 6761 2287 2740 6026 7178 1734 9730 2506 6790 9245 1585 4495 6783 5997 9089 3995 3548 5894 248 1020 8841 1796 3879 7715 1376 6559 464 6949 2617 5594 9796 6742 5341 4832 1584 1071 3454 1698 803 8343 5487 6968 4382 1147 2221 2235 9559 4785 972 1134 7131 7481 5203 2417 4746 2230 8342 9534 6344 8744 4951 4437 3947 4153 712 3021 
    // 7063 2732 5109 5801 3186 8243 7109 236 69 7259 4707 427 6782 8214 3723 5862 5904 8887 9943 3316 3633 4493 1343 5059 8084 9670 3955 2141 8583 209 5718 3643 395 4632 7589 1542 9983 1439 111 6090 5634 5148 6680 8477 7093 3167 1807 5934 5700 5947 3844 9430 3455 4871 6816 5617 5410 5914 5292 2804 4865 2215 9549 5378 4913 5403 5675 2320 3088 3777 6714 3243 8103 5237 6472 9735 8930 4254 7188 680 6897 5107 5913 7713 821 8098 2132 1005 3772 1558 968 6151 7526 29 2094 99 7440 
    // 8261 4392 7800 6126 1357 372 1500 9039 3755 2336 1485 8900 3580 4388 461 8734 4373 541 3753 5230 3177 9322 4018 5099 2532 9618 2268 7185 4071 780 6666 2169 3086 2413 6770 9891 6679 5747 3685 1549 2946 8980 5926 340 5011 3579 6713 9450 1647 7162 880 756 5764 1294 8614 1047 3069 9284 8840 5165 5846 9922 7228 7037 1006 7971 2505 284 7281 1175 61 9780 3774 6605 3662 4385 945 6180 4498 8902 5552 2411 1778 240 3068 557 593 8756 4663 2702 888 805 959 2570 6022 2605 1474 7266 
    // 625 8758 6888 3640 5259 924 1124 2429 9690 3532 1574 2954 7554 3696 8764 4781 2597 1977 1238 437 771 9098 7519 5086 3005 1275 4635 4847 671 3432 1848 5374 9462 5249 9048 6244 7696 9720 1512 4729 1882 7704 6658 4602 5837 4815 3845 1781 9563 8909 5257 8805 650 7428 4515 4409 4089 3890 9732 2804 5982 1953 9472 9654 2916 3625 3279 8177 1504 5456 3287 9370 1973 2811 9787 4858 5581 7740 1567 9597 8090 312 1339 4289 595 6842 7648 4184 4584 927 7264 1761 248 4856 6257 5656 5818 9618 3709 
    // 7189 950 1469 9338 8838 9050 1823 5152 6087 1836 5085 1748 5247 4392 5984 1814 5001 508 3920 6999 8755 6215 6933 9416 8152 4043 1960 5758 5532 1793 1266 222 4559 7363 7151 2297 3775 5533 8324 6810 7382 3525 1719 6577 1241 9595 2938 2526 9755 3000 6988 2178 1071 4222 8549 5062 3873 1521 7590 2759 8939 3618 1853 2096 2567 8555 2446 2247 7012 5668 2584 454 5152 985 2393 6450 2738 6344 4589 2724 1790 9066 6861 6290 2975 2100 6816 7779 3126 4220 4457 5348 6453 6087 5349 4148 4463 747 4854 6924
];

console.log(maximumTrianglePathSum(theTriangle));
