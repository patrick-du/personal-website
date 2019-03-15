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

        console.log(FGFCardEl.style)
        if (FGFCardEl.style.height === '13rem' && FGFMessageEl.style.display === 'none') {
            FGFCardEl.style.height = '20rem'
            FGFMessageEl.style.display = 'flex'
            showMoreEl.style.display = 'none'
            showLessEl.style.display = 'flex'
        } else {
            FGFCardEl.style.height = '13rem'
            FGFMessageEl.style.display = 'none'
            showMoreEl.style.display = 'flex'
            showLessEl.style.display = 'none'
        }
    }

    render() {
        const styles = {
            FGFCardHeight: {
                height: '13rem'
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
        const { job, position, imgPath, time, link } = this.props;

        return (
            <div className="FGFCard" style={styles.FGFCardHeight} >
                <div className="row">
                    <div id="col1">
                        <img src={require(`../../assets/${imgPath}`)} alt="" className="FGFCardImage" />
                    </div>
                    <div id="col2">
                        <div className="FGFCardText px-0">
                            <p className="p-font med card-title" id="pos">{position}</p>
                            <p className="s-font" id="job">{job}<div id="lightText card-text time">{time}</div></p>
                        </div>
                    </div>
                </div>
                <br />
                <i class="fas fa-angle-down purple text-center" style={styles.showMore} id="FGFshowMore" onClick={this.handleDrop}></i>
                <i class="fas fa-angle-up purple text-center" style={styles.showLess} id="FGFshowLess" onClick={this.handleDrop}></i>
                <div className="FGFMessage" style={styles.FGFMessageDisplay}>
                    <p className="s-font">Projects: FGF Progressive Web App, FGF official web framework</p>
                    <p className="s-font">At FGF Brands, I played a major role in several projects - most notably in creating the FGF Progressive Web App from start to end as well as the FGF company style guide</p>
                </div>
            </div >
        )
    }
}



export default FGFCard;