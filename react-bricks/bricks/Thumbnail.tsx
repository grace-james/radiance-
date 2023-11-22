// Thumbnail.tsx
import React from 'react'
import { types, Text, RichText, Image } from 'react-bricks/frontend'

const Thumbnail: types.Brick = () => {
  return (
    <div className="my-6 mx-6 p-6 text-center w-1/3 border rounded-lg shadow-xl">

      <Image
        propName="image"
        alt="Fallback alt tag"
        maxWidth={200}
        imageClassName="mb-6"   
        renderWrapper={({children, width, height}) => (
          <div className="wrapper">
            {children}
          </div>
        )}
      />

      <Text
        propName="title"
        renderBlock={({ children }) => (
          <h1 className="text-2xl font-bold">{children}</h1>
        )}
        placeholder="Type a title..."
      />
      
      <RichText
        propName="description"
        renderBlock={({ children }) => (
          <p className="text-lg text-gray-500">{children}</p>
        )}
        placeholder="Type a description"
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Highlight,
        ]}
      />
    </div>
  )
}

Thumbnail.schema = {
  name: 'thumbnail',
  label: 'Thumbnail',
  getDefaultProps: () => ({
    title: 'Hello, world!',
    description: 'Lorem ipsum dolor sit amet.',
    // No default provided for the image => we'll do it later
  }),
  sideEditProps: [],
}

export default Thumbnail
