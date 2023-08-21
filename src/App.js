import './App.css';
import Home from './pages/Home/Home';
import children from './assets/images/childrenbooks/childrenCatageory.jpg';
import cooking from './assets/images/foodbooks/foodCatageory.jpg';
import mindBody from './assets/images/mindBodyBooks/mindBodyCatageory.jpg';
import selfHelp from './assets/images/selfHelpBooks/selfHelpCatageory.jpg';
import childrenBook1 from './assets/images/childrenbooks/childrenBook1.jpg';
import childrenBook2 from './assets/images/childrenbooks/childrenBook2.jpg';
import childrenBook3 from './assets/images/childrenbooks/childrenBook3.jpg';
import childrenBook4 from './assets/images/childrenbooks/childrenBook4.jpg';
import childrenBook5 from './assets/images/childrenbooks/childrenBook5.jpg';
import childrenBook6 from './assets/images/childrenbooks/childrenBook6.jpg';
import foodBook1 from './assets/images/foodbooks/foodBook1.jpg';
import foodBook2 from './assets/images/foodbooks/foodBook2.jpg';
import foodBook3 from './assets/images/foodbooks/foodBook3.jpg';
import foodBook4 from './assets/images/foodbooks/foodBook4.jpg';
import foodBook5 from './assets/images/foodbooks/foodBook5.jpg';
import foodBook6 from './assets/images/foodbooks/foodBook6.jpg';
import mindBook1 from './assets/images/mindBodyBooks/mindBook1.jpg';
import mindBook2 from './assets/images/mindBodyBooks/mindBook2.jpg';
import mindBook3 from './assets/images/mindBodyBooks/mindBook3.jpg';
import mindBook4 from './assets/images/mindBodyBooks/mindBook4.jpg';
import mindBook5 from './assets/images/mindBodyBooks/mindBook5.jpg';
import mindBook6 from './assets/images/mindBodyBooks/mindBook6.jpg';
import selfHelpBook1 from './assets/images/selfHelpBooks/selfHelpBook1.jpg';
import selfHelpBook2 from './assets/images/selfHelpBooks/selfHelpBook2.jpg';
import selfHelpBook3 from './assets/images/selfHelpBooks/selfHelpBook3.jpg';
import selfHelpBook4 from './assets/images/selfHelpBooks/selfHelpBook4.jpg';
import selfHelpBook5 from './assets/images/selfHelpBooks/selfHelpBook5.jpg';
import selfHelpBook6 from './assets/images/selfHelpBooks/selfHelpBook6.jpg';
import { RouteContext } from './context/BookCatRoute';
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookCatPage from './pages/BookCatageory/BookCatPage';
import BookPage from './pages/BookCatageory/BookPage';

