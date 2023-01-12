import React, { useEffect, useState, useCallback } from 'react';

function DrupalForm() {
  const [data, setData] = useState([]);

  const getData = useCallback(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5').then(
      (result) => {
        result.json().then((resp) => {
          setData(resp || []);
        });
      }
    );
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="drupalform">
      <h2 style={{ textAlign: 'center' }}>Get API data</h2>
      <table border="1">
        <thead>
          <tr>
            <td>User Id</td>
            <td>Id</td>
            <td>Title</td>
            <td>Body</td>
          </tr>
        </thead>

        {/* {data.map(item)=>} */}
        <tbody>
          {data.map(({ userId, id, title, body }, key) => {
            return (
              <tr key={key}>
                <td>{userId}</td>
                <td>{id}</td>
                <td>{title}</td>
                <td>{body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default DrupalForm;
