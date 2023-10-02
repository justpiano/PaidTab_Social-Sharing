import React, { useState } from 'react'
import { Box, Button, Dialog, Typography } from '@material-ui/core';

const ShareProduct = ({ productURL }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenDialog()}
      >
        Share Product
      </Button>
      <Dialog open={isDialogOpen} onClose={() => handleCloseDialog()} >
        <Box style={{ maxWidth: '500px', width: '500px', padding: '20px', minHeight: '300px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant='h5'>{'Share this Product'}</Typography>
          <Typography variant='h6'>{productURL}</Typography>
        </Box>
      </Dialog>
    </Box>
  )
}

export default ShareProduct