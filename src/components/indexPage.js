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
            {this.props.articles.map((article, index) =>{
              return (
                <ListGroupItem key={index}> 
                    <p className='Articles list'>
                      {article.title}
                    </p>
                    <p>
                    {article.body}
                    </p>
               </ListGroupItem>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

export default IndexPage
