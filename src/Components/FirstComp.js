import React, {Component} from 'react';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

export const DATA = {
    name: 'Patipol Sittiyanon',
    imgURL: 'http://www.redjumper.net/blog/wp-content/uploads/2015/10/boom-copy.png',
    hobbyList: [
        'coding', 'writing', 'skiing'
    ],
    data: [
        {
            "id": 1,
            "name": "Foo",
            "age": "20"
        }, {
            "id": 2,
            "name": "Bar",
            "age": "30"
        }, {
            "id": 3,
            "name": "Baz",
            "age": "40"
        }
    ]
}

class FirstComp extends Component {
    render() {
        return (
            <div>
                <Profile name={this.props.profileData.name} imgURL={this.props.profileData.imgURL}/>
                <Hobbies hobbyList={this.props.profileData.hobbyList}/> {this.props.profileData.data.map((person, i) => <TableComp key={i} data={person}/>)}
            </div>
        );
    }
}

class Profile extends Component {
    render() {
      const styles = {
        container: {
          textAlign: 'center'
        },
        centerImage: {
          display: 'block',
          margin: 'auto'
        }
      };
        return (
            <div>
                <h3 style={styles.container}>{this.props.name}</h3>
                <img src={this.props.imgURL} width={250} height={150} mode='fit' alt='boom' style={styles.centerImage}/>
            </div>
        );
    }
}

class Hobbies extends Component {
    render() {
        var hobbies = this.props.hobbyList.map(function(hobby, index) {
            return (
                <li key={index}>{hobby}</li>
            );
        });

        return (
            <div>
                <h5>My hobbies:</h5>
                <ul>
                    {hobbies}
                </ul>
            </div>
        );
    }
}

class TableComp extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableRowColumn>{this.props.data.id}</TableRowColumn>
                            <TableRowColumn>{this.props.data.name}</TableRowColumn>
                            <TableRowColumn>{this.props.data.age}</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>

            </MuiThemeProvider>
        );
    }
}

export default FirstComp;
