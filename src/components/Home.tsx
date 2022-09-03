import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setRockets } from '../redux/actions/rocketsActions';

import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import { Link } from 'react-router-dom';
import { Col, Row, Card } from 'antd';
const { Meta } = Card;
import Rocket from '../components/Rocket';

import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value: string) => console.log(value);

import {
  AutoComplete,
  Button,
  Cascader,
  DatePicker,
  InputNumber,
  Select,
  Tooltip,
} from 'antd';

const { Option } = Select;

function Home() {
  const [searchItem, SetsearchItem] = useState('');
  const rockets = useSelector((state: any) => state.allRockets.rockets);
  // console.log('rocket' + rockets);
  const dispatch = useDispatch();
  const fetchRockets = async () => {
    const response = await axios
      .get('https://api.spacexdata.com/v3/launches')
      .catch((err) => {
        console.log('Err: ', err);
      });

    dispatch(setRockets(response));
  };

  useEffect(() => {
    fetchRockets();
  }, []);

  // console.log(response);

  return (
    <Content
      className="site-layout"
      style={{ padding: '0 50px', marginTop: 64 }}
    >
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 380 }}
      >
        {/* <h2>SpaceX Mission's</h2> */}
        <Row gutter={[16, 16]}>
          <Col lg={{ offset: 2 }} span={4}>
            <Select defaultValue="All" size="large">
              <Option value="All">By Launch Date</Option>
              <Option value="Last Week">Last Week</Option>
              <Option value="Last Month">Last Month</Option>
              <Option value="Last YEAR">Last YEAR</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Select defaultValue="All" size="large">
              <Option value="All">Launch Status</Option>
              <Option value="Failure">Failure</Option>
              <Option value="Success">Success</Option>
            </Select>
          </Col>
          <Col span={4}>
            <Select defaultValue="All" size="large">
              <Option value="All">Upcomming Launch</Option>
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
          </Col>
          <Col span={10}>
            <Search
              placeholder="Search By Rocket name"
              enterButton="Search"
              size="large"
              suffix={suffix}
              onSearch={onSearch}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Rocket />
        </Row>
      </div>
    </Content>
  );
}

export default Home;
