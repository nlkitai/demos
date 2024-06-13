import '@nlux/themes/nova.css';
import './App.css'
import {useAiTask} from '@nlux/react';
import {useState} from 'react';
import {Assistant} from './NLUX-comps/Assistant.tsx';
import {MyAiContext} from './NLUX-comps/Context.tsx';
import {Scheduler, SchedulerProps} from './Scheduler-comps/Scheduler.tsx';

function App() {
    const [schedulerState, setSchedulerState] = useState<SchedulerProps>({});
    useAiTask(
        MyAiContext,
        'Assist the user in scheduling an appointment by filling the details in the scheduler component',
        (eventType: unknown, date: unknown, time: unknown, numberOfAttendees: unknown) =>
            setSchedulerState({
                eventType: eventType as SchedulerProps['eventType'],
                date: date as SchedulerProps['date'],
                time: time as SchedulerProps['time'],
                numberOfAttendees: numberOfAttendees as SchedulerProps['numberOfAttendees'],
            }
        ),
        [
            'A string representing the type of event. It could be one of the following: conference, party, wedding, meeting',
            'A string representing the date of the event. It should be in the format YYYY-MM-DD',
            'A string representing the time of the event. It should be in the format HH:MM',
            'A number representing the number of attendees for the event',
        ]
    );

    return (
        <div style={{display: 'flex', flexDirection: 'row', gap: 20, width: 800, height: 500}}>
            <div style={{flex: 1}}>
                <Assistant/>
            </div>
            <div style={{flex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Scheduler {...schedulerState} />
            </div>
        </div>
    );
}

export default () => (
    <MyAiContext.Provider>
        <App/>
    </MyAiContext.Provider>
);

