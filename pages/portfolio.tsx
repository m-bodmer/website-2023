import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { portfolioItems } from '../data/portfolio';

const LayoutContainer = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; // Align top now that content is longer
  align-items: center;
  background-color: #f2f1f0;
  color: #103240;
  padding-top: 4rem; // Add consistent top padding
`;

const MainContainer = styled.main`
  padding: 1rem 0 5rem 0; // Adjust padding as needed
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; // Align content to top
  align-items: center;
  width: 100%; // Take full width
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 2rem 0;
  width: 90%;
  max-width: 850px;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: #e0e0e0;
  transform: translateX(-50%);
  z-index: 0;

  @media (max-width: 768px) {
    left: 20px;
  }
`;

interface TimelineItemProps {
  isEven: boolean;
}

const TimelineItemContainer = styled.div<TimelineItemProps>`
  display: flex;
  justify-content: ${props => (props.isEven ? 'flex-end' : 'flex-start')};
  position: relative;
  width: 100%;
  margin-bottom: 40px;
  padding: ${props => (props.isEven ? '0 55% 0 5%' : '0 5% 0 55%')};

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 0 10px 0 50px;
  }
`;

const TimelinePoint = styled.div`
  width: 16px;
  height: 16px;
  background-color: #103240;
  border: 3px solid white;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const HighlightsSection = styled.div`
  padding: 15px 25px 20px 25px;
  background-color: #f8f9fa;
  border-top: 1px solid #eee;
`;

const HighlightsTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
  margin-top: 0;
  margin-bottom: 10px;
`;

const HighlightList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

const HighlightItem = styled.li`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 8px;
  position: relative;
  padding-left: 18px;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '•';
    color: #103240;
    font-weight: bold;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const TimelineContent = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer; // Optional: make cards clickable later?
  z-index: 5;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
     width: 100%;
     max-width: none;
  }
`;


const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #f0f0f0; // Placeholder bg

  // Ensure Image takes block space
  & > span {
    display: block !important;
  }
`;

const TitleOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 15px 20px;
  color: white;
  z-index: 4;
`;

const Title = styled.h3`
  font-size: 1.1rem;
  margin: 0;
  font-weight: 500;
  line-height: 1.3;
`;


export default function Home() {
  return (
    <LayoutContainer>
      <Head>
        <title>Marc Bodmer | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContainer>

        {/* Render the Timeline */}
        <TimelineContainer
        >
          <TimelineLine />

          {portfolioItems.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <TimelineItemContainer key={item.id} isEven={isEven}>
                <TimelinePoint />
                <TimelineContent
                >
                  <ImageContainer>
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      layout="responsive"
                      width={600}
                      height={350}
                      objectFit="cover"
                      priority={index < 2}
                    />
                    <TitleOverlay>
                      <Title>{item.title}</Title>
                    </TitleOverlay>
                  </ImageContainer>

                  {item.highlights && item.highlights.length > 0 && (
                    <HighlightsSection>
                      <HighlightsTitle>Highlights include:</HighlightsTitle>
                      <HighlightList>
                        {item.highlights.map((highlight, hIndex) => (
                          <HighlightItem key={hIndex}>{highlight}</HighlightItem>
                        ))}
                      </HighlightList>
                    </HighlightsSection>
                  )}
                </TimelineContent>
              </TimelineItemContainer>
            );
          })}
        </TimelineContainer>

      </MainContainer>
    </LayoutContainer>
  );
}