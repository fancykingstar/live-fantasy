import React from 'react'

function PIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props?.size || "38"} height={props?.size || "38"} viewBox="0 0 38 38" style={{height: 'auto'}} {...props}>
            <g xmlns="http://www.w3.org/2000/svg" fill="none" fillRule="evenodd">
            <g fill={props?.fill || "#F2F2F2"} fillRule="nonzero">
                <g>
                    <g>
                        <g>
                            <path d="M33.11 6.89c-7.229-7.229-18.991-7.229-26.22 0-3.034 3.034-4.932 7.053-5.344 11.316-.406 4.205.64 8.455 2.949 11.966.337.512 1.025.654 1.538.318.512-.337.654-1.026.317-1.538C2.125 22.526 3.013 13.907 8.46 8.46c6.363-6.363 16.717-6.363 23.08 0 6.363 6.363 6.363 16.717 0 23.08-5.517 5.517-14.205 6.357-20.66 1.998-.508-.343-1.198-.21-1.54.299-.344.508-.21 1.198.298 1.541 3.142 2.122 6.75 3.16 10.341 3.16 4.79 0 9.55-1.847 13.131-5.428 3.502-3.502 5.43-8.158 5.43-13.11s-1.928-9.608-5.43-13.11z" transform="translate(-270 -245) translate(57 222) translate(212 21) translate(0 1)"/>
                            <path d="M8.468 31.547l-.008-.007c-.433-.434-1.133-.43-1.566.004-.434.433-.43 1.14.004 1.573.216.217.5.326.785.326.284 0 .568-.109.785-.326.433-.433.433-1.136 0-1.57zM18.098 22.1v6.048h-3.283V11.852h5.984c1.94 0 3.403.461 4.39 1.385.985.923 1.478 2.177 1.478 3.762 0 1.554-.509 2.793-1.525 3.717-1.017.923-2.465 1.385-4.343 1.385h-2.701zm2.34-2.84c2.177 0 3.266-.738 3.266-2.213 0-.723-.255-1.276-.764-1.659-.51-.382-1.343-.573-2.502-.573h-2.66v4.444h2.66z" transform="translate(-270 -245) translate(57 222) translate(212 21) translate(0 1)"/>
                            <path d="M20 5.678C12.103 5.678 5.678 12.103 5.678 20c0 7.897 6.425 14.322 14.322 14.322 7.897 0 14.322-6.425 14.322-14.322 0-7.897-6.425-14.322-14.322-14.322zm0 26.423c-6.673 0-12.101-5.428-12.101-12.101 0-6.673 5.428-12.101 12.101-12.101 6.673 0 12.101 5.428 12.101 12.101 0 6.673-5.428 12.101-12.101 12.101z" transform="translate(-270 -245) translate(57 222) translate(212 21) translate(0 1)"/>
                        </g>
                    </g>
                </g>
            </g>
        </g>
        </svg>
    )
}

export default PIcon
