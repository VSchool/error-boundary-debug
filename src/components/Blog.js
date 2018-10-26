import React from 'react'
import propTypes from 'prop-types'

const Blog = props => {
    const { title, body, date, likes } = props
    return (
        <div className="blog">
            <h1>  { title }</h1>
            <span>{ date } </span>
            <span>Likes: { likes }</span>
            <p>   { body } </p>
        </div>
    )
}

Blog.propTypes = {
    title: propTypes.string,
    date:  propTypes.string,
    likes: propTypes.number,
    body:  propTypes.string
}

export default Blog