/** @type {import('tailwindcss').Config} */

export default {

content:[

"./index.html",

"./src/**/*.{js,ts,jsx,tsx}"

],

darkMode:"class",

theme:{

extend:{

colors:{

background:"var(--background)",

foreground:"var(--foreground)",

card:"var(--card)",

success:"var(--success)",

warning:"var(--warning)",

danger:"var(--danger)"

}

}

},

plugins:[]

}