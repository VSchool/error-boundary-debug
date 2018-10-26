import React from 'react'
import Blog from './Blog'
import BlogsHeader from './BlogsHeader'
import propTypes from 'prop-types'

const BlogList = props => {
    return (
        <div className="blog-list">
            <BlogsHeader/>
            { props.blogs.map((blog, i) => <Blog {...blog} key={i}/>) }
        </div>
    )
}

BlogList.propTypes = {
    blogs: propTypes.arrayOf(propTypes.object)
}

export default BlogList