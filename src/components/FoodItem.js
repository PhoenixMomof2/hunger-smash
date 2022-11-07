import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const FoodItem = ({food: {id, name, imgUrl, category, description} }) =>
{
  return (
    <div>
    <Card key={id} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgUrl}
          alt="Image of `${name}`"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {category}: {description}  
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}

export default FoodItem;

