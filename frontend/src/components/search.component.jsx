import React, { useSate } from 'react'
import { IconButton, TextField } from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'

const SearchBar = ({ searchQuery }) => {
  return (
    <>
      <TextField>
        <IconButton>
          <TravelExploreIcon />
        </IconButton>
      </TextField>
    </>
  )
}

export default SearchBar
