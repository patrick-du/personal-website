import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FGFCard extends Component {

    constructor(props) {
        super(props);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop() {
        let FGFCardEl = document.querySelector('.FGFCard');
        let FGFMessageEl = document.querySelector('.FGFMessage');
        let showMoreEl = document.getElementById('FGFshowMore');
        let showLessEl = document.getElementById('FGFshowLess');

        if (FGFCardEl.style.height === '11rem' && FGFMessageEl.style.display === 'none') {
            FGFCardEl.style.height = 'auto'
            FGFMessageEl.style.display = 'flex'
            showMoreEl.style.display = 'none'
            showLessEl.style.display = 'flex'
        } else {
            FGFCardEl.style.height = '11rem'
            FGFMessageEl.style.display = 'none'
            showMoreEl.style.display = 'flex'
            showLessEl.style.display = 'none'
        }
    }

    render() {
        const styles = {
            FGFCardHeight: {
                height: '11rem'
            },
            FGFMessageDisplay: {
                display: 'none'
            },
            showMore: {
                display: 'flex'
            },
            showLess: {
                display: 'none'
            }
        }
        const { job, position, imgPath, time } = this.props;

        return (
            <div className="FGFCard" style={styles.FGFCardHeight} >
                <div className="row">
                    <div id="col1">
                        <img src={require(`../../assets/${imgPath}`)} alt="" className="FGFCardImage" />
                    </div>
                    <div id="col2">
                        <div className="FGFCardText px-0">
                            <p className="p-font med card-title" id="pos">{position}</p>
                            <p className="s-font lightText card-text" id="job">{job}<div id="time">{time}</div></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <i class="fas fa-angle-down purple mx-auto" style={styles.showMore} id="FGFshowMore" onClick={this.handleDrop}></i>
                    <i class="fas fa-angle-up purple mx-auto" style={styles.showLess} id="FGFshowLess" onClick={this.handleDrop}></i>
                </div>
                <br />
                <div className="FGFMessage" style={styles.FGFMessageDisplay}>
                    <p className="s-font">At <a href="https://www.fgfbrands.com" target="_blank" className="hvr-underline-from-left purple">FGF Brands</a>, I played a major role in several large projects - developing the FGF progressive web app, creating a company web framework for future apps, and programming over 2000 NFC tags for the engineering department. Over the course of the coop term, I was able to pick up new languages, frameworks, and libraries such as Bootstrap, JavaScript, React, and React Native. Working at FGF Brands for my first coop term was an incredible experience with lots of opportunities to grow by myself as well as in a team. The company highly values one's ability to work in a team as well as their work ethic - two skills I developed tremendously during my time at FGF.     </p>
                </div>
            </div >
        )
    }
}



export default FGFCard;