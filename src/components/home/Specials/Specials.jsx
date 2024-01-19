import bruschettaImg from '#assets/brushetta.webp'
import greekSaladImg from '#assets/greek-salad.webp'
import lemonDessertImg from '#assets/lemon-dessert.webp'
import { MenuItem } from '#components/shared/MenuItem'
import { Button } from '#components/ui/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export function Specials() {
  return (
    <section className="specials container mx-auto px-gutter">
      <header className="mb-8">
        <h2 className="font-3xl font-medium font-serif">
          This weeks specials!
        </h2>

        <Button variant="accent" size="lg" asChild>
          <Link to="/menu">Online Menu</Link>
        </Button>
      </header>

      <div className="specials-showcase">
        <MenuItem
          title="Greek salad"
          price={12.99}
          image={{ src: greekSaladImg, alt: 'A refreshing greek salad' }}
        >
          <p>
            The famous greek salad of crispy, peppers, olives and our Chicago
            style feta cheese, garnished with crunchy garlic and rosemary
            croutons.
          </p>
        </MenuItem>
        <MenuItem
          title="Bruschetta"
          price={5.99}
          image={{ src: bruschettaImg, alt: 'A fresh bruschetta' }}
        >
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasones with salt and olvide oil.
          </p>
        </MenuItem>
        <MenuItem
          title="Lemon Dessert"
          price={12.99}
          image={{ src: lemonDessertImg, alt: 'A delicious lemon dessert' }}
        >
          <p>
            This comes straight from grandma's recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
        </MenuItem>
      </div>
    </section>
  )
}
