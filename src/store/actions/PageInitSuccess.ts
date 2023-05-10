import { createAction } from '@reduxjs/toolkit';
import type { Store } from '../types/store';

export const PageInitSuccess = createAction<Store>('PageInitSuccess');
