import { Box, Typography } from '@material-ui/core';
import dynamic from 'next/dynamic';
import Head from 'next/head.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShareProduct = dynamic(() => import('../components/ShareProduct.js'), {
  ssr: false
});

const IndexPage = () => {
  return (
    <Box>
      <Head>
        <title>Social Sharing</title>
        <meta name="title" content='PaidTabs' />
        <meta property="og:title" content='PaidTabs Social Sharing' />
        <meta name="description" content='paid tabs social media sharing' />
        <meta property="og:description" content='paid tabs social media sharing' />
      </Head>
      <ToastContainer />
      <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px', gap: '12px' }}>
        <Typography variant='h5'>PaidTabs.com Test Project</Typography>
        <ShareProduct productURL="https://paidtabs.com/test" />
      </Box>
    </Box>
  );
}

export default IndexPage
