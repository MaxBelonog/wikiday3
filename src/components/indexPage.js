import React, { Component } from 'react';
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap'

class IndexPage extends Component {
  render() {
    return (
      <Row>
        <Col>
          <ListGroup>
            {this.indexPage.map((article, index) =>{
              return (
                <ListGroupItem>
                  key={index}                  
                    <span className='Articles list'>
                      {article.name}
                    </span>
           </ListGroupItem>
              )
            })}
              return ()
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

export default IndexPage
