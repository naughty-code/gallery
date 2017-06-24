import React from 'react'
import { chunk } from 'lodash'

const GalleryItem = ({ src, alt }) => (
  <div className="thumb">
    <a>
      <img src={src} alt={alt}>
      </img>
    </a>
  </div>
)

const GalleryRow = ({ items }) => (
  <div className="gallery-row">
    {
      items
      .map((item, i) => <GalleryItem {...item} key={item.src}/>)
    }
  </div>
)

const GalleryPage = ({ items, rowNumber }) => (
    <div className="gallery-page">
      {chunk(items, rowNumber)
        .map((itemsRow, i) => <GalleryRow
          key={i}
          items={itemsRow}
        />)
      }
    </div>
)

export default GalleryPage
