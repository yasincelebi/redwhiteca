import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import './CardList.scss';
import status from './status.json';
const CardList = () => {
  const [data, setData] = useState([]);
  let targetUrl = '/api';
  const [filteredData, setFilteredData] = useState([]);
  const getData = () => {
    axios
      .get(targetUrl, { crossdomain: true })
      .then((freshData) => {
        setData(freshData.data);
        setFilteredData(freshData.data);
      })
      .catch((e) => {
        console.log(e);
        return e;
      });
  };
  useEffect(() => {
    getData();
  }, []);
  const handleFilter = (value) => {
    if (value !== 'All') {
      setFilteredData(data.filter((e) => e.status.label === value));
      console.log(data);
    } else if (value === 'All') {
      setFilteredData(data);
    }
  };

  return (
    <>
      <div className="card-list">
        <Container>
          <Row>
            {filteredData.map((e) => (
              <Col xl="4">
                <Card
                  code={e.code}
                  floorType={e.room_type.label}
                  internal={e.net_area}
                  external={e.out_area}
                  gross={e.gross_area}
                  pool={e.pool_area}
                  roof={e.roof_area}
                  className="card"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="filter-group">
        <h1 className="filter-header">Filter</h1>
        <hr />
        <h5 className="filter-header">Status</h5>
        {status.map((e) => (
          <Filter name={e.label} filtered={() => handleFilter(e.label)} />
        ))}
      </div>
    </>
  );
};
export default CardList;
