import React from 'react';

const NavigationDots = ({ active }) => (
  <div className='app__navigation'>
      {['home',
        'about',
        'work',
        'skills',
        //'testimonial',
        'contact' ].map((item, index) => (
            <a 
                href={`#${item}`} 
                key={item + index}
                className='app__navigation-dot'
                style={active === item ? { backgroundColor: 'rgb(130, 0, 1)' } : {}}
            />
        ))}
  </div>
)

export default NavigationDots;

