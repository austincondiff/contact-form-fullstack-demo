import React, { Component, Fragment } from 'react'
import Post from '../components/Post'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'

const cellStyle = {
  padding: 8,
  borderBottom: '1px solid #ccc'
}

export default class ContactEntriesPage extends Component {
  render() {
    return (
      <Query query={CONTACT_ENTRIES_QUERY}>
        {({ data, loading, error, refetch }) => {
          if (loading) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                <div>Loading ...</div>
              </div>
            )
          }

          if (error) {
            return (
              <div className="flex w-100 h-100 items-center justify-center pt7">
                <div>An unexpected error occured.</div>
              </div>
            )
          }
          return (
            <Fragment>
              <div className="flex justify-between items-center">
                <h1>Contact Entries</h1>
              </div>
              <div style={{
                  display: "grid",
                  gridTemplateColumns: 'auto auto auto auto auto'
                }}>
                <div style={{ display: 'contents' }}>
                  <div style={cellStyle}><strong>ID</strong></div>
                  <div style={cellStyle}><strong>Name</strong></div>
                  <div style={cellStyle}><strong>Phone</strong></div>
                  <div style={cellStyle}><strong>Email</strong></div>
                  <div style={cellStyle}><strong>Message</strong></div>
                </div>
                {data.contactEntries &&
                  data.contactEntries.map(contactEntry => (
                    <div style={{ display: 'contents' }}>
                      <div style={cellStyle}>{contactEntry.id}</div>
                      <div style={cellStyle}>{contactEntry.name}</div>
                      <div style={cellStyle}>{contactEntry.phone}</div>
                      <div style={cellStyle}>{contactEntry.email}</div>
                      <div style={cellStyle}>{contactEntry.message}</div>
                    </div>
                  ))}
              </div>
              {this.props.children}
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export const CONTACT_ENTRIES_QUERY = gql`
  query ContactEntriesQuery {
    contactEntries {
      id
      name
      phone
      email
      message
    }
  }
`
