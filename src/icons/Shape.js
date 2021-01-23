import React from 'react'
import PropTypes from 'prop-types'

function ShapeIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props?.size || "100"} height={props?.size || "100"} viewBox="0 0 100 100" style={{height: 'auto'}} {...props}>
    <defs>
        <filter id="o9o1zkxt2a" width="179.4%" height="179.4%" x="-39.7%" y="-30.9%" filterUnits="objectBoundingBox">
            <feOffset dy="6" in="SourceAlpha" result="shadowOffsetOuter1"/>
            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="8"/>
            <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
        </filter>
        <path id="tbb1hix1eb" d="M57.983 32.898c-1.364 0-2.647.532-3.614 1.5-.55.548-1.279.85-2.055.85H48.1c-.507 0-.948.346-1.07.839-.002.01-.146.577-.534 1.47-1.132-.202-1.994-1.192-1.994-2.382V33.23c2.894-2.77 4.7-6.668 4.7-10.98V15.2C49.2 6.819 42.38 0 34 0c-8.382 0-15.2 6.82-15.2 15.2v7.05c0 4.313 1.804 8.212 4.699 10.98v1.945c0 1.188-.86 2.178-1.992 2.382-.387-.892-.534-1.46-.537-1.47-.12-.493-.562-.839-1.07-.839h-4.215c-.776 0-1.505-.302-2.057-.854-.964-.964-2.247-1.496-3.612-1.496C4.493 32.898 0 37.392 0 42.915v5.538c0 1.616.86 3.136 2.246 3.967l.104.063v10.89C2.35 65.925 4.425 68 6.976 68h54.048c2.55 0 4.626-2.076 4.626-4.626V52.483l.104-.062C67.139 51.589 68 50.069 68 48.453v-5.538c0-5.523-4.494-10.017-10.017-10.017zm-17.711.772l.423-3.877c1.975-.372 3.589-.888 4.858-1.405-1.197 2.255-3.042 4.102-5.281 5.282zm-18.86-8.588c-.007-.014-.016-.026-.025-.04-.135-.63-.223-1.276-.26-1.935.14.082.283.16.433.229 1.396.637 3.347 1.342 5.877 1.845l.291 2.547c-2.24-.457-3.967-1.081-5.209-1.648-.467-.212-.85-.558-1.106-.998zm25.2-.04l-.025.04c-.257.44-.64.786-1.106.998-1.242.567-2.969 1.191-5.21 1.648l.292-2.547c2.53-.502 4.48-1.208 5.877-1.845.15-.069.294-.147.434-.23-.039.66-.126 1.306-.261 1.936zM34.99 35.65v-5.059c1.17-.031 2.27-.11 3.301-.222l-.548 4.785c-.885.25-1.806.419-2.753.496zm0-7.262v-2.377c1.185-.034 2.285-.128 3.301-.263l-.258 2.396c-.935.125-1.949.21-3.043.244zm11.884-9.126c0 .945-.534 1.81-1.36 2.207-2.19 1.048-5.964 2.298-11.514 2.298-5.55 0-9.325-1.25-11.513-2.298-.827-.396-1.36-1.262-1.36-2.207v-.312c0-1.348 1.076-2.445 2.4-2.445h20.947c1.323 0 2.4 1.097 2.4 2.445v.312zm-17.165 6.486c1.016.135 2.116.229 3.3.263v2.377c-1.093-.033-2.107-.12-3.042-.244l-.258-2.396zm3.3 4.843v5.06c-.946-.078-1.867-.246-2.752-.497l-.548-4.785c1.03.113 2.13.19 3.3.222zm.991 6.89c1.252 0 2.468-.177 3.631-.51-.863 1.217-2.182 1.98-3.631 1.98-1.45 0-2.768-.763-3.631-1.98 1.163.333 2.379.51 3.631.51zm-1.09-35.5l-.002.026v8.232c0 .61.49 1.103 1.092 1.103.603 0 1.092-.494 1.092-1.103V2.007l-.002-.026c6.459.549 11.576 5.931 11.784 12.543-.698-.433-1.517-.683-2.394-.683H23.52c-.877 0-1.696.25-2.394.683.208-6.612 5.325-11.994 11.784-12.543zM22.447 28.388c1.27.517 2.884 1.033 4.858 1.405l.423 3.877c-2.238-1.18-4.084-3.027-5.281-5.282zm4.864 7.503c.833 2.958 3.558 5.05 6.69 5.05 3.13 0 5.855-2.092 6.688-5.05.547-.27 1.076-.57 1.583-.9v.192c0 .85.234 1.647.64 2.33-1.32 2.806-4.924 4.74-8.912 4.74-3.985 0-7.592-1.934-8.913-4.74.407-.683.641-1.48.641-2.33v-.193c.508.33 1.036.632 1.583.9zm-3.97 3.06C25.256 42.29 29.371 44.46 34 44.46c4.63 0 8.743-2.17 10.659-5.509.28.17.58.311.894.42-.259.437-.556.898-.896 1.373-2.546 3.553-6.13 6.058-10.657 7.45-4.49-1.38-8.053-3.857-10.597-7.365-.365-.504-.682-.994-.956-1.46.314-.107.613-.247.893-.418zm30.977 21.436v5.632h-7.647c-1.526-5.492-6.576-9.39-12.341-9.39s-10.815 3.898-12.341 9.39h-7.647v-5.632c0-1.253-.413-2.46-1.138-3.444l10.932-12.05c2.163 2.146 5.342 4.366 9.89 5.676.199.057.41.057.608 0 4.548-1.31 7.728-3.53 9.89-5.676l10.932 12.05c-.725.985-1.138 2.191-1.138 3.444zM44.233 66.02H23.767c1.476-4.279 5.58-7.262 10.233-7.262 4.654 0 8.757 2.983 10.233 7.262zM2.641 48.135v-5.453c0-4.241 3.456-7.692 7.705-7.692.765 0 1.484.298 2.028.84.952.95 2.217 1.474 3.562 1.474h3.362c.352.982 1.105 2.733 2.525 4.67.191.26.4.53.624.805L11.504 54.796c-.019-.011-.036-.024-.054-.035L3.8 50.181c-.716-.43-1.16-1.213-1.16-2.046zm1.98 15.483v-9.482l5.5 3.24c1.087.64 1.762 1.812 1.762 3.058v5.585H7.067c-1.349 0-2.446-1.077-2.446-2.4zm58.758 0c0 1.324-1.097 2.401-2.446 2.401h-4.816v-5.585c0-1.246.675-2.417 1.762-3.058l5.5-3.24v9.482zm1.98-15.483c0 .833-.444 1.617-1.16 2.045l-7.649 4.581c-.018.011-.035.024-.054.035L45.553 42.78c.225-.275.433-.544.624-.805 1.42-1.937 2.173-3.688 2.525-4.67h3.362c1.345 0 2.61-.523 3.564-1.476.542-.54 1.26-.838 2.026-.838 4.249 0 7.705 3.45 7.705 7.692v5.453z"/>
    </defs>
    <g fill="none" fill-rule="evenodd">
        <g fill-rule="nonzero">
            <g>
                <g>
                    <g>
                        <g transform="translate(-746 -962) translate(250 829) translate(40 112) translate(440) translate(32 31)">
                            <use fill="#000" filter="url(#o9o1zkxt2a)" />
                            <use fill="#FB6E00" />
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
    )
}

ShapeIcon.propTypes = {
    size: PropTypes.number
}

export default ShapeIcon

