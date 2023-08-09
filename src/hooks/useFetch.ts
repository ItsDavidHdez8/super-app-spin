import React from 'react'
import apiDB from '../api/apiDB'

export const useFetch = () => {

  const fetchHistory = async () => {
    try {
      const resp = await apiDB.get("/history")
      const data = resp.data;
      return data;
    } catch (error) {
      console.log(error)
    }
  }

  return {fetchHistory}
}
