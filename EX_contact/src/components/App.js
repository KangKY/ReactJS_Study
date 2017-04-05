import React from 'react';
import Contact from './Contact';

/*
1. componentWillMount : 렌더링 되기 전
2. componentDidMount : 렌더링 된 후
3. componentWillReceiveProps : 새로운 props를 받았을 경우
4. shouldComponentUpdate : 컴포넌트를 업데이트 해야할지 말아야할지 정하는 부분
5. componentWillUpdate : 컴포넌트가 업데이트 되기 전에 실행되는 부분
6. componentDidUpdate : 컴포넌트가 업데이트 된 후 실행되는 부분
7. componentWillUnmount :  컴포넌트가 제거될 때
*/




class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      name:'Contacts'
    };
  }

  render(){
      return (
        <div>
        <button onClick={()=>{this.setState({name:'KangKY'});}}>BUTTON</button>
              <h1>{this.state.name}!!</h1>
              <Contact />
        </div>
      );
  }
}

export default App;
