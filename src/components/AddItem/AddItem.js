import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';


/**
 * Type : Mutation - Add TODO
 * 
 * Mutation Component provided by Apollo takes care of Making APi req
 * resolving data
 * 
 *  */

const ADD_ITEM_MUTATION = gql`
  mutation AddItemMutation($content: String!) {
    addItem(content: $content) {
      id
    }
  }
`;


class AddItem extends Component {

    state = {
        content: '',
    }

    render() {
        const { content } = this.state;


        return (
            <div className="add-item-wrapper">
                <div className="alert alert-secondary" role="alert">

                    <div className="row justify-content-around p-3">
                        <input
                            className="form-control p-4 col-8"
                            value={content}
                            onChange={e => this.setState({ content: e.target.value })}
                            type="text"
                            placeholder="Enter content"
                        />
                        <Mutation
                            mutation={ADD_ITEM_MUTATION}
                            variables={{ content }}
                            onCompleted={() => {
                                this.props.update(true);
                                this.setState({ content: '' });
                            }}
                        >
                            {initAddItemMutation => (
                                <button type="button" className="btn btn-primary btn-lg col-3" onClick={initAddItemMutation}>
                                    Add
                                </button>
                            )}
                        </Mutation>
                    </div>
                </div>

            </div>

        )
    }
}

export default AddItem