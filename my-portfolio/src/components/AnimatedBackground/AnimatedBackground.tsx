import { Box } from "@mui/material";

export const AnimatedBackground = () => {
  return (
    <Box>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern
            id="circles"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="10"
              cy="10"
              r="8"
              fill="none"
              stroke="#1976d2"
              stroke-width="2"
            >
              <animate
                attributeName="r"
                from="5"
                to="8"
                dur="1.5s"
                begin="0s"
                repeatCount="indefinite"
                fill="freeze"
              />
            </circle>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circles)" />
      </svg>
    </Box>
  );
};
