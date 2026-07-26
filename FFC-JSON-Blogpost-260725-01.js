// MASTER UNIFIED SCHEMA INJECTOR 
const injectBlogPostingSchema = () => {
    const currentPath = window.location.pathname.toLowerCase();
    if (currentPath.includes('/blog/')) {
        if (document.getElementById('frank-blog-schema')) return;

        const targetTitle = document.title || "Maui Car Rental Blog";
        const descEl = document.querySelector('meta[name="description"]') || document.querySelector('meta[property="og:description"]');
        const targetDesc = descEl ? descEl.getAttribute('content') : "Frank's Friendly Cars Maui Car Rental LLC Blog Updates.";

        const minimalBlogObj = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": targetTitle,
            "description": targetDesc,
            "image": "https://img.uenicdn.com/cdn-cgi/image/width=1280,fit=scale-down,f=auto/image/upload/v1777929271/business/22462d09-da05-411d-a3cc-73074cfcd777.jpg", 
            "mainEntityOfPage": window.location.href,
            "url": window.location.href,
            "datePublished": "2026-07-19",
            "dateModified": "2026-07-25",
            "publisher": {
                "@type": "Organization",
                "name": "Frank's Friendly Cars Maui Car Rental LLC"
            },
            "author": {
                "@type": "Organization",
                "name": "Frank's Friendly Cars Maui Car Rental LLC"
            }
        };

        const scriptNode = document.createElement('script');
        scriptNode.id = 'frank-blog-schema';
        scriptNode.type = 'application/ld+json';
        scriptNode.text = JSON.stringify(minimalBlogObj);
        document.head.appendChild(scriptNode);
    } 
};

// HEARTBEAT EXECUTION TIMERS
injectBlogPostingSchema();
let blogCount = 0;
const blogHeartbeat = setInterval(() => {
    injectBlogPostingSchema();
    blogCount++;
    if (blogCount > 30) clearInterval(blogHeartbeat);
}, 500);
