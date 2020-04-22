import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ListItem from '../ListItem/ListItem';



/**
 * Type : QUERY - Get all TODOs
 * 
 * Query Component provided by Apollo takes care of Making APi req
 * resolving data
 * 
 *  */

export const TODOS_QUERY = gql`
  {
    todos {
        id,
        content,
        isCompleted
    }
  }
`;

class Lists extends Component {

    render() {
        return (
            <Query query={TODOS_QUERY}>
                {({ loading, error, data, refetch }) => {
                    if (loading) return <div className="alert alert-success text-center">Fetching Todos...</div>
                    if (error) return <div className="alert alert-warning text-center">Error while fetching...</div>

                    if (this.props.isUpdated) {
                        refetch();
                    }

                    const linksToRender = data.todos
                    return (
                        <ul className="list-group list-group-flush">
                            {linksToRender.map((link, index) => <ListItem
                                key={link.id}
                                item={link}
                                index={index}
                            />)}
                        </ul>
                    )
                }}
            </Query>
        )
    }
}

export default Lists;
