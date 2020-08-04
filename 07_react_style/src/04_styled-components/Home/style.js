import Styled from "styled-components";

export const HomeWrapped = Styled.div`
  font-size: 30px;
  color: red;

  .title {
    text-decoration: underline;
  }

  .content {
    /* 应用主题 */
    color: ${props => props.theme.themeColor}
  }
`;