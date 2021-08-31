import React from "react"
import { Navbar, Form, Container, Nav } from "react-bootstrap"
import axios from "axios"


class MNavBar extends React.Component {

    state = {
        categories: []
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

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Form.Select aria-label="Default select example">
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
        )
    }
}

export default MNavBar