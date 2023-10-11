import React, { useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';

const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_ratet' },
  { label: 'Upcoming', value: 'upcoming' },
];

const demoCategories = [
  { label: 'Comedy', value: 'comedy' },
  { label: 'Action', value: 'action' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animation', value: 'animation' },
];

const ImageLink = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  padding: '10% 0',
});

const Image = styled('img')({
  width: '70%',
});

const Links = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));

const GenreImages = styled('img')(({ theme }) => ({
  filter: theme.palette.mode === 'dark' && 'invert(1)',
}));

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();

  return (
    <>
      <ImageLink to="/">
        <Image
          src={theme.palette.mode === 'light' ? redLogo : blueLogo}
          alt="Filmpire logo"
        />
      </ImageLink>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Links key={value} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <GenreImages
                  src={redLogo}
                  height={30}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Links>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Links key={value} to="/">
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <GenreImages
                  src={redLogo}
                  height={30}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Links>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
