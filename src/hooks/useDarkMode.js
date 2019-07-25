import useLocalStorage from './../hooks/useLocalStorage';
import { useEffect } from 'react'



const useDarkMode = () => {
    const [isDark, setIsDark] = useLocalStorage('isOn');
    console.log(isDark)

        useEffect(() => {
            if(isDark === 'true'){
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