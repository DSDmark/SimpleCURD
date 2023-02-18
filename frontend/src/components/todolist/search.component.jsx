import React, { useSate } from 'react'
import { IconButton, Input,InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/SearchRounded'
import { styled } from '@mui/material/styles'

const Seacrh = styled(Input)(({ theme }) => ({
  width: '100%',
}))

const SearchBar = ({ searchQuery }) => {
  return (
    <>
      <Seacrh type="text" placeholder="Seacrh Your Todo... 🔎"
        endAdornment={
        <InputAdornment position="end">
          <IconButton>
            <SearchIcon color="primary" />
          </IconButton>
        </InputAdornment>
      }
        />
      </>
  )
}

export default SearchBar
