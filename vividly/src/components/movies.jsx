import React,{ Component } from "react";
import { getMovies } from "../fakeMovieService"
import ReactTable from 'react-table'

class Movies extends Component {
    state = { 
        movies: getMovies()
     }
    handleDelete = (movie) => {
        console.log("Button clicked" + movie.title)
        this.state.movies.splice(this.state.movies.indexOf(movie),1);
        //  movies.splice(movies.indexOf(movieInDb), 1);

        this.setState({movies:this.state.movies})
    }

    renderFunction(){
        if(this.state.movies.length==0){
            return <p>There is no movie in the database</p>
        }
        return (<p>
            There are {this.state.movies.length} movies available in the database
            <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                
                    {this.state.movies.map(movie =>
                    <tr>
                         <td>{movie.title}</td>
                         <td>{movie.genre.name}</td>
                         <td>{movie.numberInStock}</td>
                         <td>{movie.dailyRentalRate}</td>
                         <td><button type="button" onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                     </tr>
                    )}
                   
            </tbody>
        </table>
        </p>)
    }
    render() { 
        if(this.state.movies.length ===0){
            return <p>There is no movie in the database</p>
        }
        return(
            <React.Fragment>
            <p>
            There are {this.state.movies.length} movies available in the database
 
            <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
                
                    {this.state.movies.map(movie =>
                    <tr key={movie._id}>
                         <td>{movie.title}</td>
                         <td>{movie.genre.name}</td>
                         <td>{movie.numberInStock}</td>
                         <td>{movie.dailyRentalRate}</td>
                         <td><button type="button" onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                     </tr>
                    )}
                   
            </tbody>
        </table>
        </p>
        </React.Fragment>
        )   
    };

}
 
export default Movies;