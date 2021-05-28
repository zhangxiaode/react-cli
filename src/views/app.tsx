import React from 'react';
import { Button } from 'antd';
import './app.scss';
class App extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = { 

    }
  }
  componentdidMounted() {

  }
  render() {
    return (
      <Button type="primary">Button</Button>
    )
  }
}

export default App;
