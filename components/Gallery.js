import React from 'react';

export default (props) => {
  console.log('Props', props);
  const {gallery} = props; 
  return (
    <div>
      <style jsx>{`
          .image {
            padding: 16px 16px;
            width: 200px;
            height: 200px;
          }
      `}</style>
      <h4>{gallery.name}</h4>
      <div>
      {gallery.images.map(i => {
        return (
          <img key={i._id} className="image" src={i.secure_url} alt={i.secure_url} />
        );
      })}
      </div>
    </div>
  );
}