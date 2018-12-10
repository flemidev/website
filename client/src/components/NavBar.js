import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    Form,
    Input,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return(
            <div>
                <Navbar light expand="md">
                <NavbarBrand href="/">
                    <img src="flemi_small.svg"></img>
                    <p id="logotext">Flemi</p>
                </NavbarBrand>
                <Nav className="ml-auto" navbar id="navbarcontent">
                    <Form id="searchbox">
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Form>
                </Nav>
                </Navbar>
            </div>
        );
    }
}
export default NavBar;