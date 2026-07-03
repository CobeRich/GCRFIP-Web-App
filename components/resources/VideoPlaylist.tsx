'use client'

import { useState } from 'react'
import type { VideoResource } from '../../app/resources/videos/video-library'
import VideoPlayer from './VideoPlayer'

type VideoPlaylistProps = {
  videos: VideoResource[]
}

export default function VideoPlaylist({ videos }: VideoPlaylistProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeVideo = videos[activeIndex]

  return (
    <div className="rounded-2xl overflow-hidden border border-[#d8e6f6] bg-gradient-to-b from-[#eef5ff] to-white shadow-sm">
      <div className="grid xl:grid-cols-[1.2fr_0.8fr] gap-0 xl:items-stretch">
        <div className="bg-[#02163f] p-3 md:p-4">
          <VideoPlayer
            key={activeVideo.src}
            src={activeVideo.src}
            poster={activeVideo.poster}
            title={activeVideo.title}
            className="w-full rounded-xl bg-black aspect-video"
          />
        </div>

        <div className="p-5 md:p-6 xl:max-h-[34rem] xl:overflow-y-auto">
          <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">Now Playing</p>
          <h2 className="text-3xl font-bold text-gcrfip-navy mb-2">{activeVideo.title}</h2>
          <p className="text-sm font-semibold text-gcrfip-green mb-3">{activeVideo.category} · {activeVideo.duration}</p>
          <p className="text-gray-700 leading-relaxed mb-6">{activeVideo.description}</p>

          <div className="space-y-3">
            {videos.map((video, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  key={`${video.src}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition ${
                    isActive
                      ? 'border-[#7fb5ea] bg-[#eef5ff] shadow-sm'
                      : 'border-[#d8e6f6] bg-white hover:border-[#aacceb]'
                  }`}
                >
                  <img
                    src={video.poster}
                    alt={`${video.title} poster`}
                    className="h-16 w-24 rounded-lg object-cover"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gcrfip-green mb-1">{video.category}</p>
                    <p className="font-bold text-gcrfip-navy truncate">{video.title}</p>
                    <p className="text-sm text-gray-600">{video.duration}</p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}