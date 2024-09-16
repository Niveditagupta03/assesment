import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { tabs } from "./WhyUs"; // Adjust the import path as needed

// Global styles
const GlobalStyle = createGlobalStyle`
  :root {
    --color: hsl(53 92% 50%);
  }
`;

// Define your Tab component styles
const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const TabContent = styled.div`
  min-height: 350px;
  padding: 18px 20px;
  background: ${(props) => props.bgColor || "var(--color)"};
  border-radius: 30px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  position: relative;
  z-index: 9;
  color: #000;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
  font-size: 18px;
  color: #000;
  font-weight: 100;
  position: relative;
  align-items: center;
  top: -40px;
  filter: url("#fancy-goo");
  z-index: 1;

  .tab-head {
    min-height: 60px;
    min-width: 100px;
    text-align: center;
    position: absolute;
    padding: 8px 42px;
    cursor: pointer;
    border-radius: 20px;
  }
`;

const Header2 = styled(Header)``;

// Main component
const WhyUs1 = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Find the active tab content based on the activeTab state
  const activeTabContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <div style={{ display: "flex", width: "100%" }}>
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className="tab-head"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  height: "160px",
                  width: tab.width,
                  background: tab.colour,
                }}
              >
                {tab.label}
              </div>
            ))}
          </div>
          <div className="tab-head-bottom" />
        </Header>

        <TabContent bgColor={activeTabContent.bgColor}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div>{activeTabContent.content}</div>
          </div>
        </TabContent>

        <Header2>
          <div className="tab-head" />
        </Header2>
      </Container>
    </>
  );
};

export default WhyUs1;
