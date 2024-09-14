import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

// Import Google Font
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const Container = styled.div`
  background-color: #000; /* Black background */
  color: #fff; /* White text */
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif; /* Custom font */
  font-size: 3.5rem;
  font-weight: 700; /* Bold */
  margin-bottom: 1rem;
  padding: 0 570px 0 0;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 835px;
`;

const Tab = styled.label`
  background-color: ${(props) =>
    props.isActive ? props.activeColor : props.bgColor || "#ffd700"};
  height: 50px;
  border-radius: 15px 180px 0 0;
  clip-path: ellipse(100% 100% at 50% 50%);
  font-weight: bold;
  display: flex;
  color: #000;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-grow: 1;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: -10px;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#ffa500"};
  }

  &:first-child {
    margin-left: 0; /* Ensure the first tab does not have a negative margin */
  }
`;

const ContentContainer = styled.div`
  background-color: #ffd700;
  padding: 2rem;
  border-radius: 0 0 15px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  width: 835px;
  box-sizing: border-box;
  overflow-y: auto;
`;

const TextContent = styled.div`
  max-width: 80%;
  text-align: left;
`;

const tabs = [
  {
    id: 1,
    label: "Tailored Solutions",
    content: (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img
          src="/engine.png"
          alt="Tailored Solutions"
          style={{ width: "350px", marginBottom: "1rem" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Tailored Solutions</h1>
          <p>
            We understand that every project is unique. Our approach is
            customized to your specific needs, ensuring the best outcomes for
            your brand.
          </p>
        </div>
      </div>
    ),
    bgColor: "#ffd700",
  },
  {
    id: 2,
    label: "Expertise and Innovation",
    content: (
      <>
        <h1>Expertise and Innovation</h1>
        <p>
          With a focus on UI/UX design and website development, our team
          combines industry knowledge with the latest tools to create
          cutting-edge solutions.
        </p>
      </>
    ),
    bgColor: "#6a5acd",
  },
  {
    id: 3,
    label: "Fast, Reliable Delivery",
    content: (
      <>
        <h1>Fast, Reliable Delivery</h1>
        <p>
          We prioritize timely delivery without compromising quality, ensuring
          your project is completed on schedule and exceeds expectations.
        </p>
      </>
    ),
    bgColor: "#ff69b4",
  },
  {
    id: 4,
    label: "Full Transparency",
    content: (
      <>
        <h1>Full Transparency</h1>
        <p>
          We keep you informed at every step, maintaining open communication to
          ensure the project reflects your vision.
        </p>
      </>
    ),
    bgColor: "#ffa500",
  },
  {
    id: 5,
    label: "Long-term Support",
    content: (
      <>
        <h1>Long-term Support</h1>
        <p>
          Our commitment doesn’t end with project delivery. We offer ongoing
          support to help your brand evolve and grow.
        </p>
      </>
    ),
    bgColor: "#ffa500",
  },
];

const PureCssTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>WHY US?</Title>
        <TabsContainer>
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              isActive={activeTab === tab.id}
              bgColor={tab.bgColor}
              activeColor="#ff4500"
              hoverColor="#ffa500"
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Tab>
          ))}
        </TabsContainer>
        <ContentContainer
          bgColor={tabs.find((tab) => tab.id === activeTab)?.bgColor}
        >
          <TextContent>
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </TextContent>
        </ContentContainer>
      </Container>
    </>
  );
};

export default PureCssTabs;
