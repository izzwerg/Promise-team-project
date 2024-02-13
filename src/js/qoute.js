import axios from 'axios';

export async function quoteOfDay(quoteBlock) {
  try {
    const keyForQuote = 'Quote-of-day';
    const newDate = getNewDate();

    const QuoteLocalData = localStorage.getItem(keyForQuote);

    if (QuoteLocalData) {
      const parsedQuoteLocalData = JSON.parse(QuoteLocalData);
      if (parsedQuoteLocalData.date === newDate) {
        renderQuote(parsedQuoteLocalData);
        return;
      }
    }
    const quoteData = await getQuote();
    const newLocalQuote = {
      date: newDate,
      author: quoteData.author,
      quote: quoteData.quote,
    };

    renderQuote(newLocalQuote);

    localStorage.setItem(keyForQuote, JSON.stringify(newLocalQuote));
  } catch (error) {
    console.log(error);
  }
}

function renderQuote({ author, quote }) {
  const blockWithQuote = {
    quoteText: document.querySelector('#quote-text'),
    quoteAuthor: document.querySelector('#quote-author'),
  };
  blockWithQuote.quoteAuthor.innerHTML = author;
  blockWithQuote.quoteText.innerHTML = quote;
}

function getNewDate() {
  const todaysDate = new Date();
  const day = String(todaysDate.getDate()).padStart(2, '0');
  const mounth = String(todaysDate.getMonth() + 1).padStart(2, '0');
  const year = todaysDate.getFullYear();
  const newDate = `${year}-${mounth}-${day}`;
  return newDate;
}

async function getQuote() {
  try {
    const QUOTE_API = 'https://energyflow.b.goit.study/api/quote';
    const response = await axios.get(QUOTE_API);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch quote from the API.');
  }
}
quoteOfDay();
