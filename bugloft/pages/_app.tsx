import "antd/dist/antd.less";
import { NextPage } from 'next';
import withReduxSaga from 'next-redux-saga';
import withRedux, { NextJSContext } from 'next-redux-wrapper';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from "react";
import { Provider } from 'react-redux';
import '../assets/self-styles.less';
import NoLayout from '../components/NoLayout';
import PageSeo from "../components/PageSeo";
import createStore from '../redux/store';

type NextContext = NextJSContext & AppProps & {}

const NextApp: NextPage<NextContext> = (props) => {
  const gtagUrl = 'https://www.googletagmanager.com/gtag/js?id=G-Y0ZH6GFD82';
  const gtagContent = `window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date()); 
  gtag('config', 'G-Y0ZH6GFD82');`

  const { Component, pageProps, store } = props;
  return (
    <>
      <Provider store={store}>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <title>Bugloft - Diễn đàn đánh giá, chia sẻ trải nghiệm đối với mọi thứ trong cuộc sống</title>
          <link rel='shortcut icon' href='/static/favicon.ico' type='image/ico' />

          <title>Bugloft - Diễn đàn đánh giá, chia sẻ trải nghiệm đối với mọi thứ trong cuộc sống</title>
          <meta name="title" content="Bugloft - Diễn đàn đánh giá, chia sẻ trải nghiệm đối với mọi thứ trong cuộc sống" />
          <meta name="description" content="Diễn đàn đánh giá, chia sẻ trải nghiệm đối với mọi thứ trong cuộc sống: văn hóa, kinh tế, sản phẩm, công nghệ, loại hình giải trí ... Đánh giá khách quan nhằm hổ trợ người dùng thông tin trc khi tiếp cận thực tế." />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://bugloft.com/" />
          <meta property="og:title" content="Bugloft - Diễn đàn đánh giá, chia sẻ trải nghiệm đối với mọi thứ trong cuộc sống" />
          <meta property="og:description" content="Diễn đàn đánh giá, chia sẻ trải nghiệm đối với mọi thứ trong cuộc sống: văn hóa, kinh tế, sản phẩm, công nghệ, loại hình giải trí ... Đánh giá khách quan nhằm hổ trợ người dùng thông tin trc khi tiếp cận thực tế." />
          <meta property="og:image" content="https://bugloft.com/images/imgsseo.jpg" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://bugloft.com/" />
          <meta property="twitter:title" content="Bugloft - Diễn đàn đánh giá, chia sẻ trải nghiệm đối với mọi thứ trong cuộc sống" />
          <meta property="twitter:description" content="Diễn đàn đánh giá, chia sẻ trải nghiệm đối với mọi thứ trong cuộc sống: văn hóa, kinh tế, sản phẩm, công nghệ, loại hình giải trí ... Đánh giá khách quan nhằm hổ trợ người dùng thông tin trc khi tiếp cận thực tế." />
          <meta property="twitter:image" content="https://bugloft.com/images/imgsseo.jpg" />

          {/* dynamic gtag */}
          <script async src={gtagUrl}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `${gtagContent}`
            }}
          />
        </Head>
        <PageSeo />
        <NoLayout>
          <Component {...pageProps} />
        </NoLayout>
      </Provider>
    </>
  );
}

NextApp.getInitialProps = async (context: NextContext) => {
  const { ctx, Component } = context;
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  return { pageProps };
}

export default withRedux(createStore)(withReduxSaga(NextApp));
