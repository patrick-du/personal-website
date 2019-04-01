import React, { Component } from 'react';
import Resume from '../../assets/Reflective.pdf';
class ContactExpand extends Component {
    socialFcn = () => {
        document.querySelector('.social').classList.toggle('socialSizeChange');
        document.querySelector('#beforeClick').classList.toggle('socialIconToggle');
        setTimeout(function () {
            document.querySelector('#afterClick').classList.toggle('socialIconToggle')
        }, 200)
    }
    socialFcn2 = () => {
        document.querySelector('.social').classList.toggle('socialSizeChange');
        document.querySelector('#afterClick').classList.toggle('socialIconToggle');
        setTimeout(function () {
            document.querySelector('#beforeClick').classList.toggle('socialIconToggle')
        }, 200)
    }

    render() {
        return (
            <div className="social pt-2 ">
                <div id="beforeClick" className="text-center fade-in-fwd" onClick={this.socialFcn}>
                    <i class="fas fa-plus p-1 hvr-grow socialIcons" />
                </div>

                <div id="afterClick" className="socialIconToggle fade-in-fwd">
                    <i class="fas fa-minus p-1 ml-3 mr-2 socialIcons" onClick={this.socialFcn2} />
                    <div className="float-right">
                        <a href={Resume} target="_blank"><i class="far fa-file p-1 mx-3 socialIcons hvr-pop" /></a>
                        <a href="mailto:patrickduu@gmail.com"><i class="far fa-envelope p-1 mx-3 socialIcons hvr-pop" /></a>
                        <a href="https://github.com/patrick-du" target="_blank"><i class="fab fa-github p-1 mx-3 socialIcons hvr-pop" /></a>
                        <a href="https://www.linkedin.com/in/patrick-du3/" target="_blank"><i class="fab fa-linkedin-in p-1 ml-2 mr-3 socialIcons hvr-pop" /></a>
                    </div>
                </div>
            </div>
        );
    }
}
export default ContactExpand