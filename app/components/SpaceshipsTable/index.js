/**
 *
 * SpaceshipsTable
 *
 */

import React from 'react';
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
export default function ResultTable(props) {
  const loading = props.loading;
  const spaceships = props.spaceships;
  // console.log(spaceships.count);
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
        <p>{`This Expand row is belong to rowKey ${row.id}`}</p>
        <p>
          You can render anything here, also you can add additional data on
          every row object
        </p>
        <p>
          expandRow.renderer callback will pass the origin row object to you
        </p>
      </div>
    ),
  };

  const options = {
    // custom: true,
    totalSize: spaceships.count == undefined ? 0 : spaceships.count,
    // sizePerPage: 5,
    hideSizePerPage: true,
    // hidePageListOnlyOnePage: true,
    firstPageText: 'Inicio',
    prePageText: 'Regresar',
    nextPageText: 'Siguiente',
    lastPageText: 'Ultima',
    onPageChange: (page, sizePerPage) => {},
  };
  return (
    <TableContainer>
      {loading ? <LoadingSpinner /> : ''}
      <BootstrapTable
        keyField="name"
        data={spaceships.results == undefined ? [] : spaceships.results}
        columns={columns}
        expandRow={expandRow}
        noDataIndication="No hay resultados para mostrar"
        pagination={paginationFactory(options)}
      />
    </TableContainer>
  );
}
