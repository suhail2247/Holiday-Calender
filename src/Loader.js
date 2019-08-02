import React from 'react';

const Loader=(props)=>{
    return (
        <div class="ui segment">
            <div class="ui active inverted dimmer">
            <div class="ui text loader">{props.loadContent}</div>
            </div>
        </div>
    );
}