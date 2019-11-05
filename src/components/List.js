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
        const changedTimers = [...timers];
        changedTimers[index].finished = true;
        setTimers(changedTimers);
    };

    const onIncr = (index, val) => {
        if (val < 0) {
            onEnds(index);
        } else {
            const changedTimers = [...timers];
            changedTimers[index].timer = val;
            setTimers(changedTimers);
        }
    };

    return (
        <>
            <Button variant="contained" onClick={addTimer}>Add</Button>
            {timers.map((timerProps, index) => !timerProps.finished ? <Timer key={index} { ...timerProps } onEnds={onEnds} onIncr={onIncr}/> : null)}
        </>
    );
};

export default List;
