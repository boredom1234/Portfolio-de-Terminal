import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Master of Computer Applications (MCA), 9.0 GPA",
    desc: "CHRIST (Deemed to be University), Bangalore | July 2023 – May 2025",
  },
  {
    title: "Bachelor of Computer Applications (BCA), 9.0 GPA",
    desc: "Siliguri Institute of Technology, Siliguri | Sept 2020 – May 2023",
  },
];

export default Education;
