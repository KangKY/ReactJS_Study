import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import ContactCreate from './ContactCreate';
import update from 'react-addons-update';

export default class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedKey : -1,
      keyword:'',
      contactData:[
        {name:'Kang',phone:'010-0000-0001'},
        {name:'Aria',phone:'010-0000-0002'},
        {name:'Charlie',phone:'010-0000-0003'},
        {name:'David',phone:'010-0000-0004'}
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.handleCreate = this.handleCreate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillMount() {
    const contactData = localStorage.contactData;

    if(contactData) {
      this.setState({
        contactData:JSON.parse(contactData)
      });
    }
  }

  componentDidUpdate(prevProps, prevState) // 컴포넌트의 state가 업데이트 될 때마다 실행되는 함수
  {
    if(JSON.stringify(prevState.contactData) != JSON.stringify(this.state.contactData))
    {
      localStorage.contactData = JSON.stringify(this.state.contactData);
    }
  }


  handleChange(e) {
    this.setState({
           keyword: e.target.value
    });
  }

  handleClick(key) {
    this.setState({
           selectedKey: key
    });

    //console.log(key,'is selected');
  }

  handleCreate(contact) {
    this.setState({
      // update(1,2) 첫번째 파라미터는 처리할 배열, 두번째 파라미터는 처리방식에 대한 것
      contactData:update(this.state.contactData, {
        // push 한개의 데이터라도 배열[]로 감싸주어야한다.
        $push : [contact]})
    });
  }

  handleRemove() {
    if(this.state.selectedKey < 0)
      return;

    this.setState({
      contactData:update(this.state.contactData,{
        // splice의 경우 index값과 그 뒤에는 기준으로 얼마만큼 삭제할 것인지
        $splice: [[this.state.selectedKey,1]]
      }),
      selectedKey:-1
    });
  }

  handleEdit(name,phone) {
    this.setState({
      contactData:update(this.state.contactData,{
        // 처리할 데이터의 인덱스 번째 아이템의 필드를 변경하는 코드
        // $set 사용
        [this.state.selectedKey]:{
          name:{$set:name},
          phone:{$set:phone}
        }
      })
    });
  }

  render() {
    const mapToComponent = (data)=>{
      data.sort((a,b) => { return a.name > b.name; });
      data = data.filter(
        (contact) => {
          return contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1;
        }
      );
      let count= 0;
      return data.map((contactData, i)=>{
        count++;
        return (<ContactInfo
          count= {count}
          contact={contactData}
          key={i}
          onClick={()=>this.handleClick(i)}
          />

        );
      });
    };

    return(
      <div>
      <input name="keyword" placeholder="Search"
              value={this.state.keyword} onChange={this.handleChange}/>
        <div>{mapToComponent(this.state.contactData)}</div>
        <ContactDetails
          isSelected={this.state.selectedKey != -1}
          contact={this.state.contactData[this.state.selectedKey]}
          onRemove={this.handleRemove}
          onEdit={this.handleEdit}
        />
        <ContactCreate
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
