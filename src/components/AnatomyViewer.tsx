import React from 'react'

export default function AnatomyViewer({src, alt}:{src:string, alt?:string}){
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4">
      <div className="bg-white rounded shadow-lg max-w-4xl w-full p-4">
        <div className="flex justify-end">
          <button className="px-3 py-1">Close</button>
        </div>
        <div className="mt-2">
          <img src={src} alt={alt || 'Anatomy view'} className="w-full h-auto"/>
        </div>
      </div>
    </div>
  )
}
