import { FormEvent } from 'react'

export const handleDragStart = (
  e: FormEvent<HTMLImageElement> | undefined,
): void => e?.preventDefault?.()
