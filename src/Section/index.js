import React from "react";
import "./style.css";

const Section = ({title, body, extraHeaderContent}) => (
    <section className="container">
    <div className="container__item">
        <h2>{title}</h2>
        {extraHeaderContent}
        <div className="container__item ">
           
        </div>
    </div>
    {body}
</section>

);

export default Section;
