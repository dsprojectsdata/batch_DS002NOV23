import { Form, ListGroup, CloseButton } from 'react-bootstrap';

const ListComp = ({list, toggleCompleteVal, removeFn}) => {



    return (
        <ListGroup.Item className="list-item">
            <Form.Check
                className={list.isComplete ? "line-through" : ""}
                type={"checkbox"}
                // checked={list.isComplete}
                id={`check-${list.id}`}
                label={list.description}
                onClick={() => toggleCompleteVal(list.id)}
            />
            <CloseButton onClick={() => removeFn(list.id)} />
        </ListGroup.Item>
    )
}

export default ListComp;