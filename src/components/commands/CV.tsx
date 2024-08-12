import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const CV: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  if (rerender && currentCommand[0] === "cv" && currentCommand.length <= 1) {
    // window.open("https://drive.google.com/file/d/1w2u70NVekMUEM2A-qiXQnito2gSEiU7j/view?usp=sharing", "_blank");
    window.open("https://drive.usercontent.google.com/u/0/uc?id=1w2u70NVekMUEM2A-qiXQnito2gSEiU7j&export=download", "_blank");
  }

  return (
    <Wrapper>
      <span>Downloading CV <br />
        [===================&gt;] 100%  <br />
        {/* 50.0MB/50.0MB <br /> */}
        Download complete !
</span>
    </Wrapper>
  );
};

export default CV;
