/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { breakpointMax, breakpointMin } from "styles/mixins";

const mediaQuery = (theme) => `
  ${breakpointMax("sm")} {
    padding: 0 1rem;
  }
  ${breakpointMin("sm")} {
    max-width: 540px;
  }
  ${breakpointMin("md")} {
    max-width: 720px;
  }
  ${breakpointMin("lg")} {
    max-width: 960px;
  }
  ${breakpointMin("xl")} {
    max-width: 1140px;
  }
`;

const Container = ({ children, ...rest }) => {
  return (
    <div
      css={css`
        padding: 0 1rem;
        margin-left: auto;
        margin-right: auto;
        ${mediaQuery()}
      `}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Container;
