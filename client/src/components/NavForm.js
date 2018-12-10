import React, {Component} from 'react';
import {
    Button, Form, Input
} from 'reactstrap';
class NavForm extends Component{
    render(){
        return(
            <Form id="searchformwrapper">
                <div id="searchform">
                    <Button id="searchbutton">
                        <img src="/images/searchicon.svg" alt=""></img>
                    </Button>
                    <Input type="search" name="search" id="searchtext" placeholder="Search posts">
                    </Input>
                </div>
            </Form>
        );
    }
}
export default NavForm;