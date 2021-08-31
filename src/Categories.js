import React, { Component } from "react";
import { Navbar, Form, Container, Nav } from "react-bootstrap"
import axios from "axios"
import CategoryItem from "./CategoryItems";



class Category extends Component{

    state = {
        categories: [],
        categoryItems : []
    };
    componentDidMount() {
        this.getCategories();
    }

    getCategories() {
        axios.get("https://api.chucknorris.io/jokes/categories")
            .then(res => {
                this.setState({
                    categories: res.data
                });

            })
            .catch(err => {
                console.log(err);
            })
    }

   getCategoryItems = (category) =>{
    axios.get("https://api.chucknorris.io/jokes/random?category="+category)
            .then(res => {
                this.setState({
                    ...this.state, 
                    categoryItems : res.data
                });

            })
            .catch(err => {
                console.log(err);
            })
    }


    render(){
        return(
            <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Joseph Kithome</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Chucknorris.io</Nav.Link>
                            <Nav.Link href="#link"></Nav.Link>
                            <Form.Select aria-label="Default select example" onChange={(e)=>this.getCategoryItems(e.target.value)}>
                                <option>Select category</option>
                               
                                    {this.state.categories.map(cat => (
                                        <option value={cat}  key={cat.id}>
                                            {cat}
                                        </option>))}
                                

                            </Form.Select>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <CategoryItem joke = {this.state.categoryItems.value} />
            

            
            </div>
        )
    }
}

export default Category