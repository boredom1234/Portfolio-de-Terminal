import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Rajdeep Banik</HighlightSpan>!
      </p>
      <p>
        I'm a <HighlightAlt>Software Engineer & AI enthusiast</HighlightAlt>{" "}
        currently interning at Trivium eSolutions in Bengaluru, India.
      </p>
      <p>
        I love building intelligent developer tools, full-stack web apps, and
        indie games that delight users.
      </p>
    </AboutWrapper>
  );
};

export default About;
