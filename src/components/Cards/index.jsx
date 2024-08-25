import React from 'react';
import { Card } from 'react-bootstrap';
import './index.css';

const CardComponent = ({ title, description,col="col-md-4",className=''  }) => {
    return (
        <div className={col}>
          <Card className={className} style={{ width: '100%' }}>
            <Card.Body>
              <Card.Text>{title}</Card.Text>
              <Card.Title>
                {description}
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
    );
};
  
export default CardComponent;