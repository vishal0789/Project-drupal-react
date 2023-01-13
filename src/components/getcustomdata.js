import NodeData from '../data/node.json';
//###### get data from custom json file #######
function Getcustomdata() {
  return (
    <div className="drupalform">
      <h2 style={{ textAlign: 'center', color: 'green' }}>
        Get data from custom json file
      </h2>
      <table border="1">
        <thead>
          <tr>
            <td>User ID</td>
            <td>Type</td>
            <td>ID</td>
          </tr>
        </thead>
        <tbody>
          {Object.keys(NodeData).map((item) => (
            <tr>
              <td>{item}</td>
              <td>{JSON.stringify(NodeData['type'][0].target_id)}</td>
              <td>{JSON.stringify(NodeData['nid'])}</td>
            </tr>
            // <div>{JSON.stringify(NodeData['title'])}</div>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Getcustomdata;
