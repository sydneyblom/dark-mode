import {useEffect} from "react"
import useLocalStorage from "./useLocalStorage"


export const useDarkMode =  () => {
    //key and then initial value - value is false until toggled
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  

    //set effect hook- classlist removing or adding class to body
    useEffect(() => {
        if(darkMode === true) {
            document.body.classList.add('dark-mode')
        }
        else {
            document.body.classList.remove('dark-mode')
        }
    }, [darkMode])

  
    return [darkMode, setDarkMode];
  } 