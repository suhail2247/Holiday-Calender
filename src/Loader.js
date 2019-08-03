import React from 'react';

const Loader=(props)=>{
    return (
        <div >
            <div className="ui active inverted dimmer">
            <div className="ui text loader">{props.loadContent}</div>
            </div>
        </div>
    );
}

export default Loader;