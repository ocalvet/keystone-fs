import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

export default (props) => {
  console.log('Props', props);
  const {gallery} = props; 
  return (
    <div>
      <h4 style={{ marginBottom: 15 }}>{gallery.name}</h4>
      <GridList cols={2.5}>
        {gallery.images.map(image => {
          console.log('image', image);
          return (
          <GridListTile key={image._id}>
            <img src={image.secure_url} alt={image.secure_url} />
            <GridListTileBar title={image.public_id}/>
          </GridListTile>
        )})}
      </GridList>
    </div>
  );
}