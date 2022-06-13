import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import Typography from '@mui/material/Typography';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import CircularProgress from '@mui/material/CircularProgress';

const imgData = [
  {
    des:"/hyd/ubl-1.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-2.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-3.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-4.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-5.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-6.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-7.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-8.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-9.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-10.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-11.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-12.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-13.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-14.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-15.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-16.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-17.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-18.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-19.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-20.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-21.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-22.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-23.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-24.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-25.jpg",
    description: "this is some text for this picture"
  },
  {
    des:"/hyd/ubl-26.jpg",
    description: "this is some text for this picture"
  },
];

export default function MasonryImageList() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const [ hover, setHover ] = React.useState(-1);
  const [ loadedAll, setLoadedAll ] = React.useState(false);
  const [ loaded, setLoaded ] = React.useState(0);

  const load = () => {
    setLoaded(loaded => loaded + 1);
  }

  React.useEffect(() => {
    setLoadedAll(loaded == imgData.length)
  }, [loaded])

  return (
    <Box sx={{ width: '100%', p: 5, position: 'relative'}}>
      {!loadedAll &&
        <Box sx={{position: 'absolute', width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <CircularProgress />
        </Box>}

      <ImageList variant="masonry" cols={matches? 4: 1} gap={8}>
        {imgData.map((item, idx) => (
          <ImageListItem key={idx} sx={{position: 'relative', opacity: loadedAll? 1: 0, transition: 'opacity 1s', visibility: loadedAll? 'visible': 'hidden',}} onMouseOver={() => setHover(idx)} onMouseLeave={() => setHover(-1)}>
            <img
              src={`${item.des}`}
              alt={item}
              loading="lazy"
              onLoad={load}
            />
            {/* {hover == idx &&
              <Box sx={{position: 'absolute', top: 0, left: 0, width: "100%", height: "100%", zIndex: 1, bgcolor: 'rgba(255, 255, 255, 0.71)', display: 'flex', flexDirection: 'center', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="body1">{item.description}</Typography>
              </Box>
            } */}
           </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
