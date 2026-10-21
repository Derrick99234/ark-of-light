"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const BASE = "https://arkoflightforallnations.com/wp-content/uploads/2025/09";

export interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
  category: string;
  categoryTitle: string;
}

export interface Category {
  id: string;
  title: string;
  cover: string;
  count: number;
}

const CATEGORIES: Category[] = [
  {
    id: "auditorium",
    title: "Multi-roomed auditorium",
    cover: `${BASE}/main-hall-1-1.jpg`,
    count: 14,
  },
  {
    id: "children",
    title: "Children’s Church",
    cover: `${BASE}/CHILDREN-CHURCH-1.jpg`,
    count: 5,
  },
  {
    id: "bible-school",
    title: "Bible School",
    cover: `${BASE}/BIBLE-CLASS-3.jpg`,
    count: 3,
  },
  {
    id: "lounges",
    title: "Lounges and Lodges",
    cover: `${BASE}/GUEST-LOUNGE-2.jpg`,
    count: 6,
  },
  {
    id: "restaurant",
    title: "Restaurant",
    cover: `${BASE}/RESTAURANT.jpg`,
    count: 1,
  },
  {
    id: "bookshop",
    title: "Christian Bookshop",
    cover: `${BASE}/BOOKSHOP.jpg`,
    count: 1,
  },
  {
    id: "board-room",
    title: "Board Room",
    cover: `${BASE}/BOARD-ROOM-scaled.jpg`,
    count: 2,
  },
  {
    id: "other",
    title: "Other Areas",
    cover: `${BASE}/PRAYER-GARDEN.jpg`,
    count: 4,
  },
  {
    id: "exterior",
    title: "Exterior",
    cover: `${BASE}/1-scaled.png`,
    count: 1,
  },
];

