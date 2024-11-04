import { configureStore } from '@reduxjs/toolkit'
import styleReducer  from './stores/styleSlice'

const store = configureStore({
  reducer: {
    style: styleReducer 
  }
});

export default store;
