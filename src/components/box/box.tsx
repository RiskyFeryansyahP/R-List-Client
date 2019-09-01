import React from 'react';

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
                            <div className="column is-10-tablet is-12-mobile is-12-widescreen is-fullheight">
                                <div className="box">
                                    <div className="columns is-variable is-0">
                                        <div className="column is-4-widescreen">
                                            <div className="box"></div>
                                        </div>
                                        <div className="column">
                                            <div className="box"></div>
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