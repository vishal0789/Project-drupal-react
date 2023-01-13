import React from 'react';
import Container from 'react-bootstrap/Container';

function PostData() {
  return (
    <Container>
      <h3 style={{ textAlign: 'center', color: 'green' }}>
        Create Drupal Node using react form
      </h3>
      <form>
        <div class="form-row">
          <div class="col">
            <input type="text" class="form-control" placeholder="First-name" />
          </div>
          <br />
          <div class="col">
            <input type="text" class="form-control" placeholder="Last-name" />
          </div>
          <br />
          <div class="col">
            <input type="text" class="form-control" placeholder="Class" />
          </div>
        </div>
        <br />
        <button className="btn btn-info">Submit</button>
      </form>
    </Container>
  );
}
export default PostData;
