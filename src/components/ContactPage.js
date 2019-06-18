import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'
import { CONTACT_ENTRIES_QUERY } from './ContactEntriesPage'

class ContactPage extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    message: '',
  }

  render() {
    return (
      <Mutation
        mutation={CREATE_CONTACT_ENTRY_MUTATION}
        update={(cache, { data }) => {
          const { contactEntries } = cache.readQuery({ query: CONTACT_ENTRIES_QUERY })
          cache.writeQuery({
            query: CONTACT_ENTRIES_QUERY,
            data: { contactEntries: contactEntries.concat([data.createContactEntry]) },
          })
        }}
      >
        {(createDraft, { data, loading, error }) => {
          return (
            <div className="pa4 flex justify-center bg-white">
              <form
                onSubmit={async e => {
                  e.preventDefault()
                  const { name, phone, email, message } = this.state
                  await createDraft({
                    variables: { name, phone, email, message },
                  })
                  this.setState({ name: '', phone: '', email: '', message: ''})
                }}
              >
                <h1>Contact</h1>
                <input
                  autoFocus
                  className="w-100 pa2 mv2 br2 b--black-20 bw1"
                  onChange={e => this.setState({ name: e.target.value })}
                  placeholder="Name"
                  type="text"
                  value={this.state.name}
                />
                <input
                  className="w-100 pa2 mv2 br2 b--black-20 bw1"
                  onChange={e => this.setState({ phone: e.target.value })}
                  placeholder="Phone"
                  type="text"
                  value={this.state.phone}
                />
                <input
                  className="w-100 pa2 mv2 br2 b--black-20 bw1"
                  onChange={e => this.setState({ email: e.target.value })}
                  placeholder="Email"
                  type="text"
                  value={this.state.email}
                />
                <textarea
                  className="db w-100 ba bw1 b--black-20 pa2 br2 mb2"
                  cols={50}
                  onChange={e => this.setState({ message: e.target.value })}
                  placeholder="Message"
                  rows={8}
                  value={this.state.message}
                />
                <input
                  className={`pa3 bg-black-10 bn ${this.state.message &&
                    this.state.name && this.state.phone && this.state.email &&
                    'dim pointer'}`}
                  disabled={!this.state.message || !this.state.email || !this.state.phone || !this.state.name}
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          )
        }}
      </Mutation>
    )
  }

}

const CREATE_CONTACT_ENTRY_MUTATION = gql`
  mutation CreateDraftMutation($name: String!, $phone: String!, $email: String!, $message: String!) {
    createContactEntry(name: $name, phone: $phone, email: $email, message: $message) {
      id
      name
      phone
      email
      message
    }
  }
`

export default withRouter(ContactPage)
