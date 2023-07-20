import React from 'react';
import Pagination from '@mui/material/Pagination';
import './style.css'

export default function PaginationControl({page, handlePageChanges}) {
  return (
    <div className='pagination'>
      <Pagination 
      sx={{
        color:'var(--orange)',
        '& .Mui-selected':{
            background: 'var(--orange) !important',
            color:'var(--lightGrey)',
            borderColor: 'var(--orange) !important'
        },
        '& .MuiPaginationItem-previousNext':{
            border: 'none'
        },
        '& .MuiSvgIcon-root':{
            color:'var(--Grey)'
        },
        '& .MuiButtonBase-root':{
            color:'var(--black)',
            fontWeight: 'bold'
        },
        '& .MuiPaginationItem-ellipsis':{
            border: '0px solid var(--grey) !important'
        },
        '& .MuiPagination-text':{
            color:'var(--black)',
            border: '1px solid var(--grey)'
        },
      }}
      
      count={10} page={page} onChange={(e, value)=>{handlePageChanges(e, value)}} variant="outlined" shape="rounded"/>
    </div>
  );
}
