"use client";

import Image from "next/image";
import ModalOverlay from "../common/ModalOverlay";

interface Props {
  onClose: () => void;
}

export default function VoiceSearchModal({ onClose }: Props) {
  return (
    <ModalOverlay onClose={onClose}>
      <div
        className="
          w-[340px]
          rounded-3xl
          bg-zinc-800
          px-10
          py-12
          text-white
          shadow-2xl
        "
      >
        <div className="flex flex-col items-center gap-6">

          {/* Mic */}
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-zinc-600 opacity-40" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-zinc-700">
              <Image
                src="/icons/micicn.svg"
                alt="Listening"
                width={32}
                height={32}
              />
            </div>
          </div>

          {/* Text */}
          <p className="text-lg font-medium">Listening....</p>
        </div>
      </div>
    </ModalOverlay>
  );
}
