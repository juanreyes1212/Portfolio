"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageData {
  src: string
  alt: string
  caption?: string
}

interface ImageGalleryProps {
  images: ImageData[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      goToPrevious()
    } else if (event.key === "ArrowRight") {
      goToNext()
    } else if (event.key === "Escape") {
      closeModal()
    }
  }

  if (images.length === 1) {
    // Single image - display as large featured image
    return (
      <div className="mb-8">
        <div
          className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
          onClick={() => openModal(0)}
        >
          <Image
            src={images[0].src || "/placeholder.svg"}
            alt={images[0].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
        {images[0].caption && (
          <p className="text-sm text-muted-foreground mt-2 text-center italic">{images[0].caption}</p>
        )}

        {/* Modal for single image */}
        <Dialog open={selectedImage === 0} onOpenChange={() => closeModal()}>
          <DialogContent className="max-w-4xl w-full p-0" onKeyDown={handleKeyDown}>
            <DialogTitle className="sr-only">{images[0].alt}</DialogTitle>
            <DialogDescription className="sr-only">Full size view of {images[0].alt}</DialogDescription>
            <div className="relative">
              <Image
                src={images[0].src || "/placeholder.svg"}
                alt={images[0].alt}
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70"
                onClick={closeModal}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            {images[0].caption && (
              <div className="p-4 text-center">
                <p className="text-sm text-muted-foreground">{images[0].caption}</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  // Multiple images - display as grid gallery
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => openModal(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                Click to enlarge
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for gallery */}
      <Dialog open={selectedImage !== null} onOpenChange={() => closeModal()}>
        <DialogContent className="max-w-5xl w-full p-0" onKeyDown={handleKeyDown}>
          {selectedImage !== null && (
            <>
              <DialogTitle className="sr-only">{images[selectedImage].alt}</DialogTitle>
              <DialogDescription className="sr-only">
                Image {selectedImage + 1} of {images.length}: {images[selectedImage].alt}
              </DialogDescription>
              <div className="relative">
                <Image
                  src={images[selectedImage].src || "/placeholder.svg"}
                  alt={images[selectedImage].alt}
                  width={900}
                  height={600}
                  className="w-full h-auto rounded-lg"
                />

                {/* Navigation buttons */}
                {images.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                      onClick={goToPrevious}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous image</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                      onClick={goToNext}
                    >
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next image</span>
                    </Button>
                  </>
                )}

                {/* Close button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70"
                  onClick={closeModal}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>

                {/* Image counter */}
                {images.length > 1 && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {selectedImage + 1} / {images.length}
                  </div>
                )}
              </div>

              {/* Caption */}
              {images[selectedImage].caption && (
                <div className="p-4 text-center">
                  <p className="text-sm text-muted-foreground">{images[selectedImage].caption}</p>
                </div>
              )}

              {/* Thumbnail navigation for multiple images */}
              {images.length > 1 && (
                <div className="p-4 border-t">
                  <div className="flex gap-2 justify-center overflow-x-auto">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        className={cn(
                          "relative w-16 h-12 rounded overflow-hidden flex-shrink-0 border-2 transition-colors",
                          selectedImage === index ? "border-amber-600" : "border-transparent",
                        )}
                        onClick={() => setSelectedImage(index)}
                      >
                        <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
