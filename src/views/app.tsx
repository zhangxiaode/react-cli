import { connect } from 'mirrorx';
import React from 'react';
import { Button } from 'antd';
import './app.scss';
class App extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = { 

    }
  }
  async componentDidMount() {
    const props: any = this.props
    console.log(props)
    await props.dispatch({
      type: 'app.incrementAsync'
    })
    console.log(props)
  }
  render() {
    return (
      <Button type="primary">Button</Button>
    )
  }
}

export default connect(state => state)(App);
