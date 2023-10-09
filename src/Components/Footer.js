import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HeaderAndFooterExample() {
  return (
    <Card className="text-center">
      <Card.Header>Copyright cc</Card.Header>
      <Card.Body>
        <Card.Title>End of the Page</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
       
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default HeaderAndFooterExample;