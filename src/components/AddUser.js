import React, { Component } from 'react';

class AddUser extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         trangThaiChinhSua:true
    //     }
    // }

    // thayDoiTrangThai = () => {
    //     this.setState({
    //         trangThaiChinhSua:!this.state.trangThaiChinhSua
    //     });
    // }

    // hienThiNut = () => {
    //     if(this.state.trangThaiChinhSua === true){
    //         return <div class="btn btn-block btn-outline-secondary" onClick={() => this.thayDoiTrangThai()}>Đóng lại</div>;
    //     } else {
    //         return <div class="btn btn-block btn-outline-info" onClick={() => this.thayDoiTrangThai()}>Thêm mới</div>;
    //     }
    // }
    // hienThiForm = () => {
    //     if(this.state.trangThaiChinhSua === true){
    //         return (
    //             <div className="card border-primary mt-2 mb-3">
    //                 <div className="card-header">Thêm mới User vào hệ thống</div>
    //                 <div className="card-body text-primary">
    //                     <div className="form-group">
    //                         <input type="text" className="form-control" placeholder="Username" />
    //                     </div>
    //                     <div className="form-group">
    //                         <input type="text" className="form-control" placeholder="Số điện thoại" />
    //                     </div>
    //                     <div className="form-group">
    //                         <select className="custom-select" >
    //                             <option value>Chọn quyền mặc định</option>
    //                             <option value={1}>Admin</option>
    //                             <option value={2}>Morderator</option>
    //                             <option value={3}>Normal</option>
    //                         </select>
    //                     </div>
    //                     <div className="form-group">
    //                         <div className="btn btn-block btn-primary">Thêm mới</div>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     } else { return false}
    // }
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: ""
        }
    }


    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        this.setState({
            [name]: value
        });
        var item = [];
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.permission = this.state.permission;
        console.log(item);
    }

    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col">
                    <form>
                        <div className="card border-primary mt-2 mb-3">
                            <div className="card-header">Thêm mới User vào hệ thống</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input onChange={(event) => (this.isChange(event))} type="text" name="name" className="form-control" placeholder="Username" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => (this.isChange(event))} type="text" name="tel" className="form-control" placeholder="Số điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select onChange={(event) => (this.isChange(event))} className="custom-select" name="permission" >
                                        <option value>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Morderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-primary" onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Thêm mới" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }
    render() {

        return (
            <div>
                { this.kiemTraTrangThai()}
            </div>
        );
    }
}

export default AddUser;