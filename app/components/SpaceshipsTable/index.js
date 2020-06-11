/**
 *
 * SpaceshipsTable
 *
 */

import React from 'react';
import { changePage } from '../../containers/HomePage/actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import LoadingSpinner from '../LoadingSpinner';
const TableContainer = styled(Container)`
  background-color: white;
  padding: 1rem;
  margin-top: 3rem;
  border-radius: 10px;
`;
export function ResultTable(props) {
  const loading = props.loading;
  const spaceships = props.spaceships;
  const currentPage = props.currentPage;

  const columns = [
    {
      dataField: 'name',
      text: 'Nombre',
    },
    {
      dataField: 'model',
      text: 'Modelo',
    },
    {
      dataField: 'manufacturer',
      text: 'Fabricante',
    },
    {
      dataField: 'passengers',
      text: 'Pasajeros',
    },
  ];

  const expandRow = {
    renderer: row => (
      <div>
        <p>{`Costo en creditos: ${row.cost_in_credits}`}</p>
        <p>{`Maxima velocidad atmosferica: ${row.max_atmosphering_speed}`}</p>
        <p>{`Costo en creditos: ${row.cost_in_credits}`}</p>
        {/* TODO: ADD MODAL */}
        <p>Ver más...</p>
      </div>
    ),
  };

  const options = {
    // custom: true,
    totalSize: spaceships.count,
    // sizePerPage: 5,
    hideSizePerPage: true,
    // hidePageListOnlyOnePage: true,
    firstPageText: 'Inicio',
    prePageText: 'Regresar',
    nextPageText: 'Siguiente',
    lastPageText: 'Ultima',
    onPageChange: (page, sizePerPage) => {
      props.dispatchChangePage(page);
    },
  };
  return (
    <TableContainer>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <BootstrapTable
          keyField="name"
          data={spaceships.results == undefined ? [] : spaceships.results}
          columns={columns}
          expandRow={expandRow}
          noDataIndication="No hay resultados para mostrar"
          pagination={paginationFactory(options)}
        />
      )}
    </TableContainer>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchChangePage: (page) => dispatch(changePage(page)),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(ResultTable);
