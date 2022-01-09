import React from 'react'

export default function About() {
    return (
        <section className="about">
            <div>
                <img src="https://i.imgur.com/vDMpLHn.png" alt="chair"></img>
            </div>
            <article>
                <h2><span className="verticaladd">⬇</span> About us</h2>
                <p>Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.
                Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo.
                While the congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....
                </p>
                <button className="learnmore"><a href="https://twitter.com/Kaleidosport" target="_blank" rel="noreferrer">Learn more</a></button>
            </article>
        </section>
    )
}
