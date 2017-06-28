import React from 'react';

const Page = ({items}) => (
  <div className="gallery-page">
    {
      items.map(item =>
        <div className="thumb">
          <img alt={item.alt}/>
        </div>
      )
    }
  </div>
);

export default Page;
