import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            tel:this.props.userEditObject.tel,
            permission:this.props.userEditObject.permission,
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <form method="post">
                        <div className="card border-primary mt-2 mb-3">
                            <div className="card-header text-center">Sửa thông tin User</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} defaultValue={ this.props.userEditObject.name } type="text" name="name" className="form-control" placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} defaultValue={ this.props.userEditObject.tel } type="text" name="tel" className="form-control" placeholder="Số điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select onChange={(event) => this.isChange(event)} defaultValue={ this.props.userEditObject.permission } className="custom-select" name="permission" >
                                        <option value>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Morderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input onClick={() => this.saveButton() } type="button" className="btn btn-block btn-primary" value="Lưu thông tin" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default EditUser;