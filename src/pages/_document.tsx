import createEmotionServer from '@emotion/server/create-instance';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React, { Children } from 'react';

import { createEmotionCache } from 'utils/emotion-cache.utils';

export default class MyDocument extends Document {
  // Sets up a serverside cache with hydration on the client
  static async getInitialProps(ctx: DocumentContext) {
    const { renderPage } = ctx;

    // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      renderPage({
        // eslint-disable-next-line
        enhanceApp: (App: any) => (props) => <App emotionCache={cache} {...props} />,
      });

    const initialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [...Children.toArray(initialProps.styles), ...emotionStyleTags],
    };
  }

  render() {
    const locale = this.props.locale;

    return (
      <Html lang={locale}>
        <Head>
          <meta charSet="utf-8" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="mask-icon" href="safari-pinned-tab.svg" color="#3349e8" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
