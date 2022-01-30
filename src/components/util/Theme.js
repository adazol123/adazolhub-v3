import React, { useState } from 'react'


export const Theme = (props) => { 
    const [theme, setTheme] = useState(true)

    if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
        document.documentElement.setAttribute('data-theme', 'light')
    } else { document.documentElement.setAttribute('data-theme', 'dark') }

    function toggleTheme() {
        if(theme? localStorage.theme = 'dark' : localStorage.theme = 'light') setTheme(!theme)
    }
    return (
        <button onClick={toggleTheme} {...props}>
            {theme ? '🌙' : '☀️'}
        </button>
    )
}