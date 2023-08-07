import { useState, useEffect } from "react";
function App() {

  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes`, {
          headers: { 'X-Api-Key': 'g0pznL+NR1xHhrn1FKVhAg==qIfV0zRQdgTtQU4t'},
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuotes(data);
      } catch (error) {
        console.error('Error: ', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-stone-500 h-screen p-2">
      <header className='text-stone-50 text-center'>
        <h1 className='text-4xl'>Thoughts in Transit</h1>
        <blockquote>{quotes.quote}</blockquote>
        <p>- {quotes.author}</p>
      </header>
    
      <section className="text-stone-50">
        <p>Date: 08-03-23</p>
        <p>*option to choose random question of the day via API*</p>
        <p>*option to select froma list a topic, then randomize*</p>
        <textarea id="message" rows="4" className="block m-2 p-2 w-5/6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        <p>3 things I'm grateful for today</p>
        <textarea id="message" rows="4" className="block m-2 p-2 w-5/6 h-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="I am grateful for..."></textarea>
        <textarea id="message" rows="4" className="block m-2 p-2 w-5/6 h-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="I am grateful for..."></textarea>
        <textarea id="message" rows="4" className="block m-2 p-2 w-5/6 h-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="I am grateful for..."></textarea>
        <p>More about my day...</p>
        <textarea id="message" rows="4" className="block m-2 p-2 w-5/6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Today I went to the beach and saw..."></textarea>
        <button type="button" className="text-white bg-stone-400 dark:bg-stone-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save Journal Entry</button>
      </section>
    </div>
  );
}

export default App;
