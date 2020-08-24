import React from 'react';
import PostTop from '../layout/PostTop';
import Fade from 'react-reveal/Fade';
import NextPageBottom from '../layout/NextPageBottom';

const Career = () => {
    return (
        <div className="container-fluid projectContainer mx-auto px-0">
            <PostTop subtitle="Career Aspirations" title="Plans for the Future"/>
            <hr className="my-3"/>
            <Fade big>
                <p className="general-font">For the future, I plan to complete my kinesiology degree with a <a className="hvr-underline-from-left purple" href="https://cs.uwaterloo.ca/current/programs/require/2018-2019/comptech_option.html" target="_blank">computing option</a> in order to expand my understanding of theory and core concepts such as data structures, algorithms, recursion, and more. By self-teaching code, many of these fundamentals can be missed out on or only lightly touched upon. Taking computer science courses will be beneficial to my overall understanding of the field and success whether it be during interview questions or simply working on side projects.</p>
                <blockquote className="blockquote">
                    <p className="mb-0 blockquote-font">I think the biggest innovations of the 21st century will be at the intersection of biology and technology. A new era is beginning.</p>
                    <footer className="general-font"> - Steve Jobs</footer>
                </blockquote>
                <p className="general-font">By studying Kinesiology I will acquire a profound understanding of physiological, biomechanical, and psychological dynamic principles and mechanisms of movement allowing me to innovate practical technology for the fitness and health industry.</p>
            </Fade>
            <hr />
            <NextPageBottom route="/about/story" title="Up Next" subtitle="How I Started Coding"/>
        </div >
    )

}

export default Career;