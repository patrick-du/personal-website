import React from 'react';
import { Link } from 'react-router-dom';
import Quote from '../layout/Quote';

const Career = () => {
    return (
        <div className="container-fluid main-px py-5">
            <div className="aboutBox p-5">
                <div className="row">
                    <div className="col-1">
                        <Link to="/about">
                            <i class="fas fa-times emojis py-3 red"></i>
                        </Link>
                    </div>
                    <div className="col-10">
                        <p className="title-font med no-y-space text-center">Career Aspirations</p>
                        <h3 className="p-font med text-center">What about my Kinesiology degree?</h3>
                    </div>
                    <div className="col-1">

                    </div>
                </div>

                <hr></hr>

                <p className="s-font">For the future, I plan to complete my kinesiology degree with a <a className="link" href="https://cs.uwaterloo.ca/current/programs/require/2018-2019/comptech_option.html" target="_blank">computing option</a> in order to expand my understanding of theory and core concepts such as data structures, algorithms, recursion, and more. By self-teaching code, many of these fundamentals can be missed out on or only lightly touched upon. Taking computer science courses will be beneficial to my overall understanding of the field and success whether it be during interview questions or simply working on side projects.</p>
                <Quote quote="I think the biggest innovations of the 21st century will be at the intersection of biology and technology. A new era is beginning." person="Steve Jobs"></Quote>
                <p className="s-font">By studying Kinesiology I will acquire a profound understanding of physiological, biomechanical, and psychological dynamic principles and mechanisms of movement allowing me to innovate technology for the fitness and health industry in ways that a computer science or engineering graduate cannot.</p>
                <p className="s-font text-center text-muted vert-move mt-5 mb-0">Created by Patrick Du 🎈</p>



            </div>
        </div>
       
    )

}

export default Career;