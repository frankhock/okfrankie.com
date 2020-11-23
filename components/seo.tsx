import React from 'react'
import Head from 'next/head'

type Props = {
  title?: string
  description?: string
  image?: string
}

export const Seo: React.FC<Props> = ({
  title = 'Frank Hock / Full-Stack Developer / Lancaster, PA',
  description = 'My personal slice of the internet.',
  image = '/splash.jpg',
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="image:alt" content={description} />

      <meta name="og:site_name" content="O.K. Frankie" />
      <meta name="og:title" content={title}></meta>
      <meta name="og:image" content={image}></meta>
    </Head>
  )
}
