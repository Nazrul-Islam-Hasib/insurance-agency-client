import React from 'react';
import './Team.css'

const Team = () => {
    return (
        <div className="bg-color-alt">
            <div className="container section-pad">
                <div className="row justify-content-center text-center">
                    <div className="col-md-6">
                        <h2 className="secondary-color">Our Team</h2>
                    </div>
                </div>
                <div className="row justify-content-center pt-5 text-center">
                    <div className="col-md-4 col-lg-3">
                        <div className="team-content">
                            <div className="team-photo">
                                <img src="https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?b=1&k=6&m=1270067126&s=170667a&w=0&h=ORPL0Z6kn8TSL3ObkcvmGB8wU5v2BI_1ZnLEiFUI32U=" alt="team-img" className="img-fluid"/>
                            </div>
                            <div className="team-info">
                                <h4>Christian Hof</h4>
                                <span>CEO</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <div className="team-content">
                            <div className="team-photo">
                                <img src="https://media.istockphoto.com/photos/successful-casual-business-woman-smiling-picture-id1244524447?b=1&k=6&m=1244524447&s=170667a&w=0&h=Vd7UVwe059IpNxJ1IIW-6AhVN-Ymb4-aVAaVXzp4JPY=" alt="team-img" className="img-fluid"/>
                            </div>
                            <div className="team-info">
                                <h4>Artel Sonja</h4>
                                <span>CTO</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <div className="team-content">
                            <div className="team-photo">
                                <img src="https://media.istockphoto.com/photos/portrait-of-a-confident-young-businessman-picture-id1265176370?b=1&k=6&m=1265176370&s=170667a&w=0&h=zFbE2GUvYkc4TlRwF0eNrwcHavjMKh-vqdYXWtjQ3us=" alt="team-img" className="img-fluid"/>
                            </div>
                            <div className="team-info">
                                <h4>Andreas Meijer</h4>
                                <span>Marketing Manager</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-3">
                        <div className="team-content">
                            <div className="team-photo">
                                <img src="https://media.istockphoto.com/photos/mixed-race-young-woman-using-digital-tablet-picture-id1244518838?b=1&k=6&m=1244518838&s=170667a&w=0&h=RjIcIL5mQg6twrhUl5ZhMBquKCrquH8cYTDtt4o4JOc=" alt="team-img" className="img-fluid"/>
                            </div>
                            <div className="team-info">
                                <h4>Jenny Lazer</h4>
                                <span>Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;