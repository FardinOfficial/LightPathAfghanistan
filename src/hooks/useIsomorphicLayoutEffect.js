import { useEffect, useLayoutEffect } from 'react'

/** useLayoutEffect in the browser, useEffect during static prerendering. */
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
