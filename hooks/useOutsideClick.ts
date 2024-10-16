import { useEffect, RefObject } from 'react'

const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void,
  isModalOpen: boolean
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback, isModalOpen])
}

export default useOutsideClick
