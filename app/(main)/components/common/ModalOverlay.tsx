"use client";

import Portal from "./Portal";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

export default function ModalOverlay({ children, onClose }: Props) {
  return (
    <Portal>
      <div
        className="
          fixed inset-0 z-[9999]
          flex items-center justify-center
          bg-black/60
        "
        onClick={onClose}
      >
        <div
          onClick={e => e.stopPropagation()}
          className="relative"
        >
          {children}
        </div>
      </div>
    </Portal>
  );
}
