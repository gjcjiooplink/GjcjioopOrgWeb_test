import { useState, useEffect } from 'react'
import Image from 'next/image'

interface VerificationImageProps {
  onImageLoaded: (imageSrc: string) => void
}

export default function VerificationImage({ onImageLoaded }: VerificationImageProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchRandomImage = async () => {
      try {
        const response = await fetch(
          'https://api.unsplash.com/photos/random?query=landscape&orientation=landscape&client_id=YOUR_UNSPLASH_ACCESS_KEY'
        )
        const data = await response.json()
        setImageSrc(data.urls.regular)
        onImageLoaded(data.urls.regular)
      } catch (error) {
        console.error('Error fetching image:', error)
        setError(true)
      }
    }

    fetchRandomImage()
  }, [onImageLoaded])

  if (error) {
    return (
      <div className="w-[300px] h-[150px] bg-gray-300 flex items-center justify-center text-gray-600">
        图片加载失败
      </div>
    )
  }

  if (!imageSrc) {
    return (
      <div className="w-[300px] h-[150px] bg-gray-200 animate-pulse"></div>
    )
  }

  return (
    <Image
      src={imageSrc}
      alt="Verification Image"
      width={300}
      height={150}
      className="rounded-md"
    />
  )
}

