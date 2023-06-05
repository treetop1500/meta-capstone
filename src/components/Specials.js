import React from 'react';
import Button from './Button';
import Card from './Card';
import '../css/Specials.css';

const specials = [
  {
    'title': 'Greek Salad',
    'description': 'Experience the vibrant flavors of Greece with our refreshing Greek Salad. This classic Mediterranean dish combines crisp, fresh ingredients to create a harmonious symphony of tastes. ',
    'price': '12.99',
    'image': {
      'src': '/images/greek-salad.png',
      'alt': 'Greek Salad'
    },
    'cta': {
      'title': 'Order Online',
      'link': '/order-online#greek-salad'
    }
  },
  {
    'title': 'Bruschetta',
    'description': 'Indulge in the simple yet satisfying flavors of our bruschetta. Originating from Italy, this classic appetizer is a delightful combination of crusty bread, ripe tomatoes, fragrant garlic, and fresh basil.',
    'price': '13.99',
    'image': {
      'src': '/images/bruschetta.png',
      'alt': 'Bruschetta'
    },
    'cta': {
      'title': 'Order Online',
      'link': '/order-online#bruschetta'
    }
  },
  {
    'title': 'Lemon Dessert',
    'description': 'A luscious lemon-infused cake, perfectly balanced with a delicate sweetness. The velvety texture melts in your mouth, releasing a refreshing lemony essence that leaves a lingering, delightful tang.',
    'price': '7.99',
    'image': {
      'src': '/images/lemon-dessert.png',
      'alt': 'Lemon Dessert'
    },
    'cta': {
      'title': 'Order Online',
      'link': '/order-online#lemon-dessert'
    }
  },
  {
    'title': 'Pizza Margherita',
    'description': 'A classic Neapolitan pizza topped with tomato sauce, mozzarella cheese, fresh basil leaves, and a drizzle of olive oil.',
    'price': '15.99',
    'image': {
      'src': '/images/pizza-margherita.png',
      'alt': 'Pizza Margherita'
    },
    'cta': {
      'title': 'Order Online',
      'link': '/order-online#pizza-margherita'
    }
  },
  {
    'title': 'Lasagna',
    'description': 'Layers of flat pasta sheets, Bolognese sauce (meat sauce), creamy béchamel sauce, and a variety of cheeses, baked to perfection.',
    'price': '16.99',
    'image': {
      'src': '/images/lasagna.png',
      'alt': 'Lasagna'
    },
    'cta': {
      'title': 'Order Online',
      'link': '/order-online#lasagna'
    }
  },
  {
    'title': 'Ravioli',
    'description': 'Pasta dumplings filled with various ingredients such as cheese, meat, or vegetables, served with a sauce like tomato or butter sage.',
    'price': '14.99',
    'image': {
      'src': '/images/ravioli.png',
      'alt': 'Ravioli'
    },
    'cta': {
      'title': 'Order Online',
      'link': '/order-online#ravoli'
    }
  }
]

export default function Specials() {
  return (
      <section className="specials">
        <div>
          <h2>This week's specials!</h2>
          <Button title="Online Menu" link="/online-menu" aria-label="On Click"/>
        </div>
        <div className='overflow-x'>
          {specials.map((item) => (
            <Card {...item} key={item.title}/>
          ))}
        </div>
      </section>
  )
}