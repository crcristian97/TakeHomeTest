import { useEffect, useState } from 'react';
import './App.css'
import { CommitCard } from './components/CommitCard';
 // import Bootstrap spinner component

const Members = () => {
  const [data, setData] = useState({});


  //Here we call the fetch API
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("/members");
      const json = await response.json();
      setData(json);
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}, []);

  return (
    <div className="container mt-5">
    <h1 className="text-center mb-4">Github Commits</h1>
    <div className="row">
    {data.commits ? (
          data.commits.map((commit) => (
            <CommitCard key={commit.sha} commit={commit} />
          ))
        ): (
        <p>Loading...</p>
      )}
    </div>
  </div>
  );
};

export default Members;