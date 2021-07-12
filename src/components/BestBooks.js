// import React, { Component } from 'react'
// import axios from 'axios'
// import BestBooksRender from '../BestBooks';



// class BestBooks extends React.Component {
    
    
//         constructor(props){
//             super(props);
//             this.state = {
//             name: [],
//             description: '',
//             status: ''
//         }
//     }
        
    
//     componentDidMount = async () =>{

//         let url = `http://localhost:3001/books?email=osqadoomy@gmail.com`

//         let responseData = await axios.get(url)

//         this.setState({
//             name: responseData.data.name
//         })

//         // await axios.get(url).then(response => {
//         //     books = response.data
//         //     this.setState
//         //     let booksArr = books.map(item => {
//         //         return item
//         //     })
//         //     res.json(booksArr)
//         // })
//     }


//     render() {
//         return (
//             <div>
//                 <BestBooksRender name={this.state.name}/>
//             </div>
//         )
//     }
// }



// export default BestBooks
