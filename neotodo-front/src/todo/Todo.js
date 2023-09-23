import React from 'react';

function Hello({isAdmin}) {
    const style = {
        backgroundColor : "#7eb4a2"
    }
    return <div style={style}>{isAdmin === "Y" ? "isAdmin" : "isUser"}</div>
}

export default Hello;