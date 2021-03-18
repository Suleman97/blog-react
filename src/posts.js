import React, { Component } from 'react';
import axios from 'axios';

class posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                const persons = res.data;
                this.setState({ persons });
                console.log(persons);
            })
            .catch(error => console.error("this is an error"))
    }

    render() {
        return (
            <div>
                { this.state.persons.map(person =>
                    <div class="card" style={{ width: "18rem", float: "left" }}>
                        <div class="card-body">
                            <h5 class="card-title">{person.id} </h5>
                            <h6 class="card-subtitle mb-2 text-muted">{person.title}</h6>
                            <p class="card-text">{person.body}</p>
                        </div>
                    </div>
                )}
            </div>

        );
    }
}

export default posts;