import React, { FC } from "react"
import PropTypes from "prop-types"
import type { RouteComponentProps } from "@reach/router"

import Layout from "@/components/Layout"
import site from "@/images/site.jpg"

const Home: FC = () => {
  return (
    <Layout>
      <div className="home">
        <img src={site} alt="Island Fields map" />
        <div style={{height: "3rem"}}></div>
        <p>
          Climate Change in Brecknockshire results in irregular storms and significant increases in rainfall. A series of field recordings gathered throughout Autumn 2021, this work celebrates, archives and critiques the biodiversity of Brecon’s Island Fields, a flood plain situated between the River Usk and the Monmouthshire and Brecon Canal on the edge of the town. The whole ecosystem here is at risk due to increased flooding at times of the year when the nature here is vulnerable. The Island Fields is a space well loved by the local community for walking, playing, swimming and the enjoyment of the natural World.
        </p>
        <p>
          Artscape artist-in-residence Matt Cook has developed this work through a series of interactions with ornithologist Andrew King; the Biodiversity Information Service for Powys and local green wood workers.
        </p>
      </div>
    </Layout>
  )
}

export default Home
