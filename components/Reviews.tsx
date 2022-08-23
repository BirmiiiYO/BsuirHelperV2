import 'antd/dist/antd.css';
import { Avatar, Comment, Tooltip } from 'antd';
import moment from 'moment';
import { IReview } from '../models/Review';
import { FC } from 'react';

const Reviews:FC<IReview> = ( review) => {

  return (
    <Comment
      author={<a>{review.author}</a>}
      avatar={<Avatar src={review.authorPhoto} alt="Rewiever photo" />}
      content={
        <p>
          {review.text}
        </p>
      }
      datetime={
        <Tooltip title={moment(review.data).format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment(review.data).fromNow()}</span>
        </Tooltip>
      }
    />
  )
}

export default Reviews