const PHOTOS: GalleryPhoto[] = [
  // Multi-roomed auditorium
  { id: "aud-1", src: `${BASE}/main-hall-1-1.jpg`, caption: "Main Worship Auditorium — Panoramic View", category: "auditorium", categoryTitle: "Multi-roomed auditorium" },
  { id: "aud-2", src: `${BASE}/main-hall-2-1.jpg`, caption: "Main Hall — Altar & Seating", category: "auditorium", categoryTitle: "Multi-roomed auditorium" },
  { id: "aud-3", src: `${BASE}/main-hall-3-1-scaled.jpg`, caption: "Main Auditorium — View from Gallery", category: "auditorium", categoryTitle: "Multi-roomed auditorium" },
  { id: "aud-4", src: `${BASE}/h2-hall-1.jpg`, caption: "H2 Multi-purpose Hall", category: "auditorium", categoryTitle: "Multi-roomed auditorium" },
  { id: "aud-5", src: `${BASE}/MAIN-HALL-4.jpg`, caption: "Main Hall — Pulpit & Chandelier", category: "auditorium", categoryTitle: "Multi-roomed auditorium" },
  { id: "aud-6", src: `${BASE}/H2-HALL-3.jpg`, caption: "H2 Hall — Secondary Auditorium", category: "auditorium", categoryTitle: "Multi-roomed auditorium" },
  { id: "aud-7", src: `${BASE}/H2-HALL-2.jpg`, caption: "H2 Hall — Overflow Seating", category: "auditorium", categoryTitle: "Multi-roomed auditorium" },
  { id: "aud-8", src: `${BASE}/CHILDREN-CHURCH-5.jpg`, caption: "Children’s Church — Upper Gallery", category: "auditorium", categoryTitle: "Multi-roomed auditorium" },
  { id: "aud-9", src: `${BASE}/CHILDREN-CHURCH-4.jpg`, caption: "Children’s Church — Main Hall", category: "auditorium", categoryTitle: "Multi-roomed auditorium" },
  { id: "aud-10", src: `${BASE}/CHILDREN-CHURCH-3.jpg`, caption: "Children’s Church — Learning Area", category: "auditorium", categoryTitle: "Multi-roomed auditorium" },
  { id: "aud-11", src: `${BASE}/CHILDREN-CHURCH-2.jpg`, caption: "Children’s Church — Presentation Stage", category: "auditorium", categoryTitle: "Multi-roomed auditorium" },
  { id: "aud-12", src: `${BASE}/CHILDREN-CHURCH-1.jpg`, caption: "Children’s Church — Welcome Foyer", category: "auditorium", categoryTitle: "Multi-roomed auditorium" },
  { id: "aud-13", src: `${BASE}/MAIN-HALL-7.jpg`, caption: "Main Hall — Rear Acoustic Seating", category: "auditorium", categoryTitle: "Multi-roomed auditorium" },
  { id: "aud-14", src: `${BASE}/MAIN-HALL-8.jpg`, caption: "Main Hall — Perspective View", category: "auditorium", categoryTitle: "Multi-roomed auditorium" },

  // Children's Church
  { id: "cc-1", src: `${BASE}/CHILDREN-CHURCH-1.jpg`, caption: "Children’s Church — Welcome Foyer", category: "children", categoryTitle: "Children’s Church" },
  { id: "cc-2", src: `${BASE}/CHILDREN-CHURCH-2.jpg`, caption: "Children’s Church — Presentation Stage", category: "children", categoryTitle: "Children’s Church" },
  { id: "cc-3", src: `${BASE}/CHILDREN-CHURCH-3.jpg`, caption: "Children’s Church — Learning Area", category: "children", categoryTitle: "Children’s Church" },
  { id: "cc-4", src: `${BASE}/CHILDREN-CHURCH-4.jpg`, caption: "Children’s Church — Main Hall", category: "children", categoryTitle: "Children’s Church" },
  { id: "cc-5", src: `${BASE}/CHILDREN-CHURCH-5.jpg`, caption: "Children’s Church — Upper Gallery", category: "children", categoryTitle: "Children’s Church" },

  // Bible School
  { id: "bs-1", src: `${BASE}/BIBLE-CLASS-3.jpg`, caption: "Bible School — Lecture Room", category: "bible-school", categoryTitle: "Bible School" },
  { id: "bs-2", src: `${BASE}/BIBLE-CLASS-2.jpg`, caption: "Bible School — Seminar Room", category: "bible-school", categoryTitle: "Bible School" },
  { id: "bs-3", src: `${BASE}/BIBLE-CLASS-1.jpg`, caption: "Bible School — Study Space", category: "bible-school", categoryTitle: "Bible School" },

  // Lounges and Lodges
  { id: "lg-1", src: `${BASE}/GUEST-LOUNGE-2.jpg`, caption: "VIP Guest Lounge", category: "lounges", categoryTitle: "Lounges and Lodges" },
  { id: "lg-2", src: `${BASE}/GUEST-LOUNGE-1-scaled.jpg`, caption: "Executive Guest Lounge", category: "lounges", categoryTitle: "Lounges and Lodges" },
  { id: "lg-3", src: `${BASE}/dinning-area.jpg`, caption: "Private Dining Area", category: "lounges", categoryTitle: "Lounges and Lodges" },
  { id: "lg-4", src: `${BASE}/prophets-lounge.jpg`, caption: "Prophet's Lounge", category: "lounges", categoryTitle: "Lounges and Lodges" },
  { id: "lg-5", src: `${BASE}/g20-lounge-2.jpg`, caption: "G20 Lounge Suite", category: "lounges", categoryTitle: "Lounges and Lodges" },
  { id: "lg-6", src: `${BASE}/g20-lounge-1.jpg`, caption: "G20 Lounge Conference Area", category: "lounges", categoryTitle: "Lounges and Lodges" },

  // Restaurant
  { id: "res-1", src: `${BASE}/RESTAURANT.jpg`, caption: "Ark Restaurant & Food Court", category: "restaurant", categoryTitle: "Restaurant" },

  // Christian Bookshop
  { id: "bk-1", src: `${BASE}/BOOKSHOP.jpg`, caption: "Christian Literature & Bookshop", category: "bookshop", categoryTitle: "Christian Bookshop" },

  // Board Room
  { id: "br-1", src: `${BASE}/BOARD-ROOM-scaled.jpg`, caption: "Executive Board Room", category: "board-room", categoryTitle: "Board Room" },
  { id: "br-2", src: `${BASE}/BOARD-ROOM-2.jpg`, caption: "Conference Table & Meeting Facilities", category: "board-room", categoryTitle: "Board Room" },

  // Other Areas
  { id: "oth-1", src: `${BASE}/PRAYER-GARDEN.jpg`, caption: "Prayer Garden & Serene Grounds", category: "other", categoryTitle: "Other Areas" },
  { id: "oth-2", src: `${BASE}/MINIMART.jpg`, caption: "Convenience Mini-mart", category: "other", categoryTitle: "Other Areas" },
  { id: "oth-3", src: `${BASE}/reception-1.jpg`, caption: "Central Welcome Reception", category: "other", categoryTitle: "Other Areas" },
  { id: "oth-4", src: `${BASE}/reception-2.jpg`, caption: "Reception & Visitors Foyer", category: "other", categoryTitle: "Other Areas" },

  // Exterior
  { id: "ext-1", src: `${BASE}/1-scaled.png`, caption: "The Ark of Light — Iconic Exterior & Arches", category: "exterior", categoryTitle: "Exterior" },
];

const counts = [
  { value: "20", label: "Spiritual Spaces" },
  { value: "12", label: "Community & Relaxation Areas" },
  { value: "4", label: "Others Areas" },
];

