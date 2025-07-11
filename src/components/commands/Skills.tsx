import { useContext } from "react";
import { termContext } from "../Terminal";
import { Wrapper, UsageDiv } from "../styles/Output.styled";
import {
  SkillsWrapper,
  CategoryTitle,
  SkillList,
  SkillItem,
} from "../styles/Skills.styled";

const skillsData: Record<string, string[]> = {
  languages: [
    "Python",
    "C#",
    "C",
    "LUA",
    "R",
    "Java",
    "JavaScript",
    "TypeScript",
  ],
  frameworks: [
    "React",
    "Unity",
    "Godot",
    "GD Script",
    "Streamlit",
    "SpringBoot",
    "Kafka",
  ],
  web: [
    "HTML5",
    "CSS3 / SCSS",
    "TailwindCSS",
    "API Development",
    "Microservices",
  ],
  cloud: ["Google Cloud", "AWS", "Docker", "Kubernetes", "CI/CD", "SonarQube"],
  databases: ["MySQL", "MongoDB", "Redis"],
  ai: ["Computer Vision", "GenAI", "Agentic AI", "Prompt Engineering", "NLP"],
  security: ["Cyber-Security", "Memory Hacking", "Git Version Control"],
  systems: ["UNIX", "IoT", "Arduino", "Raspberry Pi", "ESP32"],
  gamedev: ["Level Design", "Gameplay Scripting", "Game Engine Development"],
  soft: [
    "Communication",
    "Problem-solving",
    "Leadership",
    "Teamwork",
    "Adaptability",
  ],
};

const Skills: React.FC = () => {
  const { arg } = useContext(termContext);

  const categories = Object.keys(skillsData);

  // ===== validate arg =====
  if (arg.length > 1 || (arg.length === 1 && !categories.includes(arg[0]))) {
    return (
      <UsageDiv data-testid="skills-invalid-arg" marginY>
        Usage: skills &#60;{categories.join("|")}&#62;
      </UsageDiv>
    );
  }

  // ===== render single category =====
  const renderCategory = (cat: string) => (
    <div key={cat}>
      <CategoryTitle>
        {cat.charAt(0).toUpperCase() + cat.slice(1)}
      </CategoryTitle>
      <SkillList>
        {skillsData[cat].map(skill => (
          <SkillItem key={skill}>{skill}</SkillItem>
        ))}
      </SkillList>
    </div>
  );

  return (
    <Wrapper data-testid="skills">
      <SkillsWrapper>
        {arg.length === 1
          ? renderCategory(arg[0])
          : categories.map(cat => renderCategory(cat))}
      </SkillsWrapper>
    </Wrapper>
  );
};

export default Skills;
