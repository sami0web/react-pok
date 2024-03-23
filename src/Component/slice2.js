import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fonction asynchrone qui effectue la requête de données
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  try {
    const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/100');
    const data = await response.json();
    return data;
  } catch (error) {
    // Gérer les erreurs ici
    throw error;
  }
});



const initialState = {
  Items: []
}


export const PokemonDataSlice = createSlice({
  name: 'PokemonData',
  initialState,
  reducers: {
    nextPage: (state,action) => {
        
    
    },
    prevPage: (state,action) => {
      
    
    },


    handleSelectionChange: (state,action) => {
      
    
    },

    RemoveItem: (state,action) => {
     
    
    },


  },
})


export const {  } = PokemonDataSlice.actions

export default PokemonDataSlice.reducer