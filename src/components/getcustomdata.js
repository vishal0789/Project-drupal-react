import NodeData from '../data/node.json';


//###### get data from custom json file #######
function Getcustomdata() {
  return (
    <div className="drupalform">
      <h2 style={{ textAlign: 'center', color: 'red' }}>Get json file data</h2>
      <table border="1">
        <thead>
          <tr>
            <td>User Id</td>
            <td>Id</td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(NodeData).map((item) => (
            <div>{JSON.stringify(NodeData['body'])}</div>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Getcustomdata;
