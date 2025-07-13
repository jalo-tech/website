import { Box, Card, CardMedia, Theme } from '@mui/material';
import {makeStyles} from "@mui/styles";

const images = [
  '/friends5.webp', // Imagen principal
  '/friends.jpg',
  '/friends4.webp',
];

const useStyles = makeStyles((theme: Theme) => ({
 container: {
    position: 'relative',
    width: '100%',  // full width on mobile
    height: 280,    // smaller height on mobile
    [theme.breakpoints.up('sm')]: {
      width: 570,
      height: 420,
    },
  },
  cardBase: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 280,
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: theme.shadows[4],
    transition: 'transform 0.3s ease',
    [theme.breakpoints.up('sm')]: {
      width: 550,
      height: 420,
      borderRadius: 16,
      boxShadow: theme.shadows[6],
    },
  },
  media: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

export default function ImageStack() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {images.map((src, index) => {
        const rotate = index === 1 ? 6 : index === 2 ? 12 : 0;
        return (
          <Card
            key={index}
            className={classes.cardBase}
            style={{
              left: index * 10,
              zIndex: images.length - index,
              transform: `rotate(${rotate}deg)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = `scale(1.03) rotate(${rotate}deg)`;
              e.currentTarget.style.zIndex = "10";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `rotate(${rotate}deg)`;
              e.currentTarget.style.zIndex = `${images.length - index}`;
            }}
          >
            <CardMedia
              component="img"
              image={src}
              alt={`Image ${index}`}
              className={classes.media}
            />
          </Card>
        );
      })}
    </Box>
  );
}
