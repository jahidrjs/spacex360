import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Col, Row, Card, Image } from 'antd';
const { Meta } = Card;

const rocket = () => {
  const rockets = useSelector((state: any) => state.allRockets.rockets);
  console.log(rockets);
  const renderList = rockets.map((rocketdata: any) => {
    // const { id, title, image, price, category } = rocket;
    return (
      <Col
        xs={{ span: 5, offset: 1 }}
        sm={{ span: 6, offset: 2 }}
        lg={{ span: 6, offset: 2 }}
      >
        <Link
          to={`/details/${rocketdata.flight_number}`}
          key={rocketdata.flight_number}
        >
          <Card
            hoverable
            style={{ width: '100%', marginBottom: 10 }}
            cover={
              <Image alt="example" src={rocketdata.links.mission_patch_small} />
            }
          >
            <Meta
              title={rocketdata.mission_name}
              description={rocketdata.launch_year}
            />
          </Card>
        </Link>
      </Col>
    );
  });
  return <>{renderList}</>;
};

export default rocket;