function App() {
  const { routeVal } = useContext(RouteContext);
  const { bookRoute } = useContext(RouteContext);
  const bookCatageories = [
    {
      type: "Children's Book",
      typeVal: 'children-books',
      image: children,
      bgColor: '#333533',
      books: [
        {
          id: 'book1',
          name: "Rainbow Magic",
          image: childrenBook1,
          author: "Daisy Meadows",
          price: 4.36
        },
        {
          id: 'book2',
          name: "The Lunar Chronicles",
          image: childrenBook2,
          author: "Marissa Meyer",
          price: 8.29
        },
        {
          id: 'book3',
          name: "A To Z Mysteries",
          image: childrenBook3,
          author: "Ron Roy",
          price: 4.36
        },
        {
          id: 'book4',
          name: "A Court Of Mist And Fury",
          image: childrenBook4,
          author: "Sarah J. Maas",
          price: 5.01
        },
        {
          id: 'book5',
          name: "A Greedy Gulp Of Horrid Henry",
          image: childrenBook5,
          author: "Francesca Simon"
        },
        {
          id: 'book6',
          name: "A To Z Mysteries C The Canary Caper",
          image: childrenBook6,
          author: "Ron Roy",
          price: 12.09
        }
      ]
    },
    {
      type: "Cooking, Food and Drink",
      typeVal: 'cooking-and-food-books',
      image: cooking,
      bgColor: '#f6b93b',
      books: [
        {
          id: 'book1',
          name: "Livia's Kitchen",
          image: foodBook1,
          author: "Howard Hughes",
          price: 8.36
        },
        {
          id: 'book2',
          name: "Prawn Recipes",
          image: foodBook2,
          author: "Star Rasoi",
          price: 0.23
        },
        {
          id: 'book3',
          name: "Super Food Family",
          image: foodBook3,
          author: "Jamie Oliver",
          price: 9.03
        },
        {
          id: 'book4',
          name: "The Turmeric Cookbook",
          image: foodBook4,
          author: "Aster",
          price: 3.00
        },
        {
          id: 'book5',
          name: "100 Best Health Foods",
          image: foodBook5,
          author: "Parragon Books",
          price: 2.89
        },
        {
          id: 'book6',
          name: "30 Minute Vegetarian",
          image: foodBook6,
          author: "Joanna Farrow",
          price: 1.09
        }
      ]
    },
    {
      type: "Mind, Body & Spirit",
      typeVal: 'mind-body-spirit-books',
      image: mindBody,
      bgColor: '#8e44ad',
      books: [
        {
          id: 'book1',
          name: "4-Hour Body",
          image: mindBook1,
          author: "Timothy Ferriss",
          price: 14.36
        },
        {
          id: 'book2',
          name: "The Body Keeps The Score",
          image: mindBook2,
          author: "Bessel Van Der Kolk",
          price: 12.06
        },
        {
          id: 'book3',
          name: "A Year To Change Your Mind",
          image: mindBook3,
          author: "Dr. Lucy Maddox",
          price: 13.01
        },
        {
          id: 'book4',
          name: "Becoming The One",
          image: mindBook4,
          author: "Sheleana Aiyana",
          price: 15.43
        },
        {
          id: 'book5',
          name: "Believe And Achieve",
          image: mindBook5,
          author: "Chris Naylor",
          price: 7.39
        },
        {
          id: 'book6',
          name: "Beyond The Pleasure Principle",
          image: mindBook6,
          author: "Sigmund Freud",
          price: 10.21
        }
      ]
    },
    {
      type: "Self Help",
      typeVal: 'self-help-books',
      image: selfHelp,
      bgColor: '#2d98da',
      books: [
        {
          id: 'book1',
          name: "13 Things Mentally Strong People Dont Do",
          image: selfHelpBook1,
          author: "Amy Morin",
          price: 10.06
        },
        {
          id: 'book2',
          name: "Getting To Yes Negotiating An Agreement Without Giving In",
          image: selfHelpBook2,
          author: "Roger Fisher",
          price: 9.38
        },
        {
          id: 'book3',
          name: "Money Master The Game 7 Simple Steps To Financial Freedom",
          image: selfHelpBook3,
          author: "Tony Robbins",
          price: 4.28
        },
        {
          id: 'book4',
          name: "Quiet The Power Of Introverts",
          image: selfHelpBook4,
          author: "Susan Cain",
          price: 9.78
        },
        {
          id: 'book5',
          name: "Should I Tell The Truth?",
          image: selfHelpBook5,
          author: "Dr. Rob Yeung",
          price: 2.01
        },
        {
          id: 'book6',
          name: "The Power Of Habit",
          image: selfHelpBook6,
          author: "Charles Duhigg",
          price: 7.98
        }
      ]
    }
  ];
  let catBooks = bookCatageories.map((item) => {
    if (routeVal === item.typeVal) {
      return item.books;
    }
  })

  catBooks = catBooks.filter((element) => {
    return element !== undefined;
  });

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home booksArr={bookCatageories} />} />
          <Route path={`/catageories/${routeVal}`} element={<BookCatPage catBooks={catBooks} />} />
          <Route path={`/catageories/${routeVal}/${bookRoute}`} element={<BookPage catBooks={catBooks.flat()} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
