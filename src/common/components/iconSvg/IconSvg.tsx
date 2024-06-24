import React from 'react';


export type IconSvgType =
  | ''
  | 'github'
  | 'linkedin'
  | 'telegram'
  | 'api'
  | 'css3'
  | 'git'
  | 'html5'
  | 'jest'
  | 'js'
  | 'react'
  | 'redux'
  | 'storybook'
  | 'typescript'
  | 'loading'
  | 'ok'
  | 'message'
  | 'close'
  | 'bracket{'
  | 'description'
  | 'download'
  | 'backToTop'
  | 'hi'

export type IconSvgProps = {
  name: IconSvgType
}
export const IconSvg = ({name}: IconSvgProps) => {
  switch (name) {
    case 'hi':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="553.333"
          height="520"
          version="1"
          viewBox="0 0 415 390"
        >
          <path
            d="M3481 3819c-117-21-253-113-321-218-133-209-108-472 63-645 141-143 348-183 551-106 74 28 156 102 218 195 156 238 96 545-140 707-89 61-246 90-371 67zM88 3503c-2-5-1-224 3-488s10-1035 13-1714 7-1235 8-1236c2-2 193 0 424 3l421 5 7 81c3 45 6 330 6 634v552l393-2 392-3 5-630 5-630 423-3 422-2 2 1265c2 696 3 1468 3 1717v452h-85c-47 1-242 0-434-2l-349-2 4-677 4-678-392-2c-216-1-394-1-394 0-1 1-5 305-8 674-4 370-9 674-12 676-8 8-858 17-861 10zM3314 2513l-202-3 5-1218c3-669 6-1218 7-1218 0-1 207-4 459-8l457-7v2461l-262-2c-145-2-354-4-464-5z"
            transform="matrix(.1 0 0 -.1 0 390)"
          ></path>
        </svg>
      );
    case 'backToTop':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 6.414L2.707 11.707 1.293 10.293 8 3.586 14.707 10.293 13.293 11.707z"
          ></path>
        </svg>
      );
    case 'download':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" width='100%' height='100%'>
          <path
            d="M90 54a5.997 5.997 0 00-6 6v18H12V60a6 6 0 00-12 0v24a5.997 5.997 0 006 6h84a5.997 5.997 0 006-6V60a5.997 5.997 0 00-6-6z"></path>
          <path
            d="M43.758 64.242a5.998 5.998 0 008.484 0l18-18a6 6 0 00-8.484-8.484L54 45.516V12a6 6 0 00-12 0v33.516l-7.758-7.758a6 6 0 00-8.484 8.484z"></path>
        </svg>
      );
    case 'description':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          version="1.1"
          viewBox="0 0 48 48"
          xmlSpace="preserve"
        >
          <path
            d="M23.945 15.774c1.26 0 2.053-.864 2.016-1.944 0-1.115-.756-1.979-1.943-1.979-1.151 0-1.979.863-1.979 1.979 0 1.08.791 1.944 1.906 1.944zM25.602 34.941V20.145c0-1.303-1.053-1.413-1.351-1.418h-.566s-1.251.012-1.251 1.152v15.303c.023.346.175.967 1.001.967h1.181c.351-.028.986-.211.986-1.208z"></path>
          <path
            d="M24 0C10.746 0 0 10.744 0 24c0 13.254 10.745 24 24 24 13.256 0 24-10.746 24-24C48 10.744 37.256 0 24 0zm0 44C12.955 44 4 35.045 4 24 4 12.953 12.955 4 24 4c11.047 0 20 8.954 20 20 0 11.045-8.953 20-20 20z"></path>
        </svg>
      );
    case 'bracket{':
      return (
        <svg height="100%" id="Layer_1" version="1.1" viewBox="0 0 128 128"
             width="100%" xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill='none'
            strokeDasharray='10 10'
            strokeDashoffset={2}
            stroke={'red'}
            d="M45.368,60.328  c9.837,0,13.99-5.403,13.99-10.253c0-3.875,0.272-19.254,0.272-23.135c0-12.741,8.314-18.144,20.09-18.144h2.911v7.62h-2.494  c-8.178,0-11.366,4.012-11.366,11.491c0,3.187-0.13,17.042-0.13,20.786c0.141,8.866-6.513,13.299-12.749,14.957v0.282  c6.236,1.522,12.89,6.232,12.749,15.098c0,3.739,0.13,16.759,0.13,20.081c0,7.76,3.606,12.473,11.366,12.473h2.494v7.619h-2.911  c-11.499,0-20.09-4.986-20.09-18.979c0-3.739-0.272-18.843-0.272-22.581c0-4.293-4.153-10.248-13.99-10.248V60.328z"
          />
        </svg>
      );
    case 'close':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
          <path
            d="M18,21H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12c1.657,0,3,1.343,3,3v12	C21,19.657,19.657,21,18,21z"
            opacity=".6"/>
          <path
            d="M14.812,16.215L7.785,9.188c-0.384-0.384-0.384-1.008,0-1.392l0.011-0.011c0.384-0.384,1.008-0.384,1.392,0l7.027,7.027	c0.384,0.384,0.384,1.008,0,1.392l-0.011,0.011C15.82,16.599,15.196,16.599,14.812,16.215z"/>
          <path
            d="M7.785,14.812l7.027-7.027c0.384-0.384,1.008-0.384,1.392,0l0.011,0.011c0.384,0.384,0.384,1.008,0,1.392l-7.027,7.027	c-0.384,0.384-1.008,0.384-1.392,0l-0.011-0.011C7.401,15.82,7.401,15.196,7.785,14.812z"/>
        </svg>);
    case 'ok':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="100%" height="100%">
          <path
            d="M43.171,10.925L24.085,33.446l-9.667-9.015l1.363-1.463l8.134,7.585L41.861,9.378C37.657,4.844,31.656,2,25,2 C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23C48,19.701,46.194,14.818,43.171,10.925z"/>
        </svg>);
    case 'message':
      return (
        <svg width="100%" height="100%" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.00977 21.39H19.0098C20.0706 21.39 21.0881 20.9685 21.8382 20.2184C22.5883 19.4682 23.0098 18.4509 23.0098 17.39V7.39001C23.0098 6.32915 22.5883 5.31167 21.8382 4.56152C21.0881 3.81138 20.0706 3.39001 19.0098 3.39001H7.00977C5.9489 3.39001 4.93148 3.81138 4.18134 4.56152C3.43119 5.31167 3.00977 6.32915 3.00977 7.39001V12.39"
            stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M1.00977 18.39H11.0098" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round"/>
          <path d="M1.00977 15.39H5.00977" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round"/>
          <path d="M22.209 5.41992C16.599 16.0599 9.39906 16.0499 3.78906 5.41992" stroke="#000000" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round"/>
        </svg>);
    case 'github':
      return (
        <svg fill="#1DCB0A" width="100%" height="100%" viewBox="-2.5 0 19 19"
             xmlns="http://www.w3.org/2000/svg"
             className="cf-icon-svg">
          <g id="SVGRepo_iconCarrier">
            <path
              d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"/>
          </g>
        </svg>);
    case 'linkedin':
      return (<svg fill="#1DCB0A" width="100%" height="100%" viewBox="-3.6 1.2 19 19"
                   xmlns="http://www.w3.org/2000/svg" className="cf-icon-svg">
        <g id="SVGRepo_iconCarrier">
          <path
            d="M3.335 6.498a1.152 1.152 0 0 1-1.248 1.148h-.015a1.15 1.15 0 1 1 .03-2.295 1.147 1.147 0 0 1 1.233 1.147zM.982 8.553h2.206v6.637H.982zm10.165 2.83v3.807H8.941v-3.55c0-.893-.319-1.502-1.12-1.502a1.21 1.21 0 0 0-1.13.807 1.516 1.516 0 0 0-.073.538v3.708H4.41s.03-6.017 0-6.639h2.21v.94l-.016.023h.015V9.49a2.19 2.19 0 0 1 1.989-1.095c1.451 0 2.54.949 2.54 2.988z"/>
        </g>
      </svg>);
    case 'telegram':
      return (<svg fill="#1DCB0A" width="100%" height="100%" viewBox="1.1 -1 24 24"
                   xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_iconCarrier">
          <path
            d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
        </g>
      </svg>);
    case 'api':
      return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_iconCarrier">
          <path
            d="M12.52 3.046a3 3 0 0 0-2.13 5.486 1 1 0 0 1 .306 1.38l-3.922 6.163a2 2 0 1 1-1.688-1.073l3.44-5.405a5 5 0 1 1 8.398-2.728 1 1 0 1 1-1.97-.348 3 3 0 0 0-2.433-3.475zM10 6a2 2 0 1 1 3.774.925l3.44 5.405a5 5 0 1 1-1.427 8.5 1 1 0 0 1 1.285-1.532 3 3 0 1 0 .317-4.83 1 1 0 0 1-1.38-.307l-3.923-6.163A2 2 0 0 1 10 6zm-5.428 6.9a1 1 0 0 1-.598 1.281A3 3 0 1 0 8.001 17a1 1 0 0 1 1-1h8.266a2 2 0 1 1 0 2H9.9a5 5 0 1 1-6.61-5.698 1 1 0 0 1 1.282.597Z"
            fill="#9da1a5"/>
        </g>
      </svg>);
    case 'css3':
      return (<svg fill="#9da1a5" version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                   viewBox="0 0 512 512">
        <g id="SVGRepo_iconCarrier">
          <g id="c133de6af664cd4f011a55de6b001b19">
            <path display="inline"
                  d="M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302 H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606 l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062 l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z"></path>
          </g>
        </g>
      </svg>);
    case 'git':
      return (<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_iconCarrier">
          <path
            d="M13.4142 3.82843C12.6332 3.04738 11.3668 3.04738 10.5858 3.82843L9.91421 4.5L11.482 6.06774C11.6472 6.02356 11.8208 6 12 6C13.1046 6 14 6.89543 14 8C14 8.17916 13.9764 8.35282 13.9323 8.51804L15.982 10.5677C16.1472 10.5236 16.3208 10.5 16.5 10.5C17.6046 10.5 18.5 11.3954 18.5 12.5C18.5 13.6046 17.6046 14.5 16.5 14.5C15.3954 14.5 14.5 13.6046 14.5 12.5C14.5 12.3208 14.5236 12.1472 14.5677 11.982L13 10.4142V15.2676C13.5978 15.6134 14 16.2597 14 17C14 18.1046 13.1046 19 12 19C10.8954 19 10 18.1046 10 17C10 16.2597 10.4022 15.6134 11 15.2676V9.73244C10.4022 9.38663 10 8.74028 10 8C10 7.82084 10.0236 7.64718 10.0677 7.48196L8.5 5.91421L3.82843 10.5858C3.04738 11.3668 3.04738 12.6332 3.82843 13.4142L10.5858 20.1716C11.3668 20.9526 12.6332 20.9526 13.4142 20.1716L20.1716 13.4142C20.9526 12.6332 20.9526 11.3668 20.1716 10.5858L13.4142 3.82843ZM9.17157 2.41421C10.7337 0.852115 13.2663 0.852119 14.8284 2.41422L21.5858 9.17157C23.1479 10.7337 23.1479 13.2663 21.5858 14.8284L14.8284 21.5858C13.2663 23.1479 10.7337 23.1479 9.17157 21.5858L2.41421 14.8284C0.852115 13.2663 0.852119 10.7337 2.41422 9.17157L9.17157 2.41421Z"
            fill="#9da1a5"/>
        </g>
      </svg>);
    case 'html5':
      return (<svg fill="#9da1a5" version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                   viewBox="0 0 512 512">
        <g id="SVGRepo_iconCarrier">
          <g id="c133de6af664cd4f011a55de6b0011b2">
            <path display="inline"
                  d="M30.713,0.501L71.717,460.42l184.006,51.078l184.515-51.15L481.287,0.501H30.713z M395.754,109.646 l-2.567,28.596l-1.128,12.681h-0.187H256h-0.197h-79.599l5.155,57.761h74.444H256h115.723h15.201l-1.377,15.146l-13.255,148.506 l-0.849,9.523L256,413.854v0.012l-0.259,0.072l-115.547-32.078l-7.903-88.566h26.098h30.526l4.016,44.986l62.82,16.965l0.052-0.014 v-0.006l62.916-16.977l6.542-73.158H256h-0.197H129.771l-13.863-155.444l-1.351-15.131h141.247H256h141.104L395.754,109.646z"></path>
          </g>
        </g>
      </svg>);
    case 'jest':
      return (
        <svg fill="#9da1a5" width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_iconCarrier">
            <path
              d="M29.667 15.76c0-1.885-1.276-3.536-3.104-4.015l3.984-11.745h-19.74l3.996 11.787c-1.772 0.516-2.991 2.135-2.996 3.979 0 1.391 0.693 2.625 1.751 3.385-0.421 0.599-0.907 1.152-1.443 1.656-0.984 0.939-2.141 1.683-3.401 2.199-1.115-0.751-1.593-2.079-1.161-3.26 4.531-1.412 3.531-8.089-1.208-8.109-2.292 0.004-4.151 1.859-4.151 4.151 0 1.131 0.457 2.167 1.203 2.911-0.068 0.125-0.131 0.261-0.199 0.396-0.619 1.281-1.323 2.724-1.593 4.344-0.536 3.245 0.344 5.849 2.469 7.323 1.145 0.808 2.52 1.245 3.927 1.24 2.432 0 4.907-1.224 7.297-2.412 1.708-0.839 3.468-1.719 5.197-2.145 0.641-0.156 1.308-0.249 2.011-0.355 1.427-0.203 2.901-0.416 4.224-1.187 1.531-0.875 2.599-2.385 2.911-4.12 0.229-1.323 0-2.656-0.593-3.828 0.401-0.641 0.62-1.385 0.62-2.193zM27.86 15.76c0 1.287-1.048 2.333-2.333 2.333-2.209-0.005-3.177-2.791-1.444-4.167l0.005-0.009c0.079-0.057 0.163-0.115 0.24-0.168 0 0 0.016 0 0.016-0.009 0.036-0.021 0.072-0.047 0.109-0.068 0.011 0 0.016-0.005 0.025-0.005 0.037-0.021 0.084-0.036 0.131-0.057s0.093-0.036 0.131-0.057c0.009 0 0.015-0.005 0.025-0.005 0.037-0.011 0.079-0.031 0.115-0.036 0.005 0 0.027-0.011 0.037-0.011 0.047-0.011 0.083-0.021 0.129-0.027h0.005l0.141-0.031c0.009 0 0.025 0 0.036-0.011 0.036 0 0.073-0.011 0.115-0.011h0.041c0.047 0 0.093-0.005 0.151-0.005h0.12c0.037 0 0.068 0 0.104 0.005h0.016c0.073 0.011 0.151 0.021 0.224 0.043 1.083 0.229 1.86 1.187 1.86 2.296zM13.391 1.855h14.573l-3.344 9.864c-0.141 0.027-0.276 0.073-0.417 0.12l-3.52-7.177-3.532 7.131c-0.135-0.043-0.287-0.073-0.437-0.099zM20.016 14.953c-0.172-0.855-0.609-1.636-1.251-2.224l1.917-3.869 1.937 3.952c-0.579 0.573-0.995 1.308-1.161 2.141zM15.375 13.489c0.041-0.011 0.084-0.020 0.131-0.025h0.025c0.037-0.011 0.073-0.011 0.109-0.021h0.037c0.036 0 0.068-0.011 0.104-0.011h0.359c0.037 0 0.068 0.011 0.095 0.011 0.020 0 0.025 0 0.047 0.011 0.036 0.011 0.063 0.011 0.099 0.016 0.011 0 0.021 0 0.041 0.009l0.125 0.027h0.011c0.036 0.011 0.079 0.021 0.115 0.041 0.005 0 0.016 0.005 0.036 0.005 0.027 0.011 0.063 0.021 0.095 0.036 0.004 0 0.015 0.011 0.025 0.011 0.036 0.021 0.073 0.032 0.109 0.047h0.011c0.041 0.016 0.083 0.037 0.12 0.068h0.011c0.036 0.016 0.072 0.041 0.109 0.063 0.009 0 0.009 0.011 0.020 0.011 0.037 0.016 0.063 0.047 0.099 0.063l0.011 0.011c0.109 0.083 0.213 0.176 0.319 0.271l0.004 0.005c0.417 0.437 0.647 1.015 0.641 1.613-0.099 3.011-4.568 3.011-4.667 0-0.005-1.067 0.724-2 1.76-2.26zM6.255 13.421c1.287 0 2.333 1.052 2.333 2.339s-1.047 2.333-2.333 2.333c-1.285 0-2.333-1.047-2.333-2.333s1.048-2.339 2.333-2.339zM27.807 21.459c-0.213 1.197-0.952 2.239-2.009 2.844-1.011 0.583-2.256 0.771-3.557 0.952-0.735 0.095-1.469 0.224-2.188 0.391-1.927 0.475-3.781 1.396-5.579 2.287-2.296 1.141-4.463 2.213-6.473 2.213-1.031 0.005-2.036-0.312-2.875-0.916-2.037-1.407-1.937-4.047-1.693-5.495 0.219-1.355 0.839-2.62 1.432-3.833 0.043-0.073 0.068-0.141 0.105-0.213 0.203 0.072 0.416 0.129 0.64 0.167-0.355 1.963 0.645 3.995 2.593 4.995l0.349 0.181 0.38-0.135c1.62-0.579 3.125-1.511 4.448-2.76 0.735-0.683 1.38-1.453 1.927-2.292 0.215 0.036 0.428 0.047 0.641 0.047 1.885-0.005 3.531-1.276 4.011-3.104h1.557c0.473 1.828 2.124 3.104 4.011 3.104 0.771 0 1.484-0.213 2.093-0.573 0.24 0.693 0.317 1.417 0.187 2.141z"/>
          </g>

        </svg>);
    case 'js':
      return (
        <svg width="100%" height="100%" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_iconCarrier">
            <path fill="#9da1a5"
                  d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"/>
          </g>
        </svg>
      );
    case 'react':
      return (<svg fill="#9da1a5" width="100%" height="100%" viewBox="0 0 32 32" version="1.1"
                   xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_iconCarrier"><title>react</title>
          <path
            d="M14.313 22.211c0.55 0.025 1.112 0.043 1.681 0.043 0.575 0 1.143-0.012 1.7-0.043-0.557 0.72-1.107 1.357-1.689 1.964l0.008-0.008c-0.579-0.6-1.135-1.238-1.659-1.902l-0.041-0.054zM8.615 21.411c1.083 0.275 2.404 0.509 3.752 0.653l0.131 0.011c0.825 1.133 1.659 2.13 2.554 3.068l-0.011-0.012c-1.311 1.463-3.080 2.491-5.081 2.86l-0.055 0.008c-0.004 0-0.008 0-0.012 0-0.248 0-0.482-0.061-0.687-0.169l0.008 0.004c-0.832-0.475-1.193-2.292-0.912-4.627 0.067-0.575 0.177-1.18 0.312-1.797zM23.398 21.398c0.118 0.474 0.229 1.078 0.308 1.692l0.009 0.086c0.287 2.334-0.067 4.149-0.892 4.634-0.184 0.102-0.404 0.162-0.638 0.162-0.023 0-0.046-0.001-0.069-0.002l0.003 0c-2.053-0.375-3.821-1.396-5.129-2.841l-0.007-0.008c0.879-0.923 1.707-1.918 2.466-2.965l0.058-0.084c1.476-0.154 2.799-0.392 4.088-0.717l-0.197 0.042zM9.784 17.666c0.25 0.49 0.512 0.978 0.8 1.468q0.431 0.731 0.881 1.428c-0.868-0.127-1.706-0.287-2.507-0.482 0.225-0.787 0.507-1.602 0.825-2.416zM22.212 17.641c0.331 0.821 0.612 1.64 0.845 2.434-0.8 0.196-1.645 0.362-2.519 0.487 0.3-0.469 0.6-0.952 0.881-1.447 0.281-0.487 0.544-0.985 0.795-1.475zM7.619 12.292c0.436 1.478 0.904 2.714 1.449 3.906l-0.075-0.182c-0.466 1.005-0.927 2.234-1.305 3.499l-0.052 0.205c-0.706-0.217-1.274-0.43-1.827-0.669l0.115 0.044c-2.164-0.921-3.564-2.132-3.564-3.092s1.4-2.177 3.564-3.094c0.525-0.225 1.1-0.428 1.694-0.617zM24.358 12.287c0.605 0.187 1.18 0.396 1.718 0.622 2.164 0.925 3.564 2.134 3.564 3.094-0.006 0.96-1.406 2.174-3.57 3.093-0.525 0.225-1.1 0.427-1.693 0.616-0.44-1.483-0.908-2.718-1.451-3.912l0.076 0.188c0.464-1.004 0.926-2.233 1.303-3.498l0.053-0.206zM20.53 11.444c0.869 0.129 1.706 0.287 2.507 0.484-0.225 0.79-0.506 1.602-0.825 2.416-0.25-0.487-0.512-0.978-0.8-1.467-0.281-0.49-0.581-0.967-0.881-1.432zM11.458 11.444c-0.3 0.471-0.6 0.953-0.88 1.45-0.281 0.487-0.544 0.977-0.794 1.467-0.331-0.82-0.612-1.637-0.845-2.433 0.8-0.187 1.643-0.354 2.518-0.482zM16 11.126c0.925 0 1.846 0.042 2.752 0.116q0.761 1.091 1.478 2.324 0.697 1.2 1.272 2.432c-0.385 0.819-0.807 1.637-1.266 2.437-0.475 0.825-0.966 1.61-1.475 2.337-0.91 0.079-1.832 0.122-2.762 0.122-0.925 0-1.846-0.044-2.752-0.116-0.507-0.727-1.002-1.505-1.478-2.324q-0.697-1.2-1.272-2.432c0.379-0.821 0.807-1.641 1.266-2.442 0.475-0.825 0.966-1.607 1.475-2.334 0.91-0.080 1.832-0.122 2.762-0.122zM15.981 7.845c0.58 0.6 1.136 1.237 1.659 1.901l0.040 0.053c-0.55-0.025-1.112-0.042-1.681-0.042-0.575 0-1.143 0.012-1.7 0.042 0.556-0.72 1.106-1.357 1.689-1.964l-0.008 0.008zM9.88 4.033c2.053 0.376 3.82 1.397 5.129 2.841l0.007 0.008c-0.879 0.924-1.707 1.919-2.466 2.968l-0.058 0.084c-1.475 0.153-2.798 0.389-4.086 0.714l0.196-0.042c-0.14-0.612-0.244-1.205-0.317-1.774-0.287-2.334 0.067-4.149 0.892-4.632 0.206-0.097 0.447-0.157 0.701-0.165l0.003-0zM22.090 4.008v0.008c0.013-0 0.028-0.001 0.044-0.001 0.239 0 0.464 0.059 0.662 0.163l-0.008-0.004c0.832 0.477 1.193 2.293 0.912 4.629-0.067 0.575-0.177 1.181-0.312 1.799-1.085-0.278-2.406-0.513-3.754-0.656l-0.128-0.011c-0.826-1.134-1.66-2.131-2.555-3.070l0.012 0.012c1.311-1.46 3.077-2.488 5.074-2.859l0.056-0.009zM22.096 2.646c-2.442 0.371-4.556 1.557-6.1 3.268l-0.008 0.009c-1.555-1.71-3.669-2.888-6.051-3.245l-0.056-0.007c-0.013-0-0.029-0-0.045-0-0.491 0-0.952 0.129-1.351 0.355l0.014-0.007c-1.718 0.991-2.103 4.079-1.216 7.954-3.804 1.175-6.278 3.053-6.278 5.032 0 1.987 2.487 3.87 6.302 5.036-0.88 3.89-0.487 6.983 1.235 7.973 0.378 0.217 0.832 0.344 1.315 0.344 0.022 0 0.044-0 0.065-0.001l-0.003 0c2.442-0.371 4.556-1.558 6.1-3.27l0.008-0.009c1.555 1.711 3.669 2.889 6.051 3.246l0.056 0.007c0.015 0 0.034 0 0.052 0 0.488 0 0.947-0.128 1.344-0.351l-0.014 0.007c1.717-0.99 2.103-4.078 1.216-7.954 3.79-1.165 6.264-3.047 6.264-5.029 0-1.987-2.487-3.87-6.302-5.039 0.88-3.886 0.487-6.982-1.235-7.973-0.382-0.219-0.84-0.348-1.328-0.348-0.013 0-0.026 0-0.039 0l0.002-0zM18.787 16.005c0 1.543-1.251 2.794-2.794 2.794s-2.794-1.251-2.794-2.794c0-1.543 1.251-2.794 2.794-2.794 0.772 0 1.47 0.313 1.976 0.818v0c0.506 0.506 0.818 1.204 0.818 1.976 0 0 0 0 0 0v0z"/>
        </g>
      </svg>);
    case 'redux':
      return (<svg fill="#9da1a5" width="100%" height="100%" viewBox="0 -0.5 26 25"
                   xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier"/>
        <g id="SVGRepo_tracerCarrier"/>
        <g id="SVGRepo_iconCarrier">
          <path
            d="m17.54 16.745c.893-.089 1.585-.837 1.585-1.746 0-.036-.001-.072-.003-.108v.005c-.047-.963-.834-1.726-1.801-1.736h-.065c-.968.036-1.739.829-1.739 1.802 0 .022 0 .044.001.067v-.003c.026.473.22.897.522 1.217l-.001-.001c-1.187 2.214-3.001 3.96-5.204 5.031l-.069.03c-1.192.66-2.614 1.048-4.127 1.048-.383 0-.761-.025-1.13-.073l.044.005c-1.361-.131-2.533-.844-3.277-1.884l-.009-.014c-.537-.755-.858-1.695-.858-2.711 0-.837.218-1.623.601-2.305l-.012.024c.547-1.036 1.293-1.898 2.194-2.562l.021-.014c-.171-.453-.324-.999-.432-1.56l-.011-.066c-4.683 3.349-4.208 7.93-2.786 10.095 1.243 1.586 3.159 2.596 5.311 2.596.098 0 .195-.002.292-.006h-.014c.035.001.077.001.119.001.647 0 1.276-.075 1.88-.216l-.056.011c4.008-.734 7.29-3.317 8.974-6.814l.032-.074z"/>
          <path
            d="m23.18 12.799c-2.403-2.74-5.91-4.46-9.82-4.46-.119 0-.239.002-.357.005h.018-.538c-.283-.567-.86-.95-1.526-.95-.02 0-.039 0-.059.001h.003-.039c-.966.014-1.744.8-1.744 1.768 0 .029.001.057.002.085v-.004c.045.963.832 1.728 1.8 1.738h.079c.714-.028 1.317-.472 1.577-1.094l.004-.012h.585c2.554.003 4.924.787 6.884 2.128l-.042-.027c1.531.98 2.713 2.388 3.392 4.055l.021.058c.26.542.411 1.178.411 1.849 0 .71-.169 1.38-.47 1.972l.011-.025c-.777 1.586-2.379 2.658-4.231 2.658-.068 0-.135-.001-.202-.004h.01c-1.137-.024-2.21-.274-3.183-.707l.052.021c-.379.316-1.011.836-1.47 1.153 1.214.596 2.638.959 4.143.994h.012c.059.002.128.003.197.003 2.552 0 4.787-1.355 6.026-3.384l.018-.031c.342-.811.54-1.753.54-2.742 0-1.98-.796-3.774-2.085-5.079l.001.001-.015.032z"/>
          <path
            d="m6.844 17.316c.044.964.833 1.731 1.803 1.738h.064c.968-.033 1.741-.827 1.741-1.8 0-.99-.799-1.794-1.788-1.801h-.067c-.01-.001-.022-.001-.033-.001-.073 0-.143.011-.209.033l.005-.001c-1.07-1.741-1.703-3.85-1.703-6.107 0-.364.016-.724.049-1.079l-.003.046c.091-1.906.791-3.633 1.907-5.007l-.012.016c.991-1.071 2.387-1.753 3.944-1.803h.009c3.412-.064 4.835 4.188 4.945 5.878l1.582.473c-.368-5.181-3.59-7.901-6.671-7.901-3.132.163-5.731 2.27-6.622 5.131l-.014.052c-.438 1.262-.692 2.716-.692 4.229 0 2.588.741 5.003 2.021 7.044l-.032-.055c-.143.216-.228.481-.228.766 0 .053.003.105.009.156l-.001-.006z"/>
        </g>
      </svg>);
    case 'storybook':
      return (
        <svg fill="#9da1a5" width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier"/>
          <g id="SVGRepo_tracerCarrier"/>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M21.786 0.318l-0.161 3.615c-0.005 0.203 0.229 0.328 0.391 0.203l1.411-1.068 1.198 0.932c0.156 0.104 0.365 0 0.375-0.188l-0.135-3.677 1.776-0.135c0.922-0.063 1.708 0.672 1.708 1.599v28.802c0 0.917-0.766 1.646-1.682 1.599l-21.469-0.958c-0.833-0.036-1.505-0.708-1.531-1.547l-1-26.401c-0.052-0.885 0.62-1.646 1.505-1.693l17.599-1.109zM17.693 12.401c0 0.625 4.214 0.318 4.786-0.109 0-4.266-2.292-6.521-6.479-6.521-4.198 0-6.531 2.297-6.531 5.724 0 5.932 8 6.036 8 9.276 0 0.938-0.427 1.469-1.401 1.469-1.281 0-1.802-0.651-1.734-2.88 0-0.479-4.865-0.641-5.026 0-0.359 5.375 2.974 6.932 6.797 6.932 3.724 0 6.63-1.984 6.63-5.573 0-6.359-8.135-6.188-8.135-9.333 0-1.292 0.964-1.464 1.505-1.464 0.604 0 1.667 0.094 1.589 2.49z"/>
          </g>
        </svg>);
    case 'typescript':
      return (<svg width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23.814,8.2a4.436,4.436,0,0,1,2.229,1.284A5.868,5.868,0,0,1,26.9,10.63c.011.045-1.538,1.086-2.478,1.666-.034.023-.17-.124-.323-.351a2.02,2.02,0,0,0-1.675-1.007c-1.08-.074-1.776.492-1.771,1.436a1.307,1.307,0,0,0,.153.668c.237.492.679.786,2.064,1.386,2.551,1.1,3.645,1.822,4.321,2.851a5.171,5.171,0,0,1,.417,4.344,4.776,4.776,0,0,1-3.942,2.823,10.925,10.925,0,0,1-2.715-.028,6.548,6.548,0,0,1-3.626-1.889,6.3,6.3,0,0,1-.928-1.375,2.662,2.662,0,0,1,.328-.208c.158-.091.758-.435,1.324-.763l1.024-.594.215.312a4.784,4.784,0,0,0,1.354,1.3,3.309,3.309,0,0,0,3.467-.175,1.549,1.549,0,0,0,.2-1.979c-.277-.4-.843-.729-2.45-1.426a8.819,8.819,0,0,1-3.358-2.06,4.7,4.7,0,0,1-.979-1.782,7.134,7.134,0,0,1-.062-2.274,4.343,4.343,0,0,1,3.654-3.383A9.026,9.026,0,0,1,23.814,8.2ZM15.448,9.688l.011,1.458H10.817V24.327H7.54V11.148H2.9V9.717a14.023,14.023,0,0,1,.04-1.471c.017-.023,2.839-.034,6.262-.028l6.227.017Z"
          fill="#9da1a5"/>
      </svg>);
    case 'loading':
      return (<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                   viewBox="0 0 1024.000000 1024.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
           fill="#000000" stroke="none">
          <path
            id={'pathN'}
            d="M2952 7991 c-46 -16 -101 -42 -124 -57 -54 -38 -144 -138 -165 -185 -21 -45 -29 -48 -37 -14 -11
                         43 -65 123 -109 160 -55 47 -160 80 -225 70 -64 -10 -98 -29 -126 -73 -23 -34 -67 -179 -80 -262 -8
                          -52 -34 -328 -51 -545 -8 -104 -23 -296 -34 -425 -63 -742 -88 -1711 -56 -2150 22 -307 36 -383 88
                           -488 60 -122 173 -173 274 -125 43 20 69 60 84 133 18 80 18 81 29 485 10 382 23 670 40 886 55
                           726 84 993 146 1339 52 292 119 519 200 677 83 161 127 216 211 264 40 23 81 9 148 -52 93 -86
                           149 -227 195 -494 11 -66 22 -126 25 -132 4 -12 21 -224 29 -378 3 -38 9 -270 15 -515 23 -926
                           68 -1277 202 -1582 74 -167 165 -272 301 -343 62 -33 82 -39 139 -39 56 -1 71 3 106 27 22 15 45
                            39 51 53 15 31 34 136 73 394 120 802 256 1257 501 1676 l71 122 46 -21 c33 -15 68 -21 126 -21
                             70 -1 88 3 145 30 83 39 84 40 336 292 215 214 233 236 252 305 22 80 -43 209 -127 252 -45 22
                             -62 25 -158 25 -147 0 -294 -35 -423 -100 -81 -41 -187 -116 -246 -175 -16 -16 -60 -58 -96 -92
                              -221 -208 -495 -663 -650 -1078 -69 -183 -140 -417 -156 -512 -10 -56 -20 -105 -23 -108 -10
                              -9 -19 175 -24 510 -11 661 -20 841 -61 1198 -35 306 -85 498 -181 694 -29 62 -69 130 -88 153
                               -18 22 -35 43 -37 47 -9 22 -122 112 -174 140 -138 73 -242 83 -382 34z"
          />
          <path
            id={'pathI'}
            d="M7018 8004 c-10 -3 -18 -10 -18 -16 0 -5 -9 -22 -19 -37 -10 -14 -33 -78 -51 -141 -18 -63 -38 -135 -46 -160 -33 -110 -88 -491 -119 -820 -8 -91 -19 -210 -25 -265 -55 -557 -69 -914 -65 -1630 3 -625 17 -884 60 -1130 52 -302 109 -405 222 -405 35 0 49 6 82 38 42 40 52 67 77 205 17 98 19 635 4 1092 -12 363 -12 438 -1 431 4 -3 11 -29 14 -58 5 -52 100 -360 156 -508 114 -302 212 -520 339 -756 107 -198 169 -283 338 -456 134 -138 268 -226 432 -282 158 -55 253 -70 442 -70 151 0 174 2 264 28 222 62 363 163 436 311 60 121 97 349 86 529 -20 332 -129 564 -303 643 -68 31 -194 43 -242 23 -42 -17 -67 -81 -48 -118 8 -15 41 -79 75 -142 147 -278 202 -657 122 -837 -48 -108 -160 -201 -275 -230 -214 -53 -483 109 -746 447 -139 178 -341 550 -486 891 -121 285 -393 1022 -422 1144 l-12 50 83 85 c46 47 86 84 90 83 4 -2 10 5 13 15 4 9 41 48 84 87 86 78 486 463 625 601 50 50 103 98 119 108 15 10 27 22 27 26 0 5 30 37 67 72 73 69 556 542 610 598 44 46 166 206 187 247 17 33 20 70 10 97 -9 22 -78 39 -133 31 -49 -7 -143 -70 -311 -210 -39 -33 -91 -76 -114 -95 -24 -19 -88 -72 -142 -116 -54 -45 -167 -142 -250 -215 -83 -74 -195 -170 -249 -214 -124 -100 -302 -253 -375 -321 -30 -28 -98 -89 -150 -135 -52 -46 -135 -123 -184 -172 -49 -48 -89 -87 -91 -85 -1 2 2 93 6 203 7 197 20 374 60 810 24 266 34 485 25 547 -9 57 -46 115 -97 152 -32 22 -53 29 -102 32 -34 1 -70 1 -79 -2z"
            // fill={'red'}
          />
          <path
            id={'pathK'}
            d="M5714 6569 c-39 -11 -52 -40 -69 -149 -7 -47 -25 -152 -39 -235 -44 -245 -84 -674 -112 -1185 -13 -234 -15 -395 -10 -690 8 -542 21 -697 73 -854 50 -154 181 -246 287 -202 83 35 106 183 136 871 16 372 24 1982 11 2100 -18 154 -36 208 -92 269 -45 49 -56 55 -143 81 -6 2 -25 -1 -42 -6z"
            // fill={'red'}
          />
        </g>
      </svg>);
    default:
      return <svg></svg>;
  }
};
