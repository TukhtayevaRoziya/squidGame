import { useEffect, useState } from 'react'

import { onSnapshot, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase'

export const useSeries = () => {
  const [useSeries, setUseSeries] = useState([])

  useEffect(() => {
    onSnapshot(
      query(collection(db, 'series'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setUseSeries(
          snapshot.docs.map((doc) => (
            
            {
            _id: doc.id,
            ...doc.data(),
          })),
        )
      },
    )
  }, [])

  return [useSeries, setUseSeries]
}
