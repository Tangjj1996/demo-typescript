import React from 'react'
interface Props {
  name?: String
}
class HelloComponent extends React.Component {
  constructor(props: Props) {
    super(props)
  }
  render() {
    return (
     <div>hahahah</div>
    )
  }
}

export default HelloComponent