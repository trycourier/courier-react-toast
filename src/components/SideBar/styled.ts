import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  border-left: 1px solid #CBD5E0;
  padding: 0;
  height: 100%;
  justify-content: center;
  margin-left: 28px;
  > :nth-child(2) {
    border-top: 1px solid #CBD5E0;
  }
`;

export const Button = styled.a`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  text-decoration: none;
  :visited  {
    color: ${props => props.color};
  }
`;