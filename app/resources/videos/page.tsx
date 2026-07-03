'use client'

import Link from 'next/link'
import VideoPlaylist from '../../../components/resources/VideoPlaylist'
import { videoLibrary } from './video-library'

export default function Videos() {
  return (
    <div className="container-custom section-padding">
      <h1 className="text-4xl font-bold mb-8 text-gcrfip-navy">Videos</h1>

      <section>
        <p className="text-lg text-gray-700 mb-8">
          Video resources explaining GCRFIP concepts, flood science, and preparedness strategies.
        </p>

        <div className="mb-8">
          <VideoPlaylist videos={videoLibrary} />
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="card p-6 border-t-4 border-gcrfip-green/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">Playlist Layout</p>
            <h2 className="text-xl font-bold text-gcrfip-navy mb-2">One player, multiple assets</h2>
            <p className="text-gray-700">The page now uses a single featured player with a selectable playlist instead of repeating the same sample player in several cards.</p>
          </div>
          <div className="card p-6 border-t-4 border-gcrfip-green/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">Poster Thumbnails</p>
            <h2 className="text-xl font-bold text-gcrfip-navy mb-2">Readable previews</h2>
            <p className="text-gray-700">Each entry now uses an existing GCRFIP image as a poster thumbnail so the library feels complete before dedicated video posters are produced.</p>
          </div>
          <div className="card p-6 border-t-4 border-gcrfip-green/70">
            <p className="text-sm font-semibold uppercase tracking-wide text-gcrfip-green mb-2">Reusable Setup</p>
            <h2 className="text-xl font-bold text-gcrfip-navy mb-2">Future uploads are easier</h2>
            <p className="text-gray-700">The video library now comes from shared data and reusable components, so adding future media only requires adding new items to the video library.</p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/resources" className="chip chip-muted">Back to Resources</Link>
          <Link href="/contact/social-media" className="chip chip-muted">View Media Channels</Link>
        </div>
      </section>
    </div>
  )
}
