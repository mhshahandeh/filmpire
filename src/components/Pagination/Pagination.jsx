import React from 'react';
import { Typography, Button, styled } from '@mui/material';

const Conteiner = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const PageNumber = styled(Typography)(({ theme }) => ({
  margin: '0 20px !important',
  color: theme.palette.text.primary,
}));

function Pagination({ currentPage, setPage, totlaPages }) {
  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage !== totlaPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (totlaPages === 0) return null;

  return (
    <Conteiner>
      <Button onClick={handlePrev} margin="20px 2px" variant="contained" color="primary" type="button">
        Prev
      </Button>
      <PageNumber variant="h4">
        {currentPage}
      </PageNumber>
      <Button onClick={handleNext} margin="20px 2px" variant="contained" color="primary" type="button">
        Next
      </Button>
    </Conteiner>
  );
}

export default Pagination;
