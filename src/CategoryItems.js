import React from 'react'
import { Card } from "react-bootstrap"

class CategoryItem extends React.Component {
 
    render() {
        return (

            <div >
                <Card style={{ width: '18rem',alignContent:"center" }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>                     
                        <Card.Text>
                        {this.props.joke}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default CategoryItem