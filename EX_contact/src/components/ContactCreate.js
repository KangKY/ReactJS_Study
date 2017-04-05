import React from 'react';

export default class ContactCreate extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      phone:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleClick()
  {
    const contact = {
      name:this.state.name,
      phone:this.state.phone
    };

    this.props.onCreate(contact);

    this.setState({
      name:'',
      phone:''
    });

    this.nameInput.focus();
  }

  handleKeyPress(e)
  {
    if(e.charCode == 13)
      this.handleClick();
  }

  render() {
    return (
        <div>
          <h2>Create Contact</h2>
          <p>
            <input
              type="text"
              name="name"
              ref={(ref) => {this.nameInput = ref;}}
              // render() , constructor() 메소드는 ref 접근 불가
              // focus 기능은 ref만으로 사용 가능
              placeholder="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name="phone"
              placeholder="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
            />
          </p>
          <button onClick={this.handleClick}>Create</button>
        </div>
    );
  }
}

ContactCreate.propTypes = {
  onCreate: React.PropTypes.func
};

ContactCreate.defaultProps = {
  onCreate: ()=> {console.log("Props");}
};