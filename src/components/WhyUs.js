import styled, { createGlobalStyle } from "styled-components";
import WhyUs1 from "./WhyUs1";

// Global styles (Google Font loaded externally for better performance)
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Condensed', sans-serif;
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
  font-family: "Roboto Condensed", sans-serif; /* Use the imported font */
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  padding: 0 450px 20px 0;
`;

// Updated tabs array to use 'width' instead of 'length'
export const tabs = [
  {
    id: 1,
    label: "Tailored Solutions",
    colour: "#ffd700",
    width: "616px", // Changed from 'length' to 'width'
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
    bgColor: "#ffd700", // Yellow color
  },
  {
    id: 2,
    label: "Expertise and Innovation",
    colour: "#6a5acd",
    width: "610px", // Changed from 'length' to 'width'
    content: (
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img
          src="/engine.png"
          alt="Expertise and Innovation"
          style={{ width: "350px", marginBottom: "1rem" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Expertise and Innovation</h1>
          <p>
            With a focus on UI/UX design and website development, our team
            combines industry knowledge with the latest tools to create
            cutting-edge solutions.
          </p>
        </div>
      </div>
    ),
    bgColor: "#6a5acd", // SlateBlue color
  },
  {
    id: 3,
    label: "Fast, Reliable Delivery",
    colour: "#ff69b4",
    width: "600px", // Changed from 'length' to 'width'
    content: (
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img
          src="/engine.png"
          alt="Fast, Reliable Delivery"
          style={{ width: "350px", marginBottom: "1rem" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Fast, Reliable Delivery</h1>
          <p>
            We prioritize timely delivery without compromising quality, ensuring
            your project is completed on schedule and exceeds expectations.
          </p>
        </div>
      </div>
    ),
    bgColor: "#ff69b4", // HotPink color
  },
  {
    id: 4,
    label: "Full Transparency",
    colour: "#ffa500",
    width: "410px", // Changed from 'length' to 'width'
    content: (
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img
          src="/engine.png"
          alt="Full Transparency"
          style={{ width: "350px", marginBottom: "1rem" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Full Transparency</h1>
          <p>
            We keep you informed at every step, maintaining open communication
            to ensure the project reflects your vision.
          </p>
        </div>
      </div>
    ),
    bgColor: "#ffa500", // Orange color
  },
  {
    id: 5,
    label: "Long-term Support",
    colour: "#32cd32",
    width: "190px", // Changed from 'length' to 'width'
    content: (
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img
          src="/engine.png"
          alt="Long-term Support"
          style={{ width: "350px", marginBottom: "1rem" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Long-term Support</h1>
          <p>
            Our commitment doesn’t end with project delivery. We offer ongoing
            support to help your brand evolve and grow.
          </p>
        </div>
      </div>
    ),
    bgColor: "#32cd32", // LimeGreen color
  },
];

const PureCssTabs = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>WHY US?</Title>
        <WhyUs1 />
        <img
          src="/Stamp.png"
          alt="Stamp"
          style={{
            position: "absolute",
            bottom: "75px",
            left: "270px",
            width: "160px",
            height: "auto",
            margin: "10px",
            zIndex: 999,
          }}
        />
      </Container>
    </>
  );
};

export default PureCssTabs;
