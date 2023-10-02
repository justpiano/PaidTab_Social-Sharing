import { Box, Typography } from '@material-ui/core';
import dynamic from 'next/dynamic';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShareProduct = dynamic(() => import('../components/ShareProduct.js'), {
  ssr: false
});

const IndexPage = () => {
  return (
    <Box>
      <ToastContainer />
      <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px', gap: '12px' }}>
        <Typography variant='h5'>PaidTabs.com Test Project</Typography>
        <ShareProduct productURL="https://paidtabs.com/test" />
      </Box>
    </Box>
  );
}

export default IndexPage
