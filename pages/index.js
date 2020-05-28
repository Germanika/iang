import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import SocialMediaLinks from '../components/social-media-links'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <SocialMediaLinks />
      <section>
        <p>Hi! You've found my little corner of the internet. There's not much here right now, but one day it just might turn into something!</p>
        <p>I'm a software developer from Ottawa (that's Canada) mainly focused on front-end development and I'm currently looking for new opportunities!
          I worked at <a target='_blank' href='https://tripadvisor.com'>Tripadvisor</a> for a short stint until the global pandemic ruined everyones travel plans.
          Before that, I built some pretty cool things at <a target='_blank' href='https://shoebox.md'>SHOEBOX</a> which helped make hearing tests more accessible to everyone.
        </p>
        <p>But hey, this isn't my resume...
        I love food, travel, running, cycling, rock climbing, and spending as much time outdoors as possible.
        Oh, and I'm a bit of a nerd when it comes to coffee and making sourdough bread.
        Who am I kidding, I'm a bit of a nerd about everything.
        </p>
      </section>
    </Layout>
  )
}
