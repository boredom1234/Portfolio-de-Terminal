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
        I'm <HighlightAlt>a Game developer</HighlightAlt> based in Bengaluru,
        India.
      </p>
      <p>
      I am passionate about writing code and developing indie games.
      </p>
    </AboutWrapper>
  );
};

export default About;
