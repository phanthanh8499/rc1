import './../css/App.css';
import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
import { v4 as uuidv4} from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm:true,
      data:DataUser,
      searchText:"",
      editUserStatus:false,
      userEditObject:{},
    }
  }

  componentWillMount(){
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData', JSON.stringify(DataUser));
    } else {
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
    }
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText:dl
    });
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm:!this.state.hienThiForm
    });
  }

  getNewUserData = (name, tel, permission) => {
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data:items
    });
    console.log(this.state.data);
    localStorage.setItem('userData', JSON.stringify(items));
  }

  editUser = (user) => {
    console.log(user)
    this.setState({
      userEditObject:user
    });
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus:!this.state.editUserStatus
    });
  }

  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }

  deleteUser = (idUser) => {
    var tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data:tempData
    });
    localStorage.setItem('userData', JSON.stringify(tempData));
  }

  render() {
    // localStorage.setItem("userData", JSON.stringify(DataUser));
    var ketqua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    })
    return (
      <div>
        <Header></Header>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)} userEditObject={this.state.userEditObject} changeEditUserStatus={() => this.changeEditUserStatus()} editUserStatus={this.state.editUserStatus} checkConnectProps={(dl) => this.getTextSearch(dl) } ketNoi={() => this.doiTrangThai()} hienThiForm={this.state.hienThiForm}></Search>
              <TableData deleteUser={(idUser) => this.deleteUser(idUser)} changeEditUserStatus={() => this.changeEditUserStatus()} editFun={(user) => this.editUser(user) } dataUserProps={ ketqua }></TableData>
              <AddUser add={(name, tel, permission) => this.getNewUserData(name, tel, permission) } hienThiForm={this.state.hienThiForm}></AddUser>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
