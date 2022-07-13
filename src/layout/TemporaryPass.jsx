import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Icon } from 'semantic-ui-react';


export default function TemporaryPass() {
    let history = useHistory()
    const MINUTE_MS = 1000;

useEffect(() => {
  const interval = setInterval(() => {
    history.push("/cart")
  }, MINUTE_MS);

  return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
}, [])
    
    return (
        <div><Icon loading name='spinner' /></div>
    )
}
