import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4 ">Project quản lý thành viên bằng ReactJS</h1>
                    <p className="lead">với dữ liệu jsson</p>
                    <hr className="my-2" />
                </div>
            </div>
        );
    }
}

export default Header;