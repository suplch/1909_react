import React from 'react';

export function Welcome(props) {
    return (
        <div>
            <p>欢迎 {props.name} 来视察 {props.place}</p>
        </div>
    );
}


