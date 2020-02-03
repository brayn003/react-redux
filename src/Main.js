import React from 'react';
import { Layout, Row, Col } from 'antd';

import AddItem from './AddItem';
import ItemList from './ItemList';

const { Content } = Layout;

class Main extends React.Component {
  state = {
    list: []
  }

  onClickButton = (val) => {
    const {list} = this.state;
    this.setState({
      list: [
        ...list,
        val
      ],
    })
  }

  render() {
    return (
      <Layout>
        <Content 
          style={{height: '100vh'}}
        >
          <Row style={{height: '100%'}}>
            <Col 
              style={{
                height: '100%', 
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }} 
              span={12}
            >
              <AddItem 
                onClickButton={this.onClickButton} 
              />
            </Col>
            <Col 
              style={{
                height: '100%', 
                display:'flex',
                alignItems: 'center',
              }} 
              span={12}
            >
              <ItemList list={this.state.list} />
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default Main;