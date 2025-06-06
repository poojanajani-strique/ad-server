export default function AdPage({ searchParams }) {
  const email = searchParams?.email

  const imageMap = {
    'poojan@strique.io': '/ads/1.png',
    'poojan@digimaze.io': '/ads/2.png',
  }

  const imageUrl = imageMap[email] || '/ads/default.png'

  return (
    <html>
      <head>
        <title>Ad</title>
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <img
          src={imageUrl}
          alt="Personalized Ad"
          style={{ width: '100%', height: '100%', display: 'block' }}
        />
      </body>
    </html>
  )
}