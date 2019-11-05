import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Timer from '../components/Timer';

const List = () => {
    const [timers, setTimers] = useState([]);

    function addTimer() {
        const addedTimers = [...timers];
        addedTimers.push({
            timer: 5,
            index: timers.length,
            finished: false
        });
        setTimers(addedTimers);
    }

    const onEnds = index => {
        const removedTimers = [...timers];
        removedTimers[index].finished = true;
        setTimers([...removedTimers]);
    };

    return (
        <>
            <Button variant="contained" onClick={addTimer}>Add</Button>
            {timers.map((timerProps) => !timerProps.finished ? <Timer key={timerProps.index} { ...timerProps } onEnds={onEnds}/> : null)}
        </>
    );
};

export default List;
