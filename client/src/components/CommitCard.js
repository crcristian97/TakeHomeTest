import React from 'react'

export const CommitCard = ({ commit }) => {
  return (
    <div key={commit.sha} className="commit-card">
      <img className="avatar" src={commit.author.avatar_url} alt="avatar"/>
      <div className="commit-details">
        <div className="commit-body">
          <h3>User:</h3>            
          <h2 className="username">{commit.author.login}</h2>  
        </div>
        <div className="commit-body">
          <h3>Date the last Commits:</h3>                           
          <p className="date">{new Date(commit.commit.author.date).toLocaleString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            timeZoneName: "short",
          })}
          </p>
        </div>
        <div className="commit-body">
          <h3>More information:</h3>
          <a href={commit.author.url} target="_blank" rel="noopener noreferrer">
            {commit.author.url}
          </a>
          <p>If you need more information open console 😃</p>
        </div>
      </div>
    </div>
  );
}
