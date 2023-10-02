import React, { useState } from 'react'
import { Box, Button, Dialog, Typography, IconButton } from '@material-ui/core';
import {
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  InstapaperIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  LineShareButton,
  LineIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { copyToClipboard } from '../utils/function';


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
        <Box style={{ maxWidth: '500px', width: '500px', padding: '40px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Typography variant='h5'>{'Share this Product'}</Typography>
          <Box style={{ display: 'flex', flexDirection: "row", gap: '16px', justifyContent: 'center', paddingTop: '16px', paddingBottom: '16px' }}>
            <FacebookShareButton url={productURL}>
              <FacebookIcon style={{ borderRadius: '100px', width: '40px', height: '40px' }} />
            </FacebookShareButton>
            <LinkedinShareButton url={productURL}>
              <LinkedinIcon style={{ borderRadius: '100px', width: '40px', height: '40px' }} />
            </LinkedinShareButton>
            <TwitterShareButton url={productURL}>
              <TwitterIcon style={{ borderRadius: '100px', width: '40px', height: '40px' }} />
            </TwitterShareButton>
            <WhatsappShareButton url={productURL}>
              <WhatsappIcon style={{ borderRadius: '100px', width: '40px', height: '40px' }} />
            </WhatsappShareButton>
            <TelegramShareButton url={productURL}>
              <TelegramIcon style={{ borderRadius: '100px', width: '40px', height: '40px' }} />
            </TelegramShareButton>
            <InstapaperShareButton url={productURL}>
              <InstapaperIcon style={{ borderRadius: '100px', width: '40px', height: '40px' }} />
            </InstapaperShareButton>
            <LineShareButton url={productURL}>
              <LineIcon style={{ borderRadius: '100px', width: '40px', height: '40px' }} />
            </LineShareButton>
          </Box>
          <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center", gap: '8px' }}>
            <Typography variant='h6'>{productURL}</Typography>
            <IconButton onClick={() => copyToClipboard(productURL)}>
              <FileCopyOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Dialog>
    </Box>
  )
}

export default ShareProduct