import { useState } from 'react';

function QuickNote() {
    const [note, setNote] = useState('');

    return (
        <div>
            <h3>Quick Note</h3>
            <input 
                value={note} 
                onChange={(e) => setNote(e.target.value)} 
            />
            < p>Your note: {note}</p>
        </div>
    );
}

export default QuickNote;