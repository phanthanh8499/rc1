import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    deleteButtonClick = (idUser) => {
        this.props.deleteUser(idUser);
    }

    mappingDataUser = () => this.props.dataUserProps.map((value, key) => (
        <TableDataRow deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)} changeEditUserStatus={() => this.props.changeEditUserStatus()} editFunClick={(user) => this.props.editFun(value) } userName={value.name} stt={key} tel={value.tel} permission ={value.permission} key={key} id={value.id}></TableDataRow>
    ))
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Số điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.mappingDataUser() }             
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;