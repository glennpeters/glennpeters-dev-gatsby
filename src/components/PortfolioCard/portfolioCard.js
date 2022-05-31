import React from "react"

import './portfolioCard.css'

const PortfolioCard = ({ children }) => (
    <section className="portfolioCard card">
        {children}
    </section>
)


export default PortfolioCard
