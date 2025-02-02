import React, {MouseEvent, ReactNode, useEffect, useRef} from 'react';
import s from './Modal.module.scss'
import {clsx} from "clsx";
import {createPortal} from "react-dom";
import {Card} from "common/components/card";
import {AnimatePresence} from "framer-motion"

type ModalProps = {
  children: ReactNode
  isOpen?: boolean
  className?: string
  onOpenChange?: (isOpen: boolean) => void
}
export const Modal = ({children, className, isOpen = true, onOpenChange}: ModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);


  const handleClickClose = () => {
    onOpenChange?.(false);
  }

  const handleClickStopPropagation = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation()
  }

  useEffect(() => {


    // Поиск всех фокусируемых элементов внутри модалки
    const getFocusableElements = (): HTMLElement[] => {
      if (!contentRef.current) return [];
      return Array.from(
        contentRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'));
    };

    // Сразу устанавливаем фокус на первый фокусируемый элемент, если он есть
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Закрытие модалки по Escape
      if (e.key === 'Escape') {
        handleClickClose();
        return;
      }
      if (e.key !== 'Tab') return; // Нас интересует только клавиша Tab

      const focusableEls = getFocusableElements();
      if (focusableEls.length === 0) return;

      const firstElement = focusableEls[0];
      const lastElement = focusableEls[focusableEls.length - 1];

      if (e.shiftKey) {
        // Если нажато Shift+Tab и текущий элемент - первый, переключаем фокус на последний элемент
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Если нажато Tab и текущий элемент - последний, переключаем фокус на первый элемент
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflow = "unset"
    }
    if (!isOpen) return;

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, children]);

  if (!isOpen) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <section className={s.modal}
                 onClick={handleClickClose}
                 role="dialog"
                 aria-modal="true">
          <Card className={clsx(s.block, className)}
                ref={contentRef}
                onClick={handleClickStopPropagation}>
            {children}
          </Card>
        </section>)}
    </AnimatePresence>,

    document.body
  );
};
