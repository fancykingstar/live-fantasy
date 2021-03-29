import React from "react";
import PropTypes from "prop-types";

function XP1_5_1(props) {
  const { size = 0 } = props || {};
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "24"}
      height={size || "24"}
      viewBox="0 0 24 24"
      style={{ height: "auto" }}
      {...props}
    >
      <defs>
        <linearGradient
          id="q3usv76uya"
          x1="35.019%"
          x2="67.721%"
          y1="39.758%"
          y2="84.553%"
        >
          <stop offset="0%" stopColor="#688FBD" />
          <stop offset="100%" stopColor="#30598A" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g transform="translate(-957 -1507) translate(957 516) translate(0 991)">
              <circle cx="12" cy="12" r="12" fill="url(#q3usv76uya)" />
              <g fillRule="nonzero">
                <g>
                  <path
                    fill="#ECECEC"
                    d="M7.312 5.651L5.374 3.713l1.938-1.937c.074-.074.115-.173.115-.277 0-.104-.041-.204-.115-.277L6.205.115c-.153-.153-.4-.153-.554 0L3.714 2.052 1.776.115c-.153-.153-.401-.153-.554 0L.115 1.222c-.153.153-.153.4 0 .554l1.938 1.938L.115 5.65c-.153.153-.153.401 0 .554l1.107 1.107c.073.074.173.115.277.115.104 0 .203-.041.277-.115l1.938-1.938L5.65 7.312c.074.074.173.115.277.115.104 0 .204-.041.277-.115l1.107-1.107c.153-.153.153-.4 0-.554z"
                    transform="translate(5.945 2.685) translate(2.68 .19)"
                  />
                  <path
                    fill="#FFF"
                    d="M.115 6.205l1.107 1.107c.073.074.173.115.277.115.104 0 .203-.041.277-.115l1.937-1.938V2.052L1.776.115c-.153-.153-.401-.153-.554 0L.115 1.222c-.153.153-.153.4 0 .554l1.938 1.938L.115 5.65c-.153.153-.153.401 0 .554z"
                    transform="translate(5.945 2.685) translate(2.68 .19)"
                  />
                </g>
                <path
                  fill="#FFF"
                  d="M3.355 16.92V9.568H.38v1.664h1.102v5.688h1.872zm2.756 0v-1.778H4.27v1.778h1.84zm3.962.021c.818 0 1.453-.234 1.903-.702.45-.468.676-1.104.676-1.908 0-.444-.08-.85-.239-1.217-.16-.367-.406-.66-.738-.879-.333-.218-.746-.327-1.238-.327-.305 0-.588.047-.848.14-.26.094-.462.224-.608.39v-1.487h3.307v-1.56H7.37v4.451h1.726c.056-.16.16-.29.312-.39.153-.1.344-.15.572-.15.299 0 .53.086.697.26.167.173.25.419.25.738 0 .333-.078.6-.234.8-.156.202-.39.302-.702.302-.27 0-.484-.076-.64-.229-.156-.152-.251-.346-.286-.582H7.328c.013.464.131.874.353 1.227.222.354.537.63.946.827.41.197.891.296 1.446.296z"
                  transform="translate(5.945 2.685)"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

XP1_5_1.propTypes = {
  size: PropTypes.number,
};

export default XP1_5_1;
