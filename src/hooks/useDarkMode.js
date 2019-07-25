import useLocalStorage from './../hooks/useLocalStorage';
import { useEffect } from 'react'



const useDarkMode = (ivalue) => {
    const [isDark, setIsDark] = useLocalStorage('isOn', ivalue);
    console.log(isDark)

        useEffect(() => {
            if(isDark === true){
                document.body.classList.add('dark-mode')
                // document.querySelector('body').classList.add('dark-mode')
            }
            else(
                document.body.classList.remove('dark-mode')
            )
        },  [isDark]
        )

        return [isDark, setIsDark]
    }
        
    
export default useDarkMode;