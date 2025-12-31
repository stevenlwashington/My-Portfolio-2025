import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    if (!import.meta.env.PROD) return;

    const cfToken = import.meta.env.VITE_CLOUDFLARE_WEB_ANALYTICS_TOKEN;
    const clarityId = import.meta.env.VITE_CLARITY_PROJECT_ID;

    if (cfToken && !document.getElementById("cf-beacon")) {
      const cfScript = document.createElement("script");
      cfScript.id = "cf-beacon";
      cfScript.src = "https://static.cloudflareinsights.com/beacon.min.js";
      cfScript.defer = true;
      cfScript.setAttribute("data-cf-beacon", JSON.stringify({ token: cfToken }));
      document.head.appendChild(cfScript);
    }

    if (clarityId && !document.getElementById("ms-clarity")) {
      const sanitizedId = clarityId.replace(/[^a-zA-Z0-9]/g, "");
      if (sanitizedId) {
        const clarityScript = document.createElement("script");
        clarityScript.id = "ms-clarity";
        clarityScript.type = "text/javascript";
        clarityScript.textContent = `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${sanitizedId}");
        `;
        document.head.appendChild(clarityScript);
      }
    }
  }, []);

  return null;
}
