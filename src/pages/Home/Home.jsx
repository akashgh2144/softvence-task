import React from 'react';

import CourseCard from './CourseCard';
import Accordion from './Accordion';

import AISalesCoach from './AISalesCoach';

const Home = () => {
    return (
        <div>

            <AISalesCoach></AISalesCoach>
            <CourseCard></CourseCard>
            <Accordion></Accordion>

        </div>
    );
};

export default Home;