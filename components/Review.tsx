import 'antd/dist/antd.css';
import { Comment, List, Tooltip } from 'antd';
import {IReview} from '../models/Review';
import moment from 'moment';

const datetime = () => {
    return(
        <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    )
}

export default function Review(review: IReview) {

  return (
    <> 
        <h1>{review.author}</h1>
  </>
  )
}
