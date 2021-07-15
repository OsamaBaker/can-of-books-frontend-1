import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';

class MyFavoriteBooks extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    name: [],
    description: [],
    status: [],
    responseData: []
}
  }


componentDidMount = async () =>{

let url = `http://localhost:3001/books?email=osqadoomy@gmail.com`

let responseData = await axios.get(url)

this.setState({
    name: responseData.data[0].name,
    description: responseData.data[0].description,
    status: responseData.data[0].status,
    responseData: responseData.data
})
console.log(responseData)

// await axios.get(url).then(response => {
//     books = response.data
//     this.setState
//     let booksArr = books.map(item => {
//         return item
//     })
//     res.json(booksArr)
// })
}

  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <Button>Add Book</Button>
        {this.state.responseData.map(book => {
          return(
            <>
            <Card style={{ width: '18rem' }}>
            <p>{book.name}</p>
            <p>{book.description}</p>
            <p>{book.status}</p>
            <Button>Delete</Button>
            </Card>
            </>
          )
        })}
      </Jumbotron>
    )
  }
}

export default MyFavoriteBooks;
