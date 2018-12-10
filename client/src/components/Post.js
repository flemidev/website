import React, {Component} from 'react';
class Post extends Component{
    constructor(props){
        super(props);
        this.state={text: "abc"};
    }
    render(){
        return(
            <div>
                <h1>Hello, {this.state.text}</h1>
            </div>
        );
    }
}
export default Post;