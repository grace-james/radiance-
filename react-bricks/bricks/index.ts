import { types } from 'react-bricks/frontend'
import website from 'react-bricks-ui/website'
import blog from 'react-bricks-ui/blog'
import Thumbnail from './Thumbnail'
import Banner from './Bannner'
import RoundImage from './RoundImage'
import Video from './MyVideo'
import RightImage from './RightImage'
import MyParagraph from './MyParagraph'


const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  Thumbnail,
  Banner,
  RoundImage,
  RightImage,
  Video,
  MyParagraph
]

export default bricks