export default function Facilities() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  // Photos for the currently open category
  const categoryPhotos = activeCategory
    ? PHOTOS.filter((p) => p.category === activeCategory.id)
    : [];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!activeCategory) return;
      if (e.key === "Escape") {
        setActiveCategory(null);
      } else if (e.key === "ArrowLeft") {
        setActivePhotoIndex((prev) =>
          prev === 0 ? categoryPhotos.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setActivePhotoIndex((prev) =>
          prev === categoryPhotos.length - 1 ? 0 : prev + 1
        );
      }
    },
    [activeCategory, categoryPhotos.length]
  );

  useEffect(() => {
    if (activeCategory) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCategory, handleKeyDown]);

  const openCategory = (cat: Category) => {
    setActiveCategory(cat);
    setActivePhotoIndex(0);
  };

  return (
    <section id="facilities" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      {/* Section Header & Impact Counts */}
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="text-xs font-semibold tracking-widest text-amber-600 uppercase dark:text-amber-400">
            Facilities &amp; Architecture
          </span>
          <h2 className="mt-4 max-w-md font-display text-4xl font-bold tracking-tight text-balance text-zinc-950 sm:text-5xl dark:text-zinc-50">
            More than an auditorium — a sanctuary city
          </h2>
        </div>
        <ul className="flex gap-8 border-t border-zinc-200/80 pt-4 md:border-t-0 md:pt-0 dark:border-zinc-800">
          {counts.map((count) => (
            <li key={count.label}>
              <div className="font-display text-3xl font-bold text-zinc-950 dark:text-zinc-50">
                {count.value}
              </div>
              <div className="mt-1 max-w-[9rem] text-xs text-zinc-500 dark:text-zinc-400">
                {count.label}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories Grid (Clean top cards only - no gray description bottom) */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => openCategory(cat)}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-950 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-zinc-800"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={cat.cover}
                alt={`${cat.title} at Ark of Light`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/25 to-transparent transition-opacity group-hover:from-zinc-950/90" />

              {/* Photo count indicator */}
              <span className="absolute top-4 right-4 text-xs font-semibold tracking-wide text-zinc-200 drop-shadow">
                {cat.count} {cat.count === 1 ? "Photo" : "Photos"}
              </span>

              {/* Bottom overlay with title and arrow pill */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-amber-400">
                  {cat.title}
                </h3>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all group-hover:bg-amber-500 group-hover:text-white">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Facilities Footer Info */}
      <div className="mt-12 rounded-2xl border border-zinc-200/80 bg-zinc-50 p-6 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-400">
        <p className="leading-relaxed">
          <strong className="text-zinc-950 dark:text-zinc-100">Campus Facilities:</strong> 10,000-seat main auditorium, Children&rsquo;s church halls, Bible school lecture rooms, prayer conference suites, Christian bookshop, multi-storage food bank, primary school, broadcast studios, VIP guest lodges, mini-mart, and community food court.
        </p>
      </div>

      {/* CATEGORY POPUP MODAL */}
      {activeCategory && categoryPhotos.length > 0 && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-md"
          onClick={() => setActiveCategory(null)}
        >
          {/* Modal Container */}
          <div
            className="relative flex max-h-[95vh] w-full max-w-5xl flex-col rounded-3xl border border-white/10 bg-zinc-950 p-5 shadow-2xl sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase">
                  Category Gallery
                </span>
                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  {activeCategory.title}
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium text-zinc-400">
                  {activePhotoIndex + 1} of {categoryPhotos.length}
                </span>
                <button
                  type="button"
                  aria-label="Close modal"
                  onClick={() => setActiveCategory(null)}
                  className="grid size-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Main Image Display */}
            <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl bg-zinc-900/60 py-2">
              {/* Previous button */}
              {categoryPhotos.length > 1 && (
                <button
                  type="button"
                  aria-label="Previous photo"
                  onClick={() =>
                    setActivePhotoIndex((prev) =>
                      prev === 0 ? categoryPhotos.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:bg-black/90 hover:scale-105 sm:left-5"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
              )}

              {/* Main Photo */}
              <div className="flex max-h-[58vh] items-center justify-center p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={categoryPhotos[activePhotoIndex].src}
                  alt={categoryPhotos[activePhotoIndex].caption}
                  className="max-h-[58vh] max-w-full rounded-xl object-contain shadow-2xl"
                />
              </div>

              {/* Next button */}
              {categoryPhotos.length > 1 && (
                <button
                  type="button"
                  aria-label="Next photo"
                  onClick={() =>
                    setActivePhotoIndex((prev) =>
                      prev === categoryPhotos.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:bg-black/90 hover:scale-105 sm:right-5"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              )}
            </div>

            {/* Caption */}
            <div className="mt-3 text-center">
              <p className="font-medium text-white sm:text-base">
                {categoryPhotos[activePhotoIndex].caption}
              </p>
            </div>

            {/* Thumbnail Strip (if multiple photos) */}
            {categoryPhotos.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1 pt-1 justify-center scrollbar-thin">
                {categoryPhotos.map((photo, i) => (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => setActivePhotoIndex(i)}
                    className={`relative size-14 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                      activePhotoIndex === i
                        ? "border-amber-400 scale-105 shadow-md shadow-amber-500/20"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="size-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
