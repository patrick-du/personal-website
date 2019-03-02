import React from 'react';
import { Link } from 'react-router-dom';

const Career = () => {
    return (
        <div className="container-fluid main-px py-5">
            <div className="aboutBox p-5">
                <div className="row">
                    <div className="col-1">
                        <Link to="/about">
                            <i class="fas fa-times emojis py-3"></i>
                        </Link>
                    </div>
                    <div className="col-10">
                        <p className="title-font med no-y-space text-center">Career Aspirations</p>
                        <h3 className="p-font med text-center">What about my Kinesiology degree?</h3>
                    </div>
                    <div className="col-1">
                        
                    </div>
                    <hr />

                    <p className="s-font">For the future, I plan to complete my kinesiology degree with a health informatics option expanding my understanding of the field that investigates how computer technologies can be utilized to better generate, manage, store, and apply health information.  </p>
                    <br />
                    <blockquote className="blockquote">
                        <p className="mb-0">I think the biggest innovations of the 21st century will be at the <mark>intersection of biology and technology</mark>. A new era is beginning.</p>
                        <footer className="blockquote-footer">Steve Jobs</footer>
                    </blockquote>
                    <br />
                    <p className="s-font">By studying Kinesiology I will acquire a profound understanding of physiological, biomechanical, and psychological dynamic principles and mechanisms of movement allowing me to innovate technology for the fitness and health industry in ways that a computer science or engineering graduate cannot.</p>


                </div>
            </div>
        </div>
    )

}

export default Career;