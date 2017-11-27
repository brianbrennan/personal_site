import React from 'react';

import './home.scss';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page">
                <div className="hero">

                </div>
                <div className="content">
                    <section className="diagonal-section bg-vibrant-red plan-step">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                                    <h1>Plan</h1>
                                    <p>
                                        The first step in making the perfect website for you is planning ahead. Discussion and research into what you need for your digital presence occurs in this stage, so that everything can be kept in mind while I begin your customized site.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="design-step">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                                    <h1>Design</h1>
                                    <p>
                                        In the design stage of my process, several proofs will be presented to you until you are happy with the visual presentation of your site. I'll offer expertise and recommendations for how I believe your site should look, while still listening to your opinion as final judgement, so that you can get a website you're happy with.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="diagonal-section diagonal-left-section bg-vibrant-blue plan-step">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                                    <h1>Develop</h1>
                                    <p>
                                        The last and most lengthy step of my process is building your site. This is where hiring a professional comes in handy. While I do provide regular updates to the status of your project, you won't have to see a single line of code. Just rest assured that your site will be completed to the highest standard.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="contact-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                                    <img src="./app/globals/assets/img/contact-script-01.png"
                                         alt="Contact me for more info"/>
                                    <form action="">
                                        <button className="red-button">Contact</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}