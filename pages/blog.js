import React from 'react';

import Articles from '../components/articles/articles';
import Footer from '../components/footer';
import Main from '../components/main';
import Nav from '../components/Nav';
import Page from '../components/page';

const Index = () => (
    <Page
        description={
            'The premiere video course for building production, server-side rendered applications with Next.js and React.'
        }
        image={'/static/images/banner.png'}
        title={'Mastering Next.js'}
    >
        <Nav />
        <Main>
            <Articles />
        </Main>
        <Footer />
    </Page>
);

export default Index;
