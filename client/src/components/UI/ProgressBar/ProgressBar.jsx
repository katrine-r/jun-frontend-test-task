import React from "react";
import PropTypes from "prop-types";
import Styled from "styled-components";
import "./ProgressBar.scss";

const Container = Styled.div`
    progress {
        height: 10px;
        margin-right: 10px;
    }

    progress[value] {
        width: ${props => props.width};

        -webkit-appearance: none;
        appearance: none;
    }

    progress[value]::-webkit-progress-bar {
        height: 10px;
        border-radius: 10px;
        background-color: #eee;  
    }

    progress[value]::-webkit-progress-value {
        height: 10px;
        border-radius: 10px; 
        background-color: ${props => props.color};
    }
`;

const ProgressBar = ({ value, max, color, width }) => {

    return (
        <Container className="ProgressWpapper" color={color} width={width} >
            <progress id="fileProgress" value={value} max={max} > 100% </progress>
            <span>{value} m</span>
        </Container>     
    )
}

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    width: PropTypes.string
}

ProgressBar.defaultProps = {
    max: 1000,
    color: "#333",
    width: "500px"
}

export default ProgressBar