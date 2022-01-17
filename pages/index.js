import React from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function Home() {
  return (
    <div>
      Hello world
    </div>
  )
}

export default Home

export async function getStaticProps({ locale }) {
  return {
    props : {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}