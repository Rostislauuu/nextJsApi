import { useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

import Accordion from "../components/CustomAccordion";
import Stepper from "../components/CustomStepper";
import SnackBar from "../components/CustomSnackBar";

import styles from "../styles/MaterialUI.module.scss";

const steps = [
    {
        title: "First Step",
        content: "Let`s do this or what"
    },
    {
        title: "Second Step",
        content: "Almost here"
    },
    {
        title: "Last Step",
        content: "There is no way back"
    }
];

const MaterialUI = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isSnackBarOpened, setIsSnackBarOpened] = useState(false);

    return (
        <div className={styles["container"]}>
            <Accordion
              square
              defaultExpanded
              accordionHeaderNode={<div>Accordion Hello</div>}
              accordionBodyNode={<div>Accordion Body Text</div>}
              expandIcon={<ExpandMoreIcon className="white-color" />}
              additionalClassName="first-accordion"
            />

            <Accordion
              square
              accordionHeaderNode={<div>Accordion Yeah ayyy</div>}
              accordionBodyNode={<div>Accordion chizzzaaa</div>}
              expandIcon={<ExpandMoreIcon className="white-color" />}
              additionalClassName="second-accordion"
            />

            <Stepper
              steps={steps}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />

            <div className={styles["snack-bar-btn"]}>
              <Button
                variant="outlined"
                onClick={() => setIsSnackBarOpened(true)}
              >
                Yo man, click here
              </Button>
            </div>
            <SnackBar
              duration={5000}
              isOpened={isSnackBarOpened}
              setOpen={setIsSnackBarOpened}
              message="Thanks, man"
              yPosition="top"
              xPosition="right"
            />
        </div>
    )
}

export default MaterialUI;
