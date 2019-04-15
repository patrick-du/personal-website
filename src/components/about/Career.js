import React from 'react';
import { Link } from 'react-router-dom';
import PostTop from '../layout/PostTop';
import Fade from 'react-reveal/Fade';

const Career = () => {
    return (
        <div className="container-fluid projectContainer mx-auto px-0">
            <PostTop subtitle="Career Aspirations" title="Plans for the Future" previous="/about" next="/about/story" />
            <Fade big>

                <p className="s-font">For the future, I plan to complete my kinesiology degree with a <a className="hvr-underline-from-left purple" href="https://cs.uwaterloo.ca/current/programs/require/2018-2019/comptech_option.html" target="_blank">computing option</a> in order to expand my understanding of theory and core concepts such as data structures, algorithms, recursion, and more. By self-teaching code, many of these fundamentals can be missed out on or only lightly touched upon. Taking computer science courses will be beneficial to my overall understanding of the field and success whether it be during interview questions or simply working on side projects.</p>
                <blockquote className="blockquote s-font med">
                    <p className="mb-0">I think the biggest innovations of the 21st century will be at the intersection of biology and technology. A new era is beginning.</p>
                    <footer className="blockquote-footer">Steve Jobs</footer>
                </blockquote>
                <p className="s-font">By studying Kinesiology I will acquire a profound understanding of physiological, biomechanical, and psychological dynamic principles and mechanisms of movement allowing me to innovate practical technology for the fitness and health industry.</p>
            </Fade>

            <hr />
            <Fade bottom>
                <Link to="/about/story" className="linkdec">
                    <div className="s-font med" style={{ fontWeight: '600', fontSize: '18px' }}> Up Next
                            <i class="fas fa-arrow-right" style={{ fontSize: '18px', float: "right" }} />
                        <p style={{ fontWeight: '400', fontSize: '16px', color: '#7f8c8d' }}>How I Started Coding</p>
                    </div>
                </Link>
            </Fade>

        </div >
    )

}

export default Career;