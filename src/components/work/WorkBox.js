import React from 'react';
import CardContent from './CardContent';

const WorkBox = (props) => {
    return (
        <div className="row py-5">
            <div className="col">
                <div className="customCard">
                    <CardContent title="Huddle" body="A modern sports betting application that connects fans while supporting local venues." imgPath="huddle.jpg" />
                </div>
            </div>
            <div className="col">
                <div className="customCard mx-auto">
                    <CardContent title="Huddle" body="A modern sports betting application that connects fans while supporting local venues." imgPath="huddle.jpg" />
                </div>

            </div>
            <div className="col">
                <div className="customCard float-right">
                    <CardContent title="Huddle" body="A modern sports betting application that connects fans while supporting local venues." imgPath="huddle.jpg" />
                </div>

            </div>
        </div>
    )
}

const styles = {
    customCard: {

    }

    /* Card */
.customCard {
    width: 80%;
    height: 500px;
    box-shadow: 0 0 10px #ccc;
    padding: 5rem 4rem 5rem 4rem;
    border-radius: 15px;
  }
  
  
}

export default WorkBox;