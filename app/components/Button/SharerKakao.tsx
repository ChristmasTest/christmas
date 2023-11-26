"use client";
import Image from "next/image";
import { useEffect } from "react";
import kakaoLogo from "@/app/assets/icons/kakaoLogo.svg";
import styled from "styled-components";

declare global {
  interface Window {
    Kakao: any;
  }
}

function SharerKaKao() {
  const initializeKakao = (script: HTMLScriptElement) => {
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.onload = () => {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    };
    document.body.appendChild(script);
  };

  const sharedKakao = () => {
    if (window.Kakao.isInitialized()) {
      window.Kakao.Share.sendCustom({
        templateId: 101197,
        templateArgs: {
          character: "크리스마스 문어",
        },
      });
    } else {
      console.error("kakao script error");
    }
  };

  useEffect(() => {
    const kakaoScript = document.createElement("script");
    initializeKakao(kakaoScript);
    return () => {
      document.body.removeChild(kakaoScript);
    };
  }, []);

  return (
    <>
      <StyledWrapper onClick={sharedKakao}>
        <Image src={kakaoLogo} alt="카카오톡 공유" />
      </StyledWrapper>
    </>
  );
}

export default SharerKaKao;

const StyledWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffeb00;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;