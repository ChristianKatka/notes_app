import { createListenerMiddleware } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom';


import { getNotesThunk } from '../thunks/note.thunk'


export const listenerMiddleware = createListenerMiddleware()


listenerMiddleware.startListening({
  actionCreator: getNotesThunk.fulfilled,
  effect: async (action, listenerApi) => {

    console.log('side efect');

    // React Hook "useNavigate" is called in function "effect" that is neither a React function component nor a custom React Hook function.
    const navigate = useNavigate();
    navigate(`/create-note`)

  },
})

