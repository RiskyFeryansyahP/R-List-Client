import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPlusCircle, faEllipsisV, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

class Box extends React.Component {
    constructor(props : never) {
        super(props)
    }

    public render() {
        return(
            <div className="hero is-medium">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-10-tablet is-12-mobile is-10-widescreen is-fullheight">
                                <nav className="level">
                                    <div className="level-left">
                                        <div className="level-item">
                                            <h6 className="title is-4">My Task</h6>
                                        </div>
                                    </div>
                                    <div className="level-right">
                                        <div className="level-item">
                                            <button className="button is-primary">
                                                <span className="icon">
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </span>
                                                <span>New Task</span>
                                            </button>
                                        </div>
                                    </div>
                                </nav>
                                <div className="box">
                                    <div className="columns is-variable is-2">
                                        <div className="column is-4-widescreen">
                                            <div className="box box-task">
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
                                                        <div className="level">
                                                            <div className="level-left">
                                                                <div className="level-item">
                                                                    <li>
                                                                        <a href="#">
                                                                            To-Do A
                                                                            <span className="icon has-text-success">
                                                                                <FontAwesomeIcon icon={faCheckCircle} />
                                                                            </span>
                                                                        </a>
                                                                        <strong className="date-list">05/09/2019</strong>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                            <div className="level-right">
                                                                <div className="level-item">
                                                                <div className="dropdown is-right is-up is-active">
                                                                    <div className="dropdown-trigger">
                                                                        <span className="icon icon-task" aria-haspopup="true" aria-controls="dropdown-menu" >
                                                                            <FontAwesomeIcon icon={faEllipsisV} />
                                                                        </span>
                                                                    </div>
                                                                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                                                        <div className="dropdown-content">
                                                                            <a href="#" className="dropdown-item">
                                                                                Done
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr className="navbar-divider"/>
                                                        <li>
                                                            <a href="#">To-Do B</a>
                                                            <strong className="date-list">05/09/2019</strong>
                                                        </li>
                                                        <hr className="navbar-divider"/>
                                                        <li>
                                                            <a href="#">To-Do C</a>
                                                            <strong className="date-list">05/09/2019</strong>
                                                        </li>
                                                        <hr className="navbar-divider"/>
                                                        <li>
                                                            <a href="#">To-Do D</a>
                                                            <strong className="date-list">05/09/2019</strong>
                                                        </li>
                                                        <hr className="navbar-divider"/>
                                                        <li>
                                                            <a href="#">To-Do E</a>
                                                            <strong className="date-list">05/09/2019</strong>
                                                        </li>
                                                        <hr className="navbar-divider"/>
                                                        <li>
                                                            <a href="#">To-Do F</a>
                                                            <strong className="date-list">05/09/2019</strong>
                                                        </li>
                                                    </ul>
                                                </aside>
                                            </div>
                                        </div>
                                        <div className="column is-fullheight">
                                            <div className="box box-task">
                                                <div className="field">
                                                    <p className="control has-icons-right">
                                                        <input type="text" className="input" placeholder="Add Task List"/>
                                                        <span className="icon is-small is-right">
                                                            <FontAwesomeIcon icon={faPlusCircle} />
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="field">
                                                    <input type="checkbox" id="checkbox1" className="is-checkradio is-success"/>
                                                    <label htmlFor="checkbox1"> List A </label>
                                                </div>
                                                <div className="field">
                                                    <input type="checkbox" id="checkbox2" className="is-checkradio is-success"/>
                                                    <label htmlFor="checkbox2"> List B </label>
                                                </div>
                                                <div className="field">
                                                    <input type="checkbox" id="checkbox3" className="is-checkradio is-success"/>
                                                    <label htmlFor="checkbox3"> List C </label>
                                                </div>
                                                <div className="field">
                                                    <input type="checkbox" id="checkbox4" className="is-checkradio is-success"/>
                                                    <label htmlFor="checkbox4"> List D </label>
                                                </div>
                                                <div className="field">
                                                    <input type="checkbox" id="checkbox4" className="is-checkradio is-success"/>
                                                    <label htmlFor="checkbox4"> List D </label>
                                                </div>
                                                <div className="field">
                                                    <input type="checkbox" id="checkbox4" className="is-checkradio is-success"/>
                                                    <label htmlFor="checkbox4"> List D </label>
                                                </div>
                                                <div className="field">
                                                    <input type="checkbox" id="checkbox4" className="is-checkradio is-success"/>
                                                    <label htmlFor="checkbox4"> List D </label>
                                                </div>
                                                <div className="field">
                                                    <input type="checkbox" id="checkbox4" className="is-checkradio is-success"/>
                                                    <label htmlFor="checkbox4"> List D </label>
                                                </div>
                                                <div className="field">
                                                    <input type="checkbox" id="checkbox4" className="is-checkradio is-success"/>
                                                    <label htmlFor="checkbox4"> List D </label>
                                                </div>
                                                <div className="field">
                                                    <input type="checkbox" id="checkbox4" className="is-checkradio is-success"/>
                                                    <label htmlFor="checkbox4"> List D </label>
                                                </div>
                                                <div className="field">
                                                    <input type="checkbox" id="checkbox4" className="is-checkradio is-success"/>
                                                    <label htmlFor="checkbox4"> List D </label>
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