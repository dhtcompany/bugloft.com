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

  const { Component, pageProps, store } = props;
  return (
    <>
      <Provider store={store}>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <title>Bugloft - Diễn đàn đánh giá, chia sẻ trải nghiệm đối với mọi thứ trong cuộc sống</title>
          <link rel='shortcut icon' href='/static/favicon.ico' type='image/ico' />
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
