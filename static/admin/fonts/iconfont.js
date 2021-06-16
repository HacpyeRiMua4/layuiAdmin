;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shuaxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M692.203 763.299c-56.411 40.019-122.415 60.082-189.889 59.158-8.922-0.094-17.782-0.562-26.533-1.343-3.578-0.342-7.156-0.934-10.75-1.389-6.891-0.924-13.797-1.859-20.502-3.173-4.157-0.797-8.219-1.875-12.281-2.829-6.579-1.564-13.129-3.141-19.549-5.078-3.094-0.969-6.109-2.079-9.172-3.125-7.407-2.515-14.783-5.108-21.97-8.156-1.625-0.658-3.187-1.436-4.813-2.173-8.375-3.735-16.689-7.655-24.69-12.062-0.39-0.205-0.719-0.375-1.108-0.577-27.142-15.097-51.988-33.94-73.771-55.958-0.329-0.342-0.688-0.75-1.046-1.14-6.767-6.877-13.22-14.064-19.361-21.564-1.281-1.595-2.532-3.313-3.828-4.954-44.331-56.158-71.067-127.226-71.067-204.545h75.198c1.942 0 3.822-1.041 4.807-2.87 0.987-1.829 0.821-3.971-0.246-5.595l-126.404-191.969c-0.977-1.483-2.655-2.458-4.561-2.458s-3.586 0.977-4.561 2.458l-126.406 191.965c-1.069 1.623-1.232 3.765-0.246 5.595 0.987 1.829 2.865 2.87 4.809 2.87h75.214c0 90.897 27.986 175.151 75.536 244.813 0.579 0.971 1.001 2.002 1.641 2.972 4.922 7.123 10.391 13.702 15.673 20.437 1.969 2.547 3.813 5.171 5.86 7.67 7.782 9.564 16.048 18.549 24.548 27.33 0.813 0.875 1.563 1.733 2.361 2.515 28.533 28.923 60.801 53.301 95.897 72.786 0.907 0.548 1.813 1.111 2.813 1.627 10.11 5.499 20.5 10.468 31.034 15.172 2.626 1.139 5.188 2.421 7.86 3.548 9.002 3.781 18.251 7.093 27.58 10.251 4.406 1.516 8.782 3.062 13.25 4.452 8.142 2.438 16.47 4.485 24.877 6.5 5.563 1.313 11.093 2.735 16.767 3.828 2.359 0.485 4.578 1.22 6.892 1.579 7.906 1.422 15.875 2.219 23.797 3.187 2.86 0.346 5.673 0.83 8.533 1.14 14.236 1.423 28.422 2.359 42.597 2.359 86.74 0 171.371-26.86 243.968-78.349 23.129-16.452 28.77-48.736 12.565-72.191-16.252-23.501-48.191-29.173-71.317-12.719z"  ></path>' +
    '' +
    '<path d="M932.89 494.389c-0.047-90.614-27.861-174.7-75.177-244.219-0.688-1.187-1.157-2.39-1.937-3.501-5.875-8.5-12.3-16.423-18.689-24.361-0.734-0.969-1.421-1.985-2.203-2.939-43.302-53.191-97.663-94.272-159.277-121.133-1.705-0.75-3.375-1.579-5.093-2.329-9.83-4.094-19.909-7.719-30.033-11.141-3.657-1.219-7.235-2.562-10.97-3.673-8.829-2.703-17.783-4.907-26.816-7.017-4.985-1.172-9.968-2.453-15.017-3.453-2.499-0.485-4.859-1.234-7.327-1.687-6.735-1.172-13.502-1.687-20.252-2.578-4.688-0.594-9.251-1.328-13.97-1.813-11.344-1.062-22.596-1.515-33.846-1.718-2.063 0-4.047-0.329-6.094-0.329-0.374 0-0.718 0.11-1.093 0.141-86.633 0.063-171.075 26.549-243.58 77.973-23.189 16.407-28.831 48.721-12.61 72.192 16.189 23.471 48.174 29.158 71.316 12.703 56.004-39.705 121.337-59.801 188.341-59.191 9.642 0.062 19.126 0.546 28.502 1.438 2.891 0.329 5.75 0.766 8.625 1.125 7.705 0.954 15.345 2.062 22.876 3.563 3.329 0.656 6.611 1.515 9.859 2.267 7.392 1.686 14.769 3.5 21.987 5.703 2.281 0.734 4.529 1.562 6.812 2.313 8.236 2.734 16.345 5.673 24.316 9.031 0.811 0.343 1.641 0.766 2.421 1.093 47.722 20.783 89.584 52.77 122.243 92.803 0.205 0.234 0.405 0.547 0.594 0.781 45.971 56.66 73.646 129.086 73.677 207.951h-75.23c-1.942 0-3.822 1.041-4.807 2.87s-0.821 3.971 0.247 5.595l126.434 191.951c0.976 1.482 2.655 2.458 4.562 2.458 1.906-0.001 3.585-0.978 4.56-2.459l126.375-191.951c1.070-1.623 1.233-3.764 0.246-5.595-0.986-1.829-2.865-2.87-4.807-2.87l-75.171 0.001z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shujuku" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M429.056939 931.690618c-204.353225 0-370.015242-69.02405-370.015242-154.173358 0-2.960425-0.174985-6.577812 0-9.541307-0.35918-0.25685 0.355087 0.25685 0 0L59.041698 677.728532c66.630536 65.152882 207.278857 110.066815 370.015242 110.066815 43.236733 0 84.914972-3.170203 124.059504-9.049097 1.067308-14.352893 3.327792-28.372188 6.656607-41.97295-40.646746 6.39771-84.693938 9.908674-130.71611 9.908674-204.353225 0-370.015242-69.026096-370.015242-154.173358 0-2.960425-0.077771-6.574742 0-9.53926l0 0 0-90.249467c66.630536 65.152882 207.278857 110.066815 370.015242 110.066815s303.384705-44.913932 370.015242-110.066815l0 48.620347c3.41068-0.134053 6.833639-0.222057 10.278087-0.222057 10.4367 0 20.723997 0.638543 30.834262 1.848091L840.184531 171.102936l0 0C809.060673 77.901231 634.028241 6.65149 429.056939 6.65149S49.053206 77.901231 17.929348 171.102936l0 0 0 637.248585 0 0c31.124881 93.201705 200.039989 169.764452 411.128615 167.521365 63.011102-0.669242 124.752282-7.766894 178.127933-19.801998-8.662287-11.325953-18.448164-25.438369-25.15696-38.135552C535.404036 926.767492 483.611439 931.690618 429.056939 931.690618zM429.056939 47.76384c204.353225 0 370.015242 69.026096 370.015242 154.173358S633.411187 356.110557 429.056939 356.110557 59.041698 287.084461 59.041698 201.937199 224.703715 47.76384 429.056939 47.76384zM59.041698 397.961734 59.041698 287.156092c66.630536 65.152882 207.278857 110.066815 370.015242 110.066815s303.384705-44.913932 370.015242-110.066815l0 110.805642c-0.355087 0.25685 0.35918-0.25685 0 0 0.394996 2.919493 0 6.579859 0 9.53926 0 85.146239-165.662017 154.173358-370.015242 154.173358S59.041698 492.648256 59.041698 407.502018C59.041698 404.541593 58.646702 400.881227 59.041698 397.961734 58.682517 397.705907 59.396785 398.219607 59.041698 397.961734zM799.073204 582.231551c-113.52866 0-205.563796 92.035136-205.563796 205.563796 0 113.530706 92.035136 205.563796 205.563796 205.563796 113.530706 0 205.563796-92.03309 205.563796-205.563796C1004.637 674.266687 912.603911 582.231551 799.073204 582.231551zM799.073204 952.246793c-90.824565 0-164.451446-73.626881-164.451446-164.451446s73.626881-164.451446 164.451446-164.451446 164.451446 73.626881 164.451446 164.451446S889.897769 952.246793 799.073204 952.246793zM819.629379 685.013449l-41.11235 0 0 82.225723-82.225723 0 0 41.11235 82.225723 0 0 82.225723 41.11235 0 0-82.225723 82.225723 0 0-41.11235-82.225723 0L819.629379 685.013449z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shanchu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M621.714287 804.571429C601.490287 804.571429 585.142858 788.224 585.142858 768L585.142858 365.714287C585.142858 345.490287 601.490287 329.142858 621.714287 329.142858 641.938287 329.142858 658.285713 345.490287 658.285713 365.714287L658.285713 768C658.285713 788.224 641.938287 804.571429 621.714287 804.571429L621.714287 804.571429 621.714287 804.571429ZM402.285713 804.571429C382.061713 804.571429 365.714287 788.224 365.714287 768L365.714287 365.714287C365.714287 345.490287 382.061713 329.142858 402.285713 329.142858 422.509713 329.142858 438.857142 345.490287 438.857142 365.714287L438.857142 768C438.857142 788.224 422.509713 804.571429 402.285713 804.571429L402.285713 804.571429 402.285713 804.571429ZM987.428571 182.857142 804.571429 182.857142 804.571429 109.714287C804.571429 49.225142 755.748571 0 695.698287 0L329.142858 0C268.653713 0 219.428571 49.225142 219.428571 109.714287L219.428571 182.857142 36.571429 182.857142C16.347429 182.857142 0 199.204571 0 219.428571 0 239.652571 16.347429 256 36.571429 256L987.428571 256C1007.652571 256 1024 239.652571 1024 219.428571 1024 199.204571 1007.652571 182.857142 987.428571 182.857142L987.428571 182.857142 987.428571 182.857142ZM292.571429 109.714287C292.571429 89.563429 308.992 73.142858 329.142858 73.142858L695.698287 73.142858C715.739429 73.142858 731.428571 89.197713 731.428571 109.714287L731.428571 182.857142 292.571429 182.857142 292.571429 109.714287 292.571429 109.714287ZM768.146287 1024 256.073142 1024C195.584 1024 146.358857 974.774857 146.358857 914.285714L146.358857 365.165713C146.358857 344.978287 162.742857 328.594287 182.930286 328.594287 203.117714 328.594287 219.501714 344.978287 219.501714 365.165713L219.501714 914.285714C219.501714 934.473143 235.922287 950.857143 256.073142 950.857143L768.146287 950.857143C788.333713 950.857143 804.717713 934.473143 804.717713 914.285714L804.717713 366.665142C804.717713 346.477713 821.065142 330.093713 841.289142 330.093713 861.513142 330.093713 877.860571 346.477713 877.860571 366.665142L877.860571 914.285714C877.860571 974.774857 828.635429 1024 768.146287 1024L768.146287 1024 768.146287 1024Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wenzhang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M714.555 10.286h-560.091c-41.142 0-74.516 31.797-74.516 70.997v868.594c0 39.079 33.375 70.997 74.516 70.997h709.245c41.142 0 74.516-31.797 74.516-70.997v-689.706l-223.673-249.887zM839.558 258.836h-149.883v-167.481l149.883 167.481zM849.389 944.295h-679.148c-6.917 0-12.257-4.611-12.257-8.738v-840.924c0-4.127 5.219-8.738 12.257-8.738h461.543v183.259c0 33.739 27.428 61.045 61.045 61.045h168.694v605.358c0 4.127-5.219 8.738-12.137 8.738v0zM849.147 944.295z"  ></path>' +
    '' +
    '<path d="M566.613 317.819c0 21.482-17.355 38.836-38.836 38.836h-209.957c-21.482 0-38.836-17.355-38.836-38.836v0c0-21.482 17.355-38.836 38.836-38.836h209.957c21.36 0 38.836 17.355 38.836 38.836v0z"  ></path>' +
    '' +
    '<path d="M749.264 510.786c0 21.482-17.355 38.836-38.836 38.836h-389.575c-21.482 0-38.836-17.355-38.836-38.836v0c0-21.482 17.355-38.836 38.836-38.836h389.575c21.36 0 38.836 17.355 38.836 38.836v0z"  ></path>' +
    '' +
    '<path d="M749.264 703.754c0 21.482-17.355 38.836-38.836 38.836h-389.575c-21.482 0-38.836-17.355-38.836-38.836v0c0-21.482 17.355-38.836 38.836-38.836h389.575c21.36 0 38.836 17.476 38.836 38.836v0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-lianjie" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M118.784 512c0-83.012 67.478-150.491 150.491-150.491h194.181v-92.236h-194.181c-133.985 0-242.725 108.741-242.725 242.725s108.741 242.725 242.725 242.725h194.181v-92.236h-194.181c-83.012 0-150.491-67.478-150.491-150.491zM317.819 560.545h388.362v-97.090h-388.362v97.090zM754.725 269.275h-194.181v92.236h194.181c83.012 0 150.491 67.478 150.491 150.491s-67.478 150.491-150.491 150.491h-194.181v92.236h194.181c133.985 0 242.725-108.741 242.725-242.725s-108.741-242.725-242.725-242.725z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caidan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M960.860984 193.72619c-298.637588 0-596.838224 0-895.378597 0 0-42.711777 0-85.246523 0-128.138402 298.308083 0 596.630493 0 895.378597 0C960.860984 108.187001 960.860984 150.956084 960.860984 193.72619z"  ></path>' +
    '' +
    '<path d="M65.354474 574.176085c0-42.830481 0-85.244476 0-127.966487 298.53321 0 596.856643 0 895.561769 0 0 42.496883 0 85.031629 0 127.966487C662.615323 574.176085 364.17114 574.176085 65.354474 574.176085z"  ></path>' +
    '' +
    '<path d="M65.326844 960.958198c0-42.747593 0-85.160565 0-127.910205 298.505581 0 596.829014 0 895.561769 0 0 42.412972 0 84.947717 0 127.910205C662.668535 960.958198 364.225375 960.958198 65.326844 960.958198z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-youjian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M902.433 241.437h-798.372c-47.162 0-85.52 35.45-85.52 79.034v474.187c0 43.584 38.358 79.035 85.52 79.035h798.372c47.125 0 85.525-35.45 85.525-79.035v-474.188c0-43.583-38.446-79.033-85.525-79.033v0 0zM75.572 794.656v-464.071l251.593 232.669-251.593 232.502v-1.102zM116.75 294.126h772.956l-372.683 344.387c-7.764 7.175-19.741 7.175-27.507 0.001l-372.767-344.388zM367.547 600.386l100.355 91.024c20.043 18.179 50.61 18.178 70.653-0.002l100.985-91.611 239.457 221.248h-750.188l238.738-220.659zM680.722 563.254h-1.643l251.849-232.669v463.866l-250.205-231.197zM680.722 563.254z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tuijian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1012.546768 321.876347 523.94378 601.497305C520.701897 603.305934 517.152888 604.227312 513.569754 604.227312 510.020745 604.227312 506.471736 603.305934 503.263978 601.497305L11.111981 319.931217C4.423464 316.109207 0.294329 308.874689 0.294329 301.094169 0.294329 293.279524 4.423464 286.079131 11.111981 282.257121L499.783219 2.704413C506.198735-0.912846 514.047505-0.912846 520.428896 2.704413L1012.546768 284.202251C1019.235285 288.024261 1023.36442 295.224654 1023.36442 303.039299 1023.36442 310.819819 1019.235285 318.020212 1012.546768 321.876347ZM510.12312 77.335977 107.276475 294.439777 513.569754 526.899866 928.70143 303.039299 510.12312 77.335977ZM31.757659 476.462988 513.569754 752.125436 991.866965 478.408118C1002.070366 472.606853 1015.003774 476.292363 1020.634413 486.700514 1026.367428 497.108665 1022.716044 541.266527 1012.546768 547.136042L523.94378 826.722875C520.701897 828.531505 517.152888 829.487007 513.569754 829.487007 510.020745 829.487007 506.471736 828.531505 503.263978 826.722875L11.111981 545.190912C0.942706 539.321397-2.708679 495.163535 3.024336 484.755384 8.654975 474.347233 21.554258 470.661723 31.757659 476.462988ZM31.757659 670.70298 513.569754 946.365428 991.866965 672.64811C1002.070366 666.88097 1015.003774 670.532355 1020.634413 680.940506 1026.367428 691.314532 1022.716044 735.506519 1012.546768 741.341909L523.94378 1020.962867C520.701897 1022.771497 517.152888 1023.692874 513.569754 1023.692874 510.020745 1023.692874 506.471736 1022.771497 503.263978 1020.962867L11.111981 739.396779C0.942706 733.561389-2.708679 689.369402 3.024336 678.995376 8.654975 668.587225 21.554258 664.833465 31.757659 670.70298Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-msg" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M551.155 1006.526c-4.364 0-8.729-0.883-12.844-2.763-11.27-5.054-18.513-16.244-18.513-28.563v-155.507h-113.931c-221.587 0.030-401.872-180.29-401.872-401.878s180.287-401.873 401.873-401.873h213.438c221.588 0 401.873 180.257 401.873 401.873 0 86.444-27.019 168.741-78.098 238.11-10.25 13.924-29.888 16.852-43.814 6.633-13.921-10.278-16.877-29.894-6.627-43.814 43.122-58.486 65.916-127.993 65.916-200.927 0-187.055-152.195-339.217-339.25-339.217h-213.438c-187.055 0-339.217 152.19-339.217 339.217 0 187.058 152.19 339.249 339.217 339.249h145.284c17.269 0 31.303 14.034 31.303 31.327v117.081l227.86-202.5c12.956-11.492 32.763-10.302 44.255 2.627 11.492 12.927 10.307 32.733-2.622 44.23l-279.995 248.822c-5.853 5.196-13.315 7.874-20.802 7.874v0zM362.113 417.817c0 32.129-26.049 58.154-58.15 58.154-32.1 0-58.127-26.026-58.127-58.154 0-32.101 26.027-58.15 58.127-58.15 32.101-0.001 58.15 26.048 58.15 58.15v0zM512.594 359.635c-32.101 0-58.156 26.049-58.156 58.156 0 32.13 26.055 58.15 58.156 58.15 32.1 0 58.122-26.021 58.122-58.15 0.029-32.076-26.022-58.156-58.122-58.156v0zM721.225 359.635c-32.101 0-58.128 26.049-58.128 58.156 0 32.13 26.027 58.15 58.128 58.15 32.101 0 58.15-26.021 58.15-58.15 0-32.076-26.049-58.156-58.15-58.156v0zM721.225 359.635z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-userpro" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M993.31 965.622c-3.559-59.294-25.246-109.567-64.462-149.429-35.397-35.97-78.544-57.378-116.082-73.574-14.529-6.273-28.774-12.031-42.551-17.598-21.594-8.729-41.987-16.976-58.548-25.27-18.493-9.263-30.15-17.763-35.438-25.856-1.507-20.739-1.666-38.301-1.594-58.258 1.324-1.403 2.67-2.991 3.978-4.793 6.846-9.431 13.705-21.18 20.379-34.909 8.38-17.207 15.156-37.222 19.892-58.621 5.563-2.994 11.826-7.447 17.42-14.579 15.114-19.274 24.343-44.369 28.222-76.697 2.784-23.091-1.259-43.728-12.334-62.639 15.098-53.809 20.944-104.080 17.385-149.625-3.333-42.711-15.468-78.81-36.066-107.289-20.775-28.723-52.907-49.67-91.27-59.716-28.436-30.092-72.884-45.331-132.348-45.331l-1.276 0.005c-112.25 2.068-193.634 47.917-229.162 129.103-25.769 58.894-27.892 134.295-6.429 230.155-11.881 19.289-16.434 41.193-13.543 65.331 3.893 32.358 13.124 57.447 28.221 76.701 5.822 7.424 12.385 11.949 18.201 14.94 4.875 22.163 11.565 41.81 19.964 58.579 6.453 12.881 13.76 24.937 21.117 34.846 1.246 1.683 2.527 3.18 3.786 4.516 0.055 19.737-0.139 37.283-1.616 57.84-5.242 8.415-16.875 17.049-35.372 26.276-16.484 8.227-36.883 16.409-58.482 25.074-14.038 5.63-28.554 11.453-43.311 17.796-37.91 16.288-81.433 37.767-116.79 73.552-39.232 39.714-60.938 90.004-64.513 149.508l-3.344 56.898h969.318l-3.348-56.937zM112.436 946.386c6.365-31.875 18.22-57.383 37.283-76.677 23.984-24.281 56.756-42.468 92.157-57.684 35.393-15.216 72.721-27.248 105.514-43.618 32.798-16.369 63.109-37.873 75.973-72.452l0.703-2.812 0.703-2.817c3.418-37.729 2.114-64.479 2.114-97.077v-13.364l-11.962-6.333c2.054 1.079-2.785-2.013-7.030-7.734-4.251-5.727-9.404-13.89-14.073-23.216-9.339-18.643-16.94-42.628-18.994-61.902l-2.109-18.29-18.993-1.406c-0.171-0.016-2.281 0.24-6.332-4.928-4.048-5.164-9.297-16.586-11.958-38.69-2.238-18.698 7.305-25.207 6.334-24.617l14.769-9.147-4.219-16.18c-21.193-81.562-24.86-155.733-2.812-206.113 21.983-50.234 66.781-81.814 160.383-83.708 0.285 0 0.427-0.005 0.704 0 45.322 0.16 74.646 13.459 83.009 28.133l5.626 9.145 10.551 1.412c31.311 4.348 49.247 16.964 61.907 34.467 12.654 17.501 19.696 41.932 21.807 68.937 4.218 54.014-11.313 116.871-21.102 146.318l-5.631 17.588 15.478 9.147c-0.971-0.591 8.582 5.925 6.33 24.617-2.645 22.107-7.911 33.529-11.958 38.69-4.047 5.162-6.161 4.911-6.333 4.928l-18.993 1.406-2.11 18.29c-2.087 19.475-9.919 43.252-18.993 61.902-4.535 9.328-9.236 17.529-13.364 23.216-4.128 5.684-8.492 8.865-6.333 7.734l-11.958 6.333v13.364c0 32.588-1.309 59.343 2.11 97.077v2.817l1.406 2.812c12.853 34.548 42.58 56.085 75.27 72.452 32.689 16.374 70.27 28.403 105.52 43.618 35.249 15.209 67.564 33.409 91.447 57.684 18.982 19.287 30.94 44.787 37.283 76.677h-799.125z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-leimulianjie" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M906.406 3.14h-249.117c-62.327 0-113.038 50.883-113.038 113.446v250.519c0 62.636 50.71 113.525 113.038 113.525h249.202c30.229 0 58.66-11.812 79.994-33.283 21.328-21.402 33.030-49.889 33.030-80.167v-250.515c0-62.555-50.699-113.452-113.111-113.525v0zM950.209 359.645c0 13.922-5.356 26.958-15.049 36.7l-0.034 0.021-0.045 0.051c-9.765 9.828-22.254 15.021-36.098 15.021h-234.189c-28.259 0-51.223-23.264-51.223-51.878v-235.435c0-28.554 22.966-51.794 51.223-51.794h234.065c28.32 0.029 51.348 23.297 51.348 51.872v235.44z"  ></path>' +
    '' +
    '<path d="M365.296 3.14h-249.116c-62.327 0-113.038 50.883-113.038 113.446v250.519c0 62.636 50.71 113.525 113.038 113.525h249.195c30.237 0 58.66-11.812 79.994-33.283 21.334-21.402 33.030-49.889 33.030-80.167v-250.515c0.005-62.555-50.699-113.452-113.105-113.525v0zM409.101 359.645c0 13.922-5.357 26.958-15.049 36.7l-0.034 0.021-0.039 0.051c-9.764 9.828-22.249 15.021-36.097 15.021h-234.194c-28.26 0-51.223-23.264-51.223-51.878v-235.434c0-28.553 22.965-51.794 51.223-51.794h234.065c28.32 0.029 51.348 23.297 51.348 51.872v235.439z"  ></path>' +
    '' +
    '<path d="M905.243 542.209h-249.117c-62.327 0-113.038 50.883-113.038 113.445v250.519c0 62.636 50.71 113.525 113.038 113.525h249.202c30.229 0 58.66-11.812 79.994-33.283 21.328-21.402 33.030-49.889 33.030-80.167v-250.514c0-62.555-50.699-113.452-113.111-113.525v0zM949.045 898.714c0 13.921-5.356 26.958-15.049 36.7l-0.034 0.021-0.045 0.051c-9.765 9.828-22.254 15.021-36.098 15.021h-234.189c-28.259 0-51.223-23.264-51.223-51.878v-235.435c0-28.554 22.966-51.794 51.223-51.794h234.065c28.32 0.029 51.348 23.297 51.348 51.872v235.44z"  ></path>' +
    '' +
    '<path d="M364.132 542.209h-249.116c-62.327 0-113.038 50.883-113.038 113.445v250.519c0 62.636 50.71 113.525 113.038 113.525h249.195c30.237 0 58.66-11.812 79.994-33.283 21.334-21.402 33.030-49.889 33.030-80.167v-250.512c0.005-62.555-50.699-113.452-113.105-113.525v0zM407.937 898.714c0 13.921-5.357 26.958-15.049 36.7l-0.034 0.021-0.039 0.051c-9.764 9.828-22.249 15.021-36.097 15.021h-234.194c-28.26 0-51.223-23.264-51.223-51.878v-235.434c0-28.553 22.965-51.794 51.223-51.794h234.065c28.32 0.029 51.348 23.297 51.348 51.872v235.439z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-list" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M896 1023.957333 128 1023.957333C80.853333 1023.957333 42.666667 985.770667 42.666667 938.624L42.666667 85.333333C42.666667 38.186667 80.853333-0.042667 128-0.042667L896-0.042667C943.104-0.042667 981.333333 38.186667 981.333333 85.333333L981.333333 938.624C981.333333 985.770667 943.104 1023.957333 896 1023.957333ZM896 85.290667 128 85.290667 128 938.666667 896 938.666667 896 85.290667ZM277.333333 469.290667 746.666667 469.290667C758.442667 469.290667 768 478.848 768 490.624L768 533.333333C768 545.109333 758.442667 554.666667 746.666667 554.666667L277.333333 554.666667C265.557333 554.666667 256 545.109333 256 533.333333L256 490.624C256 478.848 265.557333 469.290667 277.333333 469.290667ZM277.333333 682.666667 746.666667 682.666667C758.442667 682.666667 768 692.224 768 704L768 746.666667C768 758.442667 758.442667 768 746.666667 768L277.333333 768C265.557333 768 256 758.442667 256 746.666667L256 704C256 692.224 265.557333 682.666667 277.333333 682.666667ZM746.666667 341.333333 277.333333 341.333333C265.557333 341.333333 256 331.776 256 320L256 277.290667C256 265.514667 265.557333 255.957333 277.333333 255.957333L746.666667 255.957333C758.442667 255.957333 768 265.514667 768 277.290667L768 320C768 331.776 758.442667 341.333333 746.666667 341.333333Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-remind" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M916.804267 736.3584C853.384533 681.301333 808.055467 535.074133 808.055467 363.3152 808.055467 233.301333 724.770133 123.050667 608.9216 82.705067 601.105067 35.805867 560.759467-0.034133 511.812267-0.034133 462.865067-0.034133 422.519467 35.805867 414.702933 82.705067 298.8544 123.050667 215.569067 233.301333 215.569067 363.3152 215.569067 535.04 170.274133 681.2672 106.820267 736.324267 71.389867 767.0784 51.012267 811.758933 51.012267 858.794667 51.012267 913.544533 95.214933 957.917867 149.76 957.917867L445.969067 957.917867C445.969067 1012.6336 457.2672 1023.965867 511.812267 1023.965867 566.357333 1023.965867 577.655467 1012.6336 577.655467 957.917867L873.864533 957.917867C928.4096 957.917867 972.612267 913.544533 972.612267 858.794667 972.612267 811.793067 952.2688 767.112533 916.804267 736.3584ZM187.5456 887.466667C127.982933 887.466667 124.740267 823.227733 138.461867 811.281067 226.628267 734.788267 281.412267 563.131733 281.412267 363.3152 281.412267 254.020267 402.926933 132.096 511.812267 132.096 620.6976 132.096 742.212267 254.020267 742.212267 363.3152 742.212267 563.131733 796.996267 734.8224 885.162667 811.3152 898.9184 823.227733 906.018133 887.466667 836.078933 887.466667L187.5456 887.466667Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-Password" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M916.210526 1024 107.789474 1024C78.012632 1024 53.894737 999.855158 53.894737 970.105263L53.894737 485.052632C53.894737 455.275789 78.012632 431.157895 107.789474 431.157895L188.631579 431.157895 188.631579 323.368421C188.631579 144.761263 333.419789 0 512 0 690.580211 0 835.368421 144.761263 835.368421 323.368421L835.368421 431.157895 916.210526 431.157895C945.987368 431.157895 970.105263 455.275789 970.105263 485.052632L970.105263 970.105263C970.105263 999.855158 945.987368 1024 916.210526 1024ZM781.473684 323.368421C781.473684 174.538105 660.830316 53.894737 512 53.894737 363.169684 53.894737 242.526316 174.538105 242.526316 323.368421L242.526316 431.157895 781.473684 431.157895 781.473684 323.368421ZM916.210526 485.052632 835.368421 485.052632 188.631579 485.052632 107.789474 485.052632 107.789474 970.105263 916.210526 970.105263 916.210526 485.052632ZM512 592.842105C526.874947 592.842105 538.947368 604.914526 538.947368 619.789474L538.947368 835.368421C538.947368 850.243368 526.874947 862.315789 512 862.315789 497.125053 862.315789 485.052632 850.243368 485.052632 835.368421L485.052632 619.789474C485.052632 604.914526 497.125053 592.842105 512 592.842105Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-Setup" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1019.769263 449.320421C1020.658526 456.730947 1021.305263 464.195368 1021.952 471.686737 1023.002947 485.025684 1024 498.364632 1024 511.973053 1024 525.581474 1023.002947 538.920421 1021.952 552.259368 1021.305263 559.723789 1020.658526 567.215158 1019.769263 574.598737 1019.769263 574.598737 1019.769263 574.598737 1019.796211 574.598737 1017.397895 594.108632 1013.786947 613.187368 1009.286737 631.969684 960.889263 643.934316 914.836211 676.971789 885.571368 727.659789 856.306526 778.347789 850.728421 834.775579 864.525474 882.634105 850.458947 896.026947 835.584 908.503579 820.062316 920.225684 820.062316 920.198737 820.035368 920.198737 820.035368 920.171789 795.836632 938.442105 770.021053 954.664421 742.804211 968.542316 742.669474 968.623158 742.507789 968.704 742.373053 968.757895 729.061053 975.548632 715.398737 981.746526 701.413053 987.351579 700.281263 987.809684 699.095579 988.16 697.963789 988.618105 684.544 993.899789 670.908632 998.723368 656.949895 1002.846316 622.403368 966.790737 570.664421 943.346526 512 943.346526 453.335579 943.346526 401.596632 966.817684 367.050105 1002.846316 367.050105 1002.846316 367.050105 1002.846316 367.050105 1002.846316 353.091368 998.723368 339.456 993.899789 326.036211 988.618105 324.877474 988.16 323.718737 987.809684 322.56 987.351579 308.601263 981.746526 294.938947 975.548632 281.626947 968.757895 281.465263 968.704 281.330526 968.623158 281.195789 968.542316 253.978947 954.664421 228.163368 938.442105 203.964632 920.171789 203.937684 920.198737 203.937684 920.198737 203.937684 920.225684 188.416 908.503579 173.514105 896.026947 159.447579 882.634105 173.271579 834.775579 167.693474 778.347789 138.428632 727.659789 109.163789 676.971789 63.083789 643.934316 14.713263 631.969684 10.213053 613.187368 6.602105 594.108632 4.203789 574.625684 4.230737 574.625684 4.230737 574.625684 4.230737 574.625684 3.341474 567.215158 2.694737 559.723789 2.021053 552.259368 0.997053 538.920421 0 525.581474 0 511.973053 0 498.364632 0.997053 485.025684 2.021053 471.686737 2.694737 464.195368 3.341474 456.730947 4.230737 449.320421 4.230737 449.320421 4.230737 449.320421 4.203789 449.320421 6.602105 429.837474 10.213053 410.731789 14.713263 391.976421 63.083789 380.011789 109.136842 346.974316 138.401684 296.286316 167.666526 245.598316 173.244632 189.197474 159.447579 141.312 173.514105 127.919158 188.389053 115.469474 203.910737 103.720421 203.910737 103.747368 203.937684 103.774316 203.937684 103.801263 228.136421 85.530947 253.978947 69.281684 281.195789 55.376842 281.330526 55.322947 281.465263 55.269053 281.6 55.188211 294.938947 48.397474 308.601263 42.199579 322.586947 36.594526 323.718737 36.136421 324.877474 35.786105 326.009263 35.328 339.429053 30.046316 353.091368 25.222737 367.077053 21.099789 401.623579 57.128421 453.362526 80.572632 512 80.572632 570.637474 80.572632 622.376421 57.128421 656.922947 21.099789 670.908632 25.222737 684.544 30.046316 697.990737 35.328 699.122526 35.786105 700.281263 36.136421 701.413053 36.594526 715.398737 42.199579 729.061053 48.397474 742.4 55.188211 742.534737 55.269053 742.669474 55.322947 742.804211 55.376842 770.021053 69.281684 795.836632 85.530947 820.062316 103.801263 820.062316 103.774316 820.062316 103.747368 820.089263 103.720421 835.610947 115.469474 850.485895 127.919158 864.552421 141.312 850.755368 189.197474 856.333474 245.598316 885.598316 296.286316 914.863158 346.974316 960.916211 380.011789 1009.259789 391.976421 1013.786947 410.731789 1017.397895 429.810526 1019.769263 449.320421 1019.769263 449.320421 1019.769263 449.320421 1019.769263 449.320421ZM963.260632 433.825684C913.893053 413.345684 869.187368 375.511579 838.979368 323.179789 808.906105 271.090526 798.450526 213.746526 805.187368 160.956632 765.170526 127.568842 719.548632 100.621474 669.669053 82.324211 627.280842 114.714947 572.281263 134.413474 512 134.413474 451.718737 134.413474 396.719158 114.714947 354.330947 82.324211 304.451368 100.621474 258.829474 127.568842 218.785684 160.956632 225.549474 213.746526 215.066947 271.090526 184.993684 323.179789 154.812632 375.511579 110.106947 413.345684 60.739368 433.825684 56.346947 459.237053 53.894737 485.295158 53.894737 511.973053 53.894737 538.650947 56.346947 564.709053 60.739368 590.120421 110.106947 610.573474 154.812632 648.434526 185.047579 700.739368 215.120842 752.828632 225.576421 810.199579 218.812632 863.016421 258.829474 896.377263 304.451368 923.324632 354.304 941.621895 396.692211 909.231158 451.718737 889.505684 512 889.505684 572.281263 889.505684 627.307789 909.231158 669.696 941.621895 719.548632 923.324632 765.143579 896.377263 805.187368 863.016421 798.396632 810.199579 808.879158 752.828632 838.952421 700.739368 869.160421 648.434526 913.866105 610.573474 963.260632 590.093474 967.626105 564.709053 970.105263 538.650947 970.105263 511.973053 970.105263 485.295158 967.626105 459.237053 963.260632 433.825684ZM512 700.335158C407.956211 700.335158 323.610947 615.989895 323.610947 511.946105 323.610947 407.929263 407.956211 323.584 512 323.584 616.016842 323.584 700.362105 407.929263 700.362105 511.946105 700.362105 615.989895 616.016842 700.335158 512 700.335158ZM512 377.559579C437.76 377.559579 377.613474 437.733053 377.613474 511.946105 377.613474 586.186105 437.76 646.359579 512 646.359579 586.213053 646.359579 646.386526 586.186105 646.386526 511.946105 646.386526 437.733053 586.213053 377.559579 512 377.559579Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shangsheng" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 224 288 512.384 437.312 512 437.312 800 585.856 800 586.688 512 736 512Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fajianxiang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M895.090537 427.273317L769.607614 278.55111c-23.612791-29.096688-51.861158-56.55404-86.461187-56.55404H340.85255c-34.605146 0-65.823148 32.340569-86.460164 56.55404L128.912533 427.273317c-20.606317 27.694759-20.606317 69.620637-20.606317 98.461499V732.240053c0 38.45994 31.298843 69.762877 69.7639 69.762877H845.929884c38.45994 0 69.762877-31.302937 69.762876-69.762877V525.734816c0-28.785603 0-72.64246-20.602223-98.461499zM296.9916 297.246915c13.281491-15.101953 27.486004-28.695552 43.86095-28.695553h342.293877c16.368806 0 32.540114 13.985526 43.85788 28.695553l125.482923 148.721183c7.456832 9.063423 2.788509 10.000771-6.557346 10.000771H628.271632c-12.83533 0-23.254633 10.422374-23.254634 23.257703v23.254634c0 51.29527-41.718147 93.016487-93.018533 93.016487-51.299363 0-93.015464-41.721217-93.015463-93.016487v-23.254634c0-12.83533-10.419304-23.257703-23.255657-23.257703h-217.657229c-8.537444 0-13.270235-1.449002-6.558369-10.000771l125.479853-148.721183zM869.184517 732.240053c0 12.833283-10.419304 23.252587-23.254633 23.252587H178.070116c-12.83533 0-23.254633-10.419304-23.254633-23.252587V525.734816c0-12.834306 10.419304-23.25361 23.254633-23.25361h194.402596c0 76.921927 62.60178 139.5278 139.526776 139.5278 76.928067 0 139.529847-62.605873 139.529847-139.5278H845.929884c12.83533 0 23.254633 10.419304 23.254633 23.25361V732.240053z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiajiang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 800l224-288.384-149.312 0.384v-288h-148.543l-0.832 288h-149.313z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)