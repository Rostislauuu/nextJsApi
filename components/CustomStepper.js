import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
    contentRoot: {
        textAlign: "center"
    },
    buttonContainer: {
        marginTop: "10px"
    },
    previousButton: {
        marginRight: "7px"
    }
}));

const CustomStepper = props => {
    const classes = useStyles();

    const goNext = () => {
        if (props.activeStep === props.steps.length) {
            return props.setActiveStep(0);
        }
        
        props.setActiveStep((previousStep) => previousStep + 1);
    }

    const goBack = () => {
        props.setActiveStep((previousStep) => previousStep - 1);
    }

    return (
        <React.Fragment>
            <Stepper activeStep={props.activeStep}>
                {props.steps.map(step => {
                    return (
                        <Step key={`step-title-${step.title}`}>
                            <StepLabel>{step.title}</StepLabel>
                        </Step>
                    )
                })}
            </Stepper>

            <div className={classes.contentRoot}>
                {props.steps.map((step, index) => {
                    if (index === props.activeStep) {
                        return (
                            <div key={`step-content-${step.content}`}>
                                {step.content}
                            </div> 
                        )
                    }
                })}

                <div className={classes.buttonContainer}>
                    <Button
                      variant="contained"
                      className={classes.previousButton}
                      disabled={props.activeStep === 0}
                      onClick={goBack}
                    >
                        Previous
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      onClick={goNext}
                    >
                        {props.activeStep === props.steps.length ? "Finish" : "Next"}
                    </Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CustomStepper;