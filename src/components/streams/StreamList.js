import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'

export class StreamList extends Component {

    componentWillMount() {
        this.props.fetchStreams()
    }

    renderList() {

        return this.props.stream.map(s => {
            return (
                <div className="item" key={s.id}>
                    <i className="large middle aligned icon camera">
                        <div className="content">
                            {s.title}
                            <div className="description">
                                {s.desciption}
                            </div>
                        </div>

                    </i>
                </div>
            )
        })
    }
    render() {
        console.log(this.props.stream)
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
            </div >
        )
    }
}

const mapToStateProps = (state) => {
    return {
        stream: Object.values(state.stream)
    }
}

export default connect(mapToStateProps, { fetchStreams })(StreamList)