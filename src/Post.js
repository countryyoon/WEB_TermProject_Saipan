import React, {Component} from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell'

class Post extends Component {
    render(){
        return(
            <div>
                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell>{this.props.title}</TableCell>
                </TableRow>
            </div>
        );
    }
}

export default Post;

