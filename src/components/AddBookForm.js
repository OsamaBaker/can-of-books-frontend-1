import React, { Component } from 'react'

export class AddbookForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.sendData}>
                <input placeholder='Enter book name' type="text" name='bookName' />

                <br />
                <input placeholder='Enter book description ' type="text" name='bookDesc' />
                <br />
                <br />
                <input placeholder='Enter book Status' type="text" name='bookStatus' />
                <input type="submit" value="Add Book" />
            </form>
        )
    }
}

export default AddbookForm;