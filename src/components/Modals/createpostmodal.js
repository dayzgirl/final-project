import "./createpostmodal.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
//import ( createPost ) from "../../services/postsService";
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";
import {useState} from "react";


function CreatePostModal() {
    const history = useHistory();
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [postData, setPostData] = useState({
        author: "",
        destination: "",
        imgUrl: "",
        story: "",
    });

    const handleClose = () => {
        setPostData({
            author: "",
            destination: "",
            imgUrl: "",
            story: "",
        });
        setShow(false);
    };

    const handleShow = () =>setShow(true);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPostData({
            ...postData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(postData);
        const data = {
            ...postData,
            title: "The Best Vacation Ever",
            published: false,
        };
        try {
            setLoading(true);
            //await CreatePostModal(data);
            toast.success("Post created successfully");
            history.push("/posts");
        } catch (error) {
            console.error(error);
            toast.error("Error creating post");
        } finally {
            setLoading(false);
            handleClose();
        }
    };

    return (
        <div className="create-post-modal">
            <Button variant="primary" onClick={handleShow}>
                Create Post
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                name="author"
                                placeholder="John Doe"
                                value={postData.author}
                                onChange={handleChange}
                                autoFocusrequired
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control
                                type="text"
                                name="destination"
                                placeholder="Paris, France"
                                value={postData.destination}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>    
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Destination</Form.Label>
                            <Form.Control
                                type="text"
                                name="imgUrl"
                                placeholder="https://..."
                                value={postData.imgUrl}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlID="exampleForm.ControlTextareal">
                            <Form.Label>Story</Form.Label>
                            <Form.Control
                                as="textarea"
                                type="text"
                                name="story"
                                value={postData.story}
                                onChange={handleChange}
                                required
                                rows={3}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CreatePostModal;