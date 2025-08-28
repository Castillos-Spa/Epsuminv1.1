import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combina clases de CSS usando clsx y tailwind-merge
 * Permite usar condiciones, arrays, objetos, etc. para clases
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}