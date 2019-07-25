import useLocalStorage from './../hooks/useLocalStorage';
import { useEffect } from 'react'



const useDarkMode = (ivalue) => {
    const [isDark, setIsDark] = useLocalStorage('isOn', ivalue);
    // /ivalue (inital value) is false in the navbar.js, 'isOn' is the key)
    console.log(isDark)

        useEffect(() => {
            if(isDark === true){
                document.body.classList.remove('dark-mode')
                // document.querySelector('body').classList.add('dark-mode')
            }
            else(
                document.body.classList.add('dark-mode')
            )
        },  [isDark]
        )

        return [isDark, setIsDark]
    }
        
    
export default useDarkMode;