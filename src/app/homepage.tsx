import React from 'react'
interface Props {
  name: String
}
class HelloComponent extends React.Component {
  public state
  constructor(props: Props) {
    super(props)
    this.state = props.name
  }
  render() {
    return (
     <div>{this.state}</div>
    )
  }
}

export default HelloComponent