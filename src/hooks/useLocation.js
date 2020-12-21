import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync,
} from "expo-location";


export default (shouldTrack,callback) => {
  const [err, setErr] = useState(null);
  const [subscriber,setSubscriber] = useState(null)
  const startWatching = async () => {
    try {
     const sub= await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        callback,
       
      );
      setSubscriber(sub)
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setErr(e);
    }
  };
  useEffect(() => {
      if(shouldTrack){
          //start watching
        startWatching();
      }else{
          //stop watching
          subscriber.remove();
          setSubscriber(null)
      }
    
  }, [shouldTrack]);

  return [err]
};
