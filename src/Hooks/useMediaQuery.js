import React from "react";

const useMediaQuery = (query, defaultMatch = window.matchMedia(query) ) => {
    const [match,setMatch] = React.useState(defaultMatch)
    console.log(defaultMatch)
    React.useEffect(() =>{
        const media = window.matchMedia(query)
        media.matches !== match && setMatch(media.matches)

        const listener =  () => setMatch(media.matches)
        console.log(listener)
        media.addEventListener(listener)

        return () => media.removeEventListener(listener)
    },[query,match])

    return match 
}

export default useMediaQuery