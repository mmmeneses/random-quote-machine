import React, { useState, useEffect } from 'react';
// import React from 'react'
// import axios from 'axios'
import './App.css';


function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const quotes = [
    {
      text: ' Life is about making an impact, not making an income.',
      author: 'Kevin Kruse',
    },
    
    {
      text: 'Whatever the mind of man can conceive and believe, it can achieve.',
      author: 'Napoleon Hill',
    },

    {
      text: 'Strive not to be a success, but rather to be of value.',
      author: 'Albert Einstein',
    },

    {
      text: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
      author: 'Robert Frost',
    },

    {
      text: 'I attribute my success to this: I never gave or took any excuse.',
      author: 'Florence Nightingale',
    },

    {
      text: 'You miss 100% of the shots you don’t take.',
      author: 'Wayne Gretzky',
    },

    {
      text: 'I\'ve missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26 times I\'ve been trusted to take the game winning shot and missed. I\ve failed over and over and over again in my life. And that is why I succeed.',
      author: 'Michael Jordan',
    },

    {
      text: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
      author: 'Amelia Earhart',
    },

    {
      text: 'Every strike brings me closer to the next home run.',
      author: 'Babe Ruth',
    },

    {
      text: 'Definiteness of purpose is the starting point of all achievement.',
      author: 'W. Clement',
    },

    {
      text: 'Life isn\'t about getting and having, it\'s about giving and being.',
      author: 'Kevin Kruse',
    },

    {
      text: 'Life is what happens to you while you’re busy making other plans.',
      author: 'John Lennon',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },

    {
      text: '',
      author: '',
    },


  ]
  
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  useEffect(() => {
    const initialQuote = getRandomQuote();
    setQuote(initialQuote.text);
    setAuthor(initialQuote.author);
  }, [getRandomQuote]);

  const handleNewQuote = () => {
    const newQuote = getRandomQuote();
    setQuote(newQuote.text);
    setAuthor(newQuote.author);
  };

  // https://api.quotable.io/random

  /* const getRandomQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      return {
        text: response.data.content,
        author: response.data.author,
      };
    } catch (error) {
      console.error('Error fetching quote: ', error);
      return {
        text: 'An error occurred, Please try again.',
        author: 'Unknown',
      };
    }
  }; 

  const fetchQuote = () => {
    getRandomQuote().then((newQuote) => {
      setQuote(newQuote.text);
      setAuthor(newQuote.author);
    });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNewQuote = () => {
    fetchQuote();
  } */

  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">"{quote}"</p>
        <p id="author">- {author}</p>
        <button id="new-quote" onClick={handleNewQuote}>New Quote</button>
        <a
          id="tweet-quote"
          target="_top"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`}
          rel="noopener noreferrer"
        >
          Tweet Quote
        </a>
      </div>
    </div>
  );
}

export default App;
