import React, { useEffect } from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedRocket,
  removeSelectedRocket,
} from '../redux/actions/rocketsActions';
import { Col, Row, Card, Image } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

function Detail() {
  const { launchId } = useParams();
  let selectRocket = useSelector((state: any) => state.rocket);

  // const { launch_year, mission_name, rocket_name } = rocket;
  const dispatch = useDispatch();
  const fetchRocketDetail = async (id: any) => {
    const response = await axios
      .get(`https://api.spacexdata.com/v3/launches/${id}`)
      .catch((err) => {
        console.log('Err: ', err);
      });
    dispatch(selectedRocket(response));
  };

  useEffect(() => {
    if (launchId && launchId !== '') fetchRocketDetail(launchId);
    return () => {
      dispatch(removeSelectedRocket());
    };
  }, [launchId]);

  const rocketinfo = selectRocket.rocket;
  const linkinfo = selectRocket.links;
  var imageLink =
    'https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw340';
  if (typeof linkinfo != 'undefined') {
    // console.log(linkinfo);
    imageLink = linkinfo.mission_patch;
  }

  return (
    <Content
      className="site-layout"
      style={{ padding: '0 50px', marginTop: 64 }}
    >
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 380 }}
      >
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Card
              hoverable
              style={{ width: '100%', marginBottom: 10 }}
              cover={<Image alt="example" src={imageLink} />}
            ></Card>
          </Col>
          <Col span={12}>
            <h1>Mission Name: </h1>
            {selectRocket.mission_name}
            <h1>Launch ID: </h1>
            {selectRocket.mission_id}
            <h1>Launch Year: </h1>
            {selectRocket.launch_year}
            <h1>Details:</h1>
            <p>{selectRocket.details}</p>
          </Col>
        </Row>
      </div>
    </Content>
  );
}

export default Detail;
