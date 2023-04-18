import React, {useState} from "react";
import Diagnosis from "./Diagnosis"
import "./Diagnosis.css"

function DiagnosisList( {diagnoses}) {
    

    const[clicked, setClicked] = useState(false);

    function handleClick() {
        if (clicked ===true) {
            setClicked(false);
        }
        else {
            setClicked(true);
        }
    }

    const mappedDiagnoses = diagnoses.map((diagnosis) => (
        <Diagnosis

            key={diagnosis.id}
            name={diagnosis.name}
            background={diagnosis.background}
            presentation={diagnosis.presentation}
            medication={diagnosis.medication}
            imaging={diagnosis.imaging}
            intevention={diagnosis.intevention}
            case_study={diagnosis.case}
        />
    ))
    
    return (
    <>
        <div className="slideshow">      
        {/* <div className="slide-container"> */}
            {mappedDiagnoses}
        </div>
        
    </>
    );
};

export default DiagnosisList;
