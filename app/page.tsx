"use client";

import Footer from "components/Footer";
import SnowManTree from "assets/images/SnowManAndTree.png";
import StartButton from "assets/images/Start.png";
import TitleFrame from "assets/images/TitleFrame.png";
import JingleBell from "components/Button/JingleBell";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";
import { SpringEffect } from "styles/motion/SpringEffect";
import { init } from "app/test/TestResult";
import { Suspense } from "react";
import Loading from "app/loading";

function Home() {
  init();
  return (
    <StyledWrapper>
      <JingleBell />
      <StyledTitleFrame src={TitleFrame.src}>
        <StyledTitle>
          <StyledTopTitle>
            <StyledGreen>크리스마스</StyledGreen>에
          </StyledTopTitle>
          <br />
          뭐하지?
        </StyledTitle>
      </StyledTitleFrame>
      <LazyMotion features={domAnimation}>
        <m.div initial="initial" animate="animate" variants={SpringEffect}>
          <Suspense fallback={<Loading />}>
            <Link href="/test?page=0">
              <Image
                width={170}
                height={60}
                src={StartButton.src}
                alt="시작 버튼"
              />
            </Link>
          </Suspense>
        </m.div>
      </LazyMotion>

      <StyledSnowManTree src={SnowManTree} alt="눈사람과 트리" priority />
      <Footer />
    </StyledWrapper>
  );
}

export default Home;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const StyledTitleFrame = styled.div<{ src: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 270px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 95% 95%;
  margin-bottom: 50px;

  @media (max-width: 420px) {
    margin-bottom: 0;
  }
`;

const StyledTitle = styled.div`
  position: absolute;
  width: 288px;
  font-size: 3rem;
  font-weight: 700;
  text-align: right;
  color: #fff;

  @media (max-width: 420px) {
    font-size: 2.6rem;
    width: 275.2px;
  }
`;

const StyledTopTitle = styled.div`
  position: absolute;
  display: flex;
  right: 0;
`;

const StyledGreen = styled.div`
  color: #468259;
`;

const StyledSnowManTree = styled(Image)`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 46px;

  @media (max-width: 420px) {
    margin-bottom: 25px;
  }
`;
