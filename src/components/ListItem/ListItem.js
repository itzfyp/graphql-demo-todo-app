import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import "./ListItem.css";


/**
 * Type : Mutation - Update TODO
 * 
 * Mutation Component provided by Apollo takes care of Making APi req
 * resolving data
 * 
 *  */
const UPDATE_MUTATION = gql`
  mutation UpddateMutation($itemId: ID!, $isCompleted: Boolean!) {
    updateItem(id: $itemId, isCompleted: $isCompleted) {
      id,
      content
    }
  }
`;


/**
 * Type : Mutation - Delete TODO
 * 
 * Mutation Component provided by Apollo takes care of Making APi req
 * resolving data
 * 
 *  */
const DELETE_MUTATION = gql`
  mutation DeleteMutation($itemId: ID!) {
    removeItem(id: $itemId) {
      id
    }
  }
`;


class ListItem extends Component {

    state = {
        isCompleted: this.props.item.isCompleted,
        isDeleted: false
    }

    render() {
        const { content, id } = this.props.item;
        if (this.state.isDeleted) {
            return false;
        }
        return (
            <li className="list-group-item d-flex justify-content-between">
                {this.state.isCompleted ? <del>{content}</del> : <p>{content}</p>}
                <div className="d-flex col-2 btn-wrapper">
                    {(!this.state.isCompleted) &&
                        <Mutation
                            mutation={UPDATE_MUTATION}
                            variables={{ itemId: id, isCompleted: true }}
                            onCompleted={() => { this.setState({ isCompleted: true }) }}
                        >
                            {initUpdate => (
                                <button className="btn btn-link" onClick={initUpdate}>complete</button>
                            )}
                        </Mutation>}
                    <Mutation
                        mutation={DELETE_MUTATION}
                        variables={{ itemId: id }}
                        onCompleted={() => { this.setState({ isDeleted: true }) }}
                    >
                        {initDelete => (
                            <button className="btn btn-link delete" onClick={initDelete}>X</button>
                        )}
                    </Mutation>
                </div>
            </li>
        )
    }
}

export default ListItem

