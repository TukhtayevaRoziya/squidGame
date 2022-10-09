import React, { useEffect, useState } from 'react'

import { onSnapshot, collection, query, orderBy, doc } from 'firebase/firestore'
import { db } from '../firebase'

const useSeries = () => {
  const [useSeries, setUseSeries] = useState([])

  useEffect(() => {
    onSnapshot(
      query(collection(db, 'seties'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setUseSeries(
          snapshot.docs.map((doc) => ({
            _id: doc.id,
            ...doc.data(),
          })),
        )
      },
    )
  }, [])

  return [useSeries, setUseSeries]
}

export default useSeries
