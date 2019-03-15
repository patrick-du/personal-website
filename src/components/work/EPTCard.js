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

        console.log(EPTCardEl.style)
        if (EPTCardEl.style.height === '13rem' && EPTMessageEl.style.display === 'none') {
            EPTCardEl.style.height = '20rem'
            EPTMessageEl.style.display = 'flex'
            showMoreEl.style.display = 'none'
            showLessEl.style.display = 'flex'
        } else {
            EPTCardEl.style.height = '13rem'
            EPTMessageEl.style.display = 'none'
            showMoreEl.style.display = 'flex'
            showLessEl.style.display = 'none'
        }
    }

    render() {
        const styles = {
            EPTCardHeight: {
                height: '13rem'
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
        const { job, position, imgPath, time, link } = this.props;

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
                <br />
                <i class="fas fa-angle-down purple text-center" style={styles.showMore} id="EPTshowMore" onClick={this.handleDrop}></i>
                <i class="fas fa-angle-up purple text-center" style={styles.showLess} id="EPTshowLess" onClick={this.handleDrop}></i>
                <div className="EPTMessage" style={styles.EPTMessageDisplay}>
                    <p className="s-font">At EPT Brands, I played a major role in several projects - most notably in creating the EPT Progressive Web App from start to end as well as the EPT company style guide</p>
                </div>
            </div >
        )
    }
}



export default EPTCard;