import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import Helmet from "react-helmet";

import "../assets/css/app.css";
import Footer from "./Footer";
import Header from "./Header";
import NavScrollTop from "./NavScrollTop";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            language
            description
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Helmet
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
        >
          <meta
            name="description"
            content="A Proper Resume develops compelling resumes and CVs for career professionals in the technology, healthcare, and management fields. A Proper Resume creates resumes to accurately describe your valuable experience and achievements in a concise readable format targeting your ideal next career chapter."
          />
          <meta name="author" content="A Proper Resume" />
          <meta name="distribution" content="global" />
          <meta name="Resource-Type" content="document" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="Cache-Control" content="no-cache" />
          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="Expires" content="0" />
          <meta httpEquiv="Content-Style-Type" content="text/css" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <html lang={data.site.siteMetadata.language} />
        </Helmet>

        <div className="container-fixed">
          <div className="wrapper header">
            <div className="col-empty" />

            <div className="col-main" id="top">
              <Header />
            </div>

            <div className="col-empty" />
          </div>
        </div>

        <div className="wrapper">
          <div className="col-empty" />

          <div className="col-main">
            <div className="content">{children}</div>
          </div>

          <div className="col-empty" />
        </div>

        <Footer />
        <NavScrollTop />
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
