import React from 'react'
import { types } from 'react-bricks/frontend'


const videoUrlPrefix: { [key: string]: string } = Object.freeze({
  youtube: 'https://www.youtube.com/embed/',
  vimeo: 'https://player.vimeo.com/video/',
})

export interface VideoProps {
  url: string
  platform: string
}

const MyVideo: types.Brick<VideoProps> = ({ platform, url }) => {
  return (
  
        <div className="aspect-video">
          <iframe
            key="video iframe"
            width="100%"
            height="100%"
            src={`${videoUrlPrefix[platform]}${url}?rel=0`}
          />
        </div>

  )
}
MyVideo.schema = {
  name: "myvideo",
  label: 'MyVideo',
  getDefaultProps: () => ({
    url: 'A60xWr-nqv0',
    platform: 'youtube',
  }),
  sideEditProps: [
    {
      name: 'platform',
      label: 'Video platform',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: 'youtube', label: 'YouTube' },
          { value: 'vimeo', label: 'Vimeo' },
        ],
      },
    },
    {
      name: 'url',
      label: 'Video ID (i.e. "A60xWr-nqv0")',
      type: types.SideEditPropType.Text,
    },
  ],
}
export default MyVideo