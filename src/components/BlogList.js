import React from 'react'
import Blog from './Blog'
import BlogsHeader from './BlogsHeader'
import propTypes from 'prop-types'
import ErrorBoundary from '../ErrorBoundary'

const BlogList = props => {
    return (
        <div className="blog-list">
            <ErrorBoundary>
                <BlogsHeader/>
            </ErrorBoundary>
            { props.blogs.map((blog, i) => <Blog {...blog} key={i}/>) }
        </div>
    )
}

BlogList.propTypes = {
    blogs: propTypes.arrayOf(propTypes.object)
}

export default BlogList