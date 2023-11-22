import React from 'react'
import { types, RichText, Image } from 'react-bricks/frontend'

const RightImage: types.Brick = () => {
  return (
    <div className=" grid grid-cols-2 flex items-center justify-items-center">
      
      <RichText
        propName="description"
        renderBlock={({ children }) => (
          <p className="text-lg text-gray-500">{children}</p>
        )}
        placeholder="Type a description"
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Highlight,
          types.RichTextFeatures.Link
        ]}
      />
            <Image
        propName="image"
        alt="Fallback alt tag"
        maxWidth={200}
        imageClassName="grow w-full h-auto backdrop-invert bg-white/30  "   
      />
    </div>
  )
}

RightImage.schema = {
  name: 'rightImage',
  label: 'RightImage',
  getDefaultProps: () => ({
    title: 'Hello, world!',
    description: 'Lorem ipsum dolor sit amet.',
    // No default provided for the image => we'll do it later
  }),
  sideEditProps: [],
}

export default RightImage
