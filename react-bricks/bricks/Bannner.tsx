import React from 'react'
import { types, Image, Text} from 'react-bricks/frontend'


interface ImageProps {
    propName: string
    alt: string
    maxWidth?: number
    noLazyLoad?: boolean
    aspectRatio?: number
    containerClassName?: string // Deprecated from 3.3.0
    containerStyle?: object // Deprecated from 3.3.0
    imageClassName?: string
    imageStyle?: object
    noWrapper?: boolean // Deprecated from 3.3.0
    sizes?: string // New in 3.3.0
    loading?: 'lazy' | 'eager' // New in 3.3.0
    renderWrapper?: RenderWrapper // New in 3.3.0
    useNativeLazyLoading?: boolean // New in 3.3.0
    useWebP?: boolean // New in 3.3.0
    metaFieldName?: 'image' // New in 3.3.0
    customFieldName?: string // New in 3.3.0
}

interface IRenderWrapperArgs {
    children: React.ReactNode
    width?: number
    height?: number
  }

  type Size = 'big' | 'small'

interface BannerProps {
     size: Size
     title: string
     text: string
}
  
  
type RenderWrapper = (args: IRenderWrapperArgs) => React.ReactElement

const Banner: types.Brick<BannerProps> = ({size}) => {
    return (
    <>
        <div className={`w-full h-screen ${size === 'big' ? 'h-96' : 'h-64'}`}>
          <Image imageClassName='object-cover w-full h-full' propName="image" sizes="" alt="" />
       
          <div className="text-yellow-400 text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Text
        propName="title"
        renderBlock={({ children }) => (
          <h1 className='font-serif'>{children}</h1>
        )}
        placeholder="Type a title..."
      />
       </div>
       </div>
       </>
    )
  }

Banner.schema = {
  name: 'banner',
  label: 'banner',
  getDefaultProps: () => ({
    title: 'Banner',
  }),
  sideEditProps: [
    {
      name: 'size',
      label: 'size',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'big', label: 'Big' },
          { value: 'small', label: 'Small' },
        ],
      },

    },
  ],
  
}

export default Banner