import {Col} from 'react-bootstrap'

const App = ({text, colSm, onClick}) => (
    <Col sm={colSm} className={"CardButtonCol"}>
        <div className={"CardButton"} onClick={onClick}>
            {text}
        </div>
    </Col>
);
export default App