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
            <React.Fragment >
                <div className="row mx-0">
                    <div className="social pt-2 ">
                        <div id="beforeClick" className="text-center" onClick={this.socialFcn}>
                            <i class="fas fa-share-alt p-1 socialIcons" />
                        </div>

                        <div id="afterClick" className="socialIconToggle">
                            <div className="row mx-0">
                                <i class="fas fa-times p-1 ml-3 mr-4 socialIcons" onClick={this.socialFcn2} />

                                <a href="mailto:patrickduu@gmail.com"><i class="far fa-envelope p-1 mr-4 socialIcons" onClick={this.socialFcn2} /></a>
                                <a href="https://github.com/patrick-du" target="_blank"><i class="fab fa-github p-1 mr-4 socialIcons" onClick={this.socialFcn2} /></a>
                                <a href="https://www.linkedin.com/in/patrick-du3/" target="_blank"><i class="fab fa-linkedin-in p-1 mr-3 socialIcons" onClick={this.socialFcn2} /></a>
                            </div>


                        </div>
                    </div>

                </div>

            </React.Fragment>

        );
    }
}
export default ContactExpand