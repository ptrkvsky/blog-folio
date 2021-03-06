import React from 'react'
import Moment from 'react-moment'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import styled from '@emotion/styled'
import colors from 'styles/colors'
import PropTypes from 'prop-types'

const PostCardContainer = styled(Link)`
  border: 1px solid ${colors.grey200};
  padding: 2.5em 2.5em 2.25em 2.5em;
  border-radius: 3px;
  text-decoration: none;
  color: currentColor;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  transition: all 150ms ease-in-out;
  background-color: ${colors.grey800};

  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transition: all 150ms ease-in-out;
    cursor: pointer;

    .PostCardAction {
      color: ${colors.pink900};
      transition: all 150ms ease-in-out;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }
  }
`

const PostCategory = styled('h3')`
  font-weight: 600;
  color: ${colors.grey600};
`

const PostTitle = styled('h2')`
  margin: 0;
  margin-top: 0.5em;
  color: ${colors.yellow500};
  font-size: 3rem;
`

const PostMetas = styled('div')`
  display: flex;
  align-items: center;
  margin-top: 1.5em;
  justify-content: space-between;
  font-size: 0.85em;
  color: ${colors.grey600};
`

const PostDate = styled('div')`
  margin: 0;
`

const PostDescription = styled('div')`
  margin-top: 2em;
  margin-bottom: 4em;

  p:last-of-type {
    margin: 0;
  }
`

const PostCardAction = styled('div')`
  font-weight: 600;
  text-decoration: none;
  color: currentColor;
  transition: all 150ms ease-in-out;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
`

const PostCard = ({ author, category, date, title, description, uid }) => (
  <PostCardContainer className="BlogPostCard" to={`/blog/${uid}`}>
    <PostCategory>{category[0].text}</PostCategory>
    <PostTitle>{title[0].text}</PostTitle>
    <PostDescription>{RichText.render(description)}</PostDescription>
    <PostCardAction className="PostCardAction">
      En savoir plus <span>&#8594;</span>
    </PostCardAction>
    <PostMetas>
      <PostDate>
        <Moment format="MMMM D, YYYY">{date}</Moment>
      </PostDate>
    </PostMetas>
  </PostCardContainer>
)

export default PostCard

PostCard.propTypes = {
  author: PropTypes.string.isRequired,
  category: PropTypes.element.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.element.isRequired,
  description: PropTypes.element.isRequired,
  uid: PropTypes.string.isRequired,
}
