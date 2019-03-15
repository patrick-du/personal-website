import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FGFCard extends Component {

    constructor(props) {
        super(props);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleDrop() {
        let FGFCardEl = document.querySelector('.FGFCard');
        let FGFShow1 = document.querySelector('.show1');
        let FGFShow2 = document.querySelector('.show2');


        console.log(FGFCardEl.style)
        if (FGFCardEl.style.height === '10rem' && FGFShow2.style.display === 'none') {
            FGFCardEl.style.height = 'auto'
            FGFShow1.style.display = 'none'
            FGFShow2.style.display = 'flex'
        } else {
            FGFCardEl.style.height = '10rem'
            FGFShow1.style.display = 'flex'
            FGFShow2.style.display = 'none'
        }
    }

    render() {
        const styles = {
            FGFCardHeight: {
                height: '10rem'
            },
            show2: {
                display: 'none'
            }
        }

        const { job, position, imgPath, time } = this.props;

        return (
            <div className="FGFCard" style={styles.FGFCardHeight} onClick={this.handleDrop}>

                <div className="show1" >
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
                    <div className="row"></div>

                </div>


                <div className="show2" style={styles.show2}>
                    <div className="row">

                        <div id="col2">
                            <div className="FGFCardText px-0">
                                <p className="p-font med card-title" id="pos">{position}</p>
                                <p className="s-font" id="job">{job}<div id="lightText card-text time">{time}</div></p>
                            </div>
                        </div>
                    </div>

                </div>

            </div >
        )
    }
}



export default FGFCard;