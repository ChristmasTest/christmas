"use client";

import Image from "next/image";
import styled from "styled-components";
import { theme } from "styles/theme";

interface Answer {
  color: "red" | "green";
  text: string;
  onClick: any;
}

function Answer({ color, text, onClick }: Answer) {
  const ButtonImg: { [State in Answer["color"]]: string } = {
    red: theme.btnColor.red,
    green: theme.btnColor.green,
  };

  return (
    <StyledWrapper onClick={onClick}>
      <Image fill src={ButtonImg[color]} alt="답변 버튼" />
      <p>{text}</p>
    </StyledWrapper>
  );
}

export default Answer;

const StyledWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 109px;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    width: 80%;
    line-height: 1.5;
    word-break: keep-all;
    text-align: center;
  }

  @media (max-width: 420px) {
    width: 300px;
  }
`;
