import React from "react";

const CardTeamTemplate2 = ({image, sname, domain, github, linkedin, instagram}) =>{
    return(
        // <div className="member">
        //     <div className="member-img">
        //         <img src = {image} className="img-fluid" alt="" />
        //     </div>
        //     <div className="member-info">
        //         <h4>{sname}</h4>
        //         <span>{domain}</span>
        //         <div className="social-links">
        //             <a href={github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        //             <a href={linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
        //             <a href={instagram} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        //         </div>
        //     </div>
        // </div>

            <div className="our-team">
                <div className="picture">
                    <img className="img-fluid" src={image} alt=""/>
                </div>
            <div className="team-content">
                        <h3 className="name">{sname}</h3>
                    <h4 className="title">{domain}</h4>
            </div>
                <ul className="social">
                    <li><a href={github} target="_blank" className="fab fa-linkedin" aria-hidden="true"></a></li>
                    <li><a href={linkedin} target="_blank" className="fab fa-twitter" aria-hidden="true"></a></li>
                    <li><a href={instagram} target="_blank" className="fab fa-instagram" aria-hidden="true"></a></li>
            </ul>
            </div>
    )
}

export default CardTeamTemplate2;