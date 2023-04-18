import React, {useState} from "react";
import "./Diagnosis.css"


function Diagnosis({name, background, presentation, medication, imaging, intevention, case_study}) {
    
    const[clicked, setClicked] = useState(false);

    function handleClick() {
        if (clicked ===true) {
            setClicked(false);
        }
        else {
            setClicked(true);
        }
    }

    return (
        <div className = 'slide-container' onClick ={handleClick}>

            <div className="selection-list">

                <ul>
                    

                    <a>{name}
                        <p>{clicked ? background : null}</p>
                        <p>{clicked ? presentation : null}</p>
                        <p>{clicked ? medication : null}</p>
                        <p>{clicked ? intevention : null}</p>
                        <p>{clicked ? imaging : null}</p>
                        <p>{clicked ? case_study : null}</p>
                    </a>

                </ul>

            </div>
            <div className="slideshow">
                <p> {clicked && name == "MS" ? 
                    <iframe src="https://onedrive.live.com/embed?resid=8231C5B016E26FE4%21939&amp;authkey=%21AMX2w97U5G9vsd4&amp;em=2&amp;wdAr=1.7777777777777777" width="476px" height="288px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                    : null}
                </p>
                <p> {clicked && name == "PD" ? 
                    <iframe src="https://onedrive.live.com/embed?resid=8231C5B016E26FE4%21941&amp;authkey=!AJX-FfIMlEnuiEs&amp;em=2&amp;wdAr=1.3333333333333333" width="476px" height="288px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                    : null}
                </p>
                <p> {clicked && name == "CVA" ? 
                    <iframe src="https://onedrive.live.com/embed?resid=8231C5B016E26FE4%21942&amp;authkey=!ALhSIptmJIn5-HU&amp;em=2&amp;wdAr=1.7777777777777777" width="476px" height="288px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                    : null}
                </p>
                <p> {clicked && name == "TBI" ? 
                    <iframe src="https://onedrive.live.com/embed?resid=8231C5B016E26FE4%21938&amp;authkey=!ACFwahUv7CxzGqo&amp;em=2&amp;wdAr=1.7777777777777777" width="476px" height="288px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                    : null}
                </p>
                <p> {clicked && name == "SCI" ? 
                    <iframe src="https://onedrive.live.com/embed?resid=8231C5B016E26FE4%21940&amp;authkey=!ANGlXRZtsSTCIwk&amp;em=2&amp;wdAr=1.7777777777777777" width="476px" height="288px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
                    : null}
                </p>
            </div>
        </div>
    );
};

export default Diagnosis;