import dynamic from 'next/dynamic';
const ShareProduct = dynamic(() => import('../components/ShareProduct.js'), {
  ssr: false
});

export default function IndexPage() {
  return (
    <div>
      <h2>PaidTabs.com Test Project</h2>

      <ShareProduct productURL="https://paidtabs.com/test" />
    </div>
  );
}