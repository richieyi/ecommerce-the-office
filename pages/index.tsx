import React from 'react';
import { NextPage } from 'next';
import useSWR from 'swr';
import Layout from '@components/Layout';
import Products from '@components/Products';
// import { auth } from '@firebase';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const HomePage: NextPage = () => {
  // const [loading, setLoading] = React.useState<boolean>(true);
  // const [user, setUser] = React.useState<any>(null);

  const { data, error } = useSWR('/api/products', fetcher);

  // React.useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     setLoading(false);
  //     if (user) {
  //       setUser(user);
  //     }
  //   });
  // }, []);

  if (!data) return <div />;

  // const handleLogout = (): void => {
  //   auth.signOut().then(() => setUser(null));
  // };

  return (
    <Layout>
      <main>
        {/* <NavBar user={user} handleLogout={handleLogout} /> */}
        <Products products={data} />
      </main>
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </Layout>
  );
};

export default HomePage;
