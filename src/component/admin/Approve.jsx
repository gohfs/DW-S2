import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Button, Modal } from 'react-bootstrap';
import Logo from '../image/icons/logoDw.png';
import User from '../../dummy/User';

import Payment1 from '../image/payment.png';

export default function Approve({ modalApprove, setModalApprove }) {
  const { index } = useParams();

  return (
    <>
      <Modal show={modalApprove} onHide={() => setModalApprove(false)}>
        <Container
          style={{
            marginLeft: '-15rem',
            width: '60rem',
            minHeight: '10rem',
            border: 'solid',
            borderWidth: '2px',
            borderColor: '#B7B7B7',
            backgroundColor: 'white',
          }}
        >
          <div className="d-flex justify-content-between" style={{ marginTop: '1rem', marginLeft: '2rem', marginRight: '4rem' }}>
            <img src={Logo} alt="" style={{ width: '15vw', height: '10vh' }} />
            <div className="">
              <h2>Booking</h2>
              <span>
                Saturday, <p>22 July 2020</p>
              </span>
            </div>
          </div>

          <div className="d-flex justify-content-between" style={{ marginLeft: '2rem' }}>
            <div>
              <h4>
                Jalan Jalan Gratis
                {/* {CardTour[index].title} */}
              </h4>
              <p>
                Ke Surga
                {/* {CardTour[index].country} */}
              </p>
              <p
                style={{
                  fontFamily: 'Avenir',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  lineHeight: '16px',
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#EC7A7A',
                  backgroundColor: '#EEE9D4',
                  width: '112px',
                }}
              >
                Waiting Payment
              </p>
            </div>
            <div className="d-flex">
              <div>
                <div>
                  <h6>Date Trip</h6>
                  <p>26 August 2020</p>
                </div>
                <div>
                  <h6>Accomodation</h6>
                  <p>Hotel 4 Nights</p>
                </div>
              </div>
              <div>
                <div>
                  <h6>Duration</h6>
                  <p>6 Days 4 Nights</p>
                </div>
                <div>
                  <h6>Transportation</h6>
                  <p>Qatar Airways</p>
                </div>
              </div>
            </div>
            <div style={{ marginRight: '2rem' }}>
              <img src={Payment1} alt="" />
              <p>Upload Payment Proof</p>
            </div>
          </div>
          <section style={{ width: '53rem', marginTop: '1rem', marginLeft: '2rem', marginBottom: '1rem' }}>
            <div className="d-flex justify-content-between" style={{ width: '46rem', borderBottom: 'solid', borderWidth: '2px' }}>
              <h5>No</h5>
              <h5>Full Name</h5>
              <h5>Gender</h5>
              <h5>Phone</h5>
              <h5 style={{ color: 'white' }}>_</h5>
            </div>
            <div className="d-flex justify-content-between" style={{ width: '40rem', borderBottom: 'solid', borderWidth: '2px' }}>
              <p>1</p>
              <p>Neymar Jr</p>
              <p>Male</p>
              <p>+1 64873 893</p>
            </div>
            <div className="float-end" style={{ marginTop: '-40px' }}>
              <h5>Qty : 1</h5>
              <p className="fw-bold" style={{ color: 'red' }}>
                Total : IDR. 12,398,000
              </p>
            </div>
            <div className="float-end" style={{ marginTop: '30px', marginRight: '-10rem' }}>
              <Button variant="danger" className="fw-bold text-white">
                Cancel
              </Button>
              <Button variant="success" className="ms-3 fw-bold text-white">
                Approve
              </Button>
            </div>
          </section>
          <div style={{ borderTop: 'solid', borderWeight: '1px', marginTop: '6rem', marginBottom: '2rem' }} />
        </Container>
      </Modal>
    </>
  );
}