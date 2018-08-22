import React, { Component } from 'react';


const Header = props => (
    
    <header style={{marginBottom:10}}>
    <div>
        <span className="header">{props.title}</span>
    </div>

    </header>
    
)

export default Header;