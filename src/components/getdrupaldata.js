import React, { useEffect, useState, useCallback } from 'react';

//###### get data from drupal Api #######
function Getdrupaldata() {
  const [data, setData] = useState([]);

  const getData = useCallback(() => {
    fetch('http://localhost/contrib_drupal/web/node/2?_format=json').then(
      (result) => {
        result.json().then((resp) => {
          setData(resp || []);
        });
      }
    );
  }, []);

  useEffect(() => {
    getData();
    // console.log(NodeData);
  }, [getData]);
  return (
    <div className="drupalform">
      <h2 style={{ textAlign: 'center', color: 'blue' }}>
        Get drupal node data
      </h2>
      <table border="1">
        <thead>
          <tr>
            <td>User Id</td>
            <td>Id</td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((item) => {
            console.log(data);
            return (
              <tr>
                <td>{item}</td>
                <td>{JSON.stringify(data[item][0])}</td>
              </tr>
            );
          })}
          {/* {Object.keys(NodeData).map((item) => (
            <div>{JSON.stringify(NodeData['body'])}</div>
          ))} */}
        </tbody>
      </table>
    </div>
  );
}
export default Getdrupaldata;
