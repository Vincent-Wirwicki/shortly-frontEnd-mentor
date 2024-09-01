"use client";

import { Dispatch, ReactNode, SetStateAction, useEffect, useRef } from "react";

import { Button } from "./button";

export default function Modal({
  children,
  isOpen,
  setIsOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      if (isOpen) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-y-0 w-screen h-screen p-4  bg-primary-dark-violet shadow-lg rounded-lg"
    >
      {children}
    </dialog>
  );
}
