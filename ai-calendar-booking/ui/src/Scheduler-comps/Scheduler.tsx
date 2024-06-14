export type SchedulerProps = {
    eventType?: 'conference' | 'party' | 'wedding' | 'meeting';
    date?: string;
    time?: string;
    numberOfAttendees?: number;
};

export const Scheduler = (props: SchedulerProps) => {
    return (
        <div>
            <h2>Scheduler</h2>
            <div>
                <label>Event Type</label>
                <select value={props.eventType}>
                    <option value="conference">Conference</option>
                    <option value="party">Party</option>
                    <option value="wedding">Wedding</option>
                    <option value="meeting">Meeting</option>
                </select>
            </div>
            <div>
                <label>Date</label>
                <input type="date" value={props.date} />
            </div>
            <div>
                <label>Time</label>
                <input type="time" value={props.time} />
            </div>
            <div>
                <label># of Attendees</label>
                <input type="number" value={props.numberOfAttendees} style={{ width: 50 }} />
            </div>
        </div>
    );
};
