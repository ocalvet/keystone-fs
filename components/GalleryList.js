import React from 'react';
import Gallery from './Gallery';

export default ({ galleries }) => {
  return (
    <div>
      {galleries.map(g => (
          <div key={g._id}>
            <Gallery gallery={g} />
          </div>
        ))}
    </div>
  );
}