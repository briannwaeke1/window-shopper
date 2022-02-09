import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    // Dynamically change styles (background image) for each menu item component to the string interpolated value of image URL
    <div style={{ 
        backgroundImage: `url(${imageUrl})`
    }}
    // Dynamically change class name value. If size value exists, add it to the class name
    className={`${size} menu-item`}
    >
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>    
);


export default MenuItem;