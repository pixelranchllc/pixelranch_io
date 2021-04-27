import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Layout from '../components/Layout';
import Home from '../components/Home';
import Services from '../components/Services';
import Tech from '../components/Tech';
import Contact from '../components/Contact';

const IndexPage = () => (
  <Layout>
    <Home />
    <Services />
    <Contact />
  </Layout>
);

export default IndexPage;
