'use client';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
}

export default function MetaTags({
  title = 'Sneha Sharma | Portfolio',
  description = 'Personal portfolio website of Sneha Sharma, showcasing skills, projects, and experience in software development and UI/UX design.',
  keywords = ['Sneha Sharma', 'Portfolio', 'Web Developer', 'UI/UX Designer'],
  ogImage = '/og-image.jpg'
}: MetaTagsProps) {
  return (
    <>
      {/* Standard Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}