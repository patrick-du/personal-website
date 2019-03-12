import React from 'react';
import { Link } from 'react-router-dom';

const Career = () => {
    return (
        <div className="container-fluid container-padding">
            <p className="s-font med py-0 my-0 lightText text-center">Career Aspirations</p>
            <div className="row">
                <div className="col-2">
                    <Link to="/about">
                        <i class="fas fa-times" style={{ fontSize: '25px', color: '#e74c3c' }}></i>
                    </Link>
                </div>
                <div className="col-8">
                    <h3 className="p-font bold text-center">Plans for the Future</h3>
                </div>
                <div className="col-2 text-right">
                    <Link to="/about/story">
                        <i class="fas fa-arrow-right" style={{ fontSize: '25px', color: '#546de5' }}></i>
                    </Link>
                </div>
            </div>

            <hr />
            <p className="s-font">For the future, I plan to complete my kinesiology degree with a <a className="hvr-underline-from-left purple" href="https://cs.uwaterloo.ca/current/programs/require/2018-2019/comptech_option.html" target="_blank">computing option</a> in order to expand my understanding of theory and core concepts such as data structures, algorithms, recursion, and more. By self-teaching code, many of these fundamentals can be missed out on or only lightly touched upon. Taking computer science courses will be beneficial to my overall understanding of the field and success whether it be during interview questions or simply working on side projects.</p>
            <blockquote className="blockquote s-font med">
                <p className="mb-0">I think the biggest innovations of the 21st century will be at the intersection of biology and technology. A new era is beginning.</p>
                <footer className="blockquote-footer">Steve Jobs</footer>
            </blockquote>
            <p className="s-font">By studying Kinesiology I will acquire a profound understanding of physiological, biomechanical, and psychological dynamic principles and mechanisms of movement allowing me to innovate technology for the fitness and health industry in ways that a computer science or engineering graduate cannot.</p>
            <Link to="../../" className="linkdec">
                <p className="s-font text-center text-muted vert-move mt-5 mb-0">Created by Patrick Du 🎈</p>
            </Link>
        </div>
    )

}

export default Career;