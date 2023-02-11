import React, { useSate } from 'react'
import { IconButton, TextField } from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const SearchBar = ({ searchQuery }) => {
  return (
    <>
      <form>
        <TextField>
          <IconButton>
            <TravelExploreIcon  />
          </IconButton>
        </TextField>
      </form>
    </>
  )
}

export default SearchBar
