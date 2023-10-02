import { Box, Typography } from '@material-ui/core';

import dynamic from 'next/dynamic';
const ShareProduct = dynamic(() => import('../components/ShareProduct.js'), {
  ssr: false
});

const IndexPage = () => {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px', gap: '12px' }}>
      <Typography>PaidTabs.com Test Project</Typography>
      <ShareProduct productURL="https://paidtabs.com/test" />
    </Box>
  );
}

export default IndexPage
