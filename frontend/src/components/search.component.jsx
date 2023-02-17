import React, { useSate } from 'react'
import { IconButton, TextField } from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import { styled } from '@mui/material/styles'

const Seacrh = styled(TextField)(({ theme }) => ({
  width: '100%',
}))

const SearchBar = ({ searchQuery }) => {
  return (
    <>
      <Seacrh>
        <IconButton>
          <TravelExploreIcon />
        </IconButton>
      </Seacrh>
    </>
  )
}

export default SearchBar
