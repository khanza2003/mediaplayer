import React, { useState } from 'react';
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap';
import { saveVideoAPI } from '../services/allAPI';

const Add = ({ setAddResponseFromHome }) => { // Destructure here
  const [invalidYouTubeLink, setInvalidYouTubeLink] = useState(false);
  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    imgUrl: "",
    youtubeLink: ""
  });
  console.log(videoDetails);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractingEmbedlinkFromYoutubeLink = (userInputYoutubeLink) => {
    // Check and transform YouTube link to embed format
    if (userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")) {
      const videoId = userInputYoutubeLink.split("v=")[1].slice(0, 11);
      setInvalidYouTubeLink(false);
      setVideoDetails({ ...videoDetails, youtubeLink: `https://www.youtube.com/embed/${videoId}` }); // Fix template string
    } else {
      setInvalidYouTubeLink(true);
      setVideoDetails({ ...videoDetails, youtubeLink: "" });
    }
  };

  const handleUploadVideo = async () => {
    const { caption, imgUrl, youtubeLink } = videoDetails;
    if (caption && imgUrl && youtubeLink) {
      try {
        const result = await saveVideoAPI(videoDetails);
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          alert("Video uploaded successfully");
          handleClose();
          // Pass result to parent via callback
          setAddResponseFromHome(result);
        } else {
          console.log(result);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please fill out the form");
    }
  };

  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='border rounded p-3'>
            <FloatingLabel controlId="floatingCaption" label="Video-Caption">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, caption: e.target.value })} type="text" placeholder="Video-Caption" />
            </FloatingLabel>
            <FloatingLabel className='mt-2' controlId="floatingUrl" label="Video-Image Url">
              <Form.Control onChange={e => setVideoDetails({ ...videoDetails, imgUrl: e.target.value })} type="text" placeholder="Video-Image URL" />
            </FloatingLabel>
            <FloatingLabel className='mt-2' controlId="floatingLink" label="Video-Youtube Url">
              <Form.Control onChange={e => extractingEmbedlinkFromYoutubeLink(e.target.value)} type="text" placeholder="Video-Youtube URL" />
            </FloatingLabel>
            {invalidYouTubeLink &&
              <div className="text-danger fw-bolder mt-2">Invalid YouTube link. Please try another.</div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} className='bg-info' variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
