// import * as React from 'react';
import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
    const [readMore,setReadMore]=useState(false);
    const extraContent=<div>
        <p className="extra-content">
        Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!
        </p>
    </div>
    const linkName=readMore?'Read Less << ':'Read More >> '
  return (
    <Card sx={{ maxWidth: 325}}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image="https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Best of Paris in 7 Days Tour
          </Typography>
          <Typography variant="body2" color="text.secondary">
          
          </Typography>
        <div >
        <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
        {readMore && extraContent}
      </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}