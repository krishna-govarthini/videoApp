"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const allVideos = [
  { id: 1, title: "Sample Video 1", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 2, title: "Sample Video 2", url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4" },
  { id: 3, title: "Sample Video 3", url: "https://videos.pexels.com/video-files/6826658/6826658-sd_360_640_25fps.mp4" },
  { id: 4, title: "Sample Video 4", url: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4" },
  { id: 5, title: "Sample Video 5", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 6, title: "Sample Video 6", url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4" },
  { id: 7, title: "Sample Video 7", url: "https://videos.pexels.com/video-files/29523221/12708093_360_640_60fps.mp4" },
  { id: 8, title: "Sample Video 8", url: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4" },
  { id: 9, title: "Sample Video 9", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 10, title: "Sample Video 10", url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4" },
  { id: 11, title: "Sample Video 11", url: "https://videos.pexels.com/video-files/28948611/12525695_360_640_60fps.mp4" },
  { id: 12, title: "Sample Video 12", url: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4" },
  { id: 13, title: "Sample Video 13", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { id: 14, title: "Sample Video 14", url: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4" },
  { id: 15, title: "Sample Video 15", url: "https://videos.pexels.com/video-files/27824084/12234957_640_360_30fps.mp4" },
  { id: 16, title: "Sample Video 16", url: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4" },
  { id: 17, title: "Sample Video 17", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

const VideosPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const videosPerPage = 9; // Number of videos per page
  const totalPages = Math.ceil(allVideos.length / videosPerPage);

  // Get videos for the current page
  const currentVideos = allVideos.slice(
    (currentPage - 1) * videosPerPage,
    currentPage * videosPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-6">

      <h1 className="flex items-center justify-center py-5 text-4xl italic font-extrabold font-serif">VIDEO SEARCH PAGE</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <Input placeholder="Search videos..." className="w-full" />
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentVideos.map((video) => (
          <Dialog key={video.id}>
            <DialogTrigger asChild>
              <div
                className="cursor-pointer rounded-md p-4 shadow-md hover:shadow-lg transition"
                onClick={() => setSelectedVideo(video)}
              >
                <video
                  src={video.url}
                  className="w-full h-48 object-cover rounded-md"
                  muted
                  autoPlay
                  loop
                ></video>
                <div className="text-center mt-1 font-medium text-sm">{video.title}</div>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{video.title}</DialogTitle>
              </DialogHeader>
              <div>
                <video
                  src={video.url}
                  controls
                  className="w-full rounded-md"
                ></video>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-center items-center gap-4">
        <button
          className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default VideosPage;
