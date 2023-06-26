import '../assets/css/footer.css'

export default function Footer() {
   return (
      <div id="footer">
         <div className="container flex justify-between mx-auto md:px-12">
            <p className="author">
               Developed by<a href="https://www.fiverr.com/sreenath_kumar" target="_blank" rel="noreferrer">Sreenath Kumar</a>
            </p>
            <div className="social_links flex">
               <a href="https://www.facebook.com/dev.sreenathkumar/" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="social_icon">
                     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
               </a>
               <a href="https://twitter.com/dev_sreenath" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="social_icon">
                     <path
                        d="M23 3a10.9 10.9 0 0 1-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
               </a>
               <a href="https://www.linkedin.com/in/sreenath-kumar-b265a0168/" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="social_icon">
                     <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                     <path d="M2 9h4v12H2z" />
                     <circle cx="4" cy="4" r="2" />
                  </svg>
               </a>
               <a href="https://github.com/Sreenath-Kumar" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="social_icon">
                     <g stroke-linecap="round" stroke-linejoin="round">
                        <path
                           d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                     </g>
                  </svg>
               </a>
            </div>
            <p className="credit">
               Inspired by<a href="https://brittanychiang.com/">Brittany Chiang.</a>
            </p>
         </div>
      </div>
   )
}
