import React from 'react';
import PageTitle from '../layout/PageTitle';
import WorkBox from '../work/WorkBox';

const Work = () => {
    return (
        <div className="container-fluid main-px mt-5">
        
            <PageTitle pageName="Selected Projects" descriptionBottom="Click on the cards to learn more about my projects" />
            <WorkBox/>

            
        </div>
    );
}

export default Work;