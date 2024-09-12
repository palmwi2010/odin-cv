import "../styles/EducationTeaser.css";
import TopRow from "./TopRow";
import { useState } from "react";

function EducationTeaser({degree, university}) {

    const [isCollapsed, setCollapse] = useState(true);
    const changeCollapse = () => {
        setCollapse(!isCollapsed);
    }

    return (
        <div className="education-teaser">

        </div>
    )

}