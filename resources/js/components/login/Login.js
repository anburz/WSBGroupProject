import React, {Component } from 'React';
import { login } from '../../api/login';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {
            }
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(response => {
            if (response) {
                this.props.history.push('/user')
            } else {
                alert("Login error. Please try again")
            }
        });
    }
        
        render() {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                                <h1 className="h3 mb-3">
                                    Login:
                                </h1>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" 
                                           name="email" 
                                           placeholder="Email address" 
                                           className="form-control"
                                           value={this.state.email}
                                           onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" 
                                           name="password" 
                                           placeholder="Password" 
                                           className="form-control"
                                           value={this.state.password}
                                           onChange={this.onChange}/>
                                </div>
                                <button type="submit" 
                                        className="btn btn-primary btn-block btn-lg">
                                        Login
                                </button>
                            </form>
                            <div className="col-md-6 mx-auto mt-1 text-center">
                                <Link to="/register">
                                   Register
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
