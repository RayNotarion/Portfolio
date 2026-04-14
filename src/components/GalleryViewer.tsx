import { useEffect, useState } from "react";
import type { GalleryViewerProps } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const GalleryViewer = ({ items }: GalleryViewerProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isOpen = activeIndex !== null;

  const open = (index: number) => setActiveIndex(index);
  const close = () => setActiveIndex(null);

  const prev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  const next = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % items.length);
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, activeIndex]);

  return (
    <>
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {items.map((item, index) => (
              <CarouselItem
                key={item.id}
                className="pl-2 md:pl-4 basis-full md:basis-1/3"
              >
                <button
                  type="button"
                  onClick={() => open(index)}
                  className="w-full overflow-hidden rounded-lg aspect-4/5"
                  aria-label={`Open gallery image ${index + 1}`}
                >
                  <img
                    src={item.imgSrc}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex -left-4 lg:-left-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700" />
          <CarouselNext className="hidden md:flex -right-4 lg:-right-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 shadow-md hover:bg-gray-50 dark:hover:bg-gray-700" />
        </Carousel>

        <div className="flex justify-center mt-4 md:hidden">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Swipe to see more →
          </p>
        </div>
      </div>

      {isOpen && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm p-4"
          onClick={close}
        >
          <div
            className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 gap-4 flex items-center justify-center justify-between text-white">
              <p className="text-sm">
                {activeIndex + 1} / {items.length}
              </p>
              <button
                type="button"
                onClick={close}
                className="rounded-md border border-white/25 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20"
              >
                Close
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/20 bg-black">
              <img
                src={items[activeIndex].imgSrc}
                alt={`Gallery image ${activeIndex + 1}`}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <button
                type="button"
                onClick={prev}
                className="rounded-md border border-white/25 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={next}
                className="rounded-md border border-white/25 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryViewer;
