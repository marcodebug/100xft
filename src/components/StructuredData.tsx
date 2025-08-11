// NEXT-SPRINT: Stripe + Analytics

export default function StructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you accept US traders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. 100XFT welcomes traders from the United States and 195+ countries."
        }
      },
      {
        "@type": "Question",
        "name": "What is the maximum profit split offered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "100XFT offers up to 90% profit split on funded accounts with zero profit caps."
        }
      },
      {
        "@type": "Question",
        "name": "Where is 100XFT based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "100XFT is Morocco's first prop trading firm, serving traders worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "What trading instruments are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "100XFT offers Forex, Cryptocurrency, and Instant Funded challenges with various account sizes from $10K to $200K."
        }
      }
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "100XFT",
    "description": "Morocco's first prop trading firm offering elite trading challenges",
    "url": "https://100xft.com",
    "logo": "https://100xft.com/Untitled%20design.svg",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "MA"
    },
    "sameAs": [
      "https://x.com/100xft",
      "https://t.me/I00XFT",
      "https://www.instagram.com/100xft/"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
    </>
  );
}