/**
 *
 * HomePage
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSpaceshipsSelector, makeLoadingSelector, makePageSelector } from './selectors';
import { loadSpaceships } from './actions';
import reducer from './reducer';
import saga from './saga';

// Load Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// Load Custom components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SpaceshipsTable from '../../components/SpaceshipsTable';

export function HomePage(props) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });
  const spaceships = props.spaceships;
  const loading = props.loading;
  useEffect(() => {
    props.dispatchLoadSpaceships();
  }, []);
  return (
    <Container fluid="true">
      <Helmet>
        <title>Star wars | Spaceships</title>
        <meta name="description" content="Spaceships" />
      </Helmet>
      <Row>
        <Header />
      </Row>
      <Row>
        <SpaceshipsTable
          spaceships={spaceships}
          loading={loading}
        />
      </Row>
      <Footer />
    </Container>
  );
}

HomePage.propTypes = {
  spaceships: PropTypes.object,
  loading: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  spaceships: makeSpaceshipsSelector(),
  loading: makeLoadingSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchLoadSpaceships: () => dispatch(loadSpaceships()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
