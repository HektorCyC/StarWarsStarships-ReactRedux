/**
 *
 * LoadingSpinner
 *
 */

import React from 'react';
import styled from 'styled-components';
import Loader from "./assets/loader.gif";

const Spinner = styled.img`
  margin-left: -100px;
  left: 50%;
  top: 20%;
  position: absolute;
  width: 200px;
  z-index: 10;
`;
function LoadingSpinner() {
  return <Spinner src={Loader} />;
}

export default LoadingSpinner;
