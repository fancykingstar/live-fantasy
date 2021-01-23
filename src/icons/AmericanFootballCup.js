import React from 'react';
import PropTypes from 'prop-types';

function AmericanFootballCup(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props?.size || "132"} height={props?.size || "132"} viewBox="0 0 132 132" style={{height: 'auto'}} {...props}>
            <defs>
        <filter id="l8dmhvlmma" width="238.7%" height="226.5%" x="-69.4%" y="-63.2%" filterUnits="objectBoundingBox">
            <feOffset dy="6" in="SourceAlpha" result="shadowOffsetOuter1"/>
            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="8"/>
            <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
            <feMerge>
                <feMergeNode in="shadowMatrixOuter1"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>
    <g fill="none" fill-rule="evenodd">
        <g fill="#FB6E00" fill-rule="nonzero">
            <g>
                <g>
                    <g>
                        <g filter="url(#l8dmhvlmma)" transform="translate(-288 -1090) translate(250 829) translate(40 112) translate(0 150) translate(30 31)">
                            <path d="M58.49 9.4h-8.442V6.722c1.388-.46 2.39-1.752 2.39-3.27 0-1.903-1.574-3.451-3.51-3.451H13.072c-1.936 0-3.51 1.548-3.51 3.451 0 1.518 1.002 2.81 2.39 3.27V9.4H3.51C1.575 9.4 0 10.948 0 12.852v7.05c0 8.306 6.813 15.077 15.235 15.197 2.289 3.312 5.628 5.867 9.543 7.2-.544.609-.874 1.405-.874 2.276 0 1.442.905 2.68 2.186 3.195-1.346 1.27-2.186 3.055-2.186 5.03 0 2.024.865 3.895 2.39 5.219v.655c0 1.337-1.106 2.424-2.465 2.424-2.595 0-4.706 2.075-4.706 4.626V66.9c0 .609.502 1.102 1.12 1.102h21.514c.618 0 1.12-.493 1.12-1.102v-1.175c0-2.55-2.111-4.626-4.706-4.626-1.36 0-2.465-1.087-2.465-2.424v-.655c1.525-1.324 2.39-3.195 2.39-5.22 0-1.974-.84-3.758-2.186-5.029 1.281-.515 2.186-1.753 2.186-3.195 0-.871-.33-1.667-.874-2.275 3.915-1.334 7.254-3.89 9.543-7.2C55.187 34.978 62 28.207 62 19.9v-7.05c0-1.903-1.575-3.45-3.51-3.45zM12.941 2.408h36.116c.705 0 1.279.54 1.279 1.203 0 .664-.574 1.204-1.28 1.204H12.943c-.705 0-1.279-.54-1.279-1.204 0-.663.574-1.203 1.28-1.203zM2.455 19.678v-7.004c0-.683.571-1.24 1.273-1.24h8.458v12.912c0 2.922.696 5.687 1.933 8.15-6.561-.766-11.664-6.222-11.664-12.819zm35.626 43.41c1.342 0 2.434 1.091 2.434 2.432v.074h-19.03v-.074c0-1.341 1.092-2.432 2.434-2.432 2.562 0 4.647-2.082 4.647-4.642v-.074h4.868v.074c0 2.56 2.084 4.642 4.647 4.642zm-4.163-6.521h-6.45c-1.075-.914-1.686-2.214-1.686-3.621 0-2.649 2.203-4.804 4.911-4.804 2.708 0 4.911 2.155 4.911 4.804 0 1.407-.61 2.707-1.686 3.621zm.402-13.239c.708 0 1.284.54 1.284 1.204 0 .663-.576 1.203-1.284 1.203h-7.253c-.709 0-1.285-.54-1.285-1.203 0-.664.576-1.204 1.285-1.204h7.253zM31 40.921c-9.308 0-16.881-7.43-16.881-16.562V6.62H47.88v17.74c0 9.131-7.573 16.561-16.881 16.561zm28.545-21.244c0 6.597-5.103 12.053-11.664 12.82 1.237-2.464 1.933-5.23 1.933-8.151V11.434h8.458c.702 0 1.273.557 1.273 1.24v7.003z"/>
                            <path d="M44.04 16.564c-.624 0-1.13.492-1.13 1.1V24.7c0 3.525-1.609 6.84-4.414 9.097-.481.387-.549 1.08-.15 1.548.223.263.546.399.871.399.254 0 .51-.083.72-.253 3.327-2.675 5.234-6.608 5.234-10.79v-7.037c0-.608-.506-1.1-1.13-1.1zM43.843 9.59c-.734 0-1.329.472-1.329 1.054v2.25c0 .583.595 1.055 1.329 1.055s1.328-.472 1.328-1.055v-2.25c0-.582-.594-1.054-1.328-1.054z"/>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
        </svg>
    )
}

AmericanFootballCup.propTypes = {
    size: PropTypes.number
}

export default AmericanFootballCup
