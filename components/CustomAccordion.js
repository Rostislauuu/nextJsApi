import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';


import styles from '../styles/components/CustomAccordion.module.scss';

const useStyles = makeStyles((theme) => ({
    accordion: {
        backgroundColor: "darkcyan",
        color: "white"
    }
}));

const CustomAccordion = (props) => {
    const classes = useStyles();

    return (
        <Accordion
            disabled={props.isDisabled}
            defaultExpanded={props.defaultExpanded}
            expanded={props.expanded}
            square={props.square}
            className={`${classes.accordion} ${styles[props.additionalClassName]}`}
        >
            <AccordionSummary
                expandIcon={props.expandIcon}
            >
                {props.accordionHeaderNode}
            </AccordionSummary>

            <AccordionDetails>
                {props.accordionBodyNode}
            </AccordionDetails>
        </Accordion>
    )
}

export default CustomAccordion;