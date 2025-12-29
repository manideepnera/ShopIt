"use client";

import Image from "next/image";
import ModalOverlay from "../common/ModalOverlay";

interface Props {
  onClose: () => void;
}

export default function ImageSearchModal({ onClose }: Props) {
  return (
    <ModalOverlay onClose={onClose}>
      <div
        className="
          w-[260px]
          rounded-[28px]
          bg-zinc-800
          px-6
          py-8
          text-white
          shadow-2xl
        "
      >
        <div className="flex flex-col items-center gap-6">

          {/* Camera */}
          <button className="flex flex-col items-center gap-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-700">
              <Image
                src="/icons/cameraicn.svg"
                alt="Camera"
                width={24}
                height={24}
              />
            </div>
            <span className="text-sm">Camera</span>
          </button>

          <div className="h-px w-full bg-zinc-600" />

          {/* Upload */}
          <button className="flex flex-col items-center gap-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-700">
              <Image
                src="/icons/uploadicn.svg"
                alt="Upload"
                width={24}
                height={24}
              />
            </div>
            <span className="text-sm">Upload</span>
          </button>
        </div>
      </div>
    </ModalOverlay>
  );
}
