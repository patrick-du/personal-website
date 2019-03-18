import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EPTCard extends Component {

    constructor(props) {
        super(props);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop() {
        let EPTCardEl = document.querySelector('.EPTCard');
        let EPTMessageEl = document.querySelector('.EPTMessage');
        let showMoreEl = document.getElementById('EPTshowMore');
        let showLessEl = document.getElementById('EPTshowLess');

        if (EPTCardEl.style.height === '11rem' && EPTMessageEl.style.display === 'none') {
            EPTCardEl.style.height = 'auto'
            EPTMessageEl.style.display = 'flex'
            showMoreEl.style.display = 'none'
            showLessEl.style.display = 'flex'
        } else {
            EPTCardEl.style.height = '11rem'
            EPTMessageEl.style.display = 'none'
            showMoreEl.style.display = 'flex'
            showLessEl.style.display = 'none'
        }
    }

    render() {
        const styles = {
            EPTCardHeight: {
                height: '11rem'
            },
            EPTMessageDisplay: {
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
            <div className="EPTCard" style={styles.EPTCardHeight} >
                <div className="row">
                    <div id="col1">
                        <img src={require(`../../assets/${imgPath}`)} alt="" className="EPTCardImage" />
                    </div>
                    <div id="col2">
                        <div className="EPTCardText px-0">
                            <p className="p-font med card-title" id="pos">{position}</p>
                            <p className="s-font lightText card-text" id="job">{job}<div id="time">{time}</div></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <i class="fas fa-angle-down purple mx-auto" style={styles.showMore} id="EPTshowMore" onClick={this.handleDrop}></i>
                    <i class="fas fa-angle-up purple mx-auto" style={styles.showLess} id="EPTshowLess" onClick={this.handleDrop}></i>
                </div>
                <br />
                <div className="EPTMessage" style={styles.EPTMessageDisplay}>
                    <p className="s-font">At <a href="http://elementsphysicaltherapy.ca" target="_blank" className="hvr-underline-from-left purple">Elements Physical Therapy</a>, I assisted in the daily planning of patient physical activites in order to reach therapeutic goals by creating workout routines using <a href="https://www.simpleset.net" target="_blank" className="hvr-underline-from-left purple">SimpleSet</a>, a physiotherapy exercise prescription software. On top of this, I further developed my skills with Microsoft Excel to document patient charts during therapy in regards to their exercises, reps, and weights to improve the clinics efficiency and organization. Overall, the atmosphere of the physiotherapy clinic was very welcoming and helped me improve my communication skills as I was constantly working with new clients. It taught me the importance of building patient rapport and trust as it may be difficult for patients to trust a student assistant with exercise administration.</p>
                </div>
            </div >
        )
    }
}



export default EPTCard;