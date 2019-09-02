import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

class Box extends React.Component {
    constructor(props : never) {
        super(props)
    }

    public render() {
        return(
            <div className="hero is-medium">
                <div className="hero-body">
                    <div className="container">
                        <nav className="level">
                            <div className="level-left">
                                <div className="level-item">
                                    <h6 className="title is-4">My Task</h6>
                                </div>
                            </div>
                            <div className="level-right">
                                <button className="button is-primary">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faPlus} />
                                </span>
                                <span>New Task</span>
                                </button>
                            </div>
                        </nav>
                        <div className="columns is-centered">
                            <div className="column is-10-tablet is-12-mobile is-12-widescreen is-fullheight">
                                <div className="box">
                                    <div className="columns is-variable is-2">
                                        <div className="column is-4-widescreen">
                                            <div className="box">
                                                <div className="tabs is-boxed">
                                                    <ul>
                                                        <li className="is-active"><a href="#" className="has-text-primary has-text-weight-bold"> Personal </a></li>
                                                        <li><a href="#" className="has-text-primary"> Work </a></li>
                                                    </ul>
                                                </div>
                                                <aside className="menu">
                                                    <p className="menu-label has-text-weight-bold">
                                                        To-Do List
                                                    </p>
                                                    <ul className="menu-list">
                                                        <li>
                                                            <a href="#">To-Do A</a>
                                                        </li>
                                                        <hr className="navbar-divider"/>
                                                        <li>
                                                            <a href="#">To-Do B</a>
                                                        </li>
                                                        <hr className="navbar-divider"/>
                                                        <li>
                                                            <a href="#">To-Do C</a>
                                                        </li>
                                                        <hr className="navbar-divider"/>
                                                        <li>
                                                            <a href="#">To-Do D</a>
                                                        </li>
                                                        <hr className="navbar-divider"/>
                                                        <li>
                                                            <a href="#">To-Do E</a>
                                                        </li>
                                                    </ul>
                                                </aside>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="box-container">
                                                <div className="field">
                                                    <p className="control has-icons-right">
                                                        <input type="text" className="input" placeholder="Add Task List"/>
                                                        <span className="icon is-small is-right">
                                                            <FontAwesomeIcon icon={faPlusCircle} />
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Box