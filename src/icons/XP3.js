import React from 'react'
import PropTypes from 'prop-types'

function XP3(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width={props?.size || "40"}
            height={props?.size || "40"}
            viewBox="0 0 40 40"
            style={{ height: 'auto' }}
        >
            <defs>
                <linearGradient id="pxyr1f9sya" x1="35.019%" x2="67.721%" y1="39.758%" y2="84.553%">
                    <stop offset="0%" stopColor="#FB6E00" />
                    <stop offset="100%" stopColor="#FA3800" />
                </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
                <g>
                    <g>
                        <g>
                            <g>
                                <g transform="translate(-305 -938) translate(174 919) translate(19 19) translate(112)">
                                    <circle cx="20.229" cy="20.183" r="19.412" fill="url(#pxyr1f9sya)" />
                                    <path fill="#F2F2F2" fillRule="nonzero" d="M27.176 27.161c1.15 0 2.135-.203 2.956-.61.82-.406 1.445-.973 1.874-1.701.43-.729.644-1.56.644-2.496 0-1.947-1.05-3.258-3.151-3.933v-.115c.813-.169 1.491-.575 2.036-1.219.544-.644.816-1.495.816-2.553 0-.859-.21-1.63-.633-2.312-.421-.682-1.038-1.218-1.851-1.61-.813-.39-1.786-.586-2.921-.586-1.794 0-3.19.46-4.186 1.38-.997.92-1.533 2.239-1.61 3.956h3.841c.046-.629.23-1.13.552-1.507.322-.375.759-.563 1.311-.563.506 0 .909.15 1.207.449.3.299.449.724.449 1.276 0 1.273-.866 1.894-2.599 1.863h-.713v3.197h.736c1.932 0 2.898.667 2.898 2.001 0 .537-.165.974-.495 1.311-.33.337-.778.506-1.345.506-.705 0-1.242-.207-1.61-.621-.368-.414-.567-.981-.598-1.702h-3.841c.092 1.886.686 3.289 1.782 4.209 1.097.92 2.58 1.38 4.451 1.38z" />
                                    <g fillRule="nonzero">
                                        <g>
                                            <path fill="#ECECEC" d="M12.004 9.066L8.823 5.957l3.18-3.108c.121-.118.19-.278.19-.445 0-.166-.069-.326-.19-.444L10.187.184c-.25-.245-.658-.245-.909 0l-3.18 3.109L2.914.184c-.251-.245-.658-.245-.909 0L.188 1.96c-.25.246-.25.643 0 .889L3.37 5.958.19 9.066c-.252.246-.252.643 0 .888l1.817 1.777c.12.118.284.184.455.184.17 0 .334-.066.454-.184l3.181-3.109 3.181 3.109c.12.118.284.184.455.184.17 0 .334-.066.454-.184l1.818-1.777c.25-.245.25-.642 0-.888z" transform="translate(6.411 13.355) translate(0 .533)" />
                                            <path fill="#FFF" d="M.188 9.955l1.818 1.776c.12.118.284.184.455.184.17 0 .333-.066.454-.184l3.181-3.109v-5.33L2.915.185c-.251-.245-.658-.245-.909 0L.188 1.96c-.25.246-.25.643 0 .889L3.37 5.958.19 9.066c-.252.246-.252.643 0 .889z" transform="translate(6.411 13.355) translate(0 .533)" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

XP3.propTypes = {
    size: PropTypes.number
}

export default XP3
