import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Some selected Projects.
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Scan Tec",
    desc: "A Fracture Detection and Pathology Intepretation Tool.",
    url: "https://github.com/boredom1234/ScanTec",
  },
  {
    id: 2,
    title: "Not an App",
    desc: "An Notepad based text Editor with Gemini Integrated",
    url: "https://github.com/boredom1234/not-an-app",
  },
  {
    id: 3,
    title: "NotifEye",
    desc: "A Crime Reporting and Alerting App, made with FLutter.",
    url: "https://github.com/boredom1234/notifeye",
  },
  {
    id: 4,
    title: "SechsMenu",
    desc: "An open source GTA V menu protecting against a wide ranges of the public crashes and improving the overall experience.",
    url: "https://github.com/howdoiusekeyboard/SechsMenu",
  },
  {
    id: 5,
    title: "Synthetix.ai",
    desc: "Set Your Goals, AI Achieves Them. You can set up the initial role and goals for your AI buddy, without human's supervision, it will automatically leverage all of the resources it has to achieve your goal.",
    url: "https://github.com/boredom1234/Synthetix.ai",
  },
  {
    id: 6,
    title: "Pixel Adventure",
    desc: "A mario type 2d platformer adventure game.",
    url: "https://pixeladvn.netlify.app/",
  },
];

export default Projects;
